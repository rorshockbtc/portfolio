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
    <div id="code-stack" className="space-y-6 pt-8 border-t border-[#D3C7B5] scroll-mt-28">
      {/* Compact Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
            04.B // ARCHITECTURAL CAPABILITIES &amp; PRODUCTION STACK
          </p>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#281B16] tracking-tight mt-0.5">
            Four layers of execution: from relational schema to production UI
          </h3>
        </div>
      </div>

      {/* Compact 4-Column Capability Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              className="group p-5 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Top Bar: Number & Category */}
                <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-2.5">
                  <span className="font-mono text-[11px] font-bold text-[#FE299E] px-2 py-0.5 rounded bg-[#FE299E]/10 whitespace-nowrap">
                    LAYER {pillar.number}
                  </span>
                  <Icon className="w-4 h-4 text-[#4A3A32] group-hover:text-[#FE299E] transition-colors shrink-0" />
                </div>

                {/* Title */}
                <h4 className="font-serif text-lg font-bold text-[#281B16] tracking-tight leading-snug">
                  {pillar.category}
                </h4>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#4A3A32] leading-[1.68]">
                  {pillar.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-[#EAE0D0] text-[#281B16] border border-[#D3C7B5] whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Live Proof Links */}
              <div className="pt-2.5 border-t border-[#D3C7B5]/70 flex flex-col gap-1 font-sans text-xs">
                {pillar.proofLinks.map((proof) =>
                  proof.external ? (
                    <a
                      key={proof.label}
                      href={proof.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between font-sans text-xs font-bold text-[#281B16] hover:text-[#FE299E] transition-colors whitespace-nowrap no-underline"
                    >
                      <span>{proof.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#FE299E] shrink-0" />
                    </a>
                  ) : (
                    <Link
                      key={proof.label}
                      href={proof.href}
                      className="inline-flex items-center justify-between font-sans text-xs font-bold text-[#281B16] hover:text-[#FE299E] transition-colors whitespace-nowrap no-underline"
                    >
                      <span>{proof.label}</span>
                      <ArrowRight className="w-3 h-3 text-[#FE299E] shrink-0" />
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
