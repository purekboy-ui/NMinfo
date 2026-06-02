# 「Dr. Huang's核醫工具箱」全單元內容升級與重構黃金計畫

更新日期：2026-05-31  
版本：v1.0.0  
作者：Antigravity (高級人工智慧編碼專家)  
單一事實來源位置：`clinical-guides/imaging-protocols/99-reformatting-gold-standard-plan.md`

---

## 1. 深度解析：為什麼「心臟類澱粉 PYP」是標竿？

「心臟類澱粉 PYP」單元之所以成功，是因為它**超越了單點技術說明，躍升為「臨床決策護航工具」**。其內容結構包含以下五大黃金要素：

### 🎯 五大黃金支柱

1. **必做安全閘門與臨床定位**：不只教如何做檢查，還深刻解析該檢查在整體臨床決策鏈中的位置。例如：「PYP 的真正角色是在**排除 AL 後**，支持 ATTR 的非侵入診斷，沒有排除 AL，任何 Grade 2/3 都不能直接寫成 ATTR 確診。」
2. **多重影像技術的融合判讀（Planar vs. SPECT/CT）**：清楚闡明平面影像的盲點（血池干擾、部分體積效應），強調 SPECT/CT 用於解剖定位的不可替代價值，並列出標準定量參數（Perugini Grade 0–3, H/CL ratio）。
3. **高解析度文獻影像與直接判讀圖說（Visual & Rich Captioning）**：圖片不只是裝飾，而是能**直接教學**的素材。圖說極度詳盡，點出「ROI 怎麼畫」、「Grade 2-3 平面與 SPECT 對照」、「SPECT/CT 如何互補」，看完圖就懂判讀。
4. **深度 Pitfalls 避坑指南**：精確列舉假陽性與假陰性的生理與技術原因（如：殘餘血池活性、局部心肌傷害、骨骼/軟組織重疊、掃描時間點不一致），直接降低臨床誤判風險。
5. **結構化報告建議與科內落地指南**：給予報告最少應記載的關鍵欄位（7大要素），以及臨床結果與預期不符時的具體下一步建議（如建議超音波、FNA 或切片路徑）。

---

## 2. 黃金優化規格（Gold Standard Spec）

為了讓其他單元（檢查與治療）達到甚至超越此水準，我們將優化規格標準化為以下三大核心層面：

### 📋 A. 臨床 guides (Markdown) 升級模板

未來所有的臨床指引 Markdown 檔應統一擴充為以下段落，嚴格杜絕「只有參數、沒有臨床情境」的硬資料：

```markdown
# [檢查/治療名稱]（放射藥物學名）

更新日期：2026-05-31
最新已核對的主要來源：(如 SNMMI 2025/2026、EANM、ASNC、台灣指引等連結與文獻)

## 1. 臨床定位與決策閘門
- 該檢查在臨床路徑中的核心定位 (什麼時候該做？什麼時候不該做？)
- **【必做安全閘門 / 絕對禁忌與核對】** (例如：腎功能 dynamic 需核對排尿與水份；PET/CT 需核對 6h 空腹與血糖；I-131 需排除孕哺乳與低碘飲食)

## 2. 檢查參數基準表 (Acquisition & Image Processing)
- 納入完整基準表（包含 Detector, Collimator, Energy Window, Orbit, Gating 等）
- 多重技術互補點 (例如：Planar 什麼時候要升級 SPECT/CT；早期動態與延遲造影的決策點)

## 3. 判讀心智框架與定量指標
- 推薦判讀順序 (如：先看血池背景 -> 看皮質攝取 -> 看收集系統排泄)
- 標準定量或视觉分級指標對照表 (如 Perugini 級別、SUV 分級、GBEF 門檻)

## 4. Pitfalls 與避坑指南 (假陽性 / 假陰性)
- 技術性 Pitfalls (如 extravasation, motion, misregistration)
- 生理性 Pitfalls (如 contamination, physiologic uptake mimic, medication status)

## 5. 結構化報告與科內落地指南
- 報告必須包含的 N 大核心要素
- 臨床不一致時的下一步指引

## 6. 最新權威參考文獻
- 列出 3-5 篇經典或最新共識指引，並附帶 PMCID 或 DOI
```

### 💻 B. 網站前端 UI/UX (script.js) 對應渲染規格

在主網站的 `script.js` 與前端交互設計上，優化目標是**讓使用者能「直覺理解複雜臨床邏輯」**，避免純文字堆砌。這包含：

1. **互動式「決策因果鏈」(Decision / Concept Chain)**：
   - 仿照 `PET.conceptDiagram` 的 chain 或 decision 類型，以**彩色脈絡格**（tone: warning/critical/success/info）展示「上機前處理 -> 採集 -> 重建 -> 判讀 -> 解題」的關鍵變因，讓第一線人員一目了然。
2. **多模態「影像解剖圖說」(Visual Image Carousel)**：
   - 將原本的靜態插圖升級為「可切換視角/步驟」的 Carousel，搭配詳細圖說。
3. **衛教卡片聯動 (Patient Education Cards)**：
   - 將專業臨床版內容自動提煉為針對家屬與病人的「家屬衛教卡片」，一鍵切換，提升實用性。

