// scripts/check-live.mjs: re-checks every live claim. no install, no account, no money.
// node 20+: `node scripts/check-live.mjs`. add one check per claim in JUDGES.md.

const checks = [
  {
    claim: "the live app answers",
    run: async () => {
      const r = await fetch("https://<live-url>/");
      if (!r.ok) throw new Error(`status ${r.status}`);
    },
  },
  // {
  //   claim: "<a real transaction / api result the readme cites>",
  //   run: async () => {
  //     // read it from the public source (rpc, explorer api, sponsor api) and compare to evidence/<file>.json
  //   },
  // },
];

let passed = 0;
for (const c of checks) {
  try {
    await c.run();
    passed++;
    console.log(`PASS  ${c.claim}`);
  } catch (e) {
    console.log(`FAIL  ${c.claim}: ${e.message}`);
  }
}
console.log(`\n${passed} of ${checks.length} passed.`);
process.exit(passed === checks.length ? 0 : 1);
