import fs from "fs";
import path from "path";
import { CASE_STUDIES } from "../client/src/data/case-studies.ts";

const ROOT = process.cwd();
const DIST_DIR = path.resolve(ROOT, "dist");
const DIST_INDEX = path.resolve(DIST_DIR, "index.html");

if (!fs.existsSync(DIST_INDEX)) {
  console.error("dist/index.html not found, skipping postbuild SEO generation.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(DIST_INDEX, "utf-8");

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

for (const [slug, study] of Object.entries(CASE_STUDIES)) {
  const pageTitle = `${study.client}: ${study.title} | Kyle Cyree`;
  const pageDesc = study.executiveSummary;
  const pageUrl = `https://hire.colonhyphenbracket.pink/case-studies/${slug}`;
  const ogImageUrl = `https://hire.colonhyphenbracket.pink/og/case-studies/${slug}.jpg`;

  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(pageTitle)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escapeHtml(pageDesc)}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${pageUrl}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${escapeHtml(pageTitle)}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${escapeHtml(pageDesc)}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${pageUrl}" />`
    )
    .replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${ogImageUrl}" />`
    )
    .replace(
      /<meta property="og:image:secure_url" content="[^"]*" \/>/,
      `<meta property="og:image:secure_url" content="${ogImageUrl}" />`
    )
    .replace(
      /<meta property="og:image:alt" content="[^"]*" \/>/,
      `<meta property="og:image:alt" content="${escapeHtml(pageTitle)}" />`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${escapeHtml(pageTitle)}" />`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${escapeHtml(pageDesc)}" />`
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*" \/>/,
      `<meta name="twitter:image" content="${ogImageUrl}" />`
    )
    .replace(
      /<meta name="twitter:image:alt" content="[^"]*" \/>/,
      `<meta name="twitter:image:alt" content="${escapeHtml(pageTitle)}" />`
    );

  const outDir = path.resolve(DIST_DIR, "case-studies", slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.resolve(outDir, "index.html"), html, "utf-8");
}

// Generate dedicated static SEO/OG entry point for /studio
{
  const studioTitle =
    "Colon Hyphen Bracket, LLC (:-]) — Systems & Product Architecture Studio | Kyle Cyree";
  const studioDesc =
    "Principal-led product architecture studio and proprietary R&D lab. Creators of Pipes.Pink, Hash Sanctuary, SEMI (;-]), Greater (>), Marigold Insights, and Clubhouse 1099. Fixed-fee 1-week sprints ($7,500) and systems engagements.";
  const studioUrl = "https://hire.colonhyphenbracket.pink/studio";
  const studioOgImage =
    "https://hire.colonhyphenbracket.pink/images/studio/studio-hero-architecture.png";

  const studioHtml = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(studioTitle)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escapeHtml(studioDesc)}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${studioUrl}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${escapeHtml(studioTitle)}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${escapeHtml(studioDesc)}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${studioUrl}" />`
    )
    .replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${studioOgImage}" />`
    )
    .replace(
      /<meta property="og:image:secure_url" content="[^"]*" \/>/,
      `<meta property="og:image:secure_url" content="${studioOgImage}" />`
    )
    .replace(
      /<meta property="og:image:alt" content="[^"]*" \/>/,
      `<meta property="og:image:alt" content="${escapeHtml(studioTitle)}" />`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${escapeHtml(studioTitle)}" />`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${escapeHtml(studioDesc)}" />`
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*" \/>/,
      `<meta name="twitter:image" content="${studioOgImage}" />`
    )
    .replace(
      /<meta name="twitter:image:alt" content="[^"]*" \/>/,
      `<meta name="twitter:image:alt" content="${escapeHtml(studioTitle)}" />`
    );

  const studioDir = path.resolve(DIST_DIR, "studio");
  fs.mkdirSync(studioDir, { recursive: true });
  fs.writeFileSync(path.resolve(studioDir, "index.html"), studioHtml, "utf-8");
}

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://hire.colonhyphenbracket.pink/sitemap.xml
`;
fs.writeFileSync(path.resolve(DIST_DIR, "robots.txt"), robotsTxt, "utf-8");
fs.writeFileSync(path.resolve(ROOT, "client/public/robots.txt"), robotsTxt, "utf-8");

// Generate sitemap.xml
const today = new Date().toISOString().split("T")[0];
const staticRoutes = [
  { loc: "https://hire.colonhyphenbracket.pink/", priority: "1.0" },
  { loc: "https://hire.colonhyphenbracket.pink/studio", priority: "0.95" },
  { loc: "https://hire.colonhyphenbracket.pink/essays/design-is-risk", priority: "0.8" },
];
const caseStudyRoutes = Object.keys(CASE_STUDIES).map((slug) => ({
  loc: `https://hire.colonhyphenbracket.pink/case-studies/${slug}`,
  priority: ["custodia", "unitedhealth", "walmart", "pipes"].includes(slug) ? "0.9" : "0.7",
}));

const allUrls = [...staticRoutes, ...caseStudyRoutes]
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls}
</urlset>
`;
fs.writeFileSync(path.resolve(DIST_DIR, "sitemap.xml"), sitemapXml, "utf-8");
fs.writeFileSync(path.resolve(ROOT, "client/public/sitemap.xml"), sitemapXml, "utf-8");

console.log(
  `Generated static SEO/OG entry points for /studio and ${Object.keys(CASE_STUDIES).length} case studies, plus robots.txt and sitemap.xml.`
);
