/**
 * 机场品牌库 —— 全站唯一数据源（Single Source of Truth）。
 *
 * 榜单页、品牌库页、侧边栏 TOP3、优惠码页、品牌评测页的评分卡/价格表/注册按钮
 * 全部从这里读取。更换 affiliate 链接、优惠码、价格时只需改这个文件。
 *
 * 数据来源说明：
 * - 价格/优惠码/卖点：品牌方提供（Vendor Data）
 * - 节点地区/延迟/速度：来自对应测速图的真实测试数据（Measured Data，测试环境：联通 5Gbps / 32 线程）
 * - 评分：编辑综合评估（实测速度与延迟 + 品牌方宣称的解锁与线路能力）
 * - 未核实的信息（运营时间、节点总量等）不填写、不虚构
 */

export interface AirportPlan {
  name: string;
  price: string;
  traffic: string;
}

export interface Airport {
  /** 唯一 id，评测文章 frontmatter 的 `brand` 字段引用它 */
  id: string;
  name: string;
  /** 一句话点评（榜单卡片展示） */
  tagline: string;
  /** 注册链接（affiliate），渲染时自动加 rel="sponsored" */
  url: string;
  coupon?: string;
  couponNote?: string;
  /** 起步价与对应流量 */
  priceFrom: string;
  trafficFrom: string;
  /** 开业年份（仅品牌方提供时填写，未核实不填） */
  openedYear?: number;
  /** 线路类型（品牌方宣称） */
  line: string;
  /** 协议（品牌方宣称 + 测速订阅实际分发格式） */
  protocols: string[];
  /** 测速图中实际出现的节点地区分布（Measured） */
  regions: string[];
  /** 本次测速样本节点数（Measured） */
  nodeCount: number;
  /** 实测数据一句话摘要（Measured，来自测速图） */
  measured: string;
  /** AI 工具解锁（品牌方宣称；未标注则写明） */
  aiUnlock: string;
  /** 流媒体解锁（品牌方宣称） */
  streaming: string;
  /** 客户端支持 */
  clients: string;
  /** 适合用户 */
  audience: string[];
  /** 使用注意事项 */
  notes: string;
  /** 对应测速图 */
  speedImage: string;
  speedImageAlt: string;
  /** 测速环境说明（各品牌测试环境可能不同，figcaption 展示用；缺省为联通 5Gbps/32 线程） */
  testEnv?: string;
  /** 评分（0–10，编辑综合评估）：速度 / 解锁 / 稳定 / 性价比 */
  scores: { speed: number; unlock: number; stability: number; value: number };
  /** 所属榜单（key 对应 boards.ts），数组中的相对顺序即榜单排名 */
  boards: string[];
  /** 亮点标签 */
  highlights: string[];
  /** 套餐价格表（品牌评测页展示；仅收录已知套餐） */
  plans: AirportPlan[];
}

