// evidence.ts: an append-only, hash-chained log of what really happened, in evidence/log.jsonl.
// editing any past line breaks verify(). check-live can verify it and judges can re-run it.

import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname } from "node:path";

export type Entry = { seq: number; at: string; kind: string; data: unknown; prev: string; hash: string };

const json = (v: unknown) => JSON.stringify(v, (_k, x) => (typeof x === "bigint" ? x.toString() : x));
const sha = (s: string) => createHash("sha256").update(s).digest("hex");
const GENESIS = "0".repeat(64);

function lines(file: string): Entry[] {
  if (!existsSync(file)) return [];
  return readFileSync(file, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l) as Entry);
}

// kind: "move", "refusal", "tx", "api-run", "receipt", ... data: the raw output, not a summary.
export function record(kind: string, data: unknown, file = "evidence/log.jsonl"): Entry {
  mkdirSync(dirname(file), { recursive: true });
  const all = lines(file);
  const last = all[all.length - 1];
  const base = { seq: all.length, at: new Date().toISOString(), kind, data: JSON.parse(json(data)), prev: last?.hash ?? GENESIS };
  const entry: Entry = { ...base, hash: sha(json(base)) };
  appendFileSync(file, json(entry) + "\n");
  return entry;
}

export function verify(file = "evidence/log.jsonl"): { ok: boolean; count: number; brokenAt?: number } {
  const all = lines(file);
  let prev = GENESIS;
  for (const e of all) {
    const { hash, ...base } = e;
    if (e.prev !== prev || sha(json(base)) !== hash) return { ok: false, count: all.length, brokenAt: e.seq };
    prev = hash;
  }
  return { ok: true, count: all.length };
}
