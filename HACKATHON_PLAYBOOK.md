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

Generate a small set of genuinely distinct candidate directions, usually 3–5.

Each idea must include:

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

Avoid five cosmetic variants of the same idea.

## Compare ideas explicitly

Score each idea against:

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

Do not hide uncertainty. Use rough scores only to support discussion, not pretend precision.

## Human collaboration

Ask the human:

- which ideas they feel drawn to;
- which ones they dislike and why;
- whether any idea triggers a stronger variation;
- whether there is a personal insight, workflow, or frustration worth incorporating;
- whether the chosen direction feels exciting enough to sustain the build.

The agent should challenge weak reasoning when necessary, but must not override the human silently.

**STOP GATE:** No architecture or implementation plan until the human explicitly selects or approves a direction.

---

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
