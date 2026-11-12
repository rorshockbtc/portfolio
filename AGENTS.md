# AGENTS.md — Kyle Cyree Portfolio (`rorshockbtc/portfolio`)

## Accént Design System Governance & Operational Contract

This repository is an official downstream consumer of **Accént 3.0** (`https://github.com/rorshockbtc/accent-ui` · `https://design.pipes.pink`) and shares brand architecture with **Colon Hyphen Bracket Corporate** (`rorshockbtc/chb-corporate-site`).

> **Style vs. Operational Governance**: All visual, chromatic, typographic, and architectural rules live in [`STYLES.md`](./STYLES.md) and [`client/src/styles/accent.config.ts`](./client/src/styles/accent.config.ts). This file defines operational workflow rules for agents working in this codebase.

---

### 1. Assigned Brand Profile (`cassandra-noir`)
- **Canvas**: Josef Albers Warm Sandstone `#EAE0D0`, Surface `#F4EFE6`, Card `#F2EAE0`, Espresso Ink `#281B16`
- **Muted Ink**: `#5C4940` / `#5C4840` (WCAG AA compliant on Sandstone)
- **Accents**: Hot Pink `#FE299E` (punctuation marks `: - ]`, `>_`, hover accents), Accessible Pink Fill `#B81468` (or `#D1007E` hover), Sky `#02A7F1`, Emerald `#2D8A4E`
- **Typography**: `Cormorant Garamond` (display) + `Newsreader` (editorial serif) + `Inter` (UI sans) + `JetBrains Mono` (monospace labels)
- **Structural Posture**: `archival-spine` (`--a-radius-cta: 6px` on archival controls, full pills on monograph CTAs)
- **Signature Mark**: `: - ]` / `>_`

### 2. Non-Negotiable Operational & Style Guardrails
1. **8-Point Spatial Grid & `13px` Typographic Floor**: Never render text below `13px` (`0.8125rem`), including bottom mobile nav labels and footer colophons.
2. **`44×44px` Minimum Interactive Touch Targets**: Every button, desktop/mobile nav trigger, and footer action link must satisfy `min-h-[44px]`.
3. **Reduced-Motion Compliance**: All Framer Motion views live under `<MotionConfig reducedMotion="user">`.
4. **Honest Positioning & Evidence**: Never modify or fabricate case study metrics (`client/src/data/case-studies.ts`) or verified human recommendations (`client/src/data/testimonials.ts`).

### 3. Cross-Site Handoff & Colophon
- `hire.colonhyphenbracket.pink` focuses on Staff / Principal product design & systems architecture roles, while linking cleanly to `https://colonhyphenbracket.pink/studio` for sprint and fractional engagements.
- The footer acknowledges upstream Accént lineage (`Built on Accént 3.0 · MIT Open Source`) alongside `Colon Hyphen Bracket ↗`.
