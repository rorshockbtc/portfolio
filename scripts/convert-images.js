#!/usr/bin/env node
// Converts raw PNG source assets → optimised WebP/JPEG for the Studio page.
// Run: node scripts/convert-images.js

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const outDir = path.resolve(__dirname, "../client/public/images/studio");
fs.mkdirSync(outDir, { recursive: true });

const images = [
  { src: "attached_assets/hero_1775928187189.png",                           out: "hero.webp",              w: 1920, q: 72 },
  { src: "attached_assets/01-section-background_1775928187192.png",          out: "section-bg-01.webp",     w: 1400, q: 75 },
  { src: "attached_assets/02a-card-image-startups_1775928187194.png",        out: "card-startups.webp",     w: 1000, q: 72 },
  { src: "attached_assets/02b-card-image-faith_1775928187199.png",           out: "card-faith.webp",        w: 1000, q: 72 },
  { src: "attached_assets/02c-card-image-schools_1775928187199.png",         out: "card-schools.webp",      w: 1000, q: 72 },
  { src: "attached_assets/02d-card-image-smallBusinesses_1775928187198.png", out: "card-small-biz.webp",    w:  800, q: 72 },
  { src: "attached_assets/03-side-image-health-fintech_1775947646953.png",   out: "side-health-fintech.webp",w: 900, q: 75 },
  { src: "attached_assets/04-feature-image-proprietaryTechnology_1775928187201.png", out: "feature-prop-tech.webp", w: 1200, q: 75 },
  { src: "attached_assets/05-divider-image-topography_1775928187201.png",    out: "divider-topo.webp",      w: 1400, q: 70 },
  { src: "attached_assets/06-callout-image-workingWithCHB_1775928187202.png", out: "callout-workflow.webp", w: 1400, q: 72 },
];

(async () => {
  for (const img of images) {
    const outPath = path.join(outDir, img.out);
    await sharp(img.src)
      .resize({ width: img.w, withoutEnlargement: true })
      .webp({ quality: img.q })
      .toFile(outPath);
    const stat = fs.statSync(outPath);
    const meta = await sharp(outPath).metadata();
    console.log(`✓ ${img.out.padEnd(28)} ${(meta.width + "x" + meta.height).padEnd(12)} ${Math.round(stat.size / 1024)} KB`);
  }

  // OG image — standard 1200×630 crop sourced from the Studio hero raw PNG
  // (attached_assets/hero_1775928187189.png is the durable source; client/public/og-image.png
  //  was a copy that has been removed to reduce deployment artifact size)
  const ogSrc = path.resolve(__dirname, "../attached_assets/hero_1775928187189.png");
  const ogOut = path.resolve(__dirname, "../client/public/og-image.jpg");
  await sharp(ogSrc)
    .resize({ width: 1200, height: 630, fit: "cover" })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(ogOut);
  const ogStat = fs.statSync(ogOut);
  console.log(`✓ og-image.jpg                  1200x630     ${Math.round(ogStat.size / 1024)} KB`);

  console.log("\nAll images converted.");
})();
