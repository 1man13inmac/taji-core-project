# TaijiCore

> Mapping the source — a living graph of Taijiquan lineage, principles,
> and shared technical DNA across all traditions.

## What is this?
TaijiCore is an open, evidence-backed, living graph of Taijiquan lineages and technical features across traditions.

## The Core Thesis
Taijiquan's major lineages share a common ancestor, while adapting inherited methods over generations. TaijiCore maps these relationships and computes a transparent, evidence-cited common core.

## Tech Stack
- Next.js App Router + TypeScript strict
- Tailwind CSS v4
- Neo4j + `neo4j-driver`
- `@react-sigma/core` graph rendering
- Zustand + SWR
- `next-pwa`
- Vitest + Playwright-ready structure

## Getting Started
```bash
corepack enable
corepack pnpm install
corepack pnpm dev
```

## Seeding Neo4j
```bash
corepack pnpm seed
```

## Project Structure
- `apps/web` — Next.js PWA app
- `packages/schema` — shared schema types
- `packages/seed-data` — canonical seed datasets + merge utility

## Contributing
Add nodes, edges, and feature profiles with evidence and confidence metadata.

## Schema Reference
See `packages/schema/src/index.ts`.

## Common Core Methodology
`apps/web/lib/core-compute.ts` computes shared feature intersections and labels results as core / likely / style-specific.

## Roadmap
- Phase 1: Zhaobao seed + schema + graph explorer ✓
- Phase 2: Add Chen, Yang, Wu, Sun seed data from primary sources
- Phase 3: AI video analysis pipeline
- Phase 4: Community contributions + PR review workflow
- Phase 5: Fine-tuned Taiji-specific model for feature extraction

## License
MIT
