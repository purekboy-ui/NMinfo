# 心臟核醫 protocol

更新日期：2026-05-16

## 心臟影像的技術核心

- 心臟檢查最怕「影像可看，但其實不可靠」。
- 真正影響品質的常常不是 tracer 名稱，而是：
  - stress 是否做到位
  - gating 是否成功
  - prone / supine 或 attenuation correction 是否有協助釐清 artifact
  - 乳房、橫膈、肥胖與 motion artifact 是否被辨識

## 1. Tc-99m MPI SPECT

### 主要來源

- SNMMI/ASNC/SCCT Guideline for Cardiac SPECT/CT and PET/CT 1.0  
  <https://sites.snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2012/ASNC_SCCT_SNMMI%20Guideline%20for%20Cardiac%20SPECT-CT%20and%20PET-CT.pdf>
- ASNC reporting / protocol quick references 2024  
  <https://www.asnc.org/wp-content/uploads/2024/05/Reporting-of-Myocardial-Perfusion-Imaging-Tests.pdf>

### 技術 baseline

| 項目 | 主流做法 |
| --- | --- |
| Tracer | Tc-99m sestamibi 或 tetrofosmin |
| 收像方式 | 雙探頭最常見；180 度 cardiac arc 為主 |
| Matrix | 常見 64 x 64；需搭配 zoom 讓 pixel size 合理 |
| Orbit | body contour / noncircular 優先 |
| Views | 常見 60 或 64 views |
| Time/view | 多為 15–30 秒/stop，依 dose、體型、CZT 與否調整 |
| Gating | 8-frame 或 16-frame ECG gating |
| Positioning | supine 為基本；必要時加 prone 或 upright |
| AC | 若有 SPECT/CT 可做 CT AC；但要檢查 misregistration |

### 後處理重點

- short axis、vertical long axis、horizontal long axis 標準重切
- gated function 與 perfusion 要一起看
- 若 AC 與 NAC 結論不同，要回看 raw data 與 CT 配準

### 常見陷阱

- 軟組織衰減假性缺損
- 心律不整造成 gating 失敗
- subdiaphragmatic activity 干擾下壁

## 2. Tl-201 MPI

### 技術定位

Tl-201 已非多數中心首選，但某些 viability 或特定流程仍會用到。

### 技術提醒

- photon energy 較低且較易受衰減影響
- 收像時間通常要比 Tc-99m protocol 長
- 若做 redistribution / reinjection，時間點必須嚴格記錄

## 3. PET Myocardial Perfusion

### 最新優先來源

- SNMMI/EANM/ASNC/ACNM Guideline for 18F-Flurpiridaz PET Myocardial Perfusion Imaging and Blood Flow Quantitation, 2025  
  <https://snmmi.org/Web/Web/Clinical-Practice/Procedure-Standards/Standards/SNMMI%20EANM%20ASNC%20ACNM%20Guideline%20for%2018F-Flurpiridaz%20PET%20Myocardial%20Perfusion%20Imaging%20and%20Blood%20Flow.aspx>
- ASNC PET Quick Reference Guide, 2024  
  <https://www.asnc.org/wp-content/uploads/2024/06/PET-Quick-Reference-Guide-Final.pdf>

### 技術 baseline

| 項目 | 主流做法 |
| --- | --- |
| Tracer | Rb-82、N-13 ammonia、18F-flurpiridaz 依設備與供應條件 |
| Stress | 多為 pharmacologic stress |
| CT | 低劑量 CT AC 幾乎是標配 |
| Acquisition | 依 tracer 執行動態 + 靜態或 list-mode protocol |
| MBF / MFR | 若做血流定量，需完整動態流程與 validated software |
| Gating | 可加 ECG gating 取得功能資訊 |

### 技術要點

- PET MPI 的價值不只 perfusion，還包含 MBF / MFR
- 若要做 flow quantitation，注射方式與 list-mode 時序不能亂
- CT AC 與 PET misregistration 會直接影響定量可信度

## 4. PYP / DPD / HMDP 心肌澱粉樣變性骨示蹤劑影像

### 技術定位

雖不一定每院常做，但近年 ATTR-CM 評估越來越常見，未來網站很值得補一個獨立單元。

### 技術 baseline

- planar anterior 基本
- 常見再加 SPECT 或 SPECT/CT，避免把 blood pool 誤判為 myocardial uptake
- 時間點依 tracer 與科內 protocol 固定，常見 1 小時與 3 小時策略

### 技術提醒

- 不能只用 planar H/CL ratio 就下結論
- SPECT 對區分 myocardial uptake 與血池殘留非常重要

## 心臟核醫 QC 重點

- energy peaking 與 uniformity 每日 QC
- ECG gating 是否穩定
- motion review：尤其 stress 後病人較不穩
- AC CT 是否對位
- reconstruction preset 是否一致
