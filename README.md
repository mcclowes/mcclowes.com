# mcclowes.com

![Website Deploy](https://deploy-badge.vercel.app/?url=https://vercel.com/mcclowes/mcclowes.com&name=website) [![Linkinator CI](https://github.com/mcclowes/mcclowes.com/actions/workflows/linknator.yml/badge.svg)](https://github.com/mcclowes/mcclowes.com/actions/workflows/linknator.yml) [![Vercel Deployment Monitor](https://github.com/mcclowes/mcclowes.com/actions/workflows/vercel-deployment-monitor.yml/badge.svg)](https://github.com/mcclowes/mcclowes.com/actions/workflows/vercel-deployment-monitor.yml)

Results-driven product leader with 10+ years of experience delivering impactful products across SaaS and fintech industries. Proven expertise in defining product strategy, nurturing talent, and driving adoption. Adept at aligning product vision with organizational goals to deliver measurable growth. Intuition led, data backed. DoY's Young Entrepreneur Award winner as a founder.

## Automated Deployment Monitoring

This repository includes an automated system that monitors Vercel deployments and creates GitHub issues when production deployments fail. The system runs every 5 minutes and provides detailed information about failed deployments to help maintain site reliability.

For setup instructions and details, see [Vercel Deployment Monitor Documentation](docs/vercel-deployment-monitor.md).

## Setup

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
