import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const protocolsDir = path.join(projectRoot, 'clinical-guides', 'imaging-protocols');
const outputPath = path.join(projectRoot, 'src', 'protocols.js');

const DIRECT_FILE_MAP = {
  PET: '10-fdg-pet-ct-oncology.md',
  BrainPET: '11-fdg-brain-pet.md',
  POSLUMA: '12-psma-pet-ct.md',
  Ga68DOTATOC: '13-sstr-pet-ct.md',
  NaFPET: '14-naf-pet-ct.md',
  Bone: '20-bone-scintigraphy.md',
  MPI_Tc99m: '30-tc99m-mpi-spect.md',
  CardiacPET: '31-pet-myocardial-perfusion.md',
  CardiacAmyloid: '32-cardiac-amyloidosis-pyp.md',
  Thyroid: '40-thyroid-uptake-and-scintigraphy.md',
  Parathyroid: '41-parathyroid-scintigraphy.md',
  MIBG: '42-mibg-scintigraphy.md',
  Salivary: '43-salivary-gland-scintigraphy.md',
  DTPA: '50-renal-dynamic-scintigraphy-mag3-dtpa.md',
  MAG3: '51-diuretic-renography.md',
  DMSA: '52-dmsa-renal-cortical-scintigraphy.md',
  Gastric: '60-gastric-emptying-scintigraphy.md',
  Biliary: '61-hepatobiliary-scintigraphy-hida.md',
  GIBleed: '62-gi-bleeding-scintigraphy.md',
  Liver: '63-liver-spleen-scintigraphy.md',
  Brain: '70-brain-perfusion-spect.md',
  TRODAT: '71-dat-spect-ioflupane.md',
  LungVQ: '72-vq-scintigraphy.md',
  WBCScan: '73-leukocyte-infection-scintigraphy.md'
};

const OVERVIEW_SPECS = {
  AmyloidPET: {
    file: '02-pet-protocols.md',
    heading: '5. Amyloid PET',
    title: 'Amyloid PET',
    note: '本站目前使用 PET 總覽章節整理；若未來另建單卷，再替換成專檔版。',
    fallbackQcGroup: 'pet'
  },
  MPI_Tl201: {
    file: '03-cardiac-protocols.md',
    heading: '2. Tl-201 MPI',
    title: 'Tl-201 MPI',
    note: '本站目前使用心臟核醫總覽章節整理；若未來另建單卷，再替換成專檔版。',
    fallbackQcGroup: 'cardiac'
  },
  Salivary2: {
    alias: 'Salivary',
    note: '此頁沿用唾液腺掃描同一份技術摘要。'
  },
  Lung: {
    file: '07-neuro-pulmonary-infection-protocols.md',
    heading: '4. V/Q 或 pulmonary scintigraphy',
    title: 'Pulmonary perfusion scintigraphy',
    note: '此頁以肺灌流 / VQ 總覽章節整理，重點放在灌流與配準品質。',
    fallbackQcGroup: 'neuroPulmInfection'
  },
  Meckel: {
    file: '06-gi-hepatobiliary-protocols.md',
    heading: '4. Gastrointestinal bleeding scintigraphy',
    title: "Meckel's diverticulum scan",
    note: 'Meckel 以 GI 類腹部動態收像原則為基礎，Tc-99m pertechnetate 注射後 1 frame/min × 30–60 min，前處理（禁食、H2 blocker）為敏感度關鍵。',
    fallbackQcGroup: 'gi'
  }
};

