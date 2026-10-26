# phase 6: demo

> load right after the concept is picked (to lock the judge story), again once the core flow works (to capture and record), or on "demo pass".

demos win hackathons. judges spend a few minutes per project and most of them only watch the video. a strong product with a weak video loses to an average product with a clear one.

the pipeline below runs entirely on the vps. no laptop needed:

```
real app ──playwright──▶ capture.webm + screenshots + timeline.json
script.md ──tts──▶ narration clips
video-plan.md ──hyperframes──▶ final.mp4
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

**length is flexible.** the event's limit always wins (check `docs/JUDGING.md`). with no limit, aim for 90–120s. the timings below are for a 2-minute cut; scale them, keeping the same order and proportions:

| target | hook | poster | proof | demo moment | how it works | close |
|---|---|---|---|---|---|---|
| 60s | 5s | 5s | 30s | 10s | cut | 10s |
| 90s | 6s | 6s | 45s | 13s | 10s | 10s |
| 120s | 8s | 7s | 60s | 15s | 15s | 15s |
| 180s | 10s | 10s | 90s | 25s | 25s | 20s |

proof always gets about half the runtime. when cutting, drop "how it works" before touching proof.

| time (2-min cut) | beat | what's on screen | source |
|---|---|---|---|
| 0–8s | hook | the problem in one line, motion title | motion |
| 8–15s | poster | landing page first fold | capture |
| 15–75s | proof | core action → sponsor tech working → result. zoom in on the key moments with short callouts | capture + screenshots |
| 75–90s | demo moment | the before/after or "wow" beat, given room to breathe | capture + motion |
| 90–105s | how it works | one simple architecture card, animated | motion |
| 105–120s | close | name, one-line pitch, live url, repo | motion |

**the 25% rule:** motion graphics take at most a quarter of the runtime. the real product is the proof, and motion is the packaging. a judge should never wonder "is this app real or just an animation?"

---

## part b2: transitions and camera (how motion and product connect)

the goal is one continuous piece, not "intro video, then screen recording, then outro". the trick: **the product lives inside a frame, and the camera moves around that frame.** motion graphics happen around and between it, never as a separate video glued on.

**the frame.** put the capture inside one consistent container: a minimal browser window or floating screen with a soft shadow, styled from `docs/DESIGN.md`. it's the anchor for every transition.

**transition per beat:**

| from → to | transition |
|---|---|
| hook → poster | the hook's headline text settles and becomes the landing page's own headline (match cut), or the camera pulls back from the text to reveal it sitting in the browser frame |
| poster → proof | the camera pushes into the frame until the app fills the screen. we're "inside" the product now |
| inside proof | push-in zooms on each reveal mark (screenshot, 1.0 → 1.15), cut back to full view for the next action. callouts are pinned to the real ui element, not floating randomly |
| proof → demo moment | freeze on the result, dim everything except the key element (spotlight), and the key number or state animates in |
| demo moment → how it works | the frame shrinks and slides into place as one node of the architecture diagram. the product becomes part of the explanation |
| how it works → close | everything pulls back, the frame fades, and the logo + url resolve in the app's typeface |

**rules that make it feel professional:**

- **one transition family.** pushes, pulls and match cuts with the same easing. no spins, wipes, glitch effects or template swooshes.
- **cut on the narration**, not on round numbers. every transition lands on the start of a sentence or a key word.
- **timing:** camera moves 400–700ms with ease-in-out. text in ~300ms, out ~200ms.
- **speed ramps for waits:** a slow real step can play at 2–4x with a small "4x" label. honest, and no dead air.
- **sound:** a quiet music bed ducked under the voice, plus optional subtle clicks on real clicks. silence between scenes feels broken.
- **consistent captions** in a fixed position the whole way through.

---

## part c: make the app camera-ready

do this while building, not at the end:

- add `data-demo="..."` attributes to every element the demo touches (`data-demo="cta"`, `data-demo="submit"`, `data-demo="result"`). scripts stay stable when the ui changes.
- important text is readable at 1080p. nothing critical is hover-only or hidden in a kebab menu.
- state changes are visually obvious. loading states show progress. success has a clear payoff.
- leave room for the cursor so it doesn't cover the result.
- build `demo/reset-demo.ts` (or a reset endpoint) that puts the app back in a known starting state.

---

## part d: the pipeline

### folder layout

```
demo/
  run-demo.ts       # playwright: drives the real app, records it
  reset-demo.ts     # puts the app back in a known state
  script.md         # narration, split into scenes
  video-plan.md     # beat sheet: time, visual, source, narration, on-screen text
  video/            # hyperframes project
  out/              # gitignored: capture.webm, shots/, timeline.json, audio/
