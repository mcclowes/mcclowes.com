# GitHub Actions Setup

This directory contains GitHub Actions workflows for automated checks and processes.

## Workflows

### CI (`test.yml`)

Runs tests on pull requests and pushes to main branch.

### Readability Report (`lexi.yml`)

Analyzes readability of markdown files in pull requests.

### Link Checker (`linknator.yml`)

Checks for broken links in the documentation.

### Spell Check (`spellcheck.yml`)

Checks spelling in documentation files.

### Claude PR Summary (`claude-pr-summary.yml`)

Automatically generates AI-powered summaries of pull requests using Claude.

### Claude Documentation Generator (`claude-docs-generator.yml`)

Analyzes code changes in pull requests and generates documentation suggestions using Claude.

## Setup Instructions

### Claude Workflows (PR Summary & Documentation Generator)

To enable the Claude-powered workflows, you need to add your Anthropic API key as a GitHub secret:

1. Get your Anthropic API key from [https://console.anthropic.com/](https://console.anthropic.com/)

2. Add it to your GitHub repository secrets:
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Secrets and variables** > **Actions**
   - Click **New repository secret**
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key
   - Click **Add secret**

3. Both workflows will now automatically run on:
   - New pull requests
   - Updates to existing pull requests
   - Reopened pull requests

#### PR Summary Workflow

Posts a summary comment on each PR with:

- An overview of the main changes
- Key files or components modified
- Any notable patterns or concerns

**Note:** If a PR diff is larger than 100KB, the workflow will skip analysis and leave a comment suggesting to break the PR into smaller changes.

#### Documentation Generator Workflow

Analyzes changed code files (`.js`, `.jsx`, `.ts`, `.tsx`) and posts a comment with:

- Description of what each changed file does
- Key functions/components and their purposes
- Usage notes and examples
- Suggested documentation updates based on the changes

This helps ensure your documentation stays up-to-date with code changes.
