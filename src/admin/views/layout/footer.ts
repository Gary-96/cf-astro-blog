/**
 * 管理后台底部渲染模块
 * 目前后台无独立底部区域，此模块预留扩展点。
 */

export function renderFooter(): string {
	const year = new Date().getFullYear();
	return `<footer class="admin-footer"><p class="admin-footer-text">© ${year} Gnnis Lab CMS</p></footer>`;
}
