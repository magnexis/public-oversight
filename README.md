# The Public Oversight Hub

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)
[![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-enabled-black?logo=vercel)](https://vercel.com/docs/analytics)

The Public Oversight Hub is a frontend-only civic transparency site for tracking surveillance technology, public records, data centers, and local oversight work.

Owned and maintained by Magnexis.

## Overview

This project is designed as a serious, modern civic-tech front end that helps residents understand how local technology and infrastructure decisions are made. It focuses on transparency, accountability, public records, environmental impact, community review, and practical civic action.

The app is intentionally frontend-first:

- no database yet
- no authentication yet
- no backend required for the current build
- local content and sourced public data only

## Core Features

### Home

- Large hero section with direct calls to action
- Route-level navigation cards
- Featured explainers and article previews
- Prominent transparency and oversight messaging

### Records Request Generator

- Interactive request builder with resident and agency fields
- Topic dropdown for surveillance, data center, and records categories
- Live preview of the generated request text
- Copy to clipboard
- Reset form
- Download as TXT
- Download as DOCX

### Surveillance Technology Tracker

- Searchable and filterable public tracker
- Local data-driven rows
- Detail modal for each record
- Route-based detail pages for individual entries

### Data Center Accountability Hub

- Grid of key public-interest issues
- Review checklist for hearings and disclosures
- Focus on electricity, water, land use, tax incentives, and environmental review

### Document Library

- Organized public-document browsing
- Category-based cards
- Detail pages for document records

### Public Meeting Toolkit

- Suggested questions for residents
- Public comment templates
- Email templates for officials
- Meeting preparation checklist
- Guidance for staying calm, specific, and evidence-based

### About / Mission

- Clear mission page
- Nonpartisan civic framing
- Emphasis on public records and responsible technology

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- `docx`
- Vercel Analytics

## Routes

- `/` - Home
- `/research-desk` - Route map and overview
- `/records-request` - Records request generator
- `/surveillance-tracker` - Surveillance technology tracker
- `/data-center-accountability` - Data center accountability hub
- `/document-library` - Document library
- `/public-meeting-toolkit` - Public meeting toolkit
- `/articles` - Article index
- `/articles/topics` - Topic index
- `/about` - Mission and project context


## Scripts

- `npm run dev` - Starts the custom Turbopack dev workflow
- `npm run dev:webpack` - Runs the standard Next.js dev server
- `npm run build` - Creates a production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs the Next.js lint command

## Data Notes

- The app uses local data files under `data/`.
- The surveillance tracker is generated from public source material and rendered locally.
- The project is ready to expand later with real storage, uploads, user submissions, maps, and verified public records.
- The current build is intended to be deployable immediately to Vercel.

## Deployment

This repository includes a `vercel.json` file so Vercel can use the intended Next.js setup.

Typical deployment flow:

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Let Vercel detect the Next.js framework.
4. Deploy using the configured install and build commands.

## Maintenance Notes

- The site is maintained as a source-led front end.
- The brand styling is intentionally dark, premium, and civic-minded.
- Reusable components should be preferred over page-specific duplication.
- Public records and oversight copy should stay direct and non-alarmist.

## Contributions

This repository is not currently accepting external contributions.
If you are part of Magnexis, coordinate changes through the internal workflow that applies to this project.

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](./LICENSE).

## Call to Action

See [calltoaction.md](./calltoaction.md) for the current project-facing message and outreach copy.
