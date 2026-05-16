// ================================================================
// Nuclear Medicine Field Guide — Complete Data & Application Logic
// ================================================================

// --- EXAM DATA ---
const EXAM_DATA = {

HomeHub: {
    title: "首頁總覽",
    subtitle: "先做對，再做快。把高頻任務、高風險提醒與常用工具收在同一頁。",
    category: "home",
    isHomeHub: true,
    content: []
},

// ================================================================
// 📚 核醫小學堂
// ================================================================

NMBasics: {
    title: "核醫原理、儀器與技術",
    subtitle: "從功能影像、gamma camera 到 PET/CT 與 QC，建立核醫設備與成像的基本觀念",
    category: "learning",
    content: [
        {
            type: "info-box-emerald",
            html: `<h4>📚 先抓住三個基本觀念：功能影像、設備差異與 QC</h4>
            <p>新人先掌握三件事：<strong>核醫在看功能</strong>、<strong>不同設備各自在解不同問題</strong>、以及<strong>QC 沒做好時，影像看起來像病人的問題，其實可能是設備或流程的問題</strong>。</p>
            <p>國際上目前的主流趨勢很清楚：一般核醫仍以<strong>雙 detector Anger camera 搭配 SPECT/CT</strong>為主力；高階系統朝<strong>數位化與定量化</strong>前進；心肌專科則已大量使用<strong>CZT 專門系統</strong>來換取更高靈敏度、更短掃描時間與更低劑量可能性。</p>`
        },
        {
            type: "section",
            title: "小學堂怎麼讀",
            icon: "🗺️",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>1. 核醫原理、儀器與技術</h4>
                    <p>先弄懂功能影像、gamma camera、SPECT/CT、PET/CT、PET/MR 與 QC 的基本邏輯。</p>
                </div>
                <div class="learning-card">
                    <h4>2. 文件與品質管理</h4>
                    <p>先分清品質手冊、程序書、作業規範、表單與紀錄各自在做什麼，避免文件寫得很多卻不好用。</p>
                </div>
                <div class="learning-card">
                    <h4>3. 熱核室與製劑作業</h4>
                    <p>收貨、分裝、放行、運送、污染偵測與廢棄處理，這些是 hot lab 最常真的出錯的地方。</p>
                </div>
                <div class="learning-card">
                    <h4>4. 病人溝通與衛教</h4>
                    <p>把電話、櫃台、檢前交代與治療後注意事項，翻成病人真的聽得懂的語言。</p>
                </div>
                <div class="learning-card">
                    <h4>5. 輻射防護與治療安全</h4>
                    <p>從台灣法規、劑量、事故、紀錄，一路接到 I-131、Lu-177 與 Ra-223 的治療安全邏輯。</p>
                </div>
                <div class="learning-card">
                    <h4>6. 藥物與劑量工具</h4>
                    <p>快速查藥物、成人與兒科活度，並用計算器交叉核對，不把表格當成唯一答案。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "核醫到底在看什麼？",
            icon: "🧪",
            html: `<div class="prose">
                <p><strong>核醫不是先看器官長什麼樣，而是先看它有沒有在正常運作。</strong>同樣是胸痛、骨痛、腎積水或腫瘤追蹤，CT / MRI 常擅長看結構，核醫則擅長看<strong>灌流、代謝、排泄、受體表現、骨重塑或發炎活性</strong>。</p>
                <ul>
                    <li><strong>CT / MRI（Anatomy）：</strong>看到大小、位置、形狀、結構破壞。</li>
                    <li><strong>NM / PET（Physiology）：</strong>看到器官在做什麼、病灶有多活躍、治療後還剩多少功能訊號。</li>
                </ul>
                <p>臨床上最重要的觀念是：<strong>功能改變常早於結構改變</strong>。例如骨轉移還沒在 X 光明顯溶骨時，骨掃描可能已經先看到成骨活性增加；腎臟超音波看到腎盂擴張時，MAG3 / DTPA 才能回答「到底是擴張還是真的阻塞」。</p>
            </div>`
        },
        {
            type: "section",
            title: "現在主流的核醫設備大致分成這幾類",
            icon: "📷",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>雙 detector Anger gamma camera</h4>
                    <p>目前仍是最常見的一般核醫主力。兩個大探頭繞病人旋轉，可做 planar、whole-body、SPECT 與 SPECT/CT，是大多數醫院的通用型工作馬。</p>
                </div>
                <div class="learning-card">
                    <h4>一般核醫用 CZT SPECT/CT</h4>
                    <p>CZT 以直接轉換偵測器取代傳統閃爍晶體加 PMT，目標是提高能量解析度、靈敏度與定量穩定性。它不是只給心肌用，也開始進入通用型 SPECT/CT。</p>
                </div>
                <div class="learning-card">
                    <h4>心肌專用 CZT 系統</h4>
                    <p>像 D-SPECT 這類系統不是萬用核醫相機，而是專門優化 myocardial perfusion imaging。它的價值在更高計數效率、更短掃描時間與 stress-first / low-dose 的彈性。</p>
                </div>
                <div class="learning-card">
                    <h4>數位 PET/CT</h4>
                    <p>現在主流高階 PET/CT 已大量使用 SiPM、TOF 與更強的定量能力。這些進步不只是畫質漂亮，而是讓小病灶偵測、低劑量與短時間掃描更可行。</p>
                </div>
                <div class="learning-card">
                    <h4>PET/MR</h4>
                    <p>PET/MR 不常是第一線量體設備，但在腦部、骨盆、兒科與特定軟組織問題上有獨特位置。它的賣點不是取代 PET/CT，而是把 PET 與 MRI 同步整合。</p>
                </div>
                <div class="learning-card">
                    <h4>混合影像已是主流，不是附加選配</h4>
                    <p>今天真正有臨床競爭力的核醫設備，幾乎都在往 SPECT/CT、PET/CT 或 PET/MR 走。單獨功能影像仍重要，但定位、衰減校正與定量需求已讓 hybrid 變成日常。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "主流機型與實機圖來源卡",
            icon: "🖼️",
            html: `<div class="equipment-source-grid">
                <a class="equipment-source-card" href="https://www.siemens-healthineers.com/en-us/molecular-imaging/xspect/symbia-intevo?stc=ushcc800202" target="_blank" rel="noopener noreferrer">
                    <span class="equipment-source-badge">雙 detector SPECT/CT</span>
                    <h4>Siemens Symbia Intevo</h4>
                    <p>代表性的通用型 SPECT/CT。適合拿來理解 today’s mainstream dual-head hybrid workflow。</p>
                    <span class="equipment-source-link">查看官方實機圖與產品頁</span>
                </a>
                <a class="equipment-source-card" href="https://www.gehealthcare.com/en/products/molecular-imaging/nuclear-medicine/nm-ct-870-dr.html" target="_blank" rel="noopener noreferrer">
                    <span class="equipment-source-badge">雙 detector SPECT/CT</span>
                    <h4>GE NM/CT 870 DR</h4>
                    <p>GE 現行主力之一，可用來理解一般核醫 hybrid camera 朝數位工作流與 quantitative SPECT 前進的方向。</p>
                    <span class="equipment-source-link">查看官方實機圖與產品頁</span>
                </a>
                <a class="equipment-source-card" href="https://www.gehealthcare.com/en-gb/products/molecular-imaging/nuclear-medicine/nm-ct-870-czt" target="_blank" rel="noopener noreferrer">
                    <span class="equipment-source-badge">通用型 CZT</span>
                    <h4>GE NM/CT 870 CZT</h4>
                    <p>讓讀者知道 CZT 並不只存在於心肌專機，也開始進到通用型 SPECT/CT 平台。</p>
                    <span class="equipment-source-link">查看官方實機圖與產品頁</span>
                </a>
                <a class="equipment-source-card" href="https://spectrum-dynamics.com/wp-content/uploads/2021/05/Cardiac-Digital-SPECT-D-SPECT-Spectrum-Dynamics.pdf" target="_blank" rel="noopener noreferrer">
                    <span class="equipment-source-badge">心肌專用 CZT</span>
                    <h4>Spectrum Dynamics D-SPECT</h4>
                    <p>代表性的 cardiac CZT 系統。適合用來理解為什麼 MPI 會出現「專機」而不是只靠傳統 gamma camera 升級。</p>
                    <span class="equipment-source-link">查看官方圖文資料</span>
                </a>
                <a class="equipment-source-card" href="https://www.siemens-healthineers.com/molecular-imaging/pet-ct/biograph-vision?stc=wwhc219972" target="_blank" rel="noopener noreferrer">
                    <span class="equipment-source-badge">數位 PET/CT</span>
                    <h4>Siemens Biograph Vision</h4>
                    <p>適合拿來示範當代 PET/CT 的關鍵字：SiPM、TOF、較高靈敏度與定量能力。</p>
                    <span class="equipment-source-link">查看官方實機圖與產品頁</span>
                </a>
                <a class="equipment-source-card" href="https://www.siemens-healthineers.com/en-us/magnetic-resonance-imaging/mr-pet-scanner/biograph-mmr" target="_blank" rel="noopener noreferrer">
                    <span class="equipment-source-badge">PET/MR</span>
                    <h4>Siemens Biograph mMR</h4>
                    <p>作為 PET/MR 的代表機型，適合介紹同步 PET 與 MRI 的臨床定位與場景，而不是把它講成單純更貴的 PET/CT。</p>
                    <span class="equipment-source-link">查看官方實機圖與產品頁</span>
                </a>
            </div>
            <p class="reading-note">這一區刻意做成<strong>圖片來源卡</strong>而不是直接複製原廠圖片。原因是官方產品圖多半受版權與使用條款限制；站內先提供來源卡，比較安全，也較不容易因外部圖檔失效而壞版。</p>`
        },
        {
            type: "section",
            title: "Gamma camera、準直儀與 CZT，到底差在哪裡？",
            icon: "🔬",
            html: `<div class="two-col">
                <div class="detail-card">
                    <h4>傳統 Anger gamma camera</h4>
                    <p>核心是<strong>準直儀 + NaI(Tl) 閃爍晶體 + PMT</strong>。gamma photon 先被 collimator 篩方向，再在晶體發光，最後由 PMT 把光訊號轉成電訊號。它成熟、通用、維修與臨床經驗都很完整。</p>
                </div>
                <div class="detail-card">
                    <h4>CZT 系統</h4>
                    <p>CZT（cadmium zinc telluride）是<strong>直接轉換偵測器</strong>，不必先把 gamma photon 變成光再放大。好處通常是能量解析度與靈敏度更好，也更有利於高效率採集與定量。</p>
                </div>
                <div class="detail-card">
                    <h4>LEHR、LEGP、MEGP、HEGP 在講什麼</h4>
                    <p>準直儀不是附件，而是影像性格。<strong>LEHR</strong>偏重低能高解析、<strong>LEGP</strong>是傳統通用型、<strong>MEGP / HEGP</strong>則用在較高能量核種。孔徑、孔長與 septa 厚度，決定你拿到的是解析度還是計數效率。</p>
                </div>
                <div class="detail-card">
                    <h4>為什麼 MPI 會有專門的 CZT 心機</h4>
                    <p>因為心肌 perfusion 需要高計數效率、較短時間與固定解剖任務。當設備只專注心臟，就能用幾何設計、偵測器排列與 workflow 把效率往上推，不必像通用型相機那樣兼顧全身各類檢查。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "什麼是 SPECT、SPECT/CT、PET/CT、PET/MR？",
            icon: "🧭",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>SPECT</h4>
                    <p>讓 gamma camera 繞病人取得多角度資料，再重建成單光子斷層影像。它回答的是「放射藥物在三維空間裡分布在哪裡」。</p>
                </div>
                <div class="learning-card">
                    <h4>SPECT/CT</h4>
                    <p>不是把 CT 當附贈圖，而是把<strong>定位、衰減校正與部分 artefact 辨識</strong>一起納進來。很多檢查一旦沒有 CT，判讀信心就會大幅下降。</p>
                </div>
                <div class="learning-card">
                    <h4>PET/CT</h4>
                    <p>PET 看正子核種與 coincidence detection，PET/CT 則把代謝 / 受體訊號和解剖位置、衰減校正與定量整合起來。現在已是腫瘤 PET 的主流配置。</p>
                </div>
                <div class="learning-card">
                    <h4>PET/MR</h4>
                    <p>適合軟組織對比、腦部、骨盆與特定研究或兒科場景。它的強項不只是少一點 CT，而是 PET 與 MRI 的同步資訊能回答某些 PET/CT 不擅長的問題。</p>
                </div>
            </div>
            <p class="reading-note">一句話抓差異：<strong>SPECT / PET 是功能成像方法；SPECT/CT、PET/CT、PET/MR 是把功能訊號放回解剖與定量脈絡中的混合平台。</strong></p>`
        },
        {
            type: "section",
            title: "QC 不是工程師的事，而是影像可信度的底線",
            icon: "🧪",
            html: `<div class="two-col">
                <div class="detail-card">
                    <h4>為什麼要做 QC</h4>
                    <p>IAEA 對 gamma camera QC 的核心說法很直接：你要確定病人影像上的異常來自病人，而不是來自相機本身。若均勻度、COR、能峰、CT 數值或 PET normalization 漂掉，最後的假陽性與假陰性看起來都會像病灶。</p>
                </div>
                <div class="detail-card">
                    <h4>QC 不是只在裝機那天做一次</h4>
                    <p>新機驗收很重要，但真正保護臨床的是<strong>例行 QC</strong>。設備今天能開機，不代表今天的影像就一定可信。尤其 hybrid 系統的風險是 SPECT、PET、CT 任一端漂掉，都可能影響融合與定量。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "常見 QC 節奏：每天、每週、定期各在守什麼",
            icon: "📋",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>Gamma camera / SPECT 每日</h4>
                    <p>常見重點包括<strong>能峰確認、intrinsic / extrinsic flood uniformity</strong>。目標是盡早抓出 PMT 漂移、晶體問題或均勻度異常，不要等病人影像出現環狀或大片不均才發現。</p>
                </div>
                <div class="learning-card">
                    <h4>SPECT 每週或定期</h4>
                    <p><strong>COR（center of rotation）</strong>、多探頭對位、tomographic uniformity 與部分 phantom 測試，都是在守三維重建的幾何正確性。COR 漂掉時，影像會看起來像病灶模糊或錯位。</p>
                </div>
                <div class="learning-card">
                    <h4>CT 端的 QC</h4>
                    <p>CT number accuracy、noise、均勻性、對位與 artefact 檢查不是 radiology 才需要。因為在 hybrid 影像裡，CT 問題會一路污染 attenuation correction、定位與融合品質。</p>
                </div>
                <div class="learning-card">
                    <h4>PET / PET-CT 的日常 QC</h4>
                    <p>daily QC、normalization / calibration、blank / detector stability 等程序是在守計數穩定與定量可信度。PET 的問題若沒抓到，SUV 與小病灶可視性都會被影響。</p>
                </div>
                <div class="learning-card">
                    <h4>年度或醫學物理師層級測試</h4>
                    <p>空間解析度、靈敏度、系統性能、NEMA / 驗收級項目與完整 performance survey，通常不會每天做，但它們決定設備是否仍在規格與可接受趨勢內。</p>
                </div>
                <div class="learning-card">
                    <h4>QC 的真正意義</h4>
                    <p>不是為了把表單填滿，而是讓你在病人上機前就知道：今天這台機器的數據，還值不值得你信。</p>
                </div>
            </div>
            <div class="source-badges">
                <span class="guide-tag local">IAEA PET/CT QA</span>
                <span class="guide-tag local">IAEA SPECT/CT Atlas</span>
                <span class="guide-tag local">NEMA NU 1-2023</span>
                <span class="guide-tag local">AAPM Report 249</span>
            </div>`
        }
    ]
},

DocumentControl: {
    title: "文件與品質管理",
    subtitle: "Document Control and Quality Management — 從品質手冊、程序書到紀錄追溯，建立核醫科文件系統",
    category: "learning",
    content: [
        {
            type: "info-box-blue",
            html: `<h4>🗂️ 文件管理的目的，是讓正確版本在正確時間被正確的人使用</h4>
            <p>核醫科很多錯誤，並不是大家不努力，而是事情一直靠<strong>口耳相傳</strong>：哪張表先填、哪個核種要看哪份仿單、污染事件要通報誰、I-131 出院限制用哪一版。只要知識停留在「某位學姐知道」，風險就還沒真正被制度接住。</p>
            <p>ISO 9001:2015 強調的是 documented information 要<strong>足以支撐流程、受控、可用、可追溯</strong>，並沒有硬性規定每個單位一定要長成同一座四階金字塔。<strong>四階文件</strong>是很常見、很好教、很好管的實務架構，但不是唯一合法答案。</p>
            <div class="source-badges">
                <span class="guide-tag local">ISO 9001:2015</span>
                <span class="guide-tag local">ISO 10013:2021</span>
                <span class="guide-tag local">QMS 實務</span>
            </div>`
        },
        {
            type: "section",
            title: "先把這張文件地圖看懂",
            icon: "🗺️",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>第一階：品質手冊</h4>
                    <p>回答的是<strong>我們這個系統在管什麼、範圍到哪、流程怎麼互相連動</strong>。它比較像地圖，不是把所有細節逐步重寫一遍。</p>
                </div>
                <div class="learning-card">
                    <h4>第二階：程序書</h4>
                    <p>回答的是<strong>誰在什麼情境下，依什麼順序與控制點完成一個流程</strong>。例如文件管制、採購驗收、異常通報、內部稽核。</p>
                </div>
                <div class="learning-card">
                    <h4>第三階：作業規範 / 作業指導書</h4>
                    <p>回答的是<strong>現場到底怎麼做</strong>。步驟、工具、警示、判定基準、照片或流程圖，多半都放在這一層。</p>
                </div>
                <div class="learning-card">
                    <h4>第四階：表單與紀錄</h4>
                    <p><strong>表單</strong>是空白模板，<strong>紀錄</strong>是填完後留下的證據。很多單位把這兩者混成一件事，之後就很難追責與追溯。</p>
                </div>
                <div class="learning-card">
                    <h4>外來文件</h4>
                    <p>法規、藥品仿單、原廠說明書、學會指引、供應商規格書，都不是你寫的，但若工作要靠它們，就必須被<strong>辨識、更新與受控</strong>。</p>
                </div>
                <div class="learning-card">
                    <h4>品質政策與品質目標</h4>
                    <p><strong>品質政策</strong>給方向與承諾；<strong>品質目標</strong>把方向翻成可衡量的改善目標。兩者是系統上方的牽引力，不是裝飾標語。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "核醫科最常失控的文件，不是厚手冊，而是這幾類",
            icon: "⚠️",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>外來文件版次沒更新</h4>
                    <p>法規、仿單、原廠說明書與學會指引若沒有指定更新責任人，很容易一份新、一份舊，最後現場回答不一致。</p>
                </div>
                <div class="learning-card">
                    <h4>表單欄位和 SOP 用語對不起來</h4>
                    <p>程序書說要記錄 A，表單卻沒有欄位；或現場一直填 B，之後回頭稽核根本無法追溯。</p>
                </div>
                <div class="learning-card">
                    <h4>修訂後沒有真正導入</h4>
                    <p>文件改版本身不難，難的是舊版有沒有收回、現場有沒有重訓、表單和公告有沒有一起更新。</p>
                </div>
                <div class="learning-card">
                    <h4>紀錄有填，但保存規則不清楚</h4>
                    <p>簽名、日期、保存年限、電子檔與紙本版本分別在哪裡，若一開始沒定義，出事時常找不到完整證據。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "四階文件不是照字數分，而是照「回答哪一種問題」分",
            icon: "🧭",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr><th>層級 / 類型</th><th>主要回答的問題</th><th>常見內容</th><th>最常寫錯的地方</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>第一階：品質手冊</td><td>我們這個系統為什麼存在？範圍在哪？流程怎麼串起來？</td><td>QMS 範圍、流程互動、組織角色、政策與主要文件引用</td><td>把標準逐條抄寫，做成一本沒人想打開的厚冊子</td></tr>
                        <tr><td>第二階：程序書</td><td>這個流程何時啟動、誰負責、要守住哪些控制點？</td><td>目的、範圍、角色、輸入 / 輸出、活動步驟、紀錄、修訂控制</td><td>只寫理念，不寫責任鏈；或寫太細，和作業規範打架</td></tr>
                        <tr><td>第三階：作業規範</td><td>實際操作到底怎麼做？做到什麼程度才算對？</td><td>逐步動作、設備 / 耗材、警示、判定標準、例外處理</td><td>步驟太空泛，導致新人看完仍不知道怎麼下手</td></tr>
                        <tr><td>第四階：表單 / 紀錄</td><td>我要填什麼？事情做過之後怎麼留下證據？</td><td>檢核表、交班單、點檢表、簽核欄、批次或事件紀錄</td><td>欄位設計與 SOP 用語不一致，或表單填完卻沒有保存規則</td></tr>
                        <tr><td>平行管理項：外來文件、政策、目標</td><td>我們依據哪些外部要求？系統想往哪裡走？</td><td>法規清單、仿單版次、學會指引、品質政策、品質目標與追蹤指標</td><td>只知道有這些文件，卻不知道誰更新、誰核可、哪一版有效</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="reading-note">真正成熟的文件系統，不是把內容越切越碎，而是讓每一層<strong>各司其職</strong>：地圖不代替導航，導航不代替手把手操作，操作也不能取代證據。</p>`
        },
        {
            type: "section",
            title: "文件寫了卻不好用，常見是這四種原因",
            icon: "🧱",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>把品質手冊寫成百科全書</h4>
                    <p>品質手冊應該幫人看懂範圍、流程與責任，不需要把每一個操作步驟再抄一遍。</p>
                </div>
                <div class="learning-card">
                    <h4>程序書寫理念，不寫控制點</h4>
                    <p>如果沒有角色、核對點、異常升級與紀錄欄位，文件再漂亮也很難保護現場。</p>
                </div>
                <div class="learning-card">
                    <h4>作業規範太空泛</h4>
                    <p>新人看完仍不知道從哪一步開始、要用什麼表單、做到什麼程度才算完成，這種規範等於沒有真的落地。</p>
                </div>
                <div class="learning-card">
                    <h4>表單很多，卻沒有追溯邏輯</h4>
                    <p>只要一份表單填完後不知道存在哪、保存多久、誰能調閱，就很難在異常事件時還原真相。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "第一階：品質手冊要像地圖，不要像重抄標準",
            icon: "📘",
            html: `<div class="two-col">
                <div class="detail-card">
                    <h4>品質手冊應該寫什麼</h4>
                    <p>如果你保留品質手冊，它最有價值的內容通常是：<strong>QMS 範圍</strong>、主要服務或作業範圍、流程互動圖、關鍵角色、品質政策、以及「哪些程序書與規範支撐這個系統」。它讓新人與主管能在短時間看懂整個盤面。</p>
                </div>
                <div class="detail-card">
                    <h4>品質手冊不應該做什麼</h4>
                    <p>不要把 ISO 條文逐句改成「本單位將...」。那種文件看起來正式，實際上最難讀，也最難維護。<strong>品質手冊要說清楚管理範圍與責任，不要替每個作業做逐步教學。</strong></p>
                </div>
                <div class="detail-card">
                    <h4>為什麼 2015 版後仍很多單位保留它</h4>
                    <p>因為手冊很適合做<strong>新人導入、管理審查、外部溝通</strong>。雖然 ISO 9001:2015 不再把品質手冊列成所有組織都必備的固定格式，但很多部門仍會保留一份較短、較清楚的版本，作為整體地圖。</p>
                </div>
                <div class="detail-card">
                    <h4>核醫科特別適合補什麼</h4>
                    <p>建議把<strong>熱核室、給藥 / 造影、治療性核醫、污染處理、輻防管理、病人衛教、異常回報</strong>這些核心流程的互動關係畫出來。這比一大段口號更能幫助大家快速對齊。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "第二階：程序書是責任鏈與控制點，不是把所有步驟塞滿",
            icon: "📑",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>先寫目的與範圍</h4>
                    <p>先說清楚這份程序書要管的是哪一段流程、涵蓋哪些情境、不涵蓋哪些例外。沒有邊界，後面責任與紀錄就會一直漂移。</p>
                </div>
                <div class="learning-card">
                    <h4>再寫角色與權責</h4>
                    <p>誰發起、誰執行、誰複核、誰核准、異常時要升級給誰，必須寫清楚。<strong>程序書最怕所有人都看得懂，但沒有人知道自己該負責哪一段。</strong></p>
                </div>
                <div class="learning-card">
                    <h4>把控制點放在會出錯的地方</h4>
                    <p>例如文件版次核對、放行條件、污染事件回報時點、仿單更新後的導入方式。程序書不是流水帳，而是把高風險節點鎖住。</p>
                </div>
                <div class="learning-card">
                    <h4>最後把表單、紀錄與附件接起來</h4>
                    <p>程序書要明確指出要用哪一張表、紀錄保存多久、修訂由誰維護。否則流程寫得再漂亮，實際上還是落不到可追溯。</p>
                </div>
            </div>
            <p class="reading-note">常見寫法可包含：<strong>文件名稱、目的、適用範圍、職責、名詞定義、作業內容、相關表單 / 紀錄、附件與修訂控制</strong>。不是每份都要一字不差照抄，但這些欄位能幫你避免重要資訊漏掉。</p>`
        },
        {
            type: "section",
            title: "第三、四階：作業規範與表單 / 紀錄，才是現場真正會拿在手上的文件",
            icon: "🛠️",
            html: `<div class="two-col">
                <div class="detail-card">
                    <h4>作業規範要能讓新人照著做</h4>
                    <p>第三階文件最重要的是<strong>具體</strong>：先備物品、操作順序、設備設定、關鍵警示、接受標準、異常時怎麼停下來。若一份文件看完後還要再問一次「所以第一步是什麼」，它就還不夠好。</p>
                </div>
                <div class="detail-card">
                    <h4>高風險警示要貼著步驟放</h4>
                    <p>像是放射性藥品標示核對、病人身分確認、污染處理、治療核種隔離限制，警示應放在對應步驟旁邊，而不是丟到文末附註。<strong>人在忙的時候只會看眼前那一段。</strong></p>
                </div>
                <div class="detail-card">
                    <h4>表單是模板，紀錄是證據</h4>
                    <p>表單可以設計成點檢、批次、交班或事件回報模板；但真正被稽核、被追溯、被用來釐清責任的，是填寫完成後的紀錄。若只存空白表單，不存完成紀錄，制度等於沒落地。</p>
                </div>
                <div class="detail-card">
                    <h4>表單設計要替現場減少腦力切換</h4>
                    <p>欄位名稱應與程序書、作業規範使用同一套字詞；順序也要接近現場作業順序。<strong>表單若逼人邊做邊翻譯，大家最後就會改成先做、事後補填。</strong></p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "外來文件與品質政策 / 品質目標：不是附件，而是兩個支柱",
            icon: "🏛️",
            html: `<div class="two-col">
                <div class="detail-card">
                    <h4>外來文件怎麼定義</h4>
                    <p>只要你的工作必須依賴某份外部來源才能做對，它就是外來文件。核醫常見的包括：<strong>法規、主管機關函釋、藥品仿單、原廠 IFU、學會指引、校正證明、供應商規格書</strong>。</p>
                </div>
                <div class="detail-card">
                    <h4>外來文件怎麼管才算真的受控</h4>
                    <p>至少要回答 4 件事：<strong>哪一些文件屬於必要依據、由誰追更新、現場看得到哪一版、舊版怎麼避免誤用</strong>。只把 PDF 丟在共用硬碟，不算真正管理。</p>
                </div>
                <div class="detail-card">
                    <h4>品質政策是方向，不是口號</h4>
                    <p>好的品質政策應該簡短、與單位目的相符、能反映顧客 / 病人需求、並承諾符合法規與持續改善。它是用來幫主管做決策的，不只是掛牆上的漂亮句子。</p>
                </div>
                <div class="detail-card">
                    <h4>品質目標要可衡量、可追、有人負責</h4>
                    <p>品質目標是把政策翻成可執行的改善指標，例如：<strong>文件改版導入完成率、批次紀錄完整率、污染事件通報時效、訓練到位率</strong>。沒有數字、期限、負責人與追蹤方式，就不算真正目標。</p>
                </div>
            </div>
            <p class="reading-note">一個好用的記法是：<strong>政策回答「我們重視什麼」；目標回答「今年準備把哪件事改善到什麼程度」</strong>。</p>`
        },
        {
            type: "section",
            title: "最常把文件系統做壞的 6 個錯法",
            icon: "⚠️",
            html: `<div class="prose">
                <ul class="checklist">
                    <li><strong>把所有內容都寫成 SOP：</strong>結果層級混亂，手冊、程序與作業規範互相重複。</li>
                    <li><strong>文件為了稽核而寫，不是為了現場而寫：</strong>字很多，但沒人真的拿來工作。</li>
                    <li><strong>表單欄位與 SOP 用語不一致：</strong>現場填寫時一直要自己翻譯，最後只剩補寫。</li>
                    <li><strong>只管內部文件，不管外來文件：</strong>法規、仿單、原廠說明更新了，現場卻還照舊版做。</li>
                    <li><strong>目標只有口號沒有追蹤：</strong>寫著「提升品質」，卻沒有指標、期限與責任人。</li>
                    <li><strong>修訂後沒有導入節奏：</strong>文件已更新，但教育訓練、舊版回收與現場切換沒有同步。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "讓人願意讀下去的文件寫法：先降負擔，再談制度",
            icon: "✍️",
            html: `<div class="prose">
                <ol>
                    <li><strong>第一段先回答「這份文件給誰用、在什麼情境打開」：</strong>人一知道用途，就比較願意讀下去。</li>
                    <li><strong>一份文件只處理一個核心任務：</strong>不要把採購、驗收、放行、異常、教育訓練都塞進同一份程序書。</li>
                    <li><strong>中文句子寧可短，也不要一路逗號到底：</strong>繁體中文在螢幕上最怕長句疊長句，讀者會很快失去定位。</li>
                    <li><strong>標題要像路標，不要像作文題目：</strong>讓人掃一眼就知道本段在回答什麼問題。</li>
                    <li><strong>高風險提醒貼著步驟放：</strong>不要把真正重要的警示藏到附註或文尾。</li>
                    <li><strong>表單、程序、作業規範要用同一套詞：</strong>這能大幅降低現場的認知切換成本，也比較不容易填錯。</li>
                </ol>
            </div>
            <p class="reading-note">如果一份文件能讓新人在壓力下快速找到「我現在該看哪裡、先做什麼、做到哪裡算完成」，那它才是真正有用的文件。</p>`
        }
    ]
},

PatientQA: {
    title: "病人溝通與衛教",
    subtitle: "Patient Communication and Education — 從電話、櫃台到檢前衛教都能直接上手",
    category: "learning",
    content: [
        {
            type: "info-box-blue",
            html: `<h4>核醫衛教先處理風險，再解釋流程</h4>
            <p>新人最容易犯的錯，不是「不會講」，而是<strong>講得太快、太空泛、太像背稿</strong>。核醫溝通的重點永遠是：<strong>先辨識這一項檢查真正相關的風險</strong>（如懷孕、哺乳、糖尿病、過敏史、無法平躺，以及是否有該檢查特定限制）、<strong>再解釋目的</strong>、<strong>最後交代配合事項</strong>。</p>
            <p>以下話術以台灣常見核醫實務為骨架，但<strong>藥物別、治療別、醫師個別指示永遠優先</strong>；尤其是懷孕、哺乳、I-131、Ga-67、壓力心肌灌流與治療性核醫，不能只靠制式回答。</p>`
        },
        {
            type: "section",
            title: "門診櫃台與檢前電話最常先確認的 4 件事",
            icon: "📋",
            html: `<div class="prose">
                <ol>
                    <li><strong>先確認病人知道自己做什麼：</strong>檢查名稱、檢查目的、當天流程。</li>
                    <li><strong>先抓禁忌與高風險：</strong>懷孕可能、哺乳、血糖，以及這項檢查特有的限制（例如 MPI / Cardiac PET 的咖啡因、甲狀腺檢查的含碘藥物與顯影史）。</li>
                    <li><strong>把時間講清楚：</strong>「打藥後不是立刻照，藥物要先到器官裡，這是核醫跟超音波/CT 最大不同。」</li>
                    <li><strong>把檢後注意講清楚：</strong>多喝水、多排尿、哺乳暫停多久、是否需要與幼兒保持距離。</li>
                </ol>
            </div>`
        },
        {
            type: "qa",
            items: [
                {
                    q: "打這個藥會有輻射嗎？對身體有沒有害？",
                    a: `<p><strong>臨床重點：</strong>核醫不是「沒有輻射」，而是<strong>有控制、可計算、風險遠低於臨床收益</strong>。診斷用核醫大多屬低到中等劑量，且多數藥物半衰期短、可經尿液或糞便排出。</p>
                        <p><strong>建議話術：</strong>「有輻射，但劑量是醫療上經過計算的微量，重點是幫醫師看出器官功能或病灶位置。做完後您多喝水、多排尿，藥物會慢慢排掉。一般診斷檢查的風險，遠低於漏掉重要疾病的風險。」</p>
                        <p><strong>新人不要亂講：</strong>不要說「完全沒有輻射」或「絕對沒事」。正確說法是<strong>風險低、可控制、必要時值得做</strong>。</p>`
                },
                {
                    q: "打顯影劑會不會過敏？我做 CT 有過敏過！",
                    a: `<p><strong>臨床重點：</strong>核醫藥物與 CT 含碘顯影劑通常是<strong>完全不同的分子</strong>。CT 過敏史不代表一定會對核醫藥物過敏，但仍應完整詢問病人過往反應內容。</p>
                        <p><strong>建議話術：</strong>「我們今天用的不是 CT 那種含碘顯影劑，跟您以前打的不一樣。核醫藥物過敏反應相對少見，不過如果您以前有嚴重過敏、氣喘、或打藥後曾經喘、起疹子，請先讓我們知道，我們會更小心觀察。」</p>
                        <p><strong>升級回報時機：</strong>若病人描述的是<strong>呼吸困難、血壓下降、喉頭緊縮</strong>，要回報醫師，不是只說「沒關係，不一樣」。</p>`
                },
                {
                    q: "為什麼別科照相 10 分鐘，你們要等 3–4 小時？",
                    a: `<p><strong>臨床重點：</strong>核醫不是先看解剖，而是看<strong>生理功能與代謝</strong>。藥物要先分佈到目標器官、被攝取、或排出背景，影像才會乾淨。</p>
                        <p><strong>建議話術：</strong>「核醫跟 X 光或超音波不一樣，不是把機器一開就看得到。我們要先讓藥物跑到骨頭、心臟、腎臟或腫瘤裡，所以中間需要等待。這段等待不是浪費時間，是讓影像變清楚、判讀更準。」</p>
                        <p><strong>教學點：</strong>骨骼掃描常等 2–4 小時、TRODAT 常等 3–4 小時、MIBG 甚至可能隔天或後天拍，<strong>等待時間本身就是檢查設計的一部分</strong>。</p>`
                },
                {
                    q: "這是什麼檢查？",
                    a: `<p><strong>臨床重點：</strong>病人多半不懂縮寫。新人要練的是把專有名詞翻成病人聽得懂的功能語言。</p>
                        <p><strong>萬用模板：</strong>「您今天做的是<strong>[檢查名稱]</strong>。這個檢查不是看外觀而已，是看<strong>[器官/病灶]</strong>有沒有正常運作，像是有沒有發炎、阻塞、缺血、轉移，或治療後還有沒有殘留。」</p>
                        <p><strong>教學示例：</strong></p>
                        <ul>
                            <li>骨骼掃描：看骨頭是否有轉移、骨折修復或感染。</li>
                            <li>DTPA / MAG3：看腎臟排泄是否順、是否真的阻塞。</li>
                            <li>MPI：看心肌血流夠不夠，有沒有缺血。</li>
                            <li>FDG PET：看全身代謝旺盛病灶，協助分期與追蹤。</li>
                        </ul>`
                },
                {
                    q: "我有糖尿病可以做嗎？",
                    a: `<p><strong>臨床重點：</strong>不是所有核醫都受糖尿病影響，但<strong>FDG PET 最受影響</strong>。高血糖與高胰島素都會讓 FDG 分佈失真，尤其肌肉與脂肪攝取增加、病灶對比下降。</p>
                        <p><strong>建議話術：</strong>「大部分核醫檢查糖尿病都可以做，但如果您做的是 FDG PET，血糖太高會影響準確度，所以我們會特別看血糖、空腹時間，必要時重新安排，這是為了讓檢查結果可信，不是故意刁難您。」</p>
                        <p><strong>實務提醒：</strong>要再往下問：今天有沒有打胰島素？幾點吃飯？血糖多少？若是 MPI 藥物壓力檢查，還要確認<strong>能否進食與停咖啡因</strong>。</p>`
                },
                {
                    q: "我懷孕了可以做嗎？",
                    a: `<p><strong>臨床重點：</strong>懷孕或可能懷孕，必須先處理，不可直接照常進行。診斷核醫多半不是第一選擇；治療性核醫（尤其 I-131）更是<strong>高度禁忌</strong>。</p>
                        <p><strong>建議話術：</strong>「如果您已懷孕或有可能懷孕，請先讓我們知道。核醫檢查要先由醫師重新評估必要性，有些情況會改別種檢查，有些要延後。這不是小題大作，是我們一定要先保護胎兒。」</p>
                        <p><strong>新人必做：</strong>不要只問一句「有沒有懷孕」，要再問<strong>月經、避孕、是否可能已受孕</strong>；模糊時要升級，不可自行放行。</p>`
                },
                {
                    q: "做完檢查可以餵母奶嗎？",
                    a: `<p><strong>臨床重點：</strong>這題<strong>不能一律回答一天</strong>。不同藥物差很多：某些 Tc-99m 診斷藥物常見為暫停 12–24 小時，但 Ga-67、I-131、部分治療性藥物處理完全不同。</p>
                        <p><strong>建議話術：</strong>「哺乳可不可以、要停多久，要看今天用的是哪一種藥。不是每個核醫藥物都一樣。我們會依今天的藥物告訴您要停幾小時或幾天，必要時要先把奶擠出備用。」</p>
                        <p><strong>教學底線：</strong>只要遇到哺乳問題，請養成習慣：<strong>看藥物名稱 → 查部門規範/醫師指示 → 再回答</strong>，不要靠印象。</p>`
                },
                {
                    q: "做完回去小孩可以靠近嗎？",
                    a: `<p><strong>臨床重點：</strong>要先分清楚是<strong>診斷檢查</strong>還是<strong>治療性核醫</strong>。大多數 Tc-99m 診斷檢查只需要短時間注意與嬰幼兒密切接觸；I-131、Lu-177 等治療則要更嚴格。</p>
                        <p><strong>建議話術：</strong>「如果今天是一般診斷檢查，回家後多喝水、多排尿，今天先不要跟小小孩長時間抱在一起就可以。但如果是治療性核醫，限制會嚴格很多，我們會給您書面注意事項，不能用同一套標準看待。」</p>
                        <p><strong>新人不要混在一起講：</strong>骨掃描、腎掃描、心臟掃描的檢後叮嚀，不能用 I-131 住院治療那套話術。</p>`
                },
                {
                    q: "檢查前到底能不能吃東西？藥要不要停？",
                    a: `<p><strong>臨床重點：</strong>這是核醫最容易出錯的地方之一。不同檢查前處置完全不同：PET 常需空腹與控糖，MPI 要禁咖啡因，甲狀腺相關要注意含碘藥物/顯影史，胃排空要看是否停腸胃蠕動藥。</p>
                        <p><strong>建議話術：</strong>「不是所有核醫都一樣，有些要空腹，有些反而可以吃，有些還要停特定藥。今天這項檢查我先幫您核對一次，避免到了現場才發現不能做。」</p>
                        <p><strong>教學底線：</strong>電話通知時不要用同一張 checklist 套所有檢查；要改成<strong>依檢查項目核對</strong>：PET 的空腹/控糖、MPI / Cardiac PET 的咖啡因、甲狀腺檢查的含碘藥物與顯影史、哺乳/懷孕等。</p>`
                },
                {
                    q: "打完藥如果不舒服，要到什麼程度才算異常？",
                    a: `<p><strong>臨床重點：</strong>診斷性核醫藥物本身嚴重反應少見，但壓力心肌灌流、血管擴張劑、運動測試、穿刺/導尿類流程都可能出現需要即時處理的症狀。</p>
                        <p><strong>建議話術：</strong>「如果只是輕微口渴、想尿尿、短暫熱熱的，多半沒關係；但如果有胸悶、喘、頭暈快昏倒、全身癢疹、噁心很明顯、注射部位很痛或腫起來，請立刻跟我們說，不要忍。」</p>
                        <p><strong>新人判斷：</strong>注射外滲、迷走神經反應、藥物壓力不適、急性過敏樣反應都要有警覺，該按鈴就按鈴，該叫醫師就叫醫師。</p>`
                },
                {
                    q: "為什麼你們一直叫我多喝水、多上廁所？",
                    a: `<p><strong>臨床重點：</strong>這不只是例行公事。多喝水、多排尿可以<strong>降低膀胱輻射劑量</strong>、減少背景干擾，也能讓骨掃描、腎臟掃描、PET 等影像更乾淨。</p>
                        <p><strong>建議話術：</strong>「我們請您多喝水不是客套，是希望藥物快點代謝掉，對身體更好，影像也會更清楚。尤其骨骼、腎臟、正子這類檢查，排尿做得好，影像品質差很多。」</p>`
                }
            ]
        },
        {
            type: "section",
            title: "不能只靠話術，必須升級給醫師或資深同仁的情境",
            icon: "🚨",
            html: `<div class="prose">
                <ul>
                    <li><strong>懷孕或可能懷孕</strong>：不可自行決定可不可以做。</li>
                    <li><strong>哺乳中的病人</strong>：先確認今天的藥物名稱與停餵規範。</li>
                    <li><strong>FDG PET 糖尿病控制不佳</strong>：血糖高、剛打胰島素、剛進食，都可能需要改期。</li>
                    <li><strong>壓力心肌灌流</strong>：氣喘、COPD、嚴重心律不整、近期咖啡因、跌倒風險。</li>
                    <li><strong>治療性核醫</strong>：I-131、Lu-177、Ra-223、Y-90 不能套用診斷檢查的回答。</li>
                    <li><strong>病人聽不懂但很焦慮</strong>：先放慢速度，講「目的、流程、今天要配合什麼」三件事，不要丟專有名詞。</li>
                </ul>
            </div>`
        }
    ]
},

Radiopharmacy: {
    title: "熱核室與製劑作業",
    subtitle: "Radiopharmacy Operations — 從收貨、分裝、放行到污染偵測",
    category: "learning",
    content: [
        {
            type: "info-box-blue",
            html: `<h4>熱核室最需要管好的是到貨、分裝、放行與污染控制</h4>
            <p>內容以 <strong>EANM cGRPP 2021</strong>、<strong>EANM quality risk management 2022</strong> 與台灣現行法規為骨架。重點不是炫技，而是把<strong>收貨、放行、分裝、貼標、運送、污染偵測、料帳與廢棄</strong>做成可重複、可追溯、可交班的流程。</p>
            <div class="source-badges">
                <span class="guide-tag eanm">EANM cGRPP 2021</span>
                <span class="guide-tag eanm">EANM QRM 2022</span>
                <span class="guide-tag local">TW 法規</span>
            </div>`
        },
        {
            type: "section",
            title: "先把一天流程看成 6 站",
            icon: "🧭",
            html: `<div class="flow-timeline">
                <div class="flow-step"><span class="step-label">01</span><span class="step-value">到貨與驗收</span></div>
                <div class="flow-step"><span class="step-label">02</span><span class="step-value">物料放行</span></div>
                <div class="flow-step"><span class="step-label">03</span><span class="step-value">抽藥 / 分裝 / 貼標</span></div>
                <div class="flow-step"><span class="step-label">04</span><span class="step-value">QC 與最終放行</span></div>
                <div class="flow-step"><span class="step-label">05</span><span class="step-value">院內運送與交接</span></div>
                <div class="flow-step"><span class="step-label">06</span><span class="step-value">污染偵測 / 料帳 / 廢棄</span></div>
            </div>
            <p class="reading-note">Hot lab 最危險的錯誤通常不是單一技術動作，而是<strong>在忙的時候跳過核對、先做再補寫、或把污染與偏差當成「等等再處理」</strong>。</p>`
        },
        {
            type: "section",
            title: "收貨與驗收：先把錯擋在門口",
            icon: "📦",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>到貨當下先做的事</h4>
                    <p>依 <strong>管理辦法第 53 條</strong>，放射性物質到貨時要確認<strong>包裝與包件表面完整性</strong>，並偵測<strong>表面劑量率</strong>與做<strong>擦拭測試</strong>後記錄；豁免量一百倍以下、微量包件或惰性氣體才有例外。</p>
                </div>
                <div class="learning-card">
                    <h4>沒有核對，就不算可以用</h4>
                    <p>EANM cGRPP 強調每一批 incoming material 都要先對照規格再使用。核種、批號、效期、文件、活度校時與供應商資訊，不該靠印象補記。</p>
                </div>
                <div class="learning-card">
                    <h4>先記錄，後面才有辦法追</h4>
                    <p>到貨異常、包件污染、文件缺漏、實收與預期不符，都要在當天留下可追溯紀錄，否則後續任何 QC 或事件調查都會斷線。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "抽藥、分裝、貼標與院內運送",
            icon: "💉",
            html: `<div class="prose">
                <ul>
                    <li><strong>先準備，再開做：</strong>病人名單、品項、注射器、屏蔽、標籤、量測與紀錄表先擺好，避免開了 vial 才來回找東西。</li>
                    <li><strong>分裝時同時做 ALARA：</strong>把手留在屏蔽後方、縮短停留、減少來回確認次數；需要二次核對的項目在開工前就先核對完。</li>
                    <li><strong>每一支分裝後立即貼標：</strong>至少把藥名 / 核種、活度與校正時間、病人或用途資訊標清楚，不要讓「暫時放旁邊」變成混藥來源。</li>
                    <li><strong>院內運送走最短、最清楚的路：</strong>使用有屏蔽、可關閉、標示清楚的容器，並讓交接的人知道拿的是什麼、要送去哪裡、是否需要立即使用。</li>
                    <li><strong>一旦懷疑污染、外滲、標示錯誤或文件不一致：</strong>先停放行，再做偵測、除污、紀錄與回報，不要想著「先送出去再說」。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "Generator、kit 與最終放行",
            icon: "🐄",
            html: `<div class="two-col">
                <div class="detail-card">
                    <h4>Mo-99 / Tc-99m generator</h4>
                    <p>Generator 是核醫熱核室最典型的日常來源。擠牛奶後不是直接拿去打，而是要確認<strong>Mo breakthrough、Al breakthrough</strong>與該批溶離狀態，再決定後續 kit 是否可用。</p>
                </div>
                <div class="detail-card">
                    <h4>最終放行不是看感覺</h4>
                    <p>EANM cGRPP 要求在最後放行前，必須回看<strong>batch record</strong> 與 <strong>laboratory control record</strong> 是否完整、正確、符合規格。能不能放行，應由有責任的人決定，而不是誰剛好最忙就誰決定。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "法規上一定會被問到的 hot lab 管理項目",
            icon: "🧾",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>管理項目</th><th>現場要做什麼</th><th>法源</th></tr></thead>
                    <tbody>
                        <tr><td>工作場所污染偵測</td><td>非密封放射性物質作業場所要在<strong>每週或每次作業完畢後</strong>偵測一次並記錄。</td><td>管理辦法第 50 條</td></tr>
                        <tr><td>廢水取樣</td><td>每年應就排放廢水<strong>至少取樣二次</strong>，並偵測分析核種。</td><td>管理辦法第 50 條</td></tr>
                        <tr><td>料帳與使用現況</td><td>對許可 / 登記中的放射性物質與設備，<strong>每半年</strong>查核料帳與使用現況。</td><td>管理辦法第 51 條</td></tr>
                        <tr><td>到貨驗收</td><td>到貨時確認包裝完整性、表面劑量率、擦拭測試並記錄。</td><td>管理辦法第 53 條</td></tr>
                        <tr><td>紀錄保存</td><td>測試報告、擦拭報告、廢水樣品、工作場所偵測與定期查核紀錄，<strong>保存 5 年</strong>。</td><td>管理辦法第 55 條</td></tr>
                        <tr><td>永久停用場所</td><td>非密封作業場所永久停用前，要先提<strong>除污計畫</strong>，完成後再附偵測證明報請檢查。</td><td>管理辦法第 41 條</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="reading-note">放射性廢棄物實務上要依<strong>核種、半衰期、物理型態與院內核准流程</strong>分流，不要把短半衰期診斷廢棄物與長半衰期治療廢棄物混在一起，更不要只憑「應該差不多衰掉了」就處理。</p>`
        }
    ]
},

RadiationSafety: {
    title: "輻射防護與治療安全",
    subtitle: "Radiation Protection and Therapy Safety — 整理法規、治療型輻防與返家風險分流",
    category: "learning",
    content: [
        {
            type: "info-box-amber",
            html: `<h4>法規的重點，是讓高風險工作有明確責任與紀錄</h4>
            <p>核醫現場最常遇到四類問題：</p>
            <ul>
                <li><strong>制度：</strong>能不能開工、誰負責。</li>
                <li><strong>劑量：</strong>有沒有超標、要怎麼監測。</li>
                <li><strong>事故：</strong>污染、遺失、異常時先做什麼。</li>
                <li><strong>紀錄：</strong>哪些東西一定要留下來。</li>
            </ul>
            <div class="source-badges">
                <span class="guide-tag local">游離輻射防護法</span>
                <span class="guide-tag local">施行細則</span>
                <span class="guide-tag local">安全標準</span>
                <span class="guide-tag local">管理辦法</span>
            </div>`
        },
        {
            type: "info-box-blue",
            html: `<h4>🌍 治療型核醫的國際趨勢，正在從「一律隔離」轉向「風險分級 + 標準化放行」</h4>
            <p>截至 <strong>2026 年 5 月</strong> 的公開官方文件，主流做法已不是把所有治療病人都放進同一種高隔離流程，而是依核種、排泄、出院量測與家庭條件分流。</p>
            <p><strong>I-131</strong> 仍是返家限制最嚴格的一群；<strong>Lu-177 PRRT / Lu-177 PSMA</strong> 越來越多中心採短住院或門診；<strong>Ra-223</strong> 多半維持門診治療。</p>
            <div class="source-badges">
                <span class="guide-tag snmmi">Joint EANM / IAEA / SNMMI 2024</span>
                <span class="guide-tag snmmi">Joint EANM / SNMMI 2023</span>
                <span class="guide-tag snmmi">ACR / ACNM / ARS / SNMMI 2024</span>
                <span class="guide-tag snmmi">SNMMI / ACR I-131 2024 rev.</span>
            </div>`
        },
        {
            type: "section",
            title: "核醫科最常遇到的法規場景",
            icon: "⚖️",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>場景</th><th>你要知道的事</th><th>主要法源</th></tr></thead>
                    <tbody>
                        <tr><td>開始做輻射作業</td><td>要有<strong>輻射防護管理組織 / 人員</strong>，而且輻射防護計畫需報核准後才可實施；未核准前不得進行輻射作業。</td><td>游離輻射防護法第 7 條、施行細則第 2 條</td></tr>
                        <tr><td>事故、遺失、超標</td><td>先採取必要防護措施並<strong>立即通知主管機關</strong>；後續調查、分析、紀錄與改善報告原則上要在<strong>30 日內</strong>提出。</td><td>游離輻射防護法第 13 條、施行細則第 4 條</td></tr>
                        <tr><td>新人、未成年與懷孕同仁</td><td>從事或參與輻射作業原則上需<strong>年滿 18 歲</strong>；已告知懷孕者要立即檢討工作條件並調整，不可放著照做。</td><td>游離輻射防護法第 14 條</td></tr>
                        <tr><td>在職教育訓練</td><td>輻射工作人員每人每年受訓<strong>至少 3 小時</strong>，並保存訓練紀錄。</td><td>施行細則第 5 條</td></tr>
                        <tr><td>個人劑量監測</td><td>雇主要做個別劑量監測；若評估一年曝露不可能超過一定比例，才可改環境監測或抽樣監測。<strong>30% 門檻對有效劑量是 6 mSv</strong>。</td><td>游離輻射防護法第 15 條、施行細則第 6 條</td></tr>
                        <tr><td>劑量紀錄保存</td><td>職業曝露紀錄要保存到離職或停止參與輻射工作後<strong>至少 30 年，且至年齡超過 75 歲</strong>；離職時要提供本人。</td><td>施行細則第 7 條</td></tr>
                        <tr><td>健康檢查與特別醫務監護</td><td>到職前要體格檢查、在職要定期健康檢查；若一次意外或緊急曝露<strong>超過 50 mSv</strong>，需啟動特別醫務監護與工作調整。</td><td>游離輻射防護法第 16 條</td></tr>
                        <tr><td>醫療曝露品質保證</td><td>醫療機構對公告指定的放射性物質 / 設施，需有<strong>醫療曝露品質保證計畫</strong>，並設組織或專業人員執行。</td><td>游離輻射防護法第 17 條</td></tr>
                    </tbody>
                </table>
            </div>`
        },
        {
            type: "section",
            title: "現場最常用到的劑量限度觀念",
            icon: "📊",
            html: `<div class="two-col">
                <div class="detail-card">
                    <h4>職業曝露常見上限</h4>
                    <ul>
                        <li><strong>有效劑量：</strong>每連續 5 年不得超過 100 mSv，且單一年不得超過 50 mSv。</li>
                        <li><strong>眼球水晶體：</strong>1 年不得超過 150 mSv。</li>
                        <li><strong>皮膚 / 四肢：</strong>1 年不得超過 500 mSv。</li>
                    </ul>
                </div>
                <div class="detail-card">
                    <h4>懷孕與一般人防護</h4>
                    <ul>
                        <li><strong>已告知懷孕後：</strong>賸餘妊娠期間下腹部表面等價劑量不得超過 2 mSv，體內攝入造成的約定有效劑量不得超過 1 mSv。</li>
                        <li><strong>一般人：</strong>年有效劑量不得超過 1 mSv。</li>
                    </ul>
                </div>
            </div>
            <p class="reading-note">以上數字來自<strong>游離輻射防護安全標準</strong>。現場判斷時，真正重要的是：<strong>先預防超標，不要等到佩章結果出來才補救</strong>。</p>`
        },
        {
            type: "section",
            title: "把 ALARA 變成每天做得到的動作",
            icon: "📋",
            html: `<div class="prose">
                <ul>
                    <li><strong>時間：</strong>先在腦中排好順序，再碰放射性物質。越是熟練，越要避免「邊想邊做」。</li>
                    <li><strong>距離：</strong>把鑷子、延長工具、鉛磚與鎢屏蔽當成日常工具，不是只有被提醒才拿。</li>
                    <li><strong>屏蔽：</strong>Tc-99m、I-131、F-18 的屏蔽需求不同；治療核種更不能偷懶用同一套器材想打天下。</li>
                    <li><strong>佩章與紀錄：</strong>個人劑量佩章要確實配戴，不交換、不遺失、不帶回家；結果出來要看，不是只負責交出去。</li>
                    <li><strong>污染處理：</strong>先局部管制、先除污、再重測、再記錄。污染沒有被記錄，就等於沒有真正被處理完。</li>
                    <li><strong>懷孕 / 哺乳 / 兒童：</strong>一旦涉及胎兒、哺乳或兒童接觸，不要靠通則回答，應回到藥物別與醫師 / 輻防指示。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "治療型輻防先分流：不要把 Lu-177、I-131、Ra-223 混成同一套話",
            icon: "🧭",
            html: `<div class="therapy-rp-overview-grid">
                <div class="therapy-rp-overview-card">
                    <span class="therapy-rp-pill">Lu-177 PRRT</span>
                    <h4>主風險：前 48–72 小時尿液污染</h4>
                    <p>國際趨勢偏向<strong>風險分級放行</strong>，許多中心採短住院或門診，但前提是尿液污染控制、病人理解返家規範、家中條件可配合。</p>
                </div>
                <div class="therapy-rp-overview-card">
                    <span class="therapy-rp-pill">Lu-177 PSMA</span>
                    <h4>主風險：尿液排泄 + 個別接觸限制</h4>
                    <p>原則與 PRRT 接近，但院內流程會依適應症、病人骨髓 / 腎功能、影像評估與局部副作用監測略有不同。</p>
                </div>
                <div class="therapy-rp-overview-card">
                    <span class="therapy-rp-pill">I-131</span>
                    <h4>主風險：外照射與污染都高一級</h4>
                    <p>與 Lu-177 最大差別在於<strong>返家接觸限制通常更嚴格</strong>，出院時劑量率、住家環境與兒童 / 孕婦接觸安排都更關鍵。</p>
                </div>
                <div class="therapy-rp-overview-card">
                    <span class="therapy-rp-pill">Ra-223</span>
                    <h4>主風險：排泄物衛生，不是長期隔離</h4>
                    <p>主流做法是門診治療。由於是 alpha 治療，外照射較低，重點通常放在<strong>前 7 天如廁與體液衛生</strong>。</p>
                </div>
            </div>
            <p class="therapy-rp-footnote">不同核種的病房需求、出院量測與返家限制不同，應分開判斷。</p>`
        },
        {
            type: "section",
            title: "次單元 1｜Lu-177 DOTATATE PRRT：現在主流不是高隔離，而是風險分級放行",
            icon: "🟡",
            html: `<div class="therapy-rp-module">
                <p class="therapy-rp-summary">目前可查到的 2024 國際實務指引與近年實證研究一致指出：<strong>Lu-177 DOTATATE 的核心不是比照 I-131 長時間隔離</strong>，而是把住院或門診選擇、劑量率放行、尿液污染控制與書面衛教做成標準化流程。NANETS / SNMMI 程序標準提到其主要經尿液排泄，累積排泄約為 <strong>5 小時 44%、24 小時 58%、48 小時 65%</strong>，所以前 3 天的工作焦點是防止尿液污染，而不是把病人想成長時間高外照射來源。</p>
                <div class="therapy-rp-grid">
                    <div class="therapy-rp-panel">
                        <h4>世界趨勢</h4>
                        <p>越來越多中心採用<strong>short stay 或 outpatient / day-care PRRT</strong>。是否留宿 1 晚，通常取決於當地法規、院內污水與病房設計、病人自理能力，以及返家後是否能遵守限制。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>院內污染重點</h4>
                        <p>專用廁所、坐著解尿、雙沖水、勤洗手仍是基本盤。若病人有尿失禁、行動不便或需導尿，污染風險會大幅升高，這類病人較適合短住院而非直接日間放行。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>醫護防護重點</h4>
                        <p>暴露管理重點在<strong>近距離停留時間、管路操作與處理尿液 / 血液 / 嘔吐物</strong>。胺基酸輸注可能引起噁心，護理流程要先把止吐、外滲觀察與污染包準備好。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>出院後重點</h4>
                        <p>前 3 天多喝水、常解尿、雙沖水、個人物品分開使用，並減少與家人長時間近距離接觸。若家中有孕婦、嬰幼兒或無獨立廁所，放行前要重新評估。</p>
                    </div>
                </div>
                <p class="therapy-rp-note">更新依據：Joint EANM / IAEA / SNMMI practical guidance（2024）、NANETS / SNMMI PRRT procedure standard、EJNMMI Physics outpatient precautions study。</p>
            </div>`
        },
        {
            type: "section",
            title: "次單元 2｜Lu-177 PSMA：原則接近 PRRT，但不是直接複製貼上",
            icon: "🔵",
            html: `<div class="therapy-rp-module">
                <p class="therapy-rp-summary">Lu-177 PSMA 的輻防主軸和 PRRT 相近，都是以<strong>風險分級、出院前量測、返家衛教與排泄物衛生</strong>為骨架；但它的適應症、院內決策節點、局部副作用與病人組成不同，因此不建議把 PRRT 話術原封不動套用到 PSMA 病人。</p>
                <div class="therapy-rp-grid">
                    <div class="therapy-rp-panel">
                        <h4>世界趨勢</h4>
                        <p>隨著 PSMA-RLT 普及，國際文件已把它視為可標準化執行的治療流程。多數中心可在量測後放行，不一定需要長住院，但仍須依當地規範與實際劑量率決定。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>污染與排泄</h4>
                        <p>主要仍是<strong>尿液排泄</strong>，因此返家後約 1 週的浴廁衛生很重要。SNMMI 病人說明明確建議坐著解尿、雙沖水，並避免共用毛巾、牙刷與貼身用品。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>醫護與院內流程</h4>
                        <p>這群病人常是多線治療後的 mCRPC，除了輻防，還要同步看<strong>骨髓儲備、腎功能、唾液腺副作用、疼痛與體能狀態</strong>。因此「安全放行」不只看輻射，也要看整體照護能力。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>返家交代</h4>
                        <p>前 1 週以如廁衛生與減少不必要密切接觸為主，是否需分床、避免長時間近距離接觸，應依出院前量測與單位書面指示個別化，不宜給所有人同一天數。</p>
                    </div>
                </div>
                <p class="therapy-rp-note">更新依據：Joint EANM / SNMMI procedure guideline for 177Lu-PSMA-RLT（2023）、SNMMI patient procedure page、Lu-177 PSMA release / excretion studies。</p>
            </div>`
        },
        {
            type: "section",
            title: "次單元 3｜I-131 治療：外照射、污染、返家限制都不能用 Lu-177 規則取代",
            icon: "🟠",
            html: `<div class="therapy-rp-module">
                <p class="therapy-rp-summary">I-131 是這四種治療裡最不能「輕描淡寫返家限制」的核種之一。它兼具治療用 beta 與較強的 gamma 外照射成分，因此病人的<strong>住院長度、出院測量、返家距離限制與家庭情境評估</strong>，通常都比 Lu-177 更嚴格。ACR / ACNM / ARS / SNMMI / SPR 2024 修訂版與既有 SNMMI 指引都強調：病人放行後，不應讓任何一般民眾預期接受超過 <strong>5 mSv</strong> 的劑量，且出院時的 <strong>1 公尺劑量率</strong>應記錄並用來調整返家計畫。</p>
                <div class="therapy-rp-grid">
                    <div class="therapy-rp-panel">
                        <h4>世界趨勢</h4>
                        <p>趨勢不是一味延長住院，而是<strong>依法規與量測值個別化放行</strong>。但和 Lu-177 比較，I-131 仍更常需要住院病房、專用衛浴與較長的接觸限制規劃。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>院內污染重點</h4>
                        <p>污染來源不只尿液，還包括<strong>唾液、汗液、嘔吐物與床邊接觸面</strong>。病房流程要把補水、排尿、餐具 / 布巾管理與病房去污視為同一套鏈，而不是零碎提醒。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>醫護防護重點</h4>
                        <p>醫護停留時間要整批管理，避免因反覆進房造成不必要暴露。病房交班除了病情，也要交<strong>今日污染事件、補水排尿情況、測量進度與書面衛教完成度</strong>。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>返家限制重點</h4>
                        <p>與孕婦、幼兒、同床伴侶、共用衛浴者的接觸安排都要個別化。I-131 最怕把返家限制做成同一張模板，結果病人的居家條件根本無法執行。</p>
                    </div>
                </div>
                <p class="therapy-rp-note">更新依據：ACR–ACNM–ARS–SNMMI–SPR practice parameter for treatment with I-131 sodium iodide（Revised 2024）、SNMMI guideline for Therapy of Thyroid Disease with 131I 3.0、SNMMI / EANM DTC guidance。</p>
            </div>`
        },
        {
            type: "section",
            title: "次單元 4｜Ra-223：大多是門診治療，重點在體液衛生與血球監測",
            icon: "🟣",
            html: `<div class="therapy-rp-module">
                <p class="therapy-rp-summary">Ra-223 dichloride 的臨床定位和前面三者不同。它是 alpha 治療、外照射低、主流多採<strong>門診施打</strong>，因此輻防重點通常不是長時間隔離，而是把<strong>前 7 天排泄物衛生、照護者接觸防護與血球監測</strong>說清楚。2024 修訂的 ACR–ACNM–ARS–SNMMI practice parameter 也把 radiation precautions 明確列為流程核心之一。</p>
                <div class="therapy-rp-grid">
                    <div class="therapy-rp-panel">
                        <h4>世界趨勢</h4>
                        <p>Ra-223 幾乎都在門診流程中完成。適合族群本來就較窄，國際主流重點放在選對病人，而不是為所有病人設計長期隔離環境。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>污染與排泄</h4>
                        <p>外照射低不代表沒有衛教。若病人有腹瀉、失禁或需要他人協助如廁，排泄物與受污染衣物處理仍要嚴謹，尤其治療後前 7 天。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>醫護防護重點</h4>
                        <p>流程上要把<strong>給藥核對、血球檢查時程、注射後衛教與異常回報</strong>做成固定節奏。比起厚重屏蔽，Ra-223 更需要的是流程紀律與照護者教育。</p>
                    </div>
                    <div class="therapy-rp-panel">
                        <h4>返家交代</h4>
                        <p>SNMMI 病人資料建議治療後 <strong>7 天</strong>注意如廁衛生、處理體液時戴手套、污染衣物分開清洗。若家中照護仰賴家屬，衛教必須講到可執行層次。</p>
                    </div>
                </div>
                <p class="therapy-rp-note">更新依據：ACR–ACNM–ARS–SNMMI practice parameter for therapy with Radium-223 dichloride（Revised 2024）、SNMMI patient procedure page。</p>
            </div>`
        }
    ]
},

I131Ward: {
    title: "碘-131 病房與住院治療",
    subtitle: "I-131 Therapy Ward — 這不是一般診斷核醫，流程與風險完全不同",
    category: "learning",
    content: [
        {
            type: "info-box-rose",
            html: `<h4>☢️ I-131 病房要用另一套標準來看</h4>
            <p>I-131 治療不只是在病人服藥後結束；還要管好<strong>治療適應症、病人準備、住院期間污染風險、病房動線、出院測量與返家限制</strong>。內容依據 <strong>SNMMI / EANM 2022 DTC guideline</strong>、<strong>ACR-ACNM-ARS-SNMMI-SPR 2026 practice parameter</strong> 與近年 I-131 清除研究整理。</p>
            <div class="source-badges">
                <span class="guide-tag snmmi">SNMMI / EANM 2022</span>
                <span class="guide-tag snmmi">ACR / ACNM / SNMMI 2026</span>
                <span class="guide-tag local">TW 輻防流程</span>
            </div>`
        },
        {
            type: "section",
            title: "住院前一定先確認的 4 件事",
            icon: "🏥",
            html: `<div class="learning-card-grid">
                <div class="learning-card">
                    <h4>治療適應症與準備方式</h4>
                    <p>先釐清這次是殘餘甲狀腺消融、輔助治療還是已知病灶治療；TSH 刺激、低碘飲食、近期含碘顯影暴露與藥物停用，都要依醫師計畫逐項核對。</p>
                </div>
                <div class="learning-card">
                    <h4>懷孕與哺乳不能模糊帶過</h4>
                    <p>I-131 治療前必須明確排除懷孕；哺乳也不是「暫停一天」可以處理，需依治療性核醫規範與醫師指示辦理。</p>
                </div>
                <div class="learning-card">
                    <h4>病人要先拿到書面輻安說明</h4>
                    <p>治療前就要先講清楚住院、排泄、接觸限制與出院後注意事項，避免病人進房後才第一次聽見限制內容。</p>
                </div>
                <div class="learning-card">
                    <h4>病房與物資先就位</h4>
                    <p>專用衛浴、可除污動線、污染處理包、廢棄與布巾管理、測量與交班表單，都要在病人進房前備妥。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "病房流程要看成一條完整鏈",
            icon: "🔄",
            html: `<div class="flow-timeline">
                <div class="flow-step"><span class="step-label">01</span><span class="step-value">入院核對與說明</span></div>
                <div class="flow-step"><span class="step-label">02</span><span class="step-value">口服 I-131</span></div>
                <div class="flow-step"><span class="step-label">03</span><span class="step-value">補水與頻繁排尿</span></div>
                <div class="flow-step"><span class="step-label">04</span><span class="step-value">排泄物 / 污染管理</span></div>
                <div class="flow-step"><span class="step-label">05</span><span class="step-value">測量與出院判定</span></div>
            </div>
            <p class="reading-note">2026 年的前瞻性研究顯示，<strong>結構化補水</strong>可加速 I-131 清除、降低膀胱劑量，並讓病人更早達到可出院狀態；這也是為什麼病房裡「多喝水、多排尿」不是客套話。</p>`
        },
        {
            type: "section",
            title: "住院期間，醫護最需要守住的重點",
            icon: "🧤",
            html: `<div class="two-col">
                <div class="detail-card">
                    <h4>污染來源管理</h4>
                    <p>I-131 住院最常見的污染來源是<strong>尿液、唾液、汗液與嘔吐物</strong>。真正的重點不是病人「配不配合」，而是工作團隊有沒有先設計好可執行的排泄、清潔、布巾與廢棄流程。</p>
                </div>
                <div class="detail-card">
                    <h4>接觸時間要整批設計</h4>
                    <p>量體溫、發藥、詢問症狀、環境巡視與衛教盡量整合一次做完，避免醫護反覆短進短出，累積不必要的近距離停留。</p>
                </div>
                <div class="detail-card">
                    <h4>有症狀時先想污染與安全</h4>
                    <p>噁心、嘔吐、吞嚥困難、病房內灑漏或病人擅自離房，都不能只用一般病房思維處理；先確認是否造成污染，再依部門 spill / decon 流程處置。</p>
                </div>
                <div class="detail-card">
                    <h4>病房交班要交「限制」不是只交病情</h4>
                    <p>包含今日補水與排尿情況、是否有污染事件、是否已完成書面衛教、何時預計測量評估出院，這些都要交清楚。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "出院與返家交代：不能用模板硬套",
            icon: "📄",
            html: `<div class="prose">
                <ul>
                    <li><strong>出院不是看病人想不想回家：</strong>要依部門量測結果、法規 / 院規標準與醫師判斷決定，並留下可追溯紀錄。</li>
                    <li><strong>返家安排要能落地：</strong>與孕婦、幼兒的距離與接觸時間、睡眠安排、工作返場時間、交通方式與家中照護情境，要依治療活度與測量值調整，不能所有人都給同一張紙。</li>
                    <li><strong>補水與排尿仍然重要：</strong>返家後持續補水、勤排尿與做好如廁衛生，可幫助殘留 I-131 排除並降低家屬暴露。</li>
                    <li><strong>哺乳與備孕：</strong>不可自行恢復或自行抓天數，需依治療指示與專科團隊建議執行。</li>
                </ul>
            </div>`
        }
    ]
},

EmergencyCart: {
    title: "急救車管理",
    subtitle: "Emergency Cart — 日常檢查與盤點流程",
    category: "learning",
    content: [
        {
            type: "section",
            title: "每日任務",
            icon: "📋",
            html: `<div class="prose">
                <ul class="checklist">
                    <li>核對號碼鎖（Lock No.）是否完整相符</li>
                    <li>確認 AED 指示燈正常（綠燈閃爍）</li>
                    <li>填寫每日檢查紀錄表並簽名</li>
                    <li>確認氧氣鋼瓶壓力是否充足</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "盤點排程",
            icon: "📅",
            html: `<div class="two-col">
                <div class="detail-card">
                    <h4>📦 單位自行盤點</h4>
                    <p><strong>3 月 / 9 月</strong></p>
                    <p>清點藥品種類、數量、效期。效期 < 3 個月標記為即期品，提早更換。</p>
                </div>
                <div class="detail-card">
                    <h4>🏥 聯合藥劑科盤點</h4>
                    <p><strong>6 月 / 12 月</strong></p>
                    <p>藥劑科人員到場共同清點，核對藥品批號與紀錄。</p>
                </div>
            </div>`
        },
        {
            type: "info-box-rose",
            html: `<h4>⚠️ 特別注意</h4>
            <p>檢查所有藥品效期，<strong>即期品需提早更換</strong>。急救車鎖頭若有被破壞痕跡，需立即通報並重新盤點。</p>`
        }
    ]
},


DosageTable: {
    title: "藥物與劑量工具",
    subtitle: "Dosage Quick Reference and Calculator — 快速查藥物、活度與兒科劑量公式",
    category: "learning",
    content: [
        {
            type: "info-box-emerald",
            html: `<h4>📋 用劑量表前，先確認藥物名稱、檢查目的與成人 / 兒科情境</h4>
            <p>整合 <strong>SNMMI</strong> 與 <strong>EANM</strong> 最新指引。兒科劑量計算後若低於最低劑量（Min）應以 Min 給予；若高於成人劑量則以成人劑量為上限。表格和計算器是核對工具，不能取代醫囑、protocol 與實際量測。</p>`
        },
        {
            type: "section",
            title: "綜合劑量速查表",
            icon: "💊",
            html: `<div class="source-badges">
                <span class="guide-tag snmmi">SNMMI 2024/2025</span>
                <span class="guide-tag eanm">EANM Dosage Card v5.7</span>
                <span class="guide-tag local">台灣臨床共識</span>
            </div>
            <div class="data-table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr><th>類別</th><th>檢查</th><th>藥物</th><th>成人劑量</th><th>兒科公式</th><th>Min</th><th>指引</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><span class="cat-tag neuro">神經</span></td><td>腦血流灌注</td><td>Tc-99m HMPAO/ECD</td><td><strong>20 mCi</strong></td><td>0.3 mCi/kg (B)</td><td>5</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag eanm">E</span></td></tr>
                        <tr><td><span class="cat-tag neuro">神經</span></td><td>多巴胺受體</td><td>Tc-99m Trodat-1</td><td><strong>20–25 mCi</strong></td><td>0.3 mCi/kg</td><td>N/A</td><td><span class="guide-tag local">TW</span></td></tr>
                        <tr><td><span class="cat-tag cardiac">心臟</span></td><td>MPI 1-Day Rest</td><td>Tc-99m MIBI</td><td><strong>10 mCi</strong></td><td>0.2 mCi/kg</td><td>2</td><td><span class="guide-tag snmmi">S</span></td></tr>
                        <tr><td><span class="cat-tag cardiac">心臟</span></td><td>MPI 1-Day Stress</td><td>Tc-99m MIBI</td><td><strong>30 mCi</strong></td><td>—</td><td>—</td><td><span class="guide-tag snmmi">S</span></td></tr>
                        <tr><td><span class="cat-tag cardiac">心臟</span></td><td>MPI Tl-201</td><td>Tl-201 Chloride</td><td><strong>2–4 mCi</strong></td><td>避免</td><td>—</td><td><span class="guide-tag snmmi">S</span></td></tr>
                        <tr><td><span class="cat-tag cardiac">心臟</span></td><td>心臟類澱粉</td><td>Tc-99m PYP</td><td><strong>20 mCi</strong></td><td>—</td><td>—</td><td><span class="guide-tag snmmi">S</span></td></tr>
                        <tr><td><span class="cat-tag cardiac">心臟</span></td><td>MUGA</td><td>Tc-99m RBC</td><td><strong>20–25 mCi</strong></td><td>0.25 mCi/kg (B)</td><td>3</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag eanm">E</span></td></tr>
                        <tr><td><span class="cat-tag endo">內分泌</span></td><td>甲狀腺掃描</td><td>Tc-99m Pertechnetate</td><td><strong>5 mCi</strong></td><td>0.05 mCi/kg (B)</td><td>0.5</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag eanm">E</span></td></tr>
                        <tr><td><span class="cat-tag endo">內分泌</span></td><td>副甲狀腺</td><td>Tc-99m MIBI</td><td><strong>20–25 mCi</strong></td><td>0.2 mCi/kg (B)</td><td>2</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag eanm">E</span></td></tr>
                        <tr><td><span class="cat-tag bone">骨骼</span></td><td>全身骨骼</td><td>Tc-99m MDP</td><td><strong>20–25 mCi</strong></td><td>0.2 mCi/kg (B)</td><td>2</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag eanm">E</span></td></tr>
                        <tr><td><span class="cat-tag renal">腎臟</span></td><td>腎皮質 DMSA</td><td>Tc-99m DMSA</td><td><strong>5 mCi</strong></td><td>0.05 mCi/kg (A)</td><td>0.5</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag eanm">E</span></td></tr>
                        <tr><td><span class="cat-tag renal">腎臟</span></td><td>腎功能 DTPA</td><td>Tc-99m DTPA</td><td><strong>5–10 mCi</strong></td><td>0.2 mCi/kg (B)</td><td>1</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag eanm">E</span></td></tr>
                        <tr><td><span class="cat-tag renal">腎臟</span></td><td>腎功能 MAG3</td><td>Tc-99m MAG3</td><td><strong>5–8 mCi</strong></td><td>0.15 mCi/kg (A)</td><td>1</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag eanm">E</span></td></tr>
                        <tr><td><span class="cat-tag lung">肺</span></td><td>肺灌注</td><td>Tc-99m MAA</td><td><strong>4 mCi</strong></td><td>0.05 mCi/kg</td><td>0.5</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag eanm">E</span></td></tr>
                        <tr><td><span class="cat-tag gi">消化</span></td><td>胃排空</td><td>Tc-99m SC</td><td><strong>0.5–1 mCi</strong></td><td>固定 0.25</td><td>0.25</td><td><span class="guide-tag snmmi">S</span></td></tr>
                        <tr><td><span class="cat-tag gi">消化</span></td><td>肝脾 Colloid</td><td>Tc-99m Phytate/SC</td><td><strong>5 mCi</strong></td><td>0.05 mCi/kg</td><td>0.5</td><td><span class="guide-tag snmmi">S</span><span class="guide-tag local">TW</span></td></tr>
                        <tr><td><span class="cat-tag infection">感染</span></td><td>Ga-67 發炎</td><td>Ga-67 Citrate</td><td><strong>5 mCi</strong></td><td>0.04 mCi/kg</td><td>0.5</td><td><span class="guide-tag snmmi">S</span></td></tr>
                    </tbody>
                </table>
            </div>`
        }
    ]
},

DosageCalc: {
    title: "劑量計算器",
    subtitle: "Pediatric Dosage Calculator — 依 EANM / SNMMI 指引",
    category: "learning",
    isDosageCalc: true,
    content: []
},

Calendar: {
    title: "行事曆",
    subtitle: "2026 年假日與排班參考",
    category: "learning",
    isCalendar: true,
    content: []
},

// ================================================================
// ⚛️ 正子影像 PET
// ================================================================

PET: {
    title: "FDG PET/CT",
    subtitle: "全身腫瘤正子斷層掃描 — 癌症分期的黃金標準",
    category: "pet",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "FDG" },
            { label: "安靜等待", value: "60 分鐘" },
            { label: "上機攝影", value: "20–30 分鐘" }
        ],
        note: "若醫師評估需延遲影像（Delayed Scan），第一次照完後再等 1–2 小時。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：Warburg Effect</h4>
            <p>腫瘤細胞利用糖解作用（Glycolysis）的速率遠高於正常細胞。FDG（氟化去氧葡萄糖）為葡萄糖類似物，被細胞攝取後經 Hexokinase 磷酸化為 FDG-6-P，無法繼續代謝而「卡」在細胞內（Metabolic Trapping）。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>癌症分期（Staging）：</strong>肺癌、乳癌、大腸直腸癌、食道癌、頭頸癌、淋巴瘤、黑色素瘤等</li>
                    <li><strong>療效評估（Response）：</strong>化療/免疫治療後追蹤腫瘤代謝活性變化</li>
                    <li><strong>復發偵測（Restaging）：</strong>腫瘤指數上升、影像懷疑復發</li>
                    <li><strong>不明原發癌（CUP）：</strong>已知轉移但找不到原發腫瘤</li>
                    <li><strong>非腫瘤應用：</strong>不明熱（FUO）、血管炎（大血管發炎）、心肌存活性評估</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "排程與行政",
            icon: "��",
            html: `<div class="prose">
                <ul>
                    <li><span class="badge badge-rose">⚠️ 重要</span> <strong>每日截止 15:30 前</strong>完成訂藥 & 電話通知隔日病人</li>
                    <li>病人於打藥前 15 分鐘再進入注射室躺好</li>
                    <li><strong>顯影劑泡製：</strong>1 劑泡 500cc 水。Cr 過高者改為「喝水」並修改給藥紀錄單</li>
                    <li>NG 管病人請家屬自備<strong>灌食空針</strong></li>
                    <li><span class="badge badge-rose">⚠️ 淋巴癌</span> 淋巴癌病人務必在排程表上註記</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "排檢必確認",
            icon: "✅",
            html: `<div class="prose">
                <ul class="checklist">
                    <li>近 2 週有無做過<strong>鋇劑</strong>檢查？（金屬假影干擾）</li>
                    <li>可否平躺 20–30 分鐘不動？</li>
                    <li>有無糖尿病？（需空腹、控制血糖 < 200 mg/dL）</li>
                    <li>是否懷孕或哺乳？</li>
                    <li>近期是否接受化療/放療？（建議間隔 2–4 週）</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>📋 藥物劑量規則</h4>
            <p>標準上限：<strong>15 mCi</strong>。體重 > 80kg 紅筆標示。體重 < 40kg 請示主任（通常 7 mCi）。</p>
            <p><strong>禁食至少 6 小時，血糖 > 200 mg/dL 當下回報。</strong></p>`
        },
        {
            type: "section",
            title: "病人衛教",
            icon: "💊",
            html: `<div class="prose">
                <ul>
                    <li><strong>禁食：</strong>至少 6 小時（可喝少量白開水）</li>
                    <li><strong>注射後：</strong>閉眼、靜躺於微光房間，避免走動、說話、使用手機</li>
                    <li><strong>服裝：</strong>檢查時卸除所有金屬物品</li>
                    <li><strong>檢查後：</strong>多喝水、多排尿加速排泄</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "臨床寶典",
            icon: "💎",
            html: `<div class="prose">
                <h4>常見生理性攝取（假陽性來源）</h4>
                <ul>
                    <li><strong>棕色脂肪（BAT）：</strong>頸部/縱膈對稱性攝取，寒冷天氣常見，可用β-blocker 或溫暖環境預防</li>
                    <li><strong>肌肉攝取：</strong>說話→喉部肌肉、咀嚼→翼內肌、緊張→頸部肌肉</li>
                    <li><strong>腸道：</strong>正常腸道蠕動可見非均勻攝取，尤其大腸</li>
                    <li><strong>胸腺反彈：</strong>化療後免疫重建期常見</li>
                </ul>
                <h4>SUV 判讀要點</h4>
                <ul>
                    <li>SUVmax > 2.5 通常懷疑惡性（但非絕對標準）</li>
                    <li>SUV 受血糖、注射後時間、體重計算方式影響</li>
                    <li>療效評估建議使用 PERCIST 標準（SUL peak）</li>
                </ul>
            </div>`
        }
    ]
},

BrainPET: {
    title: "FDG PET Brain",
    subtitle: "腦部 FDG PET — 失智症鑑別與癲癇病灶定位",
    category: "pet",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "FDG" },
            { label: "安靜等待", value: "30–45 分鐘" },
            { label: "腦部攝影", value: "15–20 分鐘" }
        ],
        note: "注射時需在安靜、微光環境，閉眼不說話。"
    },
    content: [
        {
            type: "info-box-purple",
            html: `<h4>原理</h4>
            <p>正常腦部是人體代謝最旺盛的器官之一。不同類型失智症會造成特定腦區的代謝下降模式：Alzheimer's 典型為雙側顳頂葉與後扣帶迴低代謝。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>失智症鑑別：</strong>Alzheimer's vs 額顳葉失智（FTD）vs 路易體失智（DLB）</li>
                    <li><strong>癲癇病灶定位：</strong>發作間期（Interictal）低代謝區定位，術前評估</li>
                    <li><strong>腦腫瘤：</strong>鑑別復發 vs 放射性壞死</li>
                    <li><strong>腦炎：</strong>自體免疫腦炎的代謝異常模式</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政與注意事項",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>禁食 4–6 小時</li>
                    <li>注射環境：<strong>安靜、昏暗、閉眼、不說話</strong>（減少不必要的腦區激活）</li>
                    <li>注射後至少等待 30 分鐘再上機（讓 FDG 充分被腦攝取）</li>
                    <li>需搭配臨床認知評估量表（如 MMSE、CDR）</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "判讀模式",
            icon: "💎",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>疾病</th><th>典型 FDG PET 表現</th></tr></thead>
                    <tbody>
                        <tr><td>Alzheimer's Disease</td><td>雙側顳頂葉、後扣帶迴（PCC）、楔前葉低代謝；運動皮質保留</td></tr>
                        <tr><td>額顳葉失智（FTD）</td><td>額葉和/或前顳葉低代謝，不對稱</td></tr>
                        <tr><td>路易體失智（DLB）</td><td>類似 AD 但加上枕葉低代謝（CIS sign）</td></tr>
                        <tr><td>血管性失智</td><td>多發性、散在、不對稱的低代謝</td></tr>
                        <tr><td>癲癇（發作間期）</td><td>致癇灶處低代謝</td></tr>
                    </tbody>
                </table>
            </div>`
        }
    ]
},

POSLUMA: {
    title: "PSMA PET (POSLUMA)",
    subtitle: "攝護腺癌 PSMA 正子掃描 — 精準偵測微小轉移",
    category: "pet",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "POSLUMA" },
            { label: "等待", value: "60 分鐘" },
            { label: "上機攝影", value: "約 20 分鐘" }
        ],
        note: "對早期骨轉移與淋巴轉移的偵測率顯著優於傳統骨骼掃描。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：PSMA Targeting</h4>
            <p>F-18 Flotufolastat（POSLUMA）或 Ga-68 PSMA-11 會專一性結合攝護腺癌細胞表面的 <strong>PSMA（Prostate-Specific Membrane Antigen）</strong>。PSMA 在攝護腺癌細胞上的表現量比正常組織高 100–1000 倍。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>初始分期：</strong>中高風險攝護腺癌（Gleason ≥ 7）的淋巴與遠端轉移評估</li>
                    <li><strong>生化復發：</strong>PSA 上升但傳統影像找不到病灶</li>
                    <li><strong>治療計畫：</strong>評估是否適合 Lu-177 PSMA 治療</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li><span class="badge badge-blue">ℹ️</span> <strong>無須禁食</strong>，可正常飲食</li>
                    <li>注射前與等待期間需補充 <strong>500cc 水分</strong>（若無禁忌）</li>
                    <li>上機前務必<strong>排空膀胱</strong>，減少尿液放射性干擾</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "臨床寶典",
            icon: "💎",
            html: `<div class="prose">
                <h4>PSMA 表現與 Gleason Score 正相關</h4>
                <p>Gleason score 越高，PSMA 表現量越高。但少數去分化的癌細胞可能反而 PSMA 低表現（如 neuroendocrine differentiation）。</p>
                <h4>生理性攝取注意</h4>
                <ul>
                    <li>正常：淚腺、唾液腺、肝、脾、腎、小腸</li>
                    <li>神經節與交感神經鏈可能有輕度攝取（勿誤判為淋巴轉移）</li>
                </ul>
            </div>`
        }
    ]
},

Ga68DOTATOC: {
    title: "Ga-68 DOTATOC PET",
    subtitle: "神經內分泌腫瘤（NET）的精準定位",
    category: "pet",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Ga-68 DOTATOC" },
            { label: "等待", value: "45–60 分鐘" },
            { label: "上機攝影", value: "約 20 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-purple",
            html: `<h4>原理：Somatostatin Receptor Imaging</h4>
            <p>NET 細胞表面大量表現<strong>體抑素受體（SSTR, 尤其 SSTR2）</strong>。Ga-68 DOTATOC/DOTATATE 為 SSTR 配體，可精準結合並成像。偵測率遠優於傳統 In-111 OctreoScan。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>NET 分期：</strong>胃腸胰 NET、肺 NET（類癌）、甲狀腺髓質癌</li>
                    <li><strong>治療前評估：</strong>判斷是否適合 Lu-177 DOTATATE（PRRT）治療</li>
                    <li><strong>不明原發 NET 定位</strong></li>
                    <li><strong>療效追蹤</strong></li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>無須禁食</li>
                    <li>若病人正在使用<strong>長效 somatostatin analog（如 Sandostatin LAR）</strong>，需與醫師討論是否暫停</li>
                    <li>Ga-68 半衰期極短（68 min），需當日使用 Generator 擠奶</li>
                </ul>
            </div>`
        }
    ]
},

AmyloidPET: {
    title: "Amyloid PET",
    subtitle: "腦部類澱粉蛋白正子掃描 — Alzheimer's 早期診斷",
    category: "pet",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "F-18 Florbetapir" },
            { label: "等待", value: "30–50 分鐘" },
            { label: "腦部攝影", value: "10–20 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-purple",
            html: `<h4>原理</h4>
            <p>F-18 Florbetapir（Amyvid）/ Flutemetamol / Florbetaben 會結合腦部的 <strong>β-amyloid 斑塊</strong>。Amyloid 沉積是 Alzheimer's 最早的病理變化之一，可早於臨床症狀 10–20 年出現。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>認知功能障礙但無法確定是否為 Alzheimer's</li>
                    <li>早發型失智（< 65 歲）的鑑別診斷</li>
                    <li>輕度認知障礙（MCI）的預後評估</li>
                    <li><strong>注意：</strong>陽性結果不等於 AD 診斷（正常老化也可能有 amyloid 沉積）</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>⚠️ 判讀注意</h4>
            <p>結果為二元判讀：<strong>陽性（有 amyloid 沉積）</strong>或<strong>陰性（無）</strong>。陰性結果可有效排除 AD，但陽性不代表確診。需結合臨床表現與其他生物標記。</p>`
        },
        {
            type: "section",
            title: "適用時機與不適用情境",
            icon: "🧠",
            html: `<div class="prose">
                <ul>
                    <li><strong>最適合：</strong>臨床失智型態不典型、年紀偏輕、影像與神經心理測驗互相矛盾時</li>
                    <li><strong>不是健檢工具：</strong>無症狀者即使陽性，也不能單憑此結果宣告未來一定失智</li>
                    <li><strong>不建議單獨使用：</strong>應與 MRI、神經心理評估、FDG PET、Tau/CSF biomarker 一併整合</li>
                    <li><strong>教學重點：</strong>Amyloid PET 解的是「有沒有 amyloid」，不是直接回答「是不是阿茲海默症」</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "臨床判讀寶典",
            icon: "💎",
            html: `<div class="prose">
                <ul>
                    <li><strong>陰性價值最高：</strong>陰性幾乎可排除 AD 型 amyloid pathology</li>
                    <li><strong>陽性需小心過度解讀：</strong>高齡正常人、DLB、CAA 也可能陽性</li>
                    <li><strong>報告要點：</strong>建議描述為「consistent / not consistent with significant cortical amyloid deposition」，避免直接下臨床診斷</li>
                    <li><strong>台灣實務：</strong>多用於失智症中心或神經科疑難病例，不是常規第一線檢查</li>
                </ul>
            </div>`
        }
    ]
},

NaFPET: {
    title: "F-18 NaF Bone PET",
    subtitle: "正子骨骼掃描 — 高解析度骨代謝影像",
    category: "pet",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "F-18 NaF" },
            { label: "等待", value: "45–60 分鐘" },
            { label: "PET/CT", value: "20–30 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>F-18 NaF 的氟離子會置換骨骼 Hydroxyapatite 中的 OH 基團，原理類似 Tc-99m MDP 但<strong>解析度更高、靈敏度更佳</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症與優勢",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>高風險癌症病人的骨轉移偵測（尤其攝護腺癌、乳癌）</li>
                    <li>對比傳統 Bone Scan：解析度更高、偵測更早期的病灶</li>
                    <li>搭配 CT 可精確定位為退化性或惡性病變</li>
                    <li>掃描時間較傳統骨掃描快</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "NaF PET vs 傳統 Bone Scan",
            icon: "⚖️",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>項目</th><th>F-18 NaF PET/CT</th><th>Tc-99m MDP Bone Scan</th></tr></thead>
                    <tbody>
                        <tr><td>解析度</td><td>高</td><td>中等</td></tr>
                        <tr><td>背景清除</td><td>快，通常 1 小時內可掃</td><td>需等待 2–4 小時</td></tr>
                        <tr><td>偵測早期骨轉移</td><td>較佳</td><td>較慢</td></tr>
                        <tr><td>常見限制</td><td>成本較高、可近性較低</td><td>較普及、便宜</td></tr>
                    </tbody>
                </table>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>判讀陷阱</h4>
            <p>NaF PET 很敏感，但<strong>退化、骨折修復、關節炎、手術後改變</strong>也會明顯攝取。真正的重點不是只有「亮不亮」，而是要配合 CT 形態與病史，避免把良性骨改變誤判成轉移。</p>`
        }
    ]
},

CardiacPET: {
    title: "心臟正子掃描",
    subtitle: "Cardiac PET — 冠心病的精準診斷",
    category: "pet",
    timeArchitecture: {
        steps: [
            { label: "休息 PET", value: "Rb-82 / N-13" },
            { label: "藥物壓力", value: "Regadenoson" },
            { label: "壓力 PET", value: "再次注射" }
        ],
        note: "Rb-82 半衰期僅 76 秒，需使用 Generator 現場製備。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Rb-82 為鉀離子類似物，經由 Na/K-ATPase 被心肌攝取。N-13 Ammonia 則直接反映心肌血流。PET 的<strong>解析度與定量能力</strong>均優於 SPECT MPI，可直接測量冠脈血流儲備（CFR）。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>冠心病診斷，尤其 SPECT 結果不確定時</li>
                    <li><strong>肥胖病人：</strong>PET 不受衰減影響，影像品質優於 SPECT</li>
                    <li>多支血管病變（Balanced ischemia 的偵測）</li>
                    <li>冠脈血流儲備（CFR）定量評估</li>
                    <li>心肌存活性（FDG PET）</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-emerald",
            html: `<h4>台灣現況</h4>
            <p>目前台灣僅少數醫學中心有 Rb-82 Generator 或 N-13 Cyclotron 能力。多數仍以 SPECT MPI 為主流。FDG PET 心肌存活性評估較為普及。</p>`
        }
    ]
},

// ================================================================
// 🧬 內分泌 / 甲狀腺
// ================================================================

Thyroid: {
    title: "甲狀腺掃描",
    subtitle: "Thyroid Scan — 甲狀腺功能與結構評估",
    category: "endocrine",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m" },
            { label: "等待", value: "15–20 分鐘" },
            { label: "上機攝影", value: "約 15 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：主動運輸（Active Transport）</h4>
            <p>利用甲狀腺濾泡細胞上的<strong>鈉碘幫浦（NIS, Na+/I- Symporter）</strong>，將類似碘離子的 Tc-99m Pertechnetate 攝取入細胞內。Tc-99m 僅被「捕捉」但不會「有機化」，因此只反映攝取功能。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>Graves' disease：</strong>瀰漫性攝取增加，鑑別與甲狀腺炎（攝取降低）</li>
                    <li><strong>甲狀腺結節功能評估：</strong>Hot nodule（功能性）vs Cold nodule（需排除惡性）</li>
                    <li><strong>異位性甲狀腺：</strong>舌下甲狀腺、胸腔內甲狀腺</li>
                    <li><strong>先天性甲狀腺缺乏：</strong>新生兒篩檢異常後定位</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政與衛教",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>通常隨到隨做，排程彈性大</li>
                    <li>無須禁食</li>
                    <li><strong>藥物影響：</strong>應避免近期服用含碘食物/藥物（海帶、碘鹽、Amiodarone 等）</li>
                    <li>抗甲狀腺藥物（PTU/Methimazole）依醫囑決定是否停藥</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "判讀重點",
            icon: "💎",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>影像表現</th><th>可能診斷</th></tr></thead>
                    <tbody>
                        <tr><td>瀰漫性攝取增加</td><td>Graves' disease</td></tr>
                        <tr><td>單一 Hot nodule + 周圍抑制</td><td>Toxic adenoma（Plummer's disease）</td></tr>
                        <tr><td>多發 Hot nodules</td><td>Toxic multinodular goiter</td></tr>
                        <tr><td>Cold nodule</td><td>需排除甲狀腺癌（約 5–15% 為惡性）</td></tr>
                        <tr><td>整體攝取降低</td><td>甲狀腺炎（亞急性/無痛性）</td></tr>
                    </tbody>
                </table>
            </div>`
        }
    ]
},

Parathyroid: {
    title: "副甲狀腺掃描",
    subtitle: "Parathyroid Scan — 副甲狀腺腺瘤精準定位",
    category: "endocrine",
    timeArchitecture: {
        steps: [
            { label: "Phase 1 早期", value: "注射後 10 分" },
            { label: "Phase 2", value: "2 小時" },
            { label: "Phase 3 延遲", value: "4 小時" }
        ],
        note: "全程約 4.5 小時。建議搭配 SPECT/CT 提高定位精準度。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：雙相清洗（Dual Phase Washout）</h4>
            <p>Tc-99m MIBI 同時被甲狀腺與副甲狀腺攝取，但<strong>甲狀腺清除速度較快</strong>。早期相兩者皆亮，延遲相僅功能亢進的副甲狀腺組織保留攝取。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>原發性副甲狀腺機能亢進：</strong>術前腺瘤定位</li>
                    <li><strong>次發性副甲狀腺機能亢進：</strong>慢性腎病導致，評估是否需手術</li>
                    <li><strong>復發性或持續性亢進：</strong>術後 PTH 仍高</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li><strong>固定排程時段：10:00</strong>（需三次造影，需整天時間）</li>
                    <li>請病人預留一整天</li>
                    <li>建議安排 <strong>SPECT/CT</strong> 以提高異位腺瘤偵測率</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "臨床寶典",
            icon: "💎",
            html: `<div class="prose">
                <h4>MIBI 敏感度限制</h4>
                <ul>
                    <li>小於 500 mg 的腺瘤偵測率下降</li>
                    <li>多腺體增生（Multigland hyperplasia）的偵測率約 50–60%</li>
                    <li>合併甲狀腺結節時可能造成混淆</li>
                </ul>
                <h4>異位副甲狀腺好發位置</h4>
                <ul>
                    <li>胸腺內（最常見異位位置）</li>
                    <li>食道後方</li>
                    <li>頸動脈分叉處</li>
                    <li>縱膈腔內</li>
                </ul>
            </div>`
        }
    ]
},

MIBG: {
    title: "腎上腺髓質掃描 MIBG",
    subtitle: "I-123/I-131 MIBG — 嗜鉻細胞瘤與神經母細胞瘤定位",
    category: "endocrine",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "I-123 MIBG" },
            { label: "等待", value: "24 小時" },
            { label: "全身掃描", value: "30–40 分鐘" }
        ],
        note: "部分需 48 小時延遲影像。I-131 MIBG 則用於治療。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：類腎上腺素（Norepinephrine Analog）</h4>
            <p>MIBG 結構類似正腎上腺素，會被腎上腺髓質及交感神經末梢的儲存顆粒（catecholamine storage vesicles）攝取並儲存。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>嗜鉻細胞瘤（Pheochromocytoma）：</strong>腎上腺內或異位嗜鉻細胞瘤定位</li>
                    <li><strong>副神經節瘤（Paraganglioma）</strong></li>
                    <li><strong>神經母細胞瘤（Neuroblastoma）：</strong>兒童最常見的腹部惡性腫瘤，分期與治療後追蹤</li>
                    <li><strong>I-131 MIBG 治療：</strong>無法手術的惡性嗜鉻細胞瘤/神經母細胞瘤</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-rose",
            html: `<h4>⚠️ 前置用藥</h4>
            <p>必須服用 <strong>Lugol's Solution（SSKI）</strong>保護甲狀腺，避免游離碘被甲狀腺攝取。<strong>檢查前 2 天開始服用，共服 7 天。</strong></p>`
        },
        {
            type: "section",
            title: "藥物干擾",
            icon: "⚠️",
            html: `<div class="prose">
                <p>以下藥物可能影響 MIBG 攝取，需於檢查前停用（依醫師指示）：</p>
                <ul>
                    <li>三環抗鬱劑（TCAs）：至少停 6 週</li>
                    <li>Labetalol：至少停 72 小時</li>
                    <li>Reserpine、Sympathomimetics</li>
                    <li>Cocaine, Amphetamines</li>
                </ul>
            </div>`
        }
    ]
},

NP59: {
    title: "腎上腺皮質掃描 NP-59",
    subtitle: "I-131 NP-59 — 腎上腺皮質功能性腫瘤定位",
    category: "endocrine",
    timeArchitecture: {
        steps: [
            { label: "注射日", value: "Day 0" },
            { label: "掃描 Day 3", value: "初次影像" },
            { label: "掃描 Day 5–7", value: "延遲影像" }
        ],
        note: "需多次往返醫院。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>NP-59（6-β-Iodomethyl-19-Norcholesterol）為<strong>膽固醇合成前驅物</strong>，會被腎上腺皮質攝取作為合成 cortisol/aldosterone 的原料。依攝取型態可區分功能性腫瘤或增生。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>庫興氏症候群（Cushing's syndrome）：鑑別腺瘤 vs 增生</li>
                    <li>康氏症（Conn's syndrome, Primary aldosteronism）</li>
                    <li>腎上腺偶發瘤（Incidentaloma）功能評估</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>前置用藥</h4>
            <p>服用 <strong>Lugol's Solution</strong> 保護甲狀腺。檢查前 2 天開始，共 7–10 天。</p>
            <p>部分 protocol 需要 <strong>Dexamethasone 抑制試驗</strong>。</p>`
        },
        {
            type: "section",
            title: "判讀模式",
            icon: "💎",
            html: `<div class="prose">
                <ul>
                    <li><strong>單側明顯攝取：</strong>偏向功能性腺瘤（如 aldosterone-producing adenoma）</li>
                    <li><strong>雙側對稱攝取：</strong>偏向雙側增生（bilateral hyperplasia）</li>
                    <li><strong>無攝取：</strong>非功能性腫瘤、藥物抑制、技術因素都要考慮</li>
                    <li><strong>教學重點：</strong>NP-59 不是看「腫瘤大小」，而是看<strong>皮質荷爾蒙功能是否偏側化</strong></li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政與排程提醒",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>需事先向病人說明：這不是當天做完的檢查，而是<strong>數天分次回院</strong></li>
                    <li>記得確認病人是否能配合 Lugol's 與 Dexamethasone protocol</li>
                    <li>若做 Conn's syndrome workup，需注意是否已完成內分泌科基礎荷爾蒙評估與影像整合</li>
                </ul>
            </div>`
        }
    ]
},

I131WBS: {
    title: "I-131 全身掃描 (WBS)",
    subtitle: "分化型甲狀腺癌術後追蹤 — 偵測遠端轉移",
    category: "endocrine",
    timeArchitecture: {
        steps: [
            { label: "口服 I-131", value: "2–5 mCi" },
            { label: "等待", value: "48–72 小時" },
            { label: "全身掃描", value: "30–40 分鐘" }
        ],
        note: "治療後 WBS 通常在大劑量 I-131 治療後 5–7 天執行。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>利用分化型甲狀腺癌細胞保留 NIS 功能，會攝取 I-131。全身掃描可發現殘餘甲狀腺組織與遠端轉移（肺、骨等）。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>甲狀腺全切除後的殘餘組織與轉移偵測</li>
                    <li>I-131 治療後的效果評估</li>
                    <li>Thyroglobulin 上升但超音波未見病灶時</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>需安排兩次：服藥日 + 掃描日</li>
                    <li>檢查前需配合<strong>低碘飲食 2–4 週</strong></li>
                    <li>需停用甲狀腺素（T4 停 4 週 / T3 停 2 週）或使用 <strong>rhTSH（Thyrogen）</strong></li>
                    <li>目標 TSH > 30 mIU/L</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>⚠️ Stunning Effect</h4>
            <p>診斷劑量的 I-131 可能「驚嚇」甲狀腺癌細胞，降低後續治療劑量的攝取效果。因此診斷 WBS 劑量應 < 3 mCi，或使用 I-123 替代。</p>`
        }
    ]
},

Salivary: {
    title: "唾液腺掃描",
    subtitle: "Salivary Gland Scintigraphy — 唾液腺功能評估",
    category: "endocrine",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m" },
            { label: "動態攝影", value: "30 分鐘" },
            { label: "酸刺激", value: "含酸梅" },
            { label: "繼續攝影", value: "15 分鐘" }
        ],
        note: "檢查前不可先吃酸的東西！"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Tc-99m Pertechnetate 會被唾液腺體攝取（Concentration Phase）。給予酸刺激後，正常腺體會快速排出唾液（Excretion Phase），反映分泌功能。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>修格蘭氏症候群（Sjögren's syndrome）：</strong>唾液腺攝取與排泄均下降</li>
                    <li>口乾症的功能評估</li>
                    <li>唾液腺管阻塞（一側排泄延遲）</li>
                    <li>放射治療後唾液腺功能追蹤</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li><strong>固定時段：</strong>14:20（第 1 位）/ 15:00（第 2 位）</li>
                    <li><span class="badge badge-rose">⚠️</span> 請病人<strong>自備一包無籽酸梅</strong>與一瓶水</li>
                    <li>剛開始不可先含酸梅，聽到技術員指示後再含入</li>
                </ul>
            </div>`
        }
    ]
},


// ================================================================
// ❤️ 心臟 / 循環 / 淋巴
// ================================================================

MPI_Tc99m: {
    title: "心肌灌流 Tc-99m Sestamibi",
    subtitle: "Myocardial Perfusion Imaging — 本院常規使用",
    category: "cardiac",
    timeArchitecture: {
        steps: [
            { label: "💉 Rest 注射", value: "低劑量 8–10 mCi" },
            { label: "🍳 高脂餐", value: "米漿/茶葉蛋" },
            { label: "📷 Rest 攝影", value: "15–20 分" },
            { label: "💉 Stress 注射", value: "高劑量 24–30 mCi" },
            { label: "🍳 高脂餐", value: "再吃一次" },
            { label: "📷 Stress 攝影", value: "15–20 分" }
        ],
        note: "本院採用 1-Day Protocol（先 Rest 後 Stress）。全程約 4–5 小時。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：粒線體膜電位</h4>
            <p>Tc-99m Sestamibi 被正常心肌細胞的粒線體攝取並滯留。<strong>無明顯再分佈</strong>，需分別注射壓力相與休息相藥物。缺血心肌在壓力下攝取減少，休息時恢復→<strong>可逆性缺損</strong>；梗塞區域兩相均缺損→<strong>固定性缺損</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "��",
            html: `<div class="prose">
                <ul>
                    <li><strong>冠心病（CAD）診斷：</strong>胸痛評估、運動心電圖不確定時</li>
                    <li><strong>心肌梗塞後評估：</strong>殘餘缺血範圍</li>
                    <li><strong>血管重建術前：</strong>評估是否有足夠缺血區域值得介入</li>
                    <li><strong>術前風險評估：</strong>重大非心臟手術前</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li><span class="badge badge-rose">⚠️</span> <strong>15:30 聯絡明日 MPI 病人</strong>，提醒準時報到</li>
                    <li>務必詢問病人<strong>體重</strong>（計算藥量）</li>
                    <li>若開單為 Exercise（跑步機），評估<strong>跌倒風險</strong></li>
                    <li>確認病人有無 <strong>氣喘、COPD</strong>（影響藥物壓力方式選擇）</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-emerald",
            html: `<h4>🍳 高脂餐的目的</h4>
            <p>Sestamibi 會暫時停留在肝臟與膽囊。進食高脂肪食物可刺激膽囊收縮，將藥物排入腸道，<strong>減少肝臟放射性對心肌影像的干擾</strong>（尤其下壁）。</p>
            <p>如果病人不吃或吃不夠，下壁心肌可能被肝臟遮蔽→假陽性。</p>`
        },
        {
            type: "section",
            title: "病人衛教",
            icon: "💊",
            html: `<div class="prose">
                <ul>
                    <li><span class="badge badge-rose">⚠️</span> 檢查前 <strong>24 小時</strong>禁止：咖啡、茶、可樂、巧克力（含咖啡因食物）</li>
                    <li>血管擴張劑可能引起短暫胸悶、臉紅、頭暈、噁心，通常數分鐘內消退</li>
                    <li>全程約需 <strong>4–5 小時</strong>，請預留時間</li>
                    <li>穿著舒適、方便穿脫的衣服</li>
                </ul>
            </div>`
        }
    ]
},

MPI_Tl201: {
    title: "心肌灌流 Tl-201",
    subtitle: "Thallium-201 — 存活心肌（Viability）評估專用",
    category: "cardiac",
    timeArchitecture: {
        steps: [
            { label: "💉 Stress 注射", value: "Tl-201 2–4 mCi" },
            { label: "📷 Stress 影像", value: "15–20 分" },
            { label: "⏳ 再分佈", value: "等待 3–4 小時" },
            { label: "📷 Rest 影像", value: "20–25 分" }
        ],
        note: "Tl-201 半衰期長（73hr），可利用再分佈現象評估存活心肌。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：Na+/K+-ATPase 主動運輸</h4>
            <p>Tl-201 結構類似鉀離子，被心肌細胞主動攝取。缺血心肌在壓力下攝取減少，但<strong>經過數小時「再分佈」後可恢復</strong>→代表仍有存活心肌；梗塞心肌則持續缺損。</p>`
        },
        {
            type: "section",
            title: "與 Tc-99m 的比較",
            icon: "⚖️",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>項目</th><th>Tl-201</th><th>Tc-99m MIBI</th></tr></thead>
                    <tbody>
                        <tr><td>再分佈</td><td>有（可評估 viability）</td><td>無</td></tr>
                        <tr><td>影像品質</td><td>較差（低能量）</td><td>較佳</td></tr>
                        <tr><td>輻射劑量</td><td>較高（3 mCi ≈ 30 mCi Tc）</td><td>較低</td></tr>
                        <tr><td>流程</td><td>先 Stress 後 Rest</td><td>先 Rest 後 Stress</td></tr>
                        <tr><td>最適用途</td><td>CABG 前存活心肌評估</td><td>常規 CAD 診斷</td></tr>
                    </tbody>
                </table>
            </div>`
        },
        {
            type: "section",
            title: "行政與衛教",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>15:30 聯絡明日 MPI 病人</li>
                    <li>禁止咖啡因 24 小時</li>
                    <li>全程約 <strong>4–5 小時</strong></li>
                </ul>
            </div>`
        }
    ]
},

CardiacAmyloid: {
    title: "心臟類澱粉 PYP",
    subtitle: "Tc-99m PYP — ATTR 型心臟類澱粉沉積症診斷",
    category: "cardiac",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m PYP 20 mCi" },
            { label: "等待", value: "3 小時" },
            { label: "SPECT/CT", value: "20–30 分鐘" }
        ],
        note: "必須等滿 3 小時再照，提早照會有假陽性。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Tc-99m PYP（Pyrophosphate）會結合沉積在心肌中的<strong>transthyretin（ATTR）類澱粉蛋白</strong>。這是一種非侵入性診斷 ATTR 心臟類澱粉沉積症的方法，可避免心臟切片。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>ATTR 心臟類澱粉沉積症：</strong>老年人不明原因心衰竭、左心室肥厚</li>
                    <li>心臟超音波/MRI 懷疑 cardiac amyloidosis 時的確認檢查</li>
                    <li><strong>注意：</strong>此檢查主要針對 ATTR 型，對 AL 型（輕鏈型）不敏感</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "判讀",
            icon: "💎",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>Perugini Grade</th><th>影像表現</th><th>判讀</th></tr></thead>
                    <tbody>
                        <tr><td>Grade 0</td><td>心臟無攝取</td><td>陰性</td></tr>
                        <tr><td>Grade 1</td><td>心臟攝取 < 肋骨</td><td>輕度（可能 ATTR 或 AL）</td></tr>
                        <tr><td>Grade 2</td><td>心臟攝取 = 肋骨</td><td>強烈建議 ATTR</td></tr>
                        <tr><td>Grade 3</td><td>心臟攝取 > 肋骨</td><td>診斷 ATTR（排除 AL 後）</td></tr>
                    </tbody>
                </table>
            </div>`
        },
        {
            type: "info-box-rose",
            html: `<h4>⚠️ 重要提醒</h4>
            <p><strong>必須排除 AL 型</strong>（血清/尿液免疫固定電泳 + 游離輕鏈比值）。Grade 2–3 + AL 排除 = 可不需切片即確診 ATTR。</p>`
        }
    ]
},

MUGA: {
    title: "心室功能檢查 MUGA",
    subtitle: "Multi-Gated Acquisition — 精準 LVEF 測量",
    category: "cardiac",
    timeArchitecture: {
        steps: [
            { label: "PYP 注射", value: "活化紅血球" },
            { label: "Tc-99m 注射", value: "體內標記" },
            { label: "ECG 閘控攝影", value: "20 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>先用 PYP 活化紅血球，再打 Tc-99m 進行體內標記。利用心電圖閘控（ECG Gating）技術，計算收縮與舒張時的放射性計數變化→精確求得 <strong>LVEF</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>化療藥物心臟毒性監測（Doxorubicin/Adriamycin、Trastuzumab/Herceptin）</li>
                    <li>LVEF 追蹤（重複性最佳，優於心臟超音波）</li>
                    <li>心衰竭 EF 評估</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>確認病人導管位置（Port-A, CVP）是否暢通，<strong>最好打周邊血管</strong></li>
                    <li>無須禁食，可正常飲食</li>
                    <li>需穩定心律（嚴重心律不整影響 ECG gating）</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "判讀與教學重點",
            icon: "📊",
            html: `<div class="prose">
                <ul>
                    <li><strong>LVEF 追蹤價值：</strong>同一病人前後比較誤差小，特別適合化療前、中、後序列監測</li>
                    <li><strong>常見門檻：</strong>LVEF 明顯下降或跌破部門/腫瘤科設定門檻時，須回報主治醫師評估是否調整化療</li>
                    <li><strong>技術陷阱：</strong>心房顫動、頻繁 PVC、ROI 畫錯、標記率差都會讓 EF 假性不準</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-emerald",
            html: `<h4>新人一定要知道</h4>
            <p>MUGA 最大優勢不是「看起來很漂亮」，而是<strong>重複性高</strong>。臨床上最常見用途是乳癌、血液腫瘤病人在使用心毒性藥物前後，追蹤心臟能不能撐住治療。</p>`
        }
    ]
},

Venography: {
    title: "放射性核種靜脈攝影",
    subtitle: "Radionuclide Venography — 深部靜脈血栓評估",
    category: "cardiac",
    timeArchitecture: {
        steps: [
            { label: "足背注射", value: "Tc-99m MAA" },
            { label: "動態攝影", value: "即時觀察" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>將 Tc-99m MAA 打入足背靜脈，模擬靜脈血回流至心臟的過程。若有血栓阻塞，可見側枝循環或流動中斷。</p>`
        },
        {
            type: "section",
            title: "行政",
            icon: "🩺",
            html: `<div class="prose"><ul><li>需準備兩條<strong>止血帶（Tourniquet）</strong></li><li>病人會在腳上打針，由下往上照</li></ul></div>`
        },
        {
            type: "section",
            title: "適應症與臨床定位",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>深部靜脈血栓（DVT）懷疑但超音波不易評估時</li>
                    <li>術前或術後靜脈回流路徑評估</li>
                    <li>目前多被 Duplex ultrasound 取代，屬<strong>特定情境補充檢查</strong></li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>判讀陷阱</h4>
            <p>若注射位置外滲、止血帶綁法不當、病人動作太多，都可能造成流向假象。看到側枝循環、單側流速延遲、深靜脈中斷時，要與臨床症狀與超音波結果一起判讀。</p>`
        }
    ]
},

Lymphedema: {
    title: "淋巴水腫攝影",
    subtitle: "Lymphoscintigraphy — 淋巴循環功能評估",
    category: "cardiac",
    timeArchitecture: {
        steps: [
            { label: "皮下注射", value: "指/趾間" },
            { label: "動態攝影", value: "即時" },
            { label: "延遲影像", value: "1–2 小時" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>將極小顆粒的 Tc-99m SC/Nanocolloid 打入皮下組織間隙，觀察是否能順利進入微淋巴管並回流至淋巴結。阻塞時可見<strong>真皮逆流（Dermal backflow）</strong>現象。</p>`
        },
        {
            type: "section",
            title: "適應症與注意",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>肢體淋巴水腫（原發 vs 繼發）</li>
                    <li>鑑別淋巴阻塞 vs 靜脈水腫</li>
                    <li><span class="badge badge-amber">⚠️</span> 指間注射較痛，請先告知病人</li>
                    <li>需較長造影時間（含延遲影像）</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "判讀重點",
            icon: "💎",
            html: `<div class="prose">
                <ul>
                    <li><strong>正常：</strong>藥物沿淋巴管上行，對稱到達局部淋巴結</li>
                    <li><strong>異常：</strong>上行延遲、淋巴結不顯影、單側明顯減少、真皮逆流</li>
                    <li><strong>繼發性淋巴水腫：</strong>常見於乳癌腋下清掃、婦癌骨盆清掃或放療後</li>
                    <li><strong>教學重點：</strong>此檢查是看「淋巴回流功能」，不是單看腫不腫</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政與病人說明",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>檢查前先告知病人注射位置在指（趾）間，會比一般抽血刺一些</li>
                    <li>注射後常需搭配活動或輕度按摩，幫助藥物進入淋巴循環</li>
                    <li>若為術後病人，記錄手術側與水腫持續時間，有助判讀</li>
                </ul>
            </div>`
        }
    ]
},

SLN: {
    title: "前哨淋巴結造影",
    subtitle: "Sentinel Lymph Node Mapping — 術前定位",
    category: "cardiac",
    timeArchitecture: {
        steps: [
            { label: "腫瘤周圍注射", value: "皮下/皮內" },
            { label: "按摩 + 攝影", value: "30 分鐘" },
            { label: "皮膚標記", value: "定位" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>前哨淋巴結是腫瘤淋巴引流的「第一站」。術前定位後，手術中搭配 Gamma Probe 取出化驗。若無轉移可保留其餘淋巴結，大幅減少術後淋巴水腫。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>乳癌：</strong>最常見的適應症</li>
                    <li><strong>黑色素瘤（Melanoma）</strong></li>
                    <li>頭頸部鱗狀細胞癌</li>
                    <li>外陰癌、子宮頸癌</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>通常安排在<strong>手術前一天</strong>或<strong>手術當天上午</strong>執行</li>
                    <li>皮膚上會畫記號，<strong>請勿洗掉</strong></li>
                    <li>需與外科確認手術時間，協調排程</li>
                </ul>
            </div>`
        }
    ]
},

// ================================================================
// 🫁 消化 / 肝膽
// ================================================================

Gastric: {
    title: "胃排空掃描",
    subtitle: "Gastric Emptying Study — 胃動力功能的標準檢查",
    category: "gi",
    timeArchitecture: {
        steps: [
            { label: "吃試餐", value: "Tc-99m SC 煎蛋" },
            { label: "攝影 0hr", value: "立即" },
            { label: "攝影 1hr", value: "第 1 小時" },
            { label: "攝影 2hr", value: "第 2 小時" },
            { label: "攝影 4hr", value: "第 4 小時" }
        ],
        note: "標準 Tougas 餐：煎蛋 2 片土司 + 果醬 + 120cc 水。4 小時殘留 > 10% 為異常。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Tc-99m Sulfur Colloid 標記在固體食物上，定量測量胃部在一系列時間點將食物排入十二指腸的百分比。這是評估胃排空功能的<strong>黃金標準</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>糖尿病胃輕癱（Gastroparesis）</li>
                    <li>不明原因噁心、嘔吐、飽脹感</li>
                    <li>胃手術後蠕動評估</li>
                    <li>功能性消化不良</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>準備材料：<strong>土司 2 片 + 生雞蛋 1 顆 + 果醬 + 120cc 水</strong></li>
                    <li><span class="badge badge-rose">⚠️</span> 病人<strong>禁食 8 小時以上</strong></li>
                    <li>停用促進/抑制腸胃蠕動藥物（Metoclopramide、Erythromycin 等需停 2 天）</li>
                    <li>糖尿病病人：血糖需 < 275 mg/dL（高血糖會延緩胃排空）</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "正常值參考",
            icon: "📊",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>時間點</th><th>正常殘留率</th><th>異常標準</th></tr></thead>
                    <tbody>
                        <tr><td>1 小時</td><td>37–90%</td><td>> 90% 為異常</td></tr>
                        <tr><td>2 小時</td><td>30–60%</td><td>> 60% 為異常</td></tr>
                        <tr><td>4 小時</td><td>0–10%</td><td>> 10% 為異常（最重要指標）</td></tr>
                    </tbody>
                </table>
            </div>`
        }
    ]
},

GIBleed: {
    title: "腸胃道出血掃描",
    subtitle: "GI Bleeding Study — 出血點定位",
    category: "gi",
    timeArchitecture: {
        steps: [
            { label: "PYP 注射", value: "標記前處理" },
            { label: "等待 30 分", value: "" },
            { label: "Tc-99m", value: "RBC 標記" },
            { label: "動態攝影", value: "持續觀察" }
        ],
        note: "可能需持續觀察至 24 小時。出血速率 > 0.1 mL/min 即可偵測。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>標記病人的紅血球（Tc-99m RBC），當血管有破洞出血時，標記的紅血球會隨血液流出血管外並聚集在腸道內，形成移動性亮點。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>下消化道出血（Lower GI Bleeding）的出血點定位</li>
                    <li>間歇性出血的偵測（RBC 標記可持續觀察 24hr）</li>
                    <li>引導血管攝影或手術的方向</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>兩階段：PYP → 等 30 分 → Tc-99m</li>
                    <li><span class="badge badge-amber">⚠️</span> 向醫師確認：病人是否需禁食？</li>
                    <li>可能需長時間持續觀察</li>
                </ul>
            </div>`
        }
    ]
},

Meckel: {
    title: "梅克爾憩室掃描",
    subtitle: "Meckel's Diverticulum Scan — 異位胃黏膜偵測",
    category: "gi",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m Pertechnetate" },
            { label: "動態攝影", value: "30–60 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Meckel's diverticulum 約 50% 含有<strong>異位胃黏膜</strong>。Tc-99m Pertechnetate 會被胃黏膜的壁細胞攝取，因此可定位腹腔中異位的胃黏膜組織。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>兒童不明原因下消化道出血（最常見適應症）</li>
                    <li>反覆腹痛伴隨便血</li>
                    <li><strong>前處理：</strong>可使用 <strong>Pentagastrin</strong> 或 <strong>H2 Blocker（Cimetidine）</strong>提高敏感度</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-emerald",
            html: `<h4>敏感度提升技巧</h4>
            <p><strong>Cimetidine</strong> 阻斷胃黏膜分泌但不影響攝取，讓 Tc-99m 滯留在異位黏膜中更久→提高偵測率至 85–90%。</p>`
        }
    ]
},

Liver: {
    title: "肝脾臟掃描",
    subtitle: "Liver/Spleen Scan — 肝硬化與脾臟評估",
    category: "gi",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m Phytate" },
            { label: "等待", value: "15–20 分" },
            { label: "攝影", value: "20–30 分" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：網狀內皮系統吞噬（Phagocytosis）</h4>
            <p>Tc-99m Phytate / Sulfur Colloid 會被肝臟的 Kupffer cells 及脾臟的網狀內皮細胞吞噬。肝硬化時 Kupffer cells 減少，肝攝取降低，反而脾臟與骨髓攝取增加→<strong>Colloid shift</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>肝硬化嚴重度評估</li>
                    <li>脾臟腫大、脾臟外傷</li>
                    <li>副脾（Accessory spleen）定位</li>
                    <li>肝臟占位性病變與 Kupffer cell 活性評估</li>
                </ul>
            </div>`
        }
    ]
},

LiverHemangioma: {
    title: "肝血管瘤 RBC 掃描",
    subtitle: "Tc-99m RBC SPECT — 肝血管瘤的確診檢查",
    category: "gi",
    timeArchitecture: {
        steps: [
            { label: "RBC 標記", value: "PYP + Tc-99m" },
            { label: "動態攝影", value: "即時" },
            { label: "SPECT", value: "1–2 小時" }
        ],
        note: "延遲相 SPECT 是關鍵——血管瘤會逐漸「填滿」。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>肝血管瘤由大量擴張的血管竇構成。Tc-99m 標記紅血球在動脈期不明顯（慢速填充），但<strong>延遲影像中會逐漸填滿並持續高攝取</strong>——這是血管瘤最典型的特徵。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>CT/MRI 疑似但不確定的肝血管瘤</li>
                    <li>病灶 > 2 cm 時敏感度最佳</li>
                    <li><strong>特異度接近 100%</strong>——延遲填充為血管瘤所獨有</li>
                </ul>
            </div>`
        }
    ]
},

Biliary: {
    title: "膽道掃描 HIDA",
    subtitle: "Hepatobiliary Scintigraphy — 急性膽囊炎的黃金標準",
    category: "gi",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m DISIDA" },
            { label: "動態攝影", value: "60 分鐘" },
            { label: "必要時", value: "延遲至 4 hr" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Tc-99m IDA 藥物類似膽紅素代謝路徑，被肝細胞攝取後排入膽管→膽囊→十二指腸。若膽囊一直未顯影，暗示<strong>膽囊管阻塞（急性膽囊炎）</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>急性膽囊炎：</strong>膽囊不顯影 = 陽性（敏感度 > 95%）</li>
                    <li>膽道阻塞評估</li>
                    <li>膽道手術後膽漏偵測</li>
                    <li><strong>嬰兒膽道閉鎖（Biliary Atresia）：</strong>肝臟攝取正常但腸道始終不顯影</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>建議<strong>空腹至少 4 小時</strong>（讓膽囊擴張），由醫師決定</li>
                    <li>膽道閉鎖嬰兒需先服用 <strong>Phenobarbital 5 天</strong>（促進肝排泄）</li>
                    <li>可能需要注射 <strong>CCK（Cholecystokinin）</strong>刺激膽囊收縮以計算射出分率</li>
                </ul>
            </div>`
        }
    ]
},

Salivary2: {
    title: "唾液腺掃描",
    subtitle: "此項目與「內分泌/甲狀腺」分類下的唾液腺掃描相同",
    category: "gi",
    redirect: "Salivary",
    content: []
},

// ================================================================
// 🦴 骨骼 / 腎臟 / 泌尿
// ================================================================

Bone: {
    title: "全身骨骼掃描",
    subtitle: "Bone Scan — 骨轉移篩檢的基石",
    category: "bone-renal",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m MDP" },
            { label: "等待", value: "2–4 小時" },
            { label: "全身攝影", value: "20–30 分鐘" }
        ],
        note: "等待期間請多喝水、多排尿。可外出用餐。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：化學吸附（Chemisorption）</h4>
            <p>Tc-99m MDP 會與骨骼的氫氧基磷灰石（Hydroxyapatite）晶體結合。<strong>成骨作用（Osteoblastic activity）越強或血流越豐富的地方攝取越高（Hot spot）</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>癌症骨轉移篩檢：</strong>乳癌、攝護腺癌、肺癌等最常見</li>
                    <li>骨髓炎（Osteomyelitis）</li>
                    <li>壓力性骨折（Stress fracture）</li>
                    <li>人工關節鬆脫 vs 感染</li>
                    <li>不明原因骨痛</li>
                    <li>Paget's disease 範圍評估</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "臨床寶典",
            icon: "💎",
            html: `<div class="prose">
                <h4>Hot Spot vs Cold Spot</h4>
                <ul>
                    <li><strong>Hot spot：</strong>成骨反應增加（轉移、骨折、感染、退化）</li>
                    <li><strong>Cold spot：</strong>血流或成骨活性完全喪失（多發性骨髓瘤、早期 AVN、純溶骨性轉移）</li>
                </ul>
                <h4>Super Scan</h4>
                <p>全身骨骼瀰漫性攝取增加，腎臟幾乎不顯影。常見於攝護腺癌廣泛骨轉移。容易被誤認為「正常」。</p>
                <h4>Flare Phenomenon</h4>
                <p>化療後 2–3 個月 bone scan 暫時性惡化（hot spots 增加或變亮），實際上代表治療有效的修復反應。需結合臨床判斷，不可貿然認為疾病進展。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人衛教",
            icon: "💊",
            html: `<div class="prose"><ul>
                <li>打藥後大量喝水、排尿→減少膀胱輻射劑量並提高影像清晰度</li>
                <li>等待期間可外出用餐、活動</li>
                <li>上機時需移除所有金屬物品</li>
            </ul></div>`
        }
    ]
},

DMSA: {
    title: "腎皮質掃描 DMSA",
    subtitle: "Tc-99m DMSA — 急性腎盂腎炎與分腎功能評估",
    category: "bone-renal",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m DMSA" },
            { label: "等待", value: "2–3 小時" },
            { label: "SPECT", value: "20–30 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Tc-99m DMSA 結合在<strong>近曲小管（Proximal Tubules）</strong>細胞，長時間停留於腎皮質。發炎或結痂處因細胞受損無法攝取，呈現缺損（Cold defect）。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>急性腎盂腎炎：</strong>偵測腎實質發炎區域（比超音波敏感）</li>
                    <li><strong>腎結痂（Scarring）：</strong>反覆泌尿道感染後的腎臟損傷追蹤</li>
                    <li><strong>分腎功能（Split Renal Function）：</strong>評估兩側腎臟各自的功能比例</li>
                    <li>異位腎（Ectopic kidney）定位</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政",
            icon: "🩺",
            html: `<div class="prose"><ul>
                <li>兒科常見檢查，幼兒可能需要<strong>鎮靜</strong></li>
                <li>無須禁食</li>
                <li>家長請安撫小孩</li>
            </ul></div>`
        }
    ]
},

DTPA: {
    title: "腎利尿掃描 DTPA",
    subtitle: "Tc-99m DTPA — GFR 與阻塞性腎病評估",
    category: "bone-renal",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m DTPA" },
            { label: "動態攝影", value: "20–30 分鐘" },
            { label: "打利尿劑", value: "Lasix" },
            { label: "繼續攝影", value: "15–20 分鐘" }
        ],
        note: "利尿後觀察腎盂排空，區分阻塞 vs 擴張。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Tc-99m DTPA 經由<strong>腎絲球過濾（Glomerular Filtration）</strong>排出，可精確計算 GFR。配合利尿劑 Lasix 可區分：「塞住流不掉」vs「水庫太大但有在流」。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>鑑別水腎（Hydronephrosis）為<strong>阻塞性</strong>或<strong>非阻塞性</strong></li>
                    <li>腎動脈狹窄評估（搭配 Captopril）</li>
                    <li>GFR 測量（Gates method）</li>
                    <li>分腎功能評估</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li><strong>固定時段：下午 14:30</strong></li>
                    <li>檢查前 30 分鐘喝水 300–500cc（充分水化）</li>
                    <li>備好 Lasix（Furosemide）注射劑</li>
                </ul>
            </div>`
        }
    ]
},

MAG3: {
    title: "腎功能掃描 MAG3",
    subtitle: "Tc-99m MAG3 — 腎小管分泌功能評估",
    category: "bone-renal",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m MAG3" },
            { label: "動態攝影", value: "30–40 分鐘" },
            { label: "中途", value: "打 Lasix" }
        ],
        note: "比 DTPA 更適合腎功能較差或小兒病人。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Tc-99m MAG3 主要經由<strong>近曲小管分泌（Tubular Secretion）</strong>排出，反映有效腎血漿流量（ERPF）。對腎功能不佳的病人，影像品質優於 DTPA。</p>`
        },
        {
            type: "section",
            title: "MAG3 vs DTPA",
            icon: "⚖️",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>項目</th><th>MAG3</th><th>DTPA</th></tr></thead>
                    <tbody>
                        <tr><td>排泄機制</td><td>腎小管分泌</td><td>腎絲球過濾</td></tr>
                        <tr><td>反映指標</td><td>ERPF</td><td>GFR</td></tr>
                        <tr><td>腎功能差時</td><td>影像品質仍佳</td><td>影像品質差</td></tr>
                        <tr><td>小兒</td><td>首選</td><td>可用</td></tr>
                    </tbody>
                </table>
            </div>`
        }
    ]
},

Cystography: {
    title: "膀胱逆流掃描",
    subtitle: "Direct Radionuclide Cystography — 膀胱輸尿管逆流偵測",
    category: "bone-renal",
    timeArchitecture: {
        steps: [
            { label: "導尿管注入", value: "Tc-99m" },
            { label: "灌注觀察", value: "動態攝影" },
            { label: "排尿觀察", value: "持續攝影" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>經導尿管將 Tc-99m 注入膀胱，於灌注及排尿過程中觀察有無<strong>膀胱輸尿管逆流（VUR）</strong>。輻射劑量僅為傳統 VCUG 的 1/50–1/100。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>已知 VUR 的追蹤檢查（尤其兒童）</li>
                    <li>反覆泌尿道感染的篩檢</li>
                    <li>VUR 手術後追蹤</li>
                    <li><strong>優勢：</strong>輻射劑量極低，適合需反覆追蹤的兒童</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>注意</h4><p>劑量固定 1 mCi，與體重無關。需要導尿管操作。</p>`
        }
    ]
},

Scrotal: {
    title: "陰囊掃描",
    subtitle: "Scrotal Scintigraphy — 急性睪丸扭轉 vs 發炎",
    category: "bone-renal",
    timeArchitecture: {
        steps: [
            { label: "急診", value: "隨到隨做" },
            { label: "靜脈注射", value: "Tc-99m" },
            { label: "攝影", value: "約 20 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-rose",
            html: `<h4>⚠️ 緊急檢查</h4>
            <p>睪丸扭轉（Torsion）為<strong>急診</strong>，黃金搶救時間 6 小時內。核醫科少數需要「急做」的檢查。</p>`
        },
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>動脈期觀察血流：<strong>扭轉→血流阻斷（Cold）</strong>；<strong>發炎→血流增加（Hot）</strong>。延遲相可見「doughnut sign」（扭轉後周圍充血但中心缺血）。</p>`
        },
        {
            type: "section",
            title: "鑑別診斷",
            icon: "💎",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>診斷</th><th>動脈相</th><th>延遲相</th></tr></thead>
                    <tbody>
                        <tr><td>睪丸扭轉</td><td>患側血流↓</td><td>患側 Cold（halo sign）</td></tr>
                        <tr><td>急性附睪炎</td><td>患側血流↑</td><td>患側 Hot</td></tr>
                        <tr><td>膿瘍</td><td>血流↑</td><td>Hot with cold center</td></tr>
                    </tbody>
                </table>
            </div>`
        }
    ]
},

// ================================================================
// 🧠 神經 / 肺 / 感染
// ================================================================

Brain: {
    title: "腦部灌流 SPECT",
    subtitle: "Cerebral Perfusion Scan — 失智症與癲癇評估",
    category: "neuro",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m ECD" },
            { label: "等待", value: "30–60 分鐘" },
            { label: "SPECT", value: "30–40 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Tc-99m ECD/HMPAO 為脂溶性，可穿過<strong>血腦屏障（BBB）</strong>進入腦細胞，並在細胞內轉化為水溶性而被滯留。反映<strong>局部腦血流（rCBF）</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>失智症鑑別：</strong>Alzheimer's（雙側顳頂葉↓）vs 血管性（多發散在↓）</li>
                    <li><strong>癲癇：</strong>Ictal SPECT（發作中注射）→致癇灶 Hot；Interictal→致癇灶 Cold</li>
                    <li>腦血管疾病（moyamoya, 腦中風）</li>
                    <li><strong>腦死判定：</strong>全腦無血流灌注</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>注射時需在<strong>安靜、微光房間</strong>休息，不可說話</li>
                    <li>避免注射前攝取咖啡、茶、菸</li>
                    <li>癲癇 Ictal SPECT 需床邊備藥，發作時立即注射</li>
                </ul>
            </div>`
        }
    ]
},

TRODAT: {
    title: "多巴胺轉運體掃描 TRODAT",
    subtitle: "Tc-99m TRODAT-1 — 巴金森氏症鑑別診斷",
    category: "neuro",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m TRODAT-1" },
            { label: "等待", value: "3–4 小時" },
            { label: "SPECT", value: "40–50 分鐘" }
        ],
        note: "總耗時約 5 小時。頭部需固定不動。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>TRODAT-1 結合腦部基底核的<strong>多巴胺轉運體（DAT）</strong>。巴金森氏症患者黑質紋狀體路徑退化，DAT 減少→影像呈現<strong>「逗號變句號」</strong>（Putamen 先受影響）；原發性顫抖症 DAT 正常。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>巴金森氏症（PD）vs 原發性顫抖（ET）</strong>→最關鍵的鑑別</li>
                    <li>藥物性巴金森（Drug-induced）→DAT 正常</li>
                    <li>路易體失智（DLB）→DAT 異常（與 AD 鑑別）</li>
                    <li>多系統萎縮（MSA）→DAT 異常但分佈模式不同</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-rose",
            html: `<h4>⚠️ 排程嚴格限制</h4>
            <p><strong>必須湊人數（Batching）：</strong>試劑昂貴，需累積 3–5 人才能開瓶。務必確認「開瓶日」。</p>
            <p>懷孕絕對禁忌。頭部需固定 40 分鐘，嚴重顫抖或無法平躺者不宜。</p>`
        },
        {
            type: "section",
            title: "病人衛教",
            icon: "💊",
            html: `<div class="prose"><ul>
                <li>檢查<strong>前一日</strong>起禁止咖啡、茶、可樂、巧克力</li>
                <li>請預留半天時間（約 5 小時）</li>
            </ul></div>`
        }
    ]
},

Cisternography: {
    title: "腦脊髓液池掃描",
    subtitle: "Radionuclide Cisternography — CSF 循環評估",
    category: "neuro",
    timeArchitecture: {
        steps: [
            { label: "腰椎穿刺注射", value: "In-111 DTPA" },
            { label: "掃描 2–4hr", value: "基底池" },
            { label: "掃描 24hr", value: "大腦表面" },
            { label: "掃描 48–72hr", value: "矢狀竇吸收" }
        ],
        note: "需多次回院攝影。正常 24hr 藥物應上升至大腦凸面。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>In-111 DTPA 經腰椎穿刺注入蛛網膜下腔，追蹤 CSF 循環路徑。正常情況下藥物應在 24 小時內上升至大腦表面並被蛛網膜絨毛吸收。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>常壓性水腦症（NPH）：</strong>藥物在 24hr 逆流進入腦室且 48hr 仍滯留</li>
                    <li><strong>CSF 漏（CSF Leak）：</strong>鼻漏、耳漏的定位</li>
                    <li>VP shunt 功能評估</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>⚠️ 劑量注意</h4>
            <p>In-111 DTPA 鞘內注射<strong>絕對上限 0.5 mCi</strong>。需由具經驗的醫師執行腰椎穿刺。</p>`
        }
    ]
},

Lung: {
    title: "肺灌注掃描",
    subtitle: "Lung Perfusion Scan — 肺栓塞篩檢",
    category: "neuro",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Tc-99m MAA" },
            { label: "多角度攝影", value: "8 views" },
            { label: "時間", value: "約 20 分鐘" }
        ]
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：微血管阻塞（Capillary Blockade）</h4>
            <p>Tc-99m MAA 顆粒（10–90 μm）注入靜脈後暫時卡在肺微血管。若肺動脈有血栓堵塞，該區域無顆粒進入→<strong>Cold defect（楔形灌注缺損）</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>肺栓塞（PE）診斷：</strong>尤其對 CT 顯影劑過敏或腎功能不全者</li>
                    <li><strong>肺切除術前功能評估：</strong>預測術後殘餘肺功能</li>
                    <li>右至左分流（Right-to-left shunt）定量</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "注意事項",
            icon: "⚠️",
            html: `<div class="prose"><ul>
                <li>確認病人呼吸狀況</li>
                <li><strong>粒子數控制：</strong>成人 20–40 萬顆；兒科/肺高壓患者 1–5 萬顆</li>
                <li>注射時病人取仰臥位，均勻分佈至雙肺</li>
            </ul></div>`
        }
    ]
},

LungVQ: {
    title: "肺通氣灌注 V/Q Scan",
    subtitle: "Ventilation-Perfusion Scan — PE 的經典診斷方法",
    category: "neuro",
    timeArchitecture: {
        steps: [
            { label: "吸入通氣劑", value: "Tc-99m DTPA aerosol" },
            { label: "通氣影像", value: "8 views" },
            { label: "靜脈注射 MAA", value: "灌注影像" },
            { label: "灌注影像", value: "8 views" }
        ],
        note: "V/Q mismatch = 通氣正常但灌注缺損→高度懷疑 PE。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>比較肺的<strong>通氣（Ventilation）</strong>與<strong>灌注（Perfusion）</strong>：PE 造成灌注缺損但通氣正常（V/Q mismatch）；其他肺疾（如肺炎）則兩者均異常（matched defect）。</p>`
        },
        {
            type: "section",
            title: "PIOPED II 判讀標準",
            icon: "📊",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>機率</th><th>影像表現</th></tr></thead>
                    <tbody>
                        <tr><td><strong>High probability</strong></td><td>≥ 2 大區段 V/Q mismatch</td></tr>
                        <tr><td>Intermediate</td><td>不符合 high 或 low 標準</td></tr>
                        <tr><td>Low probability</td><td>小區段 mismatch、matched defects</td></tr>
                        <tr><td>Normal</td><td>灌注完全正常</td></tr>
                    </tbody>
                </table>
            </div>`
        }
    ]
},

Ga67: {
    title: "鎵-67 發炎掃描",
    subtitle: "Ga-67 Citrate — 不明熱與慢性感染定位",
    category: "neuro",
    timeArchitecture: {
        steps: [
            { label: "靜脈注射", value: "Ga-67 Citrate" },
            { label: "等待", value: "48 小時" },
            { label: "全身掃描", value: "Day 2–3" }
        ],
        note: "部分需 72 小時延遲影像。注射後需等較久。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Ga-67 類似鐵離子，會與發炎處白血球釋放的<strong>乳鐵蛋白（Lactoferrin）</strong>結合，也會被細菌直接攝取。另外對淋巴瘤也有親和力。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>不明熱（FUO）</li>
                    <li>慢性骨髓炎</li>
                    <li>軟組織深部感染/膿瘍</li>
                    <li>類肉瘤病（Sarcoidosis）：Lambda sign + Panda sign</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "衛教",
            icon: "💊",
            html: `<div class="prose"><ul>
                <li>需停止哺乳 <strong>4 週</strong></li>
                <li>可能需服用輕瀉劑減少腸道干擾</li>
                <li>預約兩次時間（注射日 + 掃描日）</li>
            </ul></div>`
        }
    ]
},

WBCScan: {
    title: "白血球掃描",
    subtitle: "Tc-99m HMPAO WBC Scan — 急性感染精準定位",
    category: "neuro",
    timeArchitecture: {
        steps: [
            { label: "抽血標記", value: "WBC 分離" },
            { label: "回注標記 WBC", value: "Tc-99m HMPAO" },
            { label: "攝影 1hr", value: "早期相" },
            { label: "攝影 4hr", value: "延遲相" }
        ],
        note: "需要無菌操作環境進行白血球分離標記。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>將病人自身的白血球在體外分離、用 Tc-99m HMPAO 標記後回注。標記的白血球會<strong>趨化至感染部位聚集</strong>，形成 Hot spot。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>急性骨髓炎</strong>（骨掃描陽性但不確定為感染時）</li>
                    <li>人工關節感染</li>
                    <li>發炎性腸道疾病（IBD）活性評估</li>
                    <li>血管移植物感染</li>
                    <li><strong>優勢：</strong>比 Ga-67 更專一於感染（非腫瘤）</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>⚠️ 注意</h4>
            <p>標記過程需 2–3 小時。對<strong>白血球過低（< 2000/μL）</strong>的病人不適用。腸道正常有白血球分佈，勿誤判。</p>`
        }
    ]
},

// ================================================================
// 💊 核醫治療
// ================================================================

I131: {
    title: "I-131 甲狀腺治療",
    subtitle: "Radioiodine Therapy — 分化型甲狀腺癌術後消融與輔助治療",
    category: "therapy",
    isI131Calc: true,
    treatmentGoals: [
        {
            kicker: "術後消融",
            title: "術後殘餘組織消融",
            desc: "目的是清掉殘餘甲狀腺組織，讓後續追蹤更乾淨，也讓 Tg 與全身掃描更容易解讀。"
        },
        {
            kicker: "輔助 / 轉移病灶",
            title: "高風險或已知轉移病灶治療",
            desc: "這時候不是單純『把殘餘組織燒掉』，而是希望把有效劑量真正送到仍保有攝碘性的病灶。"
        },
        {
            kicker: "不同劇本",
            title: "甲狀腺機能亢進不是同一個劇本",
            desc: "低劑量門診治療和甲狀腺癌術後高活度住院隔離，是完全不同的流程與風險管理，不應混成同一頁口吻。"
        }
    ],
    decisionCards: [
        {
            variant: "info",
            title: "治療成立的入口，是病灶仍有攝碘能力",
            desc: "分化良好的甲狀腺細胞保留 NIS 功能時，I-131 才能把 beta 劑量選擇性送進去；沒有入口，再高活度也未必有效。"
        },
        {
            variant: "warning",
            title: "低碘、停藥或 Thyrogen，都是在替病灶讓路",
            desc: "真正目的不是把病人弄得很辛苦，而是把 TSH 拉高、讓體內碘池下降，讓目標病灶在競爭中占優勢。"
        },
        {
            variant: "rose",
            title: "病房與出院限制不是附屬流程，而是治療本體的一部分",
            desc: "補水、排尿、污染管理、與家人保持距離，以及何時能安全返家，都和療效與病安綁在一起。"
        },
        {
            variant: "info",
            title: "給藥前要先決定這次是口服流程、住院流程，還是返家流程的哪一種版本",
            desc: "國際實務不是只有一個 I-131 劇本。低活度門診與高活度住院在病房設施、出院測量、返家距離限制與環境去污上都不同。"
        }
    ],
    operationalRules: [
        {
            label: "入院日",
            value: "僅限週二、週五",
            note: "配合病房、輻防與出院追蹤的固定節奏。"
        },
        {
            label: "床位量能",
            value: "每週上限 4 人",
            note: "高活度隔離病房不是隨到隨排。"
        },
        {
            label: "行政前置",
            value: "至少提前 3 週預約",
            note: "要先卡住病房、藥物、檢驗與衛教節點。"
        },
        {
            label: "WBS 追蹤",
            value: "出院後 1 週安排",
            note: "不是出院後再想起來補約。"
        },
        {
            label: "出院測量",
            value: "記錄 1 公尺劑量率",
            note: "返家限制與接觸安排要依測量值與家中情境個別化。"
        }
    ],
    journeyStages: [
        {
            phase: "治療前",
            title: "先把治療條件做出來",
            items: [
                "確認適應症是術後消融、輔助治療，還是已知轉移病灶處理。",
                "依醫囑安排 T4 / T3 停藥或 Thyrogen；不要用單一停藥口訣套全部病人。",
                "低碘飲食的重點是降低體內碘競爭，不是讓病人只記一張禁食清單。",
                "育齡婦女需先驗孕；哺乳處置要在治療前就講清楚。",
                "要先問家中是否有幼兒、孕婦、共用衛浴或長途大眾運輸需求，否則出院後規則可能根本做不到。"
            ]
        },
        {
            phase: "住院中",
            title: "把污染管理與病房動線守住",
            items: [
                "高活度治療需住院隔離至符合出院標準，不是喝完藥就能離開。",
                "口服給藥前先確認身分、藥物活度、吞服能力與止吐需求；避免治療後嘔吐造成環境污染。",
                "補水、排尿、如廁清潔與嘔吐污染處理，都要在治療前先說過一次。",
                "護理、清潔與陪病規則要提早講，避免真正住進病房後才臨時補規則。",
                "病房與衛浴要視為污染控制區，床邊表面、布巾、餐具與垃圾流向都要事先定義。"
            ]
        },
        {
            phase: "出院後",
            title: "讓病人安全回家，而不是只交代一句保持距離",
            items: [
                "依活度與單位規範說明與幼兒、孕婦、伴侶的接觸限制。",
                "返家後的睡眠距離、如廁與衣物清洗要講具體，不要只講抽象的『注意輻射』。",
                "出院後 1 週的 I-131 全身掃描要先排好，讓病人知道追蹤仍在同一條治療線上。",
                "若病人回家後短期內需急診或住院，必須讓其他單位知道這位病人近期接受過 I-131 治療。"
            ]
        }
    ],
    safetyAlerts: [
        {
            level: "critical",
            title: "懷孕絕對不可執行，育齡婦女治療前需先驗孕",
            desc: "這不是一般注意事項，而是直接影響是否能進入治療流程的底線。"
        },
        {
            level: "caution",
            title: "不要把所有術後病人都當成同一種 I-131 個案",
            desc: "消融、輔助治療與轉移病灶處理的臨床目標不同，解釋方式、期待與風險溝通都要跟著變。"
        },
        {
            level: "guidance",
            title: "家屬接觸限制必須在治療前就講清楚",
            desc: "真正困難的通常不是喝藥，而是病人回家後怎麼和伴侶、幼兒與同住家人一起生活。"
        },
        {
            level: "caution",
            title: "I-131 的重點不只是病人本身，還包括排泄物、衛浴設施與病房除污",
            desc: "這是它和多數 Lu-177 門診流程最不一樣的地方，不能等污染發生才補救。"
        }
    ],
    staffChecklist: [
        "確認病人此次治療目的，不要只寫『I-131 治療』就帶過。",
        "病房、藥物、驗孕與返診日期要一起看，不要分開各自記。",
        "先問家中是否有幼兒、孕婦、密切照顧需求，這會直接影響出院衛教。",
        "若病人對低碘或停藥理解模糊，要在入院前就補說明，不要拖到治療當天。",
        "病房如廁、布巾、嘔吐污染、垃圾暫存與出院測量流程要和輻防單位事先對齊，不要等當班臨時想。"
    ],
    content: []
},

I131MIBG: {
    title: "I-131 MIBG 治療",
    subtitle: "高劑量 MIBG Therapy — 神經母細胞瘤與嗜鉻細胞瘤放射治療",
    category: "therapy",
    timeArchitecture: {
        steps: [
            { label: "前置評估", value: "影像 + CBC + 腎功能" },
            { label: "甲狀腺保護", value: "Lugol's / SSKI" },
            { label: "住院輸注", value: "I-131 MIBG" },
            { label: "隔離觀察", value: "2–5 天" }
        ],
        note: "需高活度隔離病房與嚴格污染管控。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>I-131 MIBG 利用神經內分泌腫瘤對 norepinephrine analog 的攝取特性，把<strong>治療劑量直接送入腫瘤</strong>。常用於復發或高風險神經母細胞瘤，也可應用於部分轉移性嗜鉻細胞瘤與副神經節瘤。</p>`
        },
        {
            type: "section",
            title: "治療前核對",
            icon: "📋",
            html: `<div class="prose">
                <ul>
                    <li>必須先有診斷性 MIBG 影像證明病灶<strong>確實有攝取</strong>。</li>
                    <li>CBC、腎功能、肝功能與既往治療史要完整確認，兒童個案常需評估幹細胞備援。</li>
                    <li>甲狀腺保護不可漏，且要主動確認家屬是否真的會按時給藥。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "病房與家屬衛教",
            icon: "🛏️",
            html: `<div class="prose">
                <ul>
                    <li>通常需住高活度隔離病房，兒童陪病限制與探視規則要在治療前講清楚。</li>
                    <li>尿液、汗液、嘔吐物均可能污染，護理與清潔流程必須先演練。</li>
                    <li>出院後仍要交代與幼兒、孕婦接觸距離及返家如廁清潔規則。</li>
                </ul>
            </div>`
        }
    ]
},

Sm153: {
    title: "Sm-153 EDTMP 骨痛緩解治療",
    subtitle: "Samarium-153 Therapy — 多發骨轉移疼痛緩和",
    category: "therapy",
    timeArchitecture: {
        steps: [
            { label: "治療前骨掃描", value: "確認病灶攝取" },
            { label: "靜脈注射", value: "Sm-153 EDTMP" },
            { label: "返家衛教", value: "當日完成" }
        ],
        note: "目標為疼痛緩解與生活品質改善。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Sm-153 EDTMP 會聚集在<strong>成骨活性高</strong>的骨轉移病灶，以 Beta 射線提供局部治療，降低多發性骨轉移造成的疼痛。它的角色偏向緩和醫療，而非根治腫瘤。</p>`
        },
        {
            type: "section",
            title: "適合的病人",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>多發性 osteoblastic bone metastases，且骨掃描需看得到對應病灶。</li>
                    <li>已經有疼痛症狀、止痛藥效果有限或希望減少局部放療需求者。</li>
                    <li>骨髓儲備要夠，否則血球下降風險可能高於收益。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>教學定位</h4>
            <p>Sm-153 在台灣現在不像 Ra-223 那麼常見，但仍是核醫骨轉移治療發展的重要項目。新人應知道它的<strong>核心價值是 pain palliation</strong>，適應症必須建立在骨掃描有攝取與血球可承受。</p>`
        }
    ]
},

Ra223: {
    title: "Ra-223 骨轉移治療",
    subtitle: "Xofigo — Alpha 粒子精準打擊骨轉移",
    category: "therapy",
    timeArchitecture: {
        steps: [
            { label: "治療前 10 天內", value: "CBC / 臨床評估" },
            { label: "給藥方式", value: "靜脈慢推約 1 分鐘" },
            { label: "治療後", value: "門診觀察後返家" }
        ],
        note: "療程為每 4 週一次，共 6 次。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>國際現況：Ra-223 多半已是成熟的門診流程，不是隔離病房型治療</h4>
            <p>目前主流流程著重在<strong>選對病人、按週期給藥、監測血球與把前 7 天排泄物衛生講清楚</strong>。因為是 alpha 治療、外照射低，多數中心不需要安排長時間隔離，但這不代表可以忽略照護者與污染物管理。</p>`
        },
        {
            type: "section",
            title: "治療前要先確認的條件",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>mCRPC 合併症狀性骨轉移</strong>，且沒有已知內臟轉移。</li>
                    <li>治療前 10 天內要確認 CBC；國際實務會把骨髓儲備當成進場門檻，而不是打完再觀察。</li>
                    <li>先確認病人的主要病程負擔是否真的來自骨病灶，而不是肝、肺或快速全身進展。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "實際給藥怎麼做",
            icon: "💉",
            html: `<div class="prose">
                <ul>
                    <li>通常以<strong>靜脈緩慢注射</strong>完成，之後再以生理食鹽水沖管。</li>
                    <li>比起複雜輸注設備，Ra-223 更重視身分核對、活度核對、劑量計算與外滲避免。</li>
                    <li>多數病人治療當天即可返家，但返家前要完成體液衛生與異常回報衛教。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "副作用與追蹤",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li>常見副作用包含腹瀉、噁心、疲倦與血球下降。</li>
                    <li>每個 cycle 前都要重看 CBC；不是第一針能打，後面就一定能照表操課。</li>
                    <li>若疼痛型態改變、出血傾向增加或感染風險上升，要提早回報，而不是等下一次門診。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "病人、排泄物、設施與醫護的輻防重點",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li><strong>病人：</strong>前 7 天加強如廁衛生，處理體液後確實洗手。</li>
                    <li><strong>排泄物：</strong>若病人腹瀉、失禁或需照護者協助清潔，污染防護要升級，不能只說「不用隔離」。</li>
                    <li><strong>環境設施：</strong>門診廁所與污染物處理流程要先定義，避免把受污染耗材當一般垃圾處理。</li>
                    <li><strong>醫護：</strong>外照射通常不是主問題，重點是 universal precautions、避免直接接觸體液與把流程一次做完。</li>
                </ul>
            </div>`
        }
    ]
},

Lu177PSMA: {
    title: "Lu-177 PSMA 治療",
    subtitle: "放射配體治療 — 轉移性攝護腺癌的新武器",
    category: "therapy",
    timeArchitecture: {
        steps: [
            { label: "治療前", value: "PSMA PET + CBC / 腎功能" },
            { label: "給藥方式", value: "靜脈輸注 Lu-177 PSMA-617" },
            { label: "治療後", value: "量測後短住院或門診放行" }
        ],
        note: "療程通常 4–6 次，每 6–8 週一次。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>國際現況：已走向標準化 radioligand therapy，但放行方式依劑量率與當地法規分流</h4>
            <p>Lu-177 PSMA-617（Pluvicto®）在多國已是成熟療程。主流不是把所有病人長住院，而是依<strong>PSMA 影像資格、骨髓與腎功能、出院量測、家中條件與尿液污染控制能力</strong>決定短住院或門診放行。</p>`
        },
        {
            type: "info-box-amber",
            html: `<h4>閱讀提醒：PSMA 頁的核心不是「能不能給藥」，而是「這位病人現在還值不值得給」</h4>
            <p>真正困難的地方往往不是輸注技術，而是判斷現在的腫瘤生物學還有多少屬於 <strong>PSMA 可治療疾病</strong>，以及治療收益能否大於骨髓、腎臟與整體體能付出的代價。</p>`
        },
        {
            type: "section",
            title: "治療前要先確認的條件",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>mCRPC</strong> 在標準全身治療後仍進展，且整體病灶仍屬 PSMA 可標靶疾病。</li>
                    <li>治療前至少要有 <strong>PSMA PET</strong> 證明標的存在；若有明顯去分化病灶，治療價值會下降。</li>
                    <li>若臨床懷疑 mismatch disease，應思考 FDG PET 或其他影像輔助，不要只靠單一亮點做樂觀推論。</li>
                    <li>CBC、腎功能、體能狀態與疼痛控制都要先看，不是影像亮就一定該治。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "實際給藥與院內流程",
            icon: "💉",
            html: `<div class="prose">
                <ul>
                    <li>通常經靜脈輸注完成，前後要確認管路通暢，避免外滲。</li>
                    <li>治療後多會進行量測與必要時的 post-therapy imaging；門診或短住院取決於中心流程。</li>
                    <li>和 PRRT 不同，PSMA 治療不一定有同樣的胺基酸腎保護流程，但仍要嚴密監測腎功能與水分狀態。</li>
                    <li>院內重點在<strong>輸注管路、治療後量測、衛教交付與尿液污染控制</strong>；給藥完成只是流程中段，不是終點。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "副作用與監測",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>口乾 / 唾液腺不適：</strong>是高頻副作用之一，需及早告知病人不是小問題。</li>
                    <li><strong>骨髓抑制：</strong>每次治療前都要重看 CBC，尤其多線治療後病人更不能忽略。</li>
                    <li><strong>腎功能與疲倦：</strong>需持續追蹤，不能只看第一次反應良好就放鬆。</li>
                    <li>若影像顯示骨髓病灶增加，血球下降不一定只是毒性，也可能是病程惡化。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "治療後影像：有些關鍵決策，只靠 PSA 或症狀看不出來",
            icon: "🖼️",
            html: `<div class="prose">
                <ul>
                    <li>後治療 SPECT/CT 的價值不只是確認藥物有到病灶，而是看<strong>病灶之間反應是否一致</strong>、有沒有新病灶、以及是否出現 PSMA-negative escape lesion。</li>
                    <li>若不同 cycle 的成像時間點不一致，看到的差異可能只是方法學差異，而不是真正反應改變。</li>
                    <li>PSA 下降可以是好消息，但不能替代 lesion-level imaging 判斷。</li>
                </ul>
            </div>
            <div class="therapy-figure-grid is-teaching">
                <figure class="therapy-figure-card is-teaching">
                    <div class="therapy-figure-header">
                        <span class="therapy-figure-kicker">圖 1</span>
                        <h4>cycle 1 後治療影像要被當成新的真實基線</h4>
                        <p>這張圖最重要的訊息不是「有沒有攝取」，而是提醒你：從診斷 PSMA PET 到真正進入治療，中間病程可能已經變了。</p>
                    </div>
                    <img src="assets/lu177-prrt-figures/figure-3-cycle-1-baseline-reset.png" alt="Lu-177 後治療影像示意：治療啟動時的 cycle 1 影像可重設真正基線">
                    <figcaption>
                        <strong>臨床情境</strong>
                        <span>病人雖然已經完成治療前 PSMA PET 篩選，但正式進到第 1 個 cycle 時，病灶分布與活性不一定還停在原本那個樣子。</span>
                        <strong>圖中要看什麼</strong>
                        <span>把這張後治療影像當成後續比較的起點，而不是一味回頭拿最早那張診斷 PET 當唯一 baseline。</span>
                        <strong>它會改變什麼決策</strong>
                        <span>若一開始的後治療影像就顯示病灶範圍已擴張，後面每個 cycle 的反應判讀就必須以這張圖為準，避免高估療效。</span>
                    </figcaption>
                </figure>
                <figure class="therapy-figure-card is-teaching">
                    <div class="therapy-figure-header">
                        <span class="therapy-figure-kicker">圖 2</span>
                        <h4>PSA 下降不等於所有病灶都在改善</h4>
                        <p>這張圖最適合拿來教「生化反應」和「病灶層級反應」不是同一件事。</p>
                    </div>
                    <img src="assets/lu177-prrt-figures/figure-5-imaging-vs-psa-discordance.png" alt="Lu-177 後治療影像示意：PSA 下降但不同病灶反應不一致">
                    <figcaption>
                        <strong>臨床情境</strong>
                        <span>病人抽血數字變好時，團隊很容易直覺認為治療正在全面受益。</span>
                        <strong>圖中要看什麼</strong>
                        <span>同一位病人身上，不同病灶可以出現不一致反應；有些縮小、有些穩定，甚至有些已經往另一條路逃脫。</span>
                        <strong>它會改變什麼決策</strong>
                        <span>若只看 PSA 或主觀症狀，可能錯過局部惡化或混合反應；這會直接影響是否續治、加做其他影像，或提早轉換策略。</span>
                    </figcaption>
                </figure>
                <figure class="therapy-figure-card is-teaching">
                    <div class="therapy-figure-header">
                        <span class="therapy-figure-kicker">圖 3</span>
                        <h4>SPECT/CT 的價值在於抓出 target-positive 與 target-negative 分化</h4>
                        <p>這張圖要讀者警覺：不是全身病灶只要有一部分很亮，就代表整體都還屬於可治療疾病。</p>
                    </div>
                    <img src="assets/lu177-prrt-figures/figure-6-psma-positive-and-negative-lesions.png" alt="Lu-177 後治療影像示意：同時存在 PSMA 陽性與陰性病灶">
                    <figcaption>
                        <strong>臨床情境</strong>
                        <span>後線 mCRPC 很可能同時存在仍保有 PSMA 的病灶，以及已去分化、幾乎不再屬於同一路徑的病灶。</span>
                        <strong>圖中要看什麼</strong>
                        <span>影像不只看亮點，也要看哪裡不亮；CT component 幫你辨識那些結構存在、但標靶表現已經掉下來的病灶。</span>
                        <strong>它會改變什麼決策</strong>
                        <span>一旦 target-negative lesion 成為主要病程來源，單靠 PSMA-RLT 的價值就會下降，可能需要更早導入其他全身或局部治療。</span>
                    </figcaption>
                </figure>
            </div>
            <p class="therapy-figure-source-note">圖像來源：2025 JNM/SNMMI-ACNM posttreatment imaging procedure standard 整理圖。站內目前以教學用途標示出處；若要對外正式公開，仍應再確認期刊授權與引用規範。</p>`
        },
        {
            type: "section",
            title: "輻射防護：病人、尿液、環境與醫護各自要守什麼",
            icon: "☢️",
            html: `<div class="prose">
                <ul>
                    <li><strong>病人：</strong>前約 1 週的重點是多喝水、坐著解尿、雙沖水與個人物品分流。</li>
                    <li><strong>排泄物：</strong>主要污染源仍是尿液；若有失禁、導尿或需照護者協助，要提高警覺。</li>
                    <li><strong>環境設施：</strong>治療區與衛浴要能處理潑灑與污染物，不能假設每位病人都能完美配合。</li>
                    <li><strong>醫護：</strong>近距離停留時間、管路操作與體液接觸防護，比鉛衣更重要。</li>
                </ul>
            </div>`
        }
    ]
},

Lu177DOTATATE: {
    title: "Lu-177 PRRT 治療",
    subtitle: "Peptide Receptor Radionuclide Therapy — 神經內分泌腫瘤治療",
    category: "therapy",
    timeArchitecture: {
        steps: [
            { label: "治療前", value: "SSTR 影像 + CBC / 腎功能" },
            { label: "腎保護", value: "Amino acid 輸注約 4 小時" },
            { label: "給藥方式", value: "Lu-177 DOTATATE 靜脈輸注" },
            { label: "治療後", value: "量測後短住院或門診放行" }
        ],
        note: "療程共 4 次，每 8 週一次。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>國際現況：PRRT 已從少數中心治療走向標準化流程，但重點是尿液污染控制</h4>
            <p>Lu-177 DOTATATE（Lutathera®）已是成熟 PRRT 路線。現在國際主流不是把它完全當 I-131 隔離病房處理，而是把<strong>風險分級放行、劑量率量測、前 48–72 小時尿液污染控制與病人衛教</strong>做紮實。</p>`
        },
        {
            type: "info-box-emerald",
            html: `<h4>2026 + 2025 的關鍵更新：PRRT 不只是在做治療，也是在做動態決策</h4>
            <p>2026 Joint EANM / IAEA / SNMMI practical guidance 把<strong>病人篩選、腎保護、個體化風險分層</strong>講得更清楚；2025 JNM posttreatment imaging standard 則把<strong>後治療 SPECT/CT 如何改變續治、暫停、再治療與中途改策略</strong>具體化。</p>`
        },
        {
            type: "section",
            title: "病人篩選：先確認受體真的還在，且病人撐得住完整療程",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>SST PET/CT</strong> 已是核心篩選工具；主要病灶需具足夠受體表現，不能只靠舊式觀念或單一病灶亮點決定。</li>
                    <li>G2/G3、進展速度異常快、或 CT/MRI 與 SST PET 不一致時，應思考補做 FDG PET/CT，避免把明顯異質性病灶當成同一種疾病。</li>
                    <li>腎功能、血球、肝功能與整體耐受度要先確認，因為 PRRT 是完整療程策略，不是打一針試試看。</li>
                    <li>高肝腫瘤負荷不是自動排除條件，但更需要嚴格風險分層與後續追蹤。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "治療前準備：腎保護、SSA 排程與風險預先處理",
            icon: "🧰",
            html: `<div class="prose">
                <ul>
                    <li>胺基酸腎保護不是可有可無，而是 PRRT 標準流程的一部分；常見做法是 <strong>L-lysine + L-arginine</strong> 配方，於治療前先開始輸注。</li>
                    <li>長效 SSA 排程通常放在週期尾端，短效 SSA 則依臨床需要調整，不是機械式一律停藥。</li>
                    <li>功能性腫瘤病人若有脫水、電解質異常、低蛋白或 hormonal symptoms 未穩定，應先處理，不要急著進治療日。</li>
                    <li>若有腎流出道阻塞、腸阻塞風險、腦脊髓病灶或廣泛腹膜病變，要先評估會不會因治療後發炎而出現更大問題。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "當日流程與技術細節：不是『打一支藥』，而是完整輸注設計",
            icon: "💉",
            html: `<div class="prose">
                <ul>
                    <li>治療當天通常先開始<strong>胺基酸輸注</strong>作為腎保護，再進行 Lu-177 DOTATATE 給藥。</li>
                    <li>給藥前要先確認靜脈路徑穩定；管路通暢、輸液順序、線路沖洗與外滲觀察，是最容易被低估的技術控制點。</li>
                    <li>標準 regimen 常見為 <strong>7.4 GBq</strong>、每 8 週一次，共 4 cycles；但高風險病人可依毒性與器官狀況個別化調整。</li>
                    <li>由於胺基酸本身常引起噁心，止吐藥與嘔吐污染處理要先備妥，不可等症狀出現才補流程。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "副作用與支持處置：不能只盯著噁心，還要看骨髓、腎與功能性 flare",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li>常見立即期不適是與胺基酸相關的噁心、嘔吐與疲倦，這一點要先跟病人講清楚，降低不必要恐慌。</li>
                    <li>中長期要看腎功能、血球下降，並留意罕見但重要的 MDS / AML 風險。</li>
                    <li>功能性腫瘤病人治療中若出現 flushing、腹瀉、低血糖或 hemodynamic instability，不能只當成輸液副作用。</li>
                    <li>PRRT 少有一針見效的戲劇感，追蹤時更要看整個療程能否完成與病人是否撐得住。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "病人、排泄物、環境與醫護的輻防：主詞其實是尿液、衛浴與標準化出院",
            icon: "☢️",
            html: `<div class="prose">
                <ul>
                    <li><strong>病人：</strong>前 3 天多喝水、常排尿、坐著解尿、雙沖水，並減少長時間近距離接觸。</li>
                    <li><strong>排泄物：</strong>前 48–72 小時的主要污染風險是尿液；失禁、尿布、導尿袋與嘔吐物要分開管理。</li>
                    <li><strong>環境設施：</strong>專用廁所、污染處理包、可去污表面與廢棄物流向都應先準備好。</li>
                    <li><strong>醫護：</strong>近距離照護、輸注管路與體液處理才是暴露熱區；流程管理比重型屏蔽更關鍵。</li>
                    <li><strong>出院：</strong>真正的關鍵不是病人想不想回家，而是出院量測、在地法規、家庭條件與書面衛教是否都已到位。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "反應追蹤：後治療影像不是附屬品，而是下一步策略的起點",
            icon: "🧭",
            html: `<div class="prose">
                <ul>
                    <li>反應評估要同時看臨床症狀、生化指標與影像，不要只靠單一腫瘤指標判斷。</li>
                    <li>完成療程後的首個穩定解剖評估點通常在約 3 個月；太早做 CT/MRI 可能把治療後發炎誤判成進展。</li>
                    <li>2025 JNM 強調：posttreatment SPECT/CT 的時間點要一致，否則跨 cycle 差異可能只是拍攝時機不同。</li>
                </ul>
            </div>
            <div class="therapy-figure-grid is-teaching">
                <figure class="therapy-figure-card is-teaching">
                    <div class="therapy-figure-header">
                        <span class="therapy-figure-kicker">圖 1</span>
                        <h4>有些病灶變好，不代表整體仍在同一條受益軌道上</h4>
                        <p>這張圖最適合拿來教 PRRT 的 mixed response，因為它會直接挑戰「只要某些病灶縮小就算成功」的直覺。</p>
                    </div>
                    <img src="assets/lu177-prrt-figures/figure-1-new-lesion-and-mixed-response.png" alt="Lu-177 PRRT 後治療影像示意：新病灶與 mixed response">
                    <figcaption>
                        <strong>臨床情境</strong>
                        <span>NET 病人接受 PRRT 後，某些病灶攝取下降或體積變小，但另一些病灶卻冒出新訊號或開始走不同方向。</span>
                        <strong>圖中要看什麼</strong>
                        <span>不要只盯最亮或最大的病灶；真正要找的是「是否出現新病灶」與「病灶之間反應是否分化」。</span>
                        <strong>它會改變什麼決策</strong>
                        <span>一旦 mixed response 或新病灶變成主軸，後續就不一定只是照表打完所有 cycles，而要提早討論改策略、補影像或局部處置。</span>
                    </figcaption>
                </figure>
                <figure class="therapy-figure-card is-teaching">
                    <div class="therapy-figure-header">
                        <span class="therapy-figure-kicker">圖 2</span>
                        <h4>反應非常好時，可以討論暫停，但不是自動少打一針</h4>
                        <p>這張圖的價值在於提醒團隊：PRRT 並不是每位病人都一定要機械式打到同一個 cycle 數。</p>
                    </div>
                    <img src="assets/lu177-prrt-figures/figure-2-marked-response-and-treatment-pause.png" alt="Lu-177 PRRT 後治療影像示意：反應明顯時可考慮暫停療程">
                    <figcaption>
                        <strong>臨床情境</strong>
                        <span>部分病人在早期 cycle 就出現非常明顯的影像反應，這時臨床上會開始出現「是否還要照原計畫繼續」的問題。</span>
                        <strong>圖中要看什麼</strong>
                        <span>重點不是單純看到病灶變淡，而是把影像反應、毒性、症狀與整體療程耐受度一起看。</span>
                        <strong>它會改變什麼決策</strong>
                        <span>這類病人可以討論暫停、延後下一 cycle 或進入更密切追蹤；但前提是團隊有一致的影像與臨床判讀基準，而不是只因反應漂亮就自行減量。</span>
                    </figcaption>
                </figure>
                <figure class="therapy-figure-card is-teaching">
                    <div class="therapy-figure-header">
                        <span class="therapy-figure-kicker">圖 3</span>
                        <h4>跨 cycle 成像時點不一致，會製造假性差異</h4>
                        <p>這張圖對院內流程教育很重要，因為它在說明「看起來變了」有時候只是方法學不一致。</p>
                    </div>
                    <img src="assets/lu177-prrt-figures/figure-4-timing-consistency.png" alt="Lu-177 後治療影像示意：不同時間點成像造成假性差異">
                    <figcaption>
                        <strong>臨床情境</strong>
                        <span>如果第 1 次和第 2 次 posttreatment SPECT/CT 拍攝時間不同，病灶與背景比就可能因時間差而看起來不一樣。</span>
                        <strong>圖中要看什麼</strong>
                        <span>同一類病灶在不同成像時點可能呈現不同對比，這不一定代表生物學真的改變。</span>
                        <strong>它會改變什麼決策</strong>
                        <span>院內若要用跨 cycle 影像比較續治效果，就要先把成像時點標準化；否則很容易把流程差異誤判成治療反應差異。</span>
                    </figcaption>
                </figure>
            </div>
            <p class="therapy-figure-source-note">圖像來源：2025 JNM/SNMMI-ACNM posttreatment imaging procedure standard 整理圖。站內目前以教學用途標示出處；若要對外正式公開，仍應再確認期刊授權與引用規範。</p>`
        },
        {
            type: "section",
            title: "何時該改策略、暫停或再治療",
            icon: "🔄",
            html: `<div class="prose">
                <ul>
                    <li>若出現<strong>新病灶</strong>、明顯 heterogeneous response、器官毒性惡化，或影像與生化數據明顯不一致，就不應機械式把剩下 cycle 打完。</li>
                    <li>若後治療影像顯示幾乎沒有剩餘可治療病灶，可在團隊討論後考慮 pause treatment，而不是把標準次數當成不可動的鐵律。</li>
                    <li>再治療（re-PRRT）應回到 multidisciplinary tumor board，看初次反應持續時間、Ki-67、FDG uptake profile、肝負荷與器官儲備再決定。</li>
                </ul>
            </div>`
        }
    ]
},

Y90SIRT: {
    title: "Y-90 肝癌栓塞治療",
    subtitle: "SIRT / TARE — Y-90 微球體選擇性體內放射治療",
    category: "therapy",
    timeArchitecture: {
        steps: [
            { label: "術前 Mapping", value: "Tc-99m MAA 血管攝影" },
            { label: "Y-90 治療", value: "經導管注入" },
            { label: "術後影像", value: "Bremsstrahlung SPECT 或 PET" }
        ],
        note: "需先做 Tc-99m MAA mapping 評估肺分流率。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Y-90 標記的微球體（SIR-Spheres® 或 TheraSphere®）經肝動脈導管注入，<strong>選擇性卡在腫瘤供血的微血管中</strong>。Y-90 釋放純 Beta 射線，平均穿透深度僅 2.5mm，在局部產生極高輻射劑量殺死腫瘤。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>肝細胞癌（HCC）：</strong>無法手術切除、無法/不願 TACE</li>
                    <li><strong>肝轉移癌：</strong>大腸直腸癌肝轉移（化療失敗後）</li>
                    <li>膽管癌</li>
                    <li><strong>門靜脈栓塞</strong>亦可使用（與 TACE 不同）</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "術前評估",
            icon: "📋",
            html: `<div class="prose">
                <ul>
                    <li><strong>Tc-99m MAA Mapping：</strong>經導管注入 MAA 模擬微球分佈</li>
                    <li><strong>肺分流率（LSF）</strong>必須 < 20%（> 20% 有肺纖維化風險）</li>
                    <li>排除腸道異常分流（避免放射性腸炎）</li>
                    <li>評估肝功能（Child-Pugh, Bilirubin, Albumin）</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>⚠️ 副作用</h4>
            <p><strong>Post-radioembolization syndrome：</strong>疲倦、輕微腹痛、噁心（數天至數週）。嚴重併發症包括放射性肝病（RILD）、胃十二指腸潰瘍。</p>`
        }
    ]
},

OtherTherapies: {
    title: "其他治療",
    subtitle: "I-131 MIBG、Sm-153 與 Y-90 — 不常用，但不能因此只記名字不懂流程",
    category: "therapy",
    timeArchitecture: {
        steps: [
            { label: "I-131 MIBG", value: "住院高活度隔離流程" },
            { label: "Sm-153", value: "門診骨痛緩解流程" },
            { label: "Y-90", value: "導管治療 + 術前 mapping" }
        ],
        note: "這三種治療差異很大，合併頁的目的不是混成一套，而是提醒讀者它們各自的核心風險。"
    },
    content: [
        {
            type: "info-box-amber",
            html: `<h4>整合入口：三種治療要分開判斷</h4>
            <p>I-131 MIBG、Sm-153 與 Y-90 的適應症、技術路徑與輻射防護都不同。放在一起是因為站內優先把高頻四大治療獨立拉出，但這三種仍值得保留一個能快速回想的入口。</p>`
        },
        {
            type: "section",
            title: "I-131 MIBG：高活度住院治療，重點在甲狀腺保護與污染管理",
            icon: "🧡",
            html: `<div class="prose">
                <ul>
                    <li>前提是病灶先有 MIBG 攝取；沒有入口，就沒有後面的治療價值。</li>
                    <li>治療前要完成甲狀腺保護、血球與腎功能評估，兒童個案常需更完整的支持性規劃。</li>
                    <li>通常需住高活度隔離病房；尿液、汗液與嘔吐物污染比多數門診治療更麻煩。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "Sm-153：角色偏向骨痛緩解，重點在選對病人而不是把它講得太華麗",
            icon: "🩶",
            html: `<div class="prose">
                <ul>
                    <li>核心價值是<strong>pain palliation</strong>，不是所有骨轉移都要做。</li>
                    <li>治療前要先確認骨掃描病灶有攝取，且血球仍有餘裕。</li>
                    <li>多半可門診完成，返家重點是基本體液衛生與症狀觀察。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "Y-90：重點是血流分布與術前 mapping，不是單純『打一支藥』",
            icon: "💠",
            html: `<div class="prose">
                <ul>
                    <li>Y-90 依賴導管技術、動脈血流與 Tc-99m MAA mapping；沒有 mapping，就沒有安全的正式治療。</li>
                    <li>重點風險是非目標栓塞、肺分流、肝功能餘裕與術後肝臟耐受度。</li>
                    <li>和 Lu-177 / I-131 不同，Y-90 的技術重點更接近介入治療與劑量學整合。</li>
                </ul>
            </div>`
        }
    ]
},

// ================================================================
// Operation Guide
// ================================================================
OperationGuide: {
    title: "AI 辨識操作說明",
    subtitle: "逐步操作說明",
    category: "toolbox",
    isGallery: true,
    gallery: [
        { src: "assets/guide/01.png", desc: "第一步" },
        { src: "assets/guide/02.png", desc: "第二步" },
        { src: "assets/guide/03.png", desc: "第三步" },
        { src: "assets/guide/04.png", desc: "第四步" },
        { src: "assets/guide/05.png", desc: "第五步" },
        { src: "assets/guide/06.png", desc: "第六步" }
    ],
    content: []
}


}; // End of EXAM_DATA

const CATEGORY_TEACHING_SUPPLEMENTS = {
    pet: [
        {
            type: "section",
            title: "PET 共通排檢核對",
            html: `<div class="prose">
                <ul>
                    <li><strong>檢前先核對：</strong>空腹時間、血糖、近期感染發燒、是否能平躺、是否容易躁動。</li>
                    <li><strong>打藥後等待期：</strong>避免講話、走動、咀嚼、滑手機與焦慮刺激，否則可能增加肌肉或褐色脂肪攝取。</li>
                    <li><strong>檢後：</strong>鼓勵多喝水、多排尿，減少膀胱背景與輻射停留；兒科或高齡者更要主動提醒排尿。</li>
                    <li><strong>教學重點：</strong>PET 很常不是「看不到病灶」，而是「前處理把影像品質做壞了」。</li>
                </ul>
            </div>`
        }
    ],
    endocrine: [
        {
            type: "info-box-amber",
            html: `<h4>內分泌核醫共通注意</h4>
            <p>甲狀腺、MIBG、NP-59、I-131 類檢查最常被<strong>含碘飲食、最近做過 CT 含碘顯影、甲狀腺藥物、懷孕與哺乳</strong>影響。排檢時不要只問「今天有沒有吃藥」，要問最近幾週到幾個月的影像史與藥物史。</p>`
        }
    ],
    cardiac: [
        {
            type: "section",
            title: "心血管核醫共通核對",
            html: `<div class="prose">
                <ul>
                    <li><strong>先分清是哪一種心血管檢查：</strong>MPI / Cardiac PET、PYP、MUGA、靜脈攝影與淋巴攝影的前處理不同。</li>
                    <li><strong>咖啡因限制不是全部都要：</strong>主要是 MPI / Cardiac PET 壓力流程要核對，PYP 與 MUGA 不能直接照抄這條。</li>
                    <li><strong>動態或閘控檢查要注意：</strong>ECG 品質、心律規則性、IV 通暢，以及病人能否配合平躺。</li>
                    <li><strong>教學上要強調：</strong>心血管核醫不是只看形狀，而是依檢查目的看血流、功能、儲備、淋巴或回流路徑。</li>
                </ul>
            </div>`
        }
    ],
    gi: [
        {
            type: "section",
            title: "消化肝膽核醫共通核對",
            html: `<div class="prose">
                <ul>
                    <li>是否需<strong>空腹、停腸胃藥、停止吐/促蠕動藥、腸道準備</strong>，每種檢查不同，不能套同一套。</li>
                    <li>若是出血、膽道或術後評估，先問清楚<strong>目前症狀是否持續、是否剛手術、是否已使用抗生素或止血處置</strong>。</li>
                    <li>教學重點：GI 核醫很容易因時機不對而變成陰性，因此排程時機與臨床狀態一樣重要。</li>
                </ul>
            </div>`
        }
    ],
    "bone-renal": [
        {
            type: "section",
            title: "骨骼 / 腎泌尿共通核對",
            html: `<div class="prose">
                <ul>
                    <li>確認<strong>腎功能、導尿或手術史、是否需要鎮靜、能否配合排尿</strong>。</li>
                    <li>大多數檢查都要強調<strong>補水與排尿</strong>，這不只是衛教，也是影像品質控制。</li>
                    <li>兒科病人要額外確認家長陪同、導尿可接受度、是否有近期 UTI 或發燒。</li>
                </ul>
            </div>`
        }
    ],
    neuro: [
        {
            type: "section",
            title: "神經 / 肺 / 感染核醫共通核對",
            html: `<div class="prose">
                <ul>
                    <li>先確認<strong>病人能否安靜平躺、是否易躁動、是否需家屬協助、近期是否用抗生素或 G-CSF</strong>。</li>
                    <li>神經影像最怕<strong>注射前後環境刺激與頭部移動</strong>；肺部影像則最怕呼吸配合差與注射技術不當。</li>
                    <li>感染核醫要特別注意：<strong>做檢查的時間點</strong>會改變陽性率，太早、太晚、已治療都可能影響結果。</li>
                </ul>
            </div>`
        }
    ],
    therapy: [
        {
            type: "info-box-rose",
            html: `<h4>治療性核醫共通安全原則</h4>
            <p>所有治療性核醫都必須把<strong>懷孕、哺乳、血球計數、腎功能、肝功能、家中照護環境、出院後接觸幼兒規範</strong>當成排治療前必核對項。治療頁不應只講藥理，還要講<strong>轉介路徑、跨科合作與回家後如何真正安全執行</strong>。</p>`
        }
    ]
};

const EXAM_TEACHING_SUPPLEMENTS = {
    PET: [
        {
            type: "section",
            title: "FDG PET 台灣實務排檢核對",
            html: `<div class="prose">
                <ul>
                    <li>到院先核對<strong>空腹至少 6 小時</strong>、血糖、是否剛打胰島素、是否近期感染發燒。</li>
                    <li>血糖過高時不能只記錄，要決定<strong>延後、重測、或通知醫師評估是否改期</strong>。</li>
                    <li>等待 60 分鐘期間要保持溫暖與安靜，冬天要注意<strong>褐色脂肪（BAT）</strong>干擾，尤其年輕瘦病人。</li>
                    <li>若病人有尿滯留、導尿管、無法配合排尿，需先想好骨盆與泌尿系統病灶判讀會不會受影響。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "判讀與報告陷阱",
            html: `<div class="prose">
                <ul>
                    <li>要教新人分辨<strong>生理攝取</strong>（腦、心肌、腸胃道、泌尿系統）與真正病灶。</li>
                    <li>常見 incidental findings 如甲狀腺結節、腎上腺、結腸局灶攝取，報告不能一律寫轉移，需建議後續相關檢查。</li>
                    <li>追蹤病人應盡量用相近條件比較 SUV，避免不同血糖、不同等待時間造成假變化。</li>
                    <li>化療或免疫治療後早期可能出現 flare 或 pseudo-progression，不能只看單次影像就下結論。</li>
                </ul>
            </div>`
        }
    ],
    BrainPET: [
        {
            type: "section",
            title: "注射環境與家屬指導",
            html: `<div class="prose">
                <ul>
                    <li>注射前後環境應保持<strong>安靜、昏暗、避免交談與閱讀</strong>，避免外界刺激改變皮質葡萄糖代謝。</li>
                    <li>若是高齡病人或焦慮病人，家屬需先被教導：不要在注射後持續說話、餵食或讓病人滑手機。</li>
                    <li>對躁動、失智嚴重或無法靜止者，要先討論是否需要鎮靜或改變影像策略。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "典型失智症影像教學",
            html: `<div class="prose">
                <ul>
                    <li><strong>Alzheimer's disease：</strong>雙側顳頂葉、posterior cingulate、precuneus 低代謝最經典。</li>
                    <li><strong>Frontotemporal dementia：</strong>前額葉與前顳葉優勢低代謝。</li>
                    <li><strong>DLB：</strong>枕葉低代謝、cingulate island sign 可作為教學點。</li>
                    <li><strong>中風或舊傷：</strong>常呈局部不對稱，不能誤當退化型失智。</li>
                </ul>
            </div>`
        }
    ],
    POSLUMA: [
        {
            type: "section",
            title: "PSMA PET 排檢與治療銜接",
            html: `<div class="prose">
                <ul>
                    <li>不只看 PSA 數值，還要看<strong>PSA doubling time、去勢治療史、化療史、泌尿道是否阻塞</strong>。</li>
                    <li>若是為 Lu-177 PSMA 治療前評估，應同步確認<strong>腎功能、血球計數、是否已有 PSMA PET 陽性且 FDG 無明顯不一致病灶</strong>。</li>
                    <li>尿路攝取明顯時，應提醒病人多排尿；必要時考慮導尿或延遲影像協助骨盆判讀。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>PSMA PET 常見陷阱</h4>
            <p>交感神經節、唾液腺、肝臟、腸道、骨折修復區都可能有生理或非腫瘤攝取。報告時要避免把<strong>ganglion uptake 誤叫淋巴轉移</strong>，也要注意接受荷爾蒙治療後的骨轉移 flare 現象。</p>`
        }
    ],
    Ga68DOTATOC: [
        {
            type: "section",
            title: "SSTR PET 的用藥與治療決策",
            html: `<div class="prose">
                <ul>
                    <li>長效 somatostatin analog 常需依醫囑在檢查前<strong>停 4 週左右</strong>，短效製劑則停用時間較短。</li>
                    <li>此檢查最重要的臨床價值之一，是判斷病人是否可進一步接受<strong>PRRT（Lu-177 DOTATATE）</strong>。</li>
                    <li>要教新人看懂 <strong>Krenning score</strong>：不是只有亮不亮，而是與肝臟等參考器官比較。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-emerald",
            html: `<h4>判讀提醒</h4>
            <p>腦下垂體、脾臟、腎上腺、胰頭鈎突與部分甲狀腺病灶可見生理或偶發性 SSTR 攝取。看到局灶攝取不代表一定是 NET，需配合 CT/MRI 與病史。</p>`
        }
    ],
    TRODAT: [
        {
            type: "section",
            title: "TRODAT 批次開瓶與藥物干擾",
            html: `<div class="prose">
                <ul>
                    <li>台灣多數單位必須<strong>湊人數開瓶</strong>，排程不是病人想做就能隔天做，櫃台與電話端要先說清楚。</li>
                    <li>要確認病人是否使用<strong>可能干擾 DAT 的藥物</strong>，包含部分精神科藥物、安非他命類、影響多巴胺轉運的藥物。</li>
                    <li>咖啡因停止時間建議抓得比一般檢查更嚴，並確認病人能夠頭部固定 40 分鐘以上。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "判讀寶典",
            html: `<div class="prose">
                <ul>
                    <li><strong>PD 常見：</strong>後側 putamen 先掉，影像從逗號變句號。</li>
                    <li><strong>原發性顫抖：</strong>DAT 通常正常。</li>
                    <li><strong>非典型巴金森症候群：</strong>可能雙側對稱下降，不能只用「有沒有異常」回答，還要描述分佈模式。</li>
                    <li>影像異常不直接等於病因確診，仍需神經科整合臨床症狀與藥物反應。</li>
                </ul>
            </div>`
        }
    ],
    Cisternography: [
        {
            type: "section",
            title: "腰椎穿刺前安全評估",
            html: `<div class="prose">
                <ul>
                    <li>先確認是否已有 MRI/CT 排除<strong>阻塞性水腦、脊髓壓迫或顱壓顯著升高</strong>。</li>
                    <li>腰椎穿刺不是例行注射，需確認凝血狀態、抗凝藥物、感染風險與病人配合度。</li>
                    <li>病人與家屬需先被告知：可能有<strong>post-LP headache</strong>，而且要多次回院照影。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "NPH 與 CSF Leak 教學重點",
            html: `<div class="prose">
                <ul>
                    <li><strong>NPH：</strong>24 小時腦室逆流、48 小時仍滯留，是傳統教科書型態。</li>
                    <li><strong>CSF Leak：</strong>若要找鼻漏/耳漏，需結合臨床姿勢性頭痛、Beta-2 transferrin 與其他解剖影像。</li>
                    <li><strong>Shunt 評估：</strong>重點不是只看有沒有到，而是看流動速度、是否遲滯、是否與臨床症狀吻合。</li>
                </ul>
            </div>`
        }
    ],
    Lung: [
        {
            type: "section",
            title: "MAA 粒子數與禁忌",
            html: `<div class="prose">
                <ul>
                    <li>若有<strong>右至左分流、嚴重肺高壓、單肺、兒科</strong>，需降低粒子數，避免全身性微栓塞風險。</li>
                    <li>病人最好以仰臥位均勻注射，避免重力分布假象。</li>
                    <li>不能把肺灌注當成機械式例行檢查；注射技術本身就會影響結果。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "判讀陷阱",
            html: `<div class="prose">
                <ul>
                    <li>楔形 segmental defect 要想 PE，但若合併胸片異常或通氣也異常，則需考慮 pneumonia、COPD、atelectasis。</li>
                    <li>肥胖、移動、注射顆粒聚集、嚴重肺病都會降低判讀可信度。</li>
                    <li>做術前肺功能分佈評估時，報告重點要放在<strong>左右肺與葉別功能比例</strong>。</li>
                </ul>
            </div>`
        }
    ],
    LungVQ: [
        {
            type: "section",
            title: "V/Q 檢查操作與病人說明",
            html: `<div class="prose">
                <ul>
                    <li>先教病人：吸入的是核醫通氣藥物，不是「有毒氣體」，配合規則吸氣比什麼都重要。</li>
                    <li>若是嚴重 COPD、通氣配合差或無法密合口器，檢查品質會直接下降。</li>
                    <li>在台灣臨床上，V/Q 常用於<strong>CTA 不適合</strong>（顯影劑過敏、腎功能差、孕婦）之病人。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>Matched vs Mismatched 是教學核心</h4>
            <p><strong>通氣正常、灌注缺損</strong>叫 mismatch，較支持 PE；<strong>通氣與灌注一起缺損</strong>叫 matched defect，較常見於肺炎、COPD、肺不張。新人若這個概念沒建好，後面全部都會亂掉。</p>`
        }
    ],
    Ga67: [
        {
            type: "section",
            title: "干擾因素與前處理",
            html: `<div class="prose">
                <ul>
                    <li>腸道背景常是最大困擾，必要時可依醫囑使用輕瀉劑或安排延遲影像。</li>
                    <li>近期輸血、鐵劑、低白蛋白、G-CSF 使用史都可能影響分布與判讀。</li>
                    <li>急性感染剛開始太早做、或已用抗生素一段時間後才做，都可能降低陽性率。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "判讀經典圖像",
            html: `<div class="prose">
                <ul>
                    <li><strong>Lambda sign + Panda sign：</strong>是 sarcoidosis 經典教學圖像。</li>
                    <li>肝脾骨髓背景是正常的一部分，不能把所有軀幹攝取都當病灶。</li>
                    <li>Ga-67 常與淋巴瘤重疊，報告時要提醒需結合臨床、血液數據與解剖影像。</li>
                </ul>
            </div>`
        }
    ],
    Scrotal: [
        {
            type: "section",
            title: "急診流程必教版",
            html: `<div class="prose">
                <ul>
                    <li>這是核醫科少數真正的<strong>急診檢查</strong>。一旦懷疑 torsion，影像目的不是漂亮，是要<strong>幫病人搶時間進 OR</strong>。</li>
                    <li>收到急診通知時，要先確認：病人是否已由泌尿科評估？是否已在手術決策流程中？</li>
                    <li>若影像高度支持扭轉，回報不應拖到 routine report，而是應立即通知臨床端。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-rose",
            html: `<h4>教學底線</h4>
            <p>睪丸扭轉陽性不是「安排門診追蹤」的結果，而是<strong>立刻通知泌尿科</strong>的結果。新人一定要把這點刻進腦裡。</p>`
        }
    ],
    Cystography: [
        {
            type: "section",
            title: "導尿、感染風險與家長說明",
            html: `<div class="prose">
                <ul>
                    <li>做 direct radionuclide cystography 前，要確認是否有<strong>活動性 UTI、發燒、近期培養結果</strong>。</li>
                    <li>兒科導尿要注意無菌技術、導尿尺寸與灌注壓力，不可為了快而灌太急。</li>
                    <li>家長常最焦慮的是「要不要一直追蹤、會不會自己好」；這時要清楚說明核醫追蹤的優勢是<strong>輻射低、適合重複評估</strong>。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "VUR 教學重點",
            html: `<div class="prose">
                <ul>
                    <li>逆流雙側、反覆發作、合併 DMSA 結痂時，臨床風險較高。</li>
                    <li>核醫膀胱攝影很敏感，但不像 VCUG 那麼擅長解剖分級，因此應清楚說明其角色是<strong>追蹤功能性逆流</strong>。</li>
                    <li>排尿末段或用力時出現的 pseudoreflux，要避免過度判讀。</li>
                </ul>
            </div>`
        }
    ],
    SLN: [
        {
            type: "section",
            title: "手術協作與異位引流",
            html: `<div class="prose">
                <ul>
                    <li>真正困難處常不是影像，而是<strong>和外科、手術室、gamma probe、手術時間</strong>的配合。</li>
                    <li>乳癌內側病灶可能引流到<strong>internal mammary chain</strong>，不是只有腋窩。</li>
                    <li>如果看到多顆節點，要教新人思考：哪顆是 sentinel，哪顆可能已是 second echelon。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>台灣實務提醒</h4>
            <p>不是每家醫院的 OR 都有同樣成熟的 gamma probe 與流程。影像標記的可重現性、皮膚記號能否保留到手術時點，往往比理論更重要。</p>`
        }
    ],
    CardiacPET: [
        {
            type: "section",
            title: "Cardiac PET 的台灣現況與教學重點",
            html: `<div class="prose">
                <ul>
                    <li>Rb-82 generator 與 N-13 cyclotron 在台灣都屬少數中心能力，排檢不如 MPI 彈性。</li>
                    <li>最大的教學價值在於<strong>可直接量化冠脈血流與 coronary flow reserve (CFR)</strong>，對 balanced ischemia 特別有幫助。</li>
                    <li>對肥胖或 attenuation artifact 明顯病人，Cardiac PET 比 SPECT 更能提供乾淨答案。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>操作限制</h4>
            <p>由於示蹤劑半衰期極短，排程、generator 狀態與壓力藥流程必須緊密銜接；這不是能任意拖延的檢查。</p>`
        }
    ],
    Thyroid: [
        {
            type: "section",
            title: "含碘與藥物干擾",
            html: `<div class="prose">
                <ul>
                    <li>近期 CT 含碘顯影、海帶海苔、含碘藥物、Amiodarone 都可能讓攝取失真。</li>
                    <li>若病人正在使用 Methimazole / PTU，是否停藥應依臨床問題而定，不可一概而論。</li>
                    <li>排檢時要主動問「最近有沒有做電腦斷層打顯影劑」，這是台灣臨床最常漏掉的點之一。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "Graves 與甲狀腺炎教學點",
            html: `<div class="prose">
                <ul>
                    <li><strong>Graves：</strong>瀰漫高攝取，常與 TRAb、臨床甲亢一致。</li>
                    <li><strong>甲狀腺炎：</strong>病人可能甲亢，但掃描攝取低，這正是要教新人建立的鑑別概念。</li>
                    <li>Hot nodule 多半功能性；Cold nodule 則需配合超音波與細針抽吸進一步評估。</li>
                </ul>
            </div>`
        }
    ],
    MIBG: [
        {
            type: "section",
            title: "SSKI 與台灣飲食衛教",
            html: `<div class="prose">
                <ul>
                    <li>除了服用 Lugol's / SSKI，也要提醒病人盡量避免<strong>海帶、昆布、海苔、褐藻類保健品</strong>等高碘飲食。</li>
                    <li>要主動詢問病人是否有胃不舒服、噁心或因藥味重而無法規則服藥，避免甲狀腺保護失敗。</li>
                    <li>神經母細胞瘤兒童家屬尤其需要清楚書面指導，不然常是回家後沒有按時吃。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "生理與病理攝取",
            html: `<div class="prose">
                <ul>
                    <li>正常可見唾液腺、肝臟、膀胱等背景攝取；兒童要小心棕色脂肪與交感神經分布。</li>
                    <li>若看到多發骨髓或軟組織攝取，要思考神經母細胞瘤分期，而不只是單一腎上腺病灶。</li>
                    <li>MIBG 陰性不代表完全排除嗜鉻或副神經節瘤，尤其某些去分化病灶可能轉而需 FDG PET 評估。</li>
                </ul>
            </div>`
        }
    ],
    GIBleed: [
        {
            type: "section",
            title: "GI 出血掃描的時機與限制",
            html: `<div class="prose">
                <ul>
                    <li>最有價值的情境是<strong>間歇性出血</strong>，因為標記 RBC 可追蹤較久。</li>
                    <li>若病人出血已停止太久，或先前已做大量止血處置，陰性結果不代表永遠沒有出血點。</li>
                    <li>教學上要讓新人知道：GI bleeding scan 的重點不是精確標到幾公分，而是先回答<strong>有沒有活動性出血、方向在哪一段</strong>。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>判讀陷阱</h4>
            <p>真正出血點應呈現<strong>先出現、再移動、順腸道走向擴散</strong>。若只是固定不動的亮點，要小心血管、脾臟、尿路或異常聚積造成的假陽性。</p>`
        }
    ],
    Meckel: [
        {
            type: "section",
            title: "Meckel 掃描教學重點",
            html: `<div class="prose">
                <ul>
                    <li>最典型是<strong>兒童無痛性下消化道出血</strong>，而且病灶顯影時間常與胃同時出現。</li>
                    <li>若腹腔亮點出現時間比胃晚很多、位置又會移動，要小心腸道游離藥物或泌尿系統干擾。</li>
                    <li>前處理藥物不是每次都必用，但在疑難病例可顯著提高敏感度。</li>
                </ul>
            </div>`
        }
    ],
    Liver: [
        {
            type: "section",
            title: "肝脾掃描的臨床角色",
            html: `<div class="prose">
                <ul>
                    <li>雖然現代影像多由 CT / MRI 主導，但肝脾掃描仍可教新人理解<strong>網狀內皮系統功能</strong>與 colloid shift。</li>
                    <li>若見脾臟與骨髓顯著增亮、肝臟攝取下降，要想到肝硬化或門脈高壓相關改變。</li>
                    <li>副脾定位時常用於術前或術後殘餘脾組織確認，這點臨床上仍有價值。</li>
                </ul>
            </div>`
        }
    ],
    LiverHemangioma: [
        {
            type: "section",
            title: "延遲填充是關鍵，不是早期相",
            html: `<div class="prose">
                <ul>
                    <li>肝血管瘤常在早期相不明顯，真正診斷價值來自<strong>延遲相逐漸填滿</strong>。</li>
                    <li>若病灶太小、位置太深或病人移動，SPECT/CT 比平面影像更有幫助。</li>
                    <li>教學上要強調：這是少數<strong>特異度非常高</strong>的核醫肝病灶檢查。</li>
                </ul>
            </div>`
        }
    ],
    WBCScan: [
        {
            type: "section",
            title: "白血球標記流程管理",
            html: `<div class="prose">
                <ul>
                    <li>WBC scan 的難點不在拍照，而在<strong>抽血、分離、標記、回注的無菌流程</strong>。</li>
                    <li>做之前應先看白血球數量；太低時不只敏感度差，連標記本身都不理想。</li>
                    <li>若病人已長期使用抗生素或免疫抑制藥，也要提醒臨床端：陰性不一定完全排除感染。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-amber",
            html: `<h4>判讀陷阱</h4>
            <p>腸道、骨髓、脾臟本來就可能有分布；若只看到輕度模糊聚積，不能急著報感染。要比較早期與延遲影像，判斷是否<strong>真正逐漸聚焦</strong>。</p>`
        }
    ],
    I131: [
        {
            type: "section",
            title: "I-131 治療真正的底層邏輯",
            html: `<div class="prose">
                <p>I-131 之所以能同時拿來做診斷與治療，不是因為它「剛好會到甲狀腺」，而是因為<strong>分化良好的甲狀腺細胞保留了抓碘能力</strong>。只要這個入口還在，放射性碘就不只是顯影劑，而是能把 beta 輻射送進細胞內部的治療工具。</p>
                <p>也因此，臨床真正要先確認的不是單純腫瘤大小，而是<strong>TSH 是否被拉高、體內碘池是否夠低、病灶是否仍保有攝碘性</strong>。停藥、低碘飲食、回診時間與出院限制看似分散，其實都在服務同一件事：讓有效劑量進到該進的地方，同時盡量少留在不該承受的人和器官身上。</p>
            </div>`
        },
        {
            type: "info-box-rose",
            html: `<h4>讀 I-131 頁面時，最值得先記住的一句話</h4>
            <p>這不是「喝藥把癌細胞殺掉」那麼簡單，而是<strong>利用甲狀腺細胞的生理習性，把輻射選擇性地送進去</strong>；所以病人是否適合做、做完如何與家人保持安全距離，和療效一樣重要。</p>`
        }
    ],
    I131MIBG: [
        {
            type: "section",
            title: "MIBG 治療在打的是『神經內分泌的收納路徑』",
            html: `<div class="prose">
                <p>I-131 MIBG 不是看到腫瘤就能做，而是要先確認腫瘤還保有<strong>norepinephrine transporter 相關的攝取能力</strong>。這也是為什麼治療前常先靠 MIBG 影像確認病灶有沒有真正在抓藥：如果入口不夠，後面的治療就很難成立。</p>
                <p>它的難點也不只在活度，而在<strong>甲狀腺阻斷、血球監測、病房防護與兒科 / 年輕族群的照護安排</strong>。很多病人是神經母細胞瘤或嗜鉻細胞瘤相關族群，照護者暴露、嘔吐污染與住院動線管理，都必須先被設計好。</p>
            </div>`
        },
        {
            type: "section",
            title: "為什麼有些藥要停、有些症狀要先問",
            html: `<div class="prose">
                <p>因為某些藥物會和 MIBG 走同一條運輸或儲存路徑，直接影響攝取。臨床上真正重要的不是死背藥名，而是理解：<strong>任何會改變交感神經末梢處理兒茶酚胺方式的因素，都可能讓治療效益與影像判讀一起失真</strong>。</p>
            </div>`
        }
    ],
    Sm153: [
        {
            type: "section",
            title: "Sm-153 不是治本，而是把『痛的機制』變得可控",
            html: `<div class="prose">
                <p>Sm-153 EDTMP 會優先到<strong>骨轉移活性高、骨重塑旺盛</strong>的地方，所以它最核心的價值是舒緩多發骨轉移疼痛，而不是像局部放療那樣瞄準單一病灶。這類治療最適合放在「疼痛分布廣、局部治療難以一次涵蓋」的情境下理解。</p>
                <p>因此，治療前的關鍵不是只有骨掃描有沒有亮，而是<strong>痛點是否真的來自成骨活性病灶、骨髓儲備能不能承受、以及病人期待是否對得上『止痛為主』這個目標</strong>。若把它當成縮瘤治療，往往會產生錯誤期待。</p>
            </div>`
        }
    ],
    Ra223: [
        {
            type: "section",
            title: "Ra-223 的台灣臨床轉介邏輯",
            html: `<div class="prose">
                <ul>
                    <li>Ra-223 通常不是核醫科單獨決定，而是與<strong>泌尿科、腫瘤科、核醫科</strong>共同決策。</li>
                    <li>最重要的適應症前提是<strong>症狀性骨轉移且無內臟轉移</strong>，不能把所有骨轉移攝護腺癌都直接送來。</li>
                    <li>每次治療前都要重新核對 CBC，因為病人常在療程中出現骨髓儲備下降。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "為什麼 Ra-223 強調『症狀性骨轉移、無內臟轉移』",
            html: `<div class="prose">
                <p>因為 Ra-223 是<strong>類鈣、走骨轉移微環境、以 alpha 粒子短程高 LET 打擊病灶周圍</strong>的治療。它最擅長處理的是骨轉移相關疼痛與骨病灶負荷，而不是已經在肝、肺快速進展的全身性疾病。</p>
                <p>換句話說，Ra-223 不是「攝護腺癌骨轉移通通可以打」；真正的臨床判斷在於：<strong>病人目前最主要的臨床風險，是骨病灶造成的症狀與生活品質下降，還是其他器官進展更迫切</strong>。</p>
            </div>`
        }
    ],
    Lu177PSMA: [
        {
            type: "section",
            title: "治療前門檻與病人篩選",
            html: `<div class="prose">
                <ul>
                    <li>不是 PSMA PET 有亮就能治療，還要考慮<strong>整體病況、骨髓儲備、腎功能、前線治療史</strong>。</li>
                    <li>若有明顯 PSMA 陰性但 FDG 陽性的去分化病灶，治療反應通常較差。</li>
                    <li>病人若有嚴重尿滯留、泌尿道阻塞或導尿需求，檢後輻射排泄衛教要特別個別化。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "PSMA 治療的深層邏輯：不是有亮點就夠，而是要亮得有代表性",
            html: `<div class="prose">
                <p>Lu-177 PSMA 真正依賴的，不只是「某些病灶有 PSMA 表現」，而是<strong>整體腫瘤負荷大多仍保有可治療的標的</strong>。若病人體內已出現大量去分化病灶，代表腫瘤生物學正在往另一個方向走，這時候再漂亮的單一亮點，也未必能轉成實際獲益。</p>
                <p>重點不只是副作用列表，而是<strong>影像篩選、病程階段、器官風險與病人生活目標</strong>如何一起決定「該不該現在做」。</p>
            </div>`
        }
    ],
    Lu177DOTATATE: [
        {
            type: "section",
            title: "PRRT 的核心不是『神經內分泌腫瘤』這個名字，而是受體是否還在",
            html: `<div class="prose">
                <p>Lu-177 DOTATATE 屬於 PRRT，能成立的前提是腫瘤仍有足夠的<strong>somatostatin receptor 表現</strong>。因此，治療前的 DOTATATE 影像不只是分期工具，更像是一張「這扇門有沒有打開」的資格證明。</p>
                <p>真正的臨床抉擇通常落在兩端：一端是病人確實有受體、病程進展需要治療；另一端則是<strong>腎功能、骨髓儲備、腫瘤負荷與長期療程承受度</strong>是否允許安全完成多個 cycle。氨基酸保腎不是附加步驟，而是因為腎臟本來就是這類治療最需要被保護的器官之一。</p>
            </div>`
        }
    ],
    Y90SIRT: [
        {
            type: "section",
            title: "Y-90 在台灣不是單科治療",
            html: `<div class="prose">
                <ul>
                    <li>Y-90 實務上高度依賴<strong>肝膽腸胃科 / 介入放射科 / 核醫科</strong>三方合作，不是核醫單科可完成。</li>
                    <li>術前 MAA mapping 的價值在於確認<strong>肺分流率與腸胃異常分流</strong>，這一步做不好，後面就不能安全治療。</li>
                    <li>治療後若出現腹痛、噁心、肝功能惡化，要警覺 post-radioembolization syndrome 或非目標栓塞。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "Y-90 的底層邏輯，其實是血流分布學",
            html: `<div class="prose">
                <p>Y-90 並不是把藥『注射到全身』，而是利用<strong>肝腫瘤多由肝動脈供血、正常肝實質較仰賴門脈</strong>的差異，把微球優先送到腫瘤附近。這也是為什麼 mapping angiography 和 MAA 模擬幾乎和正式治療同等重要：因為你不是在猜血流，而是在先做一次演習。</p>
                <p>所以真正的風險控制點，不只是劑量學，而是<strong>有沒有非目標栓塞、肺分流是否過高、肝功能保留夠不夠、病人是否還有足夠肝儲備承受治療後反應</strong>。懂這個邏輯，就會知道為什麼 Y-90 前置評估看起來特別繁複。</p>
            </div>`
        }
    ],
    I131WBS: [
        {
            type: "section",
            title: "TSH 刺激方式與低碘飲食核對",
            html: `<div class="prose">
                <ul>
                    <li>台灣實務上常在 <strong>T4 withdrawal</strong> 與 <strong>Thyrogen</strong> 之間取捨，受費用、可近性與病人體能影響。</li>
                    <li>低碘飲食不是只說一句「少吃海鮮」；應主動確認海帶、海苔、健康食品、含碘漱口水與近期顯影檢查。</li>
                    <li>如果病人因停甲狀腺素出現嚴重疲倦、情緒低落、體重增加，要先讓病人知道這是常見過渡期反應。</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-rose",
            html: `<h4>WBS 後回家不是「完全沒事」</h4>
            <p>不論是診斷劑量或治療後掃描，都應依部門規範交代<strong>接觸幼兒、睡眠距離、馬桶沖洗、餐具與哺乳限制</strong>。這類叮嚀最好有書面版本，不能只靠口頭說一次。</p>`
        }
    ]
};

const EXAM_READER_GUIDES = {
    NMBasics: {
        eyebrow: "先看基本觀念",
        title: "核醫常看功能，設備與 QC 會影響影像品質",
        lead: "核醫檢查看功能；設備決定影像怎麼取得；QC 決定影像能不能被信任。先懂這三件事，後面讀 SPECT、PET 或各種檢查會比較容易。",
        cards: [
            { title: "先抓核心價值", text: "核醫最擅長回答的是器官有沒有在正常運作、病灶有沒有活性，而不只是長得像不像。" },
            { title: "再分清主流設備", text: "雙 detector gamma camera、通用型 CZT、心肌專用 CZT、PET/CT 與 PET/MR，各自在解不同的臨床與技術問題。" },
            { title: "最後把 QC 放回核心", text: "QC 不是附屬行政，而是保證病人影像異常來自病人，不是來自設備本身。" },
            { title: "下一步怎麼接", text: "想弄懂文件和紀錄怎麼管理，就接文件與品質管理；想知道藥物怎麼在 hot lab 被安全處理，就接熱核室與製劑作業。" }
        ]
    },
    DocumentControl: {
        eyebrow: "先分清文件種類",
        title: "文件管理重點在版本、責任與紀錄",
        lead: "品質手冊、程序書、作業規範、表單與紀錄用途不同。先分清楚各自的角色，後面的修訂、使用與追溯才不容易混亂。",
        cards: [
            { title: "四階是實務架構，不是唯一標準答案", text: "ISO 9001:2015 強調的是文件要足以支撐流程與受控，不是要求每個單位都畫出同一座金字塔。" },
            { title: "品質手冊是地圖", text: "它應該幫你看懂系統範圍、流程互動與關鍵文件，而不是重抄整本標準。" },
            { title: "外來文件最容易失控", text: "仿單、法規、原廠說明書與學會指引若版次沒控好，現場就會出現同事各講各的情況。" },
            { title: "紀錄要回得去現場", text: "表單欄位、簽名、日期、保存位置與保存年限若沒先定義，真的出事時常找不到完整證據。" }
        ]
    },
    PatientQA: {
        eyebrow: "新人接電話前先看",
        title: "病人溝通先講順序，再講細節",
        lead: "核醫溝通通常先辨識禁忌與高風險，再說檢查目的，最後交代病人今天要怎麼配合。這樣比較不容易漏掉重要事項，也比較容易讓病人聽懂。",
        cards: [
            { title: "先問什麼", text: "懷孕、哺乳、糖尿病、血糖、無法平躺、近期含碘顯影或這項檢查特有的前處理，要先問清楚。" },
            { title: "先說目的", text: "不要只念縮寫。把檢查翻成病人聽得懂的功能語言，病人焦慮通常會先降一半。" },
            { title: "再講流程", text: "打藥後要不要等、會不會分兩段、多久能結束、檢後能不能抱小孩，這些才是病人最在意的實際問題。" },
            { title: "什麼時候不能自己答", text: "只要碰到懷孕、哺乳、治療性核醫、重度過敏史或病人症狀已超出一般範圍，就要升級給醫師或資深同仁。" }
        ]
    },
    Radiopharmacy: {
        eyebrow: "先看作業順序",
        title: "熱核室工作重點在收貨、分裝、放行與污染控制",
        lead: "cGRPP 與台灣法規都指向同一件事：到貨、分裝、放行、污染偵測與紀錄要能重複執行。",
        cards: [
            { title: "先擋住到貨風險", text: "包件完整性、表面劑量率、擦拭測試與文件核對，是把錯誤擋在門外的第一關。" },
            { title: "分裝不是只靠手快", text: "真正成熟的分裝是先備妥器材、屏蔽、標籤與紀錄，再開始抽藥，而不是邊做邊補。" },
            { title: "放行要看完整紀錄", text: "批次紀錄、QC 與 laboratory control record 沒有對起來，就不該靠印象放行。" },
            { title: "污染與廢棄要有節奏", text: "每週或每次作業完偵測、半年料帳查核、廢水取樣與紀錄保存，都是 hot lab 真的會被追的點。" }
        ]
    },
    RadiationSafety: {
        eyebrow: "先看常用場景",
        title: "輻防法規可先分成制度、劑量、事故與紀錄",
        lead: "核醫科常用的輻防內容可分成四件事：開工前準備、劑量監測、事故處理、紀錄保存。",
        cards: [
            { title: "制度面先看第 7 條", text: "輻射防護管理組織、人員與輻射防護計畫沒到位，就不是『先做再補』的問題。" },
            { title: "數字面先抓幾個常用值", text: "5 年 100 mSv、單年 50 mSv、30% 門檻 6 mSv、懷孕後下腹 2 mSv，是現場最常用到的幾個數字。" },
            { title: "事故面要知道時間壓力", text: "遺失、超標或污染外洩不是寫報告而已，先防護、先通知、再調查，30 日內還要交改善報告。" },
            { title: "紀錄面要想到很久以後", text: "職業曝露紀錄不是留幾年就好，而是至少 30 年且到 75 歲；這是法律責任，不是行政習慣。" }
        ],
        conceptDiagram: {
            type: "matrix",
            kicker: "30 秒先懂",
            title: "讀輻防法規時，先分成 4 個現場問題",
            lead: "不要從條號開始背。先判斷眼前問題屬於制度、劑量、事故還是紀錄，讀者才知道下一段該找什麼。",
            items: [
                { label: "制度", tone: "info", title: "能不能開工", text: "防護組織、人員、計畫與場所管理先到位，才談日常作業。" },
                { label: "劑量", tone: "success", title: "有沒有超過界線", text: "職業、一般人、孕期與 30% 門檻分開看，不要只記一個 mSv。" },
                { label: "事故", tone: "critical", title: "現在要先做什麼", text: "先防護、先通知、再調查與改善；時間壓力比文書漂亮更重要。" },
                { label: "紀錄", tone: "warning", title: "以後查得到嗎", text: "佩章、偵測、污染與改善紀錄要能追溯，不是做完就結束。" }
            ],
            note: "視覺讀法：從左到右先判斷問題類型，再往下讀對應段落。"
        }
    },
    EmergencyCart: {
        eyebrow: "先看日常檢查",
        title: "急救車管理重點在平時檢查是否確實",
        lead: "急救車要在使用前就發現鎖號、AED、氧氣或效期問題。日常檢查與異常處理要簡單、固定、可追溯。",
        cards: [
            { title: "每日檢查要抓什麼", text: "鎖號、AED 狀態、氧氣壓力與紀錄簽名，看似簡單，但每一項都在防止真正的臨床空窗。" },
            { title: "半年盤點不只是算數量", text: "藥品效期、即期品替換、批號與盤點紀錄一致性，才是後續出事時站得住腳的證據。" },
            { title: "一看到異常就要升級", text: "鎖頭破壞、藥品失蹤、封條不一致或設備不亮，不能留到『下班前再說』。" },
            { title: "值班前快速核對", text: "用 1 分鐘確認鎖號、AED、氧氣、效期與紀錄，不要等出事後才找資料。" }
        ]
    },
    DosageTable: {
        eyebrow: "先確認藥物，再看活度",
        title: "表格與計算器是核對工具，要配合檢查情境一起看",
        lead: "看劑量時，不只要看數字，還要同時確認核種、檢查目的、成人或兒科公式，以及最低劑量與上限。這樣才不容易把表格當成固定答案。",
        cards: [
            { title: "先看藥物是不是同一種", text: "同樣都叫心肌灌流，不同 tracer、不同 protocol 的活度與有效劑量可能差很多。" },
            { title: "兒科一定先看公式與下限", text: "兒科不是把成人劑量縮小而已；公式算完後還要核對最低劑量與成人上限。" },
            { title: "劑量不是越準越好而已", text: "還要考慮成像品質、病人體型、等待時間與部門 SOP，不能只拿表格單點決策。" },
            { title: "表格與計算器要一起用", text: "把它們當快速核對工具，不要拿來取代醫囑、科內 protocol 或實際量測值。" }
        ]
    },
    I131Ward: {
        eyebrow: "先看住院流程",
        title: "I-131 病房要一起管理治療、污染與出院安排",
        lead: "I-131 住院治療不只是在病房內給藥，還包括住院前準備、住院期間污染控制，以及出院後的返家限制。這些要一起看，流程才會完整。",
        cards: [
            { title: "先確認誰適合住進來", text: "適應症、TSH 刺激、低碘飲食、懷孕排除、哺乳處置與居家條件，都要在入院前完成。" },
            { title: "病房流程要整體設計", text: "給藥、補水、排尿、如廁、布巾、垃圾與污染應變，不能等病人進房後才臨場反應。" },
            { title: "醫護停留時間要被管理", text: "I-131 病房最怕的是小事情分很多次做，讓近距離接觸不知不覺一直累積。" },
            { title: "出院衛教不能模板化", text: "與孕婦、幼兒的接觸距離、睡眠安排、交通方式與返家衛生，都要依量測結果與家庭情境個別化。" }
        ]
    },
    PET: {
        title: "FDG PET/CT：先確認空腹、血糖與等待期",
        cards: [
            { title: "為什麼要做", text: "常用於癌症分期、療效評估、復發追蹤，也可能用在感染或發炎評估。" },
            { title: "檢查前", text: "通常空腹至少 6 小時，只喝水；糖尿病與胰島素使用需事前調整。" },
            { title: "檢查中", text: "打藥後多半需要安靜休息約 60 分鐘，接著拍攝約 20 到 30 分鐘。" },
            { title: "檢查後", text: "多喝水、多排尿；若有泌尿系統問題或無法排尿，應提前讓工作人員知道。" }
        ],
        conceptDiagram: {
            type: "chain",
            kicker: "核心因果鏈",
            title: "FDG PET/CT：影像品質在上機前就已經決定一半",
            lead: "前處理會改變 FDG 分布，FDG 分布會決定病灶對比，最後才輪到掃描機把結果呈現出來。",
            items: [
                { label: "1 空腹", tone: "warning", title: "先把競爭性葡萄糖降下來", text: "禁食與喝水不是儀式，而是在替 FDG 創造比較乾淨的背景。" },
                { label: "2 血糖", tone: "critical", title: "血糖 / 胰島素是最大變因", text: "血糖高、剛打胰島素或剛進食，會把 FDG 分布帶往肌肉與脂肪，降低病灶對比。" },
                { label: "3 安靜", tone: "warning", title: "肌肉活動會自己發光", text: "說話、走動、緊張、滑手機都可能讓肌肉攝取上升，製造不該有的亮點。" },
                { label: "4 等待", tone: "info", title: "60 分鐘是在讓訊號沉澱", text: "FDG 需要時間被攝取與滯留，背景也需要時間穩定，這段等待本身就是檢查品質的一部分。" },
                { label: "5 攝影", tone: "success", title: "掃描只是呈現前面做得好不好", text: "前處理若失控，後面再怎麼掃也很難把病灶對比救回來。" }
            ],
            note: "視覺讀法：先看紅色變因，再看等待與攝影；這能防止讀者只記得檢查時間，忘記前處理才是關鍵。"
        },
        evidence: "更新依據：Cleveland Clinic PET scan patient education（2026）與近期 PET 品質研究。"
    },
    POSLUMA: {
        title: "PSMA PET：多半不用禁食，但排尿與靜止仍很重要",
        lead: "這項檢查通常不必像 FDG PET 那樣長時間空腹，但掃描前先排尿、掃描時保持不動，一樣很重要。",
        cards: [
            { title: "為什麼要做", text: "用來找前列腺癌細胞可能分布的位置，幫助分期、復發評估與治療規劃。" },
            { title: "檢查前", text: "通常不需要禁食，也通常不必停平常藥物；穿舒適衣物即可。" },
            { title: "檢查中", text: "打藥後約等待 1 小時，再先去排尿，之後進行掃描。" },
            { title: "檢查後", text: "大多可直接返家；若出現疲倦、頭痛、味覺改變等短暫不適，可先觀察並回報。" }
        ],
        tellUs: "如果怕打針、怕密閉空間、無法平躺或排尿困難，請先告知。",
        evidence: "更新依據：Cleveland Clinic PSMA PET scan patient education（2026）。"
    },
    Bone: {
        title: "全身骨掃描：大多不用特別禁食，但喝水與排尿很重要",
        lead: "這項檢查不是打完立刻照，通常要先等一段時間，並且主動喝水、常排尿。",
        cards: [
            { title: "為什麼要做", text: "幫助看骨骼是否有轉移、骨折修復、感染或其他活性改變。" },
            { title: "檢查前", text: "通常可以照常吃飯吃藥，除非醫師另有交代；請拿掉金屬物。" },
            { title: "檢查中", text: "打藥後常要等待 1 到 4 小時，再進行約 30 到 60 分鐘拍攝。" },
            { title: "檢查後", text: "未吸收的示蹤劑會從尿液排出，建議多喝水、多排尿。" }
        ],
        conceptDiagram: {
            type: "chain",
            kicker: "流程 + 判讀心智圖",
            title: "Bone scan：先等骨重塑訊號出來，再用排尿把背景降下去",
            lead: "骨掃描的核心不是「打一針拍全身」，而是讓 MDP 到達活躍骨表面，同時把尿路背景控制好，最後再分辨轉移、修復、退化或感染。",
            items: [
                { label: "1 給藥", tone: "info", title: "MDP 追的是骨重塑", text: "真正被放大的不是骨頭形狀，而是成骨活性與修復反應。" },
                { label: "2 等待", tone: "warning", title: "1-4 小時讓骨攝取完成", text: "等待不是行政空檔，是讓骨骼攝取與血中背景分開的必要時間。" },
                { label: "3 補水", tone: "success", title: "水與排尿降低背景", text: "尿路背景太高會干擾骨盆、脊椎與泌尿系統附近判讀。" },
                { label: "4 攝影", tone: "neutral", title: "全身圖只是第一層", text: "必要時加局部、SPECT/CT 或延遲影像，才把位置與性質說清楚。" },
                { label: "5 判讀", tone: "critical", title: "亮點不等於轉移", text: "退化、骨折修復、關節炎、感染、術後變化都可能攝取，必須回到病史與位置。" }
            ],
            note: "視覺讀法：前 3 格是畫質控制，後 2 格是避免過度判讀。"
        },
        evidence: "更新依據：Cleveland Clinic whole-body bone scan patient education（2026）。"
    },
    Biliary: {
        title: "HIDA / 膽道掃描：先確認空腹、止痛藥與可能的不適",
        cards: [
            { title: "為什麼要做", text: "幫助看膽汁是不是能正常從肝臟流到膽囊與腸道，也可評估膽囊功能。" },
            { title: "檢查前", text: "通常需至少空腹 4 小時；部分藥物尤其鴉片類會影響結果。" },
            { title: "檢查中", text: "多階段連續拍攝，必要時會給藥讓膽囊收縮，可能短暫腹部悶或抽痛。" },
            { title: "檢查後", text: "多喝水有助示蹤劑排出；哺乳者通常需暫停並丟棄 24 小時內乳汁。" }
        ],
        tellUs: "如果懷孕、哺乳、剛吃止痛藥、怕密閉空間或無法平躺，請先告知。",
        evidence: "更新依據：Cleveland Clinic HIDA scan patient education（2026）。"
    },
    Gastric: {
        title: "胃排空掃描：標準餐、空腹與時間點都要固定，結果才可信",
        cards: [
            { title: "為什麼要做", text: "用來看食物離開胃的速度，幫助評估胃輕癱或胃排空過慢 / 過快。" },
            { title: "檢查前", text: "通常需空腹至少 4 小時；若有糖尿病，請帶胰島素與血糖機並先說明。" },
            { title: "檢查中", text: "會吃下標準化餐點，通常需在 10 分鐘內吃完，接著分時點拍攝到 2 至 4 小時。" },
            { title: "檢查後", text: "大多沒有特別副作用；多喝水可幫助示蹤劑隨尿便排出。" }
        ],
        tellUs: "若懷孕、哺乳、血糖很不穩、無法吃標準餐、近期吸菸或有需停用藥物，請先告知。",
        evidence: "更新依據：Cleveland Clinic gastric emptying study（2026）與 SNMMI GES guideline 相關研究。"
    },
    DMSA: {
        title: "DMSA：先看用途、等待時間與檢後注意事項",
        lead: "腎皮質 DMSA 常用在兒科與感染後疤痕評估。先知道會不會痛、要等多久、做完能不能回家，通常最實用。",
        cards: [
            { title: "為什麼要做", text: "幫助看腎皮質功能、疤痕與腎臟實質分布。" },
            { title: "檢查前", text: "請帶完整藥單，並先說明是否懷孕、哺乳、怕打針或難以平躺。" },
            { title: "檢查中", text: "打藥後通常要等一段時間，之後進行靜止拍攝。" },
            { title: "檢查後", text: "多喝水、正常排尿即可，多數人可立即恢復日常活動。" }
        ],
        evidence: "更新依據：SNMMI/EANM renal scintigraphy guideline 與 Cleveland Clinic renal scan patient education。"
    },
    DTPA: {
        title: "DTPA：先確認補水、排尿與藥物",
        cards: [
            { title: "為什麼要做", text: "幫助看血流、排泄與是否有真正阻塞。" },
            { title: "檢查前", text: "醫師可能要求先喝水、先排尿，並調整會影響結果的藥物。" },
            { title: "檢查中", text: "通常會打藥後連續拍攝；必要時搭配利尿劑或其他藥物刺激。" },
            { title: "檢查後", text: "示蹤劑會隨尿排出，多喝水通常有幫助。" }
        ],
        evidence: "更新依據：SNMMI/EANM renal scintigraphy / diuretic renography guideline 與 Cleveland Clinic renal scan patient education。"
    },
    MAG3: {
        title: "MAG3：先看引流、排尿與是否阻塞",
        cards: [
            { title: "為什麼要做", text: "常用來看腎臟排泄速度、引流是否延遲，以及輸尿管是否真正阻塞。" },
            { title: "檢查前", text: "先核對藥單、過敏史、是否需補水與先排尿。" },
            { title: "檢查中", text: "會做動態拍攝，有時搭配利尿劑觀察引流變化。" },
            { title: "檢查後", text: "通常可立刻回家，多喝水有助示蹤劑排出。" }
        ],
        evidence: "更新依據：SNMMI/EANM renal scintigraphy / diuretic renography guideline 與 Cleveland Clinic renal scan patient education。"
    },
    MUGA: {
        title: "MUGA：重點不是記住縮寫，而是知道這檢查看的是心室功能",
        cards: [
            { title: "為什麼要做", text: "用來量測心室功能與射出分率，常見於化療前後追蹤或心臟功能評估。" },
            { title: "檢查前", text: "通常不需要常規禁食，也沒有常規停咖啡因要求；重點是確認心律是否穩定、IV 是否通暢。" },
            { title: "檢查中", text: "會接上 ECG 電極、注射標記紅血球示蹤劑，再從不同角度拍攝。" },
            { title: "檢查後", text: "大多可立刻恢復日常活動，接下來 1 到 2 天多喝水即可。" }
        ],
        evidence: "更新依據：Cleveland Clinic MUGA scan patient education（2026）。"
    },
    MPI_Tc99m: {
        title: "Tc-99m MPI：重點在壓力流程、停咖啡因與高脂餐",
        cards: [
            { title: "為什麼要做", text: "主要評估心肌血流是否不足，幫助判斷缺血、梗塞或介入前後風險。" },
            { title: "檢查前", text: "若為壓力灌流流程，通常需依醫囑停咖啡因與部分藥物；也要確認能不能運動、是否有氣喘或 COPD。" },
            { title: "檢查中", text: "常分 Rest 與 Stress 兩階段，兩次注射之間可能需要進食高脂餐，幫助降低肝膽干擾。" },
            { title: "檢查後", text: "多數可返家；若壓力測試後胸悶、喘或頭暈持續，應立即告知醫療人員。" }
        ],
        conceptDiagram: {
            type: "decision",
            kicker: "決策圖",
            title: "MPI：先保住壓力反應，再處理肝膽干擾",
            lead: "MPI 的讀法不是只看 Rest / Stress 兩張圖，而是先確認壓力流程有效，再讓示蹤劑與肝膽背景不要把心肌蓋掉。",
            items: [
                { label: "入口", tone: "warning", title: "先問咖啡因與禁用條件", text: "咖啡、茶、可樂、能量飲、巧克力與部分藥物會讓藥物壓力測試失真。" },
                { label: "分流", tone: "critical", title: "能不能承受壓力流程", text: "氣喘 / COPD、胸痛不穩、心律不整或無法運動，都會改變壓力方式與風險管理。" },
                { label: "Rest", tone: "info", title: "先建立低負荷基準", text: "Rest 影像讓後續 Stress 變化有比較基準，不是流程附屬品。" },
                { label: "Stress", tone: "critical", title: "壓力相才是缺血測試核心", text: "若壓力反應被咖啡因或藥物抵消，結果可能看起來正常但其實不可用。" },
                { label: "高脂餐", tone: "success", title: "把肝膽背景往下拉", text: "高脂餐協助降低肝膽干擾，讓下壁心肌更容易被看清楚。" }
            ],
            note: "視覺讀法：先看左側入口與分流，再看 Rest / Stress / 高脂餐如何共同決定影像可用性。"
        },
        tellUs: "若最近有喝咖啡、茶、能量飲、可樂、吃巧克力，或有氣喘、心律不整、走路不穩，請檢查前先說。",
        evidence: "更新依據：現有 MPI protocol、SNMMI cardiac SPECT practice 與本院流程。"
    },
    MPI_Tl201: {
        title: "Tl-201 MPI：重點在壓力相與延遲再分佈",
        cards: [
            { title: "為什麼要做", text: "除了灌流，也常用來看心肌是否還有存活性，幫助後續血管重建或治療評估。" },
            { title: "檢查前", text: "若包含壓力流程，通常仍需依醫囑停咖啡因；同時要先確認能否運動或是否適合藥物壓力。" },
            { title: "檢查中", text: "先做壓力相，再等待數小時讓 Tl-201 再分佈後補拍延遲影像。" },
            { title: "檢查後", text: "多數可恢復日常活動，但因流程較長，當天應預留足夠時間。" }
        ],
        tellUs: "若今天已有咖啡因攝取、胸痛不穩、近期心律不整或無法配合壓力流程，請先告知。",
        evidence: "更新依據：現有 Tl-201 viability 流程與 cardiac nuclear medicine standard teaching。"
    },
    CardiacAmyloid: {
        title: "PYP：重點是 3 小時延遲與 AL 排除，不是停咖啡因",
        cards: [
            { title: "為什麼要做", text: "主要協助判斷是否為 ATTR 型心臟類澱粉沉積，尤其在心衰竭、左心室肥厚或影像懷疑時。" },
            { title: "檢查前", text: "一般沒有常規停咖啡因要求，也通常不需特別空腹；重點是帶齊心臟檢查與單株蛋白相關評估資料。" },
            { title: "檢查中", text: "注射 Tc-99m PYP 後通常要等約 3 小時，再做平面影像與 SPECT/CT；太早照容易增加血池干擾。" },
            { title: "檢查後", text: "多數可直接返家，多喝水與正常排尿即可；後續結果仍需結合 AL 排除與心臟專科判讀。" }
        ],
        tellUs: "如果無法平躺、近期做過會影響判讀的心臟檢查，或尚未完成血清 / 尿液單株蛋白評估，請先告知。",
        evidence: "更新依據：SNMMI/ASNC/ASE/EANM 等 PYP imaging practice points 與現有頁面內容。"
    },
    LungVQ: {
        title: "V/Q：這個檢查分成通氣與灌注兩段",
        cards: [
            { title: "為什麼要做", text: "當 CTA 不適合或需要看肺通氣 / 灌流是否匹配時，V/Q 很有價值。" },
            { title: "檢查前", text: "通常不需特別禁食，但會先做胸部 X 光，並確認是否能安靜配合呼吸。" },
            { title: "檢查中", text: "先做通氣，再做灌注；前者是吸入示蹤劑，後者是靜脈注射示蹤劑。" },
            { title: "檢查後", text: "吸入的示蹤劑會隨呼吸散去，注射的部分則會在數小時到數天內排出。" }
        ],
        tellUs: "如果懷孕、哺乳、無法配合吸氣、或躺不住，請先說。",
        evidence: "更新依據：Cleveland Clinic V/Q scan patient education（2026）與 ACR pulmonary embolism imaging guidance。"
    },
    Thyroid: {
        title: "甲狀腺 uptake / scan：最近有沒有碰過碘，比當天緊不緊張更重要",
        cards: [
            { title: "為什麼要做", text: "幫助看甲狀腺的功能、攝取情況與分布，尤其用於甲亢與自主性結節鑑別。" },
            { title: "檢查前", text: "先確認近兩個月內是否有含碘顯影，是否正在使用 methimazole / PTU。" },
            { title: "檢查中", text: "通常先吞服示蹤劑，4 到 6 小時後量測，有時 24 小時再回來一次。" },
            { title: "檢查後", text: "多喝水有助排出示蹤劑；除非另有交代，多數人可恢復正常活動。" }
        ],
        evidence: "更新依據：EANM/SNMMI RAIU and thyroid scintigraphy guideline 與 Cleveland Clinic thyroid uptake and scan patient education。"
    },
    Parathyroid: {
        title: "副甲狀腺掃描：不是每個人都需要，重點在找出過度活躍的腺體",
        cards: [
            { title: "為什麼要做", text: "常用於高血鈣與高副甲狀腺素、考慮手術前的定位。" },
            { title: "檢查前", text: "先帶上抽血與影像資料，知道這檢查的目的通常是定位，不是單靠它做診斷。" },
            { title: "檢查中", text: "可能是超音波、核醫 scan 或兩者合併；核醫 scan 常需多個時間點拍攝。" },
            { title: "檢查後", text: "若只是診斷定位，多數可直接返家並等待與外科或內分泌團隊討論結果。" }
        ],
        evidence: "更新依據：Cleveland Clinic parathyroid scan patient education（2026）。"
    },
    Salivary: {
        title: "唾液腺掃描：先知道會用酸刺激分泌",
        cards: [
            { title: "為什麼要做", text: "幫助看唾液腺是否能正常分泌與排出唾液。" },
            { title: "檢查前", text: "拿掉臉部與頸部金屬飾品，並先說明是否有食物過敏、懷孕或可能懷孕。" },
            { title: "檢查中", text: "先打示蹤劑拍攝，之後常會給檸檬糖、檸檬汁或其他酸物刺激分泌，再追加影像。" },
            { title: "檢查後", text: "前 24 小時排泄物中仍可能有少量示蹤劑，請加強沖水與洗手。" }
        ],
        tellUs: "如果哺乳中，通常需暫停哺乳 1 到 2 天並依指示 pump and dump。",
        evidence: "更新依據：Cleveland Clinic salivary gland scan patient education（2026）。"
    },
    BrainPET: {
        eyebrow: "先看分布型態",
        title: "腦部 FDG PET 主要看腦區代謝分布",
        lead: "腦部 FDG PET 通常不是看單一亮點，而是看整體代謝分布有沒有改變。失智、癲癇與腦炎，常要靠不同腦區的分布型態來判斷。",
        cards: [
            { title: "注射環境就是影像條件", text: "安靜、微光、閉眼、不聊天，不是儀式，而是避免把不該活化的腦區一起打亮。" },
            { title: "失智看的是分布地圖", text: "Alzheimer 型、額顳葉型與路易體型，關鍵都在低代謝分布是否符合典型網路，而不是有沒有腫塊。" },
            { title: "癲癇多半在看發作間期的沉默", text: "FDG 腦 PET 常是在發作間期找低代謝灶，和灌流 SPECT 注重發作當下的邏輯不同。" },
            { title: "陰性不代表問題一定不存在", text: "症狀很早期、病程波動或臨床問題不是代謝型異常時，影像可能不典型，仍要回到神經科整體評估。" }
        ]
    },
    Ga68DOTATOC: {
        eyebrow: "先看受體表現",
        title: "DOTATOC PET 主要看腫瘤是否還有 somatostatin receptor",
        lead: "Ga-68 DOTATOC/DOTATATE PET 的重點不只是定位神經內分泌腫瘤，也是在看受體是否還在。這會影響後續藥物與 PRRT 的治療判斷。",
        cards: [
            { title: "先看受體，不是先看大小", text: "受體存在，代表這個腫瘤仍保留可被核醫抓住的生物學特徵；受體掉了，後面治療策略就會變。" },
            { title: "它同時在做分期與治療分流", text: "同一張影像既幫忙找病灶，也在評估病人是否可能受益於 Lu-177 DOTATATE 這類 PRRT。" },
            { title: "藥物史不能晚問", text: "長效體抑素類似物不是瑣事，因為它可能改變受體可用性與檢查排程安排。" },
            { title: "亮點也要分清生理與病理", text: "脾臟、肝臟、腎臟與垂體本來就會有生理攝取，讀片重點是哪些亮度超出正常應有的節奏。" }
        ]
    },
    AmyloidPET: {
        eyebrow: "先分清檢查角色",
        title: "Amyloid PET 是病理線索，不是單靠一張圖就下診斷",
        lead: "Amyloid PET 主要是看腦內有沒有類澱粉負荷。它能幫助臨床判斷，但不能單靠一張圖就直接下阿茲海默症診斷。",
        cards: [
            { title: "陽性不是診斷句點", text: "年長者也可能有 amyloid 沉積，所以陽性一定要和認知症狀、病程與其他檢查一起看。" },
            { title: "陰性有時更有決策價值", text: "當認知退化原因不明時，陰性結果能顯著降低典型阿茲海默病理的可能性。" },
            { title: "它適合用在不確定，而不是所有失智", text: "早發、非典型表現或鑑別卡關時最有幫助；不是每位記憶退化病人都需要直接做。" },
            { title: "讀者最該記住的限制", text: "Amyloid 出現可以早於症狀多年，所以影像呈陽性，不等於現在的所有症狀都由它造成。" }
        ]
    },
    NaFPET: {
        eyebrow: "先看骨代謝",
        title: "NaF PET 對骨重塑變化比較敏感",
        lead: "NaF PET 和傳統骨掃描都和骨代謝有關，但 NaF PET 對骨表面交換更敏感，因此常能更早看出骨頭正在發生變化。",
        cards: [
            { title: "先懂 fluoride 在看什麼", text: "F-18 fluoride 會和骨表面 hydroxyapatite 交換，所以對成骨活性與微小轉移特別敏感。" },
            { title: "它比傳統骨掃描更像高解析版本", text: "同樣是骨轉移問題，NaF PET 往往能更早抓到病灶，也較少被重疊結構模糊掉。" },
            { title: "退化性變化仍會亮", text: "關節退化、骨刺與術後變化也可能攝取，因此影像愈敏感，愈需要回到解剖位置與病史判讀。" },
            { title: "補水排尿依舊重要", text: "即使是 PET，泌尿背景管理仍是畫質與判讀的一部分，不是可有可無的叮嚀。" }
        ]
    },
    CardiacPET: {
        eyebrow: "先看血流量化",
        title: "Cardiac PET 可以量化心肌血流與血流儲備",
        lead: "Cardiac PET 除了看灌流分布，也能量化心肌血流與血流儲備。這有助於補足一般心肌灌流影像不容易看出的資訊。",
        cards: [
            { title: "它在問的是總血流能力", text: "不只是單一血管有沒有塞，而是整顆心在壓力下還能把血流拉高多少。" },
            { title: "微血管疾病在這裡更容易浮現", text: "當大血管沒有明顯狹窄，但病人仍有典型症狀時，Cardiac PET 的量化能力特別有價值。" },
            { title: "前處理是為了保留壓力反應", text: "咖啡因、部分藥物與呼吸狀態會直接影響血管擴張藥反應，所以前處理錯了，數值也會被一起帶歪。" },
            { title: "先分清 protocol", text: "不同 tracer、不同壓力藥物與是否做 flow quantification，會讓檢查目的和解讀層次完全不同。" }
        ]
    },
    MIBG: {
        eyebrow: "先看攝取能力",
        title: "MIBG 掃描主要看病灶是否還會攝取這個分子",
        lead: "MIBG 的重點在於交感神經與腎上腺髓質相關路徑是否還保留。病灶若還有攝取能力，影像與後續治療才比較有意義。",
        cards: [
            { title: "甲狀腺阻斷是第一件事", text: "因為游離碘帶來的不是小誤差，而是會把不該承受的輻射送到甲狀腺。" },
            { title: "藥物史會直接改變攝取", text: "部分抗憂鬱劑、labetalol 或交感神經相關藥物，會和 MIBG 走到同一條生理路徑上。" },
            { title: "24 到 48 小時不是拖時間", text: "這段等待是在讓背景清掉、真正被儲存的病灶慢慢浮出來。" },
            { title: "陰性時要回頭想腫瘤生物學", text: "去分化、藥物干擾或原本就不走這條儲存路徑，都可能讓病灶不如預期顯影。" }
        ]
    },
    NP59: {
        eyebrow: "先看功能偏側",
        title: "NP-59 主要看腎上腺皮質功能偏向哪一側",
        lead: "NP-59 不是主要看腫塊大小，而是看腎上腺皮質功能偏向哪一側。這和 CT 主要看結構的角度不同。",
        cards: [
            { title: "功能偏側比大小更重要", text: "對 Conn syndrome 或 Cushing workup 來說，真正要知道的是哪一側在過度工作。" },
            { title: "這是一條多日時間軸", text: "Day 3、Day 5、Day 7 不是繁瑣，而是讓皮質攝取模式自己長出判讀價值。" },
            { title: "前置 protocol 不能拆開看", text: "Lugol 與 dexamethasone 抑制若沒先講清楚，檢查品質和病人配合度都會一起掉下來。" },
            { title: "現在少見，不代表不重要", text: "它常出現在其他檢查都講不清楚時，因此更需要先釐清臨床問題再排檢。" }
        ]
    },
    I131WBS: {
        eyebrow: "先看前處理",
        title: "I-131 全身掃描的結果會受前處理影響",
        lead: "WBS 的判讀品質常在掃描前就受影響。TSH 刺激、低碘飲食、近期含碘暴露與掃描時點，都會改變結果。",
        cards: [
            { title: "先讓門真的打開", text: "TSH 沒被拉高，代表病灶未必願意攝碘；這時候影像再漂亮也可能低估病情。" },
            { title: "低碘飲食是在替病灶騰位置", text: "不是單純少吃海鮮，而是讓體內碘池降下來，讓放射性碘更容易被真正目標抓住。" },
            { title: "診斷與治療後掃描不是同一件事", text: "同樣叫 WBS，但診斷劑量和治療後掃描的問題意識、敏感度與風險考量都不同。" },
            { title: "掃描完還有回家安全題", text: "接觸限制、如廁與家中幼兒安排，不是附屬衛教，而是整段 I-131 流程的最後一關。" }
        ]
    },
    Venography: {
        eyebrow: "先看回流方向",
        title: "核醫靜脈攝影主要看靜脈回流是否受阻",
        lead: "Radionuclide venography 的重點在於觀察靜脈回流是否中斷、延遲，或改走旁支。這和超音波主要看血管壓縮性的角度不同。",
        cards: [
            { title: "技術細節直接影響結果", text: "止血帶位置、足背注射品質與病人移動，任何一個環節出錯都可能製造假性流向異常。" },
            { title: "真正有價值的是側枝與中斷", text: "看到繞路，不只是『有點慢』，而是代表深靜脈主通道可能真的出了問題。" },
            { title: "現在少做，是因為有更方便的方法", text: "但在超音波不易回答或需要功能性流向概念時，仍有補充價值。" },
            { title: "把靜脈影像看成動態路徑", text: "重點不是一張靜止照片，而是回流方向、側枝與中斷位置。" }
        ]
    },
    Lymphedema: {
        eyebrow: "先看回流功能",
        title: "淋巴水腫攝影主要看淋巴回流是否受阻",
        lead: "Lymphoscintigraphy 看起來像是在拍水腫，但重點其實是淋巴回流功能。內容整理回流路徑與判讀重點。",
        cards: [
            { title: "Dermal backflow 是重要語言", text: "真皮逆流不是抽象名詞，而是淋巴壓力真的推不回去後留下的功能痕跡。" },
            { title: "注射痛感要先交代", text: "指趾間注射比一般抽血更刺激，若沒先說，病人很容易在第一步就失去信任感。" },
            { title: "術後史決定判讀方向", text: "乳癌、婦癌清掃或放療後個案，和原發性淋巴異常的圖像邏輯並不相同。" },
            { title: "用途是鑑別，不只是證明", text: "它的價值常在把淋巴回流障礙與靜脈性或其他原因造成的腫脹分開。" }
        ]
    },
    SLN: {
        eyebrow: "先找第一站",
        title: "前哨淋巴定位重點是找到第一個引流淋巴結",
        lead: "SLN mapping 的主要目的是協助手術找到前哨淋巴結，幫助判斷是否需要更大範圍的清掃。",
        cards: [
            { title: "先理解第一站的邏輯", text: "如果前哨節點沒有轉移，後面整串淋巴結大規模清掃的必要性就可能下降。" },
            { title: "排程必須和開刀房同頻", text: "做得再漂亮，若和手術時序沒接上，這張圖的臨床價值就會被折損。" },
            { title: "皮膚標記不是裝飾", text: "那個記號是外科進入病人體表時的導航點，洗掉就等於把核醫資訊切斷。" },
            { title: "要和手術流程一起看", text: "核醫在這裡不是終點，而是把資訊交棒給 gamma probe 和術者決策。" }
        ]
    },
    GIBleed: {
        eyebrow: "先看出血動態",
        title: "GI bleed scan 主要看出血點是否隨腸道移動",
        lead: "腸胃道出血掃描不是只找固定亮點，而是看標記紅血球是否在腸道內逐步移動。這是判讀時很重要的特徵。",
        cards: [
            { title: "RBC 標記是為了陪它等", text: "因為出血可能間歇發生，所以標記紅血球的價值就在能拉長觀察時間。" },
            { title: "動態比單張截圖重要", text: "如果只看某一瞬間，很容易把血管、脾臟或尿路誤當成出血點。" },
            { title: "真正出血點會移動", text: "先出現、再沿著腸道方向擴散，是判讀時最重要的線索。" },
            { title: "排檢前先問目前還在不在流", text: "若臨床時機已過，影像陰性不一定代表從來沒有出血。" }
        ]
    },
    Meckel: {
        eyebrow: "先看異位胃黏膜",
        title: "Meckel 掃描主要看小腸內是否有會攝取的胃黏膜",
        lead: "Meckel diverticulum 能被核醫抓到，重點不在憩室形狀，而在其中是否有會攝取 pertechnetate 的異位胃黏膜。",
        cards: [
            { title: "兒童無痛性出血是典型情境", text: "Meckel 掃描最常用在兒童反覆下消化道出血，不是成人腹痛的泛用檢查。" },
            { title: "和胃同步出現最有說服力", text: "若腹腔亮點和胃差不多時間出現，判讀力量會大很多。" },
            { title: "前處理藥物是在提高停留率", text: "H2 blocker 或其他輔助藥物不是裝飾性 protocol，而是在幫異位胃黏膜把訊號留久一點。" },
            { title: "太晚出現或會移動要小心", text: "如果亮點晚很多才出現或位置會跑，常要先懷疑腸道內游離藥物或泌尿干擾。" }
        ]
    },
    Liver: {
        eyebrow: "先看吞噬分布",
        title: "肝脾掃描主要看網狀內皮系統的分布變化",
        lead: "Liver-spleen scan 的重點是看肝、脾與骨髓之間的吞噬分布如何改變，而不只是看器官輪廓。",
        cards: [
            { title: "重點是 Kupffer cell 分布", text: "不是每個肝病灶都適合這個檢查，真正有價值的是網狀內皮吞噬是否改變。" },
            { title: "Colloid shift 是功能轉移", text: "看到脾和骨髓更亮，不只是『別處也有攝取』，而是肝臟真的沒辦法像以前那樣處理膠體了。" },
            { title: "副脾定位仍有實務價值", text: "在術前術後或不明脾組織問題時，仍能提供結構影像不一定給得出的功能線索。" },
            { title: "用來理解功能分工", text: "新人可用這個檢查理解肝脾網狀內皮系統，而不是只記某個器官亮不亮。" }
        ]
    },
    LiverHemangioma: {
        eyebrow: "先看延遲相",
        title: "肝血管瘤 RBC 掃描重點在延遲填充",
        lead: "肝血管瘤 RBC 掃描常要靠延遲相來看病灶是否逐步被血池填滿，這是判讀的重要特徵。",
        cards: [
            { title: "早期不亮不代表沒價值", text: "血管瘤常在早期相不突出，真正有辨識力的是延遲相越來越像被血灌滿。" },
            { title: "病灶愈大，型態愈清楚", text: "較大的病灶更容易呈現典型 delayed fill-in，小病灶則可能需要 SPECT 幫忙。" },
            { title: "強項是特異度", text: "當延遲填充模式很典型時，它常比很多模糊的解剖影像更有說服力。" },
            { title: "讀片時先想它是不是血池", text: "只要把病灶當成『慢慢裝滿血的空間』去理解，很多判讀直覺會變得更清楚。" }
        ]
    },
    Salivary2: {
        eyebrow: "先看分泌與排出",
        title: "唾液腺掃描可用來看分泌與排出功能",
        lead: "同樣是唾液腺掃描，放在消化脈絡時，重點會放在分泌與排出功能是否異常。",
        cards: [
            { title: "唾液是消化鏈的起點", text: "當分泌與排出出了問題，病人的不適不只在口乾，也會一路影響吞嚥與進食體驗。" },
            { title: "刺激前後的對比就是答案", text: "這個檢查最有趣的地方，在於先看會不會抓，再看能不能排。" },
            { title: "同一檢查，不同閱讀入口", text: "從內分泌分類讀它，焦點可能是功能測試；從消化分類讀它，更像是在理解口腔前段功能。" },
            { title: "分類不同，重點也不同", text: "從內分泌或消化分類閱讀時，關注的臨床問題會不同。" }
        ]
    },
    Cystography: {
        eyebrow: "先看尿流方向",
        title: "膀胱逆流掃描主要看尿液是否往上逆流",
        lead: "Direct radionuclide cystography 的重點是動態觀察尿液是否逆流回輸尿管或腎臟，而不只是看膀胱形狀。",
        cards: [
            { title: "低劑量讓它適合追蹤", text: "兒童 VUR 常需要反覆觀察，這也是核醫版本的重要存在理由。" },
            { title: "最難受的往往不是照相，而是導尿", text: "對病人與家屬而言，真正需要先解釋的是導尿不適與整體流程感受。" },
            { title: "灌注期和排尿期都重要", text: "有些逆流只在膀胱壓力變高時出現，所以不能只看其中一段。" },
            { title: "它偏功能，不偏解剖細節", text: "若臨床最想知道的是逆流有沒有、還在不在，核醫常比反覆做高劑量解剖檢查更合適。" }
        ]
    },
    Scrotal: {
        eyebrow: "先分清缺血還是發炎",
        title: "陰囊掃描重點在分辨扭轉與發炎",
        lead: "Scrotal scintigraphy 常用在急性陰囊疼痛時，協助分辨缺血扭轉和發炎充血，因為後續處置差異很大。",
        cards: [
            { title: "冷和熱代表完全不同的後果", text: "扭轉的冷缺血與附睪炎的熱充血，不只是影像差異，而是後續處置節奏完全不同。" },
            { title: "最大價值是急", text: "黃金時間窗短，所以流程協調比任何華麗解說都更重要。" },
            { title: "延遲相有時比早期更關鍵", text: "doughnut sign 這種周邊熱、中心冷的圖像，往往比單看動脈相更能幫忙定向。" },
            { title: "它常在超音波卡關時補位", text: "不是要取代所有急診超音波，而是在判斷仍不清楚時補上功能線索。" }
        ]
    },
    Brain: {
        eyebrow: "先看注射時機",
        title: "腦灌流 SPECT 常反映注射當下的血流狀態",
        lead: "Brain perfusion SPECT 的結果會受注射當下的環境、發作時機與病人狀態影響，因此這些條件在判讀時很重要。",
        cards: [
            { title: "安靜與微光不是形式", text: "因為你想凍結的是基準狀態，不是病人剛剛被聊天或噪音拉高的腦活動。" },
            { title: "癲癇時機決定意義", text: "發作中注射看到的是 hotspot，發作間期則可能反過來呈現低灌流。" },
            { title: "失智看的是網路型態", text: "不同型失智會在特定灌流網路掉下來，這和單純看萎縮是不同層次的問題。" },
            { title: "也有急重症角色", text: "從腦死判定到特定血流評估，腦灌流影像不只用在門診失智工作。" }
        ]
    },
    TRODAT: {
        eyebrow: "先看 DAT 分布",
        title: "TRODAT 掃描主要看紋狀體 DAT 是否減少",
        lead: "TRODAT 的重點是看多巴胺轉運體分布是否異常，這有助於區分退化性巴金森症候群與其他情況。",
        cards: [
            { title: "逗號變句號是結果，不是口訣", text: "那個經典外觀背後代表的是 putamen 先掉訊號、病程再往尾核延伸。" },
            { title: "正常掃描也很有價值", text: "若 DAT 保留，原發性顫抖或藥物性巴金森就會比退化性疾病更值得優先考慮。" },
            { title: "排程限制也是臨床現實", text: "昂貴試劑、批次開瓶與長時間等待，都讓 TRODAT 的行政邏輯和一般掃描不同。" },
            { title: "頭能不能穩住，比病名更早決定能不能做", text: "因為一旦無法固定，後面再正確的生理假設也無法換成可用影像。" }
        ]
    },
    Cisternography: {
        eyebrow: "先看 CSF 路徑",
        title: "腦脊髓液池掃描主要看 CSF 的流動方向與停留位置",
        lead: "Cisternography 不是看固定器官攝取，而是追蹤腦脊髓液的流動路徑，觀察是否有滯留、逆流或外漏。",
        cards: [
            { title: "腰椎穿刺讓它一開始就不同", text: "這不是一般靜脈注射檢查，所以病人說明與風險感受都必須提前處理。" },
            { title: "多時點才看得出路徑", text: "2 到 4 小時、24 小時、48 小時的差別，是 cisternography 的判讀重點。" },
            { title: "NPH 在看的是逆流與滯留", text: "如果藥物一直待在腦室、不肯往大腦表面上去，臨床意義就會浮現。" },
            { title: "CSF leak 則是在找外漏", text: "當病人的問題變成鼻漏或耳漏，閱讀焦點就從循環變成定位。" }
        ]
    },
    Lung: {
        eyebrow: "先看灌流分布",
        title: "肺灌注掃描主要看血流是否到達各個肺區",
        lead: "Lung perfusion scan 的重點是看肺灌流分布，協助判斷是否有栓塞、分流或其他供血異常。",
        cards: [
            { title: "MAA 的邏輯是微血管暫時取樣", text: "顆粒不是要堵住肺，而是在可接受範圍內替你標記當下的肺灌流分布。" },
            { title: "粒子數管理是安全核心", text: "兒科、肺高壓或特殊肺功能病人，粒子數不是小細節，而是直接影響風險控制。" },
            { title: "常在不能做 CTA 時補位", text: "顯影劑過敏、腎功能不佳或其他限制，讓 V/Q 保有穩定的臨床位置。" },
            { title: "楔形缺損要帶著臨床看", text: "影像不是獨立證據，呼吸症狀、X 光與其他風險因子會一起決定解釋方向。" }
        ]
    },
    Ga67: {
        eyebrow: "先看等待時間",
        title: "Ga-67 常要靠延遲影像來提高對比",
        lead: "Ga-67 通常需要較長等待時間，讓背景逐步下降，再看發炎或特定病理組織的攝取情形。",
        cards: [
            { title: "等待不是效率差", text: "48 到 72 小時的延遲，是在讓非特異背景慢慢退掉，病灶對比逐步拉開。" },
            { title: "不只追感染", text: "某些淋巴瘤、類肉瘤病與慢性發炎也會讓 Ga-67 掃描有解讀價值。" },
            { title: "腸道處理會影響判讀", text: "瀉劑與腸道背景管理不是附帶提醒，而是為了避免把腸內殘留誤認成病灶。" },
            { title: "它更像補充而不是第一線", text: "在 PET、WBC scan 或現代解剖影像已很成熟的時代，Ga-67 常出現在特定情境下的補位角色。" }
        ]
    },
    WBCScan: {
        eyebrow: "先看標記流程",
        title: "白血球掃描重點在抽血、標記與回注流程",
        lead: "WBC scan 不只是在看影像，前面的抽血、分離、標記與回注流程也會直接影響結果品質。",
        cards: [
            { title: "依賴病人自己的趨化能力", text: "標記白血球之後要回到真正感染處，所以比一般發炎掃描更接近活的生理反應。" },
            { title: "白血球太低就先別硬做", text: "因為不只是敏感度差，連標記和回注本身都可能變得不可靠。" },
            { title: "早期與延遲相要一起讀", text: "真正感染通常會逐步聚焦，而不是一直維持模糊不變。" },
            { title: "抗生素與免疫狀態會改變結果", text: "陰性結果若脫離用藥史與白血球狀態來看，很容易被過度解讀。" }
        ]
    },
    I131: {
        eyebrow: "先看整體流程",
        title: "I-131 治療要一起看療效、安全與返家安排",
        lead: "I-131 治療不只是給藥，還包括 TSH 刺激、低碘飲食、病房污染管理與返家限制。這些一起看，才比較容易掌握治療全貌。",
        cards: [
            { title: "攝碘能力是治療成立的入口", text: "沒有 NIS 與適當 TSH 刺激，再好的活度也未必能換來有效治療。" },
            { title: "低碘與停藥都在替病灶讓路", text: "前置限制看似繁瑣，其實都是在提升真正目標的攝取優勢。" },
            { title: "病房與出院不是附屬流程", text: "補水、排尿、污染處理與返家安排，本身就是治療安全性的一部分。" },
            { title: "一定要想到家屬", text: "I-131 會直接碰到家庭空間、睡眠距離與幼兒接觸安排，所以衛教不能只停在病人本人。" }
        ],
        conceptDiagram: {
            type: "chain",
            kicker: "治療安全鏈",
            title: "I-131：療效、污染、返家限制要當成同一條鏈",
            lead: "先看完整鏈條，再讀細節。這能避免讀者只記得喝藥，卻漏掉治療前準備、病房污染路徑與返家後家屬安全。",
            items: [
                { label: "1 準備", tone: "info", title: "先讓病灶有攝碘優勢", text: "TSH 刺激、低碘飲食、停藥與近期含碘暴露，都先決定治療能不能成立。" },
                { label: "2 給藥", tone: "success", title: "口服只是鏈條中段", text: "真正目標不是完成給藥動作，而是讓保有攝碘能力的組織取得治療劑量。" },
                { label: "3 病房", tone: "warning", title: "污染來源要先被設計好", text: "尿液、唾液、汗液與嘔吐物都要有對應的如廁、清潔、布巾與廢棄流程。" },
                { label: "4 出院", tone: "neutral", title: "用量測決定下一步", text: "出院不是感覺安全，而是依量測、院內規範與醫師判斷確認限制。" },
                { label: "5 返家", tone: "critical", title: "限制要能變成生活安排", text: "睡眠距離、幼兒與孕婦接觸、如廁清潔與交通方式，都要讓病人真的做得到。" }
            ],
            note: "視覺讀法：先沿著 1 到 5 看安全鏈，再回頭看哪一段最容易漏。"
        }
    },
    I131MIBG: {
        eyebrow: "先看病灶攝取",
        title: "I-131 MIBG 治療前要先確認病灶仍有攝取能力",
        lead: "這種治療成立的前提，是病灶仍保有 MIBG 攝取能力。若沒有這個前提，後面的治療風險與限制就不值得承擔。",
        cards: [
            { title: "先有診斷攝取，才談治療", text: "治療前影像證明不是流程裝飾，而是在確認這條運輸路徑還活著。" },
            { title: "甲狀腺阻斷與家屬教育都要前置", text: "I-131 MIBG 的風險不只在病人身上，也在照顧者如何面對污染與接觸限制。" },
            { title: "兒科照護是另一層難題", text: "神經母細胞瘤個案常牽涉陪病、安撫、排泄污染與幹細胞備援等整體規劃。" },
            { title: "病房管理直接決定可行性", text: "尿液、汗液與嘔吐物都可能帶來污染，這不是給完藥再想的事。" }
        ]
    },
    Sm153: {
        eyebrow: "先看治療目標",
        title: "Sm-153 主要用於骨轉移疼痛緩解",
        lead: "Sm-153 EDTMP 的角色主要是緩解骨轉移疼痛，而不是根治腫瘤。重點是病人篩選、效果期待與副作用監測。",
        cards: [
            { title: "先確認病灶真的屬於它", text: "骨掃描有對應攝取、且疼痛來源和成骨活性病灶對得上，治療才比較有機會有效。" },
            { title: "治痛，不是治所有病程", text: "若把它理解成通用抗癌藥，病人與團隊都容易對效果產生錯誤期待。" },
            { title: "骨髓儲備是關鍵限制", text: "因為多發骨轉移病人常已歷經多線治療，血球餘裕很可能比病灶數量更早成為限制。" },
            { title: "短期 flare 要先講", text: "疼痛有時會短暫加劇，若事前沒有說明，病人會以為治療讓病情惡化。" }
        ]
    },
    Ra223: {
        eyebrow: "先看適應症",
        title: "Ra-223 主要適用於症狀性骨轉移且無內臟轉移的病人",
        lead: "Ra-223 使用 alpha 粒子治療，但適用情境很明確：病人要有症狀性骨轉移、沒有內臟轉移，而且病程負擔主要來自骨病灶。",
        cards: [
            { title: "類鈣性質讓它走向骨轉移微環境", text: "它不是追腫瘤專屬受體，而是利用骨轉移附近正在重塑的環境聚積。" },
            { title: "沒有內臟轉移這條線很重要", text: "因為當病程已由肝肺等器官主導，Ra-223 的優勢就很難真正轉成臨床獲益。" },
            { title: "沒有隔離，不代表沒有衛教", text: "主要糞便排泄、如廁清潔與血球監測，仍是每個 cycle 都要重複確認的事。" },
            { title: "CBC 是每一輪的門票", text: "骨髓能不能撐住，常比病人主觀想不想做更早決定療程能否延續。" }
        ],
        conceptDiagram: {
            type: "decision",
            kicker: "治療篩選圖",
            title: "Ra-223：先確定病程由骨病灶主導，再談 alpha 治療",
            lead: "Ra-223 的入口是病人是否落在很窄、但很有價值的適應症區間。",
            items: [
                { label: "入口", tone: "info", title: "症狀性骨轉移是主場", text: "疼痛與病程負擔主要來自骨病灶時，Ra-223 才比較可能把優勢轉成臨床獲益。" },
                { label: "排除", tone: "critical", title: "內臟轉移會改變治療價值", text: "若肝、肺等內臟病灶主導病程，骨靶向 alpha 治療的價值會被大幅削弱。" },
                { label: "機制", tone: "success", title: "類鈣性質走向骨重塑區", text: "Ra-223 聚在骨轉移微環境附近，短射程高能量是它的核心優勢。" },
                { label: "門票", tone: "warning", title: "CBC 決定每一輪能不能進場", text: "骨髓儲備不足時，病人想做也未必安全；血球監測不是附屬流程。" },
                { label: "衛教", tone: "neutral", title: "不用隔離但仍要會清潔", text: "主要糞便排泄，如廁清潔、手部衛生與照護者說明仍要講清楚。" }
            ],
            note: "視覺讀法：先看入口與排除條件，再讀機制；這能避免把 Ra-223 誤解成所有骨轉移都適用。"
        }
    },
    Lu177PSMA: {
        eyebrow: "先看病人篩選",
        title: "Lu-177 PSMA 治療前要先看病灶分布與器官耐受度",
        lead: "PSMA 影像有攝取不代表一定適合治療。重點是病人篩選、正常器官風險、尿路管理與治療目標。",
        cards: [
            { title: "不是有亮點就夠", text: "若整體腫瘤生物學已去分化，只剩少數病灶保有 PSMA，治療效果往往不如影像表面那麼樂觀。" },
            { title: "唾液腺、腎臟與骨髓要一起想", text: "這不是只看腫瘤有沒有入口，也要看正常器官能不能承受代價。" },
            { title: "尿路管理是返家衛教核心", text: "排泄帶來的污染控制，會直接影響病人回家後的生活安排與家屬暴露風險。" },
            { title: "要和病程目標一起看", text: "有時候治療目標是延長控制，有時候是減症狀，兩者會改變你怎麼和病人談風險與期待。" }
        ]
    },
    Lu177DOTATATE: {
        eyebrow: "先看受體與身體條件",
        title: "PRRT 治療前要先確認受體表現與療程耐受度",
        lead: "Lu-177 DOTATATE 的前提是病灶仍有 somatostatin receptor，且病人能承受腎臟、骨髓與多次療程帶來的負擔。",
        cards: [
            { title: "DOTATATE PET 其實像資格考", text: "Krenning score 與受體分布不只是影像資訊，而是在替治療劃線。" },
            { title: "氨基酸保腎不是配角", text: "腎臟是最需要被保護的器官之一，所以 amino acid infusion 本身就是治療設計的一部分。" },
            { title: "噁心常來自保護流程本身", text: "很多病人最不舒服的不是放射藥物，而是腎保護輸液與整體療程負擔。" },
            { title: "要用長程視角看", text: "PRRT 少有一針見效的戲劇性，它更像一場分段完成的控制策略。" }
        ]
    },
    Y90SIRT: {
        eyebrow: "先看血流分布",
        title: "Y-90 SIRT 治療前要先確認微球會送到正確位置",
        lead: "Y-90 SIRT 的關鍵不只是給藥，而是先用 mapping 確認血流分布、肺分流與非目標照射風險，確保微球送到正確位置。",
        cards: [
            { title: "Mapping 幾乎和正式治療同等重要", text: "MAA 模擬是在證明你對血流的假設沒有錯，不是走程序。" },
            { title: "肺分流與腸道異常分流是兩大警報", text: "因為一旦微球跑錯地方，風險不是輕微副作用，而是嚴重非目標照射。" },
            { title: "肝功能餘裕必須先算進來", text: "Y-90 不是只看腫瘤能不能打，也要看剩下的肝能不能承受被治療後的反應。" },
            { title: "需要跨科合作", text: "介入放射、肝膽腸胃與核醫缺一不可，不是任何單科能獨立完成的療程。" }
        ]
    },
    OperationGuide: {
        eyebrow: "先照步驟做",
        title: "AI 辨識操作說明以固定步驟與減少錯誤為主",
        lead: "操作型頁面的重點是照順序完成每一步，減少漏做、跳步或誤判。內容提供實際操作時的流程提醒。",
        cards: [
            { title: "照步驟走，比記口訣更重要", text: "圖像導引的目的就是讓你在現場少猜一步、少漏一步。" },
            { title: "每一張圖都在擋一種常見失誤", text: "從開啟功能、選擇來源到確認結果，都是在替操作建立防呆欄杆。" },
            { title: "結果出來後仍要做人類判斷", text: "操作成功不等於辨識一定正確，最後的核對仍需要回到內容與影像本身。" },
            { title: "適合帶新人上手", text: "這不是背景知識地圖，而是降低第一次操作焦慮與失誤率的工作頁。" }
        ]
    }
};

const LATEST_PATIENT_EDU_SUPPLEMENTS = {
    Bone: [
        {
            type: "section",
            title: "病人最常問的骨掃描流程",
            html: `<div class="prose">
                <ul>
                    <li><strong>多數情況不需禁食：</strong>通常可以照常吃飯與服藥，除非醫師另有交代。</li>
                    <li><strong>真正耗時的是等待：</strong>注射後常要等 1 到 4 小時，讓示蹤劑進入骨骼，再正式拍攝 30 到 60 分鐘。</li>
                    <li><strong>補水與排尿不是客套：</strong>等待期間鼓勵喝水、常上廁所，可以減少背景干擾，也幫助示蹤劑排出。</li>
                    <li><strong>檢後說明要具體：</strong>通常只需多喝水；若部門另有規範，再提醒與幼兒或孕婦保持距離 24 小時左右。</li>
                </ul>
            </div>`
        }
    ],
    Biliary: [
        {
            type: "section",
            title: "HIDA 衛教更新版",
            html: `<div class="prose">
                <ul>
                    <li><strong>至少空腹 4 小時：</strong>太短或太長都可能影響膽囊顯影與功能判讀。</li>
                    <li><strong>鴉片類止痛藥要先問：</strong>Morphine、codeine 等藥物會改變膽道動力，可能需要延後或調整流程。</li>
                    <li><strong>過程可能不痛，但給藥後可能短暫腹部悶痛：</strong>要先說，病人才不會把正常反應誤認為出大事。</li>
                    <li><strong>哺乳者請先安排備用乳品：</strong>不少單位會建議檢後 24 小時 pump and dump。</li>
                </ul>
            </div>`
        }
    ],
    Gastric: [
        {
            type: "section",
            title: "胃排空掃描最新重點",
            html: `<div class="prose">
                <ul>
                    <li><strong>標準餐與時間點要固定：</strong>目前標準化 protocol 仍是結果可比較、可追蹤的核心。</li>
                    <li><strong>至少空腹 4 小時：</strong>糖尿病病人最好攜帶血糖機與胰島素，現場需評估血糖再進行。</li>
                    <li><strong>不要忽略吸菸與藥物：</strong>抽菸、促蠕動藥、止吐藥、鴉片類止痛藥都可能改變胃排空速度。</li>
                    <li><strong>教學上要說清楚：</strong>病人不是只吃一餐就結束，而是要在接下來 2 到 4 小時依時點回來拍照。</li>
                </ul>
            </div>`
        }
    ],
    DMSA: [
        {
            type: "section",
            title: "DMSA 排檢與家屬說明",
            html: `<div class="prose">
                <ul>
                    <li><strong>家屬最在意的是會不會痛與要不要住院：</strong>要先說是靜脈注射後等待，再進行靜態拍攝，多數可當日返家。</li>
                    <li><strong>兒科流程重點：</strong>先確認孩子能否靜止、是否需要包覆固定或家長陪同協助。</li>
                    <li><strong>檢後照護：</strong>大多只需正常喝水與排尿，不需過度限制活動。</li>
                </ul>
            </div>`
        }
    ],
    DTPA: [
        {
            type: "section",
            title: "DTPA 前要先說明的事",
            html: `<div class="prose">
                <ul>
                    <li><strong>藥單要完整：</strong>NSAIDs、aspirin 及其他可能影響腎血流或排泄的藥物，要先核對。</li>
                    <li><strong>補水與排尿常是流程的一部分：</strong>不是額外要求，而是為了讓結果更可靠。</li>
                    <li><strong>利尿或藥物刺激時的感受要先講：</strong>病人較不會因突然想尿或腹部不適而緊張。</li>
                </ul>
            </div>`
        }
    ],
    MAG3: [
        {
            type: "section",
            title: "MAG3 的病人理解版",
            html: `<div class="prose">
                <ul>
                    <li><strong>把問題翻成人話：</strong>這個檢查常是在回答「尿流得出去嗎？是真的阻塞嗎？」</li>
                    <li><strong>檢前常要先喝水與排尿：</strong>讓病人知道這不是麻煩，而是讓判讀更準。</li>
                    <li><strong>檢後通常可直接返家：</strong>正常喝水、排尿即可，多數不需特別休息。</li>
                </ul>
            </div>`
        }
    ],
    MUGA: [
        {
            type: "section",
            title: "MUGA 的病人衛教更新",
            html: `<div class="prose">
                <ul>
                    <li><strong>先說明檢查看的是心臟功能，不是冠狀動脈有沒有塞住：</strong>可減少病人對檢查角色的誤解。</li>
                    <li><strong>通常不需常規禁食，也沒有常規停咖啡因要求：</strong>更重要的是心律要夠穩、IV 要順、病人能配合 ECG 閘控拍攝。</li>
                    <li><strong>拍攝時會接心電圖貼片：</strong>讓病人知道這是正常流程，不是突然多做別的檢查。</li>
                </ul>
            </div>`
        }
    ],
    LungVQ: [
        {
            type: "section",
            title: "V/Q 更新版病人說法",
            html: `<div class="prose">
                <ul>
                    <li><strong>通常會先做胸部 X 光：</strong>這一步是為了幫助後面判讀，不是重複檢查。</li>
                    <li><strong>分兩段：</strong>先吸入示蹤劑看通氣，再打針看灌流，兩者一起看才有意義。</li>
                    <li><strong>不一定要禁食：</strong>但必須能安靜配合呼吸與保持不動。</li>
                    <li><strong>PE 報告語言要教新人看懂：</strong>normal、low probability、indeterminate、high probability 各自代表不同後續處置。</li>
                </ul>
            </div>`
        }
    ],
    Thyroid: [
        {
            type: "section",
            title: "甲狀腺 uptake / scan 更新版",
            html: `<div class="prose">
                <ul>
                    <li><strong>最近兩個月內的含碘顯影是高優先問題：</strong>這比當天有沒有空腹更常決定結果能不能用。</li>
                    <li><strong>Methimazole / PTU 不要自行停：</strong>停藥時間要依臨床問題與醫師指示調整。</li>
                    <li><strong>病人需理解這是兩階段流程：</strong>先吞服，再於數小時後甚至隔天回來量測。</li>
                </ul>
            </div>`
        }
    ],
    Parathyroid: [
        {
            type: "section",
            title: "副甲狀腺掃描更新版",
            html: `<div class="prose">
                <ul>
                    <li><strong>先說明這通常是定位，不是單獨做診斷：</strong>病人才不會把檢查期待放錯位置。</li>
                    <li><strong>可能要拍不只一次：</strong>不同時間點影像是為了比較示蹤劑保留情形。</li>
                    <li><strong>後續常會回到外科與內分泌評估：</strong>這份檢查多半是協助定位，後續治療仍要和外科與內分泌團隊一起判斷。</li>
                </ul>
            </div>`
        }
    ],
    Salivary: [
        {
            type: "section",
            title: "唾液腺掃描更新版",
            html: `<div class="prose">
                <ul>
                    <li><strong>先說會用酸物刺激：</strong>多數病人聽到檸檬糖或檸檬汁後就比較能理解流程。</li>
                    <li><strong>檢後 24 小時加強沖水與洗手：</strong>因為少量示蹤劑可能從尿液與糞便排出。</li>
                    <li><strong>哺乳者需特別提早準備：</strong>部分指引建議暫停哺乳 1 到 2 天。</li>
                </ul>
            </div>`
        }
    ]
};

// ================================================================
// 🔍 SEARCH KEYWORDS
// ================================================================
const SEARCH_KEYWORDS = {
    NMBasics: ['basic', '基礎', 'principle', '原理', 'intro', '介紹', '核醫', 'nuclear', 'gamma camera', 'czt', 'spect', 'spect/ct', 'pet/ct', 'pet/mr', 'collimator', 'qc', '儀器', '設備', '準直儀'],
    DocumentControl: ['document', '文件', 'qms', '品質', 'manual', '品質手冊', 'procedure', '程序書', 'sop', '作業規範', 'work instruction', '表單', '紀錄', '外來文件', '品質目標', '品質政策', 'iso', '版次', '修訂', '追溯'],
    Radiopharmacy: ['hot lab', 'radiopharmacy', '熱核室', '製劑室', '分裝', '放行', '污染偵測', '廢棄', '收貨', 'labeling'],
    PatientQA: ['qa', '問答', 'question', '問題', 'patient', '病人', 'faq'],
    RadiationSafety: ['radiation', '輻射', 'safety', '安全', 'protection', '防護', 'dose', '劑量'],
    DosageTable: ['dosage', '劑量', 'dose', '劑量表', 'snmmi', 'eanm', 'mci', 'mbq'],
    DosageCalc: ['calculator', '計算', 'dosage', '劑量', 'weight', '體重', 'pediatric', '兒科'],
    PET: ['cancer', 'tumor', '腫瘤', '癌', 'fdg', 'glucose', '葡萄糖', 'staging', '分期', 'pet'],
    BrainPET: ['brain', '腦', 'fdg', 'dementia', '失智', 'pet', '腦部'],
    POSLUMA: ['prostate', '攝護腺', 'psma', 'psa', '前列腺', 'posluma'],
    Ga68DOTATOC: ['net', 'neuroendocrine', '神經內分泌', 'somatostatin', 'dotatoc', 'ga68', '體抑素'],
    AmyloidPET: ['amyloid', '類澱粉', 'alzheimer', '阿茲海默', 'dementia', '失智', 'florbetapir'],
    NaFPET: ['bone', '骨', 'naf', 'fluoride', 'pet', '骨轉移'],
    CardiacPET: ['heart', '心臟', 'cardiac', 'pet', 'rb82', 'ammonia', 'perfusion', '灌流'],
    Thyroid: ['甲狀腺', 'graves', 'hyperthyroid', '亢進', 'goiter', 'nodule', '結節'],
    Parathyroid: ['副甲狀腺', 'pth', 'calcium', '鈣', 'adenoma', '腺瘤', 'mibi'],
    MIBG: ['adrenal', '腎上腺', 'pheochromocytoma', '嗜鉻', 'neuroblastoma', '神經母', 'mibg'],
    NP59: ['adrenal', '腎上腺', 'cortex', '皮質', 'cushing', 'aldosterone', 'conn'],
    I131WBS: ['thyroid', '甲狀腺', 'wbs', 'whole body', '全身掃描', 'i131', '碘', '追蹤'],
    Salivary: ['salivary', '唾液', 'sjogren', '乾燥症', 'parotid', '腮腺'],
    MPI_Tc99m: ['heart', '心臟', 'cardiac', 'mpi', 'sestamibi', 'cad', 'coronary', '冠狀動脈', '灌流'],
    MPI_Tl201: ['heart', '心臟', 'thallium', 'viability', '存活', '心肌', 'tl201'],
    CardiacAmyloid: ['heart', '心臟', 'amyloid', '類澱粉', 'pyp', 'attr', 'transthyretin'],
    MUGA: ['heart', '心臟', 'ef', 'ejection', '射出', 'chemo', '化療', 'muga', 'doxorubicin'],
    Venography: ['vein', '靜脈', 'dvt', 'thrombosis', '血栓', 'venography'],
    Lymphedema: ['lymph', '淋巴', 'edema', '水腫', 'swelling'],
    SLN: ['sentinel', '前哨', 'lymph', '淋巴', 'breast', '乳', 'melanoma', '黑色素'],
    Gastric: ['stomach', '胃', 'emptying', '排空', 'gastroparesis', '胃輕癱', 'nausea', '噁心'],
    GIBleed: ['bleeding', '出血', 'gi', '腸胃', 'rbc', 'hemorrhage'],
    Meckel: ['meckel', '梅克爾', 'diverticulum', '憩室', 'pertechnetate', '兒童出血'],
    Liver: ['liver', '肝', 'spleen', '脾', 'cirrhosis', '肝硬化', 'colloid', 'kupffer'],
    LiverHemangioma: ['hemangioma', '血管瘤', 'liver', '肝', 'rbc', '紅血球'],
    Biliary: ['gallbladder', '膽囊', 'cholecystitis', '膽囊炎', 'hida', 'biliary', '膽道'],
    Bone: ['skeleton', '骨頭', 'metastasis', '轉移', 'fracture', '骨折', 'mdp', 'osteomyelitis', '骨髓炎'],
    DMSA: ['kidney', '腎', 'renal', 'pyelonephritis', '腎盂腎炎', 'scar', '結痂', 'cortex', '腎皮質'],
    DTPA: ['kidney', '腎', 'renal', 'gfr', 'obstruction', '阻塞', 'hydronephrosis', '水腎', 'lasix'],
    MAG3: ['kidney', '腎', 'renal', 'tubular', '小管', 'erpf', 'pediatric', '小兒', 'mag3'],
    Cystography: ['bladder', '膀胱', 'reflux', '逆流', 'vur', 'pediatric', '小兒'],
    Scrotal: ['testis', '睪丸', 'torsion', '扭轉', 'epididymitis', '附睪炎', 'scrotum', '陰囊'],
    Brain: ['brain', '腦', 'perfusion', '灌流', 'dementia', '失智', 'alzheimer', 'epilepsy', '癲癇'],
    TRODAT: ['parkinson', '巴金森', 'dopamine', '多巴胺', 'tremor', '顫抖', 'dat', 'trodat'],
    Cisternography: ['csf', '腦脊髓', 'cistern', '液池', 'nph', '水腦', 'leak', '漏'],
    Lung: ['lung', '肺', 'pulmonary', 'pe', 'embolism', '栓塞', 'maa', '灌注'],
    LungVQ: ['lung', '肺', 'ventilation', '通氣', 'perfusion', '灌注', 'vq', 'pe', '栓塞'],
    Ga67: ['infection', '感染', 'inflammation', '發炎', 'fever', '發燒', 'fuo', 'gallium', '鎵'],
    WBCScan: ['wbc', '白血球', 'infection', '感染', 'osteomyelitis', '骨髓炎', 'ibd', 'abscess', '膿瘍'],
    I131: ['thyroid', '甲狀腺', 'cancer', '癌', 'ablation', '消融', 'treatment', '治療', 'iodine', '碘'],
    I131MIBG: ['mibg', 'i131', '神經母細胞瘤', '嗜鉻細胞瘤', '副神經節瘤', 'therapy', '治療'],
    Sm153: ['sm153', 'samarium', '骨痛', '骨轉移', 'pain palliation', 'edtmp', '治療'],
    Ra223: ['prostate', '攝護腺', 'bone', '骨', 'xofigo', 'alpha', 'crpc', 'ra223'],
    Lu177PSMA: ['prostate', '攝護腺', 'lu177', 'psma', 'pluvicto', '攝護腺癌'],
    Lu177DOTATATE: ['net', '神經內分泌', 'lu177', 'dotatate', 'lutathera', 'prrt'],
    Y90SIRT: ['liver', '肝', 'y90', 'sirt', 'tare', '微球', '肝癌', 'hepatocellular'],
    OtherTherapies: ['其他治療', 'i131 mibg', 'sm153', 'samarium', 'y90', 'sirt', 'tare', 'mibg therapy'],
    OperationGuide: ['guide', '操作', 'ai', '說明'],
    HomeHub: ['首頁', '總覽', '快速入口', '常用', 'home', 'dashboard']
};

// ================================================================
// 💊 DOSAGE DATABASE
// ================================================================
const DOSAGE_DB = {
    brain_perfusion: {
        name: '腦血流灌注 (Tc-99m HMPAO/ECD)', drug: 'Tc-99m HMPAO / ECD',
        adultFixed: 20, adultRange: [20, 30], pedPerKg: 0.3, pedMin: 5, pedClass: 'B',
        source: ['SNMMI', 'EANM'], note: '腦死判定不可低於 5 mCi',
        formula: '成人: 固定 20 mCi (範圍 20-30)\n兒科: 0.3 mCi/kg (EANM Class B), Min 5 mCi'
    },
    trodat: {
        name: '多巴胺受體 (Tc-99m Trodat-1)', drug: 'Tc-99m Trodat-1',
        adultFixed: 22.5, adultRange: [20, 25], pedPerKg: 0.3, pedMin: null, pedClass: 'Off-label',
        source: ['台灣'], note: '台灣特有，劑量高於 DaTscan',
        formula: '成人: 20-25 mCi (固定)\n兒科: 0.3 mCi/kg (Off-label, 無標準指引)'
    },
    datscan: {
        name: '多巴胺受體 (I-123 FP-CIT DaTscan)', drug: 'I-123 FP-CIT',
        adultFixed: 4, adultRange: [3, 5], pedPerKg: null, pedMin: null, pedClass: 'C',
        source: ['SNMMI', 'EANM'], note: '需甲狀腺阻斷 (Lugol\'s)',
        formula: '成人: 3-5 mCi (固定)\n兒科: 極少執行, 依 Class C 計算'
    },
    cisternography: {
        name: '腦脊髓液池 (In-111 DTPA)', drug: 'In-111 DTPA',
        adultFixed: 0.5, adultRange: [0.5, 0.5], pedPerKg: null, pedMin: null, pedClass: 'C',
        source: ['SNMMI'], note: '鞘內注射，絕對上限 0.5 mCi',
        formula: '成人: 固定 0.5 mCi (絕對上限)\n兒科: 極罕見, Class C 推算'
    },
    mpi_rest: {
        name: '心肌灌注 1-Day Rest (Tc-99m MIBI)', drug: 'Tc-99m Sestamibi',
        adultFixed: 10, adultRange: [8, 12], pedPerKg: 0.2, pedMin: 2, pedClass: 'N/A',
        source: ['SNMMI'], note: 'Rest 劑量 (低劑量), Stress 需 ≥3 倍',
        formula: '成人: 8-12 mCi (Rest, 低劑量)\n兒科: 0.2 mCi/kg, Min 2 mCi (SNMMI)'
    },
    mpi_stress: {
        name: '心肌灌注 1-Day Stress (Tc-99m MIBI)', drug: 'Tc-99m Sestamibi',
        adultFixed: 30, adultRange: [24, 36], pedPerKg: null, pedMin: null, pedClass: 'N/A',
        source: ['SNMMI'], note: 'Stress 劑量 (高劑量), 需 ≥3 倍 Rest',
        formula: '成人: 24-36 mCi (Stress, 高劑量)\n兒科: 甚少執行 MPI'
    },
    mpi_2day: {
        name: '心肌灌注 2-Day (Tc-99m MIBI)', drug: 'Tc-99m Sestamibi',
        adultFixed: 25, adultRange: [20, 30], pedPerKg: null, pedMin: null, pedClass: 'N/A',
        source: ['SNMMI'], note: '適用肥胖者 (BMI>35)',
        formula: '成人: 20-30 mCi / 次 (2-Day)\n兒科: 甚少執行 MPI'
    },
    cardiac_pyp: {
        name: '類澱粉沉積症 (Tc-99m PYP)', drug: 'Tc-99m Pyrophosphate',
        adultFixed: 20, adultRange: [15, 20], pedPerKg: null, pedMin: null, pedClass: 'N/A',
        source: ['SNMMI'], note: '3hr SPECT/CT 必要；<10 mCi 可能假陰性',
        formula: '成人: 15-20 mCi (固定)\n兒科: 不適用'
    },
    muga: {
        name: 'MUGA (Tc-99m RBC)', drug: 'Tc-99m Red Blood Cells',
        adultFixed: 22.5, adultRange: [20, 25], pedPerKg: 0.25, pedMin: 3, pedClass: 'B',
        source: ['SNMMI', 'EANM'], note: '體外標記率需 >95%',
        formula: '成人: 20-25 mCi\n兒科: 0.25 mCi/kg (EANM Class B), Min 3 mCi'
    },
    thyroid_tc: {
        name: '甲狀腺掃描 (Tc-99m Pertechnetate)', drug: 'Tc-99m Pertechnetate',
        adultFixed: 5, adultRange: [2, 10], pedPerKg: 0.05, pedMin: 0.5, pedClass: 'B',
        source: ['SNMMI', 'EANM'], note: '僅被捕捉不有機化',
        formula: '成人: 5 mCi (範圍 2-10)\n兒科: 0.05 mCi/kg (EANM Class B), Min 0.5 mCi'
    },
    thyroid_i123: {
        name: '甲狀腺掃描 (I-123 NaI)', drug: 'I-123 NaI',
        adultFixed: 0.3, adultRange: [0.2, 0.4], pedPerKg: 0.01, pedMin: 0.03, pedClass: 'C',
        source: ['EANM'], note: '最佳但昂貴，可同時評估攝取與有機化',
        formula: '成人: 0.2-0.4 mCi\n兒科: 0.01 mCi/kg (EANM Class C), Min 0.03 mCi'
    },
    parathyroid: {
        name: '副甲狀腺 (Tc-99m MIBI)', drug: 'Tc-99m Sestamibi',
        adultFixed: 22.5, adultRange: [20, 25], pedPerKg: 0.2, pedMin: 2, pedClass: 'B',
        source: ['SNMMI', 'EANM'], note: '雙相法為主流',
        formula: '成人: 20-25 mCi (高劑量 MIBI)\n兒科: 0.2 mCi/kg (Class B), Min 2 mCi'
    },
    mibg_i123: {
        name: 'MIBG 掃描 (I-123)', drug: 'I-123 MIBG',
        adultFixed: 10, adultRange: [10, 10], pedPerKg: 0.14, pedMin: 1, pedClass: 'B',
        source: ['SNMMI', 'EANM'], note: '緩慢注射 >5 分鐘',
        formula: '成人: 10 mCi (固定)\n兒科: 0.14 mCi/kg (EANM Class B), Min 1 mCi, Max 10 mCi'
    },
    gastric: {
        name: '胃排空 - 固體 (Tc-99m SC)', drug: 'Tc-99m Sulfur Colloid',
        adultFixed: 0.75, adultRange: [0.5, 1], pedPerKg: null, pedMin: 0.25, pedClass: 'N/A',
        source: ['SNMMI', 'EANM'], note: '標準 Tougas 餐',
        formula: '成人: 0.5-1 mCi\n兒科: 固定 0.25 mCi (與體重無關)', pedFixed: 0.25
    },
    salivary: {
        name: '唾液腺掃描', drug: 'Tc-99m Pertechnetate',
        adultFixed: 10, adultRange: [8, 12], pedPerKg: 0.05, pedMin: 0.5, pedClass: 'N/A',
        source: ['SNMMI'], note: '檸檬汁刺激觀察排泄',
        formula: '成人: 10 mCi (範圍 8-12)\n兒科: 0.05 mCi/kg, Min 0.5 mCi'
    },
    liver_spleen: {
        name: '肝脾 / Phytate', drug: 'Tc-99m SC / Phytate',
        adultFixed: 5, adultRange: [3, 8], pedPerKg: 0.05, pedMin: 0.5, pedClass: 'N/A',
        source: ['SNMMI', '台灣'], note: 'Phytate 為台灣特有替代藥物',
        formula: '成人: 5 mCi (Phytate 3-5 mCi)\n兒科: 0.05 mCi/kg, Min 0.5 mCi'
    },
    meckel: {
        name: '梅克爾憩室', drug: 'Tc-99m Pertechnetate',
        adultFixed: 12.5, adultRange: [10, 15], pedPerKg: 0.05, pedMin: 0.5, pedClass: 'N/A',
        source: ['SNMMI'], note: '預給 H2 Blocker 增加敏感度',
        formula: '成人: 10-15 mCi\n兒科: 0.05 mCi/kg, Min 0.5 mCi'
    },
    liver_hemangioma: {
        name: '肝血管瘤 (Tc-99m RBC)', drug: 'Tc-99m RBC',
        adultFixed: 22.5, adultRange: [20, 25], pedPerKg: 0.25, pedMin: 3, pedClass: 'B',
        source: ['SNMMI'], note: '需做 SPECT',
        formula: '成人: 20-25 mCi\n兒科: 0.25 mCi/kg (Class B), Min 3 mCi'
    },
    dmsa: {
        name: '腎皮質 DMSA', drug: 'Tc-99m DMSA',
        adultFixed: 5, adultRange: [3, 5], pedPerKg: 0.05, pedMin: 0.5, pedClass: 'A',
        source: ['SNMMI', 'EANM'], note: '輻射劑量較高，皮質滯留率高',
        formula: '成人: 5 mCi (範圍 3-5)\n兒科: 0.05 mCi/kg (EANM Class A), Min 0.5 mCi'
    },
    mag3: {
        name: '腎功能 MAG3', drug: 'Tc-99m MAG3',
        adultFixed: 6.5, adultRange: [5, 8], pedPerKg: 0.15, pedMin: 1, pedClass: 'A',
        source: ['SNMMI', 'EANM'], note: '腎小管分泌，優於 DTPA',
        formula: '成人: 5-8 mCi\n兒科: 0.15 mCi/kg (EANM Class A), Min 1 mCi'
    },
    dtpa_renal: {
        name: '腎功能 DTPA', drug: 'Tc-99m DTPA',
        adultFixed: 7.5, adultRange: [5, 10], pedPerKg: 0.2, pedMin: 1, pedClass: 'B',
        source: ['SNMMI', 'EANM'], note: 'GFR 測量用',
        formula: '成人: 5-10 mCi\n兒科: 0.2 mCi/kg (EANM Class B), Min 1 mCi'
    },
    cystography: {
        name: '膀胱逆流 (直接)', drug: 'Tc-99m SC / Pertechnetate',
        adultFixed: 1, adultRange: [1, 1], pedPerKg: null, pedMin: 1, pedClass: 'N/A',
        source: ['SNMMI'], note: '經導尿管注入，與體重無關',
        formula: '成人/兒科: 固定 1 mCi (與體重無關)', pedFixed: 1
    },
    lung_perf: {
        name: '肺灌注 (Tc-99m MAA)', drug: 'Tc-99m MAA',
        adultFixed: 4, adultRange: [3, 5], pedPerKg: 0.05, pedMin: 0.5, pedClass: 'N/A',
        source: ['SNMMI', 'EANM'], note: '嚴控粒子數：兒科 1-5 萬顆',
        formula: '成人: 4 mCi (範圍 3-5)\n兒科: 0.05 mCi/kg, Min 0.5 mCi\n⚠️ 粒子數限制: 兒科/肺高壓 1-5 萬顆'
    },
    wbc_scan: {
        name: '白血球掃描 (Tc-99m HMPAO WBC)', drug: 'Tc-99m HMPAO WBC',
        adultFixed: 20, adultRange: [15, 25], pedPerKg: 0.3, pedMin: 3, pedClass: 'N/A',
        source: ['SNMMI'], note: '腸道發炎/骨髓炎首選',
        formula: '成人: 20 mCi (範圍 15-25)\n兒科: 0.3 mCi/kg, Min 3 mCi'
    },
    ga67: {
        name: 'Ga-67 發炎掃描', drug: 'Ga-67 Citrate',
        adultFixed: 5, adultRange: [4, 6], pedPerKg: 0.04, pedMin: 0.5, pedClass: 'N/A',
        source: ['SNMMI'], note: '48/72hr 延遲造影',
        formula: '成人: 5 mCi (範圍 4-6)\n兒科: 0.04 mCi/kg, Min 0.5 mCi'
    },
    bone_scan: {
        name: '骨骼掃描 (Tc-99m MDP)', drug: 'Tc-99m MDP',
        adultFixed: 22.5, adultRange: [20, 25], pedPerKg: 0.3, pedMin: 3, pedClass: 'B',
        source: ['SNMMI', 'EANM'], note: '注射後多喝水',
        formula: '成人: 20-25 mCi\n兒科: 0.3 mCi/kg (EANM Class B), Min 3 mCi'
    },
    scrotal: {
        name: '陰囊掃描 (Tc-99m Pertechnetate)', drug: 'Tc-99m Pertechnetate',
        adultFixed: 15, adultRange: [10, 20], pedPerKg: 0.2, pedMin: 2, pedClass: 'N/A',
        source: ['SNMMI'], note: '急診檢查，睪丸扭轉需盡速判讀',
        formula: '成人: 10-20 mCi\n兒科: 0.2 mCi/kg, Min 2 mCi'
    }
};

// ================================================================
// 📅 CALENDAR DATA
// ================================================================
const SPECIAL_DAYS = [
    { date: '2026-01-01', title: '開國紀念日', type: 'holiday', clinicStatus: 'closed', note: '門診停診，行政休假' },
    { date: '2026-02-15', title: '小年夜', type: 'holiday', clinicStatus: 'normal', note: '適逢週日，於 2/20 補假' },
    { date: '2026-02-16', title: '農曆除夕', type: 'holiday', clinicStatus: 'closed', note: '門診停診，行政休假' },
    { date: '2026-02-17', title: '春節初一', type: 'holiday', clinicStatus: 'closed', note: '門診停診，行政休假' },
    { date: '2026-02-18', title: '春節初二', type: 'holiday', clinicStatus: 'closed', note: '門診停診，行政休假' },
    { date: '2026-02-19', title: '春節初三', type: 'holiday', clinicStatus: 'half', note: '上午開診，行政休假' },
    { date: '2026-02-20', title: '小年夜補假', type: 'makeup', clinicStatus: 'full', note: '門診正常開診，行政休假 (初四)' },
    { date: '2026-02-27', title: '和平紀念日補假', type: 'makeup', clinicStatus: 'full', note: '門診正常開診，行政休假' },
    { date: '2026-02-28', title: '和平紀念日', type: 'holiday', clinicStatus: 'closed', note: '適逢週六，於 2/27 補假' },
    { date: '2026-04-03', title: '兒童節補假', type: 'makeup', clinicStatus: 'full', note: '門診正常開診，行政休假' },
    { date: '2026-04-04', title: '兒童節', type: 'holiday', clinicStatus: 'closed', note: '適逢週六，於 4/3 補假' },
    { date: '2026-04-05', title: '清明節', type: 'holiday', clinicStatus: 'closed', note: '適逢週日，於 4/6 補假' },
    { date: '2026-04-06', title: '清明節補假', type: 'makeup', clinicStatus: 'full', note: '門診正常開診，行政休假' },
    { date: '2026-05-01', title: '勞動節', type: 'holiday', clinicStatus: 'closed', note: '門診停診，行政休假' },
    { date: '2026-06-19', title: '端午節', type: 'holiday', clinicStatus: 'closed', note: '門診停診，行政休假' },
    { date: '2026-09-25', title: '中秋節', type: 'holiday', clinicStatus: 'closed', note: '門診停診，行政休假' },
    { date: '2026-09-28', title: '孔子誕辰', type: 'memorial', clinicStatus: 'normal', note: '紀念日' },
    { date: '2026-10-09', title: '國慶日補假', type: 'makeup', clinicStatus: 'full', note: '門診正常開診，行政休假' },
    { date: '2026-10-10', title: '國慶日', type: 'holiday', clinicStatus: 'closed', note: '適逢週六，於 10/9 補假' },
    { date: '2026-10-25', title: '臺灣光復節', type: 'holiday', clinicStatus: 'closed', note: '適逢週日，於 10/26 補假' },
    { date: '2026-10-26', title: '光復節補假', type: 'makeup', clinicStatus: 'full', note: '門診正常開診，行政休假' },
    { date: '2026-12-25', title: '行憲紀念日', type: 'holiday', clinicStatus: 'full', note: '門診正常開診，行政休假' }
];

const SHIFT_CYCLES = [
    '2025-12-21', '2026-01-18', '2026-02-15', '2026-03-15', '2026-04-12',
    '2026-05-10', '2026-06-07', '2026-07-05', '2026-08-02', '2026-08-30',
    '2026-09-27', '2026-10-25', '2026-11-22', '2026-12-20'
];

// ================================================================
// 🐱 CAT IMAGES
// ================================================================
const CAT_IMAGES = Array.from({ length: 40 }, (_, i) =>
    `assets/cutecat/${(i + 1).toString().padStart(2, '0')}.png`
);
const assignedCatImages = {};
function getCatImage(key) {
    if (!assignedCatImages[key]) {
        assignedCatImages[key] = CAT_IMAGES[Math.floor(Math.random() * CAT_IMAGES.length)];
    }
    return assignedCatImages[key];
}

// ================================================================
// 🎨 RENDERING ENGINE
// ================================================================
const currentState = {
    activeView: null,
    calendarDate: new Date(),
    viewHistory: []
};

const HOME_HUB_CONFIG = {
    quickActions: [
        { view: 'PatientQA', kicker: '衛教', title: '病人溝通與衛教', desc: '說清楚風險、目的與配合事項。', variant: 'warning' },
        { view: 'DosageTable', kicker: '工具', title: '藥物與劑量工具', desc: '快速查藥物、活度與兒科劑量公式。', variant: 'success' },
        { view: 'NMBasics', kicker: '儀器', title: '核醫設備導覽', desc: '查 gamma camera、SPECT/CT、PET/CT 與 QC。', variant: 'info' },
        { view: 'PET', kicker: '高頻檢查', title: 'FDG PET/CT', desc: '空腹、血糖與流程節點先一次看清。', variant: 'warning' },
        { view: 'RadiationSafety', kicker: '安全', title: '輻射防護', desc: '查常用限制、污染處理與治療後注意事項。', variant: 'success' },
        { view: 'DocumentControl', kicker: '品質', title: '文件與品質管理', desc: '查版本、責任、表單與紀錄管理。', variant: 'info' }
    ],
    heroMetrics: [
        { label: '常用入口', value: '高頻任務優先', desc: '先放值班、排檢與衛教最常用的內容。' },
        { label: '快速核對', value: '提醒與工具同屏', desc: '血糖、空腹、治療限制與常用工具集中查。' },
        { label: '工作順序', value: '先做對，再做快', desc: '先分流風險，再處理流程與細節。' }
    ],
    heroChecks: [
        {
            level: 'critical',
            title: '懷孕、哺乳、治療性核醫要先分流',
            desc: '先分清診斷或治療，再回到醫囑與單位規範，不能靠印象回答。'
        },
        {
            level: 'caution',
            title: 'PET 前先問血糖、空腹、胰島素與近期治療',
            desc: '流程只要錯一段，影像就可能失真；這些條件要比原理更早確認。'
        }
    ],
    resourceLinks: [
        {
            href: 'https://i131-ward-scheduler.web.app/',
            kicker: '排程工具',
            title: 'I-131 病房排程',
            desc: '先核對可入院日、住院節奏與病房安排。',
            variant: 'warning'
        },
        {
            href: 'https://nminfo-petarr.web.app/',
            kicker: '智慧排程',
            title: 'PET 智慧排程',
            desc: '把檢查時段、流程條件與安排順序快速拉齊。',
            variant: 'success'
        },
        {
            href: 'https://www.snm.org.tw/',
            kicker: '專業連結',
            title: '台灣核醫學會',
            desc: '回查學會公告、活動與專業資訊。',
            variant: 'info'
        }
    ],
    criticalChecks: [
        {
            level: 'critical',
            title: '懷孕、哺乳、治療性核醫不要靠印象回答',
            desc: '先辨識是否為診斷或治療，再依藥物與醫囑回答；模糊時直接升級回報。'
        },
        {
            level: 'caution',
            title: 'PET 前先核對血糖、空腹、胰島素與近期治療',
            desc: '流程錯一次，結果就可能不可信；這類條件要比背景原理更早確認。'
        },
        {
            level: 'guidance',
            title: '把病人的不確定感轉成 3 句話',
            desc: '先說今天做什麼，再說為什麼要等，最後說做完要注意什麼。'
        }
    ],
    workflow: [
        {
            step: '第一步',
            title: '先辨識風險',
            desc: '懷孕、哺乳、糖尿病、含碘顯影史、無法平躺，以及是否有該檢查特定限制，要先分清楚再說明。'
        },
        {
            step: '第二步',
            title: '再確認流程',
            desc: '讓對方知道打藥後不會立刻拍，等待時間是檢查設計的一部分。'
        },
        {
            step: '第三步',
            title: '最後交代檢後',
            desc: '多喝水、多排尿、是否需要與幼兒保持距離，要講清楚且分診斷與治療。'
        }
    ],
    starterPack: ['NMBasics', 'DocumentControl', 'Radiopharmacy', 'PatientQA']
};

function renderHomeLinkCard(item, className = 'home-link-card') {
    return `
        <button type="button" class="${className}${item.variant ? ` is-${item.variant}` : ''}" data-home-view="${item.view}">
            ${item.kicker ? `<span class="home-card-kicker">${item.kicker}</span>` : ''}
            <strong>${item.title}</strong>
            <span>${item.desc}</span>
        </button>
    `;
}

function renderHomeResourceLink(item) {
    return `
        <a class="home-resource-link${item.variant ? ` is-${item.variant}` : ''}" href="${item.href}" target="_blank" rel="noopener noreferrer">
            ${item.kicker ? `<span class="home-resource-kicker">${item.kicker}</span>` : ''}
            <strong>${item.title}</strong>
            <span>${item.desc}</span>
        </a>
    `;
}

function getHomeLevelLabel(level) {
    const labels = {
        critical: '立即核對',
        caution: '容易漏掉',
        guidance: '溝通提醒'
    };
    return labels[level] || '重點';
}

function getConceptDiagramTone(item) {
    const text = `${item.title || ''} ${item.text || ''}`;
    if (/(禁忌|高風險|危險|事故|錯|不要|不能|超標|懷孕|哺乳)/.test(text)) return 'critical';
    if (/(檢查前|前處理|準備|先問|告知|排檢|空腹|停藥|咖啡因)/.test(text)) return 'warning';
    if (/(檢查後|返家|多喝水|排尿|恢復|完成|可直接)/.test(text)) return 'success';
    if (/(為什麼|原理|核心|重點|看的是|回答)/.test(text)) return 'info';
    return 'neutral';
}

function getConceptDiagramData(key) {
    const guide = getReaderGuideData(key);
    if (!guide) return null;
    if (guide.conceptDiagram) return guide.conceptDiagram;
    return null;
}

function buildConceptDiagramHTML(diagram) {
    if (!diagram || !Array.isArray(diagram.items) || diagram.items.length === 0) return '';

    const type = diagram.type || 'chain';
    const itemsHTML = diagram.items.map((item, index) => `
        <div class="concept-diagram-node is-${item.tone || 'neutral'}">
            <span class="concept-diagram-index">${item.label || String(index + 1).padStart(2, '0')}</span>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
        </div>
    `).join('');

    return `
        <section class="concept-diagram is-${type}" aria-label="${diagram.title || '內容圖解'}">
            <div class="concept-diagram-header">
                <span class="concept-diagram-kicker">${diagram.kicker || '圖解'}</span>
                <h2>${diagram.title || '重點關係'}</h2>
                ${diagram.lead ? `<p>${diagram.lead}</p>` : ''}
            </div>
            <div class="concept-diagram-body">
                ${itemsHTML}
            </div>
            ${diagram.note ? `<p class="concept-diagram-note">${diagram.note}</p>` : ''}
        </section>
    `;
}

function getReaderGuideData(key) {
    return EXAM_READER_GUIDES[key] || null;
}

function getHeroInsightCards(guide, maxCards = 3) {
    if (!guide || !Array.isArray(guide.cards)) return [];
    return guide.cards.slice(0, maxCards);
}

function shouldUseImmersiveReading(key, data) {
    return data && !data.isHomeHub && !data.isDosageCalc && !data.isCalendar;
}

function getReadableBlockTitle(block, index) {
    if (!block) return `第 ${index + 1} 段`;
    if (block.title) return block.title;
    if (typeof block.html === 'string') {
        const headingMatch = block.html.match(/<h[3-5][^>]*>(.*?)<\/h[3-5]>/i);
        if (headingMatch && headingMatch[1]) {
            return headingMatch[1].replace(/<[^>]*>/g, '').trim();
        }
    }
    return index === 0 ? '重點' : `補充說明 ${index + 1}`;
}

function getReadingTocHTML(blocks) {
    return '';
}

function renderContentBlock(block, index) {
    switch (block.type) {
        case 'info-box-blue':
            return `<div id="section-${index + 1}" class="info-box info-box-blue">${block.html}</div>`;
        case 'info-box-emerald':
            return `<div id="section-${index + 1}" class="info-box info-box-emerald">${block.html}</div>`;
        case 'info-box-amber':
            return `<div id="section-${index + 1}" class="info-box info-box-amber">${block.html}</div>`;
        case 'info-box-rose':
            return `<div id="section-${index + 1}" class="info-box info-box-rose">${block.html}</div>`;
        case 'info-box-purple':
            return `<div id="section-${index + 1}" class="info-box info-box-purple">${block.html}</div>`;
        case 'section':
            return `<section id="section-${index + 1}" class="content-section">
                <h3 class="section-heading">${block.title}</h3>
                ${block.html}
            </section>`;
        case 'qa':
            return `<section id="section-${index + 1}" class="qa-section">
                <h3 class="section-heading">常見問題</h3>
                ${block.items.map(item => `
                    <div class="qa-item">
                        <button type="button" class="qa-question" aria-expanded="false" onclick="toggleQA(this)">
                            <span class="qa-question-text">${item.q}</span>
                            <span class="qa-chevron" aria-hidden="true">＋</span>
                        </button>
                        <div class="qa-answer">${item.a}</div>
                    </div>
                `).join('')}
            </section>`;
        default:
            return block.html || '';
    }
}

function renderProgressiveBlockBody(block) {
    switch (block.type) {
        case 'info-box-blue':
        case 'info-box-emerald':
        case 'info-box-amber':
        case 'info-box-rose':
        case 'info-box-purple':
        case 'section':
            return block.html || '';
        default:
            return block.html || '';
    }
}

function renderImmersiveContentBlock(block, index) {
    const html = renderContentBlock(block, index);
    if (index < 1 || block.type === 'qa') return html;

    const title = getReadableBlockTitle(block, index);
    return `
        <details id="section-${index + 1}" class="progressive-section">
            <summary>
                <span>${title}</span>
            </summary>
            <div class="progressive-section-body">
                ${renderProgressiveBlockBody(block)}
            </div>
        </details>
    `;
}

function buildReaderGuideHTML(key, data) {
    const guide = getReaderGuideData(key);
    const heroCards = getHeroInsightCards(guide);
    if (!guide || heroCards.length === 0) return '';

    return `
        <section class="reader-guide">
            <div class="reader-guide-header">
                <h2>${guide.title || '重點'}</h2>
                ${guide.lead ? `<p>${guide.lead}</p>` : ''}
            </div>
            <div class="reader-guide-grid">
                ${heroCards.map((card) => `
                    <div class="reader-guide-card">
                        <h3>${card.title}</h3>
                        <p>${card.text}</p>
                    </div>
                `).join('')}
            </div>
            ${guide.tellUs ? `
                <div class="reader-guide-alert">
                    <strong>請先告訴我們：</strong>
                    <span>${guide.tellUs}</span>
                </div>
            ` : ''}
        </section>
    `;
}

const EXAM_FLOW_CATEGORIES = new Set(['pet', 'endocrine', 'cardiac', 'gi', 'bone-renal', 'neuro']);

const EXAM_INLINE_GUIDE_IMAGES = {
    NMBasics: {
        src: 'assets/guide/nm-basics-guide.png',
        alt: '核醫原理、儀器與技術導覽圖解，說明功能影像、gamma camera、SPECT、PET、QC 與後續小學堂學習順序。'
    },
    DocumentControl: {
        src: 'assets/guide/document-control-guide.png',
        alt: '文件管理圖解，說明品質手冊、程序書、作業規範、表單與紀錄的角色，並提醒外來文件與品質目標也要受控與可追溯。'
    },
    PatientQA: {
        src: 'assets/guide/patient-qa-guide.png',
        alt: '病人衛教圖解，說明核醫溝通順序應先辨識風險，再解釋檢查目的、交代配合事項，最後確認病人真的理解。'
    },
    Radiopharmacy: {
        src: 'assets/guide/radiopharmacy-guide.png',
        alt: '熱核室實務圖解，說明到貨與放行、抽藥與貼標、運送與交接，以及污染偵測與廢棄紀錄等核心流程。'
    },
    RadiationSafety: {
        src: 'assets/guide/radiation-safety-guide.png',
        alt: '輻射防護圖解，說明核醫科日常的開工條件、劑量監測、事故處理、特殊族群保護與紀錄追溯等重點。'
    },
    I131Ward: {
        src: 'assets/guide/i131-ward-guide.png',
        alt: 'I-131 病房圖解，說明住院前準備、給藥、補水與排尿、污染管理，以及出院量測與返家限制的完整流程。'
    },
    EmergencyCart: {
        src: 'assets/guide/emergency-cart-guide.png',
        alt: '急救車管理圖解，說明每日檢查、3 月與 9 月單位自行盤點、6 月與 12 月聯合藥劑科盤點，以及異常通報與重整。'
    },
    Bone: {
        src: 'assets/guide/bone-scan-indications.png',
        alt: 'Bone scan 適應症圖解，說明骨轉移搜尋、不明骨痛或壓力性骨折、骨髓炎或感染評估，以及全身多發骨病灶篩查。'
    },
    Brain: {
        src: 'assets/guide/brain-perfusion-indications.png',
        alt: '腦灌流掃描適應症圖解，說明失智症輔助評估、癲癇病灶定位、腦血管功能或局部腦灌流異常，以及腦死判定或特殊神經個案。'
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
    LungVQ: {
        src: 'assets/guide/lung-vq-indications.png',
        alt: 'Lung V/Q 掃描適應症圖解，說明肺栓塞評估、不能做顯影 CT 的病人、慢性血栓或肺高壓篩查，以及術前肺功能分區評估。'
    },
    Lung: {
        src: 'assets/guide/lung-perfusion-indications.png',
        alt: '肺灌注掃描適應症圖解，說明肺栓塞懷疑、術前肺功能分區、肺血流分布不均，以及無法做其他顯影檢查時的肺灌流評估。'
    },
    CardiacAmyloid: {
        src: 'assets/guide/cardiac-amyloid-indications.png',
        alt: '心臟類澱粉沉積影像適應症圖解，說明厚心室與心衰竭病人、可疑浸潤性心肌病、周邊神經症狀合併心臟問題，以及疑似 ATTR 的非侵入性診斷路徑。'
    },
    Parathyroid: {
        src: 'assets/guide/parathyroid-indications.png',
        alt: '副甲狀腺掃描適應症圖解，說明原發性副甲狀腺機能亢進術前定位、疑似副甲狀腺腺瘤、再手術或解剖複雜個案，以及異位副甲狀腺搜尋。'
    },
    MIBG: {
        src: 'assets/guide/mibg-indications.png',
        alt: 'MIBG 掃描適應症圖解，說明嗜鉻細胞瘤或副神經節瘤、神經母細胞瘤分期、多發或轉移病灶搜尋，以及治療前攝取能力評估。'
    },
    TRODAT: {
        src: 'assets/guide/trodat-indications.png',
        alt: 'TRODAT 適應症圖解，說明巴金森症候群鑑別、原發性巴金森病與本態性顫抖區分、不典型動作症狀，以及臨床診斷輔助。'
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
    Salivary2: {
        src: 'assets/guide/salivary-scan-indications.png',
        alt: '唾液腺掃描適應症圖解，說明 Sjogren syndrome 評估、口乾症狀功能檢查、治療後功能追蹤，以及雙側大唾液腺整體功能比較。'
    },
    Cisternography: {
        src: 'assets/guide/cisternography-indications.png',
        alt: '腦脊髓液池掃描適應症圖解，說明腦脊髓液漏、正常壓力水腦症輔助評估、分流術前後問題，以及特殊腦脊髓液循環障礙。'
    },
    MPI_Tc99m: {
        src: 'assets/guide/mpi-indications.png',
        alt: 'MPI 適應症圖解，說明胸痛或疑似冠心病、活動後症狀、已知冠心病風險分層，以及治療後追蹤。'
    },
    MPI_Tl201: {
        src: 'assets/guide/mpi-tl201-indications.png',
        alt: 'Tl-201 MPI 適應症圖解，說明冠心病缺血評估、心肌存活性評估、血管重建前決策，以及既有冠心病追蹤。'
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
    PET: {
        src: 'assets/guide/fdg-pet-indications.png',
        alt: 'FDG PET/CT 適應症圖解，說明初始分期、治療反應評估、復發或再分期，以及不明原發灶或全身活躍病灶搜尋。'
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
    Ga67: {
        src: 'assets/guide/ga67-indications.png',
        alt: 'Ga-67 掃描適應症圖解，說明慢性感染或發炎、脊椎骨髓炎或深部感染、肺部或縱膈腔慢性發炎問題，以及特定腫瘤或發炎性疾病追蹤。'
    },
    WBCScan: {
        src: 'assets/guide/wbc-scan-indications.png',
        alt: '白血球掃描適應症圖解，說明骨髓炎、發燒找不到原因、術後或植入物相關感染，以及腹部或軟組織深部感染。'
    },
    I131MIBG: {
        src: 'assets/guide/i131-mibg-indications.png',
        alt: 'I-131 MIBG 治療適應症圖解，說明高風險或復發神經母細胞瘤、轉移性嗜鉻細胞瘤或副神經節瘤，以及治療前需確認 MIBG 攝取與骨髓腎功能條件。'
    },
    Sm153: {
        src: 'assets/guide/sm153-indications.png',
        alt: 'Sm-153 骨痛緩解治療適應症圖解，說明多發成骨性骨轉移、疼痛已影響生活品質，以及治療前需確認骨掃描攝取與骨髓儲備。'
    },
    I131: {
        src: 'assets/guide/i131-indications.png',
        alt: 'I-131 治療適應症圖解，說明 Graves disease、toxic nodule 或 multinodular goiter、甲狀腺癌術後殘餘組織消融，以及仍會攝碘的復發或轉移性分化型甲狀腺癌。'
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

const LEARNING_PAGE_PLANS = {
    NMBasics: {
        label: '重點',
        title: '核醫看的是功能，設備與 QC 會影響影像可信度。',
        desc: '先理解功能影像、常見設備與 QC，後面讀各種檢查會比較容易。',
        steps: ['功能影像在看什麼', '常見設備與技術差異', 'QC 怎麼影響影像']
    },
    DocumentControl: {
        label: '重點',
        title: '文件要分清種類、版本、責任與紀錄。',
        desc: '先懂品質手冊、程序書、作業規範、表單與紀錄各自在做什麼，後面才不容易混亂。',
        steps: ['文件分階', '外來文件與修訂控制', '紀錄保存與追溯']
    },
    Radiopharmacy: {
        label: '重點',
        title: '熱核室要把到貨、分裝、放行與污染控制做清楚。',
        desc: '熱核室工作重點在順序與紀錄。主要流程清楚，細節才不會漏。',
        steps: ['到貨與驗收', '分裝、貼標與放行', '污染偵測、料帳與廢棄處理']
    },
    PatientQA: {
        label: '重點',
        title: '病人需要知道風險、目的與配合事項。',
        desc: '病人通常先需要知道要注意什麼、為什麼要做、以及今天要怎麼配合。',
        steps: ['高風險與禁忌', '檢查目的', '當天流程與檢後提醒']
    },
    RadiationSafety: {
        label: '重點',
        title: '輻射防護要能落到日常工作。',
        desc: '把法規、劑量、污染處理與治療後限制放在實際工作情境中看。',
        steps: ['常見法規場景', '常用數字與門檻', 'ALARA 的日常做法']
    },
    I131Ward: {
        label: '重點',
        title: 'I-131 病房要一起看準備、污染控制與出院安排。',
        desc: 'I-131 病房需要一起看住院前準備、住院期間污染控制與出院安排。',
        steps: ['入院條件', '住院污染與照護', '出院與返家限制']
    },
    DosageTable: {
        label: '重點',
        title: '劑量表要和藥物、情境與醫囑一起看。',
        desc: '先把藥物、成人或兒科情境與 protocol 對上，再用表格或計算器核對。',
        steps: ['檢查與藥物', '成人或兒科', '表格與計算器核對']
    },
    DosageCalc: {
        label: '重點',
        title: '計算器只做核對，不能取代醫囑與科內規範。',
        desc: '計算器是核對工具，結果仍要再對照公式、protocol 與醫囑。',
        steps: ['選檢查項目', '兒科輸入體重', '回頭核對公式與醫囑']
    },
    Calendar: {
        label: '使用方式',
        title: '先定位日期，再看門診狀態與排程影響。',
        desc: '排程頁的價值在降低不確定感，所以介面要先幫你回答今天能不能排、會不會撞節日。',
        steps: ['先找日期與月份', '再看停診、補班或行政休假', '最後再回到病人通知與排藥安排']
    },
    default: {
        label: '重點',
        title: '先確認目的，再看流程、限制與注意事項。',
        desc: '頁面會先放最常用的判斷，再接細節與補充資料。',
        steps: ['目的', '流程與限制', '注意事項']
    }
};

const LEARNING_NEXT_STEP_VIEWS = {
    NMBasics: ['DocumentControl', 'Radiopharmacy', 'RadiationSafety'],
    DocumentControl: ['Radiopharmacy', 'PatientQA', 'RadiationSafety'],
    Radiopharmacy: ['DocumentControl', 'RadiationSafety', 'DosageTable'],
    PatientQA: ['NMBasics', 'RadiationSafety', 'DosageTable'],
    RadiationSafety: ['I131Ward', 'DocumentControl', 'PatientQA'],
    I131Ward: ['RadiationSafety', 'PatientQA', 'DosageTable'],
    DosageTable: ['PatientQA', 'Radiopharmacy', 'NMBasics'],
    DosageCalc: ['DosageTable', 'PatientQA', 'NMBasics'],
    default: ['NMBasics', 'DocumentControl', 'Radiopharmacy']
};

const EXAM_FLOW_SUPPORT_VIEWS = {
    pet: ['PatientQA', 'RadiationSafety', 'NMBasics'],
    endocrine: ['PatientQA', 'RadiationSafety', 'DosageTable'],
    cardiac: ['PatientQA', 'NMBasics', 'RadiationSafety'],
    gi: ['PatientQA', 'DocumentControl', 'RadiationSafety'],
    'bone-renal': ['PatientQA', 'DosageTable', 'RadiationSafety'],
    neuro: ['PatientQA', 'NMBasics', 'RadiationSafety'],
    default: ['PatientQA', 'RadiationSafety', 'NMBasics']
};

function getCombinedContentBlocks(key, data, includeLatestPatientEdu = true) {
    return [
        ...(data.content || []),
        ...(EXAM_TEACHING_SUPPLEMENTS[key] || []),
        ...(includeLatestPatientEdu ? (LATEST_PATIENT_EDU_SUPPLEMENTS[key] || []) : [])
    ];
}

function buildGalleryHTML(data) {
    if (!data.isGallery || !data.gallery) return '';
    return `<div class="guide-gallery">${data.gallery.map((img) => `
        <div class="guide-step-card">
            <img src="${img.src}" alt="${img.desc}" loading="lazy">
            <div class="guide-step-desc">${img.desc}</div>
        </div>
    `).join('')}</div>`;
}

function buildSpecialContentHTML(key, data) {
    if (key === 'Calendar') return getCalendarHTML();
    if (key === 'DosageCalc') return getDosageCalcHTML();
    if (key === 'DosageTable') return getDosageCalcHTML();
    if (data.isI131Calc) return getI131CalcHTML();
    return '';
}

function renderGuideNavCard(item, className = 'guide-nav-card') {
    return `
        <button type="button" class="${className}" data-guide-view="${item.view}">
            ${item.kicker ? `<span class="guide-nav-kicker">${item.kicker}</span>` : ''}
            <strong>${item.title}</strong>
            <span>${item.desc}</span>
        </button>
    `;
}

function getGuideNavItems(views, kicker = '接著讀') {
    return (views || [])
        .map((view) => {
            const item = EXAM_DATA[view];
            if (!item) return null;
            return {
                view,
                kicker,
                title: item.title,
                desc: item.subtitle || '從這裡接續往下讀。'
            };
        })
        .filter(Boolean);
}

function getLearningPagePlan(key) {
    return LEARNING_PAGE_PLANS[key] || LEARNING_PAGE_PLANS.default;
}

function getLearningNextSteps(key) {
    return getGuideNavItems(LEARNING_NEXT_STEP_VIEWS[key] || LEARNING_NEXT_STEP_VIEWS.default);
}

function getInlineGuideImageHTML(key) {
    const image = EXAM_INLINE_GUIDE_IMAGES[key];
    if (!image) return '';

    return `
        <figure class="inline-guide-figure">
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
        </figure>
    `;
}

function getExamFlowSupportLinks(category) {
    return getGuideNavItems(EXAM_FLOW_SUPPORT_VIEWS[category] || EXAM_FLOW_SUPPORT_VIEWS.default, '延伸閱讀');
}

function getExamFlowToneLabel(type) {
    const labels = {
        'info-box-blue': '先理解',
        'info-box-emerald': '可以照做',
        'info-box-amber': '容易卡住',
        'info-box-rose': '高風險',
        'info-box-purple': '補充提醒'
    };
    return labels[type] || '重點';
}

function classifyExamFlowSections(blocks) {
    const prepPattern = /(排檢|行政|注意事項|檢前|門診|藥物|阻斷|排程|前置|先確認|先問|收貨|驗收|管理|盤點|說明)/;
    const patientPattern = /(病人衛教|最常問|衛教|返家|檢後|家屬|電話|溝通)/;
    const prepSections = [];
    const patientSections = [];
    const clinicalSections = [];

    blocks.forEach((block) => {
        const title = block.title || '';
        if (patientPattern.test(title)) {
            patientSections.push(block);
        } else if (prepPattern.test(title)) {
            prepSections.push(block);
        } else {
            clinicalSections.push(block);
        }
    });

    if (patientSections.length === 0 && prepSections.length > 2) {
        patientSections.push(prepSections.pop());
    }

    return { prepSections, patientSections, clinicalSections };
}

function buildExamFlowHTML(key, data) {
    const guide = getReaderGuideData(key) || {};
    const heroCards = getHeroInsightCards(guide);
    const conceptDiagramHTML = buildConceptDiagramHTML(getConceptDiagramData(key));
    const baseBlocks = [
        ...(data.content || []),
        ...(EXAM_TEACHING_SUPPLEMENTS[key] || [])
    ];
    const patientEduBlocks = LATEST_PATIENT_EDU_SUPPLEMENTS[key] || [];
    const callouts = baseBlocks.filter((block) => block.type && block.type.startsWith('info-box'));
    const sections = baseBlocks.filter((block) => block.type === 'section');
    const { prepSections, patientSections, clinicalSections } = classifyExamFlowSections(sections);
    const patientBlocks = [...patientSections, ...patientEduBlocks];
    const supportLinks = getExamFlowSupportLinks(data.category);

    return `
        <article class="exam-article exam-flow-page is-immersive-reading">
            <section class="exam-flow-hero">
                <div class="exam-flow-hero-grid">
                    <div class="exam-flow-copy">
                        <span class="exam-flow-eyebrow">${guide.eyebrow || '檢查流程頁'}</span>
                        <h1>${guide.title || data.title}</h1>
                        <p class="exam-flow-lead">${guide.lead || data.subtitle || ''}</p>
                        ${heroCards.length > 0 ? `
                            <div class="exam-flow-insight-grid">
                                ${heroCards.map((card) => `
                                    <div class="exam-flow-insight-card">
                                        <h3>${card.title}</h3>
                                        <p>${card.text}</p>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <aside class="exam-flow-panel">
                        ${data.timeArchitecture?.steps ? `
                            <div class="exam-flow-panel-block">
                                <span class="exam-flow-panel-kicker">流程</span>
                                <div class="exam-flow-timeline">
                                    ${data.timeArchitecture.steps.map((step) => `
                                        <div class="exam-flow-timeline-step">
                                            <span>${step.label}</span>
                                            <strong>${step.value}</strong>
                                        </div>
                                    `).join('')}
                                </div>
                                ${data.timeArchitecture.note ? `<p class="exam-flow-note">${data.timeArchitecture.note}</p>` : ''}
                            </div>
                        ` : ''}
                        ${guide.tellUs ? `
                            <div class="exam-flow-panel-block">
                                <span class="exam-flow-panel-kicker">排檢前先告知</span>
                                <div class="exam-flow-alert">
                                    <strong>這些條件不要等到現場才說</strong>
                                    <p>${guide.tellUs}</p>
                                </div>
                            </div>
                        ` : ''}
                        ${supportLinks.length > 0 ? `
                            <div class="exam-flow-panel-block">
                                <span class="exam-flow-panel-kicker">如果你正在排檢</span>
                                <div class="guide-nav-grid is-compact">
                                    ${supportLinks.map((item) => renderGuideNavCard(item)).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </aside>
                </div>
            </section>

            ${conceptDiagramHTML}

            ${(callouts.length > 0 || prepSections.length > 0) ? `
                <section class="exam-flow-section">
                    <div class="exam-flow-section-heading">
                        <div>
                            <h2>排檢前先抓住，讓錯誤不要跑到後面</h2>
                            <p>先把前提、禁忌、行政條件與容易漏掉的點放前面，能直接降低病人焦慮與現場返工。</p>
                        </div>
                    </div>
                    <div class="exam-flow-section-grid">
                        ${callouts.map((block) => `
                            <div class="exam-flow-callout-card is-${getTherapyToneFromBlock(block.type)}">
                                <span class="exam-flow-callout-label">${getExamFlowToneLabel(block.type)}</span>
                                ${block.html}
                            </div>
                        `).join('')}
                        ${prepSections.map((block) => `
                            <div class="exam-flow-section-card">
                                <h3>${block.title}</h3>
                                ${block.html}
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            ${clinicalSections.length > 0 ? `
                <section class="exam-flow-section">
                    <div class="exam-flow-section-heading">
                        <div>
                            <h2>理解原理、適應症與判讀線索</h2>
                            <p>等讀者先有順序感，再把臨床判斷與判讀重點放進來，記憶負擔會比較低，也更容易願意往下讀。</p>
                        </div>
                    </div>
                    <div class="exam-flow-section-grid">
                        ${clinicalSections.map((block) => `
                            <div class="exam-flow-section-card">
                                <h3>${block.title}</h3>
                                ${block.html}
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            ${(patientBlocks.length > 0 || guide.evidence) ? `
                <section class="exam-flow-section">
                    <div class="exam-flow-section-heading">
                        <div>
                            <h2>把病人的不確定感，翻成清楚的配合事項</h2>
                            <p>這一區刻意放在後段，讓讀者已經知道自己在做什麼之後，再把對病人的說法與檢後提醒接上。</p>
                        </div>
                    </div>
                    <div class="exam-flow-section-grid">
                        ${patientBlocks.map((block) => `
                            <div class="exam-flow-section-card is-patient">
                                <h3>${block.title}</h3>
                                ${block.html}
                            </div>
                        `).join('')}
                    </div>
                    ${guide.evidence ? `<p class="exam-flow-source">${guide.evidence}</p>` : ''}
                </section>
            ` : ''}
        </article>
    `;
}

function buildLearningGuideHTML(key, data) {
    const guide = getReaderGuideData(key) || {};
    const heroCards = getHeroInsightCards(guide);
    const conceptDiagramHTML = buildConceptDiagramHTML(getConceptDiagramData(key));
    const blocks = getCombinedContentBlocks(key, data, false);
    const callouts = blocks.filter((block) => block.type && block.type.startsWith('info-box'));
    const sections = blocks.filter((block) => block.type === 'section');
    const qaBlocks = blocks.filter((block) => block.type === 'qa');
    const plan = getLearningPagePlan(key);
    const nextSteps = getLearningNextSteps(key);
    const specialHTML = buildSpecialContentHTML(key, data);

    return `
        <article class="exam-article learning-guide-page is-immersive-reading">
            <section class="learning-hero">
                <div class="learning-hero-grid">
                    <div class="learning-hero-copy">
                        <span class="learning-eyebrow">${guide.eyebrow || ''}</span>
                        <h1>${guide.title || data.title}</h1>
                        <p class="learning-hero-lead">${guide.lead || data.subtitle || ''}</p>
                        ${heroCards.length > 0 ? `
                            <div class="learning-focus-grid">
                                ${heroCards.map((card) => `
                                    <div class="learning-focus-card">
                                        <h3>${card.title}</h3>
                                        <p>${card.text}</p>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <aside class="learning-hero-panel">
                        <div class="learning-panel-block">
                            <h2>${plan.title}</h2>
                            <p>${plan.desc}</p>
                            <ol class="learning-route-list">
                                ${plan.steps.map((step) => `<li>${step}</li>`).join('')}
                            </ol>
                        </div>
                        ${nextSteps.length > 0 ? `
                            <div class="learning-panel-block">
                                <span class="learning-panel-kicker">相關內容</span>
                                <div class="guide-nav-grid">
                                    ${nextSteps.map((item) => renderGuideNavCard(item)).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </aside>
                </div>
            </section>

            ${conceptDiagramHTML}

            ${callouts.length > 0 ? `
                <section class="learning-section">
                    <div class="learning-section-heading">
                        <div>
                            <h2>重點提醒</h2>
                            <p>先看容易出錯或需要先判斷的內容。</p>
                        </div>
                    </div>
                    <div class="learning-callout-grid">
                        ${callouts.map((block) => `
                            <div class="learning-callout-card is-${getTherapyToneFromBlock(block.type)}">
                                ${block.html}
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            ${specialHTML ? `
                <section class="learning-section">
                    <div class="learning-section-heading">
                        <div>
                            <h2>工具</h2>
                            <p>需要計算或核對時，先在這裡處理。</p>
                        </div>
                    </div>
                    <div class="learning-special-surface">
                        ${specialHTML}
                    </div>
                </section>
            ` : ''}

            ${sections.length > 0 ? `
                <section class="learning-section">
                    <div class="learning-section-heading">
                        <div>
                            <h2>詳細內容</h2>
                            <p>依主題分段閱讀，需要更多資料時再打開補充內容。</p>
                        </div>
                    </div>
                    <div class="learning-module-grid">
                        ${sections.map((block) => `
                            <div class="learning-module-card">
                                <h3>${block.title}</h3>
                                ${block.html}
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            ${qaBlocks.map((block) => `
                <section class="learning-section">
                    <div class="learning-section-heading">
                        <div>
                            <h2>常見問題</h2>
                            <p>把容易問錯或容易漏講的內容集中放在這裡。</p>
                        </div>
                    </div>
                    <div class="qa-section">
                        ${block.items.map((item) => `
                            <div class="qa-item">
                                <button type="button" class="qa-question" aria-expanded="false" onclick="toggleQA(this)">
                                    <span class="qa-question-text">${item.q}</span>
                                    <span class="qa-chevron" aria-hidden="true">＋</span>
                                </button>
                                <div class="qa-answer">${item.a}</div>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `).join('')}

            ${buildGalleryHTML(data)}
        </article>
    `;
}

function buildHomeHubHTML() {
    return `
        <article class="home-hub">
            <section class="home-hero">
                <div class="home-hero-copy">
                    <span class="home-eyebrow">首頁總覽</span>
                    <p class="home-hero-kicker">作者：Chun-Yin Huang</p>
                    <h1>這個網站整理了核醫科日常工作裡最常反覆查閱的內容。</h1>
                    <div class="prose">
                        <p>這個網站最初的目的，不是做成一個花俏的展示頁，而是把科內真正會用到、也真的會忘記的資訊整理在一起。排檢、收像、後處理、衛教、治療安全、劑量換算，這些事情平常都夾在忙碌的工作裡，很少有人有空從頭翻 guideline，所以才需要一個能夠隨手打開、很快找到重點的地方。</p>
                        <p>如果你是第一次使用，建議先把左側分類看過一輪。現在大致分成幾個區塊：PET、心臟、內分泌、骨骼與腎泌尿、胃腸肝膽、神經與肺部感染，另外還有核醫小學堂與治療單元。每個檢查頁會放適應症、時間架構、判讀重點，也會逐步補上給放射師與核醫醫師使用的技術 protocol 摘要，方便在上機前或判讀前快速核對。</p>
                        <p>站內另外有幾個比較偏工作支援的頁面。像「病人溝通與衛教」適合櫃台、電話通知或檢查前說明時使用；「藥物與劑量工具」整理了常用放射藥物、成人與兒科劑量；「輻射防護與治療安全」則比較適合碰到治療型核醫、返家限制、污染處理或特殊情境時回來查。這些內容不一定每天都要用到，但真正需要的時候，通常都很急，所以我把它們也放進同一個網站裡。</p>
                        <p>另外，平常會用到的工具與外部連結，我也直接放在這裡，避免還要多切一次單元。下面這些都可以直接點開：</p>
                        <div class="home-link-card-grid">
                            <a class="home-link-card" href="patient-education/" target="_blank" rel="noopener noreferrer">
                                <strong>民眾版核醫衛教</strong>
                                <span>提供病人與家屬閱讀的簡化說明，適合在衛教或電話溝通時直接分享。</span>
                            </a>
                            <a class="home-link-card" href="https://gen-lang-client-0435635260.web.app/" target="_blank" rel="noopener noreferrer">
                                <strong>AI 文字辨識</strong>
                                <span>協助把圖片或文件中的文字快速抓出來，適合整理資料時搭配使用。</span>
                            </a>
                            <a class="home-link-card" href="https://i131-ward-scheduler.web.app/" target="_blank" rel="noopener noreferrer">
                                <strong>I-131 病房排程</strong>
                                <span>用來確認住院日期、病房安排與治療節奏，避免排程來回重算。</span>
                            </a>
                            <a class="home-link-card" href="https://nminfo-examp.web.app/" target="_blank" rel="noopener noreferrer">
                                <strong>核醫排檢 DEMO</strong>
                                <span>適合做流程展示，或拿來快速說明排檢邏輯。</span>
                            </a>
                            <a class="home-link-card" href="https://nminfo-petarr.web.app/" target="_blank" rel="noopener noreferrer">
                                <strong>PET 智慧排程</strong>
                                <span>整理 PET 檢查安排時常見的時間與流程條件，適合排程前先核對。</span>
                            </a>
                            <a class="home-link-card" href="https://www.snm.org.tw/" target="_blank" rel="noopener noreferrer">
                                <strong>台灣核醫學會</strong>
                                <span>回查學會公告、研討會與正式專業消息時最直接的入口。</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    `;
}

function buildI131TreatmentHTML(data) {
    const guide = getReaderGuideData('I131');
    const heroCards = getHeroInsightCards(guide);
    const conceptDiagramHTML = buildConceptDiagramHTML(getConceptDiagramData('I131'));
    const inlineGuideImageHTML = getInlineGuideImageHTML('I131');

    return `
        <article class="exam-article i131-therapy-page is-immersive-reading">
            <section class="i131-hero">
                <div class="i131-hero-copy">
                    <span class="i131-eyebrow">${guide?.eyebrow || 'I-131 不是只把藥喝下去而已'}</span>
                    <h1>${guide?.title || data.title}</h1>
                    <p class="i131-hero-lead">${guide?.lead || data.subtitle}</p>
                    ${heroCards.length > 0 ? `<div class="i131-insight-grid">
                        ${heroCards.map((card) => `
                            <div class="i131-insight-card">
                                <h3>${card.title}</h3>
                                <p>${card.text}</p>
                            </div>
                        `).join('')}
                    </div>` : ''}
                    ${inlineGuideImageHTML}
                </div>
                <div class="i131-hero-grid is-panel-only">
                    <aside class="i131-hero-panel">
                        <div class="i131-panel-block">
                            <span class="i131-panel-kicker">風險提醒</span>
                            <div class="i131-alert-stack">
                                ${data.safetyAlerts.slice(0, 2).map((item) => `
                                    <div class="i131-alert-card is-${item.level}">
                                        <span class="i131-alert-label">${getHomeLevelLabel(item.level)}</span>
                                        <strong>${item.title}</strong>
                                        <p>${item.desc}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="i131-panel-block">
                            <span class="i131-panel-kicker">排程與病房限制</span>
                            <div class="i131-rule-list">
                                ${data.operationalRules.map((item) => `
                                    <div class="i131-rule-item">
                                        <span>${item.label}</span>
                                        <strong>${item.value}</strong>
                                        <p>${item.note}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            ${conceptDiagramHTML}

            <section class="i131-section">
                <div class="i131-section-heading">
                    <div>
                        <h2>I-131 治療目的</h2>
                        <p>先分清楚是甲亢、殘餘組織消融，還是復發或轉移治療。</p>
                    </div>
                </div>
                <div class="i131-goal-grid">
                    ${data.treatmentGoals.map((item) => `
                        <div class="i131-goal-card">
                            <span class="i131-card-kicker">${item.kicker}</span>
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="i131-section">
                <div class="i131-section-heading">
                    <div>
                        <h2>治療前要確認的事</h2>
                        <p>確認適應症、停藥與低碘準備、病房與返家限制。</p>
                    </div>
                </div>
                <div class="i131-decision-grid">
                    ${data.decisionCards.map((item) => `
                        <div class="i131-decision-card is-${item.variant}">
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="i131-section">
                <div class="i131-section-heading">
                    <div>
                        <h2>病人會經過哪些步驟</h2>
                        <p>把治療前、住院中、出院後的注意事項連在一起看。</p>
                    </div>
                </div>
                <div class="i131-journey-grid">
                    ${data.journeyStages.map((stage) => `
                        <div class="i131-journey-card">
                            <span class="i131-card-kicker">${stage.phase}</span>
                            <h3>${stage.title}</h3>
                            <ul>
                                ${stage.items.map((item) => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="i131-section">
                <div class="i131-section-heading">
                    <div>
                        <h2>病安提醒與工作核對</h2>
                        <p>把值班與排程時最容易漏掉的內容集中核對。</p>
                    </div>
                </div>
                <div class="i131-bottom-grid">
                    <div class="i131-bottom-column">
                        <div class="i131-safety-stack">
                            ${data.safetyAlerts.map((item) => `
                                <div class="i131-alert-card is-${item.level}">
                                    <span class="i131-alert-label">${getHomeLevelLabel(item.level)}</span>
                                    <strong>${item.title}</strong>
                                    <p>${item.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="i131-bottom-column">
                        <div class="i131-checklist-card">
                            <span class="i131-panel-kicker">工作人員最怕漏掉</span>
                            <ul class="checklist">
                                ${data.staffChecklist.map((item) => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        ${getI131CalcHTML()}
                    </div>
                </div>
            </section>
        </article>
    `;
}

function getTherapyPageBlocks(key, data) {
    return [
        ...(data.content || []),
        ...(EXAM_TEACHING_SUPPLEMENTS[key] || [])
    ];
}

function getTherapyToneFromBlock(type) {
    const tones = {
        'info-box-blue': 'info',
        'info-box-emerald': 'success',
        'info-box-amber': 'warning',
        'info-box-rose': 'critical',
        'info-box-purple': 'neutral'
    };
    return tones[type] || 'neutral';
}

function getTherapySectionCardClass(block) {
    if (!block) return 'therapy-section-card';
    const isFigureFocus = typeof block.html === 'string' && block.html.includes('therapy-figure-grid');
    return `therapy-section-card${isFigureFocus ? ' is-figure-focus' : ''}`;
}

function buildTherapySafetyHTML(key, data) {
    const guide = getReaderGuideData(key);
    const heroCards = getHeroInsightCards(guide);
    const conceptDiagramHTML = buildConceptDiagramHTML(getConceptDiagramData(key));
    const inlineGuideImageHTML = getInlineGuideImageHTML(key);
    const blocks = getTherapyPageBlocks(key, data);
    const callouts = blocks.filter((block) => block.type && block.type.startsWith('info-box'));
    const sections = blocks.filter((block) => block.type === 'section');
    const featuredCallouts = callouts.slice(0, 2);
    const remainingCallouts = callouts.slice(2);

    return `
        <article class="exam-article i131-therapy-page therapy-page is-immersive-reading">
            <section class="i131-hero">
                <div class="i131-hero-copy">
                    <span class="i131-eyebrow">${guide?.eyebrow || data.title}</span>
                    <h1>${guide?.title || data.title}</h1>
                    <p class="i131-hero-lead">${guide?.lead || data.subtitle || ''}</p>
                    ${heroCards.length > 0 ? `<div class="i131-insight-grid">
                        ${heroCards.map((card) => `
                            <div class="i131-insight-card">
                                <h3>${card.title}</h3>
                                <p>${card.text}</p>
                            </div>
                        `).join('')}
                    </div>` : ''}
                    ${inlineGuideImageHTML}
                </div>
                <div class="i131-hero-grid is-panel-only">
                    <aside class="i131-hero-panel">
                        ${data.timeArchitecture?.steps ? `
                            <div class="i131-panel-block">
                                <span class="i131-panel-kicker">治療節奏</span>
                                <div class="therapy-timeline">
                                    ${data.timeArchitecture.steps.map((step) => `
                                        <div class="therapy-timeline-step">
                                            <span>${step.label}</span>
                                            <strong>${step.value}</strong>
                                        </div>
                                    `).join('')}
                                </div>
                                ${data.timeArchitecture.note ? `<p class="therapy-note">${data.timeArchitecture.note}</p>` : ''}
                            </div>
                        ` : ''}
                        ${featuredCallouts.length > 0 ? `
                            <div class="i131-panel-block">
                                <span class="i131-panel-kicker">重點提醒</span>
                                <div class="i131-alert-stack">
                                    ${featuredCallouts.map((block) => `
                                        <div class="i131-alert-card is-${getTherapyToneFromBlock(block.type)}">
                                            ${block.html}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </aside>
                </div>
            </section>

            ${conceptDiagramHTML}

            ${remainingCallouts.length > 0 ? `
                <section class="i131-section">
                    <div class="i131-section-heading">
                        <div>
                            <h2>治療前評估</h2>
                            <p>確認適應症、禁忌、風險與病人能不能配合流程。</p>
                        </div>
                    </div>
                    <div class="therapy-info-grid">
                        ${remainingCallouts.map((block) => `
                            <div class="therapy-rich-card is-${getTherapyToneFromBlock(block.type)}">
                                ${block.html}
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            ${sections.length > 0 ? `
                <section class="i131-section">
                    <div class="i131-section-heading">
                        <div>
                            <h2>流程、照護與衛教</h2>
                            <p>整理治療流程、病房管理、返家限制與跨科合作。</p>
                        </div>
                    </div>
                    <div class="therapy-section-grid">
                        ${sections.map((block) => `
                            <div class="${getTherapySectionCardClass(block)}">
                                <h3>${block.title}</h3>
                                ${block.html}
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}
        </article>
    `;
}

function attachHomeHubListeners() {
    document.querySelectorAll('[data-home-view]').forEach((button) => {
        button.addEventListener('click', () => {
            const targetView = button.dataset.homeView;
            if (!targetView) return;

            navigateToView(targetView);
        });
    });
}

function attachGuideNavListeners() {
    document.querySelectorAll('[data-guide-view]').forEach((button) => {
        button.addEventListener('click', () => {
            const targetView = button.dataset.guideView;
            if (!targetView) return;

            navigateToView(targetView);
        });
    });
}

function getProtocolData(key) {
    return window.NMINFO_PROTOCOL_DATA?.[key] || null;
}

function renderProtocolRows(rows) {
    if (!Array.isArray(rows) || rows.length === 0) return '';

    return rows.map(([label, value]) => `
        <tr>
            <th scope="row">${label}</th>
            <td>${value}</td>
        </tr>
    `).join('');
}

function renderProtocolList(items) {
    if (!Array.isArray(items) || items.length === 0) return '';
    return `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderProtocolSectionBody(items) {
    if (!Array.isArray(items) || items.length === 0) return '<p>這一段摘要仍在整理中。</p>';

    const firstItem = items[0];
    if (Array.isArray(firstItem)) {
        return `
            <div class="protocol-table-wrap">
                <table class="protocol-table">
                    <tbody>${renderProtocolRows(items)}</tbody>
                </table>
            </div>
        `;
    }

    return renderProtocolList(items);
}

function buildProtocolSummaryHTML(key) {
    const protocol = getProtocolData(key);
    if (!protocol) return '';

    const sections = [
        {
            title: '收像參數基線',
            body: renderProtocolSectionBody(protocol.acquisition)
        },
        {
            title: '影像處理',
            body: renderProtocolSectionBody(protocol.processing)
        },
        {
            title: 'QC 檢查清單',
            body: renderProtocolSectionBody(protocol.qc)
        },
        {
            title: '常見假影與陷阱',
            body: renderProtocolSectionBody(protocol.pitfalls)
        },
        {
            title: '科內落地時最該固定',
            body: renderProtocolSectionBody(protocol.localFixedFields)
        }
    ];

    return `
        <section class="protocol-summary-section" aria-labelledby="protocol-summary-title">
            <div class="protocol-summary-heading">
                <span class="protocol-summary-kicker">技術 Protocol 摘要</span>
                <div>
                    <h2 id="protocol-summary-title">${protocol.title}</h2>
                    <p>給放射師與核醫醫師快速核對收像、後處理、QC 與常見陷阱。這裡是研究底稿轉成網站的第一層摘要，仍需對照科內機型與正式 SOP。</p>
                    ${protocol.note ? `<p class="protocol-summary-note">${protocol.note}</p>` : ''}
                </div>
            </div>
            <div class="protocol-summary-stack">
                ${sections.map((section, index) => `
                    <details class="protocol-summary-details progressive-section"${index === 0 ? ' open' : ''}>
                        <summary>
                            <span>${section.title}</span>
                        </summary>
                        <div class="protocol-summary-body">
                            ${section.body}
                        </div>
                    </details>
                `).join('')}
            </div>
            ${protocol.source ? `<p class="protocol-summary-source">主要來源：${protocol.source}</p>` : ''}
        </section>
    `;
}

function buildContentHTML(key, data) {
    if (!data) return '<div class="empty-state"><h3>⚠️ 找不到資料</h3></div>';

    // Handle redirect
    if (data.redirect) {
        const redirectData = EXAM_DATA[data.redirect];
        if (redirectData) {
            data = {
                ...redirectData,
                title: data.title || redirectData.title,
                subtitle: data.subtitle || redirectData.subtitle,
                category: data.category || redirectData.category,
                redirect: null
            };
        }
    }

    if (data.isHomeHub) {
        return buildHomeHubHTML();
    }

    if (key === 'I131') {
        return buildI131TreatmentHTML(data);
    }

    if (data.category === 'therapy') {
        return buildTherapySafetyHTML(key, data);
    }

    let imgHTML = getInlineGuideImageHTML(key);
    const shouldShowReaderGuide = !data.isDosageCalc && !data.isCalendar;
    const readerGuideHTML = shouldShowReaderGuide ? buildReaderGuideHTML(key, data) : '';
    const conceptDiagramHTML = shouldShowReaderGuide ? buildConceptDiagramHTML(getConceptDiagramData(key)) : '';

    // Header
    let headerHTML = `
        <header class="article-intro">
            ${imgHTML}
            <h1 class="content-title">${data.title}</h1>
            ${data.subtitle ? `<p class="content-subtitle">${data.subtitle}</p>` : ''}
        </header>
    `;

    // Time Architecture
    let timeHTML = '';
    if (data.timeArchitecture && data.timeArchitecture.steps) {
        const stepsHTML = data.timeArchitecture.steps.map((s, i) => `
            <div class="flow-step">
                <div class="flow-step-label">${s.label}</div>
                <div class="flow-step-value">${s.value}</div>
            </div>
            ${i < data.timeArchitecture.steps.length - 1 ? '<div class="flow-arrow">→</div>' : ''}
        `).join('');

        timeHTML = `
            <div class="flow-timeline-wrapper">
                <div class="flow-timeline-title">檢查流程</div>
                <div class="flow-timeline">${stepsHTML}</div>
                ${data.timeArchitecture.note ? `<div class="flow-note">${data.timeArchitecture.note}</div>` : ''}
            </div>
        `;
    }

    const galleryHTML = buildGalleryHTML(data);
    const specialHTML = buildSpecialContentHTML(key, data);
    const protocolSummaryHTML = buildProtocolSummaryHTML(key);
    const useImmersiveReading = shouldUseImmersiveReading(key, data);

    // Content blocks
    const allContentBlocks = getCombinedContentBlocks(key, data);

    let blocksHTML = '';
    if (allContentBlocks.length > 0) {
        const renderedBlocks = allContentBlocks
            .map((block, index) => useImmersiveReading
                ? renderImmersiveContentBlock(block, index)
                : renderContentBlock(block, index))
            .join('');

        blocksHTML = useImmersiveReading
            ? `<div class="immersive-reading-shell">
                <div class="immersive-reading-body">${renderedBlocks}</div>
            </div>`
            : renderedBlocks;
    }

    return `
        <article class="exam-article${useImmersiveReading ? ' is-immersive-reading' : ''}">
            ${headerHTML}
            ${readerGuideHTML}
            ${conceptDiagramHTML}
            ${timeHTML}
            ${protocolSummaryHTML}
            ${specialHTML}
            ${blocksHTML}
            ${galleryHTML}
        </article>
    `;
}

function renderView(viewName) {
    const container = document.getElementById('content-display');
    const data = EXAM_DATA[viewName];

    if (!container || !data) return;
    container.setAttribute('aria-busy', 'true');
    container.style.opacity = '0';
    container.style.transform = 'translateY(4px)';

    setTimeout(() => {
        container.innerHTML = buildContentHTML(viewName, data);
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        container.setAttribute('aria-busy', 'false');

        // Attach special listeners
        if (viewName === 'HomeHub') attachHomeHubListeners();
        attachGuideNavListeners();
        if (viewName === 'Calendar') initCalendar();
        if (viewName === 'DosageCalc') attachDosageCalcListeners();
        if (data && data.isI131Calc) attachI131Listeners();

        jumpContentToTop(container);

        if (viewName !== 'HomeHub') {
            currentState.viewHistory = [
                viewName,
                ...currentState.viewHistory.filter(item => item !== viewName)
            ].slice(0, 4);
        }

        currentState.activeView = viewName;
    }, 90);
}

function jumpContentToTop(container) {
    if (container) container.scrollTop = 0;
    const scroller = document.querySelector('.content-scroll');
    if (!scroller) return;

    const previousBehavior = scroller.style.scrollBehavior;
    scroller.style.scrollBehavior = 'auto';
    scroller.scrollTop = 0;
    scroller.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    scroller.style.scrollBehavior = previousBehavior;
}

function setActiveNavItem(viewName) {
    document.querySelectorAll('.nav-item').forEach((item) => {
        const isActive = item.dataset.category === viewName;
        item.classList.toggle('active', isActive);
        if (isActive) {
            item.setAttribute('aria-current', 'page');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.removeAttribute('aria-current');
        }
    });
}

function navigateToView(viewName) {
    if (!viewName || !EXAM_DATA[viewName]) return;
    setActiveNavItem(viewName);
    renderView(viewName);
    closeMobileMenu();
}

// ================================================================
// 🧮 I-131 CALCULATOR
// ================================================================
function getI131CalcHTML() {
    return `
        <div class="calculator-box">
            <h3 class="section-heading">I-131 入院日期計算器</h3>
            <p class="calc-desc">僅限<strong>週二</strong>或<strong>週五</strong>入院。選擇日期後自動計算出院日與 WBS 追蹤日。</p>
            <div class="calc-input-group">
                <label for="i131-date">選擇入院日期</label>
                <input type="date" id="i131-date">
            </div>
            <div id="i131-result" class="calc-result">
                <span class="calc-placeholder">👆 請選擇日期</span>
            </div>
            <div id="i131-wbs" style="display:none;"></div>
        </div>
    `;
}

function attachI131Listeners() {
    const picker = document.getElementById('i131-date');
    const resultBox = document.getElementById('i131-result');
    const wbsBox = document.getElementById('i131-wbs');
    if (!picker) return;

    picker.addEventListener('change', (e) => {
        const inputDate = e.target.value;
        if (!inputDate) return;

        const dateObj = new Date(inputDate);
        const day = dateObj.getDay();
        let output = '', isValid = false, outDateObj = new Date(dateObj);

        if (day === 2) {
            isValid = true;
            outDateObj.setDate(dateObj.getDate() + 3);
            output = `<span class="badge badge-emerald">✅ OK</span> 週二入院 → <strong>週五出院</strong>（住院 4 天）`;
        } else if (day === 5) {
            isValid = true;
            outDateObj.setDate(dateObj.getDate() + 4);
            output = `<span class="badge badge-emerald">✅ OK</span> 週五入院 → <strong>下週二出院</strong>（住院 5 天）`;
        } else {
            output = `<span class="badge badge-rose">⛔ 錯誤</span> <strong>僅能排週二或週五入院！</strong>`;
        }

        resultBox.innerHTML = output;
        resultBox.className = 'calc-result ' + (isValid ? 'calc-valid' : 'calc-error');

        if (isValid) {
            const wbsDate = new Date(outDateObj);
            wbsDate.setDate(outDateObj.getDate() + 7);
            const m = wbsDate.getMonth() + 1, d = wbsDate.getDate();
            wbsBox.style.display = 'block';
            wbsBox.innerHTML = `
                <div class="info-box info-box-amber" style="margin-top:1rem;">
                    <h4>🔔 自動排程提醒</h4>
                    <p>請務必幫病人預約 <strong>${m}/${d}（出院後 1 週）</strong>回來做 <strong>I-131 全身掃描（WBS）</strong></p>
                </div>
            `;
        } else {
            wbsBox.style.display = 'none';
        }
    });
}

// ================================================================
// 📅 CALENDAR
// ================================================================
function getCalendarHTML() {
    return `
        <div class="calendar-container">
            <div class="calendar-controls">
                <button class="cal-btn" onclick="changeMonth(-1)">◀ 上月</button>
                <button class="cal-btn cal-btn-today" onclick="changeMonth(0)">📍 今天</button>
                <button class="cal-btn" onclick="changeMonth(1)">下月 ▶</button>
            </div>
            <h3 id="cal-title" class="cal-title"></h3>
            <div id="cal-grid" class="cal-grid"></div>
            <div id="cal-modal" class="cal-modal hidden">
                <div class="cal-modal-content">
                    <button class="cal-modal-close" onclick="closeCalModal()">✕</button>
                    <h4 id="modal-date"></h4>
                    <div id="modal-body"></div>
                </div>
            </div>
        </div>
    `;
}

function initCalendar() {
    currentState.calendarDate = new Date();
    renderCalendarMonth();
}

window.changeMonth = function(delta) {
    if (delta === 0) {
        currentState.calendarDate = new Date();
    } else {
        const curr = currentState.calendarDate;
        currentState.calendarDate = new Date(curr.getFullYear(), curr.getMonth() + delta, 1);
    }
    renderCalendarMonth();
};

function renderCalendarMonth() {
    const grid = document.getElementById('cal-grid');
    const title = document.getElementById('cal-title');
    if (!grid || !title) return;

    const date = currentState.calendarDate;
    const year = date.getFullYear(), month = date.getMonth();
    title.textContent = `${year} 年 ${month + 1} 月`;

    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = `
        <div class="cal-head weekend">日</div>
        <div class="cal-head">一</div><div class="cal-head">二</div>
        <div class="cal-head">三</div><div class="cal-head">四</div>
        <div class="cal-head">五</div><div class="cal-head weekend">六</div>
    `;

    for (let i = 0; i < startDay; i++) html += `<div class="cal-cell empty"></div>`;

    const today = new Date();
    const todayStr = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDate().toString().padStart(2,'0')}`;

    for (let d = 1; d <= daysInMonth; d++) {
        const currentStr = `${year}-${(month+1).toString().padStart(2,'0')}-${d.toString().padStart(2,'0')}`;
        const dayObj = new Date(year, month, d);
        const dayOfWeek = dayObj.getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
        const isToday = (currentStr === todayStr);
        const special = SPECIAL_DAYS.find(s => s.date === currentStr);

        let classes = "cal-cell";
        let statusBadge = "";
        if (isWeekend) classes += " weekend";
        if (isToday) classes += " today";

        if (special) {
            classes += " has-event";
            if (special.clinicStatus === 'closed') { classes += " status-closed"; statusBadge = '<div class="status-badge">停診</div>'; }
            else if (special.clinicStatus === 'half') { classes += " status-half"; statusBadge = '<div class="status-badge">半日</div>'; }
            else if (special.clinicStatus === 'full') { classes += " status-full"; statusBadge = '<div class="status-badge">開診</div>'; }
        }

        let label = special ? `<div class="cal-label ${special.clinicStatus}">${special.title}</div>` : '';
        const dayDataJson = special ? JSON.stringify(special).replace(/"/g, '&quot;') : 'null';

        html += `
            <div class="${classes}" onclick="openCalModal('${currentStr}', ${dayDataJson})">
                <div class="cal-date-row">
                    <span class="cal-date-num">${d}</span>
                    ${statusBadge}
                </div>
                ${label}
            </div>
        `;
    }
    grid.innerHTML = html;
}

window.openCalModal = function(dateStr, specialData) {
    const modal = document.getElementById('cal-modal');
    const title = document.getElementById('modal-date');
    const body = document.getElementById('modal-body');
    modal.classList.remove('hidden');
    title.textContent = dateStr;

    let content = '';
    if (specialData) {
        let statusText = '', statusClass = '';
        if (specialData.clinicStatus === 'closed') { statusText = '停診'; statusClass = 'badge-rose'; }
        else if (specialData.clinicStatus === 'half') { statusText = '半日診'; statusClass = 'badge-amber'; }
        else if (specialData.clinicStatus === 'full') { statusText = '正常開診'; statusClass = 'badge-emerald'; }
        else { statusText = '正常'; statusClass = 'badge-blue'; }
        content = `
            <div class="modal-event">
                <span class="badge ${statusClass}">${statusText}</span>
                <h4>${specialData.title}</h4>
                <p>${specialData.note}</p>
            </div>
        `;
    } else {
        content = '<p style="text-align:center;color:var(--text-tertiary);padding:2rem;">今日無特殊事項</p>';
    }
    body.innerHTML = content;
};

window.closeCalModal = function() {
    document.getElementById('cal-modal').classList.add('hidden');
};

// ================================================================
// 💊 DOSAGE CALCULATOR
// ================================================================
function getDosageCalcHTML() {
    const options = Object.keys(DOSAGE_DB).map(key =>
        `<option value="${key}">${DOSAGE_DB[key].name}</option>`
    ).join('');

    return `
        <div class="calculator-box">
            <h3 class="section-heading">放射藥物劑量計算器</h3>
            <p class="calc-desc">依據 SNMMI / EANM 指引計算成人與兒科劑量。</p>
            <div class="calc-input-row">
                <div class="calc-input-group">
                    <label for="dosage-exam-select">檢查項目</label>
                    <select id="dosage-exam-select">
                        <option value="">-- 選擇檢查 --</option>
                        ${options}
                    </select>
                </div>
                <div class="calc-input-group">
                    <label for="dosage-weight">兒科體重 (kg)</label>
                    <input type="number" id="dosage-weight" placeholder="選填" min="1" max="120">
                </div>
                <button id="dosage-calc-btn" class="calc-btn-primary">計算</button>
            </div>
            <div id="dosage-calc-result" class="calc-result">
                <span class="calc-placeholder">👆 選擇檢查後按「計算」</span>
            </div>
            <div id="dosage-formula-display" style="display:none;"></div>
        </div>
    `;
}

function attachDosageCalcListeners() {
    const select = document.getElementById('dosage-exam-select');
    const weightInput = document.getElementById('dosage-weight');
    const calcBtn = document.getElementById('dosage-calc-btn');
    const resultBox = document.getElementById('dosage-calc-result');
    const formulaBox = document.getElementById('dosage-formula-display');
    if (!select || !calcBtn) return;

    function calculate() {
        const examKey = select.value;
        const weight = parseFloat(weightInput.value);
        if (!examKey) {
            resultBox.innerHTML = '<span class="badge badge-rose">⚠️ 請先選擇檢查項目</span>';
            formulaBox.style.display = 'none';
            return;
        }
        const exam = DOSAGE_DB[examKey];
        if (!exam) return;

        const sourceBadges = exam.source.map(s => {
            if (s === 'SNMMI') return '<span class="badge badge-blue">SNMMI</span>';
            if (s === 'EANM') return '<span class="badge badge-emerald">EANM</span>';
            if (s === '台灣') return '<span class="badge badge-amber">台灣</span>';
            return `<span class="badge">${s}</span>`;
        }).join(' ');

        const adultStr = exam.adultRange[0] === exam.adultRange[1]
            ? `<strong>${exam.adultRange[0]} mCi</strong>`
            : `<strong>${exam.adultRange[0]}–${exam.adultRange[1]} mCi</strong>（建議 ${exam.adultFixed} mCi）`;

        let pedStr = '';
        if (!weight || weight <= 0) {
            pedStr = '<span style="color:var(--text-tertiary);">請輸入體重以計算兒科劑量</span>';
        } else if (exam.pedFixed != null) {
            pedStr = `<strong>${exam.pedFixed} mCi</strong>（固定劑量，與體重無關）`;
        } else if (exam.pedPerKg != null) {
            let rawDose = exam.pedPerKg * weight;
            let finalDose = rawDose, clampNote = '';
            if (exam.pedMin != null && finalDose < exam.pedMin) { finalDose = exam.pedMin; clampNote = ` → 調整至最低 ${exam.pedMin} mCi`; }
            if (finalDose > exam.adultRange[1]) { finalDose = exam.adultRange[1]; clampNote = ` → 以成人上限 ${exam.adultRange[1]} mCi`; }
            const classInfo = exam.pedClass !== 'N/A' && exam.pedClass !== 'Off-label' ? ` (EANM Class ${exam.pedClass})` : exam.pedClass === 'Off-label' ? ' (Off-label)' : '';
            pedStr = `${exam.pedPerKg} mCi/kg × ${weight} kg = ${rawDose.toFixed(2)} mCi${clampNote}<br><strong>建議劑量: ${finalDose.toFixed(2)} mCi</strong>${classInfo}`;
        } else {
            pedStr = '<span style="color:var(--text-tertiary);">此檢查不適用兒科 / 無標準兒科指引</span>';
        }

        resultBox.innerHTML = `
            <div class="dosage-result">
                <div class="dosage-result-header">
                    <h4>${exam.name}</h4>
                    <div>指引依據: ${sourceBadges}</div>
                </div>
                <div class="dosage-grid">
                    <div class="dosage-item">
                        <div class="dosage-label">👤 成人劑量</div>
                        <div class="dosage-value">${adultStr}</div>
                    </div>
                    <div class="dosage-item">
                        <div class="dosage-label">👶 兒科劑量${weight ? ` (${weight} kg)` : ''}</div>
                        <div class="dosage-value">${pedStr}</div>
                    </div>
                </div>
                ${exam.note ? `<div class="dosage-note">💡 ${exam.note}</div>` : ''}
            </div>
        `;
        resultBox.className = 'calc-result calc-valid';

        formulaBox.style.display = 'block';
        formulaBox.innerHTML = `
            <div class="info-box info-box-blue" style="margin-top:1rem;">
                <h4>📐 計算公式</h4>
                <pre style="white-space:pre-wrap;font-size:0.85rem;line-height:1.6;">${exam.formula}</pre>
            </div>
        `;
    }

    calcBtn.addEventListener('click', calculate);
    weightInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') calculate(); });
}

// ================================================================
// 🔍 SEARCH
// ================================================================
(function initSearch() {
    const searchInput = document.getElementById('exam-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        const navItems = document.querySelectorAll('.nav-item');
        const navGroups = document.querySelectorAll('.nav-group');

        if (!term) {
            navItems.forEach(btn => btn.style.display = '');
            navGroups.forEach(g => g.style.display = '');
            document.querySelectorAll('.nav-group').forEach(group => {
                setNavGroupState(group, false);
            });
            setNavGroupState(document.querySelector('.nav-group'), true);
            return;
        }

        let anyVisible = false;

        navItems.forEach(btn => {
            const text = btn.textContent.toLowerCase();
            const cat = btn.dataset.category;
            if (!cat) return;
            const keywords = SEARCH_KEYWORDS[cat] || [];
            const match = text.includes(term)
                || cat.toLowerCase().includes(term)
                || keywords.some(kw => kw.includes(term));

            btn.style.display = match ? '' : 'none';
            if (match) anyVisible = true;
        });

        // Show/hide groups based on whether they have visible items
        navGroups.forEach(group => {
            const items = group.querySelectorAll('.nav-item');
            const hasVisible = Array.from(items).some(i => i.style.display !== 'none');
            group.style.display = hasVisible ? '' : 'none';
            if (hasVisible) {
                setNavGroupState(group, true);
            }
        });
    });
})();

document.addEventListener('keydown', (event) => {
    const searchInput = document.getElementById('exam-search');
    if (!searchInput) return;

    const isTypingContext = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
    if (event.key === '/' && !isTypingContext) {
        event.preventDefault();
        searchInput.focus();
        searchInput.select();
    }

    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});

// ================================================================
// 🧭 NAVIGATION
// ================================================================
function setNavGroupState(group, isOpen) {
    if (!group) return;
    const toggle = group.querySelector('.nav-group-toggle');
    const items = group.querySelector('.nav-group-items');
    toggle?.classList.toggle('open', isOpen);
    items?.classList.toggle('open', isOpen);
    toggle?.setAttribute('aria-expanded', String(isOpen));
}

function setSidebarOpen(isOpen) {
    document.getElementById('sidebar')?.classList.toggle('open', isOpen);
    document.getElementById('sidebar-overlay')?.classList.toggle('active', isOpen);
    document.getElementById('mobile-menu-toggle')?.classList.toggle('active', isOpen);
}

(function initNavigation() {
    // Nav group toggles
    document.querySelectorAll('.nav-group-toggle').forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.addEventListener('click', () => {
            const group = toggle.closest('.nav-group');
            const isOpen = !toggle.classList.contains('open');
            setNavGroupState(group, isOpen);
        });
    });

    // Nav item clicks
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateToView(btn.dataset.category);
        });
    });

    // External links
    document.querySelectorAll('.nav-external[data-href]').forEach(link => {
        link.addEventListener('click', () => {
            window.open(link.dataset.href, '_blank');
        });
    });
})();

// ================================================================
// 📱 MOBILE MENU
// ================================================================
(function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const overlay = document.getElementById('sidebar-overlay');

    if (toggle) {
        toggle.addEventListener('click', () => {
            const isOpen = !document.getElementById('sidebar')?.classList.contains('open');
            setSidebarOpen(isOpen);
        });
    }
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
})();

function closeMobileMenu() {
    setSidebarOpen(false);
}

// ================================================================
// ❓ Q&A TOGGLE
// ================================================================
window.toggleQA = function(element) {
    const item = element.closest('.qa-item');
    if (!item) return;
    const isOpen = !item.classList.contains('open');
    item.classList.toggle('open', isOpen);
    element.setAttribute('aria-expanded', String(isOpen));
};

// ================================================================
// 🚀 INITIAL RENDER
// ================================================================
// Open first nav group by default
setNavGroupState(document.querySelector('.nav-group'), true);

// Render default view
navigateToView('HomeHub');
