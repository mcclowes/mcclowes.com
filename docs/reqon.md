---
sidebar_position: 3
---

import GitHubRepoCard from '@site/src/components/GitHubRepoCard';

# Reqon

**Declarative Data Pipelines** - a DSL for building data pipelines without the boilerplate.

<GitHubRepoCard repo="mcclowes/reqon" />

## The Problem

Building data pipelines involves repetitive boilerplate: pagination logic, retry mechanisms, rate limiting, authentication handling. Each integration requires reimplementing the same patterns, leading to inconsistent code and wasted effort.

## The Solution

Reqon provides a declarative syntax for defining data pipelines. Specify your sources, transformations, and destinations—the framework handles the operational complexity automatically.

## Key Features

- **Automatic pagination** - offset, page, or cursor strategies built-in
- **Retry with backoff** - exponential backoff for transient failures
- **Rate limiting** - circuit breakers and throttling out of the box
- **Incremental sync** - checkpoint tracking for efficient updates
- **Multiple auth methods** - OAuth 2.0, Bearer, API keys, Basic auth
- **OpenAPI integration** - type-safe API calls from specs
- **Flexible storage** - files, SQL (PostgREST/Supabase), NoSQL, custom adapters
- **Production scheduling** - cron and interval support

## Usage

Define pipelines declaratively, specifying data sources, transformations, storage targets, and actions. Reqon handles pagination, error handling, and retries automatically.

[View documentation →](https://reqon.mcclowes.com/)
