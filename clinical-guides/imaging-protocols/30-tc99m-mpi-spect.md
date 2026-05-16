# Tc-99m MPI SPECT

更新日期：2026-05-16  
主要來源：

- SNMMI/ASNC/SCCT Guideline for Cardiac SPECT/CT and PET/CT 1.0  
  <https://sites.snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2012/ASNC_SCCT_SNMMI%20Guideline%20for%20Cardiac%20SPECT-CT%20and%20PET-CT.pdf>
- ASNC reporting / protocol quick references, 2024  
  <https://www.asnc.org/wp-content/uploads/2024/05/Reporting-of-Myocardial-Perfusion-Imaging-Tests.pdf>

## 檢查定位

心肌灌注 SPECT 的主要技術敵人是 attenuation artifact、subdiaphragmatic activity 與 gating 失敗。

## Acquisition parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Detector / modality | dual-head SPECT 或 SPECT/CT |
| Tracer | Tc-99m sestamibi 或 tetrofosmin |
| Patient prep | 依 stress protocol；記錄 caffeine、藥物與 stress 條件 |
| Position | supine 基本；必要時加 prone / upright |
| Arc | cardiac 180° 常見 |
| Orbit | body contour 優先 |
| Matrix | 64x64 常見 |
| Views | 60 或 64 views 常見 |
| Time/view | 約 15–30 秒/stop，依 dose 與體型調整 |
| Gating | 8-frame 或 16-frame ECG gating |
| CT role | 若有 SPECT/CT，可做 CT AC |

## Image processing parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Reconstruction family | iterative reconstruction 常見 |
| Attenuation correction | CT AC 或 none，需與 NAC 對照 |
| Scatter correction | 視系統可用 |
| Resolution recovery / PSF | 視系統可用 |
| Reorientation | SA / VLA / HLA cardiac planes |
| Quantification | perfusion scores、EF、wall motion / thickening |

## QC checklist

- stress 是否達標
- ECG gating 是否穩定
- CT 與 SPECT 是否 misregistration
- raw projection 是否有 motion
- 是否需要 prone / upright 補拍釐清 artifact

## Artifact / pitfall checklist

- 乳房衰減
- 橫膈衰減
- subdiaphragmatic activity
- arrhythmia 造成 gating 不可靠
