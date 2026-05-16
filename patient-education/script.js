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
    }
};

const TOPIC_DATA = window.PATIENT_TOPIC_DATA || { groups: [], sections: {} };

const startHereGuideImage = {
    src: 'assets/guide/start-here-guide.png',
    alt: '第一次收到核醫通知入口圖解，說明先告知懷孕哺乳等重要狀況，再找到自己的檢查名稱，最後記住當天與檢後提醒。'
};

const PATIENT_INLINE_GUIDE_IMAGES = {
    PET: {
        src: 'assets/guide/fdg-pet-indications.png',
        alt: 'FDG PET/CT 適應症圖解，說明初始分期、治療反應評估、復發或再分期，以及不明原發灶或全身活躍病灶搜尋。'
    },
    BrainPET: {
        src: 'assets/guide/brain-fdg-pet-indications.png',
        alt: 'Brain FDG PET 適應症圖解，說明失智症鑑別、癲癇術前定位、腦腫瘤治療後評估，以及腦炎或特殊神經代謝疾病評估。'
    },
    POSLUMA: {
        src: 'assets/guide/psma-pet-indications.png',
        alt: 'PSMA PET 適應症圖解，說明初始高風險分期、生化復發、治療規劃，以及標靶治療前的 PSMA 表現評估。'
    },
    Ga68DOTATOC: {
        src: 'assets/guide/ga68-dotatoc-indications.png',
        alt: 'Ga-68 DOTATOC PET 適應症圖解，說明神經內分泌腫瘤定位、初始分期、PRRT 前受體評估，以及復發或追蹤。'
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
        alt: 'Cardiac PET 適應症圖解，說明冠心病灌流評估、心肌存活性、複雜或高 BMI 個案的更精準定量，以及特定心臟發炎或浸潤問題。'
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
        title: "第一次收到核醫通知，先看這裡",
        navLabel: "第一次來，先看這裡",
        eyebrow: "先知道要看哪裡",
        subtitle: "如果你現在只想先知道自己要從哪裡開始，請照下面順序往下看。",
        sourceKeys: ["radiopharmaceuticals", "radiationSafety"]
    },
    AboutNM: {
        title: "核醫是什麼",
        navLabel: "核醫是什麼",
        eyebrow: "先把陌生感放下來",
        subtitle: "你不需要先懂所有名詞，只要先知道核醫大多在看什麼。",
        blocks: [
            {
                title: "先用白話說",
                html: `
                    <p>如果把 CT、MRI 比喻成看「身體長得怎麼樣」，那很多核醫檢查更像是在看「身體現在怎麼工作」。醫療團隊會用少量放射性藥物作為示蹤，再看它在身體裡的分布。</p>
                    <p>很多人一看到「放射」兩個字就先緊張，其實你最需要先知道的是：這項檢查想幫醫師回答什麼問題，而不是先把所有專有名詞背起來。</p>
                `
            },
            {
                title: "診斷和治療差在哪裡",
                html: `
                    <div class="table-card">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>類型</th>
                                    <th>通常在做什麼</th>
                                    <th>你會經歷什麼</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>診斷性核醫</td>
                                    <td>幫助醫師看功能、找病灶、判斷病情</td>
                                    <td>多半是注射、吞服或吸入少量放射性藥物後等待，再進行掃描，通常當天回家。</td>
                                </tr>
                                <tr>
                                    <td>治療性核醫</td>
                                    <td>把藥物送到目標組織，直接治療病灶</td>
                                    <td>返家安排、家人接觸與生活限制通常會更完整，也會有更仔細的衛教。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            }
        ],
        sourceKeys: ["radiopharmaceuticals", "radiationSafety"]
    },
    VisitGuide: {
        title: "來之前先看",
        navLabel: "來之前先看",
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
        subtitle: "如果你在意自己、孩子或家人的安全，先看這一頁最實用。",
        blocks: [
            {
                title: "先記住這些就好",
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
        label: "先從這裡開始",
        items: ["StartHere", "VisitGuide", "AboutNM", "AfterScan", "SafetySupport", "Evidence"]
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

function getStartHereGuideFigureHTML() {
    return `
        <figure class="inline-guide-figure start-here-guide-figure">
            <img src="${startHereGuideImage.src}" alt="${escapeHtml(startHereGuideImage.alt)}" loading="lazy" decoding="async">
        </figure>
    `;
}

function renderSourceCards(sourceKeys) {
    if (!sourceKeys || sourceKeys.length === 0) {
        return "";
    }

    return `
        <section class="article-card">
            <div class="article-body">
                <section class="article-block">
                    <h3 class="block-title">主要參考來源</h3>
                    <div class="source-grid">
                        ${sourceKeys
                            .map((key) => SOURCE_LIBRARY[key])
                            .filter(Boolean)
                            .map((source) => `
                                <article class="source-card">
                                    <h4>${source.title}</h4>
                                    <p><strong>${source.organization}</strong></p>
                                    <p>${source.summary}</p>
                                    <a href="${source.url}" target="_blank" rel="noopener noreferrer">查看原始資料 ↗</a>
                                </article>
                            `)
                            .join("")}
                    </div>
                </section>
            </div>
        </section>
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

function getTopicIntro(section) {
    if (section.eyebrow.includes("核醫治療")) {
        return `看到「${section.title}」這個治療名稱先緊張一下很正常。你現在不用先把所有細節都背起來，先知道它想處理什麼、哪些事要提早說、回家後怎麼保護自己和家人，就已經很重要。`;
    }

    if (section.eyebrow.includes("PET")) {
        return `如果你第一次看到「${section.title}」就覺得名字很長、很難懂，不是你的問題。先抓住這項檢查大多在看什麼、到院前要先說什麼，就夠用了。`;
    }

    return `如果你第一次看到「${section.title}」這個名稱，覺得陌生甚至有點緊張，真的很正常。這一頁先幫你把它翻成比較好懂的方式。`;
}

function getTopicClosingNote(section) {
    if (section.eyebrow.includes("核醫治療")) {
        return "真正的劑量、住院與返家安排，會依你的病情、治療目的與院內規範調整。若你家中有幼兒、孕婦、或需要你近距離照顧的家人，請務必在治療前就先提出。";
    }

    return "真正的禁食、喝水、等候與拍攝時間，可能因藥物、病情與醫院流程不同而調整。若你的通知單和別人的經驗不完全一樣，不一定表示誰做錯。";
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
                <div class="overview-card">
                    <h4>${group.label}</h4>
                    <p>如果你的通知單上看到這一類名稱，從這張卡片往下點就可以。</p>
                    <p class="overview-meta">共 ${group.items.length} 個單元</p>
                    <div class="topic-link-list">${buttons}</div>
                </div>
            `;
        })
        .join("");
}

function renderStartHere(section) {
    return `
        <section class="hero-card">
            <span class="hero-kicker">${section.eyebrow}</span>
            <h2>${section.title}</h2>
            <p class="hero-subtitle">${section.subtitle}</p>
        </section>

        ${getStartHereGuideFigureHTML()}

        <section class="article-card">
            <div class="article-body">
                <section class="article-block">
                    <h3 class="block-title">先照這個順序看</h3>
                    <div class="step-grid">
                        <div class="step-card">
                            <strong>1. 先看「來之前先看」</strong>
                            <p>先把懷孕、哺乳、藥物、顯影檢查、糖尿病、怕密閉空間這些需要早說的事釐清。</p>
                        </div>
                        <div class="step-card">
                            <strong>2. 再找你的檢查或治療名稱</strong>
                            <p>左側檢查與治療單元已獨立整理完成，名稱和人員版對齊，方便你直接對照通知單。</p>
                        </div>
                        <div class="step-card">
                            <strong>3. 最後看「做完之後怎麼辦」</strong>
                            <p>把補水、排尿、哺乳安排與何時該回頭聯絡這些事先留下來。</p>
                        </div>
                    </div>
                </section>

                <section class="article-block">
                    <h3 class="block-title">先把最重要的事記住</h3>
                    <div class="alerts-grid">
                        <div class="tone-box tone-critical">
                            <h4>懷孕、可能懷孕、正在哺乳</h4>
                            <p>請在排檢或到院前就主動告知。不同放射性藥物的限制不一樣，越早說越安全。</p>
                        </div>
                        <div class="tone-box tone-caution">
                            <h4>最近做過顯影檢查或正在吃含碘產品</h4>
                            <p>尤其是甲狀腺相關檢查與治療，這些資訊會直接影響安排。</p>
                        </div>
                        <div class="tone-box tone-guidance">
                            <h4>你不需要先變成專家</h4>
                            <p>先知道這次想回答什麼問題、自己該先說什麼、做完後怎麼照顧自己，就已經很夠用了。</p>
                        </div>
                    </div>
                </section>

                <section class="article-block">
                    <h3 class="block-title">如果通知單上寫的是這些</h3>
                    <div class="category-overview-grid">${buildCategoryOverview()}</div>
                </section>
            </div>
        </section>

        ${renderSourceCards(section.sourceKeys)}
    `;
}

function renderGeneralSection(section) {
    return `
        <section class="hero-card">
            <span class="hero-kicker">${section.eyebrow}</span>
            <h2>${section.title}</h2>
            <p class="hero-subtitle">${section.subtitle}</p>
        </section>
        <section class="article-card">
            <div class="article-body">
                ${section.blocks
                    .map(
                        (block) => `
                            <section class="article-block">
                                <h3 class="block-title">${block.title}</h3>
                                ${block.html}
                            </section>
                        `
                    )
                    .join("")}
            </div>
        </section>
        ${renderSourceCards(section.sourceKeys)}
    `;
}

function buildTopicCards(cards = []) {
    if (!cards.length) {
        return `
            <div class="info-card">
                <h4>這一頁先幫你抓方向</h4>
                <p>如果通知單上寫的是這個名字，代表醫療團隊想用核醫方法回答某個特定問題。真正的細節安排仍要以通知單與院方說明為準。</p>
            </div>
        `;
    }

    return cards
        .map(
            (card) => `
                <div class="info-card">
                    <h4>${escapeHtml(card.title || "")}</h4>
                    <p>${escapeHtml(card.text || "")}</p>
                </div>
            `
        )
        .join("");
}

function buildSupplementSections(supplements = []) {
    return supplements
        .map(
            (supplement) => `
                <section class="article-block">
                    <h3 class="block-title">${supplement.title}</h3>
                    ${supplement.html}
                </section>
            `
        )
        .join("");
}

function renderTopicSection(section) {
    const inlineGuideFigure = getInlineGuideFigureHTML(section.key);
    return `
        <section class="hero-card">
            <span class="hero-kicker">${section.eyebrow}</span>
            <h2>${section.title}</h2>
            <p class="hero-subtitle">${section.subtitle}</p>
        </section>

        ${inlineGuideFigure}

        <section class="article-card">
            <div class="article-body">
                <section class="article-block">
                    <h3 class="block-title">先把這個名字翻成比較好懂的方式</h3>
                    <p class="topic-intro">${getTopicIntro(section)}</p>
                    ${section.lead ? `<p class="topic-intro">${escapeHtml(section.lead)}</p>` : ""}
                </section>

                <section class="article-block">
                    <h3 class="block-title">多數人最常想知道的事</h3>
                    <div class="card-grid">${buildTopicCards(section.cards)}</div>
                </section>

                ${section.tellUs ? `
                    <section class="article-block">
                        <h3 class="block-title">到院前先說，通常會比較安心</h3>
                        <div class="tone-box tone-caution">
                            <h4>這些事越早講越好</h4>
                            <p>${escapeHtml(section.tellUs)}</p>
                        </div>
                    </section>
                ` : ""}

                ${buildSupplementSections(section.supplements || [])}

                <p class="topic-note">${getTopicClosingNote(section)}</p>
            </div>
        </section>

        ${section.evidenceText ? `
            <section class="article-card">
                <div class="article-body">
                    <section class="article-block">
                        <h3 class="block-title">這一頁的整理依據</h3>
                        <div class="note-strip">${escapeHtml(section.evidenceText)}</div>
                    </section>
                </div>
            </section>
        ` : ""}
    `;
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

    setActiveNav(key);
    if (key === "StartHere") {
        contentDisplay.innerHTML = renderStartHere(section);
    } else if (GENERAL_SECTIONS[key]) {
        contentDisplay.innerHTML = renderGeneralSection(section);
    } else {
        contentDisplay.innerHTML = renderTopicSection(section);
    }

    bindInlineButtons();
    closeSidebar();
    contentScroll.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
        contentScroll.scrollTop = 0;
        window.scrollTo(0, 0);
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

    document.addEventListener("keydown", (event) => {
        if (event.key === "/" && document.activeElement !== searchInput) {
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
renderSection("StartHere");

