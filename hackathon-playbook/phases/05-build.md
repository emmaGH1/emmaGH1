# phase 5: build, ship, review

> load when the implementation plan starts. covers riskiest-first, planning, branching and the review loop.

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


# Phase 11 — Review loop

For every meaningful implementation cycle:

1. the coding agent implements a bounded task.
2. Run relevant typecheck, tests, lint, and production build.
3. Inspect the real UI/output.
4. Human reviews the live behavior.
5. a second model critiques screenshots, flow, copy, and judge clarity.
6. Use a different model only when a second opinion is valuable.
7. the coding agent fixes.
8. Update `docs/CURRENT_STATE.md`.

For difficult bugs:

- provide the reviewer only the relevant error, files, attempted fixes, and expected behavior where possible;
- avoid burning API credits by sending an entire repository unless necessary.

---


---

## parallel lanes

agents work one task at a time per session. parallel work means the human running separate threads in t3 code, **one lane per thread, one git branch per lane**. the human's attention on a phone is the real bottleneck, so parallelism is limited on purpose.

### when to parallelize

| stage | mode | why |
|---|---|---|
| intake → ideation → scope | sequential | every lane depends on these decisions |
| harness + riskiest integration | sequential | if the sponsor api fails, nothing should be built on top of it yet |
| build | **2–3 lanes** | once scope, harness and the risky proof are done |
| final capture → video → audit → submit | sequential | needs the merged, stable app |

**time-short rule:** with under ~24 hours left, run one main lane plus a short design pass. parallel lanes pay off on multi-day hackathons.

### the default lanes

| lane | owns | model (see routing in the core file) | starts when |
|---|---|---|---|
| **a · core app** | backend, api routes, product screens: e.g. `src/app/(product)/`, `src/lib/`, `src/server/` | chatgpt account 1 | riskiest integration proven |
| **b · design** | logo, design probe, then landing page: e.g. `src/app/(marketing)/`, `public/brand/`, design tokens | claude opus for the probe and logo, claude sonnet for the landing page | scope approved |
| **c · demo** | `demo/`: judge story, paper edit, look stills, then capture and video | claude opus for planning, chatgpt for the capture script, claude sonnet for remotion | concept picked (planning); core flow works (capture) |

lane b's landing page code can move to chatgpt account 2 if claude's pool is low, once the design probe is approved.

### rules

1. **folder ownership.** each lane edits only its own folders. adjust the paths to the real repo and write them in `AGENTS.md` before lanes start.
2. **shared files are gated.** `docs/DESIGN.md`, design tokens, `package.json`, the db schema and `AGENTS.md` change only with the human's approval, in one lane at a time. a lane that needs a shared change stops and asks.
3. **one branch per lane:** `lane/app`, `lane/design`, `lane/demo`. each lane rebases on `main` before asking for a merge.
4. **merge one at a time**, after the human checks the preview. lane a merges first when there's a conflict.
5. **no product ui or landing page until the design probe is approved.** before that, lane a builds logic and unstyled screens only.
6. **at most 2 lanes need the human at once.** a lane waiting for approval parks with a clear question; it doesn't keep going.
7. **every lane updates its own section of `docs/CURRENT_STATE.md`** (`## lane a`, `## lane b`, `## lane c`) so any session can pick up where another left off.
8. **contracts first.** if lanes a and c both depend on data shapes (e.g. the demo's exploded-ui scenes use the app's components and api responses), lane a defines the types and props first and lane c builds against them.

### setting lanes up (the agent proposes, the human approves)

when the build phase starts, propose:

- which lanes to run (1, 2 or 3) given the time left
- the exact folder ownership per lane for this repo
- the branch names
- the first bounded task for each lane

then wait for the human's yes. after that, each new thread starts with: "hackathon playbook, lane [x]: read `AGENTS.md` and the lane [x] section of `docs/CURRENT_STATE.md`, then continue."
