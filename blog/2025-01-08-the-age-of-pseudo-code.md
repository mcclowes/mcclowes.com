---
title: 'The Age of Pseudo Code'
authors: mcclowes
tags: [ai, programming, dev, projects]
draft: true
enableComments: true
---

LLMs have made something possible that wasn't before: genuine language agnosticism. Not as a vague ideal, but as a practical reality. I've been building with Claude Code, and it's unlocked something I'm calling the age of pseudo code.

<!--truncate-->

## Fluency without mastery

The traditional path to programming competence meant picking a language and grinding through its quirks until they became second nature. Every language has friction points—unintuitive syntax, edge cases, idiomatic patterns that only make sense after years of exposure.

Now? I can move between Python, TypeScript, C#, F#, even Prolog, without hitting walls. The LLM handles the linguistic translation. What matters is understanding the concepts well enough to ask the right questions.

This isn't about knowing nothing. You still need functional literacy—enough depth to frame problems correctly, judge whether the output makes sense, and catch when the model is confidently wrong. But the barrier to entry for any given language has collapsed.

For routine work, versatile understanding now beats deep single-language expertise. The exception is low-level implementation or pushing beyond established patterns—there, domain expertise still wins. But for most of what most people build? Fluency across languages matters more than mastery of one.

## Creating languages just got easy

This same shift makes something else suddenly viable: building new programming languages.

If you've only ever worked in one language, creating a new one might sound like an academic exercise. Why bother? But there's a reason different languages exist. Not all of them are about raw functionality—most modern languages can do most things. The real differentiators are efficiency (memory management, scale, security) and usability.

Usability is what I care about.

## The case for expressive syntax

Consider Prolog. Compare propositional logic written in Prolog versus its equivalent in TypeScript. The TypeScript version isn't impossible—it's just comically longer. That length isn't just inconvenient; it actively prohibits certain ideas. Code that's unreadable is also unwriteable and unmaintainable.

Some concepts demand certain syntaxes. You *can* write inline styles in React, but the extra boilerplate of quotation marks everywhere is limiting. CSS's cascading rules—contradicting, layering, automatically resolved by the browser—are simpler in many ways than their imperative equivalent.

Different languages unlock different ideas.

## Why I built Vague

A few weeks ago, I was generating sample data and hit a wall. I wanted a clean way to express a schema and generate realistic data that respected constraints. TypeScript can define that `age` is a number, but it can't easily express that age should follow a realistic distribution, or that a customer's invoices should reference that specific customer, or that amounts should correlate with account type.

So I built [Vague](/docs/vague).

Vague is a constraint and probability-based language for describing and generating data. It's TypeScript under the hood, but it's also its own syntax:

```
schema Customer {
  name: string,
  status: 0.8: "active" | 0.2: "inactive"
}

schema Invoice {
  customer: any of customers,
  amount: decimal in 100..10000,
  assume amount > 0
}

dataset TestData {
  customers: 50 of Customer,
  invoices: 200 of Invoice
}
```

In a couple of hours, I had a working prototype, plus tests, VS Code linting, an npm package, examples, and documentation. The same concept in pure TypeScript would be about three times as long and far less readable.

I then extended it with an inference engine—give it existing data, and it generates the Vague schema automatically.

## Why this matters now

Previously, creating a new language meant hoping others would invest months learning it. The adoption hurdle was brutal.

Now? If you're interested in Vague, you don't need to learn it. You can just ask your LLM to generate Vague code, provide links to the documentation, or use the inference engine to generate schemas from existing data. I've even packaged the Vague syntax into a Claude skill that can be downloaded to any project.

The same applies to [Lea](/docs/lea), a pipe-oriented functional language I built to make data transformations read left-to-right, and [Reqon](/docs/reqon), a DSL for declarative data pipelines that handles pagination, retries, and rate limiting automatically. None of these languages need mass adoption to be useful. They just need to be expressive enough that LLMs can work with them—and efficient enough that they save time for whoever does use them.

## The new literacy

This is the shift: the most valuable skill isn't deep expertise in one language's quirks. It's the ability to express ideas clearly, understand concepts across paradigms, and know when to build a better syntax for the job at hand.

The age of pseudo code isn't about writing bad code. It's about writing in the right language for the problem—even if that language didn't exist until you made it.
