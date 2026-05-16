# PET Myocardial Perfusion Imaging

更新日期：2026-05-16  
最新已核對的主要來源：

- SNMMI/EANM/ASNC/ACNM Guideline for 18F-Flurpiridaz PET Myocardial Perfusion Imaging and Blood Flow Quantitation, 2025  
  <https://snmmi.org/Web/Web/Clinical-Practice/Procedure-Standards/Standards/SNMMI%20EANM%20ASNC%20ACNM%20Guideline%20for%2018F-Flurpiridaz%20PET%20Myocardial%20Perfusion%20Imaging%20and%20Blood%20Flow.aspx>
- ASNC PET Quick Reference Guide, 2024  
  <https://www.asnc.org/wp-content/uploads/2024/06/PET-Quick-Reference-Guide-Final.pdf>

## 檢查定位

PET MPI 的真正優勢是高品質 perfusion 加上 MBF / MFR 定量；若動態流程不穩，定量就不應被過度信任。

## Acquisition parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Detector / modality | PET/CT |
| Tracer | Rb-82、N-13 ammonia、18F-flurpiridaz |
| Patient prep | 依 stress 與藥物規範；多為 pharmacologic stress |
| Position | supine |
| CT role | 低劑量 CT AC 幾乎為標配 |
| Acquisition | static 或 dynamic + static，視是否做 MBF / MFR |
| Gating | 可加 ECG gating |

## Image processing parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Reconstruction family | TOF OSEM 常見 |
| Iterations / subsets | 依 vendor validated preset |
| Attenuation correction | CT AC |
| Scatter correction | vendor preset |
| Motion correction | 視系統可用 |
| Quantification | MBF / MFR、perfusion、EF 等 |

## QC checklist

- stress 是否達標
- 注射時序與 dynamic framing 是否正確
- CT-PET 是否 misregistration
- flow quantitation software 是否為 validated pipeline

## Artifact / pitfall checklist

- dynamic acquisition 起始錯誤
- CT AC 對位不良
- 不同 tracer / 不同流程定量結果硬比
