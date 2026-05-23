const SOURCE_LIBRARY = {
    radiologyPet: {
        title: "RadiologyInfo.org — PET and PET/CT",
        organization: "ACR / RSNA",
        summary: "PET / PET-CT 的病人導向說明，涵蓋用途、檢前準備、懷孕與哺乳提醒。",
        url: "https://www.radiologyinfo.org/en/info/pet"
    },
    boneScan: {
        title: "RadiologyInfo.org — Bone Scan",
        organization: "ACR / RSNA",
        summary: "骨骼掃描的用途、等待時間、補充水分與哺乳注意事項。",
        url: "https://www.radiologyinfo.org/en/info/bone-scan"
    },
    thyroidUptake: {
        title: "RadiologyInfo.org — Thyroid Scan and Uptake",
        organization: "ACR / RSNA",
        summary: "甲狀腺攝取率與掃描的用途，以及含碘藥物與顯影劑干擾重點。",
        url: "https://www.radiologyinfo.org/en/info/thyroiduptake"
    },
    radioiodine: {
        title: "RadiologyInfo.org — Radioactive Iodine (I-131) Therapy",
        organization: "ACR / RSNA",
        summary: "I-131 放射碘治療前後的標準病人說明，包含接觸距離與返家安全。",
        url: "https://www.radiologyinfo.org/en/info/radioiodine"
    },
    radiationSafety: {
        title: "RadiologyInfo.org — Radiation Safety",
        organization: "ACR / RSNA",
        summary: "影像檢查輻射風險、孕期與哺乳溝通的整體說明。",
        url: "https://www.radiologyinfo.org/en/info/safety-radiation"
    },
    radiologyDoseChart: {
        title: "RadiologyInfo.org — Radiation Dose in X-Ray and CT Exams",
        organization: "ACR / RSNA / ASRT",
        summary: "2025 更新的成人有效劑量比較表，列出頭部 CT、胸部 CT、LDCT、心臟 CT、冠狀動脈 CTA 與全身 PET/CT 等常見檢查。",
        url: "https://www.radiologyinfo.org/en/info/safety-xray"
    },
    radiologyGeneralNuclear: {
        title: "RadiologyInfo.org — General Nuclear Medicine",
        organization: "ACR / RSNA / ASRT",
        summary: "核醫檢查的病人導向說明，整理示蹤劑會由尿液或糞便排出，以及喝水的重要性。",
        url: "https://www.radiologyinfo.org/en/info/gennuclear"
    },
    eanmFdgGuideline: {
        title: "EANM procedure guidelines for tumour imaging: version 2.0",
        organization: "European Association of Nuclear Medicine",
        summary: "FDG PET/CT 的歐洲程序指引，包含空腹、補水、排尿與哺乳相關建議。",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4315529/"
    },
    eanmMpiGuideline: {
        title: "EANM procedural guidelines for radionuclide myocardial perfusion imaging with SPECT and SPECT/CT",
        organization: "European Association of Nuclear Medicine",
        summary: "心肌灌注核醫的歐洲指引，列出 99mTc-sestamibi、99mTc-tetrofosmin 與 Tl-201 的有效劑量係數。",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4589547/"
    },
    snmmiDoseTool: {
        title: "SNMMI — Nuclear Medicine Radiation Dose Tool",
        organization: "Society of Nuclear Medicine and Molecular Imaging",
        summary: "依不同藥物、常見注射活度與有效劑量係數估算成人有效劑量，適合做藥物間比較。",
        url: "https://snmmi.org/Web/Clinical-Practice/Dose-Optimization/Nuclear-Medicine-Radiation-Dose-Tool.aspx"
    },
    dailymedPylarify: {
        title: "DailyMed — PYLARIFY (piflufolastat F 18)",
        organization: "U.S. National Library of Medicine / FDA labeling",
        summary: "F-18 PSMA PET 官方標示，列出建議活度、4.3 mSv 成人有效劑量估計，以及補水與頻繁排尿建議。",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a00e5cbc-4fd5-4280-82ec-cd3498df4553"
    },
    dailymedLocametz: {
        title: "DailyMed — LOCAMETZ (gallium Ga 68 gozetotide)",
        organization: "U.S. National Library of Medicine / FDA labeling",
        summary: "Ga-68 PSMA PET 官方標示，列出建議活度、4.4 mSv 成人有效劑量估計，以及檢前後補水與排尿建議。",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1ea62b65-8138-4a88-8a33-4060ececa42f"
    },
    dailymedNetspot: {
        title: "DailyMed — NETSPOT (gallium Ga 68 dotatate)",
        organization: "U.S. National Library of Medicine / FDA labeling",
        summary: "Ga-68 DOTATATE PET 官方標示，列出建議活度、3.15 mSv 成人有效劑量估計，以及補水與頻繁排尿建議。",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b2b3be70-17d8-4093-896c-f1c54a2cf242"
    },
    dailymedPluvicto: {
        title: "DailyMed — PLUVICTO (lutetium Lu 177 vipivotide tetraxetan)",
        organization: "U.S. National Library of Medicine / FDA labeling",
        summary: "Lu-177 PSMA 治療官方標示，強調增加口服水分與頻繁排尿，以降低膀胱輻射暴露。",
        url: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a"
    },
    dailymedLutathera: {
        title: "DailyMed — LUTATHERA (lutetium Lu 177 dotatate)",
        organization: "U.S. National Library of Medicine / FDA labeling",
        summary: "Lu-177 DOTATATE 治療官方標示，提醒治療前、當天與隔天都要補水並頻繁排尿，且尿液可偵測到放射性一段時間。",
        url: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55"
    },
    dailymedXofigo: {
        title: "DailyMed — XOFIGO (radium Ra 223 dichloride)",
        organization: "U.S. National Library of Medicine / FDA labeling",
        summary: "Ra-223 治療官方標示與衛教說明，重點在排泄物衛生、廁所清潔與處理汙染物時的防護。",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d1eccf6-2e37-4202-ae9e-72d5c62ebab5"
    },
    clevelandPet: {
        title: "Cleveland Clinic — PET Scan",
        organization: "Cleveland Clinic",
        summary: "補充 PET 的實際流程、等待時間與糖尿病、幽閉焦慮等常見問題。",
        url: "https://my.clevelandclinic.org/health/diagnostics/10123-pet-scan"
    },
    radiopharmaceuticals: {
        title: "Cleveland Clinic — Radiopharmaceuticals",
        organization: "Cleveland Clinic",
        summary: "說明診斷用與治療用放射性藥物的差異，以及核醫治療的基本概念。",
        url: "https://my.clevelandclinic.org/health/articles/radiopharmaceuticals"
    },
    thyroidAssociationRai: {
        title: "American Thyroid Association — Radioactive Iodine",
        organization: "American Thyroid Association",
        summary: "I-123 與 I-131 差異、低碘飲食、哺乳與生育規劃等甲狀腺專科要點。",
        url: "https://www.thyroid.org/radioactive-iodine/"
    },
    taiwanNuclearMedicine: {
        title: "中華民國核醫學學會",
        organization: "中華民國核醫學學會",
        summary: "台灣核醫專業學會官網，可延伸查詢國內治療衛教手冊、學術資源與就醫資訊。",
        url: "https://www.snm.org.tw/"
    },
    taiwanThyroidSupport: {
        title: "台灣甲狀腺醫護衛教暨健康促進協會 — 放射性碘治療怎麼做？",
        organization: "台灣甲狀腺醫護衛教暨健康促進協會",
        summary: "中文整理 I-131 治療前準備、住院隔離、副作用與返家後生活注意事項。",
        url: "https://www.ttahi.org.tw/article_detail/48"
    },
    taiwanRa223Guide: {
        title: "中華民國核醫學學會 — Ra223骨轉移標靶治療衛教手冊",
        organization: "中華民國核醫學學會",
        summary: "台灣版 Ra-223 民眾衛教資料，整理適應症、療程安排、血球追蹤與返家衛教。",
        url: "https://snm.org.tw/xcfile/cont?xsmsid=0O050602815341260326&psid=0Q139587791564374230"
    },
    taiwanLu177Guide: {
        title: "中華民國核醫學學會 — Lu177衛教手冊",
        organization: "中華民國核醫學學會",
        summary: "台灣核醫學會整理的 Lu-177 治療衛教資料，可延伸了解 PSMA 與 PRRT 類治療概念與返家安全。",
        url: "https://www.snm.org.tw/xcfile/cont?xsmsid=0O050602815341260326&psid=0O325361170408252206"
    },
    taiwanNetPrrt: {
        title: "台灣神經內分泌腫瘤病友關懷協會 — 神經內分泌腫瘤與 PRRT 治療",
        organization: "台灣神經內分泌腫瘤病友關懷協會",
        summary: "中文整理神經內分泌腫瘤病友常見疑問、PRRT 定位與病友支持資源。",
        url: "https://tnetpca.com/?p=4469"
    },
    nuscFlightDose: {
        title: "核能安全委員會 — 宇宙射線對飛行造成的劑量",
        organization: "核能安全委員會",
        summary: "提供台灣天然背景輻射、宇宙射線年貢獻，以及台北往返國內外城市的搭機劑量。",
        url: "https://www.nusc.gov.tw/%E4%BE%BF%E6%B0%91%E6%9C%8D%E5%8B%99/%E5%8E%9F%E5%AD%90%E7%9F%A5%E8%AD%98%E5%A0%B1%E7%B5%A6%E4%BD%A0%E7%9F%A5/%E8%AA%8D%E8%AD%98%E8%BC%BB%E5%B0%84/%E5%9F%BA%E6%9C%AC%E8%BC%BB%E5%B0%84%E7%9F%A5%E8%AD%98/%E5%AE%87%E5%AE%99%E5%B0%84%E7%B7%9A%E5%B0%8D%E9%A3%9B%E8%A1%8C%E9%80%A0%E6%88%90%E7%9A%84%E5%8A%91%E9%87%8F--220_271_1085_1086_1180.html"
    },
    nuscMedicalChart: {
        title: "核能安全委員會 — 醫療游離輻射劑量比較圖",
        organization: "核能安全委員會",
        summary: "核安會提供給民眾的醫療劑量比較圖下載頁。",
        url: "https://www.nusc.gov.tw/%E4%BE%BF%E6%B0%91%E5%B0%88%E5%8D%80/%E6%9C%AC%E6%9C%83%E5%87%BA%E7%89%88%E5%93%81/%E3%80%8C%E4%B8%80%E8%88%AC%E6%B8%B8%E9%9B%A2%E8%BC%BB%E5%B0%84%E5%8A%91%E9%87%8F%E6%AF%94%E8%BC%83%E5%9C%96%E3%80%8D%E5%8F%8A%E3%80%8C%E9%86%AB%E7%99%82%E6%B8%B8%E9%9B%A2%E8%BC%BB%E5%B0%84%E5%8A%91%E9%87%8F%E6%AF%94%E8%BC%83%E5%9C%96%E3%80%8D--220_238_861.html"
    },
    nuscMedicalFaq: {
        title: "核能安全委員會 — 醫療",
        organization: "核能安全委員會",
        summary: "說明病人醫療輻射沒有法規劑量上限，而是依正當性、醫療專業判斷與品質保證管理。",
        url: "https://www.nusc.gov.tw/%E4%BE%BF%E6%B0%91%E6%9C%8D%E5%8B%99/%E6%B0%91%E7%9C%BE%E9%97%9C%E5%88%87%E5%95%8F%E7%AD%94%E8%B3%87%E8%A8%8A/%E6%B8%B8%E9%9B%A2%E8%BC%BB%E5%B0%84%E9%98%B2%E8%AD%B7/%E9%86%AB%E7%99%82--220_237_2272_3994.html"
    },
    nuscQaStandard: {
        title: "核能安全委員會主管法規共用系統 — 輻射醫療曝露品質保證標準",
        organization: "核能安全委員會",
        summary: "列出診斷用 CT、核醫用 CT 等設備的醫療曝露品質保證要求與校驗頻次。",
        url: "https://erss.nusc.gov.tw/law/LawContent.aspx?id=FL033174&kw=%E8%BC%BB%E5%B0%84%E9%86%AB%E7%99%82%E6%9B%9D%E9%9C%B2%E5%93%81%E8%B3%AA%E4%BF%9D%E8%AD%89%E6%A8%99%E6%BA%96"
    },
    nuscBioEffect: {
        title: "核能安全委員會文宣 — 輻射生物效應",
        organization: "核能安全委員會",
        summary: "第 7 頁列出天然輻射、七小時飛行、胸部 X 光、腹部 X 光、牙科 X 光與 CT 等常見比較值。",
        url: "https://www.nusc.gov.tw/share/file/convenience/WHRexvBFGiS2CsubnoPwdw__.pdf"
    },
    nuscDoseSurvey: {
        title: "國民醫療輻射劑量調查研究計畫期末報告",
        organization: "行政院原子能委員會輻射偵測中心",
        summary: "111 年度委託研究計畫期末報告，表 76 列出核子醫學檢查的有效劑量加權結果。",
        url: "https://www.nusc.gov.tw/share/file/rmc/ko~VMCSV6kqvL8I-ySANMA__.pdf"
    }
};

