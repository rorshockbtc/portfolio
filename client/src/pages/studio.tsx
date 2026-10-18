import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "wouter";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  Lock,
  Sparkles,
  Terminal,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { useStudioSections } from "@/hooks/use-studio-sections";
import ContactFormModal from "@/components/contact-form-modal";
import { BrandMark, ClientLogoBar, SprintCallout } from "@/components/chb";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const SECTIONS = [
  { id: "thesis", number: "01", shortLabel: "The Thesis" },
  { id: "overlooked", number: "02", shortLabel: "The Overlooked" },
  { id: "regulated", number: "03", shortLabel: "Regulated Systems" },
  { id: "lab", number: "04", shortLabel: "The Lab (16-Mo Suite)" },
  { id: "engagement", number: "05", shortLabel: "Manifesto & Pricing" },
];

interface LabViewItem {
  id: string;
  category: "protocol" | "atelier" | "education" | "desktop" | "venture";
  categoryLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  shippedDate: string;
  liveUrl?: string;
  liveLabel?: string;
  caseStudyHref: string;
  src: string;
  highlights: string[];
}

const LAB_VIEWS: LabViewItem[] = [
  {
    id: "pipes-hero",
    category: "protocol",
    categoryLabel: "Pipes.Pink Protocol",
    badge: "01 // MERKLE-DAG WEB PROTOCOL",
    title: "Pipes.Pink — The Sovereign Knowledge Network",
    subtitle:
      "Content-addressed SHA-256 Merkle-DAG where expert curators deed permanent pipe\\ namespaces, link ideas via the Ampersand (&) Graph, and earn 70% royalties when AI agents query their vaults.",
    shippedDate: "Shipped 2025–2026 · Production",
    liveUrl: "https://pipes.pink",
    liveLabel: "pipes.pink",
    caseStudyHref: "/case-studies/pipes",
    src: "/images/pipes/pipes-hero.png",
    highlights: [
      "SHA-256 content-addressed Merkle-DAG nodes",
      "Deeded pipe\\ namespaces ($9/yr registration)",
      "Ampersand (&) bidirectional citation graph",
      "Zero algorithmic feed manipulation",
    ],
  },
  {
    id: "hash-studio-semi",
    category: "atelier",
    categoryLabel: "Hash + SEMI (;-])",
    badge: "02 // INTEGRATED HASH SANCTUARY & SEMI (;-])",
    title: "Hash Epistemic Sanctuary & SEMI (;-]) Socratic Editor-in-Residence",
    subtitle:
      "Hash and SEMI were unified directly inside Pipes.Pink (/write): a distraction-free literary sanctuary with a 3D Knowledge Galaxy, 1-click Substack archive migration, persistent Socratic memory, and cryptographic 'Seal to Pipe' publishing.",
    shippedDate: "Unified in Pipes v4 · Production",
    liveUrl: "https://pipes.pink/write",
    liveLabel: "pipes.pink/write",
    caseStudyHref: "/case-studies/pipes",
    src: "/images/pipes/pipes-hash-studio-semi.png",
    highlights: [
      "Unified Hash Sanctuary + SEMI (;-]) Socratic Editor",
      "3D Knowledge Galaxy & live semantic memory recall",
      "1-Click Substack ZIP & RSS archive ingestion",
      "Cryptographic 'Seal to Pipe' Merkle-DAG minting",
    ],
  },
  {
    id: "pipes-marketplace",
    category: "protocol",
    categoryLabel: "Pipes.Pink Protocol",
    badge: "03 // CURATED PIPE MARKETPLACE",
    title: "Sovereign Pipe Marketplace & Namespace Discovery",
    subtitle:
      "High-signal directory of verified knowledge vaults across Bitcoin, AI safety, classical education, and independent journalism—each with transparent node counts, citation density, and MCP endpoint status.",
    shippedDate: "Shipped 2025–2026 · Production",
    liveUrl: "https://pipes.pink/explore",
    liveLabel: "pipes.pink/explore",
    caseStudyHref: "/case-studies/pipes",
    src: "/images/pipes/pipes-marketplace.png",
    highlights: [
      "Verified sovereign namespaces across 18+ domains",
      "Live node & citation telemetry per vault",
      "Instant browser-native Graph & Classroom mounting",
      "Direct creator patronage & agent licensing",
    ],
  },
  {
    id: "pipes-namespace-bitcoin",
    category: "protocol",
    categoryLabel: "Pipes.Pink Protocol",
    badge: "04 // DEEDED NAMESPACE ROOM",
    title: "Sovereign Pipe Room — pipe\\bitcoin & Curated Signal Streams",
    subtitle:
      "Inside a deeded Pipe Room: high-contrast editorial typography, multi-tier provenance badges, verifiable SHA-256 node hashes, and interactive Socratic interrogation of the curator's corpus.",
    shippedDate: "Shipped 2025–2026 · Production",
    liveUrl: "https://pipes.pink",
    liveLabel: "pipes.pink",
    caseStudyHref: "/case-studies/pipes",
    src: "/images/pipes/pipes-namespace-bitcoin.png",
    highlights: [
      "Deeded namespace governance & cryptographic lineage",
      "Multi-source synthesis across essays, transcripts & PDFs",
      "Reader-side Greater (>) local AI interrogation",
      "WCAG AAA archival warm-paper contrast",
    ],
  },
  {
    id: "pipes-classroom-mpb",
    category: "education",
    categoryLabel: "Classrooms & Audio",
    badge: "05 // 90+ LANGUAGE SOVEREIGN CLASSROOMS",
    title: "Turnkey Sovereign Classrooms — pipe\\my-first-bitcoin & Greater (>)",
    subtitle:
      "Any educator, classical academy, or open-source diploma program can mount a 90+ language interactive classroom in 15 seconds via npx @pipes/greater—powered by WebGPU local inference and DuckDB-WASM.",
    shippedDate: "Shipped 2025–2026 · Production",
    liveUrl: "https://greater.pink",
    liveLabel: "greater.pink",
    caseStudyHref: "/case-studies/pipes",
    src: "/images/pipes/pipes-classroom-mpb.png",
    highlights: [
      "15-second CLI classroom deployment (npx @pipes/greater)",
      "90+ language localized curriculum & Socratic tutor",
      "Zero student PII sent to cloud AI providers",
      "Built for classical schools, co-ops & global NGOs",
    ],
  },
  {
    id: "pipes-podcast-pavilion",
    category: "education",
    categoryLabel: "Classrooms & Audio",
    badge: "06 // SOVEREIGN PODCAST PAVILION",
    title: "Autonomous 2-Host Neural Audio Studio — Semi & Greater",
    subtitle:
      "Transforms sealed written Pipe nodes into broadcast-grade two-host dialectic episodes between Semi (;-]) and Greater (>), complete with chapter markers, synchronized transcripts, and RSS syndication.",
    shippedDate: "Shipped 2026 · Production",
    liveUrl: "https://pipes.pink",
    liveLabel: "pipes.pink",
    caseStudyHref: "/case-studies/pipes",
    src: "/images/pipes/pipes-podcast-pavilion.png",
    highlights: [
      "Dual-persona dialectic synthesis (Semi & Greater)",
      "Synchronized paragraph-level audio transcript",
      "Automatic citation callouts & Merkle node links",
      "Zero-editing broadcast-ready mastering",
    ],
  },
  {
    id: "pipes-dev-mcp-hub",
    category: "protocol",
    categoryLabel: "Pipes.Pink Protocol",
    badge: "07 // MCP SERVER & HTTP 402 AGENT GATE",
    title: "Developer Hub — Model Context Protocol (MCP) & HTTP 402 Royalties",
    subtitle:
      "Exposes every public or licensed Pipe as a standardized MCP server and CLI SDK so Claude, Cursor, and autonomous agents pay creators 70% royalties per cryptographic citation.",
    shippedDate: "Shipped 2026 · Production",
    liveUrl: "https://pipes.pink/developers",
    liveLabel: "pipes.pink/developers",
    caseStudyHref: "/case-studies/pipes",
    src: "/images/pipes/pipes-dev-mcp-hub.png",
    highlights: [
      "Native Model Context Protocol (MCP) JSON-RPC server",
      "HTTP 402 Payment Required agent metering gate",
      "70% creator / 30% protocol royalty split",
      "TypeScript CLI & zero-config Cursor/Claude integration",
    ],
  },
  {
    id: "pipes-economics",
    category: "protocol",
    categoryLabel: "Pipes.Pink Protocol",
    badge: "08 // SOVEREIGN CREATOR ECONOMICS",
    title: "The 70% Royalty Ledger & Anti-Slop Economic Engine",
    subtitle:
      "Replaces ad-driven engagement farming with deterministic unit economics: $9/year namespace deeds, cryptographic proof-of-authorship, and automated micropayouts whenever an AI agent cites your work.",
    shippedDate: "Shipped 2026 · Production",
    liveUrl: "https://pipes.pink",
    liveLabel: "pipes.pink",
    caseStudyHref: "/case-studies/pipes",
    src: "/images/pipes/pipes-economics.png",
    highlights: [
      "$9/yr sovereign namespace registration",
      "70% net revenue share on AI & enterprise licensing",
      "Immutable attribution across derivative works",
      "Built for independent writers, researchers & labs",
    ],
  },
  {
    id: "desktop-mac-bang-ide",
    category: "desktop",
    categoryLabel: "Desktop IDE",
    badge: "09 // NATIVE MACOS TAURI 2.0 + RUST IDE",
    title: "Pipes Native (! BANG) — Local-First macOS Knowledge & Code IDE",
    subtitle:
      "A native macOS desktop application built in Tauri 2.0 and Rust that mounts your local filesystem, Obsidian vaults, and Git repositories into the Pipes Merkle-DAG with hardware-accelerated local LLM inference.",
    shippedDate: "Shipped 2026 · macOS Native",
    liveUrl: "https://pipes.pink",
    liveLabel: "pipes.pink",
    caseStudyHref: "/case-studies/pipes",
    src: "/images/pipes/desktop-mac-bang-ide.png",
    highlights: [
      "Native Tauri 2.0 + Rust binary with sub-40MB footprint",
      "Local SQLite + DuckDB-WASM vector & graph indexing",
      "Command-first ! BANG operator palette",
      "Air-gapped local model execution via Apple Metal",
    ],
  },
  {
    id: "marigold-kanban",
    category: "venture",
    categoryLabel: "Marigold & Venture Engines",
    badge: "10 // MARIGOLD ZERO-PII CIVIC ENGINE",
    title: "Marigold Insights — 500k+-Record Browser-Native Audit & Kanban",
    subtitle:
      "Zero-cloud civic and enterprise data room running DuckDB-WASM + Apache Arrow entirely inside the client browser—executing 10.2ms Fellegi-Sunter probabilistic record linkage across 500k+ voter records with zero server PII.",
    shippedDate: "Shipped 2025–2026 · bolt.pipes.pink",
    liveUrl: "https://bolt.pipes.pink",
    liveLabel: "bolt.pipes.pink",
    caseStudyHref: "/case-studies/marigold",
    src: "/images/marigold/02_marigold_workspace_dashboard_kanban.png",
    highlights: [
      "500k+ records queried in <15ms via DuckDB-WASM",
      "10.2ms Fellegi-Sunter probabilistic entity resolution",
      "Web Crypto AES-GCM zero-knowledge client hydration",
      "Built for election audits, healthcare & regulated ops",
    ],
  },
  {
    id: "clubhouse-scout-crm",
    category: "venture",
    categoryLabel: "Marigold & Venture Engines",
    badge: "11 // CLUBHOUSE 1099 VENTURE SCOUT NETWORK",
    title: "Clubhouse 1099 — 535-Seat Regional Venture Scout & Whisper Field CRM",
    subtitle:
      "Geographically capped 535-seat B2B venture scout platform with in-browser Whisper voice-to-lead extraction, automated IRS 1099 mileage & commission ledgers, and High Draw DTC golf integration.",
    shippedDate: "Shipped 2025–2026 · clubhouse1099.com",
    liveUrl: "https://clubhouse1099.com",
    liveLabel: "clubhouse1099.com",
    caseStudyHref: "/case-studies/clubhouse1099",
    src: "/images/clubhouse1099/03_clubhouse1099_scout_dashboard_earnings.png",
    highlights: [
      "Capped 535 US Congressional-district territory model",
      "On-device Whisper voice-note to structured CRM pipeline",
      "Real-time commission splits & IRS tax-ready ledger",
      "Paired with High Draw (highdraw.com) custom DTC engine",
    ],
  },
  {
    id: "cassandra-focus-v5",
    category: "venture",
    categoryLabel: "Marigold & Venture Engines",
    badge: "12 // CASSANDRA FOCUS MODE V5.0",
    title: "Cassandra Focus Mode v5.0 — Zero-Cloud Epistemic Writing & Diff Engine",
    subtitle:
      "The pure client-side writing instrument that pioneered our sentence-level semantic heatmap and deterministic editorial diffing before merging its DNA into the Pipes Hash Sanctuary.",
    shippedDate: "Shipped 2025 · Production Archive",
    caseStudyHref: "/case-studies/cassandra",
    src: "/images/cassandra/focus-mode/00_focusMode_landing_redesign.jpg",
    highlights: [
      "Sentence-level cadence & readability telemetry",
      "Deterministic side-by-side Socratic diff review",
      "100% local IndexedDB persistence with zero cloud sync",
      "Foundational architecture for Hash & Superstar",
    ],
  },
];

