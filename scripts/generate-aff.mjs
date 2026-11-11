import fs from 'fs';
import path from 'path';

const parsed = JSON.parse(fs.readFileSync('scripts/parsed-42.json', 'utf8'));

// 1. Build AFFILIATE_TARGETS
const affTargets = {};
for (const b of parsed) {
  if (b.affUrl) {
    affTargets[b.id] = b.affUrl;
  } else {
    affTargets[b.id] = `https://${b.id}.com/`;
  }
}
// Keep kuaili
if (!affTargets['kuaili']) {
  affTargets['kuaili'] = 'https://kuailiyun.com/';
}

const affTargetsContent = `/**
 * 外部服务目标跳转映射表（Centralized Jump Targets）。
 * 
 * 作用：
 * 1. 彻底与站点公共 HTML 和 SEO 页面物理隔离，杜绝外部第三方推广参数与分佣暗桩裸露在网页源码中。
 * 2. 所有对外出站链接统一由 /go/[id]/ 内部跳板承接，并在 robots.txt 中物理 Disallow。
 * 3. 站长后续可在此处随时配置自己的真实独立落地页或专属渠道链接。
 */

export const AFFILIATE_TARGETS: Record<string, string> = ${JSON.stringify(affTargets, null, 2)};
`;

fs.writeFileSync('src/data/affiliate-targets.ts', affTargetsContent, 'utf8');
console.log('Updated src/data/affiliate-targets.ts with', Object.keys(affTargets).length, 'targets.');
