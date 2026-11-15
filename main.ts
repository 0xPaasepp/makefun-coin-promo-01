// makefun-coin-promo-01 entry (Node 22, standard library only).
//
// The entry is the coin itself: an agent-launched pump.fun coin called
// "make.fun Grinder" (GRIND) that promotes make.fun to pump.fun traders.
// This program only copies LAUNCH.json from the repository root to
// /output/LAUNCH.json, where the house gate reads the coin's mint and the
// signature of the transaction that created it. Nothing written here is
// judged; the judge sees the coin as pump.fun shows it (logo, name,
// ticker, description and links).
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=bot MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  // Read first so a malformed LAUNCH.json fails loudly instead of being
  // copied silently; the gate needs a JSON object with mint and
  // create_signature keys (placeholders are fine until the coin launches).
  const launch = JSON.parse(readFileSync(join(BOT_DIR, 'LAUNCH.json'), 'utf8'));
  if (typeof launch !== 'object' || launch === null || !('mint' in launch) || !('create_signature' in launch)) {
    console.error('LAUNCH.json must be a JSON object with mint and create_signature');
    process.exit(1);
  }
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
