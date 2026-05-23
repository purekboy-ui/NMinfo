window.PATIENT_TOPIC_DATA = {
  "groups": [
    {
      "label": "正子電腦斷層 / 正子造影",
      "items": [
        "FDGPETCT",
        "PSMAPETCT",
        "OtherPET"
      ]
    },
    {
      "label": "內分泌 / 甲狀腺",
      "items": [
        "Thyroid",
        "Parathyroid",
        "MIBG",
        "NP59",
        "I131WBS",
        "Salivary"
      ]
    },
    {
      "label": "心臟 / 循環 / 淋巴",
      "items": [
        "MPI_Tc99m",
        "MPI_Tl201",
        "CardiacAmyloid",
        "MUGA",
        "Venography",
        "Lymphedema",
        "SLN"
      ]
    },
    {
      "label": "消化 / 肝膽",
      "items": [
        "Gastric",
        "GIBleed",
        "Meckel",
        "Liver",
        "LiverHemangioma",
        "Biliary",
        "Salivary2"
      ]
    },
    {
      "label": "骨骼 / 腎臟 / 泌尿",
      "items": [
        "Bone",
        "DMSA",
        "DTPA",
        "MAG3",
        "Cystography",
        "Scrotal"
      ]
    },
    {
      "label": "神經 / 肺 / 感染",
      "items": [
        "Brain",
        "TRODAT",
        "Cisternography",
        "Lung",
        "LungVQ",
        "Ga67",
        "WBCScan"
      ]
    },
    {
      "label": "核醫治療",
      "items": [
        "I131",
        "I131MIBG",
        "Sm153",
        "Ra223",
        "Lu177PSMA",
        "Lu177DOTATATE",
        "Y90SIRT"
      ]
    }
  ],
  "sections": {
    "FDGPETCT": {
      "key": "FDGPETCT",
      "title": "FDG 正子電腦斷層",
      "navLabel": "FDG 正子電腦斷層",
      "eyebrow": "正子電腦斷層",
      "subtitle": "這是臨床上最常見的正子檢查之一，常用來看癌症分布、治療反應、復發追蹤，也可能用在感染或發炎評估。",
      "lead": "FDG 可以把身體裡葡萄糖利用較旺盛的地方顯示出來，所以這項檢查看的不只是有沒有腫塊，還在看病灶現在有多活躍。也因為如此，血糖、肌肉活動、發炎與感染都可能一起影響影像。",
      "tellUs": "糖尿病、胰島素或降血糖藥物使用、近期發燒或感染、剛做完劇烈運動、怕密閉、無法久躺、排尿困難、懷孕或哺乳，都請在到院前先說。",
      "evidenceText": "糖尿病病人、住院病人、兒童，或最近剛接受治療的人，準備方式可能和一般門診病人不同；若通知單和別人的經驗不一樣，通常是因為醫療情境不同。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "常見用途包括癌症初次分期、治療反應評估、疑似復發追蹤，也可能協助評估感染、發炎或找出原因不明的病灶。"
        },
        {
          "title": "檢查前",
          "text": "多數情況需要空腹至少 4 到 6 小時，只能喝白開水；檢查前一天避免劇烈運動，當天保持身體溫暖與安靜休息。若有糖尿病，通常需要另外安排飲食與用藥時程。"
        },
        {
          "title": "檢查中",
          "text": "到院後通常會先確認血糖、打藥，再安靜休息約 45 到 60 分鐘，之後進行掃描約 20 到 30 分鐘。等待期間盡量少走動、少說話、不要一直滑手機，目的是避免非必要肌肉與腦部攝取。"
        },
        {
          "title": "檢查後",
          "text": "多數人做完即可返家，通常可以恢復飲食與原本藥物。請多喝水、多排尿，若院方有另外交代哺乳暫停或短時間避免和嬰幼兒長時間緊密接觸，請依當次指示執行。"
        }
      ],
      "supplements": [
        {
          "title": "哪些情況最容易影響 FDG 影像品質",
          "html": `
            <div class="fact-list">
              <section class="fact-item">
                <h4>血糖太高</h4>
                <p>FDG 和葡萄糖會互相競爭。血糖太高時，病灶和正常組織的對比可能變差，檢查也可能被迫延後。</p>
              </section>
              <section class="fact-item">
                <h4>檢查前一天劇烈運動</h4>
                <p>肌肉會因活動後代謝增加而攝取 FDG，影像上可能出現不必要的亮點，增加判讀困難。</p>
              </section>
              <section class="fact-item">
                <h4>等待期間一直走動、講話或受冷發抖</h4>
                <p>這些都會讓肌肉、聲帶或褐色脂肪攝取增加，所以注射後那段安靜休息不是形式，而是影像品質的一部分。</p>
              </section>
              <section class="fact-item">
                <h4>感染或發炎</h4>
                <p>FDG 亮起來不一定代表癌症，感染與發炎也會攝取，所以判讀一定要和病史、抽血與其他影像一起看。</p>
              </section>
            </div>
          `
        },
        {
          "title": "很多病人做完後最常問的事",
          "html": `
            <div class="checklist">
              <div class="checklist-item">
                <strong>做完能不能吃東西、吃藥？</strong>
                大多數情況可以，只要這次通知單沒有另外限制，通常做完就能恢復平常飲食與用藥。
              </div>
              <div class="checklist-item">
                <strong>會不會對家人有影響？</strong>
                診斷性 FDG 正子使用的放射性藥物量相對少，多數做完即可正常返家；若有哺乳或嬰幼兒接觸的特別限制，院方會個別提醒。
              </div>
              <div class="checklist-item">
                <strong>什麼時候知道結果？</strong>
                正式報告通常仍要由核醫科判讀後回原主治醫師整合說明，不一定會在現場立刻完整解釋。
              </div>
            </div>
          `
        }
      ]
    },
    "PSMAPETCT": {
      "key": "PSMAPETCT",
      "title": "PSMA 正子電腦斷層",
      "navLabel": "PSMA 正子電腦斷層",
      "eyebrow": "正子電腦斷層",
      "subtitle": "這項檢查主要用在前列腺癌，幫助醫療團隊更清楚找出病灶分布、復發位置，以及後續治療規劃。",
      "lead": "PSMA 正子不是在看一般葡萄糖代謝，而是在看前列腺癌細胞表面的 PSMA 表現，因此它和 FDG 正子看到的是不同訊息。對病人來說，最重要的不是去背藥名，而是知道這張影像常常直接影響下一步治療怎麼選。",
      "tellUs": "是否有排尿困難、導尿、腎功能異常、近期泌尿道感染、無法平躺、怕密閉、懷孕或哺乳，以及最近接受過哪些前列腺癌治療，都請先告知。",
      "evidenceText": "不同醫院對禁食、喝水與排尿安排可能略有不同；真正需要遵守的是這次通知單上的規定，而不是其他人的經驗。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "常見用途包括前列腺癌初次分期、生化復發時找病灶位置、評估是否有遠端轉移，以及規劃放療、手術或核醫治療。"
        },
        {
          "title": "檢查前",
          "text": "很多情況不需要像 FDG 正子那樣長時間空腹，但通常會鼓勵補充水分，並依照通知單處理排尿或其他特殊準備。平常藥物是否照常服用，請依醫師或安排單位指示。"
        },
        {
          "title": "檢查中",
          "text": "通常會先注射藥物，等待約 45 到 60 分鐘後開始掃描。等待期間可能會請你喝水，並在正式拍攝前先排尿，以減少骨盆區背景干擾。"
        },
        {
          "title": "檢查後",
          "text": "大多數人做完即可返家，建議當天多喝水、多排尿。若有短暫疲倦、頭痛或味覺改變，多半先觀察即可；若症狀明顯或持續，再回頭聯絡安排單位。"
        }
      ],
      "supplements": [
        {
          "title": "這項檢查最常在哪些情況派上用場",
          "html": `
            <div class="fact-list">
              <section class="fact-item">
                <h4>初次分期</h4>
                <p>當病人屬於較高風險族群時，PSMA 正子可以幫助確認病灶是不是已經超出前列腺本身。</p>
              </section>
              <section class="fact-item">
                <h4>PSA 上升但傳統影像不清楚</h4>
                <p>這是臨床上常見情境之一。PSMA 正子能幫忙找出生化復發可能藏在哪裡，讓後續治療更精準。</p>
              </section>
              <section class="fact-item">
                <h4>後續治療規劃</h4>
                <p>對部分病人來說，這張影像不只是「找到病灶」，還直接影響放療範圍、手術策略，甚至是否考慮 Lu-177 PSMA 類治療。</p>
              </section>
            </div>
          `
        },
        {
          "title": "病人最常搞混的事",
          "html": `
            <div class="checklist">
              <div class="checklist-item">
                <strong>PSMA 正子不是抽血 PSA</strong>
                一個是血液指標，一個是影像檢查，兩者會互相參考，但不是同一件事。
              </div>
              <div class="checklist-item">
                <strong>不是每個亮點都等於一定要治療</strong>
                影像結果仍要和病程、症狀、抽血及其他治療選項一起討論，不能只看有沒有亮。
              </div>
              <div class="checklist-item">
                <strong>看到很亮，也不代表一定適合核醫治療</strong>
                是否適合 Lu-177 類治療，還要看整體病灶分布、器官功能與治療目標，而不是單靠一個亮點決定。
              </div>
            </div>
          `
        }
      ]
    },
    "OtherPET": {
      "key": "OtherPET",
      "title": "其他正子造影",
      "navLabel": "其他正子造影",
      "eyebrow": "正子造影",
      "subtitle": "這一頁整合較少見但臨床上很重要的正子造影，包含神經內分泌腫瘤、失智相關、骨骼與心臟正子檢查。",
      "lead": "不是所有正子造影都用來看癌症分期。對有些病人來說，正子造影是在看受體有沒有保留、腦部是不是有特定病理訊號、骨骼變化夠不夠敏感，或心肌血流是否真的有問題。這一群檢查差異很大，所以通知單上的準備事項一定比別人的經驗更重要。",
      "tellUs": "你這次到底是哪一種正子造影、是否需禁食、能不能喝咖啡、最近是否打過長效針劑、是否有糖尿病、心臟藥物調整、懷孕或哺乳，這些都要依實際檢查種類逐項確認。",
      "evidenceText": "這一群檢查差異很大：有些需要空腹，有些不需要；有些在意咖啡因，有些在意長效藥物注射時間。最重要的仍是你手上的通知單。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "這一類正子造影通常是在傳統影像不夠回答問題時，進一步看受體表現、腦部代謝或病理線索、骨轉移敏感度，或心肌整體血流與微血管功能。"
        },
        {
          "title": "檢查前",
          "text": "先弄清楚是哪一種造影劑，再依通知單準備。部分檢查需要空腹、部分要避免咖啡因、部分要注意長效藥物施打時間，也有些幾乎不需禁食。"
        },
        {
          "title": "檢查中",
          "text": "大多數流程都包含注射、等待一段時間、再進行掃描；但等待時間、是否要先排尿、是否需要壓力試驗或特殊環境控制，會依檢查種類不同。"
        },
        {
          "title": "檢查後",
          "text": "多數情況可以直接返家，通常會建議多喝水、多排尿。若有哺乳、心臟藥物恢復時點、或需要短時間觀察的不適，院方會另外交代。"
        }
      ],
      "supplements": [
        {
          "title": "神經內分泌腫瘤正子造影",
          "html": `
            <div class="fact-list">
              <section class="fact-item">
                <h4>常見藥物：Ga-68 DOTATATE / DOTATOC</h4>
                <p>這類檢查主要看腫瘤表面有沒有保留 somatostatin receptor。它不只是幫忙找病灶，也常在評估後續是否可能接 PRRT 治療。</p>
              </section>
              <section class="fact-item">
                <h4>長效針劑時程很重要</h4>
                <p>若最近剛打過長效體抑素類似物，常需要先和醫師確認是否會影響排程。不要等到當天才想起來。</p>
              </section>
              <section class="fact-item">
                <h4>影像會有正常生理攝取</h4>
                <p>脾臟、肝臟、腎臟等部位本來就可能有生理攝取，所以報告一定要由專業醫師整體解讀。</p>
              </section>
            </div>
          `
        },
        {
          "title": "失智相關正子造影",
          "html": `
            <div class="fact-list">
              <section class="fact-item">
                <h4>腦部 FDG 正子</h4>
                <p>看的是腦區代謝分布模式。很多時候是在幫助醫師分辨失智症型態、癲癇術前定位，或某些特殊神經疾病。</p>
              </section>
              <section class="fact-item">
                <h4>Amyloid 正子造影</h4>
                <p>看的是腦內有沒有類澱粉沉積。它可以提供重要線索，但陽性不等於所有記憶問題都由阿茲海默病理造成。</p>
              </section>
              <section class="fact-item">
                <h4>環境控制比很多人想像中更重要</h4>
                <p>對腦部正子來說，注射前後安靜、少刺激、少交談，都是影像品質的一部分。</p>
              </section>
            </div>
          `
        },
        {
          "title": "骨骼與心臟正子造影",
          "html": `
            <div class="fact-list">
              <section class="fact-item">
                <h4>F-18 NaF 正子造影</h4>
                <p>對骨轉移與骨代謝變化很敏感，常比傳統骨掃描更早看到異常；但退化性病變也可能攝取，所以亮不一定代表轉移。</p>
              </section>
              <section class="fact-item">
                <h4>心臟正子造影</h4>
                <p>常用來看心肌血流、微血管功能或部分發炎問題。和一般正子很不同的是，它常會牽涉壓力試驗與咖啡因限制。</p>
              </section>
              <section class="fact-item">
                <h4>喝水、排尿與咖啡因限制常是關鍵</h4>
                <p>骨骼正子常重視補水與排尿；心臟正子則常重視咖啡因與部分心臟藥物。看到別人說「不用空腹」或「不用停藥」時，不能直接套用。</p>
              </section>
            </div>
          `
        },
        {
          "title": "如果你不確定自己是哪一種正子造影，先這樣做",
          "html": `
            <div class="checklist">
              <div class="checklist-item">
                <strong>先看通知單上藥物或檢查全名</strong>
                例如 FDG、PSMA、DOTATATE、Amyloid、NaF、心臟正子，看到的名稱不一樣，準備事項通常也不同。
              </div>
              <div class="checklist-item">
                <strong>直接打回原安排單位確認</strong>
                問清楚要不要空腹、能不能喝咖啡、平常藥物要不要照吃、到院前是否要先排尿或補水。
              </div>
              <div class="checklist-item">
                <strong>不要用別人的正子經驗替自己做決定</strong>
                尤其是失智、心臟、神經內分泌腫瘤與骨骼正子，差異非常大。
              </div>
            </div>
          `
        }
      ]
    },
    "PET": {
      "key": "PET",
      "title": "FDG PET/CT (腫瘤)",
      "navLabel": "FDG PET/CT (腫瘤)",
      "eyebrow": "正子影像 PET",
      "subtitle": "FDG PET/CT (腫瘤) 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "",
      "evidenceText": "更新依據：Cleveland Clinic PET scan patient education（2026）與近期 PET 品質研究。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "常用於癌症分期、療效評估、復發追蹤，也可能用在感染或發炎評估。"
        },
        {
          "title": "檢查前",
          "text": "通常空腹至少 6 小時，只喝水；糖尿病與胰島素使用需事前調整。"
        },
        {
          "title": "檢查中",
          "text": "打藥後多半需要安靜休息約 60 分鐘，接著拍攝約 20 到 30 分鐘。"
        },
        {
          "title": "檢查後",
          "text": "多喝水、多排尿；若有泌尿系統問題或無法排尿，應提前讓工作人員知道。"
        }
      ],
      "supplements": []
    },
    "BrainPET": {
      "key": "BrainPET",
      "title": "FDG PET Brain (失智)",
      "navLabel": "FDG PET Brain (失智)",
      "eyebrow": "正子影像 PET",
      "subtitle": "FDG PET Brain (失智) 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "腦部 FDG PET 很少靠單一亮點說故事。它更像在看大腦不同區域之間是否失去原本的協調節奏，失智、癲癇與腦炎的差別，常藏在模式而不是某一顆點。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "注射環境就是影像條件",
          "text": "安靜、微光、閉眼、不聊天，不是儀式，而是避免把不該活化的腦區一起打亮。"
        },
        {
          "title": "失智看的是分布地圖",
          "text": "Alzheimer 型、額顳葉型與路易體型，關鍵都在低代謝分布是否符合典型網路，而不是有沒有腫塊。"
        },
        {
          "title": "癲癇多半在看發作間期的沉默",
          "text": "FDG 腦 PET 常是在發作間期找低代謝灶，和灌流 SPECT 注重發作當下的邏輯不同。"
        },
        {
          "title": "陰性不代表問題一定不存在",
          "text": "症狀很早期、病程波動或臨床問題不是代謝型異常時，影像可能不典型，仍要回到神經科整體評估。"
        }
      ],
      "supplements": []
    },
    "POSLUMA": {
      "key": "POSLUMA",
      "title": "PSMA PET (攝護腺)",
      "navLabel": "PSMA PET (攝護腺)",
      "eyebrow": "正子影像 PET",
      "subtitle": "PSMA PET (攝護腺) 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "這項檢查通常不必像 FDG PET 那樣長時間空腹，但掃描前先排尿、掃描時保持不動，一樣很重要。",
      "tellUs": "如果怕打針、怕密閉空間、無法平躺或排尿困難，請先告知。",
      "evidenceText": "更新依據：Cleveland Clinic PSMA PET scan patient education（2026）。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "用來找前列腺癌細胞可能分布的位置，幫助分期、復發評估與治療規劃。"
        },
        {
          "title": "檢查前",
          "text": "通常不需要禁食，也通常不必停平常藥物；穿舒適衣物即可。"
        },
        {
          "title": "檢查中",
          "text": "打藥後約等待 1 小時，再先去排尿，之後進行掃描。"
        },
        {
          "title": "檢查後",
          "text": "大多可直接返家；若出現疲倦、頭痛、味覺改變等短暫不適，可先觀察並回報。"
        }
      ],
      "supplements": []
    },
    "Ga68DOTATOC": {
      "key": "Ga68DOTATOC",
      "title": "Ga-68 DOTATOC (NET)",
      "navLabel": "Ga-68 DOTATOC (NET)",
      "eyebrow": "正子影像 PET",
      "subtitle": "Ga-68 DOTATOC (NET) 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Ga-68 DOTATOC/DOTATATE PET 的價值，不只是把 NET 找得更清楚，而是直接告訴你這個腫瘤還有沒有 somatostatin receptor 可用。這會一路影響後面的藥物與 PRRT 治療判斷。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "先看受體，不是先看大小",
          "text": "受體存在，代表這個腫瘤仍保留可被核醫抓住的生物學特徵；受體掉了，後面治療策略就會變。"
        },
        {
          "title": "它同時在做分期與治療分流",
          "text": "同一張影像既幫忙找病灶，也在評估病人是否可能受益於 Lu-177 DOTATATE 這類 PRRT。"
        },
        {
          "title": "藥物史不能晚問",
          "text": "長效體抑素類似物不是瑣事，因為它可能改變受體可用性與檢查排程安排。"
        },
        {
          "title": "亮點也要分清生理與病理",
          "text": "脾臟、肝臟、腎臟與垂體本來就會有生理攝取，讀片重點是哪些亮度超出正常應有的節奏。"
        }
      ],
      "supplements": []
    },
    "AmyloidPET": {
      "key": "AmyloidPET",
      "title": "Amyloid PET (類澱粉)",
      "navLabel": "Amyloid PET (類澱粉)",
      "eyebrow": "正子影像 PET",
      "subtitle": "Amyloid PET (類澱粉) 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Amyloid PET 很容易被誤會成阿茲海默症的直接答案，但它其實更像病理線索。它在幫你判斷腦內有沒有類澱粉負荷，而不是單靠一張圖就替臨床下結論。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "陽性不是診斷句點",
          "text": "年長者也可能有 amyloid 沉積，所以陽性一定要和認知症狀、病程與其他檢查一起看。"
        },
        {
          "title": "陰性有時更有決策價值",
          "text": "當認知退化原因不明時，陰性結果能顯著降低典型阿茲海默病理的可能性。"
        },
        {
          "title": "它適合用在不確定，而不是所有失智",
          "text": "早發、非典型表現或鑑別卡關時最有幫助；不是每位記憶退化病人都需要直接做。"
        },
        {
          "title": "讀者最該記住的限制",
          "text": "Amyloid 出現可以早於症狀多年，所以影像呈陽性，不等於現在的所有症狀都由它造成。"
        }
      ],
      "supplements": []
    },
    "NaFPET": {
      "key": "NaFPET",
      "title": "F-18 NaF Bone PET",
      "navLabel": "F-18 NaF Bone PET",
      "eyebrow": "正子影像 PET",
      "subtitle": "F-18 NaF Bone PET 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "NaF PET 和傳統骨掃描都和骨代謝有關，但 NaF PET 對骨表面交換更敏感。它常在結構影像還沒完全說清楚前，就先把骨頭正在改變這件事放大出來。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "先懂 fluoride 在看什麼",
          "text": "F-18 fluoride 會和骨表面 hydroxyapatite 交換，所以對成骨活性與微小轉移特別敏感。"
        },
        {
          "title": "它比傳統骨掃描更像高解析版本",
          "text": "同樣是骨轉移問題，NaF PET 往往能更早抓到病灶，也較少被重疊結構模糊掉。"
        },
        {
          "title": "退化性變化仍會亮",
          "text": "關節退化、骨刺與術後變化也可能攝取，因此影像愈敏感，愈需要回到解剖位置與病史判讀。"
        },
        {
          "title": "補水排尿依舊重要",
          "text": "即使是 PET，泌尿背景管理仍是畫質與判讀的一部分，不是可有可無的叮嚀。"
        }
      ],
      "supplements": []
    },
    "CardiacPET": {
      "key": "CardiacPET",
      "title": "心臟正子掃描",
      "navLabel": "心臟正子掃描",
      "eyebrow": "正子影像 PET",
      "subtitle": "心臟正子掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "心臟正子掃描可以更仔細看心肌血流，幫助醫師判斷心臟供血是否足夠，也能補足其他檢查還看不清楚的地方。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "它在問的是總血流能力",
          "text": "不只是單一血管有沒有塞，而是整顆心在壓力下還能把血流拉高多少。"
        },
        {
          "title": "微血管疾病在這裡更容易浮現",
          "text": "當大血管沒有明顯狹窄，但病人仍有典型症狀時，這項檢查有機會幫忙看出微血管的問題。"
        },
        {
          "title": "前處理是為了保留壓力反應",
          "text": "咖啡因、部分藥物與呼吸狀態會直接影響血管擴張藥反應，所以前處理錯了，數值也會被一起帶歪。"
        },
        {
          "title": "通知單上的藥物和做法要先看清楚",
          "text": "不同藥物、不同壓力方式，想回答的問題也會不一樣，所以不要把別人的經驗直接套到自己身上。"
        }
      ],
      "supplements": []
    },
    "Thyroid": {
      "key": "Thyroid",
      "title": "甲狀腺掃描",
      "navLabel": "甲狀腺掃描",
      "eyebrow": "內分泌 / 甲狀腺",
      "subtitle": "甲狀腺掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "",
      "evidenceText": "更新依據：EANM/SNMMI RAIU and thyroid scintigraphy guideline 與 Cleveland Clinic thyroid uptake and scan patient education。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "幫助看甲狀腺的功能、攝取情況與分布，尤其用於甲亢與自主性結節鑑別。"
        },
        {
          "title": "檢查前",
          "text": "先確認近兩個月內是否有含碘顯影，是否正在使用 methimazole / PTU。"
        },
        {
          "title": "檢查中",
          "text": "通常先吞服示蹤劑，4 到 6 小時後量測，有時 24 小時再回來一次。"
        },
        {
          "title": "檢查後",
          "text": "多喝水有助排出示蹤劑；除非另有交代，多數人可恢復正常活動。"
        }
      ],
      "supplements": [
        {
          "title": "甲狀腺 uptake / scan 重點說明",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>最近兩個月內的含碘顯影是高優先問題：</strong>這比當天有沒有空腹更常決定結果能不能用。</li>\n                    <li><strong>Methimazole / PTU 不要自行停：</strong>停藥時間要依臨床問題與醫師指示調整。</li>\n                    <li><strong>病人需理解這是兩階段流程：</strong>先吞服，再於數小時後甚至隔天回來量測。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "Parathyroid": {
      "key": "Parathyroid",
      "title": "副甲狀腺掃描",
      "navLabel": "副甲狀腺掃描",
      "eyebrow": "內分泌 / 甲狀腺",
      "subtitle": "副甲狀腺掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "",
      "evidenceText": "更新依據：Cleveland Clinic parathyroid scan patient education（2026）。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "常用於高血鈣與高副甲狀腺素、考慮手術前的定位。"
        },
        {
          "title": "檢查前",
          "text": "先帶上抽血與影像資料，知道這檢查的目的通常是定位，不是單靠它做診斷。"
        },
        {
          "title": "檢查中",
          "text": "可能是超音波、核醫 scan 或兩者合併；核醫 scan 常需多個時間點拍攝。"
        },
        {
          "title": "檢查後",
          "text": "若只是診斷定位，多數可直接返家並等待與外科或內分泌團隊討論結果。"
        }
      ],
      "supplements": [
        {
          "title": "副甲狀腺掃描重點說明",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>先說明這通常是定位，不是單獨做診斷：</strong>病人才不會把檢查期待放錯位置。</li>\n                    <li><strong>可能要拍不只一次：</strong>不同時間點影像是為了比較示蹤劑保留情形。</li>\n                    <li><strong>後續常會回到外科與內分泌評估：</strong>這份檢查多半是協助定位，後續治療仍要和外科與內分泌團隊一起判斷。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "MIBG": {
      "key": "MIBG",
      "title": "腎上腺髓質 MIBG",
      "navLabel": "腎上腺髓質 MIBG",
      "eyebrow": "內分泌 / 甲狀腺",
      "subtitle": "腎上腺髓質 MIBG 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "MIBG 的關鍵不在器官名字，而在交感神經與腎上腺髓質的儲存路徑是否還完整。病灶若還認得這條路，影像與治療才可能成立。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "甲狀腺阻斷是第一件事",
          "text": "因為游離碘帶來的不是小誤差，而是會把不該承受的輻射送到甲狀腺。"
        },
        {
          "title": "藥物史會直接改變攝取",
          "text": "部分抗憂鬱劑、labetalol 或交感神經相關藥物，會和 MIBG 走到同一條生理路徑上。"
        },
        {
          "title": "24 到 48 小時不是拖時間",
          "text": "這段等待是在讓背景清掉、真正被儲存的病灶慢慢浮出來。"
        },
        {
          "title": "陰性時要回頭想腫瘤生物學",
          "text": "去分化、藥物干擾或原本就不走這條儲存路徑，都可能讓病灶不如預期顯影。"
        }
      ],
      "supplements": []
    },
    "NP59": {
      "key": "NP59",
      "title": "腎上腺皮質 NP-59",
      "navLabel": "腎上腺皮質 NP-59",
      "eyebrow": "內分泌 / 甲狀腺",
      "subtitle": "腎上腺皮質 NP-59 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "NP-59 屬於少數把『皮質功能偏側化』直接放上影像的檢查。它不像 CT 在看結構，而是在追膽固醇前驅物流進哪一邊、停在哪一邊。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "功能偏側比大小更重要",
          "text": "這類檢查最重要的，是看左右哪一側比較活躍，而不是只看腎上腺大不大。"
        },
        {
          "title": "這是一條多日時間軸",
          "text": "Day 3、Day 5、Day 7 不是繁瑣，而是讓皮質攝取模式自己長出判讀價值。"
        },
        {
          "title": "前面的準備要一起完成",
          "text": "像 Lugol 和 dexamethasone 這些前置安排若沒照做，檢查結果就可能不夠清楚。"
        },
        {
          "title": "現在少見，不代表不重要",
          "text": "它常出現在其他檢查都講不清楚時，因此更需要先釐清臨床問題再排檢。"
        }
      ],
      "supplements": []
    },
    "I131WBS": {
      "key": "I131WBS",
      "title": "I-131 全身掃描",
      "navLabel": "I-131 全身掃描",
      "eyebrow": "內分泌 / 甲狀腺",
      "subtitle": "I-131 全身掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "WBS 能不能回答問題，往往在服藥與掃描之前就決定了一半。TSH 刺激、低碘飲食、近期顯影史與掃描時點，會一起影響你看到的是殘餘組織、轉移，還是模糊背景。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "前面的準備會影響掃描結果",
          "text": "如果 TSH 沒有到適合的程度，病灶可能比較不容易顯現，掃描結果也可能低估實際情況。"
        },
        {
          "title": "低碘飲食是在替病灶騰位置",
          "text": "不是單純少吃海鮮，而是讓體內碘池降下來，讓放射性碘更容易被真正目標抓住。"
        },
        {
          "title": "診斷與治療後掃描不是同一件事",
          "text": "同樣叫 WBS，但診斷劑量和治療後掃描的問題意識、敏感度與風險考量都不同。"
        },
        {
          "title": "掃描完還有回家安全題",
          "text": "接觸限制、如廁與家中幼兒安排，不是附屬衛教，而是整段 I-131 流程的最後一關。"
        }
      ],
      "supplements": []
    },
    "Salivary": {
      "key": "Salivary",
      "title": "唾液腺掃描",
      "navLabel": "唾液腺掃描",
      "eyebrow": "內分泌 / 甲狀腺",
      "subtitle": "唾液腺掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "如果正在哺乳，通常需要暫停哺乳 1 到 2 天，並依醫囑把這段時間的乳汁擠出丟棄。",
      "evidenceText": "更新依據：Cleveland Clinic salivary gland scan patient education（2026）。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "幫助看唾液腺是否能正常分泌與排出唾液。"
        },
        {
          "title": "檢查前",
          "text": "拿掉臉部與頸部金屬飾品，並先說明是否有食物過敏、懷孕或可能懷孕。"
        },
        {
          "title": "檢查中",
          "text": "先打示蹤劑拍攝，之後常會給檸檬糖、檸檬汁或其他酸物刺激分泌，再追加影像。"
        },
        {
          "title": "檢查後",
          "text": "前 24 小時排泄物中仍可能有少量示蹤劑，請加強沖水與洗手。"
        }
      ],
      "supplements": [
        {
          "title": "唾液腺掃描補充說明",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>先說會用酸物刺激：</strong>多數病人聽到檸檬糖或檸檬汁後就比較能理解流程。</li>\n                    <li><strong>檢後 24 小時加強沖水與洗手：</strong>因為少量示蹤劑可能從尿液與糞便排出。</li>\n                    <li><strong>哺乳者需特別提早準備：</strong>部分指引建議暫停哺乳 1 到 2 天。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "MPI_Tc99m": {
      "key": "MPI_Tc99m",
      "title": "心肌灌流 Tc-99m",
      "navLabel": "心肌灌流 Tc-99m",
      "eyebrow": "心臟 / 循環 / 淋巴",
      "subtitle": "心肌灌流 Tc-99m 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "若最近有喝咖啡、茶、能量飲、可樂、吃巧克力，或有氣喘、心律不整、走路不穩，請檢查前先說。",
      "evidenceText": "更新依據：現有心肌灌流檢查指引、SNMMI cardiac SPECT practice 與本院流程。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "主要評估心肌血流是否不足，幫助判斷缺血、梗塞或介入前後風險。"
        },
        {
          "title": "檢查前",
          "text": "若為壓力灌流流程，通常需依醫囑停咖啡因與部分藥物；也要確認能不能運動、是否有氣喘或 COPD。"
        },
        {
          "title": "檢查中",
          "text": "常分 Rest 與 Stress 兩階段，兩次注射之間可能需要進食高脂餐，幫助降低肝膽干擾。"
        },
        {
          "title": "檢查後",
          "text": "多數可返家；若壓力測試後胸悶、喘或頭暈持續，應立即告知醫療人員。"
        }
      ],
      "supplements": []
    },
    "MPI_Tl201": {
      "key": "MPI_Tl201",
      "title": "心肌灌流 Tl-201",
      "navLabel": "心肌灌流 Tl-201",
      "eyebrow": "心臟 / 循環 / 淋巴",
      "subtitle": "心肌灌流 Tl-201 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "若今天已有咖啡因攝取、胸痛不穩、近期心律不整或無法配合壓力流程，請先告知。",
      "evidenceText": "更新依據：現有 Tl-201 viability 流程與 cardiac nuclear medicine standard teaching。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "除了灌流，也常用來看心肌是否還有存活性，幫助後續血管重建或治療評估。"
        },
        {
          "title": "檢查前",
          "text": "若包含壓力流程，通常仍需依醫囑停咖啡因；同時要先確認能否運動或是否適合藥物壓力。"
        },
        {
          "title": "檢查中",
          "text": "先做壓力相，再等待數小時讓 Tl-201 再分佈後補拍延遲影像。"
        },
        {
          "title": "檢查後",
          "text": "多數可恢復日常活動，但因流程較長，當天應預留足夠時間。"
        }
      ],
      "supplements": []
    },
    "CardiacAmyloid": {
      "key": "CardiacAmyloid",
      "title": "心臟類澱粉 PYP",
      "navLabel": "心臟類澱粉 PYP",
      "eyebrow": "心臟 / 循環 / 淋巴",
      "subtitle": "心臟類澱粉 PYP 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "如果無法平躺、近期做過會影響判讀的心臟檢查，或尚未完成血清 / 尿液單株蛋白評估，請先告知。",
      "evidenceText": "更新依據：SNMMI/ASNC/ASE/EANM 等 PYP imaging practice points 與現有頁面內容。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "主要協助判斷是否為 ATTR 型心臟類澱粉沉積，尤其在心衰竭、左心室肥厚或影像懷疑時。"
        },
        {
          "title": "檢查前",
          "text": "一般沒有常規停咖啡因要求，也通常不需特別空腹；重點是帶齊心臟檢查與單株蛋白相關評估資料。"
        },
        {
          "title": "檢查中",
          "text": "注射 Tc-99m PYP 後通常要等約 3 小時，再做平面影像與 SPECT/CT；太早照容易增加血池干擾。"
        },
        {
          "title": "檢查後",
          "text": "多數可直接返家，多喝水與正常排尿即可；後續結果仍需結合 AL 排除與心臟專科判讀。"
        }
      ],
      "supplements": []
    },
    "MUGA": {
      "key": "MUGA",
      "title": "心室功能 MUGA",
      "navLabel": "心室功能 MUGA",
      "eyebrow": "心臟 / 循環 / 淋巴",
      "subtitle": "心室功能 MUGA 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "",
      "evidenceText": "更新依據：Cleveland Clinic MUGA scan patient education（2026）。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "用來量測心室功能與射出分率，常見於化療前後追蹤或心臟功能評估。"
        },
        {
          "title": "檢查前",
          "text": "通常不需要常規禁食，也沒有常規停咖啡因要求；重點是確認心律是否穩定、IV 是否通暢。"
        },
        {
          "title": "檢查中",
          "text": "會接上 ECG 電極、注射標記紅血球示蹤劑，再從不同角度拍攝。"
        },
        {
          "title": "檢查後",
          "text": "大多可立刻恢復日常活動，接下來 1 到 2 天多喝水即可。"
        }
      ],
      "supplements": [
        {
          "title": "MUGA 的病人衛教更新",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>先說明檢查看的是心臟功能，不是冠狀動脈有沒有塞住：</strong>可減少病人對檢查角色的誤解。</li>\n                    <li><strong>通常不需常規禁食，也沒有常規停咖啡因要求：</strong>更重要的是心律要夠穩、IV 要順、病人能配合 ECG 閘控拍攝。</li>\n                    <li><strong>拍攝時會接心電圖貼片：</strong>讓病人知道這是正常流程，不是突然多做別的檢查。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "Venography": {
      "key": "Venography",
      "title": "靜脈攝影",
      "navLabel": "靜脈攝影",
      "eyebrow": "心臟 / 循環 / 淋巴",
      "subtitle": "靜脈攝影 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Radionuclide venography 的價值不在炫技，而在把靜脈回流動態放在眼前。它不像超音波在看壓不壓得扁，而是在看血流是不是突然中斷、延遲，或被迫走旁支。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "技術細節直接影響故事",
          "text": "止血帶位置、足背注射品質與病人移動，任何一個環節出錯都可能製造假性流向異常。"
        },
        {
          "title": "真正有價值的是側枝與中斷",
          "text": "看到繞路，不只是『有點慢』，而是代表深靜脈主通道可能真的出了問題。"
        },
        {
          "title": "它現在少做，是因為被更方便的方法取代",
          "text": "但在超音波不易回答或需要功能性流向概念時，這頁仍有教學與補充價值。"
        },
        {
          "title": "這頁最適合拿來學什麼",
          "text": "學會把靜脈影像當成動態路徑，而不是一張靜止照片。"
        }
      ],
      "supplements": []
    },
    "Lymphedema": {
      "key": "Lymphedema",
      "title": "淋巴水腫攝影",
      "navLabel": "淋巴水腫攝影",
      "eyebrow": "心臟 / 循環 / 淋巴",
      "subtitle": "淋巴水腫攝影 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Lymphoscintigraphy 的難點，在於它看起來像是在拍水腫，其實真正的主角是回流功能。病人看見的是腫，核醫看的是那條本來該往上走的路還通不通。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "Dermal backflow 是重要語言",
          "text": "真皮逆流不是抽象名詞，而是淋巴壓力真的推不回去後留下的功能痕跡。"
        },
        {
          "title": "注射痛感要先交代",
          "text": "指趾間注射比一般抽血更刺激，若沒先說，病人很容易在第一步就失去信任感。"
        },
        {
          "title": "術後史決定判讀方向",
          "text": "乳癌、婦癌清掃或放療後個案，和原發性淋巴異常的圖像邏輯並不相同。"
        },
        {
          "title": "這頁在做的是鑑別，不只是證明",
          "text": "它的價值常在把淋巴回流障礙與靜脈性或其他原因造成的腫脹分開。"
        }
      ],
      "supplements": []
    },
    "SLN": {
      "key": "SLN",
      "title": "前哨淋巴結",
      "navLabel": "前哨淋巴結",
      "eyebrow": "心臟 / 循環 / 淋巴",
      "subtitle": "前哨淋巴結 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "SLN mapping 不是單純幫外科畫記號，而是在回答淋巴轉移是否已越過第一站。這也是為什麼核醫這一小段流程，最後會深刻改變病人的手術創傷與後遺症風險。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "先理解第一站的邏輯",
          "text": "如果前哨節點沒有轉移，後面整串淋巴結大規模清掃的必要性就可能下降。"
        },
        {
          "title": "排程必須和開刀房同頻",
          "text": "做得再漂亮，若和手術時序沒接上，這張圖的臨床價值就會被折損。"
        },
        {
          "title": "皮膚標記不是裝飾",
          "text": "那個記號是外科進入病人體表時的導航點，洗掉就等於把核醫資訊切斷。"
        },
        {
          "title": "讀這頁時要帶著手術思維",
          "text": "核醫在這裡不是終點，而是把資訊交棒給 gamma probe 和術者決策。"
        }
      ],
      "supplements": []
    },
    "Gastric": {
      "key": "Gastric",
      "title": "胃排空掃描",
      "navLabel": "胃排空掃描",
      "eyebrow": "消化 / 肝膽",
      "subtitle": "胃排空掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "若懷孕、哺乳、血糖很不穩、無法吃標準餐、近期吸菸或有需停用藥物，請先告知。",
      "evidenceText": "更新依據：Cleveland Clinic gastric emptying study（2026）與 SNMMI GES guideline 相關研究。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "用來看食物離開胃的速度，幫助評估胃輕癱或胃排空過慢 / 過快。"
        },
        {
          "title": "檢查前",
          "text": "通常需空腹至少 4 小時；若有糖尿病，請帶胰島素與血糖機並先說明。"
        },
        {
          "title": "檢查中",
          "text": "會吃下標準化餐點，通常需在 10 分鐘內吃完，接著分時點拍攝到 2 至 4 小時。"
        },
        {
          "title": "檢查後",
          "text": "大多沒有特別副作用；多喝水可幫助示蹤劑隨尿便排出。"
        }
      ],
      "supplements": [
        {
          "title": "胃排空掃描重點整理",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>檢查餐和拍照時間要照表進行：</strong>這樣前後結果才比較容易比較。</li>\n                    <li><strong>至少空腹 4 小時：</strong>糖尿病病人最好攜帶血糖機與胰島素，現場會先評估血糖再進行。</li>\n                    <li><strong>吸菸與部分藥物會影響結果：</strong>抽菸、促蠕動藥、止吐藥、鴉片類止痛藥都可能改變胃排空速度。</li>\n                    <li><strong>這項檢查通常不只拍一次：</strong>吃完檢查餐後，接下來 2 到 4 小時還會依時點回來拍照。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "GIBleed": {
      "key": "GIBleed",
      "title": "腸胃道出血",
      "navLabel": "腸胃道出血",
      "eyebrow": "消化 / 肝膽",
      "subtitle": "腸胃道出血 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "腸胃道出血掃描是在幫忙找出血的位置。醫師不只看哪裡有亮點，也會看亮點是不是隨著腸道位置改變。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "標記紅血球是為了拉長觀察時間",
          "text": "因為出血可能間歇發生，所以標記紅血球的價值就在能拉長觀察時間。"
        },
        {
          "title": "動態比單張截圖重要",
          "text": "如果只看某一瞬間，很容易把血管、脾臟或尿路誤當成出血點。"
        },
        {
          "title": "真正出血點會移動",
          "text": "如果亮點先出現，之後又沿著腸道方向移動，會比較像真正的出血。"
        },
        {
          "title": "排檢前先問目前還在不在流",
          "text": "若臨床時機已過，影像陰性不一定代表從來沒有出血。"
        }
      ],
      "supplements": []
    },
    "Meckel": {
      "key": "Meckel",
      "title": "梅克爾憩室",
      "navLabel": "梅克爾憩室",
      "eyebrow": "消化 / 肝膽",
      "subtitle": "梅克爾憩室 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "這項檢查主要是在找梅克爾憩室裡可能存在的異位胃黏膜，所以醫師看的不只是腹部有沒有亮點，也會看它出現的時間和位置。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "兒童無痛性出血是典型入口",
          "text": "這頁最常出現在兒童反覆下消化道出血的情境，不是成人腹痛的泛用檢查。"
        },
        {
          "title": "和胃同步出現最有說服力",
          "text": "若腹腔亮點和胃差不多時間出現，判讀力量會大很多。"
        },
        {
          "title": "前處理藥物是在提高停留率",
          "text": "H2 blocker 或其他輔助藥物的作用，是讓影像更清楚，不是可有可無的步驟。"
        },
        {
          "title": "太晚出現或會移動要小心",
          "text": "如果亮點晚很多才出現或位置會跑，常要先懷疑腸道內游離藥物或泌尿干擾。"
        }
      ],
      "supplements": []
    },
    "Liver": {
      "key": "Liver",
      "title": "肝脾臟掃描",
      "navLabel": "肝脾臟掃描",
      "eyebrow": "消化 / 肝膽",
      "subtitle": "肝脾臟掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Liver-spleen scan 看起來古典，但它把網狀內皮系統的分工直接攤開來看。當肝臟吞噬能力下降，脾與骨髓接手的畫面，往往比單純的器官輪廓更有故事性。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "Kupffer cell 才是這頁主角",
          "text": "不是每個肝病灶都適合這個檢查，真正有價值的是網狀內皮吞噬是否改變。"
        },
        {
          "title": "Colloid shift 是功能轉移",
          "text": "看到脾和骨髓更亮，不只是『別處也有攝取』，而是肝臟真的沒辦法像以前那樣處理膠體了。"
        },
        {
          "title": "副脾定位仍有實務價值",
          "text": "在術前術後或不明脾組織問題時，這頁仍能提供結構影像不一定給得出的功能線索。"
        },
        {
          "title": "它看的是功能，不只是一張影像",
          "text": "這項檢查的價值，在於幫忙看清楚器官有沒有正常分工運作，而不只是看哪裡亮、哪裡不亮。"
        }
      ],
      "supplements": []
    },
    "LiverHemangioma": {
      "key": "LiverHemangioma",
      "title": "肝血管瘤 RBC",
      "navLabel": "肝血管瘤 RBC",
      "eyebrow": "消化 / 肝膽",
      "subtitle": "肝血管瘤 RBC 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "這頁和很多腫瘤影像相反：早期不一定搶眼，真正的診斷力來自延遲後的逐步填充。它像是在看一個慢速血池，而不是一個急著表態的腫塊。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "早期不亮不代表沒價值",
          "text": "血管瘤常在早期相不突出，真正有辨識力的是延遲相越來越像被血灌滿。"
        },
        {
          "title": "病灶愈大，故事愈清楚",
          "text": "較大的病灶更容易呈現典型 delayed fill-in，小病灶則可能需要 SPECT 幫忙。"
        },
        {
          "title": "這頁強在特異度",
          "text": "當延遲填充模式很典型時，它常比很多模糊的解剖影像更有說服力。"
        },
        {
          "title": "讀片時先想它是不是血池",
          "text": "只要把病灶當成『慢慢裝滿血的空間』去理解，很多判讀直覺會變得更清楚。"
        }
      ],
      "supplements": []
    },
    "Biliary": {
      "key": "Biliary",
      "title": "膽道掃描 HIDA",
      "navLabel": "膽道掃描 HIDA",
      "eyebrow": "消化 / 肝膽",
      "subtitle": "膽道掃描 HIDA 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "如果懷孕、哺乳、剛吃止痛藥、怕密閉空間或無法平躺，請先告知。",
      "evidenceText": "更新依據：Cleveland Clinic HIDA scan patient education（2026）。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "幫助看膽汁是不是能正常從肝臟流到膽囊與腸道，也可評估膽囊功能。"
        },
        {
          "title": "檢查前",
          "text": "通常需至少空腹 4 小時；部分藥物尤其鴉片類會影響結果。"
        },
        {
          "title": "檢查中",
          "text": "多階段連續拍攝，必要時會給藥讓膽囊收縮，可能短暫腹部悶或抽痛。"
        },
        {
          "title": "檢查後",
          "text": "多喝水有助示蹤劑排出；哺乳者通常需暫停並丟棄 24 小時內乳汁。"
        }
      ],
      "supplements": [
        {
          "title": "HIDA 衛教重點",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>至少空腹 4 小時：</strong>太短或太長都可能影響膽囊顯影與功能判讀。</li>\n                    <li><strong>鴉片類止痛藥要先問：</strong>Morphine、codeine 等藥物會改變膽道動力，可能需要延後或調整流程。</li>\n                    <li><strong>過程可能不痛，但給藥後可能短暫腹部悶痛：</strong>先知道這件事，通常比較不會被嚇到。</li>\n                    <li><strong>哺乳者請先安排備用乳品：</strong>不少單位會建議檢後 24 小時暫停哺乳，並把這段時間的乳汁擠出丟棄。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "Salivary2": {
      "key": "Salivary2",
      "title": "唾液腺掃描",
      "navLabel": "唾液腺掃描",
      "eyebrow": "消化 / 肝膽",
      "subtitle": "唾液腺掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "同樣是唾液腺掃描，放進消化分類後，閱讀重點會從單純乾燥症評估，轉向『入口分泌與排出功能是否失調』。這是同一個檢查，但讀者帶進來的問題並不一樣。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "唾液是消化鏈的起點",
          "text": "當分泌與排出出了問題，病人的不適不只在口乾，也會一路影響吞嚥與進食體驗。"
        },
        {
          "title": "刺激前後的對比就是答案",
          "text": "這個檢查最有趣的地方，在於先看會不會抓，再看能不能排。"
        },
        {
          "title": "同一檢查，不同閱讀入口",
          "text": "從內分泌分類讀它，焦點可能是功能測試；從消化分類讀它，更像是在理解口腔前段功能。"
        },
        {
          "title": "這一頁最常回答的是日常困擾",
          "text": "很多人做這項檢查時，最在意的其實是口乾、吃東西不舒服或唾液分泌變少，這些問題本來就需要單獨說清楚。"
        }
      ],
      "supplements": []
    },
    "Bone": {
      "key": "Bone",
      "title": "全身骨骼掃描",
      "navLabel": "全身骨骼掃描",
      "eyebrow": "骨骼 / 腎臟 / 泌尿",
      "subtitle": "全身骨骼掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "這項檢查不是打完立刻照，通常要先等一段時間，並且主動喝水、常排尿。",
      "tellUs": "",
      "evidenceText": "更新依據：Cleveland Clinic whole-body bone scan patient education（2026）。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "幫助看骨骼是否有轉移、骨折修復、感染或其他活性改變。"
        },
        {
          "title": "檢查前",
          "text": "通常可以照常吃飯吃藥，除非醫師另有交代；請拿掉金屬物。"
        },
        {
          "title": "檢查中",
          "text": "打藥後常要等待 1 到 4 小時，再進行約 30 到 60 分鐘拍攝。"
        },
        {
          "title": "檢查後",
          "text": "未吸收的示蹤劑會從尿液排出，建議多喝水、多排尿。"
        }
      ],
      "supplements": [
        {
          "title": "病人最常問的骨掃描流程",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>多數情況不需禁食：</strong>通常可以照常吃飯與服藥，除非醫師另有交代。</li>\n                    <li><strong>真正耗時的是等待：</strong>注射後常要等 1 到 4 小時，讓示蹤劑進入骨骼，再正式拍攝 30 到 60 分鐘。</li>\n                    <li><strong>補水與排尿不是客套：</strong>等待期間鼓勵喝水、常上廁所，可以減少背景干擾，也幫助示蹤劑排出。</li>\n                    <li><strong>檢後說明要具體：</strong>通常只需多喝水；若部門另有規範，再提醒與幼兒或孕婦保持距離 24 小時左右。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "DMSA": {
      "key": "DMSA",
      "title": "腎皮質 DMSA",
      "navLabel": "腎皮質 DMSA",
      "eyebrow": "骨骼 / 腎臟 / 泌尿",
      "subtitle": "腎皮質 DMSA 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "腎皮質 DMSA 常用在兒科與感染後疤痕評估。先知道會不會痛、要等多久、做完能不能回家，通常最實用。",
      "tellUs": "",
      "evidenceText": "更新依據：SNMMI/EANM renal scintigraphy guideline 與 Cleveland Clinic renal scan patient education。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "幫助看腎皮質功能、疤痕與腎臟實質分布。"
        },
        {
          "title": "檢查前",
          "text": "請帶完整藥單，並先說明是否懷孕、哺乳、怕打針或難以平躺。"
        },
        {
          "title": "檢查中",
          "text": "打藥後通常要等一段時間，之後進行靜止拍攝。"
        },
        {
          "title": "檢查後",
          "text": "多喝水、正常排尿即可，多數人可立即恢復日常活動。"
        }
      ],
      "supplements": [
        {
          "title": "DMSA 排檢與家屬說明",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>家屬最在意的是會不會痛與要不要住院：</strong>要先說是靜脈注射後等待，再進行靜態拍攝，多數可當日返家。</li>\n                    <li><strong>兒科流程重點：</strong>先確認孩子能否靜止、是否需要包覆固定或家長陪同協助。</li>\n                    <li><strong>檢後照護：</strong>大多只需正常喝水與排尿，不需過度限制活動。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "DTPA": {
      "key": "DTPA",
      "title": "腎利尿 DTPA",
      "navLabel": "腎利尿 DTPA",
      "eyebrow": "骨骼 / 腎臟 / 泌尿",
      "subtitle": "腎利尿 DTPA 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "",
      "evidenceText": "更新依據：SNMMI/EANM renal scintigraphy / diuretic renography guideline 與 Cleveland Clinic renal scan patient education。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "幫助看血流、排泄與是否有真正阻塞。"
        },
        {
          "title": "檢查前",
          "text": "醫師可能要求先喝水、先排尿，並調整會影響結果的藥物。"
        },
        {
          "title": "檢查中",
          "text": "通常會打藥後連續拍攝；必要時搭配利尿劑或其他藥物刺激。"
        },
        {
          "title": "檢查後",
          "text": "示蹤劑會隨尿排出，多喝水通常有幫助。"
        }
      ],
      "supplements": [
        {
          "title": "DTPA 前要先說明的事",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>藥單要完整：</strong>NSAIDs、aspirin 及其他可能影響腎血流或排泄的藥物，要先核對。</li>\n                    <li><strong>補水與排尿常是流程的一部分：</strong>不是額外要求，而是為了讓結果更可靠。</li>\n                    <li><strong>利尿或藥物刺激時的感受要先講：</strong>病人較不會因突然想尿或腹部不適而緊張。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "MAG3": {
      "key": "MAG3",
      "title": "腎功能 MAG3",
      "navLabel": "腎功能 MAG3",
      "eyebrow": "骨骼 / 腎臟 / 泌尿",
      "subtitle": "腎功能 MAG3 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "",
      "evidenceText": "更新依據：SNMMI/EANM renal scintigraphy / diuretic renography guideline 與 Cleveland Clinic renal scan patient education。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "常用來看腎臟排泄速度、引流是否延遲，以及輸尿管是否真正阻塞。"
        },
        {
          "title": "檢查前",
          "text": "先核對藥單、過敏史、是否需補水與先排尿。"
        },
        {
          "title": "檢查中",
          "text": "會做動態拍攝，有時搭配利尿劑觀察引流變化。"
        },
        {
          "title": "檢查後",
          "text": "通常可立刻回家，多喝水有助示蹤劑排出。"
        }
      ],
      "supplements": [
        {
          "title": "MAG3 的病人理解版",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>把問題翻成人話：</strong>這個檢查常是在回答「尿流得出去嗎？是真的阻塞嗎？」</li>\n                    <li><strong>檢前常要先喝水與排尿：</strong>讓病人知道這不是麻煩，而是讓判讀更準。</li>\n                    <li><strong>檢後通常可直接返家：</strong>正常喝水、排尿即可，多數不需特別休息。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "Cystography": {
      "key": "Cystography",
      "title": "膀胱逆流掃描",
      "navLabel": "膀胱逆流掃描",
      "eyebrow": "骨骼 / 腎臟 / 泌尿",
      "subtitle": "膀胱逆流掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Direct radionuclide cystography 的核心是『方向感』。它不像解剖影像在畫泌尿道輪廓，而是在動態裡追尿液是不是逆著應有的路回到輸尿管甚至腎臟。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "低劑量讓它適合追蹤",
          "text": "兒童 VUR 常需要反覆觀察，這也是核醫版本的重要存在理由。"
        },
        {
          "title": "最難受的往往不是照相，而是導尿",
          "text": "對病人與家屬而言，真正需要先解釋的是導尿不適與整體流程感受。"
        },
        {
          "title": "灌注期和排尿期都重要",
          "text": "有些逆流只在膀胱壓力變高時出現，所以不能只看其中一段。"
        },
        {
          "title": "它偏功能，不偏解剖細節",
          "text": "若臨床最想知道的是逆流有沒有、還在不在，核醫常比反覆做高劑量解剖檢查更合適。"
        }
      ],
      "supplements": []
    },
    "Scrotal": {
      "key": "Scrotal",
      "title": "陰囊掃描",
      "navLabel": "陰囊掃描",
      "eyebrow": "骨骼 / 腎臟 / 泌尿",
      "subtitle": "陰囊掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Scrotal scintigraphy 的臨床張力很直接：一邊是搶時間救睪丸，一邊是避免不必要手術。它不是慢慢研究的影像，而是一張要立刻影響處置的圖。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "冷和熱代表完全不同的後果",
          "text": "扭轉的冷缺血與附睪炎的熱充血，不只是影像差異，而是後續處置節奏完全不同。"
        },
        {
          "title": "這頁最大的價值是急",
          "text": "黃金時間窗短，所以流程協調比任何華麗解說都更重要。"
        },
        {
          "title": "延遲相有時比早期更關鍵",
          "text": "doughnut sign 這種周邊熱、中心冷的圖像，往往比單看動脈相更能幫忙定向。"
        },
        {
          "title": "它常在超音波卡關時補位",
          "text": "不是要取代所有急診超音波，而是在判斷仍不清楚時補上功能線索。"
        }
      ],
      "supplements": []
    },
    "Brain": {
      "key": "Brain",
      "title": "腦部灌流 SPECT",
      "navLabel": "腦部灌流 SPECT",
      "eyebrow": "神經 / 肺 / 感染",
      "subtitle": "腦部灌流 SPECT 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Brain perfusion SPECT 和腦 PET 最大的差別之一，在於它更像把『那一瞬間的血流分配』凍結下來。也因此，環境刺激、發作時機與注射節點，會直接變成影像內容的一部分。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "安靜與微光不是形式",
          "text": "因為你想凍結的是基準狀態，不是病人剛剛被聊天或噪音拉高的腦活動。"
        },
        {
          "title": "癲癇時機決定意義",
          "text": "發作中注射看到的是 hotspot，發作間期則可能反過來呈現低灌流。"
        },
        {
          "title": "失智看的是網路型態",
          "text": "不同型失智會在特定灌流網路掉下來，這和單純看萎縮是不同層次的問題。"
        },
        {
          "title": "它也有急重症角色",
          "text": "從腦死判定到特定血流評估，這頁的價值不只在門診失智工作。"
        }
      ],
      "supplements": []
    },
    "TRODAT": {
      "key": "TRODAT",
      "title": "多巴胺 TRODAT",
      "navLabel": "多巴胺 TRODAT",
      "eyebrow": "神經 / 肺 / 感染",
      "subtitle": "多巴胺 TRODAT 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "TRODAT 之所以有辨識力，不是因為它拍得出巴金森樣子，而是因為它直指 DAT 這個多巴胺系統的入口。當這條路在退化，影像會比肉眼看動作更早呈現結構化變化。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "逗號變句號是結果，不是口訣",
          "text": "那個經典外觀背後代表的是 putamen 先掉訊號、病程再往尾核延伸。"
        },
        {
          "title": "正常掃描也很有價值",
          "text": "若 DAT 保留，原發性顫抖或藥物性巴金森就會比退化性疾病更值得優先考慮。"
        },
        {
          "title": "排程限制本身就是臨床現實",
          "text": "昂貴試劑、批次開瓶與長時間等待，都讓這頁的行政邏輯和一般掃描不同。"
        },
        {
          "title": "頭能不能穩住，比病名更早決定能不能做",
          "text": "因為一旦無法固定，後面再正確的生理假設也無法換成可用影像。"
        }
      ],
      "supplements": []
    },
    "Cisternography": {
      "key": "Cisternography",
      "title": "腦脊髓液池掃描",
      "navLabel": "腦脊髓液池掃描",
      "eyebrow": "神經 / 肺 / 感染",
      "subtitle": "腦脊髓液池掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Cisternography 的閱讀方式很像看水流路徑圖。你不是在找某個器官攝取，而是在追蹤腦脊髓液本來該如何上行、如何被吸收，哪一段卻偏離了常態。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "腰椎穿刺讓它一開始就不同",
          "text": "這不是一般靜脈注射檢查，所以病人說明與風險感受都必須提前處理。"
        },
        {
          "title": "多時點才看得出路徑",
          "text": "2 到 4 小時、24 小時、48 小時的差別，就是這頁真正的判讀語言。"
        },
        {
          "title": "NPH 在看的是逆流與滯留",
          "text": "如果藥物一直待在腦室、不肯往大腦表面上去，臨床意義就會浮現。"
        },
        {
          "title": "CSF leak 則是在找外漏",
          "text": "當病人的問題變成鼻漏或耳漏，閱讀焦點就從循環變成定位。"
        }
      ],
      "supplements": []
    },
    "Lung": {
      "key": "Lung",
      "title": "肺灌注掃描",
      "navLabel": "肺灌注掃描",
      "eyebrow": "神經 / 肺 / 感染",
      "subtitle": "肺灌注掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Lung perfusion scan 不是 V/Q 的精簡版，而是單獨聚焦在肺灌流。它的語言很直接：哪裡沒灌到，哪裡可能被栓塞、分流或供血異常拖住。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "MAA 的邏輯是微血管暫時取樣",
          "text": "顆粒不是要堵住肺，而是在可接受範圍內替你標記當下的肺灌流分布。"
        },
        {
          "title": "粒子數管理是安全核心",
          "text": "兒科、肺高壓或特殊肺功能病人，粒子數不是小細節，而是直接影響風險控制。"
        },
        {
          "title": "它常在不能做 CTA 時補位",
          "text": "顯影劑過敏、腎功能不佳或其他限制，讓這頁保有穩定的臨床位置。"
        },
        {
          "title": "楔形缺損要帶著臨床看",
          "text": "影像不是獨立證據，呼吸症狀、X 光與其他風險因子會一起決定解釋方向。"
        }
      ],
      "supplements": []
    },
    "LungVQ": {
      "key": "LungVQ",
      "title": "肺通氣灌注 V/Q",
      "navLabel": "肺通氣灌注 V/Q",
      "eyebrow": "神經 / 肺 / 感染",
      "subtitle": "肺通氣灌注 V/Q 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "",
      "tellUs": "如果懷孕、哺乳、無法配合吸氣、或躺不住，請先說。",
      "evidenceText": "更新依據：Cleveland Clinic V/Q scan patient education（2026）與 ACR pulmonary embolism imaging guidance。",
      "cards": [
        {
          "title": "為什麼要做",
          "text": "當 CTA 不適合或需要看肺通氣 / 灌流是否匹配時，V/Q 很有價值。"
        },
        {
          "title": "檢查前",
          "text": "通常不需特別禁食，但會先做胸部 X 光，並確認是否能安靜配合呼吸。"
        },
        {
          "title": "檢查中",
          "text": "先做通氣，再做灌注；前者是吸入示蹤劑，後者是靜脈注射示蹤劑。"
        },
        {
          "title": "檢查後",
          "text": "吸入的示蹤劑會隨呼吸散去，注射的部分則會在數小時到數天內排出。"
        }
      ],
      "supplements": [
        {
          "title": "V/Q 病人常見疑問",
          "html": "<div class=\"prose\">\n                <ul>\n                    <li><strong>通常會先做胸部 X 光：</strong>這一步是為了幫助後面判讀，不是重複檢查。</li>\n                    <li><strong>分兩段：</strong>先吸入藥物看通氣，再打針看灌流，兩者一起看才有意義。</li>\n                    <li><strong>不一定要禁食：</strong>但必須能安靜配合呼吸與保持不動。</li>\n                    <li><strong>報告結果還要和臨床狀況一起看：</strong>醫師會再結合症狀、胸部 X 光和其他檢查一起判斷。</li>\n                </ul>\n            </div>"
        }
      ]
    },
    "Ga67": {
      "key": "Ga67",
      "title": "鎵-67 發炎掃描",
      "navLabel": "鎵-67 發炎掃描",
      "eyebrow": "神經 / 肺 / 感染",
      "subtitle": "鎵-67 發炎掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "Ga-67 不是急性決策型影像。它靠的是較長的等待、背景逐步變化，以及發炎與特定病理組織對 gallium 的偏好，慢慢把真正的活躍區域凸顯出來。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "等待不是效率差",
          "text": "48 到 72 小時的延遲，是在讓非特異背景慢慢退掉，病灶對比逐步拉開。"
        },
        {
          "title": "它不只追感染",
          "text": "某些淋巴瘤、類肉瘤病與慢性發炎也會讓這頁有解讀價值。"
        },
        {
          "title": "腸道處理會影響判讀",
          "text": "瀉劑與腸道背景管理不是附帶提醒，而是為了避免把腸內殘留誤認成病灶。"
        },
        {
          "title": "它更像補充而不是第一線",
          "text": "在 PET、WBC scan 或現代解剖影像已很成熟的時代，Ga-67 常出現在特定情境下的補位角色。"
        }
      ],
      "supplements": []
    },
    "WBCScan": {
      "key": "WBCScan",
      "title": "白血球掃描",
      "navLabel": "白血球掃描",
      "eyebrow": "神經 / 肺 / 感染",
      "subtitle": "白血球掃描 是核醫檢查的一種。先看它通常在看什麼、到院前要先說什麼，以及做完後的基本照顧。",
      "lead": "WBC scan 最有核醫味的地方，在於它把實驗室流程與影像判讀硬生生接在一起。只要前半段標記品質不穩，後半段再漂亮的相機也救不回來。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "它依賴的是病人自己的趨化能力",
          "text": "標記白血球之後要回到真正感染處，所以這頁比一般發炎掃描更接近『活的生理反應』。"
        },
        {
          "title": "白血球太低就先別硬做",
          "text": "因為不只是敏感度差，連標記和回注本身都可能變得不可靠。"
        },
        {
          "title": "早期與延遲相要一起讀",
          "text": "真正感染通常會逐步聚焦，而不是一直維持模糊不變。"
        },
        {
          "title": "抗生素與免疫狀態會改故事",
          "text": "陰性結果若脫離用藥史與白血球狀態來看，很容易被過度解讀。"
        }
      ],
      "supplements": []
    },
    "I131": {
      "key": "I131",
      "title": "I-131 甲狀腺治療",
      "navLabel": "I-131 甲狀腺治療",
      "eyebrow": "核醫治療",
      "subtitle": "I-131 甲狀腺治療 是核醫治療的一種。先看治療想處理什麼、哪些事要提早說，以及回家後通常要怎麼照顧自己和家人。",
      "lead": "I-131 之所以經典，不只是因為甲狀腺會抓碘，而是因為整套治療把生理攝取、TSH 操作、住院隔離、污染管理和返家限制串成同一條線。這頁不是單次給藥，而是完整生活設計。",
      "tellUs": "是否正在哺乳、近兩個月是否做過含碘顯影檢查、是否服用甲狀腺素或抗甲狀腺藥、家中是否有幼兒或孕婦、近期是否安排長程出國，這些都要在治療前就先說。",
      "evidenceText": "整理依據含 RadiologyInfo、American Thyroid Association、台灣甲狀腺醫護衛教暨健康促進協會與中華民國核醫學學會公開衛教資料。實際低碘飲食天數、停藥方式與住院天數仍以院方規範為準。",
      "cards": [
        {
          "title": "攝碘能力是治療成立的入口",
          "text": "沒有 NIS 與適當 TSH 刺激，再好的活度也未必能換來有效治療。"
        },
        {
          "title": "低碘與停藥都在替病灶讓路",
          "text": "前置限制看似繁瑣，其實都是在提升真正目標的攝取優勢。"
        },
        {
          "title": "病房與出院不是附屬流程",
          "text": "補水、排尿、污染處理與家庭接觸限制，本身就是治療安全性的一部分。"
        },
        {
          "title": "這頁一定要想到家屬",
          "text": "核醫治療少數會把家庭空間、睡眠距離與幼兒接觸一起納入規劃的，就是 I-131。"
        }
      ],
      "sourceKeys": [
        "radioiodine",
        "thyroidAssociationRai",
        "taiwanThyroidSupport",
        "taiwanNuclearMedicine"
      ],
      "supplements": [
        {
          "title": "治療前，最常需要先安排的是這些事",
          "html": `
            <div class="checklist">
              <div class="checklist-item">
                <strong>低碘飲食與藥物調整</strong>
                目的是讓真正要治療的甲狀腺組織更容易抓到碘。很多人最容易卡在醬料、海藻、保健食品或停藥時程，最好把通知單放在餐桌或冰箱旁反覆對照。
              </div>
              <div class="checklist-item">
                <strong>家裡誰會和你近距離接觸</strong>
                如果家中有幼兒、孕婦、需要你夜間陪睡的人，或回家後無法獨立使用衛浴，這些都不是小事，而是治療能不能順利安排的前提。
              </div>
              <div class="checklist-item">
                <strong>哺乳、生育與近期旅行</strong>
                哺乳要事前和團隊確認停止時點；若近期要出國，也要先問清楚機場輻射偵測與證明文件安排。
              </div>
            </div>
          `
        },
        {
          "title": "治療後回家，最實際的日常安排",
          "html": `
            <div class="fact-list">
              <section class="fact-item">
                <h4>多喝水、採坐姿如廁、依指示沖水</h4>
                <p>放射性碘多會經尿液排出。返家後前幾天如廁清潔、衣物分開處理與手部衛生，往往比你想像中更重要。</p>
              </section>
              <section class="fact-item">
                <h4>睡眠距離、親密接觸與抱小孩都要先想好</h4>
                <p>不同醫院對距離與天數的說明會略有差異，但共同原則都是減少長時間近距離接觸，尤其是孕婦與年幼孩子。</p>
              </section>
              <section class="fact-item">
                <h4>口乾、味覺改變、噁心通常有機會逐漸緩解</h4>
                <p>多數副作用不是永久性的，但若症狀明顯、持續吃不下、嘔吐或唾液腺腫痛加劇，還是要回頭聯絡醫療團隊。</p>
              </section>
            </div>
          `
        }
      ]
    },
    "I131MIBG": {
      "key": "I131MIBG",
      "title": "I-131 MIBG 治療",
      "navLabel": "I-131 MIBG 治療",
      "eyebrow": "核醫治療",
      "subtitle": "I-131 MIBG 治療 是核醫治療的一種。先看治療想處理什麼、哪些事要提早說，以及回家後通常要怎麼照顧自己和家人。",
      "lead": "這種治療不是把放射性藥物丟進全身碰運氣，而是利用腫瘤仍保有類兒茶酚胺攝取能力，讓輻射被帶進去。入口不存在，後面的風險就不值得承擔。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "先有診斷攝取，才談治療",
          "text": "治療前影像證明不是流程裝飾，而是在確認這條運輸路徑還活著。"
        },
        {
          "title": "甲狀腺阻斷與家屬教育都要前置",
          "text": "因為這頁的風險不只在病人身上，也在照顧者如何面對污染與接觸限制。"
        },
        {
          "title": "兒科照護是另一層難題",
          "text": "神經母細胞瘤個案常牽涉陪病、安撫、排泄污染與幹細胞備援等整體規劃。"
        },
        {
          "title": "病房管理直接決定可行性",
          "text": "尿液、汗液與嘔吐物都可能帶來污染，這不是給完藥再想的事。"
        }
      ],
      "supplements": []
    },
    "Sm153": {
      "key": "Sm153",
      "title": "Sm-153 骨痛緩解治療",
      "navLabel": "Sm-153 骨痛緩解治療",
      "eyebrow": "核醫治療",
      "subtitle": "Sm-153 骨痛緩解治療 是核醫治療的一種。先看治療想處理什麼、哪些事要提早說，以及回家後通常要怎麼照顧自己和家人。",
      "lead": "Sm-153 EDTMP 最重要的角色是緩和，而不是根治。它利用骨轉移偏好的成骨活性，把 beta 劑量送進最痛、最活躍的骨病灶附近，讓生活品質重新回到可以被照顧的節奏。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "先確認病灶真的屬於它",
          "text": "骨掃描有對應攝取、且疼痛來源和成骨活性病灶對得上，治療才比較有機會有效。"
        },
        {
          "title": "這頁在治痛，不是在治所有病程",
          "text": "若把它理解成通用抗癌藥，病人與團隊都容易對效果產生錯誤期待。"
        },
        {
          "title": "骨髓儲備是關鍵限制",
          "text": "因為多發骨轉移病人常已歷經多線治療，血球餘裕很可能比病灶數量更早成為限制。"
        },
        {
          "title": "短期 flare 要先講",
          "text": "疼痛有時會短暫加劇，若事前沒有說明，病人會以為治療讓病情惡化。"
        }
      ],
      "supplements": []
    },
    "Ra223": {
      "key": "Ra223",
      "title": "Ra-223 骨轉移治療",
      "navLabel": "Ra-223 骨轉移治療",
      "eyebrow": "核醫治療",
      "subtitle": "Ra-223 骨轉移治療 是核醫治療的一種。先看治療想處理什麼、哪些事要提早說，以及回家後通常要怎麼照顧自己和家人。",
      "lead": "Ra-223 用的是 alpha 粒子的短程高能量優勢，但它真正適合的情境很窄：症狀性骨轉移、沒有內臟轉移，而且病人的主要臨床負擔確實來自骨病灶本身。",
      "tellUs": "最近的抽血報告、是否有持續腹瀉或失禁、是否裝有尿布或造口、是否合併其他全身性治療，以及最近骨痛是否快速惡化，這些都要在每次治療前重新告知。",
      "evidenceText": "整理依據含中華民國核醫學學會 Ra-223 民眾版衛教手冊與台灣多家醫學中心公開衛教資料。是否延後或終止療程，仍以每輪抽血與病程評估決定。",
      "cards": [
        {
          "title": "類鈣性質讓它走向骨轉移微環境",
          "text": "它不是追腫瘤專屬受體，而是利用骨轉移附近正在重塑的環境聚積。"
        },
        {
          "title": "沒有內臟轉移這條線很重要",
          "text": "因為當病程已由肝肺等器官主導，Ra-223 的優勢就很難真正轉成臨床獲益。"
        },
        {
          "title": "回家後還是有幾件事要記得",
          "text": "糞便排泄、如廁清潔和抽血追蹤，都是每次治療後仍要持續注意的事。"
        },
        {
          "title": "每次治療前都要先看抽血",
          "text": "骨髓和血球狀況能不能承受，常會影響下一次治療能不能如期進行。"
        }
      ],
      "sourceKeys": [
        "taiwanRa223Guide",
        "taiwanNuclearMedicine"
      ],
      "supplements": [
        {
          "title": "真正的療程感受，通常不是打一針就結束",
          "html": `
            <div class="checklist">
              <div class="checklist-item">
                <strong>多數是每四週一次，連續數個療程</strong>
                治療能不能走完整個療程，除了症狀有沒有改善，更取決於每次抽血後血球是否還有餘裕。
              </div>
              <div class="checklist-item">
                <strong>疼痛不一定立刻下降</strong>
                有些人會先覺得差不多，甚至短暫不舒服。這不一定代表沒效，但若疼痛惡化很快，仍要讓團隊知道是不是病程改變。
              </div>
              <div class="checklist-item">
                <strong>骨轉移以外的病情也要同步追蹤</strong>
                因為 Ra-223 的優勢在骨病灶；若病程已轉向肝、肺或其他器官，治療方向可能必須改變。
              </div>
            </div>
          `
        },
        {
          "title": "回家後，最常被忽略的是排泄衛教",
          "html": `
            <div class="fact-list">
              <section class="fact-item">
                <h4>糞便處理與如廁清潔要照規則做</h4>
                <p>Ra-223 主要由腸道排出，因此如廁衛生、排泄物處理與照護者手部清潔要比平常更仔細。</p>
              </section>
              <section class="fact-item">
                <h4>沒有隔離，不代表完全沒有注意事項</h4>
                <p>大部分人不需要像 I-131 那樣住院隔離，但每輪都還是要確認家中照護情境、血球變化與出血感染風險。</p>
              </section>
            </div>
          `
        }
      ]
    },
    "Lu177PSMA": {
      "key": "Lu177PSMA",
      "title": "Lu-177 PSMA 治療",
      "navLabel": "Lu-177 PSMA 治療",
      "eyebrow": "核醫治療",
      "subtitle": "Lu-177 PSMA 治療 是核醫治療的一種。先看治療想處理什麼、哪些事要提早說，以及回家後通常要怎麼照顧自己和家人。",
      "lead": "當 mCRPC 走到後線治療，PSMA 影像看起來很亮不一定就代表一定受益。這頁的決策核心在於：全身病灶有多少仍屬於 PSMA 可治療疾病，哪些器官又會先替它付代價。",
      "tellUs": "是否有尿路阻塞、長期導尿、腎功能下降、明顯口乾、近期感染、骨髓功能偏低，或最近疼痛與體重掉得很快，這些都會影響治療安全與安排。",
      "evidenceText": "整理依據含台灣核醫學會 Lu-177 衛教資料與國內醫學中心公開治療說明。是否適合治療，仍要回到 PSMA 影像表現、腎功能、血球與整體病程目標。",
      "cards": [
        {
          "title": "不是有亮點就夠",
          "text": "若整體腫瘤生物學已去分化，只剩少數病灶保有 PSMA，治療效果往往不如影像表面那麼樂觀。"
        },
        {
          "title": "唾液腺、腎臟與骨髓要一起想",
          "text": "這不是只看腫瘤有沒有入口，也要看正常器官能不能承受代價。"
        },
        {
          "title": "尿路管理是返家衛教核心",
          "text": "因為排泄帶來的輻射處理，會直接影響病人回家後的生活安排與污染風險。"
        },
        {
          "title": "這頁必須和病程目標一起讀",
          "text": "有時候治療目標是延長控制，有時候是減症狀，兩者會改變你怎麼和病人談風險與期待。"
        }
      ],
      "sourceKeys": [
        "taiwanLu177Guide",
        "taiwanNuclearMedicine"
      ],
      "supplements": [
        {
          "title": "治療前，團隊真正想確認的是這三件事",
          "html": `
            <div class="checklist">
              <div class="checklist-item">
                <strong>PSMA 影像是否真的支持治療</strong>
                不是只有一兩個病灶亮就算通過，團隊會看整體病灶分布，確認主要病程仍屬於 PSMA 可標靶疾病。
              </div>
              <div class="checklist-item">
                <strong>腎臟、骨髓、唾液腺是否承受得起</strong>
                這些正常器官會一起承受劑量，所以抽血、腎功能與症狀追蹤缺一不可。
              </div>
              <div class="checklist-item">
                <strong>這次治療追求的是什麼</strong>
                如果目標是延長控制，會更重視療程連續性；如果目標是減輕症狀，對副作用與生活品質的權衡也會不同。
              </div>
            </div>
          `
        },
        {
          "title": "病人最常遇到的日常問題",
          "html": `
            <div class="fact-list">
              <section class="fact-item">
                <h4>口乾、味覺改變與疲倦</h4>
                <p>這些症狀不一定每個人都明顯，但出現時會很影響生活，最好在每一輪回診時具體描述，而不是只說「還好」。</p>
              </section>
              <section class="fact-item">
                <h4>返家後的排尿與接觸衛教</h4>
                <p>因為藥物會隨尿液排出，如廁衛生、補水與短期接觸注意事項都要照單張或醫師指示做，不要自己縮短天數。</p>
              </section>
            </div>
          `
        }
      ]
    },
    "Lu177DOTATATE": {
      "key": "Lu177DOTATATE",
      "title": "Lu-177 PRRT 治療",
      "navLabel": "Lu-177 PRRT 治療",
      "eyebrow": "核醫治療",
      "subtitle": "Lu-177 PRRT 治療 是核醫治療的一種。先看治療想處理什麼、哪些事要提早說，以及回家後通常要怎麼照顧自己和家人。",
      "lead": "Lu-177 DOTATATE 治療不是每個人都適合。醫師通常會先看受體表現、腎功能、骨髓狀況，以及身體能不能承受分次治療。",
      "tellUs": "長效體抑素針劑最後一次施打時間、腎功能、近期噁心嘔吐、是否容易脫水、以及以往治療後血球恢復速度，都要在排程前先說。",
      "evidenceText": "整理依據含台灣神經內分泌腫瘤病友關懷協會公開衛教與台灣核醫學會 Lu-177 資料。實際療程間距、腎保護方案與是否繼續下一輪，仍以受體影像與抽血結果決定。",
      "cards": [
        {
          "title": "先看受體表現夠不夠",
          "text": "DOTATATE / DOTATOC PET 的結果，會影響醫師判斷這項治療值不值得做。"
        },
        {
          "title": "氨基酸保腎不是配角",
          "text": "腎臟是最需要被保護的器官之一，所以 amino acid infusion 本身就是治療設計的一部分。"
        },
        {
          "title": "噁心常來自保護流程本身",
          "text": "很多病人最不舒服的不是放射藥物，而是腎保護輸液與整體療程負擔。"
        },
        {
          "title": "通常需要分次治療",
          "text": "PRRT 比較常是分好幾次完成，治療效果和副作用也需要一路追蹤。"
        }
      ],
      "sourceKeys": [
        "taiwanNetPrrt",
        "taiwanLu177Guide",
        "taiwanNuclearMedicine"
      ],
      "supplements": [
        {
          "title": "開始前先確認：不是每個 NET 都會走到 PRRT",
          "html": `
            <div class="fact-list">
              <section class="fact-item">
                <h4>先有受體，再談治療</h4>
                <p>DOTATATE / DOTATOC PET 看到的受體表現，不只是影像結果，也是後續治療是否值得進行的關鍵條件。</p>
              </section>
              <section class="fact-item">
                <h4>腎功能與骨髓餘裕要留得住</h4>
                <p>PRRT 常不是只做一次，因此團隊看的是你能不能一路完成多次治療，而不是只過第一輪。</p>
              </section>
            </div>
          `
        },
        {
          "title": "治療當天，很多人最不舒服的是保護流程",
          "html": `
            <div class="checklist">
              <div class="checklist-item">
                <strong>氨基酸輸液是為了保護腎，不是多餘程序</strong>
                它會拉長治療時間，也可能帶來噁心、腹脹或不適，所以通常需要事先準備止吐與補水。
              </div>
              <div class="checklist-item">
                <strong>療程後不是立刻忘記這件事</strong>
                下一輪能不能接著做，要看血球、腎功能與症狀有沒有回到安全範圍。
              </div>
            </div>
          `
        }
      ]
    },
    "Y90SIRT": {
      "key": "Y90SIRT",
      "title": "Y-90 肝癌栓塞治療",
      "navLabel": "Y-90 肝癌栓塞治療",
      "eyebrow": "核醫治療",
      "subtitle": "Y-90 肝癌栓塞治療 是核醫治療的一種。先看治療想處理什麼、哪些事要提早說，以及回家後通常要怎麼照顧自己和家人。",
      "lead": "Y-90 很容易被理解成肝內放射治療，但它真正的靈魂是血流分布學。你不是把放射性東西放進肝臟而已，而是在利用腫瘤偏肝動脈供血這個現象做選擇性送達。",
      "tellUs": "",
      "evidenceText": "",
      "cards": [
        {
          "title": "Mapping 幾乎和正式治療同等重要",
          "text": "MAA 模擬是在證明你對血流的假設沒有錯，不是走程序。"
        },
        {
          "title": "肺分流與腸道異常分流是兩大警報",
          "text": "因為一旦微球跑錯地方，風險不是輕微副作用，而是嚴重非目標照射。"
        },
        {
          "title": "肝功能餘裕必須先算進來",
          "text": "Y-90 不是只看腫瘤能不能打，也要看剩下的肝能不能承受被治療後的反應。"
        },
        {
          "title": "這頁一定要用跨科語言看",
          "text": "介入放射、肝膽腸胃與核醫缺一不可，所以它不是任何單科能獨立完成的劇本。"
        }
      ],
      "supplements": []
    }
  }
};
