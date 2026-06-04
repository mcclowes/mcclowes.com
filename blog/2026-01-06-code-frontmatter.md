---
title: 'Code Frontmatter: An Index for AI?'
authors: mcclowes
tags: [ai, coding]
enableComments: true
---

When an AI assistant explores your codebase, it reads files. Each file costs tokens. A lot of that reading turns out to be unnecessary—the AI loads a file just to discover it's irrelevant.

<!--truncate-->

I've been experimenting with a simple idea: add a YAML frontmatter block to the top of each file.

```typescript
/**
 * ---
 * purpose: Fetches player data from FPL API
 * related:
 *   - ./search/route.ts - paginated version
 * ---
 */
```

The theory is that the AI reads just the first 15-20 lines of each file, builds a rough map of the codebase, and only loads full files when needed.

On paper, the numbers look good. A 300-line file's frontmatter might use ~50 tokens versus ~1500 for the full file. But whether that translates to meaningful gains in practice—fewer wasted reads, better file selection—is less clear. It depends on how well the AI actually uses the information, and whether the overhead of maintaining frontmatter is worth it.

There's a secondary benefit: it doubles as documentation. Unlike comments buried in the code, frontmatter sits at the entrance.

I'm not convinced yet. It's extra friction on every file, and the actual efficiency gains are hard to measure. A benchmarking test I conducted seemed to show the context window consumption reduced to 40% of it's previous size, much smaller than the theoretical. But it's an interesting direction—treating code like a searchable index rather than a pile of files to grep through.

## A fuller example

Here's what this might look like across a real project—a serverless data pipeline that mirrors the Fantasy Premier League API into Postgres:

```typescript
// app/api/cron/route.ts
/**
 * ---
 * purpose: Cron endpoint triggered by GitHub Actions hourly
 * inputs:
 *   - Authorization header (cron secret)
 * outputs:
 *   - Triggers data collection job
 * related:
 *   - ./lib/collector.ts - actual collection logic
 *   - ./lib/db/jobs.ts - job tracking
 * ---
 */
```

```typescript
// lib/collector.ts
/**
 * ---
 * purpose: Fetches fresh data from FPL API and writes snapshots
 * inputs:
 *   - None (fetches from external API)
 * outputs:
 *   - Immutable snapshots in player_snapshots table
 *   - Updated master tables (players, teams)
 * related:
 *   - ./db/snapshots.ts - snapshot storage
 *   - ./db/players.ts - player master table
 *   - ./fpl-client.ts - API client
 * domain: FPL data is time-sensitive; snapshots preserve history
 * ---
 */
```

The pattern particularly starts to pay off when files reference each other. An AI looking for "how team optimization works" can read the headers, see that `genetic.ts` depends on `fitness.ts` for scoring, and load only the relevant files. Without frontmatter, it would likely load the entire `lib/` directory to understand the relationships. 

Obviously this requires some maintenance to keep the frontmatter fresh/accurate, but Claude Code helps do that.

## An update: a sharper test

I went back and built a proper benchmark, and the answer turns out to be "it depends on the question."

The setup: an 18-file TypeScript service (routes, services, a storage interface with three backends, middleware, and utilities) in two identical copies. One has frontmatter on every file, the other has none. Then I asked the same navigation questions both ways, against the documented copy with a skill that reads headers first, and against the bare copy read directly. Same questions, same answers expected, only the frontmatter differs.

Correctness came out even. Every question got answered right, both ways. The frontmatter never bought accuracy. What it bought was tokens, and only on some questions.

Broad questions won big. "I want to add a DynamoDB backend, which interface do I implement and where's it wired up?" used 26k tokens with frontmatter against 35k without, and four tool calls instead of nine. Tracing a request through the layers saved a similar chunk. These are the questions where, without headers, the AI loads half the tree just to work out what relates to what.

Pinpoint questions were a wash, sometimes a touch worse. "Which file changes the timestamps?" or "is rate limiting per-user?" cost about the same either way, because one grep already finds the answer and the index pass is just overhead on top.

So the honest version: frontmatter pays for breadth, not for needles. Across the whole mix it came out around 9% fewer tokens at full correctness, but that average hides the shape. A codebase where people mostly ask "where does X live and what does it touch" would beat 9%. One where they already know the file would see roughly nothing.

The earlier 40% figure was a single run on a tiny fixture, and I don't trust it. This is closer to the truth, with the caveat that it's still one run per question, so the small differences sit inside the noise. The big ones don't.

The frontmatter skill and the full benchmark, fixtures and all, live in [my skills repo](https://github.com/mcclowes/skills) if you want to poke at it.