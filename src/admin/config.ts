/**
 * 管理后台配置中心
 * 
 * 统一定义所有魔法数字和运行时常量，避免散落在各路由文件中。
 */

export const ADMIN_CONFIG = {
	// ─── 认证与限流 ─────────────────────────────────────────────────────────
	AUTH: {
		SESSION_TTL_SECONDS: 12 * 60 * 60, // 12 小时
		SESSION_PREFIX: "admin-session:",
		SESSION_ISSUER: "cf-astro-blog-starter-admin",
		SESSION_AUDIENCE: "admin",
		MIN_JWT_SECRET_LENGTH: 32,
	},
	RATE_LIMIT: {
		MAX_ATTEMPTS: 5,
		LOCKOUT_MINUTES: 15,
		ATTEMPT_TTL_SECONDS: 24 * 60 * 60, // 24 小时
	},
	OAUTH: {
		STATE_COOKIE: "admin_oauth_state",
		VERIFIER_COOKIE: "admin_oauth_verifier",
		COOKIE_TTL_SECONDS: 10 * 60, // 10 分钟
	},

	// ─── 内容长度限制 ────────────────────────────────────────────────────────
	CONTENT: {
		MAX_TITLE_LENGTH: 200,
		MAX_SLUG_LENGTH: 120,
		MAX_EXCERPT_LENGTH: 200,
		MAX_AUTHOR_NAME_LENGTH: 80,
		MAX_CONTENT_LENGTH: 100_000,
		MAX_META_TITLE_LENGTH: 200,
		MAX_META_DESCRIPTION_LENGTH: 160,
		MAX_META_KEYWORDS_LENGTH: 200,
	},

	// ─── AI 相关 ────────────────────────────────────────────────────────────
	AI: {
		MAX_CONTENT_CHARS: 12_000,
		DEFAULT_RATE_LIMIT_PER_MINUTE: 12,
		DEFAULT_DAILY_LIMIT_PER_IP: 120,
		MAX_CHAT_BODY_LENGTH: 16_384,
		MAX_MESSAGE_LENGTH: 4_000,
		MAX_TURNSTILE_TOKEN_LENGTH: 4_096,
	},

	// ─── MCP 传输限制 ───────────────────────────────────────────────────────
	MCP: {
		MAX_TITLE_LENGTH: 200,
		MAX_CONTENT_LENGTH: 100_000,
		MAX_AUTHOR_NAME_LENGTH: 80,
		MAX_SLUG_LENGTH: 120,
		MAX_EXCERPT_LENGTH: 200,
		MAX_META_TITLE_LENGTH: 200,
		MAX_META_DESCRIPTION_LENGTH: 160,
		MAX_META_KEYWORDS_LENGTH: 200,
		RATE_LIMIT_PER_MINUTE: 30,
		AUTH_FAIL_LIMIT_PER_MINUTE: 20,
		AUTH_BLOCK_SECONDS: 3600, // 1 小时
	},

	// ─── 公开 AI 终端限制 ────────────────────────────────────────────────────
	PUBLIC_AI: {
		MAX_TERMINAL_BODY_LENGTH: 1_048_576, // 1MB
		MAX_TERMINAL_CWD_LENGTH: 240,
		MAX_TERMINAL_HISTORY_MESSAGE_LENGTH: 16_000,
		MAX_BODY_LENGTH: 8192,
	},

	// ─── 媒体上传 ────────────────────────────────────────────────────────────
	MEDIA: {
		MAX_UPLOAD_BYTES: 10 * 1024 * 1024, // 10MB
		ALLOWED_MIME_TYPES: [
			"image/jpeg",
			"image/png",
			"image/gif",
			"image/webp",
			"image/svg+xml",
			"video/mp4",
			"video/webm",
			"application/pdf",
		],
	},

	// ─── 部署钩子 ────────────────────────────────────────────────────────────
	DEPLOY: {
		DEFAULT_EVENT_TYPE: "rebuild-search-index",
	},
} as const;

// 类型导出
export type AdminConfig = typeof ADMIN_CONFIG;