const TOPIC_DATA = window.PATIENT_TOPIC_DATA || { groups: [], sections: {} };

const PATIENT_INLINE_GUIDE_IMAGES = {
    PET: {
        src: 'assets/guide/fdg-pet-indications.png',
        alt: 'FDG PET/CT 適應症圖解，說明初始分期、治療反應評估、復發或再分期，以及不明原發灶或全身活躍病灶搜尋。'
    },
    FDGPETCT: {
        src: 'assets/guide/fdg-pet-indications.png',
        alt: 'FDG 正子電腦斷層常見適應症圖解，說明腫瘤分期、治療反應評估、復發追蹤與感染發炎評估。'
    },
    BrainPET: {
        src: 'assets/guide/brain-fdg-pet-indications.png',
        alt: 'Brain FDG PET 適應症圖解，說明失智症鑑別、癲癇術前定位、腦腫瘤治療後評估，以及腦炎或特殊神經代謝疾病評估。'
    },
    POSLUMA: {
        src: 'assets/guide/psma-pet-indications.png',
        alt: 'PSMA PET 適應症圖解，說明初始高風險分期、生化復發、治療規劃，以及標靶治療前的 PSMA 表現評估。'
    },
    PSMAPETCT: {
        src: 'assets/guide/psma-pet-indications.png',
        alt: 'PSMA 正子電腦斷層常見適應症圖解，說明攝護腺癌初始分期、生化復發定位與治療規劃。'
    },
    Ga68DOTATOC: {
        src: 'assets/guide/ga68-dotatoc-indications.png',
        alt: 'Ga-68 DOTATOC PET 適應症圖解，說明神經內分泌腫瘤定位、初始分期、PRRT 前受體評估，以及復發或追蹤。'
    },
    OtherPET: {
        src: 'assets/guide/ga68-dotatoc-indications.png',
        alt: '其他正子造影示意圖，以神經內分泌腫瘤正子造影為代表，說明不同藥物會回答不同臨床問題。'
    },
    AmyloidPET: {
        src: 'assets/guide/amyloid-pet-indications.png',
        alt: 'Amyloid PET 適應症圖解，說明不典型或年輕型認知障礙、失智症鑑別困難、特定 MCI 個案，以及抗 amyloid 治療評估脈絡。'
    },
    NaFPET: {
        src: 'assets/guide/naf-pet-indications.png',
        alt: 'F-18 NaF PET/CT 適應症圖解，說明骨轉移更敏感搜尋、傳統骨掃描不夠清楚、高風險癌症骨病灶評估，以及複雜骨病變定位。'
    },
    CardiacPET: {
        src: 'assets/guide/cardiac-pet-indications.png',
        alt: '心臟正子掃描適應症圖解，說明冠心病灌流評估、心肌存活性、複雜個案的更精準血流量測，以及特定心臟發炎或浸潤問題。'
    },
    Thyroid: {
        src: 'assets/guide/thyroid-scan-indications.png',
        alt: '甲狀腺掃描適應症圖解，說明甲狀腺亢進原因判斷、甲狀腺結節功能判斷、異位或殘餘功能組織定位，以及放射碘治療前攝碘評估。'
    },
    Parathyroid: {
        src: 'assets/guide/parathyroid-indications.png',
        alt: '副甲狀腺掃描適應症圖解，說明原發性副甲狀腺機能亢進術前定位、疑似副甲狀腺腺瘤、再手術或解剖複雜個案，以及異位副甲狀腺搜尋。'
    },
    MIBG: {
        src: 'assets/guide/mibg-indications.png',
        alt: 'MIBG 掃描適應症圖解，說明嗜鉻細胞瘤或副神經節瘤、神經母細胞瘤分期、多發或轉移病灶搜尋，以及治療前攝取能力評估。'
    },
    NP59: {
        src: 'assets/guide/np59-indications.png',
        alt: 'NP-59 腎上腺皮質掃描適應症圖解，說明原發性醛固酮增多症、Cushing syndrome 皮質功能評估、單側與雙側功能性病灶分流，以及特殊腎上腺皮質個案定位。'
    },
    I131WBS: {
        src: 'assets/guide/i131-wbs-indications.png',
        alt: 'I-131 全身掃描適應症圖解，說明術後殘餘組織搜尋、復發偵測、轉移病灶搜尋，以及治療後評估。'
    },
    Salivary: {
        src: 'assets/guide/salivary-scan-indications.png',
        alt: '唾液腺掃描適應症圖解，說明 Sjogren syndrome 評估、口乾症狀功能檢查、治療後功能追蹤，以及雙側大唾液腺整體功能比較。'
    },
    MPI_Tc99m: {
        src: 'assets/guide/mpi-indications.png',
        alt: 'MPI 適應症圖解，說明胸痛或疑似冠心病、活動後症狀、已知冠心病風險分層，以及治療後追蹤。'
    },
    MPI_Tl201: {
        src: 'assets/guide/mpi-tl201-indications.png',
        alt: 'Tl-201 MPI 適應症圖解，說明冠心病缺血評估、心肌存活性評估、血管重建前決策，以及既有冠心病追蹤。'
    },
    CardiacAmyloid: {
        src: 'assets/guide/cardiac-amyloid-indications.png',
        alt: '心臟類澱粉沉積影像適應症圖解，說明厚心室與心衰竭病人、可疑浸潤性心肌病、周邊神經症狀合併心臟問題，以及疑似 ATTR 的非侵入性診斷路徑。'
    },
    MUGA: {
        src: 'assets/guide/muga-indications.png',
        alt: 'MUGA 適應症圖解，說明化療前基準評估、化療中追蹤、需要高重現性射出分率量測，以及特定心室功能監測。'
    },
    Venography: {
        src: 'assets/guide/venography-indications.png',
        alt: '靜脈造影掃描適應症圖解，說明深層靜脈栓塞懷疑、超音波結果不清楚、骨盆或近端靜脈阻塞評估，以及側枝循環或靜脈通暢性追蹤。'
    },
    Lymphedema: {
        src: 'assets/guide/lymphedema-indications.png',
        alt: '淋巴水腫掃描適應症圖解，說明原發性淋巴水腫、術後或放療後腫脹、單側肢體慢性腫脹鑑別，以及治療與復健規劃。'
    },
    SLN: {
        src: 'assets/guide/sentinel-node-indications.png',
        alt: '前哨淋巴結掃描適應症圖解，說明乳癌、黑色素瘤、部分婦癌或特殊腫瘤定位，以及微創分期與手術規劃。'
    },
    Gastric: {
        src: 'assets/guide/gastric-emptying-indications.png',
        alt: '胃排空掃描適應症圖解，說明疑似胃輕癱、糖尿病相關胃動力問題、手術後或功能性上腹不適，以及治療前後追蹤。'
    },
    GIBleed: {
        src: 'assets/guide/gi-bleed-indications.png',
        alt: '腸胃道出血掃描適應症圖解，說明間歇性下消化道出血、內視鏡找不到出血點、反覆血便或黑便，以及介入或手術前定位輔助。'
    },
    Meckel: {
        src: 'assets/guide/meckel-indications.png',
        alt: 'Meckel 掃描適應症圖解，說明兒童無痛性下消化道出血、不明原因反覆血便、年輕病人出血來源追查，以及手術前診斷線索。'
    },
    Liver: {
        src: 'assets/guide/liver-scan-indications.png',
        alt: '肝脾掃描適應症圖解，說明肝脾分布異常、肝臟網狀內皮功能評估、脾組織定位，以及特殊網狀內皮系統病變輔助評估。'
    },
    LiverHemangioma: {
        src: 'assets/guide/liver-hemangioma-indications.png',
        alt: '肝血管瘤核醫檢查適應症圖解，說明可疑肝腫塊鑑別、CT 或 MRI 不典型、良性病灶確認輔助，以及多發肝病灶中鎖定特定病灶。'
    },
    Biliary: {
        src: 'assets/guide/biliary-indications.png',
        alt: '膽道掃描適應症圖解，說明急性膽囊炎懷疑、膽道阻塞或膽漏、膽囊功能評估，以及術後或移植後膽道問題。'
    },
    Salivary2: {
        src: 'assets/guide/salivary-scan-indications.png',
        alt: '唾液腺掃描適應症圖解，說明 Sjogren syndrome 評估、口乾症狀功能檢查、治療後功能追蹤，以及雙側大唾液腺整體功能比較。'
    },
    Bone: {
        src: 'assets/guide/bone-scan-indications.png',
        alt: 'Bone scan 適應症圖解，說明骨轉移搜尋、不明骨痛或壓力性骨折、骨髓炎或感染評估，以及全身多發骨病灶篩查。'
    },
    DMSA: {
        src: 'assets/guide/dmsa-indications.png',
        alt: 'DMSA 腎皮質掃描適應症圖解，說明急性腎盂腎炎、腎疤痕追蹤、單側腎功能比例，以及先天或結構異常腎臟評估。'
    },
    DTPA: {
        src: 'assets/guide/dtpa-indications.png',
        alt: 'DTPA 腎圖適應症圖解，說明水腎或阻塞懷疑、分腎功能評估、術前術後追蹤，以及腎灌流與 GFR 相關評估。'
    },
    MAG3: {
        src: 'assets/guide/mag3-indications.png',
        alt: 'MAG3 腎動態掃描適應症圖解，說明水腎或阻塞疑問、術前術後追蹤、分腎功能評估，以及移植腎或複雜尿路評估。'
    },
    Cystography: {
        src: 'assets/guide/cystography-indications.png',
        alt: '膀胱尿路逆流檢查適應症圖解，說明反覆泌尿道感染兒童、已知 VUR 追蹤、先天泌尿道異常，以及神經性膀胱或高風險個案。'
    },
    Scrotal: {
        src: 'assets/guide/scrotal-scan-indications.png',
        alt: '睪丸掃描適應症圖解，說明睪丸扭轉懷疑、副睪炎或睪丸炎、超音波不明確的急症，以及兒童或年輕男性急診鑑別。'
    },
    Brain: {
        src: 'assets/guide/brain-perfusion-indications.png',
        alt: '腦灌流掃描適應症圖解，說明失智症輔助評估、癲癇病灶定位、腦血管功能或局部腦灌流異常，以及腦死判定或特殊神經個案。'
    },
    TRODAT: {
        src: 'assets/guide/trodat-indications.png',
        alt: 'TRODAT 適應症圖解，說明巴金森症候群鑑別、原發性巴金森病與本態性顫抖區分、不典型動作症狀，以及臨床診斷輔助。'
    },
    Cisternography: {
        src: 'assets/guide/cisternography-indications.png',
        alt: '腦脊髓液池掃描適應症圖解，說明腦脊髓液漏、正常壓力水腦症輔助評估、分流術前後問題，以及特殊腦脊髓液循環障礙。'
    },
    Lung: {
        src: 'assets/guide/lung-perfusion-indications.png',
        alt: '肺灌注掃描適應症圖解，說明肺栓塞懷疑、術前肺功能分區、肺血流分布不均，以及無法做其他顯影檢查時的肺灌流評估。'
    },
    LungVQ: {
        src: 'assets/guide/lung-vq-indications.png',
        alt: 'Lung V/Q 掃描適應症圖解，說明肺栓塞評估、不能做顯影 CT 的病人、慢性血栓或肺高壓篩查，以及術前肺功能分區評估。'
    },
    Ga67: {
        src: 'assets/guide/ga67-indications.png',
        alt: 'Ga-67 掃描適應症圖解，說明慢性感染或發炎、脊椎骨髓炎或深部感染、肺部或縱膈腔慢性發炎問題，以及特定腫瘤或發炎性疾病追蹤。'
    },
    WBCScan: {
        src: 'assets/guide/wbc-scan-indications.png',
        alt: '白血球掃描適應症圖解，說明骨髓炎、發燒找不到原因、術後或植入物相關感染，以及腹部或軟組織深部感染。'
    },
    I131: {
        src: 'assets/guide/i131-indications.png',
        alt: 'I-131 治療適應症圖解，說明 Graves disease、toxic nodule 或 multinodular goiter、甲狀腺癌術後殘餘組織消融，以及仍會攝碘的復發或轉移性分化型甲狀腺癌。'
    },
    I131MIBG: {
        src: 'assets/guide/i131-mibg-indications.png',
        alt: 'I-131 MIBG 治療適應症圖解，說明高風險或復發神經母細胞瘤、轉移性嗜鉻細胞瘤或副神經節瘤，以及治療前需確認 MIBG 攝取與骨髓腎功能條件。'
    },
    Sm153: {
        src: 'assets/guide/sm153-indications.png',
        alt: 'Sm-153 骨痛緩解治療適應症圖解，說明多發成骨性骨轉移、疼痛已影響生活品質，以及治療前需確認骨掃描攝取與骨髓儲備。'
    },
    Ra223: {
        src: 'assets/guide/ra223-indications.png',
        alt: 'Ra-223 治療適應症圖解，說明 mCRPC 合併症狀性骨轉移、無已知內臟轉移，以及治療前需評估骨髓儲備。'
    },
    Lu177PSMA: {
        src: 'assets/guide/lu177-psma-indications.png',
        alt: 'Lu-177 PSMA 治療適應症圖解，說明 mCRPC、PSMA 影像陽性、標準治療後仍進展，以及整體病灶仍屬 PSMA 可標靶疾病。'
    },
    Lu177DOTATATE: {
        src: 'assets/guide/lu177-dotatate-indications.png',
        alt: 'Lu-177 PRRT 適應症圖解，說明無法切除或轉移性神經內分泌腫瘤、Somatostatin analog 後仍進展、Ga-68 DOTATOC 或 DOTATATE PET 陽性，以及治療前需確認腎功能與血球條件。'
    },
    Y90SIRT: {
        src: 'assets/guide/y90-sirt-indications.png',
        alt: 'Y-90 肝動脈放射栓塞適應症圖解，說明原發性肝癌、肝轉移、肝臟主導病程，以及適合肝動脈局部治療的解剖與肝功能條件。'
    }
};

