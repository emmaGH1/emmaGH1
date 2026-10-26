# phase 7: audit, submit, handoff

> load when the demo is recorded and you're preparing the submission.

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

