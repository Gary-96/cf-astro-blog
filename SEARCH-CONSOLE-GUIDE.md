# Google Search Console 提交指南

## 步骤 1：添加属性
1. 访问 https://search.google.com/search-console
2. 点击「添加属性」
3. 选择「网址前缀」（输入 `https://gnnis.com/`）

## 步骤 2：验证所有权
选择以下任一方式：
- HTML 标签验证（推荐）：复制 `<meta>` 标签添加到 `<head>`
- HTML 文件上传：下载验证文件上传到网站根目录
- DNS 记录验证：添加 TXT 记录到 Cloudflare DNS

## 步骤 3：提交 Sitemap
1. 左侧菜单 → Sitemaps
2. 输入 `sitemap.xml`
3. 点击「发送」

## 步骤 4：请求索引
1. 使用 URL 检查工具
2. 输入 `https://gnnis.com/`
3. 点击「请求编入索引」

---

# 百度站长平台提交

## 步骤 1：注册账号
访问 https://ziyuan.baidu.com/ 注册并登录

## 步骤 2：添加站点
1. 点击「网站管理」→「添加网站」
2. 输入 `https://gnnis.com`
3. 选择验证方式（HTML 标签或 DNS）

## 步骤 3：提交 Sitemap
1. 左侧菜单 → 索引 → Sitemap
2. 添加 `https://gnnis.com/sitemap.xml`

## 步骤 4：主动推送（可选）
使用 API 或手动提交 URL

---

# 其他搜索引擎

## Bing Webmaster Tools
- 网址：https://www.bing.com/webmasters
- 同样需要验证所有权并提交 Sitemap

## 360 搜索
- 网址：https://so.toutiao.com/
- 中国本土搜索引擎，适合中文内容
