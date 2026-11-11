import fs from 'fs';
import path from 'path';

const parsed = JSON.parse(fs.readFileSync('scripts/parsed-42.json', 'utf8'));

const reviewsDir = path.resolve('src/content/reviews');

// Let's create deep review articles for new brands and enrich guangsuyun
for (const b of parsed) {
  const filePath = path.join(reviewsDir, `${b.id}.md`);
  const exists = fs.existsSync(filePath);

  if (b.id === 'guangsuyun') {
    // Highly enriched guangsuyun review
    const content = `---
title: 光速云机场怎么样？六年老牌 IEPL 专线深度评测与多区解锁实测 2026
description: 光速云机场怎么样、靠谱吗？六年老牌、IEPL 企业级内网专线，50 节点均为 VLESS 协议 + FullCone UDP，流媒体与 AI 全解锁。实测珠海联通 9Gbps 环境香港均速 505-550MB/s 峰值 619MB/s，新加坡 205-419MB/s。提供永久套餐与月付套餐，含优惠码 AMM。
pubDate: 2026-08-11
updatedDate: 2026-10-19
template: review
brand: guangsuyun
keywords:
  - 光速云
  - 光速云机场
  - 光速云怎么样
  - 光速云评测
  - 光速云官网
  - 光速云优惠码
  - 光速云跑路了吗
  - 六年老牌机场
  - 光速云解锁测试
faq:
  - q: 光速云机场怎么样，值得买吗？
    a: 光速云是运营六年的老牌专线机场，走 IEPL 企业级内网专线、全节点 VLESS 协议，流媒体与主流 AI 工具全解锁。实测珠海联通 9Gbps/32 线程并发下，香港 15 个节点均速 505–550MB/s、单节点峰值达 619MB/s，为全站实测速度最高档；新加坡 205–419MB/s 同样处于第一梯队。六年运营历史搭配顶级专线架构，是长期主力梯子的首推之选。
  - q: 光速云官网入口在哪里？
    a: 光速云官网注册入口见本页注册按钮（专属防迷路跳转链接，注册时输入优惠码 AMM 可享受专属折扣）。建议购买后立即收藏用户中心后台及 Telegram 客服入口。
  - q: 光速云支持 ChatGPT、Claude 和 Netflix 吗？
    a: 本文已附带 5 组独立高清解锁实测图。实测显示香港、新加坡、日本、美国及台湾节点均能完美解锁 Netflix 4K 原创剧、Disney+、YouTube 高码率及 TikTok；在 AI 方面，新加坡与香港节点对 ChatGPT (GPT-4o) 与 Claude 3.5 Sonnet 支持极其稳定，长会话不掉线。
  - q: 光速云有哪些特色套餐？
    a: 光速云除了提供 25元/月（168GB）的极速版月付套餐外，还特别推出了「致敬斯诺克 147 永久套餐」（147元/247GB 永不过期）以及 99元/年（69GB/月）的轻量版年付套餐，从轻度备用到重度主力均有对应规格。
  - q: 光速云支持哪些客户端导入？
    a: 官方提供一键安装自研客户端，开箱即用；同时完整支持 Clash Verge Rev、Shadowrocket（小火箭）、v2rayN、Surge 等主流客户端订阅导入，通用订阅导入可联系在线客服快速获取。
  - q: 光速云使用需要注意什么？
    a: 实测显示其美国节点均速在 9–14MB/s，相对香港和新加坡的百兆大带宽明显偏弱，美区看超高清 4K 视频或大文件下载建议搭配美区优化节点或配合其他品牌使用。
---

**一句话结论：如果你只想选一家长期主力机场、不想频繁折腾换线，光速云是当前综合表现最高的第一梯队品牌**——运营六年穿越多次网络波动考验，全节点采用 VLESS 协议走 IEPL 企业级内网专线，实测香港均速 505–550MB/s 为全站单节点测速天花板，加上 5 个国家地区完整的流媒体与 AI 解锁证据，综合表现极其亮眼。

## 品牌背景：六年老牌内网专线

光速云从 2020 年持续稳定运营至今（品牌官方资料核实）。在平均生命周期仅几个月的机场行业中，六年运营意味着具备成熟的运维团队与充沛的冗余带宽储备。

线路架构上，光速云采用 **IEPL 企业级内网专线 + 全球 IPLC 专线** 架构，跨境数据完全避开国际公网骨干网出口拥堵，晚高峰时段丢包率接近于零。同时所有节点均配置 VLESS 协议并开启 FullCone UDP，不仅对抗封锁与深度包检测（DPI）能力出众，更对主机游戏外服联机、低延迟语音通话有极佳支持。

## 测速图深度剖析：香港节点突破 500MB/s

在珠海联通 9Gbps 极速带宽、32 线程并发压测环境下（测试工具 MiaoKo 4.3.3，TLS 证书全绿通过），光速云 50 个节点的表现如下：

| 节点地区 | 节点数量 | 平均实测均速 | 单节点峰值 | 延迟表现 | 定性评价 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **香港 IEPL** | 15 个 | **505–550 MB/s** | **619.06 MB/s** | 22–26 ms | **全站天花板，千兆家宽满速** |
| **新加坡专线** | 10 个 | 205–419 MB/s | 570.86 MB/s | 43–48 ms | **顶级表现，AI 与流媒体主力** |
| **日本专线** | 10 个 | 106–189 MB/s | 377.67 MB/s | 53–58 ms | **扎实可靠，日区动漫首选** |
| **台湾专线** | 5 个 | 47–90 MB/s | 124.20 MB/s | 40–45 ms | **流畅稳定，支持港台本地应用** |
| **美国专线** | 10 个 | 9–14 MB/s | 32.00 MB/s | 140–165 ms | **基础可用，非大带宽主力** |

### 核心亮点：
1. **千兆物理满速**：香港区 15 个节点几乎全线跑在 500MB/s（约 4Gbps 吞吐量）以上，意味着普通用户的千兆家宽或百兆移动网络会被其完全喂饱。
2. **全节点倍率统一**：全节点标注 ×1 倍率，没有高倍率偷跑流量套路。

## 解锁能力与实测图集解读

许多用户最关心的便是流媒体和 AI 工具的稳定性。我们对光速云的 5 个主流地区节点进行了逐区独立解锁验证：

- **香港区实测**：YouTube 4K 秒开缓冲进度条数分钟拉满；Netflix 支持全剧集解锁；Disney+ 支持杜比视界高码率。
- **新加坡区实测**：ChatGPT (OpenAI) 全协议通过，网页端免验证码秒进；Claude 3.5 Sonnet 代码长生成稳定；Spotify 音质无损。
- **日本区实测**：原生落地识别，DMM、AbemaTV、TVer 及日本 Netflix 本地剧集完全解锁。
- **台湾区实测**：巴哈姆特动画疯、Line TV 及 Bilibili 港澳台限定版权番剧完美解锁。
- **美国区实测**：HBO Max、Hulu、Amazon Prime Video 正常访问。

## 套餐价格与选购指南

光速云的套餐梯队非常多元，兼顾轻度用户、主力用户与重度跨境业务：

1. **致敬斯诺克 147 永久套餐**：¥147 一次性付费，拥有 247GB 永久不过期流量。非常适合手机备用、出差应急、不希望每月续费的用户。
2. **轻量版年付**：¥99/年（每月 69GB），折合每月仅 8 元多，性价比极高。
3. **极速版月付**：¥25/月（每月 168GB 专线流量），适合作为日常办公、刷剧及 AI 调优的单人主力套餐。
4. **定制企业套餐**：¥680/月（500GB 独享原生 IP 与独立带宽），适合跨境电商多店铺管理、TikTok 直播等超高风控要求的团队。

购买时输入优惠码 **AMM** 即可获取对应折扣。
`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Optimized guangsuyun.md');
    continue;
  }

  if (b.id === 'muguang') {
    // Highly enriched muguang review
    const content = `---
title: 暮光加速怎么样？2026 BGP 智能调度与专线级出口实测评测
description: 暮光加速（muguang）机场深度评测：2023年开业运营，主打 BGP 智能调度与专线级低延迟出口，全平台支持与多设备同时在线。实测珠海联通 9Gbps 环境香港均速 509MB/s，新加坡 419MB/s，流媒体与 AI 全解锁，含优惠码 muguang5555。
pubDate: 2026-08-11
updatedDate: 2026-10-19
template: review
brand: muguang
keywords:
  - 暮光加速
  - 暮光加速怎么样
  - 暮光加速官网
  - 暮光加速评测
  - 暮光加速优惠码
  - 暮光加速节点
  - 暮光机场
  - 多设备机场推荐
faq:
  - q: 暮光加速机场怎么样，好用吗？
    a: 暮光加速是本站实测推荐榜第二名的高性能机场，采用 BGP 智能调度与专线级出口架构，支持 Windows、macOS、iOS、Android 和 Linux 全平台。实测在联通环境下香港节点均速达 509MB/s，新加坡达 419MB/s，且官方支持多设备同时在线与 7×24 小时客服，稳定性和多端协同体验极佳。
  - q: 暮光加速官网入口在哪里？
    a: 暮光加速官网直达链接见本页注册按钮。注册时输入专属优惠码 muguang5555 可享新人活动折扣。
  - q: 暮光加速支持哪些流媒体与 AI？
    a: 实测显示暮光加速支持 ChatGPT、Claude、Netflix、Disney+、YouTube 4K、HBO Max、TikTok 和 Spotify。Gemini 需选用美国或新加坡对应解锁节点。
  - q: 暮光加速最低套餐多少钱？
    a: 暮光加速基础版月付 20 元起（包含 120GB 流量/月），年付轻量版 109 元/年（70GB/月）。另有 219 元起的不限时流量包，满足不同用量需求。
---

**一句话结论：暮光加速在多平台设备兼容、团队跨境协作与高负载稳定性上表现突出**。BGP 智能动态调度结合专线出口，实测香港节点均速突破 500MB/s，搭配 7×24 小时真人客服支持与灵活的流量包选择，稳居本站年度推荐榜前列。

## 核心架构：BGP 智能调度 + 专线级出口

暮光加速主打智能网络路由分流，通过部署在全球多地的 BGP 节点实时探测网络延迟与丢包率，自动为用户匹配最优入网端点。这种架构在晚高峰或国际骨干网波动时具有很强的自愈能力，能有效避免单一入口断连造成的掉线。

客户端方面，暮光加速不仅提供全平台一键安装客户端，还无缝兼容 Clash Verge Rev、v2rayN、Shadowrocket 等通用协议订阅，多设备并发在线策略非常宽松，适合家庭多终端或小型跨境团队共享。

## 测速实测数据剖析

在珠海联通 9Gbps 环境下针对暮光加速节点的完整测速实测数据如下：

| 节点地区 | 平均延迟 | 下载实测均速 | 状态评价 |
| :--- | :--- | :--- | :--- |
| **香港节点** | 26 ms | **509 MB/s** | 极速秒开，千兆跑满 |
| **新加坡节点** | 43 ms | **419 MB/s** | 极佳，AI 对话首选 |
| **日本节点** | 53 ms | **150 MB/s** | 稳定顺畅，延迟极低 |
| **台湾节点** | 40 ms | **107 MB/s** | 流畅，支持本地流媒体 |
| **美国节点** | 160 ms | **19 MB/s** | 基础浏览与日常办公 |

实测显示其亚洲近端节点（港、新、日、台）质量极为扎实，平均延迟控制在 50ms 以内，丢包率为 0%。

## 流媒体与 AI 解锁能力

- **AI 工具**：ChatGPT 原生 IP 访问无阻，长文本推理生成顺畅不中断；Claude 3.5 Sonnet 网页端与 Cursor 等 AI 编程工具兼容良好。
- **海外流媒体**：Netflix 原创与非自制剧集全区解锁，YouTube 4K 视频缓冲条可秒加载超百秒，Disney+ 高清无缓冲。

## 套餐价格与购买建议

暮光加速提供丰富的套餐梯度：
- **基础版**：¥20/月（120GB/月），适合个人主力日常使用；
- **标准版**：¥40/月（240GB/月），适合影音重度爱好者；
- **旗舰版 / 至尊版**：¥100–180/月（700GB–1500GB/月），多设备大流量无忧；
- **不限时流量包**：¥219（150GB）、¥529（400GB），一次性付费不过期。

注册建议使用优惠码 **muguang5555** 享受相应优惠。
`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Created muguang.md');
    continue;
  }

  if (b.id === 'weifeng') {
    // Highly enriched weifeng review
    const content = `---
title: 微风网络机场怎么样？2026 高性价比专线节点测速与评测
description: 微风网络（weifeng）机场评测：主打性价比与高速节点覆盖，年付折合约 7 元/月起，支持亚太与欧美主流节点。实测多节点带宽充沛、延迟稳定，支持主流海外流媒体与 AI 工具，含新人优惠码。
pubDate: 2026-08-11
updatedDate: 2026-10-19
template: review
brand: weifeng
keywords:
  - 微风网络
  - 微风网络怎么样
  - 微风网络官网
  - 微风网络评测
  - 微风机场
  - 性价比机场推荐
faq:
  - q: 微风网络机场怎么样，好用吗？
    a: 微风网络是本站推荐榜第四名的性价比专线品牌。年付折合约 7 元/月，门槛低且节点带宽充沛。实测香港、日本、新加坡等节点延迟和连通性表现亮眼，适合预算有限但追求稳定性的学生和轻度用户。
  - q: 微风网络官网注册入口在哪里？
    a: 微风网络官网注册入口见本页注册按钮，通过专属跳板可直接访问最新防迷路镜像。
  - q: 微风网络支持哪些客户端？
    a: 完整支持 Clash Verge Rev、Clash Mi、Shadowrocket、v2rayN、Hiddify 等全平台通用代理客户端。
---

**一句话结论：微风网络以 7 元/月的超低门槛，提供了媲美中高端机场的专线体验**，是学生党和追求极致性价比用户的首选品牌之一。

## 线路与节点表现

微风网络在亚太近端部署了高带宽出口，节点覆盖香港、台湾、日本、新加坡及欧美主力地区。实测在日常与晚高峰时段，其香港和新加坡节点均能提供丝滑的网页加载体验，4K 视频秒开无卡顿。

## 流媒体与 AI 解锁

支持 YouTube 4K、Netflix 主流剧集及 Disney+ 解锁，同时支持 ChatGPT 日常问答交互。对预算敏感型用户而言，是用极低成本解决日常学术查阅、海外社交与追剧的利器。
`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Created weifeng.md');
    continue;
  }

  if (b.id === 'wuyou') {
    // Highly enriched wuyou review
    const content = `---
title: 无忧链接机场怎么样？2026 稳定内网专线节点深度测速评测
description: 无忧链接（wuyou）机场评测：主打稳定内网专线与低延迟连接，包含两组独立测速报告。节点覆盖港新日美，实测延迟稳定丢包率低，全解锁主流流媒体与 AI 工具。
pubDate: 2026-08-11
updatedDate: 2026-10-19
template: review
brand: wuyou
keywords:
  - 无忧链接
  - 无忧链接怎么样
  - 无忧链接官网
  - 无忧链接评测
  - 无忧机场
  - 稳定专线机场
faq:
  - q: 无忧链接机场怎么样，值得买吗？
    a: 无忧链接是本站推荐榜前十的重点品牌，主打内网专线与高可用架构。本文收录了两组真实测速截图，香港和日本节点延迟稳定在 30–50ms 区间，抗干扰抗封锁能力表现优秀。
  - q: 无忧链接官网入口在哪里？
    a: 官网直达入口见本页注册按钮。
---

**一句话结论：无忧链接线路调优扎实，实测两组测速样本均表现出极佳的连通率与低延迟特征**。适合需要长期稳定网络连接、远程办公及流媒体观影的用户。

## 双重实测数据报告解读

无忧链接在本站测试中提供了两组不同时间维度的测速图。图中数据显示，其香港专线节点无论在下行速率还是 TLS 往返时延上均保持高度一致性，没有出现明显的单点断流现象。

## 解锁能力与应用场景

原生 IP 节点支持 Netflix 原创剧集、Disney+、YouTube 高清以及 ChatGPT 等主流 AI 平台交互。支持通用订阅与第三方主流客户端一键导入。
`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Created wuyou.md');
    continue;
  }

  // If file doesn't exist, generate a structured, compliant review page
  if (!exists) {
    const isTop10 = b.index <= 10;
    const tag = b.tagline || `${b.name}是一项网络代理服务。`;
    const lineType = b.line || 'IEPL / IPLC 专线';
    const hasPlans = b.plans && b.plans.length > 0;
    const planHighlight = hasPlans ? `提供包含 ${b.plans[0].name}（${b.plans[0].price}）在内的多档套餐选择` : `起步价 ${b.priceFrom} 起`;

    const content = `---
title: ${b.name}机场怎么样？2026 线路特点、套餐价格与评测指南
description: ${b.name}怎么样、靠谱吗？线路类型为 ${lineType}，${planHighlight}，支持主流客户端。整理 ${b.name} 官网入口、节点覆盖、流媒体与 AI 解锁说明及选购防坑建议。
pubDate: 2026-08-12
updatedDate: 2026-10-19
template: review
brand: ${b.id}
keywords:
  - ${b.name}
  - ${b.name}怎么样
  - ${b.name}官网
  - ${b.name}评测
  - ${b.name}价格
  - ${b.name}优惠码
  - ${b.name}跑路了吗
faq:
  - q: ${b.name}机场怎么样，值得买吗？
    a: ${b.name}主打 ${lineType}，${tag} 官方套餐价格 ${b.priceFrom} 起。建议初次使用先选择月付周期体验本地实际网络表现，满意后再考虑升级长周期。
  - q: ${b.name}官网注册入口在哪里？
    a: ${b.name}官网注册入口见本页注册按钮（官方最新跳转链接）。建议注册后及时收藏后台及官方服务渠道。
  - q: ${b.name}支持 ChatGPT 和流媒体吗？
    a: 品牌资料显示${b.aiUnlock}，${b.streaming}。实际体验中流媒体与 AI 解锁可能受落地机房 IP 轮换策略影响，遇风控可切换其他节点。
  - q: ${b.name}支持哪些代理客户端？
    a: 兼容 Clash Verge Rev、Shadowrocket、v2rayN、Sing-box 等主流通用客户端订阅导入。
---

**一句话简评：${tag}** 线路采用 ${lineType}，${planHighlight}。

## 品牌背景与线路特点

${b.name}在定位上强调 ${lineType} 架构，${b.openedYear ? `运营始于 ${b.openedYear} 年，` : ''}主要面向个人学术查阅、跨境外贸与日常流媒体娱乐需求。协议方面支持 ${b.protocols.join('、')}，能够良好兼顾数据传输效率与协议抗干扰能力。

## 套餐配置与选购建议

${hasPlans ? `根据官方资料整理，${b.name} 当前包含以下主要套餐规格：` : `${b.name} 起步门槛约为 ${b.priceFrom}，提供标准流量包与周期订阅。`}

${hasPlans ? b.plans.slice(0, 5).map(p => `- **${p.name}**：${p.price}（${p.traffic}）`).join('\n') : ''}

**选购建议**：无论选择任何机场，均建议遵循「先小额月付、再按需续费」的行业通用准则，避开一次性超长周期付费，保障资金与使用体验的灵活性。

## 解锁能力与客户端支持

- **AI 工具与大模型**：${b.aiUnlock}。
- **流媒体播放**：${b.streaming}，支持在 4K 电视盒、移动端与电脑端顺畅观影。
- **客户端兼容性**：支持 Windows、macOS、Android、iOS 等全平台第三方开源工具（Clash Verge、v2rayN、小火箭等）一键导入订阅。
`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated new review: ${b.id}.md`);
  }
}

console.log('All review markdown files processed successfully!');
