/**
 * 榜单（Money Pages）定义。
 * 文章 frontmatter 的 `cta` 字段引用这里的 key，
 * 文末 CTA 卡片据此指向对应场景榜 —— 内链铁律的技术实现。
 */

export interface Board {
  /** 榜单标题（用于 CTA 卡片与页面标题） */
  title: string;
  /** 短名（用于导航/标签） */
  short: string;
  /** 榜单页路径 */
  path: string;
  /** CTA 卡片上的一句话引导文案 */
  blurb: string;
}

export const BOARDS: Record<string, Board> = {
  best: {
    title: '机场推荐总榜',
    short: '总榜',
    path: '/reviews/best/',
    blurb: '我们长期实测 20+ 家机场，这是当前综合表现最好的几家。',
  },
  chatgpt: {
    title: 'ChatGPT 专用机场榜',
    short: 'ChatGPT 榜',
    path: '/reviews/best/chatgpt/',
    blurb: '稳定访问 ChatGPT/Claude 需要原生 IP 与低风控节点，这几家实测最稳。',
  },
  streaming: {
    title: '流媒体解锁机场榜',
    short: '流媒体榜',
    path: '/reviews/best/streaming/',
    blurb: '想看 Netflix/Disney+ 高清不降速？这几家解锁能力实测最强。',
  },
  cheap: {
    title: '便宜机场榜',
    short: '性价比榜',
    path: '/reviews/best/cheap/',
    blurb: '预算有限也能稳定上网，这几家是实测后的高性价比之选。',
  },
  iepl: {
    title: 'IEPL 专线机场榜',
    short: '专线榜',
    path: '/reviews/best/iepl/',
    blurb: 'IEPL/IPLC 内网专线不过公网、晚高峰不拥堵，这几家实测线路质量最好。',
  },
  stable: {
    title: '稳定机场榜',
    short: '稳定榜',
    path: '/reviews/best/stable/',
    blurb: '老牌运营 + 长期表现稳定，适合当主力长期使用的几家机场。',
  },
  clash: {
    title: 'Clash 机场推荐',
    short: 'Clash 榜',
    path: '/reviews/best/clash/',
    blurb: '节点多、地区广，Clash 的分组切换与自动测速能发挥最大价值的几家。',
  },
  shadowrocket: {
    title: 'Shadowrocket（小火箭）机场推荐',
    short: '小火箭榜',
    path: '/reviews/best/shadowrocket/',
    blurb: 'iOS 用户优先看低延迟与稳定性，这几家实测延迟最低、切换最省心。',
  },
  v2rayn: {
    title: 'v2rayN 机场推荐',
    short: 'v2rayN 榜',
    path: '/reviews/best/v2rayn/',
    blurb: 'Windows 电脑党要的是大流量与高带宽，这几家套餐流量最充足。',
  },
  flexible: {
    title: '不限时 / 按量计费机场推荐',
    short: '不限时榜',
    path: '/reviews/best/flexible/',
    blurb: '流量包永久有效、用完再买，用量不规律与备用机场的最佳形态。',
  },
};

export type BoardId = keyof typeof BOARDS;

export function boardById(id: string): Board {
  const board = BOARDS[id];
  if (!board) throw new Error(`Unknown board: ${id}`);
  return board;
}
