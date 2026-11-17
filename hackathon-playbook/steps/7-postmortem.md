# step 7: postmortem (20 minutes, when results are out)

a loss teaches nothing until it's compared with what won.

1. **find the winners.** the event page, the sponsor's x account, the gallery. open the top 3 and every winner in your track or bounty.
2. **add a row to `results.md`:** date, event, window, days built, placed, winner, what they had that we didn't, rule to change.
3. **check the known losing patterns** (`cases.md`):
   - sponsor core not live, or a different tool used where the sponsor's was expected
   - fiction or seeded data as the proof
   - low stakes: nobody loses anything without it
   - claims a judge couldn't check: no `evidence/`, no `JUDGES.md`, no `check-live`
   - the agent guessed the sponsor's api instead of using their skills, mcp or docs
   - missed a disqualifier
4. **look inside the winner's repo,** not just its readme: `AGENTS.md`/`CLAUDE.md`, `evidence/`, judges files, scripts. if they did something the playbook doesn't, note it in `cases.md`.
5. **lane log:** one line in `lane.md` (what this event added to the core, or learned about this user). copy core improvements back to `templates/core/`. mark the seed used in `seeds.md`.
6. **same reason twice → change `SKILL.md`.** a playbook that never changes after a loss is decoration.
7. **if you placed:** one line on what worked, in `cases.md`.
8. **ask for feedback** when the event offers it (draft the message; the human sends it).
