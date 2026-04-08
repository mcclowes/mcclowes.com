---
title: Barred
description: A macOS menu bar manager
---

# Barred

A macOS menu bar manager. Detects and organises menu bar items from other apps — hide, reorder, or tuck them into a secondary bar.

**[GitHub](https://github.com/mcclowes/barred)** | **Install:** `brew install mcclowes/barred/barred`

## How it works

Barred sits in your menu bar and uses macOS Accessibility APIs to detect items from other apps. You can choose which items to always show, hide, or move into a collapsible "Barred bar". Hidden items are pushed off-screen by expanding a divider status item.

Built with Swift 6 and SwiftUI. Native, lightweight, no dependencies.

## Requirements

- macOS 14 (Sonoma) or later

## Setup

On first launch, grant Accessibility access when prompted:

**System Settings > Privacy & Security > Accessibility > Barred**

Without this, Barred can't detect or manage other apps' menu bar items.

## Install

```bash
brew install mcclowes/barred/barred
```

Or build from source:

```bash
git clone https://github.com/mcclowes/barred.git
cd barred
make build
make run
```
