// demo capture: drives the real app with a visible cursor, records 1080p video,
// takes 4k screenshots at each reveal, writes timeline marks for the edit.
// run: npx tsx demo/run-demo.ts  (DEMO_URL=https://your-app.vercel.app)
// rules: wait for real ui state, never blind sleeps; run it 3x from reset before trusting it.

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
