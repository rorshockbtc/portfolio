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
- **Contact**: Web3Forms API (POST to api.web3forms.com/submit), env var `VITE_WEB3FORMS_ACCESS_KEY`

## Design System
- **Colors**: Minimalist white/off-white, dark high-contrast text, vibrant pink (#FE299E) for CTAs and brand icon, blue (#01a9f4) for technology tags
- **Typography**: Inter (body), JetBrains Mono (technical tags/labels), Major Mono Display (Studio page display headers — CSS `font-display` class)
- **Buttons**: Pill-shaped (rounded-full), branded hover/active states, no generic elevation overlays
- **Layout**: Shared nav/footer via Layout component, bento-box grid for project cards

## Structure
```
client/src/
  App.tsx                      - Router setup with Layout wrapper
  pages/
    portfolio.tsx              - Hire page (Hero, Whitepaper, Showcase, Vault)
    studio.tsx                 - Studio page (full agency showcase with 8 sections)
  components/
    layout.tsx                 - Shared layout (nav + footer + mobile nav + page transitions)
    navigation.tsx             - Top nav bar (CHB logo, page links, frosted glass)
    footer-section.tsx         - Redesigned footer (product links, social, brand mark)
    mobile-nav.tsx             - Mobile bottom nav (page links, studio section tabs)
    contact-form-modal.tsx     - Contact form modal (Web3Forms integration)
    ui/button.tsx              - Restyled pill-shaped buttons
  hooks/
    use-studio-sections.tsx    - Context for Studio page section tracking (mobile nav tabs)
client/public/
  artwork/                     - Generated artwork for case study cards
  emerald-whitepaper.pdf       - Emerald whitepaper PDF (downloadable)
attached_assets/               - Source images imported via @assets/ alias
  chb-logo-black/white_*.png   - CHB text wordmark
  hero_*.png                   - Studio page hero background
  01-06-*.png                  - Studio page section images
```

## Pages
### Hire (/)
1. **Hero**: Brand icon (:-]), headline, intro text, Resume/Contact/Deck CTAs
2. **Research (Whitepaper)**: Clickable card → scrollable Dialog modal with full whitepaper, AI audio player, PDF download, repo, demo CTAs
3. **Public Showcase**: 3 clickable bento cards with modal case studies
4. **Enterprise Vault**: 4 locked cards with toast notification
- Contact CTAs open shared ContactFormModal

### Studio (/studio)
1. **Hero**: Major Mono Display headline, blueprint background, Contact CTA
2. **Card 02 — The Thesis**: Agency bypass pitch with US map background
3. **Card 03 — The Overlooked**: 4 subsections (Startups, Schools, Faith, Small Biz) with card images
4. **Card 04 — Regulated Systems**: Health/fintech pitch with building cross-section image
5. **Card 05 — The Lab**: Proprietary tech (Knowledge Bases, Privacy, Local-First, Curators) with steampunk machine image
6. **Topography Divider**: Full-bleed watercolor section break
7. **Card 06 — Manifesto**: Design philosophy (3 paragraphs)
8. **Card 07 — Working with CHB**: Engagement approach with steampunk workflow image
9. **Card 08 — Engagement Models**: 4 model cards (Simple, Handoffs, Faster, Personal)
- Desktop: sticky right-side nav tracking 5 sections via Intersection Observer
- Mobile: bottom nav tabs (01-05) via shared StudioSectionsProvider

## Navigation
- **Desktop**: Fixed top bar with semi-transparent backdrop, CHB wordmark left, Hire/Studio links right, intensifies on scroll
- **Mobile**: Bottom nav bar with page links; Studio page shows horizontal-scroll numbered section tabs

## Footer
- Grid layout: brand mark + tagline, product ecosystem links (hash.pink, colonhyphenbracket.pink, pipes.pink, semi.pink), social links (LinkedIn, GitHub, email)

## API Endpoints
- `GET /api/tts/emerald` — Generates/serves cached MP3 narration (Nova voice)
- `GET /api/tts/emerald/status` — Audio generation status

## SEO
- **Per-page meta**: Server-side injection in `server/seo.ts` — different `<title>`, `<meta description>`, OG tags, and Twitter Cards for `/` vs `/studio`
- **Structured data**: JSON-LD Person + WebSite schemas injected at request time
- **Canonical URLs**: `<link rel="canonical">` set per-route
- **OG image**: `/og-image.png` (hero image, served from `client/public/`)
- **Template placeholders**: `__META_TITLE__`, `__META_DESCRIPTION__`, `__OG_TITLE__`, `__OG_DESCRIPTION__`, `__CANONICAL_URL__`, `__SITE_URL__`, `__JSON_LD__` in `client/index.html`, replaced by `injectSeoMeta()` in both `server/vite.ts` (dev) and `server/static.ts` (prod)

## Environment Variables
- `VITE_WEB3FORMS_ACCESS_KEY` — Web3Forms API access key for contact form
- `SESSION_SECRET` — Express session secret

## Accessibility
- Skip-to-content link
- Keyboard navigation with visible focus indicators
- ARIA roles/labels on all navigation landmarks
- Semantic heading hierarchy
- Descriptive alt text on all images
- prefers-reduced-motion respected
- WCAG 2.1 AA compliance target
