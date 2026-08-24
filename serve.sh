#!/usr/bin/env bash
#
# Serve the workbench, on the latest merged tokens.
#
# Two things this handles that opening the file directly does not:
#   1. file:// blocks the tokens/tokens.json read, so the workbench silently
#      falls back to built-in defaults — you would be reviewing the wrong values.
#   2. the workbench's "Pull latest" button hits raw.githubusercontent.com, which
#      404s on a private repo. Git is the only real sync path, so we pull here.
#
#   ./serve.sh              # pull, then serve on 8080
#   ./serve.sh 9000         # ... on 9000
#   ./serve.sh --no-pull    # serve exactly what is on disk
#
set -uo pipefail
cd "$(dirname "$0")"

PORT=8080
PULL=1
for a in "$@"; do
  case "$a" in
    --no-pull) PULL=0 ;;
    -h|--help) sed -n '2,12p' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    [0-9]*) PORT="$a" ;;
    *) echo "unknown argument: $a" >&2; exit 2 ;;
  esac
done

if [ "$PULL" = 1 ]; then
  # Never destroy uncommitted token work to get the latest.
  if [ -n "$(git status --porcelain -- tokens 2>/dev/null)" ]; then
    echo "⚠ tokens/ has uncommitted edits — skipping pull so nothing is lost."
    echo "  Propose them with:  ./propose-tokens.sh \"what you decided\""
  elif ! git rev-parse --git-dir >/dev/null 2>&1; then
    :
  else
    BR="$(git rev-parse --abbrev-ref HEAD)"
    if ! git rev-parse --abbrev-ref "@{upstream}" >/dev/null 2>&1; then
      echo "→ '$BR' tracks nothing upstream — serving what is on disk."
    else
      echo "→ pulling latest tokens…"
      if git pull --ff-only --quiet 2>/dev/null; then
        echo "✓ up to date with $(git rev-parse --abbrev-ref '@{upstream}')"
      elif ! git ls-remote --exit-code origin >/dev/null 2>&1; then
        echo "⚠ offline — serving what is on disk; it may be behind what others merged."
      else
        echo "⚠ '$BR' has diverged from its upstream and cannot fast-forward."
        echo "  Sort that out with git before trusting these values."
      fi
    fi
  fi
fi

# Don't die on a busy port; step to the next free one and say so.
port_free() { ! (exec 6<>/dev/tcp/127.0.0.1/"$1") 2>/dev/null; }
START="$PORT"
for _ in 1 2 3 4 5 6 7 8 9 10; do
  port_free "$PORT" && break
  PORT=$((PORT+1))
done
[ "$PORT" != "$START" ] && echo "⚠ port $START busy — using $PORT"

echo
echo "  Workbench:  http://localhost:${PORT}/Token%20Workbench.dc.html"
echo "  Ctrl-C to stop."
echo
echo "  The header should read 'committed tokens/tokens.json'. If it says"
echo "  'built-in defaults', you are NOT looking at the committed baseline."
echo
exec python3 -m http.server "$PORT" --bind 127.0.0.1
