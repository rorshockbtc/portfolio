# CHB Portfolio — Design System & Integration Reference
*For use when building the "Ask Kyle" chatbot in a separate Replit instance*

---

## 1. Tech Stack Overview

| Layer | Technology |
|---|---|
| Framework | React + TypeScript + Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion |
| Routing | wouter |
| Forms | react-hook-form + zod + zodResolver |
| Icons | lucide-react (UI) + react-icons/si (brand logos) |
| HTTP (client) | fetch + @tanstack/react-query |
| Backend | Express (Node.js) |
| Environment vars | `VITE_` prefix for frontend-accessible secrets |

---

## 2. Design Tokens & Color System

Colors are defined as CSS custom properties in `index.css` using `H S% L%` format (space-separated, no `hsl()` wrapper). Tailwind consumes them via `hsl(var(--token) / <alpha-value>)`.

### Brand Colors (hard-coded, never use tokens for these)
```css
#FE299E   /* CHB Pink — CTAs, active nav indicator, bullet accents, send buttons */
#01a9f4   /* CHB Blue — technology/skill tags only */
```
These are applied inline with `style={{ color: "#FE299E" }}` or as Tailwind's `[#FE299E]` arbitrary value, not via tokens. This is intentional — they should never shift with theme changes.

### Semantic Tokens (light / dark)
```
--background       white (#fff) / near-black (#121212)
--foreground       near-black / near-white
--border           very light gray / dark gray
--card             off-white / slightly lighter than background
--card-border      lighter than border
--primary          328 99% 58%  → #FE299E (pink) in both modes
--primary-foreground  white
--muted            faint gray
--muted-foreground  35% lightness (light) / 65% (dark)
--input            light gray / dark gray
--ring             same as primary (pink focus rings)
```

### Shadows
All shadow variables are intentionally set to `0` opacity — the design system has **no box shadows**. Elevation is achieved with background overlays (see the elevation system below).

### Elevation System
Custom utility classes in `index.css` provide hover/active/toggle feedback without shadows:
```css
.hover-elevate      /* adds ::after overlay on hover: rgba(0,0,0,.03) light / rgba(255,255,255,.04) dark */
.hover-elevate-2    /* stronger: .08 / .09 */
.active-elevate     /* same but on :active */
.toggle-elevate     /* ::before overlay, manually toggled via .toggle-elevated class */
```
Use these on interactive cards and containers instead of `hover:shadow-*`.

---

## 3. Typography

Three font families, each with a specific purpose:

| Variable | Font | Use |
|---|---|---|
| `--font-sans` / `font-sans` | Inter | Body text, UI, forms, everything default |
| `--font-mono` / `font-mono` | JetBrains Mono | Labels, nav links, tags, metadata, captions |
| `--font-display` / `font-display` | Major Mono Display | Studio page large display headings ONLY |

### Typographic Conventions
- **Nav links / labels:** `font-mono text-[11px] uppercase tracking-[0.2em]`
- **Section headings:** `font-sans font-semibold` or `font-sans font-bold`
- **Subheadings / eyebrows:** `font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground`
- **Body text:** `font-sans text-sm` or `text-base`, line-height `leading-relaxed`
- **Code / technical strings:** `font-mono text-xs`
- **Copyright / fine print:** `font-mono text-[10px] text-muted-foreground/60 tracking-wider`

---

## 4. Layout & Spacing

### Max-width Container
```html
<div class="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
```
Used on nav, footer, and most page sections. The 6xl cap (72rem) keeps content readable on 1920px screens.

### Studio Page Columns
The Studio page uses a two-column layout with a sticky right-side nav. Content uses custom utility classes:
```css
.studio-content {
  /* left gutter: clamp(24px → 40px) */
  /* right: 24px on mobile, 26% on desktop (leaves room for sticky nav) */
}
.studio-full {
  /* same left gutter, but right side goes edge-to-edge on desktop */
}
```

### Page Bottom Padding
- `<main>` has `pb-16 md:pb-0` to clear the mobile bottom nav bar
- Footer has `pb-28 md:pb-20` for same reason
- Mobile nav is `fixed bottom-0 z-50 md:hidden`
- Desktop sticky nav is `hidden lg:flex z-40`
- Footer is `relative z-50` to stack above sticky elements

### Border Radius
Custom scale — slightly smaller than Tailwind defaults:
```
lg: 9px (0.5625rem)
md: 6px (0.375rem)
sm: 3px (0.1875rem)
```
Buttons use `rounded-full` (pill shape). Cards typically use `rounded-lg`.

---

## 5. Button Component

Buttons are pill-shaped (`rounded-full`) across all sizes. Variants:

```tsx
<Button>Default</Button>           // pink bg, white text, hover:brightness-110
<Button variant="outline">...</Button>   // transparent, thin border
<Button variant="secondary">...</Button> // border + subtle bg
<Button variant="ghost">...</Button>     // no border
<Button size="sm">...</Button>           // h-8, text-xs
<Button size="lg">...</Button>           // h-11, text-[15px]
<Button size="icon">...</Button>         // 36×36 circle
```

Active state: `active:scale-[0.97]` — a subtle physical press feel. No box shadow.

For links styled as buttons: `<Button asChild><a href="...">...</a></Button>`

---

## 6. Contact Form — Full Technical Breakdown

### Architecture
The form has **no backend route**. It POSTs directly from the browser to Web3Forms, which delivers the email. Nothing touches the Express server.

### Files
- `client/src/components/contact-form-modal.tsx` — the entire feature in one file
- Env var: `VITE_WEB3FORMS_ACCESS_KEY` — the Web3Forms access key, readable in the browser because of the `VITE_` prefix

### Data Flow
```
User fills form
  → react-hook-form validates with zodResolver (Zod schema)
  → onSubmit() fires
  → fetch POST to https://api.web3forms.com/submit
  → includes access_key, name, email, subject, message, to, bcc, from_name
  → Web3Forms delivers email to cubby@colonhyphenbracket.pink (BCC: rorshock@protonmail.com)
  → result.success === true → show success state
  → result.success === false or error → show error state
```

### State Machine
```
idle  →  submitting  →  success
                     →  error  →  idle (via "Try Again")
```
Each state renders a different view inside the same shadcn Dialog. Close resets after 300ms (allows close animation to complete before state change causes flash).

### Form Schema (Zod)
```ts
const contactSchema = z.object({
  name:    z.string().min(1).max(100),
  email:   z.string().email(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(5000),
});
```

### useForm Setup
```ts
const form = useForm<ContactFormValues>({
  resolver: zodResolver(contactSchema),
  defaultValues: { name: "", email: "", subject: "", message: "" },
});
```
Always provide `defaultValues` — shadcn Form components are controlled.

### Trigger Pattern
Both pages hold state (`const [contactOpen, setContactOpen] = useState(false)`) and pass it to the modal:
```tsx
<ContactFormModal open={contactOpen} onOpenChange={setContactOpen} />
<Button onClick={() => setContactOpen(true)}>Contact</Button>
```

### Env Var Access
```ts
access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
```
Note: `process.env` does not work in Vite frontends. Always use `import.meta.env`.

---

## 7. Navigation Architecture

### Desktop Nav (`navigation.tsx`)
- `fixed top-0` with frosted glass: `bg-background/50 backdrop-blur-md`
- Intensifies on scroll past 60px: `bg-background/80 backdrop-blur-xl border-b border-border/30`
- Framer Motion `AnimatePresence` + `layoutId="nav-active-indicator"` drives the animated pink underline that slides between active nav links
- Active state detection: `useLocation()` from wouter, compare against `link.href`

### Mobile Nav (`mobile-nav.tsx`)
- `fixed bottom-0 z-50 md:hidden`
- On the Studio page, shows horizontal-scroll numbered section tabs (01–05) via `StudioSectionsProvider` context
- On the Hire page, shows standard page links

### Page Transitions
`layout.tsx` wraps `<main>` in `AnimatePresence mode="wait"`. Each route gets:
```ts
initial: { opacity: 0, y: 8 }
animate: { opacity: 1, y: 0 }
exit:    { opacity: 0, y: -8 }
transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
```

---

## 8. Chatbot Integration — Where It Lives & How to Hook In

### Recommended Mount Point
The chatbot floating button + panel should be added at the bottom of `layout.tsx`, *inside* `<StudioSectionsProvider>`, *after* `<MobileNav />`. This ensures it sits in every page's layout tree without modifying individual pages.

```tsx
// layout.tsx addition
<FooterSection />
<MobileNav />
<AskKyleChat />   {/* ← add here */}
```

### Z-Index Stack
```
z-50   Footer (relative)
z-50   Mobile nav (fixed bottom)
z-60   Chatbot button/panel (fixed, above everything)
z-40   Desktop sticky nav (hidden on mobile)
```

### Positioning Rule
Mobile nav is `h-16` at the bottom. The chatbot FAB should sit above it:
```tsx
className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-60"
```
On desktop (md+), the mobile nav is hidden, so `bottom-6` is fine.

### Chatbot Panel Styling (to match the site)
```tsx
// Panel container
className="bg-background border border-border rounded-lg shadow-none"

// Header bar
className="border-b border-border/50 px-4 py-3 flex items-center justify-between"

// Header title
className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground"

// Message bubbles (user)
className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm"

// Message bubbles (bot)
className="bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-foreground/80 leading-relaxed"

// Input field — use shadcn Input component
// Send button — use <Button size="icon"> with pink Lucide SendHorizontal icon

// Persona selector chips
className="border border-border rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider cursor-pointer hover:border-primary hover:text-primary transition-colors"
```

