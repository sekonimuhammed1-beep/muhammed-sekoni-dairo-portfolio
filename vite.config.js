import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The public site URL is only needed for absolute social-preview links
// (WhatsApp, LinkedIn and others require absolute og:image URLs).
// On Vercel it is filled in automatically from VERCEL_PROJECT_PRODUCTION_URL.
// If that variable is missing it falls back to root-relative links, and the
// build still succeeds. No environment variable is required.
// Optional override: set SITE_URL (for example for a custom domain).
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "")
).replace(/\/$/, "");

const injectSiteUrl = () => ({
  name: "inject-site-url",
  transformIndexHtml: (html) => html.replaceAll("__SITE_URL__", siteUrl),
});

export default defineConfig({
  plugins: [react(), injectSiteUrl()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2020",
  },
});
