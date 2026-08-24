# Journeyfront Design System

A complete, code-first design system for **Journeyfront** — the intelligent hiring platform. It packages the brand's foundations (color, type, spacing, motion), reusable React UI components, two full product UI kits, and slide templates, so any team can produce on-brand Journeyfront interfaces and assets.

> **What is Journeyfront?** An applicant tracking system (ATS) with **predictive assessments built in**, made for high-volume hiring — contact centers / BPO, healthcare staffing, retail, logistics. Teams source, screen, assess, interview, offer and hire in one place, then close the loop by feeding post-hire outcomes back into the models. The pitch: *"Stop guessing. Start predicting."* Operating since 2017 across 50+ countries; customers see ~29% lower 90-day turnover.

## Sources (the materials this system was built from)
- **Figma:** `2026 Brand Book (Journeyfront).fig` — the official brand book (cover, logo guidelines, color palette, typography, icons/graphics/assets, photography). All color, type and graphic values here are transcribed from it. *(Attached as a file; not a shared link.)*
- **Figma:** `2025 Brand Guide.fig` — the working brand guide. Source of the **organic dot arch** (extracted verbatim, 616 dots), the **40 concept icons** (`assets/icons/`), the **brand photography** (cutouts + full-frame, `assets/photography/`), the **real product-screen images** (`assets/screens/`), and the iconography directive to use Font Awesome for UI.
- **Logo asset:** `uploads/250406-Journeyfront-Logo-Color-Large.png` (8K transparent PNG) — the source for the logo variants in `assets/logos/`.
- **Public reference:** journeyfront.com (platform, BPO, customers pages) — used only to confirm product context, voice and proof points for the UI kits.
- **Real-world specimen:** `uploads/Journeyfront - BPO Hiring Guide - Screening Methods.pdf` — a produced brand asset. It shows the system *in practice* and drove three refinements: dots **fade off photo edges** (not floating), **Bright-Blue table headers** with white labels (use `Table headerTone="brand"`), and tinted **`Callout`** boxes with a lined Bright-Blue icon + ALL-CAPS heading. Section headings in long-form pieces lean **Dark Blue `#11465B`**, with Bright Blue reserved for accents, table headers and page numbers.

---

## Content fundamentals (voice & copy)

The brand book sums up the voice: *"direct, authoritative, and authentic. Built by people, for people. Professional yet accessible — trusted industry experts who educate through data-driven insights."*

- **Person:** address the reader as **"you"** / **"your team"**; the company speaks as **"we."**
- **Tone:** confident and outcome-led, never hype. Short, declarative sentences. Parallel imperative pairs are a signature: *"Hire faster. Hire smarter. Get results."* · *"Stop guessing. Start predicting."*
- **Positioning / differentiator:** ATS + assessments in **one system** — and everything that unlocks: automation triggered by candidate scores and actions, a closed loop that learns from post-hire outcomes, fraud detection. Frame it as *"Most ATSs give you tools to manage the process; Journeyfront executes it, learns from it, and makes every future hire better than the last."* and *"built as an assessment company first — predictive analytics are core architecture, not a bolt-on."* The six platform pillars: **Source & Screen · Assess & Predict · Automate & Accelerate · Organize & Manage · Interview & Decide · Monitor & Improve**. Always pair "assessments" with the automation they power — never present Journeyfront as assessments-only or ATS-only.
- **BPO vocabulary (journeyfront.com/bpo):** "purpose-built for BPO hiring"; the four challenges it answers — volume hiring on a deadline, balancing speed & quality, multi-client & geo complexity, class-based hiring at scale; "client-specific hiring recipes"; "goodbye, spreadsheets"; fraud detection built in. BPO proof set: 71% hiring efficiency · 68% faster time-to-hire · 29% less new-hire turnover · 33% performance lift; Everise 12 days → same-day; 50+ BPOs, 100,000+ agent hires annually. Prediction line: *"The best time to predict a bad hire is before it happens. Now you can."*
- **Lead with proof.** Real numbers over adjectives — *"29% average turnover reduction," "12 days → same-day," "$32M+ annual savings," "92% prediction accuracy."*
- **Casing:** sentence case for body and most headlines; Title Case for product nav and proper features (Source & Screen, Assess & Predict). Avoid ALL CAPS except short eyebrows/overlines.
- **Vocabulary:** quality of hire, predicted fit, retention, hiring class / cohort, success profile, validity, bias mitigation, closed loop, high-volume, BPO.
- **No emoji** in product or marketing copy. No exclamation-heavy hype. Don't overpromise — pair every claim with data.
- **Example microcopy:** primary CTA *"Book a demo"*; empty state *"No candidates yet — post this role to 200+ boards and applicants will appear here."*; assessment framing *"Resumes tell you what candidates have done. Journeyfront tells you what they'll do in your role."*; hero lines *"Stop drowning in applications."* · *"The best time to predict a bad hire is before it happens. Now you can."* · *"Hire faster. Hire smarter. Get results."*; automation framing *"The more we automate, the more time recruiters spend with people instead of systems."*

