---
title: 'Broadsheet: rebuilding Pocket, carefully'
authors: mcclowes
tags: [projects, broadsheet, reading, side-project]
enableComments: true
---

import YouTube from '@site/src/components/YouTube';

<YouTube id="PSrc06ldX-o" />

<!--truncate-->

When Mozilla quietly wound Pocket down, a lot of people lost the only read-it-later tool they'd ever really trusted. I was one of them. So I've been building [Broadsheet](https://broadsheet.marginalutility.dev) — a careful reconstruction rather than a reinvention.

## The premise

Save articles from anywhere. Read them cleanly. Don't lose them. That's the whole thing.

The principles that fall out of it:

- **Save friction is the enemy.** Every tap between "I want to read this" and "it's saved" is a conversion killer.
- **Reading is the product.** The app exists to surface articles cleanly, not to compete with them.
- **Parse at ingestion, not at read time.** Convert articles to Markdown when they're saved — faster rendering, offline support, lower compute at scale.
- **Open articles and paywalled articles are different problems.** Treat them as such from day one.

## What's built

The MVP is live as a Next.js web app plus a Chrome extension:

- **Web app** — library and reader, built on the App Router
- **Chrome extension** — one click to save the current tab
- **Ingestion** — server-side fetch → Readability → Turndown → Markdown
- **Auth** — Clerk from day one (auth added later is auth added wrong)
- **Storage** — both metadata and article body live in [Folio](https://github.com/mcclowes/folio-db-next) on Vercel Blob
- Tagging, read/unread, archive, URL canonicalisation, dedup on save

No separate backend service — everything's a route handler in the same Next.js app.

## What's deferred

The original PRD named iOS as the primary surface, because most save intent happens on mobile. That's still true, and it's still the most important thing left to build. For now, web + extension answers the one question the MVP needed to answer: _can someone save an article and read it cleanly later?_

Paywalled article extraction, a PWA service worker, full-text search, and the iOS share sheet are all on the list. Highlights, annotations, and anything resembling "social" are explicitly not.

## Why Folio

Folio is a markdown-first store I've been using for other projects — pages with YAML frontmatter, pluggable storage adapter, Vercel Blob in prod. For Broadsheet, metadata lives in frontmatter and the article body is the page content. One store, one model.

The obvious fallback — split metadata into Postgres, keep Folio for bodies — stays feasible because the volume layout is simple and bodies are addressable by content hash. But the spike so far says Folio is enough for the MVP, and probably well beyond it.

## Try it

Broadsheet is [live at broadsheet.marginalutility.dev](https://broadsheet.marginalutility.dev), with a [Chrome extension](https://chromewebstore.google.com/detail/broadsheet/joflmcpipjmffhgonneneafllkfppdld) for one-click saving. It's early, but it saves articles and renders them cleanly, which is the bar.
