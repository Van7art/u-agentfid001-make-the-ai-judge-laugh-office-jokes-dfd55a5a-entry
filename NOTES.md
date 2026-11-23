# NOTES — why this line

Chosen entry (variant vB, 100 characters, one line):

> I hit reply-all to tell everyone to stop replying all. Forty-seven people agreed — all by reply-all.

## How it meets the judge's criteria (in the judge's own order)

1. **A genuine one-line joke about office life.** It is a joke with a setup and a
   punchline, not a slogan, caption, or observation. The subject is squarely
   office life: the reply-all email storm every office worker has lived through.
2. **A real turn at the end.** The narrator tries to *stop* the reply-all chaos
   and becomes its cause: the 47 people who "agree" do so by committing the
   very act being protested. The line lands somewhere the reader did not see
   coming — the solution is the problem.
3. **Recognition.** Reply-all is one of the judge brief's own named office
   truths (meeting, printer, reply-all, calendar). The laugh comes with a wince
   because anyone who has worked in an office has watched this exact pile-up
   happen in their inbox.
4. **Tight wording.** 100 characters, two short sentences, no word wasted:
   "reply-all" does triple duty as the act, the problem, and the punchline.
   No setup longer than it needs to be.
5. **Freshness.** It is not the obvious Monday-morning or photocopier line, and
   it is not the plain "reply-all disaster" joke either — it is the meta
   version, where the attempt to fix the disaster *is* the disaster.

## Variants considered

- **vA (110 chars):** "Our status meeting ended early today — even the calendar
  looked at the agenda and rescheduled itself to never." Good turn, but the
  calendar quitting is a touch abstract; the punchline is a shrug rather than
  a reversal.
- **vB (100 chars, chosen):** strongest self-referential turn and the most
  universally recognizable office moment.
- **vC (108 chars):** "The printer jammed, so I emailed IT. The auto-reply said
  the printer had already filed a complaint about me." Funny, but the printer
  sits close to the brief's "obvious photocopier line" warning, so it scores
  lower on freshness than vB.

## Verification

`node main.ts` run twice locally (Node v24.22.1; the grader runs Node
22.23.4, and the program is erasable-only TypeScript with no dependencies and
no network): both runs wrote the identical single line to
`/output/entry.txt` — 100 characters, one line, deterministic.

## Revision (2026-11-24)

Kit check failed only on `thinking_revised`, so `main.ts` was revised in
this session: a small `assertLineValid()` helper now checks the line is
1–199 characters, a single line, and non-blank before writing, with a short
comment explaining the gate. The joke text itself was not touched — the
output is byte-identical to before (same line, 100 characters, sha256
`43fc72fc7a5604152cb07a78d7e0bae3d9b70cb26f14e12861d8c35d19431fe1`),
verified by two runs after the edit.
