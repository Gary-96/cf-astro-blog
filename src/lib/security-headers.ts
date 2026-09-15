/**
 * 全站公共安全头策略
 *
 * 统一由 src/middleware.ts（前台）和 src/admin/app.ts（后台）引入，
 * 避免两处 CSP 配置不一致导致偶发拦截。
 */

export type CspMode = "public" | "auth" | "admin";

interface CspOptions {
	allowGiscus?: boolean;
	allowAds?: boolean;
	allowGoogleAnalytics?: boolean;
}

const DEFAULT_CONNECT_SOURCES = [
	"'self'",
	"https://giscus.app",
	"https://challenges.cloudflare.com",
	"https://static.cloudflareinsights.com",
	"https://cloudflareinsights.com",
];

const DEFAULT_SCRIPT_SOURCES = [
	"'self'",
	"'unsafe-inline'",
	"https://challenges.cloudflare.com",
	"https://static.cloudflareinsights.com",
	"'wasm-unsafe-eval'",
];

const DEFAULT_FRAME_SOURCES = ["'self'", "https://challenges.cloudflare.com"];

function mergeArray<T>(base: T[], extra: T[]): T[] {
	const set = new Set(base);
	for (const item of extra) set.add(item);
	return [...set];
}

export function buildCspHeader(
	mode: CspMode,
	options: CspOptions = {},
): string {
	const {
		allowGiscus = true,
		allowAds = true,
		allowGoogleAnalytics = true,
	} = options;

	const scriptSrc = mergeArray(
		DEFAULT_SCRIPT_SOURCES,
		[
			allowGiscus ? "https://giscus.app" : null,
			allowAds ? "https://pagead2.googlesyndication.com" : null,
			allowAds ? "https://adservice.google.com" : null,
			allowGoogleAnalytics ? "https://www.googletagmanager.com" : null,
		].filter((v): v is string => v !== null),
	);

	const connectSrc = mergeArray(
		DEFAULT_CONNECT_SOURCES,
		[
			allowGiscus ? "https://giscus.app" : null,
			allowGoogleAnalytics ? "https://www.google-analytics.com" : null,
			allowGoogleAnalytics ? "https://region1.google-analytics.com" : null,
			allowAds ? "https://pagead2.googlesyndication.com" : null,
			allowAds ? "https://googleads.g.doubleclick.net" : null,
			mode === "auth" ? "https://challenges.cloudflare.com" : null,
		].filter((v): v is string => v !== null),
	);

	const frameSrc = mergeArray(
		DEFAULT_FRAME_SOURCES,
		[
			allowGiscus ? "https://giscus.app" : null,
			allowAds ? "https://googleads.g.doubleclick.net" : null,
			allowAds ? "https://pagead2.googlesyndication.com" : null,
		].filter((v): v is string => v !== null),
	);

	const base: string[] = [
		"default-src 'self'",
		"base-uri 'self'",
		"frame-ancestors 'none'",
		"object-src 'none'",
		"form-action 'self'",
		`script-src ${scriptSrc.join(" ")}`,
		"style-src 'self' 'unsafe-inline'",
		"img-src 'self' data: https://avatars.githubusercontent.com",
		"font-src 'self' data: https:",
		`connect-src ${connectSrc.join(" ")}`,
		`frame-src ${frameSrc.join(" ")}`,
	];

	if (mode === "public") {
		// 前台页面额外放行 giscus 样式与 script
		base.push("style-src 'self' 'unsafe-inline' https://giscus.app");
	}

	return base.join("; ");
}

/** 非 CSP 的通用安全头 */
export function applyBaseSecurityHeaders(
	response: Response,
	isAdminPreview = false,
): void {
	response.headers.set("X-Content-Type-Options", "nosniff");
	response.headers.set(
		"X-Frame-Options",
		isAdminPreview ? "SAMEORIGIN" : "DENY",
	);
	response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
	response.headers.set(
		"Permissions-Policy",
		"camera=(), microphone=(), geolocation=()",
	);
	response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
}
