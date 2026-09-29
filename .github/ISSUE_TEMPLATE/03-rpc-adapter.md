---
name: "03 — Resilient RPC adapter"
about: "Build WebSocket ingestion with HTTP recovery"
title: "[P0] Implement chain registry, RPC failover and block cursors"
labels: "phase-1,web3,reliability"
---

## Acceptance criteria

- [ ] Ethereum and Base use WebSocket `newHeads` plus HTTP backfill.
- [ ] Provider keys are server-only and RPC methods are read-only allowlisted.
- [ ] 429, timeout and disconnect use bounded exponential backoff with jitter.
- [ ] Cursor stores block number and hash; replay is idempotent.
- [ ] Tests cover silent disconnect, duplicate log and one-block reorg.