const GENERIC_FALLBACKS = {
  MUGA: {
    title: 'MUGA',
    modalityLabel: '平面 / gated 心臟核醫',
    note: '本條目提供共通 gated 心臟核醫收像、後處理與 QC 原則，用於心室功能評估與 EF 追蹤。',
    acquisition: [
      'ECG gating 必須穩定，先確認心律與 R-wave 偵測品質。',
      '多角度 planar 收像前，先讓左心室與左心房分離良好。',
      '收像時間與 counts 目標要固定，方便前後 EF 追蹤可比。'
    ],
    processing: [
      'ROI 畫法、background ROI 與 edge detection 規則要固定。',
      '同一病人追蹤時，gating 設定與計算軟體版本不要任意切換。',
      '若節律不整明顯，EF 數值要和原始 gated sequence 一起判讀。'
    ],
    qcGroup: 'cardiac',
    pitfallsGroup: 'cardiac',
    localFixedFields: [
      'RBC 標記方法與 labeling QC',
      'gating frame 數與 arrhythmia 接受規則',
      'LAO / best septal separation 幾何條件',
      'EF 計算軟體與版本'
    ],
    source: '以心臟核醫總覽與共通技術模板整理。'
  },
  Venography: {
    title: 'Radionuclide venography',
    modalityLabel: '動態平面血流 / 靜脈檢查',
    note: '本條目提供動態平面血流序列的共通收像與判讀原則，用於放射性核種靜脈攝影。',
    acquisition: [
      '注射一定要順利且對側比較條件一致，extravasation 會直接破壞判讀。',
      'dynamic frame timing 要固定，保留完整 early flow sequence。',
      '視野需涵蓋臨床問題區段，避免只留下局部靜態影像。'
    ],
    processing: [
      '先看 raw dynamic cine，再談局部滯留或側支路徑。',
      '若有左右側比較，ROI 與顯示尺度要一致。',
      '靜態補拍只能補位置，不能取代早期流動資訊。'
    ],
    qcGroup: 'generic',
    pitfallsGroup: 'generic',
    localFixedFields: [
      '注射側與注射品質記錄',
      'dynamic frame timing',
      '視野起訖範圍',
      '是否加做延遲或局部補拍'
    ],
    source: '以共通 acquisition checklist 與動態平面成像模板整理。'
  },
  Lymphedema: {
    title: 'Lymphedema / lymphoscintigraphy',
    modalityLabel: '淋巴動態 / 多時間點平面檢查',
    note: '淋巴水腫攝影的核心在比較早期上行、延遲節點到達與 dermal backflow；若注射層次與刺激條件不固定，前後檢查很難比較。',
    acquisition: [
      '遠端指(趾)間皮內或淺皮下注射最常見，注射層次、左右劑量與活動條件需固定。',
      '先做早期動態或早期靜態，再於 1–3 小時補延遲影像；必要時加做到更晚時點以區分單純延遲與真正阻塞。',
      '雙側比較時，姿勢、視野、顯示尺度與是否安排步行/按摩等刺激條件都應一致。'
    ],
    processing: [
      '保留早期路徑與延遲節點影像，不要只留最後一張延遲相。',
      '描述時要把淋巴管上行、節點顯影時間、dermal backflow、部分阻塞與完全阻塞分開寫。',
      '若使用 transit time 或半定量指標，ROI、時間點與刺激條件必須完全一致。'
    ],
    qcGroup: 'generic',
    pitfallsGroup: 'generic',
    localFixedFields: [
      '注射部位與注射層次',
      '活動 / 按摩 / 步行規則',
      '早期與延遲固定時間點',
      '雙側顯示尺度與判讀用語'
    ],
    source: '整理自 ISL 2023 consensus、SNMMI Appropriate Use Criteria 2023、下肢淋巴水腫 lymphoscintigraphy 研究與鄭醫師教學網站分級圖例。'
  },
  SLN: {
    title: 'Sentinel lymph node mapping',
    modalityLabel: '淋巴定位 / 術前標記',
    note: '前哨淋巴結造影的關鍵不是單看熱點，而是找出最早引流的第一站節點並把它準確交給外科；注射法與手術時序必須綁在一起。',
    acquisition: [
      '依癌種選擇 peritumoral、subareolar、intradermal 或 scar-adjacent 注射法，並讓活度與手術時間匹配。',
      '保留早期動態與靜態定位，因為最早出現的節點才最符合 sentinel node 定義。',
      '解剖複雜、深層或多站引流時，應及早考慮多角度或 SPECT/CT，避免注射點 shine-through。'
    ],
    processing: [
      '先區分第一站與第二站節點，再進行皮膚標記與位置描述。',
      '若節點靠近注射點或位置深層，需調整窗位或加做斜位 / SPECT/CT。',
      '手術溝通稿應包含節點數、最早顯影節點、異位引流與是否疑似第二站節點。'
    ],
    qcGroup: 'generic',
    pitfallsGroup: 'generic',
    localFixedFields: [
      '癌種對應的注射方式與注射點位',
      '動態與靜態固定時間點',
      '皮膚標記與術前溝通流程',
      'SPECT/CT 加做條件'
    ],
    source: '整理自 EANM/SNMMI breast cancer guideline、EANM melanoma guideline、SNMMI Appropriate Use Criteria 2023 與 sentinel node radiology review。'
  },
  LiverHemangioma: {
    title: 'Liver hemangioma scintigraphy',
    modalityLabel: 'RBC 平面 / SPECT 多時間點檢查',
    note: '本條目提供血池型肝臟檢查的共通收像、延遲比對與 SPECT/CT 定位原則，用於肝血管瘤 RBC 掃描。',
    acquisition: [
      '標記紅血球流程與 labeling QC 要穩定。',
      '早期血流、blood pool 與延遲時間點都要完整保留。',
      '必要時加局部 SPECT/CT 釐清肝內位置與背景器官重疊。'
    ],
    processing: [
      '先看早期血流，再看延遲逐漸填入的型態。',
      '顯示尺度要讓病灶與肝背景可比較，避免單看最亮靜態圖。',
      '若與其他肝臟病灶鑑別，需結合先前 CT / MRI 解剖位置。'
    ],
    qcGroup: 'gi',
    pitfallsGroup: 'generic',
    localFixedFields: [
      'RBC 標記方法',
      '多時間點時序',
      '是否加做 SPECT/CT',
      '延遲相最晚時間點'
    ],
    source: '以 GI / 肝膽共通影像原則與多時間點 blood-pool 邏輯整理。'
  },
  Scrotal: {
    title: 'Scrotal scintigraphy',
    modalityLabel: '急症血流 / 動態平面檢查',
    note: '本條目提供急症血流檢查的共通收像與判讀核對原則，用於急性陰囊疼痛鑑別掃描。',
    acquisition: [
      'early flow sequence 必須完整，不能只留延遲靜態圖。',
      '左右側顯示尺度、ROI 與擺位要一致，方便比較血流差異。',
      '必要時補延遲相，釐清中心冷缺損與周邊充血型態。'
    ],
    processing: [
      '先看動態灌流，再看 blood-pool 與延遲變化。',
      '左右對照顯示要固定，避免因視窗差異造成假性不對稱。',
      '若急診現場已高度懷疑扭轉，影像時序與臨床溝通比花俏後處理更重要。'
    ],
    qcGroup: 'generic',
    pitfallsGroup: 'generic',
    localFixedFields: [
      'dynamic frame timing',
      '左右對照顯示尺度',
      '是否補延遲相',
      '急診時序與回報流程'
    ],
    source: '以共通 acquisition checklist 與急症血流檢查邏輯整理。'
  },
  Cisternography: {
    title: 'Radionuclide cisternography',
    modalityLabel: '多時間點 CSF 流動檢查',
    note: '本條目提供多時間點 CSF 流動檢查的共通收像與判讀原則，用於腦脊髓液池掃描。',
    acquisition: [
      '腰椎穿刺、注入時間與體位變化都要完整記錄。',
      '2 至 4 小時、24 小時、必要時 48 小時時間點不可任意省略。',
      '頭顱與脊柱視野需覆蓋臨床問題路徑，避免只留單區影像。'
    ],
    processing: [
      '閱讀重點是流動路徑與停留位置，不是單看某一張亮點。',
      '多時間點顯示順序要固定，方便比較上行、逆流或外漏。',
      '若用於 leak 評估，延遲鼻耳區補拍與對位說明要完整。'
    ],
    qcGroup: 'generic',
    pitfallsGroup: 'generic',
    localFixedFields: [
      '注入時間與體位',
      '固定追蹤時間點',
      '補拍區域與條件',
      '與重症 / 神經團隊回報節點'
    ],
    source: '以多時間點功能檢查原則整理。'
  },
  Ga67: {
    title: 'Ga-67 scintigraphy',
    modalityLabel: '延遲多時間點全身 / 局部檢查',
    note: '本條目提供延遲全身掃描與感染/發炎定位檢查的共通收像與 QC 原則，用於 Ga-67 發炎掃描。',
    acquisition: [
      '固定延遲時間點，必要時 48 至 72 小時追蹤。',
      '全身與局部補拍都要記錄，避免只剩一組延遲靜態圖。',
      '腸道準備與病人配合度會明顯影響腹部判讀。'
    ],
    processing: [
      '先看全身分布，再回到局部定位與對位影像。',
      '若有多時間點，應比較訊號是否聚焦、變強或隨時間移動。',
      '與既有 CT、PET 或 WBC scan 的角色要分清楚，避免過度解讀。'
    ],
    qcGroup: 'neuroPulmInfection',
    pitfallsGroup: 'neuroPulmInfection',
    localFixedFields: [
      '延遲時間點',
      '腸道準備規則',
      '全身與局部補拍條件',
      '對照影像需求'
    ],
    source: '以神經 / 肺 / 感染共通陷阱與延遲全身成像邏輯整理。'
  },
  NP59: {
    title: 'NP-59 adrenal cortical imaging',
    modalityLabel: '內分泌小器官 / 多時間點檢查',
    note: 'NP-59 是腎上腺皮質功能定位檢查，重點在皮質自主分泌與左右側化，不是單看腫塊大小。',
    acquisition: [
      '檢前先核對臨床問題、生化資料、CT/MRI 與可能干擾藥物，確認真的是要回答皮質功能問題。',
      'I-131 藥物需完成甲狀腺阻斷；原發性醛固酮增多症等情境常再依院內流程加入 dexamethasone suppression。',
      '常見為 Day 3、Day 5、Day 7 多時間點 planar，必要時加做 SPECT/CT；多時點幾何與縮放要固定。'
    ],
    processing: [
      '先看整體背景是否可判讀，再比較雙側腎上腺是否有單側優勢、雙側增強或病灶側缺攝取。',
      'SPECT/CT 的價值在把功能熱點對回解剖位置，不宜只憑平面影像下手術側化結論。',
      '報告結論以支持哪一種功能模式為主，並註明判讀信心與技術限制。'
    ],
    qcGroup: 'endocrine',
    pitfallsGroup: 'endocrine',
    localFixedFields: [
      '甲狀腺阻斷與 dexamethasone suppression 流程',
      '停藥 / 換藥規則',
      'Day 3 / 5 / 7 與 SPECT/CT 加做條件',
      '對照 CT / MRI 與手術前分型需求'
    ],
    source: '整理自 Endocrine Society 2025 PA 指南、J Nucl Med 2009 台灣 NP-59 SPECT/CT 研究與近年 adrenal imaging 文獻。'
  },
  Salivary: {
    title: 'Salivary gland scintigraphy',
    modalityLabel: '頭頸動態平面 / 刺激後功能檢查',
    note: '唾液腺掃描的重點在雙側大唾液腺的攝取、刺激後排出與再累積節奏；若刺激物與時間點不固定，曲線就失去比較價值。',
    acquisition: [
      '常見檢前至少禁食 2 小時並維持基本補水，避免口腔與胃部背景差異過大。',
      'Tc-99m pertechnetate 注射後以 anterior 頭頸連續動態收像，頭頸固定與左右視野完整比「補拍更多張」更重要。',
      '刺激物種類、容量與給予時間點要固定；許多 protocol 以 20 分鐘給檸檬汁，再持續追蹤排出與再累積。'
    ],
    processing: [
      '先看雙側腮腺與頜下腺是否對稱累積，再看刺激後是否出現明顯下降與後續再累積。',
      '視覺型態與 time-activity curve 要一起讀，不能只看單張最亮或最暗的影像。',
      '若有定量，ROI 畫法、background 位置與指標定義需固定，否則不同病人與不同時間點無法比較。'
    ],
    qcGroup: 'generic',
    pitfallsGroup: 'generic',
    localFixedFields: [
      '禁食與補水規則',
      '刺激物種類與刺激時間點',
      'dynamic frame 長度與總收像時間',
      'ROI 與排出分率計算方法'
    ],
    source: '整理自 2016 ACR/EULAR Sjogren 分類準則後續影像評論、2024 健康族群唾液腺動態常模研究與近年 salivary scintigraphy 文獻。'
  },
  I131WBS: {
    title: 'I-131 whole-body survey',
    modalityLabel: '高能量全身 / 延遲檢查',
    note: 'I-131 WBS 的判讀品質大量取決於 TSH stimulation、低碘飲食與污染控制；whole-body planar 只是起點，定位常需靠 spot view 或 SPECT/CT。',
    acquisition: [
      '檢前先核對是診斷性還是治療後 WBS，並記錄 TSH stimulation 方式、低碘飲食與近期含碘暴露。',
      '必須使用適合 I-131 的高能量 collimator 與對應 energy window；whole-body 掃描速度、局部 spot view 與延遲相條件要固定。',
      '掃描前排尿、更衣並檢查口鼻與皮膚污染；必要時針對可疑區域重拍，避免把唾液或尿液污染當成病灶。'
    ],
    processing: [
      '先建立全身生理性分布地圖，再回到局部高攝取區辨認是甲狀腺床、淋巴結、遠端轉移還是表面污染。',
      '對平面影像不確定的焦點，應優先考慮 spot view 或 SPECT/CT 對位，而不是只靠窗位調整硬判讀。',
      '若為追蹤比較，掃描時點、儀器設定與是否加做 tomographic 補定位需盡量一致。'
    ],
    qcGroup: 'endocrine',
    pitfallsGroup: 'endocrine',
    localFixedFields: [
      'TSH stimulation 與低碘飲食流程',
      'HE collimator 與 energy window',
      '全身掃描速度',
      '污染控制流程',
      'spot / SPECT/CT 加做條件'
    ],
    source: '整理自 ATA 2015 differentiated thyroid cancer guideline、診斷性與治療後 I-131 WBS/SPECT-CT 相關綜述與近年實務更新。'
  }
};

