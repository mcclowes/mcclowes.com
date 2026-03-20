---
title: 'Does AI change the best approach to separation of concerns?'
authors: mcclowes
tags: [ai, programming, dev, react]
enableComments: true
---

I used to be fairly extreme about separation of concerns in my React code. A smart component file for logic. A dumb component file for rendering. A styled-components file for styles. An index file to tie them together. Four files per component, minimum.

It made each individual file very readable. You could generally fit one on a screen. If you needed to understand the render logic, you opened one file. If you needed the business logic, you opened another. The mental overhead of jumping between co-located files was low.

<!--truncate-->

## Why I liked it

The case for aggressive separation is straightforward:

- **Each file has a single, clear responsibility.** You know what you're looking at.
- **Files stay small.** Nothing scrolls for pages. You see the whole picture at once.
- **Changes are scoped.** A styling change doesn't create noise in the logic file's git history.
- **Code review is easier.** Reviewers can focus on one concern at a time.

I've drifted away from this somewhat. I'm not writing production code as much these days, and the code I do write tends to be less complex—so the need for that level of separation has naturally reduced. But the instinct remains. I still want files small, concerns separated, responsibilities clear.

## Enter AI

The question I keep coming back to: does AI-assisted development change the calculus on separation of concerns?

There are arguments in both directions, and I think they're both genuinely compelling.

### The case for separation (it helps AI)

AI tools operate within a context window. Everything the model holds in memory at once has a cost—both in tokens and in attention quality. The more focused the context, the better the output tends to be.

Small, single-responsibility files are perfect for this. If you have a rendering bug, the AI loads your render component—a focused file with minimal noise. It doesn't need to wade through business logic, API calls, or style definitions to understand what's going on. The signal-to-noise ratio is high.

This mirrors how the files were designed to be read by humans, and it turns out it works similarly well for LLMs. A 60-line render component is a much better prompt than a 300-line file that does everything.

### The case against separation (it hurts AI)

Here's the problem: AI tools are remarkably reluctant to look at other files.

When your component is split across four files and the AI is working in one of them, it often lacks context it needs. The render file references props that are shaped by the logic file. The logic file depends on types or utilities defined elsewhere. The styles file uses variables from a theme.

A human developer navigates this intuitively—you know to glance at the adjacent file, or you hold the mental model of the component across files without thinking about it. AI doesn't do this naturally. It works with what's in front of it, and getting it to proactively explore related files is like pulling teeth.

So you end up in a situation where the AI has a beautifully focused file... and not enough context to work with it effectively. It makes confident changes that break because it didn't check how a prop was being passed in. Or it suggests a refactor that conflicts with logic it never read.

## Where I've landed (for now)

I don't think there's a clean answer yet. But my current thinking:

**Separation is still good, but the boundaries matter more than before.** The question isn't just "is this a separate concern?" but "can this concern be understood in isolation?"

A render component that's purely presentational—props in, JSX out, no side effects—is a great candidate for separation. The AI can work on it without needing much external context. The file is self-documenting.

A "smart" component that orchestrates state, effects, and data fetching is harder to split well, because the pieces are tightly coupled. Separating the logic from the rendering doesn't help if understanding either one requires the other.

**Co-location of tightly coupled code is more valuable now.** If two pieces of code are always changed together and need each other for context, keeping them in the same file reduces the chance that AI (or a human) works with an incomplete picture.

**File size still matters, but the threshold is higher.** The old instinct of "if it doesn't fit on a screen, split it" was calibrated for human reading. AI can handle larger files effectively—probably up to a few hundred lines before quality degrades. So a 150-line component that keeps logic and rendering together might be better than splitting it into two 75-line files that are meaningless without each other.

**Good abstractions help more than good file structure.** A well-named custom hook that encapsulates a concern is better than splitting files, because the hook is a real abstraction—it has an interface, it hides implementation details, and the AI can understand the consuming code without reading the hook's internals.

## The meta-point

The interesting thing about this question is that it reveals how AI tools change not just how we write code, but how we *structure* it. The best code organisation has always been a balance between human readability and practical maintainability. Now there's a third factor: machine readability.

For the most part, these align. Clear, well-structured code with good abstractions is readable by humans and machines alike. But at the margins—how aggressively to split files, how much to co-locate, how self-contained each file needs to be—AI shifts the trade-offs.

I suspect the answer will keep evolving as AI tools get better at navigating codebases. The reluctance to look at adjacent files feels like a current limitation, not a fundamental one. But for now, it's real, and it's worth structuring code with that limitation in mind.
