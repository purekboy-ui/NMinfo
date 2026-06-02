import json

try:
    with open('gist.json', 'r', encoding='utf-16') as f:
        data = json.load(f)
except Exception:
    with open('gist.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

for filename, file_info in data.get('files', {}).items():
    if 'twinkle-hub-mcp' in filename.lower() or 'twinkle' in filename.lower():
        with open('twinkle.md', 'w', encoding='utf-8') as out:
            out.write(file_info['content'])
        print(f"Extracted {filename} to twinkle.md")
