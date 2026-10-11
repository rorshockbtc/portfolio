import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ArrowUpRight,
  TrendingUp,
  Shield,
  Download,
  ExternalLink,
  Zap,
  Check,
  Layers,
  Cpu,
  Building2,
  HardHat,
  Eye,
  Activity,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "/artwork/hero.jpg";
import ContactFormModal from "@/components/contact-form-modal";
import {
  BrandMark,
  NamespaceBadge,
  MetricStrip,
  LivingProofCard,
  InstitutionalCard,
  SprintCallout,
  ProtectedVault,
  ClientLogoBar,
  AlbersInteractionCard,
  VideoShowcase,
  type LivingProofData,
  type InstitutionalRecord,
  type MetricItem,
} from "@/components/chb";

// ─── Audience / Perspective Tracks ──────────────────────────────────────────
type PerspectiveTrack = "design" | "development" | "architecture";

interface SpecimenMetric {
  label: string;
  value: string;
  subtext: string;
}

interface TrackConfig {
  id: PerspectiveTrack;
  label: string;
  pillTag: string;
  headlineMain: string;
  headlineAmp: string;
  headlineSub: string;
  subhead: string;
  categoryBadge: string;
  valueProps: { text: string }[];
  specimenMetrics: SpecimenMetric[];
  resumeFile: string;
  resumeLabel: string;
}

const TRACKS: Record<PerspectiveTrack, TrackConfig> = {
  design: {
    id: "design",
    label: "Design",
    pillTag: "Default View",
    headlineMain: "Principal Product Designer",
    headlineAmp: "&",
    headlineSub: "Design Systems Leader",
    subhead:
      "From 4-day bank sprints to 70M-patient mobile ecosystems. I design resilient, high-craft digital products that thrive under extreme technical and regulatory constraints.",
    categoryBadge: "Principal Product Designer",
    valueProps: [
      { text: "70M+ Patients (UnitedHealth Group Native Mobile)" },
      { text: "3.2M Global Associates (Walmart LMS & Search)" },
      { text: "4-Day Complete Bank Rebrand (Custodia Bank)" },
      { text: "100% Solo Ownership on High-Stakes Platforms" },
    ],
    specimenMetrics: [
      { label: "Mobile Scale", value: "70M+", subtext: "UnitedHealth Native Apps" },
      { label: "Workforce UI", value: "3.2M", subtext: "Walmart Global LMS" },
      { label: "Rebrand Sprint", value: "4 Days", subtext: "Custodia Bank v1" },
      { label: "Lead Role", value: "Sole Lead", subtext: "Zero Design Handoffs" },
    ],
    resumeFile: "/resumes/kyle-cyree-resume.pdf",
    resumeLabel: "Download Product Design Resume",
  },
  development: {
    id: "development",
    label: "Development",
    pillTag: "Engineering Focus",
    headlineMain: "Principal Systems Builder",
    headlineAmp: "&",
    headlineSub: "Protocol Engineer",
    subhead:
      "Architecting distributed protocols, multi-engine financial settlement, and generative harness engineering into zero-overhead production systems.",
    categoryBadge: "Systems Architect & Protocol Engineer",
    valueProps: [
      { text: "3 Incompatible Settlement Engines Unified (Custodia)" },
      { text: "37,000-Line TypeScript Engine with Sub-100ms Telemetry" },
      { text: "$0.00 Marginal AI Inference Pattern (Pipes Protocol)" },
      { text: "Pre-Karpathy Harness Engineering & Constitutional UAT" },
    ],
    specimenMetrics: [
      { label: "Settlement Rails", value: "3 Engines", subtext: "Fedwire, MM & Bitcoin" },
      { label: "WebSocket Bridge", value: "<100ms", subtext: "Sub-100ms Execution" },
      { label: "AI Inference", value: "$0.00", subtext: "Zero Token Overhead" },
      { label: "Codebase Scale", value: "37,000", subtext: "Lines of TypeScript" },
    ],
    resumeFile: "/resumes/kyle-cyree-resume.pdf",
    resumeLabel: "Download Systems Architect Resume",
  },
  architecture: {
    id: "architecture",
    label: "Product Architect",
    pillTag: "The 'Unit of One'",
    headlineMain: "Principal Product Architect",
    headlineAmp: "&",
    headlineSub: "Systems Builder",
    subhead:
      "I bridge the gap that breaks early-stage and growth tech companies: I architect the system, design the interface, and ship the production code.",
    categoryBadge: "Unit of One: Design + Systems + Shipping",
    valueProps: [
      { text: "Zero-to-One Production Velocity & Solo Execution" },
      { text: "C-Suite Stakeholder Facilitation & Enterprise Strategy (Fusion)" },
      { text: "S&P 500 Industrial Field Modernization (Martin Marietta)" },
      { text: "10x Acquisition Exit & -83% Fraud Reduction (Foodler)" },
    ],
    specimenMetrics: [
      { label: "Production Speed", value: "100%", subtext: "Zero-to-One Solo" },
      { label: "Global Charities", value: "1M+", subtext: "Fidelity Giving App" },
      { label: "Fraud Slashed", value: "-83%", subtext: "$6M to <$1M (Foodler)" },
      { label: "M&A Multiple", value: "10x Exit", subtext: "Successful Acquisition" },
    ],
    resumeFile: "/resumes/kyle-cyree-resume.pdf",
    resumeLabel: "Download Product Architect Resume",
  },
};

