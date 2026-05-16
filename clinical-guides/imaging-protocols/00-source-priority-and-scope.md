# 核醫影像技術參數研究總覽

更新日期：2026-05-16  
用途：本資料夾供未來網站上架前的技術研究與內容整編使用，主軸是放射師與核醫技術相關的「怎麼收、怎麼照、怎麼處理」。

## 這套資料在解決什麼問題

核醫檢查的臨床名稱常常很熟，但真正影響影像品質與可解讀性的，是技術細節：

- 選哪一種 collimator
- matrix 與 zoom 怎麼配
- 一張 planar 要收幾 counts 或幾分鐘
- SPECT 要幾 views、每 view 幾秒
- PET 要幾 bed、幾分鐘、是否 TOF / PSF / BSREM
- 後處理要不要 attenuation correction、scatter correction、gating、motion correction
- 哪些參數可以微調，哪些其實不應亂改

這批 Markdown 的目標不是只列 textbook 定義，而是把「目前國際上仍可站得住腳的主流 protocol」整理成未來可轉成網站、內訓教材、SOP 草稿的底稿。

## 本批資料的寫法原則

1. 以官方或多學會共同文件為主，不以單篇回顧文章代替 procedure standard。
2. 若某檢查 2024–2026 已有新版 joint guideline，優先採新版。
3. 若該檢查目前沒有 2024–2026 更新，沿用最新仍在使用的 SNMMI / EANM / ASNC / ACR 文件，並明確註記其年代。
4. 針對 matrix、time/view、reconstruction 等技術參數，優先寫「安全可執行的主流範圍」，避免偽精確。
5. 任何受機型、探頭、病人體型、tracer、廠牌演算法影響很大的參數，都不寫成唯一標準答案。
6. 本資料先聚焦成人常規臨床流程；兒科、研究型 protocol、特殊機型優化可於下一輪補充。

## 來源優先序

### 第一層：最新版 joint / multi-society guideline

- SNMMI / EANM joint procedure standard
- SNMMI / EANM / ASNC / ACNM cardiac guideline
- EANM / SNMMI / IHPBA 之類跨學會特定檢查 guideline

### 第二層：單一 major society 的最新版 procedure standard / practice guideline

- SNMMI procedure standard / practice guideline
- EANM guideline / practice guideline
- ASNC cardiac protocol / quick reference
- ACR / ACNM / SNMMI / SPR practice parameter

### 第三層：專業共識文件

- Gastric emptying 的標準化共識
- 特定 tracer 的適當使用準則或 quick reference

### 第四層：補充性來源

- 廠牌說明書
- 高品質方法學 review
- 單中心 protocol

這一層只用來補技術細節，不用來推翻第一、二層。

## 已確認優先納入的官方來源

以下是本輪已核對、且後續各檔案會優先引用的來源地圖。

### PET

- EANM/SNMMI guideline for FDG PET/CT: tumour imaging  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/EANM%20SNMMI%20FDG-PET-CT-guidelines-for-tumour-imaging.aspx>
- SNMMI Procedure Standard / EANM Practice Guideline for Brain [18F]FDG PET Imaging version 2.0, approved 2024-06-07  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2024/SNMMI_EANM%20Guidelines%20for%20FDG%20Brain%20PET_BOD%20FINAL%20%28002%29.pdf>
- PSMA PET/CT: joint EANM procedure guideline / SNMMI procedure standard 2.0, 2023  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/PSMA-PET-CT-Joint-EANM-Procedure-Guideline-SNMMI-Procedure-Standard-for-Prostate-Cancer-Imaging-2.aspx>
- SNMMI Procedure Standard / EANM Practice Guideline for SSTR PET Imaging, 2022  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2022/SSTR-PET%2003.11.22%20Final%20Clean.pdf>
- SNM Practice Guideline for Sodium 18F-Fluoride PET/CT Bone Scans 1.0  
  於骨掃描 guideline 內仍被列為參照來源
- SNMMI Procedure Standard / EANM Practice Guideline for Amyloid PET, 2016，搭配 2025 Appropriate Use Criteria 更新適應症  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2016/SNMMI-EANM%20Standard%20for%20Amyloid%20PET%20Imaging%20of%20the%20Brain%20_1535555859659_26.pdf>  
  <https://jnm.snmjournals.org/content/early/2025/01/07/jnumed.124.268756>

### 心臟

- SNMMI/EANM/ASNC/ACNM Guideline for 18F-Flurpiridaz PET Myocardial Perfusion Imaging and Blood Flow Quantitation, 2025  
  <https://snmmi.org/Web/Web/Clinical-Practice/Procedure-Standards/Standards/SNMMI%20EANM%20ASNC%20ACNM%20Guideline%20for%2018F-Flurpiridaz%20PET%20Myocardial%20Perfusion%20Imaging%20and%20Blood%20Flow.aspx>
- ASNC PET Quick Reference Guide, 2024  
  <https://www.asnc.org/wp-content/uploads/2024/06/PET-Quick-Reference-Guide-Final.pdf>
- SNMMI/ASNC/SCCT Guideline for Cardiac SPECT/CT and PET/CT 1.0  
  <https://sites.snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2012/ASNC_SCCT_SNMMI%20Guideline%20for%20Cardiac%20SPECT-CT%20and%20PET-CT.pdf>

