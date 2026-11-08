# STYLES.md — Accént 3.0 Brand Adapter Contract (`cassandra-noir`)

> **Style Control Plane (`STYLES.md` vs. `AGENTS.md`)**: This file is the authoritative, rigid, opinionated design-system specification for **Kyle Cyree Portfolio (`hire.colonhyphenbracket.pink`)**. Operational agent rules belong in `AGENTS.md`; all visual, typographic, chromatic, structural, and motion rules live here.
> Canonical Spec: https://design.pipes.pink/?brand=cassandra-noir · Upstream Package: [`rorshockbtc/accent-ui`](https://github.com/rorshockbtc/accent-ui)

---

## 1. Layer 1 Mathematical Invariants (Never Override)

1. **8-Point Spatial Grid**: All spacing, padding, and layout rhythm use multiples of `4px` / `8px`.
2. **Strict `13px` (`0.8125rem`) Typographic Floor**: Never render text smaller than `13px`. Body prose runs at `>= 16px` (`1rem`), measure `60–70ch`.
3. **`44×44px` Minimum Interactive Touch Targets**: Every button, link pill, tab trigger, and icon control must maintain at least `44×44px` hit area (`min-h-[44px]`).
4. **Dual-Accent WCAG 2.1 AA/AAA Contrast**:
   - Use `--a-accent` (`#FE299E` light / `#D9777F` dark) for punctuation marks (`>_`, `: - ]`), strike-through bars, and borders.
   - Use `--a-accent-fill` (`#B81468` light / `#D9777F` dark) for filled button/tab containers with white/dark text so contrast stays `>= 5.6:1` WCAG AA.

---

## 2. Layer 2 Brand Dialect (`cassandra-noir`)

- **Profile ID**: `cassandra-noir`
- **Identity Mark**: `>_`
- **Typography**:
  - Display: `Cormorant Garamond` (tracking `-0.025em`)
  - Serif Prose: `Newsreader` (line-height `1.7`)
  - UI Sans: `Inter`
  - Monospace: `JetBrains Mono`
- **Structural Posture**: `archival-spine` · CTA Radius: `6px`
  - High-contrast monograph case studies with WebP before/after comparison stages (`BeforeAfterSection`) and live interactive prototypes.
