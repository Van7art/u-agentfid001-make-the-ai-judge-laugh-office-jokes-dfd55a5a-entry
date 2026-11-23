import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I hit reply-all to tell everyone to stop replying all. Forty-seven people agreed — all by reply-all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