export const AIRPORTS: Airport[] = [
  {
    id: 'guangsuyun',
    name: '光速云',
    tagline: '六年老牌 IEPL 专线，香港实测均速 505–550MB/s 全场最高档，流媒体与 AI 全解锁。',
    url: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    coupon: 'AMM',
    couponNote: '注册优惠',
    priceFrom: '¥17/月',
    trafficFrom: '110GB',
    line: 'IEPL 企业级内网专线',
    protocols: ['VLESS（全节点实测）'],
    regions: ['香港×15', '新加坡×10', '日本×10', '台湾×5', '美国×10'],
    nodeCount: 50,
    measured: '香港 15 节点均速 505–550MB/s、峰值 619MB/s——单节点实测速度全场最高档；新加坡多数 205–419MB/s；美国 9–14MB/s 偏弱',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '流媒体全解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['长期主力使用', 'ChatGPT/Claude 用户', '流媒体观影', '看重老牌稳定', '游戏用户（FullCone UDP）'],
    notes: '美国节点均速 9–14MB/s 明显偏弱，美区重度需求建议搭配他家；新加坡08 测试时未跑通。订阅导入通用客户端需联系在线客服。',
    speedImage: '/images/airports/guangsuyun-node-speedtest.png',
    speedImageAlt: '光速云节点测速实测：香港15节点均速505-550MB/s峰值619MB/s，VLESS全节点FullCone UDP（珠海联通9Gbps环境）',
    testEnv: '珠海联通 9Gbps / 32 线程（MiaoKo 4.3.3，2026-08-05）',
    scores: { speed: 9.5, unlock: 9.5, stability: 9.0, value: 8.5 },
    boards: ['best', 'chatgpt', 'streaming', 'cheap', 'iepl', 'stable'],
    highlights: ['六年老牌', '香港均速 400MB/s+', 'VLESS 全节点', 'AI 全解锁'],
    plans: [{ name: '入门套餐', price: '¥17/月', traffic: '110GB/月' }],
  },
  {
    id: 'xingdaomeng',
    name: '星岛梦',
    tagline: '六年老牌 + 8 元起步 + 不限时套餐，低预算长期党的稳妥之选。',
    url: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR',
    coupon: 'nmw888',
    couponNote: '新人注册 9 折',
    priceFrom: '¥8/月',
    trafficFrom: '60GB（年付）',
    line: '企业级内网专线',
    protocols: ['Shadowsocks（订阅分发）'],
    regions: ['香港×20', '台湾×5', '新加坡×10', '日本×10', '美国×10'],
    nodeCount: 55,
    measured: '香港延迟 25–30ms、均速 58–70MB/s；新加坡 47–66MB/s，主力地区表现稳定',
    aiUnlock: '解锁丰富（品牌方宣称，未逐项标注）',
    streaming: '解锁丰富（品牌方宣称）',
    clients: '通用客户端订阅导入需联系在线客服',
    audience: ['六年老牌偏好者', '低预算长期用户', '需要不限时套餐', '备用机场'],
    notes: '最低价为年付折算价；美国节点均速 14–34MB/s 偏弱。套餐种类多，购买前建议对照需求选档。',
    speedImage: '/images/airports/xingdaomeng-node-speedtest.jpg',
    speedImageAlt: '星岛梦节点测速实测：香港延迟25-30ms均速58-70MB/s，六年老牌8元起步（联通5Gbps环境）',
    scores: { speed: 8.0, unlock: 8.0, stability: 9.0, value: 9.0 },
    boards: ['best', 'cheap', 'stable', 'flexible'],
    highlights: ['六年老牌', '8 元起', '不限时套餐', '套餐种类多'],
    plans: [{ name: '入门套餐', price: '¥8/月（年付）', traffic: '60GB/月' }],
  },
  {
    id: 'lingmao',
    name: '灵猫网络',
    tagline: '香港延迟低至 13ms 的企业级内网专线，套餐种类多、支持不限时。',
    url: 'https://vip01.civetnet.com/#/?code=8MIAyxak',
    coupon: 'lmao888',
    couponNote: '新人注册 9 折',
    priceFrom: '¥19/月',
    trafficFrom: '150GB',
    line: '企业级内网专线',
    protocols: ['Shadowsocks（订阅分发）'],
    regions: ['香港×20', '美国×10', '日本×10', '新加坡×10', '台湾×5'],
    nodeCount: 55,
    measured: '香港延迟 13–18ms 为全场最低档；新加坡节点均速最高 71MB/s；香港均速 17–33MB/s 偏保守',
    aiUnlock: '未标注（品牌方宣称「解锁丰富」，未逐项标注）',
    streaming: '解锁丰富（品牌方宣称）',
    clients: '通用客户端订阅导入需联系在线客服',
    audience: ['延迟敏感型用户', '需要不限时套餐', '轻度网页/办公使用'],
    notes: '香港节点延迟极低但实测均速偏保守（17–33MB/s），大流量下载/4K 需求建议用新加坡节点或对比其他家。',
    speedImage: '/images/airports/lingmao-node-speedtest.jpg',
    speedImageAlt: '灵猫网络节点测速实测：香港延迟13-18ms全场最低档，企业级内网专线（联通5Gbps环境）',
    scores: { speed: 7.5, unlock: 8.0, stability: 8.5, value: 8.0 },
    boards: ['best', 'stable', 'flexible', 'shadowrocket'],
    highlights: ['香港 13ms 起', '企业级专线', '不限时套餐', '套餐种类多'],
    plans: [{ name: '入门套餐', price: '¥19/月', traffic: '150GB/月' }],
  },
  {
    id: 'ermaoyun',
    name: '二猫云',
    tagline: '实测全场最快的全能选手之一：香港均速 82–91MB/s，各地区全面高速。',
    url: 'https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW',
    coupon: 'ermao5555',
    couponNote: '注册优惠',
    priceFrom: '¥20/月',
    trafficFrom: '130GB',
    line: 'IEPL 专线',
    protocols: ['VLESS', 'Shadowsocks（订阅分发）'],
    regions: ['香港×20', '台湾×5', '新加坡×10', '日本×10', '美国×10', '马来西亚×2', '英/法/德/土/泰/巴西各×1'],
    nodeCount: 63,
    measured: '香港延迟 24–31ms、均速 82–91MB/s；新加坡 72–88MB/s、日本 54–86MB/s、美国 57–74MB/s，全地区高速',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '流媒体解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['追求全地区高速', '多场景混合使用', '流媒体 + AI 双需求'],
    notes: '小众地区（英法德等）节点速度一般，主力建议使用港新日美节点。',
    speedImage: '/images/airports/ermaoyun-node-speedtest.jpg',
    speedImageAlt: '二猫云节点测速实测：香港均速82-91MB/s全场领先，新日美各地区全面高速（联通5Gbps环境）',
    scores: { speed: 9.5, unlock: 9.0, stability: 8.5, value: 8.5 },
    boards: ['best', 'chatgpt', 'streaming', 'iepl', 'clash'],
    highlights: ['实测速度第一梯队', 'IEPL 专线', '12+ 地区覆盖', 'AI 全解锁'],
    plans: [{ name: '入门套餐', price: '¥20/月', traffic: '130GB/月' }],
  },
  {
    id: 'feimaoyun',
    name: '飞猫云',
    tagline: '7 元起的性价比小包 + 12 个国家地区覆盖，低预算也能用上 IEPL 专线。',
    url: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
    coupon: 'flycat888',
    couponNote: '新用户季付以上 8 折',
    priceFrom: '¥7/月',
    trafficFrom: '50GB（年付）',
    openedYear: 2023,
    line: 'IEPL 专线',
    protocols: ['Shadowsocks（订阅分发）'],
    regions: ['香港专线×20', '台湾×5', '新加坡×10', '日本×10', '美国×10', '马来西亚×2', '泰/土/法/英/德/越各×1'],
    nodeCount: 62,
    measured: '香港专线延迟 15–26ms、均速 54–73MB/s；新加坡 52–73MB/s；覆盖 12 个国家地区，为 16 家中覆盖最广之一',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '流媒体全解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['预算有限的学生党', '轻量用户', '需要小众地区节点', '第一次买机场'],
    notes: '最低价为年付折算价；美国节点均速 32–47MB/s 属中等水平，重度美区需求建议对比其他家。',
    speedImage: '/images/airports/feimaoyun-node-speedtest.jpg',
    speedImageAlt: '飞猫云节点测速实测：香港专线延迟15-26ms，12国家地区覆盖，7元起性价比小包（联通5Gbps环境）',
    scores: { speed: 8.5, unlock: 9.0, stability: 8.5, value: 9.5 },
    boards: ['best', 'chatgpt', 'streaming', 'cheap', 'iepl', 'stable', 'clash'],
    highlights: ['7 元起', 'IEPL 专线', '12 地区覆盖', 'AI 全解锁'],
    plans: [{ name: '性价比小包', price: '¥7/月（年付）', traffic: '50GB/月' }],
  },
  {
    id: 'u1s1',
    name: 'U1S1',
    tagline: '实测香港/新加坡均速破百：HK 专线 93–107MB/s，速度天花板级表现。',
    url: 'https://guangs.vipaff.cc/#/?code=xhX5X22f',
    coupon: 'akaka',
    couponNote: '注册优惠',
    priceFrom: '¥20/月',
    trafficFrom: '120GB',
    line: 'IEPL 专线',
    protocols: ['VLESS', 'Shadowsocks（订阅分发）'],
    regions: ['香港专线×20', '台湾×5', '新加坡×10', '日本×10', '美国×10', '马来西亚×2', '泰/土/法/英/德/越各×1'],
    nodeCount: 63,
    measured: '香港专线延迟 14–20ms、均速 93–107MB/s；新加坡均速 99–107MB/s——两地实测速度全场第一',
    aiUnlock: '未标注（品牌方未宣称，购买前请咨询客服）',
    streaming: '流媒体全解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['追求极致速度', '4K/8K 流媒体', '大文件下载', '港新节点主力用户'],
    notes: '美国多数节点实测速度偏弱（部分仅 5–10MB/s），美区重度需求慎选；日本节点延迟偏高（150ms+）。',
    speedImage: '/images/airports/u1s1-node-speedtest.jpg',
    speedImageAlt: 'U1S1节点测速实测：香港专线均速93-107MB/s、新加坡99-107MB/s，实测速度全场第一（联通5Gbps环境）',
    scores: { speed: 9.5, unlock: 8.5, stability: 8.5, value: 8.0 },
    boards: ['best', 'streaming', 'iepl', 'shadowrocket'],
    highlights: ['港新均速破百', 'IEPL 专线', '流媒体全解锁'],
    plans: [{ name: '入门套餐', price: '¥20/月', traffic: '120GB/月' }],
  },
  {
    id: 'guangnianti',
    name: '光年梯',
    tagline: '港/新/日三线全部 75MB/s+ 的均衡快车，18 元档少见的高速表现。',
    url: 'https://guangs.gntaff.com/#/?code=X1FoxjGE',
    coupon: 'gnt6666',
    couponNote: '注册优惠',
    priceFrom: '¥18/月',
    trafficFrom: '110GB',
    line: 'IEPL 专线',
    protocols: ['VLESS', 'Shadowsocks（订阅分发）'],
    regions: ['香港×20', '台湾×5', '新加坡×10', '日本×10', '美国×10', '马来西亚×2', '英/法/德/土/泰/巴西各×1'],
    nodeCount: 63,
    measured: '香港均速 73–95MB/s、新加坡 87–95MB/s、日本 75–91MB/s——亚洲三大主力地区全部高速',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '流媒体全解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['亚洲节点主力用户', 'ChatGPT + 流媒体双需求', '18 元档预算'],
    notes: '美国节点实测均速仅 12–38MB/s，为明显短板；美区需求建议搭配其他家或选购前咨询。',
    speedImage: '/images/airports/guangnianti-node-speedtest.jpg',
    speedImageAlt: '光年梯节点测速实测：香港73-95MB/s、新加坡87-95MB/s、日本75-91MB/s亚洲三线高速（联通5Gbps环境）',
    scores: { speed: 9.0, unlock: 9.0, stability: 8.5, value: 9.0 },
    boards: ['best', 'chatgpt', 'cheap', 'iepl', 'clash'],
    highlights: ['亚洲三线高速', 'IEPL 专线', 'AI 全解锁', '18 元档'],
    plans: [{ name: '性价比小包', price: '¥18/月', traffic: '110GB/月' }],
  },
  {
    id: 'yuzhouyun',
    name: '宇宙云',
    tagline: '14.9 元档的均衡实力派：香港均速 80–129MB/s、日本 92–124MB/s，含少见的俄罗斯节点。',
    url: 'https://guangs.yuzoucloud.cc/#/register?code=yrThwMP1',
    coupon: 'YUZHOU553',
    couponNote: '注册优惠',
    priceFrom: '¥14.9/月',
    trafficFrom: '100GB',
    line: 'IEPL 专线',
    protocols: ['VLESS（宣称）', 'Shadowsocks（订阅分发实测）'],
    regions: ['香港×20', '美国×10', '日本×10', '新加坡×10', '马来西亚×2', '台湾×5', '俄罗斯×1'],
    nodeCount: 58,
    measured: '香港 20 节点均速 80–129MB/s（峰值 145MB/s）、日本 92–124MB/s；美国 28–78MB/s 波动；含少见的俄罗斯节点',
    aiUnlock: '未标注（品牌方未宣称，购买前请咨询客服）',
    streaming: '流媒体全解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['15 元档预算', '香港/日本主力用户', '流媒体用户', '需要俄罗斯节点'],
    notes: '美国与新加坡部分节点速度波动较大，马来西亚/俄罗斯节点仅应急可用；AI 解锁未标注，ChatGPT 需求先咨询客服。',
    speedImage: '/images/airports/yuzhouyun-node-speedtest.jpg',
    speedImageAlt: '宇宙云节点测速实测：香港20节点均速80-129MB/s、日本92-124MB/s，14.9元IEPL专线（珠海联通9Gbps环境）',
    testEnv: '珠海联通 9Gbps / 32 线程（MiaoKo 4.3.3，2026-08-05）',
    scores: { speed: 8.5, unlock: 8.0, stability: 8.5, value: 9.5 },
    boards: ['best', 'cheap', 'streaming'],
    highlights: ['14.9 元专线', '香港百兆均速', '日本线路强', '俄罗斯节点'],
    plans: [{ name: '性价比小包', price: '¥14.9/月', traffic: '100GB/月' }],
  },
  {
    id: 'yifanyun',
    name: '一翻云',
    tagline: '香港 20 条线路均速 80–92MB/s，150GB 大流量包一步到位。',
    url: 'https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r',
    coupon: 'yfy6666',
    couponNote: '注册优惠',
    priceFrom: '¥20/月',
    trafficFrom: '150GB',
    line: 'IEPL 专线',
    protocols: ['VLESS', 'Shadowsocks（订阅分发）'],
    regions: ['香港×20', '台湾×5', '新加坡×10', '日本×10', '美国×10'],
    nodeCount: 55,
    measured: '香港延迟 16–24ms、均速 80–92MB/s；美国均速 61–81MB/s、峰值最高 149MB/s',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '流媒体解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['大流量用户', '香港节点主力', '美区 + 港区双需求'],
    notes: '新加坡/日本部分节点速度波动较大（26–89MB/s），建议实际使用时手动测速择优。',
    speedImage: '/images/airports/yifanyun-node-speedtest.jpg',
    speedImageAlt: '一翻云节点测速实测：香港20线均速80-92MB/s，美国峰值最高149MB/s，20元150GB大流量（联通5Gbps环境）',
    scores: { speed: 9.0, unlock: 8.5, stability: 8.5, value: 8.5 },
    boards: ['best', 'streaming', 'iepl', 'v2rayn', 'shadowrocket'],
    highlights: ['香港全线高速', '150GB 大流量', 'IEPL 专线'],
    plans: [{ name: '入门套餐', price: '¥20/月', traffic: '150GB/月' }],
  },
  {
    id: 'sogoyun',
    name: 'SOGO云',
    tagline: '日本/美国线路实测惊艳：日本均速最高破百、美国峰值 161MB/s。',
    url: 'https://guangs.sogoyunaff.cc/#/En04H5u9',
    coupon: 'sss777',
    couponNote: '注册优惠',
    priceFrom: '¥25/月',
    trafficFrom: '150GB',
    line: 'IEPL 专线',
    protocols: ['VLESS', 'Shadowsocks（订阅分发）'],
    regions: ['香港×20', '台湾×5', '新加坡×10', '日本×10', '美国×10', '马来西亚×2', '土/英/德/法/泰/韩各×1'],
    nodeCount: 63,
    measured: '日本均速 71–106MB/s、美国均速 50–86MB/s（峰值 161MB/s）、新加坡后段节点 89–98MB/s——远程线路表现全场最佳',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '流媒体全解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['日区/美区主力用户', '海外游戏玩家', '跨境业务', '追求远程线路质量'],
    notes: '价格档位偏高（25 元档）；香港节点速度 44–61MB/s 属中上但非顶尖。',
    speedImage: '/images/airports/sogoyun-node-speedtest.jpg',
    speedImageAlt: 'SOGO云节点测速实测：日本均速71-106MB/s、美国峰值161MB/s，日美远程线路全场最佳（联通5Gbps环境）',
    scores: { speed: 9.0, unlock: 9.0, stability: 8.5, value: 8.0 },
    boards: ['best', 'streaming', 'iepl', 'clash', 'v2rayn'],
    highlights: ['日美线路最佳', 'IEPL 专线', 'AI 全解锁', '13 地区覆盖'],
    plans: [{ name: '入门套餐', price: '¥25/月', traffic: '150GB/月' }],
  },
  {
    id: 'quanqiuyun',
    name: '全球云',
    tagline: '香港 14–22ms + 均速 73–91MB/s，港区体验第一梯队的均衡之选。',
    url: 'https://guangs.gcvipaff.com/#/?code=Ov2nvU9C',
    coupon: 'qqy7777',
    couponNote: '注册优惠',
    priceFrom: '¥20/月',
    trafficFrom: '120GB',
    line: 'IEPL 专线',
    protocols: ['VLESS', 'Shadowsocks（订阅分发）'],
    regions: ['香港×20', '台湾×5', '新加坡×10', '日本×10', '美国×10', '马来西亚×2', '土/英/德/法/泰/韩各×1'],
    nodeCount: 63,
    measured: '香港延迟 14–22ms、均速 73–91MB/s；美国均速 45–68MB/s、峰值最高 120MB/s；日本节点延迟偏高（约 200ms）',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '流媒体解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['香港节点主力用户', 'AI 工具用户', '中等预算全能需求'],
    notes: '日本节点实测延迟约 200ms（速度尚可），对延迟敏感的日区需求（如游戏）不适合。',
    speedImage: '/images/airports/quanqiuyun-node-speedtest.jpg',
    speedImageAlt: '全球云节点测速实测：香港延迟14-22ms均速73-91MB/s港区第一梯队（联通5Gbps环境）',
    scores: { speed: 8.5, unlock: 9.0, stability: 8.5, value: 8.5 },
    boards: ['best', 'chatgpt', 'stable', 'clash', 'shadowrocket'],
    highlights: ['香港第一梯队', 'IEPL 专线', 'AI 全解锁'],
    plans: [{ name: '性价比小包', price: '¥20/月', traffic: '120GB/月' }],
  },
  {
    id: 'weituyun',
    name: '唯兔云',
    tagline: '2020 年开业，BGP 入口 + IEPL 命名线路，三网优化 + 智能负载均衡。',
    url: 'https://guangs.v2yunvipaff.com/#/?code=xIutqOBA',
    coupon: 'rabbit',
    couponNote: '新用户 9 折',
    priceFrom: '¥14.9/月',
    trafficFrom: '100GB',
    openedYear: 2020,
    line: 'BGP 入口 + IEPL（节点命名标注）',
    protocols: ['VLESS', 'Shadowsocks（订阅分发）'],
    regions: ['香港 BGP-IEPL×20', '台湾×5', '日本×9', '新加坡×8', '美国×10', '马来西亚×2'],
    nodeCount: 53,
    measured: '香港 BGP-IEPL 延迟 19–30ms、均速 40–65MB/s；美国峰值最高 92MB/s；节点命名明确标注 BGP+IEPL 线路',
    aiUnlock: '未标注（品牌方未宣称，购买前请咨询客服）',
    streaming: '未逐项标注（品牌方宣称节点覆盖 60+）',
    clients: '通用客户端订阅导入需联系在线客服',
    audience: ['三网用户（移动/联通/电信）', '看重运营年限', '15 元档预算'],
    notes: '品牌方宣称节点覆盖 60+，本次测速样本为 53 个；解锁能力未逐项标注，建议购买前咨询。',
    speedImage: '/images/airports/weituyun-node-speedtest.jpg',
    speedImageAlt: '唯兔云节点测速实测：香港BGP-IEPL延迟19-30ms，三网优化智能负载均衡（联通5Gbps环境）',
    scores: { speed: 8.0, unlock: 8.0, stability: 9.0, value: 9.0 },
    boards: ['best', 'cheap', 'stable'],
    highlights: ['2020 年开业', 'BGP+IEPL', '三网优化', '智能负载均衡'],
    plans: [{ name: '入门套餐', price: '¥14.9/月', traffic: '100GB/月' }],
  },
  {
    id: 'jilianyun',
    name: '极连云',
    tagline: '香港专线峰值破百、AI 全解锁，18 元档的专线快车。',
    url: 'https://guangs.jlyvipaff.com/#/?code=VM1rKGUu',
    coupon: 'ji8888',
    couponNote: '注册优惠',
    priceFrom: '¥18/月',
    trafficFrom: '100GB',
    line: 'IEPL 专线',
    protocols: ['Shadowsocks（订阅分发）'],
    regions: ['香港专线×20', '台湾×5', '新加坡×10', '日本×10', '美国×10', '马来西亚×2', '泰/土/法/英/德/越各×1'],
    nodeCount: 63,
    measured: '香港专线多数节点均速 77–98MB/s、峰值最高 103MB/s；部分香港节点测试时延迟波动较大（30ms–291ms）',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '流媒体全解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['香港高速需求', 'AI 工具用户', '18 元档预算'],
    notes: '测试时段部分香港/日本节点延迟波动明显，建议实际使用时手动测速择优；日本节点整体偏弱。',
    speedImage: '/images/airports/jilianyun-node-speedtest.jpg',
    speedImageAlt: '极连云节点测速实测：香港专线均速77-98MB/s峰值破百，AI全解锁18元档（联通5Gbps环境）',
    scores: { speed: 8.5, unlock: 9.0, stability: 8.0, value: 8.5 },
    boards: ['best', 'chatgpt', 'iepl'],
    highlights: ['香港峰值破百', 'IEPL 专线', 'AI 全解锁'],
    plans: [{ name: '入门套餐', price: '¥18/月', traffic: '100GB/月' }],
  },
  {
    id: 'sujie',
    name: '速界',
    tagline: '主打 AI 全解锁的 IEPL 专线，香港 13ms 起步延迟拉满。',
    url: 'https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB',
    coupon: 'sss1111',
    couponNote: '注册优惠',
    priceFrom: '¥25/月',
    trafficFrom: '150GB',
    line: 'IEPL 专线',
    protocols: ['VLESS', 'Shadowsocks（订阅分发）'],
    regions: ['香港×20', '台湾×5', '新加坡×10', '日本×10', '美国×10', '马来西亚×2', '英/法/德/土/泰/巴西各×1'],
    nodeCount: 63,
    measured: '香港延迟 13–29ms、均速 41–69MB/s；美国峰值最高 88MB/s；覆盖 13 个国家地区',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '未标注（品牌方未宣称流媒体，购买前请咨询客服）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['AI 工具重度用户', 'ChatGPT/Claude 长任务', '需要多地区备用节点'],
    notes: '品牌方卖点未标注流媒体解锁，追剧需求建议购买前咨询；25 元档价格偏高。',
    speedImage: '/images/airports/sujie-node-speedtest.jpg',
    speedImageAlt: '速界节点测速实测：香港延迟13-29ms，主打AI全解锁的IEPL专线（联通5Gbps环境）',
    scores: { speed: 8.0, unlock: 8.5, stability: 8.5, value: 7.5 },
    boards: ['best', 'chatgpt', 'shadowrocket', 'v2rayn'],
    highlights: ['AI 全解锁', 'IEPL 专线', '香港 13ms 起', '13 地区覆盖'],
    plans: [{ name: '入门套餐', price: '¥25/月', traffic: '150GB/月' }],
  },
  {
    id: 'kuaili',
    name: '快狸',
    tagline: '流媒体 + AI 双解锁，实测香港/新加坡/日本三线全部 200MB/s+ 高速。',
    url: 'https://guangs.kuailicloud.cc/#/register?code=AiqyM8oG',
    coupon: 'kkk2222',
    couponNote: '注册优惠',
    priceFrom: '¥25/月',
    trafficFrom: '150GB',
    line: 'IEPL 专线',
    protocols: ['VLESS（全节点实测）'],
    regions: ['香港×20', '台湾×5', '新加坡×10', '美国×10', '马来西亚×2', '日本×10', '巴西×1', '德国×5'],
    nodeCount: 63,
    measured: '香港均速 216–319MB/s、新加坡 239–343MB/s、日本 231–423MB/s（峰值 473MB/s）；美国除 US01（240MB/s）外多数 21–33MB/s',
    aiUnlock: 'AI 全解锁（品牌方宣称）',
    streaming: '流媒体全解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['流媒体 + AI 双需求', '亚洲区高速刚需', '150GB 大流量用户', '游戏用户（FullCone UDP）'],
    notes: '美国区除 US01 外多数节点偏弱；日本04/马来西亚02 测试时未跑通；德国×5 约 30MB/s 应急可用。',
    speedImage: '/images/airports/kuaili-node-speedtest.jpg',
    speedImageAlt: '快狸节点测速实测：香港均速216-319MB/s、日本峰值473MB/s，VLESS全节点FullCone UDP双解锁（珠海联通9Gbps环境）',
    testEnv: '珠海联通 9Gbps / 32 线程（MiaoKo 4.3.3，2026-08-05）',
    scores: { speed: 9.0, unlock: 9.0, stability: 8.5, value: 8.0 },
    boards: ['best', 'streaming', 'clash', 'v2rayn'],
    highlights: ['双解锁', '亚洲三线 200MB/s+', 'VLESS 全节点', 'FullCone UDP'],
    plans: [{ name: '入门套餐', price: '¥25/月', traffic: '150GB/月' }],
  },
  {
    id: 'kexinyun',
    name: '可信云',
    tagline: '流媒体全解锁的 IEPL 专线，港新日美标准覆盖的稳妥选项。',
    url: 'https://guangs.kosingaff.com/#/register?code=UYDtNlCY',
    coupon: 'kkk333',
    couponNote: '注册优惠',
    priceFrom: '¥25/月',
    trafficFrom: '150GB',
    line: 'IEPL 专线',
    protocols: ['VLESS', 'Shadowsocks（订阅分发）'],
    regions: ['香港×20', '台湾×5', '新加坡×10', '日本×10', '美国×10'],
    nodeCount: 55,
    measured: '香港延迟 24–34ms、均速 28–53MB/s；新加坡 37–48MB/s；整体速度中等偏稳',
    aiUnlock: '未标注（品牌方未宣称，购买前请咨询客服）',
    streaming: '流媒体全解锁（品牌方宣称）',
    clients: '自研客户端；通用客户端订阅导入需联系在线客服',
    audience: ['流媒体中度用户', '追求稳定不追极速', '标准五地区需求'],
    notes: '25 元档定价但实测速度中等（美国仅 12–20MB/s），性价比敏感用户建议对比同档位品牌。',
    speedImage: '/images/airports/kexinyun-node-speedtest.jpg',
    speedImageAlt: '可信云节点测速实测：香港延迟24-34ms，流媒体全解锁IEPL专线（联通5Gbps环境）',
    scores: { speed: 7.5, unlock: 8.5, stability: 8.5, value: 7.5 },
    boards: ['best'],
    highlights: ['流媒体全解锁', 'IEPL 专线', '五地区标配'],
    plans: [{ name: '入门套餐', price: '¥25/月', traffic: '150GB/月' }],
  },
];

/** 按榜单取品牌，保持 AIRPORTS 中的相对顺序即排名 */
export function byBoard(board: string): Airport[] {
  return AIRPORTS.filter((a) => a.boards.includes(board));
}

export function byId(id: string): Airport {
  const airport = AIRPORTS.find((a) => a.id === id);
  if (!airport) throw new Error(`Unknown airport: ${id}`);
  return airport;
}

/** 侧边栏 / 首页 TOP3 */
export function top3(): Airport[] {
  return byBoard('best').slice(0, 3);
}

/** 综合评分（0–10） */
export function overallScore(a: Airport): string {
  return ((a.scores.speed + a.scores.unlock + a.scores.stability + a.scores.value) / 4).toFixed(1);
}
