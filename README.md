# 王赫骏 的个人网站

线上地址：https://whj666-whj169.github.io/

## 当前首页：星空封面 + Bento 卡片

- 封面适配 [sanidhyy/space-portfolio](https://github.com/sanidhyy/space-portfolio) 的双栏布局，直接复用黑洞视频和轨道 SVG，来源版本 6b5954a496028e86a7bb8a271e0385dfacc63737。
- 卡片组件适配 [Ladvace/astro-bento-portfolio](https://github.com/Ladvace/astro-bento-portfolio) 的 Card / Content，来源版本 ab56d5c972c9d7c9096825af673621aed944f6b9；移除额外框架及数据库依赖。
- 两个项目均为 MIT，完整原始许可在 licenses/。默认深色，可以切换浅色；星空封面保持深色。
- 减少动态效果偏好使用静态星点及光环；封面不可见或切到后台时暂停动画。
- 不包含访客编辑、上传或留言接口，内容仍由所有者通过 GitHub 仓库维护。
- Hero.astro 为当前封面，BentoDashboard.astro / BentoCard.astro 为首页内容；原 About / Projects / Notes 组件作为早期版本源码保留，当前首页不再使用。

## 初始开源基础

直接基于 [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) 定制，采用版本 `852d650fb0a8cf0c98f874af5a56a0a9b7d7d4b7`，保留原始 Hero、About、Projects 组件并做中文与功能适配。原作者 MIT 版权及许可保留在 LICENSE.md。

参考 Fuwari 的文章分类、文章目录与深浅主题，以及 Astrofy 的作品、博客、个人档案分区思路；没有复制后两者的代码、图片或个人资料。

## 已有功能

- 大字首页、作品列表与独立作品详情。
- Markdown 文章、文章目录、标题/摘要/标签搜索、标签筛选、空结果提示。
- 独立个人档案、开源致谢、RSS、站点地图、404 页面。
- 手机导航、深浅主题与偏好记忆。
- GitHub Actions 自动构建与发布。
- 无远程字体、广告、统计或追踪脚本。

## 更新内容

- 个人信息和作品：`src/config.ts`。
- 文章：`src/content/notes/*.md`，复制已有文章的头部格式；`draft: true` 不发布。
- 作品详情：`src/pages/projects/`。
- 个人档案：`src/pages/profile.astro`。
- 全局样式：`src/styles/global.css`。

只写真实且愿意公开的信息。学校、简历、邮箱、未完成作品和私人资料不自动补写。

## 本地使用

需要 Node.js 24 和 pnpm 11.25.0。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

安装构建脚本仅允许 esbuild 和 sharp，配置在 pnpm-workspace.yaml。
推送到 main 后，GitHub Actions 构建 dist 并发布。Pages 需选择 GitHub Actions 作为来源。

## 旧版本

从零编写的旧版已由本地 Git 标签 `backup-before-devportfolio-*` 保留。网站源码不包含本地记忆库、密钥或私人档案。
