---
title: "D&D Homebrews: Custom Content with MPMB Integration"
authors: mcclowes
tags: [dev, open source, gaming, dnd, homebrew]
---

import GitHubRepoCard from '@site/src/components/GitHubRepoCard';

<GitHubRepoCard repo="metamagic-games/dnd-homebrews" />

<!--truncate-->

Creating homebrew content for D&D 5e is one of the best parts of being a game master. Custom classes, unique races, and house rules make your campaign world feel alive and distinctive. But there's a problem: distributing that content to players in a usable format is surprisingly difficult.

This repository solves that by providing **homebrew D&D 5e content with full MorePurpleMoreBetter (MPMB) character sheet integration**, making custom content as easy to use as official material.

## The problem with homebrew content

Traditional homebrew distribution has several pain points:

1. **Reference material overload**: Players need to keep PDFs or web pages open while creating characters
2. **Manual transcription**: Players copy stats and abilities by hand, introducing errors
3. **No automation**: Custom features don't calculate modifiers or track resources automatically
4. **Discovery**: Players forget about homebrew options during character creation
5. **Version control**: Updates to homebrew content require redistributing PDFs and manual updates to character sheets

## The solution

This repository provides two key pieces:

1. **Professionally formatted handbooks** built with [Handbooker](https://github.com/metamagic-games/handbooker), giving players beautiful reference material
2. **MPMB integration code** that imports custom content directly into the character sheet, making homebrew options appear alongside official content

### What's included

**Additional Rules:**
- Serious Injuries system
- Expanded Madness mechanics

**Full Classes:**
- **Warden**: A unique class focused on manipulating the boundaries between life and death

**Subclasses:**
- **Combat Medic (Fighter)**: Specialized in preventing injuries and accelerating recovery
- **Way of the Selfless (Monk)**: High-risk techniques that push the body beyond normal limits
- **Tribune (Ranger)**: Unique approach to magic storage and manipulation
- **Gambler (Warlock)**: Patron-based mechanics revolving around chance and luck

**Races:**
- **Brood**: Insectoid humanoids with hive-mind traits
- **Vakkyr**: Corrupted dwarves with dark origins
- **Pearl**: Incorporeal beings that serve as knowledge keepers
- **Umbaran**: Human variants with distinct cultural subraces

**Additional Resources:**
- Custom spells
- Unique magic items
- New consumables and drugs

## Technical implementation

The repository uses Node.js tooling to generate both handbooks and MPMB code:

```bash
# Install dependencies
npm install

# Build everything
npm run build

# Build specific content (e.g., Combat Medic)
npm run build medic
```

This generates:
- PDF handbooks styled like official D&D publications
- JavaScript files for MPMB character sheet import

## MPMB integration: The game changer

The real power comes from MPMB integration. Players can import these files directly into the [MorePurpleMoreBetter Character Sheet](https://www.dmsguild.com/product/186823/), and suddenly:

- Homebrew classes appear in the class selection dropdown
- Custom races show up alongside official options
- Spells are added to the spell lists automatically
- Abilities calculate modifiers correctly
- Resources track uses per rest
- Everything works exactly like official content

No more referencing external documents during character creation. No more manual calculations. Just seamless integration.

## Building on Handbooker

This project uses [Handbooker](https://github.com/metamagic-games/handbooker) for PDF generation, which means:

- **Version control**: All content lives in Markdown files tracked by Git
- **Collaborative editing**: Multiple contributors can work via pull requests
- **Automated builds**: Handbooks regenerate automatically when content changes
- **Consistent styling**: Everything looks like official D&D material

## Try it out

Clone the repository and build the handbooks:

```bash
git clone https://github.com/metamagic-games/dnd-homebrews.git
cd dnd-homebrews
npm install
npm run build
```

For MPMB integration:
1. Download the generated `.js` files from the build output
2. Import them into your MPMB character sheet using the "Import" function
3. Create characters with homebrew content as if it were official material

## Contributing

This is an ongoing project with content in various stages of completion. The repository welcomes contributions—whether that's balancing feedback, new content, or MPMB integration improvements.

---

**Links:**
- [GitHub Repository](https://github.com/metamagic-games/dnd-homebrews)
- [MorePurpleMoreBetter Character Sheet](https://www.dmsguild.com/product/186823/)
- [Handbooker Project](https://github.com/metamagic-games/handbooker)
