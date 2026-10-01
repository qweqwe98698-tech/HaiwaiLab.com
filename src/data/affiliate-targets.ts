/**
 * 外部服务目标跳转映射表（Centralized Jump Targets）。
 * 
 * 作用：
 * 1. 彻底与站点公共 HTML 和 SEO 页面物理隔离，杜绝外部第三方推广参数与分佣暗桩裸露在网页源码中。
 * 2. 所有对外出站链接统一由 /go/[id]/ 内部跳板承接，并在 robots.txt 中物理 Disallow。
 * 3. 站长后续可在此处随时配置自己的真实独立落地页或专属渠道链接。
 */

export const AFFILIATE_TARGETS: Record<string, string> = {
  guangsuyun: 'https://guangsuyun.com/',
  feimaoyun: 'https://feimaoyun.com/',
  xingdaomeng: 'https://xingdaomeng.com/',
  lingmao: 'https://lingmaoyun.com/',
  ermaoyun: 'https://ermaoyun.com/',
  u1s1: 'https://u1s1.com/',
  guangnianti: 'https://guangnianti.com/',
  yuzhouyun: 'https://yuzhouyun.com/',
  yifanyun: 'https://yifanyun.com/',
  sogoyun: 'https://sogoyun.com/',
  quanqiuyun: 'https://quanqiuyun.com/',
  weituyun: 'https://weituyun.com/',
  jilianyun: 'https://jilianyun.com/',
  sujie: 'https://sujieyun.com/',
  kuaili: 'https://kuailiyun.com/',
  kexinyun: 'https://kexinyun.com/',
};
