// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://haiwailab.lol',
  integrations: [
    mdx(),
    sitemap({
      // 排除内部出站跳板，确保 Sitemap 仅收录高价值生产内容
      filter: (page) => !page.includes('/go/'),
    }),
  ],
  server: {
    // 开发服务器端口：优先读环境变量 PORT（便于自动分配端口）
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});
