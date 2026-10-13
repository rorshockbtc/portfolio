import fs from "fs";
import path from "path";
import { CASE_STUDIES } from "../client/src/data/case-studies.ts";

const ROOT = process.cwd();
const DIST_INDEX = path.resolve(ROOT, "dist/index.html");

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

  const outDir = path.resolve(ROOT, "dist/case-studies", slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.resolve(outDir, "index.html"), html, "utf-8");
}

console.log(`Generated static SEO/OG entry points for ${Object.keys(CASE_STUDIES).length} case studies.`);