const GENERAL_SECTIONS = {
    StartHere: {
        title: "核醫檢查與治療資訊",
        navLabel: "首頁",
        eyebrow: "",
        subtitle: "通知單上寫到核醫檢查或治療時，這裡先放一段給病人與家屬閱讀的說明。",
        sourceKeys: ["radiopharmaceuticals", "radiationSafety"]
    },
    RadiationGuide: {
        title: "核醫與醫療輻射怎麼看",
        navLabel: "核醫與醫療輻射怎麼看",
        eyebrow: "",
        subtitle: "很多人最想知道的，其實很簡單：這次檢查大概是多少、做完要不要多喝水多上廁所、回家後需不需要特別注意和家人的接觸。",
        blocks: [
            {
                title: "這一頁主要在回答什麼",
                html: `
                    <div class="radiation-stage">
                        <figure class="radiation-photo">
                            <div class="radiation-photo-frame">
                                <img src="assets/photos/radiation-guide-room.webp" alt="核醫檢查室內的設備與檢查床" loading="eager">
                            </div>
                        </figure>
                        <div class="radiation-copy">
                            <p>這一頁把常見檢查和治療整理成容易比對的數字。每家醫院、每位病人的安排不會完全一樣，所以把它當成<strong>大概範圍</strong>來看就好，不需要擔心一定要和表格上的數字一模一樣。<sup>[1][8][10]</sup></p>
                            <p>如果你只是想知道自己該注意什麼，最重要的通常不是背數字，而是弄清楚：<strong>這次是檢查還是治療、藥物會不會很快從尿液或糞便排出、回家後要不要暫時多注意和孕婦或幼兒的接觸</strong>。<sup>[2][3][4][5][14][15][16]</sup></p>
                        </div>
                    </div>
                    <div class="note-strip">
                        表格裡的 mSv 主要是拿來幫你比較高低，不是每個人一定都一樣，也不是法律上的上限。臨床上更重要的，還是這次檢查或治療是不是真的有需要。<sup>[1][18][19]</sup>
                    </div>
                    <div class="dose-chip-list" aria-label="常見輻射量級摘要">
                        <div class="dose-chip reveal-block">
                            <strong>台灣天然背景輻射</strong>
                            <span>每年 2.44 mSv <sup>[17]</sup></span>
                            <p>可拿來了解日常生活本來就有自然背景輻射。</p>
                        </div>
                        <div class="dose-chip reveal-block">
                            <strong>美國自然背景輻射</strong>
                            <span>每年約 3 mSv <sup>[1]</sup></span>
                            <p>不同國家常用的背景值略有不同，別把不同資料硬湊成完全同一個數字。</p>
                        </div>
                        <div class="dose-chip reveal-block">
                            <strong>低劑量肺癌篩檢 CT</strong>
                            <span>1.5 mSv <sup>[1]</sup></span>
                            <p>和一般胸部 CT 要分開看，因為做法本來就不一樣。</p>
                        </div>
                        <div class="dose-chip reveal-block">
                            <strong>冠狀動脈 CTA</strong>
                            <span>8.7 mSv <sup>[1]</sup></span>
                            <p>心臟鈣化分數和冠狀動脈 CTA 回答的問題不同，數字也不要混在一起看。</p>
                        </div>
                        <div class="dose-chip reveal-block">
                            <strong>全身 FDG PET/CT</strong>
                            <span>22.7 mSv <sup>[1]</sup></span>
                            <p>這個數字包含藥物和 CT，不是只有 FDG 藥物本身。</p>
                        </div>
                    </div>
                `
            },
            {
                title: "電腦斷層常見劑量",
                html: `
                    <p>下面這張表整理的是美國權威病人頁面更新的成人大約劑量，很適合拿來比對「大概差多少」。<sup>[1]</sup></p>
                    <div class="table-scroll">
                        <table class="data-table data-table--dose">
                            <thead>
                                <tr>
                                    <th>檢查</th>
                                    <th>大約劑量（mSv）</th>
                                    <th>怎麼看比較不容易誤會</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>頭部 CT</td>
                                    <td>1.6 mSv <sup>[1]</sup></td>
                                    <td>通常低於胸部或腹骨盆 CT。</td>
                                </tr>
                                <tr>
                                    <td>頭頸部 CT</td>
                                    <td>1.2 mSv <sup>[1]</sup></td>
                                    <td>掃描範圍不同，不能直接套成「所有頭部附近 CT 都差不多」。</td>
                                </tr>
                                <tr>
                                    <td>胸部 CT</td>
                                    <td>6.1 mSv <sup>[1]</sup></td>
                                    <td>和低劑量肺癌篩檢 CT 要分開看。</td>
                                </tr>
                                <tr>
                                    <td>低劑量肺癌篩檢 CT（LDCT）</td>
                                    <td>1.5 mSv <sup>[1]</sup></td>
                                    <td>這是專門做篩檢的低劑量做法，不是一般胸部 CT 的另一個名字。</td>
                                </tr>
                                <tr>
                                    <td>腹部與骨盆 CT</td>
                                    <td>7.7 mSv <sup>[1]</sup></td>
                                    <td>若同一次做前後對比或重複掃描，總量可能更高。</td>
                                </tr>
                                <tr>
                                    <td>腹部與骨盆 CT（前後對比或重複）</td>
                                    <td>15.4 mSv <sup>[1]</sup></td>
                                    <td>這一列最能提醒人：同一個部位，做法不同，劑量差很多。</td>
                                </tr>
                                <tr>
                                    <td>脊椎 CT</td>
                                    <td>8.8 mSv <sup>[1]</sup></td>
                                    <td>常和骨科、外傷或神經相關問題一起出現，不一定比冠狀動脈 CTA 低。</td>
                                </tr>
                                <tr>
                                    <td>心臟 CT 鈣化分數</td>
                                    <td>1.7 mSv <sup>[1]</sup></td>
                                    <td>它不是冠狀動脈 CTA，回答的醫療問題也不同。</td>
                                </tr>
                                <tr>
                                    <td>冠狀動脈電腦斷層血管攝影（冠狀動脈 CTA）</td>
                                    <td>8.7 mSv <sup>[1]</sup></td>
                                    <td>這一項是很多人最容易和「心臟 CT」混為一談的檢查。</td>
                                </tr>
                                <tr>
                                    <td>非心臟 CTA</td>
                                    <td>5.1 mSv <sup>[1]</sup></td>
                                    <td>CTA 還要看掃哪個部位，不同部位和做法本來就不會完全一樣。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                title: "常見核醫檢查的劑量",
                html: `
                    <p>這一張表先看<strong>藥物本身</strong>的大約劑量。因為各院常用的注射量不完全一樣，所以有些項目會用範圍呈現。<sup>[8][10]</sup></p>
                    <div class="note-strip">
                        如果檢查名稱後面還有 CT，總劑量還要把 CT 那一段一起算進去。<sup>[8]</sup>
                    </div>
                    <div class="table-scroll">
                        <table class="data-table data-table--dose">
                            <thead>
                                <tr>
                                    <th>檢查 / 使用藥物</th>
                                    <th>大約劑量（mSv）</th>
                                    <th>怎麼看比較實用</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>全身骨骼掃描（99mTc-MDP / HDP）</td>
                                    <td>約 3.7–5.6 mSv <sup>[10]</sup></td>
                                    <td>常見 20–30 mCi 注射量估算；做完多喝水、常排尿能幫助把不需要留在體內的藥物排掉。<sup>[6][10]</sup></td>
                                </tr>
                                <tr>
                                    <td>肺灌注掃描（99mTc-MAA）</td>
                                    <td>約 1.5 mSv <sup>[10]</sup></td>
                                    <td>如果同時加做 ventilation，總量會再往上加，但通常仍屬相對低量的核醫檢查。</td>
                                </tr>
                                <tr>
                                    <td>V/Q 掃描（灌注 + ventilation）</td>
                                    <td>約 1.8–2.1 mSv <sup>[10]</sup></td>
                                    <td>差異主要來自 ventilation 用的是 Technegas 還是 Xe-133。</td>
                                </tr>
                                <tr>
                                    <td>甲狀腺掃描（99mTc-pertechnetate）</td>
                                    <td>約 2.2 mSv <sup>[7][10]</sup></td>
                            <td>和口服 I-123 的檢查不是同一種藥，數字也不一樣。</td>
                                </tr>
                                <tr>
                                    <td>甲狀腺攝取與掃描（I-123）</td>
                                    <td>約 3.3 mSv <sup>[7][10]</sup></td>
                                    <td>這類含碘檢查在哺乳和近期做過含碘顯影時，通常需要先多問清楚。<sup>[7]</sup></td>
                                </tr>
                                <tr>
                                    <td>腎臟掃描（99mTc-MAG3 / DTPA / DMSA）</td>
                                    <td>約 0.85–1.2 mSv <sup>[10]</sup></td>
                                    <td>同樣叫腎臟掃描，藥物不同，主要看的生理問題也不同。</td>
                                </tr>
                                <tr>
                                    <td>腦部 DAT scan（I-123 ioflupane）</td>
                                    <td>約 4.4 mSv <sup>[10]</sup></td>
                                    <td>屬單光子影像，不要和失智症用的 amyloid PET 混在一起看。</td>
                                </tr>
                                <tr>
                                    <td>心肌灌注掃描（99mTc-sestamibi）</td>
                                    <td>單次注射約 4.9–7.8 mSv <sup>[8]</sup></td>
                                    <td>如果做 stress / rest 兩次注射，總量通常會高於單次。</td>
                                </tr>
                                <tr>
                                    <td>心肌灌注掃描（99mTc-tetrofosmin）</td>
                                    <td>單次注射約 4.3–7.0 mSv <sup>[8]</sup></td>
                                    <td>和 sestamibi 接近，但仍是不同藥物，不建議直接當成同一個數字。</td>
                                </tr>
                                <tr>
                                    <td>心肌灌注掃描（Tl-201）</td>
                                    <td>約 11–15 mSv <sup>[8]</sup></td>
                                    <td>這也是很多中心現在更常使用 Tc-99m 類檢查的原因之一。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                title: "PET 和 PET/CT 常見劑量",
                html: `
                    <p>PET 最容易讓人搞混的地方，就是把藥物本身和 CT 全部混成同一個數字。下面這張表把它們分開列出來，比較容易看懂。<sup>[1][10][11][12][13]</sup></p>
                    <div class="table-scroll">
                        <table class="data-table data-table--dose">
                            <thead>
                                <tr>
                                    <th>檢查 / 使用藥物</th>
                                    <th>大約劑量（mSv）</th>
                                    <th>怎麼看比較實用</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>FDG PET（只算藥物）</td>
                                    <td>約 8.5 mSv <sup>[10]</sup></td>
                                    <td>這是 FDG 藥物本身的量級，不含 CT。</td>
                                </tr>
                                <tr>
                                    <td>全身 FDG PET/CT</td>
                                    <td>約 22.7 mSv <sup>[1]</sup></td>
                                    <td>這是整套 PET/CT 的成人估計值，已把 CT 算進去。</td>
                                </tr>
                                <tr>
                                    <td>PSMA PET（Ga-68 藥物本身）</td>
                                    <td>約 4.4 mSv（259 MBq）<sup>[12]</sup></td>
                                    <td>這只算藥物本身；如果還有診斷型 CT，總量會再增加。</td>
                                </tr>
                                <tr>
                                    <td>PSMA PET（F-18 藥物本身）</td>
                                    <td>約 4.3 mSv（370 MBq）<sup>[11]</sup></td>
                                    <td>同樣是 PSMA PET，Ga-68 和 F-18 版本不能當成完全一樣的檢查。</td>
                                </tr>
                                <tr>
                                    <td>SSTR PET（Ga-68 DOTATATE）</td>
                                    <td>約 3.15 mSv（150 MBq）<sup>[13]</sup></td>
                                    <td>常用於神經內分泌腫瘤，劑量不應直接套用到 FDG 或 PSMA PET。</td>
                                </tr>
                                <tr>
                                    <td>NaF PET（F-18 sodium fluoride）</td>
                                    <td>約 4.6 mSv <sup>[10]</sup></td>
                                    <td>主要看骨病灶，和骨骼掃描不是完全同一種方法。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                title: "做完檢查或治療後，要記得哪些事",
                html: `
                    <p>對大多數診斷性核醫來說，回家後最重要的通常不是隔離，而是把前幾個小時的補水、排尿、洗手和廁所衛生做好。很多放射性藥物會從尿液排出，把這些小事做好，通常就已經很有幫助。<sup>[2][3][4][6][9][11][12][13]</sup></p>
                    <div class="checklist">
                        <div class="checklist-item">
                            <strong>多數診斷性檢查：先把補水和排尿做好</strong>
                            RadiologyInfo 與多個官方標示都會提醒：檢前先補充水分，檢查前先排空膀胱，做完後前幾小時多喝水、常排尿，可幫助降低膀胱與體內不必要的殘留劑量。
                        </div>
                        <div class="checklist-item">
                            <strong>如果家裡有孕婦、嬰幼兒，先問清楚這次藥物是不是需要額外限制</strong>
                            多數診斷性檢查的返家限制不會像治療型核醫那麼嚴，但哺乳、孕期可能性、長時間緊貼抱小孩這類情況，最好在注射前就先和醫療團隊確認。
                        </div>
                        <div class="checklist-item">
                            <strong>骨骼掃描、FDG PET、PSMA PET、DOTATATE PET 都別忽略如廁衛教</strong>
                            這幾類檢查的共同點是：藥物常會經過尿路，所以前幾個小時別一直憋尿，通常對自己比較舒服，也能幫忙把藥物排掉。
                        </div>
                        <div class="checklist-item">
                            <strong>哺乳不是一個可以用同一條規則套所有藥物的問題</strong>
                            FDG、Tc-99m、碘類檢查和治療的停乳建議差很多；有些只需暫停一段時間，有些則在治療前就必須停止。最安全的做法，是在預約或報到前就主動講明正在哺乳。
                        </div>
                    </div>
                `
            },
            {
                title: "治療型核醫回家後，通常比診斷檢查更需要按表操課",
                html: `
                    <p>像 I-131、Lu-177、Ra-223 這類治療，本來就是要把足夠的放射能量送到病灶，因此不適合拿來和胸部 X 光或 CT 做單純排名比較。病人真正要記的，是這次藥物主要經由哪裡排出、家人接觸要避多久、以及哪些生活細節需要暫時調整。<sup>[5][14][15][16]</sup></p>
                    <div class="checklist">
                        <div class="checklist-item">
                            <strong>I-131 放射碘治療</strong>
                            權威病人頁面會特別提到：幾天內避免和孕婦、小孩長時間近距離接觸；若可行，使用獨立廁所並每次沖兩次水；分開清洗貼身衣物與床單；暫時分房睡；必要時攜帶醫師證明，以免機場或政府機關偵檢器誤報。<sup>[5]</sup>
                        </div>
                        <div class="checklist-item">
                            <strong>Lu-177 治療（含 PSMA 與 DOTATATE 類）</strong>
                            美國官方標示強調治療前、治療當天與隔天都要補水並頻繁排尿；部分產品也明確提醒，治療後一段時間尿液仍可能被偵測到放射性，所以返家後務必照著醫院發給你的家用防護指示做。<sup>[14][15]</sup>
                        </div>
                        <div class="checklist-item">
                            <strong>Ra-223 治療</strong>
                            這類治療的重點更多放在排泄物衛生。官方標示會提醒病人與照護者注意馬桶、尿液與糞便污染的清潔，必要時戴手套處理污染物，並在治療後一週特別留意廁所與衣物清潔。<sup>[16]</sup>
                        </div>
                    </div>
                `
            },
            {
                title: "台灣怎麼管理醫療輻射",
                html: `
                    <p>對一般民眾來說，最重要的是把法規翻成白話：台灣不是放著醫療影像隨便做，而是要求「有理由才做、做了也要把劑量壓在合理範圍內」。也因為如此，同一種檢查在不同醫院的做法本來就可能不完全一樣。<sup>[18][19]</sup></p>
                    <div class="table-scroll">
                        <table class="data-table data-table--dose">
                            <thead>
                                <tr>
                                    <th>主題</th>
                                    <th>白話意思</th>
                                    <th>對病人最直接的影響</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>主管機關</td>
                                    <td>台灣醫療與場所的輻射防護管理，由核能安全委員會負責。</td>
                                    <td>醫療機構不是自己訂規則就算，而是要在既有法規架構下運作。</td>
                                </tr>
                                <tr>
                                    <td>核心法規</td>
                                    <td>游離輻射防護法及相關施行規定，要求醫療機構建立輻射防護制度與作業流程。</td>
                                    <td>你看到的檢查流程、場地管理、教育訓練與返家衛教，都不是憑感覺安排。</td>
                                </tr>
                                <tr>
                                    <td>合理抑低（ALARA）</td>
                                    <td>在能完成醫療目的的前提下，把不必要的輻射降到合理可行的低。</td>
                                    <td>不是追求零輻射，而是避免沒有必要的重做、過大範圍或不必要追加。</td>
                                </tr>
                                <tr>
                                    <td>一般民眾 1 mSv / 年</td>
                                    <td>這是環境與設施管理常見的概念，不是醫師判斷病人能不能做檢查的門檻。</td>
                                    <td>不能把「我這次檢查超過 1 mSv」直接理解成「醫療行為違法」。病人的管理重點是必要性、專業判斷與品質保證。</td>
                                </tr>
                                <tr>
                                    <td>病人醫療照射</td>
                                    <td>病人接受檢查或治療時，重點是這次安排有沒有正當醫療理由，以及是否用合適的方式完成。</td>
                                    <td>如果你有懷孕、哺乳、近期重複檢查、怕密閉或特殊照護需求，提早告訴醫療團隊通常比較安全。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="topic-note">病人的醫療輻射<strong>沒有法規劑量限制</strong>，意思不是「沒人管」，而是改由醫師專業判斷、醫療正當性與品質保證來管理。這也是為什麼同一個數字只能當參考，不能拿來代替個別醫囑。<sup>[18][19]</sup></p>
                `
            },
            {
                title: "參考出處",
                html: `
                    ${renderInlineSourceList([
                        "radiologyDoseChart",
                        "radiationSafety",
                        "radiologyGeneralNuclear",
                        "radiologyPet",
                        "radioiodine",
                        "boneScan",
                        "thyroidUptake",
                        "eanmMpiGuideline",
                        "eanmFdgGuideline",
                        "snmmiDoseTool",
                        "dailymedPylarify",
                        "dailymedLocametz",
                        "dailymedNetspot",
                        "dailymedPluvicto",
                        "dailymedLutathera",
                        "dailymedXofigo",
                        "nuscFlightDose",
                        "nuscMedicalFaq",
                        "nuscQaStandard"
                    ])}
                `
            }
        ],
        sourceKeys: ["radiationSafety", "radiopharmaceuticals"]
    },
    PETOverview: {
        title: "正子影像 PET 檢查總整理",
        navLabel: "正子影像 PET 檢查總整理",
        eyebrow: "正子影像 PET",
        subtitle: "PET 不是只有一種藥，也不是所有檢查前準備都一樣。這一頁整理檢查用途、常見混淆點與到院前的重要事項。",
        blocks: [
            {
                title: "PET 的種類與用途",
                html: `
                    <p>同樣叫 PET，實際上是在用不同的放射性藥物問不同問題。對病人來說，最重要的不是把英文全背起來，而是先知道醫師現在到底是在看腫瘤活性、腦部代謝、受體表現、骨轉移，還是心肌血流。</p>
                    <p>如果你拿到通知單時只記得「我要做正子」，很容易把別人的經驗直接套到自己身上，結果在禁食、停藥、到院時間或結果期待上都弄錯。</p>
                `
            },
            {
                title: "七種常見 PET，一張表先看懂",
                html: `
                    <div class="table-scroll">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>檢查</th>
                                    <th>通常在看什麼</th>
                                    <th>到院前常見重點</th>
                                    <th>最常被誤會的地方</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>FDG PET/CT</td>
                                    <td>癌症分期、療效、復發，也可能用於感染或發炎評估。</td>
                                    <td>多數情況要空腹、糖尿病與胰島素安排要先講。</td>
                                    <td>亮不一定是癌，發炎與感染也可能攝取。</td>
                                </tr>
                                <tr>
                                    <td>FDG 腦 PET</td>
                                    <td>失智症鑑別、癲癇術前、部分腦炎或腦腫瘤問題。</td>
                                    <td>注射前後環境要安靜、少刺激，避免影像被環境干擾。</td>
                                    <td>它看的是代謝分布模式，不是找單一腫塊。</td>
                                </tr>
                                <tr>
                                    <td>PSMA PET</td>
                                    <td>攝護腺癌分期、生化復發、後續治療規劃。</td>
                                    <td>通常不必像 FDG 一樣長時間禁食，但排尿、平躺與針劑流程仍要配合。</td>
                                    <td>PSMA 很亮不代表一定適合 Lu-177 治療，仍要看整體病程。</td>
                                </tr>
                                <tr>
                                    <td>Ga-68 DOTATOC / DOTATATE PET</td>
                                    <td>神經內分泌腫瘤定位、分期、PRRT 前受體評估。</td>
                                    <td>長效體抑素類似物的施打時間要先告知醫師團隊。</td>
                                    <td>它不只是找病灶，也在評估後續能不能接 PRRT。</td>
                                </tr>
                                <tr>
                                    <td>Amyloid PET</td>
                                    <td>認知退化病人的類澱粉沉積評估。</td>
                                    <td>多數不需特殊禁食，但要帶著臨床問題一起看，不是例行健檢。</td>
                                    <td>陽性不等於所有症狀都由阿茲海默病理造成。</td>
                                </tr>
                                <tr>
                                    <td>F-18 NaF 骨骼正子</td>
                                    <td>更敏感地看骨轉移或骨代謝異常。</td>
                                    <td>補水、排尿和配合拍攝時間仍然重要。</td>
                                    <td>退化性病變也可能亮，不能只看亮點數量。</td>
                                </tr>
                                <tr>
                                    <td>心臟正子掃描</td>
                                    <td>心肌血流、冠心病、微血管功能、部分心臟發炎問題。</td>
                                    <td>咖啡因、某些藥物與呼吸狀態常需要提早調整。</td>
                                    <td>它看的不只是血管有沒有塞，還包含整體血流反應能力。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                title: "到院前先說清楚，常能少走很多冤枉路",
                html: `
                    <div class="checklist">
                        <div class="checklist-item">
                            <strong>糖尿病、胰島素、口服降血糖藥</strong>
                            FDG 類 PET 對血糖特別敏感。不是每家醫院規則都一樣，但幾乎都需要事前安排，不能等到現場才討論。
                        </div>
                        <div class="checklist-item">
                            <strong>最近做過顯影檢查、正在用特殊藥物，或剛打過長效針劑</strong>
                            甲狀腺相關檢查會受含碘製劑影響；DOTATOC / DOTATATE PET 則要把體抑素藥物時程一起納入。
                        </div>
                        <div class="checklist-item">
                            <strong>怕密閉、無法久躺、排尿困難、疼痛難以平躺</strong>
                            這些都會直接影響 PET 影像品質與掃描流程，比起現場硬撐，提早講通常更容易調整。
                        </div>
                        <div class="checklist-item">
                            <strong>懷孕、可能懷孕、正在哺乳</strong>
                            PET 用藥不同，建議也不同；但這類資訊一律要在排檢前就先主動說。
                        </div>
                    </div>
                `
            },
            {
                title: "PET 當天流程常有共通點，但差別也很實際",
                html: `
                    <div class="fact-list">
                        <section class="fact-item">
                            <h4>共通點：打藥後要等、拍攝時要盡量不動</h4>
                            <p>多數 PET 都不是打完馬上照。等待時間可能 30 到 90 分鐘不等，這段時間怎麼休息、能不能聊天、要不要喝水或排尿，都會影響後面影像。</p>
                        </section>
                        <section class="fact-item">
                            <h4>FDG 類 PET 最在意代謝背景</h4>
                            <p>血糖、肌肉活動、注射後走來走去、聊天或受冷發抖，都可能讓不該亮的地方跟著亮起來。</p>
                        </section>
                        <section class="fact-item">
                            <h4>受體型 PET 更在意生物條件有沒有對上</h4>
                            <p>PSMA、DOTATOC / DOTATATE 看的是腫瘤有沒有保留某種入口。入口存在與否，會一路影響後續治療能不能接得上。</p>
                        </section>
                        <section class="fact-item">
                            <h4>心臟 PET 常比其他 PET 多一層壓力試驗邏輯</h4>
                            <p>對很多人來說，真正不舒服的不一定是掃描本身，而是壓力藥物或咖啡因限制，所以前一天就要先讀懂通知單。</p>
                        </section>
                    </div>
                `
            },
            {
                title: "報告出來前，先記住三件事",
                html: `
                    <div class="checklist">
                        <div class="checklist-item">
                            <strong>影像是回答臨床問題，不是單獨下判決</strong>
                            PET 很強，但仍要和病史、抽血、病理、其他影像一起讀。不要只拿到一句「有亮點」就先把最壞結果套到自己身上。
                        </div>
                        <div class="checklist-item">
                            <strong>不同 PET 之間不能直接互相比亮度</strong>
                            FDG、PSMA、DOTATATE、Amyloid 亮起來的原因完全不同，不能拿別人的 PET 報告來比自己這次是不是更嚴重。
                        </div>
                        <div class="checklist-item">
                            <strong>如果報告關係到下一步治療，通常要一起問「接下來會怎麼做」</strong>
                            特別是 PSMA PET、DOTATATE PET、Amyloid PET，影像常是為了後續決策而做，不是只為了知道有沒有而已。
                        </div>
                    </div>
                    <p class="topic-note">如果通知單只寫 PET，卻沒有告訴你是哪一種藥、需不需要禁食、要不要停咖啡或調整藥物，最穩當的做法仍是直接打電話回原安排單位確認。</p>
                `
            }
        ],
        sourceKeys: ["radiologyPet", "clevelandPet", "radiationSafety", "radiopharmaceuticals"]
    },
    AboutNM: {
        title: "核醫是什麼",
        navLabel: "核醫是什麼",
        eyebrow: "先把陌生感放下來",
        subtitle: "核醫檢查的種類很多，但共同邏輯不複雜：它常在看身體目前怎麼運作。",
        blocks: [
            {
                title: "白話說明",
                html: `
                    <p>如果把 CT、MRI 比喻成看「身體長得怎麼樣」，那很多核醫檢查更像是在看「身體現在怎麼工作」。醫療團隊會用少量放射性藥物作為示蹤，再看它在身體裡的分布。</p>
                    <p>很多人一看到「放射」兩個字就先緊張，其實你最需要先知道的是：這項檢查想幫醫師回答什麼問題，而不是先把所有專有名詞背起來。</p>
                `
            },
            {
                title: "診斷和治療差在哪裡",
                html: `
                    <div class="fact-list">
                        <section class="fact-item">
                            <h4>診斷性核醫</h4>
                            <p>主要在幫助醫師看功能、找病灶、判斷病情。多半是注射、吞服或吸入少量放射性藥物後等待，再進行掃描，通常當天回家。</p>
                        </section>
                        <section class="fact-item">
                            <h4>治療性核醫</h4>
                            <p>主要是把藥物送到目標組織，直接治療病灶。返家安排、家人接觸與生活限制通常會更完整，也會有更仔細的衛教。</p>
                        </section>
                    </div>
                `
            }
        ],
        sourceKeys: ["radiopharmaceuticals", "radiationSafety"]
    },
    VisitGuide: {
        title: "到院前說明",
        navLabel: "到院前說明",
        eyebrow: "先把該說的事說出來",
        subtitle: "很多檢查不是不能做，而是有些事越早說，安排就越安全也越順。",
        blocks: [
            {
                title: "這些事請提早說",
                html: `
                    <div class="alerts-grid">
                        <div class="tone-box tone-critical">
                            <h4>懷孕或可能懷孕</h4>
                            <p>請不要等到進檢查室才提。核醫科需要先判斷這項檢查或治療是否適合你。</p>
                        </div>
                        <div class="tone-box tone-critical">
                            <h4>正在哺乳</h4>
                            <p>不同藥物對哺乳的建議不同，有些需要暫停，有些治療後則不能繼續同一胎次哺乳。</p>
                        </div>
                        <div class="tone-box tone-caution">
                            <h4>最近做過顯影檢查或用了含碘產品</h4>
                            <p>尤其是甲狀腺相關項目，近兩個月的含碘顯影劑、藥物或保健品都要主動告知。</p>
                        </div>
                        <div class="tone-box tone-caution">
                            <h4>糖尿病、怕密閉、無法久躺</h4>
                            <p>這些都會影響排程和準備方式。提早講，常常就能避免到現場才更慌。</p>
                        </div>
                    </div>
                `
            },
            {
                title: "不要自己猜能不能吃、能不能喝",
                html: `
                    <p>核醫檢查並不是每一項都要禁食。有些要空腹、有些只要多喝水、有些完全不需要限制飲食。最安全的做法不是上網拼湊，而是直接看你的檢查通知單或先打電話確認。</p>
                `
            }
        ],
        sourceKeys: ["radiologyPet", "boneScan", "thyroidUptake", "radiationSafety", "clevelandPet"]
    },
    AfterScan: {
        title: "做完之後怎麼辦",
        navLabel: "做完之後怎麼辦",
        eyebrow: "先把收尾動作做好",
        subtitle: "多數診斷檢查做完就能回家，但有幾個收尾動作很重要。",
        blocks: [
            {
                title: "很多時候，做完後最重要的是這三件事",
                html: `
                    <div class="checklist">
                        <div class="checklist-item">
                            <strong>補水、多排尿</strong>
                            很多診斷性核醫檢查都會建議這樣做，因為有助於未被吸收的放射性藥物代謝排出。
                        </div>
                        <div class="checklist-item">
                            <strong>照平常生活回去，但保留院方交代</strong>
                            不是所有檢查都需要特別限制活動；若有哺乳、家中幼兒、或特殊接觸安排，請以當次衛教為準。
                        </div>
                        <div class="checklist-item">
                            <strong>有疑問就回頭問</strong>
                            把院方交代留好，比回家自己拼湊答案更安心。
                        </div>
                    </div>
                `
            }
        ],
        sourceKeys: ["radiationSafety", "clevelandPet", "boneScan"]
    },
    SafetySupport: {
        title: "懷孕、哺乳與安心問題",
        navLabel: "懷孕、哺乳與安心問題",
        eyebrow: "很多人最在意的都在這裡",
        subtitle: "這一頁整理懷孕、哺乳、陪同與返家安全相關問題。",
        blocks: [
            {
                title: "常見問題",
                html: `
                    <div class="card-grid">
                        <div class="info-card">
                            <h4>不是每個核醫項目都一樣</h4>
                            <p>別人的骨掃描、PET、或治療經驗，不能直接套到你這次身上。</p>
                        </div>
                        <div class="info-card">
                            <h4>把問題提早說，常常比硬撐更有幫助</h4>
                            <p>怕針、怕密閉、照顧幼兒、家裡只有你能照顧家人，這些都值得提早說。</p>
                        </div>
                        <div class="info-card">
                            <h4>有急性不適時，不要只靠上網搜尋</h4>
                            <p>若出現呼吸困難、意識改變、昏厥、胸痛或嚴重皮疹，請立即聯絡醫療團隊或就近就醫。</p>
                        </div>
                    </div>
                `
            }
        ],
        sourceKeys: ["radiationSafety", "radioiodine", "thyroidAssociationRai"]
    },
    Evidence: {
        title: "參考指引與文獻",
        navLabel: "參考指引與文獻",
        eyebrow: "如果你想知道這些說法從哪裡來",
        subtitle: "民眾版內容優先採用已核對的專業學會資料與大型醫療中心病人衛教頁。",
        blocks: [
            {
                title: "我們怎麼守住內容邊界",
                html: `
                    <div class="checklist">
                        <div class="checklist-item">
                            <strong>先說病人最在意的事情</strong>
                            我們把「為什麼做、要先說什麼、當天會怎麼走、做完後怎麼照顧自己」放在前面。
                        </div>
                        <div class="checklist-item">
                            <strong>不把一般衛教寫成個別醫囑</strong>
                            真正的藥物、劑量、停藥與返家限制，仍要以你的醫師、核醫科與檢查通知單為準。
                        </div>
                    </div>
                `
            }
        ],
        sourceKeys: Object.keys(SOURCE_LIBRARY)
    }
};

