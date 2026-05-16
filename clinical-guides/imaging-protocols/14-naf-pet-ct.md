# 18F-NaF PET/CT

更新日期：2026-05-16  
最新已核對的主要來源：

- SNM guideline for Sodium 18F-Fluoride with PET/CT Bone Scans 1.1  
  <https://snmmi.org/Web/Web/Clinical-Practice/Procedure-Standards/Standards/Sodium-18F-Fluoride-with-PET-CT-Bone-Scans-1-1.aspx>
- SNM Guideline for Sodium 18F-Fluoride PET/CT Bone Scans PDF  
  <https://snmmi.org/common/Uploaded%20files/Web/Centers/PET%20Center%20of%20Excellence/Practice%20Guideline%20NaF%20PET%20V1.1.pdf>

## 檢查定位

18F-NaF PET/CT 是高敏感度骨代謝 PET。  
它不是傳統 bone scan 的單純升級版，而是更敏感、解剖配對更強，但也更容易把退化性或良性骨改變照得很明顯。

## Acquisition parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Detector / modality | PET/CT |
| Tracer | 18F-sodium fluoride |
| Patient prep | 補水；掃描前排尿 |
| Uptake time | 常見約 45–60 分鐘；科內需固定 |
| Position | supine 為主；必要時記錄 arms up/down |
| FOV / scan range | 依臨床做全身或 skull vertex 至 feet / mid-thigh |
| Time/bed | 多約 2–4 分鐘/bed，依系統與體型調整 |
| CT role | AC/localization 基本；必要時升級診斷 CT |

## Image processing parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Reconstruction family | TOF OSEM 常見 |
| Iterations / subsets | 依 vendor validated preset 固定 |
| Attenuation correction | CT AC |
| Scatter correction | vendor preset |
| Resolution recovery / PSF | 視系統可用 |
| Quantification | SUV 可描述性使用，但不應單獨下診斷 |

## QC checklist

- CT 與 PET 是否明顯 misregistration
- 膀胱與尿路高活性是否干擾骨盆判讀
- 注射是否有 extravasation
- 掃描範圍是否完整覆蓋臨床需求

## Artifact / pitfall checklist

- 退化性骨改變與良性骨病灶
- 尿路高活性鄰近骨盆病灶
- 金屬與 CT AC artifact

## 科內落地時最該固定的欄位

- uptake time
- scan range
- time/bed
- CT 模式
- reconstruction preset
