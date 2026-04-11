# Portfolio Site - Kyle Cyree / CHB

## Overview
A two-page portfolio website for a Principal Product Designer & Systems Architect. Features a brutalist-clean aesthetic with museum-grade polish. Two pages: **Hire** (employer-facing portfolio) and **Studio** (client-facing agency showcase).

## Architecture
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Express with OpenAI TTS endpoint (via Replit AI Integrations)
- **Routing**: wouter with shared Layout component, framer-motion page transitions
- **Styling**: Tailwind with custom design tokens, framer-motion for animations
- **Components**: shadcn/ui Dialog for modals, Toast for enterprise vault notifications
- **AI Integration**: OpenAI gpt-audio model with Nova voice for whitepaper narration (TTS)

## Design System
- **Colors**: Minimalist white/off-white, dark high-contrast text, vibrant pink (#FE299E) for CTAs and brand icon, blue (#01a9f4) for technology tags
- **Typography**: Inter (body), JetBrains Mono (technical tags/labels), Major Mono Display (Studio page display headers)
- **Buttons**: Pill-shaped (rounded-full), branded hover/active states, no generic elevation overlays
- **Layout**: Shared nav/footer via Layout component, bento-box grid for project cards

## Structure
```
client/src/
  App.tsx                      - Router setup with Layout wrapper
  pages/
    portfolio.tsx              - Hire page (Hero, Whitepaper, Showcase, Vault)
    studio.tsx                 - Studio page (placeholder, will be built in Task #4)
  components/
    layout.tsx                 - Shared layout (nav + footer + mobile nav + page transitions)
    navigation.tsx             - Top nav bar (CHB logo, page links, frosted glass on scroll)
    footer-section.tsx         - Redesigned footer (product links, social, brand mark)
    mobile-nav.tsx             - Mobile bottom nav (page links, studio section tabs)
    ui/button.tsx              - Restyled pill-shaped buttons
  hooks/
    use-studio-sections.tsx    - Context for Studio page section tracking (mobile nav tabs)
client/public/
  artwork/                     - Generated artwork for case study cards
  emerald-whitepaper.pdf       - Emerald whitepaper PDF (downloadable)
attached_assets/               - Source images for Studio page (not served directly)
  chb-logo-black_*.png         - CHB text wordmark (dark)
  chb-logo-white_*.png         - CHB text wordmark (light)
  hero_*.png                   - Studio page hero background
  01-06-*.png                  - Studio page section images
```

## Pages
### Hire (/)
1. **Hero**: Brand icon (:-]), headline, intro text, Resume/Contact/Deck CTAs
2. **Research (Whitepaper)**: Clickable card → scrollable Dialog modal with full whitepaper, AI audio player, PDF download, repo, demo CTAs
3. **Public Showcase**: 3 clickable bento cards with modal case studies
4. **Enterprise Vault**: 4 locked cards with toast notification

### Studio (/studio)
- Placeholder "Coming Soon" — will be built in Task #4 with full content, sticky side nav, accessibility compliance

## Navigation
- **Desktop**: Fixed top bar, CHB wordmark logo left, Hire/Studio links right, transparent → frosted glass on scroll
- **Mobile**: Bottom nav bar with page links. When on Studio page, shows horizontal-scrollable numbered section tabs (01-05)

## Footer
- Grid layout: brand mark + tagline, product ecosystem links (hash.pink, colonhyphenbracket.pink, pipes.pink, semi.pink), social links (LinkedIn, GitHub, email)

## API Endpoints
- `GET /api/tts/emerald` — Generates/serves cached MP3 narration (Nova voice)
- `GET /api/tts/emerald/status` — Audio generation status

## Accessibility
- Skip-to-content link
- Keyboard navigation with visible focus indicators
- ARIA roles/labels on navigation landmarks
- Screen reader support
- WCAG 2.1 AA compliance target (especially for Studio page)