const NAV_GROUPS = [
    {
        label: "就診前總覽",
        items: ["StartHere", "RadiationGuide"]
    },
    ...TOPIC_DATA.groups
];

const SECTION_DATA = {
    ...GENERAL_SECTIONS,
    ...TOPIC_DATA.sections
};

let navItems = [];

const contentDisplay = document.querySelector("#content-display");
const sidebarNav = document.querySelector("#sidebar-nav");
const searchInput = document.querySelector("#topic-search");
const sidebar = document.querySelector("#sidebar");
const sidebarOverlay = document.querySelector("#sidebar-overlay");
const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
const contentScroll = document.querySelector(".content-scroll");
const GROUP_LABEL_BY_KEY = new Map(
    TOPIC_DATA.groups.flatMap((group) => group.items.map((key) => [key, group.label]))
);
const THERAPY_KEYS = new Set((TOPIC_DATA.groups.find((group) => group.label === "核醫治療") || { items: [] }).items);
const PET_KEYS = new Set(["PET", "FDGPETCT", "BrainPET", "POSLUMA", "PSMAPETCT", "Ga68DOTATOC", "AmyloidPET", "NaFPET", "CardiacPET", "OtherPET", "PETOverview"]);
const PROCEDURAL_CARD_TITLES = ["為什麼要做", "檢查前", "檢查中", "檢查後"];
const DEFAULT_GUIDANCE = {
    diagnostic: {
        prep: [
            "請帶檢查通知單、目前藥物清單，以及最近和這次問題最相關的影像或門診資料。",
            "懷孕、可能懷孕、正在哺乳、怕密閉、無法久躺、近期做過其他顯影或核醫檢查，都應在到院前先說。"
        ],
        dayOf: [
            "多數診斷性核醫檢查會先核對病史與是否需要注射放射性藥物，之後依藥物特性等待再拍攝。",
            "實際拍攝時間、是否需要延遲影像，以及能不能由家屬陪同，請以你的通知單與現場安排為準。"
        ],
        caution: [
            "禁食、喝水、停藥與是否需先排尿，不能直接套用別人的經驗，請以這次通知單為準。",
            "若注射處不適、頭暈、噁心，或臨時無法完成檢查，請立即告知現場人員。"
        ],
        safety: [
            "大多數診斷性核醫檢查做完即可返家，通常不需要隔離。",
            "多喝水、多排尿，並留意院方是否另外交代短時間避免和孕婦或嬰幼兒長時間近距離接觸。"
        ],
        contact: [
            "若返家後出現持續嘔吐、呼吸困難、劇烈疼痛、昏厥、嚴重皮疹，請立即回院或就近就醫。",
            "如果報告結果會直接影響下一步治療，回診時建議把『結果代表什麼、接下來要做什麼』一起問清楚。"
        ]
    },
    pet: {
        prep: [
            "PET 是否需要禁食、停藥、調整糖尿病用藥或避免咖啡因，會依藥物種類而不同，務必以通知單為準。",
            "懷孕、哺乳、血糖控制不穩、怕密閉、排尿困難、近期打過長效針劑或做過顯影檢查，都要先講。"
        ],
        dayOf: [
            "多數 PET 會先注射藥物，再等待一段時間後拍攝；等待期間怎麼休息、能不能聊天、要不要排尿，都會影響影像品質。",
            "拍攝時盡量保持不動，實際總時間會依藥物特性、拍攝範圍與是否追加延遲影像而不同。"
        ],
        caution: [
            "PET 常受血糖、肌肉活動、緊張、寒冷或藥物影響，所以到院前的小細節往往直接影響畫面是否容易判讀。",
            "不同 PET 亮起來的原因不同，不要把別人的 PET 經驗直接套到自己這次身上。"
        ],
        safety: [
            "大部分 PET 做完後可以直接返家，多喝水、多排尿有助於未利用的藥物代謝排出。",
            "若院方有另外交代哺乳暫停、避免長時間抱幼兒或加強如廁清潔，請依本次用藥規定執行。"
        ],
        contact: [
            "若返家後持續頭暈、嘔吐、呼吸困難、明顯注射處腫痛或出現醫師已提醒的特殊不適，請回院聯絡。",
            "若報告和你的症狀或其他檢查結果對不起來，不代表一定做錯，而是需要由醫療團隊整體解讀。"
        ]
    },
    therapy: {
        prep: [
            "治療前請帶最近抽血報告、目前藥物清單、既往治療紀錄與正式通知單。",
            "懷孕、哺乳、家中有幼兒或孕婦、交通返家方式、照護安排與是否能分開睡，都要在治療前先談。"
        ],
        dayOf: [
            "治療當天通常會先核對病況、抽血與醫師評估，再決定是否照原定計畫給藥或住院。",
            "部分療程需要補液、排尿衛教、隔離或較長時間觀察，請預留比一般檢查更長的時間。"
        ],
        caution: [
            "治療目標可能是控制病灶、延長穩定期或減輕症狀，不一定等同根治。",
            "若近期有發燒、感染、持續腹瀉、明顯出血、血球偏低、無法進食或排尿困難，都應先回報。"
        ],
        safety: [
            "返家後的接觸距離、排泄物處理、衣物清洗與睡眠安排，要依院方衛教單執行，不要自行縮短天數。",
            "治療後若安排下一輪，代表需要持續觀察抽血、症狀與器官耐受性，不是做完當天就結束。"
        ],
        contact: [
            "若返家後出現高燒、明顯出血、持續嘔吐、無法進食飲水、意識改變或醫師已提醒的特定副作用，請立即聯絡治療團隊。",
            "若症狀在療程間隔期間明顯加重，不要等到下次回診才說。"
        ]
    }
};
const GROUP_GUIDANCE = {
    "內分泌 / 甲狀腺": {
        prep: [
            "若近期做過含碘顯影檢查、正在吃含碘藥物或保健品、正在服用甲狀腺相關藥物，通常都要主動告知。"
        ],
        dayOf: [
            "這一類檢查不少需要延遲影像或多時點拍攝，看到通知單時間較分散並不代表流程出錯。"
        ]
    },
    "心臟 / 循環 / 淋巴": {
        prep: [
            "咖啡、茶、能量飲、巧克力與部分心臟藥物，常會影響檢查安排，請先核對通知單上的限制。",
            "若平常走路就容易喘、最近胸痛變頻繁、無法平躺或需要氧氣，也要提早說。"
        ]
    },
    "消化 / 肝膽": {
        prep: [
            "是否需要空腹、能不能吃藥、最近有沒有持續腹痛、嘔吐、血便、手術或引流管，常是這類檢查排程重點。"
        ]
    },
    "骨骼 / 腎臟 / 泌尿": {
        prep: [
            "補水、能否自行排尿、是否裝有導尿管、腎臟或泌尿道是否做過手術，通常都應在到院前先說。"
        ],
        safety: [
            "這一類檢查常會特別交代補水與排尿，目的除了代謝藥物，也是在幫助後續影像判讀。"
        ]
    },
    "神經 / 肺 / 感染": {
        prep: [
            "若近期剛發作、正在使用抗生素、吸氧、支氣管擴張藥，或需要家屬協助安撫與固定姿勢，應提早告知安排單位。"
        ]
    }
};
const SECTION_GUIDANCE = {
    Brain: {
        dayOf: ["腦部相關影像常要求注射前後保持安靜、少刺激、少交談，因為環境本身就會改變腦部攝取或灌流。"]
    },
    MIBG: {
        prep: ["MIBG 相關檢查或治療常需要甲狀腺阻斷與藥物盤點，部分藥物要提前調整。"]
    },
    NP59: {
        dayOf: ["NP-59 常是跨多天的檢查，前面的用藥和後面的拍攝時間需要一起配合。"]
    },
    I131WBS: {
        prep: ["I-131 全身掃描常會搭配低碘飲食、停藥或其他前置安排，不要把它當成一般單次影像檢查。"]
    },
    Gastric: {
        prep: ["胃排空掃描通常會對檢查餐、進食速度與前置禁食有明確要求，最好逐項核對通知單。"]
    },
    Biliary: {
        prep: ["HIDA 類檢查常與空腹時數、止痛藥、嗎啡或近期手術情況有關，別自行猜測能不能吃東西。"]
    },
    Cystography: {
        dayOf: ["膀胱逆流檢查往往會牽涉導尿、灌注與排尿期影像，對兒童與家屬來說，心理準備和安撫同樣重要。"]
    },
    LungVQ: {
        prep: ["若正在吸氧、剛做過肺部影像、近期懷孕或不能配合吸入程序，通常都要提前告知。"]
    },
    Y90SIRT: {
        prep: ["Y-90 正式治療前常還要先做血管攝影與 mapping，若你現在拿到的是前置檢查單，代表流程還沒走到最後一步。"]
    }
};

