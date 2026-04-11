# colonhyphenbracket.com — Kyle Cyree Portfolio

A museum-quality, dual-page portfolio for **Kyle Cyree**, Principal Product Designer & Systems Architect at **CHB (Colon Hyphen Bracket, LLC)**.

Aesthetic: Massimo Vignelli precision meets brutalist-clean editorial. The internal brief calls it "artfully autistic."

---

## Pages

### `/` — Hire
Employer-facing portfolio. Features AI-narrated research (Project Emerald whitepaper via OpenAI TTS, `nova` voice), interactive case studies, and an enterprise vault section.

**Case studies include:**
- Persistent Memory AI Ecosystem
- High-Velocity Binary Arbitrage Engine

### `/studio` — Studio
Client-facing agency page. A magazine-editorial presentation of CHB's thesis, specialization areas, proprietary tech, design manifesto, and engagement models. Anchored sections with a sticky side-nav:

| # | Section |
|---|---|
| 01 | The Thesis — good, fast, cheap: all three |
| 02 | The Overlooked — startups, schools, faith orgs, small business |
| 03 | Regulated Systems — health & financial tech |
| 04 | The Lab — proprietary technology |
| 05 | Engagement — manifesto, working process, pricing |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui (Radix UI) |
| Animation | Framer Motion |
| Routing | wouter |
| Data fetching | TanStack Query v5 |
| Backend | Express.js v5, Node.js |
| ORM | Drizzle ORM + PostgreSQL |
| AI | OpenAI SDK — TTS narration |
| Contact | Web3Forms API |
| Hosting | Replit |

---

## Design System

- **Typography:** Major Mono Display (headings) · Inter (body) · JetBrains Mono (labels/code)
- **Pink `#FE299E`** — CTAs, bullet points, active nav state only
- **Blue `#01a9f4`** — Technology tag outlines only
- **Brand mark:** `:-]`
- **Target viewport:** 1920×1080 · reviewed at 1440×734 (MacBook Air)

---

## Project Structure

```
client/src/
├── pages/
│   ├── portfolio.tsx          # Hire page
│   └── studio.tsx             # Studio page
├── components/
│   ├── layout.tsx             # Shared layout wrapper (nav + footer)
│   ├── navigation.tsx         # Top navigation bar
│   ├── footer-section.tsx     # Site footer
│   ├── mobile-nav.tsx         # Fixed bottom mobile navigation
│   ├── contact-form-modal.tsx # Contact form modal (Web3Forms)
│   └── ui/                    # shadcn/ui component primitives
├── hooks/
│   ├── use-studio-sections.tsx # Studio scroll section tracking
│   └── use-mobile.tsx
└── App.tsx                    # Router (wouter)

server/
├── index.ts                   # Express server entry
├── routes.ts                  # API routes (TTS generation + caching)
├── storage.ts                 # DB interface (Drizzle)
└── vite.ts                    # Vite dev middleware

shared/
└── schema.ts                  # Drizzle schema + Zod types (shared client/server)
```

---

## Local Development

```bash
npm install
npm run dev
```

Starts Express (backend) and Vite (frontend) concurrently on port 5000.

### Environment Variables

| Variable | Purpose |
|---|---|
| `SESSION_SECRET` | Express session secret |
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms contact form API key |
| `OPENAI_API_KEY` | OpenAI TTS for whitepaper narration |

---

## License

All rights reserved. © Colon Hyphen Bracket, LLC.
