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

  // Serve static files with cache headers appropriate to content type.
  // Vite content-hashes JS/CSS bundles under /assets/ — give those immutable 1-year caching.
  // Everything else (images, manifest, favicon, OG assets) gets a short 1-hour cache so
  // changes can propagate without requiring a full CDN purge.
  app.use(
    express.static(distPath, {
      index: false,
      setHeaders(res, filePath) {
        // Matches Vite-emitted hashed bundles: /assets/index-AbCdEf12.js, /assets/main-Xy9Z.css, etc.
        if (filePath.includes(`${path.sep}assets${path.sep}`)) {
          res.set("Cache-Control", "public, max-age=31536000, immutable");
        } else {
          res.set("Cache-Control", "public, max-age=3600");
        }
      },
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
