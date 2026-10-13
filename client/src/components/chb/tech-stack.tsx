import { Link } from "wouter";
import { Layout, Database, Sparkles, Terminal, ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import { openContactModal } from "@/lib/contact-events";

interface ProofLink {
  label: string;
  href: string;
  external?: boolean;
}

interface StackPillar {
  number: string;
  category: string;
  role: string;
  icon: typeof Layout;
  tags: string[];
  description: string;
  deliverables: string;
  proofLinks: ProofLink[];
}

const pillars: StackPillar[] = [
  {
    number: "01",
    category: "Interface Engineering & Design Systems",
    role: "Frontend Craft & Prototyping",
    icon: Layout,
    tags: ["TypeScript", "Next.js (App Router)", "React 18/19", "Tailwind CSS", "Framer Motion", "Radix UI"],
    description: "Swiss 8pt grid discipline, responsive web layouts, zero-layout-shift micro-interactions, and accessible ARIA primitives built to enterprise design standards.",
    deliverables: "Design tokens, component libraries, high-fidelity interactive prototypes, and production UI.",
    proofLinks: [
      { label: "Custodia Bank OS", href: "/case-studies/custodia" },
      { label: "UnitedHealth Group (35M+)", href: "/case-studies/unitedhealth" },
    ],
  },
  {
    number: "02",
    category: "Systems, Edge & Data Modeling",
    role: "Data Schemas & Edge State",
    icon: Database,
    tags: ["PostgreSQL", "LibSQL / SQLite", "DuckDB-WASM", "Apache Arrow", "Zod", "REST & GraphQL"],
    description: "Modeling data from first principles. Structuring relational schemas, type-safe validation, and client-side zero-knowledge analytics on 500k+ records in-browser.",
    deliverables: "Pragmatic schemas, edge databases, client-side analytical engines, and end-to-end type contracts.",
    proofLinks: [
      { label: "Marigold Audit (DuckDB-WASM)", href: "https://github.com/rorshockbtc/marigold", external: true },
      { label: "Walmart Enterprise Search (3M)", href: "/case-studies/walmart" },
    ],
  },
  {
    number: "03",
    category: "AI Acceleration & Prompt Engineering",
    role: "Model Steering & 10x Velocity",
    icon: Sparkles,
    tags: ["Claude & Gemini APIs", "Structured Outputs (JSON)", "WebGPU", "Transformers.js", "Agentic Tool-Calling"],
    description: "Using AI to build, test, and iterate rapidly—especially on backend logic and data pipelines. Deterministic model steering, zero-cloud client privacy, and automated prototyping.",
    deliverables: "AI-assisted backend scaffolding, local neural inference, custom prompts, and domain-specific agents.",
    proofLinks: [
      { label: "Greater-Than (WebGPU)", href: "https://github.com/rorshockbtc/greater-than", external: true },
      { label: "Cassandra AI Triage", href: "/case-studies/cassandra" },
    ],
  },
  {
    number: "04",
    category: "Native & Performance Prototyping",
    role: "Cross-Platform & Pipeline Runtimes",
    icon: Terminal,
    tags: ["Tauri 2.0", "Rust", "Swift / SwiftUI", "Python (Data/ETL)", "Vite"],
    description: "Bridging web engines into native desktop and mobile runtimes. Writing automated data extraction scripts and native OS integrations when off-the-shelf tools fall short.",
    deliverables: "Native macOS/iOS test builds, high-throughput ETL scripts, and sovereign desktop apps.",
    proofLinks: [
      { label: "Pipes Native (Tauri/Rust/Swift)", href: "https://github.com/rorshockbtc/pipes-native", external: true },
      { label: "Pipes Sovereign Protocol", href: "/case-studies/pipes" },
    ],
  },
];

export function TechStack() {
  return (
    <div id="code-stack" className="space-y-12 pt-16 border-t border-[#D3C7B5] scroll-mt-28">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FE299E]" aria-hidden="true" />
          Architectural Capabilities &amp; Production Stack
        </p>
        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight leading-tight">
          How I build: architecture, craft, and AI velocity.
        </h3>
        <p className="text-base sm:text-lg text-[#5C4840] font-sans leading-relaxed">
          I'm a systems architect, product designer, and prompt engineer who can read and reason about code. I don't claim to be a low-level compiler hacker—I model data schemas from first principles, craft interfaces with Swiss discipline, inspect pull requests, and use AI acceleration (especially on the backend) to ship working software in days instead of quarters.
        </p>
      </div>

      {/* 4-Pillar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              className="group p-8 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0]/70 hover:border-[#FE299E] hover:bg-[#F2EAE0] transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                {/* Top Bar: Number & Category */}
                <div className="flex items-center justify-between gap-4 border-b border-[#D3C7B5]/60 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#FE299E] px-2 py-0.5 rounded bg-[#FE299E]/10">
                      LAYER {pillar.number}
                    </span>
                    <span className="font-mono text-xs text-[#8A736A] font-semibold uppercase tracking-wider">
                      {pillar.role}
                    </span>
                  </div>
                  <Icon className="w-5 h-5 text-[#8A736A] group-hover:text-[#FE299E] transition-colors" />
                </div>

                {/* Title */}
                <h4 className="font-serif text-2xl font-bold text-[#281B16] tracking-tight">
                  {pillar.category}
                </h4>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-[#5C4840] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#E4DACB] text-[#281B16] border border-[#D3C7B5]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Deliverables + Live Proof Links */}
              <div className="pt-4 border-t border-[#D3C7B5]/60 space-y-3 font-sans text-xs sm:text-sm text-[#6B554D]">
                <div>
                  <span className="font-semibold text-[#281B16] uppercase tracking-wider text-[11px] block mb-1">
                    Key Deliverables
                  </span>
                  {pillar.deliverables}
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#8A736A]">
                    Shipped in:
                  </span>
                  {pillar.proofLinks.map((proof) =>
                    proof.external ? (
                      <a
                        key={proof.label}
                        href={proof.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-sans text-xs font-bold text-[#281B16] hover:text-[#FE299E] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] transition-colors"
                      >
                        {proof.label} <ArrowUpRight className="w-3 h-3 text-[#FE299E]" />
                      </a>
                    ) : (
                      <Link
                        key={proof.label}
                        href={proof.href}
                        className="inline-flex items-center gap-1 font-sans text-xs font-bold text-[#281B16] hover:text-[#FE299E] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] transition-colors"
                      >
                        {proof.label} <ArrowRight className="w-3 h-3 text-[#FE299E]" />
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grounding Ethos & Conversion Callout */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[#D3C7B5] bg-[#EAE0D0] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-widest font-bold text-[#FE299E]">
            Operating as a Unit of One
          </p>
          <p className="font-serif text-lg sm:text-xl font-bold text-[#281B16]">
            Eliminating the lossy handoff between design, product management, and engineering.
          </p>
          <p className="font-sans text-sm text-[#5C4840]">
            By architecting data schemas and prototyping in code with AI acceleration, decisions that usually take 6 cross-functional meetings get validated in a single afternoon.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => openContactModal("1-week sprint ($7,500)")}
            className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-[#FE299E] hover:bg-[#D81B80] text-white font-sans text-sm font-bold transition-colors whitespace-nowrap"
          >
            Scope a 1-Week Sprint · $7,500 <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://calendly.com/cubby-colonhyphenbracket/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 h-12 rounded-full border border-[#281B16]/25 hover:border-[#281B16] text-[#281B16] font-sans text-sm font-bold transition-colors whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-[#FE299E]" /> Book 30-min call
          </a>
        </div>
      </div>
    </div>
  );
}
