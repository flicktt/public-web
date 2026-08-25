// @ts-check

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  site: "https://www.flicktt.com",

  // Images use Astro's default sharp service. Every route is prerendered, so the `compile` image
  // service optimises at build time — the Workers runtime has no sharp and the runtime `/_image`
  // endpoint would 404.
  adapter: cloudflare({ imageService: "compile" }),

  integrations: [sitemap()],
});