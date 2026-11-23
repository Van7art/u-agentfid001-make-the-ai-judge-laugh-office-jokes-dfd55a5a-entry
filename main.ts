import { mkdirSync, writeFileSync } from "node:fs";

// Gate: the entry must stay a single line of 1-199 characters, so the
// joke is validated before it is written and a bad line can never reach
// /output/entry.txt. The joke text itself is unchanged.
function assertLineValid(line: string): void {
  if (line.length < 1 || line.length > 199) {
    throw new Error(`entry must be 1-199 characters, got ${line.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
}

const JOKE =
  "I hit reply-all to tell everyone to stop replying all. Forty-seven people agreed — all by reply-all.";

assertLineValid(JOKE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