```

add `demo/out/` and `demo/video/renders/` to `.gitignore`.

### step 0: vps setup (once)

```bash
node -v                                   # needs 22+
sudo apt install -y ffmpeg
npx playwright install --with-deps chromium
npx skills add heygen-com/hyperframes     # pick pi as the agent
npx hyperframes doctor                    # checks chrome, ffmpeg, node
free -h                                   # renders need ~4gb ram; add swap if less
```

### step 1: capture (chatgpt writes it, from the template below)

rules for the script:

- drive the **real** app with real mouse events so the injected cursor shows.
- wait for real ui state (`waitFor`), never blind sleeps for app logic.
- three paces: **navigate** (quick, smooth), **decide** (arrive, pause ~350ms, click), **reveal** (move the cursor away, hold still 2–3s).
- type progressively where typing matters.
- call `mark("label")` at every beat in `video-plan.md`. those timestamps tell hyperframes where to cut and zoom.
- take a screenshot at every reveal. playwright's video is slightly soft, so **zoom-ins use the screenshots, not the upscaled video**.
- run it 3 times in a row from reset. if it isn't reliable, fix the app or the script before recording anything else.

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

### step 2: narration (claude writes it)

- write `demo/script.md` as 5–6 short scenes that match the beats in part b. one file per scene: `01-hook`, `02-poster`, `03-action`, `04-result`, `05-how`, `06-close`.
- narrate **meaning, not clicks.** not "now i click submit", but "it matches every invoice to its payment and flags the three that don't add up."
- draft voice: hyperframes' local tts (free). final voice: elevenlabs, **only after the wording is locked**, one clip per scene so one bad sentence costs one clip.
- check each clip's length (`ffprobe`). if narration is longer than the matching footage, slow the reveal holds in the capture script and re-run it, rather than speeding up the voice.

### step 3: beat sheet (claude writes it)

`demo/video-plan.md`, one row per beat:

| time | visual | source | narration | on-screen text |
|---|---|---|---|---|
| 0–8s | problem title animates in | motion | 01-hook | "teams lose 6 hours a week to this" |
| 15–22s | click submit, zoom on result panel | capture @ `core-action` → shot `result.png` | 03-action | "3 breaks found" |

source column options: `motion`, `capture @ <mark>`, `shot <name>.png`.

### step 4: compose in hyperframes (claude, with the hyperframes skill loaded)

```bash
cd demo
npx hyperframes init video --non-interactive --video out/capture.webm
```

place the narration clips per scene inside the composition (timed from the beat sheet), not as one long track.

then hand claude: `video-plan.md`, `out/timeline.json`, the `out/shots/` list and `docs/DESIGN.md`. follow the hyperframes skill for composition syntax; don't guess it.

composition rules (and follow part b2 for every transition):

- **same visual system as the app:** fonts, palette, radius, motif from `docs/DESIGN.md`. the video should feel like the product, not a template.
- product footage is always legible: never shrunk below ~70% of the frame while it's carrying the story.
- zooms use the 4k screenshots, with a slow push-in (1.0 → 1.15) over the hold.
- callouts: 2–5 words, appear on the reveal mark, gone within 3s.
- captions from the narration (`npx hyperframes transcribe`). many judges watch muted.
- no fake ui inside the motion parts. motion explains; the capture proves.
- run the anti-slop list from `phases/04-design.md` on the video too.

### step 5: render and review

```bash
npx hyperframes lint
npx hyperframes render --quality draft --output renders/draft.mp4    # fast check
npx hyperframes render --quality high  --output renders/final.mp4    # final
```

- get the render to your phone (download it in t3 code, or serve `renders/` from a private route on the vps) and watch it **as a judge**: once with sound, once muted.
- check: length within the limit, 1080p, audio levels even, no dead air over ~2s, url readable at the end.
- if a render fails: `npx hyperframes doctor`.

---

## part e: demo readiness score

score each 1–5 before the final render. fix the lowest first.

| dimension | question |
|---|---|
| clarity | can a stranger get it in 10 seconds? |
| speed | do we reach real value by ~15s? |
| proof | is the core feature genuinely shown working? |
| sponsor | is the required tech visibly essential, not decorative? |
| legibility | is every important result readable on a phone screen? |
| reliability | did the capture pass 3 runs in a row from reset? |
| memorability | is there one distinct demo moment? |
| narration | does the audio explain meaning, not clicks? |

---

## part f: honesty and fallbacks

- don't fake latency away. if a real call is slow, put narration over it, show real progress, or restructure the flow.
- a flaky external dependency can fall back to a seeded state or a previously captured valid response, **only if it's labelled** and never presented as happening live.
- **time crunch ladder** (use the highest rung you can finish):
  1. full pipeline: capture + zooms + motion + narration + captions
  2. capture + narration + plain title and end cards
  3. screenshots with push-ins + narration
  4. never: motion graphics with no real product shown

## part g: timing

- the judge story is locked within an hour of picking the idea.
- first rough capture as soon as the core flow works, even if ugly. it exposes demo problems while there's still time to fix the app.
- reserve the last ~15% of the hackathon for the final capture, narration, render and review.