// ─── Vault Images (Custodia & Walmart) ──────────────────────────────────────────
const custodiaVaultImages = [
  {
    src: "/images/custodia/404 horse.png",
    title: "Hand-Drawn Brand Mark: 'The Horse'",
    caption:
      "Original hand-drawn identity crafted for Custodia Bank. Conceived as a contrarian, dignified antidote to generic SaaS fintech blue, embodying Wyoming full-reserve banking heritage.",
    tag: "Brand Identity",
  },
  {
    src: "/images/custodia/mm-01.png",
    title: "Institutional Money Market: Account Overview",
    caption:
      "Corporate treasury interface designed for simultaneous monitoring of operational liquidity, daily institutional yield accrual, and multi-engine settlement positions.",
    tag: "Banking Dashboard",
  },
  {
    src: "/images/custodia/mm-02.png",
    title: "Money Market Settlement & Order Routing",
    caption:
      "Order entry and allocation UX managing T+1/T+2 commercial paper settlement windows alongside instant reserve balance checks.",
    tag: "Settlement UX",
  },
  {
    src: "/images/custodia/mm-03.png",
    title: "Fund Performance & Compliance Auditing",
    caption:
      "High-density institutional ledger views built for CFOs, compliance officers, and bank examiners with exportable audit logs and yield analytics.",
    tag: "Audit Ledger",
  },
  {
    src: "/images/custodia/utxo-1.png",
    title: "Bitcoin Custody: UTXO Manager Dashboard",
    caption:
      "Enterprise unspent transaction output (UTXO) management interface enabling treasury operators to inspect on-chain UTXO denominations and consolidate fragmented balances.",
    tag: "Bitcoin Custody",
  },
  {
    src: "/images/custodia/utxo-2.png",
    title: "UTXO Script Constructor & Fee Allocation",
    caption:
      "Interactive multi-sig constructor giving institutional clients fine-grained control over mempool priority fees, change addresses, and timelocks.",
    tag: "Transaction Builder",
  },
  {
    src: "/images/custodia/utxo-3.png",
    title: "Multi-Engine Balance Allocation",
    caption:
      "Unified liquidity allocation panel reconciling on-chain Bitcoin confirmations with off-chain fiat ledger balances.",
    tag: "Liquidity UX",
  },
];

const walmartVaultImages = [
  {
    src: "/images/walmart/walmart-search-results.png",
    title: "Graph-Powered Enterprise Search Paradigm",
    caption:
      "High-density search results interface integrating GraphQL & graph databases to discover curriculum, operational guidelines, and role certifications in real time.",
    tag: "Search UX",
  },
  {
    src: "/images/walmart/walmart-admin-manual.png",
    title: "Enterprise Learning: Content Distribution Platform (CDP)",
    caption:
      "Administrative manual entry and metadata taxonomy engine built for Walmart's global training platform serving 3.2M associates.",
    tag: "Global LMS",
  },
  {
    src: "/images/walmart/walmart-cdp-content.png",
    title: "Content Lifecycle & Version Management",
    caption:
      "State-driven courseware authoring and deletion safety controls designed to prevent accidental catalog regressions across millions of active learners.",
    tag: "Admin Tooling",
  },
];

// ─── Metric Strip Data ────────────────────────────────────────────────────────
const headlineMetrics: MetricItem[] = [
  {
    value: "70M+",
    label: "UnitedHealth Group",
    highlight: true,
  },
  {
    value: "3.2M",
    label: "Walmart Global Tech",
  },
  {
    value: "4 Days",
    label: "Custodia Bank",
    highlight: true,
  },
  {
    value: "1M+",
    label: "Fidelity Giving",
  },
];