function escapeHtml(value = "") {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function getInlineGuideFigureHTML(key) {
    const image = PATIENT_INLINE_GUIDE_IMAGES[key];
    if (!image) {
        return "";
    }
    return `
        <figure class="inline-guide-figure">
            <img src="${image.src}" alt="${escapeHtml(image.alt)}" loading="lazy" decoding="async">
        </figure>
    `;
}

function renderSourceCards() {
    return "";
}

function renderInlineSourceList(keys = []) {
    const entries = keys.map((key) => SOURCE_LIBRARY[key]).filter(Boolean);
    if (!entries.length) {
        return "";
    }

    return `
        <ol class="source-inline-list">
            ${entries
                .map(
                    (entry) => `
                        <li class="source-inline-item">
                            <strong>${escapeHtml(entry.title)}</strong>
                            <span>${escapeHtml(entry.organization || "")}</span>
                            <p>${escapeHtml(entry.summary || "")}</p>
                            <a href="${entry.url}" target="_blank" rel="noreferrer noopener">開啟原始資料</a>
                        </li>
                    `
                )
                .join("")}
        </ol>
    `;
}

function renderNav() {
    sidebarNav.innerHTML = NAV_GROUPS
        .map((group) => `
            <div class="nav-group">
                <p class="nav-group-label">${group.label}</p>
                ${group.items
                    .map((key) => {
                        const item = SECTION_DATA[key];
                        if (!item) {
                            return "";
                        }

                        return `<button class="nav-item" data-key="${key}">${item.navLabel || item.title}</button>`;
                    })
                    .join("")}
            </div>
        `)
        .join("");

    navItems = Array.from(sidebarNav.querySelectorAll(".nav-item"));
}

function setActiveNav(key) {
    navItems.forEach((item) => {
        item.classList.toggle("is-active", item.dataset.key === key);
    });
}

function closeSidebar() {
    sidebar.classList.remove("is-open");
    sidebarOverlay.classList.remove("is-open");
}

function buildSectionAnchorId(sectionKey, index) {
    const base = String(sectionKey || "section")
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase();
    return `${base || "section"}-part-${index + 1}`;
}

function getReaderRailNote(section) {
    if (section.title === "核醫與醫療輻射怎麼看") {
        return "可直接跳到數字比較、返家注意或參考出處。";
    }

    if (getSectionType(section) === "therapy") {
        return "依治療前、當天、返家後排列。";
    }

    if (getSectionType(section) === "pet") {
        return "先看用途，再看準備、流程與返家。";
    }

    return "可直接跳到你想先看的段落。";
}

function renderReaderRail(section, items) {
    if (items.length < 2) {
        return "";
    }

    return `
        <aside class="page-rail" aria-label="${escapeHtml(section.title)} 閱讀索引">
            <div class="rail-shell">
                <p class="rail-eyebrow">閱讀索引</p>
                <p class="rail-title">${escapeHtml(section.navLabel || section.title)}</p>
                <p class="rail-note">${escapeHtml(getReaderRailNote(section))}</p>
                <ul class="rail-list">
                    ${items
                        .map(
                            (item) => `
                                <li>
                                    <button type="button" class="reader-rail-button" data-scroll-target="${item.id}">
                                        ${escapeHtml(item.label)}
                                    </button>
                                </li>
                            `
                        )
                        .join("")}
                </ul>
            </div>
        </aside>
    `;
}

function renderIndexedBlocks(blocks, sectionKey) {
    const railItems = blocks.map((block, index) => ({
        id: buildSectionAnchorId(sectionKey, index),
        label: block.railLabel || block.title
    }));

    const html = blocks
        .map(
            (block, index) => `
                <section class="article-block reveal-block" id="${railItems[index].id}">
                    <h3 class="block-title">${block.title}</h3>
                    ${block.html}
                </section>
            `
        )
        .join("");

    return { railItems, html };
}

function setActiveReaderRail(id) {
    document.querySelectorAll(".reader-rail-button").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.scrollTarget === id);
    });
}

