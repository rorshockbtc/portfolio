interface PageMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/studio": {
    title: "CHB Studio — Architecture Partner for the Stuck & Underserved | Colon Hyphen Bracket",
    description:
      "CHB applies tasteful, measured order to complex products and growing businesses. Fractional design leadership, product architecture, and full-stack development for startups, small businesses, faith-based organizations, and regulated industries including healthcare and fintech.",
    ogTitle: "CHB Studio — Architecture Partner for the Stuck & Underserved",
    ogDescription:
      "Fractional design leadership and product architecture for startups, small businesses, and regulated industries. Good, fast, and cheap — pick all three.",
  },
  "/": {
    title: "Kyle Cyree — Principal Product Designer & Systems Architect | CHB",
    description:
      "Kyle Cyree is a Principal Product Designer and Systems Architect with 20+ years spanning enterprise healthcare (UnitedHealth, 35M+ users), fintech (Fidelity, Custodia Bank), AI/ML ecosystems, and high-frequency trading systems. Director/Staff-level product architecture, design systems, and full-stack development.",
    ogTitle: "Kyle Cyree — Principal Product Designer & Systems Architect",
    ogDescription:
      "I build enterprise-scale design systems, zero-to-one fintech platforms, and collaborative agentic AI models. 20+ years in art, business, and technology.",
  },
};

function getMetaForPath(path: string): PageMeta {
  if (path === "/studio" || path.startsWith("/studio")) {
    return PAGE_META["/studio"];
  }
  return PAGE_META["/"];
}

function buildJsonLd(siteUrl: string): string {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kyle Cyree",
    jobTitle: "Principal Product Designer & Systems Architect",
    url: siteUrl,
    sameAs: ["https://github.com/rorshockbtc"],
    knowsAbout: [
      "Product Design",
      "Systems Architecture",
      "Design Systems",
      "AI/ML",
      "FinTech",
      "Healthcare UX",
      "Cryptographic Authentication",
      "High-Frequency Trading",
      "TypeScript",
      "React",
      "Full-Stack Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Colon Hyphen Bracket, LLC",
      alternateName: "CHB",
      url: siteUrl,
      description:
        "A product design and systems architecture studio serving startups, small businesses, faith-based organizations, and regulated industries.",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Colon Hyphen Bracket",
    alternateName: "CHB",
    url: siteUrl,
    description:
      "Portfolio and studio site for Kyle Cyree — Principal Product Designer & Systems Architect at Colon Hyphen Bracket, LLC.",
  };

  return [
    `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`,
    `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`,
  ].join("\n    ");
}

export function injectSeoMeta(html: string, requestPath: string, siteUrl: string): string {
  const meta = getMetaForPath(requestPath);
  const canonicalPath = requestPath === "/" ? "" : requestPath.replace(/\/$/, "");
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  html = html.split("__SITE_URL__").join(siteUrl);
  html = html.split("__META_TITLE__").join(meta.title);
  html = html.split("__META_DESCRIPTION__").join(meta.description);
  html = html.split("__OG_TITLE__").join(meta.ogTitle);
  html = html.split("__OG_DESCRIPTION__").join(meta.ogDescription);
  html = html.split("__CANONICAL_URL__").join(canonicalUrl);
  html = html.replace("__JSON_LD__", buildJsonLd(siteUrl));

  return html;
}
