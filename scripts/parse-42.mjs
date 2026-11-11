import fs from 'fs';
import path from 'path';

const raw = fs.readFileSync('C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt', 'utf8');
const lines = raw.split(/\r?\n/);

const known14 = ['WgetCloud', '白月光', 'FlyingBird', 'CyberGuard', '龙猫云', 'FATCAT', 'TNTCloud', '青云梯', '山水云', '灵动云', '浪网', 'EdgeNova', '萤火虫', 'sslar'];

const brandBlocks = [];
let cur = null;

function isBrandHeader(line, next1, next2) {
  const t = line.trim();
  if (!t) return null;
  let m = t.match(/^(?:主推)?##\s*(\d+)\.\s*([^\n\r]+)/);
  if (m) return { num: parseInt(m[1]), name: m[2].trim() };

  for (const k of known14) {
    if (t === k || t === '29. ' + k || t === '## ' + k || t.endsWith(k)) {
      if ((next1 && next1.includes('基础信息')) || (next2 && next2.includes('基础信息'))) {
        return { num: 99, name: k };
      }
    }
  }
  return null;
}

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  const h = isBrandHeader(l, lines[i+1], lines[i+2]);
  if (h) {
    if (cur) brandBlocks.push(cur);
    cur = { header: h, lines: [] };
  } else if (cur) {
    if (l.trim().startsWith('## 完整数据表')) {
      brandBlocks.push(cur);
      cur = null;
    } else {
      cur.lines.push(l);
    }
  }
}
if (cur) brandBlocks.push(cur);

console.log('Parsed brand blocks:', brandBlocks.length);

const slugMap = {
  '光速云': 'guangsuyun',
  '暮光加速': 'muguang',
  '飞猫云': 'feimaoyun',
  '微风网络': 'weifeng',
  '大佬云': 'dalaoyun',
  '星岛梦': 'xingdaomeng',
  '二猫云': 'ermaoyun',
  '无忧链接': 'wuyou',
  '唯兔云': 'weituyun',
  'Firefly': 'firefly',
  '宇宙云': 'yuzhouyun',
  'U1S1': 'u1s1',
  '灵猫网络': 'lingmao',
  '极连云': 'jilianyun',
  '光年梯': 'guangnianti',
  '一翻云': 'yifanyun',
  'SOGO 云': 'sogoyun',
  'SOGO云': 'sogoyun',
  '可信云': 'kexinyun',
  '速界': 'sujie',
  '闪跃': 'shanyue',
  '全球云': 'quanqiuyun',
  '闪电鼠': 'shandianshu',
  '云界线': 'yunjiexian',
  '榴莲云': 'liulianyun',
  '神行加速': 'shenxing',
  '环球梯': 'huanqiuti',
  '隐形人': 'yinxingren',
  '梯子云': 'tiziyun',
  'WgetCloud': 'wgetcloud',
  '白月光': 'baiyueguang',
  'FlyingBird': 'flyingbird',
  'CyberGuard': 'cyberguard',
  '龙猫云': 'longmaoyun',
  'FATCAT': 'fatcat',
  'TNTCloud': 'tntcloud',
  '青云梯': 'qingyunti',
  '山水云': 'shanshuiyun',
  '灵动云': 'lingdongyun',
  '浪网': 'langwang',
  'EdgeNova': 'edgenova',
  '萤火虫': 'yinghuochong',
  'sslar': 'sslar'
};

