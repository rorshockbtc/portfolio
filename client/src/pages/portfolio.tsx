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
  Eye,
  Zap,
} from "lucide-react";
import { openContactModal } from "@/lib/contact-events";
import {
  BrandMark,
  ClientLogoBar,
  VideoShowcase,
  SprintCallout,
} from "@/components/chb";
import { ColorsTypeGridsViewer } from "@/components/chb/colors-type-grids-viewer";

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
    headline: "Private Golf Venture Scout Network with In-Browser Voice Transcription & IRS Mileage Tracking",
    description:
      "A nationwide network connecting elite technology consultants with Main Street enterprise transformations. Designed and built with in-browser OpenAI Whisper voice note recording, automated CRM lead enrichment, and GPS-verified IRS mileage logs.",
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
    headline: "Challenging $125 Boutique Golf Pricing with Honest Materials and Headless E-Commerce Architecture",
    description:
      "Engineered to counter predatory country club boutique markups. Hand-drafted the Ball Flight Tracer trademark, designed the minimalist high-converting storefront, and architected the headless Shopify Storefront API integration with sub-second page transitions.",
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
    headline: "A Birthday Love Letter to Victoria: Eliminating Mobile AI Amnesia with Surrealist Pop-Art Charm",
    description:
      "Built in 48 hours for Kyle's wife Victoria to master generative AI without prompt-engineering jargon. Features a surrealist Pop-Art entrance gate ('LOVE VICTORIA' password), dual Gemini 1.5 Pro + DeepSeek reasoning, and a 1-tap continuity bridge.",
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
    badge: "2,000,000 Records",
    metric: "Zero Cloud PII • DuckDB-WASM",
    headline: "Auditing 2M Civic Voter Rolls in Browser Memory with Zero Cloud Egress and Fellegi-Sunter Linkage",
    description:
      "Engineered under FEMA HSGP election security mandates to audit Mississippi's 2M-record voter database entirely within the browser. Powered by DuckDB-WASM, Apache Arrow, and Fellegi-Sunter mathematical entity linkage to eliminate cloud PII risk.",
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
      {/* ── Expansive Editorial Hero Section ── */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-[#D3C7B5]" data-testid="section-hero">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Bold Editorial Typography & Value Props */}
            <div className="lg:col-span-8 space-y-7">
              <div className="flex items-center gap-3">
                <BrandMark size="md" />
                <span className="font-sans text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E]">
                  Kyle Cyree &bull; Principal Architect &amp; Designer
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl 2xl:text-[5.5rem] font-serif font-black text-[#281B16] tracking-tight leading-[1.03]">
                Architect the system. <br />
                <span className="italic font-normal text-[#FE299E]">Design the interface.</span> <br />
                Ship the code.
              </h1>

              <p className="text-xl sm:text-2xl text-[#6B554D] font-sans leading-relaxed max-w-3xl">
                From 4-day chartered bank sprints to 70M-patient healthcare ecosystems. I bridge the gap that breaks early-stage and growth tech companies: I solve the systems architecture, craft resilient interfaces, and write production-ready software as a <strong className="text-[#281B16] font-bold">&quot;Unit of One.&quot;</strong>
              </p>

              {/* Multi-Platform Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-xs font-sans font-bold uppercase tracking-wider text-[#281B16]">
                  <Laptop className="w-4 h-4 text-[#FE299E]" /> macOS Desktop (Tauri/Rust)
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-xs font-sans font-bold uppercase tracking-wider text-[#281B16]">
                  <Smartphone className="w-4 h-4 text-[#FE299E]" /> iOS Mobile (SwiftUI)
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-xs font-sans font-bold uppercase tracking-wider text-[#281B16]">
                  <Globe className="w-4 h-4 text-[#FE299E]" /> Web Protocol (pipes.pink)
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-8 py-4 shadow-md transition-all cursor-pointer"
                  onClick={() => scrollTo("selected-work")}
                >
                  Explore Flagship Work <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D3C7B5] bg-[#F2EAE0] hover:bg-[#E4DACB] text-[#281B16] font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-7 py-4 cursor-pointer shadow-xs"
                  onClick={() => openContactModal("1-Week Production Sprint ($7,500)")}
                >
                  Book 1-Week Sprint ($7,500)
                </Button>

                <a
                  href="/resumes/kyle-cyree-resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans uppercase tracking-[0.16em] font-bold text-[#6B554D] hover:text-[#281B16] transition-colors"
                >
                  <Download className="w-4 h-4" /> PDF Resume
                </a>
              </div>
            </div>

            {/* Right Column: Kyle & Victoria Authentic Portrait Frame */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative max-w-md w-full rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-5 shadow-2xl space-y-4">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]">
                  <img
                    src="/images/personal/kyle-victoria-blue-teal-portrait.jpg"
                    alt="Kyle Cyree — Principal Product Designer & Architect"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#F2EAE0]/95 backdrop-blur-sm border border-[#D3C7B5] text-[10px] font-sans uppercase tracking-wider text-[#281B16] font-bold shadow-md flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                    Available Q4
                  </div>
                </div>

                <div className="space-y-1.5 px-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xl text-[#281B16]">Kyle Cyree</span>
                    <span className="font-sans text-xs font-semibold text-[#6B554D]">Raleigh, NC &bull; Remote</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B554D] font-sans leading-relaxed">
                    15+ years shipping mission-critical banking ledgers, healthcare PACS, and sovereign software as a single-core studio.
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
      <section id="selected-work" className="py-24 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 w-full space-y-28">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D3C7B5] pb-8">
          <div className="space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              Selected Flagship Systems
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
              Production Work &amp; Living Protocols
            </h2>
            <p className="text-lg text-[#6B554D] max-w-3xl font-sans leading-relaxed">
              High-resolution product plates, systems architecture, and live sovereign software across multi-platform desktop, mobile, banking, and sovereign AI.
            </p>
          </div>
          <span className="text-xs font-sans text-[#6B554D] uppercase tracking-wider font-bold shrink-0">
            Click any project to read deep-dive case study &rarr;
          </span>
        </div>

        {/* ── SPREAD 01: PIPES PROTOCOL — FLAGSHIP MULTI-PLATFORM SHOWCASE ── */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  01 / Flagship Showcase
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Web &bull; macOS Desktop &bull; iOS Mobile
                </Badge>
                <Badge variant="outline" className="border-[#FE299E]/40 text-[11px] font-sans uppercase tracking-wider bg-[#FE299E]/10 text-[#FE299E] font-bold">
                  $0 Marginal AI Inference
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
                Pipes Protocol: Sovereign Multi-Platform Knowledge Ecosystem
              </h3>
              <p className="text-lg text-[#6B554D] font-sans max-w-3xl leading-relaxed">
                My showcase software piece. A complete three-tier sovereign knowledge platform: a native macOS desktop cockpit for deep local authoring and vector indexing, an iOS mobile client for on-the-go capture, and a decentralized web protocol. Solves foundation LLM amnesia and model collapse with deterministic $0 marginal inference.
              </p>
            </div>

            <Link href="/case-studies/pipes">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-7 py-3.5 shadow-md shrink-0 cursor-pointer">
                Open Pipes Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* Full Widescreen Visual Spread for Pipes */}
          <Link href="/case-studies/pipes">
            <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-5 sm:p-8 lg:p-10 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer overflow-hidden space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 sm:p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 px-1">
                    <span className="font-sans text-xs font-bold text-[#281B16] uppercase tracking-wider flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-[#FE299E]" /> macOS Native Desktop App &bull; Bang IDE
                    </span>
                    <span className="font-sans text-[11px] font-semibold text-[#6B554D] uppercase tracking-wider">Tauri / Rust / Local SQLite</span>
                  </div>
                  <img
                    src="/images/pipes/desktop-mac-bang-ide.png"
                    alt="Pipes macOS Desktop App: Native Bang IDE"
                    className="w-full h-auto object-contain rounded-xl shadow-md group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>

                <div className="lg:col-span-5 flex flex-col gap-5">
                  <div className="rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 sm:p-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 px-1">
                      <span className="font-sans text-xs font-bold text-[#281B16] uppercase tracking-wider flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#FE299E]" /> Sovereign Knowledge Ledger
                      </span>
                      <span className="font-sans text-[11px] font-semibold text-[#6B554D] uppercase tracking-wider">Zero-Latency Caches</span>
                    </div>
                    <img
                      src="/images/pipes/desktop-mac-knowledge.png"
                      alt="Pipes Desktop Sovereign Knowledge Ledger"
                      className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#EAE0D0] border border-[#D3C7B5]/60 p-4 flex flex-col justify-between">
                      <span className="font-sans text-[11px] uppercase font-bold text-[#FE299E] tracking-wider block mb-2">
                        Web Protocol (pipes.pink)
                      </span>
                      <img
                        src="/images/pipes/pipes-hero.png"
                        alt="Pipes Web Protocol"
                        className="w-full h-28 object-cover rounded-xl border border-[#D3C7B5]/50"
                      />
                    </div>
                    <div className="rounded-2xl bg-[#EAE0D0] border border-[#D3C7B5]/60 p-4 flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Smartphone className="w-4 h-4 text-[#FE299E]" />
                        <span className="font-sans text-[11px] uppercase font-bold tracking-wider text-[#281B16]">
                          Pipes Pocket (iOS)
                        </span>
                      </div>
                      <div className="flex items-center gap-3 py-1">
                        <img
                          src="/images/pipes/pipes-pocket-icon.png"
                          alt="Pipes Pocket iOS Icon"
                          className="w-14 h-14 rounded-2xl shadow-sm border border-[#D3C7B5]"
                        />
                        <div className="text-xs font-sans font-semibold text-[#6B554D] leading-relaxed">
                          Native Swift<br />SwiftUI<br />Local Sync
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-[#6B554D] font-sans px-2 pt-3 border-t border-[#D3C7B5]/60">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-sans font-bold text-[#281B16]">3 Native Platforms</span>
                  <span>&bull;</span>
                  <span className="font-sans font-bold text-[#281B16]">$0.00 Marginal AI Inference</span>
                  <span>&bull;</span>
                  <span className="font-sans font-bold text-[#281B16]">6 Live Runtime CSS Personas</span>
                  <span>&bull;</span>
                  <span className="font-sans font-bold text-[#281B16]">70% Deeded Creator Equity</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  Inspect Multi-Platform Architecture &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 02: CASSANDRA CAREER AGENT & FOCUS MODE V5.0 ── */}
        <div className="space-y-8 pt-10 border-t border-[#D3C7B5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  02 / Autonomous AI Operator
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Focus Mode v5.0 &bull; Vignelli 8pt Grid
                </Badge>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-sans uppercase font-medium tracking-wider bg-[#F2EAE0] text-[#6B554D]">
                  Calming Albers Sand (#F5EFE6)
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
                Cassandra: High-Signal Career Agent &amp; Focus Mode
              </h3>
              <p className="text-lg text-[#6B554D] font-sans max-w-3xl leading-relaxed">
                jobseeker-agent (Focus Mode v5.0). Eliminates predatory job-board amnesia with an intentional 1-hour &quot;Sprint of 8&quot; batch. When a role is rejected, the explicit dismissal rationale is logged into SQLite (jobs.db) and auto-injected into Gemini 2.5 Flash as Critical Negative Exclusions, training the agent to find progressively sharper matches over time.
              </p>
            </div>

            <Link href="/case-studies/cassandra">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-7 py-3.5 shadow-md shrink-0 cursor-pointer">
                Open Cassandra Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* High-Resolution Focus Mode Stills Spread */}
          <Link href="/case-studies/cassandra">
            <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-5 sm:p-8 lg:p-10 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer overflow-hidden space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 flex flex-col justify-between">
                  <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#281B16] px-1 py-1 block">
                    01 / Sprint of 8 Queue
                  </span>
                  <img
                    src="/images/cassandra/focus-mode/00_focusMode_landing_redesign.jpg"
                    alt="Cassandra Focus Mode Landing Redesign"
                    className="w-full h-auto object-cover rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <span className="text-xs text-[#6B554D] font-sans px-1 pt-3">
                    Bounded 8-role queue on Calming Albers Sand (#F5EFE6)
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 flex flex-col justify-between">
                  <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#281B16] px-1 py-1 block">
                    02 / Single-Task Role Review
                  </span>
                  <img
                    src="/images/cassandra/focus-mode/01_focusMode_reviewRole_overview.jpg"
                    alt="Cassandra Role Review Overview"
                    className="w-full h-auto object-cover rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <span className="text-xs text-[#6B554D] font-sans px-1 pt-3">
                    Massimo Vignelli 8pt editorial grid &amp; fine art imagery
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 flex flex-col justify-between">
                  <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#281B16] px-1 py-1 block">
                    03 / Celebration &amp; Dignity
                  </span>
                  <img
                    src="/images/cassandra/focus-mode/09_youGotThis_celebrationScreen_final.jpg"
                    alt="Cassandra You Got This Celebration Screen"
                    className="w-full h-auto object-cover rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <span className="text-xs text-[#6B554D] font-sans px-1 pt-3">
                    Restoring dignity and calm to the job search ritual
                  </span>
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-[#6B554D] font-sans px-2 pt-3 border-t border-[#D3C7B5]/60">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-sans font-bold text-[#281B16]">Bounded 1-Hour Focus Sprint</span>
                  <span>&bull;</span>
                  <span className="font-sans font-bold text-[#281B16]">Negative Dismissal Reinforcement</span>
                  <span>&bull;</span>
                  <span className="font-sans font-bold text-[#281B16]">Vignelli 8pt Mathematical Grid</span>
                  <span>&bull;</span>
                  <span className="font-sans font-bold text-[#281B16]">Zero UI Debt</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  Inspect All 6 Focus Mode Plates &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 03: INTERACTIVE LIVING SOFTWARE STUDIO CONSOLE ── */}
        <div id="living-systems" className="space-y-8 pt-10 border-t border-[#D3C7B5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> 03 / Interactive Systems Studio
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
                Living Software &amp; Sovereign Ventures
              </h3>
              <p className="text-lg text-[#6B554D] font-sans max-w-3xl leading-relaxed">
                Click any system below to inspect the live interface, technical architecture, and real screenshots across venture scouting, direct-to-consumer golf, mobile AI, and civic analytics.
              </p>
            </div>

            <Link href={`/case-studies/${activeSystem.slug}`}>
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-7 py-3.5 shadow-md shrink-0 cursor-pointer">
                Deep Dive: {activeSystem.name} &rarr;
              </Button>
            </Link>
          </div>

          {/* Interactive System Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {livingSystems.map((sys) => {
              const isSelected = sys.id === activeSystemId;
              return (
                <button
                  key={sys.id}
                  onClick={() => handleSystemChange(sys.id)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-sans uppercase tracking-[0.14em] font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#281B16] text-[#F2EAE0] shadow-md scale-[1.02]"
                      : "bg-[#F2EAE0] text-[#6B554D] hover:text-[#281B16] border border-[#D3C7B5] hover:bg-[#EAE0D0]"
                  }`}
                >
                  {sys.id === "clubhouse1099" && <Mic className="w-3.5 h-3.5 text-[#0F3E2E]" />}
                  {sys.id === "highdraw" && <ShoppingBag className="w-3.5 h-3.5 text-[#8B6E32]" />}
                  {sys.id === "superstar" && <Heart className="w-3.5 h-3.5 text-[#FE299E]" />}
                  {sys.id === "marigold" && <Shield className="w-3.5 h-3.5 text-[#E05A36]" />}
                  <span>{sys.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? "bg-[#FE299E] text-white" : "bg-[#EAE0D0] text-[#6B554D]"}`}>
                    {sys.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive System Showcase Spread (Split Editorial Layout) */}
          <div className="rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Big Interactive Image Viewport */}
              <div className="lg:col-span-7 space-y-4">
                <div
                  onClick={() => setLightboxImage(activeSystem.images[activeImageIndex])}
                  className="group relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5] cursor-zoom-in shadow-lg"
                >
                  <img
                    src={activeSystem.images[activeImageIndex]?.src}
                    alt={activeSystem.images[activeImageIndex]?.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#110f0e]/85 backdrop-blur-md border border-white/20 text-xs font-sans font-bold text-white shadow-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FE299E]" />
                    <span>Click to Zoom</span>
                  </div>
                </div>

                {/* Screenshot Thumbnail Strip (Click to switch image) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans text-[#6B554D]">
                    <span className="font-semibold text-[#281B16]">
                      {activeSystem.images[activeImageIndex]?.caption}
                    </span>
                    <span className="font-bold">
                      {activeImageIndex + 1} of {activeSystem.images.length} Shots
                    </span>
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                    {activeSystem.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          activeImageIndex === idx
                            ? "border-[#FE299E] shadow-md scale-105"
                            : "border-[#D3C7B5] opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Narrative & System Architecture */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                      {activeSystem.category}
                    </span>
                    <span className="text-[#D3C7B5]">&bull;</span>
                    <span className="font-sans text-xs font-bold text-[#281B16] bg-[#EAE0D0] px-2.5 py-0.5 rounded-full border border-[#D3C7B5]">
                      {activeSystem.metric}
                    </span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16] leading-tight">
                    {activeSystem.headline}
                  </h4>
                </div>

                <p className="text-base text-[#6B554D] font-sans leading-relaxed">
                  {activeSystem.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-sans uppercase tracking-wider font-bold text-[#281B16] block">
                    Verified Production Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSystem.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-[#EAE0D0] border border-[#D3C7B5] text-xs font-sans font-semibold text-[#281B16]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-3 border-t border-[#D3C7B5] flex flex-wrap items-center gap-4">
                  <Link href={`/case-studies/${activeSystem.slug}`}>
                    <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-wider font-bold rounded-full px-6 py-3 shadow-md cursor-pointer">
                      Read Full Case Study &rarr;
                    </Button>
                  </Link>
                  <button
                    onClick={() => openContactModal(`Inquiry regarding ${activeSystem.name} ($7,500 Sprint)`)}
                    className="text-xs font-sans text-[#281B16] font-bold hover:text-[#FE299E] transition-colors underline cursor-pointer"
                  >
                    Build Something Similar ($7,500 Sprint)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SPREAD 04: CUSTODIA BANK ── */}
        <div className="space-y-8 pt-10 border-t border-[#D3C7B5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  04 / Flagship Banking
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  Chartered Full-Reserve SPDI Bank
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
                Custodia Bank: Core Banking Platform &amp; Brand
              </h3>
              <p className="text-lg text-[#6B554D] font-sans max-w-3xl leading-relaxed">
                Sole Founding Designer. Shipped complete marketing website in 4 days and full core banking application in 30 days for Federal Reserve master account review. Unified Fedwire, Money Market, and Bitcoin UTXO settlement rails into a single operational interface. Hand-drew the iconic brand marks (The Horse).
              </p>
            </div>

            <Link href="/case-studies/custodia">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-7 py-3.5 shadow-md shrink-0 cursor-pointer">
                Open Custodia Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* Full-Bleed High-Res Visual Spread */}
          <Link href="/case-studies/custodia">
            <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-5 sm:p-8 lg:p-10 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer overflow-hidden space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 sm:p-5 flex items-center justify-center">
                  <img
                    src="/images/custodia/mm-01.png"
                    alt="Custodia Bank Institutional Money Market Dashboard"
                    className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 sm:p-5 flex items-center justify-center">
                  <img
                    src="/images/custodia/utxo-1.png"
                    alt="Custodia Bank Bitcoin UTXO Manager Console"
                    className="w-full h-auto object-contain rounded-xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-[#6B554D] font-sans px-2 pt-2 border-t border-[#D3C7B5]/60">
                <div className="flex items-center gap-4">
                  <span className="font-sans font-bold text-[#281B16]">4-Day Rebrand Sprint</span>
                  <span>&bull;</span>
                  <span className="font-sans font-bold text-[#281B16]">30-Day Fed App</span>
                  <span>&bull;</span>
                  <span className="font-sans font-bold text-[#281B16]">Hand-Drawn Brand Mark (The Horse)</span>
                </div>
                <span className="font-sans text-[#FE299E] font-bold group-hover:underline">
                  Inspect All 7 High-Res Plates &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── SPREAD 05: "COLORS TYPE GRIDS" DESIGN MANIFESTO (Zero Mobile Trapping) ── */}
        <div id="manifesto-blueprint" className="space-y-8 pt-10 border-t border-[#D3C7B5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                  05 / Design Systems Manifesto
                </span>
                <span className="text-[#D3C7B5]">&bull;</span>
                <Badge variant="outline" className="border-[#D3C7B5] text-[11px] font-sans uppercase font-bold tracking-wider bg-[#F2EAE0] text-[#281B16]">
                  3846 × 4800 Masterwork Poster
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
                Albers &amp; Vignelli in CSS — Colors Type Grids
              </h3>
              <p className="text-lg text-[#6B554D] font-sans max-w-3xl leading-relaxed">
                A Rebel&apos;s Manifesto on Grid-Based Design &amp; Typography by Colon Hyphen Bracket. Built to eradicate AI-generated aesthetic homogeny and prove that mathematical rigor in spacing unlocks interfaces that breathe naturally.
              </p>
            </div>

            <Link href="/case-studies/colors-type-grids">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-full px-7 py-3.5 shadow-md shrink-0 cursor-pointer">
                Read Blueprint Case Study &rarr;
              </Button>
            </Link>
          </div>

          {/* Interactive Poster Canvas Component (Touch-Friendly, Zero Scroll Trapping) */}
          <ColorsTypeGridsViewer />
        </div>

        {/* ── SPREAD 06: ENTERPRISE GIANTS — UNITEDHEALTH GROUP & WALMART ── */}
        <div className="space-y-8 pt-10 border-t border-[#D3C7B5]">
          <div className="space-y-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              06 / Enterprise Scale
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
              UnitedHealth Group &amp; Walmart Global Tech
            </h3>
            <p className="text-lg text-[#6B554D] font-sans max-w-3xl leading-relaxed">
              Designing at immense scale: 70M daily patient mobile applications and enterprise learning graphs for 3.2M associates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* UnitedHealth Group */}
            <Link href="/case-studies/unitedhealth">
              <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-8 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs font-bold text-[#FE299E] uppercase tracking-wider">
                      70M+ Daily Patients
                    </span>
                    <Badge variant="outline" className="border-[#D3C7B5] text-[10px] font-sans font-bold uppercase tracking-wider bg-[#EAE0D0] text-[#281B16]">
                      80% Android / 50% iOS Screens
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors leading-tight">
                    UnitedHealth Group / Optum: Patient Apps
                  </h4>
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 flex items-center justify-center">
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
                <div className="pt-4 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs font-sans">
                  <span className="text-[#281B16] font-bold">Fusion C-Suite Advisory</span>
                  <span className="text-[#FE299E] font-bold group-hover:underline">Open Case Study &rarr;</span>
                </div>
              </div>
            </Link>

            {/* Walmart Global Tech */}
            <Link href="/case-studies/walmart">
              <div className="group rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-8 shadow-xl hover:border-[#FE299E] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs font-bold text-[#FE299E] uppercase tracking-wider">
                      3.2M Global Associates
                    </span>
                    <Badge variant="outline" className="border-[#D3C7B5] text-[10px] font-sans font-bold uppercase tracking-wider bg-[#EAE0D0] text-[#281B16]">
                      GraphQL Schema &bull; CDP LMS
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors leading-tight">
                    Walmart Global Tech: Graph Search Paradigm
                  </h4>
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#EAE0D0] border border-[#D3C7B5]/60 p-3 flex items-center justify-center">
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
                <div className="pt-4 border-t border-[#D3C7B5]/60 flex items-center justify-between text-xs font-sans">
                  <span className="text-[#281B16] font-bold">World&apos;s Largest Private Workforce</span>
                  <span className="text-[#FE299E] font-bold group-hover:underline">Open Case Study &rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROOF OF WORK & GITHUB CODEBASE TELEMETRY ── */}
      <section className="py-24 border-t border-[#D3C7B5] bg-[#E4DACB]/60">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D3C7B5] pb-8">
            <div className="space-y-3">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E] flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-[#FE299E]" /> Relentless Output &bull; Codebase Telemetry
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Proof of Work: 5,000+ Production Commits
              </h2>
              <p className="text-lg text-[#6B554D] max-w-3xl font-sans leading-relaxed">
                Design without code is just theory. As a 40-year-old Principal Architect, my volume of shipped production software and sovereign protocol engineering is relentless.
              </p>
            </div>
            <a
              href="https://github.com/rorshockbtc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-xs uppercase tracking-[0.16em] font-bold transition-all shadow-md shrink-0"
            >
              <GitCommit className="w-4 h-4 text-[#FE299E]" /> github.com/rorshockbtc &rarr;
            </a>
          </div>

          {/* Telemetry Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] space-y-1.5 shadow-sm">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#281B16] tabular-nums block">
                5,250+
              </span>
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FE299E] block">
                Production Commits
              </span>
              <p className="text-xs text-[#6B554D] font-sans leading-relaxed">
                4,732 commits in UltraLinq PACS, 400+ in CHB, plus sovereign repos
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] space-y-1.5 shadow-sm">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#281B16] tabular-nums block">
                8+
              </span>
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FE299E] block">
                Sovereign / FOSS Repos
              </span>
              <p className="text-xs text-[#6B554D] font-sans leading-relaxed">
                Marigold, Pipes, Greater Than, BitChat, Antigravity Skills
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] space-y-1.5 shadow-sm">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#281B16] tabular-nums block">
                15+
              </span>
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FE299E] block">
                Years of Shipping
              </span>
              <p className="text-xs text-[#6B554D] font-sans leading-relaxed">
                Federal Reserve banking, 70M patient apps, Fortune 1 LMS
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] space-y-1.5 shadow-sm">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#281B16] tabular-nums block">
                100%
              </span>
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FE299E] block">
                Full-Stack Autonomy
              </span>
              <p className="text-xs text-[#6B554D] font-sans leading-relaxed">
                Tauri/Rust, Swift, Next.js, DuckDB-WASM, WebGL, SQLite
              </p>
            </div>
          </div>

          {/* GitHub Repos Decomposition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://github.com/rorshockbtc/marigold"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] hover:border-[#FE299E] transition-all shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                    rorshockbtc / marigold
                  </span>
                  <Badge variant="outline" className="text-[10px] font-sans font-bold uppercase border-[#D3C7B5] bg-[#EAE0D0]">
                    AGPL-3.0
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-[#6B554D] font-sans leading-relaxed">
                  In-browser DuckDB-WASM election audit engine. Solved Mississippi&apos;s 2M-record voter roll with Zero-PII cryptographic entity hydration.
                </p>
              </div>
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FE299E]">
                TypeScript &bull; DuckDB-WASM &bull; OPFS
              </span>
            </a>

            <a
              href="https://github.com/rorshockbtc/greater-than"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] hover:border-[#FE299E] transition-all shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                    rorshockbtc / greater-than
                  </span>
                  <Badge variant="outline" className="text-[10px] font-sans font-bold uppercase border-[#D3C7B5] bg-[#EAE0D0]">
                    MIT
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-[#6B554D] font-sans leading-relaxed">
                  Sovereign-by-default support bots. Browser-local inference using WebGPU and Transformers.js with zero cloud token expenditure.
                </p>
              </div>
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FE299E]">
                WebGPU &bull; Transformers.js &bull; TypeScript
              </span>
            </a>

            <a
              href="https://github.com/rorshockbtc/pipes-native"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] hover:border-[#FE299E] transition-all shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                    rorshockbtc / pipes-native
                  </span>
                  <Badge variant="outline" className="text-[10px] font-sans font-bold uppercase border-[#D3C7B5] bg-[#EAE0D0]">
                    Proprietary
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-[#6B554D] font-sans leading-relaxed">
                  Multi-platform sovereign knowledge ecosystem. Native macOS desktop Bang IDE (Tauri/Rust), iOS mobile client, and web protocol.
                </p>
              </div>
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FE299E]">
                Tauri &bull; Rust &bull; Swift &bull; Next.js
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Video Showcase & Live Demos ── */}
      <VideoShowcase />

      {/* ── About Kyle & "The Unit of One" Manifesto ── */}
      <section id="about-kyle" className="py-24 border-t border-[#D3C7B5] bg-[#F2EAE0]/70">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-5 shadow-2xl max-w-md w-full space-y-4">
                <img
                  src="/images/personal/kyle-victoria-sunset-beach.jpg"
                  alt="Kyle Cyree — Golden Hour on the Beach"
                  className="w-full aspect-square object-cover rounded-2xl border border-[#D3C7B5]"
                />
                <div className="pt-2 text-center space-y-1">
                  <span className="font-serif font-bold text-2xl text-[#281B16] block">Kyle Cyree</span>
                  <span className="font-sans text-xs text-[#FE299E] font-bold uppercase tracking-wider block">
                    The &quot;Unit of One&quot;
                  </span>
                  <p className="text-xs text-[#6B554D] font-sans">
                    Designing systems that serve real human dignity across borders.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                Leadership &amp; Philosophy
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#281B16] tracking-tight">
                Why Founders &amp; Executives Hire a &quot;Unit of One&quot;
              </h2>
              <div className="space-y-4 text-lg sm:text-xl text-[#6B554D] font-sans leading-relaxed">
                <p>
                  Most companies lose 60% of their momentum in the gap between product strategy, design handoffs, and engineering execution. Designers draw impossible mockups in Figma; engineers rebuild them from scratch; executives wonder why shipping takes nine months.
                </p>
                <p>
                  I operate as a singular, zero-overhead execution partner. I facilitate C-suite stakeholders, architect the systems data model, design the user experience with mathematical Vignelli discipline, and ship the production frontend code. No committee bloat. No design debt.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0]">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#FE299E] font-bold block mb-1">
                    System Architecture
                  </span>
                  <span className="font-serif font-bold text-lg text-[#281B16]">Zero-to-One Velocity</span>
                </div>
                <div className="p-5 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0]">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#FE299E] font-bold block mb-1">
                    Design Systems
                  </span>
                  <span className="font-serif font-bold text-lg text-[#281B16]">Vignelli 8pt Rigor</span>
                </div>
                <div className="p-5 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0]">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#FE299E] font-bold block mb-1">
                    Production Code
                  </span>
                  <span className="font-serif font-bold text-lg text-[#281B16]">Zero Agency Handoffs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conversion Sprint Offer ($7,500 / 1 Week) ── */}
      <SprintCallout onContactClick={(subject) => openContactModal(subject || "1-Week Production Sprint ($7,500)")} />

      {/* Lightbox Dialog for Living Software Screenshots */}
      <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
        <DialogContent className="max-w-[94vw] max-h-[92vh] p-3 bg-[#110f0e] border-white/20 text-white overflow-hidden flex flex-col">
          <DialogHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/10 px-2">
            <div>
              <DialogTitle className="text-base font-serif font-bold text-white">
                {lightboxImage?.caption}
              </DialogTitle>
              <DialogDescription className="text-xs text-white/60 font-sans">
                Full-resolution product plate inspection
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-auto p-2 bg-[#0c0b0a] rounded-xl flex items-center justify-center">
            {lightboxImage && (
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
