import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Eye,
  Check,
  Shield,
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  Compass,
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
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[#FE299E]/20">
      {/* ── Editorial Hero Section ── */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-[#DBD3C4]" data-testid="section-hero">
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

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-[#2B1E19] tracking-tight leading-[1.08]">
                Architect the system. <br />
                <span className="italic font-normal text-[#FE299E]">Design the interface.</span> <br />
                Ship the code.
              </h1>

              <p className="text-lg sm:text-xl text-[#735F57] font-sans leading-relaxed max-w-2xl">
                From 4-day chartered bank sprints to 70M-patient healthcare ecosystems. I bridge the gap that breaks early-stage and growth tech companies: I solve the systems architecture, craft resilient interfaces, and write production-ready software as a <strong className="text-[#2B1E19] font-bold">&quot;Unit of One.&quot;</strong>
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Button
                  size="lg"
                  className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-7 py-3.5 shadow-md transition-all cursor-pointer"
                  onClick={() => scrollTo("selected-work")}
                >
                  Explore Selected Work <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#DBD3C4] bg-[#FAF5EC] hover:bg-[#EFE8DC] text-[#2B1E19] font-sans text-xs uppercase tracking-[0.16em] font-semibold rounded-full px-6 py-3.5 cursor-pointer"
                  onClick={() => handleContactClick("1-Week Turnaround Sprint Inquiry ($10k)")}
                >
                  Book 1-Week Sprint ($10k)
                </Button>

                <a
                  href="/resumes/kyle-cyree-resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans uppercase tracking-[0.16em] font-bold text-[#735F57] hover:text-[#2B1E19] transition-colors"
                >
                  <Download className="w-4 h-4" /> PDF Resume
                </a>
              </div>
            </div>

            {/* Right Column: Kyle's Portrait & Authentic Human Bio Frame */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative max-w-sm w-full rounded-3xl border border-[#DBD3C4] bg-[#FAF5EC] p-4 shadow-xl space-y-4">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#EFE8DC] border border-[#DBD3C4]">
                  <img
                    src="/images/kyle-portrait.jpg"
                    alt="Kyle Cyree — Principal Product Designer & Architect"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FAF5EC]/95 backdrop-blur-sm border border-[#DBD3C4] text-[10px] font-mono uppercase tracking-wider text-[#2B1E19] font-bold shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    Available Q4
                  </div>
                </div>

                <div className="space-y-1 px-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-lg text-[#2B1E19]">Kyle Cyree</span>
                    <span className="font-mono text-[11px] text-[#735F57]">Raleigh, NC &bull; Remote</span>
                  </div>
                  <p className="text-xs text-[#735F57] font-sans leading-relaxed">
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

      {/* ── Heroic Visual Work Showcase (Zero Card Grids) ── */}
      <section id="selected-work" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-24">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DBD3C4] pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              Selected Flagship Systems
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B1E19] tracking-tight">
              Verified Institutional Work
            </h2>
            <p className="text-base text-[#735F57] max-w-2xl font-sans">
              High-resolution product plates and systems architecture from chartered banking, Fortune 1 retail, healthcare, and sovereign AI.
            </p>
          </div>
          <span className="text-xs font-mono text-[#735F57] uppercase tracking-wider">
            Click any project to read deep-dive case study
          </span>
        </div>

        {/* ── SPREAD 01: CUSTODIA BANK ── */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  01 / Flagship Banking
                </span>
                <span className="text-[#DBD3C4]">&bull;</span>
                <Badge variant="outline" className="border-[#DBD3C4] text-[11px] font-mono uppercase bg-[#FAF5EC] text-[#735F57]">
                  Chartered Full-Reserve SPDI Bank
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E19] tracking-tight">
                Custodia Bank: Core Banking Platform &amp; Brand
              </h3>
              <p className="text-base text-[#735F57] font-sans max-w-2xl leading-relaxed">
                Sole Founding Designer. Shipped complete marketing website in 4 days and full core banking application in 30 days for Federal Reserve master account review. Unified Fedwire, Money Market, and Bitcoin UTXO settlement rails into a single operational interface.
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
            <div className="group rounded-3xl border border-[#DBD3C4] bg-[#FAF5EC] p-3 sm:p-6 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer overflow-hidden space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#EFE8DC] border border-[#DBD3C4]/60 p-2 sm:p-4 flex items-center justify-center">
                  <img
                    src="/images/custodia/mm-01.png"
                    alt="Custodia Bank Institutional Money Market Dashboard"
                    className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#EFE8DC] border border-[#DBD3C4]/60 p-2 sm:p-4 flex items-center justify-center">
                  <img
                    src="/images/custodia/utxo-1.png"
                    alt="Custodia Bank Bitcoin UTXO Manager Console"
                    className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-[#735F57] font-sans px-2 pt-1 border-t border-[#DBD3C4]/60">
                <div className="flex items-center gap-4">
                  <span className="font-mono font-bold text-[#2B1E19]">4-Day Rebrand Sprint</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#2B1E19]">30-Day Fed App</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#2B1E19]">Hand-Drawn Brand Mark (The Horse)</span>
                </div>
                <span className="font-mono text-[#FE299E] font-bold group-hover:underline">
                  Inspect All 7 High-Res Plates &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 02: "COLORS TYPE GRIDS" DESIGN MANIFESTO ── */}
        <div id="manifesto-blueprint" className="space-y-6 pt-8 border-t border-[#DBD3C4]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  02 / Design Systems Manifesto
                </span>
                <span className="text-[#DBD3C4]">&bull;</span>
                <Badge variant="outline" className="border-[#DBD3C4] text-[11px] font-mono uppercase bg-[#FAF5EC] text-[#735F57]">
                  3846 × 4800 Masterwork Poster
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E19] tracking-tight">
                Albers &amp; Vignelli in CSS — Colors Type Grids
              </h3>
              <p className="text-base text-[#735F57] font-sans max-w-2xl leading-relaxed">
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

        {/* ── SPREAD 03: UNITEDHEALTH GROUP & OPTUM ── */}
        <div className="space-y-6 pt-8 border-t border-[#DBD3C4]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  03 / Scale Healthcare
                </span>
                <span className="text-[#DBD3C4]">&bull;</span>
                <Badge variant="outline" className="border-[#DBD3C4] text-[11px] font-mono uppercase bg-[#FAF5EC] text-[#735F57]">
                  70M+ Daily Patients
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E19] tracking-tight">
                UnitedHealth Group / Optum: Flagship Native Patient Apps
              </h3>
              <p className="text-base text-[#735F57] font-sans max-w-2xl leading-relaxed">
                Senior Product Designer &amp; Fusion Strategist. Led design for UHG&apos;s flagship patient mobile application used by 70M+ Americans. Produced 80%+ of Android and 50%+ of iOS screens. Embedded within Fusion (executive consultancy) facilitating C-suite stakeholders and unifying cross-org design systems.
              </p>
            </div>

            <Link href="/case-studies/unitedhealth">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-6 py-3 shadow-md shrink-0">
                Open UnitedHealth Case Study &rarr;
              </Button>
            </Link>
          </div>

          <Link href="/case-studies/unitedhealth">
            <div className="group rounded-3xl border border-[#DBD3C4] bg-[#FAF5EC] p-3 sm:p-6 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer overflow-hidden space-y-4">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#EFE8DC] border border-[#DBD3C4]/60 p-2 sm:p-6 flex items-center justify-center">
                <img
                  src="/artwork/enterprise-health.png"
                  alt="UnitedHealth Group Flagship Native Patient App Experience"
                  className="w-full h-full object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-[#735F57] font-sans px-2 pt-1 border-t border-[#DBD3C4]/60">
                <div className="flex items-center gap-4">
                  <span className="font-mono font-bold text-[#2B1E19]">70M+ Patients</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#2B1E19]">80% Android / 50% iOS Ownership</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#2B1E19]">Fusion C-Suite Advisory</span>
                </div>
                <span className="font-mono text-[#FE299E] font-bold group-hover:underline">
                  Read Full Mobile Architecture Case Study &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 04: WALMART GLOBAL TECH ── */}
        <div className="space-y-6 pt-8 border-t border-[#DBD3C4]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  04 / Enterprise Workforce
                </span>
                <span className="text-[#DBD3C4]">&bull;</span>
                <Badge variant="outline" className="border-[#DBD3C4] text-[11px] font-mono uppercase bg-[#FAF5EC] text-[#735F57]">
                  3.2M Global Associates
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E19] tracking-tight">
                Walmart Global Tech: Graph Search Paradigm &amp; LMS
              </h3>
              <p className="text-base text-[#735F57] font-sans max-w-2xl leading-relaxed">
                Senior UX/UI Architect. Architected the enterprise Learning Management System and graph-powered search paradigm for the world&apos;s largest private workforce (3.2M associates). Spearheaded GraphQL migration, automated course taxonomy, and admin publishing controls.
              </p>
            </div>

            <Link href="/case-studies/walmart">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-6 py-3 shadow-md shrink-0">
                Open Walmart Case Study &rarr;
              </Button>
            </Link>
          </div>

          <Link href="/case-studies/walmart">
            <div className="group rounded-3xl border border-[#DBD3C4] bg-[#FAF5EC] p-3 sm:p-6 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer overflow-hidden space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#EFE8DC] border border-[#DBD3C4]/60 p-2 sm:p-4 flex items-center justify-center">
                  <img
                    src="/images/walmart/walmart-search-results.png"
                    alt="Walmart Enterprise Graph-Powered Search Paradigm"
                    className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#EFE8DC] border border-[#DBD3C4]/60 p-2 sm:p-4 flex items-center justify-center">
                  <img
                    src="/images/walmart/walmart-cdp-content.png"
                    alt="Walmart Content Distribution Platform Lifecycle"
                    className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-[#735F57] font-sans px-2 pt-1 border-t border-[#DBD3C4]/60">
                <div className="flex items-center gap-4">
                  <span className="font-mono font-bold text-[#2B1E19]">3.2M Associates</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#2B1E19]">GraphQL Schema Migration</span>
                  <span>&bull;</span>
                  <span className="font-mono font-bold text-[#2B1E19]">CDP Publishing Tools</span>
                </div>
                <span className="font-mono text-[#FE299E] font-bold group-hover:underline">
                  Inspect All Walmart Administrative Plates &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 05: CASSANDRA CAREER AGENT & PIPES ── */}
        <div className="space-y-6 pt-8 border-t border-[#DBD3C4]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  05 / Sovereign AI &amp; Protocols
                </span>
                <span className="text-[#DBD3C4]">&bull;</span>
                <Badge variant="outline" className="border-[#DBD3C4] text-[11px] font-mono uppercase bg-[#FAF5EC] text-[#735F57]">
                  Focus Mode v5.0 &bull; $0 Marginal AI
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E19] tracking-tight">
                Cassandra &amp; Pipes Protocol
              </h3>
              <p className="text-base text-[#735F57] font-sans max-w-2xl leading-relaxed">
                Autonomous operators built as a &quot;Unit of One.&quot; Cassandra features the &apos;Sprint of 8&apos; Focus Mode with SQLite negative reinforcement. Pipes Protocol executes deterministic reference libraries at $0.00 marginal LLM inference cost.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Link href="/case-studies/cassandra">
                <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-5 py-3 shadow-md">
                  Cassandra Case Study &rarr;
                </Button>
              </Link>
              <Link href="/case-studies/pipes">
                <Button variant="outline" className="border-[#DBD3C4] bg-[#FAF5EC] hover:bg-[#EFE8DC] text-[#2B1E19] font-sans text-xs uppercase tracking-[0.16em] font-medium rounded-full px-5 py-3">
                  Pipes Protocol &rarr;
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/case-studies/cassandra">
              <div className="group rounded-3xl border border-[#DBD3C4] bg-[#FAF5EC] p-4 sm:p-5 shadow-lg hover:border-[#FE299E] transition-all cursor-pointer space-y-3">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#EFE8DC] border border-[#DBD3C4]/60 p-2 flex items-center justify-center">
                  <img
                    src="/images/cassandra/cassandra_combined.png"
                    alt="Cassandra Focus Mode v5.0"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-xl text-[#2B1E19] group-hover:text-[#FE299E] transition-colors">
                    Cassandra: Vignelli 8pt Focus Mode
                  </h4>
                  <p className="text-xs text-[#735F57] font-sans line-clamp-2">
                    Autonomous career operator with SQLite continuous rejection reinforcement and Massimo Vignelli editorial grid.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/pipes">
              <div className="group rounded-3xl border border-[#DBD3C4] bg-[#FAF5EC] p-4 sm:p-5 shadow-lg hover:border-[#FE299E] transition-all cursor-pointer space-y-3">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#EFE8DC] border border-[#DBD3C4]/60 p-2 flex items-center justify-center">
                  <img
                    src="/images/pipes/pipes-hero.png"
                    alt="Pipes Protocol Knowledge Marketplace"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-xl text-[#2B1E19] group-hover:text-[#FE299E] transition-colors">
                    Pipes Protocol: Sovereign Knowledge Marketplace
                  </h4>
                  <p className="text-xs text-[#735F57] font-sans line-clamp-2">
                    Runtime CSS variable injection across 6 live audience personas and $0 marginal inference reference libraries.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Video Showcase & Live Demos ── */}
      <VideoShowcase />

      {/* ── About Kyle & "The Unit of One" Manifesto ── */}
      <section id="about-kyle" className="py-20 border-t border-[#DBD3C4] bg-[#FAF5EC]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl border border-[#DBD3C4] bg-[#FAF5EC] p-4 shadow-xl max-w-sm w-full">
                <img
                  src="/images/kyle-portrait.jpg"
                  alt="Kyle Cyree"
                  className="w-full aspect-square object-cover rounded-2xl border border-[#DBD3C4]"
                />
                <div className="pt-3 pb-1 text-center">
                  <span className="font-serif font-bold text-xl text-[#2B1E19] block">Kyle Cyree</span>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B1E19] tracking-tight">
                Why Founders &amp; Executives Hire a &quot;Unit of One&quot;
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#735F57] font-sans leading-relaxed">
                <p>
                  Most companies lose 60% of their momentum in the gap between product strategy, design handoffs, and engineering execution. Designers draw impossible mockups in Figma; engineers rebuild them from scratch; executives wonder why shipping takes nine months.
                </p>
                <p>
                  I operate as a singular, zero-overhead execution partner. I facilitate C-suite stakeholders, architect the systems data model, design the user experience with mathematical Vignelli discipline, and ship the production frontend code. No committee bloat. No design debt.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl border border-[#DBD3C4] bg-[#FAF5EC]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FE299E] font-bold block mb-1">
                    System Architecture
                  </span>
                  <span className="font-serif font-bold text-base text-[#2B1E19]">Zero-to-One Velocity</span>
                </div>
                <div className="p-4 rounded-2xl border border-[#DBD3C4] bg-[#FAF5EC]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FE299E] font-bold block mb-1">
                    Design Systems
                  </span>
                  <span className="font-serif font-bold text-base text-[#2B1E19]">Vignelli 8pt Rigor</span>
                </div>
                <div className="p-4 rounded-2xl border border-[#DBD3C4] bg-[#FAF5EC]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FE299E] font-bold block mb-1">
                    Production Code
                  </span>
                  <span className="font-serif font-bold text-base text-[#2B1E19]">Zero Agency Handoffs</span>
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
