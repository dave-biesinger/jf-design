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
git switch -c warm-the-neutrals        # name it after the decision
./serve.sh
```

Edit tokens in the workbench, then **re-export both files** over
`tokens/tokens.css` and `tokens/tokens.json`, run **Compare to baseline**, and set
each touched token's review status.

```bash
git add -A && git commit -m "Warm the neutrals"
git push -u origin warm-the-neutrals
gh pr create --fill
```

The PR template's checklist is the review contract. Fill it honestly.

## The one rule
**One decision per PR** — "warm the neutrals", not a whole colour pass. Different
tokens merge cleanly. The same token edited twice is a genuine conflict, and it
wants a design conversation, not a text merge.
