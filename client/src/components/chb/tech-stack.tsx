import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

const CAPABILITY_MATRIX = [
  {
    num: "I",
    category: "04.A // Product Architecture",
    title: "Regulated Systems & UX",
    summary:
      "End-to-end systems design for multi-party custody, clinical healthcare, and national retail operations.",
    items: [
      "Information Architecture & Domain Modeling",
      "Multi-Signature Custody & Compliance UX",
      "Clinical & Patient Portal Systems (WCAG AAA)",
      "Enterprise Design Systems & Token Governance",
      "Quantitative Usability & Field Ergonomics",
    ],
  },
  {
    num: "II",
    category: "04.B // Frontend & Runtime",
    title: "Production Engineering",
    summary:
      "Shipping accessible, zero-bloat web and desktop interfaces directly in production repositories.",
    items: [
      "TypeScript 5 · React 19 · Next.js App Router",
      "Tailwind CSS · Radix Primitives · Framer Motion",
      "Tauri v2 · Rust Native Desktop Shells",
      "SwiftUI · Kotlin Multiplatform Foundations",
      "Storybook · Playwright E2E Verification",
    ],
  },
  {
    num: "III",
    category: "04.C // AI & Local Analytics",
    title: "Agentic & Edge Compute",
    summary:
      "Sovereign AI protocols, Socratic agent harnesses, and in-browser analytical engines.",
    items: [
      "Model Context Protocol (MCP) & HTTP 402 Gates",
      "Claude Sonnet / Opus · Gemini 2.5 · OpenAI",
      "DuckDB-WASM · Apache Arrow · WebGPU",
      "Whisper Voice Pipelines & Semantic Schemas",
      "SHA-256 Content-Addressed Knowledge Graphs",
    ],
  },
  {
    num: "IV",
    category: "04.D // Data & Infrastructure",
    title: "Cloud & Cryptographic Spine",
    summary:
      "Resilient relational schemas, edge deployment, and cryptographic settlement rails.",
    items: [
      "PostgreSQL · Drizzle ORM · Neon Serverless",
      "Node.js · Express · Cloudflare Workers",
      "Web Crypto API (AES-GCM-256) · Zero-Knowledge",
      "Bitcoin Core · Lightning Network · Stripe Connect",
      "Vercel Edge · GitHub Actions CI/CD",
    ],
  },
];

export function TechStack() {
  return (
    <div className="mt-20" data-testid="section-tech-stack">
      <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#281B16]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840] mb-2">
            04.B // Full-Stack Architectural Matrix
          </div>
          <h3 className="font-serif font-light text-3xl sm:text-4xl text-[#281B16] tracking-[-0.02em] leading-[1.08]">
            One architect across{" "}
            <span className="italic font-normal text-[#FE299E]">four layers</span> of the stack.
          </h3>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
          Figma Tokens → TypeScript / Rust → Edge Production
        </p>
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D3C7B5] border-b border-[#281B16]">
        {CAPABILITY_MATRIX.map((group, idx) => (
          <StaggerItem
            key={group.category}
            className={`py-8 sm:py-10 flex flex-col justify-between ${
              idx === 0
                ? "lg:pr-7"
                : idx === CAPABILITY_MATRIX.length - 1
                ? "lg:pl-7 md:pl-6"
                : "lg:px-7 md:px-6"
            }`}
            data-testid={`tech-group-${idx}`}
          >
            <div>
              <div className="flex items-baseline justify-between gap-2 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
                  {group.category}
                </span>
                <span className="font-serif italic text-xl text-[#5C4840]">
                  {group.num}
                </span>
              </div>

              <h4 className="font-serif font-normal text-2xl sm:text-[28px] text-[#281B16] tracking-[-0.015em] leading-[1.12] mb-3">
                {group.title}
              </h4>

              <p className="font-sans text-xs sm:text-[13px] text-[#5C4840] leading-[1.6] mb-6">
                {group.summary}
              </p>
            </div>

            <ul className="divide-y divide-[#D3C7B5]/70 border-t border-[#D3C7B5]">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="py-2.5 font-mono text-[11px] text-[#281B16] tracking-[0.01em] flex items-center justify-between gap-2"
                >
                  <span>{item}</span>
                  <span className="w-1 h-1 rounded-full bg-[#281B16]/40 shrink-0" />
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export default TechStack;
