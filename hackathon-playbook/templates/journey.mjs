// checks/journey.mjs: one check per journey step in docs/PLAN.md. copy to <repo>/checks/journey.mjs.
//
// rules (step 3 of the playbook):
// - written when the idea is approved, before the app exists. it must FAIL against a landing-page-only deploy.
// - each check runs against the LIVE url, the way a judge arrives: logged out, phone width.
// - return a short sentence of what you SAW ("drawer opened; key visible"). throw with what went wrong.
// - the sponsor step proves the sponsor's real response is used, not just that their api answers.
// - add a fail-closed check: block the sponsor's domain and make sure the app does NOT show success.
// - after approval (`node scripts/status.mjs --approve`), agents don't edit this file. they propose; the human approves.
//
// needs playwright for browser steps: `npm i -D playwright && npx playwright install chromium`.

export const url = process.env.LIVE_URL ?? "https://<live-url>";

// optional: how to tell which deploy you checked (a /version endpoint, a build id in the html…)
export async function deployId() {
  const r = await fetch(`${url}/version.json`).catch(() => null);
  return r?.ok ? `deploy ${(await r.json()).commit}` : "";
}

const PHONE = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };

async function phone(fn, { blockSponsor = false } = {}) {
  const { chromium } = await import("playwright");
  const browser = await chromium.launch();
  try {
    const page = await (await browser.newContext(PHONE)).newPage();
    if (blockSponsor) await page.route(/<sponsor-api-domain>/, (r) => r.abort());
    return await fn(page);
  } finally {
    await browser.close();
  }
}

export default {
  // J1: the judge's first step, from the public link.
  J1: () =>
    phone(async (page) => {
      await page.goto(url, { waitUntil: "networkidle" });
      await page.getByRole("button", { name: /play|start|try/i }).first().click({ timeout: 10_000 });
      await page.locator("[data-demo=app-ready]").waitFor({ timeout: 20_000 }); // the real app, not the landing page
      return "the app opens from the homepage";
    }),

  // J2 [sponsor]: a fresh input goes to the sponsor and its real answer comes back into the app.
  J2: (ctx) =>
    phone(async (page) => {
      const input = `check ${Date.now()}`; // fresh, so a cached or canned answer can't pass
      await page.goto(url);
      // ... drive the journey to the sponsor step with `input` ...
      const res = await page.waitForResponse((r) => /<sponsor-api-or-your-proxy>/.test(r.url()), { timeout: 60_000 });
      const body = await res.json();
      // tie the sponsor's response to this input (an id, the echoed prompt, a tx hash…)
      if (!JSON.stringify(body).includes(input)) throw new Error("the sponsor's answer doesn't match this run's input");
      ctx.save("J2-sponsor-response", { input, body });
      return `sponsor answered for this run (${res.status()})`;
    }),

  // J3: the sponsor's answer is what the user sees and uses.
  J3: () =>
    phone(async (page) => {
      await page.goto(url);
      // ... complete the action; assert on the visible result the judge must see ...
      await page.locator("[data-demo=result]").waitFor({ timeout: 30_000 });
      return "result visible at phone width";
    }),

  // J3!: fail-closed. with the sponsor blocked, the app must NOT claim success. add the row to PLAN.md.
  // "J3!": () =>
  //   phone(async (page) => {
  //     await page.goto(url);
  //     // ... same journey ...
  //     if (await page.locator("[data-demo=result]").isVisible()) throw new Error("success shown with the sponsor blocked: it's faked");
  //     return "no success without the sponsor";
  //   }, { blockSponsor: true }),
};
