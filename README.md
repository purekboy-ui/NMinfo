# NMinfo

義大醫院核醫科用的靜態知識站，分成 **醫護工作站主站** 與 **病人衛教子站** 兩個 Firebase Hosting 站點。

## 線上網址

| 站點 | 用途 | URL |
| --- | --- | --- |
| 主站 | 醫護工作指引、檢查 / 治療查詢、工具入口 | https://nminfo-f108e.web.app |
| 病人衛教子站 | 一般民眾版核醫檢查與治療衛教 | https://nmpatient-guide.web.app |

## 目前內容

### 主站

- 核醫小學堂：核醫原理、文件管理、熱核室 / 製劑作業、病人溝通、輻射防護、劑量工具
- 核醫治療：I-131、Ra-223、Lu-177 PSMA、Lu-177 PRRT 等主題
- 各類核醫檢查與 PET 主題索引
- 常用外部工具與相關連結入口

### 病人衛教子站

- 以台灣一般民眾為對象的檢查 / 治療說明
- 用較低門檻的語言整理檢查前後注意事項
- 目前為獨立靜態子站，部署到單獨的 Firebase Hosting site

### Repo 內臨床整理

- `clinical-guides/lu177-prrt/`：Lu-177 PRRT 指引整理與 JNM post-treatment imaging 圖解索引
- `assets/guide/`：網站用教學圖卡資產
- `assets/lu177-prrt-figures/`：JNM 後治療影像圖解裁切圖

## 專案結構

```text
.
├── index.html / style.css / script.js         # 主站
├── patient-education/                         # 病人衛教子站
├── assets/                                    # 網站圖片與圖解資產
├── clinical-guides/                           # GitHub 用臨床整理文件
├── firebase.json
└── .firebaserc
```

## 技術選型

- 純靜態網站：Vanilla HTML / CSS / JavaScript
- 主站與子站都不依賴前端框架
- Firebase Hosting 多站點部署

## Firebase 部署設定

`.firebaserc` 目前對應：

- `main` → `nminfo-f108e`
- `patient` → `nmpatient-guide`

`firebase.json` 目前設定：

- 主站 `public`：repo root
- 子站 `public`：`patient-education/`

### 部署指令

```bash
firebase deploy --only hosting --non-interactive
```

若只部署其中一個站點：

```bash
firebase deploy --only hosting:main --non-interactive
firebase deploy --only hosting:patient --non-interactive
```

## 內容與發佈注意事項

- `clinical-guides/**/*.md` 會保留在 GitHub repo 中，但 **不會部署到 Firebase**
- `pdf/` 已排除在 Firebase 與 Git 發佈範圍之外，避免原始文獻被公開釋出
- `docs/` 目前不進 Firebase

## 維護原則

- 以最小改動維持主站與子站的穩定性
- 優先沿用現有 Vanilla JS 資料結構與互動方式
- 新的網站資產放 `assets/`
- 臨床整理文件放 `clinical-guides/`

---

© 2026 Huang Chun-Yin
