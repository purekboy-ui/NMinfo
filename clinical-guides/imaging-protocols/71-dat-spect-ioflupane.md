# DaT SPECT（123I-Ioflupane）

更新日期：2026-05-16  
最新已核對的主要來源：

- EANM/SNMMI guideline for Dopaminergic Imaging in Parkinsonian Syndromes  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/Dopaminergic-Imaging-in-Parkinsonian-Syndromes.aspx>
- SNM Practice Guideline for Dopamine Transporter Imaging  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2011/123I_ioflupane_SPECT_Practice_Guideline_JNM_Edit_FINAL.pdf>

## 檢查定位

DaT SPECT 的技術關鍵是：I-123 用對 collimator、固定好頭、保持固定的 acquisition geometry。

## Acquisition parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Detector / modality | brain SPECT |
| Tracer | 123I-ioflupane |
| Patient prep | thyroid blockade；掃描前排尿；必要時可考慮不影響結果的短效鎮靜 |
| Timing | 注射後 3–6 小時 |
| Position | supine，頭部固定 |
| Collimator | MEGP 建議 |
| Energy window | 159 keV ± 10% |
| Matrix | 128x128 |
| Pixel size | 約 3.5–4.5 mm |
| Orbit | 360° |
| Step angle | 約 3° |
| Time/view | 常見 30–40 秒/stop |
| Counts goal | 常見至少約 1.5 million total counts |

## Image processing parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Reconstruction family | iterative reconstruction 優先 |
| Attenuation correction | 視系統與 workflow |
| Scatter correction | 視系統可用 |
| Motion correction | minor motion 可嘗試；明顯 motion 不可靠 |
| Reorientation | 標準 striatal plane |
| Quantification | 視覺判讀為主，可輔助半定量 |

## QC checklist

- thyroid blockade 是否完成
- collimator 是否正確
- 頭部是否穩定
- raw data 是否有 motion
- reorientation 是否標準

## Artifact / pitfall checklist

- 用 LEHR 收 I-123
- 頭動
- 切片方向不標準