### Together.ai API Call (server-side, `server/routes.ts`)
```ts
// POST /api/chat
// Body: { messages: [{role, content}], persona: string }
// Response: streaming text/event-stream

const response = await fetch("https://api.together.xyz/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "deepseek-ai/DeepSeek-V3",  // or "meta-llama/Llama-3.1-405B-Instruct-Turbo"
    messages: [{ role: "system", content: systemPrompt }, ...messages],
    stream: true,
    max_tokens: 1024,
    temperature: 0.7,
  }),
});
```

### Rate Limiting (add to the route)
```ts
// Simple in-memory rate limiter — no extra packages needed
const rateLimiter = new Map<string, { count: number; reset: number }>();
const LIMIT = 20;  // messages per window
const WINDOW = 60 * 60 * 1000;  // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimiter.get(ip);
  if (!record || now > record.reset) {
    rateLimiter.set(ip, { count: 1, reset: now + WINDOW });
    return true;
  }
  if (record.count >= LIMIT) return false;
  record.count++;
  return true;
}
```

### Knowledge Base Loading
```ts
// server/routes.ts — at startup
import fs from "fs";
import path from "path";

function loadKnowledgeBase(): string {
  const kbDir = path.join(process.cwd(), "data", "knowledge-base");
  if (!fs.existsSync(kbDir)) return "";
  return fs.readdirSync(kbDir)
    .filter(f => f.endsWith(".md"))
    .map(f => fs.readFileSync(path.join(kbDir, f), "utf-8"))
    .join("\n\n---\n\n");
}

const KNOWLEDGE_BASE = loadKnowledgeBase();
```

### Session Storage (Emerald Pattern)
```ts
// Frontend — zero-knowledge persistence
// Store conversation in sessionStorage (auto-cleared on tab close)
// Never send to server, never log PII
const SESSION_KEY = "ask-kyle-chat";
const saved = sessionStorage.getItem(SESSION_KEY);
const messages = saved ? JSON.parse(saved) : [];

// On each new message, update storage
sessionStorage.setItem(SESSION_KEY, JSON.stringify(updatedMessages));
```

---

## 9. Gitignore — Private Data Safety
Add these lines to `.gitignore` before committing any knowledge base content:
```
data/
data/knowledge-base/
*.interview.md
*.private.md
```
The `data/` directory with your knowledge base files must never be committed to a public repo. Only the empty directory structure (or a `data/knowledge-base/.gitkeep`) should be checked in.

---

## 10. Accessibility Checklist
Every interactive element in this codebase follows these rules. Match them in the chatbot:

- `data-testid` on every interactive element: pattern `{action}-{target}` (e.g. `button-send-chat`, `input-chat-message`, `panel-chat`)
- `aria-label` on icon-only buttons
- `role="status"` and `aria-live="polite"` on streaming/loading output
- `role="alert"` and `aria-live="assertive"` on error states
- Focus management: when the chat panel opens, focus the first focusable element inside it
- Close on Escape key (shadcn Dialog handles this automatically if you use it)
- `prefers-reduced-motion`: wrap Framer Motion animations in a check or use `useReducedMotion()`

---

## 11. Quick Reference — Common Patterns

### TanStack Query mutation (for the chat API)
```ts
const chatMutation = useMutation({
  mutationFn: (payload: ChatPayload) =>
    apiRequest("POST", "/api/chat", payload),
});
```
`apiRequest` is imported from `@/lib/queryClient` — it's already configured with the right base URL.

### Streaming response (fetch, not TanStack)
For streaming, bypass TanStack Query and use raw fetch with `ReadableStream`:
```ts
const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify(payload), ... });
const reader = res.body!.getReader();
const decoder = new TextDecoder();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  const chunk = decoder.decode(value);
  // parse SSE chunks, append to message state
}
```

### Framer Motion entrance (match site feel)
```ts
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
```

### Conditional dark mode (when not using design tokens)
```tsx
className="bg-white dark:bg-zinc-900 text-black dark:text-white"
```

---

## 12. Environment Variables Summary

| Variable | Where | Purpose |
|---|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | Frontend (Vite) | Contact form submission to Web3Forms |
| `SESSION_SECRET` | Backend (Express) | Session signing |
| `TOGETHER_API_KEY` | Backend (Express) | Together.ai chat completions (add this) |

Access in frontend: `import.meta.env.VITE_*`
Access in backend: `process.env.*`
Never expose backend secrets to the frontend. `TOGETHER_API_KEY` stays server-side only.
