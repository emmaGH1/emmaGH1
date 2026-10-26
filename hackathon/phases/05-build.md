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

