# Cixp Portofolio

A black and red personal portfolio for Cixp built with Vite and React. The site focuses on Discord staff experience, moderation, administration, community management, development roles, and contact information.

Published site:

```text
https://alba043.github.io/portofolio/
```

## Features

- Black and red interface with animated effects
- Responsive hero with profile mark, staff experience cards, skills, about notes, contact, and footer
- Data-driven portfolio text in `src/data/portfolioData.js`
- Discord username copy button and server invite link
- Reduced-motion support
- GitHub Pages deployment through GitHub Actions

## Run Locally

```bash
npm run dev
```

PowerShell may block `npm.ps1` on this machine. If that happens, use:

```bash
npm.cmd run dev
```

## Build

```bash
npm run build
```

PowerShell-safe version:

```bash
npm.cmd run build
```

## Deploy

Push to `main`. GitHub Actions builds the Vite app and deploys `dist` to GitHub Pages.

## Lint

```bash
npm run lint
```

PowerShell-safe version:

```bash
npm.cmd run lint
```

## Edit Portfolio Content

Edit `src/data/portfolioData.js` to update:

- Hero text
- Staff experience cards
- Skills
- Server history
- Contact text
