# Colon Hyphen Bracket — Kyle Cyree Portfolio

A two-page portfolio and studio site for Kyle Cyree, Principal Product Designer & Systems Architect at Colon Hyphen Bracket, LLC. Intentionally minimal on inline process documentation — the architecture itself is the argument.

**Live:** [colonhyphenbracket.pink](https://colonhyphenbracket.pink) · [hash.pink](https://hash.pink) · [semi.pink](https://semi.pink)

---

## What This Is

Two pages with distinct audiences:

- **`/` — Hire**: Employer-facing portfolio. Hero, AI-narrated whitepaper, public case studies, enterprise vault.
- **`/studio` — Studio**: Client-facing agency showcase. Mission, sectors served, proprietary technology, engagement models.
- **`/essays/design-is-risk`**: Standalone long-form essay on portfolio IP risk and CoT data mining — the security argument for why this site is built the way it is.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui (Radix UI) |
| Animation | Framer Motion |
| Routing | wouter |
| Backend | Express.js, Node.js |
| AI | OpenAI SDK — TTS narration (Nova voice) |
| Contact | Web3Forms API |
| Hosting | Replit |

---

## Directory Structure

```
client/src/
  App.tsx                         Router (Layout wrapper + standalone essay route)
  pages/
    portfolio.tsx                 Hire page
    studio.tsx                    Studio page
    essay-design-is-risk.tsx      Standalone essay (no nav/footer)
  components/
    layout.tsx                    Shared nav + footer + mobile nav
    contact-form-modal.tsx        Web3Forms contact modal
  hooks/
    use-studio-sections.tsx       Intersection Observer context for Studio mobile nav

server/
  index.ts                        Express app — compression, security headers
  routes.ts                       API routes + /robots.txt + /sitemap.xml
  seo.ts                          Per-route meta injection + JSON-LD structured data
  static.ts                       Production static file serving with cache headers
  vite.ts                         Dev server Vite middleware (with SEO injection)

client/public/
  images/studio/                  WebP-optimized Studio images
  og-image.jpg                    OG card image, 1200×630, JPEG
  site.webmanifest                Web App Manifest

scripts/
  convert-images.js               Batch PNG→WebP conversion via sharp
```

---

## Local Development

```bash
npm install
npm run dev
```

Starts Express (API + SSR meta injection) and Vite (client HMR) concurrently on port 5000.

### Environment Variables

| Variable | Purpose |
|---|---|
| `SESSION_SECRET` | Express session secret |
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms contact form API key |

---

## SEO System

All meta tags are injected **server-side** at request time. This makes the site fully crawlable despite being a React SPA — Googlebot sees complete `<title>`, `<meta description>`, Open Graph tags, and JSON-LD structured data in the raw HTML.

### How it works

`client/index.html` uses placeholder tokens:

```html
<title>__META_TITLE__</title>
<meta name="description" content="__META_DESCRIPTION__" />
<meta property="og:image" content="__SITE_URL__/og-image.jpg" />
__HERO_PRELOAD__
__JSON_LD__
```

`server/seo.ts` exports `injectSeoMeta(html, requestPath, siteUrl)` which replaces every token with per-route values before the HTTP response is sent. Both `server/vite.ts` (dev) and `server/static.ts` (production) call this function.

### Adding a new route

1. Add to `PAGE_META` in `server/seo.ts`:

```typescript
"/your-route": {
  title: "Page Title | CHB",
  description: "120–160 character description.",
  ogTitle: "Open Graph title",
  ogDescription: "OG description.",
  ogType: "website",           // or "article" for long-form
  ogImageAlt: "Alt text for OG image",
  preloadHero: "/images/your-hero.webp",  // optional — LCP preload hint
},
```

2. Add the route to `getMetaForPath()` in the same file.
3. Add the URL to `sitemap.xml` in `server/routes.ts`.

### Structured Data (JSON-LD)

Every page receives `Person` + `WebSite` schemas. The essay page additionally receives `Article` + `BreadcrumbList`. Add page-specific schemas inside `buildJsonLd()` in `server/seo.ts`.

---

## Image Optimization

Raw PNG exports (6–14 MB each) are converted to WebP before deployment using `scripts/convert-images.js`.

```bash
node scripts/convert-images.js
```

| Output | Dimensions | Size |
|---|---|---|
| hero.webp | 1920×1080 | ~358 KB |
| section-bg-01.webp | 1400×764 | ~119 KB |
| card-startups.webp | 1000×583 | ~165 KB |
| card-faith.webp | 1000×424 | ~62 KB |
| card-schools.webp | 1000×424 | ~76 KB |
| card-small-biz.webp | 800×339 | ~40 KB |
| side-health-fintech.webp | 900×1613 | ~158 KB |
| feature-prop-tech.webp | 1200×655 | ~130 KB |
| divider-topo.webp | 1400×593 | ~105 KB |
| callout-workflow.webp | 1400×781 | ~192 KB |
| **og-image.jpg** | 1200×630 | ~159 KB |

The hero `<img>` carries `fetchPriority="high"`. The server injects a `<link rel="preload" as="image">` in the document `<head>` for routes that define `preloadHero` — both signals target the same LCP image to eliminate any render-blocking delay.

---

## Performance & Security

### Compression

`server/index.ts` registers `compression` middleware (gzip) before all route handlers. All text responses — HTML, JSON, JS, CSS — are compressed automatically.

### Cache-Control

| Resource | Strategy |
|---|---|
| JS/CSS bundles | `max-age=31536000, immutable` (Vite content-hashes filenames) |
| HTML responses | `no-cache, no-store, must-revalidate` (per-route meta must be fresh) |
| Audio, sitemap, robots | `public, max-age=86400` |

### Security Headers

Applied globally in `server/index.ts`:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## Design System

- **Typography:** Major Mono Display (display headers) · Inter (body) · JetBrains Mono (labels/tags)
- **Pink `#FE299E`** — CTAs, bullet points, active nav state, brand icon
- **Blue `#01a9f4`** — Technology tag outlines only
- **Brand mark:** `:-]`

---

## Security-Forward Design Philosophy

The essay at `/essays/design-is-risk` explains the full threat model. The short version: design portfolio content is among the highest-value Chain-of-Thought datasets for LLM training. Ghost-job scrapers harvest it automatically. The design of this site — external links, deliberate content scarcity, no inline process walkthroughs — is a direct response to that threat surface.

---

## Why This Beats WordPress

The honest answer when a client asks whether to move off WordPress.

| Concern | WordPress | This Stack |
|---|---|---|
| **Page speed** | Plugin bloat, unoptimised images, shared hosting | Sub-second LCP, WebP images, Brotli/gzip compression, immutable asset caching |
| **Security** | 50,000+ CVEs catalogued, plugin attack surface, known password-protection bypasses | No CMS, no plugin ecosystem, security headers by default, zero attack surface for authenticated exploits |
| **Maintenance** | Weekly plugin updates, PHP version drift, database backups, hosting renewals | Zero plugin maintenance, stateless Node.js — deploy anywhere |
| **SEO** | Yoast plugin required, OG tags manual, sitemap plugin, schema plugin | Server-side meta injection with per-route structured data, sitemap + robots.txt built-in, zero plugins |
| **Cost** | Hosting + Yoast Pro + Elementor Pro + WooCommerce + backup plugin + CDN = $150–400/yr minimum | Replit or any Node host — $0–20/mo, no plugin licenses |
| **PageSpeed score** | Typical WordPress score: 40–65 mobile | Target: 90+ mobile, 95+ desktop on PageSpeed Insights |
| **IP safety** | WordPress sites are trivially scraped; password-protected pages provide false security | External-link architecture breaks scraper pipelines; no MNPI published inline |
| **Auditability** | Black-box plugins; no traceable code history | Blank git history, every line accountable, no vendor lock-in |

The pitch in one sentence: faster, safer, cheaper to maintain, auditable from a blank commit history — and the person who designed it can also build the backend, write the copy, and present the strategy.

---

## License

MIT — see [LICENSE](./LICENSE) for the full text. © 2026 Kyle Cyree / Colon Hyphen Bracket, LLC.
