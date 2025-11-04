---
title: "Building a glossary plugin for Docusaurus"
authors: mcclowes
tags: [dev, open source, documentation]
---

import GitHubRepoCard from '@site/src/components/GitHubRepoCard';
import NpmPackageCard from '@site/src/components/NpmPackageCard';

<GitHubRepoCard repo="mcclowes/docusaurus-plugin-glossary" />



<!--truncate-->

I've always been frustrated by how technical documentation often assumes readers know all the jargon. Whenever I build a site with Docusaurus, I wanted a way to automatically link and explain key terms, so readers can hover to see definitions without breaking their flow.

There used to be [plugins for this](https://github.com/grnet/docusaurus-terminology), but these open source projects all went stale.

That's why I built [docusaurus-plugin-glossary](https://github.com/mcclowes/docusaurus-plugin-glossary) - a plugin that automatically detects glossary terms in your markdown content and turns them into interactive tooltips.

## The solution

The plugin does two things well:

1. **Interactive tooltips**: Hover over any linked term (like this - Docusaurus) and see its definition instantly. Click to navigate to the full glossary page for related terms.

2. **Automatic term detection**: It scans your markdown files and automatically links glossary terms with a subtle dotted underline. No manual markup required.

The magic happens through a remark plugin that processes your markdown before it hits the browser. It respects word boundaries (so "API" doesn't match "application"), and it smartly skips terms inside code blocks, links, or existing components.

## Technical highlights

- Built as a proper Docusaurus plugin following their plugin architecture
- Uses remark to process markdown at build time
- React components for the tooltip UI and glossary page
- Full TypeScript support
- Configurable term detection with sensible defaults

## Try it out

You can install it from npm:

```bash
npm install docusaurus-plugin-glossary
```

<NpmPackageCard package="docusaurus-plugin-glossary" />

Or check out the [GitHub repository](https://github.com/mcclowes/docusaurus-plugin-glossary) for documentation, examples, and source code.

---

**Links:**
- [GitHub Repository](https://github.com/mcclowes/docusaurus-plugin-glossary)
- [npm Package](https://www.npmjs.com/package/docusaurus-plugin-glossary)
- [Documentation](https://github.com/mcclowes/docusaurus-plugin-glossary#readme)

