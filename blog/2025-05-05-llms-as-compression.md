---
title: "LLMs as compression"
authors: mcclowes
tags: [ai]
draft: true
---

Here's a mental model I find useful: LLMs are a compression technique for knowledge, combined with a clever decompression algorithm.

<!--truncate-->

## The compression

Training compresses vast amounts of text into model weights. Patterns, relationships, facts, styles. All of it encoded into parameters that are tiny relative to the training data.

This is lossy compression. Details get lost. But the broad structure remains.

## The decompression

When you prompt an LLM, you're running a decompression algorithm. The model reconstructs plausible text based on the compressed patterns it learned.

The prompt is like a key that unlocks a particular region of the compressed knowledge.

## Why this model helps

It explains several things:
- **Hallucinations**: Lossy compression means some details weren't stored accurately. The model reconstructs plausibly but incorrectly.
- **Capability limits**: You can't decompress what wasn't compressed. Knowledge outside the training data isn't there.
- **Prompt sensitivity**: Different keys access different regions. Small prompt changes can produce very different outputs.

## What it doesn't explain

This model is incomplete. It doesn't capture emergence, reasoning, or the way models generalise to novel situations. Compression alone doesn't explain everything.

But as a starting intuition, it's useful. LLMs store compressed knowledge and reconstruct it on demand. The magic is in how good that reconstruction has become.
