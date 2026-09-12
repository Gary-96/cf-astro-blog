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
	description: "全栈工程 · 边缘计算 · AI 工作流（聚焦 Cloudflare、Astro 与 AI Agent 落地实践）",
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