---

## 3. 逐單元重構優先級與路線圖 (Roadmap)

根據臨床重要性與優化迫切度，我們將現有 30+ 個單元劃分為三個階梯 (Tiers)：

| 優先級 | 檢查/治療單元 | 「水準之上」重構核心點 | 參考指引來源 |
| :--- | :--- | :--- | :--- |
| **Tier 1 (核心/高頻/高風險)** | **FDG PET/CT Oncology** | 強化「血糖/胰島素/空腹」前處理因果鏈；加入棕色脂肪、肌肉活動等 pitfalls 的 Atlas 指南。 | EANM v3.0, SNMMI, NCCN 2026 |
| | **Tc-99m MPI SPECT & PET MPI** | 融合 Tl-201 與 Tc-99m！強化「Stress 成功與否」的決策流；運動 vs. 藥物壓力禁忌；Prone/Upright 假影修正。 | ASNC 2024, AHA/ACC Chest Pain 2021 |
| | **Bone Scintigraphy** | 突破單點骨掃描；加入「亮點不等於轉移」的退化/骨折/感染鑑別框架；強化 SPECT/CT 補拍時機。 | SNMMI/EANM Bone Scan 指引 |
| | **I-131 甲狀腺癌住院治療** | **【治療類標竿】** 從病房隔離、低碘飲食、TSH 刺激、污染控制到出院返家安全距離，建立全套「防輻射 & 治療安全閘門」。 | ATA 2025, ICRP 149, IAEA |
| | **腎功能動態掃描 (MAG3/DTPA) & 利尿劑** | 強化「脫水/憋尿假性阻塞」與「利尿劑給藥時機（F+10 vs F-15）」的定量 GBEF 重建分析。 | SNMMI/EANM 腎功能 consensus |
| **Tier 2 (常規/中頻)** | **Thyroid Scan & Uptake** | 競爭性碘暴露歷史（顯影劑、Amiodarone）的必做安全閘門與 Trapezoid 診斷框架。 | SNMMI 2020, ETA |
| | **PSMA & SSTR PET/CT** | 生理攝取 mimic（如唾液腺、腸道、神經節）與治療前篩選（Theranostics 門檻）之整合。 | EANM 2025, SNMMI |
| | **HIDA 膽道掃描** | 鴉片類藥物干擾之安全排除；CCK / 脂餐收縮素給藥時的膽囊收縮率 (GBEF) 精算 pitfalls。 | SNMMI HIDA scan guidelines |
| | **DaT SPECT (Ioflupane)** | 紋狀體 (striatum) 定量分析與偽裝藥物限制（抗憂鬱藥、興奮劑干擾）。 | EANM / SNMMI DaT scan |
| **Tier 3 (低頻/常規)** | **Brain Perfusion & V/Q Scan** | 肺高壓 MAA 粒子數限制；腦灌注 SPECT 配合刺激環境 pitfalls。 | SNMMI V/Q, EANM Brain |
| | **梅克爾憩室 & 唾液腺 & GI bleeding** | H2-blocker 預給藥機制；唾液腺檸檬汁刺激與排泄曲線 pitfalls。 | SNMMI |

---

## 4. 具體著手步驟與工作流 (Action Plan)

我們將採用**「漸進重構、數據落地、雙重驗證」**的策略，具體實施步驟如下：

### Step 1: 錨定單一事實來源 (Single Source of Truth)
- 每次優化一個單元時，先以 `08-protocol-field-template.md` 為基礎，將對應的 `clinical-guides/imaging-protocols/*.md` 進行全面內容擴充與專業深化（確保有必做閘門、定量指標、細緻 pitfalls）。

### Step 2: 執行「精準文獻檢索 (Retrieval-Led Research)」
- 部署 `research` 子代理，針對該單元最新指引（如 ASNC 2025、EANM 2025）進行精準文獻抓取，補足 local table 中的 Baseline。
- 若有合適的高解析度文獻影像，先將其複製或下載至 `assets/` 對應目錄，並撰寫極具教學價值的 Markdown 圖說。

### Step 3: 更新前端資料結構與決策圖 (script.js)
- 將擴充後的臨床知識轉換為前端 `script.js` 物件。
- 專門為 Tier 1 項目設計 `conceptDiagram` (chain 或 decision 類型) 以及 `readerGuideArticle` 的多維度導讀。
- 將病人 education 部分（如 `cardiac_pyp` 格式）同步更新，使醫學專業版與病人衛教版同步升級。

### Step 4: 視覺審計與代碼格式化 (Prettier & UX Audit)
- 透過本地預覽，確保 table、prose 和 mermaid 流程圖在「Dr. Huang's核醫工具箱」母網站上渲染完美，符合 Premium 視覺美學（深色模式相容、圓角、高對比度文字與精美徽章）。
- 確保修改後的 `script.js` 不會引起舊單元的渲染 Regression。

---

## 5. 聯絡與變更日誌

- **計畫啟動日期**：2026-05-31
- **當前階段**：規劃與標竿對齊階段 (v1.0.0)。
- *本計畫為動態文檔，每次單元優化完成後，需同步更新 `90-progress-map-and-next-normalization.md` 與本計畫的實施狀態。*
