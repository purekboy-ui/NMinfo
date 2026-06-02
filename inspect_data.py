import json

with open('dataset_170565.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(type(data))
if isinstance(data, list) and len(data) > 0:
    print(data[0])
elif isinstance(data, dict):
    print(data.keys())
    for k in list(data.keys())[:2]:
        if isinstance(data[k], list) and len(data[k]) > 0:
            print(f"First item of {k}:", data[k][0])
