#!/usr/bin/env node
/**
 * 向 IndexNow（Bing / Yandex 等支持的搜索引擎）提交 URL。
 *
 * 特性：
 * - 默认增量提交：对比 .indexnow-snapshot.json 记录的页面内容哈希，仅提交新增或被修改的 URL。
 * - 全量模式：通过 --all 参数强制提交全站所有 URL。
 * - 避免每次构建都机械提交全部 60 个 URL，保护搜索引擎提交信任度。
 *
 * 使用方式：
 *   npm run build        # 先构建，生成 dist/sitemap-*.xml
 *   npm run indexnow      # 仅提交新增和修改的 URL（默认）
 *   npm run indexnow -- --all  # 强制全量提交
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';

const SITE_URL = 'https://haiwailab.lol';
const INDEXNOW_KEY = '05cabdfce6ee54de7eff8d24d121ad41';
const SITEMAP_INDEX = 'dist/sitemap-index.xml';
const SNAPSHOT_PATH = '.indexnow-snapshot.json';

const forceAll = process.argv.includes('--all');

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

function getFileHash(filePath) {
  if (!existsSync(filePath)) return null;
  const content = readFileSync(filePath);
  return createHash('sha256').update(content).digest('hex');
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

  // Load previous snapshot
  let prevSnapshot = {};
  if (existsSync(SNAPSHOT_PATH) && !forceAll) {
    try {
      prevSnapshot = JSON.parse(readFileSync(SNAPSHOT_PATH, 'utf8'));
    } catch (e) {
      prevSnapshot = {};
    }
  }

  const currentSnapshot = {};
  const urlsToSubmit = [];

  for (const u of urls) {
    const urlObj = new URL(u);
    let relPath = urlObj.pathname;
    if (relPath.startsWith('/')) relPath = relPath.slice(1);

    let localHtml = join('dist', relPath, 'index.html');
    if (!existsSync(localHtml)) {
      localHtml = join('dist', relPath + '.html');
    }
    if (!existsSync(localHtml) && relPath === '') {
      localHtml = join('dist', 'index.html');
    }

    const hash = getFileHash(localHtml) || 'unknown';
    currentSnapshot[u] = hash;

    if (forceAll || !prevSnapshot[u] || prevSnapshot[u] !== hash) {
      urlsToSubmit.push(u);
    }
  }

  if (urlsToSubmit.length === 0) {
    console.log('✅ IndexNow: 没有发现新增或修改的页面，无需重复提交。');
    console.log('（如需强制全量提交，请运行: npm run indexnow -- --all）');
    return;
  }

  console.log(`准备向 IndexNow 提交 ${urlsToSubmit.length} 个 URL (模式: ${forceAll ? '全量提交' : '增量更新'})...`);
  if (urlsToSubmit.length <= 10) {
    urlsToSubmit.forEach((u) => console.log(`  + ${u}`));
  } else {
    urlsToSubmit.slice(0, 5).forEach((u) => console.log(`  + ${u}`));
    console.log(`  ...以及另外 ${urlsToSubmit.length - 5} 个 URL`);
  }

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: new URL(SITE_URL).host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urlsToSubmit,
      }),
    });

    console.log(`IndexNow 响应状态：${res.status} ${res.statusText}`);
    if (res.status >= 200 && res.status < 300) {
      console.log('提交成功。已保存当前提交快照。');
      writeFileSync(SNAPSHOT_PATH, JSON.stringify(currentSnapshot, null, 2));
    } else {
      const body = await res.text().catch(() => '');
      console.error('提交未成功，请检查 key 文件是否已随部署上线，或稍后重试。');
      if (body) console.error(body);
      process.exit(1);
    }
  } catch (err) {
    console.error('向 IndexNow 请求失败:', err.message);
    process.exit(1);
  }
}

main();
