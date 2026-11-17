# step 5: demo

> write the script at the 50% mark. record at 75%.

judges often decide from the first two minutes of the video. at shipaton that's the official process: screen out entries without a valid store url, then watch the first 2 minutes. the video's job is to **prove the product works**; craft comes second.

## the script

| time | on screen |
|---|---|
| 0–10s | who, what they lose, and the product name, in plain words |
| 10–60s | the one journey, live: the real app with real data |
| 60–90s | the proof: the transaction, api result or receipt, zoomed in |
| last 10s | name, url, and the sponsor product named |

narrate meaning, not clicks: not "now i click submit" but "it checks every hour against the rule and asks the one thing only you know." aim for one moment someone could describe the next day.

## who records

the agent does. the human works from a phone, so nobody records by hand: the agent drives the real app on the vps (playwright via `templates/run-demo.ts`, or computer use) and assembles the video with hyperframes. the human only watches drafts on the phone and approves.

## the ladder (default is rung 2)

1. **minimum:** an agent capture of the real journey, a voiceover, a title card and an end card, put together with hyperframes. possible even in the last hour, so a working app always gets a video.
2. **default:** an agent capture with `data-demo` marks, 4k screenshots for zooms, a narration draft in free local tts then elevenlabs for the final, and captions, all assembled in hyperframes.
3. **film:** a fuller product film (hyperframes, or remotion with exploded ui). only if the 75% mark was green with at least a full day to spare. build it in gates: look stills → rough cut → polish → render, each needing the human's yes.

never: motion graphics with no real product in them. the capture must show the real app running the real journey.

## rules

- at least half the runtime is the real app working
- every number on screen comes from a real run
- stay inside the event's limit; with no limit, 90–120 seconds
- slow real steps get a labelled speed ramp ("4x"), never a fake
- watch it on a phone as a judge: once with sound, once muted

## camera-ready app (while building)

- `data-demo="..."` attributes on every element the demo touches
- a reset script or endpoint that returns the app to a known starting state
- important text readable at 1080p; the cursor never covers the result
