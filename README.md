# CHB Portfolio — Kyle Cyree

A dual-page portfolio site for **Colon Hyphen Bracket, LLC (CHB)** — a product design & systems architecture studio.

## Pages

- **Hire** (`/`) — Employer-facing portfolio featuring a research showcase (Project Emerald whitepaper with AI-narrated audio), public case studies, and an enterprise vault
- **Studio** (`/studio`) — Client-facing agency page covering CHB's thesis, specialization areas, proprietary technology, design manifesto, and engagement models

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Express (Node.js)
- **AI Integration**: OpenAI TTS (Nova voice) for whitepaper narration
- **Contact Form**: Web3Forms API
- **Typography**: Inter, JetBrains Mono, Major Mono Display
- **Hosting**: Replit

## Local Development

```bash
npm install
npm run dev
```

The dev server starts on port 5000 with both the Express backend and Vite frontend.

## Project Structure

```
client/src/
├── pages/
│   ├── portfolio.tsx          # Hire page
│   └── studio.tsx             # Studio page
├── components/
│   ├── layout.tsx             # Shared layout (nav, footer, transitions)
│   ├── navigation.tsx         # Top navigation bar
│   ├── footer-section.tsx     # Site footer
│   ├── mobile-nav.tsx         # Mobile bottom navigation
│   ├── contact-form-modal.tsx # Contact form (Web3Forms)
│   └── ui/                    # shadcn/ui components
├── hooks/
│   └── use-studio-sections.tsx # Studio page section tracking
└── App.tsx                    # Router

server/
├── index.ts                   # Express server entry
├── routes.ts                  # API routes (TTS endpoint)
└── vite.ts                    # Vite middleware

shared/
└── schema.ts                  # Database schema
```

## Design System

- **Brand Color**: `#FE299E` (pink) — CTAs, active indicators, brand mark
- **Tag Color**: `#01a9f4` (blue) — technology tag outlines
- **Brand Icon**: `:-]`
- **Aesthetic**: Brutalist-clean, museum-grade typography, minimal ornamentation

## Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms API key for contact form |
| `SESSION_SECRET` | Express session secret |

## License

All rights reserved. Colon Hyphen Bracket, LLC.
