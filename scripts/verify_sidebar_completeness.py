import re
import os

html_path = r"D:\NMDEV\NMINFO heavy\index.html"
js_path = r"D:\NMDEV\NMINFO heavy\script.js"

with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

categories_in_html = re.findall(r'data-category="([^"]+)"', html_content)

with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

# 使用更寬鬆的正則尋找 EXAM_DATA = { ... } 裡面的所有 1 級 key
exam_data_match = re.search(r'const EXAM_DATA = \{([\s\S]+?)\n\};', js_content)
exam_data_keys = []
if exam_data_match:
    exam_data_block = exam_data_match.group(1)
    exam_data_keys = re.findall(r'(?:^|\n)([A-Za-z0-9_]+):\s*\{', exam_data_block)

print(f"HTML len: {len(categories_in_html)}")
print(f"JS len: {len(exam_data_keys)}")

# 交叉比對
missing_in_js = []
for cat in categories_in_html:
    if cat not in exam_data_keys:
        missing_in_js.append(cat)

print("MISSING IN JS:")
for m in missing_in_js:
    print(f"  - {m}")
