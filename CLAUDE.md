# Project Instructions

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
