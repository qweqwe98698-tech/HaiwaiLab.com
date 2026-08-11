# HaiwaiLab.com

内容引流型转化站：AI 工具 / 海外应用 / 账号教程 / 网络问题 → 机场评测 → 注册转化。
全站架构见 [docs/site-architecture.md](docs/site-architecture.md)。

## 技术栈

Astro 7 静态站 + Markdown 内容集合 + 零前端框架依赖（仅优惠码复制一处内联脚本）。

## 常用命令

```bash
npm run dev      # 本地开发 http://localhost:4321
npm run build    # 构建到 dist/（可部署到任意静态托管）
npm run preview  # 本地预览构建产物
```

## 目录结构

```
src/
├── data/
│   ├── site.ts        # 站点信息、栏目定义、导航
│   ├── boards.ts      # 榜单定义（文章 cta 字段引用这里的 key）
│   └── airports.ts    # ★ 机场品牌数据（affiliate 链接/优惠码/评分/价格全在这）
├── content/           # Markdown 内容（按栏目分目录）
│   ├── ai/ apps/ accounts/ network/ guide/   # 文章栏目
│   └── reviews/       # 评测：best*.md=榜单, <brand>.md=品牌评测, vs/=对比
├── components/        # CTA 卡、机场卡片、评分条、优惠码框、侧边栏 TOP3…
├── layouts/           # BaseLayout（SEO/JSON-LD）、ArticleLayout（文章页）
└── pages/             # 路由（栏目页/文章页/评测页/优惠码页均自动生成）
```

## 日常运营怎么改

### 换 affiliate 链接 / 优惠码 / 价格 / 排名

只改 `src/data/airports.ts` 一个文件。榜单页、侧边栏 TOP3、优惠码页、评测页全部自动同步。
`boards` 数组中品牌的相对顺序 = 榜单排名。

### 新增一篇文章

在对应栏目目录下新建 `.md` 文件，frontmatter 模板：

```yaml
---
title: 文章标题（含年份与核心关键词）
description: 150 字内的 SEO 描述
pubDate: 2026-08-11
updatedDate: 2026-08-11   # 可选，更新时填写
tags: ['标签']
cta: chatgpt   # 文末 CTA 指向的榜单：best | chatgpt | streaming | cheap
draft: false
---
```

**内链铁律**：每篇文章文中必须有 1 处上下文内链（指向 guide 或榜单），
文末 CTA 由 `cta` 字段自动生成——没有下一跳的内容不发布。

### 新增一个机场品牌

1. 在 `src/data/airports.ts` 的 `AIRPORTS` 中加一条（含 `boards` 归属）
2. 在 `src/content/reviews/` 下新建 `<品牌id>.md`，frontmatter 用
   `template: review` + `brand: <品牌id>`（参考 `alpha.md`）

### 新增一个榜单

1. `src/data/boards.ts` 加 key（如 `gaming`）
2. `src/content.config.ts` 中 `cta` 枚举加同名值
3. `src/content/reviews/best/` 下建 `gaming.md`（`template: ranking` + `board: gaming`）

## 上线前 TODO

- [ ] 将 `src/data/airports.ts` 的占位品牌替换为真实品牌与 affiliate 链接
- [ ] 补全带 `TODO` 标记的内容（全局搜索 `TODO`）
- [ ] 确认域名后检查 `astro.config.mjs` 的 `site` 字段
- [ ] 部署到静态托管（Cloudflare Pages / Vercel / Netlify 均可）
