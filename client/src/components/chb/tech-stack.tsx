import { Layout, Database, Sparkles, Terminal, ArrowUpRight } from "lucide-react";

interface StackPillar {
  number: string;
  category: string;
  role: string;
  icon: typeof Layout;
  tags: string[];
  description: string;
  deliverables: string;
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
  },
  {
    number: "02",
    category: "Systems, Edge & Data Modeling",
    role: "Data Schemas & Edge State",
    icon: Database,
    tags: ["PostgreSQL", "LibSQL / SQLite", "DuckDB-WASM", "Apache Arrow", "Zod", "REST & GraphQL"],
    description: "Modeling data from first principles. Structuring relational schemas, type-safe validation, and client-side zero-knowledge analytics on 500k+ records in-browser.",
    deliverables: "Pragmatic schemas, edge databases, client-side analytical engines, and end-to-end type contracts.",
  },
  {
    number: "03",
    category: "AI Acceleration & Prompt Engineering",
    role: "Model Steering & 10x Velocity",
    icon: Sparkles,
    tags: ["Claude & Gemini APIs", "Structured Outputs (JSON)", "WebGPU", "Transformers.js", "Agentic Tool-Calling"],
    description: "Using AI to build, test, and iterate rapidly—especially on backend logic and data pipelines. Deterministic model steering, zero-cloud client privacy, and automated prototyping.",
    deliverables: "AI-assisted backend scaffolding, local neural inference, custom prompts, and domain-specific agents.",
  },
  {
    number: "04",
    category: "Native & Performance Prototyping",
    role: "Cross-Platform & Pipeline Runtimes",
    icon: Terminal,
    tags: ["Tauri 2.0", "Rust", "Swift / SwiftUI", "Python (Data/ETL)", "Vite"],
    description: "Bridging web engines into native desktop and mobile runtimes. Writing automated data extraction scripts and native OS integrations when off-the-shelf tools fall short.",
    deliverables: "Native macOS/iOS test builds, high-throughput ETL scripts, and sovereign desktop apps.",
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
          I'm a systems architect, product designer, and prompt engineer who understands code. I don't claim to be a low-level compiler hacker—I model data schemas from first principles, craft interfaces with Swiss discipline, inspect pull requests, and leverage AI to write backend logic and ship functional prototypes in days instead of quarters.
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

              {/* Bottom Deliverables */}
              <div className="pt-4 border-t border-[#D3C7B5]/60 font-sans text-xs sm:text-sm text-[#6B554D]">
                <span className="font-semibold text-[#281B16] uppercase tracking-wider text-[11px] block mb-1">
                  Key Deliverables
                </span>
                {pillar.deliverables}
              </div>
            </div>
          );
        })}
      </div>

      {/* Grounding Ethos Callout */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[#D3C7B5] bg-[#EAE0D0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
        <a
          href="https://github.com/rorshockbtc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-sm font-bold transition-colors whitespace-nowrap"
        >
          View GitHub Repos <ArrowUpRight className="w-4 h-4 text-[#FE299E]" />
        </a>
      </div>
    </div>
  );
}
