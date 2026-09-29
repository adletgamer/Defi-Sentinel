---
name: "01 — Bootstrap monorepo and CI"
about: "Create the implementation skeleton and security gates"
title: "[P0] Bootstrap monorepo and CI/security checks"
labels: "phase-1,platform,security"
---

## Outcome

Create `apps/web`, `services/watcher`, `packages/domain`, `packages/rules` and `infra`, with strict TypeScript and reproducible local commands.

## Acceptance criteria

- [ ] Next.js 15.5.18 and strict TypeScript are pinned.
- [ ] `pnpm lint`, `pnpm typecheck` and `pnpm test` pass in CI.
- [ ] Dependabot/Renovate, CodeQL and Gitleaks run on pull requests.
- [ ] `.env.example` contains names only; no live credentials enter git history.
- [ ] README includes one-command local setup and architecture link.