function bindReaderRail() {
    const buttons = Array.from(document.querySelectorAll(".reader-rail-button"));
    if (!buttons.length) {
        return;
    }

    setActiveReaderRail(buttons[0].dataset.scrollTarget);
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = document.getElementById(button.dataset.scrollTarget);
            if (!target) {
                return;
            }

            const targetTop =
                target.getBoundingClientRect().top -
                contentScroll.getBoundingClientRect().top +
                contentScroll.scrollTop -
                24;
            setActiveReaderRail(button.dataset.scrollTarget);
            contentScroll.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
        });
    });
}

function getSectionType(section) {
    if (THERAPY_KEYS.has(section.key)) {
        return "therapy";
    }

    if (PET_KEYS.has(section.key)) {
        return "pet";
    }

    return "diagnostic";
}

function getGroupLabel(section) {
    return GROUP_LABEL_BY_KEY.get(section.key) || "";
}

function hasProceduralCards(section) {
    const titles = new Set((section.cards || []).map((card) => card.title));
    return PROCEDURAL_CARD_TITLES.filter((title) => titles.has(title)).length >= 3;
}

function getCardText(section, title) {
    return (section.cards || []).find((card) => card.title === title)?.text || "";
}

function escapeItems(items = []) {
    return items
        .filter(Boolean)
        .map((item) => escapeHtml(item));
}

