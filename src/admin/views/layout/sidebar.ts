/**
 * 管理后台侧边栏渲染模块
 * 负责渲染左侧导航、品牌标识和底部工具栏。
 */
import { escapeAttribute } from "@/lib/security";
import { ADMIN_CONFIG } from "../../config";
import { NAV_ICONS, renderIcon } from "./icons";

type AdminNavKey = keyof typeof NAV_ICONS;

interface SidebarOptions {
	currentKey: AdminNavKey;
	username?: string;
}

const NAV_ITEMS: Array<{
	key: AdminNavKey;
	label: string;
	href: string;
}> = [
	{ key: "dashboard", label: "控制台", href: "/api/admin" },
	{ key: "appearance", label: "外观", href: "/api/admin/appearance" },
	{ key: "posts", label: "文章", href: "/api/admin/posts" },
	{ key: "friends", label: "友链", href: "/api/admin/friends" },
	{ key: "mentions", label: "提及", href: "/api/admin/mentions" },
	{ key: "media", label: "媒体", href: "/api/admin/media" },
	{ key: "analytics", label: "统计", href: "/api/admin/analytics" },
];

export function renderSidebar(options: SidebarOptions): string {
	const { currentKey, username } = options;

	const navLinks = NAV_ITEMS.map((item) => {
		const icon = NAV_ICONS[item.key];
		const activeClass = item.key === currentKey ? ' class="active"' : "";
		return `<a href="${escapeAttribute(item.href)}"${activeClass}>
			<span class="sidebar-nav-icon">${renderIcon(icon.path)}</span>
			<span class="sidebar-nav-label">${item.label}</span>
		</a>`;
	}).join("");

	return `
		<aside class="sidebar">
			<div class="sidebar-panel">
				<div class="sidebar-brand">
					<div class="sidebar-brand-mark">CMS</div>
					<div class="sidebar-brand-info">
						<span class="sidebar-brand-title">站点管理</span>
						<span class="sidebar-brand-subtitle">Control Center</span>
					</div>
				</div>
				<nav class="sidebar-nav" aria-label="后台导航">
					${navLinks}
				</nav>
				<div class="sidebar-footer">
					<div class="admin-toolbar">
						<div class="sidebar-footer-links">
							<a href="/" target="_blank" rel="noopener noreferrer" class="btn btn-sm">查看站点</a>
						</div>
						<form method="post" action="/api/auth/logout">
							<input type="hidden" name="_csrf" value="${escapeAttribute(username || "")}" />
							<button type="submit" class="btn btn-sm">退出登录</button>
						</form>
					</div>
				</div>
			</div>
		</aside>
	`;
}
