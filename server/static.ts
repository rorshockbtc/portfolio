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

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist, injecting OG meta
  app.use("/{*path}", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    let html = fs.readFileSync(indexPath, "utf-8");
    const siteUrl = buildSiteUrl(req);
    html = injectSeoMeta(html, req.path, siteUrl);
    res.set("Content-Type", "text/html").send(html);
  });
}
