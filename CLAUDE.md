# Project Instructions

Personal website and blog for mcclowes, built with Docusaurus.

## Stack

- Docusaurus 3.x (not Next.js)
- React 18
- SCSS modules for custom styling
- Deployed via Vercel

## Commands

- `npm run start` - dev server
- `npm run build` - production build
- `npm run test` - run tests
- `npm run format:fix` - format with Prettier

## Structure

- `/blog` - blog posts (markdown)
- `/docs` - documentation pages
- `/src/components` - React components
- `/src/css` - global styles
- `/src/pages` - standalone pages
- `/src/theme` - swizzled Docusaurus theme components
- `/src/plugins` - custom Docusaurus plugins (e.g., PostHog)

## Features

- Giscus comments (configured, add `enableComments: true` to frontmatter)
- PostHog analytics
- Cookie consent
- Image zoom
- Mermaid diagrams
- Live code blocks
- **Framework**: Docusaurus 3.6.x (not Next.js)
- **React**: 18.x
- **Styling**: SCSS modules + Infima CSS framework
- **Deployment**: Vercel
- **Node**: 16.14+ required (20.x recommended)

## Commands

```bash
npm run start        # Dev server with hot reload
npm run build        # Production build
npm run test         # Run tests (Node.js test runner)
npm run format       # Check formatting (Prettier)
npm run format:fix   # Fix formatting
npm run clear        # Clear Docusaurus cache
npm run serve        # Serve production build locally
```

## Directory Structure

```
/blog                    # Blog posts (markdown with frontmatter)
/docs                    # Documentation pages (currently minimal)
/glossary                # Glossary terms (glossary.json)
/scripts                 # Build scripts (e.g., generate-env.js)
/static                  # Static assets (images, env.js)
/src
├── /clientModules       # Client-side modules (PostHog init)
├── /components          # React components (see below)
├── /config              # Configuration files (PostHog config)
├── /css                 # Global CSS (custom.css)
├── /hooks               # React hooks (usePostHog, useFeatureFlag)
├── /pages               # Standalone pages (index.js, about-me)
├── /plugins             # Custom Docusaurus plugins
├── /theme               # Swizzled theme components
└── /utils               # Utility functions
```

## Blog Posts

### Frontmatter

```yaml
---
title: "Post Title"
authors: mcclowes
tags: [tag1, tag2]
draft: true              # Optional: hide from production
enableComments: true     # Optional: enable Giscus comments
---
```

### Conventions

- File naming: `YYYY-MM-DD-slug.md`
- Use `<!--truncate-->` to set excerpt break point
- Images go in `/static/img/blog/` or use external URLs
- Tags should be lowercase and hyphenated

## Features & Plugins

### Giscus Comments

- Enabled per-post via `enableComments: true` in frontmatter
- Configured in `src/components/GiscusComponent/index.jsx`
- Requires GitHub authentication for commenting
- See `GISCUS_SETUP.md` for configuration details

### PostHog Analytics

- Custom plugin at `src/plugins/posthog-plugin.js`
- Config at `src/config/posthog.js`
- Use `usePostHog` hook for tracking events
- Environment variable: `POSTHOG_KEY`
- See `POSTHOG_SETUP.md` for details

### Cookie Consent

- Plugin: `docusaurus-plugin-cookie-consent`
- Categories: necessary, analytics, functional, marketing (disabled)
- Configured in `docusaurus.config.js`

### Image Zoom

- Plugin: `docusaurus-plugin-image-zoom`
- Applies to `.markdown > p > img` and `.markdown-img`
- Click images to zoom

### Mermaid Diagrams

- Enabled via `@docusaurus/theme-mermaid`
- Use fenced code blocks with `mermaid` language

### Live Code Blocks

- Enabled via `@docusaurus/theme-live-codeblock`
- Use `live` attribute on code blocks

### Ideal Image

- Plugin: `@docusaurus/plugin-ideal-image`
- Automatic responsive image generation
- Quality: 70, sizes: 640-1030px

### Glossary

- Plugin: `docusaurus-plugin-glossary`
- Terms defined in `/glossary/glossary.json`
- Route: `/glossary`

## Components

Components follow this pattern:

```
/src/components/ComponentName/
├── index.js           # Main component export
├── styles.module.scss # Optional: SCSS module
└── __tests__/         # Optional: tests
```

### Key Components

| Component          | Purpose                                    |
| ------------------ | ------------------------------------------ |
| GiscusComponent    | GitHub Discussions comments                |
| TrackedComponent   | PostHog-tracked wrapper                    |
| TrackedLink        | PostHog-tracked link                       |
| BlogPostTracker    | Blog post view tracking                    |
| GitHubRepoCard     | GitHub repository embed                    |
| NpmPackageCard     | NPM package embed                          |
| PDFViewer          | PDF document viewer                        |
| Loom               | Loom video embed                           |
| Arcade             | Arcade.software demo embed                 |
| LocalStorageChecklist | Persistent checklist                    |
| Carousel           | Image carousel                             |
| Masonry            | Masonry grid layout                        |
| Modal              | Modal dialog                               |
| Diff               | Code diff viewer                           |

## Theme Customization

### Swizzled Components

- `BlogPostItem` - Adds Giscus comments support

### CSS Variables

Custom colors are defined in `/src/css/custom.css`:

- Light mode: Off-white background, green accents
- Dark mode: Green background, off-white accents

Key custom properties:

```css
--color-green: #4b5f5f;
--color-offwhite: #fffae1;
--font-mono: 'Roboto Mono', monospace;
--font-serif: 'Inknut Antiqua', 'Merriweather', serif;
```

## Environment Variables

Create `.env` file (see `.env.example`):

```bash
POSTHOG_KEY=phc-your-key-here
# POSTHOG_HOST=https://app.posthog.com
# NODE_ENV=development
```

Environment variables are injected via `scripts/generate-env.js` into `static/env.js`.

## Code Style

### Prettier Configuration

```json
{
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "es5"
}
```

### Conventions

- Use single quotes for strings
- Use SCSS modules for component styles
- Export components as default exports
- Use functional components with hooks

## CI/CD Workflows

GitHub Actions (`.github/workflows/`):

| Workflow         | Trigger              | Purpose                     |
| ---------------- | -------------------- | --------------------------- |
| build.yml        | push/PR              | Build verification          |
| test.yml         | push/PR              | Run tests                   |
| format.yml       | push/PR              | Prettier formatting check   |
| spellcheck.yml   | push/PR              | Spell checking              |
| linknator.yml    | push/PR              | Link validation             |
| lexi.yml         | push/PR              | Lexical analysis            |

## Testing

- Uses Node.js built-in test runner
- Test files: `**/__tests__/*.test.js`
- Run with: `npm test`

## Available Skills

This project includes Docusaurus-specific skills (see `AGENTS.md`):

- `docusaurus-config` - Config validation
- `docusaurus-documentation` - Latest docs lookup
- `docusaurus-migration` - v2 to v3 migration
- `docusaurus-plugins` - Plugin creation
- `docusaurus-themes` - Theme swizzling
- `google-style-guide` - Documentation style
