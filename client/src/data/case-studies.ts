export interface CaseStudyImage {
  src: string;
  title: string;
  caption: string;
  tag?: string;
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
  metrics: { value: string; label: string; subtext?: string }[];
  outcomes: string[];
  technologies: string[];
  liveUrl?: string;
  liveUrlLabel?: string;
  repoUrl?: string;
  ndaNotice?: string;
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  pipes: {
    slug: "pipes",
    client: "Colon Hyphen Bracket",
    title: "Pipes Protocol: Sovereign Multi-Platform Knowledge Ecosystem",
    subtitle: "Flagship Showcase • Web, Native macOS Desktop, and Native iOS Mobile Apps",
    role: "Architect, Lead Designer & Systems Builder",
    scaleBadge: "Web • macOS Desktop • iOS Mobile",
    timeline: "2024 – 2026",
    heroImage: "/images/pipes/desktop-mac-bang-ide.png",
    galleryImages: [
      {
        src: "/images/pipes/desktop-mac-bang-ide.png",
        title: "Pipes Desktop for macOS: Native Bang IDE",
        caption: "Native macOS desktop application engineered for high-velocity local knowledge curation, offline parsing, and cryptographic signing.",
        tag: "macOS Native",
      },
      {
        src: "/images/pipes/desktop-mac-knowledge.png",
        title: "Pipes Desktop: Sovereign Knowledge Ledger",
        caption: "Local-first knowledge graph viewer and vector space inspector running zero-latency SQLite and Turso caches.",
        tag: "Desktop Architecture",
      },
      {
        src: "/images/pipes/pipes-hero.png",
        title: "Pipes Web Protocol: Flagship Interface",
        caption: "Web platform transforming human expertise into reusable infrastructure with $0 marginal AI inference costs.",
        tag: "Web Protocol",
      },
      {
        src: "/images/pipes/pipes-marketplace.png",
        title: "Self-Sovereign Knowledge Marketplace",
        caption: "Cryptographic namespace registry with deeded 70/30 creator revenue splits anchored on NOSTR identity.",
        tag: "Marketplace UX",
      },
      {
        src: "/images/pipes/pipes-economics.png",
        title: "Deterministic Knowledge Economics",
        caption: "Halting model collapse by pairing local-first reference libraries with deterministic keyword synthesis.",
        tag: "Token Economics",
      },
    ],
    executiveSummary:
      "Pipes is my flagship software showcase: a fully-featured, multi-platform sovereign knowledge ecosystem deployed across Web (pipes.pink), native macOS Desktop (Tauri/Rust), and native iOS mobile (Swift/SwiftUI). It transforms verified human expertise into reusable, monetizable infrastructure while solving foundation LLM model collapse through deterministic $0 marginal inference.",
    challenge:
      "Modern AI tools suffer from amnesia and model collapse: as foundation LLMs drown in synthetic data, human-curated context is the rarest asset. But standard cloud SaaS traps user knowledge in corporate silos, burns expensive tokens on redundant context prompts, and offers clunky, browser-only experiences that fail offline.",
    solution:
      "Architected a unified, three-tier ecosystem: a native macOS desktop cockpit for deep local authoring and offline indexing, an iOS mobile client (Pipes Pocket) for on-the-go capture, and a decentralized web protocol for public distribution. Engineered the Reference Library Pattern (Template + Keyword Match + Curated Knowledge = Deterministic Output at $0.00 marginal LLM cost).",
    uiUxCraft:
      "Built a fluid, multi-tenant interface powered by runtime CSS variable injection. The same underlying knowledge graph effortlessly morphs across 6 distinct audience personas (Cyberpunk, Enterprise, Academic, Vignelli) without page reload. The native macOS desktop app adheres to Apple Human Interface Guidelines with fluid glassmorphism and sub-10ms keyboard navigation.",
    systemsArchitecture:
      "Engineered cross-platform synchronization between local SQLite databases, Turso distributed replicas, and NOSTR decentralized relays. Implemented client-side Web Crypto and OpenTimestamps (OTS) proofs to give creators undeniable cryptographic copyright proof.",
    metrics: [
      { value: "3 Platforms", label: "Multi-Platform", subtext: "Web, macOS Desktop, iOS" },
      { value: "$0.00", label: "Marginal AI Cost", subtext: "Deterministic Reference Library" },
      { value: "6 Live Themes", label: "Runtime CSS Engine", subtext: "Instant persona mutation" },
      { value: "70%", label: "Creator Equity", subtext: "Deeded cryptographic split" },
    ],
    outcomes: [
      "Designed and shipped native macOS desktop app, iOS mobile app, and decentralized web protocol.",
      "Engineered the Reference Library pattern delivering 25-page synthesized outputs with zero external token burn.",
      "Built multi-tenant runtime CSS injection engine powering instantaneous aesthetic adaptation.",
      "Implemented decentralized NOSTR PKI identity and cryptographic equity distribution.",
    ],
    technologies: ["macOS Native (Tauri/Rust)", "iOS (Swift/SwiftUI)", "Next.js", "TypeScript", "SQLite / Turso", "NOSTR / Web Crypto", "Tailwind CSS v4"],
    liveUrl: "https://pipes.pink",
    liveUrlLabel: "Explore Live Web Protocol",
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
  },

  marigold: {
    slug: "marigold",
    client: "Civic Security / FEMA HSGP",
    title: "Marigold Insights: Zero-Cloud Civic Data & Election Audit Engine",
    subtitle: "bolt.pipes.pink • In-Browser DuckDB-WASM, Fellegi-Sunter Linkage & Zero-PII Hydration",
    role: "Architect, Lead Designer & Systems Builder",
    scaleBadge: "2,000,000 Active Records • FEMA HSGP Sec 3%",
    timeline: "2026",
    heroImage: "/images/marigold/02_marigold_workspace_dashboard_kanban.png",
    galleryImages: [
      {
        src: "/images/marigold/01_marigold_landing_hero.png",
        title: "Marigold Insights: Non-Partisan Civic Data Exploration",
        caption: "Public sandbox landing page built under FY26 FEMA HSGP mandates, ensuring zero cloud PII exposure across all civic data exploration.",
        tag: "Public Portal",
      },
      {
        src: "/images/marigold/02_marigold_workspace_dashboard_kanban.png",
        title: "Mississippi Fair Elections: 2M Active Record Mission Kanban",
        caption: "Local-compute workspace dashboard managing triage for 2,000,000 active voter records with automated single-day registration surge cohort detection.",
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
      "Marigold (bolt.pipes.pink) is a zero-cloud analytical execution engine built for county clerks, election observers, and civic researchers under FY26 FEMA HSGP election security mandates. It solves Mississippi's massive, unopenable voter rolls with 100% in-browser DuckDB-WASM and Zero-PII cryptographic entity hydration.",
    challenge:
      "Civic and voter datasets are massive (millions of rows) and routinely crash county clerk spreadsheets. Meanwhile, uploading citizen voter rolls to commercial cloud AI violates strict federal privacy laws and triggers catastrophic PII liabilities.",
    solution:
      "Built bolt.pipes.pink to allow citizens and clerks to inspect voter rolls directly in the browser using DuckDB-WASM and OPFS. Pioneered 'Zero-PII Hydration': names and addresses are stripped and replaced with cryptographic entity hashes before reaching the LLM; the browser decrypts and re-hydrates real citizen names locally in client memory. Zero bytes of PII ever leave the user's desk.",
    uiUxCraft:
      "Designed an editorial civic workstation featuring a Calming Albers Sand palette (#F5EFE6), Mission Kanban for registration spike triage, interactive Fellegi-Sunter linkage simulators, and 'Mari'—an AI civic concierge who translates non-technical inquiries into local SQL queries and dynamic data stories.",
    systemsArchitecture:
      "Runs 100% in client-side memory using DuckDB-WASM, SQLite, Web Workers, and Origin Private File System (OPFS). In-memory Fellegi-Sunter and Levenshtein probabilistic record linkage executes 1,000-pair benchmarks in 10.2ms with 100% precision and zero false accusations.",
    metrics: [
      { value: "2,000,000", label: "Active Records", subtext: "Audited in Mississippi roll" },
      { value: "100%", label: "Linkage Precision", subtext: "Fellegi-Sunter benchmark" },
      { value: "0 Bytes", label: "Cloud Exposure", subtext: "100% local client memory" },
      { value: "FEMA 3%", label: "National Priority", subtext: "HSGP Sec 3% compliant" },
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
  },

  custodia: {
    slug: "custodia",
    client: "Custodia Bank",
    title: "Zero-to-One Federal Reserve SPDI Banking System & Brand Architecture",
    subtitle: "Sole Founding Product Designer • 4-Day Rebrand Sprint & 30-Day Core Bank Launch",
    role: "Sole Founding Product Designer",
    scaleBadge: "Chartered Full-Reserve SPDI Bank",
    timeline: "2021 – 2023",
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
      {
        src: "/images/personal/kyle-victoria-maldives-end-the-fed.jpg",
        title: "Kyle Cyree in the Maldives: 'End the Fed'",
        caption: "Wearing the iconic Ron Paul 'End the Fed' shirt—capturing the sovereign, Austrian economics ethos and full-reserve banking heritage of Custodia Bank.",
        tag: "Founder & Culture",
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
      { value: "2+ Years", label: "System Longevity", subtext: "Zero subsequent design hires needed" },
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
    subtitle: "Senior Product Experience Designer & Fusion Strategist • Serving 70M+ Americans",
    role: "Senior Product Designer & Fusion Strategist",
    scaleBadge: "70M+ Patients • Flagship iOS & Android",
    timeline: "2019 – 2021",
    heroImage: "/artwork/enterprise-health.png",
    galleryImages: [
      {
        src: "/artwork/enterprise-health.png",
        title: "Flagship Mobile Experience: Unified Patient Portal",
        caption: "Native iOS and Android patient ecosystem serving 70 million Americans, integrating telemedicine, claims, pharmacy, and real-time coverage.",
        tag: "Mobile Architecture",
      },
    ],
    executiveSummary:
      "Led product design for UnitedHealth Group's flagship patient mobile application used by over 70 million Americans. Personally produced 80%+ of the Android experience and 50%+ of the iOS experience. Embedded within Fusion (an elite internal McKinsey-style product & business consultancy), facilitating C-suite stakeholders, leading hospital acquisition rollouts, and unifying cross-org design systems across UnitedHealth and Optum.",
    challenge:
      "When the initial external mobile agency disbanded in month one, millions of patients faced a fragmented, buggy app experience. Healthcare data is extraordinarily complex: insurance deductibles, co-pays, real-time prescription pricing, HIPAA compliance, and varying state regulations made patient workflows overwhelming and error-prone.",
    solution:
      "Inherited and unified the mobile design system with a lean team of four. Embedded directly with executive stakeholders inside Fusion to align business leadership, medical compliance officers, and engineering leads. Restructured patient pathways into clear, anxiety-free mental models that surfaced coverage details and immediate medical care options in under two taps.",
    uiUxCraft:
      "Prioritized absolute clarity, WCAG AAA accessibility, and compassionate microcopy. Designed patient-friendly biometric sign-in, intuitive insurance card digital wallets, and simplified prescription lookup tools that reduced call center volume by millions of hours.",
    systemsArchitecture:
      "Standardized multi-tenant design tokens across iOS (SwiftUI) and Android (Jetpack Compose). Orchestrated multi-brand theming allowing newly acquired regional hospital networks and Optum clinics to skin the flagship patient engine seamlessly.",
    metrics: [
      { value: "70M+", label: "Active Patients", subtext: "Nationwide daily scale" },
      { value: "80% / 50%", label: "Screen Ownership", subtext: "80% Android, 50% iOS" },
      { value: "Team of 4", label: "Design System Lead", subtext: "Rescued enterprise mobile launch" },
      { value: "Fusion", label: "C-Suite Advisory", subtext: "Internal executive consultancy" },
    ],
    outcomes: [
      "Unified the cross-organizational mobile design system across UnitedHealth Group and Optum.",
      "Designed and shipped 80%+ of Android and 50%+ of iOS flagship screens.",
      "Facilitated C-suite executive alignment across major regional hospital acquisitions.",
      "Significantly elevated app store ratings from sub-2 stars to high-4 star tier.",
    ],
    technologies: ["Native iOS (SwiftUI)", "Native Android", "Multi-Tenant Design Systems", "Executive Stakeholder Facilitation", "HIPAA Compliance"],
  },

  walmart: {
    slug: "walmart",
    client: "Walmart Global Tech",
    title: "Enterprise Learning Management System (LMS) & Graph Search Paradigm",
    subtitle: "Senior UX/UI Architect • Empowering 3.2M Global Associates",
    role: "Senior UX/UI Architect",
    scaleBadge: "3.2M Global Workforce • LMS & Search",
    timeline: "2021 – 2022",
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
        caption: "Administrative manual entry and metadata taxonomy engine built for Walmart's global training platform serving 3.2M associates.",
        tag: "Global LMS",
      },
    ],
    executiveSummary:
      "Architected the Learning Management System (LMS) and enterprise knowledge platform from the ground up for the world's largest private workforce (3.2M+ employees). Spearheaded the migration from legacy infrastructure to GraphQL and graph databases, designing graph-driven search paradigms, automated content tagging, and administrative publishing engines adhering to Walmart's global design system.",
    challenge:
      "Walmart's global workforce of 3.2 million associates across retail stores, distribution centers, and corporate offices relied on fractured, legacy training portals. Associates struggled to find role-critical compliance and safety certifications, while internal instructional designers lacked safe, modern publishing tooling.",
    solution:
      "Spearheaded a ground-up redesign of the Content Distribution Platform (CDP) powered by graph databases and GraphQL. Conceived an intuitive search paradigm that maps career paths, prerequisite certifications, and localized store procedures through rich semantic relationships rather than dead-end keyword lists.",
    uiUxCraft:
      "Engineered high-efficiency administrative authoring suites with built-in version safeguards and instant preview modes. For associates on shared retail floor terminals, designed clean, distraction-free learning modules that can be paused and resumed without progress loss.",
    systemsArchitecture:
      "Replaced brittle relational queries with a flexible GraphQL schema. Designed real-time metadata indexing and taxonomy services capable of handling millions of concurrent course completions across global time zones.",
    metrics: [
      { value: "3.2M", label: "Global Associates", subtext: "World's largest private employer" },
      { value: "GraphQL", label: "Graph Search", subtext: "Zero-latency curriculum discovery" },
      { value: "100%", label: "LMS Modernization", subtext: "Unified authoring and learner UX" },
      { value: "Fortune 1", label: "Enterprise Scale", subtext: "Mission-critical retail ops" },
    ],
    outcomes: [
      "Architected the graph-driven search experience connecting 3.2M associates with tailored curriculum.",
      "Built the Content Distribution Platform administrative manual authoring suite.",
      "Eliminated course publishing regressions with state-driven deletion safeguards.",
    ],
    technologies: ["GraphQL", "Graph Databases", "Enterprise Design Systems", "High-Volume LMS", "React", "TypeScript"],
  },

  foodler: {
    slug: "foodler",
    client: "Foodler.com (Acquired by GrubHub)",
    title: "Proprietary Algorithmic Fraud Engine & 10x Acquisition Exit",
    subtitle: "Director of Business Operations • Slashing Chargebacks by 83% ($6M to <$1M)",
    role: "Director of Business Operations",
    scaleBadge: "$500M+ Volume • 10x Acquisition Exit",
    timeline: "2012 – 2017",
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
    subtitle: "Healthcare SaaS • Zero-Latency Cloud DICOM Viewer & Structured Clinical Reporting",
    role: "Lead UX Architect & Clinical Workflow Specialist",
    scaleBadge: "Cloud DICOM PACS • Cardiovascular Imaging",
    timeline: "2018 – 2020",
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
  },
};