const CATEGORY_FALLBACKS = {
  pet: {
    qc: parseBullets(readMarkdown('02-pet-protocols.md'), 'PET 共通 QC 與 artifact 重點'),
    pitfalls: parseBullets(readMarkdown('02-pet-protocols.md'), 'PET 共通 QC 與 artifact 重點')
  },
  cardiac: {
    qc: parseBullets(readMarkdown('03-cardiac-protocols.md'), '心臟核醫 QC 重點'),
    pitfalls: [
      ...extractSectionList(readMarkdown('03-cardiac-protocols.md'), '1. Tc-99m MPI SPECT', ['常見陷阱']),
      '壓力流程條件未固定，會讓前後檢查不可比。',
      '只看 AC 或只看 gated function，沒回到 raw data。'
    ]
  },
  endocrine: {
    qc: extractChecklistFromCommonBaseline(),
    pitfalls: [
      ...extractSectionList(readMarkdown('04-endocrine-protocols.md'), '1. Thyroid uptake 與 thyroid scintigraphy', ['常見陷阱']),
      ...parseBullets(readMarkdown('01-glossary-and-core-parameters.md'), '常見技術陷阱').slice(0, 3)
    ]
  },
  renal: {
    qc: extractChecklistFromCommonBaseline(),
    pitfalls: [
      '注射不是 bolus 或有 extravasation，會直接扭曲 renogram。',
      'hydration 不足、未排尿或 bladder outlet problem 會讓排空假性變差。',
      '只看 T1/2、Tmax，不回看 raw cine 與 ROI 放置。'
    ]
  },
  gi: {
    qc: extractChecklistFromCommonBaseline(),
    pitfalls: parseBullets(readMarkdown('06-gi-hepatobiliary-protocols.md'), 'GI / 肝膽影像共通陷阱')
  },
  neuroPulmInfection: {
    qc: extractChecklistFromCommonBaseline(),
    pitfalls: parseBullets(readMarkdown('07-neuro-pulmonary-infection-protocols.md'), '神經 / 肺 / 感染共通陷阱')
  },
  generic: {
    qc: extractChecklistFromCommonBaseline(),
    pitfalls: parseBullets(readMarkdown('01-glossary-and-core-parameters.md'), '常見技術陷阱')
  }
};