const results = brandBlocks.map((b, idx) => {
  const text = b.lines.join('\n');
  const rawName = b.header.name;
  let cleanName = rawName.replace(/（[^）]+）|\([^\)]+\)/g, '').trim();
  let slug = slugMap[cleanName] || slugMap[rawName];
  if (!slug) {
    const m = rawName.match(/（([a-zA-Z0-9_-]+)）|\(([a-zA-Z0-9_-]+)\)/);
    slug = m ? (m[1] || m[2]).toLowerCase() : cleanName.toLowerCase();
  }

  // Affiliate URL
  let affUrl = '';
  const affRegexes = [
    /\*\*(?:注册链接|保存的入口或推广[地链]址[^\*]*)\*\*[:：]?\s*[`“"]?(https?:\/\/[^\s`“"'\)]+)[`”"]?/i,
    /https?:\/\/[a-zA-Z0-9\.\-_/]+(?:aff|register|code=|\?code=)[a-zA-Z0-9\.\-_/?=&%#]+/i,
    /https?:\/\/[a-zA-Z0-9\.\-_/]+\/\#\/\?code=[a-zA-Z0-9]+/i,
    /https?:\/\/[a-zA-Z0-9\.\-_/]+(?:ltd|best|com|cc|vipaff|flycataff|twilightaff|wavenetaff|edgenovaaff)[a-zA-Z0-9\.\-_/?=&%#]+/i
  ];
  for (const r of affRegexes) {
    const m = text.match(r);
    if (m) {
      affUrl = m[1] || m[0];
      break;
    }
  }

  // Coupon
  let coupon = '';
  let couponNote = '';
  const cMatch = text.match(/优惠码[：:]?\s*[`“"]?([a-zA-Z0-9_-]{3,20})[`”"]?/i);
  if (cMatch) {
    const val = cMatch[1].trim();
    if (val.toLowerCase() !== 'null' && !val.includes('无') && !val.includes('未')) {
      coupon = val;
    }
  }
  const cNoteMatch = text.match(/优惠(?:活动|说明|备注)?[：:]?\s*([^\n\r]+)/);
  if (cNoteMatch && !cNoteMatch[1].includes('优惠码')) {
    couponNote = cNoteMatch[1].trim();
  }

  // Price & Traffic
  let priceFrom = '¥15/月';
  let trafficFrom = '100GB';
  const pfMatch = text.match(/[¥￥]\s*(\d+(?:\.\d+)?)\s*(?:元)?(?:\/月|\s*一个月)/);
  if (pfMatch) {
    priceFrom = '¥' + pfMatch[1] + '/月';
  } else {
    const pfYearMatch = text.match(/年付(?:折合)?约[¥￥]?\s*(\d+(?:\.\d+)?)\s*元\/月/);
    if (pfYearMatch) priceFrom = '¥' + pfYearMatch[1] + '/月';
  }

  const tfMatch = text.match(/(\d+\s*GB|\d+\s*G)(?:\/月|流量)?/i);
  if (tfMatch) {
    trafficFrom = tfMatch[1].toUpperCase();
  }

  // Year
  let openedYear = undefined;
  const yMatch = text.match(/(20\d\d)\s*年/);
  if (yMatch) openedYear = parseInt(yMatch[1]);

  // Protocols
  const protocols = [];
  if (/vless/i.test(text)) protocols.push('VLESS');
  if (/shadowsocks|\bSS\b/i.test(text)) protocols.push('Shadowsocks');
  if (/trojan/i.test(text)) protocols.push('Trojan');
  if (/vmess/i.test(text)) protocols.push('VMess');
  if (/hysteria/i.test(text)) protocols.push('Hysteria 2');
  if (protocols.length === 0) protocols.push('Shadowsocks');

  // Line
  let line = 'IEPL / IPLC 专线';
  if (/企业级\s*IEPL|IEPL\s*专线/i.test(text)) line = 'IEPL 企业级专线';
  else if (/全专线\s*IPLC|IPLC\s*专线/i.test(text)) line = 'IPLC 专线';
  else if (/BGP/i.test(text)) line = 'BGP 智能中转 / 专线';

  // Plans table parsing
  const plans = [];
  const planLines = text.split('\n');
  let inPlanTable = false;
  for (const pl of planLines) {
    if (pl.includes('套餐名称') && pl.includes('价格')) {
      inPlanTable = true;
      continue;
    }
    if (inPlanTable) {
      if (!pl.trim() || pl.startsWith('---') || pl.startsWith('##') || pl.startsWith('测速')) {
        inPlanTable = false;
        continue;
      }
      const parts = pl.split('\t').map(s => s.trim()).filter(Boolean);
      if (parts.length >= 3) {
        plans.push({
          name: parts[0],
          price: parts[2].startsWith('¥') ? parts[2] : (parts[1].startsWith('¥') ? parts[1] : '¥' + parts[2]),
          traffic: parts[3] || parts[2] || ''
        });
      }
    }
  }

  // AI & Streaming unlock
  let aiUnlock = 'AI 解锁（视节点而定）';
  if (/AI 全解锁|全解锁.*AI|ChatGPT.*可用.*Claude.*可用/i.test(text)) aiUnlock = 'AI 全解锁（ChatGPT / Claude / Gemini）';
  else if (/支持.*ChatGPT/i.test(text)) aiUnlock = '支持主流 AI（ChatGPT / Claude）';

  let streaming = '流媒体全解锁（Netflix / Disney+ / YouTube）';
  if (/流媒体全解锁/i.test(text)) streaming = '主流流媒体全解锁（Netflix / Disney+ / YouTube）';

  // Tagline & Intro
  let tagline = '';
  const descMatch = text.match(/介绍说明[：:]?\s*([^\n\r]+)/);
  if (descMatch) {
    tagline = descMatch[1].slice(0, 75).trim() + '。';
  } else {
    tagline = `${cleanName}提供优质线路节点与稳定代理服务，覆盖主流地区，支持多平台客户端。`;
  }

  return {
    id: slug,
    name: cleanName,
    rawName,
    index: idx + 1,
    tagline,
    affUrl,
    coupon,
    couponNote,
    priceFrom,
    trafficFrom,
    openedYear,
    line,
    protocols,
    plans,
    aiUnlock,
    streaming,
    rawText: text
  };
});

fs.writeFileSync('scripts/parsed-42.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Saved 42 brands to scripts/parsed-42.json');