function dedupeItems(items = []) {
    return [...new Set(items.filter(Boolean))];
}

function renderChecklistItems(items = []) {
    const safeItems = escapeItems(items);
    return `
        <div class="checklist">
            ${safeItems
                .map((item) => `<div class="checklist-item">${item}</div>`)
                .join("")}
        </div>
    `;
}

function renderFactEntries(entries = []) {
    return `
        <div class="fact-list">
            ${entries
                .filter((entry) => entry && entry.text)
                .map((entry) => `
                    <section class="fact-item">
                        ${entry.title ? `<h4>${escapeHtml(entry.title)}</h4>` : ""}
                        <p>${escapeHtml(entry.text)}</p>
                    </section>
                `)
                .join("")}
        </div>
    `;
}

function collectGuidance(section, field) {
    const type = getSectionType(section);
    const groupLabel = getGroupLabel(section);
    return dedupeItems([
        ...(DEFAULT_GUIDANCE[type]?.[field] || []),
        ...(GROUP_GUIDANCE[groupLabel]?.[field] || []),
        ...(SECTION_GUIDANCE[section.key]?.[field] || [])
    ]);
}

function getPurposeEntries(section) {
    const entries = [];
    const proceduralPurpose = getCardText(section, "為什麼要做");

    if (section.lead) {
        entries.push({ title: "這次檢查要回答的問題", text: section.lead });
    }

    if (proceduralPurpose) {
        entries.push({ title: "通常目的", text: proceduralPurpose });
    }

    if (!entries.length) {
        const type = getSectionType(section);
        const groupLabel = getGroupLabel(section);
        let defaultText = `${section.title} 通常是用來幫醫療團隊確認身體某個功能、病灶分布或治療適合性，真正的解讀仍要和病史、抽血與其他影像一起看。`;

        if (type === "therapy") {
            defaultText = `${section.title} 的重點通常不是只看能不能給藥，而是確認這種治療是否真的符合目前病程、器官功能與家庭照護條件。`;
        } else if (type === "pet") {
            defaultText = `${section.title} 多半是在看代謝、受體或血流等功能訊息，目的是幫醫療團隊更清楚判斷病灶分布、疾病型態或後續治療方向。`;
        } else if (groupLabel === "心臟 / 循環 / 淋巴") {
            defaultText = `${section.title} 通常是在幫醫療團隊看血流、回流、心肌功能或淋巴循環是否異常，並判斷這些變化和你的症狀是否對得上。`;
        } else if (groupLabel === "骨骼 / 腎臟 / 泌尿") {
            defaultText = `${section.title} 常是用來看骨骼代謝、分腎功能、排泄路徑或泌尿系統是否有功能性問題，和單純看解剖構造並不完全一樣。`;
        } else if (groupLabel === "消化 / 肝膽") {
            defaultText = `${section.title} 多半是在看食物、膽汁、出血或放射性藥物在消化系統中的動態分布，幫醫療團隊判斷問題發生在哪一段。`;
        } else if (groupLabel === "神經 / 肺 / 感染") {
            defaultText = `${section.title} 常是用來看腦部、肺部或感染發炎反應的功能表現，判斷目前症狀是否真的來自這個系統。`;
        }

        entries.push({ title: "這項安排通常在看什麼", text: defaultText });
    }

    return entries;
}

function getPreparationItems(section) {
    return dedupeItems([
        section.tellUs,
        getCardText(section, "檢查前"),
        ...collectGuidance(section, "prep")
    ]);
}

function getDayOfItems(section) {
    return dedupeItems([
        getCardText(section, "檢查中"),
        ...collectGuidance(section, "dayOf")
    ]);
}

function getCautionItems(section) {
    const items = [...collectGuidance(section, "caution")];
    if (hasProceduralCards(section) && getCardText(section, "檢查後")) {
        items.unshift("做完後的補水、排尿、活動限制與返家安排，要和當天實際使用的藥物一起看，不要只記住別人的經驗。");
    }
    return dedupeItems(items);
}

function getSafetyItems(section) {
    return dedupeItems([
        getCardText(section, "檢查後"),
        ...collectGuidance(section, "safety")
    ]);
}

function getContactItems(section) {
    return collectGuidance(section, "contact");
}

function getInsightEntries(section) {
    if (hasProceduralCards(section)) {
        return [];
    }

    return (section.cards || []).map((card) => ({
        title: card.title,
        text: card.text
    }));
}

function getInsightHeading(section) {
    return hasProceduralCards(section) ? "病人最常會被加強提醒的重點" : "這個檢查或治療最容易搞混的地方";
}

function getResolvedSourceKeys(section) {
    if (section.sourceKeys?.length) {
        return section.sourceKeys;
    }

    const type = getSectionType(section);
    const groupLabel = getGroupLabel(section);

    if (type === "therapy") {
        return ["taiwanNuclearMedicine", "radiationSafety"];
    }

    if (type === "pet") {
        return ["radiologyPet", "clevelandPet", "radiationSafety"];
    }

    if (groupLabel === "內分泌 / 甲狀腺") {
        return ["thyroidUptake", "radiationSafety"];
    }

    return ["radiopharmaceuticals", "radiationSafety"];
}

function sanitizeEvidenceText(text = "") {
    return text
        .replace(/^更新依據[:：]\s*/, "")
        .replace(/^整理依據[:：]\s*/, "")
        .replace(/^整理依據含\s*/, "");
}

function getTopicIntro(section) {
    if (getSectionType(section) === "therapy") {
        return `${section.title} 這一頁先整理治療目標、治療前要先說的事，以及返家後常見的生活安排。`;
    }

    if (getSectionType(section) === "pet") {
        return `${section.title} 這一頁先整理檢查主要在看什麼、到院前哪些情況要先告知，以及檢查前後常見安排。`;
    }

    return `${section.title} 這一頁主要整理用途、到院前要先說的事，以及多數人最常碰到的疑問。`;
}

function getTopicClosingNote(section) {
    if (getSectionType(section) === "therapy") {
        return "真正的劑量、住院與返家安排，會依病情、治療目的與院內規範調整。若家中有幼兒、孕婦，或需要你近距離照顧的家人，請務必在治療前就先提出。";
    }

    return "真正的禁食、喝水、等候與拍攝時間，可能因藥物、病情與醫院流程不同而調整。若通知單和別人的經驗不完全一樣，通常代表安排條件不同。";
}

function buildCategoryOverview() {
    return TOPIC_DATA.groups
        .map((group) => {
            const buttons = group.items
                .map((key) => {
                    const section = SECTION_DATA[key];
                    if (!section) {
                        return "";
                    }

                    return `<button class="inline-topic-button" data-target="${key}">${section.navLabel || section.title}</button>`;
                })
                .join("");

            return `
                <section class="overview-group">
                    <h4>${group.label}</h4>
                    <p>通知單上出現這一類名稱時，可以從這裡進入。</p>
                    <div class="topic-link-list">${buttons}</div>
                </section>
            `;
        })
        .join("");
}