const DEFAULT_PET_LOCAL_FIXED_FIELDS = [
  '示蹤劑與實際活度',
  '禁食 / 血糖 / 注射前後活動等病人準備',
  '注射時間、開始收像時間與 uptake time',
  '掃描範圍、體位與每 bed / 每次收像時間',
  'CT 模式（AC-only、診斷 CT、是否使用對比劑）',
  '固定的 reconstruction preset 與定量指標（SUVbw 或 SUL）',
  '是否加做診斷 CT、局部延長 bed、排尿後或延遲補拍'
];

const DEFAULT_LOCAL_FIXED_FIELDS = [
  '示蹤劑與實際活度',
  '注射時間、開始收像時間與時間差',
  '固定的 reconstruction preset 名稱與版本',
  '視野 / 體位 / 幾何條件',
  '是否加做 SPECT/CT、診斷 CT 或延遲補拍'
];

const DISPLAY_NAMES = {
  PET: 'FDG PET/CT',
  BrainPET: 'FDG Brain PET',
  POSLUMA: 'PSMA PET/CT',
  Ga68DOTATOC: 'SSTR PET/CT',
  AmyloidPET: 'Amyloid PET',
  NaFPET: 'NaF PET/CT',
  Bone: 'Bone scintigraphy',
  MPI_Tc99m: 'Tc-99m MPI SPECT',
  MPI_Tl201: 'Tl-201 MPI',
  CardiacAmyloid: 'PYP / DPD / HMDP cardiac amyloidosis imaging',
  CardiacPET: 'PET myocardial perfusion',
  MUGA: 'MUGA',
  Venography: 'Radionuclide venography',
  Lymphedema: 'Lymphedema / lymphoscintigraphy',
  SLN: 'Sentinel lymph node mapping',
  Thyroid: 'Thyroid uptake and scintigraphy',
  Parathyroid: 'Parathyroid scintigraphy',
  Salivary: 'Salivary gland scintigraphy',
  Salivary2: 'Salivary gland scintigraphy',
  MIBG: 'MIBG scintigraphy',
  NP59: 'NP-59 adrenal cortical imaging',
  I131WBS: 'I-131 whole-body survey',
  Gastric: 'Gastric emptying scintigraphy',
  GIBleed: 'Gastrointestinal bleeding scintigraphy',
  Meckel: "Meckel's diverticulum scan",
  Liver: 'Liver-spleen scintigraphy',
  LiverHemangioma: 'Liver hemangioma scintigraphy',
  Biliary: 'Hepatobiliary scintigraphy / HIDA',
  DMSA: 'DMSA renal cortical scintigraphy',
  DTPA: 'Adult renal scintigraphy / renography',
  MAG3: 'Diuretic renography',
  Cystography: 'Radionuclide cystography',
  Scrotal: 'Scrotal scintigraphy',
  Brain: 'Brain perfusion SPECT',
  TRODAT: 'DaT SPECT / dopaminergic imaging',
  Cisternography: 'Radionuclide cisternography',
  Lung: 'Pulmonary perfusion scintigraphy',
  LungVQ: 'V/Q scintigraphy',
  Ga67: 'Ga-67 scintigraphy',
  WBCScan: 'Leukocyte / infection scintigraphy'
};

