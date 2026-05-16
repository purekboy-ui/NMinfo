# FDG PET/CT 腫瘤影像

更新日期：2026-05-16  
最新已核對的主要來源：

- EANM/SNMMI guideline for FDG PET/CT: tumour imaging  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/EANM%20SNMMI%20FDG-PET-CT-guidelines-for-tumour-imaging.aspx>

## 檢查定位

FDG PET/CT 的技術重點不只是全身代謝成像，而是把病人準備、等待時間、CT 配準與重建 preset 固定下來，讓 staging、restaging 與治療反應評估可以互相比較。

## Acquisition parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Detector / modality | PET/CT |
| Tracer | 18F-FDG |
| Patient prep | 禁食 4–6 小時；避免劇烈運動；控制血糖；等待期維持安靜與保暖 |
| Uptake time | 常規約 60 分鐘；科內應固定容許範圍 |
| Position | supine，arms up/down 依 protocol 固定 |
| FOV / scan range | skull base 至 mid-thigh；依病情可延至 vertex 或下肢 |
| Time/bed | 數位 PET 多約 1.5–3 分鐘/bed；較舊系統常約 2–4 分鐘/bed |
| CT role | 低劑量 CT AC / localization 為基本；必要時診斷 CT |

## Image processing parameter table

| 欄位 | 主流 baseline |
| --- | --- |
| Reconstruction family | OSEM，現代系統多合併 TOF |
| Iterations / subsets | 依 vendor validated preset 固定 |
| Attenuation correction | CT AC |
| Scatter correction | vendor preset |
| Resolution recovery / PSF | 視系統可用 |
| Motion correction | 視需要；但明顯 motion 應優先辨識而非硬修 |
| Quantification | SUV 可用於描述與追蹤，但前提是流程一致 |

## QC checklist

- 注射是否順利，是否有 extravasation
- 血糖是否在科內可接受範圍
- uptake time 是否落在 protocol 規範
- CT 與 PET 是否 misregistration
- scan range 是否符合臨床問題
- reconstruction preset 是否與科內固定版本一致

## Artifact / pitfall checklist

- 注射滲漏
- 褐色脂肪或肌肉攝取
- 發炎、感染、術後變化
- 金屬與 CT AC artifact
- 呼吸造成肺底 / 肝頂配準誤差

## 科內落地時最該固定的欄位

- 示蹤劑與實際活度
- 禁食時間、血糖、胰島素 / 降糖藥、劇烈運動與保暖狀態
- 注射時間、開始收像時間與 uptake time
- scan range、arms up / down、time/bed
- CT 模式（AC-only 或診斷 CT、是否使用對比劑）
- reconstruction preset 與定量指標（SUVbw 或 SUL）
- 是否加做診斷 CT、局部延長 bed、排尿後或延遲補拍

## SUV 解讀與目前趨勢

- **不要把單一 SUV cutoff 當成惡性門檻。** SUV 反映的是在特定流程下的相對攝取強度，不是病理診斷本身；感染、發炎、肉芽腫與部分良性病灶都可能偏高，低代謝或小病灶惡性腫瘤也可能不高。
- **SUV 受多重前分析與後分析因素影響**，至少包括：
  - 血糖、胰島素、禁食是否充分
  - 注射後等待時間是否一致
  - 注射滲漏、殘餘活度與實際注入劑量
  - 體型正規化方式（SUVbw、SUL、LBM）
  - 體動、呼吸造成的配準誤差
  - 病灶大小與 partial-volume effect
  - reconstruction preset、PSF / BSREM、平滑與 matrix
  - ROI 定義方式（SUVmax、SUVmean、SULpeak）
- **目前趨勢是把 SUV 放回標準化與追蹤脈絡中使用。**
  - staging 時，SUV 可作為描述性資訊，但不應單獨下良惡性判斷。
  - longitudinal follow-up 時，比較價值建立在同一 tracer、相近血糖、相近 uptake time、相近重建與相近 ROI 方法上。
  - 治療反應評估越來越偏向使用 **PERCIST / SULpeak** 這類較標準化的框架，而不是只看單次 SUVmax 升降。
