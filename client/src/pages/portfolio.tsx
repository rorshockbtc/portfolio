import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
  GitBranch,
  GitCommit,
  Maximize2,
  Compass,
  Calendar,
  Copy,
  Check,
} from "lucide-react";
import { openContactModal } from "@/lib/contact-events";
import {
  BrandMark,
  ClientLogoBar,
  SprintCallout,
  TechStack,
} from "@/components/chb";
import { ExperienceSection } from "@/components/chb/experience-section";
import { TestimonialsSection } from "@/components/chb/testimonials-section";

export default function PortfolioPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rorshock@protonmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#EAE0D0] text-[#281B16] flex flex-col selection:bg-[#FE299E]/20">
      {/* ── HERO ── */}
      <section className="relative pt-8 sm:pt-12 md:pt-16 pb-14 md:pb-20" data-testid="section-hero">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8 space-y-6 sm:space-y-7 order-2 lg:order-1">
              <p className="flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.18em] font-bold text-[#FE299E]">
                <BrandMark size="md" />
                <span>Product Architect &amp; R&amp;D Lead</span>
              </p>

              <h1 className="text-[2.35rem] leading-[1.1] sm:text-6xl lg:text-[4.65rem] font-serif font-black text-[#281B16] tracking-tight space-y-1">
                <span className="block">Architect the system.</span>
                <span className="block italic font-normal text-[#FE299E]">Design the interface.</span>
                <span className="block">Ship the prototype.</span>
              </h1>

              <div className="space-y-4 max-w-[62ch]">
                <p className="text-lg sm:text-xl lg:text-2xl text-[#281B16] font-serif leading-[1.6]">
                  I&apos;m Kyle Cyree. For 15 years I&apos;ve led product architecture in regulated environments where mistakes cost millions: UnitedHealth Group&apos;s patient apps <strong className="font-semibold">(35M+ patients)</strong>, Walmart&apos;s enterprise search <strong className="font-semibold">(3M users)</strong>, and Custodia Bank as first design hire.
                </p>
                <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-[1.75]">
                  I operate as a surgical &ldquo;studio of one&rdquo;—modeling data from first principles, designing interfaces on a mathematical Swiss grid, and shipping working TypeScript, Next.js, and Rust software backed by public GitHub repositories.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://calendly.com/cubby-colonhyphenbracket/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-sm sm:text-base font-bold rounded-full px-6 sm:px-7 h-12 sm:h-13 shadow-md transition-all cursor-pointer whitespace-nowrap no-underline"
                >
                  <Calendar className="w-4 h-4 shrink-0" /> Book 30-min call
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#281B16]/30 bg-transparent hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-sans text-sm sm:text-base font-bold rounded-full px-6 sm:px-7 h-12 sm:h-13 cursor-pointer whitespace-nowrap"
                  onClick={() => openContactModal("1-week sprint ($7,500)")}
                >
                  1-week sprint · $7,500
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-[#281B16] hover:bg-[#D3C7B5]/40 font-sans text-sm sm:text-base font-bold rounded-full px-5 h-12 cursor-pointer whitespace-nowrap"
                  onClick={() => openContactModal("Full-time role (Product Architect / Staff)")}
                >
                  Full-time roles →
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm font-sans text-[#4A3A32] pt-1">
                <a href="/resumes/kyle-cyree-resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] whitespace-nowrap">
                  <Download className="w-4 h-4 text-[#FE299E]" /> Resume (PDF)
                </a>
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  <a href="mailto:rorshock@protonmail.com" className="font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]">
                    rorshock@protonmail.com
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider border border-[#D3C7B5] bg-[#F2EAE0] text-[#281B16] hover:border-[#FE299E] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-700" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#FE299E]" /> Copy
                      </>
                    )}
                  </button>
                </span>
                <a href="https://www.linkedin.com/in/kyle-cyree/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] whitespace-nowrap">
                  LinkedIn
                </a>
                <a href="https://github.com/rorshockbtc" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] whitespace-nowrap">
                  GitHub
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <figure className="max-w-[200px] sm:max-w-xs lg:max-w-none mx-auto lg:mx-0 space-y-3">
                <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-[#E4DACB] border border-[#D3C7B5] shadow-xl">
                  <img
                    src="/images/kyle-portrait.jpg"
                    alt="Kyle Cyree"
                    width={800}
                    height={800}
                    fetchPriority="high"
                    className="w-full h-full object-cover object-[50%_35%]"
                  />
                </div>
                <figcaption className="space-y-1.5 px-1 text-center lg:text-left">
                  <p className="inline-flex lg:flex items-center justify-center lg:justify-start gap-2 font-sans text-xs sm:text-sm font-bold text-[#281B16]">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" aria-hidden="true" />
                    Open to Product Architect roles &amp; sprints
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A3A32] font-sans leading-relaxed hidden sm:block">
                    North Carolina · US Remote · MBA, UNC Chapel Hill · MFA, Emerson
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* ── Recruiter 30-Second Fast-Track Strip ── */}
          <div className="mt-12 pt-6 border-t border-[#D3C7B5] grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm font-sans">
            <div>
              <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#FE299E] block mb-1">Target Roles</span>
              <span className="font-semibold text-[#281B16] block">Product Architect · R&amp;D Lead</span>
              <span className="text-xs text-[#4A3A32]">Principal Designer · Staff IC</span>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#FE299E] block mb-1">Regulated Pedigree</span>
              <span className="font-semibold text-[#281B16] block">15+ Years Enterprise &amp; Zero-to-One</span>
              <span className="text-xs text-[#4A3A32]">Healthcare (35M), Banking, Retail (3M)</span>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#FE299E] block mb-1">Production Stack</span>
              <a href="#code" className="font-semibold text-[#281B16] hover:text-[#FE299E] transition-colors block">
                TypeScript · Next.js · DuckDB ↓
              </a>
              <span className="text-xs text-[#4A3A32]">AI Harnesses · Python · Rust / Tauri</span>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#FE299E] block mb-1">Education &amp; Base</span>
              <span className="font-semibold text-[#281B16] block">MBA (UNC) · MFA (Emerson)</span>
              <span className="text-xs text-[#4A3A32]">US Remote (NC) · Immediate Sprint / Role</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 // Enterprise Client Logo Roster ── */}
      <ClientLogoBar />

      {/* ── 02 // SELECTED WORK: FOUR DEFINING PILLARS ── */}
      <section id="selected-work" className="py-16 md:py-24 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-16 md:space-y-20 scroll-mt-20">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b-2 border-[#281B16] pb-8">
          <div className="lg:col-span-8 space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] block">
              02 // SELECTED ARCHITECTURAL WORK
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.06]">
              Four pillars of systems design &amp; code.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-[1.7]">
              Zero-to-one banking architecture, national healthcare scale, workforce search for 3M people, and the sovereign knowledge protocol I built solo.
            </p>
          </div>
        </div>

        {/* ── PILLAR 01: CUSTODIA BANK ── */}
        <article className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl p-6 sm:p-10 shadow-[0_16px_40px_rgba(40,27,22,0.05)]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-8 border-b border-[#D3C7B5]">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full bg-[#281B16] text-[#FE299E] whitespace-nowrap">
                  01 / Regulated Fintech
                </span>
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#4A3A32]">
                  Chartered Wyoming Bank · First Design Hire · $71M+ Raised
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#281B16] tracking-tight leading-[1.1]">
                Custodia Bank: core banking platform &amp; brand
              </h3>
              <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-[1.72]">
                First and only designer at a chartered Federal Reserve Special Purpose Depository Institution. Shipped the ground-up rebrand in 4 days and the core banking application in 30 days ahead of Federal Reserve master account review—unifying Fedwire fiat rails, Money Market yield accrual, and multi-sig Bitcoin UTXO custody into one institutional interface.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/case-studies/custodia"
                className="inline-flex items-center justify-center gap-2 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-6 py-3.5 shadow-sm transition-all whitespace-nowrap no-underline"
              >
                Custodia Case Study →
              </Link>
            </div>
          </div>

          {/* Balanced 6/6 Swiss Plate Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#281B16]">
                  FIG 01.A // INSTITUTIONAL MONEY MARKET
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold text-[#FE299E]">
                  FEDWIRE &amp; TREASURY
                </span>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/custodia/mm-01.png",
                    caption: "Custodia Bank Institutional Money Market Dashboard",
                  })
                }
                className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#181210] border border-[#3D2C24] shadow-lg flex items-center justify-center cursor-zoom-in p-2"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/custodia/mm-01.png"
                  alt="Custodia Bank Institutional Money Market Dashboard"
                  className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-lg text-[#281B16]">
                  Institutional Money Market &amp; Treasury Yield Console
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-[1.65]">
                  Northern Institutional Trust onboarding, Fedwire settlement, and programmable treasury controls for corporate fiduciaries.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#281B16]">
                  FIG 01.B // MULTI-SIG BITCOIN CUSTODY
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold text-[#FE299E]">
                  UTXO GOVERNANCE
                </span>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/custodia/utxo-1.png",
                    caption: "Custodia Bank Bitcoin UTXO Manager Console",
                  })
                }
                className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#181210] border border-[#3D2C24] shadow-lg flex items-center justify-center cursor-zoom-in p-2"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/custodia/utxo-1.png"
                  alt="Custodia Bank Bitcoin UTXO Manager Console"
                  className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-lg text-[#281B16]">
                  Segregated Bitcoin Custody &amp; UTXO Audit Ledger
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-[1.65]">
                  Granular UTXO transaction provenance, hardware-quorum withdrawal ceremonies, and real-time chain-of-custody verification.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ── PILLAR 02 & 03: UNITEDHEALTH GROUP + WALMART (SIDE-BY-SIDE OR STACKED CLEANLY) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Pillar 02: UnitedHealth Group */}
          <article className="lg:col-span-6 bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_16px_40px_rgba(40,27,22,0.05)]">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3C7B5] pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full bg-[#281B16] text-[#FE299E] whitespace-nowrap">
                  02 / Healthcare Systems
                </span>
                <span className="font-mono text-xs font-bold text-[#4A3A32]">
                  35M+ Patients · 1.8★ → 4.7★
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.12]">
                UnitedHealth Group &amp; Optum: flagship patient mobile apps
              </h3>

              <p className="text-base text-[#4A3A32] font-sans leading-[1.72]">
                Principal designer for UHG&apos;s flagship native iOS and Android patient apps (35M+ patients). Led the strategic push for Apple Health adoption and personally produced 80%+ of Android and 50%+ of iOS screens, lifting app ratings from sub-2 stars to 4.7★.
              </p>
            </div>

            <div className="space-y-5">
              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/artwork/enterprise-health.png",
                    caption: "UnitedHealth Native Patient App Suite",
                  })
                }
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#231814] border border-[#3D2C24] shadow-lg p-3 sm:p-4 flex items-center justify-center cursor-zoom-in"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/artwork/enterprise-health.png"
                  alt="UnitedHealth Native Patient App Suite"
                  className="w-full h-full object-contain rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#D3C7B5]">
                <span className="font-mono text-xs text-[#4A3A32] font-semibold">
                  Fortune 10 · iOS &amp; Android Design System
                </span>
                <Link
                  href="/case-studies/unitedhealth"
                  className="inline-flex items-center justify-center bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-full px-5 py-2.5 shadow-xs transition-all whitespace-nowrap no-underline"
                >
                  UHG Case Study →
                </Link>
              </div>
            </div>
          </article>

          {/* Pillar 03: Walmart */}
          <article className="lg:col-span-6 bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_16px_40px_rgba(40,27,22,0.05)]">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3C7B5] pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full bg-[#281B16] text-[#FE299E] whitespace-nowrap">
                  03 / Enterprise Workforce
                </span>
                <span className="font-mono text-xs font-bold text-[#4A3A32]">
                  3M Associates · GraphQL Search
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.12]">
                Walmart: graph-powered enterprise search &amp; training
              </h3>

              <p className="text-base text-[#4A3A32] font-sans leading-[1.72]">
                Senior UX/UI Architect (via PredictiveUX). Architected the enterprise search paradigms and Content Distribution Platform for the world&apos;s largest private workforce (3M direct users), replacing keyword lookups with real-time GraphQL discovery.
              </p>
            </div>

            <div className="space-y-5">
              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/walmart/walmart-search-results.png",
                    caption: "Walmart Enterprise Graph Search Results Interface",
                  })
                }
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#231814] border border-[#3D2C24] shadow-lg p-3 sm:p-4 flex items-center justify-center cursor-zoom-in"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/walmart/walmart-search-results.png"
                  alt="Walmart Enterprise Graph Search Results Interface"
                  className="w-full h-full object-contain rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#D3C7B5]">
                <span className="font-mono text-xs text-[#4A3A32] font-semibold">
                  Fortune 1 · Global Retail Floor Terminals
                </span>
                <Link
                  href="/case-studies/walmart"
                  className="inline-flex items-center justify-center bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-full px-5 py-2.5 shadow-xs transition-all whitespace-nowrap no-underline"
                >
                  Walmart Case Study →
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* ── PILLAR 04: PIPES.PINK (SOLO-BUILT SOVEREIGN KNOWLEDGE ECOSYSTEM) ── */}
        <article className="bg-[#F2EAE0] border-2 border-[#281B16] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(40,27,22,0.08)]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-8 border-b border-[#D3C7B5]">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full bg-[#FE299E] text-white whitespace-nowrap">
                  04 / Flagship Sovereign Ecosystem
                </span>
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#4A3A32]">
                  Built Solo · Web Protocol · # Hash + ;-] SEMI · macOS IDE
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#281B16] tracking-tight leading-[1.1]">
                Pipes.Pink: Sovereign Knowledge Protocol, Hash &amp; SEMI (;-])
              </h3>
              <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-[1.72]">
                Designed, architected, and shipped solo from zero to production. Creators draft inside the integrated <strong className="text-[#281B16]"># Hash Sanctuary</strong> alongside <strong className="text-[#281B16]">SEMI (;-])</strong>, a Socratic editor-in-residence with persistent memory, then seal verified sources into deeded namespaces (<code className="font-mono text-sm bg-[#EAE0D0] border border-[#D3C7B5] px-1.5 py-0.5 rounded text-[#281B16]">pipe\bitcoin</code>) where AI agents pay 70% micro-royalties via MCP &amp; HTTP 402.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href="https://pipes.pink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-full px-5 py-3 shadow-sm transition-all whitespace-nowrap no-underline"
              >
                Claim Pipe ($9/yr) <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://pipes.pink/write"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-full px-5 py-3 transition-all whitespace-nowrap no-underline"
              >
                Try # Hash + ;-] Semi ↗
              </a>
              <Link
                href="/case-studies/pipes"
                className="inline-flex items-center justify-center gap-1 bg-[#EAE0D0] hover:bg-[#D3C7B5] text-[#281B16] border border-[#281B16]/25 font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-full px-5 py-3 transition-all whitespace-nowrap no-underline"
              >
                Pipes Case Study →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Plate 04.A */}
            <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#281B16]">
                  FIG 04.A // PIPES.PINK SOVEREIGN PROTOCOL
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold text-[#FE299E]">
                  MERKLE-DAG · 70% ROYALTIES
                </span>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/pipes/pipes-hero.png",
                    caption: "Pipes.Pink Web Protocol: A Sovereign Library for Human Knowledge",
                  })
                }
                className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#3D2C24] bg-[#231814] p-2 shadow-lg flex items-center justify-center cursor-zoom-in"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/pipes/pipes-hero.png"
                  alt="Pipes.Pink Web Protocol: A Sovereign Library for Human Knowledge"
                  className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-lg text-[#281B16]">
                  Web Protocol &amp; Marketplace · pipes.pink
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-[1.65]">
                  Content-addressed knowledge namespaces, 70% creator royalties via MCP/HTTP 402, and on-device WebGPU + DuckDB-WASM execution.
                </p>
              </div>
            </div>

            {/* Plate 04.B */}
            <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#281B16]">
                  FIG 04.B // INTEGRATED # HASH &amp; ;-] SEMI ATELIER
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold text-[#FE299E]">
                  SOCRATIC WRITING VAULT
                </span>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/pipes/pipes-hash-studio-semi.png",
                    caption: "Integrated Hash Studio and SEMI (;-]) Socratic Sparring Atelier inside Pipes.Pink",
                  })
                }
                className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#3D2C24] bg-[#231814] p-2 shadow-lg flex items-center justify-center cursor-zoom-in"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/pipes/pipes-hash-studio-semi.png"
                  alt="Integrated Hash Studio and SEMI (;-]) Socratic Sparring Atelier inside Pipes.Pink"
                  className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-lg text-[#281B16]">
                  Integrated Hash Sanctuary · SEMI (;-]) Socratic Sparring
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-[1.65]">
                  Distraction-free epistemic writing vault inside Pipes with live Socratic sparring from SEMI (;-]), 1-click Substack ingestion, and cryptographic publishing.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ── COMPACT ARCHIVAL CASE STUDIES & FOUNDATIONAL ESSAYS STRIP ── */}
        <div className="space-y-6 pt-6 border-t border-[#D3C7B5]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E] block">
                02.B // ADDITIONAL CASE STUDIES &amp; ESSAYS
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16] tracking-tight">
                More shipped systems &amp; architectural writing
              </h3>
            </div>
            <Link href="/studio" className="font-sans text-xs sm:text-sm font-bold text-[#281B16] hover:text-[#FE299E] underline decoration-[#FE299E] underline-offset-4 whitespace-nowrap">
              Explore all 12 R&amp;D views in CHB Studio →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link href="/case-studies/marigold" className="group p-5 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-4 no-underline">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  DuckDB-WASM · Civic Audit
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Marigold Insights
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-[1.65]">
                  2M-record voter-roll audit engine running in-browser via DuckDB-WASM &amp; Apache Arrow with zero cloud PII.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D3C7B5] flex items-center justify-between text-xs font-sans font-bold text-[#281B16] group-hover:text-[#FE299E]">
                <span>Read Case Study</span>
                <span>→</span>
              </div>
            </Link>

            <Link href="/case-studies/foodler" className="group p-5 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-4 no-underline">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Fraud Systems · Grubhub Exit
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Foodler ($500M+ Vol)
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-[1.65]">
                  Engineered proprietary fraud detection that cut chargebacks 83% ($6M to &lt;$1M), contributing to a 10x exit.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D3C7B5] flex items-center justify-between text-xs font-sans font-bold text-[#281B16] group-hover:text-[#FE299E]">
                <span>Read Case Study</span>
                <span>→</span>
              </div>
            </Link>

            <Link href="/case-studies/colors-type-grids" className="group p-5 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-4 no-underline">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Design System Monograph
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Albers, Vignelli &amp; Grids
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-[1.65]">
                  Why mathematical CSS grids and Josef Albers color relativity prevent generic AI interface homogeneity.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D3C7B5] flex items-center justify-between text-xs font-sans font-bold text-[#281B16] group-hover:text-[#FE299E]">
                <span>Read Interactive Study</span>
                <span>→</span>
              </div>
            </Link>

            <Link href="/essays/design-is-risk" className="group p-5 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-4 no-underline">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Security &amp; IP Essay
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Design is Risk
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-[1.65]">
                  How adversarial AI distillation and chain-of-thought scraping turned traditional portfolios into an IP risk.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D3C7B5] flex items-center justify-between text-xs font-sans font-bold text-[#281B16] group-hover:text-[#FE299E]">
                <span>Read Essay</span>
                <span>→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 03 // CAREER TIMELINE (ACCORDION) ── */}
      <ExperienceSection />

      {/* ── 04 // CODE & SYSTEMS ARCHITECTURE ── */}
      <section id="code" className="py-16 md:py-24 border-t border-[#D3C7B5] bg-[#E4DACB]/45 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b-2 border-[#281B16] pb-8">
            <div className="space-y-3 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> 04 // CODE &amp; OPEN-SOURCE SYSTEMS
              </p>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.08]">
                Systems architect. Prompt engineer. Builder.
              </h2>
              <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-[1.72]">
                Because most enterprise work is under NDA, I architect and release open-source systems in public—defining strict relational schemas, mathematical UI grids, and deterministic AI harnesses to ship working TypeScript, Python, and Rust software.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://github.com/rorshockbtc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 h-12 rounded-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-sm font-bold transition-colors shadow-sm whitespace-nowrap no-underline"
              >
                <GitCommit className="w-4 h-4 text-[#FE299E]" /> github.com/rorshockbtc ↗
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { repo: "marigold", license: "AGPL-3.0", desc: "Voter-roll search and audit running entirely in the browser on DuckDB-WASM. Zero personal data leaves the machine.", stack: "TypeScript · DuckDB-WASM" },
              { repo: "greater-than", license: "MIT", desc: "Sovereign-by-default support bots that run inference in the browser with WebGPU and Transformers.js at $0 cloud cost.", stack: "TypeScript · WebGPU" },
              { repo: "pipes-native", license: "Source available", desc: "The Pipes macOS (! BANG IDE) and iOS companion apps: local folder sync, DuckDB analytics, and sovereign studio.", stack: "Tauri · Rust · Swift" },
              { repo: "antigravity-skills", license: "Open Source", desc: "Curated collection of production Agent Skills, MCP workflows, and deterministic harnesses for coding agents.", stack: "MCP · Agent Harnesses" },
            ].map((r) => (
              <li key={r.repo} className="h-full">
                <a
                  href={`https://github.com/rorshockbtc/${r.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full flex flex-col justify-between space-y-4 p-6 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all shadow-xs no-underline"
                >
                  <div className="space-y-2.5">
                    <span className="flex items-baseline justify-between gap-2 border-b border-[#D3C7B5] pb-2.5">
                      <span className="font-serif text-xl font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors">{r.repo}</span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EAE0D0] text-[#281B16] shrink-0 whitespace-nowrap">{r.license}</span>
                    </span>
                    <span className="block text-sm text-[#4A3A32] font-sans leading-[1.68]">{r.desc}</span>
                  </div>
                  <span className="block text-xs font-mono font-bold text-[#281B16] group-hover:text-[#FE299E] pt-2.5 border-t border-[#D3C7B5] whitespace-nowrap">{r.stack} ↗</span>
                </a>
              </li>
            ))}
          </ul>

          {/* ── 4-Layer Architectural Capabilities Matrix ── */}
          <TechStack />
        </div>
      </section>

      {/* ── 05 // HOW I WORK & FIELD STUDIES (COMBINED, STREAMLINED EDITORIAL SECTION) ── */}
      <section id="about-kyle" className="py-16 md:py-24 border-t border-[#D3C7B5] bg-[#EAE0D0]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          {/* Part A: The Unit of One Loop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#281B16] text-[#F2EAE0] p-7 sm:p-9 shadow-xl border border-[#3D2C24] space-y-6">
                <div className="flex items-center justify-between border-b border-[#F2EAE0]/15 pb-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-[#FE299E] block">
                      Operating Architecture
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#F2EAE0] mt-0.5">
                      The &ldquo;Unit of One&rdquo; Loop
                    </h3>
                  </div>
                  <span className="font-sans font-bold text-2xl text-[#FE299E] select-none" aria-hidden="true">
                    :-]
                  </span>
                </div>

                <ol className="space-y-4 font-sans">
                  {[
                    {
                      step: "01",
                      title: "Executive & Regulatory Strategy",
                      desc: "UNC Kenan-Flagler MBA rigor applied to OCC/FDIC banking, HIPAA clinical workflows, and service blueprints.",
                    },
                    {
                      step: "02",
                      title: "First-Principles Data Modeling",
                      desc: "Relational PostgreSQL schemas, local-first DuckDB-WASM tables, and zero-PII security boundaries before pixels.",
                    },
                    {
                      step: "03",
                      title: "Swiss Grid & Interaction Craft",
                      desc: "Mathematical Vignelli grids, Albers color systems, and high-density institutional interfaces.",
                    },
                    {
                      step: "04",
                      title: "AI-Accelerated Shipping",
                      desc: "Prompt & harness engineering that turns specs into working Next.js, TypeScript, and Rust software without handoff loss.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3.5">
                      <span className="font-mono text-xs font-bold text-[#FE299E] bg-[#FE299E]/15 border border-[#FE299E]/30 rounded-lg px-2 py-0.5 shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div className="space-y-0.5">
                        <h4 className="font-serif font-bold text-base sm:text-lg text-[#F2EAE0] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#E4DACB] leading-[1.65]">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] block">
                05 // HOW I WORK
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.08]">
                Why teams hire me.
              </h2>
              <div className="space-y-4 text-lg sm:text-xl text-[#4A3A32] font-sans leading-[1.72] max-w-[60ch]">
                <p>
                  Most product teams lose momentum in the handoffs between strategy, design, and engineering. Designers mock up screens detached from the data model, engineers rebuild them under deadline pressure, and leadership wonders why shipping takes nine months.
                </p>
                <p>
                  I close that gap. I run the room with executives, model the data from first principles, design the interface on a mathematical grid, and use AI-accelerated engineering to ship working software—so the system that ships is the system we agreed on.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#D3C7B5]">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FE299E] font-bold block">
                    System Architecture
                  </span>
                  <span className="font-serif font-bold text-lg text-[#281B16] block mt-0.5">Zero-to-one, fast</span>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FE299E] font-bold block">
                    Design Systems
                  </span>
                  <span className="font-serif font-bold text-lg text-[#281B16] block mt-0.5">Systems, not screens</span>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FE299E] font-bold block">
                    AI-Native Execution
                  </span>
                  <span className="font-serif font-bold text-lg text-[#281B16] block mt-0.5">No lost handoffs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Streamlined 3-Column Field Studies Row */}
          <div id="in-the-field" className="pt-12 border-t border-[#D3C7B5] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E] flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#FE299E]" /> OUTSIDE WORK &amp; FIELD STUDIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16] mt-1">
                  Where the ideas come from
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4A3A32] font-sans max-w-md leading-[1.65]">
                Travelling with my wife, Victoria: indigenous markets in the Andes, murals in Medellín, and studying how trust works in the real world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/personal/kyle-victoria-coastal-ring.jpg",
                    caption: "Kyle & Victoria. Grounded in quiet discipline, mutual purpose, and deep focus.",
                  })
                }
                className="group cursor-zoom-in rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] p-4 flex flex-col justify-between space-y-3 shadow-xs"
              >
                <div className="relative rounded-xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/personal/kyle-victoria-coastal-ring.jpg"
                    alt="Kyle and Victoria Cyree"
                    className="w-full aspect-[4/3] object-cover object-[50%_35%] group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1 px-0.5">
                  <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#FE299E] block">
                    Partnership &amp; Focus
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#281B16]">
                    Kyle &amp; Victoria
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A3A32] font-sans leading-[1.65]">
                    Victoria is my partner in life and work—exploring architecture, craft, and resilient human systems across continents.
                  </p>
                </div>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/personal/kyle-victoria-andes-market.jpg",
                    caption: "High Andes indigenous market, Ecuador. Studying real human exchange and tactile craft.",
                  })
                }
                className="group cursor-zoom-in rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] p-4 flex flex-col justify-between space-y-3 shadow-xs"
              >
                <div className="relative rounded-xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/personal/kyle-victoria-andes-market.jpg"
                    alt="Field study in high Andes indigenous market in Ecuador"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1 px-0.5">
                  <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#FE299E] block">
                    High Andes, Ecuador
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#281B16]">
                    Human Dignity &amp; Tactile Trade
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A3A32] font-sans leading-[1.65]">
                    Watching how high-trust commerce works in a market with no apps, no algorithms, and no middlemen.
                  </p>
                </div>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/personal/kyle-victoria-colombia-mural.jpg",
                    caption: "Comuna 13, Medellín, Colombia. Monumental urban typography and chromatic contrast.",
                  })
                }
                className="group cursor-zoom-in rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] p-4 flex flex-col justify-between space-y-3 shadow-xs"
              >
                <div className="relative rounded-xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/personal/kyle-victoria-colombia-mural.jpg"
                    alt="Street mural and urban typography in Comuna 13, Medellín, Colombia"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1 px-0.5">
                  <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#FE299E] block">
                    Medellín, Colombia
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#281B16]">
                    Monumental Color &amp; Type
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A3A32] font-sans leading-[1.65]">
                    Comuna 13&apos;s murals are a masterclass in scale, chromatic contrast, and typography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 // Social Proof & LinkedIn Recommendations ── */}
      <TestimonialsSection />

      {/* ── 07 // Conversion Sprint Offer ($7,500 / 1 Week) ── */}
      <SprintCallout onContactClick={(subject) => openContactModal(subject || "1-week sprint ($7,500)")} />

      {/* Fullscreen Lightbox Dialog */}
      <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
        <DialogContent className="max-w-[94vw] max-h-[92vh] p-4 bg-[#110f0e] border-white/20 text-white overflow-hidden flex flex-col">
          <DialogHeader className="flex flex-row items-center justify-between pb-3 border-b border-white/10 px-2">
            <div>
              <DialogTitle className="text-lg font-serif font-bold text-white">
                {lightboxImage?.caption}
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-white/60 font-sans">
                Full-resolution product plate inspection
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-auto p-4 bg-[#0c0b0a] rounded-2xl flex items-center justify-center">
            {lightboxImage && (
              <img
                loading="lazy"
                decoding="async"
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
