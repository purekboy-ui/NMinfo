# PSMA PET/CT

更新日期：2026-06-03  
最新已核對的主要來源：

- Fendler WP, et al. *PSMA PET/CT: joint EANM procedure guideline/SNMMI procedure standard for prostate cancer imaging 2.0*. Eur J Nucl Med Mol Imaging. 2023;50(5):1466-1486. doi:10.1007/s00259-022-06089-w. PMID: 36604326
- Rowe SP, et al. *Prostate-specific Membrane Antigen Reporting and Data System Version 2.0*. Eur Urol. 2023;84(5):491-502. doi:10.1016/j.eururo.2023.06.008. PMID: 37414701
- Hennrich U, et al. *Revolutionizing Prostate Cancer Detection: The Role of Approved PSMA-PET Imaging Agents*. Pharmaceuticals (Basel). 2025;18(6):906. doi:10.3390/ph18060906. PMID: 40573302
- Jani AB, et al. *Diagnostic Performance and Safety of 18F-rhPSMA-7.3 Positron Emission Tomography in Men With Suspected Prostate Cancer Recurrence: Results From a Phase 3, Prospective, Multicenter Study (SPOTLIGHT).* J Urol. 2023;210(2):299-311. doi:10.1097/JU.0000000000003493. PMID: 37126069
- Schuster DM, et al. *True-Positive 18F-Flotufolastat Lesions in Patients with Prostate Cancer Recurrence with Baseline-Negative Conventional Imaging: Results from the Prospective, Phase 3, Multicenter SPOTLIGHT Study.* J Nucl Med. 2024;65(7):1080-1086. doi:10.2967/jnumed.123.267271. PMID: 38782456
- Rizzo A, et al. *The Homunculus of unspecific bone uptakes associated with PSMA-targeted tracers: a systematic review-based definition*. Eur J Nucl Med Mol Imaging. 2024;51(12):3753-3764. doi:10.1007/s00259-024-06797-5. PMID: 38884773
- DailyMed / FDA labels checked on 2026-06-03: POSLUMA (flotufolastat F 18), PYLARIFY (piflufolastat F 18 / DCFPyL), gallium Ga 68 gozetotide

## 檢查定位

PSMA PET/CT 的臨床價值不只是「比骨掃描更敏感」，而是把攝護腺癌的初始分期、PSA 生化復發再分期、以及放射配體治療前的 target confirmation 放進同一個分子影像框架。2023 EANM/SNMMI guideline 已明確指出：不同 PSMA radioligand 在排泄路徑、背景分布、正常器官劑量與骨病灶假陽性型態上並不完全一樣，因此 protocol 與判讀不應只寫成一個籠統的「PSMA PET」。

截至 2025 review 與 2026-06-03 官方標示核對，國際上已核准且臨床實務最重要的 PSMA PET 藥物包括：

| 藥物 | 常見商品名 | 主要特徵 | 實務重點 |
| --- | --- | --- | --- |
| `68Ga-PSMA-11 / gozetotide` | Locametz, Illuccix, Gozellix | 腎臟與尿路排泄明顯；供應常與 generator/logistics 綁定 | 盆腔局部復發與膀胱附近病灶易受尿液干擾 |
| `18F-DCFPyL / piflufolastat` | PYLARIFY, PYLCLARI | 18F 物流較彈性，仍以尿路排泄為主 | 初始分期與 BCR 都成熟，骨盆判讀仍要注意 bladder activity |
| `18F-PSMA-1007` | Radelumin | 相對較少膀胱活度，對骨盆局部病灶有利 | 非特異性骨 uptake 較常見，過度分期風險最高 |
| `18F-rhPSMA-7.3 / flotufolastat` | POSLUMA | radiohybrid ligand，兼具高腫瘤攝取與可標記 theranostic 家族概念 | 仍有泌尿排泄；判讀時要特別處理骨盆、神經節與良性骨病灶 |

## Acquisition parameter table

