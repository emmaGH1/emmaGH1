# phase 6: demo

> load right after the concept is picked (to lock the judge story), again once the core flow works (to capture and build the video), or on "demo pass".

demos win hackathons. judges spend a few minutes per project and most of them only watch the video. a strong product with a weak video loses to an average product with a clear one.

the target is a **product film that also proves the product works**: cinematic story, the real ui rebuilt in code and animated (sharp at any zoom), plus an unbroken live capture so no judge wonders if it's real. everything runs on the vps:

```
real app ──playwright──▶ live capture + 4k screenshots + timeline.json + real api data
real components + real data ──remotion──▶ exploded-ui scenes
paper edit → look stills → rough cut → polish ──remotion──▶ final.mp4
```

---

## part a: the judge story (lock this before deep building)

answer in `docs/JUDGE_STORY.md`:

> what will the judge literally see in the strongest 60 seconds?

it needs:

- an immediate problem cue
- one meaningful user action
- visible sponsor/technical proof
- a clear result
- an obvious before/after
- **one demo moment** the judge could still describe the next day

if you can't picture an exciting judge story, the concept is probably still weak. go back to ideation.

**real flow vs judge flow.** document both. the judge flow is the shortest honest path that proves the value. it may use a seeded account, preloaded data, a logged-in session or a reset script. **remove setup, never substance.** never fake the core action, the sponsor integration or the result.

---

## part b: the video structure

**length is flexible.** the event's limit always wins (check `docs/JUDGING.md`). with no limit, aim for 90s. scale the beats, keeping the order:

| beat | what's on screen | source | 60s | 90s | 120s |
|---|---|---|---|---|---|
| 1. story hook | the problem as a story: kinetic type over stock or abstract visuals, one recurring data motif (a counter, a ticker, a stack of cards) | b-roll + motion | 8s | 12s | 15s |
| 2. logo reveal | name + one-line promise | motion | 3s | 4s | 5s |
| 3. exploded ui | the real interface rebuilt from your components, tilted in 3d, spotlit, key pieces pulled out and animated. this shows **how it thinks** | remotion + real components + real data | 14s | 24s | 30s |
| 4. live proof | an unbroken capture of the real app doing the core action, inside the frame, with zooms on results. this shows **it works** | playwright capture + screenshots | 20s | 30s | 40s |
| 5. payoff | the result that matters, as a number or before/after. **real outputs only** | motion + real data | 8s | 10s | 15s |
| 6. close | logo, url, repo, sponsor tech named | motion | 7s | 10s | 15s |

**the proof rule:** at least a third of the runtime is continuous live capture of the real app. the exploded ui makes it beautiful; the capture makes it believable. if time is short, cut the hook and the exploded ui down before touching the live proof.

**the honesty rule:** exploded-ui scenes render your real components with data the app actually produced (saved during capture, see step 2). never invent revenue, users, ratings or charts. a projection is labelled "projected".

---

## part c: the gates (how a video gets made)

never build the whole video in one pass. each gate needs the human's yes before the next starts. this is what stops expensive rebuilds.

| gate | what the agent shows | human decides | model |
|---|---|---|---|
| 1. intake | one message of questions, each with a default: length, refs, music, ending, what must never appear | answer, or "defaults" | opus |
| 2. paper edit | the beat list: narration lines in order, the designed picture for each beat, the source of each | approve the story | opus |
| 3. look | 2–3 **stills** of real frames (rendered with `remotion still`) in different looks: type, color, grade, frame style | pick one | opus |
| 4. rough cut | the whole video at real timing, no polish. low-res draft render | notes on structure | sonnet |
| 5. polish | motion, captions, grade, sound. preview renders of changed ranges only | notes by frame | sonnet |
| 6. final | the high-quality render | "render" | sonnet |

**the usage rule:** on the $20 claude plan, opus only plans (gates 1–3). switch to sonnet for building and revision rounds (gates 4–6). chatgpt handles capture scripts and render/ffmpeg errors. opus on heavy build rounds burns the limit fast.

**revision notes that work** (the human writes these, the agent follows them):

- by frame or timestamp, with a screenshot when possible: `frame 2140: the card pull-out feels jittery, smooth it with the same easing as the logo reveal.`
- if a problem repeats, say **"fix it everywhere"**, and the agent audits the whole timeline, not just that spot.
- notes that don't work: "make it better", "more premium", "make it like this".

---

## part d: the look (how motion and product connect)

the goal is one continuous piece, not "intro video, then screen recording, then outro".

**references are the cheapest quality upgrade.** put 1–3 videos you like in `demo/refs/` and write exactly what to take from each in `demo/refs/NOTES.md`:

> `ref-a.mp4`: take the warm dark grade with one accent glow, the word-by-word captions with the key word in the accent color, the tilted 3d ui with a spotlight, and the eased camera moves. something changes every 2–3 seconds.
> `ref-b.mp4`: take how the integration logo lands with cards flying into it.

the agent measures the refs (shot length, caption style and motion, camera moves, palette, sound density) and copies the **technique**, never the content.

**signature moves for product films:**

| move | what it is | where |
|---|---|---|
| match cut | the hook's last word or shape becomes the next scene's first element | hook → logo, logo → ui |
| 3d tilt + spotlight | the ui on a tilted plane in perspective, everything dim except one area | exploded ui |
| card pull-out | a real component lifts off the ui, scales up and floats with depth of field behind | exploded ui, payoff |
| number morph | a value animates to its new state (`$95 → $119`), split-flap or rolling | hook motif, payoff |
| push into the frame | the camera moves into the browser frame until the app fills the screen | exploded ui → live proof |
| pull back | everything recedes to reveal the logo and url | payoff → close |

**rules:**

- **one easing family**, ease-in-out. camera moves 400–700ms. text in ~300ms, out ~200ms.
- **move only when attention shifts.** no slow creep or zoom on every line. alternate wide and tight.
- **a designed picture for every idea**, with at least three kinds in the video: real ui lifted into frame, kinetic type, a data graphic, live capture.
- **captions:** one line, fixed position, word by word, **at most one** highlighted key word per line. no bouncing, no emoji. captions end at the cut, never spill across it.
- **one visual system:** fonts, palette and motif from `docs/DESIGN.md`, plus the grade from the chosen look still.
- **sound:** narration cleaned and leveled, music ducked under it, sound effects **only** when something moves, enters or lands. silence between scenes feels broken.
- **speed ramps for slow real steps:** 2–4x with a small "4x" label. honest, and no dead air.

**the default look to avoid** (what agents produce with no direction):

- captions over stock, with a random stock clip under every noun
- a zoom on every sentence
- bouncing auto-captions with a highlighter pill or emoji
- a whoosh on every cut, music wall to wall at one level
- invented tweets, dashboards, reviews or numbers
- the same template look every time

also run the anti-slop list from `phases/04-design.md` on the video.

---

## part e: make the app camera-ready

do this while building, not at the end:

- add `data-demo="..."` attributes to every element the demo touches (`data-demo="cta"`, `data-demo="submit"`, `data-demo="result"`). scripts stay stable when the ui changes.
- important text is readable at 1080p. nothing critical is hover-only or hidden in a kebab menu.
- state changes are visually obvious. loading states show progress. success has a clear payoff.
- leave room for the cursor so it doesn't cover the result.
- build `demo/reset-demo.ts` (or a reset endpoint) that puts the app back in a known starting state.
- **keep key ui pieces as standalone components** that render from props (a result card, a verdict panel, a chart). the exploded-ui scenes import exactly these.

---

## part f: the pipeline

### folder layout

```
demo/
  run-demo.ts        # playwright: drives the real app, records it
  reset-demo.ts      # puts the app back in a known state
  script.md          # narration, split into scenes
  paper-edit.md      # gate 2: beats, narration, designed picture, source
  refs/              # 1-3 reference videos + NOTES.md (what to take from each)
  broll/             # chosen stock clips, one folder per beat
  CREDITS.txt        # source url + license of every external clip, font, track
  video/             # remotion project
  out/               # gitignored: capture.webm, shots/, timeline.json, data/, audio/
```

gitignore `demo/out/`, `demo/video/out/` and large files in `demo/refs/` and `demo/broll/`.

### step 0: vps setup (once)

```bash
node -v                                    # needs 22+
sudo apt install -y ffmpeg
npx playwright install --with-deps chromium
npx skills add remotion-dev/skills         # official remotion agent skills; pick pi
cd demo && npx create-video@latest video   # blank typescript template
cd video && npx remotion browser ensure    # installs the headless browser remotion renders with
free -h                                    # renders need ~4gb ram; add swap if less
```

