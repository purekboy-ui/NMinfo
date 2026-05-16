# 研究進度地圖與格式正規化計畫

更新日期：2026-05-16

## 已完成

### 第一層總覽

- 來源優先序
- 名詞解釋
- 依 PET / cardiac / endocrine / renal / GI / neuro-pulmonary-infection 分類總覽

### 第二層逐檢查獨立檔

- FDG PET/CT
- FDG brain PET
- PSMA PET/CT
- SSTR PET/CT
- NaF PET/CT
- bone scintigraphy
- Tc-99m MPI SPECT
- PET MPI
- cardiac amyloidosis PYP
- thyroid uptake / scan
- parathyroid
- MIBG
- salivary gland
- renal dynamic scintigraphy
- diuretic renography
- DMSA
- gastric emptying
- HIDA
- GI bleeding
- liver-spleen
- small-bowel / colon transit
- brain perfusion SPECT
- DaT SPECT
- V/Q
- leukocyte / infection
- brain death scintigraphy

## 第三輪格式正規化目前狀態

已建立：

- `08-protocol-field-template.md`

目前已正規化完成的高頻 / 核心逐檢查檔案：

- `10-fdg-pet-ct-oncology.md`
- `11-fdg-brain-pet.md`
- `12-psma-pet-ct.md`
- `13-sstr-pet-ct.md`
- `20-bone-scintigraphy.md`
- `30-tc99m-mpi-spect.md`
- `31-pet-myocardial-perfusion.md`
- `40-thyroid-uptake-and-scintigraphy.md`
- `41-parathyroid-scintigraphy.md`
- `50-renal-dynamic-scintigraphy-mag3-dtpa.md`
- `51-diuretic-renography.md`
- `52-dmsa-renal-cortical-scintigraphy.md`
- `60-gastric-emptying-scintigraphy.md`
- `61-hepatobiliary-scintigraphy-hida.md`
- `62-gi-bleeding-scintigraphy.md`
- `70-brain-perfusion-spect.md`
- `71-dat-spect-ioflupane.md`
- `72-vq-scintigraphy.md`
- `73-leukocyte-infection-scintigraphy.md`

這批檔案已統一納入：

- acquisition parameter table
- image processing parameter table
- QC checklist
- artifact / pitfall checklist

## 目前結論

逐檢查檔案已全數完成同一波資料化正規化，至少已具備：

- acquisition parameter table
- image processing parameter table
- QC checklist
- artifact / pitfall checklist
- 科內落地時最該固定的欄位

後續若再往下做，下一層就不再是「補齊骨架」，而是進入更細的內容深化，例如：

- vendor / machine 差異
- reconstruction preset 實例
- 每檢查 QC 與 artifact atlas
- 可直接上站的圖表與流程圖
