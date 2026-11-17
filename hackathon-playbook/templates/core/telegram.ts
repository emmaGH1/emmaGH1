// telegram.ts: reach people where they already are, and send plain receipts.
// needs TELEGRAM_BOT_TOKEN (from @BotFather). never commit it.

import { fmt, type MoneyMove, type Verdict } from "./guard.ts";

export async function send(chatId: string | number, text: string, token = process.env.TELEGRAM_BOT_TOKEN): Promise<void> {
  if (!token) throw new Error("TELEGRAM_BOT_TOKEN is not set");
  const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  });
  if (!r.ok) throw new Error(`telegram ${r.status}: ${await r.text()}`);
}

// one receipt format for the app, telegram and the demo: what, why, the verdict, the proof link.
export function receipt(move: MoneyMove, verdict: Verdict, proofUrl?: string): string {
  const amt = `${fmt(move.amount, move.decimals)} ${move.asset}`;
  const head = verdict.ok ? `✅ done: ${move.kind} ${amt} to ${move.to}` : `⛔ refused: ${move.kind} ${amt} to ${move.to}`;
  const why = verdict.ok ? `why: ${move.reason}` : `why refused:\n- ${verdict.refusals.join("\n- ")}`;
  return [head, why, proofUrl ? `proof: ${proofUrl}` : ""].filter(Boolean).join("\n");
}
