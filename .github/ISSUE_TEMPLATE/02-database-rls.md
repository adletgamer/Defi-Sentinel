---
name: "02 — Database schema and RLS"
about: "Create the data model and prove tenant isolation"
title: "[P0] Add Postgres schema, migrations and adversarial RLS tests"
labels: "phase-1,database,security"
---

## Outcome

Implement the schema in `docs/RESEARCH.md` with deterministic migrations and row-level isolation.

## Acceptance criteria

- [ ] All user-owned rows contain indexed `user_id`.
- [ ] RLS is enabled for every exposed table.
- [ ] Anonymous access is denied unless explicitly documented.
- [ ] User A cannot select, insert, update or delete User B records.
- [ ] `service_role` exists only in server-side modules marked `server-only`.
