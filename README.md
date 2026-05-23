# NMINFO

核醫資訊網站專案，現包含一個母網站、一個獨立病人衛教站，以及三個隨主站一起發佈的子網站。

## 線上版本

| 站點 | URL | 說明 |
| --- | --- | --- |
| Cloudflare Pages 主站 | https://nminfo.pages.dev | `Dr. Huang's 核醫工具箱`，含主站與三個子網站 |
| Firebase 主站 | https://nminfo-f108e.web.app | 與 Cloudflare Pages 同步的主站版本 |
| Firebase 病人衛教站 | https://nmpatient-guide.web.app | `核醫衛教陪伴站`，提供民眾版衛教內容 |

## 目前網站組成

### 1. 母網站：Dr. Huang's 核醫工具箱

主站以單頁式導覽整理核醫科工作現場常用內容，重點包含：

- **核醫小學堂**：核醫原理、文件與品質管理、熱核室與製劑作業、病人溝通與衛教、輻射防護與治療安全、藥物與劑量工具
- **核醫治療**：I-131、Ra-223、Lu-177 PSMA、Lu-177 PRRT 與其他治療整理
- **核醫檢查索引**：依 PET、內分泌、心臟、腸胃、骨腎、神經等主題收錄檢查頁
- **常用工具與外部連結**：主站首頁整合常用入口

### 2. 病人衛教站：核醫衛教陪伴站

獨立於母網站的民眾版網站，內容聚焦：

- 核醫檢查與治療前的準備
- FDG PET/CT、PSMA PET/CT、其他 PET 造影
- I-131、Ra-223 等治療與返家後注意事項
- 醫療輻射與日常生活暴露的衛教整理

### 3. 隨主站一起發佈的子網站

這些資料夾在 build 後會一起複製到 `dist/`，可由主站直接連往子路徑：

- `ai-village/` → **AI 新手村**
- `nucmed-ai-research/` → **核醫 AI 研究室**
- `nucmed-storylab/` → **核醫腳本工坊**

## 專案結構

```text
.
├─ index.html                  # 母網站入口
├─ script.js                   # 母網站主要資料與渲染邏輯
├─ style.css                   # 母網站樣式
├─ patient-education/          # 病人衛教站
├─ ai-village/                 # 子網站：AI 新手村
├─ nucmed-ai-research/         # 子網站：核醫 AI 研究室
├─ nucmed-storylab/            # 子網站：核醫腳本工坊
├─ assets/                     # 主站與子站共用圖像與 logo
├─ scripts/build-protocol-data.mjs
└─ scripts/copy-static.mjs     # build 後複製子網站與靜態資源到 dist
```

## 開發

安裝依賴：

```bash
npm install
```

啟動本機開發：

```bash
npm run dev
```

正式建置：

```bash
npm run build
```

`npm run build` 會先產生 protocol data，再用 Vite 建出母網站，最後把 `ai-village/`、`patient-education/`、`nucmed-ai-research/`、`nucmed-storylab/` 與相關資源一起複製到 `dist/`。

## 部署

### Firebase Hosting

本專案目前有兩個 Firebase Hosting target：

- `main` → `nminfo-f108e`
- `patient` → `nmpatient-guide`

重新部署：

```bash
firebase deploy --only hosting --non-interactive
```

### Cloudflare Pages

Cloudflare Pages 專案名稱為 `nminfo`，主站部署指令：

```bash
npx wrangler pages deploy dist --project-name nminfo --branch main --commit-dirty=true
```

## 備註

- 主站與病人衛教站是不同 Hosting site。
- `firebase.json` 已設定主站忽略 `*.md`、`docs/**`、`pdf/**` 等內容。
- `dist/` 是主站部署輸出；`patient-education/` 則直接作為病人衛教站的 Firebase public 目錄。
