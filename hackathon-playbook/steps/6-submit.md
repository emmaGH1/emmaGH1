# step 6: readme and submit (readme from 50%, freeze at 75%, submitted by 90%)

> judges don't read the code. most read the readme, the film and the form. the readme is the product page.

## the readme

### what it must do

a reader who has never seen it should, without reading code:

1. in **10 seconds**, know what they'd get to do and why it's worth doing
2. in **30 seconds**, explain in their own words what the sponsor's product does in it
3. **try exactly what they saw**: a link to a specific, repeatable example (rummage: the seeded room with the yellow chest)
4. tell what was generated, hand-built, precomputed or staged, where it matters
5. check the hardest claim without reading source code

### how it opens

open on the question this kind of entry answers first:

- **a game or creative build:** what do i get to do? → the action, shown moving
- **a consumer or money app:** what happens for me? → the result, with the sponsor's part visible
- **research or data:** what did they find? → the finding, with its denominator ("for every 100 near of new supply…")
- **a developer tool:** how do i use it? → one runnable example on the first screen

then, in this order:

1. **the banner:** a slim designed header, the wordmark over a real frame of the product (not a big logo competing with it)
2. **one line:** the promise in plain words
3. **three links at most:** try the example · ▶ the film (a thumbnail with a play button linking to youtube, not a "download" link) · judges start here
4. **the hero:** a short loop of the payoff from the real app (below 2 mb as a loading budget; a useful first frame, alt text and a visible caption). if the key detail gets illegible at that size, use two close stills.
5. **a caption that tells them what to try:** *"try the yellow chest in this room. one of its three drawers holds a key."*
6. **three or four plain sentences:** what the sponsor made possible, the one deliberate decision that shows you know what you're doing (*"the furniture is generated ahead of time, so you can play without an account or api key"*), and the variety (levels, modes, sharing)
7. **a second image only if it answers a different question** (rummage: the in-game "see how lux3d built this room" inspector, cropped so its labels read on a phone)

below the first screen: judges start here (90 seconds, no login) → how it works → built on <sponsor> (what it supplied, what we added) → proof table → run it (in `<details>`) → scope and limits (short; specifics linked).

### writing rules

- plain words. no task ids, code, file paths or test counts above "judges start here".
- numbers a non-technical reader feels: "55 pieces of furniture, every drawer opens" before "107 joints, 60 hinges".
- keep sentences that rule out work anyone understands: "no furniture joint was rigged by hand."
- put each disclosure where a reader would otherwise draw the wrong conclusion (the hand-built hiding spots when describing room secrets; a staged shot where it appears). the scope section holds requirements, tested environments and a report link. never open with caveats.
- no forced "first ever" claims.

### visuals (the agent makes them; real product only)

- the banner, the hero loop, one or two crops. phone-framed screenshots only for phone-first products; a landscape game stays landscape.
- a diagram only when it answers something the product can't show quickly; keep the relationship in a sentence too (mermaid renders on github, not everywhere).
- `<picture>` with light and dark variants only for marks that disappear on one theme; leave real product colours alone.
- small images in the repo with relative paths; the film in a release or on youtube.
- not: badge walls, stat cards as images, giant feature tables, sponsor-coloured card grids, test totals without named behaviours.

### the readme check (before freeze)

1. push, then open the **rendered github page signed out**, at desktop width and at phone width; screenshot both. motion stopped and `<details>` closed, the action and caption must still read.
2. **cold read:** a fresh agent with no project context gets only the rendered page for 30 seconds, answers before seeing the rubric, then is scored, one point each:
   1. in 10 seconds, can it say what it would do and why?
   2. in 30, can it explain the sponsor's part in its own words?
   3. can it reach the advertised example and reproduce the pictured result?
   4. can it tell what was generated, hand-built, precomputed or staged, where it matters?
   5. can it verify the hardest claim without reading code?
   6. at phone width, can it read the result and reach the main action?
   7. does the form preview answer the event's criteria on its own, with working public links?
3. fix the first failure, recheck links. **a broken main path or a misleading claim blocks release whatever the score.**

## the rest of the submission

### 1. disqualifier check

tick every line in `docs/BRIEF.md` with evidence: the store url opens, the mainnet transaction link works, the video is inside the limit, the repo is public, the team is listed, the commits are inside the window.

### 2. judges file and proof

- `JUDGES.md` complete: every scored claim with code, a test and a command. `node scripts/check-live.mjs` passes from a fresh clone.
- `node scripts/status.mjs` green on the deployed app.
- an ai crawler is known to judge: the landing page renders on the server with no wallet or login gate, and `/llms.txt` describes the product. otherwise skip it.

### 3. only when required, scored or worth handing to someone

- `SPONSOR_NOTES.md` (the dx report) from the friction log: version, expected, observed, reproduction, effect on the user, with measured numbers where you have them. bnb hack weighted it 25%; tim placed 3rd of 258 at jupiter mostly on one.
- `BUILDLOG.md`: dated, plain words, ideas dropped and why, failed tests and their fixes. no marketing.

### 4. the form (`SUBMISSION.md` first, in git)

the form is its own text, not the readme pasted (relative images, file links and anchors break when pasted). carry over the promise, the result and the evidence for each criterion, with absolute public links and the form's native media fields. preview the actual form.

- title and one line · description · repo, live url, video url
- track, plus **every bounty and award from the prize map** it qualifies for, each with the field that proves it
- sponsor products used · known limits · deadline in WAT

### 5. judge audit (one pass, a different model)

as the sponsor's judge, criteria open: can i tell what the sponsor supplied, what the builder added, and how to check both? what's the easiest reason to reject or forget this? then refute: for each claim in `JUDGES.md`, try to show it's false by running its command. fix the top 3 findings. nothing else.

**STOP:** the human approves and submits.

### 6. after submitting

- draft an x post for the human to approve: the hero loop or film, one line, the sponsor tagged
- tag the commit `submitted`; **don't push to the submitted repo** until results are out (judges may check commit dates); keep the live url and backend up
- note the results date in `docs/STATE.md` for step 7
