# step 6: submit (start at 75%, done by 90%)

## 1. disqualifier check

tick every line in `docs/BRIEF.md` with evidence: the store url opens, the mainnet transaction link works, the video is inside the limit, the repo is public, the team is listed, the commits are inside the window.

## 2. readme and judges file

- `README.md` (`templates/README.md`): proof before limits. set the github repo description and homepage too.
- `JUDGES.md` complete: every claim has code, a test and a command. `node scripts/check-live.mjs` passes from a fresh clone.
- **readable by ai judges** (more events screen with claude or gpt now): the landing page renders its content on the server with no wallet or login gate, internal links lead to how-it-works pages, and `/llms.txt` describes the product and api in one fetch.

## 2b. build log

`BUILDLOG.md` from `docs/STATE.md` and `docs/PLAN.md`, dated, in plain words: the ideas dropped and why, the hard part proven first, each failed test and its fix, what was left unverified. no marketing.

## 3. feedback / dx report

`SPONSOR_NOTES.md` from the friction log kept since hour 1: what the sponsor's product really did, each item tagged live read, test or fork, with measured numbers (latency p50/p95, gas, fees) where you have them (tim's `SPONSOR_BEHAVIOUR.md`). link any upstream issue or pull request. if the event scores feedback, this is it. bnb hack weighted it 25%, with report quality as a tie-break; tim placed 3rd of 258 at jupiter mostly on one. if the event bans generated reports, the human writes it in their own words from the log.

## 4. judge audit (claude opus, one pass)

as the sponsor's judge, with the brief's criteria open:

- do i understand it in 10 seconds?
- is our product essential here, or decorative?
- does every criterion have visible evidence?
- what's the easiest reason to reject or forget this?

then a refute pass (a different model): for each claim in `JUDGES.md`, try to show it's false by reading the code and running its command. anything that survives goes in the limits.

fix the top 3 findings. nothing else.

## 5. submission checklist (to the human)

write the form answers into `SUBMISSION.md` first, so the wording is in git, not retyped into a text box (mrnetwork's brokro).

- title and one-line pitch
- description (the readme's first three sections)
- repo, live url, video url
- track, plus **every bounty and special award it qualifies for**
- sponsor products used
- known limits
- deadline in WAT

**STOP:** the human approves and submits.

## 6. after submitting

- draft an x post for the human to approve: the video, one line, the sponsor tagged
- tag the commit `submitted`; keep the live url and backend up until results are out
- note the results date in `docs/STATE.md` for step 7
