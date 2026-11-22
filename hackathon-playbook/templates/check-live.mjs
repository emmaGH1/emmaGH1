// scripts/check-live.mjs: for judges. re-checks every live claim the readme makes.
// node 20+, no install, no account, no money: `node scripts/check-live.mjs`.
// one check per scored claim in JUDGES.md. zero checks is a failure, not a pass.
// (the build's own progress board is scripts/status.mjs; this file is what judges run.)

const LIVE = process.env.LIVE_URL ?? "https://<live-url>";

const checks = [
  // {
  //   claim: "<a plain sentence the readme makes, e.g. 55 pieces of furniture, every joint from Lux3D>",
  //   run: async () => {
  //     // read it from the public source (live site, rpc, explorer api, sponsor api) and compare with evidence/<file>.json
  //     // return what you saw: "55 of 55 pieces have a Lux3D URDF on the live site"
  //   },
  // },
];

if (checks.length === 0) {
  console.log("FAIL  no claims to check yet. add one per scored claim in JUDGES.md.");
  process.exit(1);
}

let passed = 0;
for (const c of checks) {
  try {
    const saw = await c.run(LIVE);
    passed++;
    console.log(`PASS  ${c.claim}${saw ? ` · ${saw}` : ""}`);
  } catch (e) {
    console.log(`FAIL  ${c.claim}: ${e.message}`);
  }
}
console.log(`\n${passed} of ${checks.length} passed.`);
process.exit(passed === checks.length ? 0 : 1);