// ─── Living Proofs (Public Flagships & Sovereign Systems) ─────────────────────
// Tightened copy: 60% text reduction to maximize visual impact
const publicWorkStudies: LivingProofData[] = [
  {
    id: "cassandra",
    namespace: "pipe\\career-intelligence",
    category: "Autonomous AI Agent",
    title: "Cassandra: High-Signal Career Agent & Vignelli Focus Mode",
    subtitle: "jobseeker-agent (Focus Mode v5.0)",
    summary:
      "Autonomous career evaluation engine bounded by the 'Sprint of 8' Focus Mode. Features adaptive negative-dismissal reinforcement and a calming Massimo Vignelli 8pt editorial aesthetic.",
    passcode: "onewordalllowercasehirekyle",
    humanProblem:
      "Job searching in tech is a high-volume, dopamine-draining slog dominated by predatory scrapers and low-signal AI bots. I designed Cassandra to bring calm, dignity, and beauty to high-stakes career evaluation.",
    systemsSolution:
      "Architected the 'Sprint of 8'—an intentional one-hour batch of 8 curated vacancies. Rejections feed an automated negative-dismissal loop in SQLite, auto-injecting critical exclusions into Gemini 2.5 Flash prompts for compounding accuracy.",
    uiUxBreakdown:
      "Editorial Sandstone, Cream, and Vignelli 8pt grid with curated fine art replacing corporate clutter. Features a sticky scroll-snap navigation pillar and persistent chapter state across sessions.",
    architectureBreakdown:
      "Autonomous evaluator scoring jobs across leadership leverage and design-system maturity rather than crude keyword matching. Generates bespoke technical responses and cover memos.",
    developmentBreakdown:
      "Vanilla HTML5/JS frontend on a Node.js + SQLite engine (jobs.db) with Gemini 2.5 Flash API integration for low-latency batch analysis.",
    metrics: [
      { label: "Focus Sprint Limit", value: "8 Roles", highlight: true },
      { label: "Dismissal Loop", value: "Adaptive" },
      { label: "Design System", value: "Vignelli 8pt" },
    ],
    technicalOutcomes: [
      "Sprint of 8 Focus Mode: bounds daily evaluation to exactly one hour of high-signal focus.",
      "Adaptive Negative Reinforcement: SQLite dismissal loop prevents recurring bad matches.",
      "Vignelli 8pt CSS layout with scroll-snap pillar and capsule scrollbars.",
      "Password-gated live deployment running on Railway.",
    ],
    image: "/images/cassandra/cassandra_combined.png",
    icon: Activity,
    tags: ["Autonomous Agent", "Vignelli 8pt", "Gemini 2.5", "Reinforcement Learning", "Node.js & SQLite"],
    liveUrl: "https://jobseeker-agent.up.railway.app",
    liveUrlText: "Launch Private Interface (Passcode: onewordalllowercasehirekyle)",
  },
  {
    id: "miracle",
    namespace: "pipe\\civic-zero-trust",
    category: "Zero-Cloud Analytics Engine",
    title: "Miracle / Marigold: Zero-Cloud Civic Data & Election Audit Engine",
    subtitle: "bolt.pipes.pink (Marigold Insights)",
    summary:
      "Local-compute analytical execution engine built for county clerks under FY26 FEMA HSGP election security mandates. Solved Mississippi's unopenable voter rolls with 100% in-browser WASM and Zero-PII hydration.",
    humanProblem:
      "Multi-million row civic datasets crash county clerk spreadsheets, while cloud AI uploads trigger severe PII violations and state privacy penalties.",
    systemsSolution:
      "Pioneered Zero-PII Hydration: in-browser WASM strips names and addresses to cryptographic hashes before LLM analysis. Browser decrypts and re-hydrates real names locally on display. Zero PII ever hits the cloud.",
    uiUxBreakdown:
      "'Mari' civic AI concierge speaks plain English, translating clerk questions into local SQL queries and real-time interactive Data Stories.",
    architectureBreakdown:
      "Runs entirely client-side using DuckDB-WASM, SQLite, Web Workers, and OPFS (Origin Private File System). Complies with the 3% FEMA National Priority election security mandate.",
    developmentBreakdown:
      "In-memory Fellegi-Sunter and Levenshtein probabilistic record linkage for cross-precinct duplicate detection, running air-gapped on commodity laptops.",
    metrics: [
      { label: "Data Residency", value: "100% Local", highlight: true },
      { label: "Audit Runtime", value: "<3 Minutes" },
      { label: "FEMA Mandate", value: "HSGP Sec 3%" },
    ],
    technicalOutcomes: [
      "100% client-side execution via DuckDB-WASM, zero cloud PII liability.",
      "Zero-PII cryptographic entity hashing protocol for private LLM analysis.",
      "Compliant with FEMA HSGP 3% National Priority election grant criteria.",
      "Sub-3 minute query audits across millions of voter rows.",
    ],
    image: "/images/marigold/marigold-hero.png",
    icon: Shield,
    tags: ["FEMA HSGP Compliant", "DuckDB-WASM", "Zero-PII Hydration", "OPFS", "Mari AI Concierge"],
    liveUrl: "https://bolt.pipes.pink",
    liveUrlText: "Launch Civic Sandbox (bolt.pipes.pink)",
  },
  {
    id: "pipes",
    namespace: "pipe\\multi-tenant-protocol",
    category: "Flagship Living Product",
    title: "Pipes Protocol & Sovereign Knowledge Marketplace",
    subtitle: "Pipes.pink (Flagship Protocol)",
    summary:
      "Sovereign knowledge protocol and marketplace that transforms human expertise into reusable infrastructure with $0 marginal AI inference costs, halting model collapse.",
    humanProblem:
      "Foundation LLMs suffer from model collapse and synthetic data amnesia. Standard SaaS burns expensive tokens on redundant context prompts.",
    systemsSolution:
      "Engineered the Reference Library Pattern (Template + Keyword Match + Curated Knowledge = Deterministic Output at $0.00 marginal LLM cost). Coupled with runtime CSS variable injection for 6 real-time audience personas.",
    uiUxBreakdown:
      "Fluid multi-tenant interface dynamically mutating between Cyberpunk, Enterprise, Academic, and Vignelli typographic themes without reload.",
    architectureBreakdown:
      "Self-sovereign namespace registry with deeded creator equity (70/30 revenue split) anchored on cryptographic NOSTR identity.",
    developmentBreakdown:
      "Next.js, TypeScript, and Web Crypto APIs orchestrating client-side decryption and decentralized micro-transactions.",
    metrics: [
      { label: "Marginal AI Cost", value: "$0.00", highlight: true },
      { label: "Persona Engine", value: "6 Live Themes" },
      { label: "Creator Equity", value: "70% Split" },
    ],
    technicalOutcomes: [
      "Reference Library Pattern delivering 25-page outputs at $0.00 external token burn.",
      "Multi-tenant CSS variable injection engine powering 6 live persona aesthetics.",
      "Self-sovereign cryptographic registry with deeded 70/30 creator revenue splits.",
    ],
    image: "/images/pipes/pipes-hero.png",
    icon: Layers,
    tags: ["Distributed Systems", "Runtime CSS Injection", "$0 AI Cost", "TypeScript", "NOSTR"],
    liveUrl: "https://pipes.pink",
    liveUrlText: "Launch Live Protocol (pipes.pink)",
  },
  {
    id: "semi",
    namespace: "pipe\\epistemic-second-brain",
    category: "Sovereign Cognitive Architecture",
    title: "Semi (S;): The Epistemic Second Brain & Sparring Partner",
    subtitle: "Semi-CHB Cognitive Architecture",
    summary:
      "Epistemic sparring partner and memory digitization engine. Preserves sovereign intellectual perspective, allowing partners and clients to query Kyle's comprehensive thoughts asynchronously.",
    humanProblem:
      "Onboarding new partners typically consumes dozens of synchronous meeting hours. Standard AI assistants sycophantically agree and forget deep architectural context.",
    systemsSolution:
      "Semi digitizes Kyle's architectural theses, design systems, and work history into a persistent epistemic state. Surfaces tensions between ideas and spars asynchronously without context drift.",
    uiUxBreakdown:
      "Dark-mode epistemic cockpit showcasing Active Cognitive Threads with intuitive tension maps instead of empty chatbot prompts.",
    architectureBreakdown:
      "Dual-mode local/cloud storage graph tracking intellectual orbits and cross-project theses across time.",
    developmentBreakdown:
      "React 19, Tailwind CSS v4, Lucide icons, and modular widget architecture docking into any host platform.",
    metrics: [
      { label: "Cognitive State", value: "Persistent", highlight: true },
      { label: "Brand Origin", value: "CHB Extension" },
      { label: "Engine Role", value: "Pipes Driver" },
    ],
    technicalOutcomes: [
      "Digitized architectural theses into structured, asynchronous sparring threads.",
      "Dual-mode storage toggles enabling complete local-first sovereignty.",
      "Powers core second-brain curation across the Pipes ecosystem.",
    ],
    image: "/artwork/workshop.png",
    icon: Cpu,
    tags: ["Epistemic Engine", "Second Brain", "Active Threads", "Local-First", "CHB Brand"],
    liveUrl: "https://pipes.pink",
    liveUrlText: "Explore in Pipes Protocol (pipes.pink)",
  },
  {
    id: "greater",
    namespace: "pipe\\sovereign-cx",
    category: "Open Source Bitcoin",
    title: "Project Greater: Sovereign CX Interpreter",
    subtitle: "Greaterthan.pink",
    summary:
      "Open-source, deterministic protocol interpreter engineered for high-stakes Bitcoin and privacy-first ecosystems at 1/1000th legacy SaaS costs.",
    humanProblem:
      "Legacy support platforms (Zendesk, Intercom) charge $150+/seat and harvest sensitive customer identities into centralized cloud honeypots.",
    systemsSolution:
      "Decoupled customer support from PII using cryptographic handshakes (NOSTR/PGP keys) and deterministic prompt optimization (dspy.ts) for hallucination-free technical specs.",
    metrics: [
      { label: "Resolution Cost", value: "<$0.02", highlight: true },
      { label: "Privacy Model", value: "Zero-Knowledge" },
      { label: "Token Efficiency", value: "Deterministic" },
    ],
    technicalOutcomes: [
      "Slashed resolution cost from $2.00 to <$0.02 using deterministic browser vaults.",
      "Zero-PII handshake using SHA-256 session generation.",
      "Strategic friction UX halting automated flows on high-risk operations.",
    ],
    image: "/artwork/emerald.png",
    icon: Shield,
    tags: ["Open Source", "dspy.ts", "Zero-PII", "Bitcoin CX", "Web Crypto"],
    liveUrl: "https://greater.pink",
    liveUrlText: "Try Live Demo (greater.pink)",
    repoUrl: "https://github.com/rorshockbtc/greater-than",
  },
  {
    id: "slash",
    namespace: "pipe\\algorithmic-systems",
    category: "High-Frequency Trading",
    title: "High-Velocity Market Prediction Engine",
    subtitle: "Slash V6 (Algorithmic Architecture)",
    summary:
      "37,000-line TypeScript high-frequency systems architecture built for sub-100ms websocket execution and multi-layered risk mitigation.",
    humanProblem:
      "24/7 prediction markets experience sudden liquidity gaps where unshielded trading bots freeze or blow up capital.",
    systemsSolution:
      "Distributed Brain + Hands architecture: cloud React monitoring cockpit connected to low-latency Amsterdam execution nodes via custom WebSocket bridge. Stress-tested against 126 historical markets.",
    metrics: [
      { label: "Telemetry Latency", value: "<100ms", highlight: true },
      { label: "Codebase Scale", value: "37k Lines TS" },
      { label: "Risk Subsystems", value: "6 Concurrent" },
    ],
    technicalOutcomes: [
      "6 independent risk subsystems: Pace Brakes, Margin Oracles, and Liquidity Throttles.",
      "Sub-100ms real-time telemetry processing across live orderbooks.",
      "Fail-safe automated circuit breakers eliminating state deadlocks.",
    ],
    image: "/artwork/slash-v6.png",
    icon: TrendingUp,
    tags: ["TypeScript", "WebSocket Bridge", "Monte Carlo Simulator", "Distributed Systems", "HFT"],
  },
];