put the remotion project inside the app's repo so it can import the app's real components (path alias to `src/components`, and remotion's tailwind integration if the app uses tailwind). if a component pulls in server-only code, wrap it in a props-only version rather than re-drawing it by hand.

### step 1: capture (chatgpt writes it, from the template below)

rules for the script:

- drive the **real** app with real mouse events so the injected cursor shows.
- wait for real ui state (`waitFor`), never blind sleeps for app logic.
- three paces: **navigate** (quick, smooth), **decide** (arrive, pause ~350ms, click), **reveal** (move the cursor away, hold still 2–3s).
- type progressively where typing matters.
- call `mark("label")` at every beat in `paper-edit.md`. those timestamps tell the edit where to cut and zoom.
- take a screenshot at every reveal. playwright's video is slightly soft, so **zoom-ins use the 4k screenshots, not the upscaled video**.
- run it 3 times in a row from reset. if it isn't reliable, fix the app or the script before building the video.

template (`demo/run-demo.ts`, run with `npx tsx demo/run-demo.ts`):

```ts
import { chromium, type Page } from "playwright";
import fs from "node:fs";

const BASE = process.env.DEMO_URL ?? "http://localhost:3000";
const OUT = "demo/out";
const VIEW = { width: 1920, height: 1080 };

// ---- timeline marks -------------------------------------------------
const marks: { label: string; t: number }[] = [];
let t0 = 0;
const mark = (label: string) =>
  marks.push({ label, t: +((Date.now() - t0) / 1000).toFixed(2) });

// ---- visible cursor (headless chromium draws none) -------------------
const CURSOR = `
addEventListener('DOMContentLoaded', () => {
  const c = document.createElement('div');
  Object.assign(c.style, {
    position: 'fixed', left: '-50px', top: '-50px', width: '22px', height: '22px',
    borderRadius: '50%', background: 'rgba(17,17,17,.85)', border: '2px solid #fff',
    boxShadow: '0 2px 10px rgba(0,0,0,.35)', pointerEvents: 'none',
    zIndex: '2147483647', transform: 'translate(-50%,-50%)',
    transition: 'width .12s, height .12s',
  });
  document.body.appendChild(c);
  addEventListener('mousemove', e => { c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; }, true);
  addEventListener('mousedown', () => { c.style.width = c.style.height = '16px'; }, true);
  addEventListener('mouseup',   () => { c.style.width = c.style.height = '22px'; }, true);
});`;

// ---- helpers ----------------------------------------------------------
let pos = { x: VIEW.width / 2, y: VIEW.height / 2 };

async function settle(page: Page) {
  // after a navigation the cursor div is new; nudge the mouse so it appears
  await page.mouse.move(pos.x + 1, pos.y + 1);
  await page.mouse.move(pos.x, pos.y);
}

async function moveTo(page: Page, sel: string) {
  const el = page.locator(sel).first();
  await el.waitFor({ state: "visible" });
  await el.scrollIntoViewIfNeeded();
  const box = await el.boundingBox();
  if (!box) throw new Error(`no box for ${sel}`);
  pos = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  await page.mouse.move(pos.x, pos.y, { steps: 25 });
}

async function click(page: Page, sel: string, label?: string) {
  await moveTo(page, sel);
  await page.waitForTimeout(350); // "decide" pause
  if (label) mark(label);
  await page.mouse.down();
  await page.mouse.up();
}

async function type(page: Page, sel: string, text: string) {
  await click(page, sel);
  await page.keyboard.type(text, { delay: 45 });
}

async function reveal(page: Page, waitFor: string, label: string, hold = 2500) {
  await page.locator(waitFor).first().waitFor({ state: "visible" });
  mark(label);
  pos = { x: VIEW.width - 90, y: VIEW.height - 90 }; // get the cursor out of the way
  await page.mouse.move(pos.x, pos.y, { steps: 20 });
  await page.screenshot({ path: `${OUT}/shots/${label}.png` });
  await page.waitForTimeout(hold);
}

// ---- run -------------------------------------------------------------
async function main() {
  fs.mkdirSync(`${OUT}/shots`, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: VIEW,
    deviceScaleFactor: 2, // 4k screenshots for crisp zooms
    recordVideo: { dir: OUT, size: VIEW },
  });
  await ctx.addInitScript(CURSOR);
  const page = await ctx.newPage();
  t0 = Date.now();

  // ===== judge flow: replace with your app's steps ======================
  await page.goto(`${BASE}/`);
  await settle(page);
  await reveal(page, '[data-demo="hero"]', "landing", 3000);

  await click(page, '[data-demo="cta"]', "enter-app");
  await settle(page);
  await type(page, '[data-demo="input"]', "your realistic demo input here");
  await click(page, '[data-demo="submit"]', "core-action");
  await reveal(page, '[data-demo="result"]', "result", 3500);
  // ======================================================================

  await page.waitForTimeout(1000);
  const video = page.video();
  await ctx.close();
  await browser.close();
  fs.renameSync(await video!.path(), `${OUT}/capture.webm`);
  fs.writeFileSync(`${OUT}/timeline.json`, JSON.stringify(marks, null, 2));
  console.log("done:", marks.length, "marks →", `${OUT}/timeline.json`);
}

main().catch((e) => { console.error(e); process.exit(1); });
```

### step 2: save the real data

the exploded-ui scenes need the data the app actually produced. extend the capture script with a `page.on("response", ...)` listener that saves the json from your app's key api routes to `demo/out/data/<route>.json`. the remotion scenes load those files as props. every number on screen then traces back to a real response.

### step 3: b-roll (only if the hook needs it)

- searches name things a camera can see ("receipt printer close up", "ferry deck crowd"), never concepts ("growth", "success").
- sources for a submission: **pexels, pixabay, mixkit** (free licenses; pexels and pixabay have free api keys), museum open-access archives, or your own footage. no film or tv clips. cosmos and pinterest clips belong to their uploaders, so they're fine as references, not in the final video.
- 6–8 candidates per beat, trimmed to the useful seconds. show a numbered contact sheet (3 frames per clip) and let the human pick.
- log every source in `CREDITS.txt`.
- if a site shows a captcha, security check or login wall, stop and tell the human. never get around it.
- no good b-roll? kinetic type and abstract motion in the app's visual system beat generic stock.

### step 4: narration (claude writes it, at gate 2)

- `demo/script.md`, one short scene per beat. narrate **meaning, not clicks**: not "now i click submit", but "it matches every invoice to its payment and flags the three that don't add up."
- draft voice: free local tts. final voice: elevenlabs, **only after gate 2 is approved**, one clip per scene so one bad sentence costs one clip.
- captions come from `script.md` word for word, timed to the voice. speech recognition is only a timing aid; it never replaces the script.
- if a clip runs longer than its footage, slow the reveal holds in the capture and re-run it, rather than speeding up the voice.

### step 5: build in remotion (gates 3 to 6)

hand the agent: `paper-edit.md`, `refs/NOTES.md`, `out/timeline.json`, the `out/shots/` list, `out/data/` and `docs/DESIGN.md`. it follows the remotion skills for syntax; it doesn't guess the api.

- **gate 3:** render 2–3 look stills with `npx remotion still` and send them. nothing else gets built until one is picked.
- **gate 4:** assemble the full timeline at real timing with plain cuts. render a low-res draft.
- **gate 5:** add motion, captions, grade and sound. after each round, render only the changed range as a preview, not the whole video.
- **gate 6:** final render only after the human says "render":

```bash
npx remotion render <composition-id> out/final.mp4
```

- get every render to the phone (download it in t3 code, or a private route on the vps). watch it **as a judge**: once with sound, once muted.
- check: length within the limit, 1080p, voice clear over music, no dead air over ~2s, url readable at the end.

---

## part g: demo readiness score

score each 1–5 before the final render. fix the lowest first.

| dimension | question |
|---|---|
| clarity | can a stranger get it in 10 seconds? |
| speed | do we reach the real product by ~15s? |
| proof | is there continuous live capture of the core feature working? |
| sponsor | is the required tech visibly essential, not decorative? |
| honesty | does every number on screen trace back to real app output? |
| legibility | is every important result readable on a phone screen? |
| craft | does it avoid every item on the default-look list? |
| memorability | is there one distinct demo moment? |
| narration | does the audio explain meaning, not clicks? |

---

## part h: fallbacks and timing

- don't fake latency away. if a real call is slow, put narration over it, show real progress, use a labelled speed ramp, or restructure the flow.
- a flaky external dependency can fall back to a seeded state or a previously captured valid response, **only if it's labelled** and never presented as happening live.
- **time crunch ladder** (use the highest rung you can finish):
  1. full product film: hook + exploded ui + live proof + payoff + captions + sound
  2. no hook, no exploded ui: logo → live proof with zooms → payoff → close, with narration and captions
  3. live capture + narration + plain title and end cards (hyperframes or plain ffmpeg is fine here)
  4. never: motion graphics with no real product shown
- **timing:** judge story locked within an hour of picking the idea. first rough capture as soon as the core flow works, even if ugly. gates 1–3 can run while the app is still being built. reserve the last ~20% of the hackathon for gates 4–6.

---

## part i: the reusable kit (build once, not per hackathon)

per-hackathon video work should be swapping content, not building motion from scratch. build these once as remotion components, with tourIQ-style refs, and keep them in a separate repo (`emmaGH1/demo-kit`). copy them into `demo/video/` at the start of each hackathon:

- `KineticCaption`: word-by-word, one accent word, fixed position, ends at cuts
- `TiltSpotlight`: wraps any component in a 3d tilted plane with a moving spotlight and depth of field
- `CardPullOut`: lifts a child component off the plane, scales and floats it
- `NumberMorph`: rolling or split-flap value change
- `LogoReveal`: match-cut-friendly logo + tagline
- `BrowserFrame`: the frame the live capture plays in, with push-in and pull-back
- `ZoomShot`: push-in on a 4k screenshot to a target rectangle
- `EndCard`: logo, url, repo, sponsor line
- `Atmosphere`: grade, grain and glow background driven by the app's palette
- `SoundBed`: music with automatic ducking under narration, plus sfx hooks for land/enter events

each component takes the app's design tokens as props so every product gets its own look from the same kit.
