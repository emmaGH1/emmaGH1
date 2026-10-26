# phase 4: design

> load before ANY ui work: landing page, product screens, or visual polish.

## Anti-slop design rules

By default, **do not use** any of the following unless there is a product-specific reason or the human explicitly approves it:

- generic blue/purple gradient backgrounds;
- neon glows, floating blobs, aurora effects, or decorative mesh gradients;
- glassmorphism used as a default visual language;
- pulsing green “online/live/active” dots that do not communicate a real state;
- decorative status pills such as “AI online”, “agent active”, “system live”, or “powered by AI” unless the status is materially real and useful;
- giant generic hero copy with no product-specific visual evidence;
- a page made of endless rounded cards with identical visual weight;
- random dashboard metrics added only to make the product look substantial;
- fake terminal windows, fake code blocks, fake activity feeds, or fake logs;
- excessive shadows, gradients, border glow, or motion for decoration;
- defaulting to the same familiar AI-template typography and spacing without considering the product's personality;
- emoji used as product icons when a proper icon or custom mark is appropriate;
- generic “AI assistant” chat UI unless conversation is genuinely the core product interaction.

Use whitespace, hierarchy, proportion, typography, strong layout, real product states, and deliberate contrast before decoration.

## Typography and visual direction

- Typography must be chosen intentionally for the product. Do not blindly reuse a familiar AI-template font stack.
- Use at most two type families unless there is a strong reason otherwise.
- Establish a clear type scale, spacing rhythm, container width, and component density before polishing individual screens.
- Avoid “everything centered” layouts by default.
- Avoid every section having the same card treatment.
- No gradient is the default. Add one only when it has a clear visual role and does not make the product look templated.
- Before major UI implementation, define a compact visual direction: 3–5 adjectives, palette, typography, spacing/density, component style, and 2–4 relevant references when available.
- The final interface should look specific to the product, not merely “clean SaaS”.

## Landing-page quality floor

For a user-facing web product, default to a purposeful landing/entry experience unless the judge path is clearly stronger by opening directly inside the product.

The landing page is the project's **poster**, not the whole demo. It should make the product memorable when a judge opens the live URL, when the project is shared on X, and when a screenshot is used in a README or submission.

A landing/entry experience should normally include:

- a clear product-specific promise;
- one obvious primary action;
- enough visual proof to understand what the product does;
- intentional typography and layout;
- responsive behavior;
- visual continuity with the application itself;
- no filler sections added only to make the page longer.

Do not default to a generic SaaS sequence such as hero → three feature cards → testimonials → pricing → FAQ → CTA unless those sections genuinely serve the product.

When time is short, build a **compact, polished landing page**, not a generic template. A strong hero + real product proof + CTA is better than six weak sections.

The landing page should pass an **X screenshot test**: the first fold should look intentional and shareable without needing an apology or explanation.

For demos, the landing page is normally an opening shot of roughly 5–15 seconds. Do not spend most of the video scrolling marketing sections. Reach the actual product quickly unless the landing experience itself contains meaningful product interaction.

The landing page and workspace may differ in density, but they must feel like the same product: share typography, palette, radius logic, icon treatment, motion language, and product-specific visual motif.

## No comfort-zone defaults

When multiple valid approaches exist, do not automatically choose the most familiar implementation or the statistically most common hackathon idea.

The agent must ask:

- Is this choice being made because it is truly best for the judging criteria?
- Or because it is the easiest/common pattern the model has seen?

If it is mainly familiarity, explore at least one stronger alternative before committing.

---


# Phase 4.5 — Design discovery gate

Do not ask the agent to “make it beautiful” and then let it improvise the entire visual system from statistical defaults.

Before substantial UI implementation, create a design direction that is **specific to this product**.

## 4.5A — Define the design profile

Record:

- product type and platform;
- primary emotion the interface should create;
- information density;
- interaction density;
- brand personality;
- trust level;
- visual energy;
- what the product must **not** feel like.

Avoid vague descriptors such as “modern”, “clean”, “sleek”, or “premium” unless they are made concrete.

Prefer specific language such as:

- quiet editorial;
- dense technical instrument;
- warm consumer productivity;
- architectural and precise;
- playful but controlled;
- broadcast-control-room;
- calm and reassuring.

## 4.5B — Identify a product-specific visual motif

Answer:

> What visual or interaction idea belongs specifically to this product?

The motif may influence the hero, loading states, empty states, transitions, data presentation, illustrations, or the demo payoff.

Reuse it subtly. Do not invent decorative motifs unrelated to the product.

## 4.5C — Generate reference-search queries

Do not merely tell the human to search for “good SaaS design”.

Generate targeted queries based on the product's design profile.

Each query should have a purpose, for example:

- **structure** — information architecture and page composition;
- **visual language** — typography, spacing, restraint, borders, palette;
- **interaction** — transitions, onboarding, navigation, expansion behavior;
- **signature idea** — an unusual visual or interaction pattern that may inspire an original motif.

Explain what the human should look for in each search.

## 4.5D — Build a reference stack

Prefer several references with distinct jobs rather than one reference that controls everything.

Classify approved references as:

- **Structure reference** — layout, hierarchy, navigation, information density.
- **Visual-language reference** — typography, spacing, border/radius logic, palette, restraint.
- **Interaction reference** — motion, transitions, onboarding, component behavior.
- **Signature reference** — one memorable visual or interaction idea worth adapting.

Do not copy any reference wholesale. Synthesize the useful principles into an original product-specific system.