// ─── Deep-Dive Enterprise Institutional Records ────────────────────────────────
// Concise, punchy copy focused on scale, speed, and real enterprise impact
const institutionalRecords: InstitutionalRecord[] = [
  {
    client: "UnitedHealth Group / Optum",
    role: "Senior Product Designer & Fusion Strategist",
    scale: "70M+ Patients • Flagship iOS & Android Apps",
    description:
      "Led design for UHG's flagship patient mobile application used by 70M+ Americans, personally producing 80%+ of Android and 50%+ of iOS screens. Embedded within Fusion (elite internal executive consultancy), facilitating C-suite stakeholders and unifying mobile design systems across UnitedHealth and Optum.",
    metrics: ["70M+ Patients", "80% Android / 50% iOS", "Fusion C-Suite Facilitation"],
    icon: Shield,
    featured: true,
  },
  {
    client: "Walmart Global Tech",
    role: "Senior UX/UI Architect",
    scale: "3.2M Global Associates • Enterprise LMS & Search",
    description:
      "Architected the enterprise Learning Management System and graph-powered search paradigm for the world's largest private workforce (3.2M associates). Spearheaded GraphQL migration, automated course taxonomy, and admin publishing controls.",
    metrics: ["3.2M Associates", "GraphQL Search Architecture", "Global Publishing Admin"],
    icon: Zap,
    featured: true,
  },
  {
    client: "Custodia Bank",
    role: "Sole Founding Product Designer",
    scale: "Chartered Full-Reserve SPDI Bank",
    description:
      "Sole designer for the chartered digital asset bank. Shipped complete marketing site in 4 days and full core banking application in 30 days for Federal Reserve master account review. Hand-drew the iconic brand marks and unified Fedwire, Money Market, and Bitcoin UTXO settlement rails.",
    metrics: ["4-Day Website Sprint", "30-Day Core Banking App", "3 Settlement Rails Unified"],
    icon: Building2,
    featured: true,
  },
  {
    client: "Fidelity Investments (via BLDG-25)",
    role: "Lead Product Designer",
    scale: "1M+ Indexed Charities • First Cloud-Native Launch",
    description:
      "Embedded at Fidelity's campus for 1.5 years to design the Giving Marketplace from scratch, directing investment dividends to over 1,000,000 global charities. Led enterprise transition to modern Material Design on Fidelity's first production cloud-native deployment.",
    metrics: ["1M+ Charities Indexed", "First Cloud-Native App", "Material Design Transition"],
    icon: TrendingUp,
  },
  {
    client: "IronNet Cybersecurity (via BLDG-25)",
    role: "Principal Systems Designer",
    scale: "Nation-State Defense • Gen. Keith Alexander (Ex-NSA)",
    description:
      "Embedded with IronNet (founded by Gen. Keith Alexander, former Director of the NSA) to architect global device management, threat escalation matrices, and multi-tier defense-grade Role-Based Access Control (RBAC).",
    metrics: ["Ex-NSA Chief Pedigree", "Global Endpoint Management", "Defense-Grade RBAC"],
    icon: Shield,
  },
  {
    client: "Martin Marietta (via BLDG-25)",
    role: "Senior Product Designer",
    scale: "S&P 500 Heavy Materials • Industrial Field Modernization",
    description:
      "Replaced a 1990s legacy Excel system with a ruggedized, glove-friendly web application deployed on Panasonic Toughbooks for quarry and asphalt field crews, optimized for direct sunlight and zero-friction touches.",
    metrics: ["Replaced 1990s Excel", "Glove-Friendly Touchbook UX", "Quarry Field Logistics"],
    icon: HardHat,
  },
  {
    client: "UltraLinq Medical Imaging",
    role: "Lead Interface & Hardware Designer",
    scale: "Multimodal PACS • Cardiology & Ultrasound Diagnostics",
    description:
      "Designed full interface and hand-drawn diagnostic icon system for high-density PACS medical imaging across web, mobile, portable ultrasound hardware, and an NHS smartwatch. Engineered low-glare dark mode for radiological suites.",
    metrics: ["Multimodal Physical Hardware", "Custom Diagnostic Iconography", "NHS Wearable Deployment"],
    icon: Activity,
  },
  {
    client: "Foodler.com (Acquired by GrubHub)",
    role: "Director of Business Operations",
    scale: "$500M+ Processed Volume • 10x Acquisition Exit",
    description:
      "Managed company operations and solo-engineered an algorithmic fraud detection system that slashed chargebacks by 83% ($6M to <$1M), cooperating directly with FBI and police sting operations to drive a 10x revenue acquisition exit.",
    metrics: ["-83% Fraud ($6M to <$1M)", "10x Acquisition Exit", "$500M+ Volume Processed"],
    icon: TrendingUp,
  },
];

