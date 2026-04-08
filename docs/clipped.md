---
title: Clipped
description: A lightweight, native macOS clipboard manager
---

# Clipped

A lightweight, native macOS clipboard manager that fits the platform aesthetic and gets out of the way.

**[GitHub](https://github.com/mcclowes/clipped)** | **Install:** `brew install mcclowes/clipped/clipped`

## Features

- **Clipboard history** — tracks entries with content type detection
- **Format preservation** — rich text, URLs, images, and code snippets retain their formatting
- **Pinning** — pin frequently used items so they persist above the history
- **Search & filter** — filter by content type or search by text
- **Global hotkey** — `⌘⇧V` to open the panel from anywhere
- **Secure mode** — automatically skips or auto-expires entries from password managers
- **Sticky notes** — pin clipboard items as floating notes on your desktop
- **Screenshot capture** — automatically detects and captures new screenshots
- **Link previews** — fetches page titles for URL items
- **Markdown conversion** — convert rich text to Markdown
- **Export** — merge and copy multiple items at once
- **Persistence** — optionally persist history across restarts
- **Launch at login** — start automatically via macOS login items

## Requirements

- macOS 15.0 (Sequoia) or later

## Install

```bash
brew install mcclowes/clipped/clipped
```

Or build from source:

```bash
git clone https://github.com/mcclowes/clipped.git
cd clipped
make build
make run
```
