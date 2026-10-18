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
      <section className="relative pt-8 sm:pt-14 md:pt-24 pb-16 md:pb-32" data-testid="section-hero">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-8 space-y-6 sm:space-y-9 order-2 lg:order-1">
              <p className="flex items-center gap-3 font-sans text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.22em] font-bold text-[#FE299E]">
                <BrandMark size="md" />
                <span>Product Architect<span className="hidden sm:inline"> &amp; R&amp;D Lead</span></span>
              </p>

              <h1 className="text-[2.4rem] leading-[1.04] sm:text-7xl lg:text-[5.25rem] 2xl:text-[5.75rem] font-serif font-black text-[#281B16] tracking-tight">
                <span className="block">Architect the system.</span>
                <span className="block italic font-normal text-[#FE299E]">Design the interface.</span>
                <span className="block">Ship the prototype.</span>
              </h1>

              <p className="text-lg sm:text-2xl lg:text-[1.55rem] text-[#5C4840] font-sans leading-[1.55] max-w-3xl">
                I'm Kyle Cyree. I operate as a surgical "studio of one." For 15 years I've led systems in regulated environments where mistakes cost millions:
                UnitedHealth Group's patient apps <strong className="text-[#281B16] font-semibold">(35M+ patients)</strong>,
                Walmart's internal search <strong className="text-[#281B16] font-semibold">(3M users)</strong>, and a chartered bank I joined as the
                first designer. I model data from first principles, design interfaces with Swiss discipline, and ship working TypeScript and Next.js prototypes backed by public GitHub repositories.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                <a
                  href="https://calendly.com/cubby-colonhyphenbracket/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-base font-bold rounded-full px-6 sm:px-8 h-13 sm:h-14 shadow-lg transition-all cursor-pointer"
                >
                  <Calendar className="w-5 h-5 shrink-0" /> Book 30-min call
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#281B16]/25 bg-transparent hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-sans text-base font-bold rounded-full px-6 sm:px-8 h-13 sm:h-14 cursor-pointer"
                  onClick={() => openContactModal("1-week sprint ($7,500)")}
                >
                  1-week sprint · $7,500
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-[#281B16] hover:bg-[#D3C7B5]/40 font-sans text-sm sm:text-base font-bold rounded-full px-5 h-12 sm:h-14 cursor-pointer"
                  onClick={() => openContactModal("Full-time role (Product Architect / Staff)")}
                >
                  Inquire for full-time &rarr;
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 text-sm sm:text-base font-sans text-[#5C4840]">
                <a href="/resumes/kyle-cyree-resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]">
                  <Download className="w-4 h-4" /> Resume (PDF)
                </a>
                <span className="inline-flex items-center gap-2">
                  <a href="mailto:rorshock@protonmail.com" className="font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]">
                    rorshock@protonmail.com
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider border border-[#D3C7B5] bg-[#F2EAE0] text-[#5C4840] hover:border-[#FE299E] hover:text-[#281B16] transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#FE299E]" /> Copy
                      </>
                    )}
                  </button>
                </span>
                <a href="https://www.linkedin.com/in/kyle-cyree/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]">
                  LinkedIn
                </a>
                <a href="https://github.com/rorshockbtc" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]">
                  GitHub
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <figure className="max-w-[210px] sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 space-y-3 sm:space-y-5">
                <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-[#E4DACB] shadow-2xl">
                  <img
                    src="/images/kyle-portrait.jpg"
                    alt="Kyle Cyree"
                    width={800}
                    height={800}
                    fetchPriority="high"
                    className="w-full h-full object-cover object-[50%_35%]"
                  />
                </div>
                <figcaption className="space-y-2 px-1 text-center lg:text-left">
                  <p className="inline-flex lg:flex items-center justify-center lg:justify-start gap-2 font-sans text-xs sm:text-sm font-bold text-[#281B16]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" aria-hidden="true" />
                    Open to Product Architect roles &amp; sprints
                  </p>
                  <p className="text-base text-[#5C4840] font-sans leading-relaxed hidden sm:block">
                    North Carolina · US remote<br />
                    MBA, UNC Chapel Hill · MFA, Emerson College
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* ── Recruiter 30-Second Fast-Track Strip ── */}
          <div className="mt-16 pt-8 border-t border-[#D3C7B5] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm font-sans">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#FE299E] block mb-1">Target Roles</span>
              <span className="font-semibold text-[#281B16] block">Product Architect</span>
              <span className="text-xs text-[#5C4840]">R&amp;D Lead · Principal Designer</span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#FE299E] block mb-1">Pedigree</span>
              <span className="font-semibold text-[#281B16] block">15+ Years Regulated</span>
              <span className="text-xs text-[#5C4840]">Healthcare, Fintech, Retail Search</span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#FE299E] block mb-1">Production Stack</span>
              <a href="#code-stack" className="group font-semibold text-[#281B16] hover:text-[#FE299E] transition-colors block">
                Next.js · TypeScript &darr;
              </a>
              <span className="text-xs text-[#5C4840]">AI Prototyping · Python · Rust</span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#FE299E] block mb-1">Location &amp; Degrees</span>
              <span className="font-semibold text-[#281B16] block">US Remote (NC Base)</span>
              <span className="text-xs text-[#5C4840]">MBA (Kenan-Flagler) · MFA (Emerson)</span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#FE299E] block mb-1">Availability</span>
              <span className="font-semibold text-[#281B16] block flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" /> Immediate
              </span>
              <span className="text-xs text-[#5C4840]">Sprints &amp; Staff/Principal Roles</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enterprise Client Logo Roster ── */}
      <ClientLogoBar />

      <ExperienceSection />

      {/* ── SELECTED WORK: FOUR DEFINING PILLARS ── */}
      <section id="selected-work" className="pt-14 md:pt-24 pb-28 md:pb-40 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-28 md:space-y-36">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b-2 border-[#281B16] pb-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-bold text-[#FE299E] block">
              02 // SELECTED ARCHITECTURAL WORK
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.04]">
              Four pillars of systems design &amp; code
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-relaxed">
              From zero-to-one banking architecture to national healthcare scale, workforce search for 3M people, and the sovereign knowledge protocol I built and ship solo.
            </p>
          </div>
        </div>

        {/* ── PILLAR 01: CUSTODIA BANK (REGULATED FINTECH & DIGITAL ASSETS) ── */}
        <article className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(40,27,22,0.06)]">
          {/* Pillar 01 Header Grid — Guaranteed bottom margin & border separation before plates */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-8 mb-10 border-b border-[#D3C7B5]">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold px-3 py-1 rounded-full bg-[#281B16] text-[#FE299E]">
                  01 / Regulated Fintech
                </span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-mono uppercase font-bold tracking-wider bg-[#EAE0D0] text-[#281B16] px-3 py-1">
                  Chartered Wyoming Bank &bull; First Design Hire
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#281B16] tracking-tight leading-[1.06]">
                Custodia Bank: the core banking platform and the brand
              </h3>
              <p className="text-lg sm:text-xl text-[#4A3A32] font-sans leading-relaxed max-w-[65ch]">
                First and only designer at a chartered Federal Reserve Special Purpose Depository Institution. Shipped the ground-up rebrand and web platform in 4 days, followed by the entire core banking application in 30 days ahead of strict Federal Reserve master account evaluation. Unified Fedwire fiat rails, institutional Money Market yield accrual, and multi-sig Bitcoin UTXO management into one interface. Hand-drew the brand marks and facilitated 100+ prototyping sprints with engineering leadership.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between lg:items-end gap-5 pt-2 lg:pt-0">
              <div className="w-full lg:max-w-[290px] rounded-2xl bg-[#EAE0D0] border border-[#D3C7B5] p-4 space-y-2 text-xs font-mono text-[#4A3A32]">
                <div className="flex items-center justify-between border-b border-[#D3C7B5] pb-1.5">
                  <span className="uppercase tracking-wider font-bold text-[#281B16]">Role</span>
                  <span>Lead Product Designer</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#D3C7B5] pb-1.5">
                  <span className="uppercase tracking-wider font-bold text-[#281B16]">Velocity</span>
                  <span>4-Day Brand · 30-Day Bank OS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wider font-bold text-[#281B16]">Pedigree</span>
                  <span>$71M+ Raised · 2 US Patents</span>
                </div>
              </div>

              <Link
                href="/case-studies/custodia"
                className="inline-flex items-center justify-center bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-7 py-4 shadow-md transition-all w-full sm:w-auto lg:w-full lg:max-w-[290px] text-center no-underline"
              >
                Open Custodia Case Study &rarr;
              </Link>
            </div>
          </div>

          {/* Pillar 01 Balanced 6/6 Swiss Plate Grid — Identical Aspect Ratios & Dark Espresso Matting */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Plate 01.A */}
              <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] font-bold text-[#281B16]">
                    FIG 01.A // INSTITUTIONAL MONEY MARKET
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#FE299E]">
                    FEDWIRE &amp; TREASURY RAILS
                  </span>
                </div>

                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/custodia/mm-01.png",
                      caption: "Custodia Bank Institutional Money Market Dashboard",
                    })
                  }
                  className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#181210] border border-[#3D2C24] shadow-xl flex items-center justify-center cursor-zoom-in p-2 sm:p-3"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/custodia/mm-01.png"
                    alt="Custodia Bank Institutional Money Market Dashboard"
                    className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect Plate
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <h4 className="font-serif font-bold text-lg text-[#281B16]">
                    Institutional Money Market &amp; Treasury Yield Console
                  </h4>
                  <p className="text-sm text-[#4A3A32] font-sans leading-relaxed">
                    Unified Northern Institutional Trust portfolio onboarding, Fedwire settlement, and programmable treasury controls built for corporate fiduciaries.
                  </p>
                </div>
              </div>

              {/* Plate 01.B */}
              <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] font-bold text-[#281B16]">
                    FIG 01.B // MULTI-SIG BITCOIN CUSTODY
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#FE299E]">
                    UTXO &amp; QUORUM GOVERNANCE
                  </span>
                </div>

                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/custodia/utxo-1.png",
                      caption: "Custodia Bank Bitcoin UTXO Manager Console",
                    })
                  }
                  className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#181210] border border-[#3D2C24] shadow-xl flex items-center justify-center cursor-zoom-in p-2 sm:p-3"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/custodia/utxo-1.png"
                    alt="Custodia Bank Bitcoin UTXO Manager Console"
                    className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect Plate
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <h4 className="font-serif font-bold text-lg text-[#281B16]">
                    Segregated Bitcoin Custody &amp; UTXO Audit Ledger
                  </h4>
                  <p className="text-sm text-[#4A3A32] font-sans leading-relaxed">
                    Granular UTXO-level transaction provenance, hardware-quorum withdrawal ceremonies, and real-time chain-of-custody verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base text-[#4A3A32] font-sans pt-6 border-t border-[#D3C7B5]">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="font-bold text-[#281B16]">4-Day Rebrand Sprint</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">30-Day Fed Bank Launch</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">100+ Prototyping Sprints</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">Hand-Drawn Brand Mark</span>
              </div>
              <Link href="/case-studies/custodia" className="inline-flex items-center gap-1 font-sans text-[#FE299E] font-bold hover:underline">
                Read full Custodia case study &rarr;
              </Link>
            </div>
          </div>
        </article>

        {/* ── PILLAR 02: UNITEDHEALTH GROUP & OPTUM (HEALTHCARE AT SCALE) ── */}
        <article className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(40,27,22,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-8 mb-10 border-b border-[#D3C7B5]">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold px-3 py-1 rounded-full bg-[#281B16] text-[#FE299E]">
                  02 / Healthcare Systems
                </span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-mono uppercase font-bold tracking-wider bg-[#EAE0D0] text-[#281B16] px-3 py-1">
                  Fortune 10 &bull; 35M+ Patients &bull; 400K+ Employees
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#281B16] tracking-tight leading-[1.06]">
                UnitedHealth Group / Optum: flagship patient mobile apps
              </h3>
              <p className="text-lg sm:text-xl text-[#4A3A32] font-sans leading-relaxed max-w-[65ch]">
                Principal designer within an internal executive consulting team for UHG&apos;s flagship native iOS and Android patient applications (35M+ patients, 400K+ employees). Led the strategic push for UHG&apos;s adoption of Apple Health guidelines and integrations, driving estimated hundreds of millions in personal revenue impact. Personally produced 80%+ of Android screens and 50%+ of iOS screens, unifying the cross-org design system to rescue the app store rating from sub-2 stars to high-4 tier.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between lg:items-end gap-5 pt-2 lg:pt-0">
              <div className="w-full lg:max-w-[290px] rounded-2xl bg-[#EAE0D0] border border-[#D3C7B5] p-4 space-y-2 text-xs font-mono text-[#4A3A32]">
                <div className="flex items-center justify-between border-b border-[#D3C7B5] pb-1.5">
                  <span className="uppercase tracking-wider font-bold text-[#281B16]">Scale</span>
                  <span>35M+ Active Patients</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#D3C7B5] pb-1.5">
                  <span className="uppercase tracking-wider font-bold text-[#281B16]">Ownership</span>
                  <span>80% Android · 50% iOS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wider font-bold text-[#281B16]">Outcome</span>
                  <span>1.8★ &rarr; 4.7★ App Rating</span>
                </div>
              </div>

              <Link
                href="/case-studies/unitedhealth"
                className="inline-flex items-center justify-center bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-7 py-4 shadow-md transition-all w-full sm:w-auto lg:w-full lg:max-w-[290px] text-center no-underline"
              >
                Open UnitedHealth Case Study &rarr;
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3C7B5] pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] font-bold text-[#281B16]">
                  FIG 02.A // OPTUM &amp; UNITEDHEALTH NATIVE PATIENT SUITE (IOS &amp; ANDROID)
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#FE299E]">
                  HIPAA CLINICAL &amp; APPLE HEALTH INTEGRATION
                </span>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/artwork/enterprise-health.png",
                    caption: "UnitedHealth Native Patient App Suite",
                  })
                }
                className="group relative rounded-xl overflow-hidden bg-[#231814] border border-[#3D2C24] shadow-xl p-4 sm:p-8 flex items-center justify-center cursor-zoom-in"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/artwork/enterprise-health.png"
                  alt="UnitedHealth Native Patient App Suite"
                  className="w-full max-h-[500px] object-contain rounded-lg group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect Full Plate
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base text-[#4A3A32] font-sans pt-6 border-t border-[#D3C7B5]">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="font-bold text-[#281B16]">35M+ Patients</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">Apple Health Advocacy</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">80% Android / 50% iOS Ownership</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">Optum &amp; UHG · 2020–2021</span>
              </div>
              <Link href="/case-studies/unitedhealth" className="inline-flex items-center gap-1 font-sans text-[#FE299E] font-bold hover:underline">
                Read full UnitedHealth case study &rarr;
              </Link>
            </div>
          </div>
        </article>

        {/* ── PILLAR 03: WALMART (ENTERPRISE WORKFORCE SEARCH AT 3M SCALE) ── */}
        <article className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(40,27,22,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-8 mb-10 border-b border-[#D3C7B5]">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold px-3 py-1 rounded-full bg-[#281B16] text-[#FE299E]">
                  03 / Enterprise Workforce
                </span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-mono uppercase font-bold tracking-wider bg-[#EAE0D0] text-[#281B16] px-3 py-1">
                  Fortune 1 &bull; 3M Direct Users &bull; Global Search
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#281B16] tracking-tight leading-[1.06]">
                Walmart: graph-powered enterprise search &amp; training platform
              </h3>
              <p className="text-lg sm:text-xl text-[#4A3A32] font-sans leading-relaxed max-w-[65ch]">
                Senior UX/UI Architect at PredictiveUX. Architected the enterprise search paradigms and Content Distribution Platform (CDP) for the world&apos;s largest private workforce (3 million direct users). Replaced fractured legacy keyword lookups with GraphQL and graph database discovery, mapping career pathways and compliance certifications in real time across global retail floor terminals.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between lg:items-end gap-5 pt-2 lg:pt-0">
              <div className="w-full lg:max-w-[290px] rounded-2xl bg-[#EAE0D0] border border-[#D3C7B5] p-4 space-y-2 text-xs font-mono text-[#4A3A32]">
                <div className="flex items-center justify-between border-b border-[#D3C7B5] pb-1.5">
                  <span className="uppercase tracking-wider font-bold text-[#281B16]">Workforce</span>
                  <span>3,000,000+ Associates</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#D3C7B5] pb-1.5">
                  <span className="uppercase tracking-wider font-bold text-[#281B16]">Architecture</span>
                  <span>GraphQL · Graph DB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wider font-bold text-[#281B16]">Engagement</span>
                  <span>PredictiveUX · 2021–2022</span>
                </div>
              </div>

              <Link
                href="/case-studies/walmart"
                className="inline-flex items-center justify-center bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-7 py-4 shadow-md transition-all w-full sm:w-auto lg:w-full lg:max-w-[290px] text-center no-underline"
              >
                Open Walmart Case Study &rarr;
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3C7B5] pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] font-bold text-[#281B16]">
                  FIG 03.A // WALMART GLOBAL ENTERPRISE GRAPH SEARCH &amp; CDP
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#FE299E]">
                  3M ASSOCIATES · REAL-TIME GRAPH DISCOVERY
                </span>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "/images/walmart/walmart-search-results.png",
                    caption: "Walmart Enterprise Graph Search Results Interface",
                  })
                }
                className="group relative rounded-xl overflow-hidden bg-[#231814] border border-[#3D2C24] shadow-xl p-4 sm:p-8 flex items-center justify-center cursor-zoom-in"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/walmart/walmart-search-results.png"
                  alt="Walmart Enterprise Graph Search Results Interface"
                  className="w-full max-h-[500px] object-contain rounded-lg group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect Full Plate
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base text-[#4A3A32] font-sans pt-6 border-t border-[#D3C7B5]">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="font-bold text-[#281B16]">3M Direct Users</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">GraphQL &amp; Graph Databases</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">World&apos;s Largest Private Workforce</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">Via PredictiveUX · 2021–2022</span>
              </div>
              <Link href="/case-studies/walmart" className="inline-flex items-center gap-1 font-sans text-[#FE299E] font-bold hover:underline">
                Read full Walmart case study &rarr;
              </Link>
            </div>
          </div>
        </article>

        {/* ── PILLAR 04: PIPES (SOLO-BUILT MULTI-PLATFORM SYSTEMS ARCHITECTURE) ── */}
        <article className="bg-[#F2EAE0] border-2 border-[#281B16] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_24px_60px_rgba(40,27,22,0.10)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-8 mb-10 border-b border-[#D3C7B5]">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold px-3 py-1 rounded-full bg-[#FE299E] text-white">
                  04 / Flagship Sovereign Ecosystem
                </span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-mono uppercase font-bold tracking-wider bg-[#EAE0D0] text-[#281B16] px-3 py-1">
                  Web Protocol &bull; # Hash &amp; ;-] SEMI &bull; MCP &amp; macOS
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#281B16] tracking-tight leading-[1.06]">
                Pipes.Pink: Sovereign Knowledge Protocol, Hash Sanctuary &amp; SEMI (;-])
              </h3>
              <p className="text-lg sm:text-xl text-[#4A3A32] font-sans leading-relaxed max-w-[65ch]">
                My flagship product—designed, architected, and built solo from zero to production. Creators draft inside the redesigned <strong className="text-[#281B16]"># Hash Sanctuary</strong> alongside <strong className="text-[#281B16]">SEMI (;-])</strong>, a Socratic editor-in-residence with persistent memory, then seal verified primary sources into deeded namespaces (<code className="font-mono text-base bg-[#EAE0D0] border border-[#D3C7B5] px-2 py-0.5 rounded text-[#281B16]">pipe\bitcoin</code>, <code className="font-mono text-base bg-[#EAE0D0] border border-[#D3C7B5] px-2 py-0.5 rounded text-[#281B16]">pipe\my-first-bitcoin</code>) where AI agents pay 70% micro-royalties via MCP &amp; HTTP 402 gates.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between lg:items-end gap-3 pt-2 lg:pt-0">
              <div className="w-full lg:max-w-[310px] rounded-2xl bg-[#231814] text-[#F2EAE0] border border-[#3D2C24] p-4 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-[#3D2C24] pb-1.5">
                  <span className="uppercase tracking-wider text-[#D3C7B5]">Deeded Pipe</span>
                  <span className="font-bold text-[#FE299E]">$9/yr · 70% Royalties</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#3D2C24] pb-1.5">
                  <span className="uppercase tracking-wider text-[#D3C7B5]">Writing Studio</span>
                  <span className="font-bold text-[#F2EAE0]"># Hash + ;-] Semi (Free)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wider text-[#D3C7B5]">Agent Gate</span>
                  <span className="font-bold text-[#F2EAE0]">MCP + HTTP 402</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 w-full lg:max-w-[310px]">
                <a
                  href="https://pipes.pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-6 py-3.5 shadow-md transition-all text-center no-underline"
                >
                  Claim Your Pipe ($9/yr) <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://pipes.pink/write"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-mono text-[11px] uppercase tracking-[0.12em] font-bold rounded-full px-3 py-2.5 transition-all text-center no-underline"
                  >
                    Try # Hash + ;-] Semi
                  </a>
                  <Link
                    href="/case-studies/pipes"
                    className="inline-flex items-center justify-center gap-1 bg-[#EAE0D0] hover:bg-[#D3C7B5] text-[#281B16] border border-[#281B16]/25 font-mono text-[11px] uppercase tracking-[0.12em] font-bold rounded-full px-3 py-2.5 transition-all text-center no-underline"
                  >
                    Case Study &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Plate 04.A */}
              <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] font-bold text-[#281B16]">
                    FIG 04.A // PIPES.PINK SOVEREIGN PROTOCOL
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#FE299E]">
                    MERKLE-DAG &amp; 70% ROYALTIES
                  </span>
                </div>

                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/pipes/pipes-hero.png",
                      caption: "Pipes.Pink Web Protocol: A Sovereign Library for Human Knowledge",
                    })
                  }
                  className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#3D2C24] bg-[#231814] p-2 sm:p-3 shadow-xl flex items-center justify-center cursor-zoom-in"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/pipes/pipes-hero.png"
                    alt="Pipes.Pink Web Protocol: A Sovereign Library for Human Knowledge"
                    className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect Plate
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <h4 className="font-serif font-bold text-lg text-[#281B16]">
                    Web Protocol &amp; Marketplace &bull; pipes.pink
                  </h4>
                  <p className="text-sm text-[#4A3A32] font-sans leading-relaxed">
                    Content-addressed knowledge namespaces, 70% creator royalties via MCP/HTTP 402, and on-device WebGPU + DuckDB-WASM execution.
                  </p>
                </div>
              </div>

              {/* Plate 04.B */}
              <div className="lg:col-span-6 rounded-2xl bg-[#EAE0D0]/70 border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-[#D3C7B5] pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] font-bold text-[#281B16]">
                    FIG 04.B // INTEGRATED # HASH &amp; ;-] SEMI ATELIER
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#FE299E]">
                    SOCRATIC SPARRING VAULT
                  </span>
                </div>

                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/pipes/pipes-hash-studio-semi.png",
                      caption: "Integrated Hash Studio and SEMI (;-]) Socratic Sparring Atelier inside Pipes.Pink",
                    })
                  }
                  className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#3D2C24] bg-[#231814] p-2 sm:p-3 shadow-xl flex items-center justify-center cursor-zoom-in"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/pipes/pipes-hash-studio-semi.png"
                    alt="Integrated Hash Studio and SEMI (;-]) Socratic Sparring Atelier inside Pipes.Pink"
                    className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.015] transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect Plate
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <h4 className="font-serif font-bold text-lg text-[#281B16]">
                    Integrated Hash Sanctuary &bull; SEMI (;-]) Socratic Sparring
                  </h4>
                  <p className="text-sm text-[#4A3A32] font-sans leading-relaxed">
                    Redesigned epistemic writing vault inside Pipes with live Socratic sparring from SEMI (;-]), 1-click Substack ingestion, and cryptographic &ldquo;Seal to Pipe&rdquo; publishing.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base text-[#4A3A32] font-sans pt-6 border-t border-[#D3C7B5]">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="font-bold text-[#281B16]">Built &amp; Shipped Solo</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]"># Hash &amp; ;-] SEMI Atelier</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">MCP &amp; HTTP 402 Agent Gate</span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <span className="font-bold text-[#281B16]">Web, macOS (Tauri/Rust) &amp; iOS</span>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="https://pipes.pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-[#281B16] font-bold hover:text-[#FE299E] underline decoration-[#FE299E] underline-offset-4"
                >
                  Launch pipes.pink &nearr;
                </a>
                <Link href="/case-studies/pipes" className="inline-flex items-center gap-1 font-sans text-[#FE299E] font-bold hover:underline">
                  Read full Pipes case study &rarr;
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* ── ADDITIONAL ENTERPRISE HISTORY & SELECTED WORK ── */}
        <div className="space-y-10 pt-12 border-t-2 border-[#281B16]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-bold text-[#FE299E] block">
                02.B // CAREER DEPTH &amp; ARCHIVAL ESSAYS
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
                More enterprise history, code, and essays
              </h3>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-relaxed">
                Additional executive roles, open-source engines, and foundational essays from my 15-year career.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Foodler */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#281B16] transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Fraud Systems &bull; Operations
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  Foodler (acquired by Grubhub)
                </h4>
                <p className="text-base text-[#4A3A32] font-sans leading-relaxed">
                  Director of Business Operations (2010–2015). Engineered a proprietary fraud detection system that dropped chargebacks 83% ($6M to &lt;$1M) across $500M+ in volume, contributing to a 10x exit to Grubhub.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5] flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span className="font-mono text-xs text-[#4A3A32]">2010 – 2015</span>
                <Link href="/case-studies/foodler" className="inline-flex items-center gap-1 text-[#FE299E] hover:underline">
                  Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* UltraLinq */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#281B16] transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Medical Devices &bull; Clinical
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  UltraLinq Healthcare
                </h4>
                <p className="text-base text-[#4A3A32] font-sans leading-relaxed">
                  Design Director (2016–2018). Founded the internal design team, building zero-to-one design systems for web, medical devices, and wearable health monitors with formal HIPAA compliance.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5] flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span className="font-mono text-xs text-[#4A3A32]">2016 – 2018</span>
                <Link href="/case-studies/ultralinq" className="inline-flex items-center gap-1 text-[#FE299E] hover:underline">
                  Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* BLDG-25 / Fidelity */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#281B16] transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Enterprise &bull; Cybersecurity
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  BLDG-25: Fidelity &amp; IronNet
                </h4>
                <p className="text-base text-[#4A3A32] font-sans leading-relaxed">
                  Design Director (2018–2020). Embedded for 2 years at Fidelity Investments for their first cloud-native app launch, and designed security frameworks for IronNet under former NSA Director Gen. Alexander.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5] flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span className="font-mono text-xs text-[#4A3A32]">2018 – 2020</span>
                <Link href="/case-studies/ironnet" className="inline-flex items-center gap-1 text-[#FE299E] hover:underline">
                  IronNet Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* Cassandra */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#281B16] transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  AI Agent &bull; SQLite + Gemini
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  Cassandra
                </h4>
                <p className="text-base text-[#4A3A32] font-sans leading-relaxed">
                  A job-search and focus writing instrument that learns from rejection exclusions. Replaces the endless scroll with focused batches, saving exclusion reasons into SQLite to refine future runs.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5] flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span className="font-mono text-xs text-[#4A3A32]">Personal Tool</span>
                <Link href="/case-studies/cassandra" className="inline-flex items-center gap-1 text-[#FE299E] hover:underline">
                  Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* Marigold */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#281B16] transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Open Source &bull; In-Browser DuckDB
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  Marigold Insights
                </h4>
                <p className="text-base text-[#4A3A32] font-sans leading-relaxed">
                  Voter-roll audit engine running on 2M+ records entirely in the browser using DuckDB-WASM and Apache Arrow. Fellegi-Sunter entity linkage with zero PII uploaded.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5] flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <a href="https://bolt.pipes.pink" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#281B16] hover:text-[#FE299E] underline">
                  bolt.pipes.pink &nearr;
                </a>
                <Link href="/case-studies/marigold" className="inline-flex items-center gap-1 text-[#FE299E] hover:underline">
                  Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* Colors Type Grids & Design is Risk Essays */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#281B16] transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#FE299E] block">
                  Essays &bull; Grids &amp; Security Posture
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  Albers &amp; Vignelli + Design is Risk
                </h4>
                <p className="text-base text-[#4A3A32] font-sans leading-relaxed">
                  Two foundational essays: why mathematical CSS grids and Albers color relativity prevent generic AI homogeneity, and how CoT scraping turned design portfolios into an enterprise IP risk.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5] flex items-center justify-between gap-3 text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <Link href="/case-studies/colors-type-grids" className="inline-flex items-center gap-1 text-[#FE299E] hover:underline">
                  Albers &amp; Vignelli &rarr;
                </Link>
                <Link href="/essays/design-is-risk" className="inline-flex items-center gap-1 text-[#281B16] hover:text-[#FE299E] underline decoration-[#D3C7B5] underline-offset-4">
                  Design is Risk &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF OF WORK: public GitHub (numbers from the GitHub API, Oct 2026) ── */}
      <section id="code" className="py-24 md:py-36 border-t border-[#D3C7B5] bg-[#E4DACB]/50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end border-b-2 border-[#281B16] pb-10">
            <div className="lg:col-span-8 space-y-4">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> 03 // CODE &amp; SYSTEMS ARCHITECTURE
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.05]">
                Systems architect. Prompt engineer. Builder.
              </h2>
              <p className="text-lg sm:text-xl text-[#4A3A32] font-sans leading-relaxed max-w-[65ch]">
                Most of my enterprise client work is under NDA, so I architect and release open-source systems in public. I&apos;m a systems architect and prompt engineer who reads code, defines strict data schemas and mathematical UI grids, and uses AI acceleration—especially on the backend—to ship working TypeScript/Next.js, Python, and Rust software.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <a
                href="https://github.com/rorshockbtc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 h-14 rounded-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-base font-bold transition-colors shadow-md"
              >
                <GitCommit className="w-5 h-5 text-[#FE299E]" /> github.com/rorshockbtc &rarr;
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "670+", l: "Public commits on GitHub" },
              { v: "8", l: "Public repositories" },
              { v: "4", l: "Featured open-source engines" },
              { v: "TS / Rust", l: "TypeScript first, Python & Rust when needed" },
            ].map((x) => (
              <div key={x.l} className="p-6 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] space-y-2">
                <dd className="text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tabular-nums leading-none">{x.v}</dd>
                <dt className="text-sm sm:text-base text-[#4A3A32] font-sans font-medium leading-snug">{x.l}</dt>
              </div>
            ))}
          </dl>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { repo: "marigold", license: "AGPL-3.0", desc: "Voter-roll search and audit that runs entirely in the browser on DuckDB-WASM. No personal data leaves the machine.", stack: "TypeScript · DuckDB-WASM · Apache Arrow" },
              { repo: "greater-than", license: "MIT", desc: "Sovereign-by-default support bots that run inference in the browser with WebGPU and Transformers.js at $0 cloud cost.", stack: "TypeScript · WebGPU · Transformers.js" },
              { repo: "pipes-native", license: "Source available", desc: "The Pipes macOS (! BANG IDE) and iOS companion apps: local folder sync, DuckDB analytics, and sovereign studio.", stack: "TypeScript · Tauri · Rust · Swift" },
              { repo: "antigravity-skills", license: "Open Source", desc: "Curated collection of production Agent Skills, MCP workflows, and deterministic harnesses for autonomous coding agents.", stack: "Agent Harnesses · MCP · Prompt Engineering" },
            ].map((r) => (
              <li key={r.repo} className="h-full">
                <a
                  href={`https://github.com/rorshockbtc/${r.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full flex flex-col justify-between space-y-5 p-6 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all shadow-xs no-underline"
                >
                  <div className="space-y-3">
                    <span className="flex items-baseline justify-between gap-3 border-b border-[#D3C7B5] pb-3">
                      <span className="font-serif text-xl lg:text-2xl font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors">{r.repo}</span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EAE0D0] text-[#281B16] shrink-0">{r.license}</span>
                    </span>
                    <span className="block text-sm sm:text-base text-[#4A3A32] font-sans leading-relaxed">{r.desc}</span>
                  </div>
                  <span className="block text-xs font-mono font-bold text-[#281B16] group-hover:text-[#FE299E] pt-3 border-t border-[#D3C7B5]">{r.stack} &rarr;</span>
                </a>
              </li>
            ))}
          </ul>

          {/* ── ARCHITECTURAL CAPABILITIES & PRODUCTION STACK ── */}
          <TechStack />
        </div>
      </section>

      {/* ── SPREAD 07: IN THE FIELD — THE HUMAN BEHIND THE ARCHITECTURE ── */}
      <section id="in-the-field" className="py-28 md:py-40 border-t border-[#D3C7B5] bg-[#EAE0D0]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b-2 border-[#281B16] pb-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FE299E]" /> 04 // OUTSIDE WORK &amp; FIELD STUDIES
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.04]">
                Where the ideas come from
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-relaxed">
                Most of my best ideas come from travelling with my wife, Victoria: markets in the Andes, murals in Medellín, and a lot of reading.
              </p>
            </div>
          </div>

          {/* Row 1: Balanced 6 / 6 Swiss Dual Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Coastal & Purpose: Kyle & Victoria */}
            <div
              onClick={() =>
                setLightboxImage({
                  src: "/images/personal/kyle-victoria-coastal-ring.jpg",
                  caption: "Kyle & Victoria. Grounded in quiet discipline, mutual purpose, and deep focus.",
                })
              }
              className="lg:col-span-6 group cursor-zoom-in rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/personal/kyle-victoria-coastal-ring.jpg"
                  alt="Kyle and Victoria Cyree"
                  className="w-full aspect-[16/10] object-cover object-[50%_35%] group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-xs font-sans font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FE299E]" /> Full Resolution
                </div>
              </div>
              <div className="space-y-1.5 px-1">
                <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#FE299E] block">
                  Field &amp; Focus
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Systems Built on Discipline
                </h3>
                <p className="text-base text-[#4A3A32] font-sans leading-relaxed">
                  Behind every production repository, venture launch, and 1-week sprint is a shared life rooted in disciplined focus and mutual purpose.
                </p>
              </div>
            </div>

            {/* Kyle & Victoria: Palm Tree Portrait */}
            <div
              onClick={() =>
                setLightboxImage({
                  src: "/images/personal/kyle-victoria-palm-closeup.jpg",
                  caption: "Kyle & Victoria.",
                })
              }
              className="lg:col-span-6 group cursor-zoom-in rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/personal/kyle-victoria-palm-closeup.jpg"
                  alt="Kyle & Victoria Cyree"
                  className="w-full aspect-[16/10] object-cover object-[50%_28%] group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-xs font-sans font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FE299E]" /> Full Resolution
                </div>
              </div>
              <div className="space-y-1.5 px-1">
                <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#FE299E] block">
                  Partnership
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Kyle &amp; Victoria
                </h3>
                <p className="text-base text-[#4A3A32] font-sans leading-relaxed">
                  Victoria is my partner in life and work—exploring architecture, craft, and resilient human systems across continents.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Field Triad (3-Column Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Andes Market: Field Research & Human Dignity */}
            <div
              onClick={() =>
                setLightboxImage({
                  src: "/images/personal/kyle-victoria-andes-market.jpg",
                  caption: "Field Research & Human Dignity — High Andes indigenous market, Ecuador. Understanding real human exchange, tactile craft, and resilient informal trade networks.",
                })
              }
              className="group cursor-zoom-in rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] p-4 flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/personal/kyle-victoria-andes-market.jpg"
                  alt="Field study in high Andes indigenous market in Ecuador"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-[11px] font-sans font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>
              <div className="space-y-1 px-1">
                <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#FE299E] block">
                  High Andes, Ecuador
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Human Dignity &amp; Tactile Trade
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-relaxed">
                  Watching how trust works in a market with no apps, no reviews, and no middlemen.
                </p>
              </div>
            </div>

            {/* Medellín Mural: Color & Typography */}
            <div
              onClick={() =>
                setLightboxImage({
                  src: "/images/personal/kyle-victoria-colombia-mural.jpg",
                  caption: "Typography, Color & Regeneration — Comuna 13, Medellín, Colombia. Studying monumental urban typography, vivid chromatic contrast, and cultural renaissance through graphic craft.",
                })
              }
              className="group cursor-zoom-in rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] p-4 flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/personal/kyle-victoria-colombia-mural.jpg"
                  alt="Street mural and urban typography in Comuna 13, Medellín, Colombia"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-[11px] font-sans font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>
              <div className="space-y-1 px-1">
                <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#FE299E] block">
                  Medellín, Colombia
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Monumental Color &amp; Typography
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-relaxed">
                  Comuna 13&apos;s murals are a lesson in color, scale, and type that no design textbook comes close to.
                </p>
              </div>
            </div>

            {/* Sunset Maldives: Radical Autonomy */}
            <div
              onClick={() =>
                setLightboxImage({
                  src: "/images/personal/kyle-victoria-sunset-beach.jpg",
                  caption: "Indian Ocean. Time off is when the big structural ideas show up.",
                })
              }
              className="group cursor-zoom-in rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] p-4 flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#D3C7B5] bg-[#E4DACB]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/personal/kyle-victoria-sunset-beach.jpg"
                  alt="Kyle and Victoria Cyree at sunset in the Maldives"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-[11px] font-sans font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>
              <div className="space-y-1 px-1">
                <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#FE299E] block">
                  Indian Ocean
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Recharging
                </h4>
                <p className="text-sm text-[#4A3A32] font-sans leading-relaxed">
                  Time away from the keyboard is usually when the big structural ideas show up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT KYLE & "THE UNIT OF ONE" (OPEN EDITORIAL ESSAY) ── */}
      <section id="about-kyle" className="py-28 md:py-44 border-t border-[#D3C7B5] bg-[#F2EAE0]/60">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            {/* Left: The "Unit of One" Operating Specification Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#281B16] text-[#F2EAE0] p-8 sm:p-10 shadow-2xl border border-[#3D2C24] space-y-7">
                <div className="flex items-center justify-between border-b border-[#F2EAE0]/15 pb-5">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] font-bold text-[#FE299E] block">
                      Operating Architecture
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#F2EAE0] mt-1">
                      The &ldquo;Unit of One&rdquo; Loop
                    </h3>
                  </div>
                  <span className="font-sans font-bold text-2xl text-[#FE299E] select-none" aria-hidden="true">
                    :-]
                  </span>
                </div>

                <ol className="space-y-5 font-sans">
                  {[
                    {
                      step: "01",
                      title: "Executive & Regulatory Strategy",
                      desc: "UNC Kenan-Flagler MBA rigor applied to OCC/FDIC banking, HIPAA clinical workflows, and enterprise service blueprints.",
                    },
                    {
                      step: "02",
                      title: "First-Principles Data Modeling",
                      desc: "Relational PostgreSQL/Drizzle schemas, local-first DuckDB-WASM tables, and zero-PII security boundaries before pixels.",
                    },
                    {
                      step: "03",
                      title: "Swiss Grid & Interaction Craft",
                      desc: "Mathematical Vignelli grids, Albers color systems, and high-density institutional interfaces in Figma, Sketch, and CSS.",
                    },
                    {
                      step: "04",
                      title: "AI-Accelerated Shipping",
                      desc: "Prompt & harness engineering that turns specifications into working Next.js/TypeScript, Python, and Rust software without handoff loss.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-4">
                      <span className="font-mono text-xs font-bold text-[#FE299E] bg-[#FE299E]/15 border border-[#FE299E]/30 rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-serif font-bold text-lg text-[#F2EAE0] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#E4DACB] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="pt-4 border-t border-[#F2EAE0]/15 flex items-center justify-between text-xs font-mono text-[#E4DACB]">
                  <span>Kyle Cyree · Principal Architect</span>
                  <span className="text-[#FE299E] font-bold uppercase tracking-wider">Zero Handoff Loss</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Manifesto */}
            <div className="lg:col-span-7 space-y-8">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-bold text-[#FE299E] block">
                05 // HOW I WORK
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Why teams hire me
              </h2>
              <div className="space-y-6 text-xl sm:text-2xl text-[#4A3A32] font-sans leading-relaxed max-w-[60ch]">
                <p>
                  Most product teams lose momentum in the handoffs between strategy, design, and engineering. Designers mock up screens detached from the data model, engineers rebuild them under deadline pressure, and leadership wonders why shipping takes nine months.
                </p>
                <p>
                  I close that gap. I run the room with executives, model the data from first principles, design the interface on a mathematical grid, and use AI-accelerated engineering to ship working TypeScript and Next.js software—so the system that ships is the system we agreed on.
                </p>
              </div>

              {/* Editorial Triad */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D3C7B5]">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FE299E] font-bold block">
                    System Architecture
                  </span>
                  <span className="font-serif font-bold text-xl text-[#281B16] block">Zero-to-one, fast</span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FE299E] font-bold block">
                    Design Systems
                  </span>
                  <span className="font-serif font-bold text-xl text-[#281B16] block">Systems, not screens</span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FE299E] font-bold block">
                    AI-Native Execution
                  </span>
                  <span className="font-serif font-bold text-xl text-[#281B16] block">No lost handoffs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof & LinkedIn Recommendations ── */}
      <TestimonialsSection />

      {/* ── Conversion Sprint Offer ($7,500 / 1 Week) ── */}
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
              <img loading="lazy" decoding="async"
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
