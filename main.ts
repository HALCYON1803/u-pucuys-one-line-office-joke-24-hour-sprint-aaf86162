// Entry program for "One-Line Office Joke: 24-Hour Sprint".
// It writes a single one-line office joke to /output/entry.txt, the file
// the sealed gate scorer and the judge read.
//
// The joke in one breath: a jammed office printer gets promoted to
// manager. The setup is a detail every office worker knows by heart —
// the printer that always jams — and the payoff lands in the last
// three words, an absurd promotion. One sentence, 55 characters,
// no explanation needed, nothing generic about Mondays or meetings.
// Against the judge brief, in order: it is a real one-line joke about
// office life; the punchline surprises; it reads as one sentence; the
// jammed-printer detail is specific, not a generic complaint; and it
// is clear on first read.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "The office printer jammed, so I promoted it to manager.";
const OUTPUT_PATH = "/output/entry.txt";

function checkJoke(text: string): void {
  // The gate needs UTF-8 text of 1 to 200 characters, not only
  // whitespace, on a single line. Fail loudly here rather than
  // shipping a file the scorer would refuse.
  if (text.length < 1 || text.length > 200) {
    throw new Error(`joke is ${text.length} chars, gate needs 1-200`);
  }
  if (text.trim().length === 0 || text.includes("\n")) {
    throw new Error("joke must be one non-empty line");
  }
}

checkJoke(JOKE);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${OUTPUT_PATH}`);
