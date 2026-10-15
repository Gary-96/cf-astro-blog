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
		// 内联所有样式表到 HTML，消除额外 CSS 网络往返
		inlineStylesheets: "always",
	},
	vite: {
		resolve: {
			alias: {
				"@": "/src",
			},
		},
	},
});
