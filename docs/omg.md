---
sidebar_position: 2
---

# OMG

**OAS Markdown Grammar** - a human-first domain-specific language for API specification.

[GitHub](https://github.com/mcclowes/omg)

## The Problem

Traditional OpenAPI specifications are verbose and fragmented. A typical API spec spans 30,000+ lines across multiple YAML files, making them difficult to write, review, and maintain. Technical writers and product managers struggle to contribute to specs that require deep YAML expertise.

## The Solution

OMG consolidates API documentation into human-readable Markdown files (`.omg.md`), reducing specification complexity by approximately 6x. One endpoint definition per file replaces scattered YAML documents, while maintaining full OpenAPI 3.1 compatibility.

## Key Features

- **~6x line reduction** - 30,000-line OpenAPI specs compress to ~5,000 lines
- **Single source of truth** - One endpoint per file, no fragmentation
- **DRY principles** - Define errors, pagination, and auth once, reuse everywhere
- **Writer accessible** - Technical writers can modify specs without deep YAML expertise
- **Full compatibility** - Compiles to standard OpenAPI 3.1

## Usage

```bash
omg init my-api
omg build api.omg.md -o openapi.yaml
```

Specifications use YAML frontmatter for metadata with embedded code blocks for schema definitions.