| 欄位 | 建議寫法 |
| --- | --- |
| Detector / modality | PET/CT |
| Tracer | 報告中必須明列使用的 PSMA radiopharmaceutical，例如 `18F-flotufolastat`、`18F-DCFPyL`、`68Ga-PSMA-11`、`18F-PSMA-1007` |
| Patient prep | 一般無須禁食；鼓勵補水，掃描前與掃描後排尿；若要釐清骨盆或前列腺窩，可依院內流程考慮利尿、延遲相或排尿後補拍 |
| Uptake time | tracer-specific；POSLUMA 官方建議注射後約 60 分鐘開始影像，`68Ga-PSMA-11` 常見 50–100 分鐘，`18F-DCFPyL` 約 60 分鐘 |
| Position | supine |
| FOV / scan range | skull vertex 或 skull base 至 mid-thigh；高風險或問題導向時可全身 |
| Time/bed | 多數系統約 2–4 分鐘/bed，需配合活度與重建策略 |
| CT role | 至少 low-dose CT 作 AC/localization；若臨床問題需要，可合併診斷 CT 或對比增強 CT |

## Image processing parameter table

| 欄位 | 建議寫法 |
| --- | --- |
| Reconstruction family | TOF OSEM 或 vendor validated equivalent |
| Iterations / subsets | 依 scanner validated preset 固定，不建議跨時期任意切換 |
| Attenuation correction | CT AC |
| Scatter correction | vendor preset |
| Resolution recovery / PSF | 可用時固定啟用策略，追蹤比較需一致 |
| Quantification | SUV 可作描述與追蹤輔助，但跨藥物、跨重建版本與跨掃描時序比較時要保守 |

## QC checklist

- tracer 名稱、實際活度、注射時間、開始收像時間是否完整記錄
- uptake time 是否符合該 tracer 與院內 protocol
- 是否有足夠補水與排尿，特別是骨盆判讀情境
- PET/CT 是否 misregistration，尤其橫膈、膀胱與體動區域
- 是否有注射外滲、局部污染、金屬 artifact 或尿液造成的假影
- 若為追蹤檢查，是否維持相同 tracer、相近 uptake time 與相同重建 preset

## Artifact / pitfall checklist

- 生理性高攝取：淚腺、唾液腺、腎臟、輸尿管、膀胱、肝、脾、小腸
- 交感神經節：celiac、stellate、sacral ganglia 可誤判為淋巴結
- 尿液與 ureter activity：前列腺窩、膀胱旁、pelvic node 判讀最常受影響
- 發炎、感染、肉芽組織、骨折修復、退化性骨病灶可假陽性
- `18F-PSMA-1007` 非特異性骨 uptake 特別常見，肋骨與骨盆最典型
- 負向掃描不能排除微小病灶、低 PSMA 表現病灶或去分化腫瘤
- 治療時序會改變攝取，ADT 早期 flare 或前次治療效應不可忽略

## 科內落地時最該固定的欄位

- tracer 種類與商品名
- 注射活度、注射時間、開始收像時間與實際 uptake time
- 補水、排尿、是否加做利尿或延遲影像
- scan range、arms up/down、time/bed
- CT 模式（AC-only、診斷 CT、是否對比劑）
- 重建 preset 與量化方法
- 是否有前次治療、ADT、近期 biopsy、手術、放療或感染資訊

## Radiopharmaceutical 比較與判讀差異

### 1. `68Ga-PSMA-11`

- 優點是應用成熟、文獻最多、初始分期與復發再分期資料完整。
- 限制是尿路排泄明顯，前列腺窩、骨盆淋巴結與膀胱鄰近病灶常受干擾。
- 若看到骨盆內小熱點，不能只看 MIP；一定要回到 axial fused image 與 CT 判斷是 node、ureter 還是 bladder halo。

### 2. `18F-DCFPyL`

