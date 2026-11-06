import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ZoomIn,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import ClientLogoBar from "@/components/chb/client-logo-bar";
import ExperienceSection from "@/components/chb/experience-section";
import TechStack from "@/components/chb/tech-stack";
import TestimonialsSection from "@/components/chb/testimonials-section";
import SprintCallout from "@/components/chb/sprint-callout";
import { openContactModal } from "@/lib/contact-events";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

type DomainFilter = "all" | "enterprise" | "ai" | "design";

interface CatalogStudy {
  slug: string;
  num: string;
  client: string;
  title: string;
  domain: DomainFilter;
  domainLabel: string;
  scaleBadge: string;
  timeline: string;
  summary: string;
  thumb: string;
  liveUrl?: string;
}

const ALL_CATALOG_STUDIES: CatalogStudy[] = [
  {
    slug: "custodia",
    num: "01",
    client: "Custodia Bank",
    title: "Institutional Bitcoin Custody & Multi-Sig Treasury Platform",
    domain: "enterprise",
    domainLabel: "Regulated Banking",
    scaleBadge: "1st Product Designer · SPDI Bank",
    timeline: "2023 – 2024",
    summary:
      "Foundational digital asset custody ceremony, multi-party quorum approvals, and BSA/AML compliance workbench for Kaitlin Long's regulated Wyoming bank.",
    thumb: "/images/custodia/mm-01.png",
  },
  {
    slug: "unitedhealth",
    num: "02",
    client: "UnitedHealth Group (Optum)",
    title: "Unified Patient Care Navigation & Clinical Pharmacy Ecosystem",
    domain: "enterprise",
    domainLabel: "Enterprise Healthcare",
    scaleBadge: "35M+ Active Patients · WCAG AAA",
    timeline: "2021 – 2023",
    summary:
      "End-to-end care navigation, prescription fulfillment, and benefits clarity architecture serving over 35 million patients across Optum digital health.",
    thumb: "/images/uhg/uhg-hero.png",
  },
  {
    slug: "walmart",
    num: "03",
    client: "Walmart Global Tech",
    title: "Next-Gen Store Operations & Supply Chain Fulfillment Platform",
    domain: "enterprise",
    domainLabel: "Global Logistics",
    scaleBadge: "3M+ Associates · 4,700+ Stores",
    timeline: "2019 – 2021",
    summary:
      "High-frequency mobile floor operations, pick-path ergonomics, and real-time inventory systems deployed to 3 million associates worldwide.",
    thumb: "/images/walmart/walmart-hero.png",
  },
  {
    slug: "pipes",
    num: "04",
    client: "Colon Hyphen Bracket",
    title: "Pipes Protocol: Sovereign Knowledge Marketplace, Hash Atelier & SEMI (;-])",
    domain: "ai",
    domainLabel: "Sovereign AI Protocol",
    scaleBadge: "Web Protocol · MCP · HTTP 402",
    timeline: "2024 – 2026",
    summary:
      "Content-addressed publishing protocol where domain curators deed pipe\\ namespaces, refine essays with SEMI (;-]), and earn 70% royalties via MCP.",
    thumb: "/images/pipes/pipes-hero.png",
    liveUrl: "https://pipes.pink",
  },
  {
    slug: "chicuinaco",
    num: "05",
    client: "Hacienda & Restaurante Chicuinaco",
    title: "Chicuinaco: Sovereign Eco-Estate, 100-Guest Venue & 4-Language Brochure System",
    domain: "design",
    domainLabel: "Design Systems & Brand",
    scaleBadge: "Live Production · 4 Languages · Bitcoin",
    timeline: "2026",
    summary:
      "Ground-up digital transformation of a 65-acre Salvadoran mountain estate: Cormorant editorial typography, 4-language i18n, zero-card hairline grid, and Bitcoin payments.",
    thumb: "/images/chicuinaco/hero-interface.png",
    liveUrl: "https://www.chicuinaco.com",
  },
  {
    slug: "marigold",
    num: "06",
    client: "Colon Hyphen Bracket",
    title: "Marigold: Zero-Knowledge DuckDB-WASM & WebGPU Analytics Workbench",
    domain: "ai",
    domainLabel: "Client-Side AI & Data",
    scaleBadge: "500k+ Rows In-Browser · Zero-Knowledge",
    timeline: "2025 – 2026",
    summary:
      "Browser-native civic and financial intelligence studio executing SQL over 500k+ rows locally via DuckDB-WASM, WebGPU, and AES-GCM-256 encryption.",
    thumb: "/images/marigold/marigold-hero.png",
    liveUrl: "https://marigold.colonhyphenbracket.pink",
  },
  {
    slug: "cassandra",
    num: "07",
    client: "Colon Hyphen Bracket",
    title: "Cassandra: Executive Career Strategist & Compensation Intelligence",
    domain: "ai",
    domainLabel: "Applied AI Product",
    scaleBadge: "Multi-Agent Career Engine",
    timeline: "2025 – 2026",
    summary:
      "AI-powered executive positioning, role-fit diagnostics, and compensation negotiation workbench built on Albers warm-sandstone typography.",
    thumb: "/images/cassandra/cassandra_combined.png",
    liveUrl: "https://cassandra.colonhyphenbracket.pink",
  },
  {
    slug: "superstar",
    num: "08",
    client: "Colon Hyphen Bracket",
    title: "Superstar: Dual-Portal Neurodivergent Support & Coaching Platform",
    domain: "ai",
    domainLabel: "Healthcare & Accessibility",
    scaleBadge: "Dual-Portal · Low-Sensory UX",
    timeline: "2025 – 2026",
    summary:
      "Synchronized participant and job-coach portals with calm low-sensory typography, visual task decomposition, and accessible progress tracking.",
    thumb: "/images/superstar/03_superstar_prompt_crafter_with_gemini_ideas.png",
    liveUrl: "https://superstar.colonhyphenbracket.pink",
  },
  {
    slug: "clubhouse1099",
    num: "09",
    client: "Clubhouse 1099",
    title: "Voice-First National Venture Scout Network & Whisper Deal Ledger",
    domain: "ai",
    domainLabel: "Venture & Voice AI",
    scaleBadge: "535 Capped Seats · Whisper AI",
    timeline: "2025",
    summary:
      "Geographically capped 535-seat scout platform with in-browser voice memo capture, Whisper transcription, and automated 10% commission & IRS mileage logs.",
    thumb: "/images/clubhouse1099/01_clubhouse1099_landing_hero.png",
    liveUrl: "https://clubhouse1099.com",
  },
  {
    slug: "foodler",
    num: "10",
    client: "Foodler (Acquired by Grubhub)",
    title: "Consumer Marketplace Checkout, Live Delivery Tracker & Merchant Suite",
    domain: "enterprise",
    domainLabel: "Consumer Marketplace",
    scaleBadge: "$500M+ Grubhub Exit",
    timeline: "2013 – 2015",
    summary:
      "Web and mobile ordering conversion architecture, loyalty rewards, and merchant fulfillment tools leading up to Grubhub's acquisition.",
    thumb: "/images/studio/studio-regulated-monolith.png",
  },
  {
    slug: "ultralinq",
    num: "11",
    client: "UltraLinq Healthcare Solutions",
    title: "Cloud PACS Medical Imaging & Structured Clinical Reporting",
    domain: "enterprise",
    domainLabel: "Diagnostic Imaging",
    scaleBadge: "35% Faster Sign-Off · DICOM",
    timeline: "2015 – 2017",
    summary:
      "Dark-room optimized DICOM viewer and structured cardiology/vascular reporting engine used by hospitals and imaging centers worldwide.",
    thumb: "/images/uhg/uhg-hero.png",
  },
  {
    slug: "highdraw",
    num: "12",
    client: "High Draw Golf",
    title: "High Draw: Precision Golf Telemetry & Club Fitting Monograph",
    domain: "design",
    domainLabel: "Design Systems & Brand",
    scaleBadge: "Editorial Commerce & Telemetry",
    timeline: "2025",
    summary:
      "Bespoke club-fitting and launch-monitor telemetry platform blending heritage links typography with real-time ball-flight physics.",
    thumb: "/images/highdraw/01_highdraw_hero_pebble_beach.png",
  },
  {
    slug: "colors-type-grids",
    num: "13",
    client: "Colon Hyphen Bracket",
    title: "Colors, Type & Grids: The Accént & Vignelli Design System Monograph",
    domain: "design",
    domainLabel: "Design Systems & Brand",
    scaleBadge: "Foundational Token Architecture",
    timeline: "2024 – 2026",
    summary:
      "Codifying Josef Albers' Interaction of Color, Massimo Vignelli's Swiss grids, and hairline spatial governance into reusable React/Tailwind primitives.",
    thumb: "/images/cassandra/colors-type-grids.jpg",
  },
];

