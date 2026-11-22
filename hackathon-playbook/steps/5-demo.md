# step 5: demo

> give the viewer a question they can answer from the footage before the narrator answers it. freeze the film at 75%.

judges often decide from the first two minutes (shipaton: screen out entries without a store url, then watch two minutes). the film proves the product works **and** makes someone want it. the repeated mistake in our films: the viewer hears the answer before they've had a fair chance to see it.

## 1. at first success (during the build)

- the first time the sponsor step passes in the real app, **record it**: the run, its source (response, receipt, transaction), the date, and a reset that returns to that state (`?seed=11`, a reset endpoint). this capture is the film's spine.
- no successful sponsor run, no sponsor shot. a replay of other data proves the replay path, not the sponsor. that's a red board at 25% (step 3), not an editing problem.

## 2. before scripting: the question

write three lines in `docs/PLAN.md` under the proof frame:

- **the viewer's question:** "which drawer would you open?" · "is it the market, or the token?" · "will the agent keep my line?" · "who keeps topping this up?"
- **the answers they might give**
- **the shot that settles it**, readable with no voice and no captions

## 3. the cut

**question → choice → consequence → sponsor evidence at the point of use → invitation to try.**

- **give the viewer a decision.** show the options, pause, then the answer. (rummage: three closed drawers, a beat, the tap. not a key found on the first pull in 3 seconds.)
- **follow one identifiable thing across every cut:** the same joke, drawer, payment or top-up. add a second case only when the comparison is the answer (pentryo: uni's drop sits near its expected move, inj lands off the line).
- **film the test that could fail:** the overwrite attempt, a plausible wrong drawer, the sender on a receipt. put the attempt right after the success; no diagram between them.
- **sponsor evidence against the precise claim**, where it does the job: the generated joint becoming the hiding place, the refusal beside the line it protected, the receipt under the red step.
- **compose for comparison on a phone:** both states on screen long enough to read. design the result state in the app for the camera; don't pan across a dashboard.
- **motion graphics need a job:** pose the question, rhyme a pattern until the viewer spots it, or carry a value to where it lands (kobo: the amount travels from the review bubble into the ledger row). cut titles that repeat the narration.
- **end on the invitation:** the exact link, example or lookup the judge can try. not a feature list, not a broken state.

## 4. finish

- **real product, honest labels.** the agent drives the real app (`templates/run-demo.ts`: playwright, `data-demo` marks, visible cursor, 4k stills). replays, staged shots and speed-ups are labelled where they first matter ("4x · edited recording").
- **voice:** narration in the human's elevenlabs clone (draft in free local tts), word-synced captions, music cut to the reveal. assembled in hyperframes.
- **the cold test** (a fresh agent, before the human sees it): play the decisive shot once, voice muted and editorial captions hidden. ask "what changed, and how could you tell?" if the answer has to quote the narrator, recut that shot.
- **one approval:** the human watches the rough cut on their phone and says yes or what to change.
- the event's real limit; export, upload where the form embeds it (devpost: public youtube or vimeo), keep the file in a github release, and **check the embed plays signed out**.
- **minimum** (last hour, or the film is blocked): the capture of the decisive moment, a voiceover, a title card with the question and an end card with the link. a working app always gets a video.

## camera-ready app (while building)

- `data-demo="..."` on every element the demo and checks touch
- a reset and seeded links for repeatable states
- the result state designed to read at phone size: the object, its previous state and the consequence together