- 與 `68Ga-PSMA-11` 相比，18F 供應鏈與影像解析度在許多中心更有優勢。
- 仍以尿路排泄為主，因此判讀習慣和 `68Ga-PSMA-11` 接近。
- 官方標示與 guideline 都強調掃描前排尿；若臨床問題是 prostate bed recurrence，必要時應考慮排尿後補拍或利尿策略。

### 3. `18F-PSMA-1007`

- 相對較少膀胱活度，對骨盆局部病灶、術後前列腺窩與 bladder-adjacent node 有時較有利。
- 但 2021 多中心研究與 2024 systematic review 都指出：非特異性骨 uptake 明顯較多，尤其肋骨、脊椎與骨盆；若把這些 mild-to-moderate bone foci 全都當轉移，最容易過度分期。
- 因此 `18F-PSMA-1007` 看到孤立、低到中度、無明顯 CT 對應的骨灶時，要先把 benign UBU 放入鑑別，而不是直接下 metastatic disease。

### 4. `18F-flotufolastat / POSLUMA`

- `18F-rhPSMA-7.3` 的 phase 3 SPOTLIGHT 證實其在 PSA 生化復發病人有穩健的 positive predictive performance，對 conventional imaging 陰性的病人仍可檢出真陽性病灶。
- 官方標示建議注射 `296 MBq`，約 60 分鐘開始掃描，檢前檢後補水並排尿。
- 實務上它仍不是「完全沒有尿液干擾」的 tracer；骨盆局部病灶、神經節與 benign bone focus 仍須按 PSMA PET 原則逐層判讀。

## POSLUMA 判讀教學

### 1. 先回答這次檢查要解哪個臨床問題

- 初始分期：重點是是否已有 pelvic nodal disease、extra-pelvic nodal disease、bone metastasis 或 visceral metastasis。
- 生化復發：重點是找出 PSA 上升來源，判斷是前列腺窩局部復發、局部淋巴結、遠端骨轉移，還是仍為影像陰性。
- 治療前 target confirmation：重點不是「有沒有亮」，而是病灶是否具有足夠且可信的 PSMA expression，能否支持後續 radioligand therapy 規劃。

### 2. 讀片順序建議

1. 先看品質：注射外滲、體動、膀胱極高活度、尿液污染、PET/CT misregistration。
2. 再看正常分布：唾液腺、腎臟、輸尿管、肝脾、小腸與神經節型態是否符合生理分布。
3. 接著看原發區域：前列腺、術後前列腺窩、精囊床、膀胱旁與 pelvic sidewall。
4. 再做分區 staging：obturator / internal iliac / external iliac / common iliac / retroperitoneal nodes，再往骨與臟器。
5. 最後才做量化：SUV 可幫助描述，但不應凌駕於位置、形態與 pre-test probability。

### 3. POSLUMA 正常與近正常攝取，必須先背熟

- 高攝取常見：淚腺、腮腺、頜下腺、腎臟、輸尿管、膀胱。
- 中度背景：肝、脾、小腸。
- 易誤判的近正常結構：celiac ganglia、stellate ganglia、sacral ganglia。
- 若不先認出這些型態，再高級的 staging 也會從第一步就偏掉。

### 4. POSLUMA 在骨盆的判讀重點

- 前列腺窩或膀胱旁小灶，一定要先排除 ureter course、urinary stasis、bladder wall apposition。
- 若病灶與尿液訊號難分，院內流程可考慮：
  - 掃描前排尿再上機
  - 掃描後再排尿補拍骨盆
  - 視情況使用利尿策略
- 2025 prospective data 顯示，針對 `18F-flotufolastat` 適度利尿可提升 prostatectomy 後 recurrence detection，因此骨盆局部問題不應只靠單一原始影像硬判。

### 5. POSLUMA 在淋巴結與骨病灶的判讀重點

