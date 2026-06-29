// @ts-check

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
	image: {
		service: passthroughImageService(),
	},

	vite: {
		plugins: [tailwindcss()],
	},

	adapter: cloudflare(),
});
