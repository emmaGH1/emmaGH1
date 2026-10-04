# Hackathon Playbook — October Mobile-First Edition

A collaborative, evidence-driven way to turn a hackathon brief into a focused product, a reliable build, and a strong judge demo.

This playbook is designed for a human + agent workflow. The agent must not rush from brief to build. The human stays involved in product decisions, idea selection, tradeoffs, scope, and final submission choices.

The goal is not maximum feature count. The goal is the strongest possible submission for the actual judging criteria, with a clear story, a real working core, and a repeatable demo.

---

## Core operating rules

1. **Do not start building immediately.**
   First understand the event, judging criteria, constraints, sponsor requirements, and what information is still missing.

2. **Keep the human in the decision loop.**
   Important product choices require discussion and explicit approval. Do not silently choose the idea, architecture, scope, visual direction, or submission story.

3. **Ask for missing context before making irreversible choices.**
   If the project depends on the user's budget, skill preference, available accounts, prior code, sponsor access, target platform, time left, or demo constraints, ask before proceeding.

4. **Optimize for judging criteria, not novelty alone.**
   Every major product choice should connect to how judges will score the submission.

5. **Prefer one memorable complete journey over many weak features.**
   A narrow product with a sharp before/after, clear action, real integration, and polished demo is usually stronger than a broad unfinished product.

6. **Never fabricate evidence.**
   Clearly distinguish implemented, tested, deployed, mocked, seeded, simulated, and planned behavior.

7. **The default workflow is mobile-first.**
   Assume the human may be working primarily from a phone while Devin Cloud handles implementation.

8. **GitHub is the durable source of truth.**
   Important decisions, current state, architecture, demo instructions, and judge-facing facts belong in the repository rather than only in chat history.

---


# Non-negotiable guardrails

These rules override speed, convenience, and agent preference. When a deadline is short or the human is unavailable, **reduce scope, not quality**.

## Product and implementation floor

- Never ship a throwaway single-file `index.html` prototype as the default implementation for a serious web-app submission. Use it only when the event explicitly calls for a static microsite or the human explicitly approves that tradeoff.
- Prefer a real application structure with routing, components, state boundaries, environment handling, and a production build.
- For React/Next.js web apps, default to **TypeScript + Tailwind + actual shadcn/ui components** unless the sponsor stack or project requirements make that inappropriate.
- When shadcn/ui is selected, install and use the real components. Do not merely imitate their appearance with ad-hoc Tailwind markup while claiming shadcn was used.
- Verify component use by checking imports and generated component files. If a requested component is unavailable or incompatible, say so and choose an intentional alternative.
- Prefer one polished vertical slice over a broad fake-complete app.
- Never invent fake metrics, fake users, fake integrations, fake “live” states, fake transactions, or fake AI results to make the UI feel complete.
- If the build cannot reach the minimum quality floor in the available time, cut features and preserve the strongest real path rather than filling the product with placeholder slop.

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

For a user-facing web product, include a purposeful landing/entry experience unless the judge path benefits more from landing directly inside the product.

A landing page should normally include:

- a clear product-specific promise;
- one obvious primary action;
- enough visual evidence to understand what the product does;
- intentional typography and layout;
- responsive behavior;
- no filler sections added only to make the page longer.

When time is extremely short, build a **compact, polished landing page**, not a generic template. A strong hero + product proof + CTA is better than six weak sections.

## No comfort-zone defaults

When multiple valid approaches exist, do not automatically choose the most familiar implementation or the statistically most common hackathon idea.

The agent must ask:

- Is this choice being made because it is truly best for the judging criteria?
- Or because it is the easiest/common pattern the model has seen?

If it is mainly familiarity, explore at least one stronger alternative before committing.

---

# Execution modes

At the start of a hackathon, explicitly identify one of these modes.

## Mode A — Collaborative

Use when the human is available.

- Stop at all major decision gates.
- Brainstorm together.
- Show tradeoffs.
- Wait for approval before idea selection, architecture, major scope changes, and submission.

## Mode B — Sprint

Use when time is short but the human is still intermittently available.

