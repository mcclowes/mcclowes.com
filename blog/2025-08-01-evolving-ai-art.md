---
title: "Evolving AI art"
authors: ["mcclowes"]
tags: ["ai", "art", "automation", "github", "projects"]
draft: false
---

import Carousel from '@site/src/components/Carousel';

*This post is AI generated*

I've been working on an interesting project that combines AI, automation, and generative art. It's called [ai-art](https://github.com/mcclowes/ai-art), and it's a self-evolving digital canvas that improves itself over time.

<!--truncate-->

## What it does

The project creates a digital artwork that evolves automatically through several mechanisms:

1. **Hourly random improvements** - The artwork gets small changes every hour, like new shapes, color adjustments, and repositioned elements
2. **AI-guided enhancements** - When you create GitHub issues and assign them to the Copilot agent, it analyzes the current artwork and applies intelligent improvements based on the issue description
3. **Weekly cycles** - After a week, the current artwork gets archived and a new cycle begins

The artwork state is stored as structured data in `src/artwork-state.ts`, and a React Canvas component renders it. The improvement scripts analyze the current state for visual balance, color harmony, and element distribution before making changes.

## The automation system

The project uses GitHub Actions to run three different improvement systems in parallel:

- **Artwork Evolution** (every hour) - Applies random improvements using `improve-artwork.js`
- **Codebase Evolution** (every 6 hours) - Improves code quality, performance, and features using `improve-codebase.js`  
- **Copilot AI Improvements** (issue-triggered) - When issues are assigned to the GitHub Copilot agent, it applies intelligent improvements based on the issue context

## Intelligent improvements

The system doesn't just make random changes. It applies intelligent heuristics:

- **Composition principles** - Uses rule of thirds and golden ratio for better visual arrangement
- **Color theory** - Selects harmonious colors from curated palettes (warm, cool, earth, pastel, vibrant)
- **Visual analysis** - Evaluates density, color diversity, and composition before improvements
- **Contextual text** - Generates meaningful text based on issue titles and descriptions

## The evolving artwork

Here's a carousel showing how the artwork has evolved over time:

<Carousel 
  images={[
    "/img/posts/ai-art/ai-art-generation-2.png",
    "/img/posts/ai-art/ai-art-generation-5.png",
    "/img/posts/ai-art/ai-art-generation-7.png",
    "/img/posts/ai-art/ai-art-generation-26.png",
    "/img/posts/ai-art/ai-art-generation-58.png",
    "/img/posts/ai-art/ai-art-generation-62.png",
    "/img/posts/ai-art/ai-art-generation-87.png",
    "/img/posts/ai-art/ai-art-generation-109.png",
    "/img/posts/ai-art/ai-art-generation-176.png",
  ]}
/>

## Why this matters

This project explores several interesting concepts:

- **Continuous evolution** - How systems can improve themselves over time without human intervention
- **AI collaboration** - Using GitHub Copilot not just for code, but for creative decisions
- **Automation boundaries** - Finding the right balance between automated and manual contributions
- **Generative art** - Creating art that evolves through both random and intelligent processes

The artwork is currently at generation 176 and continues to evolve. You can see the live version at [ai-art-sigma.vercel.app](https://ai-art-sigma.vercel.app), and the full source code is available on [GitHub](https://github.com/mcclowes/ai-art).

What's fascinating is watching how the combination of random mutations and intelligent improvements creates something that feels both organic and purposeful. The AI doesn't just make random changes - it analyzes the current state and applies principles of good design, color theory, and composition.

It's a reminder that automation doesn't have to be mindless. With the right constraints and intelligence, automated systems can create genuinely interesting and evolving work. 