- 小淋巴結即使 CT 未明顯腫大，只要位置合理、攝取高於背景且不符合 ganglion 型態，就可能是真病灶。
- 反過來說，若焦點位於典型 ganglion 位置、呈線性或對稱、CT 無對應節點增厚，就應先保留 ganglion interpretation。
- 骨病灶若為多發、與 CT sclerosis 或 lysis 對位、臨床 PSA 與病程合理，支持轉移。
- 若為單一肋骨小灶、創傷常見位置、CT 僅見骨折修復或甚至無對應，需保留 benign bone lesion 或 fracture healing。

### 6. 何時要用 PSMA-RADS 2.0 思維

- 明確典型病灶可視為高可信度陽性。
- 不典型位置或證據不足的小灶，應明說「不確定性」與後續建議，而不是硬寫成 metastasis。
- PSMA-RADS 2.0 的價值在標準化不確定病灶的語言，特別適合多中心討論、教學與治療前評估。

## POSLUMA 重要 pitfalls

### 1. 假陽性

- **神經節**：最常把 celiac 或 sacral ganglia 誤叫淋巴結。
- **骨折 / 修復 / 退化性骨病灶**：尤其肋骨單灶與骨盆邊緣灶。
- **感染與發炎**：肺部感染、肉芽腫、結核、術後變化都可能攝取。
- **其他腫瘤新生血管表現 PSMA**：PSMA 並非攝護腺癌專屬訊號。

### 2. 假陰性

- **腫瘤體積太小**：低於 PET 空間解析度。
- **PSMA 表現低或去分化**：例如 neuroendocrine differentiation。
- **治療影響**：ADT、近期治療時序可能改變 uptake，負向結果不能脫離治療脈絡解讀。
- **膀胱或輸尿管遮蓋**：局部復發其實存在，但被高尿液背景掩蓋。

### 3. 不要只靠 SUV 的情境

- 不同 tracer 的背景與腫瘤對比本來就不同。
- 不同 uptake time、重建版本與 scanner 會影響 SUV。
- SUV 中度升高但位置高度典型的 ganglion，不會因為數字好看就變成轉移。

## 報告建議

- 先寫明 clinical indication：初始分期、BCR、或治療前評估。
- 明列 tracer、活度、注射至收像時間、是否排尿/利尿/延遲相。
- Findings 依區域分段：prostate/prostate bed、pelvic nodes、extra-pelvic nodes、bone、viscera。
- 對不確定病灶要明示不確定性來源，例如 ganglion mimic、urinary confounder、benign bone focus。
- Impression 要回答臨床決策，不要只列熱點清單。

## 參考文獻

1. Fendler WP, et al. Eur J Nucl Med Mol Imaging. 2023;50(5):1466-1486. doi:10.1007/s00259-022-06089-w. PMID: 36604326
2. Rowe SP, et al. Eur Urol. 2023;84(5):491-502. doi:10.1016/j.eururo.2023.06.008. PMID: 37414701
3. Hennrich U, et al. Pharmaceuticals (Basel). 2025;18(6):906. doi:10.3390/ph18060906. PMID: 40573302
4. Jani AB, et al. J Urol. 2023;210(2):299-311. doi:10.1097/JU.0000000000003493. PMID: 37126069
5. Schuster DM, et al. J Nucl Med. 2024;65(7):1080-1086. doi:10.2967/jnumed.123.267271. PMID: 38782456
6. Rizzo A, et al. Eur J Nucl Med Mol Imaging. 2024;51(12):3753-3764. doi:10.1007/s00259-024-06797-5. PMID: 38884773
7. Grünig H, et al. Eur J Nucl Med Mol Imaging. 2021;48(13):4483-4494. doi:10.1007/s00259-021-05424-x. PMID: 34120201
8. DailyMed. POSLUMA (flotufolastat F 18) injection label. Checked 2026-06-03.
9. DailyMed. PYLARIFY (piflufolastat F 18) injection label. Checked 2026-06-03.
10. DailyMed. Gallium Ga 68 gozetotide injection label. Checked 2026-06-03.
