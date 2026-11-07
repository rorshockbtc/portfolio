export interface CaseStudyImage {
  src: string;
  title: string;
  caption: string;
  tag?: string;
}

export interface StackTier {
  role: string;
  tech: string;
  rationale: string;
}

export interface CodeSnippet {
  title: string;
  language: string;
  code: string;
  explanation: string;
}

export interface CodebaseBreakdown {
  headline: string;
  philosophy: string;
  stackArchitecture: StackTier[];
  codeSnippets?: CodeSnippet[];
}

export interface BeforeAfterPair {
  label: string;
  beforeSrc: string;
  beforeTitle: string;
  beforeCaption: string;
  afterSrc: string;
  afterTitle: string;
  afterCaption: string;
}

export interface CaseStudyData {
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  role: string;
  scaleBadge: string;
  timeline: string;
  heroImage: string;
  galleryImages: CaseStudyImage[];
  beforeAfter?: BeforeAfterPair[];
  executiveSummary: string;
  challenge: string;
  solution: string;
  uiUxCraft: string;
  systemsArchitecture: string;
  codebaseBreakdown?: CodebaseBreakdown;
  metrics: { value: string; label: string; subtext?: string }[];
  outcomes: string[];
  technologies: string[];
  liveUrl?: string;
  liveUrlLabel?: string;
  repoUrl?: string;
  ndaNotice?: string;
}

export const CASE_STUDY_ORDER = [
  "custodia",
  "unitedhealth",
  "walmart",
  "pipes",
  "colors-type-grids",
  "chb-corporate",
  "chicuinaco",
  "marigold",
  "cassandra",
  "superstar",
  "clubhouse1099",
  "foodler",
  "ultralinq",
  "highdraw",
] as const;

