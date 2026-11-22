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
5. **if it was a lane event:** one line in `lane.md`, and copy core improvements back to `templates/core/`. mark any note used in `problems.md`.
6. **change a rule only on evidence:** what a winner's repo, the judges' feedback or the event's published process shows, not a guess about why we lost. a guess goes in `results.md` as a hypothesis. that's how v3 grew to 6,600 words.
7. **if you placed:** one line on what worked, in `cases.md`.
8. **ask for feedback** when the event offers it (draft the message; the human sends it).
9. **one continuation, tracked apart from placing:** if anyone showed interest, pick one: a sponsor sample or showcase, a grant or accelerator round, or carrying the audience or unsolved problem into the next event. one line in `results.md`.
