import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  ArrowRight,
  Download,
  ExternalLink,
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

  return (
    <div className="min-h-screen bg-[#EAE0D0] text-[#281B16] flex flex-col selection:bg-[#FE299E]/20">
      {/* ── VIEWPORT 01: HERO + FAST-TRACK STRIP + TRACK RECORD ── */}
      <section className="relative pt-6 sm:pt-8 md:pt-10 pb-8 md:pb-10" data-testid="section-hero">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4 sm:space-y-5 order-2 lg:order-1">
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] font-bold text-[#FE299E]">
                <BrandMark size="md" />
                <span>Product Architect &amp; R&amp;D Lead · Principal Product Designer</span>
              </p>

              <h1 className="text-[2.2rem] leading-[1.08] sm:text-5xl lg:text-[4.15rem] font-serif font-black text-[#281B16] tracking-tight space-y-0.5">
                <span className="block">Architect the system.</span>
                <span className="block italic font-normal text-[#FE299E]">Design the interface.</span>
                <span className="block">Ship the prototype.</span>
              </h1>

              <div className="space-y-3 max-w-[64ch]">
                <p className="text-base sm:text-lg lg:text-xl text-[#281B16] font-serif leading-[1.58]">
                  I&apos;m Kyle Cyree. For 15+ years I&apos;ve led product architecture in regulated environments where mistakes cost millions: <strong className="font-semibold">Custodia Bank</strong>&apos;s institutional Money Market &amp; custody platform (first design hire), 2 years embedded at <strong className="font-semibold">Fidelity Investments</strong>, <strong className="font-semibold">UnitedHealth Group</strong> <strong className="font-semibold">(35M+ patients)</strong>, and <strong className="font-semibold">Walmart</strong> <strong className="font-semibold">(3M users)</strong>.
                </p>
                <p className="text-sm sm:text-base text-[#4A3A32] font-sans leading-[1.7]">
                  I bridge executive strategy (MBA, UNC Kenan-Flagler), first-principles data modeling, mathematical Swiss grids, and AI-accelerated engineering to ship working TypeScript, Next.js, DuckDB-WASM, and Rust software without handoff loss.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://calendly.com/cubby-colonhyphenbracket/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm font-bold rounded-full px-6 h-11 shadow-md transition-all cursor-pointer whitespace-nowrap no-underline"
                >
                  <Calendar className="w-4 h-4 shrink-0" /> Book 30-min call
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#281B16]/40 bg-[#F2EAE0] hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-sans text-xs sm:text-sm font-bold rounded-full px-6 h-11 cursor-pointer whitespace-nowrap"
                  onClick={() => openContactModal("Full-time role (Product Architect / Staff)")}
                >
                  Discuss Full-Time Role →
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-[#281B16] hover:bg-[#D3C7B5]/40 font-sans text-xs sm:text-sm font-bold rounded-full px-4 h-11 cursor-pointer whitespace-nowrap"
                  onClick={() => openContactModal("1-week sprint ($7,500)")}
                >
                  Or 1-week trial sprint · $7,500
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-sans text-[#4A3A32] pt-0.5">
                <a href="/resumes/kyle-cyree-resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] whitespace-nowrap">
                  <Download className="w-3.5 h-3.5 text-[#FE299E]" /> Resume (PDF)
                </a>
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  <a href="mailto:rorshock@protonmail.com" className="font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]">
                    rorshock@protonmail.com
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider border border-[#D3C7B5] bg-[#F2EAE0] text-[#281B16] hover:border-[#FE299E] transition-colors cursor-pointer whitespace-nowrap"
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

            <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
              <figure className="w-full max-w-[180px] sm:max-w-[240px] lg:max-w-[300px] space-y-2.5">
                <div className="relative aspect-[4/4.6] max-h-[340px] w-full rounded-3xl overflow-hidden bg-[#E4DACB] border border-[#D3C7B5] shadow-xl">
                  <img
                    src="/images/kyle-portrait.jpg"
                    alt="Kyle Cyree"
                    width={800}
                    height={800}
                    fetchPriority="high"
                    className="w-full h-full object-cover object-[50%_35%]"
                  />
                </div>
                <figcaption className="space-y-1 px-1 text-center lg:text-left">
                  <p className="inline-flex lg:flex items-center justify-center lg:justify-start gap-2 font-sans text-xs font-bold text-[#281B16]">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" aria-hidden="true" />
                    Available for Executive W2 or Turnkey B2B
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#4A3A32] font-sans leading-snug hidden sm:block">
                    North Carolina (EST/CST Remote) · MBA, UNC · MFA, Emerson
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* ── Recruiter & Founder 15-Second Fast-Track Strip ── */}
          <div className="mt-7 pt-4 border-t border-[#D3C7B5] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm font-sans">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#FE299E] block mb-0.5">Target Roles</span>
              <span className="font-semibold text-[#281B16] block">Product Architect · R&amp;D Lead</span>
              <span className="text-xs text-[#4A3A32]">Principal Designer · Staff IC</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#FE299E] block mb-0.5">Fintech, Wealth &amp; Health</span>
              <span className="font-semibold text-[#281B16] block">Custodia Bank · Fidelity · UHG</span>
              <span className="text-xs text-[#4A3A32]">Money Market, Custody, 35M+ Mobile</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#FE299E] block mb-0.5">Production Stack</span>
              <a href="#code" className="font-semibold text-[#281B16] hover:text-[#FE299E] transition-colors block">
                TypeScript · Next.js · DuckDB ↓
              </a>
              <span className="text-xs text-[#4A3A32]">AI Harnesses · Python · Rust / Tauri</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#FE299E] block mb-0.5">Education &amp; Base</span>
              <span className="font-semibold text-[#281B16] block">MBA (UNC) · MFA (Emerson)</span>
              <span className="text-xs text-[#4A3A32]">US Citizen · NC Remote (EST/CST)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 // Enterprise Client Logo Strip (Fits at bottom of Viewport 01) ── */}
      <ClientLogoBar />

      {/* ── 02 // SELECTED WORK: EACH PILLAR GROUP FITS WITHIN ONE VIEWPORT ── */}
      <section id="selected-work" className="py-12 md:py-16 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-12 md:space-y-14 scroll-mt-16">
        {/* Compact Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b-2 border-[#281B16] pb-5">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] block">
              02 // SELECTED ARCHITECTURAL WORK
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.06]">
              Four pillars of systems design &amp; code.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4A3A32] font-sans leading-[1.65] max-w-md">
            Zero-to-one banking &amp; treasury architecture, national healthcare scale (35M+), enterprise graph search (3M), and the sovereign knowledge protocol I built solo.
          </p>
        </div>

        {/* ── VIEWPORT 02.A: PILLAR 01 — CUSTODIA BANK (FITS IN 1 VIEWPORT) ── */}
        <article className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl p-5 sm:p-7 shadow-[0_12px_32px_rgba(40,27,22,0.05)] scroll-mt-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#D3C7B5]">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold px-2.5 py-0.5 rounded-full bg-[#281B16] text-[#FE299E] whitespace-nowrap">
                  01 / Regulated Fintech &amp; Treasury
                </span>
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#4A3A32]">
                  Chartered Wyoming SPDI Bank · First Design Hire · $71M+ Raised
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.12]">
                Custodia Bank: Institutional Money Market, Fedwire &amp; Bitcoin Custody
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#4A3A32] font-sans leading-[1.65]">
                First and only designer at a chartered Federal Reserve Special Purpose Depository Institution. Shipped the ground-up rebrand in 4 days and the core banking application in 30 days ahead of Federal Reserve master account review—unifying Fedwire fiat rails, Money Market yield accrual, and multi-sig Bitcoin UTXO custody.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/case-studies/custodia"
                className="inline-flex items-center justify-center gap-2 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-full px-5 py-3 shadow-sm transition-all whitespace-nowrap no-underline"
              >
                Custodia Case Study →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
            <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#281B16]">
                  FIG 01.A // INSTITUTIONAL MONEY MARKET
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold text-[#FE299E]">
                  FEDWIRE &amp; TREASURY YIELD
                </span>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/custodia/mm-01.png",
                    caption: "Custodia Bank Institutional Money Market Dashboard",
                  })
                }
                className="group relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#181210] border border-[#3D2C24] shadow-md flex items-center justify-center cursor-zoom-in p-1.5"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/custodia/mm-01.png"
                  alt="Custodia Bank Institutional Money Market Dashboard"
                  className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#281B16]">
                  Institutional Money Market &amp; Treasury Yield Console
                </h4>
                <p className="text-xs sm:text-sm text-[#4A3A32] font-sans leading-[1.6]">
                  Northern Institutional Trust onboarding, Fedwire settlement, and programmable treasury controls for corporate fiduciaries.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#281B16]">
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
                className="group relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#181210] border border-[#3D2C24] shadow-md flex items-center justify-center cursor-zoom-in p-1.5"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/custodia/utxo-1.png"
                  alt="Custodia Bank Bitcoin UTXO Manager Console"
                  className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#281B16]">
                  Segregated Bitcoin Custody &amp; UTXO Audit Ledger
                </h4>
                <p className="text-xs sm:text-sm text-[#4A3A32] font-sans leading-[1.6]">
                  Hardware-enforced multi-signature quorum approvals and real-time UTXO provenance for institutional digital assets.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ── VIEWPORT 02.B: PILLARS 02 & 03 — UNITEDHEALTH GROUP (35M+) & WALMART (3M) SIDE-BY-SIDE (FITS IN 1 VIEWPORT) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* PILLAR 02: UNITEDHEALTH GROUP */}
          <article className="lg:col-span-6 bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(40,27,22,0.05)] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3C7B5] pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold px-2.5 py-0.5 rounded-full bg-[#281B16] text-[#FE299E] whitespace-nowrap">
                  02 / National Healthcare
                </span>
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#4A3A32]">
                  35M+ Patients · $100M+ Impact
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.14]">
                UnitedHealth Group &amp; Optum: Flagship Mobile Suite
              </h3>

              <p className="text-xs sm:text-sm text-[#4A3A32] font-sans leading-[1.65]">
                Principal designer in an internal executive consulting team for UHG&apos;s flagship iOS and Android patient apps (35M+ patients, 400K+ employees). Produced 80%+ of Android and 50%+ of iOS screens and championed Apple Health integration ($100M+ revenue impact), lifting ratings from sub-2 stars to the high-4 tier.
              </p>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/uhg/uhg-hero.png",
                    caption: "UnitedHealth Group & Optum Mobile Patient Ecosystem (35M+ Patients)",
                  })
                }
                className="group relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#181210] border border-[#3D2C24] shadow-md flex items-center justify-center cursor-zoom-in p-1.5"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/uhg/uhg-hero.png"
                  alt="UnitedHealth Group Mobile App Architecture"
                  className="w-full h-full object-contain rounded-xl group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D3C7B5] flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#4A3A32] font-semibold">
                HIPAA · iOS &amp; Android · Service Design
              </span>
              <Link
                href="/case-studies/unitedhealth"
                className="inline-flex items-center justify-center gap-1.5 bg-[#281B16] hover:bg-[#FE299E] text-[#F2EAE0] hover:text-white font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-full px-4 py-2.5 transition-all whitespace-nowrap no-underline"
              >
                UnitedHealth Study →
              </Link>
            </div>
          </article>

          {/* PILLAR 03: WALMART GLOBAL TECH */}
          <article className="lg:col-span-6 bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(40,27,22,0.05)] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3C7B5] pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold px-2.5 py-0.5 rounded-full bg-[#281B16] text-[#FE299E] whitespace-nowrap">
                  03 / Enterprise Graph Search
                </span>
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#4A3A32]">
                  3M Employees · Fortune 1
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.14]">
                Walmart: GraphQL Workforce Search &amp; Discovery
              </h3>

              <p className="text-xs sm:text-sm text-[#4A3A32] font-sans leading-[1.65]">
                Led UX and information architecture (via PredictiveUX) for Walmart&apos;s internal enterprise search and Content Distribution Platform serving 3 million associates—replacing legacy keyword lookups with GraphQL and graph-database discovery for career pathways and compliance.
              </p>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/walmart/walmart-hero.png",
                    caption: "Walmart Enterprise Search & GraphQL Content Distribution Platform (3M Users)",
                  })
                }
                className="group relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#181210] border border-[#3D2C24] shadow-md flex items-center justify-center cursor-zoom-in p-1.5"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/walmart/walmart-hero.png"
                  alt="Walmart Enterprise Search Architecture"
                  className="w-full h-full object-cover object-top rounded-xl group-hover:scale-[1.015] transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D3C7B5] flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#4A3A32] font-semibold">
                GraphQL · Graph DB · 3M Associates
              </span>
              <Link
                href="/case-studies/walmart"
                className="inline-flex items-center justify-center gap-1.5 bg-[#281B16] hover:bg-[#FE299E] text-[#F2EAE0] hover:text-white font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-full px-4 py-2.5 transition-all whitespace-nowrap no-underline"
              >
                Walmart Study →
              </Link>
            </div>
          </article>
        </div>

        {/* ── VIEWPORT 02.C: PILLAR 04 — PIPES.PINK + 4-CARD ARCHIVE STRIP (FITS IN 1 VIEWPORT) ── */}
        <div className="space-y-6">
          <article className="bg-[#231814] text-[#F2EAE0] border border-[#3D2C24] rounded-3xl p-5 sm:p-7 shadow-[0_18px_45px_rgba(35,24,20,0.16)]">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#3D2C24]">
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold px-2.5 py-0.5 rounded-full bg-[#FE299E] text-white whitespace-nowrap">
                    04 / Solo R&amp;D Protocol
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#E4DACB]">
                    Next.js · Tauri 2.0 / Rust · Swift · DuckDB-WASM · WebGPU
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#F2EAE0] tracking-tight leading-[1.12]">
                  Pipes.Pink: Sovereign Knowledge Protocol, # Hash &amp; ;-] Semi
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#E4DACB] font-sans leading-[1.65]">
                  Designed, architected, and engineered solo from zero to production: a multi-platform knowledge protocol uniting deeded namespaces (<code className="text-[#FE299E] font-mono">pipe\topic</code>), the integrated <strong className="text-white"># Hash</strong> writing studio and <strong className="text-white">;-] Semi</strong> Socratic agent, 90+ language classrooms (<strong className="text-white">&gt; Greater</strong>), and a native macOS Rust IDE (<strong className="text-white">! BANG</strong>).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <Link
                  href="/case-studies/pipes"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-full px-5 py-2.5 shadow-sm transition-all whitespace-nowrap no-underline"
                >
                  Pipes Case Study →
                </Link>
                <a
                  href="https://pipes.pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#32221C] hover:bg-[#3D2C24] text-[#F2EAE0] border border-[#4A372E] hover:border-[#FE299E] font-mono text-xs uppercase tracking-[0.13em] font-bold rounded-full px-4 py-2.5 transition-all whitespace-nowrap no-underline"
                >
                  <span>| | | Launch pipes.pink</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FE299E] shrink-0" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
              <div className="lg:col-span-6 rounded-2xl bg-[#1B120F] border border-[#3D2C24] p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-[#3D2C24] pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#F2EAE0]">
                    FIG 04.A // PIPES.PINK PROTOCOL &amp; MARKETPLACE
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold text-[#FE299E]">
                    MERKLE-DAG VAULTS
                  </span>
                </div>

                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/pipes/pipes-hero.png",
                      caption: "Pipes.Pink Sovereign Knowledge Network & Deeded Namespace Marketplace",
                    })
                  }
                  className="group relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#120C0A] border border-[#3D2C24] shadow-md flex items-center justify-center cursor-zoom-in p-1.5"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/pipes/pipes-hero.png"
                    alt="Pipes.Pink Sovereign Knowledge Network"
                    className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                  />
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl bg-[#1B120F] border border-[#3D2C24] p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-[#3D2C24] pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#F2EAE0]">
                    FIG 04.B // INTEGRATED # HASH &amp; ;-] SEMI STUDIO
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold text-[#FE299E]">
                    SOCRATIC AI MEMORY
                  </span>
                </div>

                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/pipes/pipes-hash-studio-semi.png",
                      caption: "Integrated # Hash Epistemic Sanctuary & ;-] Semi Socratic Editor inside Pipes.Pink",
                    })
                  }
                  className="group relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#120C0A] border border-[#3D2C24] shadow-md flex items-center justify-center cursor-zoom-in p-1.5"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/pipes/pipes-hash-studio-semi.png"
                    alt="Integrated Hash Studio and Semi Socratic Agent"
                    className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                  />
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Compact 4-Column Archive Strip (Fits at bottom of Pillar 04 Viewport) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/case-studies/marigold" className="group p-4 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-2.5 no-underline">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  DuckDB-WASM · Zero-PII Audit
                </span>
                <h4 className="font-serif font-bold text-lg text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Marigold Insights (500k+)
                </h4>
                <p className="text-xs text-[#4A3A32] font-sans leading-[1.6]">
                  500k+-record voter-roll &amp; entity-resolution engine running in-browser via DuckDB-WASM &amp; Apache Arrow.
                </p>
              </div>
              <div className="pt-2 border-t border-[#D3C7B5] flex items-center justify-between text-xs font-sans font-bold text-[#281B16] group-hover:text-[#FE299E]">
                <span>Read Case Study</span>
                <span>→</span>
              </div>
            </Link>

            <Link href="/case-studies/foodler" className="group p-4 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-2.5 no-underline">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Fraud Systems · Grubhub Exit
                </span>
                <h4 className="font-serif font-bold text-lg text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Foodler ($500M+ Vol)
                </h4>
                <p className="text-xs text-[#4A3A32] font-sans leading-[1.6]">
                  Engineered proprietary fraud detection that cut chargebacks 83% ($6M to &lt;$1M), driving a 10x exit.
                </p>
              </div>
              <div className="pt-2 border-t border-[#D3C7B5] flex items-center justify-between text-xs font-sans font-bold text-[#281B16] group-hover:text-[#FE299E]">
                <span>Read Case Study</span>
                <span>→</span>
              </div>
            </Link>

            <Link href="/case-studies/colors-type-grids" className="group p-4 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-2.5 no-underline">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Design System Monograph
                </span>
                <h4 className="font-serif font-bold text-lg text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Albers, Vignelli &amp; Grids
                </h4>
                <p className="text-xs text-[#4A3A32] font-sans leading-[1.6]">
                  Why mathematical CSS grids and Josef Albers color relativity prevent generic AI interface homogeneity.
                </p>
              </div>
              <div className="pt-2 border-t border-[#D3C7B5] flex items-center justify-between text-xs font-sans font-bold text-[#281B16] group-hover:text-[#FE299E]">
                <span>Read Interactive Study</span>
                <span>→</span>
              </div>
            </Link>

            <Link href="/essays/design-is-risk" className="group p-4 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all flex flex-col justify-between space-y-2.5 no-underline">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Security &amp; IP Essay
                </span>
                <h4 className="font-serif font-bold text-lg text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Design is Risk
                </h4>
                <p className="text-xs text-[#4A3A32] font-sans leading-[1.6]">
                  How adversarial AI distillation and chain-of-thought scraping turned traditional portfolios into an IP risk.
                </p>
              </div>
              <div className="pt-2 border-t border-[#D3C7B5] flex items-center justify-between text-xs font-sans font-bold text-[#281B16] group-hover:text-[#FE299E]">
                <span>Read Essay</span>
                <span>→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIEWPORT 03: CAREER TIMELINE & EDUCATION (FITS IN 1 VIEWPORT) ── */}
      <ExperienceSection />

      {/* ── VIEWPORT 04: CODE & PRODUCTION STACK (FITS IN 1 VIEWPORT) ── */}
      <section id="code" className="py-12 md:py-16 border-t border-[#D3C7B5] bg-[#E4DACB]/45 scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b-2 border-[#281B16] pb-5">
            <div className="space-y-1.5 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5" /> 04 // AUTHORED CODE &amp; PRODUCTION STACK
              </p>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.08]">
                Systems architect. Prompt engineer. Builder.
              </h2>
              <p className="text-sm sm:text-base text-[#4A3A32] font-sans leading-[1.68]">
                Because most enterprise work is under NDA, I architect and release my own systems in public—defining relational schemas, mathematical UI grids, and deterministic AI harnesses in TypeScript, Python, and Rust.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://github.com/rorshockbtc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 h-10 rounded-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-xs sm:text-sm font-bold transition-colors shadow-sm whitespace-nowrap no-underline"
              >
                <GitCommit className="w-4 h-4 text-[#FE299E]" /> github.com/rorshockbtc ↗
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { repo: "marigold", license: "AGPL-3.0 · Original", desc: "In-browser Fellegi-Sunter record linkage and civic-data auditing across 500k+ records via DuckDB-WASM and Apache Arrow with zero server PII.", stack: "TypeScript · DuckDB-WASM · Arrow" },
              { repo: "greater-than", license: "MIT · Original", desc: "Sovereign-by-default support bots and classroom tutors running local inference in the browser with WebGPU and Transformers.js at $0 cloud cost.", stack: "TypeScript · WebGPU · Local LLM" },
              { repo: "pipes-native", license: "Source Available · Original", desc: "The Pipes macOS (! BANG IDE) and iOS companion apps: local folder sync, SQLite/DuckDB vector indexing, and sovereign studio.", stack: "Tauri 2.0 · Rust · Swift" },
            ].map((r) => (
              <li key={r.repo} className="h-full">
                <a
                  href={`https://github.com/rorshockbtc/${r.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full flex flex-col justify-between space-y-3 p-5 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all shadow-xs no-underline"
                >
                  <div className="space-y-2">
                    <span className="flex items-baseline justify-between gap-2 border-b border-[#D3C7B5] pb-2">
                      <span className="font-serif text-lg sm:text-xl font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors">{r.repo}</span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EAE0D0] text-[#281B16] shrink-0 whitespace-nowrap">{r.license}</span>
                    </span>
                    <span className="block text-xs sm:text-sm text-[#4A3A32] font-sans leading-[1.65]">{r.desc}</span>
                  </div>
                  <span className="block text-xs font-mono font-bold text-[#281B16] group-hover:text-[#FE299E] pt-2 border-t border-[#D3C7B5] whitespace-nowrap">{r.stack} ↗</span>
                </a>
              </li>
            ))}
          </ul>

          {/* ── 4-Layer Architectural Capabilities Matrix (Compact 4-Column Row) ── */}
          <TechStack />
        </div>
      </section>

      {/* ── VIEWPORT 05: HOW I WORK & FIELD STUDIES (FITS IN 1 VIEWPORT) ── */}
      <section id="about-kyle" className="py-12 md:py-16 border-t border-[#D3C7B5] bg-[#EAE0D0] scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
          {/* Part A: The Unit of One Loop + Why Teams Hire Me */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#281B16] text-[#F2EAE0] p-6 sm:p-7 shadow-xl border border-[#3D2C24] space-y-4">
                <div className="flex items-center justify-between border-b border-[#F2EAE0]/15 pb-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-[#FE299E] block">
                      Operating Architecture
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#F2EAE0] mt-0.5">
                      The &ldquo;Unit of One&rdquo; Loop
                    </h3>
                  </div>
                  <span className="font-sans font-bold text-xl text-[#FE299E] select-none" aria-hidden="true">
                    :-]
                  </span>
                </div>

                <ol className="space-y-3 font-sans">
                  {[
                    {
                      step: "01",
                      title: "Executive & Regulatory Strategy",
                      desc: "UNC Kenan-Flagler MBA rigor applied to OCC/FDIC banking, wealth management, and HIPAA workflows.",
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
                      desc: "Prompt & harness engineering that turns specs into working Next.js, TypeScript, and Rust software.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="font-mono text-[11px] font-bold text-[#FE299E] bg-[#FE299E]/15 border border-[#FE299E]/30 rounded-lg px-2 py-0.5 shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div className="space-y-0.5">
                        <h4 className="font-serif font-bold text-sm sm:text-base text-[#F2EAE0] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#E4DACB] leading-[1.6]">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] block">
                05 // HOW I WORK
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.08]">
                Why founders &amp; executive teams hire me.
              </h2>
              <div className="space-y-3 text-sm sm:text-base lg:text-lg text-[#4A3A32] font-sans leading-[1.7] max-w-[62ch]">
                <p>
                  Most product teams lose months in the translation loop between strategy, design, and engineering. Designers mock up screens detached from the data model, engineers rebuild them under deadline pressure, and leadership wonders why shipping takes two quarters.
                </p>
                <p>
                  I close that gap. I align with executives on business outcomes, model the relational or graph schema from first principles, design the interface on a mathematical grid, and use AI-accelerated engineering to ship working software—so the system that ships is the system we agreed on.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-[#D3C7B5]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FE299E] font-bold block">
                    System Architecture
                  </span>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#281B16] block mt-0.5">Zero-to-one, fast</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FE299E] font-bold block">
                    Design Systems
                  </span>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#281B16] block mt-0.5">Systems, not screens</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FE299E] font-bold block">
                    AI-Native Execution
                  </span>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#281B16] block mt-0.5">No lost handoffs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Compact 3-Column Field Studies Strip (Fits in same viewport) */}
          <div id="in-the-field" className="pt-6 border-t border-[#D3C7B5] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#FE299E]" /> FIELD STUDIES
                </span>
                <span className="text-[#4A3A32]">·</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#281B16]">
                  Outside work: studying trust, color &amp; human exchange in the field
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/personal/kyle-victoria-coastal-ring.jpg",
                    caption: "Kyle & Victoria. Grounded in quiet discipline, mutual purpose, and deep focus.",
                  })
                }
                className="group cursor-zoom-in rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] p-3.5 flex items-center gap-4 shadow-xs"
              >
                <div className="relative w-24 sm:w-28 aspect-[4/3] shrink-0 rounded-xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/personal/kyle-victoria-coastal-ring.jpg"
                    alt="Kyle and Victoria Cyree"
                    className="w-full h-full object-cover object-[50%_35%] group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#FE299E] block">
                    Partnership &amp; Focus
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#281B16] truncate">
                    Kyle &amp; Victoria
                  </h4>
                  <p className="text-xs text-[#4A3A32] font-sans leading-[1.5] line-clamp-2">
                    Exploring architecture, craft, and resilient human systems across continents.
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
                className="group cursor-zoom-in rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] p-3.5 flex items-center gap-4 shadow-xs"
              >
                <div className="relative w-24 sm:w-28 aspect-[4/3] shrink-0 rounded-xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/personal/kyle-victoria-andes-market.jpg"
                    alt="Field study in high Andes indigenous market in Ecuador"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#FE299E] block">
                    High Andes, Ecuador
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#281B16] truncate">
                    Tactile Trade &amp; Trust
                  </h4>
                  <p className="text-xs text-[#4A3A32] font-sans leading-[1.5] line-clamp-2">
                    How high-trust commerce works with no apps, no algorithms, and no middlemen.
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
                className="group cursor-zoom-in rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] p-3.5 flex items-center gap-4 shadow-xs"
              >
                <div className="relative w-24 sm:w-28 aspect-[4/3] shrink-0 rounded-xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/personal/kyle-victoria-colombia-mural.jpg"
                    alt="Street mural and urban typography in Comuna 13, Medellín, Colombia"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#FE299E] block">
                    Medellín, Colombia
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#281B16] truncate">
                    Monumental Color &amp; Type
                  </h4>
                  <p className="text-xs text-[#4A3A32] font-sans leading-[1.5] line-clamp-2">
                    Comuna 13&apos;s murals are a masterclass in scale, chromatic contrast, and type.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIEWPORT 06: EXECUTIVE ENDORSEMENTS (FITS IN 1 VIEWPORT) ── */}
      <TestimonialsSection />

      {/* ── VIEWPORT 07: WORK TOGETHER — FULL-TIME OR SURGICAL SPRINTS (FITS IN 1 VIEWPORT) ── */}
      <SprintCallout onContactClick={(subject) => openContactModal(subject || "Full-time role (Product Architect / Staff)")} />

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
