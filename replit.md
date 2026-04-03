# Portfolio Site - Kyle Cyree

## Overview
A responsive single-page portfolio website for a Principal Product Designer & Systems Architect. Built with a Bento-box grid layout, scrollable case study modals, and a brutalist-clean design aesthetic.

## Architecture
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Express (minimal, serves static assets)
- **Styling**: Tailwind with custom design tokens, framer-motion for animations
- **Components**: shadcn/ui Dialog for modals, Toast for enterprise vault notifications

## Design System
- **Colors**: Minimalist white/off-white, dark high-contrast text, vibrant pink (#FE299E) for CTAs and brand icon
- **Typography**: Inter (UI), JetBrains Mono (technical tags/labels)
- **Layout**: Bento-box grid for project cards, single-page scroll

## Structure
```
client/src/
  pages/portfolio.tsx    - Main single-page portfolio (Hero, Whitepaper, Showcase, Vault, Footer)
  App.tsx                - Router setup
client/public/
  artwork/               - Generated artwork for case study cards (replace with your own)
    chb-ecosystem.png
    slash-v6.png
    workshop.png
    enterprise-vault.png
    emerald.png          - Whitepaper card artwork
  emerald-whitepaper.pdf - Emerald whitepaper PDF (downloadable)
  cyree_resume_2026.pdf  - Place resume PDF here
```

## Key Features
- Hero section with brand icon (:-]) and CTAs
- Research section featuring Project Emerald whitepaper with PDF download, GitHub repo, and demo links
- Bento-box project grid with 3 case studies opening scrollable modals
- Enterprise Vault section with gated/locked cards triggering toast notifications
- Footer with LinkedIn/GitHub links
- Smooth scroll animations via framer-motion

## Sections
1. **Hero**: Brand icon, headline, intro text, Resume/Contact/Deck CTAs
2. **Research (Whitepaper)**: Project Emerald — side-by-side card with artwork, thesis headline, summary, tags, and Download PDF / View Repo / Try Demo CTAs
3. **Public Showcase**: 3 clickable bento cards (CHB Ecosystem, Slash V6, Workshop.pink) with modal case studies
4. **Enterprise Vault**: 4 locked cards with toast notification on click
5. **Footer**: Copyright + social links
