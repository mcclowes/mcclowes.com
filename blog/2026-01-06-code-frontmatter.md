---
title: 'Code Frontmatter: An Index for AI?'
authors: mcclowes
tags: [ai, coding]
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