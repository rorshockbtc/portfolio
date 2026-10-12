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
  CheckCircle2,
  Mic,
  Activity,
  Heart,
  ShoppingBag,
  Maximize2,
  Zap,
  Camera,
  Compass,
} from "lucide-react";
import { openContactModal } from "@/lib/contact-events";
import {
  BrandMark,
  ClientLogoBar,
  VideoShowcase,
  SprintCallout,
} from "@/components/chb";
import { ColorsTypeGridsViewer } from "@/components/chb/colors-type-grids-viewer";
import { ExperienceSection } from "@/components/chb/experience-section";

interface LivingSystem {
  id: string;
  name: string;
  category: string;
  slug: string;
  badge: string;
  metric: string;
  headline: string;
  description: string;
  stack: string[];
  deliverables: string[];
  images: { src: string; caption: string }[];
}

const livingSystems: LivingSystem[] = [
  {
    id: "clubhouse1099",
    name: "Clubhouse 1099",
    category: "Venture Scout Network & Voice CRM",
    slug: "clubhouse1099",
    badge: "535 Capped Seats",
    metric: "10% Commission • Whisper AI",
    headline: "A scouting network for golf, with voice notes, a lead CRM, and mileage logs",
    description:
      "A referral network that pairs technology consultants with local businesses. Scouts record voice notes in the browser (transcribed with Whisper), leads are enriched automatically, and GPS mileage is logged for taxes.",
    stack: ["OpenAI Whisper", "Supabase", "TypeScript", "Drizzle ORM", "Leaflet Geo"],
    deliverables: ["Field Scout Voice App", "Earnings Ledger", "Automated CRM Pipeline", "Investor Manifesto"],
    images: [
      { src: "/images/clubhouse1099/01_clubhouse1099_landing_hero.png", caption: "Misty Fairway Hero & Private Network Manifesto" },
      { src: "/images/clubhouse1099/02_clubhouse1099_manifesto_honest_diagnostics.png", caption: "The 1099 Diagnostic Methodology" },
      { src: "/images/clubhouse1099/03_clubhouse1099_scout_dashboard_earnings.png", caption: "Scout Commission Dashboard ($18,400 Payout)" },
      { src: "/images/clubhouse1099/04_clubhouse1099_voice_whisper_recording.png", caption: "In-Browser Whisper Audio Lead Recording" },
      { src: "/images/clubhouse1099/05_clubhouse1099_lead_enrichment_crm.png", caption: "Lead Enrichment Pipeline & Mileage Ledger" },
    ],
  },
  {
    id: "highdraw",
    name: "High Draw Golf Apparel Co.",
    category: "Luxury DTC Apparel Storefront",
    slug: "highdraw",
    badge: "$48 vs $125 Retail",
    metric: "180 GSM Micro-Pique",
    headline: "A $48 golf polo built to compete with $125 country-club pricing",
    description:
      "A direct-to-consumer apparel brand. I drew the Ball Flight Tracer mark, designed the storefront, and built it headless on the Shopify Storefront API so pages load almost instantly.",
    stack: ["Shopify Storefront API", "Tailwind CSS", "React", "Stripe Elements", "Edge CDN"],
    deliverables: ["Brand Architecture & Marks", "Headless Storefront", "Micro-Pique Garment Tech Pack", "Conversion PDPs"],
    images: [
      { src: "/images/highdraw/01_highdraw_hero_pebble_beach.png", caption: "Pebble Beach Links Hero: Honest Mid-Market Golf Apparel" },
      { src: "/images/highdraw/02_highdraw_collection_polos_pullover.png", caption: "Collection Spread: The Tour Micro-Pique ($48) & Technical Pullover" },
      { src: "/images/highdraw/03_highdraw_pdp_midnight_navy_folded.png", caption: "High-Conversion PDP: 180 GSM Pique & Stay-Flat Fused Collar Stand" },
      { src: "/images/highdraw/04_highdraw_pdp_black_desk_accessories.png", caption: "Craftsmanship & Heritage Desk Accessories" },
    ],
  },
  {
    id: "superstar",
    name: "Superstar",
    category: "Mobile AI Context Loom",
    slug: "superstar",
    badge: "Built for Victoria",
    metric: "Dual-LLM • 1-Tap Copy",
    headline: "A birthday gift: an AI helper for my wife that needs zero prompt-engineering",
    description:
      "Built in 48 hours as a birthday gift for my wife, Victoria, so she could get real value from AI without learning prompt jargon. A pop-art entry screen, Gemini and DeepSeek working together on each request, and one tap to copy the finished prompt into any app.",
    stack: ["Gemini 1.5 Pro", "DeepSeek-R1", "Framer Motion", "Web Crypto API", "Tailwind"],
    deliverables: ["Pop-Art Aesthetic Gate", "Zero-Friction Prompt Crafter", "Expandable Gemini Ideas Drawer", "1-Tap Copy Bridge"],
    images: [
      { src: "/images/superstar/01_superstar_gate_popart_access_code.png", caption: "Surrealist Pop-Art Gate: Leopard Armchair & Crystal Chandelier" },
      { src: "/images/superstar/02_superstar_prompt_crafter_empty.png", caption: "Zero-Jargon Mobile Prompt Crafter Canvas" },
      { src: "/images/superstar/03_superstar_prompt_crafter_with_gemini_ideas.png", caption: "Intelligent Gemini Idea Suggestions Drawer" },
    ],
  },
  {
    id: "marigold",
    name: "Marigold Insights",
    category: "Zero-Cloud WASM Analytics",
    slug: "marigold",
    badge: "Open source",
    metric: "2M records · runs in-browser",
    headline: "Auditing a 2M-record voter roll in the browser, with no data leaving the machine",
    description:
      "Open-source software that helps citizens and states search and audit voter rolls. Everything runs locally in the browser on DuckDB-WASM and Apache Arrow, and duplicate records are matched with Fellegi-Sunter probabilistic linkage, so no personal data is ever uploaded.",
    stack: ["DuckDB-WASM", "Apache Arrow", "Gemini Pro", "Comlink Workers", "OPFS Storage"],
    deliverables: ["2M Record Mission Kanban", "Fellegi-Sunter Linkage Lab", "AI Concierge Data Stories", "Developer SDK & Docs"],
    images: [
      { src: "/images/marigold/01_marigold_landing_hero.png", caption: "High-Contrast Mission Landing Hero (bolt.pipes.pink)" },
      { src: "/images/marigold/02_marigold_workspace_dashboard_kanban.png", caption: "2,000,000-Record Sovereign Kanban Workspace" },
      { src: "/images/marigold/03_marigold_linkage_lab_fellegi_sunter.png", caption: "Fellegi-Sunter Entity Linkage Laboratory" },
      { src: "/images/marigold/04_marigold_data_stories_ai_concierge.png", caption: "Automated Civic Anomaly Data Stories" },
      { src: "/images/marigold/05_marigold_developer_docs_sdk.png", caption: "Zero-Knowledge TypeScript SDK Documentation" },
    ],
  },
];