export default function PortfolioPage() {
  const [activeTrack, setActiveTrack] = useState<PerspectiveTrack>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const trackParam = params.get("track");
      if (trackParam === "design" || trackParam === "development" || trackParam === "architecture") {
        return trackParam;
      }
    }
    return "design";
  });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string | undefined>();
  const [selectedStudy, setSelectedStudy] = useState<LivingProofData | null>(null);

  const track = TRACKS[activeTrack];

  const handleTrackChange = (tKey: PerspectiveTrack) => {
    setActiveTrack(tKey);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("track", tKey);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const handleContactClick = (subject?: string) => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[#FE299E]/20">
      {/* ── Hero Section (Dynamic by Track) ── */}
      <section className="relative min-h-[75vh] flex items-center pt-8 pb-14 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Architectural diagrams and design artifacts"
            width={1024}
            height={559}
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Perspective Pill Selector, Headline & Track Value Props */}
            <div className="lg:col-span-7 space-y-6">
              {/* Perspective Track Selector (Organic In-Hero Segmented Control) */}
              <div className="space-y-2">
                <div className="inline-flex rounded-full border border-[#DBD3C4] p-1 bg-[#FAF5EC] shadow-sm">
                  {(["design", "development", "architecture"] as PerspectiveTrack[]).map((tKey) => {
                    const isSelected = activeTrack === tKey;
                    return (
                      <button
                        key={tKey}
                        onClick={() => handleTrackChange(tKey)}
                        className={`px-4 py-1.5 text-xs font-sans uppercase tracking-[0.16em] font-medium rounded-full transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#FE299E] text-white shadow-sm font-semibold"
                            : "text-[#735F57] hover:text-[#2B1E19]"
                        }`}
                      >
                        <span>{TRACKS[tKey].label}</span>
                        {tKey === "design" && (
                          <span
                            className={`ml-1.5 text-[9px] uppercase px-1.5 py-0.5 rounded-full ${
                              isSelected ? "bg-white/20 text-white" : "bg-[#EFE8DC] text-[#735F57]"
                            }`}
                          >
                            Default
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <BrandMark size="md" />
                  <NamespaceBadge
                    namespace="kyle-cyree"
                    prefix="pipe\"
                    category={track.categoryBadge}
                    size="default"
                  />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2B1E19] tracking-tight leading-[1.12]">
                  {track.headlineMain}{" "}
                  <span className="font-serif italic font-normal text-[#FE299E]">{track.headlineAmp}</span>{" "}
                  {track.headlineSub}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-[#735F57] leading-relaxed font-sans max-w-xl">
                  {track.subhead}
                </p>
              </div>

              {/* Dynamic Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm md:text-base text-[#2B1E19]/90 font-sans">
                {track.valueProps.map((vp, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#FE299E] shrink-0" />
                    <span className="leading-snug font-medium">{vp.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.15em] font-semibold rounded-full px-6 py-3 shadow-sm transition-all cursor-pointer"
                  onClick={() => scrollTo("confidential-vault")}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Design Vault
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#DBD3C4] bg-[#FAF5EC] hover:bg-[#EFE8DC] text-[#2B1E19] font-sans text-xs uppercase tracking-[0.15em] font-medium rounded-full px-6 py-3 cursor-pointer"
                  onClick={() => scrollTo("enterprise-work")}
                >
                  Enterprise Records
                </Button>

                <a
                  href={track.resumeFile}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans uppercase tracking-[0.15em] font-semibold text-[#735F57] hover:text-[#2B1E19] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  PDF Resume
                </a>
              </div>
            </div>

            {/* Right Column: Albers & Vignelli Specimen Card */}
            <div className="lg:col-span-5 flex justify-center">
              <AlbersInteractionCard
                perspective={activeTrack}
                metrics={track.specimenMetrics}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Verified Institutional Pedigree Logo Bar ── */}
      <ClientLogoBar />

      {/* ── Metric Strip ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <MetricStrip metrics={headlineMetrics} columns={4} />
      </div>

      {/* ── Hard Skills & Production Stack ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 w-full">
        <div className="p-6 md:p-8 rounded-2xl bg-[#FAF5EC] border border-[#DBD3C4] space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DBD3C4] pb-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2B1E19] tracking-tight mb-1">Core Capabilities &amp; Production Stack</h2>
              <p className="text-sm md:text-base text-[#735F57] font-sans">The exact tools and architectural patterns I use to ship production software.</p>
            </div>
            <Badge variant="outline" className="w-fit text-xs font-sans uppercase tracking-[0.18em] text-[#FE299E] border-[#FE299E]/40 bg-[#FE299E]/5 rounded-full px-3 py-1 font-semibold">
              Production Validated
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-xs font-sans uppercase tracking-[0.2em] text-[#2B1E19] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FE299E]" /> Systems &amp; Arch
              </h3>
              <ul className="space-y-2 text-sm text-[#735F57] font-sans font-medium">
                <li>TypeScript / Node.js</li>
                <li>React 19 / Next.js</li>
                <li>Low-Latency WebSockets</li>
                <li>Zero-to-One Product Ops</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-xs font-sans uppercase tracking-[0.2em] text-[#2B1E19] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FE299E]" /> Data &amp; Protocols
              </h3>
              <ul className="space-y-2 text-sm text-[#735F57] font-sans font-medium">
                <li>SQLite / DuckDB-WASM</li>
                <li>PostgreSQL / GraphQL</li>
                <li>Bitcoin UTXO Orchestration</li>
                <li>Decentralized PKI (NOSTR)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-xs font-sans uppercase tracking-[0.2em] text-[#2B1E19] flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FE299E]" /> AI &amp; Agentic Intel
              </h3>
              <ul className="space-y-2 text-sm text-[#735F57] font-sans font-medium">
                <li>Gemini 2.5 Flash / Pro API</li>
                <li>Reinforcement Learning Loops</li>
                <li>Zero-PII Cryptographic Hydration</li>
                <li>Deterministic DSPy Pipelines</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-xs font-sans uppercase tracking-[0.2em] text-[#2B1E19] flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#FE299E]" /> Design &amp; UI
              </h3>
              <ul className="space-y-2 text-sm text-[#735F57] font-sans font-medium">
                <li>Figma / Design Systems</li>
                <li>Tailwind CSS v4</li>
                <li>Runtime CSS Variable Injection</li>
                <li>Massimo Vignelli 8pt Grid</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Design Vault (Open High-Res Product Plates) ── */}
      <section id="confidential-vault" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-sans uppercase tracking-[0.18em] text-[#FE299E] border-[#FE299E]/40 rounded-full font-semibold">
              Design Vault &amp; Interface Plates
            </Badge>
            <span className="text-xs text-[#735F57] font-sans uppercase tracking-wider">Mutual NDA Protected</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B1E19] tracking-tight">
            Client Design Artifacts &amp; Interface Systems
          </h2>
          <p className="text-base text-[#735F57] max-w-2xl leading-relaxed font-sans">
            High-resolution interface plates, settlement state machines, and design systems from chartered banking and enterprise deployments. Click any specimen to inspect pixel-perfect craft.
          </p>
        </div>

        {/* Custodia Bank Vault */}
        <ProtectedVault
          id="vault-custodia"
          title="Custodia Bank: Chartered Multi-Engine Banking System"
          subtitle="Sole Designer • 4-day rebrand sprint, 30-day full core bank app, Money Market fund & UTXO management"
          disclaimer="Includes proprietary banking workflows and on-chain UTXO allocation screens. Hand-drawn brand marks, typography system, and settlement engines."
          images={custodiaVaultImages}
        />

        {/* Walmart Global Tech Vault */}
        <ProtectedVault
          id="vault-walmart"
          title="Walmart Global Tech: Enterprise LMS & Search Architecture"
          subtitle="3.2M Global Workforce • GraphQL migration, automated course tagging, and Content Distribution Platform"
          disclaimer="High-fidelity administrative and search paradigm plates developed for Walmart's internal learning management platform."
          images={walmartVaultImages}
        />
      </section>

      {/* ── Enterprise Track Record (Deep-Dive Case Studies) ── */}
      <section id="enterprise-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-sans uppercase tracking-[0.18em] text-[#FE299E] border-[#FE299E]/40 rounded-full font-semibold">
              Enterprise Pedigree
            </Badge>
            <span className="text-xs text-[#735F57] font-sans uppercase tracking-wider">Fortune 50 &bull; Defense &bull; Institutional FinTech</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B1E19] tracking-tight">
            Verified Institutional Impact
          </h2>
          <p className="text-base text-[#735F57] max-w-2xl leading-relaxed font-sans">
            A decade of designing, modernizing, and engineering systems that operate under extreme regulatory, scale, and operational pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {institutionalRecords.map((record, idx) => (
            <InstitutionalCard key={idx} record={record} />
          ))}
        </div>
      </section>

      {/* ── Living Systems (Pipes Protocol & Open Source Proofs) ── */}
      <section id="living-systems" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10 border-t border-[#DBD3C4]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-sans uppercase tracking-[0.18em] text-[#FE299E] border-[#FE299E]/40 rounded-full font-semibold">
              Living Products &amp; R&amp;D
            </Badge>
            <span className="text-xs text-[#735F57] font-sans uppercase tracking-wider">End-to-End Craft &bull; Zero-to-One</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B1E19] tracking-tight">
            Autonomous Systems Built as a &quot;Unit of One&quot;
          </h2>
          <p className="text-base text-[#735F57] max-w-2xl leading-relaxed font-sans">
            Beyond enterprise client consulting, I invent, design, and ship production-grade protocols and tools. Click any card below to open its full visual case study and architecture breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicWorkStudies.map((study) => (
            <LivingProofCard
              key={study.id}
              data={study}
              onClick={(clickedStudy) => setSelectedStudy(clickedStudy)}
            />
          ))}
        </div>
      </section>

      {/* ── Video Artifacts & Live Demos ── */}
      <VideoShowcase />

      {/* ── Full-Screen Visual Case Study Modal ── */}
      {selectedStudy && (
        <Dialog open={!!selectedStudy} onOpenChange={(open) => !open && setSelectedStudy(null)}>
          <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FAF5EC] border-[#DBD3C4] text-[#2B1E19] p-6 sm:p-8 rounded-2xl shadow-2xl">
            <DialogHeader className="space-y-3 border-b border-[#DBD3C4] pb-5">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <NamespaceBadge namespace={selectedStudy.namespace} prefix="" category={selectedStudy.category} size="sm" />
                <Badge className="bg-[#FE299E] text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1">
                  Full Case Study
                </Badge>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#2B1E19] tracking-tight leading-tight">
                {selectedStudy.title}
              </DialogTitle>
              <DialogDescription className="text-base text-[#735F57] font-sans leading-relaxed">
                {selectedStudy.summary}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-8 pt-4">
              {/* Full-width visual preview plate */}
              <div className="rounded-2xl overflow-hidden border border-[#DBD3C4] bg-[#EFE8DC] p-2 sm:p-4 shadow-inner">
                <img
                  src={selectedStudy.image}
                  alt={selectedStudy.title}
                  className="w-full h-auto object-contain max-h-[480px] rounded-xl shadow-sm border border-[#DBD3C4]/60 bg-white"
                />
              </div>

              {/* Passcode Callout if applicable */}
              {selectedStudy.passcode && (
                <div className="p-4 rounded-xl border border-[#FE299E]/40 bg-[#FE299E]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#FE299E] font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Private Sovereign Deployment
                    </span>
                    <p className="text-xs text-[#2B1E19]/80 font-sans">
                      Live demo is password-gated. Use passcode below for immediate inspection:
                    </p>
                  </div>
                  <code className="px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#FE299E]/50 font-mono text-xs text-[#FE299E] font-bold shadow-sm self-start sm:self-auto">
                    {selectedStudy.passcode}
                  </code>
                </div>
              )}

              {/* 2-Column Scannable Case Study Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Problem & Systems Solution */}
                <div className="space-y-6">
                  {selectedStudy.humanProblem && (
                    <div className="space-y-2 p-5 rounded-xl bg-[#EFE8DC]/50 border border-[#DBD3C4]">
                      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#735F57] font-sans flex items-center gap-1.5">
                        <span>◈</span> The Human &amp; Market Problem
                      </h4>
                      <p className="text-sm sm:text-base leading-relaxed text-[#2B1E19]/90 font-sans">
                        {selectedStudy.humanProblem}
                      </p>
                    </div>
                  )}

                  {selectedStudy.systemsSolution && (
                    <div className="space-y-2 p-5 rounded-xl bg-[#FAF5EC] border border-[#FE299E]/30 shadow-sm">
                      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#FE299E] font-sans flex items-center gap-1.5">
                        <span>◈</span> Systems Architecture Solution
                      </h4>
                      <p className="text-sm sm:text-base leading-relaxed text-[#2B1E19]/90 font-sans">
                        {selectedStudy.systemsSolution}
                      </p>
                    </div>
                  )}

                  {selectedStudy.uiUxBreakdown && (
                    <div className="space-y-2 p-5 rounded-xl bg-[#FAF5EC] border border-[#DBD3C4]">
                      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D9A206] font-sans flex items-center gap-1.5">
                        <span>◈</span> UI/UX Craft &amp; Psychology
                      </h4>
                      <p className="text-sm leading-relaxed text-[#2B1E19]/85 font-sans">
                        {selectedStudy.uiUxBreakdown}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column: Architecture, Runtime & Outcomes */}
                <div className="space-y-6">
                  {selectedStudy.architectureBreakdown && (
                    <div className="space-y-2 p-5 rounded-xl bg-[#FAF5EC] border border-[#DBD3C4]">
                      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#2A7B5C] font-sans flex items-center gap-1.5">
                        <span>◈</span> Protocol Mechanics &amp; State Engine
                      </h4>
                      <p className="text-sm leading-relaxed text-[#2B1E19]/85 font-sans">
                        {selectedStudy.architectureBreakdown}
                      </p>
                    </div>
                  )}

                  {selectedStudy.developmentBreakdown && (
                    <div className="space-y-2 p-5 rounded-xl bg-[#FAF5EC] border border-[#DBD3C4]">
                      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#02A7F1] font-sans flex items-center gap-1.5">
                        <span>◈</span> Full-Stack Implementation
                      </h4>
                      <p className="text-sm leading-relaxed text-[#2B1E19]/85 font-sans">
                        {selectedStudy.developmentBreakdown}
                      </p>
                    </div>
                  )}

                  {selectedStudy.technicalOutcomes && (
                    <div className="space-y-3 p-5 rounded-xl bg-[#EFE8DC]/50 border border-[#DBD3C4]">
                      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#735F57] font-sans">
                        Verified Technical Outcomes
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedStudy.technicalOutcomes.map((outcome, i) => (
                          <li key={i} className="text-xs sm:text-sm flex items-start gap-2 text-[#2B1E19]/85 font-sans">
                            <Check className="w-4 h-4 text-[#FE299E] shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#DBD3C4]">
                <div className="flex flex-wrap gap-3">
                  {selectedStudy.liveUrl && (
                    <a href={selectedStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.15em] font-semibold rounded-full px-6 py-2.5 shadow-sm">
                        {selectedStudy.liveUrlText || "Launch Live Product"} <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  )}
                  {selectedStudy.repoUrl && (
                    <a href={selectedStudy.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-[#DBD3C4] bg-[#FAF5EC] hover:bg-[#EFE8DC] text-[#2B1E19] font-sans text-xs uppercase tracking-[0.15em] font-medium rounded-full px-5 py-2.5">
                        Inspect Source Code <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  )}
                </div>

                <Button
                  variant="outline"
                  className="border-[#FE299E]/50 text-[#FE299E] hover:bg-[#FE299E]/10 rounded-full font-sans text-xs uppercase tracking-[0.15em] font-semibold"
                  onClick={() => {
                    setSelectedStudy(null);
                    handleContactClick(`Inquiry regarding ${selectedStudy.title}`);
                  }}
                >
                  Book 1-Week Sprint ($10k)
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* ── Published Thesis Callout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Card className="p-6 md:p-10 border-[#DBD3C4] bg-[#FAF5EC] rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <Badge variant="outline" className="text-xs font-sans uppercase tracking-[0.18em] border-[#FE299E]/40 text-[#FE299E] rounded-full font-semibold">
                Published Architectural Essay
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#2B1E19] tracking-tight">
                Design Is Risk: The Architectural Defense Against Model Collapse
              </h3>
              <p className="text-base text-[#735F57] leading-relaxed font-sans">
                Why unconstrained AI agent swarms produce catastrophic technical debt, and how constitutional harness engineering restores deterministic production guarantees.
              </p>
            </div>
            <Link href="/essays/design-is-risk">
              <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white shrink-0 font-sans text-xs uppercase tracking-[0.15em] font-semibold rounded-full px-6 py-3 cursor-pointer">
                Read Full Essay <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* ── Conversion & Sprint Callout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <SprintCallout onContactClick={handleContactClick} />
      </div>

      {/* ── Contact Modal ── */}
      <ContactFormModal
        open={isContactOpen}
        onOpenChange={setIsContactOpen}
        defaultSubject={contactSubject}
      />
    </div>
  );
}
