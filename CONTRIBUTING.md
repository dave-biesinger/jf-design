# Getting set up

Start to finish for someone who has never opened this repo. Steps 1 and 2 need
Dave; the rest they do themselves.

## 1. Access (repo owner does this)
The repo is **private**. Invite them at
**Settings → Collaborators → Add people** — GitHub Free allows unlimited
collaborators on private repos, so this costs nothing. They accept by email.

## 2. Tools
macOS, via [Homebrew](https://brew.sh):

```bash
brew install git gh
```

`python3` is also required — `serve.sh` uses `python3 -m http.server`. A fresh Mac
only has Apple's stub at `/usr/bin/python3`, which pops an Xcode Command Line Tools
prompt the first time it runs; accepting that prompt is enough. `brew install python`
also works. **No Node, no npm, no build step** — the workbench is a single HTML file.

## 3. Sign in and clone

```bash
gh auth login --hostname github.com --git-protocol https --web
git clone https://github.com/dave-biesinger/jf-design.git
cd jf-design
```

`gh auth login` opens a browser and wires up git's credential helper, so nothing
needs to be pasted anywhere and future clones just work.

## 4. Turn on the guard rail (one command, do not skip)

```bash
git config core.hooksPath .githooks
```

`main` has **no server-side protection** — GitHub Free doesn't offer it on private
repos. The one-decision-per-PR rule is enforced only by a local pre-push hook, and
that hook does nothing until this command is run. A clone that skips it can push
straight to `main` with no warning.

## 5. Run it

```bash
./serve.sh          # http://localhost:8080/Token%20Workbench.dc.html
```

Optional port: `./serve.sh 9000`. Stop it with Ctrl-C.

**Do not open the `.dc.html` by double-clicking it.** Over `file://` the browser
blocks the `tokens/tokens.json` read, and the workbench falls back to built-in
defaults — you'd be reviewing values that aren't the committed baseline. The header
tells you which source it loaded; it should say *committed tokens/tokens.json*.
Check it every time.

Internet is also needed: about 20 client logos and product screens load from
`www.journeyfront.com`. `assets/screens/` holds the offline-safe substitutes.

## 6. Make a change

```bash
./serve.sh                                  # pulls latest, then serves
```

Edit tokens in the workbench. When you're happy, click **tokens.json** *and*
**tokens.css** in the toolbar — both download to `~/Downloads`. Then:

```bash
./propose-tokens.sh "warm the neutrals"     # name it after the decision
```

That script does the whole hand-off: picks up the export, checks it's a real
workbench file, shows you exactly which tokens changed, makes a branch, commits,
pushes, and opens the PR. It prints the PR link when it's done.

Review the PR, merge it, and everyone else picks it up on their next `./serve.sh`.

Useful flags:

```bash
./propose-tokens.sh "..." --dry-run         # show the changes, write nothing
./propose-tokens.sh "..." --from ~/Desktop  # if your browser saves elsewhere
```

### Why not just copy the files over by hand
Two ways that goes wrong silently, both of which the script rules out:

- **The browser numbers repeat downloads.** Your second export is
  `tokens (1).json`, your third is `tokens (2).json`. Copying `tokens.json`
  after a few rounds quietly commits your *first* attempt and throws away the
  rest. The script always takes the newest file.
- **`generated` changes on every export**, so a file with no real edits still
  looks changed in `git diff`. The script ignores that field and refuses to
  open an empty PR.

## Known quirks

**"Pull latest" in the workbench does not work here — this is expected.** It
fetches `raw.githubusercontent.com`, which is unauthenticated and returns 404
for a private repo. It falls back to your local file and tells you to git pull.
That's why `./serve.sh` pulls for you; git is the only real sync path.

**Never open `Token Workbench.dc.html` by double-clicking it.** Over `file://`
the browser blocks the `tokens.json` read and the workbench falls back to
built-in defaults — you'd be editing values that aren't the committed baseline.
The header names its source; it should say *committed tokens/tokens.json*.

**`assets/ds/` is the live copy.** `_ds/` is a byte-identical duplicate that
Claude Design maintains; the workbench only ever reads `assets/ds/`.

## The one rule
**One decision per PR** — "warm the neutrals", not a whole colour pass. Different
tokens merge cleanly. The same token edited twice is a genuine conflict, and it
wants a design conversation, not a text merge.