export default function PortfolioPage() {
  const [activeSystemId, setActiveSystemId] = useState<string>("clubhouse1099");
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  const activeSystem = livingSystems.find((s) => s.id === activeSystemId) || livingSystems[0];

  const handleSystemChange = (systemId: string) => {
    setActiveSystemId(systemId);
    setActiveImageIndex(0);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#EAE0D0] text-[#281B16] flex flex-col selection:bg-[#FE299E]/20">
      {/* ── HERO ── */}
      <section className="relative pt-14 md:pt-24 pb-20 md:pb-32" data-testid="section-hero">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-8 space-y-9 order-2 lg:order-1">
              <p className="flex items-center gap-3 font-sans text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.22em] font-bold text-[#FE299E]">
                <BrandMark size="md" />
                <span>Principal Product Designer<span className="hidden sm:inline"> &amp; Systems Architect</span></span>
              </p>

              <h1 className="text-[3.25rem] leading-[1] sm:text-7xl lg:text-[5.25rem] 2xl:text-[5.75rem] font-serif font-black text-[#281B16] tracking-tight">
                Architect the system. <br className="hidden sm:block" />
                <span className="italic font-normal text-[#FE299E]">Design the interface.</span> <br className="hidden sm:block" />
                Ship the code.
              </h1>

              <p className="text-xl sm:text-2xl lg:text-[1.65rem] text-[#5C4840] font-sans leading-[1.55] max-w-3xl">
                I'm Kyle Cyree. For 15 years I've designed products in regulated industries where mistakes are expensive:
                UnitedHealth Group's patient apps <strong className="text-[#281B16] font-semibold">(35M+ patients)</strong>,
                Walmart's internal search <strong className="text-[#281B16] font-semibold">(3M users)</strong>, and a chartered bank I joined as the
                first designer. I design the product, model the data, and write the TypeScript that ships it.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button
                  size="lg"
                  className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-base font-bold rounded-full px-9 h-14 shadow-lg transition-all cursor-pointer"
                  onClick={() => openContactModal("Full-time role (Principal / Staff)")}
                  data-testid="button-hire"
                >
                  Hire me <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#281B16]/25 bg-transparent hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-sans text-base font-bold rounded-full px-8 h-14 cursor-pointer"
                  onClick={() => openContactModal("1-week sprint ($7,500)")}
                >
                  Book a 1-week sprint · $7,500
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-base font-sans text-[#5C4840]">
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
              <figure className="max-w-[260px] sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 space-y-5">
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
                <figcaption className="space-y-3 px-1">
                  <p className="flex items-center gap-2 font-sans text-sm font-bold text-[#281B16]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" aria-hidden="true" />
                    Open to Principal / Staff roles and sprints
                  </p>
                  <p className="text-base text-[#5C4840] font-sans leading-relaxed hidden sm:block">
                    North Carolina · US remote<br />
                    MBA, UNC Chapel Hill · MFA, Emerson College
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enterprise Client Logo Roster ── */}
      <ClientLogoBar />

      <ExperienceSection />

      {/* ── HEROIC VISUAL WORK SHOWCASE (OPEN ARCHITECTURAL MONOGRAPH) ── */}
      <section id="selected-work" className="pt-8 md:pt-12 pb-28 md:pb-40 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-40 md:space-y-48">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D3C7B5] pb-10">
          <div className="space-y-3">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
              Selected work
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#281B16] tracking-tight">
              Things I've designed and shipped
            </h2>
            <p className="text-xl text-[#6B554D] max-w-3xl font-sans leading-relaxed">
              From a chartered bank's core platform to software I built and run myself. Each project links to a longer case study.
            </p>
          </div>
        </div>

        {/* ── SPREAD 01: PIPES PROTOCOL (FRAMELESS ARCHITECTURAL SPREAD) ── */}
        <div className="space-y-12">
          {/* Headline & Narrative Floating Freely */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                  01 / Flagship product
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
                My flagship product, designed and built solo. A Mac app for writing and searching your notes locally, an iPhone app for quick capture, and a web app for publishing. The AI runs on your own machine, so your writing stays private and there's no per-query cloud bill.
              </p>
            </div>

            <Link href="/case-studies/pipes">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.16em] font-bold rounded-full px-8 py-4 shadow-lg shrink-0 cursor-pointer">
                Open Pipes Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* Frameless Widescreen Visual Plate Layout (No outer card) */}
          <Link href="/case-studies/pipes">
            <div className="group cursor-pointer space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Primary Desktop Plate */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5] bg-[#EAE0D0]">
                    <img loading="lazy" decoding="async"
                      src="/images/pipes/desktop-mac-bang-ide.png"
                      alt="Pipes macOS Desktop App: Native Bang IDE"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-[#6B554D] px-1 pt-1">
                    <span className="font-bold text-[#281B16] uppercase tracking-wider flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-[#FE299E]" /> macOS Native Bang IDE &bull; Tauri / Rust
                    </span>
                    <span className="text-[#6B554D]">Local SQLite Vector Engine</span>
                  </div>
                </div>

                {/* Secondary Plates: Knowledge Ledger + Pocket iOS */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-3">
                    <div className="rounded-3xl overflow-hidden shadow-xl border border-[#D3C7B5] bg-[#EAE0D0]">
                      <img loading="lazy" decoding="async"
                        src="/images/pipes/desktop-mac-knowledge.png"
                        alt="Pipes Desktop Sovereign Knowledge Ledger"
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-[#6B554D] px-1">
                      <span className="font-bold text-[#281B16] uppercase tracking-wider flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#FE299E]" /> Sovereign Knowledge Ledger
                      </span>
                      <span>Zero-Latency Caches</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="rounded-2xl overflow-hidden shadow-md border border-[#D3C7B5]">
                        <img loading="lazy" decoding="async"
                          src="/images/pipes/pipes-hero.png"
                          alt="Pipes Web Protocol"
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <span className="font-sans text-xs font-bold text-[#FE299E] uppercase tracking-wider block">
                        Web Protocol (pipes.pink)
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] shadow-sm">
                        <img loading="lazy" decoding="async"
                          src="/images/pipes/pipes-pocket-icon.png"
                          alt="Pipes Pocket iOS Icon"
                          className="w-16 h-16 rounded-2xl shadow-sm border border-[#D3C7B5]"
                        />
                        <div className="text-xs font-sans font-bold text-[#281B16] leading-tight">
                          Pipes Pocket<br />
                          <span className="text-[11px] text-[#6B554D] font-medium">SwiftUI &bull; Local Sync</span>
                        </div>
                      </div>
                      <span className="font-sans text-xs font-bold text-[#281B16] uppercase tracking-wider block">
                        iOS Mobile Client
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open Specs Bar with Hairline Divider */}
              <div className="flex flex-wrap items-center justify-between text-sm sm:text-base text-[#6B554D] font-sans pt-6 border-t border-[#D3C7B5]">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <span className="font-bold text-[#281B16]">Web, macOS, and iOS</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">Local AI, no per-query cloud cost</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">Designed and built solo</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  Read the case study &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 02: CASSANDRA CAREER AGENT (OPEN TRIPTYCH DISPLAY) ── */}
        <div className="space-y-12 pt-12 border-t border-[#D3C7B5]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                  02 / AI agent
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Personal tool &bull; Gemini 2.5 Flash
                </Badge>
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Cassandra: a job-search agent that learns what you don't want
              </h3>
              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                Job boards are an endless scroll. Cassandra gives you eight roles to review in one focused hour instead. When you pass on a role, your reason is saved and fed back into the model as an exclusion, so each batch fits better than the last.
              </p>
            </div>

            <Link href="/case-studies/cassandra">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.16em] font-bold rounded-full px-8 py-4 shadow-lg shrink-0 cursor-pointer">
                Open Cassandra Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* Open Triptych Photographic Spread (Zero Enclosing Card) */}
          <Link href="/case-studies/cassandra">
            <div className="group cursor-pointer space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5] bg-[#EAE0D0]">
                    <img loading="lazy" decoding="async"
                      src="/images/cassandra/focus-mode/00_focusMode_landing_redesign.jpg"
                      alt="Cassandra Focus Mode Landing Redesign"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <span className="font-sans text-xs sm:text-sm uppercase font-bold tracking-wider text-[#281B16] block">
                      01 / Eight roles, one hour
                    </span>
                    <p className="text-sm text-[#6B554D] font-sans">
                      A short, finite queue, not an endless feed
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5] bg-[#EAE0D0]">
                    <img loading="lazy" decoding="async"
                      src="/images/cassandra/focus-mode/01_focusMode_reviewRole_overview.jpg"
                      alt="Cassandra Role Review Overview"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <span className="font-sans text-xs sm:text-sm uppercase font-bold tracking-wider text-[#281B16] block">
                      02 / One role at a time
                    </span>
                    <p className="text-sm text-[#6B554D] font-sans">
                      Editorial layout on a strict 8pt grid
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5] bg-[#EAE0D0]">
                    <img loading="lazy" decoding="async"
                      src="/images/cassandra/focus-mode/09_youGotThis_celebrationScreen_final.jpg"
                      alt="Cassandra You Got This Celebration Screen"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <span className="font-sans text-xs sm:text-sm uppercase font-bold tracking-wider text-[#281B16] block">
                      03 / Ending on a win
                    </span>
                    <p className="text-sm text-[#6B554D] font-sans">
                      A calmer, more humane way to job hunt
                    </p>
                  </div>
                </div>
              </div>

              {/* Open Specs Bar with Hairline Divider */}
              <div className="flex flex-wrap items-center justify-between text-sm sm:text-base text-[#6B554D] font-sans pt-6 border-t border-[#D3C7B5]">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <span className="font-bold text-[#281B16]">One focused hour</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">Learns from every rejection</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">SQLite + Gemini</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  See all screens &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 03: INTERACTIVE LIVING SOFTWARE STUDIO (OPEN CONSOLE) ── */}
        <div id="living-systems" className="space-y-12 pt-12 border-t border-[#D3C7B5]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E] flex items-center gap-2">
                <Layers className="w-4 h-4" /> 03 / More things I've built
              </span>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Four smaller products
              </h3>
              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                A golf scouting network, an apparel brand, a mobile AI helper, and a civic data tool. Pick one to see screenshots and how it was built.
              </p>
            </div>

            <Link href={`/case-studies/${activeSystem.slug}`}>
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.16em] font-bold rounded-full px-8 py-4 shadow-lg shrink-0 cursor-pointer">
                Deep Dive: {activeSystem.name} &rarr;
              </Button>
            </Link>
          </div>

          {/* Open System Selector Tabs */}
          <div className="flex items-center gap-4 overflow-x-auto pb-3 scrollbar-none">
            {livingSystems.map((sys) => {
              const isSelected = sys.id === activeSystemId;
              return (
                <button
                  key={sys.id}
                  onClick={() => handleSystemChange(sys.id)}
                  className={`flex items-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-sans uppercase tracking-[0.16em] font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#281B16] text-[#F2EAE0] shadow-xl scale-[1.02]"
                      : "bg-[#F2EAE0] text-[#6B554D] hover:text-[#281B16] border border-[#D3C7B5] hover:bg-[#EAE0D0]"
                  }`}
                >
                  {sys.id === "clubhouse1099" && <Mic className="w-4 h-4 text-[#0F3E2E]" />}
                  {sys.id === "highdraw" && <ShoppingBag className="w-4 h-4 text-[#8B6E32]" />}
                  {sys.id === "superstar" && <Heart className="w-4 h-4 text-[#FE299E]" />}
                  {sys.id === "marigold" && <Shield className="w-4 h-4 text-[#E05A36]" />}
                  <span>{sys.name}</span>
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full ${isSelected ? "bg-[#FE299E] text-white" : "bg-[#EAE0D0] text-[#6B554D]"}`}>
                    {sys.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Open Split Editorial Layout (Zero Outer Card Box) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-4">
            {/* Left Column: Big Frameless Interactive Viewport */}
            <div className="lg:col-span-7 space-y-6">
              <div
                onClick={() => setLightboxImage(activeSystem.images[activeImageIndex])}
                className="group relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] cursor-zoom-in shadow-2xl"
              >
                <img loading="lazy" decoding="async"
                  src={activeSystem.images[activeImageIndex]?.src}
                  alt={activeSystem.images[activeImageIndex]?.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#110f0e]/90 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-sans font-bold text-white shadow-xl flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#FE299E]" />
                  <span>View full size</span>
                </div>
              </div>

              {/* Screenshot Thumbnail Strip */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-[#6B554D]">
                  <span className="font-bold text-[#281B16] text-sm">
                    {activeSystem.images[activeImageIndex]?.caption}
                  </span>
                  <span className="font-bold">
                    {activeImageIndex + 1} of {activeSystem.images.length} Shots
                  </span>
                </div>
                <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
                  {activeSystem.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-28 h-18 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                        activeImageIndex === idx
                          ? "border-[#FE299E] shadow-lg scale-105"
                          : "border-[#D3C7B5] opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img loading="lazy" decoding="async" src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Deep Editorial Story & Architecture */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                    {activeSystem.category}
                  </span>
                  <span className="text-[#D3C7B5]">&bull;</span>
                  <span className="font-sans text-xs sm:text-sm font-bold text-[#281B16] bg-[#F2EAE0] px-3 py-1 rounded-full border border-[#D3C7B5]">
                    {activeSystem.metric}
                  </span>
                </div>
                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] leading-tight">
                  {activeSystem.headline}
                </h4>
              </div>

              <p className="text-lg sm:text-xl text-[#6B554D] font-sans leading-relaxed">
                {activeSystem.description}
              </p>

              {/* Verified Stack Chips */}
              <div className="space-y-3 pt-2">
                <span className="text-xs sm:text-sm font-sans uppercase tracking-wider font-bold text-[#281B16] block">
                  Built with
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSystem.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-xs sm:text-sm font-sans font-semibold text-[#281B16]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#D3C7B5] flex flex-wrap items-center gap-5">
                <Link href={`/case-studies/${activeSystem.slug}`}>
                  <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full px-7 py-3.5 shadow-md cursor-pointer">
                    Read Full Case Study &rarr;
                  </Button>
                </Link>
                <button
                  onClick={() => openContactModal("1-week sprint ($7,500)")}
                  className="text-sm font-sans text-[#281B16] font-bold hover:text-[#FE299E] transition-colors underline cursor-pointer"
                >
                  Want something like this? Book a sprint
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── SPREAD 04: CUSTODIA BANK (OPEN DUAL PLATES) ── */}
        <div className="space-y-12 pt-12 border-t border-[#D3C7B5]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                  04 / Banking
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Chartered Wyoming bank
                </Badge>
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Custodia Bank: the core banking platform and the brand
              </h3>
              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                First and only designer. I shipped the new brand and marketing site in 4 days, then the core banking app in 30 days, ahead of the bank's Federal Reserve master account review. One interface for Fedwire, money market funds, and Bitcoin custody. I also drew the horse mark.
              </p>
            </div>

            <Link href="/case-studies/custodia">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.16em] font-bold rounded-full px-8 py-4 shadow-lg shrink-0 cursor-pointer">
                Open Custodia Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* Open Dual Widescreen Plates (No Outer Card) */}
          <Link href="/case-studies/custodia">
            <div className="group cursor-pointer space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] shadow-2xl p-4 flex items-center justify-center">
                  <img loading="lazy" decoding="async"
                    src="/images/custodia/mm-01.png"
                    alt="Custodia Bank Institutional Money Market Dashboard"
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="lg:col-span-5 rounded-3xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] shadow-2xl p-4 flex items-center justify-center">
                  <img loading="lazy" decoding="async"
                    src="/images/custodia/utxo-1.png"
                    alt="Custodia Bank Bitcoin UTXO Manager Console"
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Open Specs Bar with Hairline Divider */}
              <div className="flex flex-wrap items-center justify-between text-sm sm:text-base text-[#6B554D] font-sans pt-6 border-t border-[#D3C7B5]">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <span className="font-bold text-[#281B16]">4-Day Rebrand Sprint</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">30-Day Fed App</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#281B16]">Hand-drawn brand mark</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  Read the case study &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 05: "COLORS TYPE GRIDS" DESIGN MANIFESTO ── */}
        <div id="manifesto-blueprint" className="space-y-12 pt-12 border-t border-[#D3C7B5]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
                  05 / Design writing
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-xs font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Essay · built in CSS
                </Badge>
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Albers &amp; Vignelli in CSS — Colors Type Grids
              </h3>
              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed">
                My essay on grids, type, and color, laid out in CSS as one large poster. It argues that disciplined spacing is what keeps an interface from looking like generic AI output.
              </p>
            </div>

            <Link href="/case-studies/colors-type-grids">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.16em] font-bold rounded-full px-8 py-4 shadow-lg shrink-0 cursor-pointer">
                Read the essay &rarr;
              </Button>
            </Link>
          </div>

          {/* Interactive Poster Component (Zero Mobile Trapping) */}
          <ColorsTypeGridsViewer />
        </div>

        {/* ── SPREAD 06: ENTERPRISE GIANTS (OPEN EDITORIAL SPLIT) ── */}
        <div className="space-y-12 pt-12 border-t border-[#D3C7B5]">
          <div className="space-y-3">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E]">
              06 / Enterprise
            </span>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
              UnitedHealth Group &amp; Walmart
            </h3>
            <p className="text-xl sm:text-2xl text-[#6B554D] font-sans max-w-4xl leading-relaxed">
              Design at very large scale: patient apps used by 35M+ people, and internal search for 3M employees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-4">
            {/* UnitedHealth Group (Open Showcase) */}
            <Link href="/case-studies/unitedhealth">
              <div className="group cursor-pointer space-y-6">
                <div className="rounded-3xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] shadow-2xl p-4 flex items-center justify-center">
                  <img loading="lazy" decoding="async"
                    src="/artwork/enterprise-health.png"
                    alt="UnitedHealth Native App"
                    className="w-full h-auto max-h-[380px] object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs sm:text-sm font-bold text-[#FE299E] uppercase tracking-wider">
                      35M+ patients
                    </span>
                    <Badge variant="outline" className="border-[#D3C7B5] text-xs font-sans font-bold uppercase tracking-wider bg-[#F2EAE0] text-[#281B16]">
                      iOS &amp; Android
                    </Badge>
                  </div>
                  <h4 className="text-3xl font-serif font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors leading-tight">
                    UnitedHealth Group / Optum: flagship patient apps
                  </h4>
                  <p className="text-base sm:text-lg text-[#6B554D] font-sans leading-relaxed">
                    Principal designer for UHG&apos;s flagship iOS and Android apps (35M+ patients, 400K+ employees). Pushed for Apple Health adoption across UHG, with an estimated impact in the hundreds of millions.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D3C7B5] flex items-center justify-between text-sm font-sans">
                  <span className="text-[#281B16] font-bold">Optum · 2020–2021</span>
                  <span className="text-[#FE299E] font-bold group-hover:underline">Open Case Study &rarr;</span>
                </div>
              </div>
            </Link>

            {/* Walmart Global Tech (Open Showcase) */}
            <Link href="/case-studies/walmart">
              <div className="group cursor-pointer space-y-6">
                <div className="rounded-3xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] shadow-2xl p-4 flex items-center justify-center">
                  <img loading="lazy" decoding="async"
                    src="/images/walmart/walmart-search-results.png"
                    alt="Walmart Enterprise Graph Search"
                    className="w-full h-auto max-h-[380px] object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs sm:text-sm font-bold text-[#FE299E] uppercase tracking-wider">
                      3M employees
                    </span>
                    <Badge variant="outline" className="border-[#D3C7B5] text-xs font-sans font-bold uppercase tracking-wider bg-[#F2EAE0] text-[#281B16]">
                      Enterprise search
                    </Badge>
                  </div>
                  <h4 className="text-3xl font-serif font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors leading-tight">
                    Walmart: internal enterprise search
                  </h4>
                  <p className="text-base sm:text-lg text-[#6B554D] font-sans leading-relaxed">
                    Senior UX/UI Architect at PredictiveUX. Led UX architecture for Walmart&apos;s internal enterprise search and set new search patterns for the world&apos;s largest private workforce.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D3C7B5] flex items-center justify-between text-sm font-sans">
                  <span className="text-[#281B16] font-bold">Via PredictiveUX · 2021–2022</span>
                  <span className="text-[#FE299E] font-bold group-hover:underline">Open Case Study &rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROOF OF WORK: public GitHub (numbers from the GitHub API, Oct 2026) ── */}
      <section id="code" className="py-24 md:py-36 border-t border-[#D3C7B5] bg-[#E4DACB]/40">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7 space-y-5">
              <p className="font-sans text-sm uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> Code
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.05]">
                A designer who ships code.
              </h2>
              <p className="text-lg sm:text-xl text-[#5C4840] font-sans leading-relaxed max-w-2xl">
                I'm a designer first, but I build what I design. Day to day that's TypeScript with React and Next.js, plus Node,
                some Python, and a little Rust. Most of my client work is private. These repos are public.
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
        </div>
      </section>

      {/* ── Video Showcase & Live Demos ── */}
      <VideoShowcase />

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
            {/* Maldives */}
            <div
              onClick={() =>
                setLightboxImage({
                  src: "/images/personal/kyle-victoria-maldives-end-the-fed.jpg",
                  caption: "Maldives. Catching up on monetary history while designing Bitcoin custody at Custodia.",
                })
              }
              className="lg:col-span-7 group cursor-zoom-in space-y-4"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D3C7B5] bg-[#F2EAE0]">
                <img loading="lazy" decoding="async"
                  src="/images/personal/kyle-victoria-maldives-end-the-fed.jpg"
                  alt="Kyle Cyree reading on an overwater deck in the Maldives"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#110f0e]/85 backdrop-blur-md text-white text-xs font-sans font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FE299E]" /> Full Resolution
                </div>
              </div>
              <div className="space-y-1.5 px-1">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#FE299E]">
                    Maldives
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                  Homework for a bank job
                </h3>
                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  Reading up on the history of money while I was designing settlement and Bitcoin custody for Custodia Bank.
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
                  Victoria is my partner in all of it, and the reason Superstar exists.
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

            {/* Overwater Steps: Radical Autonomy */}
            <div
              onClick={() =>
                setLightboxImage({
                  src: "/images/personal/kyle-victoria-overwater-steps.jpg",
                  caption: "Indian Ocean. Time off is when the big structural ideas show up.",
                })
              }
              className="group cursor-zoom-in space-y-4"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D3C7B5] bg-[#F2EAE0]">
                <img loading="lazy" decoding="async"
                  src="/images/personal/kyle-victoria-overwater-steps.jpg"
                  alt="Overwater steps in the Maldives"
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
