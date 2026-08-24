# Design system — token workbench

The token set, with a live cascade preview across 12 surfaces. The baseline is the
real brand: colour, radii, spacing, shadows, motion and gradients verified against the
Journeyfront design system (vendored in `assets/ds/`); type and layout measured off
journeyfront.com; logos, photography, dot-arch graphics and product screens are the
actual assets.

## Working from GitHub (multi-user)
The repo is self-contained — clone it, point a Claude design workspace at it, or open
the file over any HTTP server, and you get this exact workbench. Nothing is
server-side and there are no project-specific dependencies.

```bash
git clone https://github.com/dave-biesinger/jf-design.git
cd jf-design
./serve.sh          # http://localhost:8080/Token%20Workbench.dc.html
```

**The loop:** `./serve.sh` (pulls, serves) → edit → export both token files →
`./propose-tokens.sh "the decision"` (branches, commits, opens the PR) → merge →
everyone gets it on their next `./serve.sh`.

1. **Pull.** The workbench reads `tokens/tokens.json` on load and uses it as the
   baseline. The header shows which source it got: *committed tokens/tokens.json* or
   *built-in defaults*. (Opening the file straight off disk with `file://` blocks the
   read, so it falls back to the built-in defaults and says so — serve it over http.)
2. **Edit.** Change any token, or flip a preset. All 28 specimens re-render live.
   Approve or reject each token as you go.
3. **Export.** `tokens.json` writes one token per key in a fixed order, with value,
   intent, baseline, changed flag and review status — so a diff is line-level and
   readable. Save it over `tokens/tokens.json`.
4. **Push, PR, merge.** Different tokens merge cleanly. The same token edited twice is
   a real conflict — a design decision, not a text problem. After merging, pull and
   hit **Compare to baseline**: semantic clashes (a tint and a text colour that each
   looked fine alone) only show up on the specimens.

Keep PRs to one decision each ("warm the neutrals"), not a whole colour pass.

New to the repo? **[CONTRIBUTING.md](CONTRIBUTING.md)** is the full setup walkthrough.

### Enabling the guard rail
`main` has no server-side protection (GitHub Free gives private repos none), so the
PR rule is enforced client-side by a hook. Run this once per clone:

```bash
git config core.hooksPath .githooks
```

It refuses a direct push to `main` and points you at the branch-and-PR flow.
`--no-verify` bypasses it, and it does nothing in a clone that hasn't run the
command above — it stops accidents, not intent.


## Files
- `Token Workbench.dc.html` — the workbench. Open it in a browser. Left: the token
  list. Right: 12 sample surfaces that re-render from those tokens.
- `assets/ds/` — vendored copy of the design-system stylesheets and bundle that style
  the workbench chrome. Vendored on purpose: the file has no dependency on any
  particular workspace having a design system bound.
- `assets/graphics/` — the brand dot-arch texture (pastel / blue / white variants).
- `assets/logos/` — `logo-color.svg`, `logo-white.svg`, `favicon.svg` (881×174 lockups,
  158×158 mark). Which file each surface uses is itself a token.
- `tokens/tokens.css` — the committed baseline. Regenerate from the
  workbench's **tokens.css** button.
- `tokens/tokens.json` — same values with intent, usage, review status and
  baseline/changed flags. This is the review artifact.
- `serve.sh` — pulls the latest merged tokens, then serves the folder over http
  (`file://` blocks the `tokens.json` read). Optional port: `./serve.sh 9000`.
- `propose-tokens.sh` — turns a workbench export into a pull request:
  `./propose-tokens.sh "warm the neutrals"`. Use it instead of copying files out
  of `~/Downloads` by hand.
- `.github/pull_request_template.md` — the one-decision-per-PR checklist.

## Specimens (28), grouped by type
- **Web** — landing hero, full marketing page, pricing page, article/resource page,
  platform page (lazy river — alternating media/text modules), BPO solutions page
  (grid modules + comparison table), and a **module detail board** that shows every
  web module at readable scale: nav, section header + 3-up cards, media+text unit,
  stat band, capability marquee, testimonial, form, footer
- **Product** — recruiter dashboard, candidate list, screening plan setup
  (chrome rebuilt from real app screenshots: dark top nav, pale-blue breadcrumb bar,
  right-aligned page tabs, Bright-Blue table headers, score badges)
- **Presentations** — title slide, data slide, product demo slide, plus two rebuilt
  from the real deck: the production title slide (product-screen fan over brand blue)
  and the three-column BPO Experience & Expertise content slide
