# Portfolio Site - Kyle Cyree

## Overview
A responsive single-page portfolio website for a Principal Product Designer & Systems Architect. Built with a Bento-box grid layout, scrollable case study modals, and a brutalist-clean design aesthetic.

## Architecture
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Express with OpenAI TTS endpoint (via Replit AI Integrations)
- **Styling**: Tailwind with custom design tokens, framer-motion for animations
- **Components**: shadcn/ui Dialog for modals, Toast for enterprise vault notifications
- **AI Integration**: OpenAI gpt-audio model with Nova voice for whitepaper narration (TTS)

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
- Research section featuring Project Emerald whitepaper with clickable card, scrollable reading modal, AI-narrated audio player (OpenAI Nova voice), PDF download, GitHub repo, and demo links
- Bento-box project grid with 3 case studies opening scrollable modals
- Enterprise Vault section with gated/locked cards triggering toast notifications
- Footer with LinkedIn/GitHub links
- Smooth scroll animations via framer-motion

## API Endpoints
- `GET /api/tts/emerald` — Generates (or serves cached) MP3 narration of the whitepaper using OpenAI gpt-audio model with Nova voice. Chunks the text into sections, generates TTS for each, concatenates MP3 buffers, caches at `client/public/emerald-narration.mp3`
- `GET /api/tts/emerald/status` — Returns JSON `{ ready: boolean, generating: boolean }` for the audio generation status

## Sections
1. **Hero**: Brand icon, headline, intro text, Resume/Contact/Deck CTAs
2. **Research (Whitepaper)**: Clickable card opens a scrollable Dialog modal with full whitepaper content (thesis, Zendesk comparison table, architecture details, safety design, open source pivot). Audio player at top with play/pause, progress bar, and download. Card also has direct PDF download, repo, and demo CTAs
3. **Public Showcase**: 3 clickable bento cards (CHB Ecosystem, Slash V6, Workshop.pink) with modal case studies
4. **Enterprise Vault**: 4 locked cards with toast notification on click
5. **Footer**: Copyright + social links
