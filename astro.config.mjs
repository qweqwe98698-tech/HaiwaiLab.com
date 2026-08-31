// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://haiwailab.com',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/cheap-airport': '/reviews/best/cheap/',
    '/airport-recommendation': '/reviews/best/',
    '/stable-airport': '/reviews/best/stable/',
    '/iepl-airport': '/reviews/best/iepl/',
    '/accelerator-airport': '/guide/what-is-jichang/',
    '/chatgpt-airport': '/reviews/best/chatgpt/',
    '/chatgpt-register-without-overseas-phone': '/ai/chatgpt-register/',
    '/1-yuan-clash-airport': '/guide/1-yuan-clash-airport/',
    '/netflix-buffering': '/apps/netflix-buffering/',
    '/youtube-guide': '/apps/youtube-guide/',
    '/youtube-loading-troubleshooting': '/apps/youtube-not-working/',
    '/chatgpt-guide': '/ai/chatgpt-guide/',
    '/chatgpt-unsupported-country': '/ai/chatgpt-unsupported-country/',
    '/claude-guide': '/ai/claude-guide/',
    '/gemini-guide': '/ai/gemini-guide/',
    '/twitter-guide': '/apps/twitter-guide/',
    '/google-account-register': '/accounts/google-account/',
    '/google-phone-verification': '/accounts/google-phone-verification/',
    '/us-apple-id-guide': '/accounts/us-apple-id/',
    '/us-apple-id-without-us-phone': '/accounts/us-apple-id-without-us-phone/',
    '/chatgpt-register': '/ai/chatgpt-register/',
    '/claude-register': '/ai/claude-guide/',
    '/gemini-register': '/ai/gemini-guide/',
    '/gemini-unsupported-country': '/ai/gemini-unsupported-country/',
    '/telegram-guide': '/apps/telegram-guide/',
    '/telegram-code-troubleshooting': '/apps/telegram-not-working/',
    '/tiktok-guide': '/apps/tiktok-guide/',
    '/tiktok-not-working': '/apps/tiktok-not-working/',
  },
  server: {
    // 开发服务器端口：优先读环境变量 PORT（便于自动分配端口）
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});
