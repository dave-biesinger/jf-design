# Real module inventory — journeyfront.com (read 2026-08-21)

Source of truth for the Web specimens. Pulled from the live homepage, /bpo,
and /platform/assessments. HubSpot theme behind them: **"Journeyfront 2026"**
(`Journeyfront 2026/templates/`) — 7 templates: Home (jf26), Platform / ATS (jf26),
Landing — BPO (jf26), Demo Request (jf26), Demo videos (jf26), Page (jf26),
Legal / Single column (jf26). Legacy theme `journeyfront_theme` has 2 old templates.
The connector reads landing pages only, so site-page modules and drafts are not
readable — need shareable preview links or a landing-page contentId on jf26.

## Global chrome
- **Nav:** logo left · Platform · Assessments · For BPOs · Resources · Sign In (button, right). Four items only.
- **Footer:** logo + 4 link columns (Product / Why Choose Us / Resources / Company),
  legal row (Privacy, Terms, California Notice, Cookie), LinkedIn + Facebook,
  "Journeyfront, Inc. © 2026", SOC 2 + GDPR badges.

## Signature pattern: eyebrow → H2 → one-line sub, centred
The eyebrow is a *sentence fragment that leads into the headline*, not a category label:
- "The Intelligent ATS for" → **High Volume Hiring**
- "Why high volume hiring companies" → **Choose Journeyfront**
- "Here's Why" → **Most Hiring Platforms Fail BPOs**
- "Here's How Journeyfront Is" → **Purpose-Built for BPO Operations**
- "The Decision is Clear" → **Why BPOs Choose Journeyfront**
- "Get Ready To" → **Reduce Turnover by 29%**
- "The Solution" → **The End-to-End Intelligent Hiring Platform**
- "Case Studies" → **Results Across Industries**
- "TOP EXAMPLE Use Cases" → **Built to Solve Your Hiring Challenges**

## Homepage
1. Hero — eyebrow, H1, body, **two CTAs** ("Get a Demo" primary + "See How It Works"), hero image right.
2. **4-stat row** in the hero: 68% Time-to-Hire Reduction · 71% Hiring Efficiency Improvement ·
   29% New Hire Turnover Improvement · 33% New Hire Performance Increase.