- Keep approval gates for idea, scope, and final submission.
- Compress discussion, not thinking quality.
- Use fewer but stronger options.
- Prefer one complete vertical slice.
- Avoid optional infrastructure and features.
- Maintain the same design and implementation quality floor.

## Mode C — Unattended / sleep mode

Use only when the human explicitly says they are leaving and wants the agent to continue.

Before the human leaves, lock:

- selected concept;
- must-have scope;
- non-goals;
- judging priorities;
- visual direction;
- permitted integrations;
- branch to work on;
- whether deployment is authorized;
- token/effort budget if relevant;
- exact stop condition.

While unattended:

- do not change the product concept;
- do not add major features;
- do not broaden scope;
- do not re-architect unless the current path is impossible;
- do not spend money, submit, contact organizers, or make irreversible external actions;
- do not compensate for uncertainty with generic filler UI;
- do not burn tokens in repeated blind retries.

After two materially different failed approaches to the same blocker, stop, document the blocker, and move to the best smaller fallback that preserves the judge story. If no honest fallback exists, stop and leave a clear handoff rather than manufacturing a fake success.

The unattended goal is **a smaller, coherent, reviewable product**, not “something that technically exists by morning.”

---

# Devin harness defaults

Devin should behave like an implementation partner operating inside a controlled harness, not an autonomous product owner.

For each substantial build phase:

1. Read `AGENTS.md`, `docs/JUDGING.md`, `docs/IMPLEMENTATION.md`, and `docs/CURRENT_STATE.md`.
2. Restate the bounded task and acceptance criteria.
3. Identify the smallest set of files likely to change.
4. Implement only that phase.
5. Run the relevant checks.
6. Inspect the actual browser/UI when visual behavior matters.
7. Report evidence, failures, and deviations.
8. Update `docs/CURRENT_STATE.md`.
9. Stop instead of silently starting the next major phase unless the current execution mode explicitly allows continuation.

For UI work, “build succeeded” is never sufficient evidence. Devin must inspect the rendered result.

For library requirements such as shadcn/ui, Devin must verify actual integration rather than merely matching the style.


# Phase 0 — Intake and orientation

Before ideation or implementation, build a shared understanding of the hackathon.

## Agent responsibilities

Read the official event materials and identify:

- event name and organizer;
- submission deadline and timezone;
- eligibility requirements;
- required technologies or sponsor integrations;
- judging categories and weighting;
- prize tracks;
- submission fields;
- repository/public-access requirements;
- demo/video limits;
- permitted reuse, AI assistance, and pre-existing code;
- deployment or live-access requirements;
- any sponsor-specific judging notes;
- anything ambiguous or missing.

Use official sources where possible. Record links and unresolved assumptions.

## Human checkpoint

Before moving on, present a concise **Hackathon Brief** containing:

- what the event is really asking for;
- what judges are likely rewarding;
- hard requirements;
- optional opportunities;
- biggest traps;
- time remaining;
- what information is still needed from the human.

Then ask only the questions that materially affect the project.

Examples:

- How much time can you realistically spend?
- Are there existing repos/components we should reuse?
- Do you already have sponsor credentials or API access?
- Is the goal to maximize winning probability, learn something specific, or ship fast?
- Are there categories or product areas you do not want to build?
- Are there limits on budget, paid APIs, or deployment?
- Does the demo need to work entirely from mobile?

**STOP GATE:** Do not brainstorm final ideas until the human confirms the brief or answers the missing questions.

---

# Phase 1 — Judge analysis before idea generation

Translate the judging rubric into a practical scoring strategy.

For each judging category:

- explain what a strong submission would visibly demonstrate;
- explain what weak submissions will probably do;
- identify what evidence the judge must see in the product or demo;
- estimate what deserves the most build time;
- identify any category that can be won through presentation, polish, or proof rather than more code.

Create a simple matrix:

| Criterion | Weight | What judges need to see | Product implication | Demo implication |
|---|---:|---|---|---|

Then summarize:

- the 2–3 highest-value things the project must prove;
- the easiest ways to lose points;
- what should **not** consume time.

**STOP GATE:** Human reviews the judge strategy before idea generation.

