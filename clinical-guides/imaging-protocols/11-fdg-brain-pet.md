# FDG Brain PET

更新日期：2026-05-16  
最新已核對的主要來源：

- SNMMI Procedure Standard / EANM Practice Guideline for Brain [18F]FDG PET Imaging version 2.0, 2024  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2024/SNMMI_EANM%20Guidelines%20for%20FDG%20Brain%20PET_BOD%20FINAL%20%28002%29.pdf>

## 檢查定位

FDG brain PET 和全身 FDG PET 最大差異，在於注射與等待期的腦部環境控制。病人被刺激、說話、緊張或頭動，都會直接改變影像可信度。

## Acquisition parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Detector / modality | brain PET/CT 或 PET/MR |
| Tracer | 18F-FDG |
| Patient prep | 禁食 4–6 小時；避免高血糖；注射前後保持安靜、低刺激、避免說話與閱讀 |
| Uptake time | 常見約 30–60 分鐘，科內需固定 |
| Position | supine，頭部置中固定 |
| FOV / scan range | 頭部 |
| Scan duration | 多約 10–20 分鐘靜態收像 |
| CT role | 低劑量 CT AC 可行 |

## Image processing parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Reconstruction family | 高解析 OSEM |
| Iterations / subsets | 依 system preset 固定 |
| Attenuation correction | CT AC 或 MR-based AC |
| Scatter correction | vendor preset |
| Resolution recovery / PSF | 視系統可用 |
| Reorientation | 標準腦部 reorientation |
| Quantification | 若做 z-score 或半定量，需用固定 database 與 pipeline |

## QC checklist

- 注射與等待期環境是否符合 protocol
- 頭部固定是否穩定
- raw data 是否有 motion
- 使用的定量軟體與 normal database 是否一致

## Artifact / pitfall checklist

- 高血糖
- 頭部 motion
- 注射等待期病人講話、哭泣、咀嚼或緊張
- 過度平滑造成皮質細節下降