- **Collateral** — PDF guide page, email, business card
- **Social** — 1080 square post, LinkedIn feed post (neutral feed chrome on purpose;
  only the avatar and the card image carry tokens)
- **Assets** — QA boards at readable scale: photo & screen treatments, icon
  treatments, dot-field tuning, and the hero composition recipe
- **Swag** — booth panel, t-shirt, mug, tote

A row of section buttons at the top of the canvas jumps to Web, Product,
Presentations, Collateral, Social or Swag. Click any specimen to inspect it full size. The token panel stays live while zoomed,
so an edit cascades into the enlarged specimen. Esc or a click closes it.

## GitHub (dave-biesinger/jf-design)
This folder IS the repo. Push everything at the root: `Token Workbench.dc.html`,
`support.js`, `tokens/`, `assets/`, `README.md`, `github.md`. Optional:
`uploads/` (raw source material — brand PDF, original logo files, screenshots)
and `_ds/` (Claude Design's design-system binding cache); neither is needed to
run the workbench. `design-notes/` is working documentation.

Pull-ready: anyone who connects Claude Design to this repo (or clones it) and
opens `Token Workbench.dc.html` gets the identical live workbench — token
panel, presets, compare, all specimens and portfolios. Everything resolves
inside the folder; the only network dependencies are Lato/Font Awesome (CDN)
and the live-site imagery noted below.

The loop, from inside the workbench: **Pull latest** fetches
`tokens/tokens.json` from GitHub raw (`main`) and applies it as the live
baseline — no reload needed (falls back to the local committed copy when the
repo is private or offline; then `git pull` your clone instead). **Push
update** exports your current tokens.json and opens the repo's
`tokens/` upload page — drop the file and commit in GitHub's UI (the page
itself holds no credentials, so the commit happens on github.com). Or manually:
pull → play → **Export tokens.json** → replace `tokens/tokens.json` → commit
and push. Everyone else sees your baseline on
their next pull. Exports write one token per key in a fixed order, so two
people editing different tokens merge cleanly in Git; same-token edits
conflict per-token, which is the conflict you want to see.

## How to use it in the refinement phase
1. Pick a preset (Baseline / Navy-led / Airy) to see the whole system move at
   once, or edit any single token for precision.
2. Turn on **Compare to baseline** — every specimen renders twice, before and after.
3. Approve or reject each token in its detail panel.
4. Export `tokens.json`, commit it, open a PR. The diff is the decision record.

## Icon tokens & the Font Awesome picker
Icons are semantic tokens, not hard-coded glyphs: `--t-icon-automation`,
`--t-icon-assessments`, `--t-icon-sourcing`, `--t-icon-performance`,
`--t-icon-savings`, `--t-icon-closedloop`, `--t-icon-quote`, `--t-icon-check`,
`--t-icon-search`, `--t-icon-settings`, `--t-icon-help`, plus `--t-icon-interviews`,
`--t-icon-analytics` and `--t-icon-dashboard` (defined, not yet placed).

Open one and you get the current glyph at size, a **search box across a ~175-icon
Font Awesome catalogue** (searchable by name *and* by concept — "automation",
"retention", "video", "healthcare"), and a click-to-set grid. Setting it re-renders
every specimen that uses that concept. `--t-icon-weight` switches the whole set
between solid and regular.

## Asset libraries — photography, design elements, product screens
Three groups in the panel carry their own **library**, shown as a thumbnail strip
under the group's guidance:

- **Photography — people** (57 assets) — cut-outs (transparent PNG) and full-frame
  person shots from the 2025 Brand Guide, classified by eye: anything with a person
  as the subject lives here.
- **Photography — backgrounds** (9 assets) — true settings only: office scenes,
  cubicle floors, call-centre and warehouse aerials. Rendered duotone behind
  content, never the subject. (Re-encoded to ~1600px JPEG for a Git-friendly repo.)
  Was: **Photography** (10 assets) — cut-outs and full-frame workplace photography, plus
  `--t-photo-treatment` (duotone / soft / none), the rule that decides how every
  background photo is rendered.
- **Design elements** (3) — the dot arch in its three baked colours, with
  `--t-graphic-dots-opacity` and `--t-graphic-dots-size`.
- **Product images** (22 assets) — individual product-UI images ONLY (no people,
  no design elements); brand-guide panels carry their real names (funnel dashboard,
  candidate scorecard, hiring steps, …).
