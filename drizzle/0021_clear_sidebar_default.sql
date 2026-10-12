-- 0021: 清除历史默认值中残留的原作者信息（Eric-Terminal）
--
-- 背景：0008 迁移在创建 `article_sidebar_name` 列时把默认值写死为 'Eric-Terminal'。
--       SQLite 不支持通过 ALTER COLUMN 修改已有列的默认值，
--       因此这里清理数据行中实际落入的旧值；schema.ts 中该列的 default 已同步改为空字符串。
UPDATE `site_appearance_settings`
SET `article_sidebar_name` = ''
WHERE `article_sidebar_name` = 'Eric-Terminal';
