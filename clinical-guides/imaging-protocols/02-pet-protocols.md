# PET 影像 protocol

更新日期：2026-05-16

## PET 共通技術原則

- 先固定病人準備與 uptake time，再談 SUV 可比性。
- CT 若只做 attenuation correction，目標是配準穩定與劑量合理，不是硬做診斷級 CT。
- reconstruction 應固定一組科內臨床 preset，避免每次任意切換 OSEM / TOF / PSF / BSREM。
- 若採不同 tracer，不能直接照搬 FDG 的等待時間與排尿策略。

## 1. FDG PET/CT 腫瘤影像

### 最新優先來源

- EANM/SNMMI guideline for FDG PET/CT: tumour imaging  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/EANM%20SNMMI%20FDG-PET-CT-guidelines-for-tumour-imaging.aspx>

### 技術 baseline

| 項目 | 主流做法 |
| --- | --- |
| 病人準備 | 禁食至少 4–6 小時，避免劇烈運動，控制血糖 |
| 注射後等待 | 通常約 60 分鐘，重點是科內固定一致 |
| 排尿 | 掃描前鼓勵排尿；骨盆病灶或泌尿附近病灶特別重要 |
| 掃描範圍 | skull base 到 mid-thigh 為常規；視病情延伸至 vertex 或足部 |
| CT | 低劑量 CT for AC / localization；若臨床需要再升級為診斷級 CT |
| PET 時間 | 多數數位機 1.5–3 分鐘/bed；較舊系統常 2–4 分鐘/bed |
| Reconstruction | OSEM + TOF，必要時加 PSF；BSREM 依 vendor validated preset |

### 建議記錄的技術欄位

- 血糖
- 注射活度
- 注射與開始掃描的時間差
- 是否有 extravasation
- 是否使用造影 CT
- 每 bed 掃描時間
- reconstruction preset 名稱

### 影像處理重點

- 先看 attenuation-corrected 與 non-attenuation-corrected 影像是否一致
- MIP 只做總覽，最終仍以 axial/coronal/sagittal 為主
- SUV 定量必須在病人準備與重建穩定時才有比較意義

### 常見踩雷點

- 注射滲漏造成病灶低估
- 褐色脂肪、肌肉攝取、發炎反應干擾
- 呼吸造成肺底 / 肝頂 CT-PET misregistration

## 2. FDG Brain PET

### 最新優先來源

- SNMMI Procedure Standard / EANM Practice Guideline for Brain [18F]FDG PET Imaging version 2.0, 2024  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2024/SNMMI_EANM%20Guidelines%20for%20FDG%20Brain%20PET_BOD%20FINAL%20%28002%29.pdf>

### 技術 baseline

| 項目 | 主流做法 |
| --- | --- |
| 環境 | 安靜、低刺激、昏暗環境 |
| 注射前後 | 避免說話、閱讀、咀嚼與明顯感官刺激 |
| 等待時間 | 通常約 30–60 分鐘，重點是科內固定 |
| 頭部固定 | 必須穩；可用 head holder、側墊、固定帶 |
| 掃描時間 | 依系統多為 10–20 分鐘靜態收像 |
| CT / MR | 可搭配低劑量 CT 做 AC；若有 PET/MR 依系統處理 |
| Reconstruction | 高解析 OSEM；必要時 PSF；避免過度平滑 |

### 處理重點

- reorientation 要標準化
- 若做半定量或 z-score 分析，必須固定重建與 normal database
- 先排除 motion，再談皮質代謝模式

### 常見踩雷點

- 注射時病人說話、哭泣、肌肉緊張
- 頭部微動造成皮質假性不對稱
- 血糖過高影響腦攝取

## 3. PSMA PET/CT

### 最新優先來源

- PSMA PET/CT joint EANM guideline / SNMMI procedure standard 2.0, 2023  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/PSMA-PET-CT-Joint-EANM-Procedure-Guideline-SNMMI-Procedure-Standard-for-Prostate-Cancer-Imaging-2.aspx>

### 技術 baseline

