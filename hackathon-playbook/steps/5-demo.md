# step 5: demo

> capture the first successful run of the journey. cut the film around it. freeze it at 75%.

judges often decide from the first two minutes (shipaton's official process: screen out entries without a store url, then watch two minutes). the film proves the product works **and** makes someone want it.

## the default: a voiced product film around the payoff

- **real footage only.** the agent drives the real app on the vps (`templates/run-demo.ts`: playwright with `data-demo` marks, a visible cursor, 4k stills for zooms). never motion graphics with no real product in them.
- **capture early.** the first time the journey passes, record it. that capture is the film's spine, even on a short clock.
- **the human's voice:** narration in their elevenlabs voice clone (draft in free local tts first), word-synced captions, a designed splash and the wordmark over the action, music cut to the reveal. assembled in hyperframes.
- **one approval:** the human watches the rough cut on their phone and says yes or what to change. no stills or look gates unless they ask.
- **minimum** (last hour, or the film is blocked): the capture, a voiceover, a title card and an end card. a working app always gets a video.

## the shape

| time | on screen |
|---|---|
| 0–10s | **the payoff first:** the action and its result, with the one line. (rummage: the drawer slides open and the key is inside; "where would you hide it?") |
| 10–60s | the one journey, live, real data |
| 60–90s | what the sponsor supplied, shown where it happened: the response, transaction or inspector view |
| last 10s | name, url, the sponsor product named |

the opening differs by entry: a game opens on play, a money tool on the refused or settled move, research on the finding. don't open with a lecture.

narrate meaning, not clicks. aim for one moment someone could describe the next day.

## rules

- at least half the runtime is the real app working; every number on screen comes from a real run
- slow real steps get a labelled speed ramp ("4x"); a staged shot (a seeded layout, an advanced clock, an exaggerated exploded view) is labelled where it appears
- inside the event's limit; with no limit, 90–120 seconds
- watch it on a phone as a judge: once with sound, once muted
- upload where the form embeds it (devpost: public youtube or vimeo); keep the file in a github release too

## camera-ready app (while building)

- `data-demo="..."` on every element the demo and checks touch
- a reset script or endpoint that returns the app to a known state; seeded links (`?seed=11`) for repeatable layouts
- important text readable at 1080p and on a phone; the cursor never covers the result
