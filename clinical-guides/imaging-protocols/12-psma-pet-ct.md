# PSMA PET/CT

更新日期：2026-05-16  
最新已核對的主要來源：

- PSMA PET/CT: joint EANM procedure guideline / SNMMI procedure standard 2.0, 2023  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/PSMA-PET-CT-Joint-EANM-Procedure-Guideline-SNMMI-Procedure-Standard-for-Prostate-Cancer-Imaging-2.aspx>

## 檢查定位

PSMA PET/CT 的技術關鍵在 tracer-specific workflow。不同 PSMA tracer 的尿路排泄與背景分布不同，科內 protocol 不能只寫成一個籠統的「PSMA PET」。

## Acquisition parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Detector / modality | PET/CT |
| Tracer | 68Ga-PSMA-11、18F-DCFPyL、18F-PSMA-1007 等 |
| Patient prep | 一般不需嚴格禁食；掃描前排尿常有助於減少骨盆干擾 |
| Uptake time | 依 tracer 固定，常見約 50–120 分鐘區間 |
| Position | supine |
| FOV / scan range | skull vertex 或 skull base 至 mid-thigh；高風險可全身 |
| Time/bed | 多約 2–4 分鐘/bed |
| CT role | AC/localization 基本； staging 常加診斷 CT |

## Image processing parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Reconstruction family | TOF OSEM 常見 |
| Iterations / subsets | 依 vendor validated preset 固定 |
| Attenuation correction | CT AC |
| Scatter correction | vendor preset |
| Resolution recovery / PSF | 視系統可用 |
| Quantification | SUV 可描述性使用；跨 tracer 比較需謹慎 |

## QC checklist

- tracer 種類是否清楚記錄
- uptake time 是否符合該 tracer 的科內規範
- 排尿與骨盆影像品質是否足夠
- CT-PET 是否 misregistration
- 追蹤比較是否維持同 tracer / 同重建 preset

## Artifact / pitfall checklist

- ganglia、生理性腺體與尿路攝取
- 18F-PSMA-1007 的非特異性骨攝取
- 金屬與 CT AC artifact
- 不同 tracer / 不同流程下硬比 SUV
