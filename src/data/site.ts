/**
 * 全站基础配置与栏目定义。
 * 栏目结构严格对应 docs/site-architecture.md 的转化漏斗设计。
 */

export const SITE = {
  name: 'HaiwaiLab',
  title: '2026 机场推荐：稳定、便宜、好用的机场排行榜 - HaiwaiLab 海外实验室',
  description:
    '2026 机场推荐与稳定机场排行榜：16 家机场真实测速对比，覆盖便宜机场、IEPL 专线机场、ChatGPT 机场、流媒体解锁机场推荐，附优惠码与新手避坑指南，持续更新。',
  url: 'https://haiwailab.com',
};

/** TOFU/MOFU 文章栏目（内容集合与路由共用此定义） */
export const SECTIONS = [
  {
    id: 'ai',
    name: 'AI 工具',
    description: 'ChatGPT、Claude、Gemini、Midjourney 等 AI 工具的注册、订阅与使用教程。',
  },
  {
    id: 'apps',
    name: '海外应用',
    description: 'Netflix、YouTube、TikTok、Telegram、Spotify 等海外应用的使用与订阅指南。',
  },
  {
    id: 'accounts',
    name: '账号教程',
    description: 'Google 账号、外区 Apple ID、海外手机号、虚拟信用卡等注册与实用教程。',
  },
  {
    id: 'network',
    name: '网络问题',
    description: '打不开、连不上、节点卡顿掉线——常见网络问题的排查与解决方案。',
  },
  {
    id: 'guide',
    name: '上网教程',
    description: '科学上网入门、Clash/sing-box 客户端教程、协议科普与安全指南。',
  },
] as const;

export type SectionId = (typeof SECTIONS)[number]['id'];

export const SECTION_IDS = SECTIONS.map((s) => s.id);

export function sectionById(id: string) {
  const section = SECTIONS.find((s) => s.id === id);
  if (!section) throw new Error(`Unknown section: ${id}`);
  return section;
}

/** 顶部导航（「机场推荐」为高亮转化入口） */
export const NAV = [
  ...SECTIONS.map((s) => ({ href: `/${s.id}/`, label: s.name, highlight: false })),
  { href: '/reviews/best/', label: '机场推荐', highlight: true },
  { href: '/brands/', label: '品牌库', highlight: false },
  { href: '/reviews/', label: '评测', highlight: false },
  { href: '/deals/', label: '优惠码', highlight: false },
];
