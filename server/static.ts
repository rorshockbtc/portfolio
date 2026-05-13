import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectSeoMeta, buildSiteUrl } from "./seo";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Vite content-hashes all JS/CSS filenames — serve them with immutable 1-year cache.
  // index: false ensures every request falls through to the SEO-injecting catch-all below.
  app.use(
    express.static(distPath, {
      index: false,
      maxAge: "1y",
      immutable: true,
    }),
  );

  // fall through to index.html, injecting per-route SEO meta before sending.
  app.use("/{*path}", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    let html = fs.readFileSync(indexPath, "utf-8");
    const siteUrl = buildSiteUrl(req);
    html = injectSeoMeta(html, req.path, siteUrl);
    res
      .set("Content-Type", "text/html")
      .set("Cache-Control", "no-cache, no-store, must-revalidate")
      .send(html);
  });
}
