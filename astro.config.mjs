// @ts-check

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// The same source builds two ways:
//   - default        (`pnpm build`)                   → Cloudflare Workers, via the @astrojs/cloudflare adapter (unchanged).
//   - STATIC_BUILD=true (`STATIC_BUILD=true pnpm build`) → a pure static `dist/` for the nginx Docker image the NAS serves.
// The site is fully prerendered (no SSR routes), so dropping the adapter yields a clean static bundle.
const staticBuild = process.env.STATIC_BUILD === "true";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  site: "https://www.flicktt.com",

  // No adapter in static mode — Astro emits plain HTML/CSS/JS to `dist/` that nginx serves directly.
  // Images use Astro's default sharp service. Every route is prerendered, so on Cloudflare the
  // `compile` image service optimises at build time — the Workers runtime has no sharp and the
  // runtime `/_image` endpoint would 404.
  ...(staticBuild ? {} : { adapter: cloudflare({ imageService: "compile" }) }),

  integrations: [sitemap()],
});