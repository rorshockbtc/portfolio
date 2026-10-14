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
                <a href="mailto:rorshock@protonmail.com" className="font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]">
                  rorshock@protonmail.com
                </a>
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
      <section id="selected-work" className="pt-10 md:pt-16 pb-28 md:pb-40 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-36 md:space-y-44">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D3C7B5] pb-10">
          <div className="space-y-3">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
              Selected work
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#281B16] tracking-tight">
              Four pillars of systems design &amp; code
            </h2>
            <p className="text-xl text-[#6B554D] max-w-3xl font-sans leading-relaxed">
              From zero-to-one banking architecture to national healthcare scale, workforce search for 3M people, and private software I built and ship solo.
            </p>
          </div>
        </div>

        {/* ── PILLAR 01: CUSTODIA BANK (REGULATED FINTECH & DIGITAL ASSETS) ── */}
        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                  01 / Regulated Fintech
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Chartered Wyoming Bank &bull; First Design Hire
                </Badge>
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Custodia Bank: the core banking platform and the brand
              </h3>
              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                First and only designer at a chartered Federal Reserve Special Purpose Depository Institution. Shipped the ground-up rebrand and web platform in 4 days, followed by the entire core banking application in 30 days ahead of strict Federal Reserve master account evaluation. Unified Fedwire fiat rails, institutional Money Market yield accrual, and multi-sig Bitcoin UTXO management into one interface. Hand-drew the brand marks and facilitated 100+ prototyping sprints with engineering leadership.
              </p>
            </div>

            <Link href="/case-studies/custodia">
              <Button className="w-full sm:w-auto justify-center bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.16em] font-bold rounded-full px-5 sm:px-8 py-4 shadow-lg shrink-0 cursor-pointer">
                Open Custodia Case Study &rarr;
              </Button>
            </Link>
          </div>

          <Link href="/case-studies/custodia">
            <div className="group cursor-pointer space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setLightboxImage({ src: "/images/custodia/mm-01.png", caption: "Custodia Bank Institutional Money Market Dashboard" });
                  }}
                  className="lg:col-span-7 rounded-3xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] shadow-2xl p-4 flex items-center justify-center cursor-zoom-in"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/custodia/mm-01.png"
                    alt="Custodia Bank Institutional Money Market Dashboard"
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setLightboxImage({ src: "/images/custodia/utxo-1.png", caption: "Custodia Bank Bitcoin UTXO Manager Console" });
                  }}
                  className="lg:col-span-5 rounded-3xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] shadow-2xl p-4 flex items-center justify-center cursor-zoom-in"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/custodia/utxo-1.png"
                    alt="Custodia Bank Bitcoin UTXO Manager Console"
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-sm sm:text-base text-[#6B554D] font-sans pt-6 border-t border-[#D3C7B5]">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <span className="font-bold text-[#281B16]">4-Day Rebrand Sprint</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">30-Day Fed Bank Launch</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">100+ Prototyping Sprints</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">Hand-drawn Brand Mark</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  Read full case study &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── PILLAR 02: UNITEDHEALTH GROUP & OPTUM (HEALTHCARE AT SCALE) ── */}
        <div className="space-y-12 pt-12 border-t border-[#D3C7B5]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                  02 / Healthcare Systems
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Fortune 10 &bull; 35M+ Patients &bull; 400K+ Employees
                </Badge>
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                UnitedHealth Group / Optum: flagship patient mobile apps
              </h3>
              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                Principal designer within an internal executive consulting team for UHG's flagship native iOS and Android patient applications (35M+ patients, 400K+ employees). Led the strategic push for UHG's adoption of Apple Health guidelines and integrations, driving estimated hundreds of millions in personal revenue impact. Personally produced 80%+ of Android screens and 50%+ of iOS screens, unifying the cross-org design system to rescue the app store rating from sub-2 stars to high-4 tier.
              </p>
            </div>

            <Link href="/case-studies/unitedhealth">
              <Button className="w-full sm:w-auto justify-center bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.16em] font-bold rounded-full px-5 sm:px-8 py-4 shadow-lg shrink-0 cursor-pointer">
                Open UnitedHealth Case Study &rarr;
              </Button>
            </Link>
          </div>

          <Link href="/case-studies/unitedhealth">
            <div className="group cursor-pointer space-y-8">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setLightboxImage({ src: "/artwork/enterprise-health.png", caption: "UnitedHealth Native Patient App Suite" });
                }}
                className="rounded-3xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] shadow-2xl p-6 sm:p-10 flex items-center justify-center cursor-zoom-in"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/artwork/enterprise-health.png"
                  alt="UnitedHealth Native Patient App Suite"
                  className="w-full max-h-[520px] object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between text-sm sm:text-base text-[#6B554D] font-sans pt-6 border-t border-[#D3C7B5]">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <span className="font-bold text-[#281B16]">35M+ Patients</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">Apple Health Advocacy</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">80% Android / 50% iOS Ownership</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">Optum &amp; UHG · 2020–2021</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  Read full case study &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── PILLAR 03: WALMART (ENTERPRISE WORKFORCE SEARCH AT 3M SCALE) ── */}
        <div className="space-y-12 pt-12 border-t border-[#D3C7B5]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                  03 / Enterprise Workforce
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Fortune 1 &bull; 3M Direct Users &bull; Global Search
                </Badge>
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Walmart: graph-powered enterprise search &amp; training platform
              </h3>
              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                Senior UX/UI Architect at PredictiveUX. Architected the enterprise search paradigms and Content Distribution Platform (CDP) for the world's largest private workforce (3 million direct users). Replaced fractured legacy keyword lookups with GraphQL and graph database discovery, mapping career pathways and compliance certifications in real time across global retail floor terminals.
              </p>
            </div>

            <Link href="/case-studies/walmart">
              <Button className="w-full sm:w-auto justify-center bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.16em] font-bold rounded-full px-5 sm:px-8 py-4 shadow-lg shrink-0 cursor-pointer">
                Open Walmart Case Study &rarr;
              </Button>
            </Link>
          </div>

          <Link href="/case-studies/walmart">
            <div className="group cursor-pointer space-y-8">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setLightboxImage({ src: "/images/walmart/walmart-search-results.png", caption: "Walmart Enterprise Graph Search Results Interface" });
                }}
                className="rounded-3xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] shadow-2xl p-6 sm:p-10 flex items-center justify-center cursor-zoom-in"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/walmart/walmart-search-results.png"
                  alt="Walmart Enterprise Graph Search Results Interface"
                  className="w-full max-h-[520px] object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between text-sm sm:text-base text-[#6B554D] font-sans pt-6 border-t border-[#D3C7B5]">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <span className="font-bold text-[#281B16]">3M Direct Users</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">GraphQL &amp; Graph Databases</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">World's Largest Private Workforce</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">Via PredictiveUX · 2021–2022</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  Read full case study &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── PILLAR 04: PIPES (SOLO-BUILT MULTI-PLATFORM SYSTEMS ARCHITECTURE) ── */}
        <div className="space-y-12 pt-12 border-t border-[#D3C7B5]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                  04 / Systems Architecture &amp; Solo Product
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Web &bull; macOS Desktop &bull; iOS Mobile
                </Badge>
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Pipes: a private, local-first knowledge app for web, Mac, and iPhone
              </h3>
              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                My flagship product, designed, architected, and built solo from zero to production. A native macOS app for writing and searching your notes locally, an iPhone app for quick capture, and a web app for publishing. The AI runs on your own machine, so your writing stays private and there's no per-query cloud bill. Built with TypeScript, Next.js, Tauri, and SQLite vector embeddings.
              </p>
            </div>

            <Link href="/case-studies/pipes">
              <Button className="w-full sm:w-auto justify-center bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.16em] font-bold rounded-full px-5 sm:px-8 py-4 shadow-lg shrink-0 cursor-pointer">
                Open Pipes Case Study &rarr;
              </Button>
            </Link>
          </div>

          <Link href="/case-studies/pipes">
            <div className="group cursor-pointer space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-7 space-y-3">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5] bg-[#EAE0D0]">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/images/pipes/desktop-mac-bang-ide.png"
                      alt="Pipes macOS Desktop App: Native Bang IDE"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <span className="font-sans text-xs sm:text-sm uppercase font-bold tracking-wider text-[#281B16] block">
                      macOS Desktop &bull; Native Bang IDE
                    </span>
                    <p className="text-sm text-[#6B554D] font-sans">
                      Local-first note taking and knowledge search with zero cloud latency.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5] bg-[#EAE0D0]">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/images/pipes/pipes-hero.png"
                      alt="Pipes Web App"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <span className="font-sans text-xs sm:text-sm uppercase font-bold tracking-wider text-[#281B16] block">
                      Web Protocol &bull; pipes.pink
                    </span>
                    <p className="text-sm text-[#6B554D] font-sans">
                      Publishing and sharing notes with on-device AI synthesis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-sm sm:text-base text-[#6B554D] font-sans pt-6 border-t border-[#D3C7B5]">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <span className="font-bold text-[#281B16]">Built &amp; Shipped Solo</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">macOS, iOS &amp; Web</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">Local On-Device AI</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">TypeScript + Next.js</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  Read full case study &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── ADDITIONAL ENTERPRISE HISTORY & SELECTED WORK ── */}
        <div className="space-y-10 pt-16 border-t border-[#D3C7B5]">
          <div className="space-y-3">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
              Career depth &amp; writing
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
              More enterprise history, code, and essays
            </h3>
            <p className="text-lg sm:text-xl text-[#6B554D] font-sans max-w-3xl leading-relaxed">
              Additional roles and public projects sourced directly from my 15-year career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {/* Foodler */}
            <div className="space-y-4 p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase font-bold tracking-wider text-[#FE299E]">
                  Fraud Systems &bull; Operations
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  Foodler (acquired by Grubhub)
                </h4>
                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  Director of Business Operations (2010–2015). Engineered a proprietary fraud detection system that dropped chargebacks 83% ($6M to &lt;$1M) across $500M+ in volume, contributing to a 10x exit to Grubhub.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span>2010 – 2015</span>
                <span className="text-[#8A736A] uppercase tracking-wider">83% fraud drop</span>
              </div>
            </div>

            {/* UltraLinq */}
            <div className="space-y-4 p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase font-bold tracking-wider text-[#FE299E]">
                  Medical Devices &bull; Clinical
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  UltraLinq Healthcare
                </h4>
                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  Design Director (2016–2018). Founded the internal design team, building zero-to-one design systems for web, medical devices, and wearable health monitors with formal HIPAA compliance.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span>2016 – 2018</span>
                <Link href="/case-studies/ultralinq" className="text-[#FE299E] hover:underline">
                  Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* BLDG-25 / Fidelity */}
            <div className="space-y-4 p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase font-bold tracking-wider text-[#FE299E]">
                  Enterprise &bull; Cybersecurity
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  BLDG-25: Fidelity &amp; IronNet
                </h4>
                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  Design Director (2018–2020). Embedded for 2 years at Fidelity Investments for their first cloud-native app launch, and designed security frameworks for IronNet under former NSA Director Gen. Alexander.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span>2018 – 2020</span>
                <span className="text-[#8A736A] uppercase tracking-wider">Fidelity &bull; IronNet</span>
              </div>
            </div>

            {/* Cassandra */}
            <div className="space-y-4 p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase font-bold tracking-wider text-[#FE299E]">
                  AI Agent &bull; SQLite + Gemini
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  Cassandra
                </h4>
                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  A job-search agent that learns from rejection exclusions. Replaces the endless scroll of job boards with eight focused roles per hour, saving exclusion reasons into SQLite to refine future batches.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span>Personal Tool</span>
                <Link href="/case-studies/cassandra" className="text-[#FE299E] hover:underline">
                  Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* Marigold */}
            <div className="space-y-4 p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase font-bold tracking-wider text-[#FE299E]">
                  Open Source &bull; In-Browser DuckDB
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  Marigold Insights
                </h4>
                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  Voter-roll audit engine running on 2M+ records entirely in the browser using DuckDB-WASM and Apache Arrow. Fellegi-Sunter entity linkage with zero PII uploaded.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span>AGPL-3.0</span>
                <Link href="/case-studies/marigold" className="text-[#FE299E] hover:underline">
                  Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* Colors Type Grids */}
            <div className="space-y-4 p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase font-bold tracking-wider text-[#FE299E]">
                  Design Manifesto &bull; Pure CSS
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#281B16]">
                  Albers &amp; Vignelli in CSS
                </h4>
                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  My design essay on grids, typography, and color relativity, constructed entirely in mathematical CSS. It demonstrates why spatial discipline keeps digital software from generic AI homogeneity.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#281B16]">
                <span>Essay</span>
                <Link href="/case-studies/colors-type-grids" className="text-[#FE299E] hover:underline">
                  Read Essay &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF OF WORK: public GitHub (numbers from the GitHub API, Oct 2026) ── */}
      <section id="code" className="py-24 md:py-36 border-t border-[#D3C7B5] bg-[#E4DACB]/40">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7 space-y-5">
              <p className="font-sans text-sm uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> Code &amp; Systems
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.05]">
                A designer who ships code.
              </h2>
              <p className="text-lg sm:text-xl text-[#5C4840] font-sans leading-relaxed max-w-2xl">
                Most of my enterprise client work is under NDA, so I build and release open-source systems in public. Day to day that's TypeScript with React and Next.js, backed by Python, DuckDB-WASM, WebGPU, and Rust when local performance or data pipelines demand it.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <a
                href="https://github.com/rorshockbtc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 h-14 rounded-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-base font-bold transition-colors"
              >
                <GitCommit className="w-5 h-5 text-[#FE299E]" /> github.com/rorshockbtc &rarr;
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-[#D3C7B5] border-y border-[#D3C7B5] py-10">
            {[
              { v: "670+", l: "Public commits on GitHub" },
              { v: "8", l: "Public repositories" },
              { v: "3", l: "Open-source projects (MIT / AGPL)" },
              { v: "TS", l: "TypeScript first, Python and Rust when needed" },
            ].map((x) => (
              <div key={x.l} className="space-y-2 md:px-8 first:md:pl-0">
                <dd className="text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tabular-nums leading-none">{x.v}</dd>
                <dt className="text-base text-[#5C4840] font-sans leading-snug">{x.l}</dt>
              </div>
            ))}
          </dl>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4">
            {[
              { repo: "marigold", license: "AGPL-3.0", desc: "Voter-roll search and audit that runs entirely in the browser on DuckDB-WASM. No personal data leaves the machine.", stack: "TypeScript · DuckDB-WASM · Apache Arrow" },
              { repo: "greater-than", license: "MIT", desc: "Support bots that run the model in the browser with WebGPU and Transformers.js, so there's no per-message cloud cost.", stack: "TypeScript · WebGPU · Transformers.js" },
              { repo: "pipes-native", license: "Source available", desc: "The Pipes Mac and iPhone apps: local notes, local search, and local AI.", stack: "TypeScript · Tauri · Rust · Swift" },
            ].map((r) => (
              <li key={r.repo}>
                <a
                  href={`https://github.com/rorshockbtc/${r.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block space-y-3 py-6 border-b border-[#D3C7B5] hover:border-[#FE299E] transition-colors"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-serif text-2xl font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors">{r.repo}</span>
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#8A736A]">{r.license}</span>
                  </span>
                  <span className="block text-lg text-[#5C4840] font-sans leading-relaxed">{r.desc}</span>
                  <span className="block text-sm font-sans font-semibold text-[#281B16]">{r.stack} &rarr;</span>
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
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D3C7B5] pb-10">
            <div className="space-y-3 max-w-4xl">
              <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FE299E]" /> Outside work
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#281B16] tracking-tight">
                Where the ideas come from
              </h2>
              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                Most of my best ideas come from travelling with my wife, Victoria: markets in the Andes, murals in Medellín, and a lot of reading.
              </p>
            </div>
            </div>

          {/* Row 1: Dual Feature (7 / 5 Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Coastal & Purpose: Kyle & Victoria */}
            <div
              onClick={() =>
                setLightboxImage({
                  src: "/images/personal/kyle-victoria-coastal-ring.jpg",
                  caption: "Kyle & Victoria. Grounded in quiet discipline, mutual purpose, and deep focus.",
                })
              }
              className="lg:col-span-7 group cursor-zoom-in space-y-4"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5] bg-[#F2EAE0]">
                <img loading="lazy" decoding="async"
                  src="/images/personal/kyle-victoria-coastal-ring.jpg"
                  alt="Kyle and Victoria Cyree"
                  className="w-full aspect-[16/10] object-cover object-[50%_35%] group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-xs font-sans font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FE299E]" /> Full Resolution
                </div>
              </div>
              <div className="space-y-1.5 px-1">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#FE299E]">
                    Field &amp; Focus
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Systems Built on Discipline
                </h3>
                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  Behind every 5,000-commit repository, venture launch, and 1-week sprint is a shared life rooted in disciplined focus and mutual purpose.
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
              className="lg:col-span-5 group cursor-zoom-in space-y-4"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5] bg-[#F2EAE0]">
                <img loading="lazy" decoding="async"
                  src="/images/personal/kyle-victoria-palm-closeup.jpg"
                  alt="Kyle & Victoria Cyree"
                  className="w-full aspect-[16/10] lg:aspect-square object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-xs font-sans font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FE299E]" /> Full Resolution
                </div>
              </div>
              <div className="space-y-1.5 px-1">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#FE299E]">
                    Partnership
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Kyle &amp; Victoria
                </h3>
                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  Victoria is my partner in life and work.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Field Triad (3-Column Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 pt-4">
            {/* Andes Market: Field Research & Human Dignity */}
            <div
              onClick={() =>
                setLightboxImage({
                  src: "/images/personal/kyle-victoria-andes-market.jpg",
                  caption: "Field Research & Human Dignity — High Andes indigenous market, Ecuador. Understanding real human exchange, tactile craft, and resilient informal trade networks.",
                })
              }
              className="group cursor-zoom-in space-y-4"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D3C7B5] bg-[#F2EAE0]">
                <img loading="lazy" decoding="async"
                  src="/images/personal/kyle-victoria-andes-market.jpg"
                  alt="Field study in high Andes indigenous market in Ecuador"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-[11px] font-sans font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>
              <div className="space-y-1 px-1">
                <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#FE299E] block">
                  High Andes, Ecuador
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Human Dignity &amp; Tactile Trade
                </h4>
                <p className="text-sm text-[#6B554D] font-sans leading-relaxed">
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
              className="group cursor-zoom-in space-y-4"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D3C7B5] bg-[#F2EAE0]">
                <img loading="lazy" decoding="async"
                  src="/images/personal/kyle-victoria-colombia-mural.jpg"
                  alt="Street mural and urban typography in Comuna 13, Medellín, Colombia"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-[11px] font-sans font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>
              <div className="space-y-1 px-1">
                <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#FE299E] block">
                  Medellín, Colombia
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Monumental Color &amp; Typography
                </h4>
                <p className="text-sm text-[#6B554D] font-sans leading-relaxed">
                  Comuna 13's murals are a lesson in color, scale, and type that no design textbook comes close to.
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
              className="group cursor-zoom-in space-y-4"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D3C7B5] bg-[#F2EAE0]">
                <img loading="lazy" decoding="async"
                  src="/images/personal/kyle-victoria-sunset-beach.jpg"
                  alt="Kyle and Victoria Cyree at sunset in the Maldives"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-[11px] font-sans font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-[#FE299E]" /> Inspect
                </div>
              </div>
              <div className="space-y-1 px-1">
                <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#FE299E] block">
                  Indian Ocean
                </span>
                <h4 className="font-serif font-bold text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Recharging
                </h4>
                <p className="text-sm text-[#6B554D] font-sans leading-relaxed">
                  Time away from the keyboard is usually when the big structural ideas show up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT KYLE & "THE UNIT OF ONE" (OPEN EDITORIAL ESSAY) ── */}
      <section id="about-kyle" className="py-28 md:py-44 border-t border-[#D3C7B5] bg-[#F2EAE0]/50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            {/* Left: Gallery Photograph (Frameless) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-lg w-full space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5]">
                  <img loading="lazy" decoding="async"
                    src="/images/personal/kyle-victoria-sunset-beach.jpg"
                    alt="Kyle Cyree — Golden Hour on the Beach"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="pt-2 text-center space-y-1">
                  <span className="font-serif font-bold text-2xl text-[#281B16] block">Kyle Cyree</span>
                  <span className="font-sans text-xs sm:text-sm text-[#FE299E] font-bold uppercase tracking-wider block">
                    The &quot;Unit of One&quot;
                  </span>
                  <p className="text-xs sm:text-sm text-[#6B554D] font-sans">
                    Principal Product Designer &amp; Systems Architect
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Architectural Manifesto */}
            <div className="lg:col-span-7 space-y-8">
              <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                How I work
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Why teams hire me
              </h2>
              <div className="space-y-6 text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                <p>
                  Most product teams lose momentum in the handoffs between strategy, design, and engineering. Designers mock up things that are hard to build, engineers rebuild them from scratch, and leadership wonders why shipping takes nine months.
                </p>
                <p>
                  I close that gap. I can run the room with executives, model the data, design the experience, and write the front-end code, so the version that ships is the version we agreed on.
                </p>
              </div>

              {/* Editorial Triad */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#D3C7B5]">
                <div className="space-y-1">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#FE299E] font-bold block">
                    System Architecture
                  </span>
                  <span className="font-serif font-bold text-xl text-[#281B16] block">Zero-to-one, fast</span>
                </div>
                <div className="space-y-1">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#FE299E] font-bold block">
                    Design Systems
                  </span>
                  <span className="font-serif font-bold text-xl text-[#281B16] block">Systems, not screens</span>
                </div>
                <div className="space-y-1">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#FE299E] font-bold block">
                    Production Code
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
