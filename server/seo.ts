interface PageMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogType?: string;
  ogImageAlt?: string;
  preloadHero?: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/essays/design-is-risk": {
    title: "Design is Risk: The Data-Exfiltration Honeypot | Kyle Cyree",
    description:
      "A design architecture case study on portfolio IP risk, Chain-of-Thought data mining, and why an intentionally lightweight portfolio is a security decision. By Kyle Cyree.",
    ogTitle: "Design is Risk: The data-exfiltration honeypot nobody is talking about",
    ogDescription:
      "Portfolio CoT case studies are the highest-value seed corpus for LLM extraction attacks. A deep dive by Kyle Cyree / CHB on why this site is intentionally light.",
    ogType: "article",
    ogImageAlt: "Design is Risk — A case study by Kyle Cyree on portfolio IP exfiltration risk",
  },
  "/studio": {
    title: "CHB Studio — Design & Architecture Partner | Colon Hyphen Bracket",
    description:
      "CHB applies tasteful, measured order to complex products and growing businesses. Fractional design leadership, product architecture, and full-stack development for startups, small businesses, faith-based organizations, and regulated industries.",
    ogTitle: "CHB Studio — Architecture Partner for the Stuck & Underserved",
    ogDescription:
      "Fractional design leadership and product architecture for startups, small businesses, and regulated industries. Good, fast, and cheap — pick all three.",
    ogType: "website",
    ogImageAlt: "CHB Studio — Colon Hyphen Bracket design and architecture portfolio",
    preloadHero: "/images/studio/hero.webp",
  },
  "/": {
    title: "Kyle Cyree — Principal Product Designer & Systems Architect",
    description:
      "Kyle Cyree is a Principal Product Designer and Systems Architect with 20+ years spanning enterprise healthcare (UnitedHealth, 35M+ users), fintech (Fidelity, Custodia Bank), AI/ML ecosystems, and high-frequency trading systems.",
    ogTitle: "Kyle Cyree — Principal Product Designer & Systems Architect | CHB",
    ogDescription:
      "I build enterprise-scale design systems, zero-to-one fintech platforms, and collaborative agentic AI models. 20+ years spanning healthcare, fintech, and defense.",
    ogType: "website",
    ogImageAlt: "Kyle Cyree — Principal Product Designer & Systems Architect at Colon Hyphen Bracket",
  },
};

function getMetaForPath(path: string): PageMeta {
  if (path.startsWith("/essays/design-is-risk")) {
    return PAGE_META["/essays/design-is-risk"];
  }
  if (path === "/studio" || path.startsWith("/studio")) {
    return PAGE_META["/studio"];
  }
  return PAGE_META["/"];
}

function buildJsonLd(siteUrl: string, path: string): string {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kyle Cyree",
    jobTitle: "Principal Product Designer & Systems Architect",
    url: siteUrl,
    sameAs: [
      "https://github.com/rorshockbtc",
      "https://www.linkedin.com/in/kyle-cyree/",
    ],
    knowsAbout: [
      "Product Design",
      "Systems Architecture",
      "Design Systems",
      "AI/ML",
      "FinTech",
      "Healthcare UX",
      "Information Security",
      "Chain-of-Thought Reasoning",
      "TypeScript",
      "React",
      "Full-Stack Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Colon Hyphen Bracket, LLC",
      alternateName: "CHB",
      url: siteUrl,
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

  const schemas: object[] = [personSchema, websiteSchema];

  if (path.startsWith("/essays/design-is-risk")) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Design is Risk: The data-exfiltration honeypot nobody is talking about",
      description:
        "A non-traditional design architecture case study on portfolio IP risk, Chain-of-Thought data mining, and why an intentionally lightweight portfolio is a security decision.",
      author: {
        "@type": "Person",
        name: "Kyle Cyree",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Colon Hyphen Bracket, LLC",
        url: siteUrl,
      },
      url: `${siteUrl}/essays/design-is-risk`,
      datePublished: "2026-05-13",
      mainEntityOfPage: `${siteUrl}/essays/design-is-risk`,
      keywords: [
        "design portfolio security",
        "IP exfiltration",
        "Chain-of-Thought data mining",
        "LLM scraping",
        "design risk",
        "portfolio architecture",
        "information security",
        "UX design",
      ],
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Design is Risk",
          item: `${siteUrl}/essays/design-is-risk`,
        },
      ],
    };

    schemas.push(articleSchema, breadcrumbSchema);
  }

  return schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n    ");
}

function sanitizeUrl(url: string): string {
  return url.replace(/[<>"'&]/g, "");
}

export function buildSiteUrl(req: { headers: Record<string, any>; protocol?: string; get?: (name: string) => string | undefined }): string {
  const proto = String(req.headers["x-forwarded-proto"] || req.protocol || "https").split(",")[0].trim();
  const host = String(req.headers["x-forwarded-host"] || (req.get ? req.get("host") : "") || "").split(",")[0].trim();
  const safeProto = /^https?$/.test(proto) ? proto : "https";
  const safeHost = sanitizeUrl(host);
  return `${safeProto}://${safeHost}`;
}

export function injectSeoMeta(html: string, requestPath: string, siteUrl: string): string {
  siteUrl = sanitizeUrl(siteUrl);
  const meta = getMetaForPath(requestPath);
  const canonicalPath = requestPath === "/" ? "" : requestPath.replace(/\/$/, "");
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  html = html.split("__SITE_URL__").join(siteUrl);
  html = html.split("__META_TITLE__").join(meta.title);
  html = html.split("__META_DESCRIPTION__").join(meta.description);
  html = html.split("__OG_TITLE__").join(meta.ogTitle);
  html = html.split("__OG_DESCRIPTION__").join(meta.ogDescription);
  html = html.split("__OG_TYPE__").join(meta.ogType ?? "website");
  html = html.split("__OG_IMAGE_ALT__").join(meta.ogImageAlt ?? meta.ogTitle);
  html = html.split("__CANONICAL_URL__").join(canonicalUrl);

  // Inject hero preload for routes that need it (prevents LCP penalty)
  const preloadTag = meta.preloadHero
    ? `<link rel="preload" as="image" href="${meta.preloadHero}" type="image/webp">`
    : "";
  html = html.split("__HERO_PRELOAD__").join(preloadTag);

  html = html.replace("__JSON_LD__", buildJsonLd(siteUrl, requestPath));

  return html;
}