function renderStartHere(section) {
    return `
        <article class="reader-page start-here-page">
        <section class="start-here-stage">
            <span class="start-here-glow start-here-glow--one" aria-hidden="true"></span>
            <span class="start-here-glow start-here-glow--two" aria-hidden="true"></span>
            <span class="start-here-arc" aria-hidden="true"></span>
            <div class="start-here-hero">
                <div class="start-here-copy">
                    <h2>${section.title}</h2>
                    <p class="start-here-prose">收到核醫檢查或治療通知時，心裡不安、反覆去想「是不是很嚴重」「我會不會準備錯」，都是很自然的反應。多數時候，醫療團隊安排這些檢查，是希望把身體目前的狀況看得更清楚，讓診斷不要只停留在猜測，也讓後續治療能更穩當地往前走。不同檢查確實常會需要一些準備，像是空腹、調整藥物、提早到院、安排行程，或留意返家後的飲水與生活事項；這些要求通常不是在增加你的負擔，而是在幫忙把結果做得更準確、把流程安排得更安全。如果你現在有點緊張，其實不用勉強自己一下子把所有事情都記住，先把通知單上的重點看清楚，再把懷孕、哺乳、血糖、藥物、怕密閉空間，或家裡需要照顧的人等情況提早說出來，醫療團隊多半都會陪著你把事情一件一件理順。</p>
                </div>
                <div class="start-here-visual" aria-hidden="true">
                    <div class="start-here-media">
                        <img src="assets/photos/start-here-waiting-room.webp" alt="" loading="eager">
                    </div>
                </div>
            </div>
        </section>
        </article>
    `;
}

function renderGeneralSection(section, key) {
    const { railItems, html: blockHtml } = renderIndexedBlocks(section.blocks, key);
    return `
        <article class="reader-page reader-page--indexed">
            <div class="reader-layout">
                ${renderReaderRail(section, railItems)}
                <div class="reader-layout-main">
                    <section class="hero-card reveal-block">
                        <h2>${section.title}</h2>
                        <p class="hero-subtitle">${section.subtitle}</p>
                    </section>
                    <section class="article-card">
                        <div class="article-body">
                            ${blockHtml}
                        </div>
                    </section>
                    ${renderSourceCards(getResolvedSourceKeys(section))}
                </div>
            </div>
        </article>
    `;
}

function buildTopicCards(cards = []) {
    if (!cards.length) {
        return `
            <section class="fact-item">
                <h4>這一頁先整理重點</h4>
                <p>如果通知單上寫的是這個名字，代表醫療團隊想用核醫方法回答某個特定問題。真正的細節安排仍要以通知單與院方說明為準。</p>
            </section>
        `;
    }

    return cards
        .map(
            (card) => `
                <section class="fact-item">
                    <h4>${escapeHtml(card.title || "")}</h4>
                    <p>${escapeHtml(card.text || "")}</p>
                </section>
            `
        )
        .join("");
}

function renderTopicSection(section, key) {
    const inlineGuideFigure = getInlineGuideFigureHTML(section.key);
    const insightEntries = getInsightEntries(section);
    const topicBlocks = [
        {
            title: "這次檢查或治療在看什麼",
            html: `<p class="topic-intro">${getTopicIntro(section)}</p>`
        },
        {
            title: "目的與通常用途",
            html: renderFactEntries(getPurposeEntries(section))
        },
        {
            title: "到院前 / 治療前要先準備",
            html: renderChecklistItems(getPreparationItems(section))
        },
        {
            title: "當天流程",
            html: renderChecklistItems(getDayOfItems(section))
        },
        {
            title: "注意事項與常見不適",
            html: renderChecklistItems(getCautionItems(section))
        },
        {
            title: "輻射防護與返家",
            html: renderChecklistItems(getSafetyItems(section))
        },
        {
            title: "什麼情況要回頭聯絡",
            html: renderChecklistItems(getContactItems(section))
        }
    ];

    if (insightEntries.length) {
        topicBlocks.push({
            title: getInsightHeading(section),
            html: renderFactEntries(insightEntries)
        });
    }

    (section.supplements || []).forEach((supplement) => {
        topicBlocks.push({
            title: supplement.title,
            html: supplement.html
        });
    });

    if (section.evidenceText) {
        topicBlocks.push({
            title: "補充說明",
            html: `<div class="note-strip">${escapeHtml(sanitizeEvidenceText(section.evidenceText))}</div>`
        });
    }

    const { railItems, html: blockHtml } = renderIndexedBlocks(topicBlocks, key);
    return `
        <article class="reader-page reader-page--indexed">
            <div class="reader-layout">
                ${renderReaderRail(section, railItems)}
                <div class="reader-layout-main">
                    <section class="hero-card reveal-block">
                        <h2>${section.title}</h2>
                        <p class="hero-subtitle">${section.subtitle}</p>
                    </section>

                    ${inlineGuideFigure}

                    <section class="article-card">
                        <div class="article-body">
                            ${blockHtml}
                            <p class="topic-note">${getTopicClosingNote(section)}</p>
                        </div>
                    </section>
                    ${renderSourceCards(getResolvedSourceKeys(section))}
                </div>
            </div>
        </article>
    `;
}

let motionInitialized = false;
let pageMotionTweens = [];

function clearPageAnimations() {
    if (!window.ScrollTrigger) {
        pageMotionTweens.forEach((tween) => tween.kill());
        pageMotionTweens = [];
        return;
    }

    window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    pageMotionTweens.forEach((tween) => tween.kill());
    pageMotionTweens = [];
}

function initAmbientMotion() {
    if (motionInitialized || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    motionInitialized = true;
    gsap.to(".orbit-one", { x: 28, y: -18, rotate: 12, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".orbit-two", { x: -24, y: 20, rotate: -10, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".line-one", { x: 18, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".line-two", { x: -16, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
}

function initPageAnimations() {
    if (!window.gsap || !window.ScrollTrigger) {
        return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progressBar = document.querySelector("#page-progress-bar");
    const page = document.querySelector(".reader-page");

    if (!page) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ scroller: contentScroll });

    if (reduceMotion) {
        gsap.set(".reveal-block", { clearProps: "all" });
        if (progressBar) {
            progressBar.style.transform = "scaleX(0)";
        }
        return;
    }

    const introTimeline = gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-card > *", { y: 26, autoAlpha: 0, stagger: 0.08, duration: 0.6 });

    if (document.querySelector(".inline-guide-figure")) {
        introTimeline.from(".inline-guide-figure", { y: 24, autoAlpha: 0, duration: 0.55 }, "-=0.28");
    }

    ScrollTrigger.batch(".article-block.reveal-block", {
        start: "top 86%",
        once: true,
        onEnter: (batch) =>
            gsap.fromTo(
                batch,
                { y: 26, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.62, ease: "power2.out", stagger: 0.08, clearProps: "transform" }
            )
    });

    gsap.utils.toArray(".article-block").forEach((block) => {
        ScrollTrigger.create({
            trigger: block,
            start: "top 42%",
            end: "bottom 45%",
            onToggle: (self) => {
                block.classList.toggle("is-active", self.isActive);
                if (self.isActive && block.id) {
                    setActiveReaderRail(block.id);
                }
            }
        });
    });

    if (progressBar) {
        gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });
        ScrollTrigger.create({
            trigger: page,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                gsap.to(progressBar, {
                    scaleX: self.progress,
                    duration: 0.12,
                    ease: "none",
                    overwrite: "auto"
                });
            }
        });
    }

    initStartHereAnimations();
    initRadiationAnimations();

    requestAnimationFrame(() => ScrollTrigger.refresh());
}

function trackPageTween(tween) {
    pageMotionTweens.push(tween);
    return tween;
}

function initStartHereAnimations() {
    if (!window.gsap || !window.ScrollTrigger || !document.querySelector(".start-here-page")) {
        return;
    }

    const heroImage = document.querySelector(".start-here-media img");
    const heroGlows = gsap.utils.toArray(".start-here-glow, .start-here-arc");

    trackPageTween(
        gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .from(".start-here-copy > *", { y: 32, autoAlpha: 0, stagger: 0.08, duration: 0.72 })
            .from(".start-here-glow, .start-here-arc", { scale: 0.86, autoAlpha: 0, stagger: 0.08, duration: 0.8 }, "-=0.42")
            .from(".start-here-media", { y: 28, autoAlpha: 0, duration: 0.68 }, "-=0.56")
    );

    if (heroImage && window.innerWidth > 900) {
        trackPageTween(
            gsap.fromTo(
                heroImage,
                { scale: 1.08, yPercent: -2 },
                {
                    scale: 1,
                    yPercent: 4,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".start-here-stage",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1
                    }
                }
            )
        );
    }

    if (window.innerWidth > 900) {
        heroGlows.forEach((panel, index) => {
            trackPageTween(
                gsap.to(panel, {
                    y: index === 0 ? -18 : 14,
                    x: index === 1 ? 10 : -8,
                    duration: 8 + index,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                })
            );
        });
    }
}

function initRadiationAnimations() {
    if (!window.gsap || !window.ScrollTrigger) {
        return;
    }

    const radiationPhotos = gsap.utils.toArray(".radiation-photo-frame img");
    const doseChips = gsap.utils.toArray(".dose-chip");

    if (radiationPhotos.length) {
        radiationPhotos.forEach((photo) => {
            const frame = photo.closest(".radiation-photo-frame");
            if (!frame) {
                return;
            }

            gsap.fromTo(
                photo,
                { scale: 1.08, yPercent: -4 },
                {
                    scale: 1,
                    yPercent: 5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: frame,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                }
            );
        });
    }

    if (doseChips.length) {
        gsap.set(doseChips, { x: 18, autoAlpha: 0 });
        ScrollTrigger.batch(doseChips, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
                gsap.fromTo(
                    batch,
                    { x: 18, autoAlpha: 0 },
                    { x: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out", stagger: 0.08, clearProps: "transform" }
                )
        });
    }
}

function renderSection(key) {
    const section = SECTION_DATA[key];
    if (!section) {
        contentDisplay.innerHTML = `
            <div class="empty-state">
                找不到這個主題。你可以從左側重新選一個主題，或按 <kbd>/</kbd> 快速切換。
            </div>
        `;
        return;
    }

    clearPageAnimations();
    setActiveNav(key);
    if (key === "StartHere") {
        contentDisplay.innerHTML = renderStartHere(section);
    } else if (GENERAL_SECTIONS[key]) {
        contentDisplay.innerHTML = renderGeneralSection(section, key);
    } else {
        contentDisplay.innerHTML = renderTopicSection(section, key);
    }

    bindInlineButtons();
    bindReaderRail();
    closeSidebar();
    contentScroll.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
        contentScroll.scrollTop = 0;
        window.scrollTo(0, 0);
        initPageAnimations();
    });
}

function bindInlineButtons() {
    document.querySelectorAll("[data-target]").forEach((button) => {
        button.addEventListener("click", () => {
            renderSection(button.dataset.target);
        });
    });
}

function filterNavItems(query) {
    const normalizedQuery = query.trim().toLowerCase();
    let firstMatch = null;

    navItems.forEach((item) => {
        const isMatch = item.textContent.toLowerCase().includes(normalizedQuery);
        item.classList.toggle("is-hidden", Boolean(normalizedQuery) && !isMatch);

        if (!firstMatch && isMatch) {
            firstMatch = item;
        }
    });

    return firstMatch;
}

function bindEvents() {
    sidebarNav.addEventListener("click", (event) => {
        const button = event.target.closest(".nav-item");
        if (!button) {
            return;
        }

        renderSection(button.dataset.key);
    });

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            filterNavItems(searchInput.value);
        });

        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const firstMatch = filterNavItems(searchInput.value);
                if (firstMatch) {
                    renderSection(firstMatch.dataset.key);
                }
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (searchInput && event.key === "/" && document.activeElement !== searchInput) {
            event.preventDefault();
            searchInput.focus();
        }
    });

    mobileMenuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("is-open");
        sidebarOverlay.classList.toggle("is-open");
    });

    sidebarOverlay.addEventListener("click", closeSidebar);
}

renderNav();
bindEvents();
initAmbientMotion();
renderSection("StartHere");