const PIPES_PLATES = [
  {
    id: "protocol",
    num: "01",
    label: "Pipes.Pink Protocol",
    title: "Pipes.Pink Web Protocol: A Sovereign Library for Human Knowledge",
    caption:
      "Domain experts claim deeded pipe\\ namespaces ($9/yr), publish verified primary-source canons with SHA-256 provenance, and earn 70% royalties when readers subscribe or AI agents query via MCP.",
    src: "/images/pipes/pipes-hero.png",
  },
  {
    id: "hash",
    num: "02",
    label: "Hash Atelier + SEMI (;-])",
    title: "Integrated Hash Sanctuary & SEMI (;-]) Socratic Sparring Partner",
    caption:
      "Private-by-default epistemic writing vault inside /write where authors spar with SEMI (;-]), ingest Substack archives in one click, and cryptographically seal finished canons.",
    src: "/images/pipes/pipes-hash-studio-semi.png",
  },
  {
    id: "namespace",
    num: "03",
    label: "Sovereign Pipe Room",
    title: "pipe\\bitcoin Primary-Source Canon & Greater (>) WebGPU Chat",
    caption:
      "Every namespace room pairs a primary-source index with interactive citation inspection, 3D knowledge galaxy visualization, and local WebGPU synthesis.",
    src: "/images/pipes/pipes-namespace-bitcoin.png",
  },
  {
    id: "mcp",
    num: "04",
    label: "MCP & HTTP 402 Hub",
    title: "Developer Hub (v1.0): Model Context Protocol & HTTP 402 Payment Gates",
    caption:
      "Exposes immutable context graphs to Claude Desktop, Cursor, and autonomous agents with cryptographic attribution and automated 70/30 royalty splits.",
    src: "/images/pipes/pipes-dev-mcp-hub.png",
  },
];

const APPLIED_AI_SHOWCASE = [
  {
    id: "chicuinaco",
    num: "01",
    tag: "Sovereign Hospitality & Brand System",
    title: "Hacienda & Restaurante Chicuinaco",
    subtitle: "65-Acre Mountain Estate · 100-Guest Venue · 4-Language i18n · Bitcoin Accepted",
    summary:
      "Transformed a family-owned Salvadoran mountain estate and balsam reserve in the Cordillera del Bálsamo into an international editorial publication with Cormorant typography, zero-card hairline grids, 4-locale i18n (EN/ES/FR/DE), and 100% Lighthouse performance.",
    src: "/images/chicuinaco/hero-interface.png",
    secondarySrc: "/images/chicuinaco/four-pillars.png",
    caseStudySlug: "chicuinaco",
    liveUrl: "https://www.chicuinaco.com",
    specs: [
      { k: "ARCHITECTURE", v: "Zero-Card Hairline Grid" },
      { k: "LOCALIZATION", v: "4 Languages (EN/ES/FR/DE)" },
      { k: "PERFORMANCE", v: "100% Lighthouse · <1.2s LCP" },
      { k: "SETTLEMENT", v: "Bitcoin Lightning + WhatsApp" },
    ],
  },
  {
    id: "marigold",
    num: "02",
    tag: "Zero-Knowledge Browser Analytics",
    title: "Marigold Analytics Workbench",
    subtitle: "DuckDB-WASM · Apache Arrow · WebGPU · AES-GCM-256",
    summary:
      "Executes complex analytical SQL queries over 500,000+ rows of civic, financial, and healthcare telemetry directly inside the browser tab with zero server round-trips and client-side Web Crypto encryption.",
    src: "/images/marigold/marigold-hero.png",
    secondarySrc: "/images/marigold/02_marigold_workspace_dashboard_kanban.png",
    caseStudySlug: "marigold",
    liveUrl: "https://marigold.colonhyphenbracket.pink",
    specs: [
      { k: "ENGINE", v: "DuckDB-WASM + Web Workers" },
      { k: "THROUGHPUT", v: "500k+ Rows In-Browser" },
      { k: "PRIVACY", v: "AES-GCM-256 Zero-Knowledge" },
      { k: "SYNTHESIS", v: "Gemini 2.5 + Local WebGPU" },
    ],
  },
  {
    id: "cassandra",
    num: "03",
    tag: "Executive Career & Role Intelligence",
    title: "Cassandra Career Strategist",
    subtitle: "Multi-Agent Positioning · Compensation Modeling · Albers Palette",
    summary:
      "Pairs executive jobseekers with an AI career strategist that audits role-fit, rewrites narrative positioning from verified career artifacts, and models total compensation packages.",
    src: "/images/cassandra/cassandra_combined.png",
    secondarySrc: "/images/superstar/03_superstar_prompt_crafter_with_gemini_ideas.png",
    caseStudySlug: "cassandra",
    liveUrl: "https://cassandra.colonhyphenbracket.pink",
    specs: [
      { k: "AGENTS", v: "Role-Fit & Narrative Engine" },
      { k: "DESIGN SYSTEM", v: "Albers Sandstone & Serif" },
      { k: "COMPENSATION", v: "Live Equity & Base Modeling" },
      { k: "COMPANION", v: "Superstar Dual-Portal UX" },
    ],
  },
];

const PRODUCTION_REPOS = [
  {
    num: "01",
    name: "rorshockbtc / pipes",
    domain: "Sovereign Knowledge Protocol & MCP Gate",
    stack: "TypeScript · React 19 · Drizzle · PostgreSQL · MCP · HTTP 402",
    liveUrl: "https://pipes.pink",
    repoUrl: "https://github.com/rorshockbtc",
    caseStudy: "/case-studies/pipes",
  },
  {
    num: "02",
    name: "rorshockbtc / chicuinaco",
    domain: "4-Language Eco-Estate & 100-Guest Venue Monograph",
    stack: "TypeScript · React 18 · Cormorant Garamond · Framer Motion · JSON-LD",
    liveUrl: "https://www.chicuinaco.com",
    repoUrl: "https://github.com/rorshockbtc/chicuinaco",
    caseStudy: "/case-studies/chicuinaco",
  },
  {
    num: "03",
    name: "rorshockbtc / marigold",
    domain: "Zero-Knowledge DuckDB-WASM Analytics Studio",
    stack: "TypeScript · DuckDB-WASM · Apache Arrow · Web Crypto · Nivo",
    liveUrl: "https://marigold.colonhyphenbracket.pink",
    repoUrl: "https://github.com/rorshockbtc",
    caseStudy: "/case-studies/marigold",
  },
  {
    num: "04",
    name: "rorshockbtc / cassandra-jobseeker",
    domain: "Executive Career & Compensation Intelligence",
    stack: "TypeScript · Next.js · Claude / Gemini · Tailwind CSS · Zod",
    liveUrl: "https://cassandra.colonhyphenbracket.pink",
    repoUrl: "https://github.com/rorshockbtc",
    caseStudy: "/case-studies/cassandra",
  },
  {
    num: "05",
    name: "rorshockbtc / portfolio",
    domain: "Principal Monograph & CHB Studio Architecture",
    stack: "TypeScript · Vite · React · Framer Motion · Tailwind CSS",
    liveUrl: "https://hire.colonhyphenbracket.pink",
    repoUrl: "https://github.com/rorshockbtc/portfolio",
    caseStudy: "/case-studies/colors-type-grids",
  },
];

