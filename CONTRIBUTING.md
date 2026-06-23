# Contributing

This repository is not currently accepting external contributions.
This file is kept for internal reference only.

## Before You Start

- Keep the project frontend-only unless a backend is explicitly required.
- Preserve the serious, civic-minded tone.
- Prefer local data files and reusable components.
- Avoid introducing placeholder claims that sound authoritative without sources.

## Local Setup

```bash
npm install
npm run dev
```

If Turbopack causes issues on your machine, use:

```bash
npm run dev:webpack
```

## Working Rules

- Make changes in small, reviewable steps.
- Reuse the existing design language and layout system.
- Keep buttons, links, and modals working on the frontend.
- Verify changes with `npm run build` before opening a pull request.

## Good PRs Usually Include

- A short summary of the change
- Screenshots for UI updates
- Notes about new data files or routes
- Any follow-up work that should happen later

## Suggested Commit Messages

- `feat: improve tracker filters`
- `fix: tidy hero layout on mobile`
- `docs: add repo README`
