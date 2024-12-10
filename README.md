# mcclowes.com

![Website Deploy](https://deploy-badge.vercel.app/?url=https://vercel.com/mcclowes/mcclowes.com&name=website) [![Linkinator CI](https://github.com/mcclowes/mcclowes.com/actions/workflows/linknator.yml/badge.svg)](https://github.com/mcclowes/mcclowes.com/actions/workflows/linknator.yml)

I am a Product Director with a diverse software engineering and design background. I use my background to get the best out of my developement peers, and the best for my developer users. Intuition led, data backed. I've been delivering websites and apps for 10+ years. DoY's Young Entrepreneur Award winner as a founder.

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
