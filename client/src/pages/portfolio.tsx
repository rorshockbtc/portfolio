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
  FileText,
  Zap,
  Check,
  Layers,
  Cpu,
  Building2,
  HardHat,
  Eye,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "/artwork/hero.jpg";
import ContactFormModal from "@/components/contact-form-modal";
import {
  BrandMark,
  NamespaceBadge,
  MetricStrip,
  TelemetryCockpit,
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
    src: "/images/walmart/walmart-admin-manual.png",
    title: "Enterprise Learning: Content Distribution Platform (CDP)",
    caption:
      "Administrative manual entry and metadata taxonomy engine built for Walmart's global training platform serving 3.2M associates.",
    tag: "Global LMS",
  },
  {
    src: "/images/walmart/walmart-search-results.png",
    title: "Graph-Powered Enterprise Search Paradigm",
    caption:
      "High-density search results interface integrating GraphQL & graph databases to discover curriculum, operational guidelines, and role certifications in real time.",
    tag: "Search UX",
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

// ─── Living Proofs (Public Flagships) ──────────────────────────────────────────
const publicWorkStudies: LivingProofData[] = [
  {
    id: "pipes",
    namespace: "pipe\\multi-tenant-protocol",
    category: "Flagship Living Product",
    title: "Pipes Protocol & Knowledge Marketplace",
    subtitle: "Pipes.pink",
    summary:
      "A sovereign knowledge protocol and marketplace that transforms human expertise into reusable, monetizable infrastructure with $0 marginal AI inference costs.",
    humanProblem:
      "Model collapse and AI amnesia. As foundation LLMs drown in synthetic data and hallucinations, verified human-curated context is the rarest asset. But standard SaaS burns expensive tokens on repetitive context dumps.",
    systemsSolution:
      "Architected the 'Reference Library Pattern' (Template + Keyword Match + Curated Knowledge = Deterministic Output at $0.00 marginal LLM cost). Built a runtime CSS variable injection engine that adapts the entire UI, palette, typography, and copy across 6 distinct personas in real time.",
    metrics: [
      { label: "Marginal AI Cost", value: "$0.00", highlight: true },
      { label: "Persona Engine", value: "6 Live Themes" },
      { label: "Creator Equity", value: "70% Split" },
    ],
    technicalOutcomes: [
      "Engineered the Reference Library pattern delivering 25-page, PhD-level outputs with zero external token expenditure by matching local keyword ontologies.",
      "Multi-tenant CSS variable injection engine powering instantaneous aesthetic & typographic adaptation across 6 live audiences.",
      "Self-sovereign namespace registry with deeded equity mechanics (70/30 creator revenue split) anchored on cryptographic identity.",
    ],
    image: "/images/pipes/pipes-hero.png",
    icon: Layers,
    tags: ["Distributed Systems", "Runtime CSS Injection", "$0 AI Cost", "TypeScript", "NOSTR"],
    liveUrl: "https://pipes.pink",
    liveUrlText: "Launch Live Protocol (pipes.pink)",
  },
  {
    id: "greater",
    namespace: "pipe\\sovereign-cx",
    category: "Open Source Bitcoin",
    title: "Project Greater: Sovereign CX Interpreter",
    subtitle: "Greaterthan.pink",
    summary:
      "An open-source, deterministic protocol interpreter engineered for high-stakes Bitcoin and privacy-first ecosystems at 1/1000th legacy SaaS costs.",
    humanProblem:
      "Legacy support software (Zendesk, Intercom) is bloated, PII-heavy, and fundamentally violates 'Don't Trust, Verify' security models, charging $150+/seat and leaking sensitive customer identities into centralized databases.",
    systemsSolution:
      "Engineered a sovereign customer support architecture decoupled from PII. Uses cryptographic handshakes (NOSTR/PGP keys) for persistent anonymous sessions and deterministic prompt optimization (dspy.ts) to deliver versioned technical specifications without hallucinations.",
    metrics: [
      { label: "Resolution Cost", value: "<$0.02", highlight: true },
      { label: "Privacy Model", value: "Zero-Knowledge" },
      { label: "Token Efficiency", value: "Deterministic" },
    ],
    technicalOutcomes: [
      "Reduced resolution cost from $2.00 (legacy SaaS) to <$0.02 using local-first browser vaults and deterministic model orchestration.",
      "Decoupled identity from data using Session_ID = SHA-256(User_PubKey + Salt) handshakes.",
      "Engineered strategic friction UX: halts automated chats when high-risk operations (account freezes, timelocks) are detected, requiring manual cryptographic acknowledgment.",
    ],
    image: "/artwork/emerald.png",
    icon: Shield,
    tags: ["Open Source", "dspy.ts", "Zero-PII", "Bitcoin CX", "Web Crypto"],
    liveUrl: "https://greater.pink",
    liveUrlText: "Try Live Demo (greater.pink)",
    repoUrl: "https://github.com/rorshockbtc/greater-than",
  },
  {
    id: "harness",
    namespace: "pipe\\harness-engineering",
    category: "Agent Governance",
    title: "General Practices (Agentic Harness Engineering)",
    subtitle: "Formerly The Workshop",
    summary:
      "A constitutional governance framework built 18 months ahead of the industry to constrain rogue AI builder agents and enforce strict runtime parity.",
    humanProblem:
      "The 'Template Tyranny' of agentic coding. Unconstrained AI builder agents hallucinate monorepos, install 300 unvetted npm packages, fall into context amnesia, and break production parity.",
    systemsSolution:
      "Pioneered agent harness engineering ahead of mainstream industry adoption. Built a machine-parseable 'Living Primer' constitution with strict dependency caps (max 50), 10s API timeouts, and an automated agentic handshake that forces builders into rigorous compliance before merge.",
    metrics: [
      { label: "Market Timing", value: "+18 Mo Ahead", highlight: true },
      { label: "Dependency Cap", value: "Max 50 Deps" },
      { label: "Parity Enforcement", value: "Automated UAT" },
    ],
    technicalOutcomes: [
      "Engineered the 'Agentic Handshake' API middleware, forcing LLM builders to validate against master project constitutions across every compute step.",
      "Pre-Karpathy harness engineering: established automated UAT hooks, runtime boundary enforcement, and anti-pattern interceptors.",
      "Zero-overhead architecture eliminating dev-to-production discrepancies across multi-agent workflows.",
    ],
    image: "/artwork/workshop.png",
    icon: Cpu,
    tags: ["Harness Engineering", "Constitutional Governance", "Multi-Agent Systems", "Runtime Constraints"],
  },
  {
    id: "slash",
    namespace: "pipe\\algorithmic-systems",
    category: "High-Frequency Trading",
    title: "High-Velocity Market Prediction Engine",
    subtitle: "Slash V6 (Algorithmic Architecture)",
    summary:
      "A 37,000-line TypeScript high-frequency systems architecture built for sub-100ms websocket execution and multi-layered risk mitigation.",
    humanProblem:
      "Prediction markets are 24/7, chaotic, and subject to violent liquidity dislocations. Manual trading is impossible; naive bots freeze up or blow out during flash breakouts.",
    systemsSolution:
      "Architected a distributed 'Brain + Hands' system: a cloud React monitoring cockpit communicating with a low-latency Amsterdam execution node via a custom WebSocket bridge. Built 'The Crucible' Monte Carlo simulator to stress-test 50+ parameters against 126 historical markets.",
    metrics: [
      { label: "Telemetry Latency", value: "<100ms", highlight: true },
      { label: "Codebase Scale", value: "37k Lines TS" },
      { label: "Risk Subsystems", value: "6 Concurrent" },
    ],
    technicalOutcomes: [
      "Engineered 6 concurrent, independent risk systems: Pace Brakes (prevent runaway accumulation), Margin Oracles (capital efficiency), and Liquidity Throttles.",
      "Sub-100ms real-time telemetry processing across streaming orderbooks.",
      "Eliminated trading deadlocks with priority-queued state recovery and fail-safe automated circuit breakers.",
    ],
    image: "/artwork/slash-v6.png",
    icon: TrendingUp,
    tags: ["TypeScript", "WebSocket Bridge", "Monte Carlo Simulator", "Distributed Systems", "HFT"],
  },
];

// ─── Deep-Dive Enterprise Institutional Records ────────────────────────────────
const institutionalRecords: InstitutionalRecord[] = [
  {
    client: "UnitedHealth Group / Optum",
    role: "Senior Product Experience Designer & Fusion Strategist",
    scale: "70M+ Patients • Flagship iOS & Android Apps",
    description:
      "Led design for UHG's flagship patient mobile application used by 70M+ Americans. Produced 80%+ of the Android experience and 50%+ of the iOS experience. When the initial mobile team disbanded in month one, inherited and unified the cross-org mobile design system across UnitedHealth and Optum with a team of 4. Embedded within Fusion (an elite internal McKinsey-style product & business consultancy), leading C-suite stakeholder facilitation, hospital acquisition digital rollouts, and enterprise cybersecurity workflow redesign.",
    metrics: ["70M+ Daily Patients", "80% Android / 50% iOS", "Fusion C-Suite Facilitation"],
    icon: Shield,
    featured: true,
  },
  {
    client: "Walmart Global Tech",
    role: "Senior UX/UI Architect",
    scale: "3.2M Global Associates • Enterprise LMS & Search",
    description:
      "Architected the Learning Management System (LMS) and enterprise knowledge platform from the ground up for the world's largest private workforce (3.2M+ employees). Spearheaded the migration from legacy infrastructure to GraphQL and graph databases, designing graph-driven search paradigms, automated content tagging, and administrative publishing engines adhering to the global Walmart design system.",
    metrics: ["3.2M Employees", "GraphQL Architecture", "Enterprise Search Paradigm"],
    icon: Zap,
    featured: true,
  },
  {
    client: "Custodia Bank",
    role: "Sole Founding Product Designer",
    scale: "Zero-to-One Federal Reserve SPDI Bank",
    description:
      "First and only designer for the chartered digital asset bank. Shipped the complete ground-up marketing website in 4 days and the full core banking application in 30 days to meet Federal Reserve master account evaluation deadlines. Hand-drew the iconic brand marks (The Horse, Rodeo) and built the design system from scratch. Solved the complex multi-engine settlement challenge across Fedwire/ACH, Money Market funds, and Bitcoin UTXO consolidation, conceiving the unified 'Frontier' settlement engine. The design system stood untouched in production for 2+ years without a subsequent design hire.",
    metrics: ["4-Day Website Sprint", "30-Day Core Bank App", "3 Settlement Rails Unified"],
    icon: Building2,
    featured: true,
  },
  {
    client: "Fidelity Investments (via BLDG-25)",
    role: "Lead Product Designer",
    scale: "1M+ Indexed Charities • First Cloud-Native Launch",
    description:
      "Embedded at Fidelity's Raleigh campus for 1.5 years to design the 'Giving Marketplace' from scratch. Enabled individual and corporate investors to direct investment dividends to over 1,000,000 global charities. Led the enterprise migration from clunky legacy design patterns to modern Material Design, defining end-to-end user flows and co-managing design delivery on Fidelity's first production cloud-native deployment.",
    metrics: ["1M+ Charities Indexed", "First Cloud-Native App", "Material Design Migration"],
    icon: TrendingUp,
  },
  {
    client: "IronNet Cybersecurity (via BLDG-25)",
    role: "Principal Systems Designer",
    scale: "Nation-State Defense • Gen. Keith Alexander (Ex-NSA)",
    description:
      "Embedded with IronNet (founded by General Keith Alexander, former Director of the NSA and Commander of U.S. Cyber Command) to architect global device management, threat escalation matrices, and complex multi-tier Roles and Permissions (RBAC) across protected network endpoints.",
    metrics: ["NSA Chief Pedigree", "Global Device Management", "Defense-Grade RBAC"],
    icon: Shield,
  },
  {
    client: "Martin Marietta (via BLDG-25)",
    role: "Senior Product Designer",
    scale: "S&P 500 Heavy Materials • Industrial Field Modernization",
    description:
      "Modernized legacy quarry testing and inventory management systems that had operated on the same Microsoft Excel spreadsheet since the late 1990s. Re-architected into a ruggedized, glove-friendly web application deployed on Panasonic Toughbooks for field operators in active quarry and asphalt production sites, optimizing for direct sunlight readability and zero-friction touchscreen interactions.",
    metrics: ["Replaced 1990s Excel", "Glove-Friendly Touchbook UX", "Industrial Quarry Logistics"],
    icon: HardHat,
  },
  {
    client: "Ultralight Medical Imaging",
    role: "Lead Interface & Hardware Designer",
    scale: "Multimodal PACS • Cardiology & Ultrasound Diagnostics",
    description:
      "Spent 2.5 years designing the entire interface and hand-drawn diagnostic icon system for a high-density PACS medical imaging platform. Deployed across web, mobile, portable ultrasound physical hardware, and an NHS wearable smartwatch. Engineered a custom dark mode specifically calibrated for low-glare, high-contrast radiological reading rooms under strict HIPAA and diagnostic compliance.",
    metrics: ["Multimodal Physical Hardware", "Custom Diagnostic Iconography", "NHS Wearable Deployment"],
    icon: Activity,
  },
  {
    client: "Foodler.com (Acquired by GrubHub)",
    role: "Director of Business Operations",
    scale: "$500M+ Processed Volume • 10x Acquisition Exit",
    description:
      "Managed two-thirds of company operations. Solo-engineered a proprietary algorithmic fraud detection system that slashed chargebacks by 83% ($6M to <$1M), cooperating directly with local police and FBI offices on criminal sting operations, contributing directly to Foodler's 10x revenue acquisition exit.",
    metrics: ["-83% Fraud ($6M to <$1M)", "10x Acquisition Exit", "$500M+ Volume Processed"],
    icon: TrendingUp,
  },
];

export default function PortfolioPage() {
  const [activeTrack, setActiveTrack] = useState<PerspectiveTrack>("design");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string | undefined>();
  const [selectedStudy, setSelectedStudy] = useState<LivingProofData | null>(null);

  const track = TRACKS[activeTrack];

  const handleContactClick = (subject?: string) => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[#FE299E]/20">
      {/* ── Perspective / Audience Track Switcher (Sticky Masthead Strip) ── */}
      <div className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground hidden sm:inline-block">
              Audience Perspective:
            </span>
            <div className="inline-flex rounded-lg border border-border/70 p-0.5 bg-muted/30">
              {(["design", "development", "architecture"] as PerspectiveTrack[]).map((tKey) => {
                const isSelected = activeTrack === tKey;
                return (
                  <button
                    key={tKey}
                    onClick={() => setActiveTrack(tKey)}
                    className={`relative px-3 py-1 text-xs font-medium rounded-md transition-all duration-150 flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-[#FE299E] text-white shadow-sm font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span>{TRACKS[tKey].label}</span>
                    {tKey === "design" && (
                      <span
                        className={`text-[9px] uppercase px-1 py-0.2 rounded font-mono ${
                          isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
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

          <div className="flex items-center gap-2">
            <a
              href={track.resumeFile}
              download
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-muted-foreground hover:text-[#FE299E] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Resume</span>
            </a>
            <span className="text-border">|</span>
            <Button
              size="sm"
              variant="outline"
              className="h-7 text-xs border-[#FE299E]/40 text-[#FE299E] hover:bg-[#FE299E]/10"
              onClick={() => handleContactClick("Direct Hire Inquiry")}
            >
              Hire Kyle
            </Button>
          </div>
        </div>
      </div>

      {/* ── Hero Section (Dynamic by Track) ── */}
      <section className="relative min-h-[85vh] flex items-center pt-16 pb-16 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Architectural diagrams and design artifacts"
            width={1024}
            height={559}
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Track Value Props */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <BrandMark size="md" />
                <NamespaceBadge
                  namespace="kyle-cyree"
                  prefix="pipe\"
                  category={track.categoryBadge}
                  size="default"
                />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-editorial tracking-tight leading-[1.12]">
                {track.headlineMain}{" "}
                <span className="font-fraunces italic font-normal text-[#FE299E]">{track.headlineAmp}</span>{" "}
                {track.headlineSub}
              </h1>

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-sans max-w-xl">
                {track.subhead}
              </p>

              {/* Dynamic Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-foreground/80">
                {track.valueProps.map((vp, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FE299E] shrink-0" />
                    <span className="leading-snug">{vp.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Button
                  size="lg"
                  className="bg-[#FE299E] hover:bg-[#FE299E]/90 text-white font-medium shadow-sm transition-all"
                  onClick={() => scrollTo("confidential-vault")}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Design Vault
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-border/80 hover:border-foreground/40 text-foreground"
                  onClick={() => scrollTo("enterprise-work")}
                >
                  Enterprise Case Studies
                </Button>

                <a
                  href={track.resumeFile}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12 w-full">
        <MetricStrip metrics={headlineMetrics} columns={4} />
      </div>

      {/* ── Confidential Design Vault (Passcode Protected) ── */}
      <section id="confidential-vault" className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12 w-full space-y-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-[#FE299E] border-[#FE299E]/40">
              Confidential Work Vault
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">Mutual NDA Protected</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-editorial tracking-tight">
            Client Design Artifacts &amp; Interface Systems
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            High-resolution interface plates, settlement state machines, and design systems from chartered banking and enterprise deployments. Gated under client confidentiality agreements.
          </p>
        </div>

        {/* Custodia Bank Vault */}
        <ProtectedVault
          id="vault-custodia"
          title="Custodia Bank: Chartered Multi-Engine Banking System"
          subtitle="Sole Designer • 4-day rebrand sprint, 30-day full core bank app, Money Market fund & UTXO management"
          disclaimer="Includes proprietary banking workflows and on-chain UTXO allocation screens. Hand-drawn brand marks, typography system, and settlement engines. Enter passcode to inspect high-resolution plates."
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
      <section id="enterprise-work" className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16 w-full space-y-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-[#FE299E] border-[#FE299E]/40">
              Enterprise Pedigree
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">Fortune 50 &bull; Defense &bull; Institutional FinTech</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-editorial tracking-tight">
            Verified Institutional Impact
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
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
      <section id="living-systems" className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16 w-full space-y-10 border-t border-border/40">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-[#FE299E] border-[#FE299E]/40">
              Living Products &amp; R&amp;D
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">End-to-End Craft &bull; Zero-to-One</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-editorial tracking-tight">
            Autonomous Systems Built as a &quot;Unit of One&quot;
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Beyond enterprise client consulting, I invent, design, and ship production-grade protocols and tools. Here is live proof of my modern taste, code craftsmanship, and speed.
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

      {/* ── Detail Modal for Living Proofs ── */}
      {selectedStudy && (
        <Dialog open={!!selectedStudy} onOpenChange={(open) => !open && setSelectedStudy(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <NamespaceBadge namespace={selectedStudy.namespace} prefix="" category={selectedStudy.category} size="sm" />
              </div>
              <DialogTitle className="text-2xl font-editorial font-bold">{selectedStudy.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">{selectedStudy.summary}</DialogDescription>
            </DialogHeader>

            <div className="space-y-6 pt-4">
              <div className="rounded-lg overflow-hidden border border-border/60 bg-muted">
                <img src={selectedStudy.image} alt={selectedStudy.title} className="w-full h-auto object-cover max-h-80" />
              </div>

              {selectedStudy.humanProblem && (
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-mono">The Human / Systems Problem</h4>
                  <p className="text-sm leading-relaxed text-foreground/90">{selectedStudy.humanProblem}</p>
                </div>
              )}

              {selectedStudy.systemsSolution && (
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#FE299E] font-mono">Systems Architecture Solution</h4>
                  <p className="text-sm leading-relaxed text-foreground/90">{selectedStudy.systemsSolution}</p>
                </div>
              )}

              {selectedStudy.technicalOutcomes && (
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-mono">Key Technical &amp; Design Outcomes</h4>
                  <ul className="space-y-2">
                    {selectedStudy.technicalOutcomes.map((outcome, i) => (
                      <li key={i} className="text-sm flex items-start gap-2 text-foreground/80">
                        <Check className="w-4 h-4 text-[#FE299E] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border/40">
                {selectedStudy.liveUrl && (
                  <a href={selectedStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#FE299E] hover:bg-[#FE299E]/90 text-white">
                      {selectedStudy.liveUrlText || "Visit Live Product"} <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                )}
                {selectedStudy.repoUrl && (
                  <a href={selectedStudy.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      View Source Code <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* ── Published Thesis Callout ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-8 w-full">
        <Card className="p-6 md:p-8 border-[#FE299E]/30 bg-gradient-to-r from-card to-[#FE299E]/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <Badge variant="outline" className="text-xs font-mono border-[#FE299E]/40 text-[#FE299E]">
                Published Architectural Essay
              </Badge>
              <h3 className="text-2xl font-bold font-editorial tracking-tight">
                Design Is Risk: The Architectural Defense Against Model Collapse
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Why unconstrained AI agent swarms produce catastrophic technical debt, and how constitutional harness engineering restores deterministic production guarantees.
              </p>
            </div>
            <Link href="/essays/design-is-risk">
              <Button className="bg-[#FE299E] hover:bg-[#FE299E]/90 text-white shrink-0 font-medium">
                Read Full Essay <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* ── Conversion & Sprint Callout ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12 w-full">
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
