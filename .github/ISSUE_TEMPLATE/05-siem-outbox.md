---
name: "05 — Notifications and SIEM"
about: "Deliver durable alerts and parse them in Wazuh"
title: "[P0] Add durable outbox, Telegram/email and Wazuh ingestion"
labels: "phase-1,phase-2,siem,reliability"
---

## Acceptance criteria

- [ ] Delivery jobs are idempotent and retry with a visible dead-letter state.
- [ ] Telegram and email contain no secrets or raw signatures.
- [ ] Canonical alert JSON validates against schema version `1.0.0`.
- [ ] `wazuh-logtest` parses the example and matches the expected severity rule.
- [ ] End-to-end test proves event → alert → outbox → SIEM acknowledgement.
