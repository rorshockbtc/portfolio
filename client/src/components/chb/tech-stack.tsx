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
    <div id="code-stack" className="space-y-8 pt-10 border-t border-[#D3C7B5] scroll-mt-28">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FE299E]" aria-hidden="true" />
            Architectural Capabilities &amp; Production Stack
          </p>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16] tracking-tight leading-snug">
            Four layers of execution: from relational schema to production UI.
          </h3>
        </div>
        <p className="text-sm sm:text-base text-[#4A3A32] font-sans leading-[1.7] max-w-md">
          First-principles data modeling, mathematical Vignelli grids, and AI-accelerated TypeScript, Python, and Rust engineering.
        </p>
      </div>

      {/* 4-Pillar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              className="group p-6 sm:p-7 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Top Bar: Number & Category */}
                <div className="flex items-center justify-between gap-4 border-b border-[#D3C7B5] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#FE299E] px-2 py-0.5 rounded bg-[#FE299E]/10 whitespace-nowrap">
                      LAYER {pillar.number}
                    </span>
                    <span className="font-mono text-xs text-[#4A3A32] font-bold uppercase tracking-wider">
                      {pillar.role}
                    </span>
                  </div>
                  <Icon className="w-4 h-4 text-[#4A3A32] group-hover:text-[#FE299E] transition-colors shrink-0" />
                </div>

                {/* Title */}
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#281B16] tracking-tight leading-snug">
                  {pillar.category}
                </h4>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-[#4A3A32] leading-[1.7]">
                  {pillar.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#EAE0D0] text-[#281B16] border border-[#D3C7B5] whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Live Proof Links */}
              <div className="pt-3 border-t border-[#D3C7B5]/70 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-sans text-xs">
                <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#4A3A32]">
                  Shipped in:
                </span>
                {pillar.proofLinks.map((proof) =>
                  proof.external ? (
                    <a
                      key={proof.label}
                      href={proof.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-sans text-xs font-bold text-[#281B16] hover:text-[#FE299E] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] transition-colors whitespace-nowrap"
                    >
                      {proof.label} <ArrowUpRight className="w-3 h-3 text-[#FE299E]" />
                    </a>
                  ) : (
                    <Link
                      key={proof.label}
                      href={proof.href}
                      className="inline-flex items-center gap-1 font-sans text-xs font-bold text-[#281B16] hover:text-[#FE299E] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] transition-colors whitespace-nowrap"
                    >
                      {proof.label} <ArrowRight className="w-3 h-3 text-[#FE299E]" />
                    </Link>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
