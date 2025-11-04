---
title: "Handbooker: Turn Markdown into D&D Player's Handbooks"
authors: mcclowes
tags: [dev, open source, gaming, dnd, documentation]
---

import GitHubRepoCard from '@site/src/components/GitHubRepoCard';
import NpmPackageCard from '@site/src/components/NpmPackageCard';

<GitHubRepoCard repo="metamagic-games/handbooker" />

<!--truncate-->

If you've ever tried to create custom content for tabletop RPGs, you know the struggle of making it look professional. You want your homebrew rules, custom classes, or campaign guides to have that authentic Player's Handbook aesthetic—but design tools are time-consuming, and collaborative editing is a nightmare.

That's why I built **Handbooker**: an npm package that converts Markdown files into beautifully formatted PDF handbooks with the classic D&D 5e aesthetic.

## The problem

Creating tabletop RPG content involves a few common pain points:

1. **Design complexity**: Tools like InDesign or even Homebrewery's web interface work great for one-offs, but they don't fit into modern development workflows
2. **Version control**: Tracking changes across multiple contributors is nearly impossible with visual editors
3. **Collaboration**: Git-based workflows are standard in software development, but not for game content creation
4. **Automation**: You can't easily generate or update handbooks programmatically

## The solution

Handbooker bridges the gap by letting you write in Markdown—a simple, readable format perfect for version control—and converts it into stunning handbook PDFs styled like the D&D 5e Player's Handbook.

### Key features

- **Markdown to PDF**: Write your content in plain Markdown, generate professional handbooks
- **Multiple file support**: Combine multiple Markdown files into a single cohesive document
- **Built-in styles**: Ships with D&D 5e styling based on the Homebrewery project
- **Custom styles**: Bring your own CSS for complete control over appearance
- **Git-friendly**: Perfect for teams using version control and pull request workflows

## Technical implementation

Handbooker is built on top of the excellent Homebrewery project's stylesheets, adapted for programmatic use. The codebase is 99% SCSS with a simple JavaScript API.

Basic usage is straightforward:

```javascript
const { handbooker } = require("handbooker");

const target = "./rulebook.md";
const destination = "./rulebook.pdf";
const options = { "style": "dnd" };

handbooker(target, destination, options);
```

For multi-file projects, just pass an array:

```javascript
const files = [
  "./chapter1.md",
  "./chapter2.md",
  "./chapter3.md"
];

handbooker(files, "./complete-handbook.pdf", { "style": "dnd" });
```

## When to use Handbooker

Handbooker isn't meant to replace Homebrewery or other visual tools—those are perfect for quick one-off creations. Instead, Handbooker shines when you need:

- **Version control**: Track changes, review contributions, maintain history
- **Team collaboration**: Multiple people working on the same content
- **Automated workflows**: Generate handbooks as part of a build process
- **Content reuse**: Combine and recombine content modules programmatically

## Try it out

<NpmPackageCard package="handbooker" />

Install from npm:

```bash
npm install handbooker
```

Check out the [sample project](https://github.com/metamagic-games/handbooker-sample-project) to see it in action.

---

**Links:**
- [GitHub Repository](https://github.com/metamagic-games/handbooker)
- [npm Package](https://www.npmjs.com/package/handbooker)
