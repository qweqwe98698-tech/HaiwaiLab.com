/**
 * 全站基础配置与栏目定义。
 * 栏目结构严格对应 docs/site-architecture.md 的转化漏斗设计。
 */

export const SITE = {
  name: 'HaiwaiLab',
  title: '2026 机场推荐：稳定、便宜、好用的机场排行榜 - HaiwaiLab 海外实验室',
  description:
    '2026 机场推荐与稳定机场排行榜：HaiwaiLab 实测 16 家机场速度与解锁能力，覆盖便宜机场、IEPL 专线机场、ChatGPT 专用机场、流媒体解锁机场，附真实测速图、注册优惠码与新手避坑指南，每月更新排名榜单，助你少走弯路选对机场。',
  url: 'https://haiwailab.lol',
};

/** TOFU/MOFU 文章栏目（内容集合与路由共用此定义） */
export const SECTIONS = [
  {
    id: 'ai',
    name: 'AI 工具',
    description:
      'ChatGPT、Claude、Gemini、Midjourney 等主流 AI 工具的国内注册、订阅充值、打不开排查与横向对比教程，含虚拟信用卡付款方案与稳定访问所需的网络前提，持续更新至 2026 最新可用方法。',
  },
  {
    id: 'apps',
    name: '海外应用',
    description:
      'Netflix、Disney+、YouTube Premium、TikTok、Telegram、Spotify 等海外应用的国内使用、账号注册与地区限制解除教程，覆盖流媒体、社交、音乐订阅全场景，配合机场解锁更省心。',
  },
  {
    id: 'accounts',
    name: '账号教程',
    description:
      'Google 账号手机号验证失败怎么办、外区 Apple ID 完整注册流程、海外手机号接码平台推荐、虚拟信用卡开卡与支付方式对比等实用教程，解决海外服务注册中最常遇到的账号与支付难题，附详细可执行步骤。',
  },
  {
    id: 'network',
    name: '网络问题',
    description:
      '打不开、连不上网、节点频繁掉线卡顿、DNS 污染、被墙检测——常见网络故障按报错类型与场景逐一排查，给出可直接执行的解决步骤；自查无效时进一步附上换机场或换协议的具体建议，一步步排除问题根源。',
  },
  {
    id: 'guide',
    name: '上网教程',
    description:
      '科学上网入门指南、Clash Verge/sing-box/Shadowrocket/v2rayN 等主流客户端配置教程、SS/V2Ray/Trojan/Hysteria2 协议科普与安全隐私指南，新手友好、循序渐进。',
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