export type CaseStudySlug = (typeof CASE_STUDY_ORDER)[number];

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  pipes: {
    slug: "pipes",
    client: "Colon Hyphen Bracket",
    title: "Pipes Protocol: Sovereign Knowledge Marketplace, Hash Atelier & SEMI (;-])",
    subtitle: "Flagship Showcase • Web Protocol (pipes.pink), Integrated Hash Studio + SEMI Socratic Agent, MCP/HTTP 402 Gate & macOS IDE",
    role: "Architect, Lead Designer & Systems Builder",
    scaleBadge: "Web Protocol • Hash & SEMI • MCP • macOS & iOS",
    timeline: "2024 – 2026",
    heroImage: "/images/pipes/pipes-hero.png",
    galleryImages: [
      {
        src: "/images/pipes/pipes-hero.png",
        title: "Pipes.Pink Web Protocol: A Sovereign Library for Human Knowledge",
        caption: "The flagship Pipes.Pink interface where domain experts publish verified primary sources into content-addressed namespaces and earn royalties when AI agents cite them.",
        tag: "Web Protocol",
      },
      {
        src: "/images/pipes/pipes-hash-studio-semi.png",
        title: "Integrated Hash Studio & SEMI (;-]) Socratic Sparring Atelier",
        caption: "Redesigned inside Pipes (/write): a private-by-default epistemic vault with live Socratic sparring from SEMI (;-]), 1-click Substack ingestion, and cryptographic 'Seal to Pipe' publishing.",
        tag: "Hash & SEMI (;-])",
      },
      {
        src: "/images/pipes/pipes-marketplace.png",
        title: "Explore Marketplace: Discover & Claim Curated Knowledge Canons",
        caption: "Namespace discovery directory across Foundations, Systems, Craft, Frontier, and Civic domains—filtering deeply curated (100+ source) active knowledge streams.",
        tag: "Marketplace UX",
      },
      {
        src: "/images/pipes/pipes-namespace-bitcoin.png",
        title: "Sovereign Pipe Room: pipe\\bitcoin Primary-Source Library",
        caption: "Claimed namespace room housing cryptographically sealed BIP specifications and primary sources with interactive Library inspection, Greater (>) WebGPU chat, and Ask Semi.",
        tag: "Sovereign Namespace",
      },
      {
        src: "/images/pipes/pipes-classroom-mpb.png",
        title: "Enterprise & Global Classroom Platform: pipe\\my-first-bitcoin",
        caption: "Turnkey sovereign classroom featuring 15-second Greater CLI mount (npx @pipes/greater), 90+ language instant curriculum translator, 100% editable canon, and Sanity CMS GROQ ingestion.",
        tag: "90+ Language Classroom",
      },
      {
        src: "/images/pipes/pipes-dev-mcp-hub.png",
        title: "Developer Hub (dev-hub v1.0): Immutable Context Graphs for Agents",
        caption: "REST and Model Context Protocol (MCP) developer portal providing SHA-256 content-addressed context graphs, 1-click MCP setup, and WebGPU edge indexing.",
        tag: "Developer Hub",
      },
      {
        src: "/images/pipes/pipes-economics.png",
        title: "Curator Economics & HTTP 402 MCP Agent Gate",
        caption: "Sovereign payout engine enforcing a 70% creator revenue share and HTTP 402 payment gates for Claude Desktop, Cursor IDE, and autonomous agent queries in USD or Bitcoin Sats.",
        tag: "MCP & HTTP 402 Gate",
      },
      {
        src: "/images/pipes/pipes-podcast-pavilion.png",
        title: "The Sovereign Podcast Pavilion: Autonomous 2-Host Neural Audio",
        caption: "Multi-speaker neural audio overview studio (Semi & Greater) synthesizing synchronized interactive transcripts directly from cryptographically verified primary-source pipes.",
        tag: "Neural Audio Studio",
      },
      {
        src: "/images/pipes/desktop-mac-bang-ide.png",
        title: "Pipes Desktop for macOS: Native ! BANG Curator & Developer IDE",
        caption: "Native Tauri 2.0 + Rust macOS studio featuring 480+ local pipes, folder watcher sync, 500k-record DuckDB analyzer, co-op classroom management, and one-click agency CMS deployment.",
        tag: "macOS Native IDE",
      },
    ],
    executiveSummary:
      "Pipes (pipes.pink) is my flagship software ecosystem: a content-addressed sovereign knowledge protocol, marketplace, and epistemic writing studio deployed across Web, Model Context Protocol (MCP), native macOS Desktop (Tauri/Rust), and iOS. Inside Pipes, creators draft in the redesigned Hash Sanctuary alongside SEMI (;-])—a Socratic editor-in-residence with persistent memory—before sealing verified monographs into SHA-256 namespaces (like pipe\\bitcoin and pipe\\my-first-bitcoin) where AI agents pay 70% micro-royalties via HTTP 402 gates.",
    challenge:
      "As foundation LLMs drown in synthetic slop and suffer from model collapse, verified human-curated primary sources are the rarest asset on the internet. Yet domain experts, authors, and open-source curricula have their work scraped for free by AI labs while enterprises burn thousands of dollars per month on fragile cloud RAG pipelines that still hallucinate.",
    solution:
      "Architected a unified, four-pillar ecosystem: (1) the integrated Hash Sanctuary (/write) and SEMI (;-]) Socratic sparring partner for private thinking, 3D Galaxy exploration, and 1-click Substack ingestion; (2) SHA-256 Merkle-DAG namespaces where curators own deeded property and earn 70% royalties via an HTTP 402 / MCP agent gate; (3) the turnkey Greater (>) WebGPU + DuckDB-WASM classroom tutor across 90+ languages; and (4) the Sovereign Podcast Pavilion (Semi & Greater 2-host neural audio) plus native macOS ! BANG IDE.",
    uiUxCraft:
      "Designed a cohesive editorial and technical interface spanning the redesigned Hash & SEMI Socratic Atelier, interactive namespace rooms (Library, Greater Chat, Podcast), enterprise 90+ language curriculum studios, and a native macOS desktop cockpit—coupled with a runtime CSS variable engine that adapts across 6 distinct aesthetic personas.",
    systemsArchitecture:
      "Engineered a SHA-256 Merkle-DAG knowledge graph (the Ampersand Graph) synchronized across PostgreSQL/Drizzle, local SQLite/Turso replicas, and in-browser DuckDB-WASM + WebGPU vector caches. Integrated SEMI's persistent Socratic memory vault, Model Context Protocol (MCP) and HTTP 402 payment gates for Claude Desktop and Cursor IDE, Sanity CMS GROQ bridges, OpenTimestamps (OTS) provenance, and non-custodial Bitcoin Lightning + USD royalty settlement.",
    metrics: [
      { value: "70%", label: "Creator Royalties", subtext: "Deeded MCP & HTTP 402 split" },
      { value: "90+ Langs", label: "Sovereign Classrooms", subtext: "Turnkey Greater (>) WebGPU tutor" },
      { value: "$0.00", label: "Marginal Cloud AI Cost", subtext: "In-browser DuckDB-WASM + WebGPU" },
      { value: "Hash + SEMI", label: "Epistemic Atelier", subtext: "Socratic sparring & Seal-to-Pipe" },
    ],
    outcomes: [
      "Unified the redesigned Hash writing sanctuary and SEMI (;-]) Socratic editor-in-residence directly into pipes.pink with 1-click 'Seal to Pipe' cryptographic publishing.",
      "Designed and shipped the Explore marketplace, Developer MCP Hub, 2-Host Sovereign Podcast Pavilion (Semi & Greater), and native macOS ! BANG IDE.",
      "Built the turnkey pipe\\my-first-bitcoin classroom platform with 15-second CLI mounting (npx @pipes/greater), Sanity CMS ingestion, and 90+ language localization.",
      "Engineered the Curator Economics & HTTP 402 MCP Gate enabling creators to monetize autonomous AI agent citations across Claude Desktop, Cursor, and REST.",
    ],
    technologies: ["Next.js & TypeScript", "MCP & HTTP 402 Gate", "WebGPU & DuckDB-WASM", "macOS Native (Tauri 2.0/Rust)", "iOS (Swift/SwiftUI)", "PostgreSQL / Drizzle / SQLite", "Bitcoin Lightning / Web Crypto"],
    liveUrl: "https://pipes.pink",
    liveUrlLabel: "Explore Live Pipes.Pink Protocol",
    repoUrl: "https://github.com/rorshockbtc/pipes-native",
    codebaseBreakdown: {
      headline: "How I Architect & Ship Sovereign Platforms as a Unit of One",
      philosophy:
        "The translation gap between design and engineering is where early-stage tech dies. As a systems architect and prompt engineer who reads code, I model the relational schemas from first principles, lock the mathematical Vignelli grid in CSS, and orchestrate AI agents—especially on the backend—to ship full-stack TypeScript, Next.js, Python, and Rust systems with zero handoff loss.",
      stackArchitecture: [
        {
          role: "Web Protocol, Marketplace & MCP Agent Gate",
          tech: "TypeScript + Next.js + Model Context Protocol (MCP)",
          rationale:
            "TypeScript guarantees strict type-safety across SHA-256 Merkle-DAG nodes and Drizzle ORM schemas. Next.js powers the public Explore marketplace, namespace rooms, and HTTP 402 MCP endpoints for Claude Desktop and Cursor IDE.",
        },
        {
          role: "Zero-Cloud Edge Inference & Sovereign Classrooms",
          tech: "DuckDB-WASM + WebGPU + Greater (>) CLI",
          rationale:
            "Shifts vector search, 500k-record analytics, and curriculum synthesis directly into the client browser or desktop GPU—delivering 10–30ms local queries and 90+ language classroom localization at $0 marginal cloud cost.",
        },
        {
          role: "Native Desktop Engine (macOS ! BANG IDE)",
          tech: "Tauri 2.0 + Rust",
          rationale:
            "Replaces bloated Electron containers with native Rust bindings. Powers local folder-watcher ingestion, co-op classroom management, DuckDB analytics, and one-click agency CMS deployments with minimal memory footprint.",
        },
        {
          role: "Cryptographic Provenance & Royalty Settlement",
          tech: "SHA-256 Merkle-DAG + OpenTimestamps + Lightning/USD",
          rationale:
            "Every curated source and assertion is content-addressed and anchored via OpenTimestamps (OTS), enforcing a deeded 70% creator revenue share and 0.25% permanent registrar equity floor.",
        },
      ],
      codeSnippets: [
        {
          title: "The Ampersand Knowledge Graph (server/ampersand.ts)",
          language: "typescript",
          code: `// Deterministic Knowledge Graph with Typed Relationships
export interface AmpersandNode {
  id: string;
  nodeType: 'content' | 'pipe' | 'user' | 'concept' | 'topic' | 'source';
  entityId?: string;
  properties: Record<string, unknown>;
  embedding?: number[];
  createdAt: Date;
}

export interface AmpersandEdge {
  fromNodeId: string;
  toNodeId: string;
  edgeType: 'RELATES_TO' | 'CONTAINS' | 'CURATED_BY' | 'REFERENCES' | 'INSPIRED_BY' | 'COMPLEMENTS' | 'CONTRADICTS';
  weight: number;
  confidence?: number;
}`,
          explanation:
            "The foundational graph data model enabling deterministic knowledge traversal without burning redundant LLM context tokens.",
        },
        {
          title: "Cryptographic Namespace Registry (shared/schema.ts)",
          language: "typescript",
          code: `// Drizzle ORM Schema: Deeded Namespace Property & Revenue Split
export const pipes = pgTable("pipes", {
  id: varchar("id").primaryKey().default(sql\`gen_random_uuid()\`),
  namespace: varchar("namespace").notNull().unique(), // e.g. "pipe\\\\bitcoin"
  curatorId: varchar("curator_id").notNull().references(() => users.id),
  biasStatement: text("bias_statement"),
  revenueSharePercent: real("revenue_share_percent").default(70), // 70% Creator Equity
  pricingTier: varchar("pricing_tier"), // "premium", "standard", "niche"
  qualityScore: real("quality_score").default(0),
});`,
          explanation:
            "Deeded property schema ensuring curators own their namespaces cryptographically with 70% perpetual equity distribution.",
        },
      ],
    },
  },

  cassandra: {
    slug: "cassandra",
    client: "Colon Hyphen Bracket",
    title: "Cassandra: High-Signal Career Agent & Vignelli Focus Mode",
    subtitle: "jobseeker-agent (Focus Mode v5.0) • Autonomous Operator & Negative Dismissal Reinforcement",
    role: "Architect, Lead Designer & Full-Stack Builder",
    scaleBadge: "Focus Mode v5.0 • Autonomous AI Agent",
    timeline: "2025 – 2026",
    heroImage: "/images/cassandra/focus-mode/00_focusMode_landing_redesign.jpg",
    galleryImages: [
      {
        src: "/images/cassandra/focus-mode/00_focusMode_landing_redesign.jpg",
        title: "Focus Mode: Landing & 'Sprint of 8' Queue",
        caption: "Calming Albers Sand (#F5EFE6) landing interface bounding daily job evaluation to an intentional 8-role focus queue.",
        tag: "Focus Mode v5.0",
      },
      {
        src: "/images/cassandra/focus-mode/01_focusMode_reviewRole_overview.jpg",
        title: "Role Review: Single-Task Editorial View",
        caption: "Massimo Vignelli 8pt grid layout presenting role overview, compensation, and leadership leverage without scraper noise.",
        tag: "Editorial Layout",
      },
      {
        src: "/images/cassandra/focus-mode/02_focusMode_reviewRole_companyRole.jpg",
        title: "Company Context & Cultural Alignment",
        caption: "Deep semantic extraction of engineering culture, organizational maturity, and design-system leverage.",
        tag: "Company Intelligence",
      },
      {
        src: "/images/cassandra/focus-mode/04_focusMode_reviewRole_fitRisks.jpg",
        title: "Strategic Fit & Risk Vector Analysis",
        caption: "Autonomous evaluator highlighting hidden misalignment risks, tech debt indicators, and executive leverage.",
        tag: "Risk Analysis",
      },
      {
        src: "/images/cassandra/focus-mode/08_focusMode_apply_fullDesignView.jpg",
        title: "Bespoke Cover Memo & Question Synthesis",
        caption: "Automatic drafting of deeply contextualized, non-generic application responses grounded in verified work history.",
        tag: "Application Engine",
      },
      {
        src: "/images/cassandra/focus-mode/09_youGotThis_celebrationScreen_final.jpg",
        title: "Sprint Completion: You Got This Celebration",
        caption: "Restoring dignity, joy, and emotional calm to the job search ritual with fine art photography and celebratory completion.",
        tag: "Human Dignity",
      },
    ],
    executiveSummary:
      "Cassandra is my autonomous career evaluation agent and deep-work interface, designed to eliminate job-board dopamine traps. Built around the 'Sprint of 8' Focus Mode, it adapts to user dismissals through a continuous reinforcement loop in SQLite, auto-injecting negative exclusion patterns into Gemini 2.5 Flash while presenting all evaluations in a calming Massimo Vignelli 8pt editorial layout.",
    challenge:
      "Job searching in tech has devolved into a demoralizing, predatory slog dominated by low-signal AI wrappers and spam boards. It causes acute anxiety, dopamine burnout, and cognitive overload. I wanted to give myself an interface that made the process beautiful, calm, and dignified.",
    solution:
      "Architected the 'Sprint of 8'—an intentional one-hour batch of exactly 8 curated roles (5–10 minutes of deep focus each). When a role is rejected, Cassandra adapts: the explicit dismissal rationale is logged into SQLite (jobs.db) and injected into Gemini's system prompt as Critical Negative Exclusions, training the agent to find progressively sharper matches over time.",
    uiUxCraft:
      "Substituted chaotic applicant feeds with a Calming Albers Sand (#F5EFE6) palette and Massimo Vignelli's 8pt grid. Replaced corporate logos with curated fine art photography to eliminate brand bias. Features a sticky scroll-snap navigation pillar and chapter state preservation so users never lose their place.",
    systemsArchitecture:
      "Built with plain HTML5 and Vanilla JavaScript on the frontend for zero-friction client speed, backed by a Node.js and SQLite engine. Seamlessly calls the Gemini 2.5 Flash API for low-latency batch analysis and cover memo synthesis.",
    metrics: [
      { value: "8 Roles", label: "Focus Sprint Limit", subtext: "Exactly 1 hour bounded focus" },
      { value: "Adaptive", label: "Dismissal Reinforcement", subtext: "Continuous SQLite feedback loop" },
      { value: "Vignelli 8pt", label: "Design System", subtext: "Pure mathematical spacing" },
      { value: "#F5EFE6", label: "Albers Sand", subtext: "Calming tactile palette" },
    ],
    outcomes: [
      "Designed and shipped Focus Mode v5.0, bounding active evaluation to deep, dignified sessions.",
      "Engineered continuous reinforcement dismissal pipeline auto-injecting negative rules into LLM calls.",
      "Crafted bespoke Vignelli CSS layout with scroll-snap pillar and capsule scrollbars.",
      "Secured private live web interface on Railway with passcode protection.",
    ],
    technologies: ["Node.js", "SQLite", "Gemini 2.5 Flash", "Massimo Vignelli 8pt Grid", "Vanilla JS & CSS", "Railway"],
    liveUrl: "https://jobseeker-agent.up.railway.app",
    liveUrlLabel: "Launch Live Sandbox (Passcode: onewordalllowercasehirekyle)",
  },

  superstar: {
    slug: "superstar",
    client: "Victoria Superstar",
    title: "Superstar: Bespoke Mobile AI Reflection & External Memory Loom",
    subtitle: "A Love Letter in Systems Architecture • Dual-LLM Prompt Weaver & Context Continuity for DeepSeek",
    role: "Architect, Lead Designer & Full-Stack Builder",
    scaleBadge: "Dual-LLM Synergy • DeepSeek Mobile Bridge",
    timeline: "2025 – 2026",
    heroImage: "/images/superstar/01_superstar_gate_popart_access_code.png",
    galleryImages: [
      {
        src: "/images/superstar/01_superstar_gate_popart_access_code.png",
        title: "Pop-Art Access Gate: Built with ❤️ for Victoria",
        caption: "Whimsical, glamorous surrealist gate featuring the iconic leopard armchair, crystal chandelier, ocean sunset horizon, and Vogue bookstack.",
        tag: "Surrealist Gate",
      },
      {
        src: "/images/superstar/02_superstar_prompt_crafter_empty.png",
        title: "Prompt Weaver & One-Tap DeepSeek Bridge",
        caption: "Clean, focused workspace showing Victoria's career transition context and the hot pink 'COPY & OPEN DEEPSEEK' action button.",
        tag: "Prompt Weaver",
      },
      {
        src: "/images/superstar/03_superstar_prompt_crafter_with_gemini_ideas.png",
        title: "Dual-LLM Synergy: Gemini Pre-Synthesizer",
        caption: "Integrated Gemini drawer automatically generating structured prompt ideas (Work, Personal Growth, Creative) before sending into DeepSeek.",
        tag: "Dual-LLM Engine",
      },
      {
        src: "/images/personal/kyle-victoria-palm-closeup.jpg",
        title: "Kyle & Victoria: The Heart Behind Superstar",
        caption: "Built as a 48-hour birthday gift to bridge Victoria's legal litigation background into international compliance with cumulative AI memory.",
        tag: "Human Foundation",
      },
      {
        src: "/images/superstar/superstar-logo.png",
        title: "Superstar Brand Identity & Mobile Icon",
        caption: "High-contrast luxury identity honoring cultural compression and soul (душа).",
        tag: "Brand Mark",
      },
    ],
    executiveSummary:
      "Superstar was built as a 48-hour birthday gift for my wife Victoria: an ultra-simple mobile AI reflection loom and contextual bridge for DeepSeek. It solves the ephemeral amnesia of mobile AI chats, translating fragmented reflections, executive coaching thoughts, and career transition goals into an evolving, unified memory that reinjects into DeepSeek with a single tap.",
    challenge:
      "When someone's entire intellectual interface with AI is a mobile screen, every conversation degrades. Victoria would chat with DeepSeek, have profound breakthroughs in international legal career repositioning, close the app, and start from a blank slate the next day. This created an exhausting cycle of snapshot insights with zero cumulative progress.",
    solution:
      "Engineered an elegant dual-LLM synergy: an ultra-clean mobile web interface where Gemini 2.5 Flash helps Victoria brainstorm and structure her exact inquiry, auto-appends her master legal and personal background context, and provides a 1-tap 'COPY & OPEN DEEPSEEK' button. She pastes into DeepSeek with complete historical context and archives breakthroughs back into Superstar with zero friction.",
    uiUxCraft:
      "Designed specifically for one-handed mobile thumb use. Replaced sterile productivity UI with a private digital temple: a whimsical surrealist Pop-Art gate (leopard armchair, crystal chandelier, ocean sunset arch, fashion bookstack), hot pink actions (#FE299E), and thoughtful microcopy that treats her thoughts with structural dignity.",
    systemsArchitecture:
      "Lightweight Next.js PWA with zero account friction (hardcoded private cryptographic PIN). Dual-LLM pipeline pairing Gemini 2.5 Flash for prompt structuring with DeepSeek for deep analytical reasoning.",
    metrics: [
      { value: "48 Hours", label: "Build Velocity", subtext: "Zero to live mobile deployment" },
      { value: "1 Tap", label: "Context Reinjection", subtext: "Zero-friction DeepSeek continuity" },
      { value: "0 Loss", label: "Memory Preservation", subtext: "Halts mobile AI amnesia" },
      { value: "Dual-LLM", label: "Synergy", subtext: "Gemini structuring + DeepSeek reasoning" },
    ],
    outcomes: [
      "Engineered external memory architecture eliminating context drift across mobile AI sessions.",
      "Crafted bespoke Pop-Art gate screen with surrealist illustration and PIN security.",
      "Bridged deep international legal and compliance career frameworks directly into automated AI prompts.",
    ],
    technologies: ["Next.js PWA", "Tailwind CSS", "TypeScript", "DeepSeek API", "Gemini 2.5 Flash", "Whisper Audio"],
    codebaseBreakdown: {
      headline: "Dual-LLM Prompt Weaver & Context Continuity Architecture",
      philosophy:
        "Superstar was built as a 48-hour birthday gift for my wife Victoria to solve the ephemeral amnesia of mobile AI chats. I architected a dual-LLM synergy: an ultra-clean mobile web interface where Gemini 2.5 Flash helps Victoria brainstorm and structure her exact inquiry, auto-appends her master legal and personal background context, and provides a 1-tap bridge into DeepSeek for analytical reasoning.",
      stackArchitecture: [
        {
          role: "Mobile-First PWA Layer",
          tech: "Next.js + Tailwind CSS",
          rationale:
            "Engineered for one-handed mobile thumb use with instant load times, offline caching, and zero app-store friction.",
        },
        {
          role: "Dual-LLM Synergy Engine",
          tech: "Gemini 2.5 Flash + DeepSeek Bridge",
          rationale:
            "Gemini acts as the high-velocity contextual drafter; DeepSeek receives the unified master prompt for deep analytical reasoning.",
        },
        {
          role: "Zero-Account Private Access",
          tech: "Cryptographic PIN Gate",
          rationale:
            "Zero passwords, zero corporate SSO, zero telemetry tracking—just a private digital sanctuary guarded by a hardcoded cryptographic PIN.",
        },
        {
          role: "Context Continuity Loom",
          tech: "Local-First Persistent Storage",
          rationale:
            "Preserves cumulative career transition context across sessions, eliminating repetitive explanations and context drift.",
        },
      ],
    },
  },

  marigold: {
    slug: "marigold",
    client: "Open-source civic tech",
    title: "Marigold Insights: Zero-Cloud Civic Data & Election Audit Engine",
    subtitle: "bolt.pipes.pink • In-Browser DuckDB-WASM, Fellegi-Sunter Linkage & Zero-PII Hydration",
    role: "Architect, Lead Designer & Systems Builder",
    scaleBadge: "2,000,000+ records • Open source (AGPL-3.0)",
    timeline: "2026",
    heroImage: "/images/marigold/02_marigold_workspace_dashboard_kanban.png",
    galleryImages: [
      {
        src: "/images/marigold/01_marigold_landing_hero.png",
        title: "Marigold Insights: Non-Partisan Civic Data Exploration",
        caption: "Public sandbox landing page. All data exploration happens in the browser, so no personal data is sent to a server.",
        tag: "Public Portal",
      },
      {
        src: "/images/marigold/02_marigold_workspace_dashboard_kanban.png",
        title: "Mississippi Fair Elections: 2,000,000+ Active Record Mission Kanban",
        caption: "Local-compute workspace dashboard managing triage for 2,000,000+ active voter records with automated single-day registration surge cohort detection.",
        tag: "Mission Kanban",
      },
      {
        src: "/images/marigold/03_marigold_linkage_lab_fellegi_sunter.png",
        title: "Playbook Builder & Linkage Lab",
        caption: "1,000-Pair Ground Truth Benchmark proving 100% Precision and 100% Recall using Fellegi-Sunter probabilistic record linkage in 10.2ms.",
        tag: "Algorithmic Proof",
      },
      {
        src: "/images/marigold/04_marigold_data_stories_ai_concierge.png",
        title: "Data Investigation & AI Civic Concierge",
        caption: "Interactive data investigation console pairing local SQL queries with AI narrative generation and on-the-fly regional distribution charts.",
        tag: "Data Stories",
      },
      {
        src: "/images/marigold/05_marigold_developer_docs_sdk.png",
        title: "Developer Docs & Zero-PII Cryptographic SDK",
        caption: "Official Node.js / TypeScript SDK documentation handling client-side AES-256-GCM encryption, IV nonce generation, and auth tag validation locally.",
        tag: "Official SDK",
      },
    ],
    executiveSummary:
      "Marigold (bolt.pipes.pink) is a zero-cloud analytical execution engine built for county clerks, election observers, and civic researchers, and designed to fit the election-security priority in FEMA's FY26 Homeland Security Grant Program. It makes Mississippi's huge, hard-to-open voter rolls workable with 100% in-browser DuckDB-WASM and Zero-PII cryptographic entity hydration.",
    challenge:
      "Civic and voter datasets are massive (millions of rows) and routinely crash county clerk spreadsheets. Meanwhile, uploading citizen voter rolls to commercial cloud AI violates strict federal privacy laws and triggers catastrophic PII liabilities.",
    solution:
      "Built bolt.pipes.pink to allow citizens and clerks to inspect voter rolls directly in the browser using DuckDB-WASM and OPFS. Pioneered 'Zero-PII Hydration': names and addresses are stripped and replaced with cryptographic entity hashes before reaching the LLM; the browser decrypts and re-hydrates real citizen names locally in client memory. Zero bytes of PII ever leave the user's desk.",
    uiUxCraft:
      "Designed an editorial civic workstation featuring a Calming Albers Sand palette (#F5EFE6), Mission Kanban for registration spike triage, interactive Fellegi-Sunter linkage simulators, and 'Mari'—an AI civic concierge who translates non-technical inquiries into local SQL queries and dynamic data stories.",
    systemsArchitecture:
      "Runs 100% in client-side memory using DuckDB-WASM, SQLite, Web Workers, and Origin Private File System (OPFS). In-memory Fellegi-Sunter and Levenshtein probabilistic record linkage executes 1,000-pair benchmarks in 10.2ms with 100% precision and zero false accusations.",
    metrics: [
      { value: "2,000,000+", label: "Active Records", subtext: "Audited in-browser via DuckDB-WASM" },
      { value: "100%", label: "Linkage Precision", subtext: "Fellegi-Sunter benchmark" },
      { value: "0 Bytes", label: "Cloud Exposure", subtext: "100% local client memory" },
      { value: "10.2ms", label: "1,000-Pair Audit", subtext: "In-browser Web Worker speed" },
    ],
    outcomes: [
      "Eliminated cloud PII liability by executing multi-gigabyte queries entirely within browser Web Workers.",
      "Engineered Zero-PII cryptographic hashing protocol for private LLM demographic audits.",
      "Built Mission Kanban and Fellegi-Sunter linkage lab benchmarked at 100% precision.",
      "Qualified under mandatory 3% National Priority Area election security grant under HSGP.",
    ],
    technologies: ["DuckDB-WASM", "SQLite in Browser", "Web Workers", "OPFS", "Fellegi-Sunter Linkage", "Zero-PII Cryptography"],
    liveUrl: "https://bolt.pipes.pink",
    liveUrlLabel: "Launch Civic Sandbox (bolt.pipes.pink)",
    repoUrl: "https://github.com/rorshockbtc/marigold",
    codebaseBreakdown: {
      headline: "Zero-Cloud In-Browser DuckDB-WASM & Fellegi-Sunter Linkage Engine",
      philosophy:
        "When handling 2,000,000+ active voter records, pushing citizen data to a cloud database or external LLM API creates catastrophic PII liability and violates federal election security statutes. I engineered Marigold to run entirely in client-side memory using DuckDB-WASM, Web Workers, and OPFS. The AI only ever sees cryptographically blinded hashes—real voter identities are re-hydrated locally in browser RAM.",
      stackArchitecture: [
        {
          role: "In-Browser Analytical SQL Engine",
          tech: "DuckDB-WASM + OPFS (Origin Private File System)",
          rationale:
            "Executes multi-column aggregations and cohort filtering across 2,000,000+ rows in under 40ms directly inside the user's browser, eliminating all cloud compute and database hosting bills.",
        },
        {
          role: "Non-Blocking Multi-Thread Pipeline",
          tech: "Web Workers + Comlink",
          rationale:
            "Offloads data ingestion, Parquet parsing, and probabilistic record linkage away from the main JavaScript UI thread, keeping the 60fps Vignelli interface buttery smooth during heavy scans.",
        },
        {
          role: "Probabilistic Entity Resolution",
          tech: "Fellegi-Sunter Algorithm + Levenshtein Distance",
          rationale:
            "Evaluates agreement/disagreement frequency weights across name, DOB, and street address. Benchmarked at 1,000 record pairs in 10.2ms with 100% precision and zero false accusations.",
        },
        {
          role: "Zero-PII Cryptographic Shield",
          tech: "Web Crypto API (AES-256-GCM + SHA-256 Nonces)",
          rationale:
            "Blinds citizen identifiers into synthetic entity tokens before AI prompt generation. The browser decrypts and injects genuine names locally upon model response.",
        },
      ],
      codeSnippets: [
        {
          title: "In-Browser DuckDB-WASM Worker Execution (client/src/workers/duckdb.worker.ts)",
          language: "typescript",
          code: `// DuckDB-WASM Client-Side Execution Worker
import * as duckdb from "@duckdb/duckdb-wasm";

export async function executeVoterAudit(query: string, localBuffer: Uint8Array) {
  const db = await duckdb.AsyncDuckDB.create(bundle);
  const conn = await db.connect();
  
  // Register local OPFS Parquet or CSV buffer with Zero Cloud Egress
  await db.registerFileBuffer("voter_roll.parquet", localBuffer);
  
  // Execute high-throughput analytical query in-browser
  const table = await conn.query(query);
  return table.toArray().map((row) => row.toJSON());
}`,
          explanation:
            "Executes analytical queries directly in the client's browser Web Worker, guaranteeing zero bytes of sensitive voter rolls ever leave the local machine.",
        },
        {
          title: "Zero-PII Client Hydration Protocol (client/src/lib/zero-pii.ts)",
          language: "typescript",
          code: `// Deterministic Token Blinding for LLM Safe Context
export interface BlindingMap {
  [blindId: string]: { realName: string; precinct: string };
}

export function blindVoterRecord(record: VoterRecord): { blindedContext: string; map: BlindingMap } {
  const blindToken = "ENT_" + crypto.randomUUID().slice(0, 8);
  return {
    blindedContext: \`Subject \${blindToken} registered in precinct \${record.precinctCode}\`,
    map: { [blindToken]: { realName: record.fullName, precinct: record.precinctCode } }
  };
}`,
          explanation:
            "Replaces real names with cryptographic tokens prior to LLM analysis, re-hydrating identity client-side upon response.",
        },
      ],
    },
  },

  custodia: {
    slug: "custodia",
    client: "Custodia Bank",
    title: "Zero-to-One Federal Reserve SPDI Banking System & Brand Architecture",
    subtitle: "Lead Product Designer (First Design Hire) • 4-Day Rebrand Sprint & 30-Day Core Bank Launch",
    role: "Lead Product Designer (First Design Hire)",
    scaleBadge: "Chartered Full-Reserve SPDI Bank",
    timeline: "Jan 2022 – Sep 2024",
    heroImage: "/images/custodia/mm-01.png",
    galleryImages: [
      {
        src: "/images/custodia/mm-01.png",
        title: "Institutional Money Market: Account Overview",
        caption: "Corporate treasury interface designed for simultaneous monitoring of operational liquidity, daily institutional yield accrual, and multi-engine settlement positions.",
        tag: "Banking Dashboard",
      },
      {
        src: "/images/custodia/utxo-1.png",
        title: "Bitcoin Custody: UTXO Manager Console",
        caption: "Enterprise unspent transaction output (UTXO) management interface enabling treasury operators to inspect on-chain UTXO denominations and consolidate fragmented balances.",
        tag: "Bitcoin Custody",
      },
      {
        src: "/images/custodia/404 horse.png",
        title: "Hand-Drawn Brand Mark: 'The Horse'",
        caption: "Original hand-drawn identity crafted for Custodia Bank. Conceived as a contrarian, dignified antidote to generic SaaS fintech blue, embodying Wyoming full-reserve banking heritage.",
        tag: "Brand Identity",
      },
      {
        src: "/images/custodia/mm-02.png",
        title: "Money Market Settlement & Order Routing",
        caption: "Order entry and allocation UX managing T+1/T+2 commercial paper settlement windows alongside instant reserve balance checks.",
        tag: "Settlement UX",
      },
      {
        src: "/images/custodia/utxo-2.png",
        title: "UTXO Script Constructor & Fee Allocation",
        caption: "Interactive multi-sig constructor giving institutional clients fine-grained control over mempool priority fees, change addresses, and timelocks.",
        tag: "Transaction Builder",
      },
      {
        src: "/images/custodia/mm-03.png",
        title: "Fund Performance & Compliance Auditing",
        caption: "High-density institutional ledger views built for CFOs, compliance officers, and bank examiners with exportable audit logs and yield analytics.",
        tag: "Audit Ledger",
      },
      {
        src: "/images/custodia/utxo-3.png",
        title: "Multi-Engine Balance Allocation",
        caption: "Unified liquidity allocation panel reconciling on-chain Bitcoin confirmations with off-chain fiat ledger balances.",
        tag: "Liquidity UX",
      },
    ],
    executiveSummary:
      "As the first and only designer at Custodia Bank (a chartered Federal Reserve Special Purpose Depository Institution), I designed and shipped the complete ground-up marketing website in 4 days, followed by the entire core banking application in 30 days to meet strict Federal Reserve master account evaluation deadlines. The design system stood untouched in production for 2+ years without a subsequent design hire.",
    challenge:
      "Custodia Bank faced an existential deadline: build and deliver a regulatory-grade institutional banking platform before Federal Reserve examiners arrived for master account evaluations. The platform had to reconcile three fundamentally incompatible settlement rails into a single operational interface: standard Fedwire/ACH fiat transfers, institutional Money Market funds with daily yield accrual, and on-chain Bitcoin multi-sig UTXO consolidation.",
    solution:
      "Conceived the unified 'Frontier' settlement engine. Instead of forcing corporate treasurers to context-switch across disconnected systems, I designed an integrated liquidity state machine. Hand-drew the iconic brand marks (The Horse, Rodeo) to establish an authentic, dignified Western full-reserve banking aesthetic, rejecting the sterile, generic pastel blues of Silicon Valley fintech.",
    uiUxCraft:
      "Engineered high-density, low-glare financial ledgers optimized for institutional CFOs and bank compliance officers. Form layouts feature fine-grained mempool fee estimation, timelock visualizations, and multi-signature authorization states with zero ambiguity. Every transactional action contains built-in cryptographic confirmation guards to prevent catastrophic wire or key-delegation errors.",
    systemsArchitecture:
      "Unified 3 settlement rails (Fedwire, Money Market, Bitcoin UTXO) into a consistent state pipeline. Built complete design token architecture adhering to Massimo Vignelli's 8pt grid with strict component reusability, enabling frontend engineers to ship complex treasury workflows with zero design handoffs.",
    metrics: [
      { value: "4 Days", label: "Brand & Web Sprint", subtext: "Zero to live production" },
      { value: "30 Days", label: "Core Banking App", subtext: "Fed regulatory evaluation ready" },
      { value: "3 Rails", label: "Settlement Engines", subtext: "Fedwire, MM & Bitcoin UTXO" },
      { value: "100+", label: "Prototyping Sprints", subtext: "Cross-functional team velocity" },
    ],
    outcomes: [
      "Shipped complete institutional brand identity, marketing site, and design system in a 4-day sprint.",
      "Delivered full core banking web application in 30 days, meeting critical Federal Reserve examination deadlines.",
      "Designed the industry's first institutional Bitcoin UTXO consolidation and fee allocation console.",
      "Established multi-engine liquidity architecture that operated without design debt for over two years.",
    ],
    technologies: ["Figma Design System", "React", "TypeScript", "Massimo Vignelli 8pt Grid", "Bitcoin UTXO Scripts", "Fedwire / ACH", "Hand-Drawn Typography"],
    ndaNotice: "Interface plates shown under commercial confidentiality agreements. Proprietary account IDs and customer balances have been redacted or replaced with synthetic test vectors.",
  },

  "colors-type-grids": {
    slug: "colors-type-grids",
    client: "Colon Hyphen Bracket · Accént 3.0",
    title: "Accént 3.0: An Open-Source Design System Built for Humans & Local AI Models",
    subtitle:
      "Live at design.pipes.pink • 43 Interactive Pages, 197 Machine-Enforced Rules (rules.json), Stepwise 7B Prompt Compiler & Multi-Brand W3C Tokens",
    role: "Creator, Author & Principal Systems Architect",
    scaleBadge: "MIT Open Source · 43 Pages · 197 AI Rules",
    timeline: "2024 – 2026",
    heroImage: "/images/accent/01_accent_home_overview.png",
    galleryImages: [
      {
        src: "/images/accent/01_accent_home_overview.png",
        title: "Accént 3.0 Live Documentation & Choreography Stage (design.pipes.pink)",
        caption:
          "The live interactive documentation workbench at design.pipes.pink: 43 pages across Start Here, Why Accént, Foundations, Components, Patterns, and Building with AI, with live multi-brand theme switching and the Ask Semi (;-]) assistant.",
        tag: "Live Portal",
      },
      {
        src: "/images/accent/02_accent_foundations_color.png",
        title: "Color & Contrast: Interactive AAA Luminance Matrix & Warm Sandstone Ergonomics",
        caption:
          "Interactive Contrast Explorer validating 7:1 WCAG AAA compliance across all 49 Albers pastel-on-tonal-dark pairings and Warm Sandstone (#E8E2D5) surfaces that reduce 450nm blue-light sub-pixel emission by 16.5%.",
        tag: "Foundations · Color",
      },
      {
        src: "/images/accent/03_accent_foundations_motion.png",
        title: "Two-Tier Motion Architecture: Product Utility vs. Editorial Showcase",
        caption:
          "Live choreography sandbox demonstrating Tier 1 Product Motion (120–320ms snappy utility) alongside Tier 2 Editorial & Corporate Motion (RiseLines, ScaryHeadline 3-phase strike, Smile wink, and Hairline draw).",
        tag: "Foundations · Motion",
      },
      {
        src: "/images/accent/04_accent_component_card_nonesting.png",
        title: "Component Governance: The 4-Part 400×408 Card & No-Nesting Doctrine",
        caption:
          "Numbered anatomical specification enforcing the exact 4-part card order (Surface, Art, Interaction, Anchor), asymmetric 0/12/0/12 radius, and the strict card.no-nesting rule that bans boxes inside boxes.",
        tag: "Components · Card",
      },
      {
        src: "/images/accent/05_accent_pattern_bang_stepwise.png",
        title: "Patterns: BANG! Fixed Small-Business Skeletons & 12 Architectural Rooms",
        caption:
          "Interactive Storefront, Service, and Portfolio skeleton explorer showing how BANG! empowers Main Street owners to ship accessible, tabular-numeral sites in one hour without breaking the 8pt grid.",
        tag: "Patterns · BANG!",
      },
      {
        src: "/images/accent/06_accent_building_with_ai_rules.png",
        title: "Building with AI: rules.json & Hardware-Aware Stepwise Prompt Compiler",
        caption:
          "How Accént keeps local 7B models (Qwen 2.5 Coder 7B on 8–16GB Macs) on the grid by chunking UI generation into 4 ~200-token steps and validating output against 197 regular-expression violationPatterns.",
        tag: "Building with AI",
      },
      {
        src: "/images/cassandra/colors-type-grids.jpg",
        title: "Albers & Vignelli in CSS: The 3846×4800 Masterwork Poster",
        caption:
          "The original visual manifesto exploring Josef Albers' chromatic relativity, typographic scale, and Massimo Vignelli's 8pt CSS grid discipline.",
        tag: "Visual Manifesto",
      },
    ],
    executiveSummary:
      "Accént 3.0 (live at design.pipes.pink and open-sourced under MIT at github.com/rorshockbtc/accent-ui) is the comprehensive, dual-audience design system governing Pipes, BANG!, Marigold, and Colon Hyphen Bracket. Spanning 43 interactive documentation pages and 197 machine-enforceable rules, Accént is written simultaneously for humans (product designers, engineers, and non-technical small-business owners) and for the small 7B–14B local AI models running on their laptops. It translates Josef Albers' 'The Interaction of Color' (relief vs. focus, 49 WCAG AAA pairings) and Massimo Vignelli's 8pt grid into a single W3C DTCG token source, three forkable multi-brand presets, a Two-Tier Motion architecture, and a live /rules.json endpoint paired with a hardware-aware stepwise prompt compiler.",
    challenge:
      "AI writes backend code like a lightsaber through butter, but ask an LLM—especially a local 7B model on an 8GB or 16GB laptop—to generate a frontend interface and it burns 5× the tokens while producing uncalibrated slop: nested cards inside cards, low-contrast grey text, arbitrary pixel heights like h-[37px], and sub-13px labels. Meanwhile, traditional enterprise design systems are written exclusively for human designers in Figma or bloated with hundreds of unopinionated utility variants, offering zero machine-readable guardrails for agentic code generation and zero plain-language guidance for non-designers.",
    solution:
      "Architected Accént 3.0 as a 43-page interactive specification and component workbench where humans read the prose tabs (Overview, Guidelines, Specs, Accessibility) and AI models ingest the machine-readable rules (/rules.json). Key innovations include: (1) 197 Machine-Enforced Rules with Regex Violation Patterns: Every page exports deterministic rules (e.g., grid.multiple-of-8, type.floor-13px, card.no-nesting, color.one-focus, button.hit-area-44) equipped with JavaScript regular expressions that automatically flag non-conforming AI code in CI or local IDE loops; (2) Hardware-Aware Stepwise Prompt Compiler: Prevents 7B local models (Qwen 2.5 Coder 7B / Llama 3.2) from choking on 2,500-word prompts by compiling UI tasks into four ~200-token sequential phases (Skeleton → Primitives → Editorial Data → Walkthrough), validating regex gates after every step; (3) Visual Ergonomics & 49 AAA Pairings: Replaces clinical #FFFFFF backgrounds with Warm Sandstone (#E8E2D5, ~77% luminance) to cut 450nm blue-light scatter by 16.5% and eliminate astigmatism stripe vibration while maintaining 12.6:1 AAA ink contrast; and (4) Multi-Brand Preset Engine: Ships three turnkey brand profiles (editorial-sandstone for Pipes, playful-principal for CHB Corporate, and albers-perspectives) from one token contract.",
    uiUxCraft:
      "Every page on design.pipes.pink dogfoods the exact rules it teaches. Built around Josef Albers' principle of Relief and Focus—most of the screen rests quietly in Warm Sandstone relief (#E8E2D5 / #F3EFE9) while Sovereign Pink (#FE299E / #D44983) is reserved for the single primary focal point (<10% of any viewport). Enforces a strict 13px minimum type floor, 44×44px minimum touch targets, tabular numerals for all data tables, and a Two-Tier Motion doctrine: Tier 1 Product Motion (120ms/200ms/320ms on cubic-bezier(0.16, 1, 0.3, 1) with zero text movement during daily work) vs. Tier 2 Editorial Showcase Motion (650–900ms masked line rises, 3-phase ScaryHeadline strikes, and left-origin hairline draws).",
    systemsArchitecture:
      "Next.js 15 + TypeScript + Tailwind CSS documentation and compiler runtime backed by a single W3C Design Tokens Community Group (DTCG) source (src/styles/design-tokens.json). Exposes a static edge-cached /rules.json API route aggregating all 197 AgentRule objects across 43 page modules, a live Stepwise Prompt Compiler (src/lib/bang/stepwise-prompt-compiler.ts) that adapts token chunking across 3 hardware tiers (local-7b, local-14b-32b, cloud-frontier), and an integrated Ask Semi (;-]) Socratic design assistant.",
    metrics: [
      { value: "43 Pages", label: "Interactive Docs", subtext: "Foundations, Components, Patterns & AI" },
      { value: "197 Rules", label: "Machine-Enforced", subtext: "Live /rules.json + regex validators" },
      { value: "49 AAA", label: "Chromatic Pairings", subtext: "≥ 7:1 contrast across 12 rooms" },
      { value: "3 Tiers", label: "Stepwise AI Compiler", subtext: "7B laptop · 14–32B · Cloud frontier" },
    ],
    outcomes: [
      "Designed, authored, and open-sourced the 43-page Accént 3.0 design system portal at https://design.pipes.pink (MIT License).",
      "Engineered the /rules.json endpoint and 197 regex-backed AgentRule specifications so local 7B–14B models and CI pipelines catch layout, contrast, and typography violations automatically.",
      "Built the Hardware-Aware Stepwise Prompt Compiler for BANG! and Pipes, splitting UI generation into 4 ~200-token verified steps for 8GB–16GB Macs.",
      "Codified three multi-brand theme presets (Editorial Sandstone, Playful-Principal, Albers Perspectives) powering pipes.pink, colonhyphenbracket.pink, and bolt.pipes.pink from a single W3C token source.",
      "Created interactive live sandboxes across every page: Contrast Explorer, Eye-Fatigue Luminance Simulator, Tier 1/Tier 2 Motion Stage, 4-Part Card Anatomy, and BANG! Site Skeletons.",
    ],
    technologies: [
      "Next.js & TypeScript",
      "W3C DTCG Design Tokens",
      "Machine-Readable rules.json",
      "Stepwise 7B Prompt Compiler",
      "Framer Motion (Two-Tier)",
      "Tailwind CSS",
      "WCAG AAA (7:1) Governance",
    ],
    liveUrl: "https://design.pipes.pink",
    liveUrlLabel: "Explore Accént 3.0 Live (design.pipes.pink)",
    repoUrl: "https://github.com/rorshockbtc/accent-ui",
    codebaseBreakdown: {
      headline: "How Accént Governs Both Human Interfaces and 7B Local AI Code Generation",
      philosophy:
        "A design system in the agentic era cannot just be a Figma sticker sheet or a collection of copy-paste React primitives. It must be an executable contract. Humans need clear essays explaining why Warm Sandstone prevents eye fatigue or why nested cards destroy scannability; local 7B models need 1-sentence deterministic statements and regex violation patterns small enough to fit inside a 300-token context window.",
      stackArchitecture: [
        {
          role: "Single-Source W3C DTCG Token & Multi-Brand Engine",
          tech: "design-tokens.json + src/styles/themes.ts",
          rationale:
            "Compiles color, typography, 8pt spacing, elevation, and motion curves into CSS custom properties across three brand presets (editorial-sandstone, playful-principal, albers-perspectives) without forking components.",
        },
        {
          role: "Machine-Readable Agent Rule Registry",
          tech: "/rules.json API + 197 Regex Violation Patterns",
          rationale:
            "Every documentation page exports structured AgentRule objects (id, statement, why, violationPattern). Tools, linters, and local LLMs fetch only the rule groups relevant to the active component.",
        },
        {
          role: "Hardware-Aware Stepwise Prompt Compiler",
          tech: "src/lib/bang/stepwise-prompt-compiler.ts",
          rationale:
            "Divides UI generation into 4 sequential ~200-token steps for 7B laptop models, 2 phases for 14B–32B models, or 1 unified pass for frontier cloud models—halting and retrying if any regex gate fails.",
        },
        {
          role: "Two-Tier Motion & Interactive Demo Workbench",
          tech: "Framer Motion + 35+ Live Embedded Sandboxes",
          rationale:
            "Separates snappy 120–320ms product utility motion (Tier 1) from 650–900ms editorial showcase choreography (Tier 2), with full prefers-reduced-motion compliance.",
        },
      ],
      codeSnippets: [
        {
          title: "Hardware-Aware Stepwise Prompt Compiler (src/lib/bang/stepwise-prompt-compiler.ts)",
          language: "typescript",
          code: `export type HardwareTierId = 'local-7b' | 'local-14b-32b' | 'cloud-frontier';

export const HARDWARE_TIERS: Record<HardwareTierId, HardwareTierSpec> = {
  'local-7b': {
    id: 'local-7b',
    label: '8GB–16GB Mac · Qwen 2.5 Coder 7B / Llama 3.2 3B',
    modelExamples: 'qwen2.5-coder:7b · llama3.2:3b · WebGPU 4B',
    ramRecommendation: '8GB–16GB Unified Memory (Zero Cloud Cost)',
    maxPromptCharsPerStep: 1400,
    stepCount: 4,
    whyThisChunking:
      '7B models excel at focused single-concern generation but degrade rapidly when asked to handle CSS grid geometry, ARIA focus state, long-form copy, and contrast QA in one pass. Splitting into 4 verified steps keeps each pass under ~300 tokens.',
  },
  'local-14b-32b': {
    id: 'local-14b-32b',
    label: '16GB–64GB Mac · Qwen 2.5 Coder 14B / 32B',
    modelExamples: 'qwen2.5-coder:14b · qwen2.5-coder:32b',
    ramRecommendation: '16GB–64GB MacBook Pro / Mac Studio',
    maxPromptCharsPerStep: 2800,
    stepCount: 2,
    whyThisChunking:
      '14B–32B models hold structural layout and accessible CVA primitives together cleanly in Phase 1, then bind primary-source content and run self-audit checks in Phase 2.',
  },
  'cloud-frontier': {
    id: 'cloud-frontier',
    label: 'Cloud / Frontier · Gemini 2.5 Pro / Claude',
    modelExamples: 'Gemini 2.5 Pro · Claude Sonnet / Opus',
    ramRecommendation: 'Cloud API or BYOK (200K+ Context Window)',
    maxPromptCharsPerStep: 8000,
    stepCount: 1,
    whyThisChunking:
      'Frontier models can ingest the complete W3C token contract, CVA variants, and verification checklist in a single unified specification pass.',
  },
};`,
          explanation:
            "Instead of dumping a 2,500-word design system prompt into a small local model on an 8GB Mac, the Stepwise Compiler chunks generation into 4 focused passes (~200 tokens each) and validates regex gates before advancing.",
        },
        {
          title: "Multi-Brand Theme Registry (src/styles/themes.ts)",
          language: "typescript",
          code: `export type BrandProfileId =
  | 'editorial-sandstone'
  | 'playful-principal'
  | 'albers-perspectives';

export const BRAND_PROFILES: Record<BrandProfileId, BrandProfile> = {
  'editorial-sandstone': {
    id: 'editorial-sandstone',
    name: 'Editorial Sandstone (Pipes)',
    tagline: 'MoMA/Met archival sandstone canvas, Fraunces display serif, and Dual-Accent Pink + Sky.',
    usedBy: 'pipes.pink · design.pipes.pink',
    mark: '´',
    typography: { display: 'Fraunces', serif: 'Fraunces', sans: 'Inter', mono: 'JetBrains Mono' },
    tokens: {
      light: { ...getAccentThemeVars('light'), '--a-radius-cta': '6px' },
      dark: { ...getAccentThemeVars('dark'), '--a-radius-cta': '6px' },
    },
  },
  'playful-principal': {
    id: 'playful-principal',
    name: 'Playful-Principal (CHB Corporate)',
    tagline: 'Crisp Alabaster paper (#FAF8F5), Bricolage Grotesque display, Hot Pink (#FE299E), and pill CTAs.',
    usedBy: 'colonhyphenbracket.pink (feat/playful-principal)',
    mark: ': - ]',
    typography: { display: 'Bricolage Grotesque', serif: 'Newsreader', sans: 'Inter', mono: 'JetBrains Mono' },
    tokens: {
      light: {
        '--a-bg': '#FAF8F5',
        '--a-surface': '#F3EEE6',
        '--a-ink': '#111827',
        '--a-accent': '#FE299E',
        '--a-radius-cta': '9999px',
      },
      dark: {
        '--a-bg': '#0F141C',
        '--a-surface': '#18202C',
        '--a-ink': '#FAF8F5',
        '--a-accent': '#FF5CB8',
        '--a-radius-cta': '9999px',
      },
    },
  },
};`,
          explanation:
            "Defines first-class brand profiles so different properties across the ecosystem (Pipes, CHB Corporate, and open-source forks) switch typography, surface warmth, and CTA geometry cleanly without breaking 7:1 AAA contrast guarantees.",
        },
        {
          title: "Machine-Readable Agent Rules Endpoint (src/app/rules.json/route.ts)",
          language: "typescript",
          code: `import { NextResponse } from 'next/server';
import { getAllAccentRules } from '@/content/accent/registry';
import { DESIGN_TOKENS, ACCENT_PRIMARY, ACCENT_SKY, SEMANTIC_CONTRAST_PAIRS } from '@/styles/design-tokens';

export const dynamic = 'force-static';

export function GET() {
  return NextResponse.json(
    {
      system: 'Accént (Pipes Design System)',
      version: DESIGN_TOKENS.version,
      docs: 'https://design.pipes.pink',
      note: 'Each rule is a single instruction for a generating model. violationPattern, when present, is a JavaScript regex source; a match in generated code indicates a violation.',
      tokens: {
        primaryPink: ACCENT_PRIMARY,
        sovereignSkyBlue: ACCENT_SKY,
        verifiedContrastPairs: SEMANTIC_CONTRAST_PAIRS,
      },
      rules: getAllAccentRules(),
    },
    { headers: { 'Cache-Control': 'public, max-age=3600' } }
  );
}`,
          explanation:
            "Serves all 197 deterministic rules and regex violation patterns at https://design.pipes.pink/rules.json so local IDE agents, linters, and CI scripts can verify generated UI code automatically.",
        },
      ],
    },
  },

  unitedhealth: {
    slug: "unitedhealth",
    client: "UnitedHealth Group / Optum",
    title: "Flagship Native Patient Mobile Apps & Fusion Strategic Consultancy",
    subtitle: "Senior Product Experience Designer • Flagship apps for 35M+ patients & Cybersecurity Triage",
    role: "Senior Product Experience Designer (Fusion)",
    scaleBadge: "35M+ patients • Flagship iOS & Android",
    timeline: "2020 – 2021",
    heroImage: "/artwork/enterprise-health.png",
    galleryImages: [
      {
        src: "/artwork/enterprise-health.png",
        title: "Enterprise Systems Architecture: Mobile Design Systems & Security Triage",
        caption: "Confidentiality Notice: Proprietary patient telemetry, internal hospital portal URLs, and clinical screens are redacted under healthcare compliance and mutual confidentiality agreements. Visuals depict high-level systems topology.",
        tag: "Systems Topology",
      },
    ],
    executiveSummary:
      "Transformed fragmented patient mobile experiences and enterprise cybersecurity operations into unified, scalable systems. Embedded within Fusion (an elite internal McKinsey-style product & business consultancy), I served as lead designer for UnitedHealth Group's flagship patient mobile applications serving 35M+ patients and 400K+ employees. Personally produced 80%+ of the Android experience and 50%+ of the iOS experience, managed cross-pillar design system governance, and partnered with the enterprise cybersecurity team to architect incident triage workflows and protocol structures across major hospital group acquisitions.",
    challenge:
      "When the initial external mobile agency disbanded in month one, millions of patients faced a fragmented, buggy app experience. Healthcare data is extraordinarily complex: insurance deductibles, co-pays, real-time prescription pricing, HIPAA compliance, and varying state regulations made patient workflows overwhelming and error-prone.",
    solution:
      "Inherited and unified the mobile design system with a lean team of four. Embedded directly with executive stakeholders inside Fusion to align business leadership, medical compliance officers, and engineering leads. Restructured patient pathways into clear, anxiety-free mental models that surfaced coverage details and immediate medical care options in under two taps.",
    uiUxCraft:
      "Prioritized absolute clarity, WCAG accessibility, and compassionate microcopy. Designed patient-friendly biometric sign-in, intuitive insurance card digital wallets, and simplified prescription lookup tools designed to keep patients out of the call-center queue.",
    systemsArchitecture:
      "Standardized multi-tenant design tokens across iOS (SwiftUI) and Android (Jetpack Compose). Orchestrated multi-brand theming allowing newly acquired regional hospital networks and Optum clinics to skin the flagship patient engine seamlessly.",
    metrics: [
      { value: "35M+", label: "Patients", subtext: "Plus 400K+ employees" },
      { value: "Apple Health", label: "Advocacy", subtext: "Estimated hundreds of millions impact" },
      { value: "80% / 50%", label: "Screen Ownership", subtext: "80% Android, 50% iOS" },
      { value: "Fortune 10", label: "Enterprise Scale", subtext: "Optum & UHG" },
    ],
    outcomes: [
      "Transformed fragmented patient mobile experiences and enterprise cybersecurity operations into unified, scalable systems.",
      "Unified the cross-organizational mobile design system across UnitedHealth Group and Optum.",
      "Designed and shipped 80%+ of Android and 50%+ of iOS flagship screens.",
      "Championed UHG's adoption of Apple Health guidelines and integrations, impacting tens of millions of patients.",
      "Facilitated C-suite executive alignment across major regional hospital acquisitions and cybersecurity triage missions.",
    ],
    technologies: ["Native iOS (SwiftUI)", "Native Android (Jetpack Compose)", "Multi-Tenant Design Systems", "Executive Stakeholder Facilitation", "HIPAA Compliance"],
    ndaNotice: "Proprietary patient telemetry, internal hospital portal URLs, and sensitive corporate identifiers are redacted under healthcare compliance and mutual confidentiality agreements.",
  },

  walmart: {
    slug: "walmart",
    client: "Walmart (via PredictiveUX)",
    title: "Enterprise Learning Management System (LMS) & Graph Search Paradigm",
    subtitle: "Fractional / Consulting Lead Architect • Internal tools for 3M employees",
    role: "Fractional / Consulting Lead Architect",
    scaleBadge: "3M employees • Enterprise search & LMS",
    timeline: "Oct 2021 – Oct 2022",
    heroImage: "/images/walmart/walmart-search-results.png",
    galleryImages: [
      {
        src: "/images/walmart/walmart-search-results.png",
        title: "Graph-Powered Enterprise Search Paradigm",
        caption: "High-density search results interface integrating GraphQL & graph databases to discover curriculum, operational guidelines, and role certifications in real time.",
        tag: "Search UX",
      },
      {
        src: "/images/walmart/walmart-cdp-content.png",
        title: "Content Lifecycle & Version Management",
        caption: "State-driven courseware authoring and deletion safety controls designed to prevent accidental catalog regressions across millions of active learners.",
        tag: "Admin Tooling",
      },
      {
        src: "/images/walmart/walmart-admin-manual.png",
        title: "Content Distribution Platform (CDP) Manual Admin",
        caption: "Administrative manual entry and metadata taxonomy engine built for Walmart's global training platform serving 3M employees.",
        tag: "Global LMS",
      },
    ],
    executiveSummary:
      "Architected the Learning Management System (LMS) and enterprise knowledge platform from the ground up for the world's largest private workforce (3M employees). Spearheaded the migration from legacy infrastructure to GraphQL and graph databases, designing graph-driven search paradigms, automated content tagging, and administrative publishing engines adhering to Walmart's global design system.",
    challenge:
      "Walmart's global workforce of roughly 3 million employees across retail stores, distribution centers, and corporate offices relied on fractured, legacy training portals. Associates struggled to find role-critical compliance and safety certifications, while internal instructional designers lacked safe, modern publishing tooling.",
    solution:
      "Spearheaded a ground-up redesign of the Content Distribution Platform (CDP) powered by graph databases and GraphQL. Conceived an intuitive search paradigm that maps career paths, prerequisite certifications, and localized store procedures through rich semantic relationships rather than dead-end keyword lists.",
    uiUxCraft:
      "Engineered high-efficiency administrative authoring suites with built-in version safeguards and instant preview modes. For associates on shared retail floor terminals, designed clean, distraction-free learning modules that can be paused and resumed without progress loss.",
    systemsArchitecture:
      "Replaced brittle relational queries with a flexible GraphQL schema. Designed real-time metadata indexing and taxonomy services capable of handling millions of concurrent course completions across global time zones.",
    metrics: [
      { value: "3M", label: "Employees", subtext: "World's largest private employer" },
      { value: "GraphQL", label: "Graph Search", subtext: "Zero-latency curriculum discovery" },
      { value: "100%", label: "LMS Modernization", subtext: "Unified authoring and learner UX" },
      { value: "Fortune 1", label: "Enterprise Scale", subtext: "Mission-critical retail ops" },
    ],
    outcomes: [
      "Architected the graph-driven search experience connecting 3M employees with tailored curriculum.",
      "Built the Content Distribution Platform administrative manual authoring suite.",
      "Eliminated course publishing regressions with state-driven deletion safeguards.",
    ],
    technologies: ["GraphQL", "Graph Databases", "Enterprise Design Systems", "High-Volume LMS", "React", "TypeScript"],
    ndaNotice: "Enterprise search schemas, internal associate directory taxonomies, and internal portal screenshots are presented under nondisclosure terms. Certain proprietary identifiers have been generalized.",
  },

  foodler: {
    slug: "foodler",
    client: "Foodler.com (Acquired by GrubHub)",
    title: "Proprietary Algorithmic Fraud Engine & 10x Acquisition Exit",
    subtitle: "Director of Business Operations • Slashing Chargebacks by 83% ($6M to <$1M)",
    role: "Director of Business Operations",
    scaleBadge: "$500M+ Volume • 10x Acquisition Exit",
    timeline: "Feb 2010 – Oct 2014",
    heroImage: "/artwork/enterprise-fraud.png",
    galleryImages: [
      {
        src: "/artwork/enterprise-fraud.png",
        title: "Algorithmic Fraud Detection & Operation Telemetry",
        caption: "Proprietary telemetry and fraud score modeling deployed across $500M+ in processed transaction volume.",
        tag: "FinTech Security",
      },
    ],
    executiveSummary:
      "Managed two-thirds of company operations across a high-volume online marketplace processing $500M+ in transactions. Solo-engineered a proprietary algorithmic fraud detection system that slashed chargebacks by 83% ($6M to <$1M), cooperating directly with local police and FBI offices on criminal sting operations, contributing directly to Foodler's 10x revenue acquisition exit to GrubHub.",
    challenge:
      "Foodler was losing millions of dollars annually to sophisticated credit card fraud rings and organized chargeback schemes. Off-the-shelf fraud prevention tools were either too slow or triggered devastating false-positive rejections on legitimate diners.",
    solution:
      "Solo-engineered a real-time heuristics and anomaly detection engine that analyzed velocity patterns, geolocation anomalies, device fingerprints, and order clustering. Created automated escalation queues that allowed operations staff to catch fraudulent rings before orders were dispatched to restaurants.",
    uiUxCraft:
      "Designed high-velocity investigative dashboards for fraud analysts that highlighted anomalous risk vectors in seconds, enabling split-second order approval or cancellation.",
    systemsArchitecture:
      "Low-latency rules engine processing transactions in real time against historical order graphs and chargeback dispute databases.",
    metrics: [
      { value: "-83%", label: "Fraud Slashed", subtext: "$6M reduced to <$1M" },
      { value: "10x Exit", label: "Acquisition", subtext: "Acquired by GrubHub" },
      { value: "$500M+", label: "Processed Volume", subtext: "High-stakes marketplace" },
      { value: "FBI Stings", label: "Law Enforcement", subtext: "Direct criminal prosecution" },
    ],
    outcomes: [
      "Engineered proprietary algorithmic fraud engine reducing chargeback losses by over $5M annually.",
      "Directly contributed to Foodler's multi-million dollar 10x revenue acquisition exit to GrubHub.",
      "Collaborated with federal and state law enforcement on targeted cybercrime sting operations.",
    ],
    technologies: ["Real-Time Telemetry", "Algorithmic Fraud Detection", "Payment Processing", "Heuristic State Machines"],
  },

  ultralinq: {
    slug: "ultralinq",
    client: "UltraLinq Healthcare Solutions",
    title: "UltraLinq: Cloud Cardiovascular PACS & Medical Imaging Diagnostic Workflows",
    subtitle: "Lead Product Designer & Design Director • Zero-Latency Cloud DICOM Viewer & Structured Clinical Reporting",
    role: "Lead Product Designer & Design Director",
    scaleBadge: "Cloud DICOM PACS • Cardiovascular Imaging",
    timeline: "2015 – 2017",
    heroImage: "/artwork/enterprise-health.png",
    galleryImages: [
      {
        src: "/artwork/enterprise-health.png",
        title: "UltraLinq Diagnostic Viewer & Image Cine Review",
        caption: "Zero-latency cloud medical imaging viewer supporting high-frame-rate ultrasound cineloop playback and multi-planar diagnostic views.",
        tag: "Cloud DICOM",
      },
    ],
    executiveSummary:
      "UltraLinq Healthcare is a cloud-based PACS (Picture Archiving and Communication System) and cardiovascular imaging platform. Re-architected the clinical diagnostic viewer and ultrasound reporting workflow, transitioning cardiologists and sonographers from clunky legacy desktop installations to a blazing-fast, browser-based diagnostic environment.",
    challenge:
      "Cardiologists and sonographers rely on high-frame-rate echocardiograms and vascular ultrasound loops to make life-or-death diagnoses. Legacy on-prem PACS required expensive local workstations, suffered from agonizing image load times, and forced clinicians to juggle disconnected windows between DICOM playback and structured reporting.",
    solution:
      "Architected a unified cloud diagnostic workspace integrating smooth multi-frame DICOM cine playback, calibrated caliper measurements, and structured clinical findings (DICOM SR) into a singular, keyboard-driven interface. Sonographers can document measurements rapidly and route exams to attending cardiologists with zero latency.",
    uiUxCraft:
      "High-contrast dark-mode diagnostic canvas minimizing clinician eye strain during hours of study review. Keyboard-first shortcuts for frame stepping, zoom, window/level adjustments, and rapid annotation.",
    systemsArchitecture:
      "Cloud-native streaming architecture converting heavy DICOM files into progressive web chunks for instantaneous playback over hospital and remote networks, strictly compliant with HIPAA and FDA diagnostic display guidelines.",
    metrics: [
      { value: "0 Lag", label: "Cine Playback", subtext: "Zero-latency cloud DICOM" },
      { value: "-45%", label: "Turnaround Time", subtext: "Faster exam interpretation" },
      { value: "100%", label: "Cloud Native", subtext: "Zero desktop software installs" },
      { value: "HIPAA", label: "Compliance", subtext: "Secure multi-institution routing" },
    ],
    outcomes: [
      "Designed unified cloud DICOM viewer integrating image playback with structured diagnostic reporting.",
      "Eliminated context switching between imaging software and EHR documentation.",
      "Accelerated cardiovascular exam turnaround times by 45% for multi-site healthcare practices.",
    ],
    technologies: ["Cloud PACS", "DICOM / WebGL", "Cardiovascular Ultrasound", "HIPAA Security", "Clinical UX"],
  },

  highdraw: {
    slug: "highdraw",
    client: "High Draw Golf Apparel Co.",
    title: "High Draw: Honest Mid-Market Golf Apparel Brand & E-Commerce Architecture",
    subtitle: "Direct-to-Consumer • Custom DTC Engine, Ball Flight Tracer Identity & Garment Craftsmanship",
    role: "Founder, Lead Designer & Full-Stack Builder",
    scaleBadge: "DTC E-Commerce • Technical Apparel",
    timeline: "2025 – 2026",
    heroImage: "/images/highdraw/01_highdraw_hero_pebble_beach.png",
    galleryImages: [
      {
        src: "/images/highdraw/01_highdraw_hero_pebble_beach.png",
        title: "Coastal Links Hero: Designed for Sport. Crafted for Life.",
        caption: "Bespoke high-conversion storefront communicating tour-grade drape, honest mid-market pricing ($48 vs $125 boutique retail), and technical fabric specs.",
        tag: "Storefront UX",
      },
      {
        src: "/images/highdraw/02_highdraw_collection_polos_pullover.png",
        title: "Product Collection: Men's, Women's & Layering",
        caption: "Clean, high-craft product catalog showcasing Men's Midnight Navy, Women's Carolina Blue, and the Tour Tech Quarter-Zip Pullover.",
        tag: "Collection Catalog",
      },
      {
        src: "/images/highdraw/03_highdraw_pdp_midnight_navy_folded.png",
        title: "Product Detail Page: Technical Garment Engineering",
        caption: "High-velocity PDP highlighting 180 GSM micro-pique stretch blend, 100+ washes tested guarantee, and fused stay-flat collar stand engineering.",
        tag: "Conversion PDP",
      },
      {
        src: "/images/highdraw/04_highdraw_pdp_black_desk_accessories.png",
        title: "Craftsmanship Plate: Embroidered Ball Flight Tracer",
        caption: "Detailed accessory plate featuring wooden tees, brass ball markers, and the iconic embroidered High Draw ball flight tracer mark.",
        tag: "Craftsmanship",
      },
      {
        src: "/images/highdraw/highdraw-logo-gold.png",
        title: "High Draw Iconic Ball Flight Tracer Mark",
        caption: "The signature High Draw insignia: a soaring right-to-left ball flight tracer rendered in championship gold.",
        tag: "Brand Mark",
      },
    ],
    executiveSummary:
      "High Draw Golf Apparel Co. was founded to solve a glaring problem in golf lifestyle retail: boutique legacy brands charging $125+ for basic polyester polos with collars that curl into bacon after three washes. I created the complete brand identity, engineered the custom direct-to-consumer e-commerce storefront, and spec'd the physical garment manufacturing (180 GSM matte micro-pique with a fused stay-flat collar stand) sold direct to golfers for $48.",
    challenge:
      "Modern DTC golf brands rely on generic Shopify themes with clunky sizing apps, slow product image carousels, and inflated retail markups that alienate everyday players. The brand needed an unmistakable identity, transparent technical garment credibility, and sub-100ms conversion flows.",
    solution:
      "Designed the signature 'Ball Flight Tracer' brand mark and built a bespoke, high-velocity e-commerce experience. Engineered visual bundle drawers ('Frequently Bought Together'), interactive fabric zoom, dynamic inventory urgency badges, and transparent pricing breakdowns ($48 vs $125 boutique retail).",
    uiUxCraft:
      "Evoked the quiet luxury of iconic coastal links (Pebble Beach, Cypress Point) through warm Albers cream paper surfaces, deep forest green and midnight navy palettes, and crisp editorial typography. Zero template bloat.",
    systemsArchitecture:
      "Custom headless e-commerce frontend with instant optimistic cart updates, zero-latency image prefetching, and seamless Stripe/Shopify checkout integration.",
    metrics: [
      { value: "$48 vs $125", label: "Honest Pricing", subtext: "Direct-to-golfer value" },
      { value: "180 GSM", label: "Technical Blend", subtext: "Matte micro-pique stretch" },
      { value: "100+ Washes", label: "Collar Guarantee", subtext: "Fused stay-flat collar stand" },
      { value: "DTC", label: "E-Commerce", subtext: "Zero agency overhead" },
    ],
    outcomes: [
      "Designed complete brand identity and signature Ball Flight Tracer trademark.",
      "Engineered high-converting direct-to-consumer storefront with frictionless bundle mechanics.",
      "Formulated physical garment specs: 180 GSM micro-pique with fused stay-flat collar stand.",
    ],
    technologies: ["Headless E-Commerce", "Tailwind CSS", "Next.js", "Stripe API", "Brand Identity", "Garment Engineering"],
  },

  clubhouse1099: {
    slug: "clubhouse1099",
    client: "Clubhouse 1099",
    title: "Clubhouse 1099: Private Venture Scout Network & Automated Voice Lead Pipeline",
    subtitle: "clubhouse1099.com • Geographically Capped Scout Network, Whisper Audio CRM & Mileage Tax Trail",
    role: "Architect, Lead Designer & Full-Stack Builder",
    scaleBadge: "535 Capped Seats Nationwide • Automated Whisper CRM",
    timeline: "2025 – 2026",
    heroImage: "/images/clubhouse1099/01_clubhouse1099_landing_hero.png",
    galleryImages: [
      {
        src: "/images/clubhouse1099/01_clubhouse1099_landing_hero.png",
        title: "Landing Page: Help Community Enterprises Endure",
        caption: "Private, geographically capped network of 535 Regional Venture Scouts sourcing enterprise technology transformations for Main Street businesses.",
        tag: "Private Network",
      },
      {
        src: "/images/clubhouse1099/02_clubhouse1099_manifesto_honest_diagnostics.png",
        title: "The Clubhouse Guide: Honest Diagnostics for Main Street",
        caption: "The master mechanic diagnostic philosophy: inspecting business bottlenecks without selling unneeded software bloat.",
        tag: "Manifesto",
      },
      {
        src: "/images/clubhouse1099/03_clubhouse1099_scout_dashboard_earnings.png",
        title: "Scout Dashboard: Transparent Commission Tiers & Mileage Trail",
        caption: "Automated scout earnings tracking (10% commission on closed engagements from $500 tasks to $75k+ retainers) and 2026 Mileage Tax Trail.",
        tag: "Scout Dashboard",
      },
      {
        src: "/images/clubhouse1099/04_clubhouse1099_voice_whisper_recording.png",
        title: "In-Browser Voice Note Recording & Route Selector",
        caption: "Frictionless scout workflow: one-tap in-browser audio capture with automated Whisper transcription and route selection for tax deductions.",
        tag: "Voice Pipeline",
      },
      {
        src: "/images/clubhouse1099/05_clubhouse1099_lead_enrichment_crm.png",
        title: "Lead Enrichment CRM: Whisper Transcript & Motivation Slider",
        caption: "Automated lead intake parsing voice notes, relationship context, contact metadata, and a 1–10 Motivation Rating slider ('Casual Chat' to 'Ready to Buy').",
        tag: "Lead CRM",
      },
    ],
    executiveSummary:
      "Clubhouse 1099 (clubhouse1099.com) is a private, geographically-capped network of 535 Regional Venture Scouts—trusted community leaders, investors, and active networkers who connect underserved Main Street businesses with elite engineering transformations. I designed and shipped the complete platform, featuring in-browser Whisper audio recording, automated voice-to-lead CRM enrichment, and an IRS mileage tax trail logger.",
    challenge:
      "Local community enterprises (family dealerships, regional medical practices, local manufacturers) are desperate for modern technology but terrified of predatory agencies selling bloated six-figure retainers. Meanwhile, local connectors who know these business owners have no dignified, automated mechanism to make introductions or track compensation.",
    solution:
      "Created Clubhouse 1099 around a 'Master Mechanic' diagnostic ethos: scouts introduce businesses, an elite architect performs an honest diagnostic, and the scout receives a transparent 10% commission on every closed engagement. Built an ultra-fast voice note interface where scouts simply record a 30-second voice memo while driving away from a meeting; Whisper automatically extracts contact details, relationship context, and client motivation.",
    uiUxCraft:
      "Editorial, dignified country club aesthetic: British racing fairway green (#0F3E2E), cream surfaces, elegant serif headlines ('Help Community Enterprises Endure'), and intuitive scout input sliders.",
    systemsArchitecture:
      "Full-stack web application with in-browser MediaRecorder audio streaming, OpenAI Whisper transcription worker, structured GPT entity extraction, and automated IRS mileage tracking.",
    metrics: [
      { value: "535 Seats", label: "Nationwide Footprint", subtext: "Geographically capped network" },
      { value: "10%", label: "Scout Commission", subtext: "Transparent contract payouts" },
      { value: "Whisper AI", label: "Audio Transcription", subtext: "Instant voice-to-lead CRM" },
      { value: "IRS Trail", label: "Tax Logger", subtext: "Automated mileage deduction" },
    ],
    outcomes: [
      "Designed and launched private scout network capped at 535 regional seats nationwide.",
      "Engineered in-browser voice note intake pipeline using Whisper for instant lead enrichment.",
      "Built automated 10% commission tracking and IRS mileage deduction ledger.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Whisper Audio API", "MediaRecorder", "Stripe Connect"],
    liveUrl: "https://clubhouse1099.com",
    liveUrlLabel: "Visit Clubhouse 1099 (clubhouse1099.com)",
    codebaseBreakdown: {
      headline: "Voice-First Venture Scout Architecture & Automated Whisper Pipeline",
      philosophy:
        "Regional venture scouts and community connectors are on the move—driving between dealerships, clinics, and manufacturing facilities. They don't fill out multi-page web forms. I built Clubhouse 1099 around zero-friction audio capture: scouts tap a single button, speak for 30 seconds, and the system extracts structured leads, calculates IRS mileage deductions, and logs 10% commission splits automatically.",
      stackArchitecture: [
        {
          role: "In-Browser Voice Streaming",
          tech: "MediaRecorder API + Web Audio API",
          rationale:
            "Captures crisp uncompressed audio directly in mobile and desktop browsers with real-time decibel level meters and automatic silence trimming.",
        },
        {
          role: "Automated Transcription & Entity Extraction",
          tech: "Whisper API + Structured JSON Extraction",
          rationale:
            "Converts unstructured spoken observations into verified business names, decision-maker contacts, motivation levels (1–10), and technical pain points.",
        },
        {
          role: "Compliance & Tax Audit Ledger",
          tech: "IRS Standard Mileage Engine + Geocoding",
          rationale:
            "Automatically logs route waypoints and calculates 2026 IRS mileage deductions for scouts, packaging deductible travel receipts with their commission statements.",
        },
        {
          role: "Capped National Seat Allocation",
          tech: "PostgreSQL Geographic Constraint Registry",
          rationale:
            "Enforces strict regional scarcity—exactly 535 Congressional-district mapped seats nationwide with real-time seat availability maps.",
        },
      ],
      codeSnippets: [
        {
          title: "In-Browser Audio Capture & Streaming (client/src/hooks/use-audio-recorder.ts)",
          language: "typescript",
          code: `// High-Fidelity Mobile In-Browser Audio Streamer
export function useVoiceScoutRecorder() {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm;codecs=opus' });
    
    recorder.ondataavailable = (e) => audioChunks.current.push(e.data);
    recorder.start(250); // 250ms time-slice for responsive buffer
    setMediaRecorder(recorder);
  };

  return { startRecording, stopRecording };
}`,
          explanation:
            "Handles resilient browser-side audio capture across mobile Safari and Chrome without third-party app installations.",
        },
        {
          title: "Automated Scout Lead Extraction (server/routes/scout-voice.ts)",
          language: "typescript",
          code: `// Whisper + Structured Schema Extraction Pipeline
export async function processScoutVoiceMemo(audioBuffer: Buffer, scoutId: string) {
  // Step 1: Whisper Transcription
  const transcription = await openai.audio.transcriptions.create({
    file: audioBuffer,
    model: "whisper-1",
  });

  // Step 2: Structured Entity Extraction
  const leadIntelligence = await extractLeadEntities(transcription.text);
  
  // Step 3: Insert into Lead Ledger with 10% Scout Commission Attribution
  return await db.insert(scoutLeads).values({
    scoutId,
    businessName: leadIntelligence.businessName,
    motivationScore: leadIntelligence.motivationRating, // 1-10
    transcript: transcription.text,
    commissionTier: "10_PERCENT_STANDARD",
  });
}`,
          explanation:
            "Transforms spoken stream-of-consciousness field notes into relational database records and attributed commission claims.",
        },
      ],
    },
  },
  chicuinaco: {
    slug: "chicuinaco",
    client: "Hacienda & Restaurante Chicuinaco",
    title: "Chicuinaco: Sovereign Eco-Estate, 100-Guest Venue & Multi-Language Brochure System",
    subtitle:
      "Principal Designer & Systems Architect • Ground-Up Identity, Accént Editorial System, 4-Language i18n & Client Sovereignty",
    role: "Principal Product Architect & Brand Systems Designer",
    scaleBadge: "Eco-Estate & Venue · 4 Languages · Zero Hostage",
    timeline: "Nov 2026",
    heroImage: "/images/chicuinaco/site_redesign_hero.png",
    galleryImages: [
      {
        src: "/images/chicuinaco/site_redesign_hero.png",
        title: "Full-Bleed Swiss Editorial Hero & 'Bitcoin Accepted' Signal",
        caption:
          "Live production interface featuring Cormorant Garamond display typography, 4-language switcher (EN/ES/FR/DE), and official Satoshi-spec on-premise Bitcoin accepted badge on warm sandstone paper (#EAE3D5).",
        tag: "Editorial Hero",
      },
      {
        src: "/images/chicuinaco/site_redesign_pillars.png",
        title: "Four Pillars of the Estate: Architectural Hairline Grid",
        caption:
          "Hairline-divided sandstone index structuring the 4 core offerings: Restaurant, 100-Guest Event Venue, Waterfall Trails, and Bálsamo Oil with Roman numerals and zero card bloat.",
        tag: "Hairline Monograph",
      },
      {
        src: "/images/chicuinaco/site_redesign_venue.png",
        title: "100-Guest Arched Patio & Event Capacity Specifications",
        caption:
          "High-contrast venue architecture section displaying direct WhatsApp banquet booking, transparent capacity meters, and mountain valley photography.",
        tag: "Venue Architecture",
      },
      {
        src: "/images/chicuinaco/site_redesign_menu.png",
        title: "La Carta: Typographic Menu Ledger & Dish Photography",
        caption:
          "Print-inspired culinary index with tabular numerals, dotted leaders, zero-layout-shift dish photography, and live WhatsApp kitchen inquiries.",
        tag: "Culinary Ledger",
      },
      {
        src: "/images/chicuinaco/site_redesign_visit.png",
        title: "Practical Visitor Logistics & FAQ Accordion",
        caption:
          "Interactive visitor preparedness guide: 4x4 road conditions, waterfall hiking essentials, Bitcoin settlement details, and bilingual Google Maps routing.",
        tag: "Visitor Logistics",
      },
    ],
    beforeAfter: [
      {
        label: "Brand Hero & Value Proposition",
        beforeSrc: "/images/chicuinaco/before/hero-before.png",
        beforeTitle: "Original Legacy Site (Before)",
        beforeCaption: "Standard saturated purple overlay, generic centered text, and heavy unoptimized assets that crashed 3G mobile browsers.",
        afterSrc: "/images/chicuinaco/site_redesign_hero.png",
        afterTitle: "Swiss Editorial System & Bitcoin Standard (After)",
        afterCaption: "Refined Cormorant Garamond display typography, 4-language i18n switcher, and sub-1.2s LCP progressive loading on live web.",
      },
      {
        label: "Estate Story & Architecture",
        beforeSrc: "/images/chicuinaco/before/story-before.png",
        beforeTitle: "Original History Section (Before)",
        beforeCaption: "Generic black background with dense narrative blocks and uncalibrated photography.",
        afterSrc: "/images/chicuinaco/site_redesign_pillars.png",
        afterTitle: "Four Pillars Hairline Monograph (After)",
        afterCaption: "Sandstone paper surface (#EAE3D5), hairline-divided 4-pillar index with Roman and Arabic numerals, and zero-card clutter.",
      },
      {
        label: "Culinary Presentation (La Carta)",
        beforeSrc: "/images/chicuinaco/before/menu-before.png",
        beforeTitle: "Original Food Grid (Before)",
        beforeCaption: "Heavy card grid with hardcoded prices and cumulative layout shift.",
        afterSrc: "/images/chicuinaco/site_redesign_menu.png",
        afterTitle: "La Carta Typographic Ledger (After)",
        afterCaption: "Publication-grade culinary index with dotted leaders, tabular alignments, and dynamic WhatsApp inquiries.",
      },
      {
        label: "Visitor Logistics & Venue Booking",
        beforeSrc: "/images/chicuinaco/before/visit-before.png",
        beforeTitle: "Original Contact & Location (Before)",
        beforeCaption: "Basic text listings with disconnected phone numbers and static maps.",
        afterSrc: "/images/chicuinaco/site_redesign_visit.png",
        afterTitle: "Direct WhatsApp Event Protocol (After)",
        afterCaption: "Language-aware pre-filled WhatsApp deep links for dining, 100-guest patio banquets, and overnight suite stays.",
      },
    ],
    executiveSummary:
      "Zero-Hostage Software: Empowering Central American Small Business Sovereignty. What began a year ago as a 30-minute emergency Replit build was re-engineered into an international-grade Swiss monograph and decoupled static architecture. Instead of paying monthly hosting retainers and relying on developers for minor tweaks, proprietor Joe Coffey now owns his codebase on GitHub, deploys autonomously to Vercel, and maintains his site independently using BANG! IDE paired with local on-device AI (Qwen/Llama). Bridging rural Central American realities—3G cellular networks, sub-$100 Android devices, and volatile pricing—with publication-grade editorial craft, 4-language i18n, zero-card hairline grids, and on-premise Bitcoin acceptance signaling.",
    challenge:
      "Small businesses and eco-tourism estates in Central America are routinely trapped by software extractivism: predatory developers who charge monthly hosting retainers, clunky WordPress themes loaded with 8MB of scripts, or fragile SaaS builders that hold code hostage. Originally, I built Chicuinaco a year ago in under 30 minutes on Replit to solve an immediate emergency. But that created developer dependency: every text change or menu update required reaching out to me. Furthermore, regional hospitality faced acute real-world constraints: (1) Severe Hardware & Bandwidth Realities: Central American travelers and local staff rely on low-tier 3G cellular connections and entry-level Android devices (such as 360px ZTE phones), where standard viewport clamp calculations cause browser crashes; (2) Multi-Offering Synthesis: Articulating five distinct operations—a wood-fired dining room, a 100-guest arched terrace for weddings, rugged waterfall canyon hikes, ancestral Bálsamo Negro harvesting, and an 8-guest overnight suite; (3) The Browser Auto-Translate Trap: Safari and Google Chrome auto-translate engines routinely mistranslated the proper estate name \"Hacienda Chicuinaco\" into \"Department of Treasury Chicuinaco\" (Ministerio de Hacienda); and (4) The Cultural Pricing Dilemma: As proprietor Joe Coffey explained, \"Over here if you publish a price, they think it is that price forever.\" Static e-commerce was culturally unviable given seasonal market dynamics.",
    solution:
      "Engineered an ultra-lean, zero-card digital monograph and fully decoupled, sovereign stack rooted in Accént Sandstone (#EAE3D5 sandstone paper, #1B5E3A Hacienda emerald, #14120F charcoal). Resolved every constraint through deliberate architectural trade-offs: (1) Code Sovereignty & BANG! IDE: Transferred 100% repository ownership to the proprietors on GitHub with automated Vercel edge CI/CD, and trained Joe Coffey to make menu and content edits independently using BANG! IDE with on-device local AI (Qwen/Llama)—permanently eliminating $75–$200/hr WordPress developer fees; (2) Zero-Hardcoded-Pricing WhatsApp Protocol: Replaced brittle booking databases with dynamic, language-aware WhatsApp prefilled reservation links—generating instantaneous, localized booking payloads directly into management messaging with zero SaaS commissions; (3) Defensive Auto-Translate System: Injected translate=\"no\" and class=\"notranslate\" attributes across proper nouns, botanical names (Myroxylon balsamum), and brand anchors; (4) Resilient 360px Fluid Typographic Scale: Overhauled fragile headline clamps down to clamp(2.75rem, 13vw, 12.5rem) paired with dark frosted backdrop shields (bg-[#14120F]/90 backdrop-blur-md); and (5) Sub-100ms Edge Hydration: Built on a lightweight Vite + React static SPA engine with WebP video poster streams, delivering a sub-1.2s Largest Contentful Paint over 3G cellular towers while displaying an authentic on-premise 'Bitcoin Accepted Here' badge beneath the 4 pillars.",
    uiUxCraft:
      "Crafted an elevated, publication-grade sensory experience inspired by European architectural monographs and Latin stone inscriptions. High-contrast Cormorant Garamond light/regular serifs are paired with tracked-out small-caps labels and the Lavishly Yours handwritten script signature. The Four Pillars section abandons generic nested cards for 1px hairline-divided sandstone matrices with Roman and Arabic numerals. \"La Carta\" menu functions as a typographic ledger with dotted leaders, tabular price alignments, and zero-layout-shift dish photography previews. Fluid Framer Motion scroll choreography and accessible dark/light sandstone themes deliver quiet luxury on every screen.",
    systemsArchitecture:
      "Zero-bloat Vite + React + TypeScript static architecture deployed on global edge CDN. Features a zero-dependency 4-locale internationalization dictionary (EN, ES, FR, DE) with instantaneous locale switching, multi-entity JSON-LD structured data (Restaurant, LodgingBusiness, TouristAttraction, EventVenue) for Google Knowledge Graph and AI search agent indexing, high-efficiency WebP responsive asset pipeline, and sovereign client code autonomy via BANG! IDE.",
    metrics: [
      { value: "100%", label: "Lighthouse Score", subtext: "Performance, Best Practices & SEO" },
      { value: "< 1.2s", label: "Mobile 3G LCP", subtext: "Optimized WebP & zero server round-trips" },
      { value: "100% Offline AI", label: "BANG! + Qwen/Llama", subtext: "Autonomous updates without dev fees" },
      { value: "4", label: "Native Locales", subtext: "English, Español, Français, Deutsch" },
    ],
    outcomes: [
      "Zero-Hostage Software: Liberated the small business from developer dependency, giving the owners 100% ownership of their GitHub repo and Vercel pipeline.",
      "Trained proprietor Joe Coffey to manage menu updates and content revisions independently using BANG! IDE with local AI (Qwen/Llama), eliminating $75–$200/hr agency retainers.",
      "Elevated a family-owned Salvadoran mountain estate into an international hospitality and eco-tourism showcase across 4 languages (EN, ES, FR, DE).",
      "Replaced generic hospitality card clutter with a Swiss architectural hairline grid system, typographic dotted-leader \"La Carta\" menu, and 2×2 venue specification matrices.",
      "Eliminated booking friction and third-party SaaS fees via dynamic, language-aware WhatsApp reservation deep-links for dining, 100-guest patio banquets, and 8-guest suite stays.",
      "Engineered resilient 360px mobile reflow and defensive translation safeguards, preventing browser auto-translation corruption and ensuring pristine rendering on budget devices.",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "4-Locale i18n Engine",
      "JSON-LD Schema Graph",
      "BANG! IDE (Local AI)",
    ],
    liveUrl: "https://www.chicuinaco.com",
    liveUrlLabel: "Visit Hacienda Chicuinaco (chicuinaco.com)",
    repoUrl: "https://github.com/rorshockbtc/chicuinaco",
    codebaseBreakdown: {
      headline: "Zero-Card Editorial Hospitality Architecture & 4-Language Edge Performance",
      philosophy:
        "Luxury hospitality on the web shouldn't require 8MB of JavaScript or a sluggish booking iframe. For Hacienda Chicuinaco in the Cordillera del Bálsamo, every byte had to earn its place over rural cellular connections while delivering the visual gravitas of a European architectural monograph.",
      stackArchitecture: [
        {
          role: "Zero-Card Hairline Grid System",
          tech: "Tailwind CSS + 1px Architectural Hairlines (#D6CFC2)",
          rationale:
            "Eliminates nested card borders in favor of open sandstone fields, tabular Roman and Arabic numerals, and 2×2 specification matrices.",
        },
        {
          role: "Deterministic 4-Language i18n Engine",
          tech: "Zero-Dependency TypeScript Locale Dictionary (EN / ES / FR / DE)",
          rationale:
            "Switches all editorial copy, menu items, trail advisories, and pre-filled WhatsApp reservation templates instantaneously with zero network waterfalls.",
        },
        {
          role: "Interactive La Carta Menu & Media Pipeline",
          tech: "Framer Motion Crossfade + Responsive WebP Plates",
          rationale:
            "Pairs a traditional dotted-leader print menu with instant dish photography previews and lazy-loaded timber-press video streams.",
        },
        {
          role: "Multi-Entity SEO & On-Premise Bitcoin Badge",
          tech: "JSON-LD Graph (Restaurant + Lodging + EventVenue) & On-Premise Bitcoin Badge",
          rationale:
            "Exposes rich structured data for international search and AI travel agents while displaying an authentic on-premise 'Bitcoin Accepted Here' badge beneath the Four Pillars.",
        },
      ],
      codeSnippets: [
        {
          title: "Language-Aware WhatsApp Prefill Engine (lib/whatsapp.ts)",
          language: "typescript",
          code: `// Dynamic WhatsApp deep-link generator with multi-language booking intent
export type BookingIntent = 'dining' | 'event-banquet' | 'overnight-suite' | 'waterfall-hike';

interface WhatsAppConfig {
  phoneNumber: string; // E.164 format: +503XXXXXXXX
  intent: BookingIntent;
  lang: 'en' | 'es' | 'fr' | 'de';
  partySize?: number;
}

const INTENT_MESSAGES: Record<string, Record<BookingIntent, string>> = {
  es: {
    dining: "¡Hola Hacienda Chicuinaco! Me gustaría reservar una mesa en el restaurante.",
    "event-banquet": "¡Hola! Quisiera cotizar un evento privado en su terraza para 100 personas.",
    "overnight-suite": "¡Hola! Quisiera consultar disponibilidad para la suite familiar (hasta 8 personas).",
    "waterfall-hike": "¡Hola! Quisiera coordinar una caminata guiada hacia las cascadas.",
  },
  en: {
    dining: "Hello Hacienda Chicuinaco! I would like to reserve a table at the restaurant.",
    "event-banquet": "Hello! I would like to inquire about hosting a private event on your 100-guest patio terrace.",
    "overnight-suite": "Hello! I would like to check availability for the 8-guest overnight family suite.",
    "waterfall-hike": "Hello! I would like to arrange a guided waterfall hike through the canyon.",
  },
  fr: {
    dining: "Bonjour Hacienda Chicuinaco ! Je souhaite réserver une table au restaurant.",
    "event-banquet": "Bonjour ! J'aimerais organiser un événement privé sur votre terrasse.",
    "overnight-suite": "Bonjour ! Je souhaite vérifier la disponibilité de la suite familiale.",
    "waterfall-hike": "Bonjour ! J'aimerais planifier une randonnée guidée vers les cascades.",
  },
  de: {
    dining: "Hallo Hacienda Chicuinaco! Ich möchte einen Tisch im Restaurant reservieren.",
    "event-banquet": "Hallo! Ich interessiere mich für eine private Veranstaltung auf Ihrer Terrasse.",
    "overnight-suite": "Hallo! Ich möchte die Verfügbarkeit für die Familiensuite anfragen.",
    "waterfall-hike": "Hallo! Ich möchte eine geführte Wanderung zu den Wasserfällen buchen.",
  },
};

export function buildWhatsAppReservationUrl({ phoneNumber, intent, lang, partySize }: WhatsAppConfig): string {
  const baseMessage = INTENT_MESSAGES[lang]?.[intent] ?? INTENT_MESSAGES.en[intent];
  const partyAddon = partySize ? " (Invitados / Guests: " + partySize + ")" : "";
  const encoded = encodeURIComponent(baseMessage + partyAddon);
  return "https://wa.me/" + phoneNumber.replace(/\D/g, "") + "?text=" + encoded;
}`,
          explanation:
            "Proprietor Joe Coffey highlighted that published fixed prices create rigid customer expectations amidst agricultural seasonal changes. Instead of a brittle e-commerce cart, this lightweight generator crafts localized, pre-formatted WhatsApp booking intents—empowering direct hospitality coordination with zero platform cut.",
        },
        {
          title: "Defensive Anti-Translate Layer & 360px Fluid Clamp (components/brand-header.tsx)",
          language: "tsx",
          code: `// Defensive protection against browser auto-translating 'Hacienda' to 'Tax Authorities'
export function BrandHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="relative w-full overflow-hidden border-b border-[#D6CFC2]/60 bg-[#EAE3D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Anti-Translate Badge: Prevents Chrome/Safari from translating proper noun */}
        <span 
          translate="no" 
          className="notranslate inline-block text-xs uppercase tracking-[0.25em] text-[#1B5E3A] font-medium"
        >
          Hacienda & Restaurante Chicuinaco
        </span>

        {/* Fluid Typography: Safe on 360px ZTE Blade while scaling to 4K displays */}
        <h1 
          translate="no"
          className="notranslate mt-3 font-serif font-light text-[#14120F] leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 13vw, 12.5rem)" }}
        >
          Chicuinaco
        </h1>

        {/* Subtitle with frosted backdrop shield to ensure readability over photo layers */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#14120F]/80 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </header>
  );
}`,
          explanation:
            "Automated browser translation engines repeatedly mistranslated 'Hacienda Chicuinaco' into 'Tax Authorities Chicuinaco' (Ministerio de Hacienda). Enforcing translate=\"no\" and class=\"notranslate\" guarantees brand fidelity, while re-engineering the clamp scale down to 2.75rem avoids header overlap on budget 360px Android devices.",
        },
        {
          title: "Official Satoshi Nakamoto Brand-Compliant Bitcoin SVG (components/bitcoin-badge.tsx)",
          language: "tsx",
          code: `// Official Satoshi Nakamoto Brand Specifications:
// White ₿ glyph, tilted exactly 14 degrees clockwise, centered on #F7931A roundel
export function BitcoinAcceptedBadge({ className = "" }: { className?: string }) {
  return (
    <div className={"inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#14120F] text-[#EAE3D5] text-xs font-mono " + className}>
      <svg
        viewBox="0 0 64 64"
        className="w-5 h-5 flex-shrink-0"
        aria-hidden="true"
      >
        {/* Official Bitcoin Orange Roundel */}
        <circle cx="32" cy="32" r="32" fill="#F7931A" />
        
        {/* White Satoshi ₿ glyph tilted 14 degrees clockwise */}
        <g transform="rotate(14 32 32)">
          <path
            fill="#FFFFFF"
            d="M46.1 27.4c.6-4.3-2.6-6.6-7.1-8.1l1.5-5.8-3.5-.9-1.4 5.7c-.9-.2-1.9-.4-2.8-.7l1.4-5.7-3.5-.9-1.5 5.8c-.8-.2-1.5-.4-2.2-.6l-4.9-1.2-1 3.8s2.6.6 2.5.6c1.4.4 1.7 1.3 1.6 2.1l-1.6 6.5c.1 0 .2.1.3.1l-.3-.1-2.3 9.1c-.2.5-.6 1.2-1.6 1 0 0-2.5-.6-2.5-.6l-1.8 4.1 4.6 1.2c.9.2 1.7.5 2.6.7l-1.5 5.9 3.5.9 1.5-5.8c1 .3 1.9.5 2.8.7l-1.4 5.7 3.5.9 1.5-5.9c6 .1 10.5-.3 12.4-4.8 1.5-3.6 0-5.7-2.6-7 1.9-.4 3.3-1.7 3.7-4.3zm-6.6 9.3c-1.1 4.4-8.5 2-10.9 1.4l2-7.8c2.4.6 10 1.8 8.9 6.4zm1.1-9.4c-1 4-7.2 2-9.2 1.5l1.8-7.1c2 .5 8.5 1.5 7.4 5.6z"
          />
        </g>
      </svg>
      <span className="tracking-wide uppercase text-[11px] font-sans font-medium">
        Bitcoin Accepted Here
      </span>
    </div>
  );
}`,
          explanation:
            "Replaced misplaced navbar icons with the official Bitcoin brand standard: pure white glyph tilted 14° clockwise on #F7931A orange disc. Placed beneath the Four Pillars matrix to prevent mobile navbar crowding while giving prominent signal to international travelers.",
        },
      ],
    },
  },
  "chb-corporate": {
    slug: "chb-corporate",
    client: "Colon Hyphen Bracket, LLC",
    title: "Colon Hyphen Bracket: From Audience-Switching Clipart to a Principal-Led Architecture & R&D Studio",
    subtitle:
      "colonhyphenbracket.pink • Ground-Up Studio Repositioning, Playful-Principal Theme (Accént 3.0), 7-Product Ecosystem & Code-First 5-Day Sprints",
    role: "Founder & Principal Systems Architect",
    scaleBadge: "Playful-Principal Rebuild · 7 Live Products · Zero Handoffs",
    timeline: "Nov 2026",
    heroImage: "/images/chb-corporate/after/01_chb_home_hero_after.png",
    galleryImages: [
      {
        src: "/images/chb-corporate/after/01_chb_home_hero_after.png",
        title: "Playful-Principal Hero: Turning Scary Software Into a Smile : - ]",
        caption:
          "The rebuilt colonhyphenbracket.pink homepage on Alabaster paper (#FAF8F5), pairing Bricolage Grotesque display typography and the 3-phase ScaryHeadline strike animation with Guy Billout–inspired architectural staircase art.",
        tag: "Redesigned Hero",
      },
      {
        src: "/images/chb-corporate/after/06_chb_products_7nav_after.png",
        title: "Software Named After Punctuation: The 7-Product Ecosystem Navigator",
        caption:
          "Sticky horizontal chapter bar uniting all 7 live products—||| Pipes, ! BANG!, # Hash, ;- ] Semi, > Greater, é Accént, and ❀ Marigold—removing the need for audience-switching dropdowns on the homepage.",
        tag: "7-Product Suite",
      },
      {
        src: "/images/chb-corporate/after/03_chb_studio_sprint_after.png",
        title: "Studio Positioning: One Principal Architect. No Handoffs.",
        caption:
          "Direct, unambiguous positioning eliminating the agency telephone game between strategy decks, Figma files, and engineering tickets.",
        tag: "Studio Practice",
      },
      {
        src: "/images/chb-corporate/after/07_chb_studio_sprint_method_after.png",
        title: "Code-First Methodology: Listen → Map → Build → Refine → Smile",
        caption:
          "Inverted 5-day $7,500 fixed-scope sprint schedule where working code and live data ship on Wednesday ('Build') before UI polish and ergonomic refinement happen on Thursday ('Refine').",
        tag: "5-Day Sprint",
      },
      {
        src: "/images/chb-corporate/after/02_chb_home_ecosystem_after.png",
        title: "Scroll-Tracked Principles & Punctuation Philosophy",
        caption:
          "Interactive scroll-tracked manifesto pillar pairing each punctuation mark (#, ;-], |||, é) with a sticky side card explaining why one principal beats four handoffs.",
        tag: "Scroll Choreography",
      },
      {
        src: "/images/chb-corporate/after/05_chb_manifesto_after.png",
        title: "The Manifesto: Replacing Coastal Gatekeeping With Real Craft",
        caption:
          "Dedicated /manifesto page articulating why a principal designer-architect from Southern Appalachia builds sovereign software for the founders, creators, families, and Main Street businesses Big Tech overlooked.",
        tag: "Studio Manifesto",
      },
    ],
    beforeAfter: [
      {
        label: "Brand Hero & Visual Language",
        beforeSrc: "/images/chb-corporate/before/03_legacy_switcher_open_or_switched.png",
        beforeTitle: "Original Site: Persona Dropdown & Soft Clipart (Before)",
        beforeCaption:
          "Early iteration used approachable clipart illustrations (gears, lightbulbs, targets) and an eye-icon dropdown switching the entire site between Startup Founders, Content Creators, and Memory Capturers.",
        afterSrc: "/images/chb-corporate/after/01_chb_home_hero_after.png",
        afterTitle: "Playful-Principal Hero & Architectural Art (After)",
        afterCaption:
          "Confident Bricolage Grotesque typography, animated ScaryHeadline strike-throughs ('SOC 2 audits → a checklist'), and surrealist Guy Billout–inspired architectural illustration on Alabaster paper (#FAF8F5).",
      },
      {
        label: "Family & Audience Positioning",
        beforeSrc: "/images/chb-corporate/before/05_legacy_memory_capturers_hero.png",
        beforeTitle: "Original 'Memory Capturers' Family Mode (Before)",
        beforeCaption:
          "Originally used warm lakeside family clipart to feel non-intimidating to everyday families and smaller clients while explaining the concept of private AI memory before Pipes existed as a live product.",
        afterSrc: "/images/chb-corporate/after/05_chb_manifesto_after.png",
        afterTitle: "Unified Principal Studio Manifesto (After)",
        afterCaption:
          "Speaks directly and respectfully to founders, creators, families, and Main Street in one unified voice—replacing coastal gatekeeping with real architectural craft.",
      },
      {
        label: "Product Ecosystem Architecture",
        beforeSrc: "/images/chb-corporate/before/04_legacy_products.png",
        beforeTitle: "Original 3-Step Conceptual Funnel (Before)",
        beforeCaption:
          "Presented Semi, Hash, and Pipes ('coming soon') as a 3-step conceptual journey card before the full cross-platform ecosystem was shipped.",
        afterSrc: "/images/chb-corporate/after/06_chb_products_7nav_after.png",
        afterTitle: "7 Live Products Named After Punctuation (After)",
        afterCaption:
          "Now that Pipes, BANG!, Hash, Semi, Greater, Accént, and Marigold are live production software across Web, Desktop, and Mobile, a sticky 7-chapter bar lets visitors inspect every shipped tool.",
      },
      {
        label: "Studio Methodology & Engagement",
        beforeSrc: "/images/chb-corporate/before/07_legacy_roadmap.png",
        beforeTitle: "Original Conceptual Roadmap (Before)",
        beforeCaption:
          "Gamified winding-road illustration explaining future phases ('Business perspective switching') rather than how clients can hire the studio today.",
        afterSrc: "/images/chb-corporate/after/07_chb_studio_sprint_method_after.png",
        afterTitle: "Five Days From Scary to Shipped (After)",
        afterCaption:
          "Transparent $7,500 fixed-scope 5-day sprints (Listen → Map → Build → Refine → Smile) and $15k/mo fractional principal partnerships with 100% Day-One IP ownership.",
      },
    ],
    executiveSummary:
      "Re-architecting our own corporate flagship (colonhyphenbracket.pink) to reflect a fundamental milestone: transitioning from an early-stage practice explaining concepts to a battle-tested product and systems studio with seven live platforms in production. Originally, our site relied on a 3-way 'Perspective Switcher' (toggling the entire website between Startup Founders, Content Creators, and Memory Capturers) and soft clipart illustrations designed to feel non-intimidating to families and small clients as we worked our way up. Today—with Pipes, BANG!, Accént 3.0, and Marigold live in production, backed by 15+ years of principal engineering and design systems maturity—we retired the persona-switching gimmick and clipart. We rebuilt colonhyphenbracket.pink from the ground up on the 'Playful-Principal' preset of Accént 3.0: uniting all seven punctuation-named products, codifying our code-first 5-day sprint methodology (Listen → Map → Build → Refine → Smile), and proving how one principal architect eliminates the four-person agency handoff tax.",
    challenge:
      "When we launched the first version of colonhyphenbracket.pink, Pipes was still in development ('coming soon') and we were actively trying to demystify AI for regular families, independent creatives, and small local businesses. To avoid looking like another intimidating, jargon-heavy Silicon Valley agency, we deliberately used friendly clipart illustrations (lakeside family fishing scenes, colorful gears, winding board-game roadmaps) and built a runtime 'Perspective Engine' that rewrote every headline and swapped every illustration between 'Startup Founders', 'Content Creators', and 'Memory Capturers'. While well-intentioned, that approach created three problems as our studio matured: (1) Conceptual Overhead: Since Pipes (pipes.pink) is now a working cross-platform product that natively handles personal, creative, and business knowledge namespaces, the corporate site no longer needed to simulate 'perspective switching' in the navbar; (2) Visual Underselling: Soft vector clipart aimed at lowering intimidation accidentally masked 15 years of senior systems architecture across Custodia Bank, UnitedHealth Group, and Walmart; and (3) Hidden Studio Mechanics: Prospective clients couldn't clearly see our code-first build methodology, our 7 shipped products, or how BANG! IDE hands them 100% sovereign control of their codebase.",
    solution:
      "Executed a complete ground-up architectural and editorial rebuild on the 'playful-principal' brand profile of Accént 3.0: (1) Retired the 3-Way Perspective Switcher for a Unified Voice: Replaced fragmented audience modes with a single, confident narrative ('We turn [SOC 2 audits / HIPAA / vendor lock-in / legacy code] into [a checklist / trust / freedom / calm] : - ]') that honors founders, creators, families, and Main Street alike without talking down to any of them; (2) Upgraded From Clipart to Surrealist Architectural Art: Commissioned and art-directed Guy Billout–inspired editorial plates (monolithic brutalist staircases met by a warm hot-pink umbrella ramp) with responsive WebP mobile crops and GPU-accelerated scroll parallax; (3) Built the 7-Product Punctuation Showcase (/products): Organized our shipped software suite around the punctuation marks they behave like—||| Pipes, ! BANG!, # Hash, ;- ] Semi, > Greater, é Accént, and ❀ Marigold; and (4) Codified the Inverted Code-First Sprint (/studio): Inverted the traditional agency waterfall into 'Listen (Mon) → Map (Tue) → Build (Wed) → Refine (Thu) → Smile (Fri)', proving that we build working code on Wednesday and apply design refinement directly to live software on Thursday.",
    uiUxCraft:
      "Governed by the Playful-Principal preset in Accént 3.0 (src/styles/themes.ts): warm Alabaster paper (#FAF8F5 / #F7F6F1), deep Slate Ink (#111827, 16.7:1 WCAG AAA contrast), Bricolage Grotesque display headlines paired with Newsreader editorial serifs, and Sovereign Hot Pink (#FE299E) reserved strictly for focal strikes, winks, and primary pill CTAs. Engineered custom Tier 2 Editorial Motion primitives in Framer Motion: ScaryHeadline (a 3-phase state machine that displays an intimidating industry term, strikes it through with a hot-pink bar, and spring-swaps in the human outcome), RiseLines (IntersectionObserver masked line-by-line display reveals), and a persistent semi-translucent paper nav that adapts cleanly over dark sections.",
    systemsArchitecture:
      "Vite + React 18 + TypeScript + Tailwind CSS frontend paired with a Node/Express build pipeline and static social metadata prerendering (prerender-social.cjs). Generates dedicated 1200×630 OpenGraph cards and pre-rendered HTML entry points for /studio, /products, /manifesto, and /contact so every link shared on X/Twitter or Slack unfurls route-specific headlines. Wired zero-backend-lock-in contact routing via Web3Forms direct client dispatch and deployed to Vercel Edge.",
    metrics: [
      { value: "7 Live", label: "Punctuation Products", subtext: "Pipes, BANG!, Hash, Semi, Greater, Accént, Marigold" },
      { value: "1 Principal", label: "Zero Handoffs", subtext: "Strategy, design & production code in one head" },
      { value: "5 Days", label: "Scary to Shipped", subtext: "Listen → Map → Build → Refine → Smile ($7.5k)" },
      { value: "16.7:1", label: "WCAG AAA Contrast", subtext: "Playful-Principal preset on Alabaster #FAF8F5" },
    ],
    outcomes: [
      "Transitioned colonhyphenbracket.pink from an early-stage persona-switching concept site into a principal-led product & architecture studio showcase.",
      "Retired the 3-persona dropdown ('Memory Capturers / Startup Founders / Content Creators') and soft clipart in favor of one unified voice backed by 7 live products.",
      "Showcased all 7 shipped punctuation-named platforms (||| Pipes, ! BANG!, # Hash, ;- ] Semi, > Greater, é Accént, and ❀ Marigold) in an interactive sticky chapter navigator.",
      "Inverted the studio sprint schedule to Listen → Map → Build → Refine → Smile, reflecting our code-first methodology where working software precedes visual polish.",
      "Engineered route-specific static social prerendering (prerender-social.cjs) and custom 1200×630 OG cards across all 4 studio routes.",
    ],
    technologies: [
      "React 18 & TypeScript",
      "Accént 3.0 (Playful-Principal)",
      "Framer Motion (Tier 2 Choreography)",
      "Tailwind CSS",
      "Static OG Prerender Pipeline",
      "Responsive WebP Art Direction",
      "Vercel Edge",
    ],
    liveUrl: "https://colonhyphenbracket.pink",
    liveUrlLabel: "Visit Colon Hyphen Bracket (colonhyphenbracket.pink)",
    repoUrl: "https://github.com/rorshockbtc/chb-corporate-site",
    codebaseBreakdown: {
      headline: "From 3-Way Persona Switching to Unified Tier-2 Editorial Choreography",
      philosophy:
        "In our first iteration, we tried to prove empathy by dynamically rewriting the DOM for three different audiences ('Startup Founders', 'Content Creators', 'Memory Capturers'). As our engineering and product suite matured, we realized true empathy isn't a persona dropdown—it's taking the genuinely scary parts of technology (SOC 2 audits, HIPAA, vendor lock-in, legacy code) and turning them into calm, sovereign software that clients own 100% on day one.",
      stackArchitecture: [
        {
          role: "Tier 2 Editorial Motion Engine",
          tech: "Framer Motion + ScaryHeadline + RiseLines",
          rationale:
            "Implements the 3-phase ScaryHeadline state machine (scary → strike → friendly) and masked line-by-line RiseLines on cubic-bezier(0.22, 1, 0.36, 1) with full prefers-reduced-motion support.",
        },
        {
          role: "Accént Playful-Principal Token Contract",
          tech: "Alabaster #FAF8F5 + Bricolage Grotesque + Hot Pink #FE299E",
          rationale:
            "Consumes the playful-principal brand profile from Accént 3.0, guaranteeing 16.7:1 AAA body contrast, 44×44px touch targets, and zero nested cards.",
        },
        {
          role: "Responsive Art Direction & Parallax",
          tech: "<picture> WebP + Mobile Crops + useScroll",
          rationale:
            "Serves dedicated 639px mobile crops and 2560px desktop WebP plates for the staircase and Marigold botanical artwork with zero layout shift.",
        },
        {
          role: "Static Route Social Prerenderer",
          tech: "prerender-social.cjs + generate-og.cjs",
          rationale:
            "Injects route-specific OpenGraph, Twitter Card, and canonical tags into static HTML shells at build time so social crawlers never see a generic SPA title.",
        },
      ],
      codeSnippets: [
        {
          title: "3-Phase 'Scary to Friendly' Headline State Machine (client/src/components/brand/scary-words.tsx)",
          language: "tsx",
          code: `export const HOME_SCARY_PAIRS: ScaryPair[] = [
  { scary: "SOC 2 audits", friendly: "a checklist" },
  { scary: "HIPAA", friendly: "trust" },
  { scary: "vendor lock-in", friendly: "freedom" },
  { scary: "legacy code", friendly: "calm" },
  { scary: "regulators", friendly: "easy audits" },
  { scary: "cryptography", friendly: "privacy" },
  { scary: "dark patterns", friendly: "honest UX" },
];

type Phase = "scary" | "strike" | "friendly";

export function ScaryHeadline({ accent = "#FE299E", pairs = HOME_SCARY_PAIRS }: ScaryHeadlineProps) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("scary");

  useEffect(() => {
    const ms: Record<Phase, number> = reduce
      ? { scary: 2400, strike: 10, friendly: 2600 }
      : { scary: 1700, strike: 600, friendly: 2400 };
    const t = window.setTimeout(() => {
      if (phase === "scary") setPhase("strike");
      else if (phase === "strike") setPhase("friendly");
      else {
        setPhase("scary");
        setI((n) => (n + 1) % pairs.length);
      }
    }, ms[phase]);
    return () => window.clearTimeout(t);
  }, [phase, reduce, pairs.length]);
  // Renders the intimidating term, draws an animated #FE299E strike bar, and springs in the calm outcome : - ]
}`,
          explanation:
            "Replaces the old 3-persona dropdown with a single visceral demonstration of what Colon Hyphen Bracket does: striking through intimidating technical barriers and replacing them with calm, human outcomes.",
        },
        {
          title: "Code-First 5-Day Sprint Architecture (client/src/pages/studio.tsx)",
          language: "tsx",
          code: `const WEEK = [
  { d: "Mon", t: "Listen", color: "#0A9BE0", b: "You explain the challenge. We define the problem and ask the hard questions." },
  { d: "Tue", t: "Map",    color: "#3FA535", b: "Architecture, data models, and constraints pinned down. Building begins." },
  { d: "Wed", t: "Build",  color: "#0A9BE0", b: "Working code and live data. A reviewable milestone so you know we're on the right track." },
  { d: "Thu", t: "Refine", color: "#3FA535", b: "Design and craft applied to working software: ergonomics, UI polish, and edge cases." },
  { d: "Fri", t: "Smile",  color: "#FE299E", b: "Live walkthrough, decision memo, and the repository handed over outright. : - ]" },
];`,
          explanation:
            "Rather than spending weeks pushing static pixels in Figma before writing a line of code, our studio builds working software with real data by Wednesday and refines the design ergonomics directly in code on Thursday.",
        },
      ],
    },
  },
};

