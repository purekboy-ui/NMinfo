import urllib.request
from bs4 import BeautifulSoup
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

try:
    url = "https://data.gov.tw/dataset/170565"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    for a in soup.find_all('a'):
        href = a.get('href')
        if href and ('http' in href or 'download' in href) and ('CSV' in a.text.upper() or 'JSON' in a.text.upper() or 'ZIP' in a.text.upper()):
            print("Found download link:", href, a.text.strip())
except Exception as e:
    print("Failed:", e)
