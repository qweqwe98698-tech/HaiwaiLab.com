import fs from 'node:fs';
import path from 'node:path';

function analyzeArticle(filepath) {
  const text = fs.readFileSync(filepath, 'utf-8');
  const fileSizeBytes = Buffer.byteLength(text, 'utf-8');
  const fileSizeKb = fileSizeBytes / 1024.0;

  // 1. Frontmatter extraction
  let frontmatter = '';
  let body = text;
  if (text.startsWith('---')) {
    const parts = text.split('---');
    if (parts.length >= 3) {
      frontmatter = parts[1];
      body = parts.slice(2).join('---');
    }
  }

  // Count FAQs from frontmatter
  const faqMatches = Array.from(frontmatter.matchAll(/-\s*q:\s*["']?(.*?)["']?\s*\n\s*a:\s*["']?(.*?)["']?(?=\n\s*-\s*q:|\n\s*---|\Z)/gs));
  const faqCount = faqMatches.length;

  // 2. Count H2 chapters
  const h2Matches = Array.from(body.matchAll(/^##\s+(.+)$/gm));
  const chapterCount = h2Matches.length;

  // 3. Check technical components
  const hasMermaid = /```mermaid/.test(body);
  const hasScript = /```(?:bash|sh|powershell|ps1|zsh)/.test(body);
  const hasYamlJson = /```(?:yaml|json)/.test(body);
  const hasTable = /\|.+\|\s*\n\|[-:| ]+\|\s*\n\|.+\|/.test(body);

  // 4. Clean body to compute pure Chinese character count
  let cleanBody = body;
  cleanBody = cleanBody.replace(/```[\s\S]*?```/g, ''); // code blocks
  cleanBody = cleanBody.replace(/`[^`]+`/g, ''); // inline code
  cleanBody = cleanBody.replace(/!\[.*?\]\(.*?\)/g, ''); // images
  cleanBody = cleanBody.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1'); // links
  cleanBody = cleanBody.replace(/<[^>]+>/g, ''); // html tags
  cleanBody = cleanBody.replace(/[#*_\->|~`]/g, ''); // markdown syntax
  cleanBody = cleanBody.replace(/https?:\/\/\S+/g, ''); // URLs

  // Pure Chinese characters (\u4e00-\u9fff)
  const chineseChars = cleanBody.match(/[\u4e00-\u9fff]/g) || [];
  const chineseCharCount = chineseChars.length;

  // Total non-whitespace characters in cleaned body
  const totalCleanChars = (cleanBody.match(/\S/g) || []).length;

  // Output detailed report
  console.log('='.repeat(65));
  console.log(`文章验收报告: ${path.basename(filepath)}`);
  console.log('='.repeat(65));
  console.log(`1. Markdown 文件大小: ${fileSizeKb.toFixed(2)} KB (标准 >= 28.00 KB) -> ${fileSizeKb >= 28 ? '✅ 通过' : '❌ 未达标'}`);
  console.log(`2. 纯中文字符数: ${chineseCharCount} 字 (标准 >= 7500 字，目标 >= 8000 字) -> ${chineseCharCount >= 7500 ? '✅ 通过' : '❌ 未达标'}`);
  console.log(`3. 正文清洗后总字符数(无空白): ${totalCleanChars} 字符`);
  console.log(`4. 核心章节数 (H2): ${chapterCount} 个 (标准 8-10 个) -> ${chapterCount >= 8 && chapterCount <= 12 ? '✅ 通过' : '⚠️ 注意'}`);
  console.log(`5. FAQ 数量: ${faqCount} 条 (标准 >= 5 条) -> ${faqCount >= 5 ? '✅ 通过' : '❌ 未达标'}`);
  console.log(`6. 技术实战组件检测:`);
  console.log(`   - Mermaid 图表: ${hasMermaid ? '✅ 包含' : '❌ 缺失'}`);
  console.log(`   - Shell/PowerShell 脚本: ${hasScript ? '✅ 包含' : '❌ 缺失'}`);
  console.log(`   - YAML/JSON 配置: ${hasYamlJson ? '✅ 包含' : '❌ 缺失'}`);
  console.log(`   - 对比数据表格: ${hasTable ? '✅ 包含' : '❌ 缺失'}`);
  console.log('='.repeat(65));

  h2Matches.forEach((m, idx) => {
    console.log(`   章节 ${idx + 1}: ${m[1]}`);
  });

  // Check for forbidden phrases from human-writing
  const forbiddenList = [
    '不是.*而是', '并非.*而是', '不在于.*而在于', '与其说.*不如说',
    '看似.*实则', '表面.*实际', '你以为.*其实', '回头才发现', '说到底', '答案恰恰相反',
    '说白了', '说穿了', '先说结论', '赋能', '抓手', '底层逻辑', '顶层设计', '降本增效',
    '全链路', '组合拳', '技术底座', '公共底座', '深层逻辑', '单点风险', '值得注意的是',
    '需要指出的是', '从某种意义上说'
  ];

  const foundForbidden = [];
  for (const pattern of forbiddenList) {
    const regex = new RegExp(pattern, 'g');
    const matches = Array.from(cleanBody.matchAll(regex));
    if (matches.length > 0) {
      foundForbidden.push({ pattern, count: matches.length });
    }
  }

  // Check dashes
  const dashes = cleanBody.match(/[—–]/g) || [];
  if (dashes.length > 0) {
    foundForbidden.push({ pattern: '破折号 [—–]', count: dashes.length });
  }

  console.log('='.repeat(65));
  console.log(`7. 写作风控合规检查 (human-writing 规则):`);
  if (foundForbidden.length === 0) {
    console.log('   ✅ 完美！未检测到任何翻案句式、商业黑话、违规破折号或套话。');
  } else {
    console.log('   ⚠️ 发现违规表达:');
    foundForbidden.forEach(f => console.log(`      - ${f.pattern}: 出现 ${f.count} 次`));
  }

  const passed = (fileSizeKb >= 28 && chineseCharCount >= 7500 && chapterCount >= 8 && faqCount >= 5 && hasMermaid && hasScript && hasYamlJson && hasTable && foundForbidden.length === 0);
  console.log('='.repeat(65));
  console.log(`综合验收结论: ${passed ? '🎉 全部通过验收标准！' : '❌ 未完全达标，需扩写或调整'}`);
  console.log('='.repeat(65));

  return passed;
}

const targetFile = process.argv[2] || 'src/content/ai/chatgpt-login-issues.md';
const ok = analyzeArticle(targetFile);
process.exit(ok ? 0 : 1);
