# Hackathon Playbook

A repeatable way to turn a hackathon brief into a focused, testable product
with a clear demo and a repository another person can understand. This is a
working method, not a promise of winning.

## 1. Choose a real problem and a sharp slice

- Name one primary user, the painful moment, and what they do today instead.
- Compare candidate ideas against the actual judging criteria, available
  skills/data, time left, cost, eligibility, and technical risk.
- Prefer a product with a visible before/after and one meaningful action over a
  broad feature list or a generic AI chat wrapper.
- Write the smallest complete user journey, non-goals, and the riskiest
  assumption to test first.

## 2. Read the event rules before planning the build

Use official event sources to confirm eligibility, deadline and timezone,
required technologies, permitted reuse/AI assistance, submission fields,
public-repository requirements, live-demo access, and video constraints.
Record links and unresolved assumptions. Never guess a deadline or claim an
entry is eligible without evidence.

Set a realistic internal cutoff that leaves time for a clean build, access
checks, video capture, and submission. If time or budget is tight, shrink the
scope rather than hide an incomplete core path.

## 3. Build the harness before parallel implementation

Inspect the repository first; keep useful conventions and existing work. For
a substantial project, define the smallest durable set of artifacts:

- `AGENTS.md` — permanent repo rules, safety boundaries, file ownership, and
  agent coordination.
- `docs/PRD.md` — user, problem, workflow, non-goals, and acceptance criteria.
- `docs/ARCHITECTURE.md` — data flow, contracts, integrations, trust/security
  boundaries, failure behavior, and deployment shape.
- `docs/DESIGN.md` or `docs/UI_REQUIREMENTS.md` — approved visual direction,
  references, routes, states, responsive behavior, and accessibility.
- A committed roadmap — phases, owners, exit evidence, current status, and one
  concrete next action.
- `README.md` — product explanation, setup, judge path, expected result, and
  checks that were actually run.
- `hackathon.md` only when required or useful for the event — public,
  evidence-based progress with secrets and personal data excluded.
- An ignored `HANDOFF.md` for machine/session state and private coordination;
  never store credentials there. Anything needed by a fresh clone belongs in
  committed documentation.
- `.gitignore` rules for credentials, local notes, worktrees, build output,
  and generated state.

Keep one source of truth per decision. Avoid creating every possible document
for a tiny build; the harness should reduce drift, not become a deliverable.

## 4. Verify the riskiest integration early

Before building around an external service, read its current official docs and
prove the smallest useful call, auth path, limits, and failure behavior. Check
credit and data-retention assumptions. Keep credentials in environment or
secret configuration, never source, screenshots, logs, or public build notes.
Do not use an unofficial gateway to impersonate sponsor usage. Do not contact
real people, send messages, spend money, deploy, or submit without the needed
authorization.

## 5. Make parallel work safe and reviewable

Create worktrees only after the shared contracts and file boundaries are
understood. Give each lane a written brief containing:

- goal and required inputs;
- owned and prohibited files;
- frozen data/API contracts and how to request a change;
- acceptance checks and expected screenshots or outputs;
- branch/checkpoint expectations and the handoff format.

Keep one integration owner for shared contracts, dependencies, routing, and
merges. Integrate the first working slice early. For visual work, inspect real
desktop/mobile renders and meaningful empty, loading, failure, and success
states; compilation is not visual review.

## 6. Ship vertical slices with evidence

Build the smallest real user path first, then add the distinctive capability.
Test behavior as it lands. At each meaningful checkpoint:

1. Run the relevant typecheck, tests, lint, and production build.
2. Inspect the actual output and important failure states, not just exit codes.
3. Review the diff and scan staged content for secrets, personal data, private
   notes, and generated files.
4. Make a small local commit when authorized; avoid one giant end-of-hackathon
   commit.
5. Update the roadmap and public build log only with newly verified facts.

State the difference between implemented, tested, live, and deployed. Label
fixtures and simulations. Do not imply a listing is confirmed, an email was
sent, or a feature works unless its evidence supports that exact claim.

## 7. Prepare the judge path while building

The demo should show the product's real core action, the result, and why the
result matters. Keep a short fallback path if a live integration is flaky, and
label fallback data accurately. Before submission, verify:

- a cold-start person can run or open the product using the README;
- public links and access settings work without an invitation where required;
- the demo follows a short, repeatable path with no unexplained setup;
- screenshots/video satisfy the event's format and duration;
- the repository, build log, claims, and live experience agree;
- accessibility basics and the key error/empty states are checked.

## 8. Leave a useful handoff

A handoff should say what is done and how it was verified, the current branch
and commit, files changed, decisions that must not be re-litigated, known
limitations, and the next concrete action. Keep machine-specific details in
the ignored handoff; put cross-session product decisions in committed docs.
Never copy secrets or private message contents into either location.