buildProtocolData();

function buildProtocolData() {
  const protocolData = {};

  for (const [key, fileName] of Object.entries(DIRECT_FILE_MAP)) {
    protocolData[key] = buildDirectFileProtocol(fileName);
  }

  for (const [key, spec] of Object.entries(OVERVIEW_SPECS)) {
    if (spec.alias) {
      protocolData[key] = {
        ...protocolData[spec.alias],
        note: spec.note || protocolData[spec.alias]?.note || ''
      };
      continue;
    }

    protocolData[key] = buildOverviewProtocol(spec);
  }

  protocolData.Cystography = buildOverviewProtocol({
    file: '05-renal-urology-protocols.md',
    heading: '5. Radionuclide cystography',
    title: 'Radionuclide cystography',
    note: '本站目前使用腎泌尿總覽章節整理；若未來另建兒科專卷，再替換成專檔版。',
    fallbackQcGroup: 'renal'
  });

  for (const [key, config] of Object.entries(GENERIC_FALLBACKS)) {
    protocolData[key] = buildGenericFallback(key, config);
  }

  const output = [
    '// Auto-generated by scripts/build-protocol-data.mjs',
    '// Do not edit this file directly.',
    '',
    `const PROTOCOL_DATA = ${JSON.stringify(protocolData, null, 2)};`,
    '',
    'window.NMINFO_PROTOCOL_DATA = PROTOCOL_DATA;'
  ].join('\n');

  writeFileSync(outputPath, `${output}\n`, 'utf8');
}

