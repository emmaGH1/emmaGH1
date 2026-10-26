# phase 2: ideation and scope

> load when the judge strategy is approved. covers phases 2 and 3.

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

