#!/usr/bin/env bash
#
# Take the tokens.json / tokens.css the workbench just downloaded and turn them
# into a pull request. Replaces the hand-copy step, which is where edits get lost.
#
#   ./propose-tokens.sh "warm the neutrals"
#   ./propose-tokens.sh "warm the neutrals" --from ~/Desktop
#   ./propose-tokens.sh "warm the neutrals" --dry-run
#
set -euo pipefail
cd "$(dirname "$0")"

SRC="${HOME}/Downloads"
DRY=0
TITLE=""
while [ $# -gt 0 ]; do
  case "$1" in
    --from) SRC="$2"; shift 2 ;;
    --dry-run) DRY=1; shift ;;
    -h|--help) sed -n '2,10p' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    -*) echo "unknown flag: $1" >&2; exit 2 ;;
    *) TITLE="$1"; shift ;;
  esac
done

die() { echo "✗ $*" >&2; exit 1; }

[ -n "$TITLE" ] || die 'give the decision a name:  ./propose-tokens.sh "warm the neutrals"'
[ -d "$SRC" ] || die "no such folder: $SRC"
command -v gh >/dev/null || die "gh not installed — brew install gh"
gh auth status >/dev/null 2>&1 || die "not signed in — gh auth login"

# Refuse to bury unrelated work in the branch.
# Untracked files are harmless (only tokens/ is ever staged); modified *tracked*
# files would follow us onto the new branch, so those we refuse.
if [ -n "$(git status --porcelain --untracked-files=no -- . ':!tokens')" ]; then
  git status --short --untracked-files=no -- . ':!tokens' >&2
  die "tracked files are modified outside tokens/ — commit or stash them first"
fi

# The browser saves repeat downloads as "tokens (1).json". Always take the newest
# match, never the bare name, or you silently re-commit a stale export.
newest() {
  /usr/bin/find "$SRC" -maxdepth 1 -type f -name "$1" -print0 2>/dev/null \
    | xargs -0 /bin/ls -t 2>/dev/null | head -1
}
JSON="$(newest 'tokens*.json')"
CSS="$(newest 'tokens*.css')"
[ -n "$JSON" ] || die "no tokens*.json found in $SRC — hit the tokens.json button in the workbench first"

echo "→ json: $JSON"
[ -n "$CSS" ] && echo "→ css : $CSS" || echo "⚠ no tokens*.css found — committing json only (re-export the css too if you changed values)"

# Validate + summarise the change before touching git. The helper always exits 0
# and reports its outcome on the first line (ERR / NOOP / COUNTS), so a real
# parse error can never be mistaken for "nothing changed".
SUMMARY="$(python3 - "$JSON" "tokens/tokens.json" <<'PYEOF'
import json,sys
newp,curp=sys.argv[1],sys.argv[2]
def bail(m):
    print("ERR "+m); sys.exit(0)
try:
    new=json.load(open(newp,encoding='utf-8'))
except Exception as e:
    bail("that file is not valid JSON (%s). Wrong file, or a half-finished download?" % e)
if not isinstance(new,dict):
    bail("that JSON is not an object - wrong file?")
nt=new.get('tokens') or {}
cur=json.load(open(curp,encoding='utf-8')); ct=cur.get('tokens') or {}
if not nt:
    bail("no 'tokens' map in that file - it is not a workbench export.")
added,removed=sorted(set(nt)-set(ct)),sorted(set(ct)-set(nt))
both=sorted(set(nt)&set(ct))
vals=[(k,ct[k].get('value'),nt[k].get('value')) for k in both
      if str(ct[k].get('value'))!=str(nt[k].get('value'))]
revs=[(k,ct[k].get('review'),nt[k].get('review')) for k in both
      if ct[k].get('review')!=nt[k].get('review')]
if not (added or removed or vals or revs):
    print("NOOP"); sys.exit(0)
rows=[]
for k,a,b in vals: rows.append("| `%s` | `%s` | `%s` | value |" % (k,a,b))
for k,a,b in revs: rows.append("| `%s` | %s | %s | review |" % (k,a,b))
for k in added:    rows.append("| `%s` | \u2014 | `%s` | added |" % (k,nt[k].get('value')))
for k in removed:  rows.append("| `%s` | `%s` | \u2014 | removed |" % (k,ct[k].get('value')))
print("COUNTS %d %d %d %d" % (len(vals),len(revs),len(added),len(removed)))
print("\n".join(rows))
PYEOF
)"

HEAD1="$(printf '%s\n' "$SUMMARY" | head -1)"
case "$HEAD1" in
  "ERR "*) die "${HEAD1#ERR }" ;;
  NOOP)    die "no token changes vs the committed baseline - nothing to propose.
   Export again after making the edit, or check you grabbed the newest file
   from $SRC (the browser numbers repeats: 'tokens (1).json')." ;;
  "COUNTS "*) : ;;
  *) die "could not read the export (unexpected: $HEAD1)" ;;
esac

COUNTS="$HEAD1"
TABLE="$(printf '%s\n' "$SUMMARY" | tail -n +2)"
set -- $COUNTS
echo "→ $2 value change(s), $3 review change(s), $4 added, $5 removed"
printf '%s\n' "$TABLE" | sed 's/^/   /'

if [ "$DRY" = 1 ]; then echo "dry run — nothing written"; exit 0; fi

SLUG="$(printf '%s' "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]\{1,\}/-/g; s/^-//; s/-$//' | cut -c1-50)"
BRANCH="$SLUG"
git fetch -q origin
git switch -q -c "$BRANCH" origin/main 2>/dev/null || die "branch '$BRANCH' already exists — pick another name"

cp "$JSON" tokens/tokens.json
[ -n "$CSS" ] && cp "$CSS" tokens/tokens.css

git add tokens/
git commit -q -m "$TITLE" -m "$(printf 'Exported from the token workbench.\n\n| Token | Before | After | Kind |\n| --- | --- | --- | --- |\n%s\n' "$TABLE")"
git push -q -u origin "$BRANCH"

BODY="$(printf '## The decision\n\n%s\n\n## Tokens changed\n\n| Token | Before | After | Kind |\n| --- | --- | --- | --- |\n%s\n\n---\nOpened by `propose-tokens.sh` from the workbench export.\n' "$TITLE" "$TABLE")"
URL="$(gh pr create --base main --head "$BRANCH" --title "$TITLE" --body "$BODY")"
git switch -q main
echo "✓ $URL"
echo "  review and merge it there; then: git pull"
