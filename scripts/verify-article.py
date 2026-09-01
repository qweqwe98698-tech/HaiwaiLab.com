#!/usr/bin/env python3
import sys
import os
import re
from pathlib import Path

def analyze_article(filepath):
    text = Path(filepath).read_text(encoding='utf-8')
    file_size_bytes = len(text.encode('utf-8'))
    file_size_kb = file_size_bytes / 1024.0

    # 1. Frontmatter extraction
    frontmatter = ""
    body = text
    if text.startswith('---'):
        parts = text.split('---', 2)
        if len(parts) >= 3:
            frontmatter = parts[1]
            body = parts[2]

    # Count FAQs from frontmatter
    faq_matches = re.findall(r'-\s*q:\s*["\']?(.*?)["\']?\s*\n\s*a:\s*["\']?(.*?)["\']?(?=\n\s*-\s*q:|\n\s*---|\Z)', frontmatter, re.DOTALL)
    faq_count = len(faq_matches)

    # 2. Count H2 chapters
    h2_chapters = re.findall(r'^##\s+(.+)$', body, re.MULTILINE)
    chapter_count = len(h2_chapters)

    # 3. Check technical components
    has_mermaid = bool(re.search(r'```mermaid', body))
    has_script = bool(re.search(r'```(?:bash|sh|powershell|ps1|zsh)', body))
    has_yaml_json = bool(re.search(r'```(?:yaml|json)', body))
    has_table = bool(re.search(r'\|.+\|\s*\n\|[-:| ]+\|\s*\n\|.+\|', body))

    # 4. Clean body to compute pure Chinese character count
    # Remove code blocks
    clean_body = re.sub(r'```[\s\S]*?```', '', body)
    # Remove inline code
    clean_body = re.sub(r'`[^`]+`', '', clean_body)
    # Remove images
    clean_body = re.sub(r'!\[.*?\]\(.*?\)', '', clean_body)
    # Remove markdown links, keep text
    clean_body = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', clean_body)
    # Remove HTML tags
    clean_body = re.sub(r'<[^>]+>', '', clean_body)
    # Remove markdown symbols (#, *, -, |, >, etc.)
    clean_body = re.sub(r'[#*_\->|~`]', '', clean_body)
    # Remove URLs
    clean_body = re.sub(r'https?://\S+', '', clean_body)

    # Pure Chinese characters (\u4e00-\u9fa5)
    chinese_chars = re.findall(r'[\u4e00-\u9fff]', clean_body)
    chinese_char_count = len(chinese_chars)

    # Total non-whitespace characters in cleaned body
    total_clean_chars = len(re.findall(r'\S', clean_body))

    # Output detailed report
    print("=" * 60)
    print(f"文章验收报告: {os.path.basename(filepath)}")
    print("=" * 60)
    print(f"1. Markdown 文件大小: {file_size_kb:.2f} KB (标准 >= 28.00 KB) -> {'✅ 通过' if file_size_kb >= 28 else '❌ 未达标'}")
    print(f"2. 纯中文字符数: {chinese_char_count} 字 (标准 >= 7500 字，目标 >= 8000 字) -> {'✅ 通过' if chinese_char_count >= 7500 else '❌ 未达标'}")
    print(f"3. 正文清洗后总字符数(无空白): {total_clean_chars} 字符")
    print(f"4. 核心章节数 (H2): {chapter_count} 个 (标准 8-10 个) -> {'✅ 通过' if 8 <= chapter_count <= 12 else '⚠️ 注意'}")
    print(f"5. FAQ 数量: {faq_count} 条 (标准 >= 5 条) -> {'✅ 通过' if faq_count >= 5 else '❌ 未达标'}")
    print(f"6. 技术实战组件检测:")
    print(f"   - Mermaid 图表: {'✅ 包含' if has_mermaid else '❌ 缺失'}")
    print(f"   - Shell/PowerShell 脚本: {'✅ 包含' if has_script else '❌ 缺失'}")
    print(f"   - YAML/JSON 配置: {'✅ 包含' if has_yaml_json else '❌ 缺失'}")
    print(f"   - 对比数据表格: {'✅ 包含' if has_table else '❌ 缺失'}")
    print("=" * 60)

    for idx, chap in enumerate(h2_chapters, 1):
        print(f"   章节 {idx}: {chap}")

    passed = (file_size_kb >= 28 and chinese_char_count >= 7500 and chapter_count >= 8 and faq_count >= 5 and has_mermaid and has_script and has_yaml_json and has_table)
    print("=" * 60)
    print(f"综合验收结论: {'🎉 全部通过' if passed else '❌ 未完全通过，需继续扩写或修复'}")
    print("=" * 60)
    return passed, chinese_char_count, file_size_kb

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python verify-article.py <path-to-markdown>")
        sys.exit(1)
    passed, _, _ = analyze_article(sys.argv[1])
    sys.exit(0 if passed else 1)