const OVERLOOKED_VERTICALS = [
  {
    number: "02.A",
    tag: "VENTURE ARCHITECTURE // SEED TO SERIES B",
    title: "Startups: From Zero-to-One to Series B Velocity",
    image: "/images/studio/studio-overlooked-startups.png",
    imageAlt:
      "Architectural blueprint showing raw startup vectors passing through a geometric prism into a structured Swiss grid system",
    quote:
      '"If you don\'t reach product-market fit in a sprint, it\'s almost always a design & distribution problem—not a backend problem." — Adapted from Nikita Bier',
    problem:
      "Most early-stage startups burn six months and $400k hiring four specialists—a PM, a UI designer, a frontend dev, and a backend engineer—only to spend 80% of their runway in Slack translation loops.",
    bullets: [
      "Collapse the 4-person product pod into a single Principal Systems Architect who designs the schema, crafts the UI on a mathematical grid, and ships the production codebase.",
      "Interactive, investor-ready full-stack prototypes and production MVPs shipped in 1 to 4 weeks—not static Figma slide decks.",
      "Built-in growth telemetry, deterministic AI agent harnesses, and clean React / TypeScript / Postgres / Rust architecture your future engineering hires will love.",
    ],
    shippedProof: {
      label: "Shipped Proof (Last 16 Months)",
      items: [
        { name: "Pipes.Pink Protocol", href: "/case-studies/pipes" },
        { name: "Clubhouse 1099", href: "/case-studies/clubhouse1099" },
        { name: "Superstar Memory Loom", href: "/case-studies/superstar" },
      ],
    },
  },
  {
    number: "02.B",
    tag: "SOVEREIGN EDUCATION // CLASSICAL ACADEMIES & FAMILIES",
    title: "Private Schools, Homeschool Co-Ops & Families",
    image: "/images/studio/studio-overlooked-schools.png",
    imageAlt:
      "Architectural drafting of a classical monograph, brass astrolabe, and branching sovereign knowledge tree",
    quote:
      "Big EdTech treats students as ad-tech data exhaust. Classical academies, micro-schools, and families deserve sovereign tools that cultivate deep literacy—not dopamine loops.",
    problem:
      "Independent schools and homeschool networks are forced to duct-tape bloated enterprise LMS platforms together while worrying about cloud AI chatbots harvesting student data or hallucinating answers.",
    bullets: [
      "Turnkey Sovereign Classrooms (Greater >): deploy a 90+ language Socratic curriculum in 15 seconds with WebGPU local AI that never sends student PII to the cloud.",
      "Epistemic writing instruments (Hash & Cassandra) that teach students how to structure arguments, cite primary sources, and think alongside a Socratic tutor rather than copy-pasting AI slop.",
      "Custom parent/faculty portals, tuition & enrollment workflows, and local-first archival libraries priced for independent schools.",
    ],
    shippedProof: {
      label: "Shipped Proof (Last 16 Months)",
      items: [
        { name: "Greater (>) 90+ Lang Classrooms", href: "/case-studies/pipes" },
        { name: "pipe\\my-first-bitcoin", href: "/case-studies/pipes" },
        { name: "Cassandra Focus Mode v5", href: "/case-studies/cassandra" },
      ],
    },
  },
  {
    number: "02.C",
    tag: "INSTITUTIONAL SANCTUARY // FAITH & CIVIC STEWARDSHIP",
    title: "Faith-Based, Non-Profit & Civic Organizations",
    image: "/images/studio/studio-overlooked-faith.png",
    imageAlt:
      "Architectural elevation of sacred timber arches and Josef Albers nested color-interaction squares on warm cream paper",
    quote:
      "Mission-driven institutions carry centuries of wisdom and high-trust community relationships, yet are routinely handed clunky, extractive software from the 2000s.",
    problem:
      "Churches, dioceses, classical foundations, and civic watchdogs need modern digital sanctuary—places where scholarship, sermons, donor stewardship, and community records are preserved with dignity and zero surveillance.",
    bullets: [
      "Permanent, content-addressed publishing archives & podcast pavilions that turn decades of homilies, lectures, and manuscripts into searchable, citation-backed knowledge graphs.",
      "Zero-PII civic and donor analytics (powered by our Marigold DuckDB-WASM engine) so sensitive member and parishioner records never leave your hardware unencrypted.",
      "Dignified, book-grade typography and accessible interfaces engineered so elders and digital natives alike can navigate effortlessly.",
    ],
    shippedProof: {
      label: "Shipped Proof (Last 16 Months)",
      items: [
        { name: "Marigold Zero-PII Civic Engine", href: "/case-studies/marigold" },
        { name: "Sovereign Podcast Pavilion", href: "/case-studies/pipes" },
        { name: "Albers & Vignelli Type System", href: "/case-studies/colors-type-grids" },
      ],
    },
  },
  {
    number: "02.D",
    tag: "AMERICAN ENTERPRISE // MAIN STREET & REGIONAL OPERATORS",
    title: "Main Street, Independent Commerce & Field Teams",
    image: "/images/studio/studio-overlooked-mainstreet.png",
    imageAlt:
      "Architectural elevation of classic American brick-and-mortar storefronts linked by subterranean fiber optic lines and a drafting caliper",
    quote:
      "Silicon Valley builds for Fortune 500 procurement committees. We build high-margin operational weapons for the independent businesses that actually run the country.",
    problem:
      "Regional distributors, specialty manufacturers, hospitality groups, and 1099 field sales teams get gouged by SaaS per-seat licensing while still running critical operations on brittle spreadsheets.",
    bullets: [
      "Voice-first field CRMs and mobile operations tools: let reps speak a 20-second voice note in the parking lot and automatically extract structured CRM records, follow-ups, and IRS mileage logs.",
      "Bespoke DTC e-commerce & physics-backed configurators (like High Draw Golf) that convert at 3x template Shopify themes without ongoing agency retainers.",
      "Automated multi-location inventory, vendor reconciliation, and private AI operations copilots that pay for themselves in weeks.",
    ],
    shippedProof: {
      label: "Shipped Proof (Last 16 Months)",
      items: [
        { name: "Clubhouse 1099 Whisper CRM", href: "/case-studies/clubhouse1099" },
        { name: "High Draw Custom DTC Engine", href: "/case-studies/highdraw" },
        { name: "Foodler $500M+ Vol Exit", href: "/case-studies/foodler" },
      ],
    },
  },
];

