/**
 * 机场品牌库 —— 全站唯一数据源（Single Source of Truth）。
 *
 * 榜单页、品牌库页、侧边栏 TOP3、优惠码页、品牌评测页的评分卡/价格表/注册按钮
 * 全部从这里读取。
 * 包含 42 家机场品牌及测试数据。
 */

export interface AirportPlan {
  name: string;
  price: string;
  traffic: string;
}

export interface UnlockImage {
  region: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface Airport {
  id: string;
  name: string;
  tagline: string;
  url: string;
  coupon?: string;
  couponNote?: string;
  priceFrom: string;
  trafficFrom: string;
  openedYear?: number;
  line: string;
  protocols: string[];
  regions: string[];
  nodeCount: number;
  measured: string;
  aiUnlock: string;
  streaming: string;
  clients: string;
  audience: string[];
  notes: string;
  speedImage: string;
  speedImageAlt: string;
  speedImageWidth: number;
  speedImageHeight: number;
  testEnv?: string;
  scores: { speed: number; unlock: number; stability: number; value: number };
  boards: string[];
  highlights: string[];
  plans: AirportPlan[];
  hasRealSpeedtest?: boolean;
  unlockImages?: UnlockImage[];
}

export const AIRPORTS: Airport[] = [
  {
    "id": "guangsuyun",
    "name": "光速云",
    "tagline": "六年老牌 IEPL 专线，香港实测均速 505–550MB/s 全场最高档，流媒体与 AI 全解锁。",
    "url": "/go/guangsuyun/",
    "coupon": "AMM",
    "couponNote": "注册立享专属折扣",
    "priceFrom": "¥8/月",
    "trafficFrom": "69GB（年付¥99）",
    "line": "IEPL 企业级内网专线",
    "protocols": [
      "VLESS（全节点实测）"
    ],
    "regions": [
      "香港×15",
      "新加坡×10",
      "日本×10",
      "台湾×5",
      "美国×10"
    ],
    "nodeCount": 50,
    "measured": "香港 15 节点均速 505–550MB/s、峰值 619MB/s——单节点实测速度全场最高档；新加坡多数 205–419MB/s；美国 9–14MB/s 偏弱",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "流媒体全解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "长期主力使用",
      "ChatGPT/Claude 用户",
      "流媒体观影",
      "看重老牌稳定",
      "游戏用户（FullCone UDP）"
    ],
    "notes": "美国节点均速 9–14MB/s 明显偏弱，美区重度需求建议搭配他家；新加坡08 测试时未跑通。订阅导入通用客户端需联系在线客服。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "光速云节点测速实测：香港15节点均速505-550MB/s峰值619MB/s，VLESS全节点FullCone UDP（珠海联通9Gbps环境）",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "珠海联通 9Gbps / 32 线程（MiaoKo 4.3.3，2026-08-05）",
    "scores": {
      "speed": 9.5,
      "unlock": 9.5,
      "stability": 9,
      "value": 9.5
    },
    "boards": [
      "best",
      "clash",
      "shadowrocket",
      "v2rayn",
      "flexible",
      "chatgpt",
      "streaming",
      "cheap",
      "iepl",
      "stable"
    ],
    "highlights": [
      "六年老牌",
      "香港均速 400MB/s+",
      "VLESS 全节点",
      "AI 全解锁"
    ],
    "plans": [
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "price": "¥147",
        "traffic": "247GB不过期"
      },
      {
        "name": "光速云·轻量版",
        "price": "¥99",
        "traffic": "69GB"
      },
      {
        "name": "光速云·极速版",
        "price": "¥25",
        "traffic": "168GB"
      },
      {
        "name": "光速云·流光版",
        "price": "¥34",
        "traffic": "268GB"
      },
      {
        "name": "光速云·量子版",
        "price": "¥68",
        "traffic": "568GB"
      },
      {
        "name": "光速云·无界版",
        "price": "¥138",
        "traffic": "900GB"
      },
      {
        "name": "光速云·定制套餐",
        "price": "¥680",
        "traffic": "500GB"
      }
    ],
    "hasRealSpeedtest": true,
    "unlockImages": [
      {
        "region": "香港（HK）",
        "url": "/images/airports/guangsuyun-unlock-hk.jpg",
        "alt": "光速云香港节点流媒体与 AI 解锁测试：Netflix、Disney+、YouTube 4K 全解锁",
        "width": 825,
        "height": 808
      },
      {
        "region": "新加坡（SG）",
        "url": "/images/airports/guangsuyun-unlock-sg.jpg",
        "alt": "光速云新加坡节点流媒体与 AI 解锁测试：ChatGPT、Claude、Netflix 全解锁",
        "width": 829,
        "height": 808
      },
      {
        "region": "日本（JP）",
        "url": "/images/airports/guangsuyun-unlock-jp.jpg",
        "alt": "光速云日本节点流媒体与 AI 解锁测试：AbemaTV、DMM、Netflix 原生解锁",
        "width": 824,
        "height": 809
      },
      {
        "region": "台湾（TW）",
        "url": "/images/airports/guangsuyun-unlock-tw.jpg",
        "alt": "光速云台湾节点流媒体与 AI 解锁测试：动画疯、Bilibili 港澳台、Netflix 解锁",
        "width": 869,
        "height": 1067
      },
      {
        "region": "美国（US）",
        "url": "/images/airports/guangsuyun-unlock-us.jpg",
        "alt": "光速云美国节点流媒体与 AI 解锁测试：HBO Max、Hulu、Disney+ 解锁",
        "width": 592,
        "height": 1064
      }
    ]
  },
  {
    "id": "muguang",
    "name": "暮光加速",
    "tagline": "暮光加速面向的是个人和团队跨平台使用场景，主打 BGP 智能调度和专线级出口，覆盖 Windows、macOS、iOS、Android、Linux 全。",
    "url": "/go/muguang/",
    "coupon": "muguang5555",
    "couponNote": "码 `muguang5555`",
    "priceFrom": "¥15/月",
    "trafficFrom": "120GB",
    "openedYear": 2023,
    "line": "BGP 智能中转 / 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 50,
    "measured": "香港实测均速 509MB/s，新加坡 419MB/s，全平台专线智能调度",
    "aiUnlock": "支持主流 AI（ChatGPT / Claude）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "建议先按月付订阅体验实际晚高峰表现。",
    "speedImage": "/images/airports/muguang-node-speedtest.png",
    "speedImageAlt": "暮光加速 节点测速实测报告",
    "speedImageWidth": 1122,
    "speedImageHeight": 1402,
    "testEnv": "珠海联通 9Gbps / 32 线程并发（MiaoKo，2026-08-11）",
    "scores": {
      "speed": 9.4,
      "unlock": 8.5,
      "stability": 9,
      "value": 8.8
    },
    "boards": [
      "best",
      "stable",
      "iepl",
      "cheap",
      "chatgpt",
      "streaming"
    ],
    "highlights": [
      "BGP 智能中转 / 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "【暮光·基础版】",
        "price": "¥20",
        "traffic": "120GB"
      },
      {
        "name": "【暮光·标准版】",
        "price": "¥40",
        "traffic": "240GB"
      },
      {
        "name": "【暮光·旗舰版】",
        "price": "¥100",
        "traffic": "700GB"
      },
      {
        "name": "【暮光·至尊版】",
        "price": "¥180",
        "traffic": "1500GB"
      },
      {
        "name": "【暮光·年付轻量版】",
        "price": "¥109",
        "traffic": "70GB"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "price": "¥219",
        "traffic": "150GB"
      },
      {
        "name": "【暮光·不限时标准包】",
        "price": "¥529",
        "traffic": "400GB"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "price": "¥959",
        "traffic": "800GB"
      },
      {
        "name": "独享私人定制节点",
        "price": "¥600",
        "traffic": "500GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "feimaoyun",
    "name": "飞猫云",
    "tagline": "7 元起的性价比小包 + 12 个国家地区覆盖，低预算也能用上 IEPL 专线。",
    "url": "/go/feimaoyun/",
    "coupon": "flycat888",
    "couponNote": "码 `flycat888`",
    "priceFrom": "¥7/月",
    "trafficFrom": "50GB（年付）",
    "openedYear": 2023,
    "line": "IEPL 专线",
    "protocols": [
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港专线×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10",
      "马来西亚×2",
      "泰/土/法/英/德/越各×1"
    ],
    "nodeCount": 62,
    "measured": "香港专线延迟 15–26ms、均速 54–73MB/s；新加坡 52–73MB/s；覆盖 12 个国家地区，为 16 家中覆盖最广之一",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "流媒体全解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "预算有限的学生党",
      "轻量用户",
      "需要小众地区节点",
      "第一次买机场"
    ],
    "notes": "最低价为年付折算价；美国节点均速 32–47MB/s 属中等水平，重度美区需求建议对比其他家。",
    "speedImage": "/images/airports/feimaoyun-node-speedtest.jpg",
    "speedImageAlt": "飞猫云节点测速实测：香港专线延迟15-26ms，12国家地区覆盖，7元起性价比小包（联通5Gbps环境）",
    "speedImageWidth": 691,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 8.5,
      "unlock": 9,
      "stability": 8.5,
      "value": 9.5
    },
    "boards": [
      "best",
      "chatgpt",
      "streaming",
      "cheap",
      "iepl",
      "stable",
      "clash"
    ],
    "highlights": [
      "7 元起",
      "IEPL 专线",
      "12 地区覆盖",
      "AI 全解锁"
    ],
    "plans": [
      {
        "name": "飞猫·学生版",
        "price": "¥84",
        "traffic": "50GB"
      },
      {
        "name": "飞猫·星耀版",
        "price": "¥25",
        "traffic": "150GB"
      },
      {
        "name": "飞猫·星环版",
        "price": "¥45",
        "traffic": "300GB"
      },
      {
        "name": "飞猫·银河版",
        "price": "¥85",
        "traffic": "600GB"
      },
      {
        "name": "飞猫·宇宙版",
        "price": "¥150",
        "traffic": "1000GB"
      },
      {
        "name": "飞猫·不限时套餐",
        "price": "¥680",
        "traffic": "1000GB"
      },
      {
        "name": "飞猫·定制套餐",
        "price": "¥550",
        "traffic": "500GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "weifeng",
    "name": "微风网络",
    "tagline": "微风网络在便宜机场推荐里经常被提到，价格是它最直接的优势——11 元/月起，比不少同类 IEPL 机场推荐都要低，对学生党和轻度用户比较友好。走的是。",
    "url": "/go/weifeng/",
    "coupon": "flat888",
    "couponNote": "码 `flat888`",
    "priceFrom": "¥7/月",
    "trafficFrom": "50GB",
    "openedYear": 2023,
    "line": "IEPL 企业级专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 50,
    "measured": "微风网络 节点实测连通正常，亚洲近端延迟 25–60ms，均速表现稳定",
    "aiUnlock": "支持主流 AI（ChatGPT / Claude）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "建议先按月付订阅体验实际晚高峰表现。",
    "speedImage": "/images/airports/weifeng-node-speedtest.png",
    "speedImageAlt": "微风网络 节点测速实测报告",
    "speedImageWidth": 2091,
    "speedImageHeight": 3192,
    "testEnv": "联通千兆环境 / 32 线程并发（2026年实测）",
    "scores": {
      "speed": 9,
      "unlock": 8.5,
      "stability": 9,
      "value": 8.8
    },
    "boards": [
      "best",
      "stable",
      "iepl",
      "cheap",
      "chatgpt",
      "streaming"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥7/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "清风 (Breeze)",
        "price": "¥137",
        "traffic": "100GB"
      },
      {
        "name": "乘风 (Riding)",
        "price": "¥27",
        "traffic": "200GB"
      },
      {
        "name": "破风 (Breaking)",
        "price": "¥57",
        "traffic": "500GB"
      },
      {
        "name": "御风 (Mastery)",
        "price": "¥127",
        "traffic": "1200GB"
      },
      {
        "name": "信风·不限时",
        "price": "¥200",
        "traffic": "270GB"
      },
      {
        "name": "长风·不限时",
        "price": "¥370",
        "traffic": "570GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "dalaoyun",
    "name": "大佬云",
    "tagline": "大佬云提供优质线路节点与稳定代理服务，覆盖主流地区，支持多平台客户端。",
    "url": "/go/dalaoyun/",
    "coupon": "dly888",
    "couponNote": "码 `dly888`",
    "priceFrom": "¥5.6/月",
    "trafficFrom": "60GB",
    "openedYear": 2024,
    "line": "IEPL 企业级专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "大佬云 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 9,
      "value": 8.8
    },
    "boards": [
      "best",
      "stable",
      "iepl",
      "cheap",
      "streaming"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥5.6/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "标准套餐",
        "price": "¥5.6/月",
        "traffic": "60GB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "tagline": "六年老牌 + 8 元起步 + 不限时套餐，低预算长期党的稳妥之选。",
    "url": "/go/xingdaomeng/",
    "coupon": "nmw888",
    "couponNote": "码 `nmw888`",
    "priceFrom": "¥8/月",
    "trafficFrom": "60GB（年付）",
    "line": "企业级内网专线",
    "protocols": [
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10"
    ],
    "nodeCount": 55,
    "measured": "香港延迟 25–30ms、均速 58–70MB/s；新加坡 47–66MB/s，主力地区表现稳定",
    "aiUnlock": "解锁丰富（品牌方宣称，未逐项标注）",
    "streaming": "解锁丰富（品牌方宣称）",
    "clients": "通用客户端订阅导入需联系在线客服",
    "audience": [
      "六年老牌偏好者",
      "低预算长期用户",
      "需要不限时套餐",
      "备用机场"
    ],
    "notes": "最低价为年付折算价；美国节点均速 14–34MB/s 偏弱。套餐种类多，购买前建议对照需求选档。",
    "speedImage": "/images/airports/xingdaomeng-node-speedtest.jpg",
    "speedImageAlt": "星岛梦节点测速实测：香港延迟25-30ms均速58-70MB/s，六年老牌8元起步（联通5Gbps环境）",
    "speedImageWidth": 794,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 8,
      "unlock": 8,
      "stability": 9,
      "value": 9
    },
    "boards": [
      "best",
      "cheap",
      "stable",
      "flexible"
    ],
    "highlights": [
      "六年老牌",
      "8 元起",
      "不限时套餐",
      "套餐种类多"
    ],
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "price": "¥96",
        "traffic": "60GB"
      },
      {
        "name": "星岛梦·超量150G",
        "price": "¥25",
        "traffic": "150GB"
      },
      {
        "name": "星岛梦·进阶300G",
        "price": "¥50",
        "traffic": "300GB"
      },
      {
        "name": "星岛梦·闪光500G",
        "price": "¥70",
        "traffic": "500GB"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "price": "¥130",
        "traffic": "1000GB"
      },
      {
        "name": "星岛梦·永久不限时100",
        "price": "¥100",
        "traffic": "100GB"
      },
      {
        "name": "星岛梦·永久不限时300",
        "price": "¥300",
        "traffic": "300GB"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "price": "¥600",
        "traffic": "1000GB"
      },
      {
        "name": "星岛梦·定制套餐",
        "price": "¥680",
        "traffic": "500GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "ermaoyun",
    "name": "二猫云",
    "tagline": "实测全场最快的全能选手之一：香港均速 82–91MB/s，各地区全面高速。",
    "url": "/go/ermaoyun/",
    "coupon": "ermao5555",
    "couponNote": "码 `ermao5555`",
    "priceFrom": "¥20/月",
    "trafficFrom": "130GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10",
      "马来西亚×2",
      "英/法/德/土/泰/巴西各×1"
    ],
    "nodeCount": 63,
    "measured": "香港延迟 24–31ms、均速 82–91MB/s；新加坡 72–88MB/s、日本 54–86MB/s、美国 57–74MB/s，全地区高速",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "流媒体解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "追求全地区高速",
      "多场景混合使用",
      "流媒体 + AI 双需求"
    ],
    "notes": "小众地区（英法德等）节点速度一般，主力建议使用港新日美节点。",
    "speedImage": "/images/airports/ermaoyun-node-speedtest.jpg",
    "speedImageAlt": "二猫云节点测速实测：香港均速82-91MB/s全场领先，新日美各地区全面高速（联通5Gbps环境）",
    "speedImageWidth": 705,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 9.5,
      "unlock": 9,
      "stability": 8.5,
      "value": 8.5
    },
    "boards": [
      "best",
      "chatgpt",
      "streaming",
      "iepl",
      "clash"
    ],
    "highlights": [
      "实测速度第一梯队",
      "IEPL 专线",
      "12+ 地区覆盖",
      "AI 全解锁"
    ],
    "plans": [
      {
        "name": "二猫云·不限时套餐",
        "price": "¥99",
        "traffic": "100GB"
      },
      {
        "name": "二猫年付小包",
        "price": "¥89",
        "traffic": "60GB"
      },
      {
        "name": "二猫云·白猫套餐",
        "price": "¥20",
        "traffic": "130GB"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "price": "¥40",
        "traffic": "230GB"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "price": "¥80",
        "traffic": "430GB"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "price": "¥160",
        "traffic": "850GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "wuyou",
    "name": "无忧链接",
    "tagline": "如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，T。",
    "url": "/go/wuyou/",
    "coupon": "wuyou666",
    "couponNote": "码 `wuyou666`",
    "priceFrom": "¥15/月",
    "trafficFrom": "100GB",
    "openedYear": 2025,
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 50,
    "measured": "无忧链接 节点实测连通正常，亚洲近端延迟 25–60ms，均速表现稳定",
    "aiUnlock": "支持主流 AI（ChatGPT / Claude）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "建议先按月付订阅体验实际晚高峰表现。",
    "speedImage": "/images/airports/wuyou-node-speedtest-1.jpg",
    "speedImageAlt": "无忧链接 节点测速实测报告",
    "speedImageWidth": 870,
    "speedImageHeight": 1280,
    "testEnv": "联通千兆环境 / 32 线程并发（2026年实测）",
    "scores": {
      "speed": 8.8,
      "unlock": 8.5,
      "stability": 9,
      "value": 8.8
    },
    "boards": [
      "best",
      "stable",
      "iepl",
      "cheap",
      "chatgpt",
      "streaming"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "MINI链接",
        "price": "¥79",
        "traffic": "40GB"
      },
      {
        "name": "舒心链接",
        "price": "¥19",
        "traffic": "100GB"
      },
      {
        "name": "省心链接",
        "price": "¥33",
        "traffic": "200GB"
      },
      {
        "name": "随心链接",
        "price": "¥77",
        "traffic": "500GB"
      },
      {
        "name": "忘忧链接",
        "price": "¥117",
        "traffic": "1000GB"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "price": "¥108",
        "traffic": "100GB"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "price": "¥298",
        "traffic": "300GB"
      }
    ],
    "hasRealSpeedtest": true,
    "unlockImages": [
      {
        "region": "节点质量测试",
        "url": "/images/airports/wuyou-node-speedtest-2.jpg",
        "alt": "无忧链接节点延迟与连通性第二组实测记录",
        "width": 789,
        "height": 1280
      }
    ]
  },
  {
    "id": "weituyun",
    "name": "唯兔云",
    "tagline": "2020 年开业，BGP 入口 + IEPL 命名线路，三网优化 + 智能负载均衡。",
    "url": "/go/weituyun/",
    "coupon": "weitu666",
    "couponNote": "码 `weitu666`",
    "priceFrom": "¥14.9/月",
    "trafficFrom": "100GB",
    "openedYear": 2020,
    "line": "BGP 入口 + IEPL（节点命名标注）",
    "protocols": [
      "VLESS",
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港 BGP-IEPL×20",
      "台湾×5",
      "日本×9",
      "新加坡×8",
      "美国×10",
      "马来西亚×2"
    ],
    "nodeCount": 53,
    "measured": "香港 BGP-IEPL 延迟 19–30ms、均速 40–65MB/s；美国峰值最高 92MB/s；节点命名明确标注 BGP+IEPL 线路",
    "aiUnlock": "未标注（品牌方未宣称，购买前请咨询客服）",
    "streaming": "未逐项标注（品牌方宣称节点覆盖 60+）",
    "clients": "通用客户端订阅导入需联系在线客服",
    "audience": [
      "三网用户（移动/联通/电信）",
      "看重运营年限",
      "15 元档预算"
    ],
    "notes": "品牌方宣称节点覆盖 60+，本次测速样本为 53 个；解锁能力未逐项标注，建议购买前咨询。",
    "speedImage": "/images/airports/weituyun-node-speedtest.jpg",
    "speedImageAlt": "唯兔云节点测速实测：香港BGP-IEPL延迟19-30ms，三网优化智能负载均衡（联通5Gbps环境）",
    "speedImageWidth": 803,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 8,
      "unlock": 8,
      "stability": 9,
      "value": 9
    },
    "boards": [
      "best",
      "cheap",
      "stable"
    ],
    "highlights": [
      "2020 年开业",
      "BGP+IEPL",
      "三网优化",
      "智能负载均衡"
    ],
    "plans": [
      {
        "name": "唯兔云·年付加强专线",
        "price": "¥120",
        "traffic": "75GB"
      },
      {
        "name": "唯兔云·年付版限量款",
        "price": "¥79.90",
        "traffic": "45GB"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "price": "¥14.9",
        "traffic": "100GB"
      },
      {
        "name": "唯兔云·普通版",
        "price": "¥19.90",
        "traffic": "150GB"
      },
      {
        "name": "唯兔云·进阶版",
        "price": "¥29.90",
        "traffic": "200GB"
      },
      {
        "name": "唯兔云·专业版",
        "price": "¥59.90",
        "traffic": "500GB"
      },
      {
        "name": "唯兔云·至尊版",
        "price": "¥119.90",
        "traffic": "1000GB"
      },
      {
        "name": "唯兔云·永久不限时",
        "price": "¥100",
        "traffic": "100GB"
      },
      {
        "name": "唯兔云·永久不限时",
        "price": "¥160",
        "traffic": "200GB"
      },
      {
        "name": "唯兔云·永久不限时",
        "price": "¥340",
        "traffic": "500GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "firefly",
    "name": "Firefly",
    "tagline": "如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC。",
    "url": "/go/firefly/",
    "coupon": "firefly",
    "couponNote": "码：firefly；**折扣：**8折；限制：（年付版不适用）。",
    "priceFrom": "¥8/月",
    "trafficFrom": "60GB",
    "openedYear": 2026,
    "line": "IPLC 专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "支持主流 AI（ChatGPT / Claude）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "Firefly 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 9,
      "value": 8.8
    },
    "boards": [
      "best",
      "stable",
      "iepl",
      "cheap",
      "chatgpt",
      "streaming"
    ],
    "highlights": [
      "IPLC 专线",
      "¥8/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "Firefly 年付版",
        "price": "¥96",
        "traffic": "60GB"
      },
      {
        "name": "Firefly Lite",
        "price": "¥25",
        "traffic": "150GB"
      },
      {
        "name": "Firefly Plus",
        "price": "¥45",
        "traffic": "300GB"
      },
      {
        "name": "Firefly Blaze",
        "price": "¥85",
        "traffic": "600GB"
      },
      {
        "name": "Firefly Nova",
        "price": "¥150",
        "traffic": "1000GB"
      },
      {
        "name": "Firefly 不限时",
        "price": "¥100",
        "traffic": "100GB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "yuzhouyun",
    "name": "宇宙云",
    "tagline": "14.9 元档的均衡实力派：香港均速 80–129MB/s、日本 92–124MB/s，含少见的俄罗斯节点。",
    "url": "/go/yuzhouyun/",
    "coupon": "YUZHOU553",
    "couponNote": "码：YUZHOU553（历史资料称新用户8折）",
    "priceFrom": "¥14.9/月",
    "trafficFrom": "100GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS（宣称）",
      "Shadowsocks（订阅分发实测）"
    ],
    "regions": [
      "香港×20",
      "美国×10",
      "日本×10",
      "新加坡×10",
      "马来西亚×2",
      "台湾×5",
      "俄罗斯×1"
    ],
    "nodeCount": 58,
    "measured": "香港 20 节点均速 80–129MB/s（峰值 145MB/s）、日本 92–124MB/s；美国 28–78MB/s 波动；含少见的俄罗斯节点",
    "aiUnlock": "未标注（品牌方未宣称，购买前请咨询客服）",
    "streaming": "流媒体全解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "15 元档预算",
      "香港/日本主力用户",
      "流媒体用户",
      "需要俄罗斯节点"
    ],
    "notes": "美国与新加坡部分节点速度波动较大，马来西亚/俄罗斯节点仅应急可用；AI 解锁未标注，ChatGPT 需求先咨询客服。",
    "speedImage": "/images/airports/yuzhouyun-node-speedtest.jpg",
    "speedImageAlt": "宇宙云节点测速实测：香港20节点均速80-129MB/s、日本92-124MB/s，14.9元IEPL专线（珠海联通9Gbps环境）",
    "speedImageWidth": 697,
    "speedImageHeight": 1280,
    "testEnv": "珠海联通 9Gbps / 32 线程（MiaoKo 4.3.3，2026-08-05）",
    "scores": {
      "speed": 8.5,
      "unlock": 8,
      "stability": 8.5,
      "value": 9.5
    },
    "boards": [
      "best",
      "cheap",
      "streaming"
    ],
    "highlights": [
      "14.9 元专线",
      "香港百兆均速",
      "日本线路强",
      "俄罗斯节点"
    ],
    "plans": [
      {
        "name": "性价比小包",
        "price": "¥14.9/月",
        "traffic": "100GB/月"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "u1s1",
    "name": "U1S1",
    "tagline": "实测香港/新加坡均速破百：HK 专线 93–107MB/s，速度天花板级表现。",
    "url": "/go/u1s1/",
    "coupon": "akaka",
    "couponNote": "码 `akaka`",
    "priceFrom": "¥20/月",
    "trafficFrom": "120GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港专线×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10",
      "马来西亚×2",
      "泰/土/法/英/德/越各×1"
    ],
    "nodeCount": 63,
    "measured": "香港专线延迟 14–20ms、均速 93–107MB/s；新加坡均速 99–107MB/s——两地实测速度全场第一",
    "aiUnlock": "未标注（品牌方未宣称，购买前请咨询客服）",
    "streaming": "流媒体全解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "追求极致速度",
      "4K/8K 流媒体",
      "大文件下载",
      "港新节点主力用户"
    ],
    "notes": "美国多数节点实测速度偏弱（部分仅 5–10MB/s），美区重度需求慎选；日本节点延迟偏高（150ms+）。",
    "speedImage": "/images/airports/u1s1-node-speedtest.jpg",
    "speedImageAlt": "U1S1节点测速实测：香港专线均速93-107MB/s、新加坡99-107MB/s，实测速度全场第一（联通5Gbps环境）",
    "speedImageWidth": 690,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 9.5,
      "unlock": 8.5,
      "stability": 8.5,
      "value": 8
    },
    "boards": [
      "best",
      "streaming",
      "iepl",
      "shadowrocket"
    ],
    "highlights": [
      "港新均速破百",
      "IEPL 专线",
      "流媒体全解锁"
    ],
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "price": "¥96",
        "traffic": "60GB"
      },
      {
        "name": "u1s1·普通人真够了包",
        "price": "¥20",
        "traffic": "120GB"
      },
      {
        "name": "u1s1·你以为用不到包",
        "price": "¥40",
        "traffic": "300GB"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "price": "¥100",
        "traffic": "700GB"
      },
      {
        "name": "u1s1·我全都要包",
        "price": "¥180",
        "traffic": "1500GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "lingmao",
    "name": "灵猫网络",
    "tagline": "香港延迟低至 13ms 的企业级内网专线，套餐种类多、支持不限时。",
    "url": "/go/lingmao/",
    "coupon": "lmao888",
    "couponNote": "码 `lmao888`",
    "priceFrom": "¥19/月",
    "trafficFrom": "150GB",
    "line": "企业级内网专线",
    "protocols": [
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港×20",
      "美国×10",
      "日本×10",
      "新加坡×10",
      "台湾×5"
    ],
    "nodeCount": 55,
    "measured": "香港延迟 13–18ms 为全场最低档；新加坡节点均速最高 71MB/s；香港均速 17–33MB/s 偏保守",
    "aiUnlock": "未标注（品牌方宣称「解锁丰富」，未逐项标注）",
    "streaming": "解锁丰富（品牌方宣称）",
    "clients": "通用客户端订阅导入需联系在线客服",
    "audience": [
      "延迟敏感型用户",
      "需要不限时套餐",
      "轻度网页/办公使用"
    ],
    "notes": "香港节点延迟极低但实测均速偏保守（17–33MB/s），大流量下载/4K 需求建议用新加坡节点或对比其他家。",
    "speedImage": "/images/airports/lingmao-node-speedtest.jpg",
    "speedImageAlt": "灵猫网络节点测速实测：香港延迟13-18ms全场最低档，企业级内网专线（联通5Gbps环境）",
    "speedImageWidth": 794,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 7.5,
      "unlock": 8,
      "stability": 8.5,
      "value": 8
    },
    "boards": [
      "best",
      "stable",
      "flexible",
      "shadowrocket"
    ],
    "highlights": [
      "香港 13ms 起",
      "企业级专线",
      "不限时套餐",
      "套餐种类多"
    ],
    "plans": [
      {
        "name": "灵猫·年付小包",
        "price": "¥85",
        "traffic": "45GB"
      },
      {
        "name": "灵猫·年付Small",
        "price": "¥195",
        "traffic": "150GB"
      },
      {
        "name": "灵猫·年付Big",
        "price": "¥295",
        "traffic": "300GB"
      },
      {
        "name": "灵猫·季付Big",
        "price": "¥125",
        "traffic": "300GB"
      },
      {
        "name": "灵猫·月付Small",
        "price": "¥25",
        "traffic": "150GB"
      },
      {
        "name": "灵猫·月付Big",
        "price": "¥45",
        "traffic": "300GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "jilianyun",
    "name": "极连云",
    "tagline": "香港专线峰值破百、AI 全解锁，18 元档的专线快车。",
    "url": "/go/jilianyun/",
    "coupon": "ji8888",
    "couponNote": "码 `ji8888`",
    "priceFrom": "¥18/月",
    "trafficFrom": "100GB",
    "line": "IEPL 专线",
    "protocols": [
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港专线×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10",
      "马来西亚×2",
      "泰/土/法/英/德/越各×1"
    ],
    "nodeCount": 63,
    "measured": "香港专线多数节点均速 77–98MB/s、峰值最高 103MB/s；部分香港节点测试时延迟波动较大（30ms–291ms）",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "流媒体全解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "香港高速需求",
      "AI 工具用户",
      "18 元档预算"
    ],
    "notes": "测试时段部分香港/日本节点延迟波动明显，建议实际使用时手动测速择优；日本节点整体偏弱。",
    "speedImage": "/images/airports/jilianyun-node-speedtest.jpg",
    "speedImageAlt": "极连云节点测速实测：香港专线均速77-98MB/s峰值破百，AI全解锁18元档（联通5Gbps环境）",
    "speedImageWidth": 676,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 8.5,
      "unlock": 9,
      "stability": 8,
      "value": 8.5
    },
    "boards": [
      "best",
      "chatgpt",
      "iepl"
    ],
    "highlights": [
      "香港峰值破百",
      "IEPL 专线",
      "AI 全解锁"
    ],
    "plans": [
      {
        "name": "入门套餐",
        "price": "¥18/月",
        "traffic": "100GB/月"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "guangnianti",
    "name": "光年梯",
    "tagline": "港/新/日三线全部 75MB/s+ 的均衡快车，18 元档少见的高速表现。",
    "url": "/go/guangnianti/",
    "coupon": "gnt6666",
    "couponNote": "码 `gnt6666`",
    "priceFrom": "¥18/月",
    "trafficFrom": "110GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10",
      "马来西亚×2",
      "英/法/德/土/泰/巴西各×1"
    ],
    "nodeCount": 63,
    "measured": "香港均速 73–95MB/s、新加坡 87–95MB/s、日本 75–91MB/s——亚洲三大主力地区全部高速",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "流媒体全解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "亚洲节点主力用户",
      "ChatGPT + 流媒体双需求",
      "18 元档预算"
    ],
    "notes": "美国节点实测均速仅 12–38MB/s，为明显短板；美区需求建议搭配其他家或选购前咨询。",
    "speedImage": "/images/airports/guangnianti-node-speedtest.jpg",
    "speedImageAlt": "光年梯节点测速实测：香港73-95MB/s、新加坡87-95MB/s、日本75-91MB/s亚洲三线高速（联通5Gbps环境）",
    "speedImageWidth": 1000,
    "speedImageHeight": 1949,
    "scores": {
      "speed": 9,
      "unlock": 9,
      "stability": 8.5,
      "value": 9
    },
    "boards": [
      "best",
      "chatgpt",
      "cheap",
      "iepl",
      "clash"
    ],
    "highlights": [
      "亚洲三线高速",
      "IEPL 专线",
      "AI 全解锁",
      "18 元档"
    ],
    "plans": [
      {
        "name": "性价比小包",
        "price": "¥18/月",
        "traffic": "110GB/月"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "yifanyun",
    "name": "一翻云",
    "tagline": "香港 20 条线路均速 80–92MB/s，150GB 大流量包一步到位。",
    "url": "/go/yifanyun/",
    "coupon": "yfy6666",
    "couponNote": "码 `yfy6666`",
    "priceFrom": "¥20/月",
    "trafficFrom": "150GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10"
    ],
    "nodeCount": 55,
    "measured": "香港延迟 16–24ms、均速 80–92MB/s；美国均速 61–81MB/s、峰值最高 149MB/s",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "流媒体解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "大流量用户",
      "香港节点主力",
      "美区 + 港区双需求"
    ],
    "notes": "新加坡/日本部分节点速度波动较大（26–89MB/s），建议实际使用时手动测速择优。",
    "speedImage": "/images/airports/yifanyun-node-speedtest.jpg",
    "speedImageAlt": "一翻云节点测速实测：香港20线均速80-92MB/s，美国峰值最高149MB/s，20元150GB大流量（联通5Gbps环境）",
    "speedImageWidth": 1000,
    "speedImageHeight": 1720,
    "scores": {
      "speed": 9,
      "unlock": 8.5,
      "stability": 8.5,
      "value": 8.5
    },
    "boards": [
      "best",
      "streaming",
      "iepl",
      "v2rayn",
      "shadowrocket"
    ],
    "highlights": [
      "香港全线高速",
      "150GB 大流量",
      "IEPL 专线"
    ],
    "plans": [
      {
        "name": "轻享版",
        "price": "¥20",
        "traffic": "150GB"
      },
      {
        "name": "舒享版",
        "price": "¥35",
        "traffic": "350GB"
      },
      {
        "name": "尊享版",
        "price": "¥55",
        "traffic": "600GB"
      },
      {
        "name": "极致版",
        "price": "¥95",
        "traffic": "1.2TB"
      },
      {
        "name": "98¥·年付小包",
        "price": "¥98",
        "traffic": "60GB"
      },
      {
        "name": "轻享版·不限时包",
        "price": "¥100",
        "traffic": "100GB"
      },
      {
        "name": "舒享版·不限时包",
        "price": "¥200",
        "traffic": "250GB"
      },
      {
        "name": "尊享版·不限时包",
        "price": "¥400",
        "traffic": "500GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "sogoyun",
    "name": "SOGO云",
    "tagline": "日本/美国线路实测惊艳：日本均速最高破百、美国峰值 161MB/s。",
    "url": "/go/sogoyun/",
    "coupon": "SOGO10000",
    "couponNote": "码：SOGO10000；**折扣：**9折；**限制：**未标注。",
    "priceFrom": "¥25/月",
    "trafficFrom": "150GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10",
      "马来西亚×2",
      "土/英/德/法/泰/韩各×1"
    ],
    "nodeCount": 63,
    "measured": "日本均速 71–106MB/s、美国均速 50–86MB/s（峰值 161MB/s）、新加坡后段节点 89–98MB/s——远程线路表现全场最佳",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "流媒体全解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "日区/美区主力用户",
      "海外游戏玩家",
      "跨境业务",
      "追求远程线路质量"
    ],
    "notes": "价格档位偏高（25 元档）；香港节点速度 44–61MB/s 属中上但非顶尖。",
    "speedImage": "/images/airports/sogoyun-node-speedtest.jpg",
    "speedImageAlt": "SOGO云节点测速实测：日本均速71-106MB/s、美国峰值161MB/s，日美远程线路全场最佳（联通5Gbps环境）",
    "speedImageWidth": 680,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 9,
      "unlock": 9,
      "stability": 8.5,
      "value": 8
    },
    "boards": [
      "best",
      "streaming",
      "iepl",
      "clash",
      "v2rayn"
    ],
    "highlights": [
      "日美线路最佳",
      "IEPL 专线",
      "AI 全解锁",
      "13 地区覆盖"
    ],
    "plans": [
      {
        "name": "小包-年付版",
        "price": "¥98",
        "traffic": "60GB"
      },
      {
        "name": "基础版",
        "price": "¥25",
        "traffic": "150GB"
      },
      {
        "name": "优选版",
        "price": "¥45",
        "traffic": "350GB"
      },
      {
        "name": "强化版",
        "price": "¥80",
        "traffic": "550GB"
      },
      {
        "name": "顶配版",
        "price": "¥150",
        "traffic": "1.1TB"
      },
      {
        "name": "SOGO基础餐不限时版",
        "price": "¥120",
        "traffic": "120GB"
      },
      {
        "name": "SOGO优选餐不限时版",
        "price": "¥220",
        "traffic": "250GB"
      },
      {
        "name": "SOGO强化餐不限时版",
        "price": "¥450",
        "traffic": "500GB"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "price": "¥850",
        "traffic": "1.0TB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "kexinyun",
    "name": "可信云",
    "tagline": "流媒体全解锁的 IEPL 专线，港新日美标准覆盖的稳妥选项。",
    "url": "/go/kexinyun/",
    "coupon": "kkk333",
    "couponNote": "码 `kkk333`",
    "priceFrom": "¥25/月",
    "trafficFrom": "150GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10"
    ],
    "nodeCount": 55,
    "measured": "香港延迟 24–34ms、均速 28–53MB/s；新加坡 37–48MB/s；整体速度中等偏稳",
    "aiUnlock": "未标注（品牌方未宣称，购买前请咨询客服）",
    "streaming": "流媒体全解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "流媒体中度用户",
      "追求稳定不追极速",
      "标准五地区需求"
    ],
    "notes": "25 元档定价但实测速度中等（美国仅 12–20MB/s），性价比敏感用户建议对比同档位品牌。",
    "speedImage": "/images/airports/kexinyun-node-speedtest.jpg",
    "speedImageAlt": "可信云节点测速实测：香港延迟24-34ms，流媒体全解锁IEPL专线（联通5Gbps环境）",
    "speedImageWidth": 1000,
    "speedImageHeight": 1723,
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8.5,
      "value": 7.5
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "流媒体全解锁",
      "IEPL 专线",
      "五地区标配"
    ],
    "plans": [
      {
        "name": "入门套餐",
        "price": "¥25/月",
        "traffic": "150GB/月"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "sujie",
    "name": "速界",
    "tagline": "主打 AI 全解锁的 IEPL 专线，香港 13ms 起步延迟拉满。",
    "url": "/go/sujie/",
    "coupon": "sss1111",
    "couponNote": "码 `sss1111`",
    "priceFrom": "¥25/月",
    "trafficFrom": "150GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10",
      "马来西亚×2",
      "英/法/德/土/泰/巴西各×1"
    ],
    "nodeCount": 63,
    "measured": "香港延迟 13–29ms、均速 41–69MB/s；美国峰值最高 88MB/s；覆盖 13 个国家地区",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "未标注（品牌方未宣称流媒体，购买前请咨询客服）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "AI 工具重度用户",
      "ChatGPT/Claude 长任务",
      "需要多地区备用节点"
    ],
    "notes": "品牌方卖点未标注流媒体解锁，追剧需求建议购买前咨询；25 元档价格偏高。",
    "speedImage": "/images/airports/sujie-node-speedtest.jpg",
    "speedImageAlt": "速界节点测速实测：香港延迟13-29ms，主打AI全解锁的IEPL专线（联通5Gbps环境）",
    "speedImageWidth": 702,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 8,
      "unlock": 8.5,
      "stability": 8.5,
      "value": 7.5
    },
    "boards": [
      "best",
      "chatgpt",
      "shadowrocket",
      "v2rayn"
    ],
    "highlights": [
      "AI 全解锁",
      "IEPL 专线",
      "香港 13ms 起",
      "13 地区覆盖"
    ],
    "plans": [
      {
        "name": "入门套餐",
        "price": "¥25/月",
        "traffic": "150GB/月"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "shanyue",
    "name": "闪跃",
    "tagline": "闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT。",
    "url": "/go/shanyue/",
    "coupon": "shanyue",
    "couponNote": "码：shanyue；**折扣：**8折；限制：（仅限闪动 / 飞跃 / 瞬移 / 跃迁，年付版不适用）。",
    "priceFrom": "¥8/月",
    "trafficFrom": "60GB",
    "line": "IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "支持主流 AI（ChatGPT / Claude）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "闪跃 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IPLC 专线",
      "¥8/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "闪跃年付版",
        "price": "¥96",
        "traffic": "60GB"
      },
      {
        "name": "闪动 (Flicker)",
        "price": "¥24",
        "traffic": "150GB"
      },
      {
        "name": "飞跃 (Leap)",
        "price": "¥44",
        "traffic": "300GB"
      },
      {
        "name": "瞬移 (Teleport)",
        "price": "¥84",
        "traffic": "600GB"
      },
      {
        "name": "跃迁 (Warp)",
        "price": "¥134",
        "traffic": "1000GB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "quanqiuyun",
    "name": "全球云",
    "tagline": "香港 14–22ms + 均速 73–91MB/s，港区体验第一梯队的均衡之选。",
    "url": "/go/quanqiuyun/",
    "coupon": "qq88",
    "couponNote": "码：qq88；**折扣：**8折；**限制：**未标注。",
    "priceFrom": "¥20/月",
    "trafficFrom": "120GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks（订阅分发）"
    ],
    "regions": [
      "香港×20",
      "台湾×5",
      "新加坡×10",
      "日本×10",
      "美国×10",
      "马来西亚×2",
      "土/英/德/法/泰/韩各×1"
    ],
    "nodeCount": 63,
    "measured": "香港延迟 14–22ms、均速 73–91MB/s；美国均速 45–68MB/s、峰值最高 120MB/s；日本节点延迟偏高（约 200ms）",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "流媒体解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "香港节点主力用户",
      "AI 工具用户",
      "中等预算全能需求"
    ],
    "notes": "日本节点实测延迟约 200ms（速度尚可），对延迟敏感的日区需求（如游戏）不适合。",
    "speedImage": "/images/airports/quanqiuyun-node-speedtest.jpg",
    "speedImageAlt": "全球云节点测速实测：香港延迟14-22ms均速73-91MB/s港区第一梯队（联通5Gbps环境）",
    "speedImageWidth": 676,
    "speedImageHeight": 1376,
    "scores": {
      "speed": 8.5,
      "unlock": 9,
      "stability": 8.5,
      "value": 8.5
    },
    "boards": [
      "best",
      "chatgpt",
      "stable",
      "clash",
      "shadowrocket"
    ],
    "highlights": [
      "香港第一梯队",
      "IEPL 专线",
      "AI 全解锁"
    ],
    "plans": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "price": "¥100",
        "traffic": "100GB"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "price": "¥360",
        "traffic": "400GB"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "price": "¥700",
        "traffic": "800GB"
      },
      {
        "name": "轻量版",
        "price": "¥99",
        "traffic": "59GB"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "price": "¥20",
        "traffic": "120GB"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "price": "¥40",
        "traffic": "300GB"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "price": "¥100",
        "traffic": "700GB"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "price": "¥180",
        "traffic": "1500GB"
      },
      {
        "name": "独享私人专线节点",
        "price": "¥680",
        "traffic": "500GB"
      }
    ],
    "hasRealSpeedtest": true
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "tagline": "闪电鼠提供优质线路节点与稳定代理服务，覆盖主流地区，支持多平台客户端。",
    "url": "/go/shandianshu/",
    "coupon": "sd88",
    "couponNote": "码 `sd88`",
    "priceFrom": "¥5.6/月",
    "trafficFrom": "60GB",
    "openedYear": 2024,
    "line": "IEPL 企业级专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "闪电鼠 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥5.6/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "标准套餐",
        "price": "¥5.6/月",
        "traffic": "60GB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "tagline": "云界线提供优质线路节点与稳定代理服务，覆盖主流地区，支持多平台客户端。",
    "url": "/go/yunjiexian/",
    "coupon": "yjx888",
    "couponNote": "码 `yjx888`",
    "priceFrom": "¥5.6/月",
    "trafficFrom": "60GB",
    "openedYear": 2024,
    "line": "IEPL 企业级专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "云界线 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥5.6/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "标准套餐",
        "price": "¥5.6/月",
        "traffic": "60GB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "liulianyun",
    "name": "榴莲云",
    "tagline": "榴莲云提供优质线路节点与稳定代理服务，覆盖主流地区，支持多平台客户端。",
    "url": "/go/liulianyun/",
    "coupon": "ll88",
    "couponNote": "码 `ll88`",
    "priceFrom": "¥5.6/月",
    "trafficFrom": "60GB",
    "openedYear": 2024,
    "line": "IEPL 企业级专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "榴莲云 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥5.6/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "标准套餐",
        "price": "¥5.6/月",
        "traffic": "60GB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "tagline": "神行加速提供优质线路节点与稳定代理服务，覆盖主流地区，支持多平台客户端。",
    "url": "/go/shenxing/",
    "coupon": "xs0077",
    "couponNote": "码 `xs0077`",
    "priceFrom": "¥14/月",
    "trafficFrom": "120GB",
    "openedYear": 2024,
    "line": "IEPL 企业级专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "神行加速 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥14/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "标准套餐",
        "price": "¥14/月",
        "traffic": "120GB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "tagline": "环球梯提供优质线路节点与稳定代理服务，覆盖主流地区，支持多平台客户端。",
    "url": "/go/huanqiuti/",
    "coupon": "HQ66",
    "couponNote": "码 `HQ66`",
    "priceFrom": "¥5.6/月",
    "trafficFrom": "60GB",
    "openedYear": 2024,
    "line": "IEPL 企业级专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "环球梯 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥5.6/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "标准套餐",
        "price": "¥5.6/月",
        "traffic": "60GB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "tagline": "隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、D。",
    "url": "/go/yinxingren/",
    "coupon": "yxr888",
    "couponNote": "码 `yxr888`",
    "priceFrom": "¥9.08/月",
    "trafficFrom": "100GB",
    "openedYear": 2024,
    "line": "IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "支持主流 AI（ChatGPT / Claude）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "隐形人 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IPLC 专线",
      "¥9.08/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "隐形人 白银纪元",
        "price": "¥24",
        "traffic": "144GB"
      },
      {
        "name": "隐形人 黄金序列",
        "price": "¥48",
        "traffic": "360GB"
      },
      {
        "name": "隐形人 铂金至臻",
        "price": "¥105",
        "traffic": "750GB"
      },
      {
        "name": "隐形人 钻石穹顶",
        "price": "¥185",
        "traffic": "1.6TB"
      },
      {
        "name": "王者定制版",
        "price": "¥680",
        "traffic": "500GB"
      },
      {
        "name": "星耀风暴 365天不熄",
        "price": "¥109",
        "traffic": "80GB"
      },
      {
        "name": "一次性小流量",
        "price": "¥229",
        "traffic": "160GB"
      },
      {
        "name": "一次性标准流量包",
        "price": "¥549",
        "traffic": "420GB"
      },
      {
        "name": "一次性精英流量包",
        "price": "¥1199",
        "traffic": "1.0TB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "tiziyun",
    "name": "梯子云",
    "tagline": "梯子云提供优质线路节点与稳定代理服务，覆盖主流地区，支持多平台客户端。",
    "url": "/go/tiziyun/",
    "coupon": "tiziyun",
    "couponNote": "码 `tiziyun`",
    "priceFrom": "¥7.4/月",
    "trafficFrom": "60GB",
    "openedYear": 2025,
    "line": "IEPL 企业级专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "梯子云 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥7.4/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "标准套餐",
        "price": "¥7.4/月",
        "traffic": "60GB"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "wgetcloud",
    "name": "WgetCloud",
    "tagline": "WgetCloud是一项网络代理服务。当前资料整理了 3 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-05-02 的实测资料；测。",
    "url": "/go/wgetcloud/",
    "couponNote": "码。",
    "priceFrom": "¥15/月",
    "trafficFrom": "230GB",
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "WgetCloud 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "基础专线服务",
        "price": "¥297",
        "traffic": "230GB/月"
      },
      {
        "name": "优质专线服务",
        "price": "¥327",
        "traffic": "250GB/月"
      },
      {
        "name": "精品专线服务",
        "price": "¥357",
        "traffic": "270GB/月"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "baiyueguang",
    "name": "白月光",
    "tagline": "白月光是一项网络代理服务。当前资料整理了 6 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-07-17 的实测资料；测试结果只代表。",
    "url": "/go/baiyueguang/",
    "couponNote": "码。",
    "priceFrom": "¥15/月",
    "trafficFrom": "100GB",
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "白月光 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "小包",
        "price": "¥66",
        "traffic": "每月100GB高速流量"
      },
      {
        "name": "中包",
        "price": "¥126",
        "traffic": "每月250GB高速流量"
      },
      {
        "name": "大包",
        "price": "¥156",
        "traffic": "每月400GB高速流量"
      },
      {
        "name": "超大包",
        "price": "¥216",
        "traffic": "每月750GB高速流量"
      },
      {
        "name": "不差钱",
        "price": "¥231",
        "traffic": "每月900GB高速流量"
      },
      {
        "name": "旗舰包",
        "price": "¥2500",
        "traffic": "每月2500GB超大流量"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "flyingbird",
    "name": "FlyingBird",
    "tagline": "飞鸟机场以 Shadowsocks、全专线 IPLC、无倍率和不限速为主要卖点，套餐覆盖多档长期订阅。资料显示它是一云梯/飞鸟同源站群的核心品牌之一。。",
    "url": "/go/flyingbird/",
    "coupon": "theo",
    "couponNote": "码：theo（9 折，每用户一次）/ year85（年付 85 折，可用 5 次）；季 9 / 半 85 / 年 8 折，最高约 64 折",
    "priceFrom": "¥15/月",
    "trafficFrom": "100G",
    "line": "IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "FlyingBird 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "青铜套餐",
        "price": "¥15",
        "traffic": "100G"
      },
      {
        "name": "青铜套餐",
        "price": "¥41",
        "traffic": "100G"
      },
      {
        "name": "青铜套餐",
        "price": "¥77",
        "traffic": "100G"
      },
      {
        "name": "青铜套餐",
        "price": "¥144",
        "traffic": "100G"
      },
      {
        "name": "白银套餐",
        "price": "¥30",
        "traffic": "200G"
      },
      {
        "name": "白银套餐",
        "price": "¥81",
        "traffic": "200G"
      },
      {
        "name": "白银套餐",
        "price": "¥153",
        "traffic": "200G"
      },
      {
        "name": "白银套餐",
        "price": "¥288",
        "traffic": "200G"
      },
      {
        "name": "黄金套餐",
        "price": "¥75",
        "traffic": "500G"
      },
      {
        "name": "黄金套餐",
        "price": "¥203",
        "traffic": "500G"
      },
      {
        "name": "黄金套餐",
        "price": "¥383",
        "traffic": "500G"
      },
      {
        "name": "黄金套餐",
        "price": "¥720",
        "traffic": "500G"
      },
      {
        "name": "钻石套餐",
        "price": "¥150",
        "traffic": "1000G"
      },
      {
        "name": "钻石套餐",
        "price": "¥405",
        "traffic": "1000G"
      },
      {
        "name": "钻石套餐",
        "price": "¥765",
        "traffic": "1000G"
      },
      {
        "name": "钻石套餐",
        "price": "¥1440",
        "traffic": "1000G"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "cyberguard",
    "name": "CyberGuard",
    "tagline": "CyberGuard是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥32。本站保留了 2025-06-21 的实测资料；测试结果只。",
    "url": "/go/cyberguard/",
    "couponNote": "码。",
    "priceFrom": "¥32/月",
    "trafficFrom": "350GB",
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 全解锁（ChatGPT / Claude / Gemini）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "CyberGuard 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 9.2,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥32/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "150G｜轻量套餐",
        "price": "¥95",
        "traffic": "150GB/月"
      },
      {
        "name": "350G｜标准套餐",
        "price": "¥32",
        "traffic": "350GB/月"
      },
      {
        "name": "650G｜高速套餐",
        "price": "¥55",
        "traffic": "650GB/月"
      },
      {
        "name": "220G流量包｜不限时",
        "price": "¥79",
        "traffic": "220GB"
      },
      {
        "name": "840G流量包｜不限时",
        "price": "¥188",
        "traffic": "840GB"
      },
      {
        "name": "2050G｜企业套餐",
        "price": "¥200",
        "traffic": "2050GB/月"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "longmaoyun",
    "name": "龙猫云",
    "tagline": "龙猫云以 Shadowsocks 和 IPLC 全专线为主要定位，原资料记载最高 2000Mbps，并提供较完整的使用教程。它已被站长核实为一云梯/飞。",
    "url": "/go/longmaoyun/",
    "couponNote": "码：无；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
    "priceFrom": "¥15/月",
    "trafficFrom": "100G",
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "龙猫云 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "VIP1",
        "price": "¥15",
        "traffic": "100G"
      },
      {
        "name": "VIP1",
        "price": "¥41",
        "traffic": "100G"
      },
      {
        "name": "VIP1",
        "price": "¥77",
        "traffic": "100G"
      },
      {
        "name": "VIP1",
        "price": "¥144",
        "traffic": "100G"
      },
      {
        "name": "VIP2",
        "price": "¥30",
        "traffic": "200G"
      },
      {
        "name": "VIP2",
        "price": "¥81",
        "traffic": "200G"
      },
      {
        "name": "VIP2",
        "price": "¥153",
        "traffic": "200G"
      },
      {
        "name": "VIP2",
        "price": "¥288",
        "traffic": "200G"
      },
      {
        "name": "VIP3",
        "price": "¥60",
        "traffic": "400G"
      },
      {
        "name": "VIP3",
        "price": "¥162",
        "traffic": "400G"
      },
      {
        "name": "VIP3",
        "price": "¥306",
        "traffic": "400G"
      },
      {
        "name": "VIP3",
        "price": "¥576",
        "traffic": "400G"
      },
      {
        "name": "VIP4",
        "price": "¥120",
        "traffic": "1000G"
      },
      {
        "name": "VIP4",
        "price": "¥324",
        "traffic": "1000G"
      },
      {
        "name": "VIP4",
        "price": "¥697",
        "traffic": "1000G"
      },
      {
        "name": "VIP4",
        "price": "¥1152",
        "traffic": "1000G"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "fatcat",
    "name": "FATCAT",
    "tagline": "肥猫云以企业级 IEPL/IPLC 内网专线为主要定位，强调抗干扰和抗封锁，套餐包含年付加强版及多档流量。。",
    "url": "/go/fatcat/",
    "couponNote": "码：无；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
    "priceFrom": "¥15/月",
    "trafficFrom": "60G",
    "line": "IEPL 企业级专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "FATCAT 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "年付加强版",
        "price": "¥96",
        "traffic": "60G"
      },
      {
        "name": "基础套餐",
        "price": "¥20",
        "traffic": "120G"
      },
      {
        "name": "基础套餐",
        "price": "¥54",
        "traffic": "120G"
      },
      {
        "name": "基础套餐",
        "price": "¥102",
        "traffic": "120G"
      },
      {
        "name": "基础套餐",
        "price": "¥192",
        "traffic": "120G"
      },
      {
        "name": "标准套餐",
        "price": "¥40",
        "traffic": "300G"
      },
      {
        "name": "标准套餐",
        "price": "¥108",
        "traffic": "300G"
      },
      {
        "name": "标准套餐",
        "price": "¥204",
        "traffic": "300G"
      },
      {
        "name": "标准套餐",
        "price": "¥384",
        "traffic": "300G"
      },
      {
        "name": "旗舰套餐",
        "price": "¥100",
        "traffic": "700G"
      },
      {
        "name": "旗舰套餐",
        "price": "¥270",
        "traffic": "700G"
      },
      {
        "name": "旗舰套餐",
        "price": "¥510",
        "traffic": "700G"
      },
      {
        "name": "旗舰套餐",
        "price": "¥960",
        "traffic": "700G"
      },
      {
        "name": "企业套餐",
        "price": "¥180",
        "traffic": "1500G"
      },
      {
        "name": "企业套餐",
        "price": "¥486",
        "traffic": "1500G"
      },
      {
        "name": "企业套餐",
        "price": "¥918",
        "traffic": "1500G"
      },
      {
        "name": "企业套餐",
        "price": "¥1728",
        "traffic": "1500G"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "tntcloud",
    "name": "TNTCloud",
    "tagline": "TNT Cloud 以 IPLC 内网专线为主要定位，曾用名 3A 加速器/AAA Speed，资料记载 2000Mbps，并提供季付限量包及跨境电商。",
    "url": "/go/tntcloud/",
    "coupon": "TNT85",
    "couponNote": "码：TNT85（85 折，限量包不支持）；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
    "priceFrom": "¥15/月",
    "trafficFrom": "60G",
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "TNTCloud 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "轻量包",
        "price": "¥30",
        "traffic": "60G"
      },
      {
        "name": "轻量包",
        "price": "¥56",
        "traffic": "60G"
      },
      {
        "name": "轻量包",
        "price": "¥98",
        "traffic": "60G"
      },
      {
        "name": "VIP1",
        "price": "¥20",
        "traffic": "110G"
      },
      {
        "name": "VIP1",
        "price": "¥54",
        "traffic": "110G"
      },
      {
        "name": "VIP1",
        "price": "¥102",
        "traffic": "110G"
      },
      {
        "name": "VIP1",
        "price": "¥192",
        "traffic": "110G"
      },
      {
        "name": "VIP2",
        "price": "¥40",
        "traffic": "220G"
      },
      {
        "name": "VIP2",
        "price": "¥108",
        "traffic": "220G"
      },
      {
        "name": "VIP2",
        "price": "¥204",
        "traffic": "220G"
      },
      {
        "name": "VIP2",
        "price": "¥336",
        "traffic": "220G"
      },
      {
        "name": "VIP3",
        "price": "¥80",
        "traffic": "460G"
      },
      {
        "name": "VIP3",
        "price": "¥216",
        "traffic": "460G"
      },
      {
        "name": "VIP3",
        "price": "¥408",
        "traffic": "460G"
      },
      {
        "name": "VIP3",
        "price": "¥768",
        "traffic": "460G"
      },
      {
        "name": "VIP4",
        "price": "¥160",
        "traffic": "1100G"
      },
      {
        "name": "VIP4",
        "price": "¥432",
        "traffic": "1100G"
      },
      {
        "name": "VIP4",
        "price": "¥816",
        "traffic": "1100G"
      },
      {
        "name": "VIP4",
        "price": "¥1536",
        "traffic": "1100G"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "qingyunti",
    "name": "青云梯",
    "tagline": "青云梯是运营六年以上的成熟品牌，原资料显示采用 SS 与企业级 IPLC、三网优化和智能负载均衡，并支持企业定制。现有资料记录（未独立实测）覆盖 10。",
    "url": "/go/qingyunti/",
    "coupon": "qyt85",
    "couponNote": "码：qyt85（85 折）/ qyt80（8 折），年付小包不支持；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
    "priceFrom": "¥15/月",
    "trafficFrom": "6GB",
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "青云梯 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "年付小包",
        "price": "¥96",
        "traffic": "60G"
      },
      {
        "name": "VIP1",
        "price": "¥25",
        "traffic": "150G"
      },
      {
        "name": "VIP1",
        "price": "¥67",
        "traffic": "150G"
      },
      {
        "name": "VIP1",
        "price": "¥127",
        "traffic": "150G"
      },
      {
        "name": "VIP1",
        "price": "¥240",
        "traffic": "150G"
      },
      {
        "name": "VIP2",
        "price": "¥45",
        "traffic": "300G"
      },
      {
        "name": "VIP2",
        "price": "¥121",
        "traffic": "300G"
      },
      {
        "name": "VIP2",
        "price": "¥229",
        "traffic": "300G"
      },
      {
        "name": "VIP2",
        "price": "¥432",
        "traffic": "300G"
      },
      {
        "name": "VIP3",
        "price": "¥85",
        "traffic": "600G"
      },
      {
        "name": "VIP3",
        "price": "¥229",
        "traffic": "600G"
      },
      {
        "name": "VIP3",
        "price": "¥433",
        "traffic": "600G"
      },
      {
        "name": "VIP3",
        "price": "¥816",
        "traffic": "600G"
      },
      {
        "name": "VIP4",
        "price": "¥150",
        "traffic": "1000G"
      },
      {
        "name": "VIP4",
        "price": "¥400",
        "traffic": "1000G"
      },
      {
        "name": "VIP4",
        "price": "¥750",
        "traffic": "1000G"
      },
      {
        "name": "VIP4",
        "price": "¥1360",
        "traffic": "1000G"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "shanshuiyun",
    "name": "山水云",
    "tagline": "山水云是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥15。本站保留了 2026-06-29 的实测资料；测试结果只代表当次环境，。",
    "url": "/go/shanshuiyun/",
    "couponNote": "码。",
    "priceFrom": "¥15/月",
    "trafficFrom": "100GB",
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 全解锁（ChatGPT / Claude / Gemini）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "山水云 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 9.2,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "64G/轻量套餐",
        "price": "¥88",
        "traffic": "64GB/月"
      },
      {
        "name": "128G/轻量套餐",
        "price": "¥88",
        "traffic": "128GB/月"
      },
      {
        "name": "256G/轻量套餐",
        "price": "¥75",
        "traffic": "256GB/月"
      },
      {
        "name": "100G/月-琴",
        "price": "¥15",
        "traffic": "100GB/月"
      },
      {
        "name": "200G/月-棋",
        "price": "¥25",
        "traffic": "200GB/月"
      },
      {
        "name": "500G/月-书",
        "price": "¥50",
        "traffic": "500GB/月"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "lingdongyun",
    "name": "灵动云",
    "tagline": "灵动云是 2025 年开业的 VLESS 专线机场，截图标注 IEPL，套餐覆盖 70G 年付、100G–1.5T 周期流量、单次流量包和私人定制。已。",
    "url": "/go/lingdongyun/",
    "priceFrom": "¥15/月",
    "trafficFrom": "100G",
    "openedYear": 2025,
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "灵动云 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "灵动·拂风",
        "price": "¥20",
        "traffic": "100G/月"
      },
      {
        "name": "灵动·拂风",
        "price": "¥57",
        "traffic": "100G/月"
      },
      {
        "name": "灵动·拂风",
        "price": "¥108",
        "traffic": "100G/月"
      },
      {
        "name": "灵动·拂风",
        "price": "¥204",
        "traffic": "100G/月"
      },
      {
        "name": "灵动·拂风",
        "price": "¥384",
        "traffic": "100G/月"
      },
      {
        "name": "灵动·拂风",
        "price": "¥540",
        "traffic": "100G/月"
      },
      {
        "name": "灵动·驭浪",
        "price": "¥50",
        "traffic": "300G/月"
      },
      {
        "name": "灵动·驭浪",
        "price": "¥142.5",
        "traffic": "300G/月"
      },
      {
        "name": "灵动·驭浪",
        "price": "¥270",
        "traffic": "300G/月"
      },
      {
        "name": "灵动·驭浪",
        "price": "¥510",
        "traffic": "300G/月"
      },
      {
        "name": "灵动·驭浪",
        "price": "¥960",
        "traffic": "300G/月"
      },
      {
        "name": "灵动·驭浪",
        "price": "¥1350",
        "traffic": "300G/月"
      },
      {
        "name": "灵动·破晓",
        "price": "¥100",
        "traffic": "700G/月"
      },
      {
        "name": "灵动·破晓",
        "price": "¥285",
        "traffic": "700G/月"
      },
      {
        "name": "灵动·破晓",
        "price": "¥540",
        "traffic": "700G/月"
      },
      {
        "name": "灵动·破晓",
        "price": "¥1020",
        "traffic": "700G/月"
      },
      {
        "name": "灵动·破晓",
        "price": "¥1920",
        "traffic": "700G/月"
      },
      {
        "name": "灵动·破晓",
        "price": "¥2700",
        "traffic": "700G/月"
      },
      {
        "name": "灵动·凌霄",
        "price": "¥180",
        "traffic": "1.5T/月"
      },
      {
        "name": "灵动·凌霄",
        "price": "¥513",
        "traffic": "1.5T/月"
      },
      {
        "name": "灵动·凌霄",
        "price": "¥972",
        "traffic": "1.5T/月"
      },
      {
        "name": "灵动·凌霄",
        "price": "¥1836",
        "traffic": "1.5T/月"
      },
      {
        "name": "灵动·凌霄",
        "price": "¥3456",
        "traffic": "1.5T/月"
      },
      {
        "name": "灵动·凌霄",
        "price": "¥4860",
        "traffic": "1.5T/月"
      },
      {
        "name": "灵动·穿云",
        "price": "¥99",
        "traffic": "70G/月"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "price": "¥199",
        "traffic": "150G"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "price": "¥499",
        "traffic": "400G"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "price": "¥899",
        "traffic": "800G"
      },
      {
        "name": "灵动云·至尊私人定制",
        "price": "¥620",
        "traffic": "截图遮挡"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "langwang",
    "name": "浪网",
    "tagline": "浪网在截图中标注 IEPL 专线，提供入门、进阶、高端、商业周期档，以及年付标准、流量包和定制线路。套餐流量与设备限制被遮挡。。",
    "url": "/go/langwang/",
    "priceFrom": "¥15/月",
    "trafficFrom": "800G",
    "line": "IEPL 企业级专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "浪网 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "浪网 高端",
        "price": "¥120",
        "traffic": "800G"
      },
      {
        "name": "浪网 高端",
        "price": "¥342",
        "traffic": "800G"
      },
      {
        "name": "浪网 高端",
        "price": "¥648",
        "traffic": "800G"
      },
      {
        "name": "浪网 高端",
        "price": "¥1224",
        "traffic": "800G"
      },
      {
        "name": "浪网 高端",
        "price": "¥2304",
        "traffic": "800G"
      },
      {
        "name": "浪网 高端",
        "price": "¥3240",
        "traffic": "800G"
      },
      {
        "name": "浪网 商业",
        "price": "¥200",
        "traffic": "2000G"
      },
      {
        "name": "浪网 商业",
        "price": "¥570",
        "traffic": "2000G"
      },
      {
        "name": "浪网 商业",
        "price": "¥1080",
        "traffic": "2000G"
      },
      {
        "name": "浪网 商业",
        "price": "¥2040",
        "traffic": "2000G"
      },
      {
        "name": "浪网 商业",
        "price": "¥3840",
        "traffic": "2000G"
      },
      {
        "name": "浪网 商业",
        "price": "¥5400",
        "traffic": "2000G"
      },
      {
        "name": "浪网 年付标准",
        "price": "¥119",
        "traffic": "80G"
      },
      {
        "name": "浪网 小流量包",
        "price": "¥239",
        "traffic": "180G"
      },
      {
        "name": "浪网 标准流量包",
        "price": "¥569",
        "traffic": "450G"
      },
      {
        "name": "浪网 定制线路包",
        "price": "¥640",
        "traffic": "500G"
      },
      {
        "name": "浪网 精英流量包",
        "price": "¥1099",
        "traffic": "900G"
      },
      {
        "name": "浪网 进阶",
        "price": "¥70",
        "traffic": "450G"
      },
      {
        "name": "浪网 进阶",
        "price": "¥199.5",
        "traffic": "450G"
      },
      {
        "name": "浪网 进阶",
        "price": "¥378",
        "traffic": "450G"
      },
      {
        "name": "浪网 进阶",
        "price": "¥714",
        "traffic": "450G"
      },
      {
        "name": "浪网 进阶",
        "price": "¥1344",
        "traffic": "450G"
      },
      {
        "name": "浪网 进阶",
        "price": "¥1890",
        "traffic": "450G"
      },
      {
        "name": "浪网 入门",
        "price": "¥30",
        "traffic": "截150G"
      },
      {
        "name": "浪网 入门",
        "price": "¥85.5",
        "traffic": "截150G"
      },
      {
        "name": "浪网 入门",
        "price": "¥162",
        "traffic": "截150G"
      },
      {
        "name": "浪网 入门",
        "price": "¥306",
        "traffic": "截150G"
      },
      {
        "name": "浪网 入门",
        "price": "¥576",
        "traffic": "截150G"
      },
      {
        "name": "浪网 入门",
        "price": "¥810",
        "traffic": "截150G"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "edgenova",
    "name": "EdgeNova",
    "tagline": "边缘节点 EdgeNova 以高速直连、IPLC 和多线路自动分配为主要定位，套餐覆盖年付小包及多档常规流量，并支持主流国内支付与 USDT。。",
    "url": "/go/edgenova/",
    "coupon": "TH888",
    "couponNote": "码：TH888（8 折）",
    "priceFrom": "¥15/月",
    "trafficFrom": "72G",
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "EdgeNova 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "限时月付",
        "price": "¥15",
        "traffic": "72G"
      },
      {
        "name": "限时年付",
        "price": "¥108",
        "traffic": "45G"
      },
      {
        "name": "极界·标准",
        "price": "¥25",
        "traffic": "120G"
      },
      {
        "name": "极界·标准",
        "price": "¥70",
        "traffic": "120G"
      },
      {
        "name": "极界·标准",
        "price": "¥130",
        "traffic": "120G"
      },
      {
        "name": "极界·标准",
        "price": "¥270",
        "traffic": "120G"
      },
      {
        "name": "极界·进阶",
        "price": "¥50",
        "traffic": "250G"
      },
      {
        "name": "极界·进阶",
        "price": "¥145",
        "traffic": "250G"
      },
      {
        "name": "极界·进阶",
        "price": "¥280",
        "traffic": "250G"
      },
      {
        "name": "极界·进阶",
        "price": "¥570",
        "traffic": "250G"
      },
      {
        "name": "极界·高级",
        "price": "¥100",
        "traffic": "500G"
      },
      {
        "name": "极界·高级",
        "price": "¥290",
        "traffic": "500G"
      },
      {
        "name": "极界·高级",
        "price": "¥580",
        "traffic": "500G"
      },
      {
        "name": "极界·高级",
        "price": "¥1100",
        "traffic": "500G"
      },
      {
        "name": "极界·极限",
        "price": "¥200",
        "traffic": "1000G"
      },
      {
        "name": "极界·极限",
        "price": "¥580",
        "traffic": "1000G"
      },
      {
        "name": "极界·极限",
        "price": "¥1150",
        "traffic": "1000G"
      },
      {
        "name": "极界·极限",
        "price": "¥2300",
        "traffic": "1000G"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "yinghuochong",
    "name": "萤火虫",
    "tagline": "Firefly 采用 IPLC + VLESS 定位，资料称不限速不限设备、提供原生 IP，并覆盖多档周期套餐与不限时流量。它与微风、飞鸟和一云梯存在。",
    "url": "/go/yinghuochong/",
    "coupon": "firefly",
    "couponNote": "码：firefly（新用户 8 折）；季 9 / 半 85 / 年 8 折，最高约 64 折",
    "priceFrom": "¥15/月",
    "trafficFrom": "60G",
    "line": "IEPL / IPLC 专线",
    "protocols": [
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "萤火虫 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL / IPLC 专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "Firefly年付版",
        "price": "¥96",
        "traffic": "60G/月"
      },
      {
        "name": "Firefly Lite",
        "price": "¥25",
        "traffic": "150G/月"
      },
      {
        "name": "Firefly Lite",
        "price": "¥67",
        "traffic": "150G/月"
      },
      {
        "name": "Firefly Lite",
        "price": "¥127",
        "traffic": "150G/月"
      },
      {
        "name": "Firefly Lite",
        "price": "¥240",
        "traffic": "150G/月"
      },
      {
        "name": "Firefly Lite",
        "price": "¥420",
        "traffic": "150G/月"
      },
      {
        "name": "Firefly Lite",
        "price": "¥540",
        "traffic": "150G/月"
      },
      {
        "name": "Firefly Plus",
        "price": "¥45",
        "traffic": "300G/月"
      },
      {
        "name": "Firefly Plus",
        "price": "¥121",
        "traffic": "300G/月"
      },
      {
        "name": "Firefly Plus",
        "price": "¥229",
        "traffic": "300G/月"
      },
      {
        "name": "Firefly Plus",
        "price": "¥432",
        "traffic": "300G/月"
      },
      {
        "name": "Firefly Plus",
        "price": "¥756",
        "traffic": "300G/月"
      },
      {
        "name": "Firefly Plus",
        "price": "¥972",
        "traffic": "300G/月"
      },
      {
        "name": "Firefly Blaze",
        "price": "¥85",
        "traffic": "600G/月"
      },
      {
        "name": "Firefly Blaze",
        "price": "¥229",
        "traffic": "600G/月"
      },
      {
        "name": "Firefly Blaze",
        "price": "¥433",
        "traffic": "600G/月"
      },
      {
        "name": "Firefly Blaze",
        "price": "¥816",
        "traffic": "600G/月"
      },
      {
        "name": "Firefly Blaze",
        "price": "¥1428",
        "traffic": "600G/月"
      },
      {
        "name": "Firefly Blaze",
        "price": "¥1836",
        "traffic": "600G/月"
      },
      {
        "name": "Firefly Nova",
        "price": "¥150",
        "traffic": "1000G/月"
      },
      {
        "name": "Firefly Nova",
        "price": "¥400",
        "traffic": "1000G/月"
      },
      {
        "name": "Firefly Nova",
        "price": "¥750",
        "traffic": "1000G/月"
      },
      {
        "name": "Firefly Nova",
        "price": "¥1360",
        "traffic": "1000G/月"
      },
      {
        "name": "Firefly Nova",
        "price": "¥2399",
        "traffic": "1000G/月"
      },
      {
        "name": "Firefly Nova",
        "price": "¥3119",
        "traffic": "1000G/月"
      },
      {
        "name": "Firefly不限时",
        "price": "¥100",
        "traffic": "100G"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "sslar",
    "name": "sslar",
    "tagline": "SSLAR 定位企业级 IEPL 与多线 BGP，支持 SS/VLESS 自适应，并提供 Windows、macOS、Android 自研客户端和远程。",
    "url": "/go/sslar/",
    "coupon": "ko3eTt0w",
    "couponNote": "码：ko3eTt0w（8 折）；季 9 / 半 85 / 年 8 折，最高约 64 折",
    "priceFrom": "¥15/月",
    "trafficFrom": "100G",
    "line": "IEPL 企业级专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "nodeCount": 30,
    "measured": "官方资料宣称节点覆盖亚太与欧美，待补充独立第三方千兆测速切片",
    "aiUnlock": "AI 解锁（视节点而定）",
    "streaming": "流媒体全解锁（Netflix / Disney+ / YouTube）",
    "clients": "自研客户端 + 支持第三方客户端（Clash / Shadowrocket / v2rayN）",
    "audience": [
      "日常跨境浏览",
      "流媒体观影",
      "ChatGPT/AI 用户",
      "看重性价比"
    ],
    "notes": "当前数据基于官方资料整理，购买前建议先选最小月付周期实测。",
    "speedImage": "/images/airports/guangsuyun-node-speedtest.jpg",
    "speedImageAlt": "sslar 节点测速实测报告",
    "speedImageWidth": 1000,
    "speedImageHeight": 1478,
    "testEnv": "待核实（暂未收录独立 5Gbps 测速切片）",
    "scores": {
      "speed": 7.5,
      "unlock": 8.5,
      "stability": 8,
      "value": 8
    },
    "boards": [
      "best"
    ],
    "highlights": [
      "IEPL 企业级专线",
      "¥15/月 起",
      "主流流媒体与 AI 解锁",
      "多平台客户端支持"
    ],
    "plans": [
      {
        "name": "Basic",
        "price": "¥17",
        "traffic": "100G"
      },
      {
        "name": "Basic",
        "price": "¥46",
        "traffic": "100G"
      },
      {
        "name": "Basic",
        "price": "¥87",
        "traffic": "100G"
      },
      {
        "name": "Basic",
        "price": "¥163",
        "traffic": "100G"
      },
      {
        "name": "Standard",
        "price": "¥28",
        "traffic": "200G"
      },
      {
        "name": "Standard",
        "price": "¥76",
        "traffic": "200G"
      },
      {
        "name": "Standard",
        "price": "¥143",
        "traffic": "200G"
      },
      {
        "name": "Standard",
        "price": "¥268",
        "traffic": "200G"
      },
      {
        "name": "Premium",
        "price": "¥36",
        "traffic": "300G"
      },
      {
        "name": "Premium",
        "price": "¥97",
        "traffic": "300G"
      },
      {
        "name": "Premium",
        "price": "¥183",
        "traffic": "300G"
      },
      {
        "name": "Premium",
        "price": "¥345",
        "traffic": "300G"
      }
    ],
    "hasRealSpeedtest": false
  },
  {
    "id": "kuaili",
    "name": "快狸",
    "tagline": "流媒体 + AI 双解锁，实测香港/新加坡/日本三线全部 200MB/s+ 高速。",
    "url": "/go/kuaili/",
    "coupon": "kkk2222",
    "couponNote": "注册优惠",
    "priceFrom": "¥25/月",
    "trafficFrom": "150GB",
    "line": "IEPL 专线",
    "protocols": [
      "VLESS（全节点实测）"
    ],
    "regions": [
      "香港×20",
      "台湾×5",
      "新加坡×10",
      "美国×10",
      "马来西亚×2",
      "日本×10",
      "巴西×1",
      "德国×5"
    ],
    "nodeCount": 63,
    "measured": "香港均速 216–319MB/s、新加坡 239–343MB/s、日本 231–423MB/s（峰值 473MB/s）；美国除 US01（240MB/s）外多数 21–33MB/s",
    "aiUnlock": "AI 全解锁（品牌方宣称）",
    "streaming": "流媒体全解锁（品牌方宣称）",
    "clients": "自研客户端；通用客户端订阅导入需联系在线客服",
    "audience": [
      "流媒体 + AI 双需求",
      "亚洲区高速刚需",
      "150GB 大流量用户",
      "游戏用户（FullCone UDP）"
    ],
    "notes": "美国区除 US01 外多数节点偏弱；日本04/马来西亚02 测试时未跑通；德国×5 约 30MB/s 应急可用。",
    "speedImage": "/images/airports/kuaili-node-speedtest.jpg",
    "speedImageAlt": "快狸节点测速实测：香港均速216-319MB/s、日本峰值473MB/s，VLESS全节点FullCone UDP双解锁（珠海联通9Gbps环境）",
    "speedImageWidth": 677,
    "speedImageHeight": 1280,
    "testEnv": "珠海联通 9Gbps / 32 线程（MiaoKo 4.3.3，2026-08-05）",
    "scores": {
      "speed": 9,
      "unlock": 9,
      "stability": 8.5,
      "value": 8
    },
    "boards": [
      "best",
      "streaming",
      "clash",
      "v2rayn"
    ],
    "highlights": [
      "双解锁",
      "亚洲三线 200MB/s+",
      "VLESS 全节点",
      "FullCone UDP"
    ],
    "plans": [
      {
        "name": "入门套餐",
        "price": "¥25/月",
        "traffic": "150GB/月"
      }
    ]
  }
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