function buildDirectFileProtocol(fileName) {
  const markdown = readMarkdown(fileName);
  const title = extractFirstHeading(markdown);
  const sourceItems = findFirstAvailableList(markdown, ['最新已核對的主要來源', '最新主要來源', '最新優先來源', '主要來源', '來源']);
  const localFixed = parseBullets(markdown, '科內落地時最該固定的欄位');
  const acquisition = parseTable(markdown, 'Acquisition parameter table');
  const processing = parseTable(markdown, 'Image processing parameter table');

  return {
    title,
    source: formatSourceList(sourceItems),
    acquisition,
    processing,
    qc: parseBullets(markdown, 'QC checklist'),
    pitfalls: parseBullets(markdown, 'Artifact / pitfall checklist'),
    localFixedFields: localFixed.length > 0 ? localFixed : getDefaultLocalFixedFields({ title, acquisition, processing })
  };
}

function buildOverviewProtocol(spec) {
  const markdown = readMarkdown(spec.file);
  const section = extractNamedBlock(markdown, spec.heading);
  const sourceItems = findFirstAvailableList(section, ['最新優先來源', '主要來源', '來源']);
  const acquisition = extractSectionRowsOrList(section, ['技術 baseline']);
  const processing = extractSectionRowsOrList(section, ['處理重點', '影像處理重點', '後處理重點', '技術要點', '技術提醒', '技術重點']);
  const localFixed = findFirstAvailableList(section, ['建議記錄的技術欄位', '科內落地時最該固定的欄位']);
  const pitfalls = findFirstAvailableList(section, ['常見踩雷點', '常見陷阱']);
  const categoryFallback = CATEGORY_FALLBACKS[spec.fallbackQcGroup || 'generic'];

  return {
    title: spec.title || cleanupTitle(spec.heading),
    source: formatSourceList(sourceItems),
    acquisition: acquisition.length > 0 ? acquisition : extractPlanarOrPetFallback(spec.heading),
    processing: processing.length > 0 ? processing : ['後處理請先回看 raw data，再確認重建 preset 與對位品質。'],
    qc: categoryFallback.qc,
    pitfalls: pitfalls.length > 0 ? pitfalls : categoryFallback.pitfalls,
    localFixedFields: localFixed.length > 0 ? localFixed : getDefaultLocalFixedFields({ title: spec.title || cleanupTitle(spec.heading), acquisition, processing }),
    note: spec.note || ''
  };
}

