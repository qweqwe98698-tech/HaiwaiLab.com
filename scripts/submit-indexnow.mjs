#!/usr/bin/env node
/**
 * 向 IndexNow（Bing / Yandex 等支持的搜索引擎）提交全站 URL，加快新内容和已更新页面被收录/重新抓取的速度。
 *
 * 使用方式：
 *   npm run build        # 先构建，生成 dist/sitemap-*.xml
 *   npm run indexnow      # 解析 sitemap，把所有 URL 提交给 IndexNow
 *
 * 前提：public/<KEY>.txt 必须已经随本次构建部署到线上（https://haiwailab.com/<KEY>.txt 可正常访问），
 * 否则 IndexNow 会因为验证不到 key 文件而拒绝本次提交。
 */

import { readFileSync, existsSync } from 'node:fs';

const SITE_URL = 'https://haiwailab.com';
const INDEXNOW_KEY = '05cabdfce6ee54de7eff8d24d121ad41';
const SITEMAP_INDEX = 'dist/sitemap-index.xml';

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  if (!existsSync(SITEMAP_INDEX)) {
    console.error(`找不到 ${SITEMAP_INDEX}，请先运行 npm run build`);
    process.exit(1);
  }

  const indexXml = readFileSync(SITEMAP_INDEX, 'utf8');
  const childSitemaps = extractLocs(indexXml);

  let urls = [];
  if (childSitemaps.length > 0) {
    // sitemap-index.xml 指向若干子 sitemap（如 sitemap-0.xml），需要本地文件路径而非线上 URL
    for (const loc of childSitemaps) {
      const localPath = 'dist/' + loc.split('/').pop();
      if (existsSync(localPath)) {
        urls.push(...extractLocs(readFileSync(localPath, 'utf8')));
      }
    }
  } else {
    urls = childSitemaps;
  }

  if (urls.length === 0) {
    console.error('sitemap 中没有解析到任何 URL，请检查构建是否成功。');
    process.exit(1);
  }

  console.log(`准备向 IndexNow 提交 ${urls.length} 个 URL...`);

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });

  console.log(`IndexNow 响应状态：${res.status} ${res.statusText}`);
  if (res.status >= 200 && res.status < 300) {
    console.log('提交成功。');
  } else {
    const body = await res.text().catch(() => '');
    console.error('提交未成功，请检查 key 文件是否已随部署上线，或稍后重试。');
    if (body) console.error(body);
    process.exit(1);
  }
}

main();
