---
name: "04 — Approval detections"
about: "Ship DS-001 and DS-002 end-to-end"
title: "[P0] Detect unlimited ERC-20 and global NFT approvals"
labels: "phase-1,detection,web3"
---

## Acceptance criteria

- [ ] Bootstrap discovers candidates and confirms current state with `eth_call`.
- [ ] DS-001 detects max/high-ratio allowances and ignores `approve(0)`.
- [ ] DS-002 detects ERC-721/1155 global operators and handles revocation.
- [ ] Each rule has ≥1 positive and ≥2 negative deterministic fixtures.
- [ ] Alert explains spender, exposed assets/value, confidence and safe revoke link.
