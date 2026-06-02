import urllib.request
import json

try:
    url = "https://data.gov.tw/api/front/dataset/export?format=json&id=170565"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req)
    data = json.loads(response.read().decode('utf-8'))
    
    with open('dataset_170565.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("Success")
except Exception as e:
    print("Failed:", e)