function buildGenericFallback(key, config) {
  const qcFallback = CATEGORY_FALLBACKS[config.qcGroup || 'generic'];
  const pitfallFallback = CATEGORY_FALLBACKS[config.pitfallsGroup || config.qcGroup || 'generic'];
  const acquisition = config.acquisition;
  const processing = config.processing;
  const title = config.title || DISPLAY_NAMES[key] || key;

  return {
    title,
    source: config.source,
    acquisition,
    processing,
    qc: qcFallback.qc,
    pitfalls: pitfallFallback.pitfalls,
    localFixedFields: config.localFixedFields || getDefaultLocalFixedFields({ title, acquisition, processing }),
    note: config.note || ''
  };
}

function extractPlanarOrPetFallback(heading) {
  if (/PET/i.test(heading)) {
    return parseBullets(readMarkdown('01-glossary-and-core-parameters.md'), 'PET/CT');
  }

  if (/brain|DaT|MPI|Parathyroid/i.test(heading)) {
    return parseBullets(readMarkdown('01-glossary-and-core-parameters.md'), 'SPECT');
  }

  return parseBullets(readMarkdown('01-glossary-and-core-parameters.md'), 'Planar');
}

function extractChecklistFromCommonBaseline() {
  return [
    ...parseBullets(readMarkdown('01-glossary-and-core-parameters.md'), '掃描前'),
    ...parseBullets(readMarkdown('01-glossary-and-core-parameters.md'), '掃描時'),
    ...parseBullets(readMarkdown('01-glossary-and-core-parameters.md'), '掃描後')
  ];
}

function readMarkdown(fileName) {
  return readFileSync(path.join(protocolsDir, fileName), 'utf8').replace(/\r\n/g, '\n');
}

function extractFirstHeading(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? cleanupText(match[1]) : '';
}

