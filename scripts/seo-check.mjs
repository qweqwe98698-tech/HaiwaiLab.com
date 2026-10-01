#!/usr/bin/env node
/**
 * SEO 发布安全门禁脚本 (SEO Health Check & Release Gate)
 *
 * 检查项包含：
 * 1. Build 输出存在性
 * 2. Robots.txt 安全性 (严禁全站 Disallow，必须声明 Sitemap，放行 Googlebot/Bingbot)
 * 3. Noindex 安全性 (除 404 外严禁正式页面出现 noindex)
 * 4. Canonical 检查 (必须准确指向本站对应路径，严禁全站指向首页或跨页面错乱)
 * 5. Sitemap 完整性 (必须可解析、URL 全部有效、不含 404/noindex、页面数量波动报警)
 * 6. Internal Links (严禁 href=""、href="#"，内部链接全部 200 有效)
 * 7. Core URLs (首页、总榜、场景榜、品牌库、优惠码等核心页面 200 存在)
 * 8. Schema 有效性 (application/ld+json 必须是合法 JSON 且结构正常)
 * 9. Content Duplication (Title / Description / H1 唯一性检查)
 * 10. Spam & Malicious URL Check (防被黑未知路径检查)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const snapshotFile = path.join(rootDir, '.seo-snapshot.json');
const frozenAssetsFile = path.join(rootDir, '.seo-frozen-assets.json');

const SITE_URL = 'https://haiwailab.lol';
const ALLOWED_NOINDEX_PAGES = new Set(['404.html']);

const CORE_URLS = [
  '/',
  '/reviews/best/',
  '/reviews/best/chatgpt/',
  '/reviews/best/streaming/',
  '/reviews/best/cheap/',
  '/reviews/best/iepl/',
  '/reviews/best/stable/',
  '/reviews/best/clash/',
  '/reviews/best/shadowrocket/',
  '/reviews/best/v2rayn/',
  '/reviews/best/flexible/',
  '/brands/',
  '/reviews/',
  '/deals/',
  '/ai/',
  '/apps/',
  '/accounts/',
  '/network/',
  '/guide/',
  '/guide/getting-started/',
];

const SUSPICIOUS_PATTERNS = [
  /\/casino\//i,
  /\/bet\//i,
  /\/xxx\//i,
  /\/porn\//i,
  /\/download-[a-z0-9]{6,}/i,
  /\/[0-9]{6,}\//i,
];

// Helper to recursively collect all html files
function getHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getHtmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

async function runCheck() {
  console.log('====================================');
  console.log('       SEO HEALTH CHECK RUNNING     ');
  console.log('====================================\n');

  const errors = [];
  const warnings = [];

  const checkStatus = {
    build: 'FAIL',
    robots: 'FAIL',
    noindex: 'FAIL',
    canonical: 'FAIL',
    sitemap: 'FAIL',
    internalLinks: 'FAIL',
    coreUrls: 'FAIL',
    frozenAssets: 'FAIL',
    schema: 'FAIL',
    duplicateTitles: 'FAIL',
    pageCount: 'FAIL',
  };

  // 1. Build output check
  if (!fs.existsSync(distDir)) {
    errors.push({
      item: 'Build',
      file: 'dist/',
      reason: 'dist 目录不存在，请先执行 npm run build。',
      suggestion: '运行 npm run build 生成静态文件。',
    });
  } else {
    checkStatus.build = 'PASS';
  }

  const allHtmlFiles = getHtmlFiles(distDir);
  const jumpGatewayFiles = new Set();

  for (const file of allHtmlFiles) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    if (rel.startsWith('go/') || rel.includes('/go/') || /http-equiv=["']refresh["']/i.test(fs.readFileSync(file, 'utf8'))) {
      jumpGatewayFiles.add(file);
      ALLOWED_NOINDEX_PAGES.add(rel);
    }
  }

  // Filter out jump gateway stubs from normal content and canonical audit
  const htmlFiles = allHtmlFiles.filter((f) => !jumpGatewayFiles.has(f));
  const totalHtmlCount = allHtmlFiles.length;

  if (totalHtmlCount === 0) {
    errors.push({
      item: 'Build',
      file: 'dist/',
      reason: 'dist 目录下没有生成任何 HTML 文件。',
      suggestion: '检查 Astro 构建日志并排查 build 错误。',
    });
  }

  // 2. Robots.txt check
  const robotsPath = path.join(distDir, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    errors.push({
      item: 'Robots',
      file: 'dist/robots.txt',
      reason: '未找到 robots.txt 文件。',
      suggestion: '在 public/robots.txt 中配置允许搜索引擎爬取并指定 Sitemap。',
    });
  } else {
    const robotsTxt = fs.readFileSync(robotsPath, 'utf8');
    if (/User-agent:\s*\*\s+Disallow:\s*\/\s*($|\n)/i.test(robotsTxt)) {
      errors.push({
        item: 'Robots',
        file: 'dist/robots.txt',
        reason: 'robots.txt 出现了全站禁止爬取 (User-agent: * Disallow: /)，会导致全站掉索引！',
        suggestion: '修改 public/robots.txt 改为 Allow: /。',
      });
    } else if (!robotsTxt.includes('sitemap') && !robotsTxt.includes('Sitemap')) {
      warnings.push({
        item: 'Robots',
        file: 'dist/robots.txt',
        reason: 'robots.txt 中未声明 Sitemap 链接。',
        suggestion: '在 robots.txt 中添加 Sitemap: https://haiwailab.com/sitemap-index.xml。',
      });
    } else {
      checkStatus.robots = 'PASS';
    }
  }

  // Build local route map
  const routeToLocalFile = new Map();
  for (const file of allHtmlFiles) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    if (rel === 'index.html') {
      routeToLocalFile.set('/', rel);
    } else if (rel.endsWith('/index.html')) {
      const r = '/' + rel.replace(/\/index\.html$/, '/');
      routeToLocalFile.set(r, rel);
      routeToLocalFile.set(r.slice(0, -1), rel); // Also allow without trailing slash
    } else if (rel.endsWith('.html')) {
      routeToLocalFile.set('/' + rel, rel);
      routeToLocalFile.set('/' + rel.replace(/\.html$/, ''), rel);
    }
  }

  // 3. Noindex check
  let noindexIssues = 0;
  const noindexPages = [];
  for (const file of htmlFiles) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const hasNoindex =
      /name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(content) ||
      /name=["']googlebot["'][^>]*content=["'][^"']*noindex/i.test(content) ||
      /name=["']bingbot["'][^>]*content=["'][^"']*noindex/i.test(content);

    if (hasNoindex) {
      noindexPages.push(rel);
      if (!ALLOWED_NOINDEX_PAGES.has(rel)) {
        noindexIssues++;
        errors.push({
          item: 'Noindex',
          file: rel,
          reason: `正式 SEO 页面意外包含了 noindex 标签！`,
          suggestion: '移除该页面的 noindex meta，确保正常搜索引擎可以索引。',
        });
      }
    }
  }
  if (noindexIssues === 0) {
    checkStatus.noindex = 'PASS';
  }

  // 4. Canonical check
  let canonicalIssues = 0;
  const canonicalMap = new Map();
  for (const file of htmlFiles) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const cm = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    if (!cm) {
      canonicalIssues++;
      errors.push({
        item: 'Canonical',
        file: rel,
        reason: '页面缺少 canonical 标签。',
        suggestion: '在 BaseLayout 中保证所有页面正确输出 canonical 链接。',
      });
      continue;
    }
    const canon = cm[1].trim();
    if (!canon.startsWith(SITE_URL)) {
      canonicalIssues++;
      errors.push({
        item: 'Canonical',
        file: rel,
        reason: `Canonical 域名非正式域名或协议不正确: ${canon}`,
        suggestion: `确保 canonical 使用正式线上域名 ${SITE_URL}。`,
      });
      continue;
    }

    // Check duplicate canonical
    if (canonicalMap.has(canon)) {
      canonicalIssues++;
      errors.push({
        item: 'Canonical',
        file: rel,
        reason: `与 ${canonicalMap.get(canon)} 存在相同的 canonical 地址: ${canon}`,
        suggestion: '检查路由与 canonical 生成逻辑，防止不同页面指向相同 canonical。',
      });
    } else {
      canonicalMap.set(canon, rel);
    }

    // Check if canonical matches current file path
    const canonUrl = new URL(canon);
    const expectedRoute = canonUrl.pathname;
    if (rel !== '404.html') {
      const mapped = routeToLocalFile.get(expectedRoute);
      if (mapped !== rel) {
        canonicalIssues++;
        errors.push({
          item: 'Canonical',
          file: rel,
          reason: `Canonical 地址 (${expectedRoute}) 与文件自身对应路由不一致 (匹配至 ${mapped})。`,
          suggestion: '检查 BaseLayout 的 canonical 计算，严禁跨页面或全站指向首页。',
        });
      }
    }
  }
  if (canonicalIssues === 0) {
    checkStatus.canonical = 'PASS';
  }

  // 5. Sitemap check
  const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
  const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
  let sitemapUrls = [];

  if (!fs.existsSync(sitemapIndexPath) && !fs.existsSync(sitemap0Path)) {
    errors.push({
      item: 'Sitemap',
      file: 'dist/sitemap*.xml',
      reason: '未找到 Sitemap 文件。',
      suggestion: '确保 @astrojs/sitemap 插件已启用并在构建时成功生成。',
    });
  } else {
    try {
      if (fs.existsSync(sitemapIndexPath)) {
        const indexXml = fs.readFileSync(sitemapIndexPath, 'utf8');
        const childSitemaps = extractLocs(indexXml);
        for (const child of childSitemaps) {
          const localChild = path.join(distDir, child.split('/').pop());
          if (fs.existsSync(localChild)) {
            sitemapUrls.push(...extractLocs(fs.readFileSync(localChild, 'utf8')));
          }
        }
      } else if (fs.existsSync(sitemap0Path)) {
        sitemapUrls = extractLocs(fs.readFileSync(sitemap0Path, 'utf8'));
      }

      // Check sitemap urls
      let sitemapErrors = 0;
      const seenSitemap = new Set();
      for (const u of sitemapUrls) {
        if (!u.startsWith(SITE_URL)) {
          sitemapErrors++;
          errors.push({
            item: 'Sitemap',
            file: 'sitemap',
            reason: `Sitemap 包含非正式域名的 URL: ${u}`,
            suggestion: '检查 astro.config.mjs 中的 site 配置。',
          });
        }
        if (seenSitemap.has(u)) {
          sitemapErrors++;
          errors.push({
            item: 'Sitemap',
            file: 'sitemap',
            reason: `Sitemap 出现重复 URL: ${u}`,
            suggestion: '排查重复路由生成。',
          });
        }
        seenSitemap.add(u);

        const urlObj = new URL(u);
        const mapped = routeToLocalFile.get(urlObj.pathname);
        if (!mapped) {
          sitemapErrors++;
          errors.push({
            item: 'Sitemap',
            file: 'sitemap',
            reason: `Sitemap 中包含在 dist 中不存在的死链接: ${u}`,
            suggestion: '确保 Sitemap 仅收录有效页面。',
          });
        } else if (ALLOWED_NOINDEX_PAGES.has(mapped)) {
          sitemapErrors++;
          errors.push({
            item: 'Sitemap',
            file: 'sitemap',
            reason: `Sitemap 中包含了 noindex 页面: ${u} (指向 ${mapped})`,
            suggestion: '将 404 或 noindex 页面从 sitemap 中排除。',
          });
        }
      }

      if (sitemapErrors === 0 && sitemapUrls.length > 0) {
        checkStatus.sitemap = 'PASS';
      }
    } catch (e) {
      errors.push({
        item: 'Sitemap',
        file: 'sitemap.xml',
        reason: `解析 Sitemap 失败: ${e.message}`,
        suggestion: '检查 sitemap xml 是否合法。',
      });
    }
  }

  // 6. Page count & anomaly check
  let lastSnapshot = null;
  if (fs.existsSync(snapshotFile)) {
    try {
      lastSnapshot = JSON.parse(fs.readFileSync(snapshotFile, 'utf8'));
    } catch (e) {}
  }

  const currentCount = sitemapUrls.length;
  if (lastSnapshot && lastSnapshot.sitemapCount) {
    const prev = lastSnapshot.sitemapCount;
    const diff = currentCount - prev;
    const dropRate = (prev - currentCount) / prev;
    const growRate = (currentCount - prev) / prev;

    if (dropRate >= 0.15) {
      errors.push({
        item: 'Page Count',
        file: 'sitemap',
        reason: `页面数量异常暴跌：从 ${prev} 降至 ${currentCount} (下降 ${(dropRate * 100).toFixed(1)}%)！`,
        suggestion: '检查是否有大量页面构建丢失或路由规则失效。',
      });
    } else if (growRate >= 1.0 && currentCount > 100) {
      warnings.push({
        item: 'Page Count',
        file: 'sitemap',
        reason: `页面数量异常暴增：从 ${prev} 增至 ${currentCount} (增长 ${(growRate * 100).toFixed(1)}%)！`,
        suggestion: '检查是否意外生成了大量相似或垃圾页面。',
      });
      checkStatus.pageCount = 'PASS';
    } else {
      checkStatus.pageCount = 'PASS';
    }
  } else {
    // Initial snapshot
    checkStatus.pageCount = 'PASS';
  }

  // 7. Internal Links check
  let linkIssues = 0;
  for (const file of htmlFiles) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const linkRegex = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>/gi;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      const href = match[1].trim();
      if (href === '') {
        linkIssues++;
        errors.push({
          item: 'Internal Links',
          file: rel,
          reason: '发现空链接 href=""',
          suggestion: '补充链接具体目标或使用 button 标签。',
        });
      } else if (href === '#') {
        linkIssues++;
        warnings.push({
          item: 'Internal Links',
          file: rel,
          reason: '发现无效锚点 href="#"',
          suggestion: '指定具体锚点 ID 或使用 button。',
        });
      } else if (href.startsWith('/') && !href.startsWith('//')) {
        const cleanPath = href.split('?')[0].split('#')[0];
        if (cleanPath && !routeToLocalFile.has(cleanPath) && !fs.existsSync(path.join(distDir, cleanPath))) {
          linkIssues++;
          errors.push({
            item: 'Internal Links',
            file: rel,
            reason: `内部死链: ${href} (找不到目标页面)`,
            suggestion: '修正内部链接目标路径，避免 404 死链传递权重损失。',
          });
        }
      }
    }
  }
  if (linkIssues === 0) {
    checkStatus.internalLinks = 'PASS';
  }

  // 8. Core URLs check
  let coreUrlIssues = 0;
  for (const core of CORE_URLS) {
    if (!routeToLocalFile.has(core)) {
      coreUrlIssues++;
      errors.push({
        item: 'Core URLs',
        file: core,
        reason: `核心 SEO 页面缺失或未编译生成: ${core}`,
        suggestion: '检查核心页面源代码与路由生成。',
      });
    }
  }
  if (coreUrlIssues === 0) {
    checkStatus.coreUrls = 'PASS';
  }

  // 8.1 Frozen Assets Protection Check (生产 SEO 资产冻结规则)
  let frozenIssues = 0;
  if (fs.existsSync(frozenAssetsFile)) {
    try {
      const frozenData = JSON.parse(fs.readFileSync(frozenAssetsFile, 'utf8'));
      const allFrozenUrls = [];
      if (frozenData.assets) {
        for (const cat of Object.keys(frozenData.assets)) {
          allFrozenUrls.push(...frozenData.assets[cat]);
        }
      }
      for (const frozenUrl of allFrozenUrls) {
        if (!routeToLocalFile.has(frozenUrl)) {
          frozenIssues++;
          errors.push({
            item: 'Frozen Assets',
            file: frozenUrl,
            reason: `[SEO_ASSET_VIOLATION] 生产已冻结的现有高价值 SEO 资产丢失或被误删: ${frozenUrl}`,
            suggestion: '【最高优先级规则】现有生产 SEO 资产必须优先保护，严禁删除、重命名或迁移已有 URL！请恢复该页面。',
          });
        }
      }
    } catch (e) {
      warnings.push({
        item: 'Frozen Assets',
        file: '.seo-frozen-assets.json',
        reason: `读取生产资产冻结清单失败: ${e.message}`,
        suggestion: '检查 .seo-frozen-assets.json 格式。',
      });
    }
  }
  if (frozenIssues === 0) {
    checkStatus.frozenAssets = 'PASS';
  }

  // 9. Schema check
  let schemaIssues = 0;
  for (const file of htmlFiles) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
    let sm;
    while ((sm = schemaRegex.exec(content)) !== null) {
      try {
        const parsed = JSON.parse(sm[1]);
        if (!parsed['@context']) {
          schemaIssues++;
          warnings.push({
            item: 'Schema',
            file: rel,
            reason: '结构化数据缺少 @context 声明',
            suggestion: '确保 JSON-LD 包含 @context: "https://schema.org"。',
          });
        }
      } catch (e) {
        schemaIssues++;
        errors.push({
          item: 'Schema',
          file: rel,
          reason: `JSON-LD 语法解析错误: ${e.message}`,
          suggestion: '修复损坏的 JSON-LD 数据输出。',
        });
      }
    }
  }
  if (schemaIssues === 0) {
    checkStatus.schema = 'PASS';
  }

  // 10. Duplicate Title, Description, H1 check
  const titles = new Map();
  const descs = new Map();
  const h1s = new Map();
  let dupIssues = 0;

  for (const file of htmlFiles) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');

    // Title
    const tm = content.match(/<title>([^<]*)<\/title>/i);
    const title = tm ? tm[1].trim() : '';
    if (!title && rel !== '404.html') {
      dupIssues++;
      errors.push({ item: 'Duplicate Titles', file: rel, reason: '缺少 title 标签', suggestion: '补充 title' });
    } else if (titles.has(title)) {
      dupIssues++;
      errors.push({
        item: 'Duplicate Titles',
        file: rel,
        reason: `与 ${titles.get(title)} 拥有完全相同的 Title: "${title}"`,
        suggestion: '为每个页面撰写独特的 Title，明确独立搜索意图。',
      });
    } else if (title) {
      titles.set(title, rel);
    }

    // Description
    const dm = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    const desc = dm ? dm[1].trim() : '';
    if (!desc && rel !== '404.html') {
      dupIssues++;
      warnings.push({ item: 'Duplicate Titles', file: rel, reason: '缺少 description 标签', suggestion: '补充 description' });
    } else if (descs.has(desc)) {
      dupIssues++;
      errors.push({
        item: 'Duplicate Titles',
        file: rel,
        reason: `与 ${descs.get(desc)} 拥有完全相同的 Description`,
        suggestion: '每个页面必须具备独立的信息增量与 meta 描述。',
      });
    } else if (desc) {
      descs.set(desc, rel);
    }

    // H1
    const hm = content.match(/<h1[^>]*>([^<]*)<\/h1>/i);
    const h1 = hm ? hm[1].trim() : '';
    if (h1 && h1s.has(h1) && rel !== '404.html') {
      dupIssues++;
      errors.push({
        item: 'Duplicate Titles',
        file: rel,
        reason: `与 ${h1s.get(h1)} 拥有完全相同的 H1: "${h1}"`,
        suggestion: '保持主标题 H1 的独立性。',
      });
    } else if (h1) {
      h1s.set(h1, rel);
    }

    // Suspicious pattern
    for (const pat of SUSPICIOUS_PATTERNS) {
      if (pat.test(rel)) {
        errors.push({
          item: 'Build',
          file: rel,
          reason: `发现可疑的外部注水/黑产垃圾页面路径: ${rel}`,
          suggestion: '立即检查代码仓库与构建源文件，停止发布。',
        });
      }
    }
  }

  if (dupIssues === 0) {
    checkStatus.duplicateTitles = 'PASS';
  }

  // Print Summary
  console.log('------------------------------------');
  console.log('        SEO HEALTH CHECK REPORT     ');
  console.log('------------------------------------');
  console.log(`Build:            ${checkStatus.build}`);
  console.log(`Robots:           ${checkStatus.robots}`);
  console.log(`Noindex:          ${checkStatus.noindex}`);
  console.log(`Canonical:        ${checkStatus.canonical}`);
  console.log(`Sitemap:          ${checkStatus.sitemap}`);
  console.log(`Internal Links:   ${checkStatus.internalLinks}`);
  console.log(`Core URLs:        ${checkStatus.coreUrls}`);
  console.log(`Frozen Assets:    ${checkStatus.frozenAssets}`);
  console.log(`Schema:           ${checkStatus.schema}`);
  console.log(`Duplicate Titles: ${checkStatus.duplicateTitles}`);
  console.log(`Page Count:       ${checkStatus.pageCount}`);
  console.log('------------------------------------');
  console.log(`总页面数 (HTML):       ${totalHtmlCount}`);
  console.log(`Sitemap URL 数量:     ${sitemapUrls.length}`);
  console.log(`Noindex 页面数量:     ${noindexPages.length} (${noindexPages.join(', ')})`);
  console.log(`发现错误数:           ${errors.length}`);
  console.log(`发现警告数:           ${warnings.length}`);
  console.log('------------------------------------');

  if (warnings.length > 0) {
    console.log('\n⚠️  警告列表 (Warnings):');
    warnings.forEach((w, i) => {
      console.log(`[${i + 1}] [${w.item}] 文件: ${w.file} -> 原因: ${w.reason}`);
    });
  }

  if (errors.length > 0) {
    console.log('\n❌ 错误列表 (Errors - 门禁阻断项):');
    errors.forEach((e, i) => {
      console.log(`[${i + 1}] [${e.item}]`);
      console.log(`    问题文件: ${e.file}`);
      console.log(`    问题原因: ${e.reason}`);
      console.log(`    修复建议: ${e.suggestion}`);
    });
    console.log('\n====================================');
    console.log('RELEASE_DECISION: BLOCKED');
    console.log('====================================\n');
    process.exit(1);
  } else {
    // Update snapshot
    fs.writeFileSync(
      snapshotFile,
      JSON.stringify(
        {
          lastCheckTime: new Date().toISOString(),
          sitemapCount: sitemapUrls.length,
          htmlCount: totalHtmlCount,
          canonicals: [...canonicalMap.keys()],
        },
        null,
        2
      )
    );

    console.log('\n====================================');
    console.log('RELEASE_DECISION: READY');
    console.log('====================================\n');
    process.exit(0);
  }
}

runCheck().catch((err) => {
  console.error('SEO Check 脚本异常:', err);
  process.exit(1);
});