const REGULATED_PROOFS = [
  {
    client: "Custodia Bank",
    domain: "Institutional Money Market, Fedwire & Bitcoin Custody",
    metric: "Chartered SPDI · $71M+ Raised",
    summary:
      "Lead Product Designer (First Design Hire). Shipped the 4-day rebrand and 30-day core banking platform launch covering Fedwire fiat rails, Money Market yield accrual, and multi-sig Bitcoin UTXO custody ahead of Federal Reserve review.",
    href: "/case-studies/custodia",
  },
  {
    client: "UnitedHealth Group",
    domain: "Optum Clinical & Consumer Health Ecosystem",
    metric: "35,000,000+ Active Patients",
    summary:
      "Senior Product Experience Designer (Principal Mobile Lead). Produced 80%+ of Android and 50%+ of iOS screens and championed Apple Health integration ($100M+ revenue impact) for over 35 million patients.",
    href: "/case-studies/unitedhealth",
  },
  {
    client: "Marigold Insights",
    domain: "Zero-PII Civic & Entity Resolution Data Room",
    metric: "500k+ Records · 10.2ms Linkage",
    summary:
      "Founder & Product Architect. Built and open-sourced a browser-native DuckDB-WASM + Apache Arrow analytical workbench performing Fellegi-Sunter record linkage with zero cloud PII exposure.",
    href: "/case-studies/marigold",
  },
  {
    client: "UltraLinq Healthcare",
    domain: "Cloud PACS & Diagnostic Medical Telemetry",
    metric: "HIPAA Certified · Acquired",
    summary:
      "Design Director. Founded the internal product design team and built design systems from scratch for cloud PACS web platforms, diagnostic medical devices, and wearable health monitors.",
    href: "/case-studies/ultralinq",
  },
  {
    client: "Walmart Global Tech",
    domain: "Enterprise Graph Search & Content Distribution",
    metric: "3,000,000+ Direct Users",
    summary:
      "Senior UX/UI Architect (via PredictiveUX). Replaced legacy keyword lookups with GraphQL and graph-database discovery for the largest private workforce in the world (3M associates).",
    href: "/case-studies/walmart",
  },
  {
    client: "Foodler (Grubhub Exit)",
    domain: "Marketplace Operations & Fraud Detection Systems",
    metric: "$500M+ Volume · 83% Fraud Cut",
    summary:
      "Director of Business Operations. Oversaw two-thirds of company functions across $500M+ in order volume and engineered a proprietary fraud detection system that cut chargebacks 83% ($6M to <$1M), driving a 10x exit.",
    href: "/case-studies/foodler",
  },
];

const LAB_CAPABILITIES = [
  {
    code: "LAB // 01",
    icon: Database,
    title: "Content-Addressed Merkle-DAGs (pipes.pink)",
    body: "Every essay, dataset, and curriculum module we publish is hashed into an immutable SHA-256 Merkle-DAG node and connected via the Ampersand (&) citation operator—guaranteeing cryptographic provenance and zero link rot.",
  },
  {
    code: "LAB // 02",
    icon: Sparkles,
    title: "Socratic & Epistemic AI (Hash + SEMI ;-])",
    body: "Instead of generative slop machines that replace human thought, we build Socratic counterparts (SEMI ;-]) with persistent 3D semantic memory that challenge assumptions, surface counter-arguments, and sharpen the author's voice.",
  },
  {
    code: "LAB // 03",
    icon: Cpu,
    title: "Zero-Cloud WebGPU & DuckDB-WASM (Greater > & Marigold)",
    body: "We run 500k+-row analytical joins (10.2ms Fellegi-Sunter linkage) and local WebGPU LLM inference directly inside the user's browser or native Rust binary—eliminating cloud GPU bills and server-side PII liability.",
  },
  {
    code: "LAB // 04",
    icon: Terminal,
    title: "MCP Servers & HTTP 402 Creator Royalties",
    body: "Our vaults expose native Model Context Protocol (MCP) endpoints gated by HTTP 402 micropayments—returning 70% of licensing revenue directly to human domain experts whenever AI agents cite their work.",
  },
  {
    code: "LAB // 05",
    icon: Layers,
    title: "Native macOS (! BANG IDE) & Neural Audio",
    body: "From our Tauri 2.0 + Rust desktop IDE (! BANG) to our two-host Sovereign Podcast Pavilion (Semi & Greater), we ship cohesive cross-platform ecosystems from a single unified TypeScript/Rust architecture.",
  },
  {
    code: "LAB // 06",
    icon: ShieldCheck,
    title: "Regulated Fintech, Wealth & Healthcare Pedigree",
    body: "Grounded in 15+ years of regulated product architecture across Custodia Bank (Fedwire, Money Market, Bitcoin UTXO custody), Fidelity Investments (2-year embedded lead), UnitedHealth Group (35M+ patients), and IronNet.",
  },
];

