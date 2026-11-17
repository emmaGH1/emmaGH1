// guard.ts: checks a money move against a policy before anything is signed or sent.
// a refusal is a result, not an error: log it to evidence and show it. judges read refusals as proof of safety.

export type MoneyMove = {
  kind: string; // "transfer" | "swap" | "deposit" | "loan" | ...
  to: string; // address, account or merchant id
  asset: string; // "USDC", "NGN", ...
  amount: bigint; // smallest unit
  decimals: number;
  reason: string; // why the agent wants to do this, in plain words
};

export type Policy = {
  perMoveMax: bigint;
  dailyMax: bigint;
  allowTo?: string[]; // if set, only these
  denyTo?: string[];
  requireSimulation: boolean;
};

export type Check = { name: string; pass: boolean; detail: string };
export type Verdict = { ok: boolean; checks: Check[]; refusals: string[] };

export type GuardContext = {
  spentToday: bigint;
  // the sponsor's dry run: simulateContract, a quote api, a sandbox call. must hit the real thing.
  simulate?: (move: MoneyMove) => Promise<{ ok: boolean; detail: string }>;
};

export function fmt(amount: bigint, decimals: number): string {
  const neg = amount < 0n;
  const a = neg ? -amount : amount;
  const base = 10n ** BigInt(decimals);
  const whole = a / base;
  const frac = (a % base).toString().padStart(decimals, "0").replace(/0+$/, "");
  return `${neg ? "-" : ""}${whole}${frac ? "." + frac : ""}`;
}

export async function check(move: MoneyMove, policy: Policy, ctx: GuardContext): Promise<Verdict> {
  const amt = `${fmt(move.amount, move.decimals)} ${move.asset}`;
  const to = move.to.toLowerCase();
  const checks: Check[] = [
    { name: "positive amount", pass: move.amount > 0n, detail: amt },
    {
      name: "per-move limit",
      pass: move.amount <= policy.perMoveMax,
      detail: `${amt} vs limit ${fmt(policy.perMoveMax, move.decimals)}`,
    },
    {
      name: "daily limit",
      pass: ctx.spentToday + move.amount <= policy.dailyMax,
      detail: `${fmt(ctx.spentToday + move.amount, move.decimals)} today vs ${fmt(policy.dailyMax, move.decimals)}`,
    },
    {
      name: "recipient allowed",
      pass:
        !(policy.denyTo ?? []).map((x) => x.toLowerCase()).includes(to) &&
        (!policy.allowTo || policy.allowTo.map((x) => x.toLowerCase()).includes(to)),
      detail: move.to,
    },
  ];

  if (policy.requireSimulation) {
    if (!ctx.simulate) {
      checks.push({ name: "simulation", pass: false, detail: "required but no simulator given" });
    } else {
      try {
        const s = await ctx.simulate(move);
        checks.push({ name: "simulation", pass: s.ok, detail: s.detail });
      } catch (e) {
        checks.push({ name: "simulation", pass: false, detail: `failed: ${(e as Error).message}` });
      }
    }
  }

  const refusals = checks.filter((c) => !c.pass).map((c) => `${c.name}: ${c.detail}`);
  return { ok: refusals.length === 0, checks, refusals };
}