---

## Visual foundations

**Color.** The system is built on one hero color — **Bright Blue `#3CB1E5`** (primary, accents, links) — with **Dark Grey `#373232`** as the primary text/base grey and **Dark Blue `#11465B`** for deep surfaces. Three 5-step secondary ramps extend it: **Blue**, **Green** (success/positive) and **Pink/Magenta** (AI accent + caution). A 5-step **grayscale** ramp is used sparingly to complement, never to lead. **The brand has no red** — magenta `#D62CFF` carries warning/caution (it's the color the brand book uses for "do not" rules and the ✕ mark). On Dark Blue surfaces, emphasis text is **Bright Blue or white — never green** (green reads off-brand on navy; reserve it for success accents on light surfaces). Pastel Blue `#E8F6FC` is the default tinted background. See `tokens/colors.css`; specimens under the **Colors** group.

**Gradients** (`Full` pink→blue→green, `AI` pink→blue, `Secondary` blue→green) are reserved — marketing approval, used sparingly, and **never behind type**. They appear as thin accent rules and large faded backdrops, not fills under text.

**Type.** **Lato** is the official family (Bold for headlines & buttons, Regular for body; Black/Semibold/Light for emphasis by judgement). **Arial** is the declared fallback. Display headlines are big and tight (Bold, tracking ≈ −0.02em, line-height as low as 0.91 at cover sizes). Body is Regular at 1.5 line-height. **Headings use Dark Blue `#11465B`** — confirmed by the BPO Hiring Guide and now baked into the `.jf-h1–h4` helpers, the `--jf-text-heading` token, `CardHeader`, the slide templates and both UI kits (Bright Blue is reserved for accents, table headers and page numbers; near-black `--jf-ink` is body text). See `tokens/typography.css`.

**Spacing & layout.** 4px base grid; generous whitespace ("let it breathe"). The brand book uses a wide page margin (115px at 1920) and centers content with clear hierarchy. Tokens in `tokens/spacing.css`.

**Corners.** The **signature radius is 20px** (`--jf-radius-lg`) — used on cards, pills, swatches and image frames throughout the brand book. Controls use 6–10px; chips/badges are fully pill.

**Cards.** White surface, hairline `#E5E5E5` border, 20px radius, and a **soft, cool shadow** tinted with Dark Blue (`rgba(17,70,91,…)`) — never a hard or neutral-grey drop shadow. Dark sections use Dark Blue fills with white text.

**Borders & shadows.** Hairlines are `#E5E5E5`; stronger dividers `#B7B7B7`. The brand book itself favors **3px solid outlines** for logo clear-space and structure. Shadow scale `xs→xl` in `tokens/effects.css`, all Dark-Blue-tinted; primary CTAs get a blue glow.

**Backgrounds & texture.** Mostly clean white and Pastel Blue. The brand's signature texture is a single **organic dot arch** (`assets/graphics/dot-arch.svg`) — a field of ~600 dots whose *size* swells into a sweeping band, echoing the logomark's "digital path." **This one organic pattern replaces the old geometric halftone shapes (square / circle / triangle), which are retired — do not use them.** Two rules govern how it's used:
- **It never shows a hard edge.** The dots dissolve to nothing on all four sides (baked opacity falloff), so the field always melts into the surface — never a visible rectangle. If you ever see the boundary of the dot image, it's wrong.
- **It's a connective layer, not a corner sticker.** Sit it *behind and between* people (photos, cut-outs) and the technology (product UI, a `FitScore`, a stat card) so it visually links the human and the platform. Place it low in the stack at ~0.4–0.5 opacity spanning the elements it connects (see the website hero). Used purely decoratively it can also bleed softly off a page/photo corner.

Ships in three baked colors for reliable rendering (slides, PDF, PPTX): `dot-arch.svg` (Pastel Blue, for white surfaces), `dot-arch-blue.svg` (Bright Blue, for pastel), `dot-arch-white.svg` (for blue/dark). Flip/rotate to change the sweep direction. Also in the family: a **fade-to-white** gradient overlay used over photography. Tinted **callout boxes** (Pastel-Blue, 20px radius) with a lined Bright-Blue icon and an ALL-CAPS heading are a recurring layout device → use the `Callout` component.

**Imagery / photography.** Real, warm stock photography of contact-center / BPO / workplace settings — people-centric, optimistic, professional. **Foreground people stay full-color** (cut-outs with a warm wardrobe pop against the blues). **Background photos are a hint, never the subject:** render them as a Bright-Blue duotone with detail obscured — `filter: grayscale(1) brightness(1.25) contrast(0.75) blur(3px)` on the image (+ `scale(1.06)` to hide blur edges), then a `var(--jf-blue)` overlay at `mix-blend-mode: multiply, opacity 0.85` — so the setting reads as an abstract blue suggestion (see the website hero / landing template). Layer the white dot arch between the tinted background and the person. Photos sit in 20px-radius frames or bleed cleanly into white.

**Motion.** Restrained and confident — short fades and settles (120–320ms) on an ease-out curve (`--jf-ease`). Hover/press are subtle. **No bouncy or decorative looping animation.**

**Interaction states.**
- *Hover:* primary buttons darken to `#1A7195`; secondary/ghost pick up a Pastel-Blue wash; cards lift 2px with a larger shadow.
- *Press:* a 0.5px nudge and the deepest blue `#11465B`.
- *Focus:* a 3px Bright-Blue ring at 40% (`--jf-ring`) — always visible for accessibility.
- *Selected:* Pastel-Blue fill with a 3px Bright-Blue left rule (see `CandidateRow`, `NavItem`).

---

## Iconography

- **UI icons: Font Awesome — embedded.** The 2025 Brand Guide's iconography page directs: *"Use FontAwesome when available"* — and FA 6 Free is now **loaded by `styles.css`** (`tokens/fontawesome.css`), so any page linking the global stylesheet can write `<i class="fa-solid fa-gem"></i>` and color it via CSS. For self-contained prototypes without the stylesheet, the bundled **`Icon`** component covers ~60 lined UI glyphs.
- **Concept icons → FA mapping.** The 40 brand concepts render with Font Awesome glyphs (the working set — crisp at any size, recolorable): gem→`fa-gem`, sourcing→`fa-users-viewfinder`, interviews→`fa-comments`, customer-service→`fa-headset`, empowered-by-data→`fa-diagram-project`, job-performance→`fa-ranking-star`, assessments→`fa-clipboard-check`, behavioral-assessments→`fa-user-gear`, job-tenure→`fa-business-time`, language-tests→`fa-language`, cost-of-turnover→`fa-money-bill-trend-up`, ditch-the-resume→`fa-file-circle-xmark`, … — the full 40-glyph map lives in the **Concept icons** card (`guidelines/iconography.card.html`). The original extracted PNG art remains in `assets/icons/` for reference. **Treatments:** pastel-chip feature tiles, large-icon callouts, and Blue-Mid-on-Dark-Blue tiles — see the **Icon treatments** and **Photo & screen treatments** cards.
- **Dot-arch graphic** (`assets/graphics/dot-arch.svg` + `-blue` / `-white` color variants) is the real brand texture — an organic field of ~600 dots. Use it as a decorative accent bleeding off page/photo corners (pick the variant that suits the background), not as an icon. The old geometric halftone shapes are retired.
- **In use:** the BPO Hiring Guide shows lined Bright-Blue icons at ~46px inside `Callout` boxes (one icon per highlight). Keep icons single-color (Bright Blue or the callout's tone), lined, one stroke weight per group.
- **No emoji.** No unicode-glyph icons.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (link this one file). `@import`s only.
- `readme.md` — this guide. · `SKILL.md` — portable skill manifest.

**`tokens/`** — `fonts.css` (Lato via Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii, shadows, motion).

**`assets/`** — `logos/` (color + white lockups and logomarks), `graphics/` (organic `dot-arch.svg` + `-blue`/`-white` variants), `icons/` (40 brand concept icons, transparent PNG), `photography/` (4 person cutouts + 3 full-frame workplace photos + legacy call-center pair), `screens/` (7 real product-UI images: device composite, candidate dashboard, applicant list, interview guide, assessments, language test, video preview).

**`components/`** (React; bundled to `window.JourneyfrontDesignSystem_d988c9`)
- `core/` — Icon, Button, IconButton, Badge, Tag, Avatar
- `brand/` — Logo
- `forms/` — Input, Textarea, Select, Checkbox, Radio + RadioGroup, Switch, SearchInput
- `feedback/` — FitScore *(signature predictive-fit indicator)*, **Callout** *(the guide's tinted icon+heading highlight box)*, Alert, Toast, Tooltip, ProgressBar
- `data/` — Card + CardHeader, StatCard, Table, CandidateRow, EmptyState
- `navigation/` — Tabs, Sidebar + NavItem, Stepper, Pagination, Breadcrumb

Each component directory has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md` and one `@dsCard` specimen HTML.

**`ui_kits/`**
- `platform/` — the recruiter ATS app (Dashboard, Pipeline, Candidate profile, Analytics) — interactive `index.html`.
- `website/` — the marketing site (hero, the six platform pillars with real product screens, proof, testimonials, CTA) — interactive `index.html`.

**`slides/`** — six 1280×720 templates: title, section divider, stat, content, quote, closing.

### Using the components
```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, FitScore, CandidateRow } = window.JourneyfrontDesignSystem_d988c9;
</script>
```
For static assets (slides, decks, emails) link `styles.css` and use the CSS custom properties directly.
