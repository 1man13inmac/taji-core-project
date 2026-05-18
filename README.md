# Taji Core Project

> A structured Taijiquan PWA for lineage trees, teacher-student transmission,
> timelines, techniques, history, philosophy, and source-backed research.

## Scope

Taji Core Project provides:
- Complete lineage and teacher page architecture
- Family-tree style transmission views
- Chronological timeline pages
- Technique, history, philosophy, and source methodology sections
- Admin and user-area scaffolding for future authenticated workflows

## Tech Stack

- Next.js App Router + TypeScript (strict)
- Tailwind CSS v4
- Turborepo + pnpm workspaces
- Shared schema package in `packages/schema`

## Development

```bash
corepack enable
corepack pnpm install
corepack pnpm --filter web dev
```

## Quality Commands

```bash
corepack pnpm lint
corepack pnpm test
corepack pnpm build
```

## CI/CD and Deployment

- GitHub Actions CI: `.github/workflows/ci.yml`
- Vercel deployment workflow: `.github/workflows/vercel-deploy.yml`
- Vercel project config: `vercel.json`

To enable Vercel deployment workflow, set repository secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Codespaces

Dev container config is in `.devcontainer/devcontainer.json`.

When Codespaces starts:
- dependencies install automatically
- web dev server launches automatically
- port 3000 is auto-forwarded and opens preview

## Project Structure

- `apps/web` — main PWA website
- `packages/schema` — shared graph and feature schema
