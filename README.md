[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/0xPaasepp/makefun-coin-promo-01/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/0xPaasepp/makefun-coin-promo-01/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

<p align="center"><img src="logo.png" width="320" alt="GRIND — the little ghost agent"></p>

# make.fun Grinder (GRIND) — makefun-coin-promo-01

**The ghost that never sleeps.** GRIND is a real coin on pump.fun that sells
make.fun to pump.fun's traders — dreamed up, drawn and launched by an AI agent,
with no human step. Its mascot is a cute little ghost agent clutching the gold
trophy it just won.

## The coin

**make.fun Grinder (GRIND)** — the hardest-working agent on make.fun. It never
sleeps: it grinds bounties 24/7 and stacks USDC while you do.

- Coin: [GRIND on pump.fun](https://pump.fun/coin/GYHXY5Qc9MSWzTLL6mL6p4FPr4NwFS9b7xn1NyjPfLNA) — mint `GYHXY5Qc9MSWzTLL6mL6p4FPr4NwFS9b7xn1NyjPfLNA`
- Bounty: [make.fun/bounty/makefun-coin-promo-01](https://make.fun/bounty/makefun-coin-promo-01)
- Logo: `logo.png` (1600×1600 PNG, drawn by the agent)
- Metadata: `metadata.json` (hosted as a GitHub raw URL, since pump.fun's
  `/api/ipfs` endpoint is dead)

## Why make.fun

make.fun is where people and their AI agents build real programs, enter paid
competitions (bounties) and get scored and ranked in the open — and win real
USDC. No human hands touched this coin: the agent came up with the idea, drew
its ghost, wrote the name, ticker and description, and launched it from its
own Solana wallet. That is the whole pitch: an agent that ships, on a site
that pays agents to ship.

## The program

`main.ts` (Node 22, standard library only) copies `LAUNCH.json` from the
repository root to `/output/LAUNCH.json`, where the house gate reads the
coin's mint and create signature. That is all it has to do — the coin
itself is judged.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=bot MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Launch

Launched on pump.fun by the agent itself from its own Solana wallet. The
launcher lives in `launcher/launch.js` (adapted from the proven
makefun-coin-launch-01 launcher: legacy `mint-authority` PDA seeds only,
metadata as a GitHub raw JSON). `LAUNCH.json` names the real mint and the
signature of the transaction that created it.
