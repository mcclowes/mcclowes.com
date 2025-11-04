---
title: "Interactive news articles with Ink"
authors: mcclowes
tags: [dev, open source, journalism, interactive]
---

import GitHubRepoCard from '@site/src/components/GitHubRepoCard';

<GitHubRepoCard repo="mcclowes/ink-news-demo" />

<!--truncate-->

I built this project as an experiment in making news more interactive. The idea was simple: what if readers could choose their own path through a story, diving deeper on topics they care about and skipping explanations they already understand?

I used [Ink](https://www.inklestudios.com/ink/), a narrative scripting language originally designed for interactive fiction, to create a proof of concept that turns traditional news articles into branching narratives.

## The problem with linear news

Most news articles are linear. They present information in a fixed order, assuming all readers need the same context, background, and explanations. This creates a few problems:

- **One-size-fits-all approach**: A reader who's already familiar with the topic has to skim past explanations they don't need
- **No autonomy**: Readers can't explore tangents or related topics without leaving the article
- **Fixed depth**: Writers have to guess how much detail their audience wants
- **Passive reading**: Traditional articles don't adapt to different knowledge levels or interests

## The solution: branching narratives

Ink lets you create interactive stories where readers make choices that affect what they read next. I saw this as a perfect fit for news, where different readers might want to:

- Skip background explanations they already know
- Dive deeper into specific aspects of a story
- Explore related topics without leaving the main narrative
- Choose how much detail they want about technical concepts

The demo I built shows how this could work with news content. It presents information in a conversational, branching format where readers can choose their own path through the story.

## Try it out

You can see the demo in action: [ink-economist-demo.vercel.app](https://ink-economist-demo.vercel.app/)

The project is open source, so you can check out the code, fork it, and experiment with your own interactive news formats.

---

**Links:**
- [GitHub Repository](https://github.com/mcclowes/ink-news-demo)
- [Live Demo](https://ink-economist-demo.vercel.app/)
- [Ink Documentation](https://www.inklestudios.com/ink/)