---

# Phase 2 — Collaborative ideation

Do not jump to a single recommendation.

Use a deliberate **diverge → mutate → converge** process.

## 2A — Diverge widely

Generate a broad first pass of ideas before ranking them. Prefer 6–10 raw directions when time permits, spanning different product archetypes rather than minor variations of one concept.

At least:

- 2 should be safe but strong;
- 2 should be unusual or contrarian;
- 2 should explore a different interaction model, user, or business logic;
- 1 should question the obvious interpretation of the hackathon brief.

During this divergent pass, do not prematurely filter ideas merely because they are unfamiliar. The goal is to escape the model's comfort zone.

Explicitly avoid defaulting to:

- generic AI chat wrappers;
- “upload document and ask questions” unless uniquely justified;
- generic productivity dashboards;
- thin sponsor-API demos with no user value;
- clones of obvious prior winners;
- ideas whose only differentiation is “with AI”.

## 2B — Mutate and combine

Take the most interesting raw directions and deliberately transform them:

- combine two ideas;
- invert the user or workflow;
- remove the obvious UI;
- turn a passive tool into an active system;
- replace chat with a more suitable interaction;
- ask what would make the judge remember it the next day;
- ask what could only exist because of the sponsor technology.

Produce 3–5 refined candidates after mutation.

Each candidate must include:

- primary user;
- painful moment;
- current workaround;
- core action;
- visible before/after;
- why the sponsor technology matters;
- why this could score well;
- biggest technical risk;
- biggest product risk;
- likely build time;
- demo strength;
- what makes it different from a generic AI wrapper.

## 2C — Converge with the human

Score the refined candidates against:

- judging fit;
- originality;
- usefulness;
- technical feasibility;
- sponsor integration depth;
- demo clarity;
- time-to-first-working-slice;
- mobile execution difficulty;
- backend/infrastructure burden;
- ability to finish before deadline.

Do not hide uncertainty. Scores support discussion; they do not make the decision automatically.

Ask the human:

- which ideas they feel drawn to;
- which ones they dislike and why;
- what feels too safe or too familiar;
- whether any candidate triggers a stronger variation;
- whether a personal insight, workflow, frustration, or domain advantage should be incorporated;
- what they would be excited to demo even if it does not win.

The agent may recommend a direction after this discussion, but it must explain the tradeoff and wait for explicit human selection.

**STOP GATE:** No architecture or implementation plan until the human explicitly selects or approves a direction.


# Phase 3 — Refine the chosen concept

Once an idea is selected, sharpen it before coding.

Define:

- one primary user;
- one painful moment;
- one core promise;
- one primary user journey;
- the exact sponsor/required integration role;
- one memorable demo moment;
- non-goals;
- the riskiest assumption;
- the smallest version that still feels complete.

Write a one-sentence product statement:

> For [user] who struggles with [painful moment], [product] lets them [core action] so they can [meaningful outcome], using [required technology] for [specific role].

Then define:

### Must have
Only what is required for the judge story to work.

### Nice to have
Only after the core path is proven.

### Explicitly cut
Features that sound impressive but dilute the submission.

**STOP GATE:** Human approves the refined scope.

---

# Phase 4 — Build the project harness

Inspect the repository first. Preserve useful conventions and existing work.

For a substantial project, create the smallest durable set of artifacts needed:

- `AGENTS.md` — permanent repo rules, safety boundaries, agent coordination, and file ownership.
- `docs/PROJECT.md` or `docs/PRD.md` — user, problem, core promise, workflow, non-goals, acceptance criteria.
- `docs/JUDGING.md` — scoring rubric, required evidence, and how the product/demo earns points.
- `docs/ARCHITECTURE.md` — data flow, contracts, integrations, trust boundaries, failure behavior, deployment shape.
- `docs/DESIGN.md` or `docs/UI_REQUIREMENTS.md` — approved visual direction, references, routes, states, responsive behavior, accessibility.
- `docs/IMPLEMENTATION.md` — phased build order, exit criteria, and dependencies.
- `docs/CURRENT_STATE.md` — verified current state and one concrete next action.
- `docs/DEMO.md` — judge story, demo path, seed/reset behavior, recording plan.
- `README.md` — product explanation, setup, judge path, expected result, and checks actually run.
- `hackathon.md` only if required or useful for the event.
- An ignored `HANDOFF.md` for machine/session-specific notes only; never store credentials there.
- `.gitignore` entries for credentials, local notes, generated state, build output, and temporary artifacts.