- **Compositions** (5 assets + the recipe tokens) — approved combinations of
  background + design element + person + product (device fan, phone + dots,
  video review with person, …). Rule of thumb: a person or a dot field in the
  image makes it a composition, not a product image.
  Was: **Compositions** (13 product screens) — `--t-comp-layout` re-stages the hero recipe
  (person-right / person-left / product-only / person-only), `--t-comp-screen` picks the
  product image, `--t-comp-overlay` sets the blue multiply, `--t-comp-person-scale`
  the height of the cut-out.

**Add** takes a repo path or an https:// URL. **Remove** is the ✕ on a thumbnail; it is
refused while a token still points at that asset (point the token elsewhere first) and
for the last asset in a library. Libraries travel in `tokens.json` under `libraries`,
so a teammate who pulls gets the same set.

## Usage guidelines
Every token group carries a line of usage guidance — what the group is for, and what
breaks when you change it. Hit **Edit** to rewrite it in place; the text is yours, not
mine. Guidance travels in `tokens.json` under `guidelines`, so it reviews and merges
alongside the values it describes.

## Per-token revert
Every token's detail panel shows **Revert to `<baseline value>`** whenever it differs
from the committed baseline — so you can push a colour or icon around, see it on the
specimens, and undo just that one thing without resetting the rest of your session.
The universal **Reset** is still there for starting over.

## Layout & module tokens
Web layout is not hand-set. Two groups drive it, and both are swappable:
- **Layout** — `--t-layout-max` (container), `--t-layout-gutter`, `--t-section-py`
  (vertical rhythm), `--t-module-gap`, `--t-content-measure`, `--t-head-align`
  (left/center), and `--t-lazy-flip` — `row-reverse` gives the lazy river,
  `row` stacks every module the same way.
- **Modules** — `--t-module-pad`, `--t-module-radius`, `--t-module-surface`,
  `--t-module-border-w`, `--t-module-shadow`, `--t-media-ratio`, `--t-eyebrow-case`.

The baseline layout runs compact (56px section rhythm, 1040px container, 20px
module padding); the **Airy** preset restores the generous, site-like rhythm
(144px sections, 1240px container, shadowless outlined modules).

## Conventions
- Prefix: `--t-*`. Raw ramps hold literal values; semantic tokens are aliases only
  (`--t-primary: var(--t-brand-500)`) — product code should reference semantics.
- Each token carries its intent, where it is used, a Figma/dev mapping and a contrast
  reading against surface and dark surface.
- Gradients are flagged restricted: never behind headers or body type; the full
  magenta-blue-green ramp needs marketing approval.
- `--t-brand-700` (`#1A7195`) is the one colour not on the sheet — it is the hover /
  pressed blue from the interaction spec.

## Baseline ↔ design system (verified)
Every value was diffed against the vendored design-system tokens
(`assets/ds/tokens/*.css`). Exact matches: all colour ramps and semantics, radii,
the 4px spacing steps, motion durations, gradients, border widths.

Corrected in the QA pass (were drift):
- **Ink** `--t-neutral-900` = `#373232` — was mistyped `#313232`.
- **Pastel steps added** — `--t-brand-50 #E8F6FC`, `--t-positive-50 #E3FCF6`,
  `--t-caution-50 #F2EDFD`. `--t-surface-tint` and `--t-primary-tint` now point at
  brand-50: Pastel Blue is the brand's default wash (`--jf-surface-tint`), and the
  old `#B1E0F5` washes read heavier than the live app.
- **Shadows re-tinted** — cool Dark-Blue `rgba(17,70,91,…)` per the brand's
  "never neutral grey" shadow rule (was `rgba(35,42,49,…)`).
- **Ease** = `cubic-bezier(.33,1,.68,1)` to match `--jf-ease`.

Deliberately site-tuned, kept and documented in each token's mapping label:
the type scale (display 64 / h1 38 / h2 26 / h3 19 vs the ds marketing scale) and
the whole Layout group — both measured off journeyfront.com, where the ds has no
direct equivalent.

Remote dependencies: client logos and several product screens load from
journeyfront.com (HubSpot CDN) and need internet; `assets/screens/` holds the
offline-safe set, and every remote asset is swappable from its library.

## Product-specimen findings worth a decision
- Score badges map to the green ramp (deep green / mint / pale mint). **Decided
  2026-08-24:** `KO` and `Rejected` stay on caution magenta `--t-caution-500`
  (`#D62CFF`) — no red is being added to the palette. The live app's true red is a
  known divergence, and the app should move to magenta rather than the system
  growing a red. `--t-caution-500` is marked `approved` in `tokens.json`; it is the
  first token to leave `open`.

## Not in this stub yet
Exported PDF and PPTX samples, and photo-real swag mockups (the t-shirt, mug and
tote are flat vector stand-ins).