### 骨骼、內分泌、腎泌尿、GI、神經、肺部、感染

- SNMMI Practice Guideline for Bone Scintigraphy 4.0, 2024 re-posted update  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2023/Bone%20Scintigraphy_UPDATED2024.pdf>
- EANM/SNMMI guideline for Radio-Iodine Uptake and Thyroid Scintigraphy v3.0  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/EANM%20SNMMI%20guideline-for-Radio-Iodine-Uptake--RAIU--and-Scintigraphy--V-3-0.aspx>
- SNMMI guideline for Parathyroid Scintigraphy 4.0  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/Parathyroid-Scintigraphy-4-0.aspx>
- SNMMI/EANM Renal Scintigraphy in Adults, 2018  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2018/Renal%20Scintigraphy_Blaufox_0318.pdf>
- Pediatric [99mTc]Tc-DMSA Renal Cortical Scintigraphy: An Update, 2021  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2021/SNMMI%20EANM%20DMSA%20guideline_final.pdf>
- ACR/SNMMI/SPR Practice Guideline for Performance of Gastrointestinal Scintigraphy  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/ACR-SNMMI-SPR-Practice-Guideline-for-Performance-of-Gastrointestinal-Scintigraphy.aspx>
- Joint EANM/SNMMI/IHPBA Procedure Guideline for [99mTc]Tc-Mebrofenin Hepatobiliary Scintigraphy SPECT  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/Joint-EANM-SNMMI-IHPBA-Procedure-Guideline-for--99mTc-Tc-Mebrofenin-Hepatobiliary-Scintigraphy-SPECT.aspx>
- Consensus Recommendations for Gastric Emptying Scintigraphy  
  <https://tech.snmjournals.org/content/36/1/44>
- Brain Perfusion SPECT Using 99mTc Radiopharmaceuticals 3.0  
  <https://snmmi.org/Web/Web/Clinical-Practice/Procedure-Standards/Standards/Brain-Perfusion-Single-Photon-Emission-Computed-Tomography--SPECT--Using-99mTc-Radiopharmaceuticals-.aspx>
- EANM/SNMMI guideline for Dopaminergic Imaging in Parkinsonian Syndromes  
  <https://snmmi.org/Web/Clinical-Practice/Procedure-Standards/Standards/Dopaminergic-Imaging-in-Parkinsonian-Syndromes.aspx>
- SNM Practice Guideline for Dopamine Transporter Imaging  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2011/123I_ioflupane_SPECT_Practice_Guideline_JNM_Edit_FINAL.pdf>
- ACR/SNMMI/SPR Practice Guideline for the Performance of Scintigraphy for Inflammation or Infection  
  <https://snmmi.org/Web/Web/Clinical-Practice/Procedure-Standards/Standards/ACR-SNMMI-SPR-Practice-Guideline-for-the-Performance-of-Scintigraphy-for-Inflammation-or-Infection.aspx>
- Society of Nuclear Medicine Procedure Guideline for 111In-Leukocyte Scintigraphy  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2004/Leukocyte_v3.pdf>
- Pulmonary Scintigraphy guideline page / archived PDF  
  <https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2009/Pulmonary_Scintigraphy_1382732040599_8.pdf>

## 本輪整理範圍

本輪先整理成人臨床最常遇到、且未來最適合網站化的技術主題：

- PET：FDG oncology、FDG brain、PSMA、SSTR、amyloid、NaF
- 心臟：Tc-99m MPI SPECT、Tl-201、PET MPI、PYP
- 內分泌：thyroid uptake / scan、parathyroid、MIBG
- 腎泌尿：DTPA / MAG3 renography、diuretic renography、DMSA、radionuclide cystography
- GI / 肝膽：gastric emptying、GI bleed、HIDA、liver-spleen、mebrofenin functional SPECT
- 神經 / 肺 / 感染：brain perfusion SPECT、DaT SPECT、brain death、V/Q、WBC / infection

## 閱讀方式

### 若你要先建立全域概念

先看：

1. `01-glossary-and-core-parameters.md`
2. 各分類檔案開頭的「共通技術原則」

### 若你要快速查單一檢查 protocol

直接跳到對應分類檔，優先看每節中的：

- 臨床定位
- 建議 tracer / activity
- acquisition baseline
- image processing
- 常見踩雷點

## 重要提醒

- 這批內容是「研究底稿」，不是直接替代在地 SOP。
- 若要真正落地到科內 protocol，還要再核對：
  - 機型與 detector 條件
  - collimator 現況
  - vendor reconstruction 套件
  - 是否有 CT、是否能做 attenuation correction
  - 本院對小兒、肥胖、無法配合病人的調整方式
- 對於 PET 的 OSEM / TOF / PSF / BSREM 參數，應以 vendor validated preset 為主，不建議自行脫離原廠建議範圍。

## 下一輪適合補強的方向

- 兒科 protocol 專卷
- SPECT/CT 專卷：CT AC vs diagnostic CT 的最小安全原則
- 各檢查的 QC 與 artifact atlas
- vendor-specific reconstruction cheat sheet