const FIELD_STUDIES = [
  {
    fig: "FIG. I // HOME BASE",
    title: "Kyle & Victoria",
    location: "United States · Remote & Travel-Ready",
    caption:
      "Grounded in craft, long-form reading, and building software that respects human attention.",
    src: "/images/personal/kyle-victoria-blue-teal-portrait.jpg",
  },
  {
    fig: "FIG. II // HIGH ALTITUDE",
    title: "High Andes Expedition",
    location: "Cordillera Real · Ecuador (15,000+ ft)",
    caption:
      "High-altitude trekking in the Ecuadorian Andes—where systems thinking meets physical endurance.",
    src: "/images/personal/kyle-victoria-andes-market.jpg",
  },
  {
    fig: "FIG. III // LATIN AMERICA",
    title: "Field Research & Architecture",
    location: "Medellín, Colombia & El Salvador",
    caption:
      "Working directly with founders and family estates across the Americas to ship sovereign digital infrastructure.",
    src: "/images/personal/kyle-victoria-colombia-mural.jpg",
  },
];

export default function Portfolio() {
  const [domainFilter, setDomainFilter] = useState<DomainFilter>("all");
  const [activePipesPlate, setActivePipesPlate] = useState(0);
  const [activeAppliedIndex, setActiveAppliedIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    caption?: string;
  } | null>(null);

  useEffect(() => {
    document.title = "Kyle Cyree | Product Architect, Principal Designer & R&D Lead";
  }, []);

  const filteredStudies =
    domainFilter === "all"
      ? ALL_CATALOG_STUDIES
      : ALL_CATALOG_STUDIES.filter((s) => s.domain === domainFilter);

  const currentPipesPlate = PIPES_PLATES[activePipesPlate];
  const currentApplied = APPLIED_AI_SHOWCASE[activeAppliedIndex];

  return (
    <div className="min-h-screen bg-[#EAE0D0] text-[#281B16] selection:bg-[#FE299E] selection:text-white">
      {/* ═══════════════════════════════════════════════════════════════════════
          01 // EDITORIAL HERO — MONUMENTAL SERIF + ARCHITECTURAL PORTRAIT
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="pt-10 sm:pt-16 pb-16 sm:pb-24 px-5 sm:px-10 lg:px-16 border-b border-[#D3C7B5] bg-[#EAE0D0]"
        data-testid="section-hero"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Top Issue / Edition Hairline Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 sm:mb-14 border-b border-[#281B16]">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FE299E]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#281B16] font-medium">
                :-] Product Architect &amp; R&amp;D Lead · Principal Product Designer
              </span>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5C4840]">
              15+ Years · Regulated Banking, 35M+ Healthcare &amp; Sovereign AI
            </div>
          </div>

          {/* Main 12-Col Hero Grid: 8 Cols Monumental Typography / 4 Cols Smaller Architectural Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
            {/* Left 8 Columns */}
            <Reveal className="lg:col-span-8">
              <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-[76px] text-[#281B16] tracking-[-0.028em] leading-[0.97] mb-8">
                Architect the system.
                <br />
                <span className="italic font-normal text-[#FE299E]">
                  Design the interface.
                </span>
                <br />
                Ship the prototype.
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-[#281B16] leading-[1.52] max-w-[58ch] mb-6">
                I&apos;m <strong className="font-medium">Kyle Cyree</strong>—a Principal Product Designer and Systems Architect with 15+ years turning complex, high-trust workflows into calm, durable software.
              </p>

              <p className="font-sans text-sm sm:text-[15px] text-[#4A3A32] leading-[1.72] max-w-[62ch] mb-10">
                First product designer at{" "}
                <Link
                  href="/case-studies/custodia"
                  className="text-[#281B16] font-medium underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]"
                >
                  Custodia Bank
                </Link>
                , Principal Lead for{" "}
                <Link
                  href="/case-studies/unitedhealth"
                  className="text-[#281B16] font-medium underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]"
                >
                  35M+ patients at UnitedHealth Group
                </Link>
                , Staff Designer for{" "}
                <Link
                  href="/case-studies/walmart"
                  className="text-[#281B16] font-medium underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]"
                >
                  3M+ associates at Walmart
                </Link>
                , and founder of{" "}
                <Link
                  href="/studio"
                  className="text-[#281B16] font-medium underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]"
                >
                  Colon Hyphen Bracket
                </Link>{" "}
                (shipping{" "}
                <a
                  href="https://pipes.pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#281B16] font-medium underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]"
                >
                  pipes.pink
                </a>
                ,{" "}
                <Link
                  href="/case-studies/marigold"
                  className="text-[#281B16] font-medium underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]"
                >
                  Marigold
                </Link>
                , and{" "}
                <Link
                  href="/case-studies/chicuinaco"
                  className="text-[#281B16] font-medium underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]"
                >
                  Chicuinaco
                </Link>
                ).
              </p>

              {/* Primary CTA Row */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/case-studies/custodia"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-mono text-[11px] uppercase tracking-[0.16em] font-medium transition-all no-underline"
                  data-testid="button-start-walkthrough-hero"
                >
                  <span>Case Study Walkthrough (01 / 13)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-[#F2EAE0] hover:bg-[#281B16] text-[#281B16] hover:text-[#F2EAE0] border border-[#281B16]/25 font-mono text-[11px] uppercase tracking-[0.16em] font-medium transition-colors no-underline"
                  data-testid="button-explore-studio-hero"
                >
                  <span>Explore CHB R&amp;D Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="/resumes/kyle-cyree-resume.pdf"
                  download="Resume - Kyle Cyree.pdf"
                  target="_blank"
                  rel="noopener"
                  className="editorial-underline inline-flex items-center gap-2 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#281B16] font-medium no-underline"
                  data-testid="button-download-resume-hero"
                >
                  <Download className="w-3.5 h-3.5 text-[#FE299E]" />
                  <span>Download CV</span>
                </a>

                <button
                  type="button"
                  onClick={() => openContactModal("Full-time role (Product Architect / Staff)")}
                  className="editorial-underline inline-flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#5C4840] hover:text-[#281B16] bg-transparent border-none cursor-pointer"
                  data-testid="button-contact-hero"
                >
                  <span>Schedule Intro →</span>
                </button>
              </div>
            </Reveal>

            {/* Right 4 Columns: Smaller Architectural Portrait Plate */}
            <Reveal delay={0.12} className="lg:col-span-4 flex flex-col items-start lg:items-end">
              <div className="w-full max-w-[300px] sm:max-w-[320px] lg:ml-auto border border-[#D3C7B5] bg-[#F2EAE0] p-3">
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#D3C7B5] font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
                  <span>FIG. 00 // PRINCIPAL ARCHITECT</span>
                  <span className="text-[#281B16]">MBA · MFA</span>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#DFD4C4]">
                  <img
                    src="/images/kyle-portrait.jpg"
                    alt="Kyle Cyree — Product Architect & Principal Product Designer"
                    className="w-full h-full object-cover object-top"
                    data-testid="img-hero-portrait"
                  />
                </div>
                <div className="pt-3 mt-2.5 border-t border-[#D3C7B5] flex items-center justify-between gap-2">
                  <div>
                    <div className="font-serif text-lg text-[#281B16] leading-tight">
                      Kyle Cyree
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C4840] mt-0.5">
                      UNC MBA · Emerson MFA
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#281B16]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2A7B5C]" />
                    Available
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom of Hero: 4-Column Architectural Hairline Spec Grid (No Rounded Cards) */}
          <Stagger className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#281B16] divide-y sm:divide-y-0 sm:divide-x divide-[#D3C7B5]">
            <StaggerItem className="py-6 sm:pr-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840] mb-2">
                01 // Target Leadership Scope
              </div>
              <div className="font-serif text-xl sm:text-2xl text-[#281B16] leading-snug">
                Principal / Staff Designer &amp; Product Architect
              </div>
              <p className="font-sans text-xs text-[#5C4840] mt-1.5 leading-relaxed">
                Player-coach architecture, 0-to-1 R&amp;D, and design systems governance.
              </p>
            </StaggerItem>

            <StaggerItem className="py-6 sm:px-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840] mb-2">
                02 // Regulated Enterprise Scale
              </div>
              <div className="font-serif text-xl sm:text-2xl text-[#281B16] leading-snug">
                35M+ Patients · 3M+ Associates · SPDI Banking
              </div>
              <p className="font-sans text-xs text-[#5C4840] mt-1.5 leading-relaxed">
                UnitedHealth Group, Walmart Global Tech, Custodia Bank, Fidelity &amp; Foodler.
              </p>
            </StaggerItem>

            <StaggerItem className="py-6 sm:px-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840] mb-2">
                03 // Shipped Code &amp; AI Stack
              </div>
              <div className="font-serif text-xl sm:text-2xl text-[#281B16] leading-snug">
                Figma Systems → TypeScript, React &amp; MCP
              </div>
              <p className="font-sans text-xs text-[#5C4840] mt-1.5 leading-relaxed">
                Next.js, DuckDB-WASM, WebGPU, Framer Motion, Tailwind &amp; Rust/Tauri.
              </p>
            </StaggerItem>

            <StaggerItem className="py-6 sm:pl-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840] mb-2">
                04 // Academic Pedigree
              </div>
              <div className="font-serif text-xl sm:text-2xl text-[#281B16] leading-snug">
                UNC MBA · Emerson MFA · Texas Tech BA
              </div>
              <p className="font-sans text-xs text-[#5C4840] mt-1.5 leading-relaxed">
                Dual graduate training uniting corporate finance with narrative &amp; visual craft.
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Pedigree Strip */}
      <ClientLogoBar />

      {/* ═══════════════════════════════════════════════════════════════════════
          02 // SELECTED WORK — FOUR DEFINING ARCHITECTURAL PILLARS
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="selected-work"
        className="py-24 sm:py-32 px-5 sm:px-10 lg:px-16 border-b border-[#D3C7B5] bg-[#EAE0D0]"
        data-testid="section-selected-work"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-[#281B16]">
            <div className="max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840] mb-4">
                02 // Selected Work · Four Architectural Pillars
              </div>
              <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-[#281B16] tracking-[-0.025em] leading-[1.03]">
                High-consequence systems built for{" "}
                <span className="italic font-normal text-[#FE299E]">clarity &amp; trust.</span>
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-[15px] text-[#4A3A32] max-w-md leading-[1.68]">
              Four deep-dive monographs spanning regulated institutional custody, 38M-user enterprise platforms, applied AI workbenches, and the flagship Pipes.Pink protocol.
            </p>
          </Reveal>

          {/* ─────────────────────────────────────────────────────────────────
              PILLAR 01 // CUSTODIA BANK
             ───────────────────────────────────────────────────────────────── */}
          <div className="py-20 sm:py-24 border-b border-[#281B16]" data-testid="pillar-custodia">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#5C4840] tabular-nums">
                    01
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840]">
                    Pillar I · Regulated Digital Asset Banking &amp; Custody
                  </span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#281B16]">
                  Custodia Bank · 2023 – 2024
                </span>
              </div>

              <h3 className="font-serif font-light text-4xl sm:text-5xl lg:text-[56px] text-[#281B16] tracking-[-0.025em] leading-[1.03] max-w-4xl mb-10">
                Founding Product Architecture for an{" "}
                <span className="italic font-normal">Institutional Bitcoin Custody Bank.</span>
              </h3>

              {/* 4-Col Hairline Spec Bar (Chicuinaco-style) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-[#D3C7B5] divide-y sm:divide-y-0 sm:divide-x divide-[#D3C7B5] mb-12">
                <div className="py-4 pr-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840]">
                    Role
                  </div>
                  <div className="font-serif text-lg sm:text-xl text-[#281B16] mt-0.5">
                    1st Product Designer
                  </div>
                </div>
                <div className="py-4 sm:px-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840]">
                    Charter
                  </div>
                  <div className="font-serif text-lg sm:text-xl text-[#281B16] mt-0.5">
                    Wyoming SPDI Depository
                  </div>
                </div>
                <div className="py-4 sm:px-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840]">
                    Core Workflow
                  </div>
                  <div className="font-serif text-lg sm:text-xl text-[#281B16] mt-0.5">
                    Multi-Sig Quorum &amp; Cold Storage
                  </div>
                </div>
                <div className="py-4 sm:pl-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840]">
                    Deliverable
                  </div>
                  <div className="font-serif text-lg sm:text-xl text-[#281B16] mt-0.5">
                    Custody Platform &amp; Design System
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left 5 Cols: Narrative & Numbered Hairline Ledger */}
              <Reveal className="lg:col-span-5 space-y-6">
                <p className="font-serif text-xl sm:text-[22px] text-[#281B16] leading-[1.52]">
                  Hired as the first product designer at Kaitlin Long&apos;s Custodia Bank to translate federal and state banking regulations into an institutional-grade Bitcoin custody and US dollar treasury platform.
                </p>

                <div className="divide-y divide-[#D3C7B5] border-t border-b border-[#D3C7B5]">
                  <div className="py-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840] mb-1">
                      01.A // Multi-Party Quorum Ceremony
                    </div>
                    <p className="font-sans text-sm text-[#4A3A32] leading-[1.65]">
                      Designed deterministic hardware-key signing ceremonies, time-locked cold storage withdrawals, and role-based corporate treasury approvals.
                    </p>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840] mb-1">
                      01.B // BSA/AML &amp; Examiner Auditability
                    </div>
                    <p className="font-sans text-sm text-[#4A3A32] leading-[1.65]">
                      Built immutable audit trails and real-time transaction risk views that satisfied both corporate CFOs and bank examiners.
                    </p>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840] mb-1">
                      01.C // Unified Enterprise Design System
                    </div>
                    <p className="font-sans text-sm text-[#4A3A32] leading-[1.65]">
                      Established Custodia&apos;s foundational token architecture and React component library across customer and internal ops portals.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/case-studies/custodia"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#281B16] hover:bg-[#FE299E] text-[#F2EAE0] hover:text-white font-mono text-[11px] uppercase tracking-[0.16em] font-medium transition-colors no-underline"
                    data-testid="link-pillar-custodia"
                  >
                    <span>Read Custodia Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Reveal>

              {/* Right 7 Cols: Un-nested Architectural Plates */}
              <Reveal delay={0.1} className="lg:col-span-7 space-y-4">
                <div
                  className="group relative border border-[#D3C7B5] bg-[#F2EAE0] p-3 cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/custodia/mm-01.png",
                      title: "Custodia Bank — Institutional Custody & Treasury Dashboard",
                      caption:
                        "Unified multi-signature Bitcoin custody and US Dollar settlement workbench designed for corporate treasurers.",
                    })
                  }
                >
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#D3C7B5] font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840]">
                    <span>PLATE 01.1 // INSTITUTIONAL TREASURY &amp; CUSTODY WORKBENCH</span>
                    <span className="inline-flex items-center gap-1 text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                      <ZoomIn className="w-3 h-3" /> Inspect Plate
                    </span>
                  </div>
                  <div className="overflow-hidden bg-[#1A1310] aspect-[16/10]">
                    <img
                      src="/images/custodia/mm-01.png"
                      alt="Custodia Bank Institutional Custody Interface"
                      className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="group border border-[#D3C7B5] bg-[#F2EAE0] p-3 cursor-pointer"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/custodia/utxo-1.png",
                        title: "Custodia Bank — Cold Storage UTXO & Quorum Ceremony",
                        caption: "Multi-party hardware key verification and withdrawal governance.",
                      })
                    }
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840] pb-2 mb-2 border-b border-[#D3C7B5]">
                      PLATE 01.2 // MULTI-SIG UTXO QUORUM FLOW
                    </div>
                    <div className="overflow-hidden bg-[#1A1310] aspect-[16/10]">
                      <img
                        src="/images/custodia/utxo-1.png"
                        alt="Custodia Multi-Sig Quorum Flow"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div
                    className="group border border-[#D3C7B5] bg-[#F2EAE0] p-3 cursor-pointer"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/custodia/mm-02.png",
                        title: "Custodia Bank — Money Market & Fedwire Settlement",
                        caption: "Tokenized typography, status badges, and high-density table primitives.",
                      })
                    }
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840] pb-2 mb-2 border-b border-[#D3C7B5]">
                      PLATE 01.3 // FEDWIRE &amp; MONEY MARKET RAILS
                    </div>
                    <div className="overflow-hidden bg-[#1A1310] aspect-[16/10]">
                      <img
                        src="/images/custodia/mm-02.png"
                        alt="Custodia Bank Money Market Rails"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              PILLAR 02 // NATIONAL HEALTHCARE & RETAIL SCALE (UHG 35M+ & WALMART 3M+)
             ───────────────────────────────────────────────────────────────── */}
          <div className="py-20 sm:py-24 border-b border-[#281B16]" data-testid="pillar-enterprise-scale">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#5C4840] tabular-nums">
                    02
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840]">
                    Pillar II · National Healthcare &amp; Global Retail Operations
                  </span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#281B16]">
                  38M+ Combined Active Users
                </span>
              </div>

              <h3 className="font-serif font-light text-4xl sm:text-5xl lg:text-[56px] text-[#281B16] tracking-[-0.025em] leading-[1.03] max-w-4xl mb-12">
                Designing where every second and pixel compounds across{" "}
                <span className="italic font-normal">tens of millions of lives.</span>
              </h3>
            </Reveal>

            {/* 2-Column Hairline Split: UnitedHealth Group (Left) | Walmart Global Tech (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-b border-[#D3C7B5] divide-y lg:divide-y-0 lg:divide-x divide-[#D3C7B5]">
              {/* 02.A: UnitedHealth Group */}
              <Reveal className="py-10 lg:pr-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840]">
                      02.A // UNITEDHEALTH GROUP (OPTUM)
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#281B16]">
                      35M+ PATIENTS · 2021–2023
                    </span>
                  </div>

                  <h4 className="font-serif font-normal text-3xl sm:text-4xl text-[#281B16] tracking-[-0.02em] leading-[1.1] mb-4">
                    Unified Patient Care Navigation &amp; Clinical Pharmacy
                  </h4>

                  <p className="font-sans text-sm sm:text-[15px] text-[#4A3A32] leading-[1.7] mb-6">
                    Led cross-pillar product architecture unifying fragmented care portals, prescription fulfillment, and benefits clarity for over 35 million patients under strict HIPAA and WCAG AAA accessibility mandates.
                  </p>

                  <div
                    className="group border border-[#D3C7B5] bg-[#F2EAE0] p-3 mb-6 cursor-pointer"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/uhg/uhg-hero.png",
                        title: "UnitedHealth Group (Optum) — 35M+ Patient Care Portal",
                        caption:
                          "Accessible care navigation, pharmacy fulfillment, and clinical benefits clarity.",
                      })
                    }
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840] pb-2 mb-2 border-b border-[#D3C7B5]">
                      <span>FIG. 02.A // OPTUM PATIENT &amp; PHARMACY ECOSYSTEM</span>
                      <span className="group-hover:text-[#FE299E]">Inspect →</span>
                    </div>
                    <div className="overflow-hidden aspect-[16/10] bg-[#DFD4C4]">
                      <img
                        src="/images/uhg/uhg-hero.png"
                        alt="UnitedHealth Group Patient Portal"
                        className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#D3C7B5]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840]">
                    Principal Product Designer
                  </span>
                  <Link
                    href="/case-studies/unitedhealth"
                    className="editorial-underline inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#281B16] font-medium no-underline"
                    data-testid="link-pillar-uhg"
                  >
                    <span>Inspect UHG Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FE299E]" />
                  </Link>
                </div>
              </Reveal>

              {/* 02.B: Walmart Global Tech */}
              <Reveal delay={0.1} className="py-10 lg:pl-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840]">
                      02.B // WALMART GLOBAL TECH
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#281B16]">
                      3M+ ASSOCIATES · 2019–2021
                    </span>
                  </div>

                  <h4 className="font-serif font-normal text-3xl sm:text-4xl text-[#281B16] tracking-[-0.02em] leading-[1.1] mb-4">
                    Global Store Operations &amp; Supply Chain Fulfillment
                  </h4>

                  <p className="font-sans text-sm sm:text-[15px] text-[#4A3A32] leading-[1.7] mb-6">
                    Architected mission-critical floor operations, inventory replenishment, and high-speed pick-path mobile tools used daily by 3 million associates across 4,700+ retail and distribution centers.
                  </p>

                  <div
                    className="group border border-[#D3C7B5] bg-[#F2EAE0] p-3 mb-6 cursor-pointer"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/walmart/walmart-hero.png",
                        title: "Walmart Global Tech — Associate Fulfillment & Inventory System",
                        caption:
                          "High-frequency mobile scanning and store operations architecture deployed across 4,700+ stores.",
                      })
                    }
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840] pb-2 mb-2 border-b border-[#D3C7B5]">
                      <span>FIG. 02.B // ASSOCIATE MOBILE FULFILLMENT SUITE</span>
                      <span className="group-hover:text-[#FE299E]">Inspect →</span>
                    </div>
                    <div className="overflow-hidden aspect-[16/10] bg-[#DFD4C4]">
                      <img
                        src="/images/walmart/walmart-hero.png"
                        alt="Walmart Global Tech Associate Platform"
                        className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#D3C7B5]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840]">
                    Staff Product Designer
                  </span>
                  <Link
                    href="/case-studies/walmart"
                    className="editorial-underline inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#281B16] font-medium no-underline"
                    data-testid="link-pillar-walmart"
                  >
                    <span>Inspect Walmart Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FE299E]" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              PILLAR 03 // APPLIED AI & SOVEREIGN ESTATES (CHICUINACO, MARIGOLD, CASSANDRA)
             ───────────────────────────────────────────────────────────────── */}
          <div className="py-20 sm:py-24" data-testid="pillar-applied-ai">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#5C4840] tabular-nums">
                    03
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840]">
                    Pillar III · Zero-Card Brand Estates &amp; Zero-Knowledge AI Workbenches
                  </span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#281B16]">
                  Chicuinaco · Marigold · Cassandra
                </span>
              </div>

              <h3 className="font-serif font-light text-4xl sm:text-5xl lg:text-[56px] text-[#281B16] tracking-[-0.025em] leading-[1.03] max-w-4xl mb-10">
                Editorial craft meets{" "}
                <span className="italic font-normal text-[#FE299E]">client-side intelligence.</span>
              </h3>
            </Reveal>

            {/* Hairline Selector Tabs for Pillar 03 */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#281B16] divide-y md:divide-y-0 md:divide-x divide-[#D3C7B5] mb-12">
              {APPLIED_AI_SHOWCASE.map((item, idx) => {
                const isSelected = idx === activeAppliedIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveAppliedIndex(idx)}
                    className={`text-left py-5 px-5 transition-colors cursor-pointer border-none ${
                      isSelected
                        ? "bg-[#281B16] text-[#F2EAE0]"
                        : "bg-transparent hover:bg-[#F2EAE0]/60 text-[#281B16]"
                    }`}
                    data-testid={`button-pillar3-tab-${item.id}`}
                  >
                    <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.18em] mb-1">
                      <span className={isSelected ? "text-[#FE299E]" : "text-[#5C4840]"}>
                        03.{idx + 1} // {item.tag}
                      </span>
                      <span>{isSelected ? "● Active" : "Inspect"}</span>
                    </div>
                    <div className="font-serif text-2xl tracking-tight">
                      {item.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar 03 Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5C4840]">
                  {currentApplied.subtitle}
                </div>
                <h4 className="font-serif font-normal text-3xl sm:text-4xl text-[#281B16] tracking-[-0.02em] leading-[1.1]">
                  {currentApplied.title}
                </h4>
                <p className="font-sans text-sm sm:text-[15px] text-[#4A3A32] leading-[1.72]">
                  {currentApplied.summary}
                </p>

                {/* 2×2 Hairline Spec Grid */}
                <div className="grid grid-cols-2 border-t border-b border-[#D3C7B5] divide-x divide-y divide-[#D3C7B5]">
                  {currentApplied.specs.map((spec) => (
                    <div key={spec.k} className="p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
                        {spec.k}
                      </div>
                      <div className="font-serif text-lg text-[#281B16] mt-1">
                        {spec.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={`/case-studies/${currentApplied.caseStudySlug}`}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#281B16] hover:bg-[#FE299E] text-[#F2EAE0] hover:text-white font-mono text-[11px] uppercase tracking-[0.16em] font-medium transition-colors no-underline"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={currentApplied.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-underline inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#281B16] no-underline"
                  >
                    <span>Visit Live Production</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FE299E]" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div
                  className="sm:col-span-8 group border border-[#D3C7B5] bg-[#F2EAE0] p-3 cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: currentApplied.src,
                      title: currentApplied.title,
                      caption: currentApplied.summary,
                    })
                  }
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840] pb-2 mb-2 border-b border-[#D3C7B5]">
                    <span>PRIMARY PRODUCTION INTERFACE</span>
                    <span className="group-hover:text-[#FE299E]">Zoom →</span>
                  </div>
                  <div className="overflow-hidden aspect-[16/10] bg-[#1A1310]">
                    <img
                      src={currentApplied.src}
                      alt={currentApplied.title}
                      className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500"
                    />
                  </div>
                </div>

                <div
                  className="sm:col-span-4 group border border-[#D3C7B5] bg-[#F2EAE0] p-3 cursor-pointer flex flex-col justify-between"
                  onClick={() =>
                    setLightboxImage({
                      src: currentApplied.secondarySrc,
                      title: `${currentApplied.title} — Secondary Architectural Plate`,
                      caption: currentApplied.subtitle,
                    })
                  }
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840] pb-2 mb-2 border-b border-[#D3C7B5]">
                      ARCHITECTURAL DETAIL
                    </div>
                    <div className="overflow-hidden aspect-[4/3] sm:aspect-[4/5] bg-[#1A1310]">
                      <img
                        src={currentApplied.secondarySrc}
                        alt={`${currentApplied.title} detail`}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="pt-3 mt-2 border-t border-[#D3C7B5] font-mono text-[10px] uppercase tracking-[0.14em] text-[#5C4840]">
                    Click to inspect full plate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PILLAR 04 // FLAGSHIP R&D MONOGRAPH: PIPES.PINK (DARK ESPRESSO BAND)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="pipes-flagship"
        className="py-24 sm:py-32 px-5 sm:px-10 lg:px-16 bg-[#16110E] text-[#F2EAE0] border-b border-[#3D2C24]"
        data-testid="pillar-pipes"
      >
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 mb-10 border-b border-[#F2EAE0]/15">
              <div className="flex items-baseline gap-4">
                <span className="font-serif italic text-3xl sm:text-4xl text-[#FE299E] tabular-nums">
                  04
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#D3C7B5]/80">
                  Pillar IV · Flagship Sovereign Protocol &amp; Creator Economy R&amp;D
                </span>
              </div>
              <a
                href="https://pipes.pink"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#FE299E] hover:underline inline-flex items-center gap-1.5"
              >
                <span>LIVE AT PIPES.PINK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-12">
              <div className="lg:col-span-8">
                <h3 className="font-serif font-light text-4xl sm:text-5xl lg:text-[62px] text-[#F2EAE0] tracking-[-0.025em] leading-[1.01]">
                  Pipes.Pink: Sovereign Knowledge Protocol,{" "}
                  <span className="italic font-normal text-[#FE299E]">Hash Sanctuary</span> &amp; SEMI (;-]).
                </h3>
              </div>
              <div className="lg:col-span-4">
                <p className="font-sans text-sm sm:text-[15px] text-[#D3C7B5]/85 leading-[1.68]">
                  Just as Unix pipes (<code className="text-[#FE299E]">|</code>) route clean signal between programs,{" "}
                  <strong className="text-[#F2EAE0]">pipes.pink</strong> routes verified human perspective across readers and AI agents with cryptographic provenance and 70% creator royalties.
                </p>
              </div>
            </div>

            {/* 4-Column Hairline Protocol Spec Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-[#F2EAE0]/15 divide-y sm:divide-y-0 sm:divide-x divide-[#F2EAE0]/15 mb-14">
              <div className="py-5 pr-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D3C7B5]/70">
                  Namespace Deed
                </div>
                <div className="font-serif text-2xl text-[#F2EAE0] mt-1">
                  $9 / year · pipe\handle
                </div>
              </div>
              <div className="py-5 sm:px-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D3C7B5]/70">
                  Creator Royalty Split
                </div>
                <div className="font-serif text-2xl text-[#FE299E] mt-1">
                  70% Direct to Curator
                </div>
              </div>
              <div className="py-5 sm:px-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D3C7B5]/70">
                  Writing Sanctuary
                </div>
                <div className="font-serif text-2xl text-[#F2EAE0] mt-1">
                  # Hash + SEMI (;-])
                </div>
              </div>
              <div className="py-5 sm:pl-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D3C7B5]/70">
                  Agent Settlement
                </div>
                <div className="font-serif text-2xl text-[#F2EAE0] mt-1">
                  MCP + HTTP 402 Gate
                </div>
              </div>
            </div>
          </Reveal>

          {/* Interactive 4-Plate Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 4 Cols: Plate Switcher List */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="divide-y divide-[#F2EAE0]/12 border-t border-b border-[#F2EAE0]/15">
                {PIPES_PLATES.map((plate, idx) => {
                  const isActive = idx === activePipesPlate;
                  return (
                    <button
                      key={plate.id}
                      type="button"
                      onClick={() => setActivePipesPlate(idx)}
                      className={`w-full text-left py-5 px-3 transition-colors cursor-pointer bg-transparent border-none flex items-baseline justify-between gap-4 ${
                        isActive
                          ? "text-[#F2EAE0]"
                          : "text-[#D3C7B5]/60 hover:text-[#F2EAE0]"
                      }`}
                    >
                      <div className="flex items-baseline gap-3.5">
                        <span
                          className={`font-serif italic text-xl tabular-nums ${
                            isActive ? "text-[#FE299E]" : "text-[#D3C7B5]/50"
                          }`}
                        >
                          {plate.num}
                        </span>
                        <div>
                          <div className="font-serif text-xl sm:text-2xl tracking-tight">
                            {plate.label}
                          </div>
                          {isActive && (
                            <p className="font-sans text-xs text-[#D3C7B5]/80 mt-2 leading-relaxed">
                              {plate.caption}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] shrink-0">
                        {isActive ? "●" : "→"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://pipes.pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-mono text-[11px] uppercase tracking-[0.16em] font-medium transition-colors no-underline"
                  data-testid="link-pipes-live"
                >
                  <span>Launch Pipes.Pink</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/case-studies/pipes"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#F2EAE0]/25 hover:border-[#F2EAE0] text-[#F2EAE0] font-mono text-[11px] uppercase tracking-[0.16em] no-underline transition-colors"
                  data-testid="link-pillar-pipes"
                >
                  <span>Full Pipes Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right 8 Cols: Active Plate Display */}
            <div className="lg:col-span-8">
              <div
                className="group border border-[#F2EAE0]/20 bg-[#1F1713] p-3 sm:p-4 cursor-pointer"
                onClick={() =>
                  setLightboxImage({
                    src: currentPipesPlate.src,
                    title: currentPipesPlate.title,
                    caption: currentPipesPlate.caption,
                  })
                }
              >
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#F2EAE0]/15 font-mono text-[10px] uppercase tracking-[0.18em] text-[#D3C7B5]/80">
                  <span>
                    SPECIMEN {currentPipesPlate.num} // {currentPipesPlate.title}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#FE299E]">
                    <ZoomIn className="w-3.5 h-3.5" /> Full Resolution
                  </span>
                </div>
                <div className="overflow-hidden aspect-[16/10] bg-[#0E0A08]">
                  <img
                    src={currentPipesPlate.src}
                    alt={currentPipesPlate.title}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          02.B // COMPLETE 13-CASE-STUDY ARCHITECTURAL INDEX TABLE
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="case-studies"
        className="py-24 sm:py-32 px-5 sm:px-10 lg:px-16 border-b border-[#D3C7B5] bg-[#EAE0D0]"
        data-testid="section-case-studies-catalog"
      >
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#281B16]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840] mb-3">
                02.B // Complete Architectural Archive (01 – 13)
              </div>
              <h2 className="font-serif font-light text-4xl sm:text-5xl text-[#281B16] tracking-[-0.025em] leading-[1.04]">
                Every system, monograph &amp;{" "}
                <span className="italic font-normal text-[#FE299E]">shipped codebase.</span>
              </h2>
            </div>

            {/* Domain Filter Bar */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: `All Works (${ALL_CATALOG_STUDIES.length})` },
                { id: "enterprise", label: "Regulated & Enterprise (5)" },
                { id: "ai", label: "Sovereign AI & Data (5)" },
                { id: "design", label: "Brand & Design Systems (3)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setDomainFilter(tab.id as DomainFilter)}
                  className={`px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.14em] transition-colors cursor-pointer border ${
                    domainFilter === tab.id
                      ? "bg-[#281B16] text-[#F2EAE0] border-[#281B16]"
                      : "bg-[#F2EAE0]/80 text-[#4A3A32] border-[#D3C7B5] hover:border-[#281B16]"
                  }`}
                  data-testid={`filter-tab-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Numbered Hairline Index Rows (Replaces 12 Boxy Cards) */}
          <div className="divide-y divide-[#D3C7B5] border-b border-[#281B16]">
            {filteredStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group py-7 sm:py-8 px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center hover:bg-[#F2EAE0]/75 transition-colors no-underline"
                data-testid={`card-case-study-${study.slug}`}
              >
                {/* Col 1-2: Numeral + Thumbnail Plate */}
                <div className="lg:col-span-2 flex items-center gap-4">
                  <span className="font-serif italic text-2xl sm:text-3xl text-[#5C4840] group-hover:text-[#FE299E] transition-colors tabular-nums w-8 shrink-0">
                    {study.num}
                  </span>
                  <div className="w-20 h-13 overflow-hidden border border-[#D3C7B5] bg-[#1A1310] shrink-0 hidden sm:block">
                    <img
                      src={study.thumb}
                      alt={study.client}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Col 3-7: Client & Monumental Serif Title */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840] mb-1">
                    <span>{study.client}</span>
                    <span>·</span>
                    <span>{study.domainLabel}</span>
                  </div>
                  <h3 className="font-serif font-normal text-2xl sm:text-[28px] text-[#281B16] group-hover:text-[#FE299E] transition-colors tracking-[-0.015em] leading-[1.15]">
                    {study.title}
                  </h3>
                </div>

                {/* Col 8-10: Editorial Summary */}
                <div className="lg:col-span-3">
                  <p className="font-sans text-xs sm:text-[13px] text-[#4A3A32] leading-[1.6] line-clamp-2">
                    {study.summary}
                  </p>
                </div>

                {/* Col 11-12: Scale Badge & Arrow */}
                <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-3 text-right">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#281B16]">
                      {study.scaleBadge}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C4840] mt-0.5 tabular-nums">
                      {study.timeline}
                    </div>
                  </div>
                  <span className="w-8 h-8 rounded-full border border-[#D3C7B5] group-hover:border-[#281B16] group-hover:bg-[#281B16] group-hover:text-[#F2EAE0] text-[#281B16] flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          03 // CAREER TIMELINE & ACADEMIC FOUNDATION
         ═══════════════════════════════════════════════════════════════════════ */}
      <ExperienceSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          04 // PRODUCTION CODE & ARCHITECTURAL CAPABILITY MATRIX
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="code"
        className="py-24 sm:py-32 px-5 sm:px-10 lg:px-16 border-b border-[#D3C7B5] bg-[#EAE0D0]"
        data-testid="section-code"
      >
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#281B16]">
            <div className="max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840] mb-4">
                04 // Shipped Code &amp; Technical Architecture
              </div>
              <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-[#281B16] tracking-[-0.025em] leading-[1.03]">
                I don&apos;t throw static mocks over the wall.{" "}
                <span className="italic font-normal text-[#FE299E]">I ship the code.</span>
              </h2>
            </div>

            <a
              href="https://github.com/rorshockbtc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#281B16] hover:bg-[#FE299E] text-[#F2EAE0] hover:text-white font-mono text-[11px] uppercase tracking-[0.16em] font-medium transition-colors self-start lg:self-auto no-underline"
              data-testid="link-github-profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub (@rorshockbtc)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Reveal>

          {/* Hairline Repository Ledger */}
          <div className="divide-y divide-[#D3C7B5] border-b border-[#281B16]">
            {PRODUCTION_REPOS.map((repo) => (
              <div
                key={repo.name}
                className="py-6 px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline hover:bg-[#F2EAE0]/60 transition-colors"
              >
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="font-serif italic text-xl text-[#5C4840] tabular-nums w-7">
                    {repo.num}
                  </span>
                  <div>
                    <div className="font-mono text-sm font-medium text-[#281B16]">
                      {repo.name}
                    </div>
                    <div className="font-sans text-xs text-[#5C4840] mt-0.5">
                      {repo.domain}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 font-mono text-xs text-[#4A3A32]">
                  {repo.stack}
                </div>

                <div className="lg:col-span-3 flex items-center lg:justify-end gap-5">
                  <Link
                    href={repo.caseStudy}
                    className="editorial-underline font-mono text-[11px] uppercase tracking-[0.15em] text-[#281B16] no-underline"
                  >
                    Architecture Study
                  </Link>
                  <a
                    href={repo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-underline inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#FE299E] no-underline"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 4-Column Capability Matrix */}
          <TechStack />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          05 // HOW I WORK ("UNIT OF ONE LOOP") & FIELD STUDIES
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="about-kyle"
        className="py-24 sm:py-32 px-5 sm:px-10 lg:px-16 border-b border-[#D3C7B5] bg-[#EAE0D0]"
        data-testid="section-about"
      >
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="pb-12 border-b border-[#281B16]">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840] mb-4">
              05 // Operating Philosophy · The Unit of One
            </div>
            <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-[#281B16] tracking-[-0.025em] leading-[1.03] max-w-4xl">
              Collapsing the wall between{" "}
              <span className="italic font-normal text-[#FE299E]">boardroom strategy</span>, design craft, and production code.
            </h2>
          </Reveal>

          {/* 2-Column Asymmetric Architectural Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#281B16] divide-y lg:divide-y-0 lg:divide-x divide-[#D3C7B5]">
            {/* Left 6 Cols: The Unit of One Loop */}
            <Reveal className="lg:col-span-6 py-12 lg:pr-12">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5C4840] mb-6">
                05.A // The Four-Stage Operating Loop
              </div>

              <div className="divide-y divide-[#D3C7B5] border-t border-b border-[#D3C7B5]">
                {[
                  {
                    num: "01",
                    title: "First-Principles Domain & Schema Modeling",
                    desc: "Before drawing a rectangle, I map the regulatory constraints, database entities, and state transitions so the UI reflects how the system actually works.",
                  },
                  {
                    num: "02",
                    title: "Vignelli Grids & Albers Color Governance",
                    desc: "Interfaces are built on structural 1px hairlines, warm paper contrast, and calm typographic hierarchy that eliminate cognitive fatigue.",
                  },
                  {
                    num: "03",
                    title: "AI-Accelerated Production Prototyping",
                    desc: "Instead of static slide decks, I build live TypeScript/React/Tailwind prototypes wired to real schemas and agent harnesses in days.",
                  },
                  {
                    num: "04",
                    title: "Executive & Engineering Alignment",
                    desc: "With an MBA from UNC and an MFA from Emerson, I translate seamlessly between C-suite P&L goals, compliance officers, and staff engineers.",
                  },
                ].map((step) => (
                  <div key={step.num} className="py-5 flex items-baseline gap-5">
                    <span className="font-serif italic text-2xl text-[#5C4840] tabular-nums w-8 shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-serif font-normal text-2xl text-[#281B16] tracking-tight">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm text-[#4A3A32] leading-[1.65] mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right 6 Cols: Why Founders & Executive Teams Hire Me */}
            <Reveal delay={0.1} className="lg:col-span-6 py-12 lg:pl-12 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5C4840] mb-6">
                  05.B // Why Executive Teams &amp; Founders Bring Me In
                </div>
                <p className="font-serif text-2xl sm:text-[26px] text-[#281B16] leading-[1.45] mb-8">
                  Traditional product teams lose months translating between PM specs, Figma files, compliance reviews, and frontend tickets. Operating as a single principal architect removes that translation loss entirely.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-b border-[#D3C7B5] divide-y sm:divide-y-0 sm:divide-x divide-[#D3C7B5]">
                  <div className="py-5 sm:pr-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
                      VELOCITY
                    </div>
                    <div className="font-serif text-2xl text-[#281B16] mt-1">
                      Days, Not Quarters
                    </div>
                    <p className="font-sans text-xs text-[#4A3A32] mt-1.5 leading-relaxed">
                      Working coded prototypes in week one rather than 12-week discovery decks.
                    </p>
                  </div>
                  <div className="py-5 sm:pl-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
                      GOVERNANCE
                    </div>
                    <div className="font-serif text-2xl text-[#281B16] mt-1">
                      Regulated Ready
                    </div>
                    <p className="font-sans text-xs text-[#4A3A32] mt-1.5 leading-relaxed">
                      Battle-tested across federal banking, HIPAA clinical care, and national retail.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/essays/design-is-risk"
                  className="editorial-underline inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#281B16] no-underline"
                >
                  <span>Read Essay: &ldquo;Design Is Risk&rdquo;</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FE299E]" />
                </Link>
                <Link
                  href="/studio"
                  className="editorial-underline inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#281B16] no-underline"
                >
                  <span>Inspect CHB Studio Manifesto</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FE299E]" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* 05.C // Field Studies — 3-Column Editorial Monograph Plates */}
          <div id="in-the-field" className="pt-20" data-testid="section-field-studies">
            <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#D3C7B5]">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840] mb-2">
                  05.C // In the Field · Life Beyond the Terminal
                </div>
                <h3 className="font-serif font-normal text-3xl sm:text-4xl text-[#281B16] tracking-[-0.02em]">
                  High altitude, field architecture &amp;{" "}
                  <span className="italic">perspective.</span>
                </h3>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
                United States · Andes · Latin America
              </span>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D3C7B5] border-b border-[#281B16]">
              {FIELD_STUDIES.map((plate, idx) => (
                <StaggerItem
                  key={plate.title}
                  className={`py-8 ${
                    idx === 0
                      ? "md:pr-8"
                      : idx === 1
                      ? "md:px-8"
                      : "md:pl-8"
                  }`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840] mb-3">
                    {plate.fig}
                  </div>
                  <div
                    className="overflow-hidden aspect-[4/3] bg-[#DFD4C4] border border-[#D3C7B5] mb-4 cursor-pointer group"
                    onClick={() =>
                      setLightboxImage({
                        src: plate.src,
                        title: `${plate.title} — ${plate.location}`,
                        caption: plate.caption,
                      })
                    }
                  >
                    <img
                      src={plate.src}
                      alt={plate.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-serif text-2xl text-[#281B16]">
                      {plate.title}
                    </h4>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5C4840]">
                      {plate.location}
                    </span>
                  </div>
                  <p className="font-serif italic text-base text-[#4A3A32] mt-1.5 leading-relaxed">
                    {plate.caption}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          06 // EXECUTIVE & ENGINEERING ENDORSEMENTS
         ═══════════════════════════════════════════════════════════════════════ */}
      <TestimonialsSection />

      {/* ═══════════════════════════════════════════════════════════════════════
          07 // WORK TOGETHER — SPRINT & PRINCIPAL ENGAGEMENT LEDGER
         ═══════════════════════════════════════════════════════════════════════ */}
      <SprintCallout />

      {/* Lightbox Dialog */}
      <Dialog
        open={!!lightboxImage}
        onOpenChange={(open) => !open && setLightboxImage(null)}
      >
        <DialogContent className="max-w-[92vw] md:max-w-5xl bg-[#1C1411] border-[#3D2C24] text-[#F2EAE0] p-4 md:p-6">
          <DialogTitle className="font-serif text-xl md:text-2xl text-[#F2EAE0]">
            {lightboxImage?.title}
          </DialogTitle>
          {lightboxImage?.caption && (
            <p className="font-sans text-xs md:text-sm text-[#D3C7B5] mt-1">
              {lightboxImage.caption}
            </p>
          )}
          {lightboxImage && (
            <div className="mt-3 overflow-hidden border border-[#4A372E] bg-[#110C0A] max-h-[75vh] flex items-center justify-center">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[73vh] w-auto object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
