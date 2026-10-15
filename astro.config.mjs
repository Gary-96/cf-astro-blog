// @ts-check
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

export default defineConfig({
	output: "server",
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	site: "https://gnnis.com",
	build: {
		// 内联首屏关键 CSS，减少一次网络往返
		inlineStylesheets: "auto",
	},
	vite: {
		resolve: {
			alias: {
				"@": "/src",
			},
		},
	},
});