export default function StudioPage() {
  const [activeSection, setActiveSection] = useState("thesis");
  const [activeLabCategory, setActiveLabCategory] = useState<string>("all");
  const [selectedLabIndex, setSelectedLabIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    subtitle?: string;
  } | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactDefaultTab, setContactDefaultTab] = useState<"calendly" | "message">("calendly");

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const { setSections, setActiveSection: setCtxActive } = useStudioSections();

  const openContact = useCallback((tab: "calendly" | "message" = "calendly") => {
    setContactDefaultTab(tab);
    setContactOpen(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  useEffect(() => {
    setCtxActive(activeSection);
  }, [activeSection, setCtxActive]);

  const handleScroll = useCallback(() => {
    const offsets = SECTIONS.map((s) => {
      const el = sectionRefs.current[s.id];
      if (!el) return { id: s.id, top: Infinity };
      return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 180) };
    });
    const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
    setActiveSection(closest.id);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredLabViews =
    activeLabCategory === "all"
      ? LAB_VIEWS
      : LAB_VIEWS.filter((v) => v.category === activeLabCategory);

  const safeLabIndex =
    selectedLabIndex >= filteredLabViews.length ? 0 : selectedLabIndex;
  const activeLabView = filteredLabViews[safeLabIndex] || LAB_VIEWS[0];

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#EAE0D0] text-[#281B16] pb-24 md:pb-0">
        {/* Sticky Swiss-Grid Section Sub-Header (Desktop) */}
        <div
          className="hidden md:block sticky top-16 sm:top-20 z-30 bg-[#EAE0D0]/95 backdrop-blur-md border-b border-[#D3C7B5]"
          role="navigation"
          aria-label="Studio section index"
          data-testid="nav-studio-subbar"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 h-12 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#4A3A32]">
              <span className="w-2 h-2 rounded-full bg-[#FE299E]" />
              <span className="font-bold text-[#281B16]">CHB Studio</span>
              <span className="text-[#4A3A32]">/</span>
              <span>Practice &amp; Proprietary Lab</span>
            </div>

            <div className="flex items-center gap-1 lg:gap-2 overflow-x-auto scrollbar-hide">
              {SECTIONS.map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`px-3 py-1.5 rounded-sm font-mono text-[11px] uppercase tracking-[0.13em] transition-all cursor-pointer border whitespace-nowrap ${
                      isActive
                        ? "bg-[#281B16] text-[#F2EAE0] border-[#281B16] font-bold"
                        : "bg-transparent text-[#4A3A32] border-transparent hover:border-[#D3C7B5] hover:bg-[#F2EAE0]/60 hover:text-[#281B16]"
                    }`}
                    data-testid={`nav-studio-pill-${s.id}`}
                  >
                    <span className="text-[#FE299E] mr-1.5 font-bold">{s.number}</span>
                    {s.shortLabel}
                  </button>
                );
              })}
            </div>

            <div className="hidden xl:flex items-center gap-2.5">
              <a
                href="https://pipes.pink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#281B16] text-[#F2EAE0] hover:bg-[#FE299E] hover:text-white font-mono text-[10px] font-bold uppercase tracking-[0.14em] transition-colors no-underline whitespace-nowrap"
                data-testid="button-subbar-pipes"
              >
                <span className="text-[#FE299E] font-bold">| | |</span>
                Claim Pipe ($9/yr)
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => openContact("calendly")}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#FE299E] text-white font-mono text-[10px] font-bold uppercase tracking-[0.14em] hover:bg-[#d81b80] transition-colors cursor-pointer border-none whitespace-nowrap"
                data-testid="button-subbar-book"
              >
                <Calendar className="w-3 h-3" />
                Book Sprint
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================
            HERO SECTION — THE STUDIO & PROPRIETARY R&D PRACTICE
           ============================================================ */}
        <section
          className="relative pt-8 md:pt-12 pb-10 md:pb-14 border-b border-[#D3C7B5]"
          data-testid="section-studio-hero"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left 7 Cols: Editorial Studio Positioning */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <BrandMark size="sm" />
                  <span className="text-[#4A3A32]">·</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4A3A32] font-bold">
                    Colon Hyphen Bracket, LLC · Est. 2018 · Re-Architected 2026
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] text-[#281B16] tracking-tight leading-[1.08] mb-5">
                  Architecture partner for the{" "}
                  <span className="italic font-normal text-[#FE299E]">
                    stuck &amp; underserved.
                  </span>
                </h1>

                <p className="font-serif text-lg md:text-xl text-[#281B16] leading-[1.6] mb-5 max-w-[60ch]">
                  Colon Hyphen Bracket (<span className="font-mono text-lg text-[#FE299E] font-bold">:-]</span>) is Kyle Cyree&apos;s principal-led product architecture studio and proprietary R&amp;D lab. We replace bloated agency retainers with a 15+ year Product &amp; Systems Architect equipped with deterministic AI harnesses—shipping regulated banking infrastructure, zero-PII data rooms, and sovereign knowledge protocols in days instead of quarters.
                </p>

                <p className="font-sans text-sm md:text-[15px] text-[#4A3A32] leading-[1.72] mb-6 max-w-[62ch]">
                  In the 16 months since we first published our studio manifesto, we didn&apos;t just advise clients—we shipped{" "}
                  <Link href="/case-studies/pipes" className="text-[#281B16] font-bold underline decoration-[#FE299E] underline-offset-4 hover:text-[#FE299E]">
                    Pipes.Pink
                  </Link>{" "}
                  (a content-addressed Merkle-DAG web protocol), unified{" "}
                  <Link href="/case-studies/pipes" className="text-[#281B16] font-bold underline decoration-[#FE299E] underline-offset-4 hover:text-[#FE299E]">
                    # Hash Sanctuary &amp; SEMI (;-])
                  </Link>
                  , launched 90+ language sovereign classrooms (<span className="font-mono text-xs font-bold text-[#281B16]">greater.pink</span>), built{" "}
                  <Link href="/case-studies/marigold" className="text-[#281B16] font-bold underline decoration-[#FE299E] underline-offset-4 hover:text-[#FE299E]">
                    Marigold Insights
                  </Link>{" "}
                  (500k+-record browser-native DuckDB-WASM analytics), and scaled{" "}
                  <Link href="/case-studies/clubhouse1099" className="text-[#281B16] font-bold underline decoration-[#FE299E] underline-offset-4 hover:text-[#FE299E]">
                    Clubhouse 1099
                  </Link>
                  .
                </p>

                {/* Primary Studio & Pipes Ecosystem CTAs */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <button
                    onClick={() => openContact("calendly")}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-[#281B16] text-[#F2EAE0] font-sans text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#FE299E] hover:text-white transition-colors cursor-pointer border-none shadow-sm whitespace-nowrap"
                    data-testid="button-studio-hero-book"
                  >
                    <Calendar className="w-4 h-4 text-[#FE299E] shrink-0" />
                    Book 30-Min Intro Call
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </button>

                  <a
                    href="https://pipes.pink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#FE299E] hover:bg-[#d81b80] text-white font-mono text-xs font-bold uppercase tracking-[0.13em] transition-colors shadow-sm no-underline whitespace-nowrap"
                    data-testid="link-studio-hero-pipes"
                  >
                    <span>| | | Claim Your Pipe ($9/yr)</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>

                  <a
                    href="https://pipes.pink/write"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#F2EAE0] text-[#281B16] border border-[#281B16] hover:border-[#FE299E] hover:text-[#FE299E] font-mono text-xs font-bold uppercase tracking-[0.13em] transition-colors no-underline whitespace-nowrap"
                    data-testid="link-studio-hero-hash"
                  >
                    <span>Open # Hash + ;-] Semi Free</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FE299E] shrink-0" />
                  </a>
                </div>

                {/* Live Sovereign Ecosystem Quick-Launch Bar */}
                <div className="p-3.5 rounded-sm bg-[#231814] text-[#F2EAE0] border border-[#3D2C24] mb-5 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-[0.15em]">
                    <span className="text-[#FE299E] font-bold">
                      LIVE SOVEREIGN ECOSYSTEM // SIGN UP OR LAUNCH IN BROWSER
                    </span>
                    <span className="text-[#E4DACB]">70% CREATOR ROYALTIES · ZERO CLOUD PII</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <a
                      href="https://pipes.pink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-sm bg-[#32221C] hover:bg-[#3D2C24] border border-[#4A372E] hover:border-[#FE299E] text-left transition-colors no-underline block"
                    >
                      <span className="font-mono text-[10px] font-bold text-[#FE299E] block whitespace-nowrap">| | | PIPES.PINK</span>
                      <span className="font-sans text-xs font-semibold text-[#F2EAE0] block whitespace-nowrap">Claim Pipe · $9/yr ↗</span>
                    </a>
                    <a
                      href="https://pipes.pink/write"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-sm bg-[#32221C] hover:bg-[#3D2C24] border border-[#4A372E] hover:border-[#FE299E] text-left transition-colors no-underline block"
                    >
                      <span className="font-mono text-[10px] font-bold text-[#FE299E] block whitespace-nowrap"># HASH + ;-] SEMI</span>
                      <span className="font-sans text-xs font-semibold text-[#F2EAE0] block whitespace-nowrap">Writing Studio · Free ↗</span>
                    </a>
                    <a
                      href="https://greater.pink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-sm bg-[#32221C] hover:bg-[#3D2C24] border border-[#4A372E] hover:border-[#FE299E] text-left transition-colors no-underline block"
                    >
                      <span className="font-mono text-[10px] font-bold text-[#FE299E] block whitespace-nowrap">&gt; GREATER.PINK</span>
                      <span className="font-sans text-xs font-semibold text-[#F2EAE0] block whitespace-nowrap">90+ Lang Classroom ↗</span>
                    </a>
                    <a
                      href="https://bolt.pipes.pink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-sm bg-[#32221C] hover:bg-[#3D2C24] border border-[#4A372E] hover:border-[#FE299E] text-left transition-colors no-underline block"
                    >
                      <span className="font-mono text-[10px] font-bold text-[#FE299E] block whitespace-nowrap">&amp; MARIGOLD</span>
                      <span className="font-sans text-xs font-semibold text-[#F2EAE0] block whitespace-nowrap">500k+ Row DuckDB ↗</span>
                    </a>
                  </div>
                </div>

                {/* Cross-Link to Principal Portfolio */}
                <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-2 rounded-sm bg-[#F2EAE0] border border-[#D3C7B5] text-xs text-[#4A3A32]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#281B16] font-bold">
                    Hiring Full-Time Executive W2 or Principal Architect?
                  </span>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 font-sans font-bold text-[#281B16] hover:text-[#FE299E] no-underline whitespace-nowrap"
                    data-testid="link-hero-to-portfolio"
                  >
                    View Kyle&apos;s Principal Portfolio &amp; 12 Case Studies
                    <ArrowRight className="w-3.5 h-3.5 text-[#FE299E]" />
                  </Link>
                </div>
              </motion.div>

              {/* Right 5 Cols: Museum-Grade Architectural Blueprint Plate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-sm p-4 md:p-5 shadow-[0_20px_50px_rgba(40,27,22,0.08)]">
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#D3C7B5]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#281B16] font-bold">
                      FIG. 00 // SOVEREIGN SYSTEMS &amp; SWISS GRID PRACTICE
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#FE299E] font-bold">
                      ALBERS · VIGNELLI · RAMS
                    </span>
                  </div>

                  <div
                    className="relative overflow-hidden rounded-sm border border-[#D3C7B5] bg-[#EAE0D0] group cursor-pointer"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/studio/studio-hero-architecture.png",
                        title: "Colon Hyphen Bracket — Systems & Product Architecture Blueprint",
                        subtitle:
                          "Precision geometric grid study uniting Merkle-DAG topology, golden-ratio drafting, and Josef Albers warm sandstone materiality.",
                      })
                    }
                  >
                    <img
                      src="/images/studio/studio-hero-architecture.png"
                      onError={(e) => {
                        if (!e.currentTarget.src.endsWith(".svg")) {
                          e.currentTarget.src = "/images/studio/studio-hero-architecture.svg";
                        }
                      }}
                      alt="Architectural blueprint and Swiss grid system study on warm sandstone paper"
                      className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-sm bg-[#281B16]/90 text-[#F2EAE0] font-mono text-[10px] uppercase tracking-[0.12em] flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                      <ZoomIn className="w-3 h-3 text-[#FE299E]" />
                      Inspect Plate
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-3.5 mt-3.5 border-t border-[#D3C7B5] text-left">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4A3A32] font-bold">
                        Principal Pedigree
                      </div>
                      <div className="font-serif text-base font-bold text-[#281B16]">
                        15+ Yrs · Regulated
                      </div>
                    </div>
                    <div className="border-l border-[#D3C7B5] pl-2.5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4A3A32] font-bold">
                        Enterprise Reach
                      </div>
                      <div className="font-serif text-base font-bold text-[#281B16]">
                        35M+ Patients · 3M Staff
                      </div>
                    </div>
                    <div className="border-l border-[#D3C7B5] pl-2.5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4A3A32] font-bold">
                        Lab Output (16 Mo)
                      </div>
                      <div className="font-serif text-base font-bold text-[#FE299E]">
                        6 Live Platforms
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 5-Column Studio Fast-Track Ledger */}
            <div className="mt-8 pt-6 border-t border-[#D3C7B5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-[#F2EAE0] border border-[#D3C7B5] p-4 rounded-sm">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                  01 // THE THESIS
                </div>
                <div className="font-serif text-lg font-bold text-[#281B16] mb-1">
                  Good, Fast &amp; Affordable
                </div>
                <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                  How one Principal Architect + custom AI harnesses outperforms a 10-person agency pod.
                </p>
              </div>

              <div className="bg-[#F2EAE0] border border-[#D3C7B5] p-4 rounded-sm">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                  02 // THE OVERLOOKED
                </div>
                <div className="font-serif text-lg font-bold text-[#281B16] mb-1">
                  Startups, Schools &amp; Main St.
                </div>
                <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                  Sovereign software for high-conviction builders, classical academies, faith orgs &amp; field teams.
                </p>
              </div>

              <div className="bg-[#F2EAE0] border border-[#D3C7B5] p-4 rounded-sm">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                  03 // REGULATED TECH
                </div>
                <div className="font-serif text-lg font-bold text-[#281B16] mb-1">
                  Banking, Wealth &amp; Health
                </div>
                <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                  Proven across Custodia Bank ($71M+), Fidelity Investments, UnitedHealth (35M+) &amp; Walmart (3M).
                </p>
              </div>

              <div className="bg-[#F2EAE0] border border-[#D3C7B5] p-4 rounded-sm">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                  04 // THE LAB (16 MO)
                </div>
                <div className="font-serif text-lg font-bold text-[#281B16] mb-1">
                  Pipes, Hash, SEMI &amp; Marigold
                </div>
                <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                  Explore 12 live production views from our sovereign protocol, WebGPU classroom &amp; DuckDB suite.
                </p>
              </div>

              <div className="bg-[#281B16] text-[#F2EAE0] border border-[#281B16] p-4 rounded-sm">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                  05 // FIXED-FEE VELOCITY
                </div>
                <div className="font-serif text-lg font-bold text-[#F2EAE0] mb-1">
                  $7.5k Sprint · $15k–$25k Build
                </div>
                <p className="font-sans text-xs text-[#E4DACB] leading-relaxed">
                  Zero hourly billing games. Clear scope, direct principal execution, and clean Git handoff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Infinite-Scrolling Enterprise & Venture Pedigree Bar */}
        <ClientLogoBar />

        {/* ============================================================
            SECTION 01 // THE THESIS — GOOD, FAST & CHEAP. PICK ALL THREE.
           ============================================================ */}
        <section
          id="thesis"
          ref={(el) => {
            sectionRefs.current.thesis = el;
          }}
          className="py-12 md:py-16 border-b border-[#D3C7B5] scroll-mt-28"
          data-testid="section-thesis"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            {/* Section Eyebrow */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-[#D3C7B5]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-sm bg-[#281B16] text-[#FE299E] font-mono text-xs font-bold uppercase tracking-[0.16em]">
                  01 // THE THESIS
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#4A3A32] font-bold">
                  Why the Traditional Agency Model Is Broken
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#4A3A32] font-bold">
                STUDIO OF ONE · ZERO HANDOFF TAX
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left 6 Cols: Editorial Thesis */}
              <div className="lg:col-span-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#FE299E] font-bold mb-2">
                  There&apos;s a Joke All Developers Know:
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#281B16] tracking-tight leading-[1.08] mb-5">
                  &ldquo;Good, Fast, &amp; Cheap.{" "}
                  <span className="italic font-normal text-[#FE299E]">
                    Pick All Three.&rdquo;
                  </span>
                </h2>

                <div className="space-y-4 font-serif text-base md:text-lg text-[#281B16] leading-[1.65] max-w-[64ch]">
                  <p>
                    For thirty years, big consultancies and dev shops have hidden behind the Iron Triangle: if you want software that is{" "}
                    <strong className="font-semibold text-[#281B16]">good</strong> and{" "}
                    <strong className="font-semibold text-[#281B16]">fast</strong>, it won&apos;t be affordable; if it&apos;s{" "}
                    <strong className="font-semibold text-[#281B16]">good</strong> and{" "}
                    <strong className="font-semibold text-[#281B16]">affordable</strong>, you&apos;ll wait nine months.
                  </p>
                  <p>
                    Here is the truth they won&apos;t tell you: the Iron Triangle was never a law of physics. It was a side effect of{" "}
                    <strong className="font-semibold text-[#281B16]">communication overhead</strong>. When a client hires a traditional agency, 75% of the budget evaporates into telephone-game handoffs between account executives, junior researchers, wireframe designers, frontend contractors, and backend teams who never talk to the customer.
                  </p>
                  <p>
                    At <strong className="font-semibold text-[#281B16]">Colon Hyphen Bracket</strong>, we collapse that entire chain into a single Principal Product &amp; Systems Architect with 15+ years of institutional pattern recognition—augmented by deterministic AI coding harnesses, automated schema validators, and a battle-tested component library.
                  </p>
                </div>

                {/* 4 Thesis Proof Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#F2EAE0] border border-[#D3C7B5] p-4 rounded-sm">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                      PILLAR 01 // ZERO TRANSLATION LOSS
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#281B16] mb-1">
                      The Architect Is the Builder
                    </h3>
                    <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                      The person who interviews your stakeholders in the morning is the same person modeling your database schema at noon and shipping production TypeScript by evening.
                    </p>
                  </div>

                  <div className="bg-[#F2EAE0] border border-[#D3C7B5] p-4 rounded-sm">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                      PILLAR 02 // AI HARNESS MULTIPLIER
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#281B16] mb-1">
                      10x Output, Principal Judgment
                    </h3>
                    <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                      Junior devs use AI to generate brittle boilerplate. A 15+ year architect uses custom MCP harnesses to execute verified systems architecture at 10x speed.
                    </p>
                  </div>

                  <div className="bg-[#F2EAE0] border border-[#D3C7B5] p-4 rounded-sm">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                      PILLAR 03 // PRODUCTION CODE FIRST
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#281B16] mb-1">
                      Working Software Over Slide Decks
                    </h3>
                    <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                      We don&apos;t spend 8 weeks billing you for static Figma pictures that engineers later reject. We design directly in responsive, accessible, production-ready code.
                    </p>
                  </div>

                  <div className="bg-[#F2EAE0] border border-[#D3C7B5] p-4 rounded-sm">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                      PILLAR 04 // SOVEREIGN OWNERSHIP
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#281B16] mb-1">
                      Zero Lock-In Handoff
                    </h3>
                    <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                      Every sprint ends with a clean, documented Git repository, architectural decision records (ADRs), and zero hostage retainers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right 6 Cols: The Architectural Comparison Ledger */}
              <div className="lg:col-span-6">
                <div className="bg-[#281B16] text-[#F2EAE0] rounded-sm border border-[#3D2C24] p-6 md:p-7 shadow-[0_24px_60px_rgba(40,27,22,0.16)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#3D2C24]">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FE299E] font-bold block">
                        ARCHITECTURAL AUDIT // ECONOMIES OF PRECISION
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#F2EAE0] mt-1">
                        Big Agency Retainer vs. CHB Studio Sprint
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-sm bg-[#FE299E]/15 border border-[#FE299E]/40 font-mono text-[10px] text-[#FE299E] font-bold uppercase tracking-[0.14em]">
                      2026 Benchmark
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        dimension: "Time to Working Production Software",
                        agency: "4 to 9 Months (after 6 weeks of discovery slides)",
                        chb: "5 Days (1-Week Sprint) to 4 Weeks (Full System)",
                      },
                      {
                        dimension: "Who Actually Does the Work",
                        agency: "Senior partner pitches you; junior contractors build it",
                        chb: "100% Principal Architect (Kyle) from intake to Git push",
                      },
                      {
                        dimension: "Design-to-Engineering Handoff",
                        agency: "200-page Figma spec that loses 40% fidelity in Jira",
                        chb: "Zero handoff—designed & shipped directly in React/TS/Rust",
                      },
                      {
                        dimension: "AI & Data Privacy Architecture",
                        agency: "Generic OpenAI wrapper leaking customer PII to the cloud",
                        chb: "Local-first DuckDB-WASM, WebGPU & zero-knowledge schemas",
                      },
                      {
                        dimension: "Typical Engagement Investment",
                        agency: "$150,000 – $500,000+ open-ended monthly burn",
                        chb: "$7,500 Fixed 1-Week Sprint · $15k–$25k Systems Build",
                      },
                    ].map((row, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-sm bg-[#32221C] border border-[#46332B]"
                      >
                        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#F2EAE0] font-bold mb-1.5">
                          0{idx + 1} // {row.dimension}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div className="text-xs font-sans text-[#E4DACB] bg-[#231814] p-2 rounded-sm border border-[#3D2C24]">
                            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#D3C7B5] font-bold block mb-0.5">
                              Traditional Agency
                            </span>
                            {row.agency}
                          </div>
                          <div className="text-xs font-sans text-[#F2EAE0] bg-[#281B16] p-2 rounded-sm border border-[#FE299E]/60">
                            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#FE299E] font-bold block mb-0.5">
                              Colon Hyphen Bracket :-]
                            </span>
                            {row.chb}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#3D2C24] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="font-serif italic text-sm text-[#F2EAE0]">
                      &ldquo;We don&apos;t bill you for meetings. We bill you for solved architecture.&rdquo;
                    </p>
                    <button
                      onClick={() => openContact("calendly")}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#FE299E] text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-[#d81b80] transition-colors cursor-pointer border-none shrink-0 whitespace-nowrap"
                      data-testid="button-thesis-book"
                    >
                      Scope a 1-Week Sprint
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 02 // THE OVERLOOKED — ARCHITECTURE FOR THE OVERLOOKED
           ============================================================ */}
        <section
          id="overlooked"
          ref={(el) => {
            sectionRefs.current.overlooked = el;
          }}
          className="py-12 md:py-16 border-b border-[#D3C7B5] scroll-mt-28"
          data-testid="section-overlooked"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            {/* Section Eyebrow */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-[#D3C7B5]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-sm bg-[#281B16] text-[#FE299E] font-mono text-xs font-bold uppercase tracking-[0.16em]">
                  02 // THE OVERLOOKED
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#4A3A32] font-semibold">
                  Sovereign Software for Underserved Verticals
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#4A3A32] font-semibold">
                4 CORE VERTICALS · LIVE SHIPPED PROOF
              </span>
            </div>

            {/* Section Header Copy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-end">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#281B16] tracking-tight leading-[1.08]">
                  Architecture for the{" "}
                  <span className="italic font-normal text-[#FE299E]">
                    overlooked.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="font-serif text-base md:text-lg text-[#281B16] leading-[1.6]">
                  Modern enterprise software has a blind spot. Every SaaS platform is priced and bloated for coastal conglomerates with 40-person IT departments—leaving high-velocity startups, classical schools, faith institutions, and Main Street operators behind. We build specifically for them.
                </p>
              </div>
            </div>

            {/* 2x2 Grid of Museum-Grade Vertical Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {OVERLOOKED_VERTICALS.map((card) => (
                <article
                  key={card.number}
                  className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-sm overflow-hidden flex flex-col justify-between shadow-[0_12px_34px_rgba(40,27,22,0.05)]"
                  data-testid={`card-overlooked-${card.number}`}
                >
                  <div>
                    {/* Top Technical Bar */}
                    <div className="px-6 py-3 border-b border-[#D3C7B5] flex items-center justify-between gap-2 bg-[#EAE0D0]/55">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#281B16] font-bold">
                        {card.number} // {card.tag}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#FE299E]" />
                    </div>

                    {/* Framed Editorial Illustration */}
                    <div
                      className="relative aspect-[16/9] bg-[#EAE0D0] border-b border-[#D3C7B5] overflow-hidden group cursor-pointer"
                      onClick={() =>
                        setLightboxImage({
                          src: card.image,
                          title: card.title,
                          subtitle: card.quote,
                        })
                      }
                    >
                      <img
                        src={card.image}
                        onError={(e) => {
                          if (!e.currentTarget.src.endsWith(".svg")) {
                            e.currentTarget.src = card.image.replace(/\.png$/, ".svg");
                          }
                        }}
                        alt={card.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-sm bg-[#281B16]/85 text-[#F2EAE0] font-mono text-[10px] uppercase tracking-[0.12em] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3 h-3 text-[#FE299E]" />
                        Inspect Plate
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 md:p-6">
                      <h3 className="font-serif text-xl md:text-2xl text-[#281B16] tracking-tight leading-snug mb-2.5">
                        {card.title}
                      </h3>

                      <blockquote className="pl-3.5 border-l-2 border-[#FE299E] font-serif italic text-sm md:text-base text-[#3D2C24] mb-3.5">
                        {card.quote}
                      </blockquote>

                      <p className="font-sans text-xs md:text-sm text-[#281B16] leading-relaxed mb-4">
                        {card.problem}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {card.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 font-sans text-xs text-[#4A3A32] leading-relaxed"
                          >
                            <span
                              className="mt-1 text-[#FE299E] text-[9px] shrink-0 select-none"
                              aria-hidden="true"
                            >
                              ▲
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Live Shipped Proof Links */}
                  <div className="px-5 md:px-6 py-3.5 bg-[#EAE0D0]/60 border-t border-[#D3C7B5] flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#3D2C24] font-bold">
                      {card.shippedProof.label}:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {card.shippedProof.items.map((proof) => (
                        <Link
                          key={proof.name}
                          href={proof.href}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] font-mono text-[10px] text-[#281B16] font-semibold hover:text-[#FE299E] no-underline transition-colors whitespace-nowrap"
                        >
                          {proof.name}
                          <ArrowUpRight className="w-3 h-3 text-[#FE299E]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 03 // REGULATED SYSTEMS — HEALTH, FINTECH & DEFENSE
           ============================================================ */}
        <section
          id="regulated"
          ref={(el) => {
            sectionRefs.current.regulated = el;
          }}
          className="py-12 md:py-16 border-b border-[#D3C7B5] scroll-mt-28"
          data-testid="section-regulated"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            {/* Section Eyebrow */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-[#D3C7B5]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-sm bg-[#281B16] text-[#FE299E] font-mono text-xs font-bold uppercase tracking-[0.16em]">
                  03 // REGULATED SYSTEMS
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#4A3A32] font-semibold">
                  Unblocking High-Compliance Financial, Clinical &amp; Civic Tech
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#4A3A32] font-semibold">
                HIPAA · FED MASTER ACCOUNT · SOC2 · ZERO-PII
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
              {/* Left 6 Cols: Regulated Narrative */}
              <div className="lg:col-span-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#FE299E] font-bold mb-2">
                  High-Stakes Systems Architecture
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#281B16] tracking-tight leading-[1.08] mb-5">
                  Unblocking{" "}
                  <span className="italic font-normal text-[#FE299E]">
                    health, financial &amp; civic
                  </span>{" "}
                  technology.
                </h2>

                <div className="space-y-4 font-serif text-base md:text-lg text-[#281B16] leading-[1.65] max-w-[64ch] mb-5">
                  <p>
                    In regulated industries, most teams face a false choice: move fast and fail the audit, or hire an enterprise consultancy that buries clinicians, bankers, and analysts under 47-field compliance forms.
                  </p>
                  <p>
                    Having served as <strong className="font-semibold text-[#281B16]">Lead Product Designer (First Design Hire) at Custodia Bank</strong> (launching the core banking &amp; Bitcoin custody platform in 30 days ahead of Federal Reserve review), <strong className="font-semibold text-[#281B16]">2-year embedded lead at Fidelity Investments</strong>, and <strong className="font-semibold text-[#281B16]">Principal Mobile Designer at UnitedHealth Group</strong> (35M+ patients), we design systems where cryptographic security and compliance are baked into the data model—so the human interface stays effortless.
                  </p>
                </div>

                <ul className="space-y-2.5">
                  {[
                    "Cryptographic Custody & Multi-Sig Ceremony UX: hardware-key quorum workflows, Fedwire settlement, and Money Market treasury controls.",
                    "Zero-PII Browser Analytics (DuckDB-WASM): run complex healthcare claims, voter roll (500k+ records), or financial reconciliation inside the client browser without transmitting raw PII to cloud servers.",
                    "Clinical & Diagnostic Speed: PACS imaging and EHR interfaces engineered to save physicians clicks per patient while maintaining full HIPAA traceability.",
                    "Deterministic AI Guardrails: schema-constrained agent harnesses with human-in-the-loop cryptographic sign-off for regulated workflows.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 font-sans text-xs md:text-sm text-[#4A3A32] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FE299E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right 6 Cols: Regulated Monolith Plate */}
              <div className="lg:col-span-6">
                <div className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-sm p-4 md:p-5 shadow-[0_20px_50px_rgba(40,27,22,0.08)]">
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#D3C7B5]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#3D2C24] font-bold">
                      FIG. 03 // 3-TIER REGULATED ARCHITECTURE CROSS-SECTION
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#2A7B5C] font-bold">
                      CRYPTOGRAPHIC · CLINICAL · INSTITUTIONAL
                    </span>
                  </div>

                  <div
                    className="relative overflow-hidden rounded-sm border border-[#D3C7B5] bg-[#EAE0D0] group cursor-pointer"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/studio/studio-regulated-monolith.png",
                        title: "Regulated Banking, Clinical & Civic Systems Blueprint",
                        subtitle:
                          "Three-tier architectural cross-section uniting cryptographic vault geometry, clinical waveform telemetry, and institutional command ledgers.",
                      })
                    }
                  >
                    <img
                      src="/images/studio/studio-regulated-monolith.png"
                      onError={(e) => {
                        if (!e.currentTarget.src.endsWith(".svg")) {
                          e.currentTarget.src = "/images/studio/studio-regulated-monolith.svg";
                        }
                      }}
                      alt="Three-tier architectural blueprint uniting cryptographic vault geometry, clinical telemetry, and institutional Swiss grid ledger"
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-sm bg-[#281B16]/85 text-[#F2EAE0] font-mono text-[10px] uppercase tracking-[0.12em] flex items-center gap-1.5">
                      <ZoomIn className="w-3 h-3 text-[#FE299E]" />
                      Inspect Plate
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#D3C7B5] flex flex-wrap items-center justify-between gap-2 text-xs text-[#4A3A32]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#3D2C24] font-semibold">
                      INSTITUTIONAL CUSTODY &amp; ZERO-KNOWLEDGE TELEMETRY
                    </span>
                    <Link
                      href="/case-studies/custodia"
                      className="font-mono text-[11px] font-bold text-[#281B16] hover:text-[#FE299E] no-underline inline-flex items-center gap-1 whitespace-nowrap"
                    >
                      Read Custodia Bank Case Study
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FE299E]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 Regulated Production Proof Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {REGULATED_PROOFS.map((item) => (
                <Link
                  key={item.client}
                  href={item.href}
                  className="group bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] rounded-sm p-5 transition-all no-underline flex flex-col justify-between"
                  data-testid={`card-regulated-${item.client.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold">
                        {item.metric}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#4A3A32] group-hover:text-[#FE299E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#281B16] group-hover:text-[#FE299E] transition-colors mb-1">
                      {item.client}
                    </h3>
                    <div className="font-mono text-[11px] text-[#3D2C24] font-semibold mb-2">
                      {item.domain}
                    </div>
                    <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                  <div className="mt-3.5 pt-2.5 border-t border-[#D3C7B5]/70 font-mono text-[10px] uppercase tracking-[0.14em] text-[#281B16] font-bold flex items-center gap-1">
                    Inspect Architecture Case Study
                    <ArrowRight className="w-3 h-3 text-[#FE299E]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 04 // THE LAB — WHAT WE'VE SHIPPED IN THE LAST 16 MONTHS
           ============================================================ */}
        <section
          id="lab"
          ref={(el) => {
            sectionRefs.current.lab = el;
          }}
          className="py-12 md:py-16 border-b border-[#D3C7B5] scroll-mt-28"
          data-testid="section-lab"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            {/* Section Eyebrow */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-[#D3C7B5]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-sm bg-[#FE299E] text-white font-mono text-xs font-bold uppercase tracking-[0.16em]">
                  04 // THE LAB · 16-MONTH R&amp;D SUITE
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#4A3A32] font-semibold">
                  Proprietary Technology &amp; Live Sovereign Ecosystem
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#281B16] font-bold">
                12 PRODUCTION VIEWS · OPEN-SOURCE &amp; NATIVE CODE
              </span>
            </div>

            {/* Section Headline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-end">
              <div className="lg:col-span-7">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#FE299E] font-bold mb-2">
                  We Don&apos;t Just Advise. We Ship Our Own Category-Defining Software.
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#281B16] tracking-tight leading-[1.08]">
                  Proprietary technology shipped in the{" "}
                  <span className="italic font-normal text-[#FE299E]">
                    last 16 months.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="font-serif text-lg text-[#281B16] leading-[1.6]">
                  When we first launched this studio page 16 months ago, we promised a roadmap of privacy-first local AI, curator economics, and sovereign education tools. Here is the receipts-first look at every platform and view we have engineered and shipped into production since.
                </p>
              </div>
            </div>

            {/* Category Filter Tabs for the 12-View Sovereign Stack Explorer */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div
                className="flex flex-wrap items-center gap-2"
                role="tablist"
                aria-label="Filter Lab production views"
              >
                {[
                  { id: "all", label: "All 12 Views" },
                  { id: "protocol", label: "Pipes.Pink Protocol (5)" },
                  { id: "atelier", label: "Hash Sanctuary + SEMI ;-] (1)" },
                  { id: "education", label: "Classrooms & Podcast Pavilion (2)" },
                  { id: "desktop", label: "macOS ! BANG IDE (1)" },
                  { id: "venture", label: "Marigold, Clubhouse & Cassandra (3)" },
                ].map((tab) => {
                  const active = activeLabCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveLabCategory(tab.id);
                        setSelectedLabIndex(0);
                      }}
                      className={`px-3.5 py-2 rounded-sm font-mono text-[11px] uppercase tracking-[0.13em] transition-all cursor-pointer border ${
                        active
                          ? "bg-[#281B16] text-[#F2EAE0] border-[#281B16] font-bold"
                          : "bg-[#F2EAE0] text-[#3D2C24] font-semibold border-[#D3C7B5] hover:border-[#281B16] hover:text-[#281B16]"
                      }`}
                      data-testid={`button-lab-filter-${tab.id}`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setSelectedLabIndex((prev) =>
                      prev <= 0 ? filteredLabViews.length - 1 : prev - 1
                    )
                  }
                  className="p-2 rounded-sm bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#281B16] text-[#281B16] cursor-pointer"
                  aria-label="Previous lab view"
                  data-testid="button-lab-prev"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs text-[#281B16] font-semibold px-2">
                  View {safeLabIndex + 1} of {filteredLabViews.length}
                </span>
                <button
                  onClick={() =>
                    setSelectedLabIndex((prev) =>
                      prev >= filteredLabViews.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="p-2 rounded-sm bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#281B16] text-[#281B16] cursor-pointer"
                  aria-label="Next lab view"
                  data-testid="button-lab-next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Dark Espresso Studio Matting Showcase (12 Live Views) */}
            <div
              className="bg-[#231814] text-[#F2EAE0] rounded-sm border border-[#3D2C24] p-5 md:p-8 shadow-[0_28px_70px_rgba(35,24,20,0.22)] mb-12"
              data-testid="showcase-lab-explorer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left 7 Cols: Framed Retina Product Screenshot on Dark Espresso Matting */}
                <div className="lg:col-span-7">
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#3D2C24]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FE299E]" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F2EAE0] font-bold">
                        {activeLabView.badge}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#E4DACB]">
                      {activeLabView.shippedDate}
                    </span>
                  </div>

                  <div
                    className="relative rounded-sm overflow-hidden border border-[#4A372E] bg-[#18100D] group cursor-pointer shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
                    onClick={() =>
                      setLightboxImage({
                        src: activeLabView.src,
                        title: activeLabView.title,
                        subtitle: activeLabView.subtitle,
                      })
                    }
                  >
                    <img
                      src={activeLabView.src}
                      alt={activeLabView.title}
                      className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-sm bg-[#231814]/90 border border-[#FE299E]/50 text-[#F2EAE0] font-mono text-[10px] uppercase tracking-[0.14em] flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 text-[#FE299E]" />
                      Inspect Full-Resolution View
                    </div>
                  </div>
                </div>

                {/* Right 5 Cols: View Architecture Details & Links */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#32221C] border border-[#4A372E] font-mono text-[10px] uppercase tracking-[0.14em] text-[#FE299E] font-bold mb-3">
                      {activeLabView.categoryLabel}
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-[#F2EAE0] leading-snug mb-3">
                      {activeLabView.title}
                    </h3>

                    <p className="font-sans text-sm text-[#E4DACB] leading-relaxed mb-6">
                      {activeLabView.subtitle}
                    </p>

                    <div className="bg-[#1B120F] border border-[#3D2C24] rounded-sm p-4 mb-6">
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#E4DACB] font-bold mb-2.5">
                        ARCHITECTURAL HIGHLIGHTS //
                      </div>
                      <ul className="space-y-2">
                        {activeLabView.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 font-sans text-xs text-[#F2EAE0]"
                          >
                            <span className="text-[#FE299E] font-mono text-[10px] mt-0.5">
                              ▲
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#3D2C24]">
                    {activeLabView.liveUrl && (
                      <a
                        href={activeLabView.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-[#FE299E] hover:bg-[#d81b80] text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] no-underline transition-colors"
                        data-testid="link-lab-view-live"
                      >
                        Launch {activeLabView.liveLabel}
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                      </a>
                    )}

                    <Link
                      href={activeLabView.caseStudyHref}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#32221C] hover:bg-[#3D2C24] text-[#F2EAE0] border border-[#4A372E] font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-colors no-underline"
                      data-testid="link-lab-view-casestudy"
                    >
                      Read Case Study
                      <ArrowRight className="w-3.5 h-3.5 text-[#FE299E]" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Thumbnail Filmstrip Selector across all Filtered Views */}
              <div className="mt-7 pt-5 border-t border-[#3D2C24]">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#E4DACB] font-bold mb-3">
                  SELECT PRODUCTION VIEW ({filteredLabViews.length} AVAILABLE) //
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {filteredLabViews.map((view, idx) => {
                    const isSelected = idx === safeLabIndex;
                    return (
                      <button
                        key={view.id}
                        onClick={() => setSelectedLabIndex(idx)}
                        className={`text-left p-2 rounded-sm border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#32221C] border-[#FE299E] ring-1 ring-[#FE299E]"
                            : "bg-[#1B120F] border-[#3D2C24] opacity-80 hover:opacity-100 hover:border-[#6B554D]"
                        }`}
                        data-testid={`button-lab-thumb-${view.id}`}
                      >
                        <div className="aspect-[16/10] rounded-sm overflow-hidden bg-[#120C0A] mb-1.5 border border-[#2D201A]">
                          <img
                            src={view.src}
                            alt={view.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#FE299E] font-bold truncate">
                          {view.categoryLabel}
                        </div>
                        <div className="font-sans text-[11px] font-medium text-[#F2EAE0] truncate">
                          {view.title}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 6 Lab Capability Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {LAB_CAPABILITIES.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <div
                    key={cap.code}
                    className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-sm p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FE299E] font-bold">
                          {cap.code}
                        </span>
                        <div className="w-8 h-8 rounded-sm bg-[#281B16] text-[#FE299E] flex items-center justify-center">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#281B16] mb-2">
                        {cap.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-[#4A3A32] leading-relaxed">
                        {cap.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3-Tier Sovereign Ecosystem & R&D Studio Conversion Matrix */}
            <div className="bg-[#231814] text-[#F2EAE0] border border-[#3D2C24] rounded-sm p-6 md:p-10 shadow-[0_24px_60px_rgba(35,24,20,0.2)]">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#3D2C24]">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#FE299E] font-bold block mb-1">
                    LIVE SOVEREIGN ECOSYSTEM · DIRECT ACCESS
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F2EAE0]">
                    Use our live products today—or deploy our studio on yours.
                  </h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#E4DACB] font-semibold">
                  ZERO-CLOUD TELEMETRY · 70% CURATOR ROYALTIES · FIXED-FEE SPRINTS
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Tier 01: Free Hash & SEMI Studio */}
                <div className="bg-[#2D1F1A] border border-[#46332B] rounded-sm p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#E4DACB] font-bold">
                        01 // PRIVATE AI SANCTUARY
                      </span>
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#231814] text-[#F2EAE0] border border-[#46332B] font-mono text-xs font-bold">
                        FREE
                      </span>
                    </div>
                    <h4 className="font-serif text-2xl text-[#F2EAE0] font-bold mb-2">
                      # Hash &amp; ;-] Semi Studio
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#E4DACB] leading-relaxed mb-5">
                      Write, research, and synthesize inside an encrypted local-first Markdown notebook paired with SEMI—our Socratic multi-model agent (Claude, Gemini, Grok, Local WebGPU).
                    </p>
                  </div>
                  <a
                    href="https://pipes.pink/write"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-sm bg-[#F2EAE0] hover:bg-white text-[#281B16] font-mono text-xs font-bold uppercase tracking-[0.14em] no-underline transition-colors"
                  >
                    Open # Hash + ;-] Semi Free
                    <ExternalLink className="w-3.5 h-3.5 text-[#FE299E]" />
                  </a>
                </div>

                {/* Tier 02: Claim a Deeded Pipe ($9/yr) */}
                <div className="bg-[#2D1F1A] border-2 border-[#FE299E] rounded-sm p-6 flex flex-col justify-between relative shadow-[0_12px_35px_rgba(254,41,158,0.14)]">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FE299E] font-bold">
                        02 // SOVEREIGN CURATION PROTOCOL
                      </span>
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#FE299E] text-white font-mono text-xs font-bold">
                        $9 / YR
                      </span>
                    </div>
                    <h4 className="font-serif text-2xl text-[#F2EAE0] font-bold mb-2">
                      Claim a Deeded Pipe on Pipes.Pink
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#E4DACB] leading-relaxed mb-5">
                      Own your canonical namespace (`pipes.pink/|topic`), curate high-signal knowledge libraries or classrooms, and earn a 70% pro-rata share of protocol subscription revenue.
                    </p>
                  </div>
                  <a
                    href="https://pipes.pink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-sm bg-[#FE299E] hover:bg-[#d81b80] text-white font-mono text-xs font-bold uppercase tracking-[0.14em] no-underline transition-colors"
                  >
                    | | | Claim Your Pipe ($9/yr)
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Tier 03: 1-Week Rapid R&D Sprint ($7,500) */}
                <div className="bg-[#2D1F1A] border border-[#46332B] rounded-sm p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#E4DACB] font-bold">
                        03 // PRINCIPAL STUDIO DEPLOY
                      </span>
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#231814] text-[#FE299E] border border-[#FE299E]/50 font-mono text-xs font-bold">
                        $7,500
                      </span>
                    </div>
                    <h4 className="font-serif text-2xl text-[#F2EAE0] font-bold mb-2">
                      1-Week Surgical R&amp;D Sprint
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#E4DACB] leading-relaxed mb-5">
                      Have a regulated workflow, zero-PII DuckDB analytics engine, or flagship AI product that needs to ship now? Work directly with Kyle to unblock and ship production code in 5 days.
                    </p>
                  </div>
                  <button
                    onClick={() => openContact("calendly")}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-sm bg-[#3D2C24] hover:bg-[#FE299E] text-[#F2EAE0] hover:text-white border border-[#5C4840] font-mono text-xs font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer"
                  >
                    Book 1-Week Sprint ($7,500)
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 05 // MANIFESTO, WORKFLOW LOOM & ENGAGEMENT MODELS
           ============================================================ */}
        <section
          id="engagement"
          ref={(el) => {
            sectionRefs.current.engagement = el;
          }}
          className="py-12 md:py-16 scroll-mt-28"
          data-testid="section-engagement"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            {/* Section Eyebrow */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-[#D3C7B5]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-sm bg-[#281B16] text-[#FE299E] font-mono text-xs font-bold uppercase tracking-[0.16em]">
                  05 // MANIFESTO &amp; ENGAGEMENT
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#4A3A32] font-semibold">
                  Our Design Philosophy &amp; How We Work Together
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#4A3A32] font-semibold">
                WARM SANDSTONE · SWISS GRID · FIXED-FEE SPRINTS
              </span>
            </div>

            {/* Part A: Our Design Manifesto */}
            <div className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-sm p-6 md:p-10 mb-12 shadow-[0_16px_45px_rgba(40,27,22,0.05)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#FE299E] font-bold mb-2">
                    Our Design Manifesto
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#281B16] tracking-tight leading-[1.1] mb-4">
                    Software should feel like an{" "}
                    <span className="italic font-normal text-[#FE299E]">
                      archival monograph
                    </span>{" "}
                    &amp; a precision instrument.
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-[#4A3A32] leading-relaxed mb-6">
                    Inspired by Josef Albers&apos;s{" "}
                    <em>Interaction of Color</em>, Massimo Vignelli&apos;s architectural grids, and Dieter Rams&apos;s industrial honesty, every system we ship rejects dark-pattern bloat in favor of warm paper surfaces, mathematical proportion, and verifiable truth.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/case-studies/colors-type-grids"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#281B16] text-[#F2EAE0] font-mono text-[11px] uppercase tracking-[0.13em] hover:bg-[#FE299E] hover:text-white no-underline transition-colors whitespace-nowrap"
                      data-testid="link-manifesto-design-system"
                    >
                      Inspect Colors, Type &amp; Grids Study
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/essays/design-is-risk"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#EAE0D0] text-[#281B16] border border-[#D3C7B5] hover:border-[#281B16] font-mono text-[11px] uppercase tracking-[0.13em] no-underline transition-colors whitespace-nowrap"
                      data-testid="link-manifesto-essay"
                    >
                      Read &ldquo;Design Is Risk&rdquo;
                      <ArrowRight className="w-3.5 h-3.5 text-[#FE299E]" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 font-serif text-lg md:text-xl text-[#281B16] leading-[1.68] space-y-4 border-t lg:border-t-0 lg:border-l border-[#D3C7B5] pt-6 lg:pt-0 lg:pl-10">
                  <p className="first-letter:float-left first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-[#FE299E] first-letter:mr-3 first-letter:leading-none">
                    We believe that how a tool looks and how its database is normalized are the exact same conversation. When an interface is cluttered, it is almost always because the underlying domain model is confused. When a user has to click seven times to complete a workflow, it is because the architect designed for the org chart rather than the human being.
                  </p>
                  <p>
                    Whether we are designing a multi-signature treasury ceremony for a regulated bank, a 500k+-row civic audit workbench, or a Socratic writing sanctuary for classical scholars, our standard never changes:{" "}
                    <strong className="font-semibold text-[#281B16]">
                      clarity over decoration, local sovereignty over cloud surveillance, and shipped code over bureaucracy.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Part B: Working With Colon Hyphen Bracket + Fig. 1 Operating Loom */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#FE299E] font-bold mb-2">
                  The Operating Protocol
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#281B16] tracking-tight leading-[1.1] mb-4">
                  Working with{" "}
                  <span className="italic font-normal text-[#FE299E]">
                    Colon Hyphen Bracket.
                  </span>
                </h3>
                <p className="font-serif text-lg text-[#281B16] leading-[1.6] mb-6">
                  We respect your time. Instead of dragging your leadership team through weeks of low-signal discovery workshops, every engagement begins with a focused{" "}
                  <strong className="font-semibold text-[#281B16]">
                    30-to-120 minute high-intensity architectural intake
                  </strong>{" "}
                  where we map your constraints, audit your existing repositories or workflows, and lock in a deterministic sprint deliverable.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      code: "01 // SIMPLE ENGAGEMENTS",
                      title: "Fixed-Fee Clarity",
                      desc: "No surprise change orders or runaway hourly billing. Start with a $7,500 1-Week Rapid Sprint or a $15k–$25k 2–4 Week Systems Engagement.",
                    },
                    {
                      code: "02 // EASIER HANDOFFS",
                      title: "Clean Git & ADRs",
                      desc: "Your engineering team receives production TypeScript/React/Rust code, Storybook/Tailwind tokens, and clear Architectural Decision Records.",
                    },
                    {
                      code: "03 // FASTER & BETTER",
                      title: "AI-Accelerated Craft",
                      desc: "We bring our own proprietary agent harnesses, DuckDB-WASM templates, and Swiss-grid primitives so Day 1 starts at 80% velocity.",
                    },
                    {
                      code: "04 // PERSONAL TOUCH",
                      title: "Direct Principal Access",
                      desc: "You work directly with Kyle—never an account manager or junior subcontractor. Asynchronous Loom updates and live working sessions included.",
                    },
                  ].map((item) => (
                    <div
                      key={item.code}
                      className="bg-[#F2EAE0] border border-[#D3C7B5] p-4 rounded-sm"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE299E] font-bold mb-1">
                        {item.code}
                      </div>
                      <div className="font-serif text-lg font-bold text-[#281B16] mb-1">
                        {item.title}
                      </div>
                      <p className="font-sans text-xs text-[#4A3A32] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 6 Cols: Fig. 1 — The CHB Operating Loom Plate */}
              <div className="lg:col-span-6">
                <div className="bg-[#F2EAE0] border border-[#D3C7B5] rounded-sm p-4 md:p-6 shadow-[0_20px_50px_rgba(40,27,22,0.08)]">
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#D3C7B5]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#3D2C24] font-bold">
                      FIG. 01 // THE CHB OPERATING LOOM (INTAKE TO PRODUCTION)
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#FE299E] font-bold">
                      30–120 MIN INTAKE → SHIPPED CODE
                    </span>
                  </div>

                  <div
                    className="relative overflow-hidden rounded-sm border border-[#D3C7B5] bg-[#EAE0D0] group cursor-pointer"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/studio/studio-workflow-loom.png",
                        title: "Fig. 1 — The Colon Hyphen Bracket Operating Loom",
                        subtitle:
                          "Four-stage architectural schematic: (1) 30–120 Min High-Signal Intake, (2) First-Principles Schema & Grid Modeling, (3) AI-Harness Accelerated Build, (4) Sealed Production Handoff.",
                      })
                    }
                  >
                    <img
                      src="/images/studio/studio-workflow-loom.png"
                      onError={(e) => {
                        if (!e.currentTarget.src.endsWith(".svg")) {
                          e.currentTarget.src = "/images/studio/studio-workflow-loom.svg";
                        }
                      }}
                      alt="Bauhaus and Massimo Vignelli 4-stage horizontal systems diagram showing raw signal weaving into a sealed software monograph"
                      loading="lazy"
                      className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-sm bg-[#281B16]/85 text-[#F2EAE0] font-mono text-[10px] uppercase tracking-[0.12em] flex items-center gap-1.5">
                      <ZoomIn className="w-3 h-3 text-[#FE299E]" />
                      Inspect Fig. 1
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 pt-3.5 mt-3.5 border-t border-[#D3C7B5] font-mono text-[10px] text-[#3D2C24] font-semibold">
                    <div>
                      <span className="text-[#FE299E] font-bold block">STAGE 01</span>
                      30–120m Intake
                    </div>
                    <div className="border-l border-[#D3C7B5] pl-2">
                      <span className="text-[#FE299E] font-bold block">STAGE 02</span>
                      Schema &amp; Grid
                    </div>
                    <div className="border-l border-[#D3C7B5] pl-2">
                      <span className="text-[#FE299E] font-bold block">STAGE 03</span>
                      Harness Build
                    </div>
                    <div className="border-l border-[#D3C7B5] pl-2">
                      <span className="text-[#FE299E] font-bold block">STAGE 04</span>
                      Git Handoff
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Canonical Sprint & Engagement Callout */}
          <SprintCallout
            onContactClick={() => openContact("calendly")}
          />
        </section>

        {/* Full-Resolution Architectural Plate & Screenshot Lightbox */}
        <Dialog
          open={!!lightboxImage}
          onOpenChange={(open) => !open && setLightboxImage(null)}
        >
          <DialogContent className="max-w-[92vw] md:max-w-5xl bg-[#231814] border-[#3D2C24] text-[#F2EAE0] p-4 md:p-6">
            <DialogTitle className="font-serif text-xl md:text-2xl text-[#F2EAE0]">
              {lightboxImage?.title}
            </DialogTitle>
            {lightboxImage?.subtitle && (
              <p className="font-sans text-xs md:text-sm text-[#D3C7B5] mt-1">
                {lightboxImage.subtitle}
              </p>
            )}
            {lightboxImage && (
              <div className="mt-3 rounded-sm overflow-hidden border border-[#4A372E] bg-[#140D0B] max-h-[75vh] flex items-center justify-center">
                <img
                  src={lightboxImage.src}
                  onError={(e) => {
                    if (
                      lightboxImage.src.includes("/images/studio/") &&
                      !e.currentTarget.src.endsWith(".svg")
                    ) {
                      e.currentTarget.src = lightboxImage.src.replace(/\.png$/, ".svg");
                    }
                  }}
                  alt={lightboxImage.title}
                  className="max-h-[73vh] w-auto object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        <ContactFormModal
          open={contactOpen}
          onOpenChange={setContactOpen}
          defaultTab={contactDefaultTab}
        />
      </div>
    </MotionConfig>
  );
}