function extractNamedBlock(markdown, headingText) {
  const lines = markdown.split('\n');
  const index = lines.findIndex((line) => line.trim().match(/^#{1,6}\s+/) && cleanupText(line.replace(/^#{1,6}\s+/, '')) === headingText);
  if (index === -1) return '';

  const currentLevel = getHeadingLevel(lines[index]);
  const collected = [];

  for (let i = index + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^#{1,6}\s+/.test(line) && getHeadingLevel(line) <= currentLevel) {
      break;
    }
    collected.push(line);
  }

  return collected.join('\n').trim();
}

function getHeadingLevel(line) {
  const match = line.match(/^(#{1,6})\s+/);
  return match ? match[1].length : 7;
}

function parseTable(markdown, headingText) {
  const block = extractNamedBlock(markdown, headingText);
  if (!block) return [];

  const tableLines = block
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('|'));

  if (tableLines.length < 3) return [];

  return tableLines
    .slice(2)
    .map((line) => line.split('|').slice(1, -1).map((cell) => cleanupText(cell)))
    .filter((cells) => cells.length >= 2 && cells[0] && cells[1])
    .map((cells) => [cells[0], cells[1]]);
}

function parseBullets(markdown, headingText) {
  const block = extractNamedBlock(markdown, headingText);
  if (!block) return [];
  return block
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => cleanupText(line.replace(/^- /, '')))
    .filter(Boolean);
}

function extractSectionList(markdown, sectionHeading, subsectionCandidates) {
  const section = extractNamedBlock(markdown, sectionHeading);
  return findFirstAvailableList(section, subsectionCandidates);
}

function extractSectionRowsOrList(markdown, headingCandidates) {
  for (const heading of headingCandidates) {
    const rows = parseTable(markdown, heading);
    if (rows.length > 0) return rows;

    const items = parseBullets(markdown, heading);
    if (items.length > 0) return items;

    const proseItems = parseParagraphLines(markdown, heading);
    if (proseItems.length > 0) return proseItems;
  }
  return [];
}

function parseParagraphLines(markdown, headingText) {
  const block = extractNamedBlock(markdown, headingText);
  if (!block) return [];

  return block
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#') && !line.startsWith('|') && !line.startsWith('- '))
    .map((line) => cleanupText(line))
    .filter(Boolean);
}

function findFirstAvailableList(markdown, headingCandidates) {
  for (const heading of headingCandidates) {
    const items = parseBullets(markdown, heading);
    if (items.length > 0) return items;

    const proseItems = parseParagraphLines(markdown, heading);
    if (proseItems.length > 0) return proseItems;

    const labelledItems = parseLabelledList(markdown, heading);
    if (labelledItems.length > 0) return labelledItems;
  }
  return [];
}

function parseLabelledList(markdown, labelText) {
  const lines = markdown.split('\n');

  for (let i = 0; i < lines.length; i += 1) {
    const normalizedLine = cleanupText(lines[i].replace(/[：:]\s*$/, ''));
    if (normalizedLine !== labelText) continue;

    const items = [];
    let currentItem = '';

    for (let j = i + 1; j < lines.length; j += 1) {
      const line = lines[j];
      const trimmed = line.trim();

      if (!trimmed) {
        if (currentItem) {
          items.push(cleanupText(currentItem));
          currentItem = '';
        }
        continue;
      }

      if (/^#{1,6}\s+/.test(trimmed)) {
        if (currentItem) items.push(cleanupText(currentItem));
        break;
      }

      if (trimmed.startsWith('- ')) {
        if (currentItem) items.push(cleanupText(currentItem));
        currentItem = trimmed.replace(/^- /, '');
        continue;
      }

      if (currentItem) {
        currentItem = `${currentItem} ${trimmed}`;
      } else {
        break;
      }
    }

    if (currentItem) items.push(cleanupText(currentItem));
    return items.filter(Boolean);
  }

  return [];
}

function getDefaultLocalFixedFields({ title = '', acquisition = [], processing = [] }) {
  const modalityText = [
    title,
    ...normalizeFieldText(acquisition),
    ...normalizeFieldText(processing)
  ].join(' ');

  return /\bPET\b/i.test(modalityText) ? DEFAULT_PET_LOCAL_FIXED_FIELDS : DEFAULT_LOCAL_FIXED_FIELDS;
}

function normalizeFieldText(items) {
  if (!Array.isArray(items)) return [];

  return items.flatMap((item) => {
    if (Array.isArray(item)) return item;
    return typeof item === 'string' ? [item] : [];
  });
}

function cleanupTitle(value) {
  return cleanupText(value.replace(/^\d+\.\s*/, ''));
}

function cleanupText(value) {
  return value
    .replace(/`/g, '')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/<([^>]+)>/g, '$1')
    .replace(/\s+/g, ' ')
    .replace(/\s*\/\s*/g, ' / ')
    .replace(/^\s+|\s+$/g, '');
}

function formatSourceList(items) {
  return items
    .map((item) => item.replace(/https?\s*:\s*\/\s*\/.*$/gi, '').replace(/\s+/g, ' ').trim().replace(/[;；,，:\-–—\s]+$/g, ''))
    .filter(Boolean)
    .join('；');
}
