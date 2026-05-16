# 逐檢查技術欄位模板

更新日期：2026-05-16  
用途：未來所有逐檢查檔案盡量往同一種技術欄位格式收斂，方便轉網站、做 SOP、做查核表。

## 建議固定章節

1. 檢查定位
2. 最新主要來源
3. 病人準備
4. radiopharmaceutical / tracer
5. acquisition parameter table
6. image processing parameter table
7. QC checklist
8. artifact / pitfall checklist
9. 科內落地時最該固定的欄位

## 建議固定表格欄位

### Acquisition parameter table

| 欄位 | 建議寫法 |
| --- | --- |
| Detector / modality | 例如 dual-head gamma camera、SPECT/CT、PET/CT |
| Tracer | 非專利學名優先 |
| Administered activity | 若不寫死單一數字，寫主流範圍 |
| Patient prep | 禁食、補水、排尿、停藥、blockade、sedation 等 |
| Uptake time / imaging time | 注射後多久開始掃描 |
| Position | supine、prone、upright、arms up/down、head fixed 等 |
| FOV / scan range | 掃描起訖範圍 |
| Collimator | LEHR、MEGP、pinhole 等 |
| Energy window | 若屬 SPECT / planar 類檢查 |
| Matrix | 64x64、128x128、256x256 等 |
| Zoom / pixel size | 盡量寫 pixel size 目標範圍 |
| Orbit / arc | 180°、360°、body contour 等 |
| Views / step angle | views 數或每步角度 |
| Time/view or time/bed | 秒數或分鐘數 |
| Counts goal | 若該檢查更適合用 counts 表示 |
| Gating | ECG、respiratory、none |
| CT role | AC only、localization、diagnostic CT |

### Image processing parameter table

| 欄位 | 建議寫法 |
| --- | --- |
| Reconstruction family | OSEM、FBP、TOF OSEM、BSREM 等 |
| Iterations / subsets | 若 guideline 未寫死，可寫常規由 vendor preset 固定 |
| Filter | Gaussian、Butterworth 等 |
| Attenuation correction | CT AC、none |
| Scatter correction | yes / no / vendor preset |
| Resolution recovery / PSF | yes / no |
| Motion correction | 若可做，寫使用條件 |
| Reorientation | 需標準重切者應寫明 |
| Quantification | SUV、GBEF、MBF/MFR、H/CL、T1/2 等 |

### QC checklist

- 當日 camera / PET / CT QC 是否合格
- energy peaking / uniformity / blank scan 等是否完成
- 注射是否順利，是否有 extravasation
- 病人準備是否符合 protocol
- raw data 是否有 motion、污染、截切
- 後處理 preset 是否與科內固定版本一致

### Artifact / pitfall checklist

- motion
- misregistration
- attenuation artifact
- physiologic uptake mimic
- contamination
- wrong collimator / wrong timing / wrong meal / wrong medication status

## 目前狀態

這份模板先建立骨架。  
現有逐檢查檔案中，第三輪新增檔案會優先套用；前兩輪已建立的逐檢查檔案，可在後續批次補齊同格式。
