/**
 * 管理后台图标常量
 * 所有 SVG 图标集中管理，供导航和其他组件复用。
 */

export interface NavIcon {
	key: string;
	path: string;
}

/** 导航栏图标路径数据（来自 Heroicons / Feather 风格） */
export const NAV_ICONS: Record<string, NavIcon> = {
	dashboard: {
		key: "dashboard",
		path: "M4 4h7v7H4V4zm9 0h7v5h-7V4zM4 13h7v7H4v-7zm9 3h7v4h-7v-4z",
	},
	appearance: {
		key: "appearance",
		path: "M12 3a9 9 0 1 0 9 9c0-.5-.04-1-.12-1.5a4 4 0 0 1-5.38-5.38A9 9 0 0 0 12 3zm-4.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",
	},
	posts: {
		key: "posts",
		path: "M6 3h9l3 3v15H6V3zm8 1.5V7h2.5L14 4.5zM8 10h8v1.5H8V10zm0 3.5h8V15H8v-1.5zm0 3.5h5V18H8v-1z",
	},
	friends: {
		key: "friends",
		path: "M10.5 13.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm-6.2 6.2c.5-2.7 2.8-4.7 6.2-4.7s5.7 2 6.2 4.7H4.3zM16.2 11.4l1.3-1.3 1.8 1.8 3.2-3.2 1.3 1.3-4.5 4.5-3.1-3.1z",
	},
	mentions: {
		key: "mentions",
		path: "M12 3a8 8 0 0 0-1.2 15.9V21l3.4-2.1A8 8 0 1 0 12 3zm0 3.2a3.4 3.4 0 0 1 3.4 3.4v.7c0 1.5-.9 2.7-2.1 3.2-.3.1-.6.2-.9.2h-.8c-1.9 0-3.4-1.5-3.4-3.4v-.7A3.4 3.4 0 0 1 12 6.2z",
	},
	media: {
		key: "media",
		path: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.5 10.2 3.2-4.1 2.6 3.2 2.3-2.8 4.4 5.5H5.5v-1.8zM8.2 9.2a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8z",
	},
	analytics: {
		key: "analytics",
		path: "M4 19h16v1.5H4V19zm2.2-2.2V11h2.3v5.8H6.2zm4.6 0V7h2.3v9.8h-2.3zm4.6 0V9.5H18v7.3h-2.6z",
	},
};

/** 导航项配置 */
export interface NavItem {
	key: string;
	label: string;
	href: string;
	icon: string;
}

/** 构建导航项列表 */
export function buildNavItems(): NavItem[] {
	return Object.values(NAV_ICONS).map((icon) => {
		let label = "";
		let href = "";
		switch (icon.key) {
			case "dashboard": label = "控制台"; href = "/api/admin"; break;
			case "appearance": label = "外观"; href = "/api/admin/appearance"; break;
			case "posts": label = "文章"; href = "/api/admin/posts"; break;
			case "friends": label = "友链"; href = "/api/admin/friends"; break;
			case "mentions": label = "提及"; href = "/api/admin/mentions"; break;
			case "media": label = "媒体"; href = "/api/admin/media"; break;
			case "analytics": label = "统计"; href = "/api/admin/analytics"; break;
		}
		return {
			key: icon.key,
			label,
			href,
			icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icon.path}"/></svg>`,
		};
	});
}
