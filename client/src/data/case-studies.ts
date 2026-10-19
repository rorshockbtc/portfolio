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
  "marigold",
  "cassandra",
  "superstar",
  "clubhouse1099",
  "foodler",
  "ultralinq",
  "highdraw",
  "colors-type-grids",
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
    scaleBadge: "500,000+ records • Open source (AGPL-3.0)",
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
        title: "Mississippi Fair Elections: 500k+ Active Record Mission Kanban",
        caption: "Local-compute workspace dashboard managing triage for 500,000+ active voter records with automated single-day registration surge cohort detection.",
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
      "Civic and voter datasets are massive (hundreds of thousands of rows) and routinely crash county clerk spreadsheets. Meanwhile, uploading citizen voter rolls to commercial cloud AI violates strict federal privacy laws and triggers catastrophic PII liabilities.",
    solution:
      "Built bolt.pipes.pink to allow citizens and clerks to inspect voter rolls directly in the browser using DuckDB-WASM and OPFS. Pioneered 'Zero-PII Hydration': names and addresses are stripped and replaced with cryptographic entity hashes before reaching the LLM; the browser decrypts and re-hydrates real citizen names locally in client memory. Zero bytes of PII ever leave the user's desk.",
    uiUxCraft:
      "Designed an editorial civic workstation featuring a Calming Albers Sand palette (#F5EFE6), Mission Kanban for registration spike triage, interactive Fellegi-Sunter linkage simulators, and 'Mari'—an AI civic concierge who translates non-technical inquiries into local SQL queries and dynamic data stories.",
    systemsArchitecture:
      "Runs 100% in client-side memory using DuckDB-WASM, SQLite, Web Workers, and Origin Private File System (OPFS). In-memory Fellegi-Sunter and Levenshtein probabilistic record linkage executes 1,000-pair benchmarks in 10.2ms with 100% precision and zero false accusations.",
    metrics: [
      { value: "500,000+", label: "Active Records", subtext: "Audited in-browser via DuckDB-WASM" },
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
        "When handling 500,000+ active voter records, pushing citizen data to a cloud database or external LLM API creates catastrophic PII liability and violates federal election security statutes. I engineered Marigold to run entirely in client-side memory using DuckDB-WASM, Web Workers, and OPFS. The AI only ever sees cryptographically blinded hashes—real voter identities are re-hydrated locally in browser RAM.",
      stackArchitecture: [
        {
          role: "In-Browser Analytical SQL Engine",
          tech: "DuckDB-WASM + OPFS (Origin Private File System)",
          rationale:
            "Executes multi-column aggregations and cohort filtering across 500k+ rows in under 40ms directly inside the user's browser, eliminating all cloud compute and database hosting bills.",
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
    client: "Colon Hyphen Bracket",
    title: "Albers & Vignelli in CSS — The Interaction of Color & Typographic Breathing",
    subtitle: "A Rebel's Manifesto on Grid-Based Design & Typography by Colon Hyphen Bracket",
    role: "Author, Designer & Systems Architect",
    scaleBadge: "3846 × 4800 Masterwork Poster",
    timeline: "2025 – 2026",
    heroImage: "/images/cassandra/colors-type-grids.jpg",
    galleryImages: [
      {
        src: "/images/cassandra/colors-type-grids.jpg",
        title: "Albers & Vignelli in CSS: The 4-Column Poster",
        caption: "High-resolution 3846x4800 masterwork poster exploring color interaction, typographic scale, and CSS grid discipline.",
        tag: "Design Manifesto",
      },
    ],
    executiveSummary:
      "A comprehensive design manifesto and technical blueprint examining Josef Albers' 'The Interaction of Color' and Massimo Vignelli's 8pt grid system translated directly into modern CSS architecture. Rejects AI-generated aesthetic homogeny and corporate template bloat.",
    challenge:
      "Modern web software is drowning in generic, AI-generated design soup: low-contrast grey-on-grey text, uncalibrated rounded boxes, missing typographic hierarchies, and arbitrary spacing. Digital interfaces have lost their visual soul and rhythm.",
    solution:
      "Synthesized the enduring principles of Bauhaus modernism, Josef Albers' relativity of color, and Vignelli's mathematical grid into a concrete, executable CSS system. Proves that mathematical rigor in spacing and bold, purposeful color contrast unlocks interfaces that breathe naturally.",
    uiUxCraft:
      "4-column progressive breakdown: Column 1 outlines the core manifesto and typographic rules; Column 2 establishes the base-8 grid rhythm and initial card anatomy; Column 3 demonstrates complex two-tiered component compositions; Column 4 explores chromatic relativity and optical vibration under varying backgrounds.",
    systemsArchitecture:
      "Built with strict CSS custom property tokenization. Establishes proportional rem-based scaling, optical margin alignment, and high-DPI rasterization standards for web and physical print.",
    metrics: [
      { value: "3846x4800", label: "Masterwork Canvas", subtext: "Print-ready high DPI" },
      { value: "8pt", label: "Mathematical Grid", subtext: "Vignelli spatial discipline" },
      { value: "100%", label: "CSS Native", subtext: "Zero external framework bloat" },
      { value: "4 Columns", label: "Manifesto System", subtext: "From theory to production" },
    ],
    outcomes: [
      "Codified the Colon Hyphen Bracket design philosophy governing all client and sovereign software.",
      "Released interactive digital viewer enabling pan-and-zoom inspection across all 4 columns.",
      "Provided an uncompromising antidote to generic SaaS card design and AI template homogeny.",
    ],
    technologies: ["Massimo Vignelli 8pt Grid", "Josef Albers Color Theory", "Vanilla CSS", "Modern Typography", "Print & Vector Layout"],
    liveUrl: "https://cassandra.colonhyphenbracket.pink/ColorsTypeGrids",
    liveUrlLabel: "Open Interactive Poster Viewer",
  },

  unitedhealth: {
    slug: "unitedhealth",
    client: "UnitedHealth Group / Optum",
    title: "Flagship Native Patient Mobile Apps & Fusion Strategic Consultancy",
    subtitle: "Senior Product Experience Designer • Flagship apps for 35M+ patients",
    role: "Senior Product Experience Designer",
    scaleBadge: "35M+ patients • Flagship iOS & Android",
    timeline: "2020 – 2021",
    heroImage: "/artwork/enterprise-health.png",
    galleryImages: [
      {
        src: "/artwork/enterprise-health.png",
        title: "Flagship Mobile Experience: Unified Patient Portal",
        caption: "Native iOS and Android patient ecosystem serving 35M+ patients, integrating telemedicine, claims, pharmacy, and real-time coverage.",
        tag: "Mobile Architecture",
      },
    ],
    executiveSummary:
      "Led product design for UnitedHealth Group's flagship patient mobile applications, serving 35M+ patients and 400K+ employees. Personally produced 80%+ of the Android experience and 50%+ of the iOS experience. Embedded within Fusion (an elite internal McKinsey-style product & business consultancy), facilitating C-suite stakeholders, leading hospital acquisition rollouts, and unifying cross-org design systems across UnitedHealth and Optum.",
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
      "Unified the cross-organizational mobile design system across UnitedHealth Group and Optum.",
      "Designed and shipped 80%+ of Android and 50%+ of iOS flagship screens.",
      "Championed UHG's adoption of Apple Health guidelines and integrations, impacting tens of millions of patients.",
      "Facilitated C-suite executive alignment across major regional hospital acquisitions.",
    ],
    technologies: ["Native iOS (SwiftUI)", "Native Android", "Multi-Tenant Design Systems", "Executive Stakeholder Facilitation", "HIPAA Compliance"],
    ndaNotice: "Proprietary patient telemetry, internal hospital portal URLs, and sensitive corporate identifiers are redacted under healthcare compliance and mutual confidentiality agreements.",
  },

  walmart: {
    slug: "walmart",
    client: "Walmart (via PredictiveUX)",
    title: "Enterprise Learning Management System (LMS) & Graph Search Paradigm",
    subtitle: "Senior UX/UI Architect at PredictiveUX • Internal tools for 3M employees",
    role: "Senior UX/UI Architect (via PredictiveUX)",
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
    timeline: "2010 – 2015",
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
    subtitle: "Design Director • Zero-Latency Cloud DICOM Viewer & Structured Clinical Reporting",
    role: "Design Director & Clinical Workflow Architect",
    scaleBadge: "Cloud DICOM PACS • Cardiovascular Imaging",
    timeline: "2016 – 2018",
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
};



