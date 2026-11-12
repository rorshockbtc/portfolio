/**
 * Accént 3.0 Brand Configuration Adapter for Kyle Cyree Portfolio (`hire.colonhyphenbracket.pink`)
 * Governance Contract: /STYLES.md & /AGENTS.md
 * Upstream Reference: https://github.com/rorshockbtc/accent-ui (`src/styles/themes.ts`)
 * Canonical Spec: https://design.pipes.pink/?brand=cassandra-noir
 */

export const ACCENT_SPEC = {
  version: "3.0.0",
  designSystemUrl: "https://design.pipes.pink",
  repoUrl: "https://github.com/rorshockbtc/accent-ui",
  stylesContractPath: "/STYLES.md",
  license: "MIT",
  author: "Kyle Cyree · Colon Hyphen Bracket, LLC",
} as const;

export const CASSANDRA_NOIR_PROFILE = {
  id: "cassandra-noir",
  name: "Cassandra Noir (Kyle Cyree Portfolio)",
  tagline:
    "Josef Albers Warm Sandstone (#EAE0D0), Espresso Ink (#281B16), Hot Pink (#FE299E) punctuation marks, and archival monograph typography.",
  usedBy: "hire.colonhyphenbracket.pink",
  repoUrl: "https://github.com/rorshockbtc/portfolio",
  mark: ">_",
  typography: {
    display: "Cormorant Garamond",
    serif: "Newsreader",
    sans: "Inter",
    mono: "JetBrains Mono",
    displayTracking: "-0.025em",
    bodyLineHeight: "1.7",
  },
  structure: {
    ctaRadius: "6px",
    posture: "archival-spine",
    summary:
      "High-contrast monograph case studies with WebP before/after comparison stages and verified leader endorsements.",
  },
  tokens: {
    light: {
      "--a-bg": "#EAE0D0",
      "--a-surface": "#F4EFE6",
      "--a-card": "#F4EFE6",
      "--a-well": "#FAF8F5",
      "--a-ink": "#281B16",
      "--a-muted": "#5C4940",
      "--a-rule": "rgba(40, 27, 22, 0.14)",
      "--a-accent": "#FE299E",
      "--a-accent-fill": "#B81468",
      "--a-accent-fill-hover": "#281B16",
      "--a-accent-fg": "#FFFFFF",
      "--a-accent-text": "#A3285C",
      "--a-sky": "#02A7F1",
      "--a-emerald": "#2D8A4E",
      "--a-radius-cta": "6px",
    },
  },
} as const;
