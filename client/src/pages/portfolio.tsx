import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Laptop,
  Smartphone,
  Globe,
  Sparkles,
  Shield,
  Layers,
  Cpu,
  Database,
  CheckCircle2,
} from "lucide-react";
import ContactFormModal from "@/components/contact-form-modal";
import {
  BrandMark,
  ClientLogoBar,
  VideoShowcase,
  SprintCallout,
} from "@/components/chb";
import { ColorsTypeGridsViewer } from "@/components/chb/colors-type-grids-viewer";

export default function PortfolioPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string | undefined>();

  const handleContactClick = (subject?: string) => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#EAE0D0] text-[#281B16] flex flex-col selection:bg-[#FE299E]/20">
      {/* ── Editorial Hero Section ── */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-[#D3C7B5]" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Bold Editorial Typography & Value Props */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <BrandMark size="md" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  Kyle Cyree &bull; Principal Architect &amp; Designer
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-[#281B16] tracking-tight leading-[1.08]">
                Architect the system. <br />
                <span className="italic font-normal text-[#FE299E]">Design the interface.</span> <br />
                Ship the code.
              </h1>

              <p className="text-lg sm:text-xl text-[#6B554D] font-sans leading-relaxed max-w-2xl">
                From 4-day chartered bank sprints to 70M-patient healthcare ecosystems. I bridge the gap that breaks early-stage and growth tech companies: I solve the systems architecture, craft resilient interfaces, and write production-ready software as a <strong className="text-[#281B16] font-bold">&quot;Unit of One.&quot;</strong>
              </p>

              {/* Multi-Platform Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-xs font-mono font-medium text-[#281B16]">
                  <Laptop className="w-3.5 h-3.5 text-[#FE299E]" /> macOS Desktop (Tauri/Rust)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-xs font-mono font-medium text-[#281B16]">
                  <Smartphone className="w-3.5 h-3.5 text-[#FE299E]" /> iOS Mobile (SwiftUI)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-xs font-mono font-medium text-[#281B16]">
                  <Globe className="w-3.5 h-3.5 text-[#FE299E]" /> Web Protocol (pipes.pink)
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Button
                  size="lg"
                  className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-7 py-3.5 shadow-md transition-all cursor-pointer"
                  onClick={() => scrollTo("selected-work")}
                >
                  Explore Flagship Work <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D3C7B5] bg-[#F2EAE0] hover:bg-[#E4DACB] text-[#281B16] font-sans text-xs uppercase tracking-[0.16em] font-semibold rounded-full px-6 py-3.5 cursor-pointer"
                  onClick={() => handleContactClick("1-Week Turnaround Sprint Inquiry ($10k)")}
                >
                  Book 1-Week Sprint ($10k)
                </Button>

                <a
                  href="/resumes/kyle-cyree-resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans uppercase tracking-[0.16em] font-bold text-[#6B554D] hover:text-[#281B16] transition-colors"
                >
                  <Download className="w-4 h-4" /> PDF Resume
                </a>
              </div>
            </div>

            {/* Right Column: Kyle's Portrait & Authentic Human Bio Frame */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative max-w-sm w-full rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-4 shadow-xl space-y-4">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]">
                  <img
                    src="/images/kyle-portrait.jpg"
                    alt="Kyle Cyree — Principal Product Designer & Architect"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#F2EAE0]/95 backdrop-blur-sm border border-[#D3C7B5] text-[10px] font-mono uppercase tracking-wider text-[#281B16] font-bold shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    Available Q4
                  </div>
                </div>

                <div className="space-y-1 px-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-lg text-[#281B16]">Kyle Cyree</span>
                    <span className="font-mono text-[11px] text-[#6B554D]">Raleigh, NC &bull; Remote</span>
                  </div>
                  <p className="text-xs text-[#6B554D] font-sans leading-relaxed">
                    15+ years delivering mission-critical enterprise systems, banking ledgers, and zero-overhead autonomous AI tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enterprise Client Logo Roster ── */}
      <ClientLogoBar />

      {/* ── Heroic Visual Work Showcase ── */}
      <section id="selected-work" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D3C7B5] pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              Selected Flagship Systems
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
              Production Work &amp; Living Protocols
            </h2>
            <p className="text-base text-[#6B554D] max-w-2xl font-sans">
              High-resolution product plates, systems architecture, and live sovereign software across multi-platform desktop, mobile, banking, and sovereign AI.
            </p>
          </div>
          <span className="text-xs font-mono text-[#6B554D] uppercase tracking-wider">
            Click any project to read deep-dive case study
          </span>
        </div>

        {/* ── SPREAD 01: PIPES PROTOCOL — FLAGSHIP MULTI-PLATFORM SHOWCASE ── */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  01 / Flagship Showcase
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-mono uppercase bg-[#F2EAE0] text-[#281B16]">
                  Web &bull; macOS Desktop &bull; iOS Mobile
                </Badge>
                <Badge variant="outline" className="border-[#FE299E]/40 text-[11px] font-mono uppercase bg-[#FE299E]/10 text-[#FE299E] font-bold">
                  $0 Marginal AI Inference
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight">
                Pipes Protocol: Sovereign Multi-Platform Knowledge Ecosystem
              </h3>
              <p className="text-base text-[#6B554D] font-sans max-w-3xl leading-relaxed">
                My flagship software showcase. A complete three-tier sovereign knowledge platform: a native macOS desktop cockpit for deep local authoring and vector indexing, an iOS mobile client for on-the-go capture, and a decentralized web protocol. Solves foundation LLM amnesia and model collapse with deterministic $0 marginal inference.
              </p>
            </div>

            <Link href="/case-studies/pipes">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-6 py-3 shadow-md shrink-0">
                Open Pipes Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* Full-Bleed High-Res Visual Spread for Pipes */}
          <Link href="/case-studies/pipes">
            <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-4 sm:p-7 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer overflow-hidden space-y-5">
              {/* Native macOS Desktop App & Knowledge Ledger */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-2 sm:p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-2 px-1">
                    <span className="font-mono text-[11px] font-bold text-[#281B16] uppercase tracking-wider flex items-center gap-1.5">
                      <Laptop className="w-3.5 h-3.5 text-[#FE299E]" /> macOS Native Desktop App &bull; Bang IDE
                    </span>
                    <span className="font-mono text-[10px] text-[#6B554D]">Tauri / Rust / Local SQLite</span>
                  </div>
                  <img
                    src="/images/pipes/desktop-mac-bang-ide.png"
                    alt="Pipes macOS Desktop App: Native Bang IDE"
                    className="w-full h-auto object-contain rounded-xl shadow-md group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-2 sm:p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-2 px-1">
                      <span className="font-mono text-[11px] font-bold text-[#281B16] uppercase tracking-wider flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-[#FE299E]" /> Sovereign Knowledge Ledger
                      </span>
                      <span className="font-mono text-[10px] text-[#6B554D]">Zero-Latency Caches</span>
                    </div>
                    <img
                      src="/images/pipes/desktop-mac-knowledge.png"
                      alt="Pipes Desktop Sovereign Knowledge Ledger"
                      className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 flex flex-col justify-between">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#FE299E] block mb-1">
                        Web Protocol (pipes.pink)
                      </span>
                      <img
                        src="/images/pipes/pipes-hero.png"
                        alt="Pipes Web Protocol"
                        className="w-full h-24 object-cover rounded-lg border border-[#D3C7B5]/50"
                      />
                    </div>
                    <div className="rounded-2xl bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Smartphone className="w-3 h-3 text-[#FE299E]" />
                        <span className="font-mono text-[10px] uppercase font-bold text-[#281B16]">
                          Pipes Pocket (iOS)
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 py-1">
                        <img
                          src="/images/pipes/pipes-pocket-icon.png"
                          alt="Pipes Pocket iOS Icon"
                          className="w-12 h-12 rounded-xl shadow-sm border border-[#D3C7B5]"
                        />
                        <div className="text-[10px] font-mono text-[#6B554D] leading-tight">
                          Native Swift<br />SwiftUI<br />Local Sync
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="flex flex-wrap items-center justify-between text-xs text-[#6B554D] font-sans px-2 pt-2 border-t border-[#D3C7B5]/60">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-mono font-bold text-[#281B16]">3 Native Platforms</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#281B16]">$0.00 Marginal AI Inference</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#281B16]">6 Live Runtime CSS Personas</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#281B16]">70% Deeded Creator Equity</span>
                </div>
                <span className="font-mono text-[#FE299E] font-bold group-hover:underline">
                  Inspect Multi-Platform Architecture &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 02: CASSANDRA CAREER AGENT & FOCUS MODE V5.0 ── */}
        <div className="space-y-6 pt-8 border-t border-[#D3C7B5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  02 / Autonomous AI Operator
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-mono uppercase bg-[#F2EAE0] text-[#281B16]">
                  Focus Mode v5.0 &bull; Vignelli 8pt Grid
                </Badge>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-mono uppercase bg-[#F2EAE0] text-[#6B554D]">
                  Calming Albers Sand (#F5EFE6)
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight">
                Cassandra: High-Signal Career Agent &amp; Focus Mode
              </h3>
              <p className="text-base text-[#6B554D] font-sans max-w-3xl leading-relaxed">
                jobseeker-agent (Focus Mode v5.0). Eliminates predatory job-board amnesia with an intentional 1-hour &quot;Sprint of 8&quot; batch. When a role is rejected, the explicit dismissal rationale is logged into SQLite (jobs.db) and auto-injected into Gemini 2.5 Flash as Critical Negative Exclusions, training the agent to find progressively sharper matches over time.
              </p>
            </div>

            <Link href="/case-studies/cassandra">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-6 py-3 shadow-md shrink-0">
                Open Cassandra Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* High-Resolution Focus Mode Stills Spread */}
          <Link href="/case-studies/cassandra">
            <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-4 sm:p-7 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer overflow-hidden space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#281B16] px-1 py-1 block">
                    01 / Sprint of 8 Queue
                  </span>
                  <img
                    src="/images/cassandra/focus-mode/00_focusMode_landing_redesign.jpg"
                    alt="Cassandra Focus Mode Landing Redesign"
                    className="w-full h-auto object-cover rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <span className="text-[11px] text-[#6B554D] font-sans px-1 pt-2">
                    Bounded 8-role queue on Calming Albers Sand (#F5EFE6)
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#281B16] px-1 py-1 block">
                    02 / Single-Task Role Review
                  </span>
                  <img
                    src="/images/cassandra/focus-mode/01_focusMode_reviewRole_overview.jpg"
                    alt="Cassandra Role Review Overview"
                    className="w-full h-auto object-cover rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <span className="text-[11px] text-[#6B554D] font-sans px-1 pt-2">
                    Massimo Vignelli 8pt editorial grid &amp; fine art imagery
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#281B16] px-1 py-1 block">
                    03 / Celebration &amp; Dignity
                  </span>
                  <img
                    src="/images/cassandra/focus-mode/09_youGotThis_celebrationScreen_final.jpg"
                    alt="Cassandra You Got This Celebration Screen"
                    className="w-full h-auto object-cover rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <span className="text-[11px] text-[#6B554D] font-sans px-1 pt-2">
                    Restoring dignity and calm to the job search ritual
                  </span>
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="flex flex-wrap items-center justify-between text-xs text-[#6B554D] font-sans px-2 pt-2 border-t border-[#D3C7B5]/60">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-mono font-bold text-[#281B16]">Bounded 1-Hour Focus Sprint</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#281B16]">Negative Dismissal Reinforcement</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#281B16]">Vignelli 8pt Mathematical Grid</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#281B16]">Zero UI Debt</span>
                </div>
                <span className="font-mono text-[#FE299E] font-bold group-hover:underline">
                  Inspect All 6 Focus Mode Plates &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 03: SUPERSTAR, MARIGOLD & HIGHDRAW (PROPRIETARY SUITE) ── */}
        <div className="space-y-6 pt-8 border-t border-[#D3C7B5]">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              03 / Proprietary Software &amp; Protocols
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight">
              Superstar, Marigold &amp; HighDraw
            </h3>
            <p className="text-base text-[#6B554D] font-sans max-w-2xl leading-relaxed">
              Targeted high-craft software: from an external memory bridge solving mobile AI amnesia to an in-browser WASM civic audit engine and a sovereign infinite vector canvas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Superstar Card */}
            <Link href="/case-studies/superstar">
              <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-6 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FE299E] uppercase tracking-wider">
                      Mobile AI Memory Loom
                    </span>
                    <Badge variant="outline" className="border-[#D3C7B5] text-[10px] font-mono bg-[#EAE0D0] text-[#281B16]">
                      DeepSeek Mobile
                    </Badge>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="/images/superstar/superstar-logo.png"
                      alt="Superstar Brand Mark"
                      className="w-12 h-12 rounded-xl shadow-sm border border-[#D3C7B5] bg-[#281B16] p-1 object-contain"
                    />
                    <div>
                      <h4 className="text-xl font-serif font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors leading-tight">
                        Superstar
                      </h4>
                      <p className="text-[11px] font-mono text-[#6B554D]">
                        Built for Victoria
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#6B554D] font-sans leading-relaxed">
                    Built as a 48-hour gift to solve the ephemeral nature of mobile AI chats. Summarizes breakthroughs via background pipelines, updates an evolving master category digest, and enables 1-tap &quot;Copy Context for DeepSeek&quot; reinjection. Designed for one-handed thumb use in Russian and English.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#281B16] font-bold">1-Tap Memory Loom</span>
                  <span className="text-[#FE299E] font-bold group-hover:underline">
                    Read Story &rarr;
                  </span>
                </div>
              </div>
            </Link>

            {/* Marigold Card */}
            <Link href="/case-studies/marigold">
              <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-6 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FE299E] uppercase tracking-wider">
                      Zero-Cloud WASM
                    </span>
                    <Badge variant="outline" className="border-[#D3C7B5] text-[10px] font-mono bg-[#EAE0D0] text-[#281B16]">
                      FEMA HSGP Sec 3%
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-serif font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors leading-tight">
                      Marigold / Miracle
                    </h4>
                    <p className="text-[11px] font-mono text-[#6B554D]">
                      bolt.pipes.pink &bull; DuckDB-WASM
                    </p>
                  </div>

                  <p className="text-xs text-[#6B554D] font-sans leading-relaxed">
                    Zero-cloud analytical execution engine built for county clerks under federal election security mandates. Solved Mississippi&apos;s unopenable voter rolls with 100% in-browser DuckDB-WASM and Zero-PII cryptographic entity hydration—names are hashed before LLM queries and re-hydrated locally in browser memory.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#281B16] font-bold">Zero-PII Hydration</span>
                  <span className="text-[#FE299E] font-bold group-hover:underline">
                    Case Study &rarr;
                  </span>
                </div>
              </div>
            </Link>

            {/* HighDraw Card */}
            <Link href="/case-studies/highdraw">
              <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-6 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FE299E] uppercase tracking-wider">
                      Vector Canvas Protocol
                    </span>
                    <Badge variant="outline" className="border-[#D3C7B5] text-[10px] font-mono bg-[#EAE0D0] text-[#281B16]">
                      120 FPS WebGL
                    </Badge>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="/images/highdraw/highdraw-logo-gold.png"
                      alt="HighDraw Spatial Mark"
                      className="w-12 h-12 rounded-xl shadow-sm border border-[#D3C7B5] bg-[#281B16] p-1.5 object-contain"
                    />
                    <div>
                      <h4 className="text-xl font-serif font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors leading-tight">
                        HighDraw
                      </h4>
                      <p className="text-[11px] font-mono text-[#6B554D]">
                        Sovereign Spatial Canvas
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#6B554D] font-sans leading-relaxed">
                    Sovereign infinite vector canvas and real-time spatial whiteboard built to bypass proprietary SaaS locks (like Figma). Features 120 FPS WebGL rendering, quadtree spatial indexing, sub-8ms pen-to-pixel latency, and human-readable vector ASTs saved locally to SQLite and OPFS.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#281B16] font-bold">100% Local Storage</span>
                  <span className="text-[#FE299E] font-bold group-hover:underline">
                    Case Study &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* ── SPREAD 04: CUSTODIA BANK ── */}
        <div className="space-y-6 pt-8 border-t border-[#D3C7B5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  04 / Flagship Banking
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-mono uppercase bg-[#F2EAE0] text-[#281B16]">
                  Chartered Full-Reserve SPDI Bank
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight">
                Custodia Bank: Core Banking Platform &amp; Brand
              </h3>
              <p className="text-base text-[#6B554D] font-sans max-w-2xl leading-relaxed">
                Sole Founding Designer. Shipped complete marketing website in 4 days and full core banking application in 30 days for Federal Reserve master account review. Unified Fedwire, Money Market, and Bitcoin UTXO settlement rails into a single operational interface. Hand-drew the iconic brand marks (The Horse).
              </p>
            </div>

            <Link href="/case-studies/custodia">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-6 py-3 shadow-md shrink-0">
                Open Custodia Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* Full-Bleed High-Res Visual Spread */}
          <Link href="/case-studies/custodia">
            <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-3 sm:p-6 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer overflow-hidden space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-2 sm:p-4 flex items-center justify-center">
                  <img
                    src="/images/custodia/mm-01.png"
                    alt="Custodia Bank Institutional Money Market Dashboard"
                    className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-2 sm:p-4 flex items-center justify-center">
                  <img
                    src="/images/custodia/utxo-1.png"
                    alt="Custodia Bank Bitcoin UTXO Manager Console"
                    className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-[#6B554D] font-sans px-2 pt-1 border-t border-[#D3C7B5]/60">
                <div className="flex items-center gap-4">
                  <span className="font-mono font-bold text-[#281B16]">4-Day Rebrand Sprint</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#281B16]">30-Day Fed App</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#281B16]">Hand-Drawn Brand Mark (The Horse)</span>
                </div>
                <span className="font-mono text-[#FE299E] font-bold group-hover:underline">
                  Inspect All 7 High-Res Plates &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 05: "COLORS TYPE GRIDS" DESIGN MANIFESTO ── */}
        <div id="manifesto-blueprint" className="space-y-6 pt-8 border-t border-[#D3C7B5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  05 / Design Systems Manifesto
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-mono uppercase bg-[#F2EAE0] text-[#281B16]">
                  3846 × 4800 Masterwork Poster
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight">
                Albers &amp; Vignelli in CSS — Colors Type Grids
              </h3>
              <p className="text-base text-[#6B554D] font-sans max-w-2xl leading-relaxed">
                A Rebel&apos;s Manifesto on Grid-Based Design &amp; Typography by Colon Hyphen Bracket. Built to eradicate AI-generated aesthetic homogeny and prove that mathematical rigor in spacing unlocks interfaces that breathe naturally.
              </p>
            </div>

            <Link href="/case-studies/colors-type-grids">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-6 py-3 shadow-md shrink-0">
                Read Blueprint Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* Interactive Poster Canvas Component */}
          <ColorsTypeGridsViewer />
        </div>

        {/* ── SPREAD 06: ENTERPRISE GIANTS — UNITEDHEALTH GROUP & WALMART ── */}
        <div className="space-y-6 pt-8 border-t border-[#D3C7B5]">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              06 / Enterprise Scale
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight">
              UnitedHealth Group &amp; Walmart Global Tech
            </h3>
            <p className="text-base text-[#6B554D] font-sans max-w-2xl leading-relaxed">
              Designing at immense scale: 70M daily patient mobile applications and enterprise learning graphs for 3.2M associates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* UnitedHealth Group */}
            <Link href="/case-studies/unitedhealth">
              <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-6 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FE299E] uppercase tracking-wider">
                      70M+ Daily Patients
                    </span>
                    <Badge variant="outline" className="border-[#D3C7B5] text-[10px] font-mono bg-[#EAE0D0] text-[#281B16]">
                      80% Android / 50% iOS Screens
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                    UnitedHealth Group / Optum: Patient Apps
                  </h4>
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-2 flex items-center justify-center">
                    <img
                      src="/artwork/enterprise-health.png"
                      alt="UnitedHealth Native App"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <p className="text-sm text-[#6B554D] font-sans leading-relaxed">
                    Led design for UHG&apos;s flagship patient mobile application used by 70M+ Americans. Embedded within Fusion executive consultancy, facilitating C-suite stakeholders and unifying cross-org design systems.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#281B16] font-bold">Fusion C-Suite Advisory</span>
                  <span className="text-[#FE299E] font-bold group-hover:underline">Open Case Study &rarr;</span>
                </div>
              </div>
            </Link>

            {/* Walmart Global Tech */}
            <Link href="/case-studies/walmart">
              <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-6 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FE299E] uppercase tracking-wider">
                      3.2M Global Associates
                    </span>
                    <Badge variant="outline" className="border-[#D3C7B5] text-[10px] font-mono bg-[#EAE0D0] text-[#281B16]">
                      GraphQL Schema &bull; CDP LMS
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                    Walmart Global Tech: Graph Search Paradigm
                  </h4>
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-2 flex items-center justify-center">
                    <img
                      src="/images/walmart/walmart-search-results.png"
                      alt="Walmart Enterprise Graph Search"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <p className="text-sm text-[#6B554D] font-sans leading-relaxed">
                    Senior UX/UI Architect. Architected the enterprise Learning Management System and graph-powered search paradigm for the world&apos;s largest private workforce. GraphQL migration, automated course taxonomy, and admin controls.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#281B16] font-bold">World&apos;s Largest Private Workforce</span>
                  <span className="text-[#FE299E] font-bold group-hover:underline">Open Case Study &rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Video Showcase & Live Demos ── */}
      <VideoShowcase />

      {/* ── About Kyle & "The Unit of One" Manifesto ── */}
      <section id="about-kyle" className="py-20 border-t border-[#D3C7B5] bg-[#F2EAE0]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-4 shadow-xl max-w-sm w-full">
                <img
                  src="/images/kyle-portrait.jpg"
                  alt="Kyle Cyree"
                  className="w-full aspect-square object-cover rounded-2xl border border-[#D3C7B5]"
                />
                <div className="pt-3 pb-1 text-center">
                  <span className="font-serif font-bold text-xl text-[#281B16] block">Kyle Cyree</span>
                  <span className="font-mono text-xs text-[#FE299E] font-bold uppercase tracking-wider">
                    The &quot;Unit of One&quot;
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                Leadership &amp; Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
                Why Founders &amp; Executives Hire a &quot;Unit of One&quot;
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#6B554D] font-sans leading-relaxed">
                <p>
                  Most companies lose 60% of their momentum in the gap between product strategy, design handoffs, and engineering execution. Designers draw impossible mockups in Figma; engineers rebuild them from scratch; executives wonder why shipping takes nine months.
                </p>
                <p>
                  I operate as a singular, zero-overhead execution partner. I facilitate C-suite stakeholders, architect the systems data model, design the user experience with mathematical Vignelli discipline, and ship the production frontend code. No committee bloat. No design debt.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FE299E] font-bold block mb-1">
                    System Architecture
                  </span>
                  <span className="font-serif font-bold text-base text-[#281B16]">Zero-to-One Velocity</span>
                </div>
                <div className="p-4 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FE299E] font-bold block mb-1">
                    Design Systems
                  </span>
                  <span className="font-serif font-bold text-base text-[#281B16]">Vignelli 8pt Rigor</span>
                </div>
                <div className="p-4 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FE299E] font-bold block mb-1">
                    Production Code
                  </span>
                  <span className="font-serif font-bold text-base text-[#281B16]">Zero Agency Handoffs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conversion Sprint Offer ($10k / 1 Week) ── */}
      <section id="sprint-offer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <SprintCallout onContactClick={handleContactClick} />
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal
        open={isContactOpen}
        onOpenChange={setIsContactOpen}
        defaultSubject={contactSubject}
      />
    </div>
  );
}
