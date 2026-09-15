import { Hono } from "hono";
import {
	applyBaseSecurityHeaders,
	buildCspHeader,
} from "@/lib/security-headers";
import type { AdminAppEnv } from "./middleware/auth";
import { analyticsRoutes } from "./routes/analytics";
import { appearanceRoutes } from "./routes/appearance";
import { authRoutes } from "./routes/auth";
import { dashboardRoutes } from "./routes/dashboard";
import { friendLinksRoutes } from "./routes/friend-links";
import { friendsRoutes } from "./routes/friends";
import { mcpRoutes } from "./routes/mcp";
import { mediaRoutes } from "./routes/media";
import { mentionsRoutes } from "./routes/mentions";
import { postsRoutes } from "./routes/posts";
import { publicAiRoutes } from "./routes/public-ai";
import { publicAnalyticsRoutes } from "./routes/public-analytics";
import { webmentionRoutes } from "./routes/webmention";

const app = new Hono<AdminAppEnv>();

function applySecurityHeaders(pathname: string, response: Response) {
	applyBaseSecurityHeaders(response);

	const contentType = response.headers.get("content-type") ?? "";
	if (!contentType.includes("text/html")) {
		return;
	}

	response.headers.set("Cache-Control", "no-store");

	if (pathname.startsWith("/auth")) {
		response.headers.set(
			"Content-Security-Policy",
			buildCspHeader("auth", { allowGiscus: false, allowAds: false }),
		);
		return;
	}

	if (pathname.startsWith("/admin")) {
		response.headers.set(
			"Content-Security-Policy",
			buildCspHeader("admin", { allowGiscus: false, allowAds: false }),
		);
	}
}

app.use("*", async (c, next) => {
	await next();
	applySecurityHeaders(c.req.path, c.res);
});

app.route("/auth", authRoutes);
app.route("/analytics", publicAnalyticsRoutes);
app.route("/ai", publicAiRoutes);
app.route("/mcp", mcpRoutes);
app.route("/admin", dashboardRoutes);
app.route("/admin/appearance", appearanceRoutes);
app.route("/admin/posts", postsRoutes);
app.route("/admin/friends", friendsRoutes);
app.route("/admin/mentions", mentionsRoutes);
app.route("/admin/media", mediaRoutes);
app.route("/admin/analytics", analyticsRoutes);
app.route("/friend-links", friendLinksRoutes);
app.route("/webmention", webmentionRoutes);

app.get("/health", (c) =>
	c.json({ status: "ok", timestamp: new Date().toISOString() }),
);

export { app };
