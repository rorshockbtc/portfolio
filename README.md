# Kyle Cyree — Principal Product Engineer & Creative Technologist

Live site: [hire.colonhyphenbracket.pink](https://hire.colonhyphenbracket.pink)  
Studio site: [colonhyphenbracket.pink](https://colonhyphenbracket.pink)  
Source: [github.com/rorshockbtc/portfolio](https://github.com/rorshockbtc/portfolio)

Personal portfolio, technical case studies, and engineering recommendations for **Kyle Cyree** (Founder & Principal Engineer at Colon Hyphen Bracket, LLC) — built on the **Accént 3.0** design system (`cassandra-noir` dark editorial adapter).

---

## Routes

- `/` — Executive overview, core thesis, featured builds, experience timeline, client & colleague recommendations, and availability (`Open to roles & studio sprints`: Staff/Principal roles, `$7,500` 1-week sprints, or fractional partnerships starting at `$15k/mo`)
- `/case-studies/:slug` — Deep-dive engineering case studies (`pipes`, `bang`, `marigold`, `hash`, `semi`, `chb-corporate`, `chicuinaco`)
- `/contact` — Direct inquiry page + Web3Forms contact drawer (`src/components/contact-form-modal.tsx`)

---

## Design System (`Accént 3.0 — cassandra-noir`)

This repository consumes the shared Accént 3.0 contract documented in [`AGENTS.md`](./AGENTS.md) and encoded in [`client/src/styles/accent.config.ts`](./client/src/styles/accent.config.ts):

- **Surface & Ink:** Warm Noir (`#121113`), Charcoal Elevations (`#18181B`), Crisp Alabaster (`#FAF8F5`)
- **Primary Accent:** Sovereign Hot Pink (`#FE299E`)
- **Typography:** `Bricolage Grotesque` (display), `Plus Jakarta Sans` (body), `JetBrains Mono` (meta/code)
- **Legibility & Touch Contract:** Minimum `13px` (`0.8125rem`) body/UI text (`xs` mapped in `tailwind.config.js`) and `>= 44×44px` interactive touch targets

---

## Development & Deployment

```bash
npm run dev      # Local Express + Vite dev server
npm run check    # TypeScript type check (tsc)
npm run build    # Vite client bundle + esbuild server bundle -> dist/
npm start        # Run production build
```

Static client builds deploy cleanly to **Vercel** via `dist/public` (`npm run build`), with contact submissions wired to **Web3Forms** and case-study media stored under `client/public/assets/`.

---

## License

MIT — see [`LICENSE`](./LICENSE). Copyright (c) 2026 Kyle Cyree / Colon Hyphen Bracket, LLC.
