---
title: 'Claude Skills Are Incredible (But Claude Won''t Use Them)'
authors: mcclowes
tags: [ai, programming, dev, claude]
enableComments: true
---

Claude Code's skills system is genuinely impressive. You can package domain expertise, best practices, and specialised workflows into reusable modules that extend what Claude can do. The architecture is elegant. The potential is huge.

There's just one problem: Claude barely uses them.

<!--truncate-->

## The activation problem

Skills are supposed to auto-activate based on their descriptions. When you're working on a React component and have a React skill installed, Claude should recognise the context and invoke the skill.

It doesn't.

[Scott Spence ran over 200 tests](https://scottspence.com/posts/how-to-make-claude-code-skills-activate-reliably) to quantify this. Without intervention, skill activation is essentially a coin flip—around 50%. Half the time, Claude has access to specialised knowledge that would help, and just... ignores it.

The frustration isn't that skills don't work. They do. When Claude uses them, they're transformative. The frustration is that Claude seems almost reluctant to reach for tools that would make it better at its job.

## Forcing the issue

Scott's solution is aggressive prompting. A three-step forced evaluation hook:

1. **EVALUATE**: For each skill, state YES/NO with reason
2. **ACTIVATE**: Use Skill() tool NOW
3. **IMPLEMENT**: Only after activation

The key insight is that once Claude writes "YES - need reactive state" in its response, it's committed. It can't pretend the skill doesn't exist.

This pushes activation rates to 80-84%. Words like "MANDATORY", "WORTHLESS", and "CRITICAL" help. You're essentially arguing with Claude about whether it should use the tools it has access to.

It works. But it's absurd that we have to.

## AGENTS.md outperforms skills

[Vercel's agent evaluations](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals) found something telling: inline documentation in AGENTS.md files consistently outperforms skills in their benchmarks.

The implication is uncomfortable. When best practices are baked into the project's documentation—where Claude reads them as context—it follows them reliably. When the same knowledge is packaged as a skill that Claude needs to actively invoke, it often doesn't bother.

This tracks with how humans work, honestly. We're more likely to follow instructions we're already reading than to remember to consult a reference we have to go find. But Claude isn't human. There's no cognitive load excuse. The skill is right there, installed, described, waiting.

## What this reveals

I think this is symptomatic of how current LLMs handle tool use. They're trained to be helpful in conversation, not to proactively reach for external capabilities. The default behaviour is to answer with what you know, not to check what you could know.

Skills are incredibly powerful for the cases where they activate. Vercel's React best practices, Anthropic's official skills, community-built domain expertise—these represent accumulated knowledge that can be invoked on demand. The framework is solid.

The activation behaviour is the bottleneck.

## Practical advice

Until this improves at the model level:

1. **Use forced evaluation hooks** if skill activation matters for your workflow. Scott's [claude-code-toolkit](https://github.com/spences10/claude-code-toolkit) packages this up
2. **Consider AGENTS.md** for project-specific guidance that you want followed reliably
3. **Invoke skills explicitly** in your prompts when you know you need them: "Use Skill(react-best-practices) for this component"
4. **Write very precise skill descriptions**—vague descriptions make activation even less likely

Skills aren't broken. They're underleveraged by design. The workarounds exist. But it'd be nice if Claude just... used the tools it has.
