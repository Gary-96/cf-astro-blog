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
	name: "My Blog",
	url: "https://gnnis.com",
	description: "记录技术实践与工程思考。",
	author: "Author",
	language: "zh-CN",
	comments: {
		provider: "giscus",
		repo: "Gary-96/cf-astro-blog",
		repoId: "R_kgDOUX_4lw",
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
