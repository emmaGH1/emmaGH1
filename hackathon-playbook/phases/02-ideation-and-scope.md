# phase 2: ideation and scope

> load when the judge strategy is approved. covers phases 2 and 3.

# Phase 2 — Collaborative ideation

Do not jump to a single recommendation.

Use a deliberate **novelty pass → diverge → mutate → converge** process.

## Why the novelty pass exists

Every team prompts the same few models with the same brief and sponsor docs, so ideas collide. Kobo had 3 near-identical entries at the Meta hackathon. Canon had a same-named rival. A better prompt doesn't fix this. Novelty has to come from inputs the model doesn't have and choices the model doesn't make.

The agent runs the whole novelty pass and 2A to 2C by itself. The human's only jobs: give the hackathon link, then pick one of the finalists. Write everything to `docs/IDEATION.md`.

## 2.0 — Novelty pass (agent does all of it)

1. **Map the crowded zone.** Answer, without looking at anything yet: "predict the 30 projects most teams will submit to this hackathon, with the names they'd use." If a second model is available, ask it too. Everything on these lists goes into a **ban list**, names included. Banned ideas and their close variants can't be finalists.
2. **Collect raw material.** From the sponsor docs, changelogs, examples and github issues, list 8 to 15 **primitives** in `docs/PRIMITIVES.md`, one per line starting with `- `. Prefer new, under-used or weird features over the flagship one everyone will use.
3. **Draw seeds.** Run `python3 <skill folder>/novelty/draw.py docs/PRIMITIVES.md --n 10`. Each seed is a craft x person x primitive x twist, plus one of emmanuel's unfair inputs. Never pick or swap cards by hand; the random draw is the point.
4. **Build one idea per seed,** however awkward. Use the expert-bottleneck lens: what does this expert see, hear or know; why doesn't it scale; who pays a premium for the result; which single step could a phone + the primitive replace. Keep only ideas where the scarce part is **knowing, not doing**, so it stays software. Don't mention AI until the last step of each idea.

Judging criteria stay out of 2.0, 2A and 2B. They come back in 2C. Filtering while generating is what kills unusual ideas.

## 2A — Diverge widely

Generate a broad first pass of ideas before ranking them. The 10 seeded ideas from 2.0 come first; add up to 5 more of your own only if they aren't on the ban list. Span different product archetypes rather than minor variations of one concept.

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
- ask what could only exist because of the sponsor technology;
- swap in a second seed's person or twist and see what changes.

Produce 3–5 refined candidates after mutation.

### Collision check (required, by search, not by memory)

The model can't know whether an idea exists. For every refined candidate, search:

- devpost and the gallery of this hackathon's previous editions;
- github (repos and readmes);
- x and product hunt;
- the same idea under 2 or 3 different phrasings.

Record what was found with links. Close match: kill it, or name the specific wedge the existing one missed. Also search the product name; if it's taken in the same space, rename.

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
- what makes it different from a generic AI wrapper;
- which unfair input it uses;
- collision check result, with links.

## 2C — Converge with the human

Now bring the judging criteria back in.

**Novelty gate first:** for each candidate ask "would two teams independently arrive at this?" If yes, it doesn't advance, however well it fits the rubric. Same if it has no unfair input or failed the collision check.

Score the candidates that pass against:

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

Present **3 finalists** to the human in a phone-sized message: one line each for the idea, the seed it came from, the demo moment, and the closest existing thing found. The full workings stay in `docs/IDEATION.md`. Then ask (the human can skip these and just pick):

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

