---
sidebar_position: 3
---

import GitHubRepoCard from '@site/src/components/GitHubRepoCard';

# Lea

A pipe-oriented functional programming language with a tree-walk interpreter written in TypeScript.

<GitHubRepoCard repo="mcclowes/lea" />

## The Problem

Functional programming often reads right-to-left or inside-out, making code harder to follow. Chaining transformations requires nested function calls that obscure the data flow.

## The Solution

Lea uses a pipe operator (`/>`) for left-to-right data flow, making functional composition read naturally like prose. Data flows through transformations in the order you read them.

## Key Features

- **Pipes** - Left-to-right data flow using `/>` operator
- **First-class functions** - Optional type annotations
- **Decorators** - Function modifiers like `#log`, `#memo`, `#retry(3)`
- **Records** - Object literals with member access
- **Contexts** - Dependency injection system
- **Async/Await** - Promise-based asynchronous execution

## Example

```
[1, 2, 3, 4, 5]
  /> filter((x) -> x > 2)
  /> map((x) -> x * x)
  /> print
```

## Getting Started

```bash
git clone https://github.com/mcclowes/lea.git
cd lea
npm install
npm run lea example.lea
npm run repl
```

## Architecture

Source → Lexer → Tokens → Parser → AST → Interpreter → Result

The interpreter follows a traditional pipeline: tokenization, recursive descent parsing, AST representation, and tree-walk interpretation.
