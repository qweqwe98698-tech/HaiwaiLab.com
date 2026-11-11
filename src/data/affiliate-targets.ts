/**
 * 外部服务目标跳转映射表（Centralized Jump Targets）。
 * 
 * 作用：
 * 1. 彻底与站点公共 HTML 和 SEO 页面物理隔离，杜绝外部第三方推广参数与分佣暗桩裸露在网页源码中。
 * 2. 所有对外出站链接统一由 /go/[id]/ 内部跳板承接，并在 robots.txt 中物理 Disallow。
 * 3. 站长后续可在此处随时配置自己的真实独立落地页或专属渠道链接。
 */

export const AFFILIATE_TARGETS: Record<string, string> = {
  "guangsuyun": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
  "muguang": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
  "feimaoyun": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
  "weifeng": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
  "dalaoyun": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
  "xingdaomeng": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
  "ermaoyun": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
  "wuyou": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
  "weituyun": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
  "firefly": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
  "yuzhouyun": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
  "u1s1": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
  "lingmao": "https://vip01.civetnet.com/#/?code=8MIAyxak",
  "jilianyun": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
  "guangnianti": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
  "yifanyun": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
  "sogoyun": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
  "kexinyun": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
  "sujie": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
  "shanyue": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
  "quanqiuyun": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
  "shandianshu": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
  "yunjiexian": "https://qwerty.yunjiexianaff.com/?code=aycnwNUi",
  "liulianyun": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
  "shenxing": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
  "huanqiuti": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
  "yinxingren": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
  "tiziyun": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
  "wgetcloud": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
  "baiyueguang": "https://sibker.com/register?invite_code=gg6puAId",
  "flyingbird": "https://flyingbird.com/",
  "cyberguard": "https://cyberguard.best/#/register?code=AxXNNYng",
  "longmaoyun": "https://longmaoyun.com/",
  "fatcat": "https://fatcat.com/",
  "tntcloud": "https://tntcloud.com/",
  "qingyunti": "https://qingyunti.com/",
  "shanshuiyun": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
  "lingdongyun": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
  "langwang": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
  "edgenova": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
  "yinghuochong": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
  "sslar": "https://sslar.com/",
  "kuaili": "https://kuailiyun.com/"
};