## 4.5E — Reference-fit test

Before accepting a reference, evaluate whether it actually fits:

- same or compatible platform;
- similar information density;
- similar trust requirement;
- similar interaction model;
- compatible emotional goal;
- compatible judge/demo flow.

If a reference is visually attractive but structurally wrong, keep only the aspects that fit. Explicitly state what is being borrowed and what is **not**.

Example:

> Borrowing: asymmetric hero composition, restrained one-accent palette, compact type hierarchy.
>
> Not borrowing: navigation, imagery, card treatment.

No “reference laundering”: do not claim inspiration from a reference unless the implementation actually reflects the named design principles.

## 4.5F — Build a design probe before the full UI

Before implementing the entire product, build only:

1. the landing/entry hero or first fold; and
2. the most important workspace/product screen.

Use realistic content.

Do not build the entire navigation tree or all secondary pages yet.

The human reviews these two surfaces first.

### Design checkpoint

Ask:

> Does this feel like **our product**, and does it feel strong enough to share publicly?

If no, iterate here before propagating the visual system across the codebase.

Only after approval should the design system be locked in docs/DESIGN.md.

## 4.5G — AI-slop lint

Before approving the design probe or a major UI milestone, inspect for:

- unnecessary gradients or gradient text;
- generic blue/purple AI palette;
- meaningless status pills;
- fake “online/live/active” indicators;
- decorative pulsing green dots;
- excessive roundness;
- everything placed inside cards;
- every icon placed inside a rounded square;
- giant generic headings with weak product proof;
- generic three-column feature grids;
- fabricated testimonials, logos, avatars, or social proof;
- random dashboard metrics;
- fake terminals, code windows, activity feeds, or logs;
- unnecessary chat interfaces;
- repeated use of Sparkles/Bot/Zap/Brain icons as visual shorthand for AI;
- generic floating blobs, glow, glassmorphism, or aurora effects;
- section after section using the same composition;
- default typography with no product-specific reasoning.

If any appear, justify them from the product story or remove them.

## 4.5H — Shadcn is a primitive library, not the design system

For suitable React/Next.js products, use real shadcn/ui components for reliable primitives.

Do not equate installing shadcn with completing design work.

Shadcn may supply dialogs, sheets, dropdowns, tables, forms, tooltips, commands, and similar primitives. The product still needs an intentional composition, hierarchy, typography, spacing system, visual motif, and interaction language.

**STOP GATE:** Do not propagate the UI across the product until the human approves the design probe or explicitly authorizes autonomous continuation.

## 4.5I: logo and brand mark

the logo is the first and last frame of the demo, the favicon, the og image and the x post. a random ai mark undoes a good product. it gets a timeboxed pass (30–45 min) **after the visual motif (4.5B) is set and before the design probe (4.5F)**, so the logo, the ui and the video share one system.

**default to a wordmark with one custom detail.** in a hackathon, a well-set wordmark beats an invented symbol almost every time. the detail comes from the product's motif, for example:

- one letter swapped for or cut by a product-specific glyph (a price-tag notch, a timeline tick, a cursor, a node)
- a ligature or a shared stroke between two letters
- a cut, a gap or a shifted baseline that echoes what the product does
- an accent-color mark on exactly one letter or one dot

**process:**

1. **name check:** say the name out loud; check it's not an existing well-known product in the same space.
2. **typeface:** pick it from the approved design direction, not a default. one family, a weight chosen on purpose, letter-spacing tuned by eye.
3. **3 concepts, each tied to the motif in one sentence** ("the Q's tail is a price arrow because it adjusts prices"). hand-written svg, not generated images.
4. **one review sheet:** each concept at 16px (favicon), 64px and 512px, on the light and the dark background, plus one-color black and one-color white. render it to a png and show it.
5. **human picks one** (or asks for one more round). maximum two rounds.
6. **export the set:** `logo.svg`, `logo-mark.svg` (just the symbol or monogram, for favicon and avatar), `favicon.ico` + `icon.png`, `apple-touch-icon.png`, `og.png` (1200x630, logo + one-line promise on the app's background). record the svg colors and font in `docs/DESIGN.md`.
7. **demo version:** the logo's parts are separate svg paths, so the video's logo reveal can animate the custom detail last (the "click" moment).

**logo slop to avoid:** sparkles, brains, robot heads, generic hexagons or cubes, chat bubbles, lightning bolts, gradient blobs, a letter in a rounded square with a gradient, globe-and-orbit marks, a symbol that needs an explanation, more than two colors, anything unreadable at 16px.

**model:** claude (opus) proposes the concepts and the review sheet. a cheaper model does the export set.

**STOP GATE:** the human picks the logo from the review sheet before it's used anywhere.

## 4.5J: references on a phone (fast path)

the human gathers references from a phone, often under time pressure. make it cheap:

- generate the targeted search queries from 4.5C, each with a ready link: godly.website, land-book.com, mobbin.com, savee.it, dribbble, or "site:x.com" searches. a reference can be a screenshot or a url pasted into chat.
- one strong reference with a clear note ("take the type scale and the asymmetric hero; not the colors") is enough to start.
- **if the human has no time for references:** don't improvise one look silently. render the first fold of the landing page in **3 distinct directions** as screenshots (different type, layout and palette, all within the design profile), and let the human pick one. picking from three costs a minute; fixing a generic page costs hours.
- in sleep mode the visual direction must already be locked (see the core file). no direction locked means no landing page work while unattended.

---