| 項目 | 主流做法 |
| --- | --- |
| Tracer | 68Ga-PSMA-11、18F-DCFPyL、18F-PSMA-1007 等依院內可得性 |
| 等待時間 | 依 tracer 固定，常見約 50–120 分鐘區間 |
| 排尿 | 對 urinary tracer 尤其重要；掃描前排尿很常規 |
| 掃描範圍 | skull vertex 至 mid-thigh 常見；高風險或臨床需要可全身 |
| PET 時間 | 多數數位 PET 約 2–4 分鐘/bed |
| CT | AC/localization 為基本； staging 常搭診斷級 CT |
| Reconstruction | TOF OSEM 為主；保持 tracer-specific 一致性 |

### 技術提醒

- 不同 PSMA tracer 的尿路排泄不同，不能假設影像背景完全一樣
- 若是 18F-PSMA-1007，要特別熟悉非特異性骨攝取陷阱
- 若要做 longitudinal comparison，等待時間與重建要盡量一致

## 4. SSTR PET/CT

### 最新優先來源

- SNMMI Procedure Standard / EANM Practice Guideline for SSTR PET Imaging, 2022  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2022/SSTR-PET%2003.11.22%20Final%20Clean.pdf>

### 技術 baseline

| 項目 | 主流做法 |
| --- | --- |
| Tracer | 68Ga-DOTATATE / DOTATOC / DOTANOC 或 18F-SSTR tracer |
| 等待時間 | 多數 45–90 分鐘區間，依 tracer 固定 |
| 掃描範圍 | skull base 或 vertex 到 mid-thigh；NET 需視病灶分布調整 |
| PET 時間 | 約 2–4 分鐘/bed |
| CT | AC/localization 基本； staging 時常加診斷級 CT |
| Reconstruction | TOF OSEM；小病灶呈現要注意 PSF 帶來的邊緣強化 |

### 處理重點

- 生理性脾臟、腎上腺、肝、腎臟與尿路攝取要熟悉
- 若用於 PRRT 前評估，技術一致性很重要，避免假性低估或高估

## 5. Amyloid PET

### 最新優先來源

- SNMMI Procedure Standard / EANM Practice Guideline for Amyloid PET  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2016/SNMMI-EANM%20Standard%20for%20Amyloid%20PET%20Imaging%20of%20the%20Brain%20_1535555859659_26.pdf>
- Updated Appropriate Use Criteria for Amyloid and Tau PET, 2025  
  <https://jnm.snmjournals.org/content/early/2025/01/07/jnumed.124.268756>

### 技術 baseline

| 項目 | 主流做法 |
| --- | --- |
| Tracer | 18F-florbetapir、18F-flutemetamol、18F-florbetaben 等 |
| 掃描時間 | 依 tracer label，通常在注射後固定窗口內進行 10–20 分鐘靜態掃描 |
| 頭部固定 | 必須嚴格，因皮質判讀高度依賴細節 |
| CT / AC | 可使用低劑量 CT AC |
| Reconstruction | 高解析 OSEM，切片厚度與 smoothing 應固定 |

### 處理重點

- 一定要熟悉各 tracer label 規定的 acquisition window
- 判讀核心是灰白質分界，不是單看全腦亮不亮
- 若做定量，需使用對應的 validated software pipeline

## 6. NaF PET/CT

### 來源

- NaF PET/CT 仍多依既有 SNM guideline 與骨轉移 imaging 文獻執行；本輪先作基礎整理，後續可再擴充單卷。

### 技術 baseline

| 項目 | 主流做法 |
| --- | --- |
| 病人準備 | 補水、掃描前排尿 |
| 掃描時間 | 通常注射後約 45–60 分鐘 |
| 掃描範圍 | 全身或 skull vertex 至 feet 視臨床需求 |
| PET 時間 | 約 2–4 分鐘/bed |
| CT | AC/localization 基本；若需骨結構細節可升級 CT |

### 技術提醒

- NaF 對骨病灶敏感，但退化性變化也常亮
- 若要與 bone scan 比較，須避免把不同 modality 的敏感度差異當成 disease progression

## PET 共通 QC 與 artifact 重點

- CT 與 PET 是否 misregistration
- 注射滲漏
- 病人 motion
- 尿路高活性污染或局部 spillover
- 金屬植入造成 CT AC artifact
- 兩次追蹤檢查若重建 preset 改變，SUV 不宜直接硬比
