// ================================================================
// Nuclear Medicine Field Guide — Complete Data & Application Logic
// ================================================================

// --- EXAM DATA ---
const EXAM_DATA = {

// ================================================================
// 📚 核醫小學堂
// ================================================================

NMBasics: {
    title: "核醫是什麼？",
    subtitle: "Nuclear Medicine — 功能性造影的獨特價值",
    category: "learning",
    content: [
        {
            type: "info-box-blue",
            html: `<h4>💡 核心概念：Tracer Principle（示蹤劑原理）</h4>
            <p>利用微量放射性同位素標記在特定生理路徑的藥物上，如同在人體內派入「間諜」，觀察其分佈與代謝。核醫影像反映的是<strong>活體生理功能的變化</strong>，往往發生在解剖結構改變之前。</p>`
        },
        {
            type: "section",
            title: "生理代謝 vs 解剖結構",
            icon: "🧪",
            html: `<div class="prose">
                <p>核醫影像與一般放射科影像最大的差異：</p>
                <ul>
                    <li><strong>CT / MRI（Anatomy）：</strong>看到結構的破壞（如骨折線、腫瘤大小、組織密度改變）。</li>
                    <li><strong>NM（Physiology）：</strong>看到細胞活性的改變（如骨轉移早期的成骨作用增加、感染處的白血球聚集、腫瘤的葡萄糖代謝旺盛）。</li>
                </ul>
                <p>臨床意義：許多疾病的功能性變化遠早於結構性變化。例如骨轉移在 X-ray 看到溶骨之前，Bone Scan 就已經能偵測到成骨活性增加。</p>
            </div>`
        },
        {
            type: "section",
            title: "核醫設備家族",
            icon: "📷",
            html: `<div class="prose">
                <h4>Gamma Camera（平面造影）</h4>
                <p>最基本的核醫相機，拍攝<strong>平面影像</strong>（類似 X 光）。</p>
                <ul>
                    <li><strong>Collimator（準直儀）：</strong>像濾光柵欄，只允許垂直進入的射線通過，決定影像解析度與靈敏度的取捨。</li>
                    <li><strong>Crystal（閃爍晶體）：</strong>通常為 NaI(Tl)，將 Gamma 射線轉換為可見光。</li>
                    <li><strong>PMT（光電倍增管）：</strong>將微弱光訊號放大成電子訊號，經電腦重組為影像。</li>
                </ul>

                <h4>SPECT（單光子斷層掃描）</h4>
                <p>Gamma Camera 繞著病人轉一圈，拍攝多角度影像後重組成<strong>3D 立體影像</strong>。比平面影像能看到深度資訊，大幅提高偵測率。</p>

                <h4>SPECT/CT（融合影像）</h4>
                <p>一台機器結合 SPECT + CT，同時拍攝功能影像與解剖影像，可以精確定位病灶在哪個器官、哪個位置。類似 Google Maps 的衛星圖 + 街景的疊加。</p>

                <h4>PET/CT（正子斷層掃描）</h4>
                <p>使用正子同位素（如 F-18），正子遇到電子會產生<strong>兩道反向的 511 keV 光子</strong>，同時偵測兩側光子來定位。解析度比 SPECT 更高，主要用於癌症分期與追蹤。</p>

                <h4>PET/MRI</h4>
                <p>最新的融合設備，結合 PET 的代謝資訊與 MRI 的軟組織對比度。目前台灣部分醫學中心已引進。</p>
            </div>`
        },
        {
            type: "section",
            title: "輻射劑量對照表（有效劑量）",
            icon: "☢️",
            html: `<div class="prose">
                <p>資料來源：<strong>ICRP Publication 128</strong>（國際放射防護委員會）與<strong>美國放射學會（ACR）</strong></p>
            </div>
            <div class="data-table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr><th>檢查項目</th><th>有效劑量 (mSv)</th><th>相當於背景輻射</th></tr>
                    </thead>
                    <tbody>
                        <tr><td colspan="3" style="background:var(--bg-inset);font-weight:700;">X-ray / CT</td></tr>
                        <tr><td>胸部 X 光</td><td>0.02</td><td>3 天</td></tr>
                        <tr><td>乳房攝影</td><td>0.4</td><td>2 個月</td></tr>
                        <tr><td>胸部 CT</td><td>7</td><td>2.3 年</td></tr>
                        <tr><td>腹部 CT</td><td>10</td><td>3.3 年</td></tr>
                        <tr><td>全身 CT</td><td>15–20</td><td>5–6 年</td></tr>
                        <tr><td colspan="3" style="background:var(--bg-inset);font-weight:700;">核醫檢查</td></tr>
                        <tr><td>骨骼掃描 (Bone Scan)</td><td>4–6</td><td>1.5–2 年</td></tr>
                        <tr><td>心肌灌流 (MPI)</td><td>9–12</td><td>3–4 年</td></tr>
                        <tr><td>甲狀腺掃描 (Tc-99m)</td><td>1–2</td><td>4–8 個月</td></tr>
                        <tr><td>腎臟掃描 (DMSA/DTPA)</td><td>1–3</td><td>4–12 個月</td></tr>
                        <tr><td>FDG PET/CT (全身)</td><td>14–20</td><td>5–7 年</td></tr>
                        <tr><td>腦部灌流 (Brain SPECT)</td><td>5–7</td><td>2 年</td></tr>
                        <tr><td colspan="3" style="background:var(--accent-blue-bg);"><strong>台灣天然背景輻射約 3 mSv/年。</strong>單次核醫檢查劑量通常與 1–2 次 CT 相當，遠低於確定性效應閾值（>100 mSv）。</td></tr>
                    </tbody>
                </table>
            </div>`
        }
    ]
},

PatientQA: {
    title: "常見 Q&A 話術",
    subtitle: "以台灣核醫臨床現場為核心，從新人接電話、櫃台說明、檢前衛教到檢後交代都能直接上手",
    category: "learning",
    content: [
        {
            type: "info-box-blue",
            html: `<h4>先記住：Q&A 不是背台詞，是降低病人焦慮的臨床溝通</h4>
            <p>新人最容易犯的錯，不是「不會講」，而是<strong>講得太快、太空泛、太像背稿</strong>。核醫溝通的重點永遠是：<strong>先辨識風險</strong>（懷孕、哺乳、糖尿病、過敏史、無法平躺、咖啡因/藥物未停）、<strong>再解釋目的</strong>、<strong>最後交代配合事項</strong>。</p>
            <p>以下話術以台灣常見核醫實務為骨架，但<strong>藥物別、治療別、醫師個別指示永遠優先</strong>；尤其是懷孕、哺乳、I-131、Ga-67、壓力心肌灌流與治療性核醫，不能只靠制式回答。</p>`
        },
        {
            type: "section",
            title: "門診櫃台與檢前電話先講的 4 件事",
            icon: "📋",
            html: `<div class="prose">
                <ol>
                    <li><strong>先確認病人知道自己做什麼：</strong>檢查名稱、檢查目的、當天流程。</li>
                    <li><strong>先抓禁忌與高風險：</strong>懷孕可能、哺乳、血糖、咖啡因、甲狀腺藥物、顯影/治療史。</li>
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
                        <p><strong>教學底線：</strong>電話通知時至少確認：<strong>空腹、咖啡因、糖尿病藥、甲狀腺藥、近期 CT 含碘顯影劑、哺乳/懷孕</strong>。</p>`
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
    title: "核醫藥物總覽",
    subtitle: "Radiopharmacy — 認識我們用的「子彈」",
    category: "learning",
    content: [
        {
            type: "info-box-blue",
            html: `<h4>核心公式</h4><p><strong>放射性同位素 + 標記藥物 = 核醫藥物（Radiopharmaceutical）</strong></p>
            <p>同位素提供「信號」讓相機看得到，標記藥物決定「去哪裡」（靶向）。</p>`
        },
        {
            type: "section",
            title: "常用同位素一覽",
            icon: "⚗️",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>同位素</th><th>半衰期</th><th>能量 (keV)</th><th>主要用途</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Tc-99m</strong></td><td>6 小時</td><td>140 (γ)</td><td>核醫最常用，80% 以上檢查</td></tr>
                        <tr><td><strong>I-131</strong></td><td>8 天</td><td>364 (γ) / 606 (β)</td><td>甲狀腺治療 + 診斷</td></tr>
                        <tr><td><strong>I-123</strong></td><td>13.2 小時</td><td>159 (γ)</td><td>甲狀腺/MIBG（診斷用）</td></tr>
                        <tr><td><strong>F-18</strong></td><td>110 分鐘</td><td>511 (正子)</td><td>PET 掃描（FDG、NaF、PSMA等）</td></tr>
                        <tr><td><strong>Ga-67</strong></td><td>78 小時</td><td>93, 185, 300 (γ)</td><td>發炎/感染/淋巴瘤</td></tr>
                        <tr><td><strong>Ga-68</strong></td><td>68 分鐘</td><td>511 (正子)</td><td>PET（DOTATOC、PSMA）</td></tr>
                        <tr><td><strong>Tl-201</strong></td><td>73 小時</td><td>69–83 (X-ray)</td><td>心肌灌流（存活心肌）</td></tr>
                        <tr><td><strong>In-111</strong></td><td>2.8 天</td><td>171, 245 (γ)</td><td>白血球標記、Octreotide</td></tr>
                        <tr><td><strong>Ra-223</strong></td><td>11.4 天</td><td>α 粒子</td><td>骨轉移治療</td></tr>
                        <tr><td><strong>Lu-177</strong></td><td>6.6 天</td><td>208 (γ) / 497 (β)</td><td>PSMA/DOTATATE 治療</td></tr>
                        <tr><td><strong>Y-90</strong></td><td>2.7 天</td><td>純 β 射線</td><td>肝癌微球體治療（SIRT）</td></tr>
                    </tbody>
                </table>
            </div>`
        },
        {
            type: "section",
            title: "Generator（乳牛）",
            icon: "🐄",
            html: `<div class="prose">
                <p><strong>Mo-99（母牛, T½=66hr）</strong>衰變產生 <strong>Tc-99m（小牛）</strong>。每天早上「擠牛奶（Elution）」取得 Tc-99m，這是核醫科最重要的日常作業。</p>
                <ul>
                    <li>Mo-99 主要由核反應爐生產（全球僅少數設施）</li>
                    <li>Generator 通常每週更換一次</li>
                    <li>擠完牛奶後需做<strong>品質管制（QC）</strong>：Mo breakthrough test（Mo-99 穿透率 < 0.15 μCi Mo/mCi Tc）、Al breakthrough test</li>
                    <li>Tc-99m 的理想能量 (140 keV) 與短半衰期 (6hr) 使其成為最理想的 SPECT 同位素</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "核醫藥物的靶向機制",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>主動運輸：</strong>甲狀腺碘攝取（NIS）、Tl-201 鉀離子通道</li>
                    <li><strong>被動擴散：</strong>腦灌流藥物（ECD/HMPAO）穿越血腦屏障</li>
                    <li><strong>化學吸附：</strong>MDP 與骨骼的 Hydroxyapatite 結合</li>
                    <li><strong>受體結合：</strong>PSMA 配體、Octreotide（DOTATOC）與 SSTR 受體</li>
                    <li><strong>吞噬作用：</strong>Sulfur Colloid 被 Kupffer cells 吞噬</li>
                    <li><strong>代謝陷阱：</strong>FDG 被磷酸化後無法繼續代謝而滯留</li>
                    <li><strong>微血管阻塞：</strong>MAA 卡在肺微血管</li>
                </ul>
            </div>`
        }
    ]
},

RadiationSafety: {
    title: "輻射防護",
    subtitle: "Radiation Safety — ALARA 原則與實務操作",
    category: "learning",
    content: [
        {
            type: "info-box-amber",
            html: `<h4>⚠️ ALARA 原則</h4>
            <p><strong>As Low As Reasonably Achievable</strong>——在合理抑低範圍內盡量降低輻射暴露。這是所有輻射防護工作的核心精神。</p>`
        },
        {
            type: "section",
            title: "防護三大原則",
            icon: "🛡️",
            html: `<div class="prose">
                <h4>1. 時間（Time）</h4>
                <p>操作時間越短越好。熟練每一個動作，減少不必要的停留。建議新進人員先以非放射性物質練習操作流程。</p>

                <h4>2. 距離（Distance）</h4>
                <p>距離越遠越好。<strong>輻射強度與距離的平方成反比</strong>（Inverse Square Law）。距離加倍，劑量降為 1/4。善用長鑷子、鉛磚牆。</p>

                <h4>3. 屏蔽（Shielding）</h4>
                <ul>
                    <li><strong>Gamma 射線（如 Tc-99m 140 keV）：</strong>使用鉛屏蔽，0.3mm 鉛即可有效遮蔽。</li>
                    <li><strong>高能 Gamma（如 I-131 364 keV）：</strong>需較厚的鉛。</li>
                    <li><strong>Beta 射線（如 I-131 治療、Y-90）：</strong>先用低原子序材料（壓克力）屏蔽 Beta，再用鉛擋 Bremsstrahlung。<strong>不可直接用鉛</strong>，否則會產生制動輻射。</li>
                    <li><strong>正子同位素（如 F-18, 511 keV）：</strong>需鎢合金屏蔽，鉛效果較差。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "個人劑量限度",
            icon: "📊",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>對象</th><th>限度</th><th>說明</th></tr></thead>
                    <tbody>
                        <tr><td>輻射工作人員（全身）</td><td>50 mSv/年</td><td>5 年平均不超過 20 mSv/年</td></tr>
                        <tr><td>眼睛水晶體</td><td>50 mSv/年</td><td>ICRP 建議降至 20 mSv/年</td></tr>
                        <tr><td>皮膚 / 四肢</td><td>500 mSv/年</td><td>局部劑量限制</td></tr>
                        <tr><td>懷孕工作人員（腹部）</td><td>2 mSv/整個妊娠期</td><td>宣佈懷孕後立即啟動管制</td></tr>
                        <tr><td>一般民眾</td><td>1 mSv/年</td><td>醫療暴露不計入此限度</td></tr>
                    </tbody>
                </table>
            </div>`
        },
        {
            type: "section",
            title: "日常注意事項",
            icon: "📋",
            html: `<div class="prose">
                <ul>
                    <li>每日配戴<strong>個人劑量佩章（TLD / OSL）</strong>，不可交換、遺忘或帶離工作場所</li>
                    <li>操作放射性藥物時穿戴<strong>手套、防護衣</strong>，使用<strong>鉛容器、鑷子</strong></li>
                    <li>放射性廢棄物依半衰期分類儲存，10 個半衰期後可當一般廢棄物處理</li>
                    <li>污染處理：先除污（擦拭），再偵測，記錄殘留活度</li>
                    <li><strong>懷孕/哺乳病人：</strong>原則上禁止核醫檢查。哺乳者視藥物種類暫停 12–24 小時不等</li>
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
    title: "核醫藥物劑量速查表",
    subtitle: "Dosage Quick Reference — SNMMI / EANM 2024–2025 指引",
    category: "learning",
    content: [
        {
            type: "info-box-emerald",
            html: `<h4>📋 劑量原則</h4>
            <p>整合 <strong>SNMMI</strong> 與 <strong>EANM</strong> 最新指引。兒科劑量計算後若低於最低劑量（Min）應以 Min 給予；若高於成人劑量則以成人劑量為上限。</p>`
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
    subtitle: "Radioiodine Therapy — 甲狀腺癌術後消融治療",
    category: "therapy",
    isI131Calc: true,
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：Beta 射線破壞</h4>
            <p>I-131 同時釋放 <strong>Beta 射線（治療用，射程短破壞力強）</strong>與 Gamma 射線（可用於造影）。甲狀腺癌細胞保留 NIS 功能，會主動攝取碘→被 Beta 射線破壞。</p>`
        },
        {
            type: "info-box-rose",
            html: `<h4>⚠️ 排程核心規定</h4>
            <ul>
                <li><strong>入院日：</strong>僅限<strong>週二、週五</strong></li>
                <li><strong>床位：</strong>每週上限 4 人</li>
                <li><strong>前置：</strong>需 3 週前預約</li>
                <li><strong>懷孕絕對不可執行！</strong>育齡婦女需驗孕</li>
            </ul>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>分化型甲狀腺癌（DTC）術後殘餘組織消融（Remnant Ablation）</li>
                    <li>已知轉移病灶的治療</li>
                    <li>甲狀腺機能亢進的治療（低劑量）</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "病人衛教",
            icon: "💊",
            html: `<div class="prose">
                <ul>
                    <li><strong>低碘飲食：</strong>共 4 週準備。前 2 週低碘飲食，後 2 週極低碘飲食</li>
                    <li><strong>停藥：</strong>T4 停 4 週 / T3 停 2 週（或使用 Thyrogen）</li>
                    <li><strong>住院隔離：</strong>需住院至輻射劑量符合出院標準</li>
                    <li>出院後仍需保持安全距離 1–2 週</li>
                </ul>
            </div>`
        }
    ]
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
            { label: "靜脈慢推", value: "1 分鐘" },
            { label: "觀察", value: "無須隔離" }
        ],
        note: "療程為每 4 週一次，共 6 次。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理：Alpha 粒子導彈</h4>
            <p>Ra-223 化學性質擬態「鈣離子」，被骨轉移病灶大量攝取。其 Alpha 粒子能量極高但射程極短（< 10 個細胞直徑），<strong>精準殺死癌細胞且不傷及周圍骨髓</strong>。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>去勢抗性攝護腺癌（CRPC）+ 骨轉移</strong></li>
                    <li>無內臟轉移者（肝、肺轉移為禁忌）</li>
                    <li>≥ 2 處骨轉移</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "行政與衛教",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li>Alpha 射線一張紙就能擋住，<strong>無須隔離</strong></li>
                    <li>主要經糞便排泄→如廁後蓋上馬桶蓋沖兩次</li>
                    <li>常見副作用：輕微腹瀉、噁心，骨髓抑制較輕微</li>
                    <li>治療前需確認<strong>血球計數足夠</strong>（ANC > 1500, PLT > 50K）</li>
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
            { label: "靜脈輸注", value: "Lu-177 PSMA-617" },
            { label: "時間", value: "30–40 分鐘" },
            { label: "觀察", value: "住院 1–2 天" }
        ],
        note: "療程通常 4–6 次，每 6–8 週一次。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Lu-177 PSMA-617（Pluvicto®）結合攝護腺癌細胞表面的 PSMA 後，Lu-177 釋放的 <strong>Beta 射線在短距離內殺死腫瘤細胞</strong>。同時釋放 Gamma 射線可用於治療後造影追蹤。</p>`
        },
        {
            type: "section",
            title: "適應症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>VISION Trial：</strong>mCRPC 在 Androgen 軸治療與至少一種紫杉醇類化療後進展</li>
                    <li>PSMA PET 陽性（確認腫瘤表現 PSMA）</li>
                    <li>FDG PET 無顯著 PSMA 陰性病灶</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-emerald",
            html: `<h4>台灣現況</h4>
            <p>Lu-177 PSMA-617（Pluvicto®）已在多國上市，台灣正在申請藥證/恩慈使用中。部分醫學中心以專案進口方式提供。需先做 <strong>Ga-68 PSMA PET</strong> 確認適應症。</p>`
        },
        {
            type: "section",
            title: "副作用與監測",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>唾液腺炎：</strong>最常見（PSMA 在唾液腺高表現）。可冰敷腮腺區域</li>
                    <li><strong>骨髓抑制：</strong>每次治療前需檢查 CBC</li>
                    <li><strong>腎毒性：</strong>需監測腎功能</li>
                    <li><strong>口乾症：</strong>長期副作用</li>
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
            { label: "腎保護 Amino Acid", value: "輸注 4hr" },
            { label: "Lu-177 DOTATATE", value: "同時輸注 30 min" },
            { label: "觀察", value: "住院 1–2 天" }
        ],
        note: "療程共 4 次，每 8 週一次。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>原理</h4>
            <p>Lu-177 DOTATATE（Lutathera®）結合 NET 細胞表面的 <strong>SSTR2（體抑素受體）</strong>後，Beta 射線在局部殺死腫瘤細胞。治療前須以 Ga-68 DOTATOC PET 確認腫瘤 SSTR 表現。</p>`
        },
        {
            type: "section",
            title: "適應症（NETTER-1 Trial）",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>Grade 1–2 腸胃胰 NET</strong>，Somatostatin analog 治療後進展</li>
                    <li>Ga-68 DOTATOC/DOTATATE PET <strong>Krenning score ≥ 3</strong></li>
                    <li>腎功能與血球計數足夠</li>
                </ul>
            </div>`
        },
        {
            type: "info-box-rose",
            html: `<h4>⚠️ 關鍵注意事項</h4>
            <ul>
                <li><strong>腎保護：</strong>必須同時輸注 Amino Acid Solution（Lysine + Arginine）以減少腎小管再吸收</li>
                <li>噁心嘔吐常見（與 Amino Acid 輸注有關），需備止吐劑</li>
                <li>嚴重骨髓抑制少見但可能，需長期追蹤 MDS/AML 風險</li>
            </ul>`
        },
        {
            type: "info-box-emerald",
            html: `<h4>台灣現況</h4>
            <p>Lutathera® 已取得台灣藥證，部分醫學中心可執行。需跨科合作（核醫科 + 腫瘤科 + 內分泌科）。</p>`
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

// ================================================================
// Operation Guide
// ================================================================
OperationGuide: {
    title: "AI 辨識操作說明",
    subtitle: "Step-by-step Guide",
    category: "toolbox",
    isGallery: true,
    gallery: [
        { src: "assets/guide/01.png", desc: "Step 1" },
        { src: "assets/guide/02.png", desc: "Step 2" },
        { src: "assets/guide/03.png", desc: "Step 3" },
        { src: "assets/guide/04.png", desc: "Step 4" },
        { src: "assets/guide/05.png", desc: "Step 5" },
        { src: "assets/guide/06.png", desc: "Step 6" }
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
                    <li>先確認<strong>咖啡因、茶、可樂、巧克力</strong>是否已停，尤其 MPI / Cardiac PET。</li>
                    <li>確認是否有<strong>氣喘、COPD、嚴重心律不整、近期胸痛或不穩定心絞痛</strong>。</li>
                    <li>動態或閘控檢查要注意 <strong>ECG 品質、心律規則性、IV 通暢</strong>。</li>
                    <li>教學上要強調：核醫心臟檢查不是只看形狀，而是看<strong>血流、功能、儲備與治療風險</strong>。</li>
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

// ================================================================
// 🔍 SEARCH KEYWORDS
// ================================================================
const SEARCH_KEYWORDS = {
    NMBasics: ['basic', '基礎', 'principle', '原理', 'intro', '介紹', '核醫', 'nuclear'],
    PatientQA: ['qa', '問答', 'question', '問題', 'patient', '病人', 'faq'],
    Radiopharmacy: ['drug', '藥物', 'radiopharmaceutical', 'isotope', '同位素', 'tc99m', 'tracer', '放射藥物'],
    RadiationSafety: ['radiation', '輻射', 'safety', '安全', 'protection', '防護', 'dose', '劑量'],
    EmergencyCart: ['emergency', '急救', 'cart', '急救車', 'cpr', 'epinephrine', '過敏'],
    DosageTable: ['dosage', '劑量', 'dose', '劑量表', 'snmmi', 'eanm', 'mci', 'mbq'],
    DosageCalc: ['calculator', '計算', 'dosage', '劑量', 'weight', '體重', 'pediatric', '兒科'],
    Calendar: ['calendar', '行事曆', 'holiday', '假日', 'schedule', '排班'],
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
    OperationGuide: ['guide', '操作', 'ai', '說明']
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
    calendarDate: new Date()
};

function buildContentHTML(key, data) {
    if (!data) return '<div class="empty-state"><h3>⚠️ 找不到資料</h3></div>';

    // Handle redirect
    if (data.redirect) {
        const redirectData = EXAM_DATA[data.redirect];
        if (redirectData) return buildContentHTML(data.redirect, redirectData);
    }

    let imgHTML = '';

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

    // Gallery (Operation Guide)
    let galleryHTML = '';
    if (data.isGallery && data.gallery) {
        galleryHTML = `<div class="guide-gallery">${data.gallery.map((img, i) => `
            <div class="guide-step-card">
                <img src="${img.src}" alt="${img.desc}" loading="lazy">
                <div class="guide-step-desc">${img.desc}</div>
            </div>
        `).join('')}</div>`;
    }

    // Special content (I131 calc, Calendar, Dosage)
    let specialHTML = '';
    if (key === 'Calendar') {
        specialHTML = getCalendarHTML();
    } else if (key === 'DosageCalc') {
        specialHTML = getDosageCalcHTML();
    } else if (data.isI131Calc) {
        specialHTML = getI131CalcHTML();
    }

    // Content blocks
    const allContentBlocks = [
        ...(data.content || []),
        ...(CATEGORY_TEACHING_SUPPLEMENTS[data.category] || []),
        ...(EXAM_TEACHING_SUPPLEMENTS[key] || [])
    ];

    let blocksHTML = '';
    if (allContentBlocks.length > 0) {
        blocksHTML = allContentBlocks.map(block => {
            switch (block.type) {
                case 'info-box-blue':
                    return `<div class="info-box info-box-blue">${block.html}</div>`;
                case 'info-box-emerald':
                    return `<div class="info-box info-box-emerald">${block.html}</div>`;
                case 'info-box-amber':
                    return `<div class="info-box info-box-amber">${block.html}</div>`;
                case 'info-box-rose':
                    return `<div class="info-box info-box-rose">${block.html}</div>`;
                case 'info-box-purple':
                    return `<div class="info-box info-box-purple">${block.html}</div>`;
                case 'section':
                    return `<div class="content-section">
                        <h3 class="section-heading">${block.title}</h3>
                        ${block.html}
                    </div>`;
                case 'qa':
                    return `<div class="qa-section">
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
                    </div>`;
                default:
                    return block.html || '';
            }
        }).join('');
    }

    return `
        <article class="exam-article">
            ${headerHTML}
            ${timeHTML}
            ${specialHTML}
            ${blocksHTML}
            ${galleryHTML}
        </article>
    `;
}

function renderView(viewName) {
    const container = document.getElementById('content-display');
    const data = EXAM_DATA[viewName];

    container.style.opacity = '0';
    container.style.transform = 'translateY(8px)';

    setTimeout(() => {
        container.innerHTML = buildContentHTML(viewName, data);
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';

        // Attach special listeners
        if (viewName === 'Calendar') initCalendar();
        if (viewName === 'DosageCalc') attachDosageCalcListeners();
        if (data && data.isI131Calc) attachI131Listeners();

        // Scroll to top
        container.scrollTop = 0;
        document.querySelector('.content-scroll')?.scrollTo(0, 0);

        currentState.activeView = viewName;
    }, 150);
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
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderView(btn.dataset.category);
            closeMobileMenu();
        });
    });

    // Operation Guide special
    const guideBtn = document.getElementById('guide-btn');
    if (guideBtn) {
        guideBtn.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            renderView('OperationGuide');
            closeMobileMenu();
        });
    }

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
// 🕐 CLOCK
// ================================================================
function updateClock() {
    const now = new Date();
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const date = now.getDate().toString().padStart(2, '0');
    const day = days[now.getDay()];
    const hour = now.getHours().toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');
    const el = document.getElementById('clock-display');
    if (el) el.textContent = `${month}/${date}（週${day}）${hour}:${min}`;
}
setInterval(updateClock, 1000);
updateClock();

// ================================================================
// 💬 GREETING
// ================================================================
function initRandomGreeting() {
    const el = document.getElementById('smart-greeting');
    if (!el) return;
    const greetings = [
        "忙碌中也要記得深呼吸，您辛苦了。",
        "每一個細心的檢查，都是病人的安心。",
        "今天把流程顧穩，就是最好的專業。",
        "您的專業與耐心，是病人最大的支持。",
        "別忘了喝杯水，照顧好自己。",
        "今天也讓排檢更順、更清楚。",
        "休息一下，充飽電再出發。",
        "遇事不慌，您是最棒的核醫夥伴。",
        "把每件小事做好，就是最偉大的成就。",
        "祝您今天工作順利，心情平穩。"
    ];
    const selected = greetings[Math.floor(Math.random() * greetings.length)];
    el.textContent = selected;
}
initRandomGreeting();

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

// Set first item active
const firstItem = document.querySelector('.nav-item');
if (firstItem) firstItem.classList.add('active');

// Render default view
renderView('NMBasics');
