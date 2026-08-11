import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 文章类栏目（TOFU/MOFU）通用 schema。
 * `cta` 字段强制每篇文章声明文末 CTA 指向的榜单 —— 内链铁律：
 * 没有下一跳的内容不发布。
 */
const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  /** 文末 CTA 指向的榜单（对应 src/data/boards.ts 的 key） */
  cta: z
    .enum([
      'best',
      'chatgpt',
      'streaming',
      'cheap',
      'iepl',
      'stable',
      'clash',
      'shadowrocket',
      'v2rayn',
      'flexible',
    ])
    .default('best'),
  /** SEO 关键词（用于 meta keywords，Bing 参考） */
  keywords: z.array(z.string()).default([]),
  /**
   * 页面 FAQ（GEO 优化核心）：
   * 渲染为页面 FAQ 区块 + FAQPage 结构化数据，便于搜索引擎与 AI 搜索直接引用。
   */
  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  draft: z.boolean().default(false),
});

function articleCollection(base: string) {
  return defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base }),
    schema: articleSchema,
  });
}

/**
 * 机场评测集合（BOFU）。三种模板：
 * - ranking：榜单页（board 字段对应 boards.ts，品牌数据来自 airports.ts）
 * - review：单品牌评测（brand 字段对应 airports.ts 的品牌 id）
 * - vs：对比评测
 */
const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    template: z.enum(['ranking', 'review', 'vs']),
    /** template=ranking 时必填：榜单 id */
    board: z.string().optional(),
    /** template=review 时必填：品牌 id */
    brand: z.string().optional(),
    /** SEO 关键词（用于 meta keywords，Bing 参考） */
    keywords: z.array(z.string()).default([]),
    /**
     * 页面 FAQ（GEO 优化核心）：
     * 渲染为页面 FAQ 区块 + FAQPage 结构化数据，便于搜索引擎与 AI 搜索直接引用。
     */
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  ai: articleCollection('./src/content/ai'),
  apps: articleCollection('./src/content/apps'),
  accounts: articleCollection('./src/content/accounts'),
  network: articleCollection('./src/content/network'),
  guide: articleCollection('./src/content/guide'),
  reviews,
};
