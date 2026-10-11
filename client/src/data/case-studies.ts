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

  cassandra: {
    slug: "cassandra",
    client: "Colon Hyphen Bracket",
    title: "Cassandra: High-Signal Career Agent & Vignelli Focus Mode v5.0",
    subtitle: "Autonomous Operator • Massimo Vignelli 8pt Grid & Continuous Reinforcement Loop",
    role: "Architect, Designer & Full-Stack Builder",
    scaleBadge: "Focus Mode v5.0 • Autonomous AI Agent",
    timeline: "2025 – 2026",
    heroImage: "/images/cassandra/cassandra_combined.png",
    galleryImages: [
      {
        src: "/images/cassandra/cassandra_combined.png",
        title: "Cassandra: Focus Mode v5.0 Interface",
        caption: "Single-task deep-work system around the 'Sprint of 8'—curated roles evaluated in an editorial Vignelli 8pt layout with curated art.",
        tag: "Autonomous Agent",
      },
      {
        src: "/images/cassandra/cassandra_portrait.png",
        title: "Editorial Presentation & Fine Art Curation",
        caption: "Replacing corporate logos and noisy badges with fine art and landscape photography to restore dignity to career evaluation.",
        tag: "Editorial UI",
      },
    ],
    executiveSummary:
      "An autonomous career evaluation engine and deep-work interface designed to eliminate job-board dopamine traps. Features the 'Sprint of 8' Focus Mode, continuous negative dismissal reinforcement in SQLite, and a calming Massimo Vignelli editorial aesthetic.",
    challenge:
      "Job searching in tech has become a dehumanizing, dopamine-draining slog dominated by predatory scrapers, low-signal AI bot spam, and endless context switching. The process causes severe cognitive fatigue.",
    solution:
      "Architected a single-task deep-work system around the 'Sprint of 8'—an intentional one-hour batch of 8 curated roles. Engineered an adaptive reinforcement loop in SQLite: every rejection rationale is recorded and auto-injected into Gemini 2.5 Flash as critical negative exclusions, making future job evaluations compounding in precision.",
    uiUxCraft:
      "Substituted chaotic applicant feeds with an editorial Sandstone, Cream, and Vignelli 8pt grid layout. Replaced corporate recruiter logos with curated fine art photography. Features a scroll-snap right navigation pillar and persistent chapter state across sessions.",
    systemsArchitecture:
      "Vanilla HTML5 and JavaScript frontend backed by Node.js and SQLite (jobs.db) for zero-latency local execution. Deeply integrates with Gemini 2.5 Flash for high-velocity semantic vacancy scoring.",
    metrics: [
      { value: "8 Roles", label: "Focus Sprint Limit", subtext: "Exactly 1 hour of deep focus" },
      { value: "Adaptive", label: "Dismissal Penalty", subtext: "SQLite negative reinforcement" },
      { value: "Vignelli 8pt", label: "Design System", subtext: "Zero UI debt" },
      { value: "0ms", label: "Local Runtime", subtext: "Zero-latency SQLite engine" },
    ],
    outcomes: [
      "Engineered the 'Sprint of 8' Focus Mode, bounding daily evaluation to high-signal sessions.",
      "Implemented automated negative-dismissal reinforcement loop in Node/SQLite.",
      "Crafted custom Vignelli layout with sticky scroll-snap pillar and capsule scrollbars.",
      "Secured live deployment running on Railway.",
    ],
    technologies: ["Node.js", "SQLite", "Gemini 2.5 Flash", "Massimo Vignelli 8pt Grid", "Vanilla JS", "Railway"],
    liveUrl: "https://jobseeker-agent.up.railway.app",
    liveUrlLabel: "Launch Private Interface (Passcode: onewordalllowercasehirekyle)",
  },

  pipes: {
    slug: "pipes",
    client: "Colon Hyphen Bracket",
    title: "Pipes Protocol & Sovereign Knowledge Marketplace",
    subtitle: "Flagship Protocol • $0 Marginal AI Inference & Multi-Tenant Persona Engine",
    role: "Architect, Designer & Protocol Engineer",
    scaleBadge: "Flagship Living Protocol",
    timeline: "2024 – 2026",
    heroImage: "/images/pipes/pipes-hero.png",
    galleryImages: [
      {
        src: "/images/pipes/pipes-hero.png",
        title: "Pipes Protocol: Flagship Interface",
        caption: "Sovereign knowledge marketplace transforming human expertise into reusable infrastructure with $0 marginal AI inference costs.",
        tag: "Protocol UI",
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
      "A sovereign knowledge protocol and marketplace that transforms human expertise into reusable, monetizable infrastructure with $0 marginal AI inference costs, stopping the AI model collapse loop.",
    challenge:
      "As foundation LLMs drown in synthetic data and hallucinations, verified human-curated context is the rarest asset. However, mainstream SaaS burns expensive tokens on repetitive context prompts, extracting creator value while producing fragile outputs.",
    solution:
      "Architected the 'Reference Library Pattern' (Template + Keyword Match + Curated Knowledge = Deterministic Output at $0.00 marginal LLM cost). Built a runtime CSS variable injection engine that adapts the entire UI, palette, typography, and copy across 6 distinct personas in real time.",
    uiUxCraft:
      "Multi-tenant dynamic interface that seamlessly transforms between Cyberpunk, Enterprise, Academic, and Vignelli typographic themes without page reload, powered by runtime CSS variable injection.",
    systemsArchitecture:
      "Self-sovereign namespace registry with deeded equity mechanics (70/30 creator revenue split) anchored on cryptographic identity (NOSTR/Web Crypto). Delivers 25-page synthesized outputs with zero external token expenditure.",
    metrics: [
      { value: "$0.00", label: "Marginal AI Cost", subtext: "Deterministic Reference Library" },
      { value: "6 Live Themes", label: "Persona Engine", subtext: "Runtime CSS injection" },
      { value: "70%", label: "Creator Equity", subtext: "Cryptographic revenue split" },
      { value: "25 Pages", label: "Synthesis Scale", subtext: "Zero token amnesia" },
    ],
    outcomes: [
      "Engineered the Reference Library pattern delivering zero-marginal-cost expert outputs.",
      "Multi-tenant CSS injection engine powering instantaneous aesthetic adaptation.",
      "Self-sovereign cryptographic registry anchored on NOSTR identity.",
    ],
    technologies: ["Next.js", "TypeScript", "Runtime CSS Injection", "NOSTR / Web Crypto", "Tailwind CSS v4"],
    liveUrl: "https://pipes.pink",
    liveUrlLabel: "Explore Live Protocol (pipes.pink)",
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
};
