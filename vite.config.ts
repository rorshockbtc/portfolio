import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STUDIO_ARTIFACT_DIR =
  "/Users/kyle/.gemini/antigravity/brain/2804fc5d-5420-40b9-a0a1-eaec0eabdb55";
const STUDIO_PUBLIC_DIR = path.resolve(__dirname, "client", "public", "images", "studio");

const STUDIO_IMAGE_MAP: Record<string, string> = {
  "studio_hero_architecture_png_1792207134737.jpg": "studio-hero-architecture.png",
  "studio_overlooked_startups_png_1792207151709.jpg": "studio-overlooked-startups.png",
  "studio_overlooked_schools_png_1792207169875.jpg": "studio-overlooked-schools.png",
  "studio_overlooked_faith_png_1792207188745.jpg": "studio-overlooked-faith.png",
  "studio_overlooked_mainstreet_png_1792207208191.jpg": "studio-overlooked-mainstreet.png",
  "studio_regulated_monolith_png_1792207228653.jpg": "studio-regulated-monolith.png",
  "studio_workflow_loom_png_1792207249572.jpg": "studio-workflow-loom.png",
};

try {
  if (fs.existsSync(STUDIO_ARTIFACT_DIR)) {
    fs.mkdirSync(STUDIO_PUBLIC_DIR, { recursive: true });
    for (const [srcName, destName] of Object.entries(STUDIO_IMAGE_MAP)) {
      const srcPath = path.join(STUDIO_ARTIFACT_DIR, srcName);
      const destPath = path.join(STUDIO_PUBLIC_DIR, destName);
      if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
} catch {
  // Ignore if running in CI/Vercel where local artifact dir is absent
}

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "wouter"],
          "vendor-motion": ["framer-motion"],
          "vendor-icons": ["lucide-react", "react-icons"],
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
