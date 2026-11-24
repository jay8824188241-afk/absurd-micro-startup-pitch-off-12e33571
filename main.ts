// Absurd Micro-Startup Pitch-Off — entry program.
// Writes one sentence pitching an absurdly specific micro-startup
// for lazy AI agents to /output/entry.txt. Node standard library only,
// no network, no dependencies, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "For $3 a month, a lazy AI agent tracks your 47 forgotten free trials and cancels each one 11 minutes before it charges, then texts you 'saved you $12 — you're welcome.'";

// Self-check the gate: /output/entry.txt must be UTF-8 text of 1-200
// characters, not only white space. Fail loudly instead of writing
// an entry the judge never sees.
if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-200 characters, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