3. Logo band — "Trusted by leading organizations" + 6 client logos
   (Dick's, Achieve, KeHE, Everise, JetBlue, Etech).
4. **6-up pillar grid** (3×2), each: small eyebrow + heading + body.
   Source & Screen → "Identify Top Candidates in Real Time" ·
   Assess & Predict → "Predict Who Will Stay and Perform" ·
   Automate & Accelerate → "Customizable Automation at Scale" ·
   Organize & Manage → "Everything You Need in One Place" ·
   Interview & Decide → "Improve Hiring Decision Speed and Accuracy" ·
   Monitor & Improve → "Get Full Visibility Across Hiring and Beyond".
5. **Tabbed feature module** — 6 tabs (same six pillars). Each panel: H3, body,
   4–5 bullet list, product screenshot, "Get Your Demo".
6. Integrations — image + 5 categories (HRIS, Sourcing Tools, Assessments,
   Background Checks, Business Intelligence) with vendor examples + "See All Integrations →".
7. Closed loop — "What Makes Journeyfront Unique" + numbered 1–5
   (Screen & Hire, Track, Analyze, Optimize, Predict) + diagram.
8. **3 testimonials** — quote, role + company, "Read the … Case Study →".
9. **4 case-study cards** — client logo, big % stat, headline, secondary line, "Read more".
   Everise 92% (12 days → same-day, 65% cost cut) · KeHE 79% ($456K yr 1) ·
   KM2 67% · Achieve 27% (31% performance).
10. **4 use-case cards** — industry eyebrow + heading + body + link
    (BPO, contact centers, supply chain, sales orgs).
11. Final CTA — "Ready to Hire Better?" + sub + two CTAs.

## /bpo
- Hero: "The ATS That's" → **Purpose Built For BPO Hiring**, 3 stats, logo marquee.
- **4 numbered challenge cards** — icon, "CHALLENGE 01", H3, body, and a caution line
  ("Other ATS's weren't built for…") with icon.
- Tabbed module (4 tabs) — H3, body, "Key capabilities include:" bullets,
  blockquote with attribution, screenshot, "Get Your Demo".
- eBook/playbook promo band.
- Featured case study — logo + Challenge / Solution / Results + two big % stats.
- 3 case-study cards.
- **Comparison table** — Journeyfront vs Traditional ATS, 8 rows, ✅ / ⚠️ / ❌ marks.
- 4 icon cards ("Why BPOs Choose Journeyfront").
- 4-stat band (71 / 68 / 33 / 29) with two-line labels.
- **3 persona cards** — For TA Leaders / Executives / Operations, each with check bullets.
- Inline CTA strip — "No sales pitch. No long forms. Just 15 minutes…".
- **ROI calculator** — two selects + salary input → current cost vs potential savings.
- **FAQ accordion** — numbered 01–06.
- Final CTA with person cutout.

## /platform/assessments
- Hero: eyebrow "Assessments & Tests" → **Assessments That Improve Hiring Speed & Quality**,
  one CTA, product image right.
- **4-up differentiator grid** — Truly Predictive · Built Natively · Customized to You · Always Validated.
- **Lazy river — 5 alternating text/image modules** (this is where the flip token lives):
  Behavioral Assessments · Job Simulations · Skills Tests · AI-powered Language Tests ·
  Realistic Job Previews. Each: H2, body, "Learn More" link, product image.
- Guide link strip — "Free Hiring Guides: … →".
- Final CTA — "Ready to get started?" + "Begin transforming your hiring process."

## Copy / CTA vocabulary observed
"Get a Demo" · "Get Your Demo" · "Request Demo" · "See How It Works" ·
"Talk to Our Team" · "Learn More →" · "Read more" · "View Customer Stories →" ·
"See All Integrations →".

## Baseline token implications
- Section headers are **centred** → `--t-head-align: center`.
- Content max width ≈ 1200; generous section padding (~112px).
- Lato is the type family; H1 large and tight.
- Tabbed module and 6-up grid are primary; lazy river is the Assessments pattern.
- Numbered labels (CHALLENGE 01, FAQ 01–06) and eyebrow-into-headline are signatures.

## Collateral specimen source — "The Real Cost of a Bad Hire" (14pp PDF)
Cover: "BPO HIRING GUIDE" eyebrow / all-caps kicker / big title.
TOC with right-aligned page numbers. Section pages: big page number, dark-blue H1,
body, tinted callout ("Step One: Price Your Stack"), display stat ($4,000–$17,000)
with caption. **Data table** (Stage | Typical Cost | What It includes) with blue header row.
**Charts**: horizontal bar (annual cost by retention rate) and 12-column monthly
attrition chart with annotation callout ("73% of all separations by day 90").
Small-print methodology captions. References page last.

## Social specimen source — funnel-math LinkedIn post (1200×1200)
Full-bleed Bright Blue. White logo lockup top-left. Stacked display lines:
"1,000 Applicants" in **dark blue**, "58 Hires" in **pastel blue**, hand-drawn white
arrow pointing at the second line. White italic sub: "Do you know your real
candidate-to-hire ratio?". Bottom half is the **white dot field, size-swelling and
bottom-weighted**. Dark-blue pill CTA: "Download The Guidebook".


## /platform (read 2026-08-21) — the richest page; jf26 patterns
- Hero: eyebrow "Platform" -> **The Intelligent Hiring Platform**, long body, "Request Demo", product screenshot right.
- Section header: "An End-to-End Recruiting Suite" + one-line sub.
- **Anchor jump bar, 9 items**: Source & Attract · Screen & Rank · Track & Manage ·
  Assessments & Tests · Interviewing · Scorecards & Decision Making · Offers & Onboarding ·
  Reporting & Analytics · Integrations.
- **Three-layer module** ("What Makes Journeyfront Different"): Data Layer / Intelligence Layer /
  Automation Layer, each with a role label (The Foundation / The Brain / The Execution Engine),
  body, and a caution line **"Without this layer: …"**; arrows between layers.
- **Nine feature sections**, each identical in shape:
  eyebrow (section name) · H2 · body paragraph ·
  *italic resource cross-link* ("How many applicants do you actually need? Run the funnel math →") ·
  CTA button ("Request Demo" / "Learn More") · product image right;
  then a **card grid** where every card repeats the ALL-CAPS section name as its eyebrow,
  plus card title, body, and an optional tertiary link — "Learn More →" or **"Watch Demo ▶"**.
  Card counts per section: 7 / 6 / 6 / 8 / 6 / 5 / 7 / 6 / 3.
- "SEE IT IN ACTION" -> "Want to explore the platform yourself?" + "Watch Demo Videos".
- Guide link strip: "Free Hiring Guides: … →" (5 links).
- Final CTA: "Ready to get started?" / "Begin transforming your hiring process." + cutout photo + cta-bg graphic.

### New modules to add to the specimens because of this page
1. Anchor jump bar (9 pills/links).
2. Feature card grid with repeated ALL-CAPS category eyebrow — the dominant product module.
3. Layer/stack diagram with "Without this layer:" caution lines.
4. Italic inline resource cross-link under a section body.
5. "Watch Demo ▶" tertiary link style.

### Draft previews
`?hs_preview=` URLs for /platform-jf26-draft-1 and /demo-videos-jf26-draft are blocked to me
(domain permission error on the preview query string; the public /platform fetches fine).
Need either a published URL, a landing-page contentId on the jf26 theme, or pasted HTML.


## Product UI — what the real app actually looks like
Read from the real product screenshots in `assets/screens/` (candidate-dashboard.png).
The current Product specimens are wrong in their chrome and need rebuilding.

**Wrong today:** a dark navy top bar with ALL-CAPS white text nav
(DASHBOARD / EMPLOYEES / PROFILES …). The product has no dark chrome at all.

**Right:**
- **Left icon rail**, ~72px wide, pastel-blue fill (`--t-surface-tint`), icon-only,
  hamburger at the top then ~6 lined icons, active item marked with a rule.
  No text labels, no top bar.
- **Canvas** is near-white / light grey (`--t-surface-subtle`), not white.
- **Page title** sits directly on the canvas: dark blue, display weight, large
  ("Candidate Overview Dashboard") — no title bar, no breadcrumb.
- **Cards** are white, ~10–12px radius, no border, soft shadow. Modest radius —
  noticeably tighter than the 20px marketing radius.
- **KPI card**: label top-left in grey, very large number, green pill delta ("17 %").
- **Charts** use a light-blue-to-dark-blue graduated palette: donut with the % in the
  centre and a grey caption under it, multi-line trend chart, stacked bars in 3–4 blues,
  horizontal funnel bars stepping from dark to light.
- Overall: light, airy, high whitespace. Blues do the work; no navy panels.

Rebuild the three Product specimens on that shape: rail + light canvas + dark-blue
page title + white cards + graduated-blue charts.