Keep one source of truth per decision. Do not create documentation for its own sake.

---

# Phase 5 — Prove the riskiest thing first

Before broad implementation, test the highest-risk assumption.

Examples:

- sponsor API authentication;
- wallet connection;
- webhook flow;
- model/tool compatibility;
- data availability;
- on-chain transaction;
- browser capability;
- third-party SDK;
- background worker;
- demo automation;
- deployment requirement.

The proof should be the smallest useful call or end-to-end slice.

Record:

- what was tested;
- how it was tested;
- what worked;
- what failed;
- limits discovered;
- fallback plan.

If the riskiest integration fails, revisit scope immediately instead of building around an assumption.

---

# Phase 6 — Implementation planning with human approval

Create a phased implementation plan that favors vertical slices.

A good sequence is:

1. project foundation;
2. riskiest integration;
3. smallest complete end-to-end path;
4. distinctive product capability;
5. visual polish and responsive behavior;
6. deployment;
7. demo automation;
8. final reliability pass.

For each phase define:

- goal;
- files/components likely affected;
- acceptance criteria;
- tests/checks;
- visible evidence;
- dependencies;
- what must not be changed;
- exit condition.

Do not create a 40-item wall of tasks if 6–8 phases are easier to reason about.

**STOP GATE:** Human approves the implementation plan before large-scale coding begins.

---

# Phase 7 — Mobile-first execution model

Assume the human is primarily operating from a phone.

## Default tool roles

- **ChatGPT** — everyday planning, research, screenshots, UX critique, submission writing, visual work, implementation prompts.
- **Claude through Bankr** — selective deep ideation, architecture challenge, difficult debugging, independent review.
- **Devin Cloud** — primary implementation, repository edits, tests, browser verification, bug fixing, and routine execution.
- **GitHub** — durable source of truth.
- **Vercel** — default frontend hosting when appropriate.
- **Servarica + Coolify** — persistent backend/API/database/worker hosting when needed.
- **Recordly / Devin recording** — demo capture.
- **ElevenLabs** — narration only after the script is locked.
- **Termux** — emergency SSH/admin, not the primary development environment.

The agent should not move work onto the VPS simply because it can. Devin Cloud is the default coding environment; the VPS is production infrastructure.

---

# Phase 8 — Branching, previews, and safe delivery

Do not let agent work directly destabilize the judging URL.

Default flow:

1. work on a feature branch;
2. run tests/build;
3. create or use preview deployment;
4. human inspects the live result;
5. fix issues;
6. merge only when approved;
7. deploy production from `main`;
8. tag the known-good submission state, e.g. `demo-v1`.

Never treat a successful build as proof that the UX works. Inspect the actual interface and important states.

---

# Phase 9 — Build the demo while building the product

The demo is part of the product, not an afterthought.

Define the judge path early:

- setup state;
- starting screen;
- core action;
- sponsor/technical proof;
- visible result;
- why the result matters;
- closing state.

Target a primary path that can usually be demonstrated in roughly 60–90 seconds unless the event requires otherwise.

## Deterministic demo mode

Where appropriate, build:

- a demo account;
- seed data;
- reset script;
- predictable starting state;
- `demo/run-demo.ts`;
- `demo/reset-demo.ts`;
- `demo/timeline.json`.

The demo runner should interact with real application functionality.

It may seed predictable data, but it must not fake:

- sponsor integration success;
- on-chain transactions;
- model responses claimed to be live;
- external actions claimed to have happened;
- results that the real product cannot produce.

## Automated demo behavior

Prefer a deterministic automated flow when it improves recording quality.

A strong automated demo should:

- move through the real product;
- wait for actual UI/application state rather than fixed blind sleeps;
- use natural pacing;
- allow the screen to breathe before important clicks;
- show visible cursor movement where practical;
- type progressively where typing matters;
- pause on important results;
- be repeatable after a reset.

The target should feel like a polished human demo, not a benchmark script.

---

# Phase 10 — Demo recording and narration

Preferred order:

1. finish the real core flow;
2. lock the judge story;
3. write the narration;
4. divide narration into short scenes;
5. generate ElevenLabs audio only after wording is approved;
6. run the deterministic demo;
7. record using Devin/Recordly if available;
8. align visual beats with narration;
9. export the final video;
10. verify duration, resolution, audio, and required format.

Prefer multiple short narration clips over regenerating a full 60–90 second track for one bad sentence.

Example:

- `01-intro.mp3`
- `02-problem.mp3`
- `03-action.mp3`
- `04-result.mp3`
- `05-integration.mp3`
- `06-closing.mp3`

Do not spend TTS credits during ideation.

---

# Phase 11 — Review loop

For every meaningful implementation cycle:

1. Devin implements a bounded task.
2. Run relevant typecheck, tests, lint, and production build.
3. Inspect the real UI/output.
4. Human reviews the live behavior.
5. ChatGPT critiques screenshots, flow, copy, and judge clarity.
6. Use Claude/another model only when a second opinion is valuable.
7. Devin fixes.
8. Update `docs/CURRENT_STATE.md`.

For difficult bugs:

- provide the reviewer only the relevant error, files, attempted fixes, and expected behavior where possible;
- avoid burning API credits by sending an entire repository unless necessary.

---

# Phase 12 — Final judge audit

Before submission, perform two reviews.

## Technical audit

Verify:

- production build passes;
- critical tests pass;
- public URLs work;
- backend is awake;
- required credentials are configured;
- cold-start behavior is acceptable;
- demo account/reset works;
- repository contains no secrets;
- README instructions are accurate;
- sponsor integration is actually demonstrated;
- claims match evidence.

## Judge audit

Act as a skeptical judge and ask:

- Can I understand the problem in 10 seconds?
- Is the product meaningfully different?
- Is the sponsor technology essential or decorative?
- Does the demo show the strongest feature quickly?
- Is the before/after obvious?
- Are we wasting demo time on setup?
- Does every major judging criterion have visible evidence?
- What is the easiest reason to reject or forget this submission?
- What should be cut or emphasized before submission?

Fix the highest-impact problems first.

---

# Phase 13 — Submission approval gate

Before submitting, present the human with a final concise checklist:

- submission title;
- one-line pitch;
- description;
- repository URL;
- live URL;
- video URL/file;
- track/category;
- required sponsor technologies;
- known limitations;
- final claims;
- submission deadline and timezone.

**STOP GATE:** Never submit, spend money, contact organizers, publish, or make irreversible external actions without the human's explicit approval.

---

# Phase 14 — Handoff and cleanup

After submission, record:

- final branch and commit;
- production URLs;
- what was verified;
- what was simulated/seeded;
- known limitations;
- judging deadline if relevant;
- next action;
- services that can be stopped later.

Keep temporary machine/session details in ignored handoff notes. Keep durable product decisions in committed documentation.

Stop unnecessary backend containers after judging when practical. Preserve the repository and known-good tag.

---

# Default conversation behavior

When this playbook is invoked for a new hackathon, the agent should begin with:

1. **Understand** — gather and summarize the official brief.
2. **Ask** — identify missing information that materially affects the project.
3. **Analyze judges** — turn scoring criteria into product/demo requirements.
4. **Brainstorm together** — propose multiple directions and discuss them with the human.
5. **Decide together** — wait for explicit human selection.
6. **Refine** — sharpen the selected concept and cut scope.
7. **Plan** — create architecture and phased implementation.
8. **Approve** — wait for human approval before major implementation.
9. **Build** — execute in bounded phases with real verification.
10. **Demo** — build and automate the judge path.
11. **Audit** — technical + judge review.
12. **Submit only with approval.**

The agent should never interpret this playbook as permission to rush from a brief directly into implementation.
