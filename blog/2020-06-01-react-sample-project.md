---
title: "A React starter template"
authors: mcclowes
tags: [dev, open source]
---

import GitHubRepoCard from '@site/src/components/GitHubRepoCard';

<GitHubRepoCard repo="mcclowes/mcclowes-react-sample-project" />

<!--truncate-->

Every time you start a new React project, you face the same tedious setup: configuring testing, setting up Storybook, organizing file structure, choosing component patterns, and wiring up CI/CD. It's hours of work before you write your first meaningful line of code.

I got tired of this setup tax, so I built a **React starter template** with everything already configured and ready to go.

## The problem

Starting a new React project from scratch means making dozens of decisions and configurations:

- Which testing framework and how to configure it?
- How should components be organized?
- What's the right balance of installed dependencies?
- How do you set up CI/CD pipelines?
- Which component development environment should you use?
- What patterns should you follow for presentational vs. container components?

These decisions are important, but they're also repetitive. Once you've found what works, you want to reuse that knowledge.

## The solution

This template provides a "fully kitted-out" React foundation based on lessons learned from multiple production projects. Clone it, and you're immediately productive.

### What's included

**Testing Infrastructure:**
- Jest configured and ready to go
- Screenshot testing capabilities
- Watch mode for rapid development
- Pre-written test examples

**Development Tools:**
- Storybook for component development and documentation
- Component examples showing both patterns
- Hot reloading configured

**CI/CD Integration:**
- CircleCI configuration included
- Automated testing on every commit
- Deployment pipeline ready to customize

**Project Structure:**
- Organized file layout following React best practices
- Examples of "dumb" (presentational) components
- Examples of "smart" (container/controlled) components
- Primitive component library as lightweight alternatives to heavy npm packages

**Sensible Defaults:**
- Curated set of useful dependencies
- No bloat—only what you actually need
- Easy to extend and customize

## Why create your own template?

You might wonder: "Why not use Create React App or Next.js?"

Those are excellent tools, but they're optimized for different use cases:

- **Create React App** is great for beginners but can be opaque and hard to customize
- **Next.js** is powerful but brings server-side rendering assumptions you might not need

This template is transparent, minimal, and opinionated based on real project experience. You can see exactly what's configured and why. It's easy to modify because there's no magic—just clear, documented choices.

## Getting started

Clone the repository and you're ready to develop:

```bash
# Prerequisites
brew install git-lfs circleci
circleci config validate

# Install dependencies
npm install

# Start developing
npm run start

# Run tests
npm run test         # Run once
npm run test:watch   # Watch mode

# View components
npm run storybook
```

## Component patterns

The template demonstrates both major component patterns:

**Presentational Components ("Dumb"):**
- Pure functions of props
- No state management
- Highly reusable
- Easy to test

**Container Components ("Smart"):**
- Manage state and logic
- Handle data fetching
- Coordinate multiple presentational components
- Business logic lives here

This separation keeps components focused and testable.

## Primitive components library

Instead of installing heavy component libraries for simple needs, the template includes lightweight primitive components:

- Buttons
- Inputs
- Cards
- Layouts

These are fully customizable starting points that won't bloat your bundle size.

## Try it out

Clone the repository and start building immediately—no setup required:

```bash
git clone https://github.com/mcclowes/mcclowes-react-sample-project.git
cd mcclowes-react-sample-project
npm install
npm start
```

---

**Links:**
- [GitHub Repository](https://github.com/mcclowes/mcclowes-react-sample-project)
