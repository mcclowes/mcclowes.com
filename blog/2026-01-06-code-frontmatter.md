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
