export interface SiteConfig {
	name: string;
	url: string;
	description: string;
	author: string;
	language: string;
	comments: CommentConfig;
}

export interface CommentConfig {
	provider: "giscus";
	repo: string;
	repoId: string;
	category: string;
	categoryId: string;
	mapping: "pathname" | "url" | "title" | "og:title";
	strict: boolean;
	reactionsEnabled: boolean;
	inputPosition: "top" | "bottom";
	lang: string;
}

export const siteConfig: SiteConfig = {
	name: "Gnnis Lab",
	url: "https://gnnis.com",
	description:
		"全栈工程 · 边缘计算 · AI 工作流（聚焦 Cloudflare、Astro 与 AI Agent 落地实践）",
	author: "Gary",
	language: "zh-CN",
	comments: {
		provider: "giscus",
		repo: "Gary-96/cf-astro-blog",
		repoId: "R_kgDOUX_4lw",
		// 请在 GitHub Discussions 分类页获取 categoryId，格式类似 DIC_kwDOU...
		category: "",
		categoryId: "",
		mapping: "pathname",
		strict: false,
		reactionsEnabled: true,
		inputPosition: "top",
		lang: "zh-CN",
	},
};

export interface PaginationParams {
	page: number;
	limit: number;
}

export interface PaginatedResponse<T> {
	data: T[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

export type PostStatus = "draft" | "published" | "scheduled";

// ─── 默认导航链接 ────────────────────────────────────────────────────────────
// 此数组是站点导航栏的初始状态。后台「外观设置」中修改后，数据库值优先于此处。
export const DEFAULT_NAV_LINKS: SiteNavLink[] = [
	{ label: "首页", href: "/" },
	{ label: "归档", href: "/blog" },
	{ label: "搜索", href: "/search" },
	{ label: "关于", href: "/about" },
	{ label: "联系", href: "/contact" },
	{ label: "隐私政策", href: "/privacy" },
];

// ─── 首页 Hero 区域 CTA 按钮 ────────────────────────────────────────────────
export const DEFAULT_HERO_ACTIONS: SiteNavLink[] = [
	{ label: "进入归档", href: "/blog" },
	{ label: "站内搜索", href: "/search" },
];

// ─── 导航链接类型导出 ────────────────────────────────────────────────────────
export interface SiteNavLink {
	label: string;
	href: string;
}
