// ================================================================
// Nuclear Medicine Field Guide — Complete Data & Application Logic
// ================================================================

// --- EXAM DATA ---
const EXAM_DATA = {

HomeHub: {
    title: "首頁總覽",
    subtitle: "整合核醫科常用檢查、治療、工作支援工具與衛教資源的總覽頁。",
    category: "home",
    isHomeHub: true,
    content: []
},

// ================================================================
// 📚 核醫小學堂
// ================================================================

NMBasics: {
    title: "核醫原理、儀器與技術",
    subtitle: "從功能影像、加馬攝影機（gamma camera）到正子電腦斷層（PET/CT）與品質控制（QC），建立核醫設備與成像的基本觀念",
    category: "learning",
    content: [
        {
            type: "info-box-emerald",
            html: `<h4>基本觀念：功能影像、設備差異與品質控制</h4>
            <p>核醫工作的基礎可先從三個觀念建立：<strong>核醫影像著重功能資訊</strong>、<strong>不同設備對應不同臨床問題</strong>、以及<strong>品質控制會直接影響影像是否可信</strong>。</p>
            <p>國際上目前的主流趨勢很清楚：一般核醫仍以<strong>雙探頭安格型加馬攝影機（Anger gamma camera）搭配單光子電腦斷層（SPECT/CT）</strong>為主力；高階系統朝<strong>數位化與定量化</strong>前進；心肌專科則常使用<strong>碲鋅鎘偵測器系統（CZT）</strong>，以提升靈敏度、縮短掃描時間並降低劑量。</p>`
        },
        {
            type: "section",
            title: "小學堂怎麼讀",
            icon: "🗺️",
            html: `<div class="prose">
                <p>建議先把核醫成像與設備的基本觀念讀完，再往文件管理、熱核室、病人衛教、輻射防護與藥物劑量工具延伸。這樣後面遇到各種檢查或治療頁時，比較容易判斷哪些是成像問題、哪些是流程問題、哪些屬於病安與輻防要求。</p>
                <ol class="learning-route-list">
                    <li><strong>先讀成像與設備：</strong>功能影像、加馬攝影機（gamma camera）、單光子電腦斷層（SPECT/CT）、正子電腦斷層（PET/CT）、正子磁振造影（PET/MR）與品質控制（QC），是後續各頁的共同基礎。</li>
                    <li><strong>再讀流程與管理：</strong>文件系統、熱核室與品質控制可對應到日常工作中的可追溯與標準化需求。</li>
                    <li><strong>最後連到臨床應用：</strong>病人溝通、輻射防護、治療安全與劑量工具，會把前面的原理帶回實際照護與作業情境。</li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "核醫到底在看什麼？",
            icon: "🧪",
            html: `<div class="prose">
                <p><strong>核醫影像的重點在於器官或病灶的功能狀態，而不只是在結構外觀。</strong>同樣是胸痛、骨痛、腎積水或腫瘤追蹤，電腦斷層（CT）與磁振造影（MRI）多用於結構判讀，核醫則常用於評估<strong>灌流、代謝、排泄、受體表現、骨重塑或發炎活性</strong>。</p>
                <ul>
                    <li><strong>電腦斷層／磁振造影（CT / MRI）：</strong>看到大小、位置、形狀與結構破壞。</li>
                    <li><strong>核醫／正子造影（NM / PET）：</strong>看到器官在做什麼、病灶有多活躍，以及治療後是否仍有功能訊號。</li>
                </ul>
                <p>臨床上最重要的觀念是：<strong>功能改變常早於結構改變</strong>。例如骨轉移還沒在 X 光明顯溶骨時，骨掃描可能已先看到成骨活性增加；腎臟超音波看到腎盂擴張時，巰基乙醯三甘胺酸（MAG3）或二乙烯三胺五乙酸（DTPA）腎圖才能回答是否已形成真正阻塞。</p>
            </div>`
        },
        {
            type: "section",
            title: "現在主流的核醫設備大致分成這幾類",
            icon: "📷",
            html: `<div class="prose">
                <p>目前臨床常見設備可先依用途分成五類：一般核醫的雙探頭安格型加馬攝影機（Anger gamma camera）、通用型碲鋅鎘單光子電腦斷層（CZT SPECT/CT）、心肌專用 CZT 系統、數位正子電腦斷層（PET/CT）與正子磁振造影（PET/MR）。前兩者是一般核醫與混合影像的主力，心肌專用 CZT 著重高計數效率與較短掃描時間，數位 PET/CT 則是當代腫瘤正子造影的主流高階平台。</p>
                <div class="protocol-table-wrap">
                    <table class="protocol-table">
                        <tbody>
                            <tr>
                                <th scope="row">雙探頭安格型加馬攝影機</th>
                                <td>大多數醫院最常見的通用型設備，可執行平面影像、全身掃描、單光子斷層（SPECT）與單光子電腦斷層（SPECT/CT）。</td>
                            </tr>
                            <tr>
                                <th scope="row">通用型 CZT 單光子電腦斷層</th>
                                <td>以直接轉換偵測器提高能量解析度、靈敏度與定量穩定性，近年開始進入一般核醫平台。</td>
                            </tr>
                            <tr>
                                <th scope="row">心肌專用 CZT 系統</th>
                                <td>針對心肌灌流造影（myocardial perfusion imaging）最佳化，以高計數效率、短時間掃描與低劑量流程為重點。</td>
                            </tr>
                            <tr>
                                <th scope="row">數位 PET/CT</th>
                                <td>大量採用矽光子倍增器（SiPM）、飛行時間技術（TOF）與更成熟的定量能力，讓小病灶偵測、低劑量與較短掃描時間更可行。</td>
                            </tr>
                            <tr>
                                <th scope="row">PET/MR</th>
                                <td>多見於腦部、骨盆、兒科與特定軟組織問題，重點在正子造影（PET）與磁振造影（MRI）的同步資訊整合。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="reading-note"><strong>整體方向是混合影像平台已成主流。</strong> 單獨功能影像仍重要，但定位、衰減校正與定量需求，讓單光子電腦斷層（SPECT/CT）、正子電腦斷層（PET/CT）與正子磁振造影（PET/MR）成為日常臨床工作中的核心配置。</p>
            </div>`
        },
        {
            type: "section",
            title: "加馬攝影機、準直儀與 CZT",
            icon: "🔬",
            html: `<div class="prose">
                <p>傳統安格型加馬攝影機（Anger gamma camera）的核心是<strong>準直儀、碘化鈉閃爍晶體（NaI(Tl)）與光電倍增管（PMT）</strong>；偵測到的 gamma photon 先被 collimator 篩選方向，再轉成光訊號與電訊號。它成熟、通用，仍是一般核醫最常見的設備基礎。</p>
                <p>碲鋅鎘偵測器（CZT, cadmium zinc telluride）則屬於<strong>直接轉換偵測器</strong>，不需要先把 gamma photon 轉成光再放大，通常可帶來較好的能量解析度、靈敏度與定量穩定性。若設備只聚焦於心肌灌流等固定任務，還能進一步利用幾何設計與流程設計提高採集效率。</p>
                <ul>
                    <li><strong>準直儀決定影像風格：</strong>低能高解析（LEHR）偏重低能高解析，低能通用型（LEGP）為常見通用型，中能／高能通用型（MEGP / HEGP）用於較高能量核種。</li>
                    <li><strong>探測器決定訊號品質：</strong>傳統閃爍晶體系統重視成熟度與通用性，CZT 更強調效率與定量。</li>
                    <li><strong>專用系統的價值在任務聚焦：</strong>例如心肌專用 CZT，並非取代通用型相機，而是針對固定臨床需求提高速度與計數效率。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "主要成像平台比較",
            icon: "🧭",
            html: `<div class="protocol-table-wrap">
                <table class="protocol-table">
                    <tbody>
                        <tr>
                            <th scope="row">單光子斷層（SPECT）</th>
                            <td>由加馬攝影機（gamma camera）取得多角度資料後重建成單光子斷層影像，重點是看放射藥物在三維空間中的分布。</td>
                        </tr>
                        <tr>
                            <th scope="row">單光子電腦斷層（SPECT/CT）</th>
                            <td>在功能影像之外加入定位、衰減校正與部分人工假影（artefact）辨識，許多檢查若缺少電腦斷層（CT），判讀信心會下降。</td>
                        </tr>
                        <tr>
                            <th scope="row">正子電腦斷層（PET/CT）</th>
                            <td>將正子核種的代謝或受體訊號與解剖位置、衰減校正及定量整合，是目前腫瘤正子造影的主流配置。</td>
                        </tr>
                        <tr>
                            <th scope="row">正子磁振造影（PET/MR）</th>
                            <td>適合腦部、骨盆、兒科與特定軟組織問題，強項在於正子造影（PET）與磁振造影（MRI）的同步資訊整合。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="reading-note"><strong>單光子斷層（SPECT）與正子造影（PET）是功能成像方法；SPECT/CT、PET/CT、PET/MR 則是把功能訊號放回解剖與定量脈絡中的混合平台。</strong></p>`
        },
        {
            type: "section",
            title: "品質控制（QC）的目的與節奏",
            icon: "🧪",
            html: `<div class="prose">
                <p>品質控制（QC）的核心目的，是確認影像上的異常來自病人本身，而不是來自設備漂移或重建失真。新機驗收固然重要，但真正保護臨床判讀的是<strong>例行 QC</strong>；設備能開機，不等於當天的影像一定可信。</p>
                <p>對混合影像系統而言，只要單光子斷層（SPECT）、正子造影（PET）或電腦斷層（CT）其中一端出現問題，就可能一路影響定位、融合、衰減校正與定量，因此 QC 不能只停留在裝機或年度檢查。</p>
            </div>
            <div class="protocol-table-wrap">
                <table class="protocol-table">
                    <tbody>
                        <tr>
                            <th scope="row">加馬攝影機／SPECT 每日</th>
                            <td>常見重點包括能峰確認與本體／外部均勻度（intrinsic / extrinsic flood uniformity），用來及早抓出 PMT 漂移、晶體問題與均勻度異常。</td>
                        </tr>
                        <tr>
                            <th scope="row">SPECT 每週或定期</th>
                            <td>旋轉中心（COR）、多探頭對位、斷層均勻度與假體（phantom）測試，主要維持三維重建的幾何正確性。</td>
                        </tr>
                        <tr>
                            <th scope="row">CT 端 QC</th>
                            <td>CT 數值準確度、雜訊、均勻性、對位與人工假影（artefact）檢查，會直接影響衰減校正、定位與融合品質。</td>
                        </tr>
                        <tr>
                            <th scope="row">PET / PET-CT 日常 QC</th>
                            <td>每日品質控制（daily QC）、標準化／校正（normalization / calibration）、blank 與探測器穩定度，重點在維持計數穩定與定量可信度。</td>
                        </tr>
                        <tr>
                            <th scope="row">年度或醫學物理師層級測試</th>
                            <td>空間解析度、靈敏度、系統性能與驗收級項目，用來確認設備仍在規格與可接受趨勢內。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="reading-note">品質控制（QC）的意義不在於填表，而在於病人上機前就知道：今天這台設備的數據是否仍值得信任。</p>`
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
            html: `<div class="prose">
<h4>第一階：品質手冊</h4>
<p>回答的是<strong>我們這個系統在管什麼、範圍到哪、流程怎麼互相連動</strong>。它比較像地圖，不是把所有細節逐步重寫一遍。</p>
<h4>第二階：程序書</h4>
<p>回答的是<strong>誰在什麼情境下，依什麼順序與控制點完成一個流程</strong>。例如文件管制、採購驗收、異常通報、內部稽核。</p>
<h4>第三階：作業規範 / 作業指導書</h4>
<p>回答的是<strong>現場到底怎麼做</strong>。步驟、工具、警示、判定基準、照片或流程圖，多半都放在這一層。</p>
<h4>第四階：表單與紀錄</h4>
<p><strong>表單</strong>是空白模板，<strong>紀錄</strong>是填完後留下的證據。很多單位把這兩者混成一件事，之後就很難追責與追溯。</p>
<h4>外來文件</h4>
<p>法規、藥品仿單、原廠說明書、學會指引、供應商規格書，都不是你寫的，但若工作要靠它們，就必須被<strong>辨識、更新與受控</strong>。</p>
<h4>品質政策與品質目標</h4>
<p><strong>品質政策</strong>給方向與承諾；<strong>品質目標</strong>把方向翻成可衡量的改善目標。兩者是系統上方的牽引力，不是裝飾標語。</p>
</div>`
        },
        {
            type: "section",
            title: "核醫科最常失控的文件，不是厚手冊，而是這幾類",
            icon: "⚠️",
            html: `<div class="prose">
<h4>外來文件版次沒更新</h4>
<p>法規、仿單、原廠說明書與學會指引若沒有指定更新責任人，很容易一份新、一份舊，最後現場回答不一致。</p>
<h4>表單欄位和 SOP 用語對不起來</h4>
<p>程序書說要記錄 A，表單卻沒有欄位；或現場一直填 B，之後回頭稽核根本無法追溯。</p>
<h4>修訂後沒有真正導入</h4>
<p>文件改版本身不難，難的是舊版有沒有收回、現場有沒有重訓、表單和公告有沒有一起更新。</p>
<h4>紀錄有填，但保存規則不清楚</h4>
<p>簽名、日期、保存年限、電子檔與紙本版本分別在哪裡，若一開始沒定義，出事時常找不到完整證據。</p>
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
            html: `<div class="prose">
<h4>把品質手冊寫成百科全書</h4>
<p>品質手冊應該幫人看懂範圍、流程與責任，不需要把每一個操作步驟再抄一遍。</p>
<h4>程序書寫理念，不寫控制點</h4>
<p>如果沒有角色、核對點、異常升級與紀錄欄位，文件再漂亮也很難保護現場。</p>
<h4>作業規範太空泛</h4>
<p>新人看完仍不知道從哪一步開始、要用什麼表單、做到什麼程度才算完成，這種規範等於沒有真的落地。</p>
<h4>表單很多，卻沒有追溯邏輯</h4>
<p>只要一份表單填完後不知道存在哪、保存多久、誰能調閱，就很難在異常事件時還原真相。</p>
</div>`
        },
        {
            type: "section",
            title: "第一階：品質手冊要像地圖，不要像重抄標準",
            icon: "📘",
            html: `<div class="prose">
<h4>品質手冊應該寫什麼</h4>
<p>如果你保留品質手冊，它最有價值的內容通常是：<strong>QMS 範圍</strong>、主要服務或作業範圍、流程互動圖、關鍵角色、品質政策、以及「哪些程序書與規範支撐這個系統」。它讓新人與主管能在短時間看懂整個盤面。</p>
<h4>品質手冊不應該做什麼</h4>
<p>不要把 ISO 條文逐句改成「本單位將...」。那種文件看起來正式，實際上最難讀，也最難維護。<strong>品質手冊要說清楚管理範圍與責任，不要替每個作業做逐步教學。</strong></p>
<h4>為什麼 2015 版後仍很多單位保留它</h4>
<p>因為手冊很適合做<strong>新人導入、管理審查、外部溝通</strong>。雖然 ISO 9001:2015 不再把品質手冊列成所有組織都必備的固定格式，但很多部門仍會保留一份較短、較清楚的版本，作為整體地圖。</p>
<h4>核醫科特別適合補什麼</h4>
<p>建議把<strong>熱核室、給藥 / 造影、治療性核醫、污染處理、輻防管理、病人衛教、異常回報</strong>這些核心流程的互動關係畫出來。這比一大段口號更能幫助大家快速對齊。</p>
</div>`
        },
        {
            type: "section",
            title: "第二階：程序書是責任鏈與控制點，不是把所有步驟塞滿",
            icon: "📑",
            html: `<div class="prose">
<h4>先寫目的與範圍</h4>
<p>先說清楚這份程序書要管的是哪一段流程、涵蓋哪些情境、不涵蓋哪些例外。沒有邊界，後面責任與紀錄就會一直漂移。</p>
<h4>再寫角色與權責</h4>
<p>誰發起、誰執行、誰複核、誰核准、異常時要升級給誰，必須寫清楚。<strong>程序書最怕所有人都看得懂，但沒有人知道自己該負責哪一段。</strong></p>
<h4>把控制點放在會出錯的地方</h4>
<p>例如文件版次核對、放行條件、污染事件回報時點、仿單更新後的導入方式。程序書不是流水帳，而是把高風險節點鎖住。</p>
<h4>最後把表單、紀錄與附件接起來</h4>
<p>程序書要明確指出要用哪一張表、紀錄保存多久、修訂由誰維護。否則流程寫得再漂亮，實際上還是落不到可追溯。</p>
</div>
            <p class="reading-note">常見寫法可包含：<strong>文件名稱、目的、適用範圍、職責、名詞定義、作業內容、相關表單 / 紀錄、附件與修訂控制</strong>。不是每份都要一字不差照抄，但這些欄位能幫你避免重要資訊漏掉。</p>`
        },
        {
            type: "section",
            title: "第三、四階：作業規範與表單 / 紀錄，才是現場真正會拿在手上的文件",
            icon: "🛠️",
            html: `<div class="prose">
<h4>作業規範要能讓新人照著做</h4>
<p>第三階文件最重要的是<strong>具體</strong>：先備物品、操作順序、設備設定、關鍵警示、接受標準、異常時怎麼停下來。若一份文件看完後還要再問一次「所以第一步是什麼」，它就還不夠好。</p>
<h4>高風險警示要貼著步驟放</h4>
<p>像是放射性藥品標示核對、病人身分確認、污染處理、治療核種隔離限制，警示應放在對應步驟旁邊，而不是丟到文末附註。<strong>人在忙的時候只會看眼前那一段。</strong></p>
<h4>表單是模板，紀錄是證據</h4>
<p>表單可以設計成點檢、批次、交班或事件回報模板；但真正被稽核、被追溯、被用來釐清責任的，是填寫完成後的紀錄。若只存空白表單，不存完成紀錄，制度等於沒落地。</p>
<h4>表單設計要替現場減少腦力切換</h4>
<p>欄位名稱應與程序書、作業規範使用同一套字詞；順序也要接近現場作業順序。<strong>表單若逼人邊做邊翻譯，大家最後就會改成先做、事後補填。</strong></p>
</div>`
        },
        {
            type: "section",
            title: "外來文件與品質政策 / 品質目標：不是附件，而是兩個支柱",
            icon: "🏛️",
            html: `<div class="prose">
<h4>外來文件怎麼定義</h4>
<p>只要你的工作必須依賴某份外部來源才能做對，它就是外來文件。核醫常見的包括：<strong>法規、主管機關函釋、藥品仿單、原廠 IFU、學會指引、校正證明、供應商規格書</strong>。</p>
<h4>外來文件怎麼管才算真的受控</h4>
<p>至少要回答 4 件事：<strong>哪一些文件屬於必要依據、由誰追更新、現場看得到哪一版、舊版怎麼避免誤用</strong>。只把 PDF 丟在共用硬碟，不算真正管理。</p>
<h4>品質政策是方向，不是口號</h4>
<p>好的品質政策應該簡短、與單位目的相符、能反映顧客 / 病人需求、並承諾符合法規與持續改善。它是用來幫主管做決策的，不只是掛牆上的漂亮句子。</p>
<h4>品質目標要可衡量、可追、有人負責</h4>
<p>品質目標是把政策翻成可執行的改善指標，例如：<strong>文件改版導入完成率、批次紀錄完整率、污染事件通報時效、訓練到位率</strong>。沒有數字、期限、負責人與追蹤方式，就不算真正目標。</p>
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
            html: `<div class="prose">
                <p><strong>01 到貨與驗收</strong> → <strong>02 物料放行</strong> → <strong>03 抽藥／分裝／貼標</strong> → <strong>04 QC 與最終放行</strong> → <strong>05 院內運送與交接</strong> → <strong>06 污染偵測／料帳／廢棄</strong></p>
                <p>Hot lab 最危險的錯誤通常不是單一技術動作，而是<strong>在忙的時候跳過核對、先做再補寫、或把污染與偏差當成「等等再處理」</strong>。</p>
            </div>`
        },
        {
            type: "section",
            title: "收貨與驗收：先把錯擋在門口",
            icon: "📦",
            html: `<div class="prose">
<h4>到貨當下先做的事</h4>
<p>依 <strong>管理辦法第 53 條</strong>，放射性物質到貨時要確認<strong>包裝與包件表面完整性</strong>，並偵測<strong>表面劑量率</strong>與做<strong>擦拭測試</strong>後記錄；豁免量一百倍以下、微量包件或惰性氣體才有例外。</p>
<h4>沒有核對，就不算可以用</h4>
<p>EANM cGRPP 強調每一批 incoming material 都要先對照規格再使用。核種、批號、效期、文件、活度校時與供應商資訊，不該靠印象補記。</p>
<h4>先記錄，後面才有辦法追</h4>
<p>到貨異常、包件污染、文件缺漏、實收與預期不符，都要在當天留下可追溯紀錄，否則後續任何 QC 或事件調查都會斷線。</p>
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
            html: `<div class="prose">
<h4>Mo-99 / Tc-99m generator</h4>
<p>Generator 是核醫熱核室最典型的日常來源。擠牛奶後不是直接拿去打，而是要確認<strong>Mo breakthrough、Al breakthrough</strong>與該批溶離狀態，再決定後續 kit 是否可用。</p>
<h4>最終放行不是看感覺</h4>
<p>EANM cGRPP 要求在最後放行前，必須回看<strong>batch record</strong> 與 <strong>laboratory control record</strong> 是否完整、正確、符合規格。能不能放行，應由有責任的人決定，而不是誰剛好最忙就誰決定。</p>
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
            html: `<div class="prose">

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
            html: `<div class="prose">
<h4>治療適應症與準備方式</h4>
<p>先釐清這次是殘餘甲狀腺消融、輔助治療還是已知病灶治療；TSH 刺激、低碘飲食、近期含碘顯影暴露與藥物停用，都要依醫師計畫逐項核對。</p>
<h4>懷孕與哺乳不能模糊帶過</h4>
<p>I-131 治療前必須明確排除懷孕；哺乳也不是「暫停一天」可以處理，需依治療性核醫規範與醫師指示辦理。</p>
<h4>病人要先拿到書面輻安說明</h4>
<p>治療前就要先講清楚住院、排泄、接觸限制與出院後注意事項，避免病人進房後才第一次聽見限制內容。</p>
<h4>病房與物資先就位</h4>
<p>專用衛浴、可除污動線、污染處理包、廢棄與布巾管理、測量與交班表單，都要在病人進房前備妥。</p>
</div>`
        },
        {
            type: "section",
            title: "病房流程要看成一條完整鏈",
            icon: "🔄",
            html: `<div class="prose">
                <p><strong>01 入院核對與說明</strong> → <strong>02 口服 I-131</strong> → <strong>03 補水與頻繁排尿</strong> → <strong>04 排泄物／污染管理</strong> → <strong>05 測量與出院判定</strong></p>
                <p>2026 年的前瞻性研究顯示，<strong>結構化補水</strong>可加速 I-131 清除、降低膀胱劑量，並讓病人更早達到可出院狀態；這也是為什麼病房裡「多喝水、多排尿」不是客套話。</p>`
        },
        {
            type: "section",
            title: "住院期間，醫護最需要守住的重點",
            icon: "🧤",
            html: `<div class="prose">
<h4>污染來源管理</h4>
<p>I-131 住院最常見的污染來源是<strong>尿液、唾液、汗液與嘔吐物</strong>。真正的重點不是病人「配不配合」，而是工作團隊有沒有先設計好可執行的排泄、清潔、布巾與廢棄流程。</p>
<h4>接觸時間要整批設計</h4>
<p>量體溫、發藥、詢問症狀、環境巡視與衛教盡量整合一次做完，避免醫護反覆短進短出，累積不必要的近距離停留。</p>
<h4>有症狀時先想污染與安全</h4>
<p>噁心、嘔吐、吞嚥困難、病房內灑漏或病人擅自離房，都不能只用一般病房思維處理；先確認是否造成污染，再依部門 spill / decon 流程處置。</p>
<h4>病房交班要交「限制」不是只交病情</h4>
<p>包含今日補水與排尿情況、是否有污染事件、是否已完成書面衛教、何時預計測量評估出院，這些都要交清楚。</p>
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

WomenRadiationPractice: {
    title: "女性、懷孕與醫療輻射實務",
    subtitle: "臨床工作人員於放射科與核醫科評估可能懷孕或已懷孕個案時的原則與流程",
    category: "learning",
    disableImmersiveReading: true,
    disableReaderGuide: true,
    disableConceptDiagram: true,
    content: [
        {
            type: "section",
            title: "基本原則",
            html: `<div class="prose">
            <p>這個主題先抓三件事就好：<strong>先判斷要不要做（正當化）</strong>、<strong>要做就用最少但夠用的輻射（最適化）</strong>、<strong>整個過程要寫清楚（文件化）</strong>。</p>
            <p>現場最常卡住的，不是已經確定懷孕的病人，而是「可能懷孕但還沒確認」的病人。這時不能只靠口訣，也不能一律取消；要看檢查急不急、照射部位、能不能改做超音波或 MRI，再做決定。</p>
            <p>國際指引的重點很一致：不是把所有育齡女性都當成同一種風險，而是分級處理、留下可追蹤紀錄。</p>
            <div class="source-badges">
                <span class="guide-tag acr">ACR Practice Parameter 2018 (amended 2023)</span>
                <span class="guide-tag iaea">IAEA RPoP</span>
                <span class="guide-tag icrp">ICRP 84</span>
            </div>
            </div>`
        },
        {
            type: "section",
            title: "10 日法則與當代指引",
            html: `<div class="prose">
                <p>「10 日法則」是早期做法，重點是盡量避開不明早孕的風險。到現在，主流指引已改成「看風險分級」，不再把它當成所有檢查都要硬套的規則。</p>
                <p>白話來說：不要只看月經第幾天。要同時看檢查部位、劑量可能高不高、病情急不急、能不能改別種檢查。</p>
                <p class="reading-note">結論：10 日法則可以當提醒，但不能當唯一決策標準。</p>
            </div>`
        },
        {
            type: "section",
            title: "依子宮曝露風險進行分級",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>風險分級</th><th>典型情境</th><th>臨床流程重點</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>子宮曝露可忽略</td>
                            <td>頭顱、頸部、胸廓、四肢（非骨盆近端）等檢查</td>
                            <td>完成懷孕問診即可；通常不需因懷孕疑慮而全面延後。</td>
                        </tr>
                        <tr>
                            <td>子宮低曝露</td>
                            <td>子宮在照野邊緣或僅少量散射曝露</td>
                            <td>視病史與臨床問題，決定是否加做驗孕與是否改用替代影像。</td>
                        </tr>
                        <tr>
                            <td>子宮可能較高曝露</td>
                            <td>骨盆 / 下腹部 CT、介入程序、治療性核醫等</td>
                            <td>需升級到醫師層級確認；先評估替代方案。若不得不做，必須記錄正當化與風險告知。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="prose">
                <p>這個分級是給現場快速分流用，不是要第一線人員自己算胎兒劑量。低風險就照流程問診；中高風險就升級驗孕與醫師覆核。</p>
                <p>這樣做可同時避免兩件事：該做的檢查被拖到，或高風險檢查被太快放行。</p>
            </div>`
        },
        {
            type: "section",
            title: "常見核醫檢查落在哪一級（排程版）",
            html: `<div class="prose">
                <p>以下為「排程與放行」用途的實務分級，目的是決定是否需當日驗孕、醫師覆核與是否先改做其他檢查；不是取代個別劑量計算。</p>
            </div>
            <div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>分級</th><th>常見核醫檢查</th><th>第一線建議作法</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>A 級<br>低風險、可在正當化下執行</td>
                            <td>Tc-99m 骨掃描、DTPA/MAG3、DMSA、HIDA、肺灌流（非治療性）</td>
                            <td>完成懷孕問診；若有「月經過期或受孕可能」則升級醫師確認是否需先驗孕。</td>
                        </tr>
                        <tr>
                            <td>B 級<br>中風險、建議先驗孕或先覆核</td>
                            <td>FDG PET/CT、Ga-67、Tl-201、In-111/WBC 等較高活度或較高全身劑量檢查</td>
                            <td>優先做當日驗孕或醫師覆核；確認檢查急迫性與替代方案，再決定是否執行。</td>
                        </tr>
                        <tr>
                            <td>C 級<br>高風險或原則禁忌</td>
                            <td>I-131 診斷高活度掃描與 I-131 治療、其他治療性核醫程序</td>
                            <td>未排除懷孕不得放行。需醫師與部門流程重新評估，必要時改期或改策略。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="prose">
                <p class="reading-note">說明：核醫即使不是照骨盆，若已懷孕仍可能有胎兒受照，因此分級核心是「藥物與活度」而不只是「照哪個部位」。</p>
            </div>`
        },
        {
            type: "section",
            title: "可能懷孕但尚未確認時的實務流程",
            html: `<div class="prose">
                <p>排檢時先問四件事：有沒有已知懷孕、月經時間、最近有沒有可能受孕、是否哺乳。接著看這次檢查是低風險還是中高風險。</p>
                <p>若是中高風險檢查，通常要當日驗孕或升級醫師判斷，不能只靠櫃台或技術人員口頭放行。若可用超音波或 MRI 回答問題，優先改做；若病況急、不能延後，就在記錄完整前提下執行最適化流程。</p>
                <h4>常見情境</h4>
                <p><strong>情境一：</strong>病人接受胸部 X 光或頭部 CT，表示月經延遲但未確認懷孕。此類程序多半不需要因懷孕疑慮全面取消，但仍應完成問診與必要記錄。</p>
                <p><strong>情境二：</strong>病人預定接受骨盆 CT，且近期有受孕可能。此時應依部門流程升級處理，必要時先驗孕，再決定是否延期、改做其他影像，或因急迫性而於最適化條件下執行。</p>
            </div>`
        },
        {
            type: "section",
            title: "已知懷孕時的影像選擇、風險溝通與劑量估算",
            html: `<div class="prose">
                <p>已知懷孕時，先確認能不能改做超音波或 MRI。若病況急、影像結果會立刻影響治療，則不應因懷孕而延誤必要檢查。</p>
                <p>真的要做含游離輻射檢查時，重點是縮小範圍、減少不必要相位、參數依臨床問題調整，並把理由與說明寫清楚。對病人溝通時，不要說「完全沒風險」或「一定有害」，要用中立說法。</p>
                <h4>輻防師實務：胎兒劑量怎麼算</h4>
                <ul>
                    <li><strong>放射科 CT/介入：</strong>先收集 DICOM 劑量報告（CTDIvol、DLP、掃描範圍、相位數、kV、mA、螺距），再以專業軟體或標準模型估算子宮/胎兒吸收劑量；不可只用單一 DLP 乘固定係數當最終答案。</li>
                    <li><strong>核醫診斷：</strong>以「胎兒估算劑量（mGy） = 實際注射活度（MBq） × 妊娠期對應胎兒劑量係數（mGy/MBq）」為主框架，必要時加上膀胱停留與排尿條件修正；係數來源須註記（ICRP/學會資料庫）。</li>
                    <li><strong>核醫治療：</strong>原則先回到是否應執行。若涉及意外曝露，需由醫療物理與核醫醫師共同估算並形成正式書面報告。</li>
                    <li><strong>最小可交付清單：</strong>檢查日期、妊娠週數（或不確定）、檢查類型、參數來源、計算模型版本、估算值與不確定性、風險溝通紀錄。</li>
                </ul>
                <p class="reading-note">ACR 與 IAEA 均強調：急重症情境中，影像結果若會立即改變治療，不應因懷孕評估流程而導致不當延誤；但過程中的正當化、最適化與紀錄義務仍然存在。</p>
            </div>`
        },
        {
            type: "section",
            title: "核醫檢查與治療性核醫應分開處理",
            html: `<div class="prose">
                <p>核醫不能一概而論。診斷檢查和治療檢查要分開看，不能用同一張 SOP 套所有藥物。</p>
                <p>治療性核醫的風險層級更高。以 I-131 為例，懷孕與哺乳評估必須在治療前完成，不能等到治療當天才口頭確認。</p>
                <p>實務上，診斷核醫與治療核醫在審核強度、醫師覆核與病人告知深度，都應該不同。</p>
            </div>`
        },
        {
            type: "section",
            title: "文件化與部門 SOP",
            html: `<div class="prose">
                <p>臨床工作人員最容易忽略的並非單一判斷，而是紀錄不完整。無論最後決定是照常執行、延期、改做其他影像，或升級到醫師重新評估，都應留下可追溯紀錄，包括：問診結果、驗孕結果、程序風險分級、替代方案評估、風險溝通重點、最終決策者與決策時間。</p>
                <p>若部門希望降低現場爭議，最有效的方式通常不是再新增更多口訣，而是把上述流程寫成明確 SOP：哪些程序屬於高子宮曝露、哪些情形需當日驗孕、哪些情形必須醫師覆核、哪些核醫治療程序在未排除懷孕前不得進入給藥或治療程序。這種制度化做法，對第一線工作人員的幫助通常大於零散提醒。</p>
                <h4>可直接貼用 SOP 範本（門診/排檢版）</h4>
            </div>
            <div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>欄位</th><th>範本內容</th></tr></thead>
                    <tbody>
                        <tr><td>SOP 名稱</td><td>育齡女性於核醫與放射檢查之懷孕評估與放行流程</td></tr>
                        <tr><td>目的</td><td>降低胎兒不必要曝露，並避免不當延誤必要醫療。</td></tr>
                        <tr><td>適用範圍</td><td>所有可能使用游離輻射之診斷或治療程序。</td></tr>
                        <tr><td>角色分工</td><td>櫃台/護理：初篩問診；放射師/技術師：程序確認；醫師：最終正當化決策；輻防師/醫療物理：劑量估算與文件審核。</td></tr>
                        <tr><td>初篩問句</td><td>是否已知懷孕、末次月經、近期是否可能受孕、是否哺乳。</td></tr>
                        <tr><td>升級條件</td><td>月經過期或受孕可能 + 中高風險程序；任何治療性核醫；任何需多相位或大範圍重掃程序。</td></tr>
                        <tr><td>必填紀錄</td><td>問診結果、驗孕結果、風險分級、替代方案評估、告知摘要、最終決策者與時間戳記。</td></tr>
                        <tr><td>禁止事項</td><td>未排除懷孕即執行 I-131 治療；無醫師覆核即執行中高風險程序；以口頭代替書面紀錄。</td></tr>
                        <tr><td>品質指標</td><td>1. 中高風險程序驗孕完成率。2. 懷孕評估紀錄完整率。3. 不必要重掃率與延遲率。</td></tr>
                    </tbody>
                </table>
            </div>`
        },
        {
            type: "section",
            title: "情境模擬：當下醫療人員怎麼做",
            html: `<div class="prose">
                <h4>情境 A：預約 FDG PET/CT，病人表示月經晚 10 天</h4>
                <ul>
                    <li>櫃台/護理：標記為 B 級，立即啟動當日驗孕或醫師覆核，不直接取消也不直接放行。</li>
                    <li>技術師：先暫停注射流程，回報主治醫師確認檢查急迫性與替代方案。</li>
                    <li>醫師：若非急重症，可改期或改檢查；若急迫且必要，記錄正當化理由並採最適化參數。</li>
                    <li>輻防師：補齊劑量文件欄位，必要時提供估算流程與後續追蹤建議。</li>
                </ul>
                <h4>情境 B：急診疑似肺栓塞，已知懷孕</h4>
                <ul>
                    <li>團隊先確認替代策略是否足以回答臨床問題；若不足，需立即執行必要影像，不可因流程遲滯。</li>
                    <li>執行時採最適化：縮小範圍、減少不必要相位、紀錄參數。</li>
                    <li>檢查後完成風險溝通與書面紀錄，必要時轉介產科與醫療物理追蹤。</li>
                </ul>
                <h4>情境 C：I-131 治療當日，病人懷孕狀態不明</h4>
                <ul>
                    <li>立即停止治療流程，先排除懷孕，不得先給藥再補文件。</li>
                    <li>若無法當日排除，應改期並完成醫師重評估與病人說明。</li>
                    <li>此情境屬高風險事件，需由科內主管與輻防機制共同追蹤。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            html: `<ol class="reference-list">
                <li>American College of Radiology. <em>ACR Practice Parameter for Imaging Pregnant or Potentially Pregnant Adolescents and Women with Ionizing Radiation</em>. 2018; amended 2023.</li>
                <li>International Atomic Energy Agency. <em>Radiation Protection of Patients (RPoP): Pregnant Women in Radiology</em>.</li>
                <li>International Atomic Energy Agency. <em>Radiation Protection of Patients (RPoP): Pregnant Women in Nuclear Medicine</em>.</li>
                <li>International Commission on Radiological Protection. <em>Pregnancy and Medical Radiation</em>. ICRP Publication 84.</li>
            </ol>
            <p class="reading-note">查核註記：本節內容已依 2026 年 5 月可取得之 ACR/IAEA/ICRP 權威文件核對；涉及個案劑量推估時，仍應以院內實測參數與醫療物理正式報告為準。</p>`
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
            html: `<div class="prose">
<h4>📦 單位自行盤點</h4>
<p><strong>3 月 / 9 月</strong></p>
<h4>🏥 聯合藥劑科盤點</h4>
<p><strong>6 月 / 12 月</strong></p>
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
    subtitle: "PETOncology（對應 PET）— 腫瘤分期、療效與復發評估",
    category: "pet",
    readerGuideMode: "article",
    readerGuideArticle: [
        "FDG PET/CT 的核心不是只看亮不亮，而是把代謝訊號、CT 解剖位置與臨床時序整合在同一張判讀地圖上。",
        "同一病人追蹤時，前置條件（禁食、血糖、注射到收像時間、重建設定）的一致性，常比單次 SUV 數值更重要。",
        "本單元以腫瘤 PET 為主軸；若需細分癌種判讀門檻與治療反應標準，仍需依院內 protocol 與專科會議流程補證。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "前置評估", value: "禁食/血糖/藥物與治療時序確認" },
            { label: "注射與吸收", value: "FDG 注射後安靜休息約 45–90 分鐘" },
            { label: "影像採集", value: "全身 PET/CT（必要時延遲或局部追加）" }
        ],
        article: [
            "前置評估先確認禁食狀態、血糖控制、近期胰島素或高糖輸液、近期治療與感染發炎史；不合格條件要先校正，避免做出不可判讀影像。",
            "注射後進入低刺激、保暖且減少肌肉活動的等待期，以降低肌肉與棕色脂肪干擾。必要時依院內作業使用保暖或藥物策略。",
            "收像通常含低劑量 CT 校正與 PET 代謝影像；是否加做診斷 CT、延遲相或特定體位，應在給藥前就先決定。"
        ],
        note: "精確等待時間、床位數與重建參數需依機型與院內 protocol 核對；需要 Codex 補證據。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位與適用場景",
            icon: "📌",
            html: `<div class="prose">
                <p>FDG PET/CT 以葡萄糖代謝活性反映腫瘤生物行為，臨床價值在於同時處理全身分布、病灶活性與解剖定位。</p>
                <p>對多數實體腫瘤與淋巴系統腫瘤，PET/CT 常用於初始分期、治療反應評估、疑似復發再分期，以及不明病灶的問題導向釐清。若臨床問題偏向微小病灶結構細節，仍需與高解析度 CT/MRI 互補。</p>
            </div>`
        },
        {
            type: "section",
            title: "核心適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <p><strong>核心適應症：</strong>腫瘤初始分期、治療反應評估、復發搜尋、與不明原發癌評估。實務上常見於肺癌、頭頸癌、淋巴瘤、黑色素瘤與多癌種追蹤流程。</p>
                <p><strong>核心限制：</strong>FDG 並非腫瘤專一訊號；感染、發炎、術後修復、放射治療變化都可造成高攝取。低代謝或體積很小病灶可能呈假陰性；以單一 SUV 門檻做良惡性二分也不可靠。</p>
                <p>癌種特異性的敏感度、特異度與建議時序需按專科指引分開處理；需要 Codex 補證據。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人準備",
            icon: "🧑‍⚕️",
            html: `<div class="prose">
                <ul>
                    <li>檢查前禁食、血糖評估與糖尿病用藥時序調整，應在預約階段先完成。</li>
                    <li>注射後維持安靜、保暖、減少說話與咀嚼，避免肌肉與棕色脂肪攝取上升。</li>
                    <li>近期化療、放療、免疫治療、G-CSF、感染與手術史需主動記錄，供判讀時辨識治療效應與發炎干擾。</li>
                    <li>實際禁食時數與血糖門檻請依院內 protocol；需要 Codex 補證據。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "放射藥物與劑量",
            icon: "💉",
            html: `<div class="prose">
                <p>腫瘤 PET 常用放射藥物為 <strong>F-18 FDG</strong>，通常以體重或固定範圍設計活度，再配合 bed time 與重建條件確保可判讀影像品質。高 BMI 病人常需調整活度或延長採集時間，兒科流程不可直接套成人參數。</p>
                <p>不同掃描器與重建演算法下，活度策略可有明顯差異；本頁僅保留原則，不寫死單一 mCi 值。精確院內數值與注射殘餘量控制門檻，<strong>需要 Codex 補證據</strong>。</p>
            </div>`
        },
        {
            type: "section",
            title: "攝影流程與重建/處理",
            icon: "🖥️",
            html: `<div class="prose">
                <p>標準流程為注射後等待（uptake phase）再進行全身 PET/CT。CT 可能是 attenuation correction 用的低劑量 CT，也可能合併診斷 CT；兩者目的與劑量管理不同，報告需清楚區分。</p>
                <p>影像處理至少包含衰減校正、散射校正、重建與必要的融合檢視。若要比較前後次 SUV，應固定注射到收像時間、重建版本與 ROI 方法；否則僅能做趨勢參考，不宜過度量化結論。</p>
                <p>TOF、PSF、filter 與 matrix 等參數標準化細節需依設備文件補齊；需要 Codex 補證據。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <ol>
                    <li>先看影像品質：注射外滲、體動、血糖與生理性攝取是否足以干擾判讀。</li>
                    <li>再做分區評估：原發灶、淋巴結、遠端轉移，並對照 CT 形態與臨床時序。</li>
                    <li>量化分析以同流程比較為主：描述 SUV 或 SUL 變化時需註明可比性條件。</li>
                    <li>結論要回答臨床問題：是否進展、是否治療反應、是否需追加局部影像或病理證實。</li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "pitfalls（含假陽性/假陰性）",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>假陽性：</strong>感染、放療後發炎、肉芽組織、棕色脂肪、肌肉活動、術後修復反應。</li>
                    <li><strong>假陰性：</strong>高血糖競爭抑制、低代謝腫瘤亞型、小病灶部分容積效應、治療後短期代謝改變。</li>
                    <li><strong>量化陷阱：</strong>不同設備或重建版本導致 SUV 不可直接橫向比較。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "報告建議",
            icon: "📝",
            html: `<div class="prose">
                <p>建議報告結構至少包含：檢查適應症與時間點、影像品質評估、主要陽性病灶分區描述（含可量化值與可比性說明）、與前次比較、臨床意義結論與後續建議。</p>
                <p>若存在可能干擾判讀的生理或技術因素，應在 impression 直接註明，避免臨床端把不確定訊號誤當進展。</p>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ul>
                    <li>SNMMI / EANM PET 腫瘤影像與標準化判讀相關指引（版本與條文待對位，需 Codex 補證據）。</li>
                    <li>PERCIST 與療效評估方法學文獻（條目與年份需 Codex 補證據）。</li>
                    <li>本院或專科共識流程文件（若需引用正式版次，需 Codex 補證據）。</li>
                </ul>
            </div>`
        }
    ]
},

PETCTRadiation: {
    title: "PET/CT 輻射探討",
    subtitle: "FDG PET/CT 的 CT 部分、劑量報告判讀、重複全身掃描必要性與個案輻射估算",
    category: "pet",
    disableImmersiveReading: true,
    disableReaderGuide: true,
    disableConceptDiagram: true,
    content: [
        {
            type: "section",
            title: "問題設定與閱讀方式",
            html: `<div class="prose">
            <p>FDG PET/CT 的輻射來源有兩個：FDG 藥物本身，以及 CT。看劑量時要分開看，才不會把問題混在一起。</p>
            <p>PET/CT 裡的 CT 可能只是低劑量定位，也可能是正式診斷 CT。兩者目的不同、劑量也不同，所以不能用同一標準解讀。</p>
            <p>本頁用同日三次 PET/CT 的 SR 案例，示範怎麼讀 CT 劑量，並說明延遲影像是否需要再做全身 CT。</p>
            <div class="source-badges">
                <span class="guide-tag eanm">EANM 2025</span>
                <span class="guide-tag snmmi">ACR / SNMMI / ACNM / SPR</span>
                <span class="guide-tag snmmi">ADS / ANZSNM 2024</span>
                <span class="guide-tag local">Siemens 劑量報告</span>
            </div>
            </div>`
        },
        {
            type: "section",
            title: "判讀劑量報告時可以說與不能說的事",
            html: `<div class="prose">
                <p>劑量報告可以直接看的重點有：CTDIvol、DLP、掃描長度、照射事件數、定位片與螺旋 CT。</p>
                <p>但它不能單獨回答「這次檢查是不是安全」或「病人個人風險到底多高」。因為有效劑量是給流程比較和溝通用，不是個人精算值。</p>
                <p>所以建議做法是：先看原始數字，再補充 mSv 粗估，並清楚標註是估算值。</p>
            </div>`
        },
        {
            type: "section",
            title: "CT 在 PET/CT 中的臨床角色",
            html: `<div class="prose">
                <p>ACR–ACNM–SNMMI–SPR 實務參數指出，PET/CT 內的 CT 可作為衰減校正與解剖定位，也可作為診斷 CT。若只是衰減校正與定位，通常可採低劑量 CT；若臨床要求診斷 CT，則應依檢查部位選擇適當參數，必要時搭配口服或靜脈顯影劑。</p>
                <p>這個區分很重要。若本來只需定位卻沿用診斷 CT 條件，劑量會上升；反之，若臨床問題需要診斷 CT，卻只用定位 CT，也可能影響判讀。因此，討論 PET/CT 劑量前，應先問：這一段 CT 到底要回答什麼臨床問題？</p>
                <p>對延遲掃描而言，關鍵問題不是「是否做延遲 PET」，而是「延遲段是否需要再次做全身 CT」。這兩件事必須分開討論。</p>
            </div>`
        },
        {
            type: "section",
            title: "國際最新建議：FDG PET/CT 何時需要延遲影像",
            html: `<div class="prose">
                <p>依 EANM 2025 與 ACR/ACNM/SNMMI/SPR 程序文件，重點不是「全面加做延遲影像」，而是<strong>問題導向、選擇性加做</strong>。也就是先回答臨床問題，再決定是否增加影像段次。</p>
                <h4>目前主流做法</h4>
                <ul>
                    <li><strong>不建議把延遲全身 PET/CT 做成例行流程：</strong>一般腫瘤分期與追蹤，多數情況以標準時點全身 FDG PET/CT 即可。</li>
                    <li><strong>可考慮延遲影像的情境：</strong>早期影像出現邊界不清、良惡性難分、尿路活性干擾骨盆判讀，或需要觀察可疑病灶隨時間的變化。</li>
                    <li><strong>若只要釐清局部問題：</strong>優先考慮局部延遲 PET，必要時再加局部低劑量 CT，不建議直接重做延遲全身 CT。</li>
                </ul>
                <h4>為什麼要這樣做</h4>
                <ul>
                    <li><strong>可能的好處：</strong>延遲影像在特定個案可提升病灶對比，或協助區分部分非特異性攝取。</li>
                    <li><strong>代價與風險：</strong>流程時間延長、病人移動造成比對困難，若重做全身 CT 會明顯增加可避免的 X 光劑量。</li>
                    <li><strong>核心原則：</strong>延遲影像可用，但要有明確臨床問題，且影像範圍與 CT 強度要最小化。</li>
                </ul>
                <p class="reading-note">實務上可先在醫囑或檢查單明確寫出「延遲影像要回答的問題」。若問題只在單一區域，就不應例行擴大成全身延遲 CT。</p>
            </div>`
        },
        {
            type: "section",
            title: "劑量報告的主要指標",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr><th>指標</th><th>主要意義</th><th>判讀時的注意事項</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>DLP</td><td>反映整段掃描的累積輸出，受 CTDIvol 與掃描長度共同影響。</td><td>最適合用於研究分布、分段掃描比較與重複 CT 偵測，但不能單獨代表個別風險。</td></tr>
                        <tr><td>CTDIvol</td><td>反映該段 CT 的局部劑量強度。</td><td>可用於比較檢查條件強度，但若掃描長度很長，總 DLP 仍可顯著上升。</td></tr>
                        <tr><td>掃描長度 / 照射範圍</td><td>反映實際照射範圍。</td><td>對 PET/CT 特別重要，因為範圍過長、分段與重疊常是累積 DLP 上升主因。</td></tr>
                        <tr><td>照射事件數</td><td>反映定位片、螺旋 CT、追加 CT 等事件數量。</td><td>事件數增加通常比單純 CTDIvol 增加更容易被忽略，卻常直接影響總 DLP。</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="prose">
                <p>在 PET/CT 的 CT 劑量檢視中，DLP、CTDIvol、掃描長度與照射事件數是最基本的原始指標。若只讀到「總 DLP」而未拆開事件內容，常會忽略定位片只占很小比例，真正負擔多半來自大範圍螺旋 CT。</p>
                <p>同樣地，若只看到 CTDIvol 在一般範圍內，也不能據此認定總劑量負擔不高；因為掃描長度、第二段掃描或延遲追加 CT，可能使 DLP 顯著增加。</p>
            </div>`
        },
        {
            type: "section",
            title: "臨床流程中常見的 CT dose 增加情境",
            html: `<div class="prose">
                <p>第一類常見情境是真全身或上下半身分段掃描。這類流程不一定表示單段 CTDIvol 特別高，但只要多了一段 CT、第二段範圍過長，或兩段之間存在重疊，累積 DLP 就會快速上升。臨床上最值得追問的是：第二段是否一定需要再做 CT，以及範圍是否已限制在必要區域。</p>
                <p>第二類常見情境是延遲掃描。追加延遲 PET 不自動等於必須再做全範圍 CT；若臨床目的只是釐清局部病灶，應評估延遲段單做 PET 或局部低劑量 CT 是否足夠。將延遲掃描例行化為重複全身 CT，常會成為可避免的劑量來源。</p>
                <p>第三類情境是診斷 CT 與定位 CT 混用。若部門沒有明確區分衰減校正/定位與診斷 CT，容易讓所有病人都使用較高強度條件；相反地，若臨床問題需要診斷 CT，卻只用定位 CT，也會使臨床資訊不足。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人前處理與 uptake consistency 對 CT review 的意義",
            html: `<div class="prose">
                <p>雖然本頁主題是 CT，但 PET/CT 的品質改善不能只看 CT 劑量。ACR 2021、ADS/ANZSNM 2024 與近期 FDG 指引都強調，前處理失控會直接影響 FDG 分布，進而改變臨床是否需要追加影像。若部門在禁食、血糖、胰島素時間、保暖、攝取等待時間、活動控制與排尿上沒有一致流程，後續發生重掃或問題釐清 CT 的機率會提高。</p>
                <p>例如使用胰島素的病人若安排不當，可能因肌肉攝取升高而降低病灶對比；病人在攝取等待期走動、說話或受寒，也可能造成非預期攝取；若掃描前未排尿，膀胱與輸尿管活性可能干擾判讀。這些問題看似屬於 PET 端，實際上會反過來影響是否追加 CT。</p>
                <p class="reading-note">臨床上真正可執行的作法，是把運動限制、禁食、血糖、胰島素、等待時間、排尿與延遲掃描流程寫入科內規範，而不是只在事後分析劑量報告。</p>
            </div>`
        },
        {
            type: "section",
            title: "南部醫學中心個案（SR）三次 PET/CT：完整輻射拆解",
            html: `<div class="prose">
                <p>使用某醫學中心某案例FDG PET/CT SR 檔作為示範個案。該組資料顯示同一天完成三次 PET/CT：早期大腿段、早期全身段、延遲全身段。每一段 CT 都包含 1 次定位片與 1 次螺旋 CT，因此同日共 6 個 CT 照射事件。</p>
                <p class="reading-note">CT 有效劑量估算公式：<strong>估算有效劑量（mSv）= DLP（mGy·cm）× 換算係數 k（mSv / mGy·cm）</strong>。本頁係數採文獻常用範圍：頭到骨盆/軀幹段以 0.012 至 0.015；下肢段以 0.0002 粗估。此值用於臨床溝通與流程比較，不等於個人精確器官風險。</p>
            </div>
            <div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>檢查段次</th><th>CT 事件數</th><th>CT 總 DLP</th><th>螺旋 CTDIvol / DLP</th><th>CT 估算有效劑量</th><th>重點</th></tr></thead>
                    <tbody>
                        <tr><td>早期大腿段</td><td>2（定位片 + 螺旋 CT）</td><td>380.69 mGy·cm</td><td>3.67 mGy / 368.39 mGy·cm</td><td>約 0.08 mSv</td><td>以下肢段為主，DLP 雖不低，但有效劑量貢獻相對小。</td></tr>
                        <tr><td>早期全身段</td><td>2（定位片 + 螺旋 CT）</td><td>659.78 mGy·cm</td><td>5.93 mGy / 647.48 mGy·cm</td><td>約 7.9 至 9.9 mSv</td><td>第一次頭到骨盆/軀幹為主的 CT，是本次主要 CT 劑量來源之一。</td></tr>
                        <tr><td>延遲全身段</td><td>2（定位片 + 螺旋 CT）</td><td>780.11 mGy·cm</td><td>7.03 mGy / 767.81 mGy·cm</td><td>約 9.4 至 11.7 mSv</td><td>延遲段再次做全身 CT，成為最需要檢討正當化的部分。</td></tr>
                        <tr><td><strong>同日 CT 累積</strong></td><td><strong>6 事件</strong></td><td><strong>1820.58 mGy·cm</strong></td><td><strong>螺旋 DLP 合計 1783.68 mGy·cm</strong></td><td><strong>約 17.4 至 21.7 mSv</strong></td><td>CT 劑量主體來自兩次全身螺旋 CT；定位片貢獻很小。</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="prose">
                <p>同份 PET SR 顯示 FDG 注射活度為 417.73 MBq，SR 內建 FDG 有效劑量約 7.94 mSv。若加上 CT 粗估，本次同日 PET/CT 總有效劑量約為 25.3 至 29.6 mSv。</p>
                <p>這個數字主要用在流程比較，不是用來判定單一病人的確切風險。就品質改善來看，若延遲全身 CT 沒有明確臨床理由，改成局部低劑量 CT 或只做延遲 PET，通常更合理。</p>
                <h4>估算可信度與限制</h4>
                <ul>
                    <li><strong>可信度：</strong>DLP 轉換為有效劑量是國際期刊與實務教學常用方法，適合比較流程前後、評估重複掃描影響。</li>
                    <li><strong>限制：</strong>有效劑量屬族群平均概念，受體型、掃描範圍、機型與重建條件影響，不可直接代表個人確定風險。</li>
                    <li><strong>正式需求：</strong>若要做個人化風險溝通或醫療決策，仍需醫療物理以原始參數與模型另行估算。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "是否需要重複全身（至少頭到骨盆）CT？嚴格判準",
            html: `<div class="prose">
                <p>依現行權威文件，PET/CT 的 CT 可以是定位衰減校正，也可以是診斷 CT。若早期全身 CT 已可回答臨床問題，延遲段是否重做全身 CT，建議至少符合下列一項條件：</p>
                <ul>
                    <li><strong>條件 1：</strong>延遲影像的臨床問題涉及多區域重新定位，且單做 PET 或局部低劑量 CT 無法回答。</li>
                    <li><strong>條件 2：</strong>前次 CT 品質不足以支撐解剖判讀（例如嚴重運動、金屬假影、範圍漏掃）。</li>
                    <li><strong>條件 3：</strong>醫師明確要求延遲期仍需診斷級 CT，而非僅病灶確認。</li>
                </ul>
                <p>若以上條件不成立，較一致的最適化方向是：<strong>延遲段單做 PET</strong> 或 <strong>延遲局部低劑量 CT</strong>，而非例行重做全身 CT。這是降低不必要 CT 累積劑量最直接的方法。</p>
                <p class="reading-note">本個案在同日已做早期全身 CT 後，又再做延遲全身 CT。若病歷沒有明確理由，應列為流程檢討項目。</p>
            </div>`
        },
        {
            type: "section",
            title: "流程優化的起點",
            html: `<div class="data-table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr><th>情境</th><th>優化方向</th><th>想解決的問題</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CT 只做衰減校正 / 定位</td>
                            <td>與診斷 CT 分流，改用極低劑量或低劑量條件</td>
                            <td>避免非必要地把定位 CT 做成接近診斷 CT</td>
                        </tr>
                        <tr>
                            <td>上下半身分段掃描</td>
                            <td>重新檢視第二段 CT 是否必要、能否降低管電流、縮短範圍、避免重疊</td>
                            <td>控制 DLP 疊加與重複照射</td>
                        </tr>
                        <tr>
                            <td>延遲 PET/CT</td>
                            <td>優先考慮延遲段單做 PET 或局部低劑量 CT</td>
                            <td>避免為局部問題釐清而例行重做全身 CT</td>
                        </tr>
                        <tr>
                            <td>高劑量離群個案</td>
                            <td>建立每月儀表板：DLP 中位數、第 95 百分位、重複 CT 比率</td>
                            <td>把異常從單一個案變成可追蹤的系統指標</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="prose">
                <p>從品質改善角度來看，最有價值的起點通常不是重新估算每位病人的總 mSv，而是確認衰減校正 CT 與診斷 CT 是否已清楚分流、第二段 CT 是否真的必要、延遲掃描是否能以局部或單做 PET 回答問題，以及是否已建立可持續監測的儀表板。這些措施對降低不必要 CT 曝露的效果，通常比事後爭論單一換算係數更直接。</p>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            html: `<ol class="reference-list">
                <li>Boellaard R, Delgado-Bolton R, Oyen WJG, et al. <em>[18F]FDG PET/CT: EANM procedure guidelines for tumour imaging, version 3.0</em>. EANM Journal. 2025. DOI: 10.1016/j.eanmj.2025.100006.</li>
                <li>American College of Radiology; American College of Nuclear Medicine; Society of Nuclear Medicine and Molecular Imaging; Society for Pediatric Radiology. <em>ACR–ACNM–SNMMI–SPR Practice Parameter for Performing FDG-PET/CT in Oncology</em>. Revised 2021.</li>
                <li>Australian Diabetes Society; Australian and New Zealand Society of Nuclear Medicine. <em>Joint ADS/ANZSNM Guideline for FDG PET/CT Imaging in Patients with Type 1 and Type 2 Diabetes</em>. 1 August 2024.</li>
                <li>Varrone A, et al. <em>SNMMI Procedure Standard/EANM Practice Guideline for Brain [18F]FDG PET Imaging, version 2.0</em>. 2024. DOI: 10.2967/jnumed.124.268754.</li>
                <li>Huda W, et al. <em>Converting Dose-Length Product to Effective Dose at CT</em>. Radiology. 2008;248:995-1003.</li>
                <li>Saltybaeva N, et al. <em>Estimates of Effective Dose for CT Scans of the Lower Extremities</em>. Radiology. 2014;273:153-159.</li>
            </ol>
            <p class="reading-note">查核註記：本節已依 2026 年 5 月可取得文獻更新。對「是否重做延遲全身 CT」的判斷，主依 EANM 2025 與 ACR/SNMMI 程序框架中的 CT 用途分流與正當化原則。</p>`
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

MPI: {
    title: "心肌灌流（Tl-201 / Tc-99m Sestamibi）",
    subtitle: "Myocardial Perfusion Imaging（MPI）— 臨床負荷路徑、影像判讀與偽影排除指引",
    category: "cardiac",
    readerGuideMode: "article",
    readerGuideArticle: [
        "本指引整合 Thallium-201 與 Technetium-99m 心肌灌流掃描之臨床實務，依據『檢前安全把關 -> 負荷給藥與急救 -> 影像生成 -> 標準切面判讀與偽影排除 -> 報告落地』的臨床決策工作流進行一體化編寫。",
        "自適應排版優化：全面採用層次化的臨床敘事段落與重點資訊卡片，確保在行動裝置與桌面端均能獲得 100% 垂直滑動、清晰無瑕的閱讀體驗。",
        "國際指南佐證：全文嚴格依據 ASNC 2018 SPECT MPI 指引，交代示蹤劑劑量標準與負荷流程。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "1. 檢前防線", value: "咖啡因排除、禁忌症篩檢、停藥管理" },
            { label: "2. 負荷給藥", value: "運動或藥物 Stress 負荷 + 峰值 tracer 注射 (Aminophylline 逆轉處置)" },
            { label: "3. 影像判讀", value: "標準三切面 (SA/VLA/HLA) 對照、真實文獻 pitfalls NAC/AC 比對" }
        ],
        article: [
            "血管擴張劑負荷檢查的成敗在於咖啡因嚴格排除。檢前 12–24h 任何咖啡因攝取均會競爭性阻斷 A2A 受體，使血管擴張反應鈍化，造成嚴重的假陰性影像。",
            "判讀時必須同時比對未經校正 (NAC) 與衰減校正 (AC) 的標準三切面影像，並結合局部心肌收縮增厚功能，方能精確區分真正缺血與生理性衰減偽影。",
            "結構化報告應完整交代負荷過程、Perfusion 定量評估 (SSS/SRS/SDS)、左心室 Gated 功能與 TID (暫時性心室擴張) 等關鍵高風險指標。"
        ],
        note: "本單元基準符合 ASNC / EANM 最新共識，臨床應用應配合院內設備與藥品仿單執行。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：回答缺血可逆性與整體風險分層</h4>
            <p>心肌灌流影像 (MPI) 的核心價值在於評估冠狀動脈疾病 (CAD) 的生理功能性影響，藉由對比 <strong>Stress (壓力相)</strong> 與 <strong>Rest (靜息相)</strong> 的心肌血流灌注差異，精確判定：<strong>可逆性缺損</strong>（心肌缺血，重建手術受益高）、<strong>固定性缺損</strong>（陳舊性梗塞或纖維化疤痕）或兩者並存的<strong>混合性缺損</strong>，為是否進行侵入性心導管及重建手術提供關鍵依據。</p>`
        },
        {
            type: "section",
            title: "一、 負荷前安全防線與必做安全閘門 (血管擴張劑 vs 擬交感神經劑對照)",
            icon: "🚨",
            html: `<div class="prose">
                <p>負荷 (Stress) 的有效性直接決定了影像的診斷價值。在排檢與給藥前，必須嚴格執行以下三大安全防線，防止<strong>假陰性（看似正常但實為無效負荷的假影像）</strong>與<strong>假陽性（由於測試選擇錯誤造成的假病灶）</strong>發生：</p>
                
                <div class="therapy-rich-card is-rose" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🔴 LBBB 與心室節律器（Pacemaker）之負荷選擇鐵律</h5>
                    <p style="margin: 0 0 8px 0;"><strong>● 關鍵 Pitfall 預防</strong>：對於存在<strong>左束支傳導阻滯 (LBBB) 或安裝心室節律器 (Ventricular Pacemaker)</strong> 的病人，當心率加快時（不論是運動還是 Dobutamine 引起），會因為室間隔矛盾運動而產生<strong>假陽性的中膈灌流缺損 (septal hypoperfusion)</strong>。</p>
                    <p style="margin: 0;"><strong>● 指引鐵律</strong>：此類病人<strong>絕對禁忌</strong>進行運動壓力測試或 Dobutamine 壓力測試！<strong>必須首選血管擴張劑（Regadenoson、Adenosine、Dipyridamole）壓力測試</strong>，以避免心率加快引起假陽性。</p>
                </div>

                <div class="therapy-rich-card is-blue" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🔵 血管擴張劑負荷 (Vasodilator Stress：Regadenoson, Adenosine, Dipyridamole) 安全閘門</h5>
                    <ul>
                        <li><strong>咖啡因與茶鹼類（Methylxanthines）12–24h 嚴格排除</strong>：咖啡因是 A2A 受體的競爭性拮抗劑，會完全阻斷藥物引導的冠脈舒張反應，導致嚴重的<strong>假陰性（看似正常的假影像）</strong>。必須確認病人檢前嚴禁攝取茶、咖啡、可樂、巧克力、能量飲料及含咖啡因之止痛/感冒藥。</li>
                        <li><strong>呼吸系統與心傳導絕對禁忌</strong>：
                            <ul>
                                <li><strong>Adenosine & Dipyridamole</strong>：絕對禁忌用於<strong>重度氣喘、活動性支氣管痙攣/哮鳴 (active wheezing)</strong> 病人。</li>
                                <li><strong>Regadenoson</strong>：對輕中度氣喘/COPD 較安全，但對<strong>重度氣喘、活動性支氣管痙攣</strong>仍列為相對禁忌或應極度慎用。</li>
                                <li><strong>傳導阻滯</strong>：絕對禁忌用於<strong>未裝置人工節律器之二度或三度房室傳導阻滯 (AV block)</strong> 及病竇症候群 (SSS)。</li>
                                <li><strong>血流動力學</strong>：絕對禁忌用於<strong>收縮壓 &lt; 90 mmHg</strong> 之症狀性低血壓病人。</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="therapy-rich-card is-amber" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🟡 兒茶酚胺類擬交感神經刺激劑 (Dobutamine Stress) 安全閘門</h5>
                    <ul>
                        <li><strong>無咖啡因攝取限制</strong>：Dobutamine 作用於心臟 Beta-1 受體，<strong>完全不受咖啡因影響</strong>。若病人因誤食咖啡因無法進行血管擴張劑測試，且無法運動時，Dobutamine 壓力測試是其<strong>首選替代方案</strong>。</li>
                        <li><strong>絕對禁忌症與血管擴張劑完全不同</strong>：
                            <ul>
                                <li><strong>心血管高風險</strong>：絕對禁忌用於<strong>近期（48小時內）急性心肌梗塞、不穩定心絞痛、重度主動脈瓣狹窄 (severe AS)、肥厚性阻塞性心肌病 (HOCM)、主動脈瘤/剝離</strong>病人。</li>
                                <li><strong>高血壓與心律不整</strong>：絕對禁忌用於<strong>未控制的重度高血壓 (收縮壓 &gt; 200 mmHg 或舒張壓 &gt; 110 mmHg)</strong> 及嚴重快速心律不整（如室性心跳過速 VT）。</li>
                                <li><strong>呼吸系統與 AV Block</strong>：<strong>沒有</strong>氣喘或高階 AV block 的絕對禁忌（Dobutamine 作為 Beta 激動劑反而能擴張支氣管並加快傳導）。</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="therapy-rich-card is-emerald" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🟢 運動壓力測試 (Bruce Protocol) 安全閘門</h5>
                    <ul>
                        <li><strong>運動負荷心率門檻</strong>：心率<strong>必須達到預測最大心率的 85% 以上</strong>（公式：(220 - 年齡) × 0.85），且需達到足夠運動量才算是一次有效的負荷。</li>
                        <li><strong>禁忌症</strong>：排除無法配合運動、不穩定心絞痛、急性心梗、急性主動脈剝離或重度 AS，以及前述 LBBB/心室節律器病人。</li>
                    </ul>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "二、 示蹤劑物理選擇與劑量鐵律 (ASNC 2018 指引佐證)",
            icon: "💉",
            html: `<div class="prose">
                <p>心肌灌流 SPECT 可使用的放射性藥物主要為 <strong>99mTc-Sestamibi (或 99mTc-Tetrofosmin)</strong> 與 <strong>201Tl-Chloride</strong>。依據 <strong>ASNC 2018 國際指引</strong>，其注射標準與物理特性如下：</p>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● 99mTc-Sestamibi / 99mTc-Tetrofosmin (臨床主流)</h5>
                    <p style="margin: 0 0 8px 0;">發射 140 keV 單一能量伽馬射線，物理半衰期 6 小時。計數高、畫質清晰，極利於 gated 收像以評估左心室功能。</p>
                    <ul>
                        <li><strong>一日法 (1-Day Protocol) — 臨床最常用</strong>：第一針 (常為 Rest) 劑量為 <strong>8–12 mCi (296–444 MBq)</strong>；第二針 (常為 Stress) 劑量為 <strong>24–36 mCi (888–1332 MBq)</strong>。<strong>【3:1 活度比例鐵律】</strong>：第二針與第一針的活度比例必須達 3:1 以上，以確保第二針的超高計數能夠蓋過第一針在心肌細胞中的殘留活性，避免殘留背景干擾判讀。</li>
                        <li><strong>兩日法 (2-Day Protocol) — 適用於肥胖 (BMI > 30–35) 個案</strong>：Rest 與 Stress 兩相分開於不同天進行，每次均建議注射 <strong>20–30 mCi (740–1110 MBq)</strong>。因間隔 24 小時衰變，不受 3:1 比例限制，且兩相影像皆能獲得極佳計數與穿透力。</li>
                        <li><strong>兒科劑量下限</strong>：依體重調整（建議 0.05–0.1 mCi/kg），但設有<strong>最低劑量下限 1.0 mCi (37 MBq)</strong> 以維持起碼的影像信噪比。</li>
                    </ul>
                </div>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● 201Tl-Chloride (鉈-201，心肌存活專用)</h5>
                    <p style="margin: 0 0 8px 0;">發射低能量汞 X 射線 (69-83 keV)，半衰期長達 73 小時。具備極佳的心肌再分布 (Redistribution) 能力，是評估心肌存活性 (Viability Study) 的經典藥物。</p>
                    <ul>
                        <li><strong>成人建議劑量</strong>：固定範圍為 <strong>2–4 mCi (74–148 MBq)</strong>。由於半衰期長且全身輻射吸收劑量顯著高於 Tc-99m，<strong>活度必須嚴格限制在此範圍內，絕不可隨意調高</strong>。</li>
                        <li><strong>標準流程</strong>：負荷給藥後立刻造影，3–4 小時後進行再分布造影。必要時於 24 小時補拍或在靜息造影前追加注射 1 mCi (Reinjection) 以區分心肌梗塞與存活心肌。</li>
                    </ul>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "三、 負荷臨床路徑與現場急救逆轉處置 (給藥、監測與急救)",
            icon: "🏃",
            html: `<div class="prose">
                <p>負荷給藥必須嚴格執行現場不適的監測與逆轉處置，特別注意<strong>血管擴張劑與 Dobutamine 的逆轉藥物完全不同</strong>：</p>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● Regadenoson 臨床路徑 (選擇性 A2A 激動劑)</h5>
                    <p style="margin: 0 0 8px 0;"><strong>給藥標準</strong>：0.4 mg / 5 mL 固定劑量，於約 10 秒內快速靜脈注射，隨後立即以 5 mL 生理食鹽水沖洗；示蹤劑於 saline flush 後 10–20 秒注入。</p>
                    <p style="margin: 0 0 8px 0;"><strong>常見不適與現場處置</strong>：臉潮紅、胸悶、呼吸急促、頭痛、頭暈、噁心與輕微低血壓。給予平躺監測、給氧支持。因其半衰期較 adenosine 長，若出現嚴重或持續不適，可於給藥後 1–2 分鐘後依醫囑給予 <strong>Aminophylline 50–100 mg 緩慢靜脈注射</strong>進行逆轉（必要時可追加）。</p>
                </div>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● Adenosine 臨床路徑 (非選擇性腺苷激動劑)</h5>
                    <p style="margin: 0 0 8px 0;"><strong>給藥標準</strong>：Adenosine 140 μg/kg/min 持續靜脈輸注 6 分鐘；示蹤劑於第 3 分鐘注入，輸注持續至第 6 分鐘。</p>
                    <p style="margin: 0 0 8px 0;"><strong>常見不適與現場處置</strong>：胸悶、短暫二/三度房室傳導阻滯、低血壓、呼吸困難。由於 Adenosine 半衰期極短（&lt;10秒），若出現嚴重傳導阻滯、明顯低血壓或支氣管痙攣，<strong>立即停止輸注</strong>即可迅速緩解症狀；若停藥後症狀仍持續，則可依醫囑給予 Aminophylline 逆轉。</p>
                </div>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● Dipyridamole 臨床路徑 (間接腺苷放大劑)</h5>
                    <p style="margin: 0 0 8px 0;"><strong>給藥標準</strong>：0.56 mg/kg 於 4 分鐘內緩慢輸注；示蹤劑於開始輸注後第 7-8 分鐘（即輸注完畢後第 3–5 分鐘）注入。</p>
                    <p style="margin: 0 0 8px 0;"><strong>常見不適與現場處置</strong>：頭痛、噁心、明顯胸悶、低血壓、支氣管痙攣。<strong>特別提醒</strong>：Dipyridamole 半衰期長達 30–40 分鐘，一旦發生嚴重支氣管痙攣、持續胸痛或高階阻滯，<strong>停止輸注是無效的，必須立即緩慢靜脈注射 Aminophylline 50–125 mg 進行逆轉</strong>（總量通常不超過 250 mg）。</p>
                </div>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● Dobutamine 臨床路徑 (擬交感 Beta-1 激動劑)</h5>
                    <p style="margin: 0 0 8px 0;"><strong>給藥標準</strong>：10 → 20 → 30 → 40 μg/kg/min 每 3 分鐘遞增；目標心率未達標時可追加 atropine 0.25–1.0 mg。</p>
                    <p style="margin: 0 0 8px 0;"><strong>常見不適與現場處置</strong>：心悸、心跳過速、血壓大幅上升、心律不整。<strong>【致命急救 Pitfall 預防】</strong>：Dobutamine 壓力測試<strong>絕對禁用 Aminophylline 逆轉（無效且會加重心悸）</strong>！一旦心率達標或出現終止指徵（側壁缺血性 ECG 改變、血壓驟降、嚴重不適），應立即停藥，並依醫囑給予 <strong>Esmolol 或 Metoprolol 等短效 Beta-blocker</strong> 逆轉心率。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "四、 真實文獻影像圖解：標準切面判讀與衰減排除",
            icon: "🧭",
            html: `<div class="prose">
                <p>臨床判讀心肌灌流 SPECT 時，必須嚴格比對<strong>標準三切面（SA 短軸、VLA 垂直長軸、HLA 水平長軸）</strong>的 Rest/Stress 對照圖，並與未經衰減校正 (NAC) 及衰減校正 (AC) 的經典影像進行交叉檢視，方能精確區分真正缺血與生理性衰減偽影：</p>
                
                <figure class="inline-guide-figure" style="text-align: center; margin: 24px 0;">
                    <img src="assets/paper-figures/MPI/MPI_Figure14_NormalPerfusion_with_GastricActivity.jpg" alt="Normal myocardial perfusion SPECT" loading="lazy" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
                    <figcaption style="margin-top: 12px; font-size: 0.95em; color: var(--text-muted); line-height: 1.6; text-align: left; background: var(--bg-hover); padding: 12px; border-left: 4px solid var(--primary);">
                        <strong>圖 1．正常心肌灌流 SPECT 影像 (Normal Perfusion)：</strong><br>
                        來源：Henzlova MJ, et al. <em>J Saudi Heart Assoc</em>. 2013;25:13-32, Figure 14。標準 short-axis slices 顯示左心室 17 節段的心肌放射性攝取呈均勻對稱分布，無灌流缺損。<br>
                        <strong>● 臨床判讀重點</strong>：心臟旁側可見胃部與腸道的高放射性 extracardiac activity。判讀時必須小心定位，不要將心外活性誤認為心肌病變，也不要讓心外熱點的負面溢出效應干擾下壁重切。
                    </figcaption>
                </figure>
                
                <figure class="inline-guide-figure" style="text-align: center; margin: 24px 0;">
                    <img src="assets/paper-figures/MPI/MPI_Figure17A_Reversible_Ischemia.jpg" alt="Reversible ischemia on myocardial perfusion SPECT" loading="lazy" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
                    <figcaption style="margin-top: 12px; font-size: 0.95em; color: var(--text-muted); line-height: 1.6; text-align: left; background: var(--bg-hover); padding: 12px; border-left: 4px solid var(--primary);">
                        <strong>圖 2．可逆性缺血 SPECT 影像 (Reversible Ischemia)：</strong><br>
                        來源：同文 Figure 17A。上排為 Stress 相，下排為 Rest 相。影像清楚呈現：在 Stress 下，左心室心尖部 (Apex)、前壁 (Anterior) 與前中膈 (Anteroseptal) 出現顯著的放射性缺損（呈黑色，灌流極低）；但在 Rest 靜息狀態下，該缺損區域完全恢復正常（放射性重新填滿）。<br>
                        <strong>● 臨床判讀重點</strong>：此為典型且正規的 <strong>Stress-induced Reversible Ischemia (負荷誘發可逆性缺血)</strong>。這提示該區域的冠狀動脈 (LAD) 存在顯著狹窄，心肌在壓力下缺血 but 依然存活 (Viable)，是血管重建手術 (PCI/CABG) 的最核心適應症。
                    </figcaption>
                </figure>
                
                <figure class="inline-guide-figure" style="text-align: center; margin: 24px 0;">
                    <img src="assets/paper-figures/MPI/MPI_Figure5A_Shifting_Breast_Attenuation.jpg" alt="Breast attenuation false positive pitfall" loading="lazy" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
                    <figcaption style="margin-top: 12px; font-size: 0.95em; color: var(--text-muted); line-height: 1.6; text-align: left; background: var(--bg-hover); padding: 12px; border-left: 4px solid var(--accent-warning);">
                        <strong>圖 3．乳房組織衰減假影 (Breast Attenuation False Positive)：</strong><br>
                        來源：同文 Figure 5A。上排為未經衰減校正 (Non-attenuation corrected, NAC) 的影像，顯示心臟前壁 (Anterior wall) 呈現明顯的灌流缺損，極易被誤判為 LAD 血管缺血；下排為進行衰減校正 (Attenuation corrected, AC) 後的影像，前壁灌流完全恢復正常。<br>
                        <strong>● 臨床避坑對策</strong>：<br>
                        1. <strong>NAC/AC 對照</strong>：若 AC 正常而 NAC 缺損，且 Gated 顯示前壁運動 (wall motion) 與收縮增厚 (thickening) 完全正常，即可排除心肌缺血。<br>
                        2. <strong>體位補拍</strong>：搭配 <strong>Prone (俯臥) 補拍</strong>，讓乳房組織自然下垂移位，遠離心臟前壁；若下壁衰減則搭配 <strong>Upright (坐位) 補拍</strong>使橫膈下移。
                    </figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "五、 物理與技術性 Pitfalls 避坑指引：橫膈衰減、心外干擾與 Gating 不穩",
            icon: "⚠️",
            html: `<div class="prose">
                <p>除了乳房組織衰減外，臨床上還必須逐一排除以下常見的物理與技術性假陽性干擾：</p>
                <ul>
                    <li><strong>橫膈衰減 (Diaphragmatic Attenuation)</strong>：男性下壁 (Inferior wall) 出現假缺損（因左側橫膈阻擋）。<strong>【排除對策】</strong>：採用 <strong>Prone (俯臥) 或是 Upright (坐位) 掃描</strong>使橫膈下移，若下壁恢復正常則為假陽性；同時檢查下壁收縮增厚，單純衰減者收縮功能依然完好。</li>
                    <li><strong>腸肝外高攝取干擾 (Extracardiac Uptake)</strong>：Tc-99m 經肝膽排泄，相鄰的腸胃道高熱點會在疊代重建中引導負面溢出，在心臟下壁造成假缺損。<strong>【排除對策】</strong>：藥物注射後飲用溫水或高脂餐刺激膽囊排空，或使用 SPECT/CT 融合切面確認解剖重疊。</li>
                    <li><strong>心律不整 Gating 失敗 (Arrhythmia & Gating Failure)</strong>：心房顫動 (Afib) 導致 Gating 丟棄訊號，造成 EF 假性低下。<strong>【排除對策】</strong>：檢視 R-R Histogram，若分布混亂，應主動改用 <strong>Un-gated 數據解讀灌流本身</strong>，並註明心室功能不可信。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "六、 結構化報告與科內落地指南",
            icon: "📝",
            html: `<div class="prose">
                <p>為了確保與臨床溝通無礙，科內 MPI 報告應推行 <strong>ASNC 結構化報告規範</strong>，字字精準：</p>
                <ol>
                    <li><strong>Stress 負荷過程描述</strong>：交代 Stress 方法、達標最大心率 %、給藥劑量、是否有胸痛等症狀，以及 Stress 下 ECG 是否有 ST-T 段病理性改變。</li>
                    <li><strong>灌流評估 (Perfusion SSS/SRS/SDS)</strong>：明確寫出有無缺損、位置（17 節段分布）、嚴重度與可逆性。</li>
                    <li><strong>左心室功能評估 (Gated LVEF)</strong>：給出 Stress 與 Rest 下的 <strong>LVEF</strong>，以及局部心肌 wall motion & thickening。</li>
                    <li><strong>高風險指標監測 (TID)</strong>：測量 <strong>Transient Ischemic Dilation (TID，暫時性心室擴張比值)</strong>，正常值通常 < 1.12–1.20。若 TID > 1.20，且心室功能在 stress 後顯著下降，高度提示三支血管廣泛性缺血 (Balanced Ischemia)，屬極高風險個案。</li>
                    <li><strong>結論與建議</strong>：
                        <ul>
                            <li><strong>低風險</strong> (SDS=0, EF正常)：建議藥物保守治療。</li>
                            <li><strong>中高風險</strong> (SDS>4 或 TID陽性)：強烈建議心導管檢查 (Coronary Angiography) 或進行解剖-功能融合評估。</li>
                        </ul>
                    </li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ol>
                    <li>Dorbala S, et al. ASNC imaging guidelines for SPECT nuclear cardiology procedures: Stress protocols and tracers. <em>J Nucl Cardiol</em>. 2018.</li>
                    <li>Henzlova MJ, et al. ASNC stress protocols and tracers update. <em>J Nucl Cardiol</em>. 2016.</li>
                    <li>Tilkemeier PL, et al. ASNC quality metrics for SPECT MPI. <em>J Nucl Cardiol</em>. 2023.</li>
                    <li>Verberne HJ, et al. EANM procedural guidelines for radionuclide myocardial perfusion imaging with SPECT and SPECT/CT (2015 revision). <em>Eur J Nucl Med Mol Imaging</em>. 2015.</li>
                    <li>Knuuti J, et al. 2019 ESC Guidelines for the diagnosis and management of chronic coronary syndromes. <em>Eur Heart J</em>. 2020.</li>
                    <li>Gulati M, et al. 2021 AHA/ACC chest pain guideline. <em>Circulation</em>. 2021.</li>
                    <li>Dilsizian V, et al. ASNC imaging guidelines for nuclear cardiology procedures: standardized reporting update. <em>J Nucl Cardiol</em>. 2017.</li>
                </ol>
            </div>`
        }
    ]
},
MPI_Tc99m: {
    title: "心肌灌流（Tl-201 / Tc-99m Sestamibi）",
    subtitle: "Myocardial Perfusion Imaging（MPI）— 臨床負荷路徑、影像判讀與偽影排除指引",
    category: "cardiac",
    redirect: "MPI",
    content: []
},

MPI_Tl201: {
    title: "心肌灌流（Tl-201 / Tc-99m Sestamibi）",
    subtitle: "Myocardial Perfusion Imaging（MPI）— 臨床負荷路徑、影像判讀與偽影排除指引",
    category: "cardiac",
    redirect: "MPI",
    content: []
},

// ================================================================
// 🧬 內分泌 / 甲狀腺
// ================================================================

Thyroid: {
    title: "甲狀腺攝取率／掃描",
    subtitle: "Thyroid Uptake & Scan（Tc-99m Pertechnetate）— 功能型態判讀",
    category: "endocrine",
    readerGuideMode: "article",
    readerGuideArticle: [
        "甲狀腺掃描的臨床價值在於把「甲亢」拆成不同病因：Graves'、toxic adenoma、toxic MNG 與甲狀腺炎，避免只靠血液檢查做單一路徑決策。",
        "Tc-99m pertechnetate 反映的是 trapping，不是 organification；因此它適合功能分布判讀，但不能完全取代放射性碘攝取率（RAIU）的角色。",
        "判讀時要先確認含碘干擾與技術條件，再解釋 hot/warm/cold nodule 與全腺分布，否則容易出現假性低攝取或結節定位誤差。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "注射期", value: "Tc-99m Pertechnetate 靜脈注射" },
            { label: "分布期", value: "等待約 15–20 分鐘" },
            { label: "收像期", value: "Anterior ± 斜位 ± pinhole（必要時 SPECT/CT）" }
        ],
        article: [
            "標準流程為注射後 15–20 分鐘收像；前位是基礎視角，必要時加 RAO/LAO 以降低重疊與改善結節定位。",
            "若要觀察結節細節，pinhole 影像通常優於平行孔 collimator；若要處理異位甲狀腺或胸骨後延伸，可考慮 SPECT/CT。",
            "需先在流程前排除近期含碘干擾（顯影劑、amiodarone、含碘補充品），否則整體低攝取可能是藥物效應而非疾病本身。"
        ],
        note: "含碘干擾（顯影劑、amiodarone、含碘藥物）會影響判讀；固定停藥天數仍需依院內流程與個案條件，不建議跨場域硬寫單一天數。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位與適用場景",
            icon: "📌",
            html: `<div class="prose">
                <p>Thyroid uptake/scan 是功能導向檢查：利用甲狀腺濾泡細胞 NIS 對 Tc-99m pertechnetate 的攝取，評估整體分布與結節功能。</p>
                <p>它與超音波（結構）及 TSH/T3/T4（生化）互補，回答的是為什麼甲亢與結節是否有功能。實務上最常用於甲亢病因鑑別、結節 hot/warm/cold 分類、異位甲狀腺定位，以及術後或治療後殘餘功能組織評估。</p>
            </div>`
        },
        {
            type: "section",
            title: "核心適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <p><strong>核心適應症：</strong></p>
                <ul>
                    <li>甲亢病因鑑別：Graves'（瀰漫高攝取）、toxic adenoma（單一 hot nodule + 周圍抑制）、toxic multinodular goiter（多發 hot nodules）、甲狀腺炎（整體低攝取）。</li>
                    <li>結節功能評估：hot/warm/cold nodule 分類，協助決定是否優先做超音波導引 FNA。</li>
                    <li>異位甲狀腺與先天性發育異常定位（lingual thyroid、頸部缺如/發育不全）。</li>
                    <li>術後或治療後功能組織殘留評估。</li>
                </ul>
                <p><strong>主要限制：</strong>Tc-99m 只看 trapping，無法直接反映碘有機化與完整碘代謝；若臨床問題是 I-131 治療前劑量規劃或完整攝取率評估，仍需 RAIU/I-123 路徑。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人準備",
            icon: "🧑‍⚕️",
            html: `<div class="prose">
                <ul>
                    <li>一般不需禁食；重點在檢前問診含碘暴露史而非飲食限制本身。</li>
                    <li>需主動確認近期含碘顯影劑、amiodarone、Lugol's/SSKI、海藻或含碘保健品使用史。</li>
                    <li>抗甲狀腺藥（PTU/Methimazole）是否停藥依臨床目的與醫囑決定，避免固定套用單一規則。</li>
                    <li>若近期做過甲狀腺穿刺或有頸部手術史，應註記於技術紀錄。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "放射藥物與劑量",
            icon: "💉",
            html: `<div class="prose">
                <p>常用示蹤劑為 <strong>Tc-99m Pertechnetate</strong>，成人常見活度約 <strong>5–10 mCi（185–370 MBq）</strong>，小兒可依體重調整（常見 0.05–0.1 mCi/kg）。</p>
                <p>若要做完整 uptake kinetics 或 I-131 治療前規劃，可能改用 I-123/RAIU 路徑；其等待時間與劑量架構不同，需與本單元的 Tc-99m 掃描分開說明。</p>
            </div>`
        },
        {
            type: "section",
            title: "攝影流程與重建/處理",
            icon: "🖥️",
            html: `<div class="prose">
                <p>標準流程為注射後 15–20 分鐘收像，至少包含 anterior view，必要時加 RAO/LAO 與 marker 定位觸診結節或胸骨切跡。結節細節判讀可優先使用 pinhole。</p>
                <p>若懷疑異位甲狀腺或 retrosternal extension，可加入 SPECT/CT 做解剖定位。SNMMI 2020（DTC scintigraphy）可作為 SPECT/CT 參數與定位價值的技術參考，但最終參數仍以院內設備 protocol 為準。</p>
                <p>處理階段需同步檢視唾液腺與食道活性，避免把生理攝取誤判為甲狀腺病灶。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <p><strong>建議判讀順序：</strong>位置 → 全腺分布 → 結節功能 → 干擾因子。</p>
                <ul>
                    <li>先看位置：正常頸前、異位（舌下/縱膈）或術後改變。</li>
                    <li>再看全腺分布：瀰漫高攝取、瀰漫低攝取或不均質分布。</li>
                    <li>再做結節分類：hot、warm、cold 與周邊組織是否受抑制。</li>
                    <li>最後結合臨床與超音波：cold nodule 需回到結構影像與 FNA 決策路徑。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "Pitfalls（含假陽性 / 假陰性）",
            icon: "⚠️",
            html: `<div class="prose">
                <p><strong>假陰性常見來源：</strong>近期含碘顯影或含碘藥物造成競爭抑制，導致全腺假性低攝取。</p>
                <p><strong>假陽性或誤判常見來源：</strong>唾液腺與食道活性重疊、小結節部分體積效應、未掃到上縱膈導致異位病灶漏診。</p>
                <ul>
                    <li>Tc-99m 僅反映 trapping：不能用單次 Tc-99m 結果推論完整碘代謝或直接取代 RAIU。</li>
                    <li>small cold nodule 可能被周邊正常組織掩蓋，平面影像陰性不等於排除。</li>
                    <li>若技術記錄缺少含碘暴露資訊，整體低攝取易被誤判為甲狀腺炎。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "報告建議",
            icon: "📝",
            html: `<div class="prose">
                <p>報告應包含：檢查目的、示蹤劑與活度、等待時間、收像視角（含是否 pinhole/SPECT-CT）、技術限制（含碘干擾史）、全腺分布型態、結節位置與功能分類（hot/warm/cold）、結論與下一步建議。</p>
                <p>當結果與臨床不一致時，需明確寫出不確定性來源，並建議後續超音波、FNA 或 RAIU 路徑，而非僅給單句「異常攝取」。</p>
            </div>`
        },
        {
            type: "section",
            title: "文獻圖像示例",
            icon: "🖼️",
            html: `<div class="prose">
                <p>放射性核種靜脈攝影真正值得放圖的重點有兩個：第一是「藥怎麼打、血池訊號怎麼建立」；第二是「正常回流與阻塞/側枝形成長什麼樣子」。以下保留這兩張最有教學價值的圖，並把圖說補成可直接帶判讀的版本。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Venography/RBC_PYP_Tc99m_Fallback_Workflow.svg" alt="Workflow for in-vivo RBC labeling venography using PYP followed by Tc-99m" loading="lazy" />
                    <figcaption>圖 1．以 PYP 先行處理、再注入 Tc-99m pertechnetate 的 in-vivo RBC 血池流程示意。這張圖的用途不是證明某一家 protocol 絕對標準，而是幫讀者理解：若要做 blood-pool venography，重點在先建立穩定血池訊號，再進行下肢 flow 與延遲血池觀察。臨床上若周邊靜脈條件差、注射路徑受限，流程設計與注射位點會直接影響回流影像判讀。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Venography/WJNM_2018_Fig1_RadionuclideVenographyPatterns.jpg" alt="Representative radionuclide venography patterns showing normal flow and obstruction with collateral formation" loading="lazy" />
                    <figcaption>圖 2．核醫靜脈攝影的代表型態。來源：Theerakulpisut D, et al. <em>World J Nucl Med</em>. 2018;17:27-33, Figure 1。從左到右可用來教三件事：正常時 tracer 應沿深靜脈主幹平順、對稱向上；一旦近端阻塞，主幹中斷、側枝擴張與迂迴回流會變得明顯；若只有表淺路徑顯影或局部外滲，則要先想技術因素、注射品質或既有靜脈通路問題，而不是直接下 DVT 結論。</figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "報告建議",
            icon: "📝",
            html: `<div class="prose">
                <p>報告至少應記載：注射側與方法、採集品質、回流連續性、可疑中斷位置、側枝有無、與臨床建議（是否追加超音波/CTA）。</p>
                <p>若結果不確定，應明確標示限制條件，不以單一陰性結果排除 DVT。</p>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ul>
                    <li>Pavel DG, Zimmer AM, Patterson VN. In Vivo Labeling of Red Blood Cells with <sup>99m</sup>Tc. <em>J Nucl Med</em>. 1977;18(3):305-308.</li>
                    <li>Snarski AM. Radionuclide venography: two-stage flow and equilibrium technique using <sup>99m</sup>Tc-pertechnetate and in-vivo labeled RBCs. <em>Eur J Nucl Med</em>. 1989;15(3):137-142.</li>
                    <li>Caner B, et al. Detection of deep vein thrombosis: combined flow and blood-pool radionuclide venography versus contrast venography. <em>Angiology</em>. 1991;42(10):796-804.</li>
                    <li>Theerakulpisut D, et al. Detection of lower limb DVT: comparison between radionuclide venography and venous ultrasonography. <em>World J Nucl Med</em>. 2018;17:27-33.</li>
                    <li>DailyMed. Kit for the Preparation of Technetium Tc 99m Pyrophosphate Injection（in-vivo RBC labeling dosage and timing section）.</li>
                    <li>Liu C, et al. Clinical application of <sup>99m</sup>Tc-labeled RBC subcutaneous radionuclide venography with abdominal/pelvic SPECT/CT in suspected proximal DVT. <em>J Nucl Med Radiat Ther</em>. 2016;7:295. doi:10.4172/2155-9619.1000295.</li>
                </ul>
            </div>`
        }
    ]
},

Lymphedema: {
    title: "淋巴水腫攝影",
    subtitle: "Lymphedema — 淋巴回流功能與阻塞分布評估",
    category: "cardiac",
    protocolSummaryDisplay: "expanded",
    readerGuideMode: "article",
    readerGuideArticle: [
        "淋巴水腫攝影的重點不是把腫脹拍出來，而是回答『淋巴流得動嗎、流到哪裡卡住、是否出現皮下逆流』。",
        "真正臨床實用的判讀，不只分正常或異常，而是把延遲、部分阻塞、完全阻塞與代償路徑放回病人的手術史、放療史與症狀時序裡。",
        "這張檢查在現代淋巴重建手術規畫仍有價值，但它看的是功能路徑，不能取代超音波、MR lymphangiography 或 ICG lymphography 的解剖細節。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "皮下示蹤", value: "手/足指(趾)間皮下或皮內注射" },
            { label: "早期相", value: "即時動態或早期靜態" },
            { label: "延遲相", value: "1–3 小時或更晚補拍" }
        ],
        article: [
            "第一階段是遠端皮內或皮下注射，常放在手指或腳趾間，目的是讓示蹤劑沿著表淺淋巴路徑往近端移動，而不是直接進入靜脈循環。",
            "第二階段先看早期動態或早期靜態，確認淋巴管是否出現、上行速度是否對稱，並判斷注射是否成功。若一開始就只看延遲相，很容易錯過最有價值的功能資訊。",
            "第三階段比較延遲相，觀察淋巴結何時顯影、是否有 dermal backflow、是否出現部分或完全阻塞，以及是否仍有替代性側支路徑。"
        ],
        note: "常見作法為指(趾)間皮內/皮下注射後先做早期動態，再於 1–3 小時補延遲影像；若近端淋巴結仍未顯影，可依院內 protocol 加做到 4–6 小時或更晚。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：看的是淋巴運輸功能，不是只看腫脹外觀</h4>
            <p>淋巴水腫攝影（lymphoscintigraphy）是以放射性微粒追蹤<strong>遠端到近端的淋巴運輸</strong>。它最適合回答的是：這條肢體的淋巴回流是否延遲、是否中斷、是否有皮下逆流（dermal backflow）、以及近端淋巴結是否能被到達。對於術後、放療後或原因未明的肢體腫脹，這些功能資訊往往比單純周徑數字更有決策價值。</p>`
        },
        {
            type: "section",
            title: "一、 目前臨床最常放在哪些情境？",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>原發與繼發淋巴水腫鑑別：</strong>當病人出現單側或不對稱肢體腫脹，臨床想知道是否真的屬於淋巴回流異常，而不只是靜脈、脂肪或全身性水腫時，lymphoscintigraphy 是經典功能檢查。</li>
                    <li><strong>乳癌、婦癌、黑色素瘤術後或放療後水腫：</strong>這是最常見的繼發型場景。影像的價值在於把「術後水腫」進一步分成輕度延遲、部分阻塞、完全阻塞或已有皮下逆流。</li>
                    <li><strong>淋巴重建手術評估：</strong>在考慮淋巴靜脈吻合（LVA）或淋巴結移植前，這張檢查可以提供整體運輸功能與近端節點可達性，作為手術規畫的一部分。</li>
                    <li><strong>與其他腫脹病因鑑別：</strong>若臨床懷疑慢性靜脈功能不全、脂肪水腫或混合型腫脹，影像結果要回到整體鑑別，而不是把任何腫脹都直接命名為 lymphedema。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "二、 為什麼這張檢查看得見淋巴回流問題？",
            icon: "🧬",
            html: `<div class="prose">
                <p>淋巴微粒示蹤劑經皮內或皮下注射後，會進入表淺淋巴管並往近端移動，因此我們可以用時間序列觀察：<strong>淋巴管有沒有出現、上行速度快不快、近端淋巴結會不會顯影、以及皮下是否出現逆流</strong>。</p>
                <p>這也解釋了為什麼判讀不能只看一張延遲相：早期相回答的是「會不會動」，延遲相回答的是「能不能到」，而 dermal backflow、側支路徑與節點延遲，則是在描述淋巴系統如何代償或失代償。</p>
            </div>`
        },
        {
            type: "section",
            title: "三、 檢前準備：病史與注射技術會直接決定判讀品質",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li><strong>病史要完整：</strong>症狀側、手術側、放療史、反覆蜂窩性組織炎、受傷史與水腫持續時間，都會改變對「延遲」和「阻塞」的解讀。</li>
                    <li><strong>先講清楚這是多時間點檢查：</strong>病人要知道注射在指（趾）間，且可能需要等待延遲補拍；若這點沒先溝通，後面常在延遲相階段出現配合度下降。</li>
                    <li><strong>注射層次必須固定：</strong>皮內、淺皮下與過深注射看到的運輸表現不同。過深時示蹤劑可能較快進入靜脈或深層組織，讓結果變得不可比。</li>
                    <li><strong>刺激條件要一致：</strong>有些科別會在注射後安排步行、踩踏或簡單按摩促進淋巴回流；若要做左右比較或前後追蹤，這些條件都需要固定。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "四、 攝影流程：先看早期上行，再看延遲相是否到站",
            icon: "🖥️",
            html: `<div class="prose">
                <p>常見 protocol 是在手指或腳趾間以 <strong>Tc-99m sulfur colloid、filtered sulfur colloid 或 nanocolloid</strong> 做遠端皮內/皮下注射，先進行早期動態或早期靜態，再於 1 至 3 小時做延遲相，必要時做到更晚時間點。</p>
                <ul>
                    <li><strong>早期相：</strong>看淋巴管是否出現、走向是否對稱、是否有立即停滯。</li>
                    <li><strong>延遲相：</strong>看近端淋巴結是否顯影、是否出現皮下逆流、以及有沒有明顯左右差。</li>
                    <li><strong>必要時加做更晚相：</strong>不是為了補圖，而是區分「只是很慢」和「真的到不了」。</li>
                </ul>
                <p>若院內加做 SPECT/CT，應把它定位為<strong>解剖對位輔助</strong>，而不是用來取代多時間點功能資訊。</p>
            </div>`
        },
        {
            type: "section",
            title: "五、 影像如何判讀：正常、延遲、部分阻塞與完全阻塞要分開說",
            icon: "🧭",
            html: `<div class="prose">
                <p><strong>正常型態</strong>通常可見遠端注射點後，表淺淋巴管向近端規則上行，左右大致對稱，並在合理時間內看到近端淋巴結顯影。這種情況下，影像的語言是「有路、有流、有到」。</p>
                <p><strong>單純延遲型</strong>則表現為淋巴管仍可見，但上行速度慢、節點顯影較晚。這類個案常見於早期或較輕度功能異常，報告不宜直接寫成完全阻塞。</p>
                <p><strong>部分阻塞型</strong>常見到淋巴管走行不規則、近端節點顯影變少，並合併局部或帶狀的 <strong>dermal backflow</strong>。這表示淋巴仍有部分通路，但已出現回流受阻與皮下逆流，是教學上最容易被誤判成「只是慢一點」的型態。</p>
                <p><strong>完全阻塞型</strong>通常表現為近端節點長時間不顯影、正常線性淋巴管消失或中斷，並見廣泛皮下逆流。此時影像不是在描述單純延遲，而是在描述整條近端運輸鏈路幾乎無法有效上行。</p>
                <p><strong>原發與繼發型</strong>要配合病史區分。原發型可見先天性發育不足或異常側支；繼發型則常在手術、放療或感染之後出現節點缺失、上行中斷與近端阻塞。相同的「不顯影」，在不同病史下意義不一樣。</p>
            </div>`
        },
        {
            type: "section",
            title: "六、 教學圖例：以鄭醫師網站圖解分級、分期與阻塞型態",
            icon: "🖼️",
            html: `<div class="prose">
                <p>以下圖例取自鄭醫師教學網站，可直接對應本單元的判讀語言。來源網址：<a href="https://www.aplussurgery.com/en/dr-chengs-lymphedma-grading-system" target="_blank" rel="noopener">https://www.aplussurgery.com/en/dr-chengs-lymphedma-grading-system</a></p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Lymphedema/Cheng_Grading_Table.png" alt="Cheng lymphedema grading table from Dr Cheng website" loading="lazy" />
                    <figcaption>圖 1．Cheng 分級表。來源：鄭醫師網站〈Dr. Cheng's lymphedma grading system〉。這張表把臨床周徑差、淋巴攝影型態與對應治療策略放在一起，適合用來理解「影像分期不是孤立存在，而是和臨床嚴重度一起看」。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Lymphedema/Upper_Limb_Staging.png" alt="Upper limb lymphedema staging example from Dr Cheng website" loading="lazy" />
                    <figcaption>圖 2．上肢淋巴水腫分期示意。來源：同上。這張圖適合教學時先建立「臨床外觀與分期」的對照，再回頭看核醫影像為何會出現不同的延遲與逆流型態。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Lymphedema/Taiwan_Upper_Limb_Staging.png" alt="Taiwan lymphoscintigraphy upper limb staging from Dr Cheng website" loading="lazy" />
                    <figcaption>圖 3．台灣淋巴攝影分期（上肢）。來源：同上。這張圖把正常引流、部分阻塞、完全阻塞與皮下逆流示例放在同一張圖內，和本頁「正常、部分阻塞、完全阻塞」的判讀框架最能直接對照。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Lymphedema/Partial_Obstruction.png" alt="Partial lymphatic obstruction example from Dr Cheng website" loading="lazy" />
                    <figcaption>圖 4．部分阻塞示例。來源：同上。可見仍有部分上行路徑，但已伴隨異常迂迴與逆流，這正是報告中應寫成「部分阻塞 / partial obstruction」而不是單純延遲的典型場景。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Lymphedema/Total_Obstruction.png" alt="Total lymphatic obstruction example from Dr Cheng website" loading="lazy" />
                    <figcaption>圖 5．完全阻塞示例。來源：同上。近端到站能力明顯喪失，正常線性淋巴引流被中斷，這類影像在臨床上通常代表較晚期或較重度的運輸障礙。</figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "七、 常見陷阱與限制",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>注射失敗或過深：</strong>若示蹤劑沒有正確進入表淺淋巴系統，後面的延遲與不顯影都可能是假象。</li>
                    <li><strong>皮膚污染或外滲：</strong>會在注射點附近造成過強訊號，干擾早期路徑判讀。</li>
                    <li><strong>早期正常不代表一定沒問題：</strong>有些輕度或早期病人需要延遲相才會出現異常，因此單一時間窗陰性不能過度保證。</li>
                    <li><strong>功能正常不等於完全沒有腫脹問題：</strong>若臨床仍高度懷疑 venous edema、lipedema 或混合型病變，需結合其他影像與臨床檢查。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "八、 報告與溝通建議",
            icon: "📝",
            html: `<div class="prose">
                <ul>
                    <li>記錄注射位置、示蹤劑、活度、各時間點與是否有步行/按摩等刺激條件。</li>
                    <li>描述淋巴管是否可見、上行是否延遲、近端節點是否顯影、是否有 dermal backflow 與左右差異。</li>
                    <li>結論建議寫成「較支持左上肢部分淋巴回流阻塞，合併皮下逆流」這類功能語言，而不是只寫「異常」。</li>
                    <li>若是術後或重建評估個案，可加註是否建議復健、壓力治療或淋巴外科進一步評估。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ol>
                    <li>The Diagnosis and Treatment of Peripheral Lymphedema: 2023 Consensus Document of the International Society of Lymphology. <em>Lymphology</em>. 2023.</li>
                    <li>Appropriate Use Criteria for Lymphoscintigraphy in Sentinel Node Mapping and Lymphedema/Lipedema. SNMMI Appropriate Use Criteria. 2023.</li>
                    <li>Akita S, et al. Clinical Significance of Lymphoscintigraphy Findings in the Evaluation of Lower Extremity Lymphedema. <em>Ann Nucl Med</em>. 2015.</li>
                    <li>Lymphoscintigraphy in the evaluation of limb edema. <em>Semin Nucl Med</em>. 2013.</li>
                    <li>Dr. Cheng's lymphedma grading system. A+ Surgery website. Source URL: <a href="https://www.aplussurgery.com/en/dr-chengs-lymphedma-grading-system" target="_blank" rel="noopener">https://www.aplussurgery.com/en/dr-chengs-lymphedma-grading-system</a></li>
                </ol>
            </div>`
        }
    ]
},

SLN: {
    title: "前哨淋巴結造影",
    subtitle: "SLN Mapping — 腫瘤淋巴引流第一站定位",
    category: "cardiac",
    protocolSummaryDisplay: "expanded",
    readerGuideMode: "article",
    readerGuideArticle: [
        "前哨淋巴結造影的重點不是替病理下結論，而是把『第一個引流站在哪裡』準確交給外科。",
        "真正成熟的 SLN 教學，必須同時講清楚注射層次、動態引流、注射點 shine-through、術前皮膚標記與術中 gamma probe 之間的連續流程。",
        "不同癌種的注射策略並不相同。乳癌、黑色素瘤、頭頸部與婦科腫瘤若共用一套固定打法，最容易在第一站與第二站節點判讀上出問題。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "示蹤注射", value: "腫瘤周邊/乳暈周邊/皮內等依癌種調整" },
            { label: "動態 + 靜態", value: "早期追蹤引流路徑與第一站" },
            { label: "術前定位", value: "皮膚標記或 SPECT/CT 對位" }
        ],
        article: [
            "第一階段先依癌種與病灶位置決定注射層次與注射點數。乳癌常見 peritumoral、subareolar 或 intradermal 路徑；黑色素瘤則常需沿病灶周邊多點注射，才能忠實追到第一站。",
            "第二階段用早期動態加上靜態影像，追蹤示蹤劑從注射點往哪裡走、哪一顆節點最先出現，這一步才是『sentinel』的定義來源。",
            "第三階段把結果轉成外科可用資訊，包括皮膚標記、方位、是否有多重引流與是否需要 SPECT/CT 對位。若這一步沒做好，前面影像再漂亮也很難真正幫到手術。"
        ],
        note: "同日與前一日注射皆可行，但需依 radiocolloid 種類、活度與手術時序固定化。真正的關鍵不是單一注射法，而是核醫與手術室流程一致。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：它是定位第一站，不是替淋巴結做轉移診斷</h4>
            <p>前哨淋巴結造影的任務是指出<strong>原發腫瘤最先引流到的淋巴結</strong>，協助手術做最小但有效的分期。影像本身無法證明該節點有沒有轉移；真正的轉移判斷仍來自術中摘取與病理分析。這個概念若沒先建立，最容易把「定位」和「病理診斷」混在一起。</p>`
        },
        {
            type: "section",
            title: "一、 目前臨床最常放在哪些情境？",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>早期乳癌：</strong>是最典型場景。目的在保留分期資訊的同時，減少不必要的腋下廣泛清掃與術後淋巴水腫風險。</li>
                    <li><strong>黑色素瘤：</strong>由於病灶可能引流到非典型區域，術前 lymphoscintigraphy 對找出異位引流和多重前哨節點特別重要。</li>
                    <li><strong>部分頭頸部與婦科腫瘤：</strong>在解剖複雜、淋巴走向多變的區域，SPECT/CT 常比單純 planar 更有幫助。</li>
                </ul>
                <p>教學上要強調：<strong>陰性影像不等於沒有轉移</strong>，它代表的是術前定位未成功或未顯示節點，不能把核醫「沒看到」直接等同病理陰性。</p>
            </div>`
        },
        {
            type: "section",
            title: "二、 為什麼能找到『第一站』？",
            icon: "🧬",
            html: `<div class="prose">
                <p>放射性 colloid 顆粒經腫瘤周邊或皮內注射後，會沿著局部淋巴引流路徑移動。最先接收到這股引流的節點，就是所謂的 <strong>sentinel lymph node</strong>。因此核醫判讀的核心不是「哪顆最亮」，而是<strong>哪顆最早出現、最符合第一站引流生理</strong>。</p>
                <p>這也是為什麼動態序列很重要。若只看晚期靜態圖，很可能把第二站甚至第三站節點誤當第一站。對手術來說，這種錯誤比單純少一顆熱點更有影響。</p>
            </div>`
        },
        {
            type: "section",
            title: "三、 檢前準備：手術時程與病灶資訊要先對齊",
            icon: "🩺",
            html: `<div class="prose">
                <ul>
                    <li><strong>確認癌種、病灶位置與既往介入：</strong>切片、前次手術、疤痕與植入物都可能改變淋巴路徑。</li>
                    <li><strong>和外科對時程：</strong>同日手術與隔日手術可用的總活度與 tracer 選擇不同，這不是排程細節，而是術中 gamma probe 能不能順利找到節點的關鍵。</li>
                    <li><strong>病人衛教：</strong>要先說明可能有多點注射、局部疼痛與皮膚標記，避免病人在標記後清洗或擦掉定位資訊。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "四、 攝影流程：動態決定第一站，SPECT/CT 決定你能不能找到它",
            icon: "🖥️",
            html: `<div class="prose">
                <p>常用示蹤劑包括 <strong>Tc-99m filtered sulfur colloid、nanocolloid</strong>，部分地區亦使用 <strong>Tc-99m tilmanocept</strong>。注射點可為 peritumoral、subareolar、periareolar、intradermal 或 scar-adjacent，需依癌種與手術目標調整。</p>
                <ul>
                    <li><strong>早期動態：</strong>追蹤淋巴走向，找出最早顯影節點。</li>
                    <li><strong>靜態定位：</strong>用來確認節點位置、數量與皮膚標記。</li>
                    <li><strong>SPECT/CT：</strong>在頭頸部、骨盆、深層腋窩或多站引流時特別重要，可把平面熱點放回真正解剖位置。</li>
                </ul>
                <p>若要讓影像真正對外科有用，報告裡必須把節點和解剖描述連起來，而不是只在圖上畫圈。</p>
            </div>`
        },
        {
            type: "section",
            title: "五、 影像如何判讀：哪一顆是第一站，為什麼是它？",
            icon: "🧭",
            html: `<div class="prose">
                <p><strong>第一個出現的節點</strong>通常最符合 sentinel node 定義，但判讀時還要同時看它和注射點之間是否有清楚引流路徑，以及後續是否又出現更高階節點。最早出現、位置最合理、且與引流路徑連得上的節點，才是最可信的第一站。</p>
                <p><strong>多重引流</strong>並不少見，尤其在黑色素瘤和部分乳癌。若有兩條不同路徑都在早期導向節點，報告應誠實描述為多顆前哨節點，而不是硬選一顆。</p>
                <p><strong>異位引流</strong>是這張檢查最有附加價值的地方之一。例如乳癌內側病灶可引流到 internal mammary chain；黑色素瘤則可能走向意料外的節點區。這類資訊若在術前沒有被指出，術中常會被忽略。</p>
                <p><strong>第二站節點</strong>通常出現在更晚時間、位於已知第一站之後，或缺乏直接從注射點連到該節點的早期動態證據。這類節點應和真正 sentinel node 分開描述。</p>
            </div>`
        },
        {
            type: "section",
            title: "六、 常見陷阱與限制",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>shine-through：</strong>注射點太亮會遮蔽鄰近前哨節點，尤其病灶靠近腋窩或近端淋巴區時最常見。</li>
                    <li><strong>皮膚污染或注射殘留：</strong>若沒先排除，可能把表淺污染誤判成節點。</li>
                    <li><strong>引流阻塞或既往手術改道：</strong>會造成節點不顯影或異位引流，不能把「沒看到」直接解讀成沒有淋巴路徑。</li>
                    <li><strong>術前等待過久：</strong>若時序沒對好，術中 probe 計數可能下降，讓明明存在的節點變得難找。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "七、 報告與溝通建議",
            icon: "📝",
            html: `<div class="prose">
                <ul>
                    <li>記錄 tracer、總活度、注射點數與注射層次，並註明是同日還是前一日手術流程。</li>
                    <li>描述最早顯影節點位置、是否多重引流、是否有異位引流與是否加做 SPECT/CT。</li>
                    <li>若有 shine-through 或定位限制，要在報告中主動提醒術中可能較難辨識。</li>
                    <li>結論應輸出外科可直接使用的語言，例如「右乳病灶主要引流至右腋窩第一站，另見內乳鏈早期節點」。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ol>
                    <li>Giammarile F, Alazraki N, Aarsvold JN, et al. The EANM and SNMMI practice guideline for lymphoscintigraphy and sentinel node localization in breast cancer. <em>Eur J Nucl Med Mol Imaging</em>. 2013;40:1932-1947.</li>
                    <li>Bluemel C, Herrmann K, Giammarile F, et al. EANM practice guidelines for lymphoscintigraphy and sentinel lymph node biopsy in melanoma. <em>Eur J Nucl Med Mol Imaging</em>. 2015;42:1750-1766.</li>
                    <li>Appropriate Use Criteria for Lymphoscintigraphy in Sentinel Node Mapping and Lymphedema/Lipedema. SNMMI Appropriate Use Criteria. 2023.</li>
                    <li>Sentinel Lymph Node Evaluation: What the Radiologist Needs to Know. <em>Radiographics</em>. 2019.</li>
                </ol>
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
    subtitle: "GI_Bleeding（對應 GIBleed）— 活動性出血定位",
    category: "gi",
    readerGuideMode: "article",
    readerGuideArticle: [
        "GI bleed scintigraphy 的價值在於長時間追蹤標記 RBC，特別適合間歇性出血。",
        "判讀重點是『先出現、持續存在、並沿腸道方向移動』，三條件缺一不可。",
        "若出血速率高且病況不穩，CTA/血管攝影可能更快；報告需清楚寫出核醫檢查在整體流程中的定位。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "RBC 標記", value: "in vivo / modified / in vitro" },
            { label: "早期動態", value: "注射後即刻連續觀察" },
            { label: "延長觀察", value: "必要時延遲影像至數小時" }
        ],
        article: [
            "建議先做早期動態影像以抓住初始出血點，再依臨床狀況追加間隔式延遲影像。",
            "必要時加入 SPECT/CT 可提升解剖定位，但前提是出血訊號在可比時間窗內仍可辨識。",
            "流程長短與終止條件需依病況穩定度、介入計畫與院內 protocol 調整。"
        ],
        note: "偵測下限、動態時間長度與延遲策略之精確數字需按文獻與院內流程確認；需要 Codex 補證據。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位與適用場景",
            icon: "📌",
            html: `<div class="prose">
                <p>Tc-99m 標記紅血球掃描用於偵測活動性腸胃道出血，特別是臨床懷疑間歇性出血、但內視鏡或其他檢查尚未定位時。</p>
                <p>由於標記紅血球可在循環中維持較長時間，能在較長觀察窗中捕捉短暫出血事件。此檢查常作為先定位區段、再導向 CTA、血管攝影或手術的橋接工具。</p>
            </div>`
        },
        {
            type: "section",
            title: "核心適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <p><strong>適應症：</strong>不明來源之活動性下消化道出血、間歇性出血定位、介入治療前區段導向。</p>
                <p><strong>限制：</strong>空間解析度不如 CTA，快速大量出血時可能因移動過快而定位困難。</p>
                <p>陰性結果不代表完全無出血。</p>
                <p>與 CTA/血管攝影比較之敏感度與選擇策略需依文獻等級補充；需要 Codex 補證據。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人準備",
            icon: "🧑‍⚕️",
            html: `<div class="prose">
                <ul>
                    <li>確認近期輸血、介入、內視鏡止血與生命徵象，因為這些會改變影像時機與判讀背景。</li>
                    <li>建立可長時間觀察的流程，並預先告知病人可能需追加延遲影像。</li>
                    <li>是否禁食、是否先做 CTA 等流程排序依急診/消化道出血 pathway；需要 Codex 補證據。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "放射藥物與劑量",
            icon: "💉",
            html: `<div class="prose">
                <p>藥物為 <strong>Tc-99m 標記紅血球（RBC）</strong>，可採 in vivo、modified in vivo 或 in vitro 標記法。不同標記法影響標記效率與背景訊號，應在報告或技術紀錄中保留方法資訊。</p>
                <p>劑量範圍、標記效率門檻與兒科調整值需回扣院內流程與指引條文；需要 Codex 補證據。</p>
            </div>`
        },
        {
            type: "section",
            title: "攝影流程與重建/處理",
            icon: "🖥️",
            html: `<div class="prose">
                <p>建議先連續動態影像觀察初始出血出現點，再做間隔式延遲影像追蹤訊號移動路徑。</p>
                <p>若訊號持續且局部化，可追加 SPECT/CT 幫助解剖定位。後處理重點是以時間序列追蹤，而非單張靜態亮點判定。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <ol>
                    <li>先找「最早出現」異常訊號位置。</li>
                    <li>確認訊號在後續影像「持續存在」而非短暫噪訊。</li>
                    <li>確認訊號「沿腸道方向移動」並符合腸道解剖。</li>
                    <li>結論時描述最可能出血區段與信心等級，並給出下一步檢查建議。</li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "pitfalls（含假陽性/假陰性）",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>假陽性：</strong>泌尿道放射性、血管瘤、動脈瘤、生殖泌尿系統集積或游離放射性污染。</li>
                    <li><strong>假陰性：</strong>間歇性且觀察窗外出血、低速出血、已止血或標記效率不佳。</li>
                    <li><strong>判讀陷阱：</strong>只看單張亮點、忽略時間序列與腸道移動軌跡。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "報告建議",
            icon: "📝",
            html: `<div class="prose">
                <p>報告應記載標記方法、觀察總時長、最早異常出現時間、疑似出血區段、訊號移動特徵、與臨床處置建議（如 CTA/血管攝影）。</p>
                <p>若陰性，需標示觀察窗限制與不排除間歇性出血，避免被解讀為「完全排除出血」。</p>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ul>
                    <li>GI bleeding scintigraphy 實務指引與技術標準（版本待 Codex 補證據）。</li>
                    <li>RBC 標記法比較與臨床效能研究（條目待 Codex 補證據）。</li>
                    <li>消化道出血多模態流程（核醫/CTA/血管攝影）共識文獻（需 Codex 補證據）。</li>
                </ul>
            </div>`
        }
    ]
},

Meckel: {
    title: "梅克爾憩室掃描",
    subtitle: "Meckel — 異位胃黏膜導致下消化道出血評估",
    category: "gi",
    readerGuideMode: "article",
    readerGuideArticle: [
        "Meckel 掃描是針對異位胃黏膜的功能影像，不是所有 Meckel 憩室都會陽性。",
        "判讀核心是『與胃同步出現、位置合理、隨時間增強』，並排除泌尿道與腸道活動偽影。",
        "前處理藥物可提升敏感度，但需與流程時間點一併記錄。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "靜脈注射", value: "Tc-99m Pertechnetate" },
            { label: "動態攝影", value: "即刻起連續約 30–60 分鐘" },
            { label: "必要補拍", value: "延遲或 SPECT/CT" }
        ],
        note: "常見流程包含禁食 4–6 小時、注射後立即動態 + 30–60 分靜態；必要時加 lateral/post-void 或延遲影像以排除泌尿道偽影。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位與適用場景",
            icon: "📌",
            html: `<div class="prose">
                <p>Meckel 掃描主要用於兒童或青少年不明原因下消化道出血，目標是偵測含異位胃黏膜的 Meckel 憩室。</p>
                <p>當內視鏡難以到達或結果陰性時，它可提供重要方向。</p>
            </div>`
        },
        {
            type: "section",
            title: "核心適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <p><strong>適應症：</strong>無痛性下消化道出血、反覆便血且懷疑 Meckel、兒科出血來源釐清。</p>
                <p><strong>限制：</strong>不含異位胃黏膜的憩室可能陰性；成人表現與兒科不同，陽性預測值受族群影響。文獻常見敏感度約 85%、特異度約 95%，但仍需結合臨床前測機率。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人準備",
            icon: "🧑‍⚕️",
            html: `<div class="prose">
                <ul>
                    <li>確認近期出血時序、輸血史與相關胃腸藥物使用。</li>
                    <li>依流程安排禁食與前處理藥物，並記錄給藥時點。</li>
                    <li>幼兒需評估鎮靜需求與家屬配合度。</li>
                </ul>
                <p>常見前處理包括 H2 blocker（降低分泌、提升病灶保留）、必要時 glucagon（減少蠕動）；是否加 pentagastrin 依院內流程與可近性決定。</p>
            </div>`
        },
        {
            type: "section",
            title: "放射藥物與劑量",
            icon: "💉",
            html: `<div class="prose">
                <p>示蹤劑為 <strong>Tc-99m pertechnetate</strong>。兒科常見劑量為 <strong>0.05–0.1 mCi/kg</strong>（常設最小活度 1–2 mCi）；成人依院內 SOP 使用固定活度。若搭配 H2 blocker 或其他前處理，需在紀錄中保留時序。</p>
            </div>`
        },
        {
            type: "section",
            title: "攝影流程與重建/處理",
            icon: "🖥️",
            html: `<div class="prose">
                <p>注射後立即進行連續動態採集，必要時加延遲影像。疑難個案可加 SPECT/CT 釐清與腸袢、泌尿道的相對位置。</p>
                <p>處理重點是和胃黏膜顯影時序對照，而非只看單點高攝取。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <ol>
                    <li>先確認胃顯影時間與整體品質。</li>
                    <li>尋找與胃同步或近同步出現之異位灶。</li>
                    <li>判斷位置是否符合末端迴腸附近解剖，並排除泌尿道訊號。</li>
                    <li>整合臨床出血表現，給出陽性/疑似/陰性與後續建議。</li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "pitfalls（含假陽性/假陰性）",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>假陽性：</strong>泌尿道活性、腸道發炎、血管病灶、腸套疊或 duplication cyst 等異位胃黏膜造成誤判。</li>
                    <li><strong>假陰性：</strong>無異位胃黏膜、出血期外檢查、前處理不足或技術品質不佳。</li>
                    <li><strong>常見錯誤：</strong>未做與胃同步性比對、未加 lateral/post-void 就直接下陽性結論。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "報告建議",
            icon: "📝",
            html: `<div class="prose">
                <p>報告建議寫明前處理、採集時間窗、可疑灶與胃同步性、解剖位置信心等級、與是否建議進一步內視鏡/外科評估。</p>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ul>
                    <li>Sfakianakis GN, Conway JJ. Detection of ectopic gastric mucosa by scintigraphy. <em>J Nucl Med</em>. 1981;22(7):647-654.</li>
                    <li>Ford PV, et al. Procedure Guideline for GI Bleeding and Meckel’s Diverticulum Scintigraphy. <em>J Nucl Med</em>. 1999;40:1226-1232.</li>
                    <li>SNMMI pediatric Meckel scintigraphy recommendations（前處理、側位與 post-void 技術）。</li>
                </ul>
            </div>`
        }
    ]
},

Liver: {
    title: "肝脾臟掃描",
    subtitle: "Hepatobiliary 補充段（Liver）— 肝脾網狀內皮系統評估",
    category: "gi",
    readerGuideMode: "article",
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "靜脈注射", value: "Tc-99m Phytate" },
            { label: "等待", value: "15–20 分" },
            { label: "攝影", value: "20–30 分" }
        ],
        note: "本區塊為 Hepatobiliary 單元必要補充，細節參數需依院內 protocol；需要 Codex 補證據。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位與適用場景",
            icon: "📌",
            html: `<div class="prose">
                <p>Liver/Spleen colloid 掃描反映網狀內皮系統（RES）分布，主要用於肝脾功能分布與 colloid shift 評估，常作為肝膽核醫單元的補充資訊，而非單獨第一線診斷。</p>
            </div>`
        },
        {
            type: "section",
            title: "核心適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <p><strong>適應症：</strong>colloid shift 評估、脾臟功能性組織定位（含副脾）、部分肝脾分布異常問題。</p>
                <p><strong>限制：</strong>解析度與特異性有限，結論通常需與 CT/MRI、血液學與臨床資料整合。</p>
                <p>量化指標與分級門檻需補證；需要 Codex 補證據。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人準備",
            icon: "🧑‍⚕️",
            html: `<div class="prose">
                <p>通常準備較單純，重點在確認近期對比檢查、肝功能背景與是否能完成多體位影像。具體禁食需求依院內流程。</p>
            </div>`
        },
        {
            type: "section",
            title: "放射藥物與劑量",
            icon: "💉",
            html: `<div class="prose">
                <p>常用 Tc-99m phytate 或 sulfur colloid。成人/兒科活度範圍與最小劑量需依指引與院內流程核對；需要 Codex 補證據。</p>
            </div>`
        },
        {
            type: "section",
            title: "攝影流程與重建/處理",
            icon: "🖥️",
            html: `<div class="prose">
                <p>平面多視角為主，必要時加做 SPECT/CT 釐清肝脾邊界或副脾定位。影像處理需保留可比較視窗，避免過度後處理掩蓋分布差異。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <ol>
                    <li>先評估整體分布是否符合正常肝主導攝取。</li>
                    <li>觀察脾臟與骨髓相對攝取，判斷是否 colloid shift。</li>
                    <li>若有局灶缺損，回扣 CT/MRI 判斷結構性病灶或偽影。</li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "pitfalls（含假陽性/假陰性）",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>假陽性：</strong>技術性不均、體位與衰減造成的相對缺損。</li>
                    <li><strong>假陰性：</strong>早期或輕度功能異常可能不明顯，需結合其他檢查。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "報告建議",
            icon: "📝",
            html: `<div class="prose">
                <p>建議描述肝脾骨髓相對攝取型態、是否見局灶缺損、與臨床意義（如肝硬化相關 shift 或副脾可能性）。</p>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ul>
                    <li>Liver-spleen scintigraphy 技術與應用文獻（待 Codex 補證據）。</li>
                </ul>
            </div>`
        }
    ]
},

LiverHemangioma: {
    title: "肝血管瘤 RBC 掃描",
    subtitle: "LiverHemangioma — RBC 延遲填充特徵定位",
    category: "gi",
    readerGuideMode: "article",
    readerGuideArticle: [
        "肝血管瘤核醫判讀重點是延遲相血池填充行為，而非早期血流相是否明顯。",
        "若病灶太小或位置貼近大血管，需先揭露可見度限制，避免過度宣稱陰性。",
        "核醫價值在於提升特異性、降低不必要侵入性處置。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "RBC 標記", value: "體內/體外法標記紅血球" },
            { label: "早期相", value: "即時或早期血池影像" },
            { label: "延遲相", value: "1–3 小時 planar ± SPECT/CT" }
        ],
        note: "典型流程為早期血池 + 1–2 小時延遲血池（必要時 SPECT/CT）；關鍵是確認是否出現 cold→iso→hot 的時間演變。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位與適用場景",
            icon: "📌",
            html: `<div class="prose">
                <p>Liver hemangioma RBC 掃描主要用於 CT/MRI 無法明確定性時的補充檢查，尤其是希望避免侵入性處置的個案。</p>
                <p>它利用血池動態特性提升血管瘤診斷信心。</p>
            </div>`
        },
        {
            type: "section",
            title: "核心適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <p><strong>適應症：</strong>疑似肝血管瘤但結構影像不典型、需與轉移/其他血管性病灶鑑別。</p>
                <p><strong>限制：</strong>小病灶、深部病灶或鄰近大血管時敏感度下降；極少數血管性病灶可呈類似血池訊號。病灶 <1.5–2 cm 時假陰性風險明顯上升，需主動揭露限制。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人準備",
            icon: "🧑‍⚕️",
            html: `<div class="prose">
                <ul>
                    <li>確認既有 CT/MRI 位置與大小，作為核醫對照目標。</li>
                    <li>說明檢查含延遲影像，需回到攝影室追加掃描。</li>
                    <li>記錄近期輸血或血液疾病背景，避免影響 RBC 標記品質判讀。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "放射藥物與劑量",
            icon: "💉",
            html: `<div class="prose">
                <p>示蹤劑為 Tc-99m 標記紅血球（RBC），可採體內、改良體內或體外標記。成人常見活度約 <strong>20–30 mCi</strong>；若追求最佳品質，體外標記效率可達 >97%，並應在技術紀錄中明確註記標記法。</p>
            </div>`
        },
        {
            type: "section",
            title: "攝影流程與重建/處理",
            icon: "🖥️",
            html: `<div class="prose">
                <p>流程通常包含早期血池與延遲血池影像，必要時加做 SPECT/CT 強化定位。典型血管瘤表現為延遲相逐步填充並持續高攝取（cold→iso→hot）。</p>
                <p>後處理需與 CT/MRI 疑似病灶逐一對位，避免把肝外血池誤當病灶。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <ol>
                    <li>先核對早期相與延遲相品質及標記效率。</li>
                    <li>找出對應結構影像病灶位置的血池訊號。</li>
                    <li>判斷是否呈現延遲填充/持續保留之典型型態。</li>
                    <li>輸出典型、非典型或不確定，並建議後續影像策略。</li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "pitfalls（含假陽性/假陰性）",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>假陽性：</strong>鄰近血管結構重疊、血池背景高訊號、肝外活性誤配準，少數血管性惡性病灶可呈類似填充。</li>
                    <li><strong>假陰性：</strong>小病灶（特別是 &lt;2 cm）、低對比、標記效率不足或延遲時間不足。</li>
                    <li><strong>判讀陷阱：</strong>只看單時點而未比較延遲填充動態。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "報告建議",
            icon: "📝",
            html: `<div class="prose">
                <p>報告建議註明標記方式、早/延遲相表現、與 CT/MRI 對位結果、典型度判斷與是否建議追蹤或追加檢查。</p>
            </div>`
        },
        {
            type: "section",
            title: "文獻圖像示例",
            icon: "🖼️",
            html: `<div class="prose">
                <p>以下為已裁切之實際文獻圖像（figure-level crop），優先展示延遲填充判讀與小病灶可見度限制。</p>
                <figure>
                    <img src="assets/paper-figures/LiverHemangioma/JNM_1991_Fig2_cold_iso_hot_sequence.png" alt="Hepatic hemangioma three-phase example with delayed blood-pool positivity" loading="lazy" />
                    <figcaption>來源：Ziessman HA, et al. <em>J Nucl Med</em>. 1991;32(11):2086-2091, Figure 2。示範多病灶在 RBC 影像中的陽性型態與 SPECT 橫切比較。</figcaption>
                </figure>
                <figure>
                    <img src="assets/paper-figures/LiverHemangioma/JNM_1991_Fig1_SPECT_small_lesion.png" alt="Small hemangioma visibility difference between SPECT configurations" loading="lazy" />
                    <figcaption>來源：Ziessman HA, et al. <em>J Nucl Med</em>. 1991;32(11):2086-2091, Figure 1。重點是小病灶在不同 SPECT 條件下可見度差異，提醒 &lt;2 cm 假陰性風險。</figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ul>
                    <li>Ziessman HA, et al. Improved detection of hepatic hemangioma with high-resolution SPECT blood pool imaging. <em>J Nucl Med</em>. 1991;32(11):2086-2091.</li>
                    <li>Krausz Y, et al. SPECT/CT in the evaluation of liver lesions. <em>Semin Nucl Med</em>. 2007;37(5):303-313.</li>
                    <li>SNMMI standards for RBC labeling and blood-pool imaging workflow（作為院內 hemangioma SOP 基礎）。</li>
                </ul>
            </div>`
        }
    ]
},

Biliary: {
    title: "膽道掃描 HIDA",
    subtitle: "Hepatobiliary（對應 Biliary）— 膽囊炎、膽道阻塞與膽汁動力評估",
    category: "gi",
    readerGuideMode: "article",
    readerGuideArticle: [
        "HIDA 掃描最常處理的是右上腹痛情境下的膽囊顯影問題，但真正臨床價值在於把膽汁流向時間軸說清楚。",
        "單看『有沒有顯影』不夠；需同時考慮肝攝取、膽道通暢、腸道顯影與藥物介入條件。",
        "禁食過久、鴉片類藥物與重度肝功能異常都會改變判讀前提，報告應主動揭露限制。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "靜脈注射", value: "Tc-99m DISIDA" },
            { label: "動態攝影", value: "60 分鐘" },
            { label: "必要時", value: "延遲至 4 hr" }
        ],
        note: "是否使用 morphine/CCK 與延遲時間上限需依院內 protocol；需要 Codex 補證據。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位與適用場景",
            icon: "📌",
            html: `<div class="prose">
                <p>Hepatobiliary scintigraphy 以膽汁排泄動態為主軸，用來評估疑似急性膽囊炎、膽道阻塞、術後膽漏與功能性膽囊排空問題。</p>
                <p>它特別適合超音波/CT 結果不一致，但臨床仍高度懷疑膽道病變的情境。</p>
            </div>`
        },
        {
            type: "section",
            title: "核心適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <p><strong>適應症：</strong>急性膽囊炎鑑別、膽道阻塞層級評估、術後膽漏、功能性膽囊問題（含 ejection fraction 流程）。</p>
                <p><strong>限制：</strong>重度肝功能異常、長期禁食、鴉片類藥物、近期介入治療可造成非典型顯影，降低判讀特異性。</p>
                <p>各適應症的效能數據與 cut-off 需文獻對位；需要 Codex 補證據。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人準備",
            icon: "🧑‍⚕️",
            html: `<div class="prose">
                <ul>
                    <li>確認禁食時長（過短或過長都會影響膽囊動態），並核對止痛藥與鴉片使用史。</li>
                    <li>嬰幼兒疑似膽道閉鎖時，是否預先用藥與準備流程應依小兒 protocol。</li>
                    <li>若預計做 CCK 相關功能評估，需先確認病人可配合時間軸與症狀監測。</li>
                </ul>
                <p>具體禁食區間與用藥暫停時間需依院內流程；需要 Codex 補證據。</p>
            </div>`
        },
        {
            type: "section",
            title: "放射藥物與劑量",
            icon: "💉",
            html: `<div class="prose">
                <p>常用 Tc-99m IDA 類藥物（如 DISIDA/mebrofenin 類）。活度設計需依成人/兒科、肝功能與預計觀察時間調整。</p>
                <p>不同藥物間肝攝取與膽汁排泄特性差異、與兒科最小劑量規範：需要 Codex 補證據。</p>
            </div>`
        },
        {
            type: "section",
            title: "攝影流程與重建/處理",
            icon: "🖥️",
            html: `<div class="prose">
                <p>動態影像由注射後即刻開始，持續觀察肝攝取、膽道通行、膽囊顯影與腸道排泄。若膽囊未顯影，可依流程進入延遲相或藥物介入流程。</p>
                <p>功能性評估時需明確記錄刺激方式、時間與計算方法，避免跨病例不可比。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <ol>
                    <li>先確認肝攝取是否足以進入可判讀狀態。</li>
                    <li>依時間軸判斷膽囊是否顯影、膽道是否通暢、腸道是否見放射性。</li>
                    <li>整合臨床症狀與藥物背景，區分急性膽囊炎、慢性功能異常與非特異變化。</li>
                    <li>若為術後案例，特別描述疑似膽漏位置與外溢路徑。</li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "pitfalls（含假陽性/假陰性）",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>假陽性：</strong>禁食過久、重症或肝功能不良導致膽囊顯影延遲。</li>
                    <li><strong>假陰性：</strong>部分早期或間歇性阻塞、或介入後短期變化未被單次流程捕捉。</li>
                    <li><strong>技術陷阱：</strong>未記錄藥物介入時點，造成流程不可重現。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "報告建議",
            icon: "📝",
            html: `<div class="prose">
                <p>報告需明確寫出動態時間軸、關鍵器官顯影時序、是否有藥物介入、最可能診斷與限制。若建議追加超音波/MRCP/ERCP，請指出臨床問題導向。</p>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ul>
                    <li>SNMMI/EANM hepatobiliary scintigraphy 實務指引（條文待 Codex 補證據）。</li>
                    <li>急性膽囊炎與膽漏核醫評估文獻（待 Codex 補證據）。</li>
                    <li>小兒膽道閉鎖核醫流程文獻（待 Codex 補證據）。</li>
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
    subtitle: "Bone Scan（Tc-99m MDP/HDP）— 以成骨活性定位病灶",
    category: "bone-renal",
    readerGuideMode: "article",
    readerGuideArticle: [
        "Bone scan 的價值在於同時看到「全身分布 + 骨代謝活性」，在骨轉移分期、追蹤與疑難骨痛評估中，常是第一線全身檢查。",
        "判讀不能只看亮點數量；要先確認技術品質，再區分轉移、退化、外傷、感染與治療後修復反應，最後才下結論。",
        "臨床陷阱主要來自假陽性（退化、骨折修復、污染）與假陰性（純溶骨病灶、極早期病灶、治療後變化），因此報告必須清楚說明限制與後續建議。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "注射期", value: "Tc-99m MDP/HDP 靜脈注射" },
            { label: "分布期", value: "2–4 小時（補水 + 排尿）" },
            { label: "收像期", value: "全身 planar ± SPECT/CT" }
        ],
        article: [
            "注射後等待 2–4 小時是為了提高骨/軟組織對比；此段期間需主動補水並頻繁排尿，以降低膀胱劑量與骨盆背景干擾。",
            "標準延遲相可先做前後位全身掃描，再依症狀或可疑區域補局部靜態影像；脊椎、骨盆、肋骨等重疊區建議加做 SPECT/CT。",
            "若為感染或血流問題評估，可加做三相骨掃描（flow、blood pool、delayed），將灌流與延遲成骨訊號分開判讀。"
        ],
        note: "SNMMI 2024 與 EANM 2016 已提供延遲相與掃描/計數建議；院內 protocol 應在此基礎上鎖定固定參數以利序列比較。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位與適用場景",
            icon: "📌",
            html: `<div class="prose">
                <p>Tc-99m MDP/HDP 骨掃描透過與 hydroxyapatite 的化學吸附，反映血流灌注與成骨活性。</p>
                <p>它不是單純找骨頭形狀異常，而是抓骨代謝正在變化的區域，因此常早於一般結構影像出現異常訊號。</p>
                <p>臨床最常見場景包括：<strong>腫瘤骨轉移全身篩檢與追蹤</strong>、不明骨痛定位、疑似骨感染、術後或外傷後病灶活性評估。當目標是一次看全身、先抓高風險區時，Bone scan 仍是高可近性的一線工具。</p>
            </div>`
        },
        {
            type: "section",
            title: "核心適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <p><strong>核心適應症：</strong></p>
                <ul>
                    <li>腫瘤學：乳癌、攝護腺癌、肺癌等骨轉移分期與治療追蹤（以成骨性病灶較敏感）。</li>
                    <li>骨科與感染：壓力性骨折、骨髓炎、人工關節鬆脫與感染鑑別（常需三相或 SPECT/CT 輔助）。</li>
                    <li>代謝性骨病：Paget's disease 與廣泛骨病變分布評估。</li>
                    <li>症狀導向：不明原因骨痛或局部反覆疼痛定位。</li>
                </ul>
                <p><strong>主要限制：</strong>對純溶骨病灶（尤其多發性骨髓瘤）可能明顯低估，陰性結果不能直接排除骨髓侵犯。</p>
                <p>退化、外傷與術後修復可造成假陽性。當臨床問題偏向骨髓或皮質微結構（例如 MM、早期溶骨病灶）時，需整合 CT/MRI/PET 以避免過度或不足解讀。</p>
            </div>`
        },
        {
            type: "section",
            title: "病人準備",
            icon: "🧑‍⚕️",
            html: `<div class="prose">
                <ul>
                    <li>通常不需禁食；注射後到收像前建議補水約 500–1000 mL 並頻繁排尿。</li>
                    <li>上機前排空膀胱、移除金屬物品，降低骨盆重疊與偽影。</li>
                    <li>確認近期治療史（如 G-CSF、雙磷酸鹽、放療）與外傷/手術史，避免將修復反應誤判為進展。</li>
                    <li>若有注射外滲風險或活動困難，應在技術紀錄註明，供醫師判讀時校正。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "放射藥物與劑量",
            icon: "💉",
            html: `<div class="prose">
                <p>常用放射藥物為 <strong>Tc-99m MDP</strong>（或 Tc-99m HDP）。SNMMI 2024 建議成人活度約 <strong>500–1,110 MBq（約 13–30 mCi）</strong>；EANM 2016 常用範圍為 <strong>300–740 MBq（約 8–20 mCi）</strong>，實務上可依設備與病人體型落在此區間。</p>
                <p>MDP 與 HDP 在臨床判讀邏輯相近；目前頁面不主張兩者孰優的固定定量差距，以避免超出已驗證文獻。</p>
            </div>`
        },
        {
            type: "section",
            title: "攝影流程與重建/處理",
            icon: "🖥️",
            html: `<div class="prose">
                <p><strong>標準流程：</strong>延遲相於注射後 2–4 小時進行全身前後位掃描。可疑區再加拍局部靜態影像。</p>
                <p>若平面影像無法定位（常見於脊椎、肋骨、骨盆），建議加做 SPECT/CT 提高特異性。</p>
                <p><strong>三相應用：</strong>感染或複雜疼痛評估可加 flow（秒級動態）與 blood pool（注射後早期），用來區分灌流/發炎與延遲成骨反應。</p>
                <p><strong>重建與處理：</strong>SPECT 常採 OSEM 類迭代重建搭配平滑濾波，CT 以 low-dose 為衰減校正與解剖定位用途。SNMMI 2024 可見常用參數約 3–5 iterations、8–10 subsets，但實際仍應固定院內版本以維持追蹤一致性。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <p><strong>建議固定讀片順序：</strong>先品質、後局部、再全局。</p>
                <ul>
                    <li>品質檢查：是否有 motion、注射外滲、污染、腎臟/膀胱顯影是否合理。</li>
                    <li>局部判讀：逐區找 focal 或 asymmetric uptake，與退化關節、骨折線、手術區比對。</li>
                    <li>全局型態：是否出現 super scan、廣泛骨髓抑制樣態、或腎臟顯影異常。</li>
                    <li>必要時整合 SPECT/CT 解剖定位，將「可疑熱點」轉化為可臨床行動的診斷語句。</li>
                </ul>
                <p>Hot spot 需區分轉移、骨折修復、感染與退化；Cold spot 需警覺純溶骨轉移、早期 AVN 或治療後低活性區，避免僅以「不亮」排除病灶。</p>
            </div>`
        },
        {
            type: "section",
            title: "Pitfalls（含假陽性 / 假陰性）",
            icon: "⚠️",
            html: `<div class="prose">
                <p><strong>假陽性常見來源：</strong>退化性關節病變、近期骨折/術後修復、尿液污染、注射外滲、金屬器材周圍反應。</p>
                <p><strong>假陰性常見來源：</strong>純溶骨病灶、極早期轉移、治療後暫時低活性區、技術條件不佳造成訊號不足。</p>
                <ul>
                    <li><strong>Super scan：</strong>全身骨攝取瀰漫升高且腎臟不顯影，易被誤當正常高品質影像。</li>
                    <li><strong>Flare phenomenon：</strong>治療後短期熱點增加可能代表修復，不等於進展；需合併症狀、腫瘤指標與後續影像。</li>
                    <li><strong>骨盆判讀陷阱：</strong>膀胱活性會遮蔽病灶，必要時排尿後重照。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "Multiple myeloma：國際文獻評論與建議",
            icon: "🧬",
            html: `<div class="prose">
                <p><strong>為何 MM 不能只靠 bone scan？</strong>多發性骨髓瘤以溶骨病灶與骨髓浸潤為主，成骨反應常不足，導致 Tc-99m MDP/HDP 可能低估病灶量；陰性骨掃描不能排除臨床上重要的 MM 骨病變。</p>
                <p><strong>國際共識重點：</strong></p>
                <ul>
                    <li>IMWG 2009 共識明確指出 bone scintigraphy 不適合作為 MM routine staging 主軸。</li>
                    <li>EANM 2016 guideline 在「不建議優先使用 bone scan」情境中列入 plasmacytoma / multiple myeloma。</li>
                    <li>IMWG 2019 建議以 <strong>whole-body low-dose CT、whole-body MRI、FDG PET/CT</strong> 作為 MM 主要影像策略。</li>
                </ul>
                <p><strong>臨床可行建議：</strong>若臨床懷疑 MM（M-protein、骨痛、貧血、腎功能惡化）但 bone scan 陰性或與症狀不符，報告應主動註記「不排除 MM 骨病灶」，並建議轉做 WB-LDCT / WB-MRI / FDG PET/CT。</p>
            </div>`
        },
        {
            type: "section",
            title: "報告建議",
            icon: "📝",
            html: `<div class="prose">
                <p>報告應至少包含：檢查目的、藥物與活度、收像時點（含是否三相/SPECT/CT）、技術品質（motion/外滲/污染）、病灶位置與型態、與前次比較、結論分層（likely benign / equivocal / suspicious for metastasis）。</p>
                <p>若受限於缺乏對照影像或技術條件，需明確寫出限制與下一步建議（例如加做 targeted SPECT/CT、MRI 或短期追蹤），避免只留「疑似」而無行動指引。</p>
            </div>`
        },
        {
            type: "section",
            title: "文獻圖像示例",
            icon: "🖼️",
            html: `<div class="prose">
                <p>骨掃描最重要的影像教學，第一步是把正常分布記熟，第二步才是辨認「太多、太亮、太對稱」其實可能是嚴重病灶。以下示例刻意保留正常、典型 metastatic superscan，以及會誤導判讀的 hot-kidney 情境。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/BoneScan/EANM_2016_Fig1_Normal_WholeBody.png" alt="Normal whole-body bone scintigraphy from EANM guideline" loading="lazy" />
                    <figcaption>圖 1．正常全身骨掃描。來源：Van den Wyngaert T, et al. <em>EANM practice guidelines for bone scintigraphy</em>. <em>Eur J Nucl Med Mol Imaging</em>. 2016;43:1723-1738, p.1733 Figure 1。可作為判讀基準：骨攝取應大致對稱，腎臟與膀胱通常可見，且肋骨、脊椎、薦髂關節邊界可清楚辨認。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/BoneScan/Diagnostics_2024_Fig1_Superscan.jpg" alt="Metastatic superscan examples on bone scintigraphy" loading="lazy" />
                    <figcaption>圖 2．metastatic superscan 的代表病例。來源：Zacho HD, et al. <em>Superscan Pattern on Bone Scintigraphy: A Comprehensive Review</em>. <em>Diagnostics</em>. 2024;14, Figure 1。教學重點是骨架瀰漫、強烈、相對對稱的攝取，軟組織與泌尿系統背景被壓低，容易讓初學者誤以為只是「品質很好」的正常片。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/BoneScan/Diagnostics_2024_Fig2_HotKidneysPitfall.jpg" alt="Hot kidneys pitfall obscuring superscan interpretation on bone scan" loading="lazy" />
                    <figcaption>圖 3．不要把「有看到腎臟」就當成排除 superscan。來源：同篇 Figure 2。此例因 obstructive uropathy 造成雙腎顯影偏高，但 SPECT/CT 仍證實廣泛骨髓侵犯；這正是 bone scan 判讀中很典型的 false reassurance 陷阱。</figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ol>
                    <li>Jana S, et al. SNMMI Procedure Standard/EANM Practice Guideline for Bone Scintigraphy 4.0. <em>J Nucl Med Technol</em>. 2024;52(4):333-342.</li>
                    <li>Dimopoulos MA, et al. IMWG consensus statement on imaging in multiple myeloma. <em>Leukemia</em>. 2009;23:1545-1556.</li>
                    <li>Hillengass J, et al. IMWG consensus recommendations on imaging in monoclonal plasma cell disorders. <em>Lancet Oncol</em>. 2019;20(6):e302-e312.</li>
                    <li>Van den Wyngaert T, et al. EANM practice guidelines for bone scintigraphy. <em>Eur J Nucl Med Mol Imaging</em>. 2016;43:1723-1738.</li>
                    <li>Hillengass J, et al. Whole-body CT versus conventional skeletal survey in multiple myeloma (IMWG study). <em>Blood Cancer J</em>. 2017;7:e599.</li>
                </ol>
            </div>`
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
    title: "腎利尿造影與腎功能評估（Tc-99m DTPA / MAG3）",
    subtitle: "Renogram（Tc-99m DTPA / MAG3）— 腎絲球過濾 (GFR) 與腎小管分泌 (ERPF) 整合評估",
    category: "bone-renal",
    readerGuideMode: "article",
    readerGuideArticle: [
        "本指引整合 Technetium-99m DTPA 與 MAG3 腎動態造影，依據『檢前補水閘門 -> 示蹤劑與排泄生理對照 -> 利尿藥物負荷 -> 腎圖曲線判讀與分腎定量 -> 避坑指引』的臨床工作流進行一體化編寫。",
        "自適應排版優化：全面採用層次化的臨床敘事段落與重點資訊卡片，確保在行動裝置與桌面端均能獲得 100% 垂直滑動、清晰無瑕的閱讀體驗。",
        "國際指南佐證：全文依據 SNMMI/EANM 2018 利尿腎動態造影指南與近五年臨床實務，提供核醫專科之核心實踐指引。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "1. 檢前準備", value: "充分水合 (補水 5-10 mL/kg)、排空膀胱" },
            { label: "2. 動態收像", value: "Flow 相 (秒級) + Functional 相 (10-30s/frame) 掃描 20-30 分鐘" },
            { label: "3. 利尿負荷", value: "F+20 (最常用，給示蹤劑後 20 分鐘給予 Lasix) 或 F0/F-15 流程" }
        ],
        article: [
            "檢查前水合狀態是排空 washout 判讀的成敗關鍵。脫水會使腎臟排泄遲緩，造成严重的假陽性阻塞影像。",
            "判讀的核心是區分『功能性尿路擴張（非阻塞）』與『器質性機械性阻塞』；單純的影像水腎外觀不等於阻塞，必須依賴利尿後的 Washout 曲線半衰期 (T1/2)。",
            "在慢性腎功能不全或新生兒個案中，由於腎小球濾過率低下，應首選排泄率更高的 Tc-99m MAG3，以維持高信噪比與穩定的腎圖曲線。"
        ],
        note: "臨床實務應配合院內設備與 Lasix 仿單執行；移植腎因位於骨盆腔前壁，應採 Anterior (前位) 掃描。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：回答「是水腎擴張，還是真正阻塞？」</h4>
            <p>利尿腎動態造影 (Diuretic Renography) 的核心價值在於動態評估上尿路引流功能。當超音波或 CT 發現腎盂擴張（水腎）時，本檢查藉由監測利尿劑 (Furosemide / Lasix) 刺激下的示蹤劑排泄洗脫速度，精確判定是<strong>非阻塞性擴張</strong>（手術受益低）還是<strong>機械性功能阻塞</strong>（需及早手術解除以保護腎功能），並精確量化兩側<strong>分腎功能 (Split Renal Function)</strong>。</p>`
        },
        {
            type: "section",
            title: "一、 示蹤劑生理選擇：DTPA (GFR) vs MAG3 (ERPF) 鐵律",
            icon: "🧬",
            html: `<div class="prose">
                <p>雖然兩者在排泄曲線的判讀架構上一致，但其化學特性與生理排泄路徑有本質上的差異：</p>
                
                <div class="therapy-rich-card is-blue" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🔵 Tc-99m DTPA (Diethylene Triamine Pentaacetic Acid)</h5>
                    <ul>
                        <li><strong>排泄生理</strong>：100% 經由<strong>腎絲球過濾 (Glomerular Filtration)</strong>，不被腎小管分泌或重吸收。其清除率能精確反映<strong>腎絲球過濾率 (GFR)</strong>。</li>
                        <li><strong>劑量標準</strong>：成人常用活度為 <strong>5–10 mCi (185–370 MBq)</strong>；小兒按體重調整（最低劑量下限 1.0 mCi）。</li>
                        <li><strong>臨床限制</strong>：腎臟提取率 (Extraction Fraction) 僅約 20%。當病人**腎功能不全 (eGFR &lt; 30 mL/min)** 或新生兒腎臟發育未成熟時，因濾過量太低，影像背景雜訊極高，曲線常呈一條扁平低活性平線，極難判讀。</li>
                    </ul>
                </div>

                <div class="therapy-rich-card is-emerald" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🟢 Tc-99m MAG3 (Mercaptoacetyltriglycine) — 低腎功能首選</h5>
                    <ul>
                        <li><strong>排泄生理</strong>：&gt;95% 經由<strong>近曲小管分泌 (Tubular Secretion)</strong> 排泄，反映<strong>有效腎血漿流量 (ERPF)</strong>。</li>
                        <li><strong>劑量標準</strong>：成人常用活度為 <strong>5–8 mCi (185–296 MBq)</strong>；小兒按體重調整。</li>
                        <li><strong>【低腎功能首選優勢】</strong>：腎臟提取率 (Extraction Fraction) 高達 50–60%（是 DTPA 的 2–3 倍）。這意味著在**中重度腎功能不全 (eGFR &lt; 15–30 mL/min) 或小兒個案**中，MAG3 仍能被腎皮質高效清除，提供極佳的靶-背景比（Target-to-Background Ratio）與高信噪比的排泄曲線，是此類病人的首選示蹤劑。</li>
                    </ul>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "二、 檢前排檢安全防線與充分水合 (Hydration) 閘門",
            icon: "🚨",
            html: `<div class="prose">
                <p>排尿動力學對血容量與尿流量極度敏感。為了避免技術性假陽性，必須嚴格執行以下檢前防線：</p>
                <ul>
                    <li><strong>水合狀態閘門 (強制補水)</strong>：脫水是引導假陽性（排空延遲）的最常見原因。成人必須於檢前 30–60 分鐘內飲水 <strong>500–1000 mL</strong>；小兒個案依指引於上機前給予 <strong>5–10 mL/kg</strong> 的口服或靜脈補水。</li>
                    <li><strong>排空膀胱閘門</strong>：充盈的膀胱會產生逆向壓力，阻礙上尿路排空。病人上機前必須先排空膀胱。留置導尿管病人，必須在檢查開始前確認引流通暢，並打開引流袋，防止膀胱壓力干擾。</li>
                    <li><strong>Captopril 腎血管性高血壓排檢</strong>：若為評估腎動脈狹窄，檢前必須依醫囑停用 ACEI/ARB 類藥物（通常停藥 3–7 天，視藥物半衰期而定），並於檢前與檢後密切監測血壓。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "三、 利尿劑 (Lasix) 負荷路徑與標準時序",
            icon: "🏃",
            html: `<div class="prose">
                <p>利尿負荷旨在通過快速增加尿流量，以克服由於非阻塞性擴張導致的尿滯留。利尿劑 <strong>Furosemide (Lasix)</strong> 的給藥時機（成人常用劑量 20–40 mg IV，小兒 0.5–1.0 mg/kg IV）主要有以下三種標準路徑：</p>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● F+20 流程 (國際最常用、最穩健)</h5>
                    <p style="margin: 0 0 8px 0;">注射示蹤劑後進行 20 分鐘的常規動態掃描。若發現腎盂有明顯示蹤劑滯留，於第 20 分鐘靜脈注射 Lasix，隨後繼續收像 15–20 分鐘。這能清晰對照利尿前後的排空斜率，是常規排檢之黃金標準。</p>
                </div>

                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● F0 流程 (同步給藥)</h5>
                    <p style="margin: 0 0 8px 0;">Lasix 與示蹤劑同時或在 1-2 分鐘內注入。適用於已知明顯水腎、或是小兒無法久躺、排檢時間受限的個案，能最大化縮短掃描總時間。</p>
                </div>

                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● F-15 流程 (挑戰引流極限)</h5>
                    <p style="margin: 0 0 8px 0;">在注射示蹤劑前 15 分鐘先給予 Lasix。當示蹤劑到達腎臟時，腎臟已處於最大利尿狀態（尿流量 &gt; 2–4 mL/min）。常用於高度懷疑部分阻塞或先前 F+20 結果處於模糊邊界者，能以最嚴苛的排空狀態挑戰集尿系統的引流能力。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "四、 利尿腎圖曲線 (Renogram) 與定量判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <p>動態腎圖主要包含三個生理時相：<strong>第一相 (灌流期，血管注入 0-1min)</strong>、<strong>第二相 (功能期，實質提取 1-3min)</strong>、<strong>第三相 (排泄期，洗脫引流)</strong>。利尿劑注入後的 Washout 半衰期 (T1/2) 是判定阻塞的核心定量門檻：</p>
                <ul>
                    <li><strong>T1/2 &lt; 10 分鐘 — 正常/非阻塞性 (Normal / Non-obstructive)</strong>：利尿後示蹤劑迅速被洗脫。支持非阻塞性腎盂擴張（如先天性巨大腎盂、手術後已解除阻塞但仍鬆弛的集尿系統）。</li>
                    <li><strong>T1/2 在 10–20 分鐘之間 — 臨界/不確定 (Indeterminate)</strong>：Washout 反應遲緩。需結合分腎功能下降程度、病人是否有臨床症狀或起身上下活動後的延遲排尿影像 (Post-void view) 綜合判定。</li>
                    <li><strong>T1/2 &gt; 20 分鐘 — 機械性功能阻塞 (Obstructive)</strong>：利尿刺激下，腎盂內活性依然扁平或持續上升，T1/2 顯著延長。強烈提示器質性尿路阻塞（如 UPJO、輸尿管結石或狹窄、腫瘤壓迫），需要外科臨床介入。</li>
                    <li><strong>分腎功能定量 (Split Renal Function)</strong>：使用 Gates 法，以功能期 (1-3分鐘) 的腎皮質淨攝取率計算左右分腎的相對功能貢獻。**正常雙側相對比值應在 45% : 55% 內**。若一側相對功能 &lt; 40%，且伴隨阻塞曲線，提示該腎功能已出現臨床實質受損。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "五、 技術性 Pitfalls 避坑指引：運動偽影、ROI 錯誤與體位誤差",
            icon: "⚠️",
            html: `<div class="prose">
                <p>Renogram 是一個極度依賴定量曲線的檢查，任何技術細節的失控都會直接推導出錯誤的報告：</p>
                <ul>
                    <li><strong>身體移動偽影 (Motion Artifact)</strong>：小兒或疼痛病人上機後移動，會使後處理的雙腎 ROI 偏離腎臟實質，將周邊血池或肝脾活性計入，導致時間-活性曲線出現假性階梯狀異常，錯估 Tmax 與分腎比例。<strong>【對策】</strong>：處理前必須播放 cine 影像檢視移動；若有位移，必須啟用硬體或軟體的**位移校正 (Motion Correction) 重新對位**。</li>
                    <li><strong>ROI 與背景區圈選偏置</strong>：ROI 畫得過大會計入過多背景；背景區 (Background ROI) 若不小心疊加到腎下極或大血管，會造成過度扣除背景，使得相對腎功能與排空指標失真。<strong>【對策】</strong>：維持 Whole-kidney ROI 圈選的一致性，背景區通常建議置於腎外側後上方呈新月形或半月形，避開腎門與下腔靜脈。</li>
                    <li><strong>移植腎 (Transplant Kidney) 體位錯誤</strong>：移植腎通常被植入於髂窩前壁。<strong>【對策】</strong>：**絕對不能採用常規的原位腎後位 (Posterior) 掃描**！必須採用**前位 (Anterior) 掃描**，以避免骨盆腔與髂骨對放射線的衰減，造成腎功能評估的幾何誤差。</li>
                    <li><strong>膀胱過度充盈與 Post-void 補拍</strong>：有些患者排空能力正常，但因尿滯留或害怕排尿導致膀胱壓力過高，上尿路無法排空。<strong>【對策】</strong>：利尿收像結束後，應讓病人起身上廁所排尿，隨後**加拍一張排尿後影像 (Post-void view)**。若排尿後腎盂活性顯著下降，即可安全排除器質性阻塞。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "六、 科內結構化報告規範",
            icon: "📝",
            html: `<div class="prose">
                <p>為了確保報告可信與跨院追蹤的一致性，科內利尿腎圖報告應完整列出以下要素：</p>
                <ol>
                    <li><strong>排檢與技術品質紀錄</strong>：明確記錄補水方式（口服/靜脈）、檢前是否排尿、注射有無外滲、病人是否有明顯移動及是否使用位移校正。</li>
                    <li><strong>利尿參數與示蹤劑</strong>：註明使用的示蹤劑（DTPA 還是 MAG3）與活度、Lasix 給藥時機（F+20/F0/F-15）與劑量。</li>
                    <li><strong>影像與曲線動態描述</strong>：描述灌流相左右對稱性；功能相雙腎皮質實質提取與集尿系統顯影時點；利尿後 washout 曲線的斜率與反應。</li>
                    <li><strong>核心定量數值</strong>：明確給出雙側 **Tmax**、利尿後 **T1/2**、以及用 Gates 法計算出的**雙側分腎相對功能百分比 (Split Renal Function %)**。</li>
                    <li><strong>臨床結論</strong>：明確給出「阻塞性 (Obstructive)」、「非阻塞性擴張 (Non-obstructive)」、或「臨界不確定 (Indeterminate)」的物理判讀，並在跨 tracer 比較時加註方法學限制。</li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ol>
                    <li>Taylor AT, et al. SNMMI/EANM guideline for diuretic renal scintigraphy in adults with suspected upper urinary tract obstruction. <em>Semin Nucl Med</em>. 2018;48:377-390.</li>
                    <li>Banks KP, et al. Diuretic Renal Scintigraphy: From Standardization to Practical Implementation. <em>J Nucl Med Technol</em>. 2022;50:310-318.</li>
                    <li>Bhattacharjee S, et al. Practical Protocol for Diuretic Renal Scintigraphy. <em>J Nucl Med Technol</em>. 2022;50:319-321.</li>
                    <li>Blaufox MD, et al. Report of the Radionuclides in Nephrourology Committee on renal clearance. <em>J Nucl Med</em>. 1996;37:1883-1890.</li>
                </ol>
            </div>`
        }
    ]
},
MAG3: {
    title: "腎利尿造影與腎功能評估（Tc-99m DTPA / MAG3）",
    subtitle: "Renogram（Tc-99m DTPA / MAG3）— 腎絲球過濾 (GFR) 與腎小管分泌 (ERPF) 整合評估",
    category: "bone-renal",
    redirect: "DTPA",
    content: []
},
LungVQ: {
    title: "肺通氣與灌流掃描（Tc-99m MAA / Aerosol V/Q）",
    subtitle: "Lung V/Q Scintigraphy — 肺栓塞機率分層、右向左分流與手術前肺功能評估",
    category: "neuro", // 沿用 neuro 類別
    readerGuideMode: "article",
    readerGuideArticle: [
        "本指引整合 Technetium-99m MAA 肺灌流掃描與氣霧/氣體肺通氣掃描，依據『粒子數安全防線 -> 通氣/灌流比對 -> 肺栓塞機率分層 -> 分流定量與術前分區』的臨床決策工作流進行一體化編寫。",
        "自適應排版優化：全面採用層次化的臨床敘事段落與重點資訊卡片，確保在行動裝置與桌面端均能獲得 100% 垂直滑動、清晰無瑕的閱讀體驗。",
        "國際指南佐證：全文嚴格依據 ASNC/SNMMI 與 EANM 2019 最新肺栓塞 V/Q 掃描指引，補齊粒子安全劑量與診斷標準。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "1. 通氣相 (V)", value: "吸入 Tc-99m DTPA 氣霧或 Xe-133 氣體，多角度收像" },
            { label: "2. 灌注相 (P)", value: "病人保持仰臥位 (Supine)，緩慢注射 Tc-99m MAA，多角度收像" },
            { label: "3. 整合判讀", value: "交叉比對通氣與灌流影像，比對近期胸部 X 光/CT 排除假陽性" }
        ],
        article: [
            "肺灌注掃描的核心機制是微血管暫時性阻塞（Capillary Blockade）。直徑 10–90 μm 的 Tc-99m MAA 顆粒會暫時卡在肺部毛細血管中，其局部活性與局部肺血流量成正比。",
            "在診斷急性肺栓塞 (PE) 時，V/Q 掃描是一種強力的機率分層工具，特別適用於對含碘對比劑過敏、腎功能不全 (無法做 CTA) 或懷孕的病人。",
            "判讀時必須同時比對通氣與灌流的空間對照，確認是否存在灌流缺損但通氣正常的 Mismatch（不匹配缺損）型態。"
        ],
        note: "在嚴重肺高壓或已知右至左分流患者中，必須嚴格限制 MAA 注射的粒子數以防禦體循環栓塞風險。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：肺栓塞篩檢、分流定量與切除術前功能分區</h4>
            <p>肺 V/Q 掃描的核心價值在於評估肺通氣與血流灌注的匹配性。它不僅是診斷急性肺栓塞 (PE) 與慢性血栓栓塞性肺高壓 (CTEPH) 的權威工具，還能藉由 Tc-99m MAA 進行**右至左分流 (Right-to-Left Shunt)** 的精確量化，以及在肺部腫瘤切除術前，精確**預估術後殘餘肺功能 (Predicted Postoperative Lung Function)**。</p>`
        },
        {
            type: "section",
            title: "一   示蹤劑與物理機制：微血管暫時性阻塞與氣溶膠交換",
            icon: "🧬",
            html: `<div class="prose">
                <p>肺通氣與灌流掃描分別採用不同的示蹤劑與物理成像原理：</p>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● 肺灌流相 (Perfusion Scintigraphy)</h5>
                    <p style="margin: 0 0 8px 0;"><strong>示蹤劑</strong>：<strong>Tc-99m MAA (Macroaggregated Albumin，大聚合人血清白蛋白)</strong>。直徑約為 10–90 μm (平均 20-40 μm)。</p>
                    <p style="margin: 0 0 8px 0;"><strong>成像原理</strong>：微血管暫時性阻塞 (Capillary Blockade)。人體肺部毛細血管直徑約 8 μm，約有 2800 億條。MAA 粒子注入後會暫時卡在部分肺小動脈與毛細血管中（通常僅暫時阻斷不到 0.1% 的肺毛細血管，半衰期約 2-8 小時後被酵素降解清除），其分布完全反映肺動脈的局部血流。若血管被血栓堵塞，該區即呈現放射性缺損的楔形 **Cold defect**。</p>
                </div>

                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● 肺通氣相 (Ventilation Scintigraphy)</h5>
                    <p style="margin: 0 0 8px 0;"><strong>示蹤劑</strong>：常用 <strong>Tc-99m DTPA Aerosol (放射性氣霧，粒徑 &lt; 2 μm)</strong>，或 <strong>Xe-133 氣體</strong>、<strong>Technegas (極細超微碳煙粒子氣溶膠)</strong>。</p>
                    <p style="margin: 0;"><strong>成像原理</strong>：反映支氣管與肺泡的氣體氣流分布。當患者吸入示蹤劑後，顆粒沉積在肺泡中，反映氣道通暢與通氣狀態。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "二、 【臨床致命防線】示蹤劑劑量與 MAA 粒子數控制鐵律",
            icon: "🚨",
            html: `<div class="prose">
                <p>MAA 暫時卡在血管的特性，在特定心肺動力學異常的病人中，會引導極高的栓塞風險。必須嚴格遵守以下**粒子數限制鐵律**：</p>
                
                <div class="therapy-rich-card is-rose" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🔴 粒子數安全限制鐵律 (5–10 萬顆)</h5>
                    <p style="margin: 0 0 8px 0;">對於以下三類高風險病人，Tc-99m MAA 注射的粒子數**必須嚴格限制在 50,000 至 100,000 顆之間**，絕對不可使用常規劑量：</p>
                    <ol>
                        <li><strong>嚴重肺動脈高壓 (Severe Pulmonary Hypertension)</strong>：病人的肺血管阻力已極高，肺微血管床已嚴重受損或閉鎖。注入過多 MAA 顆粒會進一步阻斷殘餘血管，導致右心負荷急劇惡化，甚至引發致死性肺高壓危象。</li>
                        <li><strong>已知或懷疑有右至左分流 (Right-to-Left Shunt)</strong>：如先天性心臟病 (ASD, VSD, PDA)、肺動靜脈瘻管。此時，注入靜脈的 MAA 粒子會避開肺部毛細血管網，**直接穿過分流進入左心與體循環動脈**。若粒子數過多，這些顆粒會直接卡在**腦部 (造成假性腦栓塞/中風) 或腎臟 (腎微血管栓塞)**，引發嚴重的臟器缺血受損。</li>
                        <li><strong>孕婦 (Pregnancy)</strong>：為了最大程度降低胎兒的輻射與血管暴露風險，活度與粒子數皆需減半。</li>
                    </ol>
                </div>

                <div class="therapy-rich-card is-blue" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🔵 常規成人與兒科標準</h5>
                    <ul>
                        <li><strong>常規成人</strong>：活度 <strong>3–5 mCi (111–185 MBq)</strong>，注射粒子數通常為 <strong>200,000 至 400,000 顆</strong>。</li>
                        <li><strong>兒科個案</strong>：活度依體重計算，粒子數依年齡與體重按比例遞減（例如新生兒僅需 <strong>10,000 至 50,000 顆</strong>），以確保微血管床安全。</li>
                    </ul>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "三、 肺部特殊定量與攝影流程規範",
            icon: "🖥️",
            html: `<div class="prose">
                <p>為了確保影像真實地反映重力與灌流生理，攝影與注射必須嚴格標準化：</p>
                <ul>
                    <li><strong>【注射體位鐵律】病人必須保持仰臥位 (Supine)</strong>：在注射 Tc-99m MAA 時，病人必須平躺，且在注射過程中緩慢注完，注射前後**絕不能抽血回抽 (避免在針筒內與血液凝集形成大型高放射性 MAA 凝塊，在影像上造成假病灶)**。仰臥位能消除重力引起的肺底高灌流，使 MAA 均勻分布於尖部與底部。若病人坐著注射，MAA 會因重力大量沉積在肺底，造成肺尖假性灌流下降。</li>
                    <li><strong>右至左分流 (R-to-L Shunt) 定量原理</strong>：若懷疑分流，在注射 MAA 後，應進行**肺部與全身（特別是腦部與雙腎）**的掃描。分流比例計算公式為：<br>
                    <strong>Shunt % = [全身總計數 - 肺部總計數] / 全身總計數 × 100%</strong>。<br>
                    正常情況下，&gt;95% 的 MAA 應被肺部攔截，全身其他器官計數應極低；若腦、腎與全身活性高，即可精確量化分流嚴重度。</li>
                    <li><strong>肺切除術前預估功能 (Predicted Postoperative FEV1)</strong>：藉由後處理計算欲切除肺葉佔雙肺總灌流計數的百分比，公式為：<br>
                    <strong>術後預估 FEV1 = 術前 FEV1 × (1 - 欲切除肺區計數百分比 %)</strong>。<br>
                    這能為外科醫師決定是否能安全切除肺癌病灶提供關鍵的功能性底線。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "四、 肺栓塞 V/Q Mismatch 判讀與機率分層框架",
            icon: "🧭",
            html: `<div class="prose">
                <p>診斷急性肺栓塞的語言在於比對通氣與灌流的空間匹配性。臨床上應採用 **PIOPED II 標準** 或 **EANM 推薦的 SPECT V/Q 視覺分層**：</p>
                <ul>
                    <li><strong>V/Q Mismatch (通氣與灌流不匹配) — 典型肺栓塞 (PE)</strong>：灌流相顯示明確的楔形或段性缺損 (Cold defect)，但對應的通氣相影像完全正常。這提示肺動脈被血栓堵塞（無血流），但氣道與氣泡交換依然完好（有通氣）。</li>
                    <li><strong>V/Q Match (通氣與灌流匹配) — 氣道或實質病變</strong>：灌流缺損與通氣缺損完全在同一區域。通常是 COPD、嚴重肺炎、肺擴張不全或腫瘤壓迫氣道導致，非急性肺栓塞特徵。</li>
                    <li><strong>Reverse Mismatch (反向不匹配)</strong>：通氣缺損但灌流正常。常見於局部氣道阻塞、分泌物滯留，但血管灌流完好。</li>
                    <li><strong>機率分層診斷</strong>：
                        <ul>
                            <li><strong>高機率 (High Probability)</strong>：存在 **&gt; 2 個大段 (Segmental) 或等效的 V/Q Mismatch**，且胸部 X 光無對應異常。診斷肺栓塞的特異度 &gt; 90%。</li>
                            <li><strong>低機率 (Low Probability)</strong>：僅有非段性缺損、極小次段缺損、或完全匹配的 V/Q Match。</li>
                            <li><strong>正常 (Normal)</strong>：灌流完全均勻，無任何缺損，可 100% 安全地排除急性肺栓塞。</li>
                        </ul>
                    </li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "五、 技術性 Pitfalls 避坑指引：注射凝塊、非栓塞性缺損與 V/Q 體位偏差",
            icon: "⚠️",
            html: `<div class="prose">
                <p>V/Q 判讀必須首先排除以下常見的技術與病理假陽性：</p>
                <ul>
                    <li><strong>注射抽血回抽與凝集 (MAA Clot Artifact)</strong>：如果在注射 MAA 時回抽血液，血液會在針筒內與 MAA 快速凝集成高活性大顆粒。注入後會卡在較大的肺小動脈，在影像上呈現多個圓形、極亮之**「熱點 (Hot spots)」**，且熱點周邊會因為屏蔽效應引導假性灌流下降。<strong>【排除對策】</strong>：注射時嚴禁回抽血液，且注射速度應緩慢。</li>
                    <li><strong>非栓塞性灌流缺損 (Non-PE Perfusion Defects)</strong>：縱膈腔腫瘤或主動脈瘤壓迫肺動脈、先前肺結核導致的血管閉鎖、或是慢性阻塞性肺病 (COPD) 引起的局部缺氧性肺血管收縮，都會在灌流相產生 Cold defect。<strong>【排除對策】</strong>：判讀時必須**交叉比對近期（最好 24-48h 內）的胸部 X 光或胸部 CT**。若缺損區在 CT 上有明顯解剖病變，不可草率診斷為 PE。</li>
                    <li><strong>通氣與灌流體位不一致</strong>：若通氣相採坐姿吸入，灌流相採臥姿注射，會因為重力分布差異造成影像對位偏差，引起邊緣假性 Mismatch。<strong>【排除對策】</strong>：維持檢查體位的一致性，並在報告中註明。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "六、 科內結構化報告與落地指南",
            icon: "📝",
            html: `<div class="prose">
                <p>肺 V/Q 報告必須具備高臨床溝通效能，應嚴格執行以下結構化規範：</p>
                <ol>
                    <li><strong>排檢前提描述</strong>：交代患者是否有對比劑過敏或腎功能限制等 CTA 禁忌症，並記錄近期胸部 X 光（CXR）的對照結果。</li>
                    <li><strong>技術參數紀錄</strong>：記錄 MAA 注射粒子數（常規 20-40萬；高風險 5-10萬）、注射體位（臥姿）、以及通氣相所使用的示蹤劑類型（DTPA aerosol / Gas / Technegas）。</li>
                    <li><strong>影像表現與 Mismatch 定量</strong>：清晰描述灌流缺損的位置（18個肺段解剖定位）、形狀（是否為楔形/段性）與範圍；逐一對照通氣影像，明確給出 Mismatch 的數量與段數。</li>
                    <li><strong>機率分層結論</strong>：依據 PIOPED II 或 EANM SPECT 規範，明確輸出 **「高機率 (High Probability)」、「中等/不確定機率 (Intermediate)」、「低機率 (Low Probability)」或「正常 (Normal)」**。</li>
                    <li><strong>臨床臨床建議</strong>：
                        <ul>
                            <li><strong>高機率</strong>：高度支持抗凝治療。</li>
                            <li><strong>中/低機率</strong>：若臨床高度懷疑，強烈建議追加下肢深層靜脈超音波 (DVT study) 或在腎功能許可下進行 CTA 交叉檢證。</li>
                        </ul>
                    </li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ol>
                    <li>Bajc M, et al. EANM guidelines for ventilation/perfusion scintigraphy: Part I. Pulmonary embolism with and without vasculopathy. <em>Eur J Nucl Med Mol Imaging</em>. 2019;46:2429-2451.</li>
                    <li>Waxman AD, et al. Society of Nuclear Medicine and Molecular Imaging consensus conference on ventilation/perfusion imaging in pulmonary embolism. <em>J Nucl Med</em>. 2021;62:101-105.</li>
                    <li>Parker JA, et al. SNM practice guideline for lung scintigraphy 4.0. <em>J Nucl Med Technol</em>. 2012;40:57-65.</li>
                    <li>PIOPED II Investigators. Diagnostic value of ventilation-perfusion lung scans in acute pulmonary embolism. <em>JAMA</em>. 2006.</li>
                </ol>
            </div>`
        }
    ]
},
Lung: {
    title: "肺通氣與灌流掃描（Tc-99m MAA / Aerosol V/Q）",
    subtitle: "Lung V/Q Scintigraphy — 肺栓塞機率分層、右向左分流與手術前肺功能評估",
    category: "neuro",
    redirect: "LungVQ",
    content: []
},
Cystography: {
    title: "膀胱逆流掃描",
    subtitle: "Direct Radionuclide Cystography（DRC）— Vesicoureteral Reflux (VUR) 診斷與小兒低劑量追蹤",
    category: "bone-renal",
    readerGuideMode: "article",
    readerGuideArticle: [
        "本指引探討放射性核素膀胱逆流掃描（DRC），依據『檢前置管與補水 -> 灌注期動態監測 -> 排尿期逆流排查 -> 殘餘排空定量』的實務流程編寫。",
        "低劑量優勢：DRC 的輻射劑量比傳統 X 光排尿尿道膀胱造影（VCUG）低 10–100 倍，為兒科 VUR 反覆追蹤的黃金首選。",
        "實務判讀：重點在於捕捉灌注期或排尿期短暫發生的尿液逆流，並依據逆流的高度與集尿系統顯影程度進行定量。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "1. 檢前導尿", value: "無菌導尿管置入，排空膀胱" },
            { label: "2. 灌注造影", value: "注入 Tc-99m sulfur colloid 或 DTPA，重力滴注生理食鹽水，動態收像" },
            { label: "3. 排尿造影", value: "拔除導管，病人排尿過程中持續進行動態收像" }
        ],
        article: [
            "由於小兒 vesicoureteral reflux (VUR) 經常是間歇性的，且多發生在排尿期（壓力最高時），因此必須完整錄製排尿動態過程。",
            "DRC 的敏感度極高，但無法提供 X 光 VCUG 級的細緻尿道解剖圖，故常用於已知 VUR 患者的後續追蹤以減少終身輻射累積量。"
        ],
        note: "若有活動性尿路感染 (UTI)，應先接受抗生素治療並確認控制後再行檢查。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：以極低輻射劑量精準評估膀胱輸尿管逆流</h4>
            <p>直接放射性核素膀胱造影 (Direct Radionuclide Cystography) 專門用於診斷膀胱輸尿管逆流 (VUR)。利用 Tc-99m 標記物隨著液體重力滴注充盈膀胱，全程實時動態收像，能敏銳捕捉哪怕是極其短暫的逆流時點。其核心臨床角色是作為**兒科 VUR 患者序列追蹤與手術評估之黃金選擇**。</p>`
        },
        {
            type: "section",
            title: "一、 示蹤劑與劑量標準",
            icon: "💉",
            html: `<div class="prose">
                <ul>
                    <li><strong>示蹤劑</strong>：常用 <strong>Tc-99m Sulfur Colloid (硫膠體)</strong> 或 <strong>Tc-99m DTPA</strong>。硫膠體不會被膀胱黏膜吸收，在背景扣除上更具優勢。</li>
                    <li><strong>成人與兒科劑量</strong>：常規活度為 <strong>0.5–1.0 mCi (18.5–37 MBq)</strong>。因活度極低，其造成的卵巢與睪丸輻射暴露僅為 X 光 VCUG 的一小部分，安全防線極佳。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "二、 攝影流程與排尿期捕捉",
            icon: "🖥️",
            html: `<div class="prose">
                <p>檢查分為**灌注相 (Filling Phase)** 與**排尿相 (Voiding Phase)**：</p>
                <ol>
                    <li>病人仰臥置於加馬攝影機上。無菌置入導尿管，排空殘尿。</li>
                    <li>將示蹤劑注入導尿管，緊接著懸掛生理食鹽水，以重力自然滴注充盈膀胱（滴注高度通常限制在床面後上方 30–50 cm，避免過度充盈壓力）。</li>
                    <li>在滴注過程中，以 10–30 秒/幀進行動態收像，觀察是否有活性逆流進入輸尿管或腎盂。</li>
                    <li>當膀胱達到最大容量（依年齡計算公式：容量 = (年齡+2) × 30 mL），拔除導管，讓病人於相機前容器中排尿，並以 1–2 秒/幀的高頻率動態錄製排尿期。</li>
                </ol>
            </div>`
        },
        {
            type: "section",
            title: "三、 逆流分級與判讀 Pitfalls",
            icon: "🧭",
            html: `<div class="prose">
                <p><strong>● 逆流分級 (VUR Grading)</strong>：</p>
                <ul>
                    <li><strong>輕度 (Mild)</strong>：逆流僅局限於輸尿管，未達腎盂。</li>
                    <li><strong>中度 (Moderate)</strong>：逆流活性到達腎盂及腎盞，但集尿系統無明顯擴張。</li>
                    <li><strong>重度 (Severe)</strong>：逆流到達腎盂，且伴隨輸尿管扭曲擴張，或腎盞明顯變形。</li>
                </ul>
                <p><strong>● 避坑指引 (Pitfalls)</strong>：</p>
                <ul>
                    <li><strong>外滲干擾</strong>：導管周邊若有漏尿，皮膚沾染高活性會干擾局部逆流的視覺判定。</li>
                    <li><strong>背景殘留</strong>：上一次做 DMSA 或 Renogram 的殘餘放射性若未衰變完畢，會造成腎盂持續有活性，引導假陽性逆流判定。排檢前必須確認間隔時間。</li>
                </ul>
            </div>`
        }
    ]
},

Scrotal: {
    title: "陰囊掃描",
    subtitle: "Scrotal Scintigraphy — 急性睪丸扭轉 (Testicular Torsion) 與附睪發炎之鑑別診斷",
    category: "bone-renal",
    readerGuideMode: "article",
    readerGuideArticle: [
        "本指引探討急性陰囊疼痛（Acute Scrotum）的核醫影像診斷，依據『血流灌流相 -> 血池延遲相 -> 影像特徵鑑別』的實務流程編寫。",
        "臨床急症把關：睪丸扭轉是需在 6 小時內手術復位的泌尿急症。核醫掃描能精確評估睪丸動脈血供，防禦缺血壞死風險。",
        "實務判讀：重點在於對比雙側睪丸的灌流速度與血池活性分布，精準區分發炎充血（熱灶）與缺血扭轉（冷灶）。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "1. 體位固定", value: "仰臥位，將陰囊以膠帶或毛巾支撐固定，使雙側睪丸平鋪，避開大腿背景" },
            { label: "2. 灌流相 (Flow)", value: "靜脈注射示蹤劑，立即以 1-2 秒/幀進行 60 秒的秒級動態血流收像" },
            { label: "3. 血池相 (Blood Pool)", value: "血流相結束後，加拍一張 5–10 分鐘的高計數靜態血池影像" }
        ],
        article: [
            "由於睪丸動脈細小，注射示蹤劑時必須以彈丸式 (Bolus) 注射以確保第一相血流清晰對比。",
            "在扭轉後期（超過 24 小時），缺血壞死的睪丸周邊會因為發炎反應而出現代償性灌流增加，在血池相呈現特徵性的『光暈環 (Halo Sign)』，提示睪丸已失去存活性。"
        ],
        note: "臨床懷疑扭轉且超音波已確診時，應立即開刀，絕不能為了等待核醫檢查而延誤黃金復位時機。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：急性陰囊疼痛的黃金血流鑑別診斷</h4>
            <p>陰囊掃描 (Scrotal Scintigraphy) 是一種高時效性的血流功能檢查。主要用於評估急性陰囊疼痛病人。核心任務是**在極短時間內精確判定是否存在睪丸動脈缺血性扭轉**，以決定是需要立即開刀的手術急症，還是僅需藥物控制的內科發炎。</p>`
        },
        {
            type: "section",
            title: "一、 示蹤劑與給藥標準",
            icon: "💉",
            html: `<div class="prose">
                <ul>
                    <li><strong>示蹤劑</strong>：使用游離態 <strong>Tc-99m Pertechnetate (高鎝酸鹽)</strong>。</li>
                    <li><strong>成人常見活度</strong>：<strong>10–20 mCi (370–740 MBq)</strong>；小兒按體重調整。為了確保血管相品質，必須進行**高彈丸式 (Tight Bolus) 靜脈注射**。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "二、 影像特徵與實戰鑑別診斷",
            icon: "🧭",
            html: `<div class="prose">
                <p>臨床判讀主要比對患側與健側的放射性分布差異：</p>
                
                <div class="therapy-rich-card is-rose" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🔴 急性睪丸扭轉 (Acute Testicular Torsion) — 血管缺血急症</h5>
                    <p style="margin: 0 0 8px 0;"><strong>● 灌流相</strong>：患側睪丸動脈血流完全消失或顯著減弱。</p>
                    <p style="margin: 0 0 8px 0;"><strong>● 血池相</strong>：患側睪丸呈現明顯的**放射性缺損 (Cold Defect / Cold Spot)**。</p>
                    <p style="margin: 0;"><strong>● 扭轉後期 (Missed Torsion)</strong>：扭轉時間 &gt; 24 小時後，睪丸中心已壞死，但周邊的陰囊組織因發炎代償性充血，會呈現中央冷灶、周邊發亮的**「光暈徵/甜甜圈徵 (Halo sign / Donut sign)」**。</p>
                </div>

                <div class="therapy-rich-card is-blue" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🔵 急性附睪睪丸炎 (Epididymo-orchitis) — 內科發炎</h5>
                    <p style="margin: 0 0 8px 0;"><strong>● 灌流相</strong>：患側髂外動脈分支與睪丸動脈血流顯著增強，血管早顯。</p>
                    <p style="margin: 0;"><strong>● 血池相</strong>：患側附睪及睪丸呈現局灶性或瀰漫性**高度放射性濃聚 (Hot Spot)**。此為典型的發炎充血反應，給予抗生素治療即可。</p>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "三、 技術性 Pitfalls 避坑指引",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>體位固定偏差 (最常見)</strong>：若陰囊未對稱平鋪，或者大腿內側與陰囊重疊，大腿的大血管血流會干擾陰囊的低本底活性，掩蓋睪丸的 Cold defect，導致假陰性判定。<strong>【排除對策】</strong>：必須使用膠帶將大腿外展固定，並在陰囊下方墊以適當支撐，使睪丸處於相機中心。</li>
                    <li><strong>鞘膜積水 (Hydrocele) 干擾</strong>：大量的鞘膜積水會屏蔽射線，在血池相造成假性 Cold area，易與扭轉混淆。需結合超音波或物理透光檢查排除。</li>
                </ul>
            </div>`
        }
    ]
},

Brain: {
    title: "腦部灌流 SPECT",
    subtitle: "Brain Perfusion SPECT — 局部腦血流 (rCBF) 顯像與失智症、癲癇病灶定位",
    category: "neuro",
    readerGuideMode: "article",
    readerGuideArticle: [
        "本指引整合親脂性腦顯像劑之臨床應用，依據『檢前安靜隔離 -> 示蹤劑分布機制 -> 正常/異常血流圖譜 -> 癲癇與失智實戰判讀』的臨床工作流編寫。",
        "自適應排版優化：全面採用層次化的臨床敘事段落與重點資訊卡片，確保在行動裝置與桌面端均能獲得 100% 垂直滑動、清晰無瑕的閱讀體驗。",
        "機制關鍵：示蹤劑必須穿過血腦屏障並在腦細胞中固定，反映注射時點的局部腦血流量 (rCBF)。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "1. 檢前安靜", value: "置於昏暗、無聲的隔離室中，安靜休息 15–20 分鐘" },
            { label: "2. 靜脈注射", value: "在安靜隔離狀態下注入 Tc-99m ECD 或 HMPAO，隨後繼續隔離 10 分鐘" },
            { label: "3. SPECT 收像", value: "注射後 30–45 分鐘上機，進行頭部多角度 SPECT 掃描，約 30 分鐘" }
        ],
        article: [
            "檢查前病人的感官刺激是決定初始血流分布的關鍵。若在注射時大聲交談或強光照射，會導致枕葉或顳葉出現假性生理性高攝取，干擾局部缺血的診斷。",
            "ECD 與 HMPAO 的腦中分布在注射後數分鐘內即已鎖定，隨後的掃描只是對注射時點腦血流狀態的『靜態快照』，這使得癲癇發作期 (Ictal) 注射定位致癲灶成為可能。"
        ],
        note: "檢查前 24 小時內應避免攝取咖啡、茶、酒精及影響腦血管舒縮的藥物。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：以局部腦血流分布解析神經功能缺損</h4>
            <p>腦部灌流 SPECT (Brain Perfusion SPECT) 藉由親脂性示蹤劑反映局部腦血流量 (rCBF)。其核心價值在於評估腦血管疾病（中風前期血管儲備能力）、癲癇致癲灶的術前定位、以及各類神經退化性失智症（阿茲海默症、額顳葉失智、路易氏體失智）的特徵性血流減退型態，提供功能性突觸受損的直接證據。</p>`
        },
        {
            type: "section",
            title: "一、 示蹤劑物理與腦固定機制",
            icon: "🧬",
            html: `<div class="prose">
                <p>常用示蹤劑為 <strong>Tc-99m ECD (L,L-Ethyl Cysteinate Dimer)</strong> 與 <strong>Tc-99m HMPAO (Exametazime)</strong>。它們的物理特性與腦滯留機制如下：</p>
                <ul>
                    <li><strong>親脂性與 BBB 穿穿</strong>：兩種藥物皆為中性、親脂性小分子，能迅速通過完整的血腦屏障 (BBB) 進入腦實質。</li>
                    <li><strong>腦內固定機制</strong>：
                        <ul>
                            <li><strong>Tc-99m ECD</strong>：進入腦細胞後，迅速被細胞內的**酯酶 (Esterase) 水解**為親水性的二酸代物，無法再穿過 BBB 而被困在腦細胞中。ECD 在血液中清除極快，背景極乾淨。</li>
                            <li><strong>Tc-99m HMPAO</strong>：進入腦細胞後，在穀胱甘肽 (GSH) 的參與下轉化為親水性物質而被固定。相較於 ECD，HMPAO 在血液中的清除速度稍慢，對注射後的穩定度要求較高。</li>
                        </ul>
                    </li>
                    <li><strong>成人常見活度</strong>：<strong>15–25 mCi (555–925 MBq)</strong>。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "二、 臨床實戰應用與判讀圖譜",
            icon: "🧭",
            html: `<div class="prose">
                <p>臨床判讀主要關注腦皮質、基底核與小腦的對稱性與特定功能區的血流缺損型態：</p>
                
                <div class="therapy-rich-card is-blue" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● 神經退化性失智症鑑定</h5>
                    <ul>
                        <li><strong>阿茲海默症 (AD)</strong>：特徵為雙側對稱性的**頂葉 (Parietal) 與顳葉 (Temporal) 灌流顯著下降**，後扣帶迴 (Posterior Cingulate) 與 precuneus 亦常受累，而運動皮質與視覺皮質通常保留。</li>
                        <li><strong>額顳葉失智症 (FTD)</strong>：呈現雙側不對稱的**額葉 (Frontal) 與前顳葉 (Anterior Temporal) 灌流顯著減退**。</li>
                        <li><strong>路易氏體失智症 (DLB)</strong>：除了頂顳葉灌流下降外，特徵性伴隨**枕葉視覺皮質 (Occipital Visual Cortex) 的血流下降**。</li>
                    </ul>
                </div>

                <div class="therapy-rich-card is-rose" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● 癲癇致癲灶定位 (Ictal vs Interictal SPECT)</h5>
                    <ul>
                        <li><strong>發作期 (Ictal Phase) 注射</strong>：在癲癇剛發作的黃金幾秒內立即靜脈注入示蹤劑。此時致癲灶異常放電，局部血管劇烈舒張，影像呈現**局部顯著的放射性高攝取 (Hot Spot / Hyperperfusion)**。</li>
                        <li><strong>發作間期 (Interictal Phase) 注射</strong>：在病人無發作的安靜狀態下注射，致癲灶區域常呈現**放射性低攝取 (Cold Spot / Hypoperfusion)**。</li>
                        <li><strong>【診斷價值】</strong>：藉由將 Ictal 與 Interictal SPECT 影像進行數位減影並與 MRI 融合（SISCOM 技術），能精確鎖定致癲灶位置，為神經外科切除手術提供關鍵指引。</li>
                    </ul>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "三、 臨床避坑指引 (Pitfalls)",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>注射前感官刺激干擾</strong>：在昏暗安靜隔離室置入靜脈留置針時，必須**提前 10-15 分鐘完成置管**，讓病人適應。注射示蹤劑時，必須**在完全無聲、病人閉眼且不與其交談的狀態下進行**。否則，談話會導致聽覺/語言區高攝取，張眼會導致枕葉視覺皮質假性高攝取，扭曲病理性缺血評估。</li>
                    <li><strong>交叉性小腦不對稱 (Crossed Cerebellar Diaschisis, CCD)</strong>：一側大腦皮質（如大面積中風）受損，會導致對側小腦半球灌流假性減退。判讀時需理解此神經聯絡通道效應，避免將其誤讀為對側小腦本身的血管病變。</li>
                </ul>
            </div>`
        }
    ]
},

TRODAT: {
    title: "多巴胺轉運體造影",
    subtitle: "Dopamine Transporter SPECT（Tc-99m TRODAT-1）— 巴金森氏症與非典型巴金森氏症之突觸前功能鑑別",
    category: "neuro",
    readerGuideMode: "article",
    readerGuideArticle: [
        "本指引探討多巴胺轉運體造影（TRODAT）之臨床實務，依據『檢前停藥核對 -> 紋狀體特異結合 -> 圖像重組與半定量 -> 典型/非典型病變判讀』的臨床工作流編寫。",
        "自適應排版優化：全面採用層次化的臨床敘事段落與重點資訊卡片，確保在行動裝置與桌面端均能獲得 100% 垂直滑動、清晰無瑕的閱讀體驗。",
        "國際指南佐證：全文嚴格依據 ASNC/EANM 與台灣核醫學會巴金森氏症 DAT 造影共識進行重構。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "1. 藥物核對", value: "確認檢前已停用影響多巴胺轉運體的特定中樞興奮劑、精神藥物或抗憂鬱劑" },
            { label: "2. 靜脈注射", value: "靜脈注射 Tc-99m TRODAT-1 15-20 mCi" },
            { label: "3. 延遲收像", value: "注射後 3.5 至 4 小時進行頭部高解析度 SPECT 掃描，約 30-40 分鐘" }
        ],
        article: [
            "TRODAT 與突觸前多巴胺轉運體 (DAT) 的特異性結合速度較慢，必須在注射後 3.5 至 4 小時的平衡期進行收像，太早收像會因為高背景血池活性導致紋狀體對比極差。",
            "判讀時不僅看視覺圖像的『逗號』變『句號』，還需配合紋狀體與枕葉背景的半定量結合比值 (Binding Potential, BP)，以客觀量化黑質紋狀體多巴胺神經元的流失程度。"
        ],
        note: "常規抗巴金森氏症藥物 (如 Levodopa) 通常不需停藥，但中樞精神興奮劑 (如 Ritalin) 必須嚴格依醫囑停用。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：鑑別突觸前多巴胺神經元退化</h4>
            <p>多巴胺轉運體造影 (Dopamine Transporter Imaging) 專門用於評估中腦黑質-紋狀體多巴胺能神經系統的完整性。核心任務是**在臨床症狀早期，將突觸前退化性巴金森氏症（巴金森氏病、MSA、PSP、CBD）與突觸前完好的非退化性震顫（本梢性震顫、藥物性巴金森症、心因性震顫）進行決定性的鑑別診斷**。</p>`
        },
        {
            type: "section",
            title: "一、 示蹤劑物理與結合機制",
            icon: "🧬",
            html: `<div class="prose">
                <ul>
                    <li><strong>示蹤劑</strong>：<strong>Tc-99m TRODAT-1</strong>。能高度特異性結合在尾核 (Caudate Nucleus) 與殼核 (Putamen) 突觸前的多巴胺轉運體 (DAT) 上。</li>
                    <li><strong>劑量標準</strong>：成人常用活度為 <strong>15–20 mCi (555–740 MBq)</strong>。</li>
                    <li><strong>物理優勢</strong>：相較於 I-123 FP-CIT (DaTscan) 需要昂貴的環己酮旋轉加速器與甲狀腺阻斷準備，Tc-99m TRODAT-1 在台灣具備極高的藥物取得便利性與經濟效益，且無須提前服用盧戈氏液阻斷甲狀腺。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "二、 典型影像圖譜與半定量判讀指標",
            icon: "🧭",
            html: `<div class="prose">
                <p>正常紋狀體在橫斷面上呈現對稱、明亮的**「雙逗號 (Two Commas)」**外觀（頭部為尾核，尾部為殼核）。巴金森氏症患者的 DAT 攝取會呈現特徵性的不對稱進行性流失：</p>
                
                <div class="therapy-rich-card is-rose" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🔴 典型巴金森氏症 (Parkinson's Disease) 影像型態</h5>
                    <ul>
                        <li><strong>尾先於頭、外先於內</strong>：多巴胺退化最早且最嚴重地發生於**對側殼核的後外側 (Posterior Putamen)**，隨後向前蔓延至前殼核，最後才累及尾核。</li>
                        <li><strong>視覺表現</strong>：紋狀體影像從明亮的「逗號」縮短為圓形的**「句號 (Periods)」**（僅存尾核攝取，殼核完全熄滅），且與臨床肢體震顫/僵直的對側高度吻合。</li>
                    </ul>
                </div>

                <div class="therapy-rich-card is-blue" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">🔵 非典型巴金森氏症 (Parkinson-Plus) vs 本梢性震顫 (Essential Tremor)</h5>
                    <ul>
                        <li><strong>非典型巴金森氏症 (如 MSA, PSP)</strong>：DAT 攝取同樣顯著降低，但兩側流失常呈更為**對稱性**，且殼核與尾核的退化比例較接近。</li>
                        <li><strong>本梢性震顫 (ET) / 藥物誘發巴金森症</strong>：突觸前多巴胺系統完好，影像呈現**完全正常的對稱雙逗號**。這能 100% 排除退化性巴金森症的可能性。</li>
                        <li><strong>半定量結合比值 (Binding Potential, BP)</strong>：<br>
                        <strong>BP = [紋狀體平均計數 - 枕葉平均計數] / 枕葉平均計數</strong>。<br>
                        正常值依各中心年齡常模校正，隨年齡增長每年以約 0.5–1% 速度自然下降。若 BP 顯著低於同齡常模，支持突觸前多巴胺退化。</li>
                    </ul>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "三、 藥物干擾與技術性 Pitfalls 避坑指引",
            icon: "⚠️",
            html: `<div class="prose">
                <ul>
                    <li><strong>干擾藥物排除 (關鍵防線)</strong>：某些藥物會競爭性阻斷 DAT，導致 TRODAT 攝取假性低下。**必須在檢前依醫囑安全停藥**：
                        <ul>
                            <li><strong>中樞興奮劑 (Ritalin/利他能、利長能)</strong>：必須停藥 24–48 小時。</li>
                            <li><strong>可卡因、某些特定抗憂鬱劑 (如 Bupropion/威博雋)</strong>：必須停藥至少 3-5 天。</li>
                            <li>*常規巴金森藥物 (Levodopa, Dopamine agonists) 完全不影響 DAT 結合，檢查前無須停藥*。</li>
                        </ul>
                    </li>
                    <li><strong>傾斜角 (Tilt Angle) 錯誤</strong>：在後處理橫斷面重組時，如果頭部定位傾斜，會導致重建切面不對稱，將一側的尾核與另一側的殼核錯位比對，產生假性不對稱的誤判。<strong>【排除對策】</strong>：重建時必須嚴格以雙側外耳道與眼眶連線 (OM Line) 進行三維對稱軸校正，確保切面 100% 水平對稱。</li>
                </ul>
            </div>`
        }
    ]
},

NP59: {
    title: "腎上腺皮質 NP-59",
    subtitle: "I-131 NP-59 Adrenal Cortical Scintigraphy — 腎上腺皮質功能定位、側化判讀與現代臨床角色",
    category: "endocrine",
    protocolSummaryDisplay: "expanded",
    readerGuideMode: "article",
    readerGuideArticle: [
        "NP-59 的核心價值不是再做一張『腎上腺有沒有腫塊』的圖，而是把腎上腺皮質是否真的在分泌、偏向哪一側分泌，轉成可視化的功能資訊。",
        "在現代內分泌流程裡，NP-59 已不是所有病例的第一線檢查。對原發性醛固酮增多症而言，最新 Endocrine Society 指南仍以 AVS 作為手術前側化的關鍵工具；NP-59 較常留在 CT/AVS 不一致、AVS 無法完成，或需要補充功能證據的選擇性情境。",
        "本單元用教學取向整理原理、準備、攝影與判讀，重點放在『什麼時候它有價值』與『什麼時候不要把它解讀過頭』。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "前置評估", value: "確認臨床問題、賀爾蒙資料、CT/MRI 與藥物干擾" },
            { label: "給藥與阻斷", value: "甲狀腺阻斷，必要時依適應症做 dexamethasone suppression" },
            { label: "延遲收像", value: "常見 Day 3、Day 5、Day 7 planar；必要時合併 SPECT/CT" }
        ],
        article: [
            "第一階段先確認這張檢查要回答的問題是什麼。若臨床想知道的是『這顆腫塊是不是皮質來源且是否過度分泌』，NP-59 才有切入點；若只是單純解剖偵測，CT 或 MRI 通常更直接。",
            "第二階段是前處理。因為 NP-59 為 I-131 標記膽固醇類似物，必須先做甲狀腺阻斷以降低游離碘攝取；原發性醛固酮增多症等情境常再加上 dexamethasone suppression，以降低正常皮質背景、凸顯自主性分泌病灶。",
            "第三階段是多時間點延遲影像。NP-59 不屬於短時程檢查，通常需等待數天讓背景下降，再以固定時序比較雙側皮質攝取型態；若只看單一時間點，常會失去此檢查最有價值的資訊。"
        ],
        note: "實際 dexamethasone 劑量、停藥天數與加做 SPECT/CT 的時點需依院內 protocol 與轉診內分泌醫師規畫執行。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：它看的是皮質功能，不是單純腫塊形狀</h4>
            <p>NP-59（<strong>I-131 6β-iodomethyl-19-norcholesterol</strong>）是放射性膽固醇類似物。NCI 的藥物詞典指出，它主要聚積於<strong>腎上腺皮質</strong>，並少量分布於卵巢與睪丸等類固醇生成組織。換言之，這張影像的語言是「哪裡正在走類固醇合成路徑」，而不是「哪裡長得比較大」。因此它最適合放在腎上腺皮質功能定位、側化與特定鑑別診斷的脈絡中理解。</p>`
        },
        {
            type: "section",
            title: "一、 目前臨床最常放在什麼情境？",
            icon: "🎯",
            html: `<div class="prose">
                <p>教學上最重要的是先把 NP-59 的<strong>現代角色</strong>放對位置。它仍有價值，但已不是所有腎上腺問題的第一線檢查。</p>
                <ul>
                    <li><strong>原發性醛固酮增多症（PA）側化補充：</strong>當 CT 與生化資料不一致、AVS 結果不確定、AVS 技術上失敗，或需要補充單側自主分泌的功能證據時，可考慮 NP-59，尤其在有明顯結節且院內具經驗的中心。</li>
                    <li><strong>ACTH 非依賴性高皮質醇症：</strong>用來看單側功能性腺瘤、雙側增生、或特殊雙側病變是否呈不對稱功能分布。</li>
                    <li><strong>少見但仍實用的情境：</strong>雙側腎上腺腫塊的功能對照、皮質殘餘組織定位、以及少數需要補強皮質來源證據的個案。</li>
                </ul>
                <p>要特別提醒新同仁的是：對 PA 而言，<strong>最新 Endocrine Society 臨床指引仍強調 AVS 的手術前定位價值</strong>。CT/MRI 只能看結構，不能直接回答功能來自哪一側；NP-59 應理解為補充性功能影像，而不是取代所有現代分型流程。</p>
            </div>`
        },
        {
            type: "section",
            title: "二、 為什麼 NP-59 能看腎上腺皮質？",
            icon: "🧬",
            html: `<div class="prose">
                <p>腎上腺皮質製造醛固酮、皮質醇與雄性素前驅物，都離不開<strong>膽固醇</strong>這個共同前體。NP-59 作為膽固醇類似物，會沿著皮質細胞的類固醇生成路徑被攝取與保留，因此可反映皮質功能活性。</p>
                <p>這個原理也解釋了兩個實務重點：</p>
                <ol>
                    <li>它主要回答<strong>皮質</strong>問題，不用來評估腎上腺髓質。嗜鉻細胞瘤與副神經節瘤仍應回到 MIBG、SSTR PET 或其他對應檢查。</li>
                    <li>它看的是<strong>功能偏向</strong>。因此同樣一顆結節，若沒有自主性類固醇合成活動，就可能不顯著攝取；反過來說，功能過強但形態不大時，也可能在功能影像上先被看見。</li>
                </ol>
                <p>Endotext 將這類傳統膽固醇型腎上腺皮質顯像描述為可提供標的組織功能資訊的檢查；這也是它與純解剖影像的根本差異。</p>
            </div>`
        },
        {
            type: "section",
            title: "三、 檢前準備：這張檢查常在上機前就決定成敗",
            icon: "🩺",
            html: `<div class="prose">
                <p>NP-59 的前處理比許多常規核醫檢查更關鍵。若準備不完整，後面影像常會變成「有拍到，但不夠能回答問題」。</p>
                <ul>
                    <li><strong>甲狀腺阻斷：</strong>因為 I-131 標記藥物可能有游離碘，須依院內流程使用 Lugol's solution 或其他碘劑做甲狀腺保護。</li>
                    <li><strong>dexamethasone suppression：</strong>在 PA 或部分高皮質醇症工作流程中，常用以壓低正常皮質背景，讓自主分泌灶更容易凸顯；但這是<strong>適應症導向的 protocol</strong>，不是所有 NP-59 都一律同配方。</li>
                    <li><strong>藥物審視：</strong>利尿劑、spironolactone、部分降壓藥與其他影響腎上腺軸的藥物，可能改變判讀背景。是否需停藥、換藥或延後檢查，應與內分泌團隊共同確認。</li>
                    <li><strong>近期含碘暴露：</strong>含碘顯影、amiodarone 或其他高碘來源可能干擾整體流程，排檢時須主動追問，而不是只問今天有沒有吃藥。</li>
                    <li><strong>腸道管理：</strong>因藥物經肝膽與腸道排泄，腹部背景可能影響腎上腺判讀；若院內有固定瀉劑或腸道準備規則，需事先交代清楚。</li>
                </ul>
                <p>重點不是把每位病人都做成一樣，而是知道哪一些前處理是在替<strong>功能對比</strong>服務。</p>
            </div>`
        },
        {
            type: "section",
            title: "四、 攝影流程：為什麼常要 Day 3、Day 5、Day 7？",
            icon: "🖥️",
            html: `<div class="prose">
                <p>NP-59 屬於典型的<strong>多日延遲相檢查</strong>。較常見的實務安排，是注射後在 Day 3、Day 5、Day 7 進行腹部後前位或斜位 planar 影像，必要時加做 SPECT/CT 幫助定位。</p>
                <p>技術上要記得三件事：</p>
                <ul>
                    <li><strong>準直儀：</strong>I-131 能量高，必須使用適合的高能量 collimator；這不是可自由替代的小設定。</li>
                    <li><strong>固定幾何：</strong>多時間點比較要維持一致的體位、zoom、視野與顯示尺度，否則很容易把技術差異誤讀為功能變化。</li>
                    <li><strong>SPECT/CT 的角色：</strong>若 planar 只能看出偏側，卻無法穩定對回結節、正常腎上腺或周邊背景，SPECT/CT 的定位價值通常高於再硬拍更多平面圖。</li>
                </ul>
                <p>2009 年台大團隊發表於 <em>Journal of Nuclear Medicine</em> 的研究即顯示，在 CT 與 AVS 結果不確定的 PA 個案中，<strong>NP-59 SPECT/CT 較 planar 影像有更好的診斷與預後判讀表現</strong>。因此現代實務若仍使用 NP-59，通常不應只停在平面圖層次。</p>
            </div>`
        },
        {
            type: "section",
            title: "五、 影像如何判讀：先看延遲相模式，再回頭談病灶",
            icon: "🧭",
            html: `<div class="prose">
                <p>NP-59 最容易被誤讀的地方，是把它當成「哪裡比較亮就代表那顆腫瘤有問題」。教學上建議依下列順序讀圖：</p>
                <ol>
                    <li><strong>先看可不可以判讀：</strong>甲狀腺阻斷是否完成、腹部是否有過高腸道背景、影像間體位與顯示尺度是否一致、皮膚或衣物是否有污染。</li>
                    <li><strong>再看時間序列：</strong>Day 3、Day 5、Day 7 影像不只是重拍，而是用來觀察皮質攝取是否愈來愈集中、是否出現明確側化、或原本模糊的訊號其實是移動性腸道活性。</li>
                    <li><strong>最後對位解剖：</strong>若 planar 顯示單側上腹部焦點，應再確認是否真落在腎上腺位置，必要時用 SPECT/CT 區分腎上腺、肝下緣、腸道或其他背景。</li>
                </ol>
                <p><strong>正常或接近正常的參考型態</strong>通常是雙側腎上腺在延遲相呈低至中度、相對對稱的皮質攝取，且沒有一側隨時間明顯主導。若有做 dexamethasone suppression，正常皮質背景可更低，這時候影像更像是在找「哪一側沒有被壓下來」。</p>
                <p><strong>單側優勢攝取</strong>是最典型的側化訊號。若某一側在 Day 5 或 Day 7 逐漸形成清楚焦點，對側被抑低或幾乎不顯著，較支持單側功能優勢，例如單側醛固酮或皮質醇自主分泌灶。這種型態最有教學價值的不是「比較亮」，而是<strong>延遲後仍固定留在同一側腎上腺區，且與 CT 結節位置相符</strong>。</p>
                <p><strong>雙側攝取且大致對稱</strong>時，不能急著說正常。若臨床本來就在評估雙側增生，這種型態可能與雙側皮質活化一致；但若病人原本想問的是單側病灶，則要回頭檢查 suppression 是否不足、藥物是否干擾，或這張檢查本來就不夠側化。</p>
                <p><strong>雙側都有訊號但明顯不對稱</strong>，是最需要保守描述的型態。它可能代表雙側病變中一側較強，也可能只是背景、部分容積效應或平面重疊造成的假性偏側。這類個案若沒有 SPECT/CT 或缺乏穩定多時間點對照，不宜直接把影像偏強的一側寫成唯一手術側。</p>
                <p><strong>病灶側低攝取或缺攝取</strong>也要會解釋。若 CT 上有腫塊，但 NP-59 沒有對應聚積，常見思路包括：非功能性皮質腫瘤、病灶太小而被背景掩蓋、腫瘤去分化導致膽固醇利用降低，或病灶本來就不是皮質來源。這正是功能影像與解剖影像必須一起讀的原因。</p>
            </div>`
        },
        {
            type: "section",
            title: "六、 判讀陷阱：哪些亮點不能直接當腎上腺病灶？",
            icon: "🔎",
            html: `<div class="prose">
                <ul>
                    <li><strong>移動性腸道活性：</strong>若 Day 3 到 Day 7 的亮點位置改變，尤其沿著腸道走向移動，就要先想排泄背景，不要急著報告成左側腎上腺熱點。</li>
                    <li><strong>肝膽與腎上極重疊：</strong>右側腎上腺靠近肝臟，左側靠近胃腸與脾臟區，平面圖常有重疊問題；這也是 SPECT/CT 對右側病灶特別有幫助的原因。</li>
                    <li><strong>suppression 失敗：</strong>若正常皮質沒有被適當壓低，雙側都亮時會讓影像看起來像「都有功能」，但其實只是背景太高。</li>
                    <li><strong>只看單一時間點：</strong>NP-59 的判讀價值很大一部分來自延遲相比較。若只有單一延遲相而缺乏時序，很難分辨固定病灶與生理排泄。</li>
                    <li><strong>把功能影像直接等同病理：</strong>NP-59 可支持單側功能模式，但對準備手術的 PA 病人，仍須回到 AVS、CT 與臨床整體分型，不能單靠一張功能圖就做不可逆決策。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "七、 常見陷阱與限制：不要把『少做』誤認成『沒價值』",
            icon: "⚠️",
            html: `<div class="prose">
                <p>NP-59 之所以在許多地方不再常規使用，不是因為它完全沒有價值，而是因為它有明確限制，必須在對的問題下使用。</p>
                <ul>
                    <li><strong>空間解析度與檢查時程：</strong>I-131 的物理特性與多日 protocol 讓畫質、便利性與輻射劑量都不如現代部分 PET tracers。</li>
                    <li><strong>小病灶敏感度有限：</strong>尤其病灶小於 1 公分時，傳統 planar 的表現更容易受限；這也是 SPECT/CT 被納入流程的重要原因。</li>
                    <li><strong>腸道與肝膽背景：</strong>腹部高背景可遮蔽左側或下位病灶，判讀前要先確認不是單純排泄路徑干擾。</li>
                    <li><strong>藥物與 suppression 不足：</strong>若正常皮質沒有被適當壓低，雙側背景升高會讓側化判讀變得模糊。</li>
                    <li><strong>不能孤立取代 AVS：</strong>對打算接受手術的 PA 病人，當代指引仍以 AVS 作為較準確的側化工具；NP-59 應被視為補充，而非一張圖就能完全取代侵入性分型。</li>
                    <li><strong>新技術正在補位：</strong>近年 adrenal molecular imaging 文獻持續發展 metomidate PET/CT 等方法，目的正是改善 NP-59 在畫質、時程與定量上的限制。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "八、 報告與溝通建議",
            icon: "📝",
            html: `<div class="prose">
                <p>對一般核醫科工作同仁來說，報告不只是在寫結果，也是在幫臨床團隊理解這張檢查能回答到哪裡。</p>
                <ul>
                    <li>註明示蹤劑、活度、甲狀腺阻斷、是否做 dexamethasone suppression、以及主要收像日別。</li>
                    <li>描述雙側腎上腺攝取型態與是否有明顯側化，避免只寫「右側陽性」而沒有背景脈絡。</li>
                    <li>若有 SPECT/CT，說明功能攝取與 CT 結節是否對位一致。</li>
                    <li>結論用語建議寫成「支持單側功能優勢」「較傾向雙側增生樣表現」「受背景/技術限制，側化信心有限」等級，而非過度絕對化。</li>
                </ul>
                <p>這樣的寫法比較符合 NP-59 在現代流程中的角色，也能減少臨床把它誤用成單一決策依據。</p>
            </div>`
        },
        {
            type: "section",
            title: "參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <ol>
                    <li>National Cancer Institute. Definition of iodine 131-l-6-beta-iodomethyl-19-norcholesterol (NP-59). NCI Drug Dictionary. Updated 2025.</li>
                    <li>Fassnacht M, Arlt W, Bancos I, et al. Adrenal Incidentaloma. In: Endotext [Internet]. MDText.com, Inc.; updated 2024.</li>
                    <li>Adler GK, Stowasser M, Correa RR, et al. Primary Aldosteronism: An Endocrine Society Clinical Practice Guideline. <em>J Clin Endocrinol Metab</em>. 2025;110(9):2453-2495.</li>
                    <li>Yen RF, Wu VC, Liu KL, et al. 131I-6beta-iodomethyl-19-norcholesterol SPECT/CT for primary aldosteronism patients with inconclusive adrenal venous sampling and CT results. <em>J Nucl Med</em>. 2009;50(10):1631-1637.</li>
                    <li>Hsieh TC, Wu YC, Tu ST, et al. Diagnostic value of adrenal iodine-131 6-beta-iodomethyl-19-norcholesterol scintigraphy for primary aldosteronism: a retrospective study at a medical center in North Taiwan. <em>Sci Rep</em>. 2019;9:11534.</li>
                    <li>Gonzalez-Boillos M, et al. Diagnostic Accuracy of Adrenal Iodine-131 6-Beta-Iodomethyl-19-Norcholesterol Scintigraphy for the Subtyping of Primary Aldosteronism. <em>Biomedicines</em>. 2023;11(7):1934.</li>
                    <li>Nakajo M, Jinguji M, Tani A, Yoshiura T. Application of adrenal maximum standardized uptake value to 131I-6β-iodomethyl-19-norcholesterol SPECT/CT for characterizing unilateral hyperfunctioning adrenocortical masses. <em>Eur J Radiol</em>. 2020;133:109397.</li>
                    <li>Burton TJ, Mackenzie IS, Balan K, et al. Targeted Molecular Imaging in Adrenal Disease—An Emerging Role for Metomidate PET-CT. <em>Horm Metab Res</em>. 2017;49(12):929-937.</li>
                    <li>Kurtaran A, Becherer A, Pfeffel F, et al. Scintigraphic imaging of the adrenal glands. <em>Hell J Nucl Med</em>. 2002;5(1):12-17.</li>
                </ol>
            </div>`
        }
    ]
},

Cisternography: {
    title: "腦脊髓液池掃描",
    subtitle: "Radionuclide Cisternography（In-111 DTPA）— 正常壓力腦積水 (NPH) 與腦脊髓液漏 (CSF Leak) 診斷",
    category: "neuro",
    readerGuideMode: "article",
    readerGuideArticle: [
        "本指引探討腦脊髓液池掃描（Cisternography）的臨床流程，依據『腰椎穿刺給藥 -> CSF 循環追蹤 -> 側腦室逆流排查 -> 棉球放射比值定量』的實務流程編寫。",
        "自適應排版優化：全面採用層次化的臨床敘事段落與重點資訊卡片，確保在行動裝置與桌面端均能獲得 100% 垂直滑動、清晰無瑕的閱讀體驗。",
        "物理特徵：使用發射中高能量伽馬射線（171 & 245 keV）的 Indium-111，半衰期長達 2.8 天，極利於 48–72 小時的超延遲蛛網膜下腔循環追蹤。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "1. 腰椎穿刺 (LP)", value: "由經驗豐富之醫師執行 LP，緩慢將 In-111 DTPA 0.5 mCi 注入蛛網膜下腔" },
            { label: "2. 脊髓段造影", value: "注射後 1–2 小時掃描腰椎，確認示蹤劑無漏出至硬膜外，且順利向上游流動" },
            { label: "3. 延遲頭部造影", value: "於注射後 2h, 4h, 24h, 48h（必要時 72h）進行頭部多視角掃描" }
        ],
        article: [
            "由於腦脊髓液循環緩慢，正常人在注射後 24 小時示蹤劑應已流經頭蓋骨穹窿（Sagittal Sinus / 矢狀竇），且側腦室（Ventricles）內絕對不應有任何示蹤劑顯影。",
            "在正常壓力腦積水 (NPH) 病人中，由於蛛網膜顆粒吸收障礙，CSF 循環受阻，示蹤劑會異常逆流進入側腦室，並在 24–48 小時持續滯留不洗脫，這是診斷 NPH 的特徵性影像。"
        ],
        note: "執行腰椎穿刺後，病人應平躺 4–6 小時，避免腦脊髓液流失導致頭痛。"
    },
    content: [
        {
            type: "info-box-blue",
            html: `<h4>臨床定位：精準追蹤腦脊髓液動態動力學</h4>
            <p>腦脊髓液池掃描 (Radionuclide Cisternography) 是評估腦脊髓液 (CSF) 流動與吸收的權威功能性檢查。主要用於**診斷正常壓力腦積水 (NPH，協助預測分流手術效果)**、以及**定位與量化腦脊髓液漏 (CSF Leak，如鼻漏、耳漏)**，為臨床提供無可替代的動力學時間路徑資訊。</p>`
        },
        {
            type: "section",
            title: "一、 示蹤劑與劑量標準 (In-111 DTPA)",
            icon: "🧬",
            html: `<div class="prose">
                <ul>
                    <li><strong>示蹤劑</strong>：首選 <strong>Indium-111 DTPA (鉈-111)</strong>。其物理半衰期為 <strong>2.8 天 (67 小時)</strong>，發射 171 keV 與 245 keV 雙能量伽馬射線。這能滿足長達 3 天的 CSF 循環造影。*（若僅評估 24 小時內之 CSF Leak，亦可使用 Tc-99m DTPA）*。</li>
                    <li><strong>成人劑量鐵律</strong>：**固定劑量 0.5 mCi (18.5 MBq) 絕對上限**。由於是鞘內注射 (Intrathecal Injection)，必須嚴格遵守無菌操作，且活度因輻射防護考量受到嚴密限制，絕不可超量注射。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "二、 正常壓力腦積水 (NPH) 實戰判讀",
            icon: "🧭",
            html: `<div class="prose">
                <p>NPH 臨床三聯症包含：漸進性失智、步態不穩、尿失禁。核醫判讀主要關注側腦室是否出現逆流與滯留：</p>
                
                <div class="therapy-rich-card is-blue" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● 正常 CSF 流動路徑 (Normal Pattern)</h5>
                    <p style="margin: 0 0 8px 0;">注射後 2-4 小時活性到達基底池 (Basal Cisterns)；24 小時流經側腦室外圍與大腦縱裂，並聚集在大腦穹窿的矢狀竇進行吸收。**側腦室 (Lateral Ventricles) 全程呈放射性缺損 (無任何顯影)**。</p>
                </div>

                <div class="therapy-rich-card is-rose" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● NPH 異常逆流與滯留型態</h5>
                    <ul>
                        <li><strong>側腦室持續逆流 (Persistent Ventricular Reflux)</strong>：在 24 小時與 48 小時影像上，側腦室呈現異常明亮、對稱的**「三叉戟 (Trident)」或「蝴蝶狀」高放射性濃聚**。</li>
                        <li><strong>穹窿吸收阻滯</strong>：大腦穹窿矢狀竇遲遲不顯影，提示蛛網膜顆粒吸收受阻。這高度提示為交通性腦積水 (NPH)，是評估腦脊髓液分流手術 (VP Shunt) 受益機率的關鍵影像指引。</li>
                    </ul>
                </div>
            </div>`
        },
        {
            type: "section",
            title: "三、 腦脊髓液漏 (CSF Leak) 診斷與棉球 (Pledget) 定量法",
            icon: "📐",
            html: `<div class="prose">
                <p>當懷疑有外傷、手術後或自發性腦脊髓液鼻漏/耳漏時，應執行以下定量流程：</p>
                <ol>
                    <li>在腰椎穿刺注射 In-111 DTPA 前，由耳鼻喉科醫師在病人雙側鼻腔特定位置置入**預先稱重並編號的無菌棉球 (Pledgets)**。</li>
                    <li>注射示蹤劑後，讓病人保持容易漏液的特定體位。</li>
                    <li>在注射後 4–24 小時取出棉球，精確稱重，並在井型計數器 (Well Counter) 中測量**每個棉球的放射活性 (CPM)**。</li>
                    <li>同時抽取病人等量的外周血液，離心後測量**血漿 (Plasma) 的放射活性**。</li>
                    <li><strong>計算棉球對血漿比值 (Pledget-to-Plasma Ratio)</strong>：<br>
                    <strong>Ratio = [棉球活性 (CPM) / 棉球重量] / [血漿活性 (CPM) / 血漿重量]</strong>。<br>
                    若 Ratio **&gt; 1.5–2.0**，即可確診為 CSF Leak；並能透過棉球的編號位置精確定位是篩板、蝶竇還是篩竇的解剖漏出點。</li>
                </ol>
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
            label: "收治模式",
            value: "先分清門診還是住院",
            note: "低活度門診與高活度住院不是同一個劇本，前置評估與放行規則也不同。"
        },
        {
            label: "住院條件",
            value: "活度、病房設施、家庭情境一起看",
            note: "不是只有有床就能收；病人能否安全返家、是否有幼兒孕婦同住，也要先問。"
        },
        {
            label: "出院判斷",
            value: "量測與衛教缺一不可",
            note: "1 公尺劑量率、污染控制能力與書面衛教，要一起決定能不能放行。"
        },
        {
            label: "返家限制",
            value: "接觸距離、交通、衛浴先講清楚",
            note: "真正困難常在回家後怎麼睡、怎麼搭車、能不能共用廁所，而不是住院當天。"
        },
        {
            label: "追蹤影像",
            value: "是否安排 post-therapy WBS 依醫囑與 protocol",
            note: "不要把治療後掃描當附贈彩蛋，應在治療計畫裡一起講清楚。"
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
                    <img src="assets/lu177-prrt-figures/figure-3-cycle-1-baseline-reset.webp" alt="Lu-177 後治療影像示意：治療啟動時的 cycle 1 影像可重設真正基線">
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
                    <img src="assets/lu177-prrt-figures/figure-5-imaging-vs-psa-discordance.webp" alt="Lu-177 後治療影像示意：PSA 下降但不同病灶反應不一致">
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
                    <img src="assets/lu177-prrt-figures/figure-6-psma-positive-and-negative-lesions.webp" alt="Lu-177 後治療影像示意：同時存在 PSMA 陽性與陰性病灶">
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
                    <img src="assets/lu177-prrt-figures/figure-1-new-lesion-and-mixed-response.webp" alt="Lu-177 PRRT 後治療影像示意：新病灶與 mixed response">
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
                    <img src="assets/lu177-prrt-figures/figure-2-marked-response-and-treatment-pause.webp" alt="Lu-177 PRRT 後治療影像示意：反應明顯時可考慮暫停療程">
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
                    <img src="assets/lu177-prrt-figures/figure-4-timing-consistency.webp" alt="Lu-177 後治療影像示意：不同時間點成像造成假性差異">
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
        { src: "assets/guide/01.webp", desc: "第一步" },
        { src: "assets/guide/02.webp", desc: "第二步" },
        { src: "assets/guide/03.webp", desc: "第三步" },
        { src: "assets/guide/04.webp", desc: "第四步" },
        { src: "assets/guide/05.webp", desc: "第五步" },
        { src: "assets/guide/06.webp", desc: "第六步" }
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
        title: "核醫常看功能，設備與品質控制（QC）會影響影像品質",
        lead: "核醫檢查看功能；設備決定影像怎麼取得；品質控制（QC）決定影像能不能被信任。先懂這三件事，後面讀單光子斷層（SPECT）、正子造影（PET）或各種檢查會比較容易。",
        cards: [
            { title: "先看功能資訊", text: "核醫最擅長回答的是器官是否正常運作、病灶是否具有活性，而不只是外觀像不像。" },
            { title: "再分清主流設備", text: "雙探頭加馬攝影機、通用型 CZT、心肌專用 CZT、正子電腦斷層（PET/CT）與正子磁振造影（PET/MR），各自對應不同的臨床與技術問題。" },
            { title: "把品質控制放回核心", text: "品質控制（QC）不是附屬行政，而是確認病人影像異常來自病人，不是來自設備本身。" },
            { title: "延伸閱讀方向", text: "若要理解文件與紀錄管理，可接文件與品質管理；若要理解藥物如何在熱核室安全處理，可接熱核室與製劑作業。" }
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
    WomenRadiationPractice: {
        eyebrow: "先看臨床決策順序",
        title: "女性與懷孕相關輻射檢查，核心是分級與正當化",
        lead: "先辨識是否可能懷孕，再依子宮曝露風險分級決策，最後把問診、告知與決策文件化，避免過度延誤與不必要曝露。",
        cards: [
            { title: "10 日法則已非主流硬規則", text: "截至 2026 年，IAEA/ICRP 與 ACR 路徑皆以風險分級與臨床必要性為主，不建議只靠月經天數一刀切。" },
            { title: "先分檢查風險層級", text: "子宮可忽略曝露、低曝露、可能較高曝露三層，對應不同問診與驗孕深度。" },
            { title: "高風險程序一定要升級", text: "骨盆 CT、介入或治療性核醫若未排除懷孕，不可由第一線自行放行。" },
            { title: "診斷與治療核醫分開管理", text: "診斷核醫可在正當化下執行；治療核醫多屬禁忌或高度限制，流程不可混用。" }
        ]
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
    PETCTRadiation: {
        eyebrow: "先拆 CT 部分，再談總劑量",
        title: "PET/CT 輻射探討：真正該監測的是 DLP、CTDIvol、掃描範圍與事件數",
        lead: "這頁不是把 PET/CT 混成一個總 mSv，而是拆開看 FDG 與 CT、單段與分段掃描、延遲 CT 與流程優化，讓研究與品質改善有明確指標可追。",
        cards: [
            { title: "原始指標先行", text: "研究與檢討時，先看 DLP、CTDIvol、掃描長度與照射事件，不要先跳到單一 mSv 數字。" },
            { title: "分段掃描是關鍵變因", text: "CTDIvol 不一定很高，但只要範圍長、事件多，累積 DLP 仍會快速上升。" },
            { title: "延遲 CT 常是隱性來源", text: "額外負擔常不是多一段 PET，而是為了延遲問題釐清又例行重做 CT。" },
            { title: "重點是流程分流", text: "衰減校正、解剖定位、診斷 CT 與局部延遲 CT 應分層管理。" }
        ],
        conceptDiagram: {
            type: "chain",
            kicker: "檢討思考路徑",
            title: "PET/CT 劑量檢視：先判 CT 目的，再追事件、範圍與重複 CT",
            lead: "別先問這份報告幾 mSv；先問這段 CT 用來做什麼、做了幾次、掃了多長。",
            items: [
                { label: "1 目的", tone: "warning", title: "先判 CT 目的", text: "衰減校正、定位與診斷 CT，不該沿用同一套條件。" },
                { label: "2 事件", tone: "info", title: "再數掃描事件", text: "分段、延遲與追加 CT，會直接把 DLP 往上推。" },
                { label: "3 範圍", tone: "warning", title: "確認掃描範圍", text: "範圍過長或重疊，就算 CTDIvol 不高也會吃掉 DLP。" },
                { label: "4 重做", tone: "critical", title: "優先抓重複 CT", text: "最常見可改善來源，是沒有明確理由的重複全身 CT。" },
                { label: "5 優化", tone: "success", title: "最後才做優化", text: "再分流條件、縮短範圍、降低第二段 CT 強度與做儀表板。" }
            ],
            note: "讀法：先看 CT 目的，再看事件與範圍，最後才討論 mSv 與優化。"
        },
        evidence: "更新依據：EANM 2025 v3.0、ACR–ACNM–SNMMI–SPR 2021、ADS / ANZSNM 2024，並以南部醫學中心 Siemens Biograph 劑量報告作案例拆讀。"
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
        title: "唾液腺掃描",
        subtitle: "Tc-99m Pertechnetate Salivary Gland Scintigraphy — 大唾液腺攝取、排出與刺激後功能判讀",
        category: "endocrine",
        protocolSummaryDisplay: "expanded",
        readerGuideMode: "article",
        readerGuideArticle: [
            "唾液腺掃描的教學重點，不是只記得會給檸檬汁，而是要看懂動態曲線背後的三個階段：攝取、排出、再累積。",
            "這張檢查最常拿來回答的不是『有沒有一顆腫塊』，而是兩側大唾液腺的整體功能是否下降、是否對刺激有反應、以及左右是否對稱。",
            "在 Sjögren syndrome 的現代分類標準裡，唾液腺 scintigraphy 已不是主要分類條件，但它仍可作為口乾嚴重度、放療後功能受損與阻塞性病變的補充功能評估。"
        ],
        timeArchitecture: {
            mode: "article",
            steps: [
                { label: "檢前準備", value: "先確認禁食、補水、刺激物與會影響唾液分泌的因素" },
                { label: "動態收像", value: "Tc-99m pertechnetate 注射後連續 anterior 頭頸動態" },
                { label: "刺激排出", value: "固定時間給檸檬汁或其他酸刺激並追蹤排出與再累積" }
            ],
            article: [
                "第一階段要先把影像條件固定下來。常見作法是檢前至少禁食 2 小時，讓口腔與胃部狀態較一致，再確認病人能否配合 20 到 30 分鐘的頭頸固定動態收像。",
                "第二階段是注射 Tc-99m pertechnetate 後持續動態攝影。正常大唾液腺會逐步攝取示蹤劑，通常腮腺比頜下腺更早、更明顯地累積。",
                "第三階段在固定時間給刺激物，例如 20 分鐘時給檸檬汁，再觀察兩側是否能迅速排出，之後是否重新累積。這段變化才是功能判讀的核心。"
            ],
            note: "刺激物種類、給予時間、dynamic frame 長度與 ROI 畫法，應固定為科內一致 protocol，否則不同病人間很難比較。"
        },
        content: [
            {
                type: "info-box-blue",
                html: `<h4>臨床定位：看的是整體分泌功能，不是單一結節影像</h4>
                <p>唾液腺掃描使用 <strong>Tc-99m pertechnetate</strong> 觀察腮腺與頜下腺對示蹤劑的攝取與刺激後排出。它最適合回答的是<strong>口乾症狀與雙側大唾液腺功能是否下降、是否可被刺激、以及左右是否對稱</strong>，而不是用來取代超音波或 CT 做局部解剖搜尋。</p>`
            },
            {
                type: "section",
                title: "一、 目前臨床最常放在哪些情境？",
                icon: "🎯",
                html: `<div class="prose">
                    <ul>
                        <li><strong>口乾症狀功能評估：</strong>當病人主訴 xerostomia，需要了解雙側大唾液腺是否普遍功能下降時，唾液腺掃描能提供整體功能資訊。</li>
                        <li><strong>Sjogren syndrome 補充評估：</strong>雖然 2016 ACR/EULAR 分類準則已不把 salivary scintigraphy 納入主要分類條件，但在追蹤功能受損程度或與其他檢查互補時仍有角色。</li>
                        <li><strong>放療後與藥物相關唾液腺損傷：</strong>頭頸癌放療後、I-131 治療後或其他導致唾液功能下降的情境，可用來比較治療前後變化。</li>
                        <li><strong>阻塞性或慢性發炎性病變：</strong>若臨床想知道分泌刺激後是否排出不良，唾液腺動態影像比單張結構影像更能反映功能問題。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "二、 為什麼這張檢查看得見唾液腺功能？",
                icon: "🧬",
                html: `<div class="prose">
                    <p>Tc-99m pertechnetate 會被唾液腺上皮攝取並分泌到口腔中，因此動態曲線可分成三個教學階段：<strong>累積期、刺激後排出期、再累積期</strong>。讀圖時不能只截一張最亮的影像，而要把整段時間序列一起看。</p>
                    <p>正常情況下，兩側腮腺與頜下腺會逐步累積，約在刺激前達到高點；接受酸刺激後，活性應迅速下降，之後再慢慢回升。若缺少這個「下降再回升」的節奏，就要思考排出功能是否受損。</p>
                </div>`
            },
            {
                type: "section",
                title: "三、 檢前準備：刺激物一致，比臨時加拍更重要",
                icon: "🩺",
                html: `<div class="prose">
                    <ul>
                        <li><strong>禁食與補水：</strong>常見研究與實務 protocol 會要求檢前至少禁食 2 小時，並保持基本水分狀態，避免口腔條件差異太大。</li>
                        <li><strong>固定刺激方式：</strong>檸檬汁、檸檬糖或其他酸刺激物都可以，但同一科別應固定種類、容量與給予時間點。</li>
                        <li><strong>審視會影響分泌的因素：</strong>抗膽鹼藥物、鎮靜藥、脫水、急性感染與疼痛都可能影響唾液流量，排檢時應先記錄，而不是等曲線怪怪的才回頭猜。</li>
                        <li><strong>頭頸固定：</strong>這張檢查靠 ROI 與動態曲線判讀，頭頸 motion 會直接破壞左右比較與定量。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "四、 影像如何判讀：先看三階段節奏，再談左右差異",
                icon: "🧭",
                html: `<div class="prose">
                    <p><strong>正常型態</strong>是雙側大唾液腺逐步而對稱地攝取示蹤劑，腮腺通常比頜下腺更明顯；刺激後數分鐘內活性應明顯下降，之後再出現重新累積。這種「慢慢升、快速降、再回升」的節奏，是最重要的正常參考。</p>
                    <p><strong>廣泛功能下降型</strong>常見於 Sjogren syndrome 或嚴重放療後損傷。影像上可能表現為兩側腮腺與頜下腺整體攝取偏低、達峰緩慢，刺激後下降不明顯，甚至幾乎沒有可辨識排出。若四個大腺體都一起變差，通常比單側異常更支持全腺體功能問題。</p>
                    <p><strong>排出不良型</strong>的特徵是刺激前可正常或近正常累積，但刺激後曲線下降不足，代表腺體會抓住示蹤劑卻排不出去。這類型態在阻塞性病變或慢性炎症時很實用。</p>
                    <p><strong>單側或局部不對稱</strong>時，先確認不是頭位偏移、ROI 畫法不一致或口腔污染，再考慮單側手術後變化、局部炎症、阻塞或放療偏側效應。唾液腺掃描偏向整體功能檢查，若臨床要找結石或局部腫塊，仍要回到超音波、CT 或 MR sialography。</p>
                    <p><strong>定量與視覺判讀要互補</strong>。近年健康族群動態研究顯示，正常腮腺的最大攝取比例與排出分率通常高於頜下腺；因此同時看 time-activity curve 與腺體視覺節奏，比只寫一個數值更能幫臨床理解。</p>
                </div>`
            },
            {
                type: "section",
                title: "五、 常見陷阱與限制",
                icon: "⚠️",
                html: `<div class="prose">
                    <ul>
                        <li><strong>specificity 不高：</strong>唾液腺 scintigraphy 對功能下降敏感，但對病因鑑別不夠專一，因此不能單靠它區分 Sjogren、藥物影響、放療或其他唾液腺疾病。</li>
                        <li><strong>刺激物與時間點不一致：</strong>若每位病人的檸檬汁量、給予時點或收像長度不同，曲線就失去可比性。</li>
                        <li><strong>只看單張影像：</strong>若忽略 time-activity curve，就很容易把暫時攝取不足或短暫口腔污染誤判成功能異常。</li>
                        <li><strong>現代 Sjogren 分類已不主打這張檢查：</strong>因此報告語氣應聚焦在功能描述，不要把影像結果直接寫成 Sjogren 的確診句。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "六、 報告與溝通建議",
                icon: "📝",
                html: `<div class="prose">
                    <ul>
                        <li>記錄示蹤劑、活度、動態總時間、frame 長度、刺激物種類與刺激時點。</li>
                        <li>描述兩側腮腺與頜下腺的攝取是否對稱、刺激後是否有明顯排出、以及再累積是否保留。</li>
                        <li>若有定量，寫清楚 ROI 與指標定義，避免只放數值卻沒有視覺描述。</li>
                        <li>結論建議使用「雙側大唾液腺攝取與排出普遍下降」「右側排出功能較左側差」這類功能語言，而非單靠影像替臨床做病因定論。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "參考文獻",
                icon: "📚",
                html: `<div class="prose">
                    <ol>
                        <li>Shiboski CH, Shiboski SC, Seror R, et al. 2016 American College of Rheumatology/European League Against Rheumatism Classification Criteria for Primary Sjogren's Syndrome. <em>Arthritis Rheumatol</em>. 2017;69(1):35-45.</li>
                        <li>Giuseppe C, et al. The role of salivary gland scintigraphy in the evaluation of patients with xerostomia and Sjogren syndrome. Review literature summarized in <em>Front Med</em>. 2020.</li>
                        <li>Kim J, et al. Establishment of normal reference values for dynamic salivary gland scintigraphy and quantitative indices in healthy adults. <em>Diagnostics</em>. 2024.</li>
                        <li>Procedure recommendations and contemporary salivary imaging reviews comparing scintigraphy with ultrasound and MR sialography, updated through 2024.</li>
                    </ol>
                </div>`
            }
        ]
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
    I131WBS: {
        title: "I-131 全身掃描",
        subtitle: "I-131 Whole-Body Scan — 甲狀腺癌術後殘餘組織、復發與轉移病灶的高能量全身影像",
        category: "endocrine",
        protocolSummaryDisplay: "expanded",
        readerGuideMode: "article",
        readerGuideArticle: [
            "I-131 全身掃描的教學核心，是分清楚這張影像在問的是「還有哪些會攝碘的組織」，而不是所有亮點都等於腫瘤。",
            "診斷性 WBS 和治療後 WBS 雖然都叫全身掃描，但臨床問題、敏感度與判讀信心並不相同；教材應把兩者放在同一條工作流程裡理解。",
            "現代 ATA 指南也提醒，WBS 的價值常在與 thyroglobulin、超音波與 SPECT/CT 串聯使用，而不是孤立讀圖。"
        ],
        timeArchitecture: {
            mode: "article",
            steps: [
                { label: "前置刺激", value: "TSH stimulation、低碘飲食與近期含碘暴露評估" },
                { label: "給藥與延遲", value: "診斷性或治療性 I-131 後依 protocol 延遲收像" },
                { label: "全身加定位", value: "whole-body planar，必要時 spot view 或 SPECT/CT" }
            ],
            article: [
                "第一階段先決定病人是做診斷性 WBS 還是治療後 WBS，並把 TSH stimulation 的方式講清楚。臨床上可能是停用甲狀腺素後升高 TSH，也可能使用 rhTSH；兩者都會影響排程、症狀與病人配合度。",
                "第二階段是低碘飲食與含碘暴露管理。若近期做過含碘顯影或仍有高碘攝取，病灶就算存在，也可能因碘池已滿而顯影不足。",
                "第三階段才是高能量全身掃描本身。影像通常先以 whole-body planar 掌握全身分布，再針對可疑區域補 spot view 或 SPECT/CT，以區分殘餘甲狀腺床、淋巴結、肺轉移、骨轉移與污染。"
            ],
            note: "掃描時點需依院內 protocol、給藥目的與臨床問題固定。診斷性與治療後的時序不可混寫。"
        },
        content: [
            {
                type: "info-box-blue",
                html: `<h4>臨床定位：看的是「哪些組織還會攝碘」</h4>
                <p>I-131 全身掃描最常用在分化型甲狀腺癌術後，評估甲狀腺床殘餘組織、復發病灶與遠端轉移。影像語言是<strong>攝碘能力</strong>，因此判讀時一定要先分清生理性分布、污染與真正病灶，而不是看到亮點就直接寫成轉移。</p>`
            },
            {
                type: "section",
                title: "一、 診斷性 WBS 與治療後 WBS 有什麼不同？",
                icon: "🎯",
                html: `<div class="prose">
                    <p><strong>診斷性 WBS</strong>通常用在術後分期補充、風險重估或追蹤特定疑問；<strong>治療後 WBS</strong>則是在 I-131 治療後，用較高活度把原本不明顯的殘餘組織或轉移病灶顯示出來。ATA 2015 指南指出，治療後掃描常可發現前面未明顯顯示的病灶，並可藉 SPECT/CT 進一步改善定位。</p>
                    <p>實務上，診斷性 WBS 不是每位分化型甲狀腺癌病人都例行需要；低風險且已有 excellent response 的病人，常不需反覆常規 diagnostic WBS。這個觀念要寫進教材，避免把 WBS 誤教成「每次都要做」的固定流程。</p>
                </div>`
            },
            {
                type: "section",
                title: "二、 檢前準備：真正影響畫面的常在掃描前",
                icon: "🩺",
                html: `<div class="prose">
                    <ul>
                        <li><strong>TSH stimulation：</strong>若 TSH 沒有被拉高，病灶未必願意攝碘，影像就可能低估疾病。排檢時要清楚記錄是 hormone withdrawal 還是 rhTSH。</li>
                        <li><strong>低碘飲食：</strong>目標不是形式上「少吃海鮮」，而是降低體內碘池，讓放射性碘有機會被真正的目標組織攝取。</li>
                        <li><strong>近期含碘暴露：</strong>CT contrast、含碘消毒劑、某些保健食品與 amiodarone 都可能干擾，需在檢前主動追問。</li>
                        <li><strong>污染控制：</strong>掃描前排尿、更衣、取下口袋衛生紙與檢查皮膚污染，不是衛教細節，而是避免假陽性的第一步。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "三、 攝影流程：whole-body 只是起點，定位常靠補拍",
                icon: "🖥️",
                html: `<div class="prose">
                    <ul>
                        <li><strong>高能量準直儀不可省略：</strong>I-131 需使用 HE collimator 與相符能窗，否則畫質與散射控制都會出問題。</li>
                        <li><strong>先看全身分布：</strong>whole-body planar 讓我們知道亮點在哪些區域，再決定是否補頸部、胸部、骨盆或局部 spot view。</li>
                        <li><strong>SPECT/CT 的價值在定位：</strong>當平面影像無法分清甲狀腺床殘餘、頸部淋巴結、吞嚥後食道活性、腸道或骨病灶時，SPECT/CT 通常比再加更多平面投影更有幫助。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "四、 影像如何判讀：先分生理、污染，再談病灶",
                icon: "🧭",
                html: `<div class="prose">
                    <p><strong>生理性攝取</strong>常見於唾液腺、鼻咽黏膜、胃、腸道與泌尿系統，女性哺乳期乳房也可能顯影。讀片時應先建立一張「正常會亮哪裡」的地圖，避免把生理分布誤認為轉移。</p>
                    <p><strong>甲狀腺床殘餘組織</strong>通常位在頸部中央或偏中央的手術床區域，若與治療後掃描時間點相符，常見為術後 remnant。若焦點偏外側、形態不典型或與超音波結節對位，則要考慮頸部淋巴結轉移。</p>
                    <p><strong>淋巴結與遠端轉移</strong>的判讀要靠位置學。頸部外側、上縱膈、肺野散在點狀或瀰漫攝取、以及骨骼固定焦點，都可見於轉移；但真正下結論前，最好確認其位置是否固定、是否與解剖影像對應，並排除表面污染。</p>
                    <p><strong>污染</strong>是 I-131 WBS 最常見的假陽性之一。唾液、汗液、鼻涕、尿液污染常呈表面不規則亮點，有時會隨擦拭、換衣或重新排尿後消失。凡是亮點的位置不合理、邊界太表淺或左右對稱得不自然，都要先想污染。</p>
                    <p><strong>SPECT/CT 的角色</strong>是把「亮在哪裡」變成「亮的是什麼」。ATA 指南與後續研究都指出，SPECT/CT 能增加轉移淋巴結辨識、減少 equivocal findings，並在部分病例改變後續處置。</p>
                </div>`
            },
            {
                type: "section",
                title: "五、 常見陷阱與限制",
                icon: "⚠️",
                html: `<div class="prose">
                    <ul>
                        <li><strong>低風險病人不是都需要常規診斷性 WBS：</strong>要依風險分層與治療反應決定，不宜過度流程化。</li>
                        <li><strong>診斷劑量與 stunning 議題：</strong>前治療 diagnostic scan 的選擇需考慮後續治療規畫；部分中心在特定場景偏好 I-123 作為診斷性 WBS，以減少 I-131 低劑量先行造成的顧慮。</li>
                        <li><strong>平面定位有限：</strong>單靠 whole-body planar 很容易卡在「有亮，但不確定是什麼」，因此應及早考慮 spot view 或 SPECT/CT。</li>
                        <li><strong>攝碘陰性不等於沒有病灶：</strong>分化差、去分化或 Tg elevated / scan negative 的情況，仍可能需要超音波、CT、FDG PET/CT 等其他路徑。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "六、 報告與溝通建議",
                icon: "📝",
                html: `<div class="prose">
                    <ul>
                        <li>記錄給藥目的、活度、TSH stimulation 方式、低碘飲食與掃描時點。</li>
                        <li>描述生理分布是否如預期，再逐區說明可疑殘餘組織、淋巴結或遠端病灶。</li>
                        <li>若有可疑污染，應在報告中清楚註明已重拍、擦拭或重新排尿後是否消失。</li>
                        <li>結論建議寫成「支持甲狀腺床殘餘組織」「頸部外側攝碘灶，合併 SPECT/CT 較支持淋巴結轉移」等定位式語言，而不是只寫「陽性」。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "參考文獻",
                icon: "📚",
                html: `<div class="prose">
                    <ol>
                        <li>Haugen BR, Alexander EK, Bible KC, et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. <em>Thyroid</em>. 2016;26(1):1-133.</li>
                        <li>Avram AM, et al. Nuclear imaging in differentiated thyroid cancer: roles of diagnostic and posttherapy I-131 whole-body scanning with SPECT/CT. Contemporary reviews and practice updates through 2024.</li>
                        <li>ATA guideline evidence summaries on diagnostic WBS selectivity, SPECT/CT added value, and posttherapy scan timing.</li>
                    </ol>
                </div>`
            }
        ]
    },
    MUGA: {
    title: "心室功能檢查 MUGA / ERNA",
    subtitle: "Equilibrium Radionuclide Angiography 的臨床與技術實作",
    category: "cardiac",
    readerGuideMode: "article",
    readerGuideArticle: [
        "MUGA（ERNA）的價值在於可重現、可比較、可追蹤，不是只給一個 LVEF 數字。若同一病人要做治療前後序列監測，流程標準化比單次『看起來清楚』更重要。",
        "臨床判讀上，先確認檢查品質（R-wave gating、R-R histogram、ROI 合理性、統計數）再解讀功能參數。品質失控時，數值再漂亮也可能是誤差。",
        "近年重點已從『能不能量到 EF』轉向『不同軟體/流程能否互換』；2025 研究顯示跨軟體偏差可達臨床決策等級，故 serial 追蹤應避免任意切換平台。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "RBC 標記", value: "in vivo / modified / in vitro" },
            { label: "平衡後收像", value: "Planar LAO + multi-view 或 SPECT" },
            { label: "ECG R-wave gating", value: "16–32 frames / R-R" }
        ],
        article: [
            "第一階段是 RBC 標記：in vivo、modified in vivo/in vitro、in vitro 三法中，以 in vitro 標記效率最高，最利於高品質定量與 serial 追蹤。",
            "第二階段是擷取：平面 ERNA 的 LVEF 核心視角為 LAO best septal view，並以 16–32 frames/R-R 進行 ECG gating；必要時增加 anterior/lateral 觀察區域壁運動。",
            "第三階段是分析：平面採 count-based LVEF（ED/ES ROI + 背景校正），SPECT ERNA 則可用 3D 方式評估雙心室體積與 RVEF。"
        ],
        note: "同一病人序列追蹤時，應固定相機、收像參數、ROI 規則與分析軟體版本。"
    },
    content: [
        {
            type: "section",
            title: "名稱與定位：ERNA、MUGA、RNV 是同一技術族群",
            icon: "📘",
            html: `<div class="prose">
                <p>ERNA（equilibrium radionuclide angiography）與 MUGA（multigated acquisition）在實務上常互稱；核心都在以標記紅血球建立血池訊號，再透過 R-wave gating 取得心動週期平均影像以定量心室功能。</p>
                <p>SNMMI/EANM 2020 指引指出，此法在 serial LVEF 的 reproducibility 極高（文獻引用 inter/intraobserver variability &lt;5%），因此特別適合化療心毒性監測與長期療效追蹤。</p>
            </div>`
        },
        {
            type: "section",
            title: "臨床適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>最常見：</strong>癌症治療（特別是潛在心毒性藥物）前、中、後的 LVEF 追蹤。</li>
                    <li>心肌病變、瓣膜病、缺血後心室功能追蹤，或需要高重現性數值比較的情境。</li>
                    <li>當超音波窗不佳、CMR 不可行，ERNA 可作為穩定的功能定量工具。</li>
                    <li>限制：ERNA 提供的是血池功能資訊，對瓣膜結構、心肌組織特徵與缺血病灶定位不如 echo/CMR/MPI。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "標準技術流程（教學版）",
            icon: "🩺",
            html: `<div class="prose">
                <p><strong>病人準備：</strong>休息態通常不需禁食；若做運動或 dobutamine stress，建議禁食 3–4 小時並先檢核壓力檢查禁忌症。檢查前要主動確認心律不整、近期輸血、heparin/dextrose 靜脈路徑與可能干擾 RBC 標記之藥物/病史。</p>
                <p><strong>RBC 標記：</strong>SNMMI/EANM 2020 指引列出三法：in vivo（約 60–70%）、modified in vivo/in vitro（約 90%）、in vitro（&gt;97%）。若任務是精準 serial 定量，in vitro 通常最穩定，但需嚴格病人與血液樣本辨識流程。</p>
                <p><strong>劑量與擷取：</strong>成人常用活度約 555–1,110 MBq（15–30 mCi）。平面 ERNA 以 LAO best septal view 為 LVEF 核心角度，至少 16 frames/R-R（建議 24–32）；必要時補 anterior/lateral 以看區域壁運動。SPECT ERNA 在 RV 與雙心室體積分離常較有優勢。</p>
                <p><strong>計算原理：</strong>平面 LVEF 屬 count-based，需正確圈 ED 與 ES 的 LV ROI 並做背景校正；背景 ROI 位置錯誤（例如含脾臟或大血管）會直接造成系統性偏差。</p>
                <ul>
                    <li>公式：<strong>LVEF =（校正後 ED counts − 校正後 ES counts）/ 校正後 ED counts × 100%</strong></li>
                    <li>平面追蹤最怕「角度漂移 + ROI 漂移 + gating 失真」同時發生。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "軟體比較與序列追蹤規則",
            icon: "📊",
            html: `<div class="prose">
                <p>2025 年 J Nucl Med Technol 的研究（PMID:39814461）直接比較 <strong>Xeleris</strong> 與 <strong>Corridor4DM</strong>（以 CMR 為參考），發現同一批 ERNA 資料下，不同軟體可能出現顯著偏差；同軟體不同讀片者差異反而較小。研究結論明確指出：<strong>不同軟體不宜互換</strong>，切換時需高度警戒。</p>
                <p>實務上建議把以下條件「鎖定」：camera/collimator、R-R acceptance、frame 數、LAO 幾何、ROI 規則、背景 ROI 位置、重建與濾波參數、分析軟體與版本。若這些條件改變，報告必須註明可比性受限。</p>
            </div>`
        },
        {
            type: "section",
            title: "MUGA 結果判讀（臨床決策版）",
            icon: "🧭",
            html: `<div class="prose">
                <p><strong>先看可靠度，再看數值。</strong>判讀順序建議固定為：gating trigger 是否抓到 QRS、R-R histogram 是否集中、是否有 motion/frame drop-out、ROI 與背景 ROI 是否合理，最後才解讀 LVEF/RVEF。</p>
                <p><strong>序列追蹤最關鍵的不是單點高低，而是變化是否超過方法誤差。</strong>依 SNMMI/EANM 2020，ERNA serial 重現性可達 &lt;5%，因此前後約 5 個百分點以上的 LVEF 改變，才較可視為具臨床意義的真實變化。</p>
                <ul>
                    <li>收縮功能：LVEF、RVEF、global/regional wall motion（normal/hypokinetic/akinetic/dyskinetic）。</li>
                    <li>舒張功能：time-activity curve 形態、peak filling rate（PFR）與舒張充盈時間序列。</li>
                    <li>同步性：phase image / phase histogram 的平均相位與離散度（SD）。</li>
                    <li>壓力流程：同指引指出正常 stress LVEF 應較 rest 上升至少約 5 EF units。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "First-pass RNV（FPRNA）技術補充",
            icon: "🚀",
            html: `<div class="prose">
                <p><strong>定位：</strong>first-pass 不是取代 ERNA，而是以快速動態擷取第一循環通過心肺大血管時的訊號，特別有助於右心室功能（RVEF）與分流相關評估。</p>
                <p><strong>打藥與收像要點：</strong>重點是「緊實 bolus + 高時間解析」。靜脈路徑宜選通暢且靠近中心循環的路徑，避免外滲與過慢注射造成第一循環展寬。常見使用 RAO 投影取得右心分離較佳的時間活性曲線；數據處理仍須做背景校正並避免把心房/大血管訊號混入 RV ROI。</p>
                <p><strong>與 ERNA 的互補：</strong>ERNA 在 serial LVEF 重現性更有優勢；FPRNA 在特定右心與流入流出動力學問題可補足資訊。若做長期追蹤，同一病人應避免在 FPRNA 與 ERNA 間來回切換作為同一序列比較。</p>
                <ul>
                    <li>注射品質不佳（外滲、過慢、殘留）是 first-pass 誤差第一來源。</li>
                    <li>ROI 必須排除右心房與肺動脈重疊，否則 RVEF 會偏差。</li>
                    <li>first-pass 與 ERNA 量到的是不同時相與幾何模型，報告需註明方法學差異。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "文獻圖像示例（ROI 與指引頁）",
            icon: "🖼️",
            html: `<div class="prose">
                <p>此段改為聚焦最常被問的實作核心：「左心室 ROI 與背景 ROI 到底該畫在哪裡」。保留這張雙 ROI 示意即可支撐新手到臨床判讀的一線需求。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/muga-paper-figures/Taiwan_2022_MUGA_Fig1_ROI_tight.png" alt="Dual-ROI processing example for MUGA showing ventricular ROI and background ROI" loading="lazy" />
                    <figcaption>圖 1．MUGA 雙 ROI 處理示例。來源：陳麗華等，<em>核醫技學誌</em>. 2022;19:1-7, Figure 1。左圖是 ventricular ROI，右圖是背景 ROI；教學關鍵在於背景區應貼近左心室外側或 inferoapical 區，但要避開脾臟、主動脈與體外區域，否則背景校正會直接把 LVEF 算偏。</figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "Pitfalls 與報告最小必填",
            icon: "⚠️",
            html: `<div class="prose">
                <p><strong>六大常見陷阱：</strong>（1）RBC 標記效率差、（2）LAO 角度未達 best septal separation、（3）ECG gating 把 T wave/PVC 誤判、（4）counts 不足或 frame drop-out、（5）背景 ROI 放錯、（6）跨機器/跨軟體混用。</p>
                <p><strong>一份可用於治療決策的報告，不應只寫 LVEF。</strong>至少要有：indication、檢查型式（planar/SPECT）、藥物與活度、RBC 標記法、gating/影像品質、LV/RV size 與 wall motion、LVEF（必要時 RVEF/PFR/phase 分析）、與前次相比是否超出方法誤差。</p>
                <p><strong>主要參考文獻（權威與原始研究）：</strong></p>
                <ol>
                    <li><a href="https://sites.snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2020/jnmt_Gated%20ERNA.pdf" target="_blank" rel="noopener">SNMMI/EANM Procedure Standard for Gated ERNA, 2020</a>（J Nucl Med Technol 48:126-138）。</li>
                    <li><a href="https://pubmed.ncbi.nlm.nih.gov/39814461/" target="_blank" rel="noopener">Kappel RH, et al. J Nucl Med Technol. 2025;53(1):36-43</a>（software discrepancy；PMID:39814461）。</li>
                    <li><a href="https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2009/Cardiac_Scintigraphy_1382731812393_3.pdf" target="_blank" rel="noopener">ACR-SNM-SPR Practice Guideline for Cardiac Scintigraphy</a>（2009 修訂版，SNMMI 官方發布）。</li>
                    <li><a href="https://jnm.snmjournals.org/content/jnumed/38/10/1658.full.pdf" target="_blank" rel="noopener">SNM Procedure Guideline for Equilibrium Radionuclide Angiography, 1997</a>（J Nucl Med 38:1658-1661）。</li>
                    <li><a href="https://www.snm.org.tw/files/file_pool/1/0o138510474209225653/1%20%282%29.pdf" target="_blank" rel="noopener">陳麗華等。核醫技學誌 2022;19:1-7</a>（台灣平面/斷層 MUGA 與心超相關性）。</li>
                </ol>
            </div>`
        }
    ]
},

Venography: {
    title: "放射性核種靜脈攝影",
    subtitle: "Radionuclide Venography — 下肢靜脈回流、阻塞與側枝判讀",
    category: "cardiac",
    readerGuideMode: "article",
    readerGuideArticle: [
        "核醫靜脈攝影不是只看一張腿部照片，而是在看 tracer 是否能沿深靜脈主幹順利回流、是否被迫改走側枝，以及中斷點大致落在哪裡。",
        "這類檢查最容易被技術因素帶歪，因此判讀順序要固定：先看注射與止血帶流程是否可信，再看 flow phase，最後才下阻塞或 DVT 相關結論。",
        "現代臨床多由 venous ultrasound 擔任第一線，但在超音波受限、近端骨盆靜脈問題或需要功能性回流路徑概念時，radionuclide venography 仍有補充價值。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "建立血池", value: "依 protocol 做 flow 或 blood-pool 準備" },
            { label: "足背給藥", value: "雙側對照注射 + tourniquet" },
            { label: "動態與延遲相", value: "flow → blood pool / 必要時 SPECT-CT" }
        ],
        article: [
            "若採傳統 flow radionuclide venography，可用足背靜脈注射 Tc-99m MAA 或相近 protocol，重點在同步比較雙側深靜脈回流型態。",
            "若採 blood-pool 路徑，則需先建立穩定血池訊號，再做下肢 flow 與延遲血池判讀；這時注射路徑與示蹤劑標記品質就更重要。",
            "真正要看的不是『亮不亮』，而是 tracer 走哪條路、在哪裡變慢、是否出現異常側枝與近端中斷。"
        ],
        note: "同一單位應固定注射側、tourniquet 作法、flow 相時序與延遲相條件，否則前後病例的圖像語言很難比較。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位",
            icon: "📌",
            html: `<div class="prose">
                <p>放射性核種靜脈攝影（radionuclide venography）曾是下肢深部靜脈栓塞（DVT）與靜脈回流阻塞評估的重要工具。今日臨床第一線多已改由 duplex ultrasonography 處理，但當超音波對骨盆或近端靜脈段不易完整回答、病人體型或傷口使壓迫超音波受限，或需要看整體側枝回流路徑時，核醫靜脈攝影仍可提供功能性補充資訊。</p>
                <p>它和超音波的視角不同。超音波偏重血管壓縮性、管腔回聲與多普勒血流；核醫靜脈攝影偏重 tracer 的動態回流模式，因此特別適合教學上建立「正常深靜脈主幹回流」與「阻塞後繞道側枝」的圖像語言。</p>
            </div>`
        },
        {
            type: "section",
            title: "適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>可考慮情境：</strong>疑似 DVT 但超音波結果不明確、懷疑近端或骨盆段阻塞、需要補充功能性回流資訊、或追蹤側枝與通暢性變化。</li>
                    <li><strong>主要限制：</strong>空間解析度與解剖細節不如超音波、CT venography 或 MR venography；若注射品質或 tourniquet 條件失控，影像很容易被技術因素污染。</li>
                    <li><strong>目前角色：</strong>不是所有疑似 DVT 病人都要做，而是屬於特定問題導向的補充檢查。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "藥物、打藥與攝影流程",
            icon: "💉",
            html: `<div class="prose">
                <p>實務上常見兩類路徑：一類是直接做下肢 flow radionuclide venography；另一類是先建立 blood-pool 訊號後做 flow 與延遲血池觀察。不同院所可能使用 Tc-99m MAA、Tc-99m pertechnetate 結合 in-vivo RBC labeling，或其延伸 protocol；因此報告與技術紀錄必須明確寫出示蹤劑、注射方法與時序。</p>
                <p>下肢檢查通常採足背或足部遠端靜脈注射，雙側對照尤佳。tourniquet 的目的不是製造壓力感，而是協助表淺與深部靜脈分流控制，讓 tracer 優先呈現要觀察的回流路徑。若 tourniquet 綁法不一致、太鬆、太緊，或兩側條件不同，影像就會失去可比性。</p>
                <p>動態攝影重點是把 tracer 自遠端往近端的回流過程完整收進來；延遲 blood-pool phase 則用來看靜脈池分布、側枝與可疑阻塞段。若懷疑腹股溝以上病灶，可考慮加做腹骨盆範圍延伸影像或 SPECT/CT 做定位補強。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <p><strong>建議順序：</strong>先看技術品質，再看 flow 方向與連續性，最後才判讀阻塞程度。</p>
                <ul>
                    <li><strong>正常：</strong>雙側 tracer 沿深靜脈主幹平順、對稱向近端上行，沒有明顯中斷或異常表淺繞道。</li>
                    <li><strong>異常：</strong>單側回流延遲、主幹突然中斷、近端不顯影但可見明顯側枝擴張，支持深靜脈阻塞或 DVT 相關改變。</li>
                    <li><strong>只見表淺路徑：</strong>要先懷疑注射外滲、tourniquet 影響、既有靜脈通路異常或技術失敗，而不是立刻下深靜脈阻塞結論。</li>
                    <li><strong>近端問題：</strong>若小腿與膝上流向都不典型，卻無法明確定位，應主動建議與超音波或 CT/MR venography 對照。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "Pitfalls",
            icon: "⚠️",
            html: `<div class="prose">
                <p><strong>最常見誤差來源不是疾病本身，而是注射與流程。</strong></p>
                <ul>
                    <li><strong>注射外滲：</strong>會造成局部高活性與近端回流假性減弱，甚至只剩表淺路徑顯影。</li>
                    <li><strong>tourniquet 綁法不一致：</strong>兩側比較會失真，讓人誤以為一側回流異常。</li>
                    <li><strong>病人移動：</strong>動態相一旦移位，回流連續性與中斷點很容易被看錯。</li>
                    <li><strong>慢性既有側枝：</strong>不一定代表急性 DVT，需結合症狀時序與其他影像。</li>
                    <li><strong>只憑單一相位下結論：</strong>flow 與延遲血池相應一起看，才能分清急性中斷、慢性繞道與單純技術問題。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "文獻圖像示例",
            icon: "🖼️",
            html: `<div class="prose">
                <p>這一段保留兩張最有教學價值的圖：第一張回答「blood-pool venography 前示蹤劑是怎麼建立血池的」，第二張回答「正常、阻塞與側枝顯影到底長什麼樣子」。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Venography/RBC_PYP_Tc99m_Fallback_Workflow.svg" alt="Workflow for in-vivo RBC labeling venography using PYP followed by Tc-99m" loading="lazy" />
                    <figcaption>圖 1．以 PYP 先行處理、再注入 Tc-99m pertechnetate 的 in-vivo RBC 血池流程示意。圖的重點不在背步驟，而是理解 blood-pool venography 必須先把穩定血池訊號建立起來；若周邊靜脈條件差、注射不順或標記品質不穩，後面看到的回流與延遲相就可能一起失真。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Venography/WJNM_2018_Fig1_RadionuclideVenographyPatterns.jpg" alt="Representative radionuclide venography patterns showing normal flow and obstruction with collateral formation" loading="lazy" />
                    <figcaption>圖 2．核醫靜脈攝影代表型態。來源：Theerakulpisut D, et al. <em>World J Nucl Med</em>. 2018;17:27-33, Figure 1。教學上可先看正常深靜脈主幹如何平順向上，再對照阻塞時的主幹中斷與側枝擴張；若只剩表淺路徑或局部異常積聚，則優先思考外滲與技術因素。</figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "報告建議與參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <p>報告至少應註明：示蹤劑與注射法、注射側/雙側、tourniquet 條件、flow 與延遲相品質、回流是否連續、可疑中斷位置、側枝有無，以及是否建議追加超音波或其他靜脈影像。</p>
                <ul>
                    <li>Pavel DG, Zimmer AM, Patterson VN. <em>J Nucl Med</em>. 1977;18(3):305-308.</li>
                    <li>Snarski AM. <em>Eur J Nucl Med</em>. 1989;15(3):137-142.</li>
                    <li>Caner B, et al. <em>Angiology</em>. 1991;42(10):796-804.</li>
                    <li>Theerakulpisut D, et al. <em>World J Nucl Med</em>. 2018;17:27-33.</li>
                    <li>Liu C, et al. <em>J Nucl Med Radiat Ther</em>. 2016;7:295.</li>
                </ul>
            </div>`
        }
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
    MPI: [
        {
            type: "section",
            title: "心肌灌流（Tl-201 / Tc-99m）病人理解版",
            html: `<div class="prose">
                <ul>
                    <li><strong>這不是只看有沒有塞住：</strong>真正要回答的是「壓力下心肌血流夠不夠、缺損是不是可逆」。</li>
                    <li><strong>不論 Tl-201 或 Tc-99m，壓力流程都要先核對咖啡因與藥物：</strong>尤其是會影響 vasodilator stress 的情況。</li>
                    <li><strong>有氣喘、COPD、心律不整或不能運動，也要先告知：</strong>這些都會影響檢查怎麼做。</li>
                    <li><strong>流程可能比較長：</strong>Tc-99m 常見 rest/stress 雙相；Tl-201 常見 stress 後再分佈延遲相。</li>
                </ul>
            </div>`
        }
    ],
    MPI_Tc99m: [
        {
            type: "section",
            title: "心肌灌流（Tl-201 / Tc-99m）病人理解版",
            html: `<div class="prose">
                <ul>
                    <li><strong>這不是只看有沒有塞住：</strong>真正要回答的是「壓力下心肌血流夠不夠、缺損是不是可逆」。</li>
                    <li><strong>不論 Tl-201 或 Tc-99m，壓力流程都要先核對咖啡因與藥物：</strong>尤其是會影響 vasodilator stress 的情況。</li>
                    <li><strong>有氣喘、COPD、心律不整或不能運動，也要先告知：</strong>這些都會影響檢查怎麼做。</li>
                    <li><strong>流程可能比較長：</strong>Tc-99m 常見 rest/stress 雙相；Tl-201 常見 stress 後再分佈延遲相。</li>
                </ul>
            </div>`
        }
    ],
    MPI_Tl201: [
        {
            type: "section",
            title: "心肌灌流（Tl-201 / Tc-99m）病人理解版",
            html: `<div class="prose">
                <ul>
                    <li><strong>這不是只看有沒有塞住：</strong>真正要回答的是「壓力下心肌血流夠不夠、缺損是不是可逆」。</li>
                    <li><strong>不論 Tl-201 或 Tc-99m，壓力流程都要先核對咖啡因與藥物：</strong>尤其是會影響 vasodilator stress 的情況。</li>
                    <li><strong>有氣喘、COPD、心律不整或不能運動，也要先告知：</strong>這些都會影響檢查怎麼做。</li>
                    <li><strong>流程可能比較長：</strong>Tc-99m 常見 rest/stress 雙相；Tl-201 常見 stress 後再分佈延遲相。</li>
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
    WomenRadiationPractice: ['女性輻射', '懷孕輻射', '孕婦影像', '10日法則', '十日法則', '10 day rule', 'pregnancy radiation', 'pregnant patient imaging', '胎兒劑量', '哺乳輻射'],
    DosageTable: ['dosage', '劑量', 'dose', '劑量表', 'snmmi', 'eanm', 'mci', 'mbq'],
    DosageCalc: ['calculator', '計算', 'dosage', '劑量', 'weight', '體重', 'pediatric', '兒科'],
    PET: ['cancer', 'tumor', '腫瘤', '癌', 'fdg', 'glucose', '葡萄糖', 'staging', '分期', 'pet'],
    PETCTRadiation: ['pet/ct 輻射', 'pet ct radiation', 'fdg ct dose', 'ct component', 'dose report', 'dlp', 'ctdivol', 'ct dose', 'protocol optimization', 'delayed ct', '分段掃描', '輻射劑量'],
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
    MPI: ['heart', '心臟', 'cardiac', 'mpi', 'myocardial perfusion', '心肌灌流', 'sestamibi', 'thallium', 'tl201', '缺血', 'viability', '存活', 'stress'],
    MPI_Tc99m: ['heart', '心臟', 'cardiac', 'mpi', 'sestamibi', 'cad', 'coronary', '冠狀動脈', '灌流'],
    MPI_Tl201: ['heart', '心臟', 'thallium', 'viability', '存活', '心肌', 'tl201', '灌流'],
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

let motherSiteMotionContext = null;
let sidebarMotionBound = false;
let readingTocCleanup = null;

function canUseGsapMotion() {
    return Boolean(window.gsap)
        && document.visibilityState === 'visible'
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function resetNavMotionState(element) {
    if (!element) return;
    element.style.removeProperty('--nav-shift');
}

function initSidebarMotion() {
    if (sidebarMotionBound) return;
    sidebarMotionBound = true;

    const interactiveItems = document.querySelectorAll('.nav-item, .nav-group-toggle');
    interactiveItems.forEach((element) => {
        resetNavMotionState(element);
        if (!canUseGsapMotion()) return;

        const shiftTo = window.gsap.quickTo(element, '--nav-shift', {
            duration: 0.22,
            ease: 'power2.out',
            unit: 'px'
        });

        element.addEventListener('pointermove', (event) => {
            const rect = element.getBoundingClientRect();
            const ratio = rect.width ? (event.clientX - rect.left) / rect.width : 0;
            shiftTo(Math.max(0, Math.min(6, ratio * 6)));
        });

        element.addEventListener('pointerleave', () => shiftTo(0));
        element.addEventListener('blur', () => shiftTo(0));
    });
}

function animateSidebarSelection(viewName) {
    if (!canUseGsapMotion()) return;
    const activeItem = document.querySelector(`.nav-item[data-category="${viewName}"]`);
    if (!activeItem) return;

    window.gsap.killTweensOf(activeItem);
    window.gsap.fromTo(activeItem, {
        x: -8,
        opacity: 0.88
    }, {
        x: 0,
        opacity: 1,
        duration: 0.28,
        ease: 'power2.out',
        clearProps: 'x,opacity'
    });
}

function runMotherSiteMotion(viewName, container) {
    motherSiteMotionContext?.revert();
    motherSiteMotionContext = null;

    if (!container || !canUseGsapMotion()) return;

    motherSiteMotionContext = window.gsap.context(() => {
        const homeHero = container.querySelector('.home-hero');
        if (viewName === 'HomeHub' && homeHero) {
            const tl = window.gsap.timeline({
                defaults: {
                    ease: 'power2.out'
                }
            });

            tl.from('.home-hero h1', { autoAlpha: 0, y: 22, duration: 0.45 })
                .from('.home-hero-lead', { autoAlpha: 0, y: 18, duration: 0.4 }, '-=0.16')
                .from('.home-hero .prose p', { autoAlpha: 0, y: 18, duration: 0.34, stagger: 0.07 }, '-=0.2')
                .from('.home-hero-art', { autoAlpha: 0, y: 18, scale: 0.985, duration: 0.52 }, '-=0.34')
                .from('.home-hero-metric', { autoAlpha: 0, y: 14, duration: 0.32, stagger: 0.06 }, '-=0.24')
                .from('.home-resource-link', { autoAlpha: 0, y: 16, duration: 0.32, stagger: 0.05 }, '-=0.18');

            homeHero.style.setProperty('--hero-sheen-opacity', '1');
            window.gsap.fromTo(homeHero, {
                '--hero-sheen-x': '-130%'
            }, {
                '--hero-sheen-x': '130%',
                duration: 1.35,
                ease: 'power2.inOut',
                delay: 0.36,
                onComplete: () => {
                    homeHero.style.removeProperty('--hero-sheen-x');
                    homeHero.style.removeProperty('--hero-sheen-opacity');
                }
            });
        }

        const sections = container.querySelectorAll('.home-section, .content-section, .info-box, .qa-item');
        if (sections.length) {
            window.gsap.from(sections, {
                autoAlpha: 0,
                y: 18,
                duration: 0.38,
                ease: 'power2.out',
                stagger: 0.04
            });
        }
    }, container);
}

const HOME_HUB_CONFIG = {
    heroMetrics: [
        { label: '內容配置', value: '常用主題優先', desc: '首頁優先列出臨床工作中常用之檢查、治療與支援入口。' },
        { label: '查核用途', value: '資訊集中整理', desc: '將血糖、空腹、治療限制與相關工具整合於同一閱讀脈絡。' },
        { label: '閱讀順序', value: '先原則、後流程', desc: '先說明核心判斷原則，再延伸至流程、限制與補充資料。' }
    ],
    resourceLinks: [
        {
            href: 'patient-education/',
            kicker: '子網站',
            title: '核醫衛教陪伴站',
            desc: '整理提供一般民眾與家屬閱讀之核醫檢查、治療與輻射衛教內容。',
            variant: 'info'
        },
        {
            href: 'ai-village/',
            kicker: '子網站',
            title: 'AI 新手村',
            desc: '整理 AI 工具、追蹤資訊與實作主題，供教學與自學規劃參考。',
            variant: 'info'
        },
        {
            href: 'nucmed-ai-research/',
            kicker: '子網站',
            title: '核醫 AI 研究室',
            desc: '整理核醫 AI 文獻、研究方向與工具生態觀察。',
            variant: 'info'
        },
        {
            href: 'nucmed-storylab/',
            kicker: '子網站',
            title: '核醫腳本工坊',
            desc: '集中整理核醫衛教影片腳本與鏡頭分鏡資料。',
            variant: 'info'
        },
        {
            href: 'nucmed-exam-review/',
            kicker: '子網站',
            title: '核醫國考題研究',
            desc: '依年度整理放射師與醫師國考題，供卷別查閱與答案對照。',
            variant: 'info'
        },
        {
            href: 'https://purekboy-ui.github.io/I131-Ward-Scheduler/',
            kicker: '排程工具',
            title: 'I-131 病房排程',
            desc: '用於核對可入院日期、住院節奏與病房安排條件。',
            variant: 'warning'
        },
        {
            href: 'https://nminfo-petarr.web.app/',
            kicker: '智慧排程',
            title: 'PET 智慧排程',
            desc: '用於整合檢查時段、流程條件與安排順序之排程資訊。',
            variant: 'success'
        }
    ]
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

    const itemsHTML = diagram.items.map((item, index) => `
        <h4>${item.label ? item.label + '｜' : ''}${item.title}</h4>
        <p>${item.text}</p>
    `).join('');

    return `
        <section class="concept-diagram is-prose" aria-label="${diagram.title || '內容圖解'}">
            <div class="prose">
                ${diagram.lead ? `<p><strong>${diagram.lead}</strong></p>` : ''}
                ${itemsHTML}
                ${diagram.note ? `<p class="reading-note">${diagram.note}</p>` : ''}
            </div>
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

function renderInsightCards(cards = [], gridClassName, cardClassName) {
    const entries = (cards || []).filter((card) => card && (card.title || card.text));
    if (!entries.length) return '';

    return `
        <div class="prose">
            ${entries.map((card) => `
                ${card.title ? `<h4>${card.title}</h4>` : ''}
                ${card.text ? `<p>${card.text}</p>` : ''}
            `).join('')}
        </div>
    `;
}

function shouldUseImmersiveReading(key, data) {
    return data && !data.isHomeHub && !data.isDosageCalc && !data.isCalendar && !data.disableImmersiveReading;
}

function getHeadingTextFromHTML(html) {
    if (typeof html !== 'string') return '';
    const headingMatch = html.match(/<h[2-5][^>]*>(.*?)<\/h[2-5]>/i);
    if (!headingMatch?.[1]) return '';
    return headingMatch[1].replace(/<[^>]*>/g, '').trim();
}

function getReadingSectionLabel(source, fallback = '重點', index = 0) {
    if (!source) return fallback || `第 ${index + 1} 段`;
    if (typeof source === 'string') {
        return getHeadingTextFromHTML(source) || fallback || `第 ${index + 1} 段`;
    }
    if (source.type === 'qa') return '常見問題';
    if (source.title) return source.title;
    if (typeof source.html === 'string') {
        return getHeadingTextFromHTML(source.html) || fallback || `第 ${index + 1} 段`;
    }
    return fallback || `第 ${index + 1} 段`;
}

function getReadableBlockTitle(block, index) {
    return getReadingSectionLabel(block, index === 0 ? '重點' : `補充說明 ${index + 1}`, index);
}

function getReadingTargetId(prefix, index) {
    return `${prefix}-${index + 1}`;
}

function getReadingTocItems(blocks, prefix = 'section', options = {}) {
    const includeInfoBoxes = options.includeInfoBoxes !== false;
    return (blocks || []).reduce((items, block, index) => {
        const isIndexedBlock = block
            && (block.type === 'section'
                || block.type === 'qa'
                || (includeInfoBoxes && typeof block.type === 'string' && block.type.startsWith('info-box')));

        if (!isIndexedBlock) return items;

        items.push({
            id: getReadingTargetId(prefix, index),
            label: getReadableBlockTitle(block, index)
        });
        return items;
    }, []);
}

function limitReadingTocItems(items, maxItems = 7) {
    const normalizedItems = (items || []).filter(Boolean);
    if (normalizedItems.length <= maxItems) return normalizedItems;
    if (maxItems <= 1) return normalizedItems.slice(0, 1);

    const headItems = normalizedItems.slice(0, maxItems - 1);
    const lastItem = normalizedItems[normalizedItems.length - 1];
    if (headItems.some((item) => item.id === lastItem.id)) return headItems;
    return [...headItems, lastItem];
}

function getReadingTocHTML(items, options = {}) {
    const normalizedItems = limitReadingTocItems((items || [])
        .map((item, index) => {
            if (!item) return null;
            if (item.id && item.label) return item;
            return {
                id: getReadingTargetId(options.prefix || 'section', index),
                label: getReadableBlockTitle(item, index)
            };
        })
        .filter(Boolean), options.maxItems || 7);

    if (normalizedItems.length < 2) return '';

    return `
        <div class="reading-nav-shell" data-reading-nav>
            <aside class="reading-progress-rail" aria-hidden="true">
                <div class="reading-progress-track">
                    ${normalizedItems.map((item) => `
                        <button
                            type="button"
                            class="reading-progress-link"
                            data-reading-target="${item.id}"
                            title="${item.label}"
                        >
                            <span class="sr-only">${item.label}</span>
                        </button>
                    `).join('')}
                </div>
            </aside>
            <div class="reading-fab-stack" aria-label="${options.ariaLabel || '閱讀索引'} 操作">
                <button type="button" class="reading-fab reading-fab--toc" data-reading-action="toggle-drawer">目錄</button>
                <button type="button" class="reading-fab reading-fab--top" data-reading-action="scroll-top" aria-label="回到頁首">↑</button>
            </div>
            <button type="button" class="reading-drawer-backdrop" data-reading-action="close-drawer" aria-hidden="true" tabindex="-1"></button>
            <aside class="reading-toc-drawer" aria-label="${options.ariaLabel || '閱讀索引'}" aria-hidden="true">
                <div class="reading-toc-header">
                    <div class="reading-toc-copy">
                        <span class="reading-toc-label">閱讀索引</span>
                        ${options.title ? `<p class="reading-toc-title">${options.title}</p>` : ''}
                        ${options.note ? `<p class="reading-toc-note">${options.note}</p>` : ''}
                    </div>
                    <button type="button" class="reading-drawer-close" data-reading-action="close-drawer" aria-label="關閉目錄">×</button>
                </div>
                <div class="reading-toc-list">
                    ${normalizedItems.map((item) => `
                        <button type="button" class="reading-toc-link" data-reading-target="${item.id}">
                            ${item.label}
                        </button>
                    `).join('')}
                </div>
            </aside>
        </div>
    `;
}

function setActiveReadingTocLink(container, sectionId) {
    if (!container || !sectionId) return;
    container.querySelectorAll('.reading-toc-link, .reading-progress-link').forEach((link) => {
        const isActive = link.dataset.readingTarget === sectionId;
        link.classList.toggle('is-active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'true');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

function initReadingToc(container) {
    readingTocCleanup?.();
    readingTocCleanup = null;

    if (!container) return;

    const scroller = document.querySelector('.content-scroll');
    const navShell = container.querySelector('[data-reading-nav]');
    const links = Array.from(container.querySelectorAll('.reading-toc-link, .reading-progress-link'));
    const drawer = container.querySelector('.reading-toc-drawer');
    const actionButtons = Array.from(container.querySelectorAll('[data-reading-action]'));
    const readingTargets = new Set(links
        .map((link) => link.dataset.readingTarget)
        .filter(Boolean));
    const sections = Array.from(container.querySelectorAll('[data-reading-section]'))
        .filter((section) => section.id && readingTargets.has(section.id));

    if (!scroller || links.length === 0 || sections.length === 0) {
        return;
    }

    const setDrawerOpen = (isOpen) => {
        if (!navShell || !drawer) return;
        navShell.classList.toggle('is-drawer-open', isOpen);
        drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    };

    const updateActive = () => {
        const scrollerRect = scroller.getBoundingClientRect();
        const threshold = scrollerRect.top + 96;
        let activeSection = sections[0];

        if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 24) {
            activeSection = sections[sections.length - 1];
        } else {
            sections.forEach((section) => {
                if (section.getBoundingClientRect().top <= threshold) {
                    activeSection = section;
                }
            });
        }

        setActiveReadingTocLink(container, activeSection.id);
        if (navShell) {
            navShell.classList.toggle('can-scroll-top', scroller.scrollTop > 180);
        }
    };

    let ticking = false;
    const requestUpdate = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            ticking = false;
            updateActive();
        });
    };

    const handleClick = (event) => {
        const button = event.currentTarget;
        const target = container.querySelector(`#${button.dataset.readingTarget}`);
        if (!target) return;

        const top = target.getBoundingClientRect().top
            - scroller.getBoundingClientRect().top
            + scroller.scrollTop
            - 18;

        setActiveReadingTocLink(container, button.dataset.readingTarget);
        scroller.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        if (button.classList.contains('reading-toc-link')) {
            setDrawerOpen(false);
        }
    };

    const handleAction = (event) => {
        const action = event.currentTarget.dataset.readingAction;
        if (action === 'toggle-drawer') {
            setDrawerOpen(!navShell?.classList.contains('is-drawer-open'));
            return;
        }
        if (action === 'close-drawer') {
            setDrawerOpen(false);
            return;
        }
        if (action === 'scroll-top') {
            scroller.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    links.forEach((link) => link.addEventListener('click', handleClick));
    actionButtons.forEach((button) => button.addEventListener('click', handleAction));
    scroller.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    setDrawerOpen(false);
    updateActive();

    readingTocCleanup = () => {
        links.forEach((link) => link.removeEventListener('click', handleClick));
        actionButtons.forEach((button) => button.removeEventListener('click', handleAction));
        scroller.removeEventListener('scroll', requestUpdate);
        window.removeEventListener('resize', requestUpdate);
    };
}

function renderContentBlock(block, index, options = {}) {
    const sectionId = block?.readingId || getReadingTargetId('section', index);
    const shouldIndexInfoBoxes = options.indexInfoBoxes !== false;
    switch (block.type) {
        case 'info-box-blue':
            return `<div${shouldIndexInfoBoxes ? ` id="${sectionId}" data-reading-section` : ''} class="info-box info-box-blue">${block.html}</div>`;
        case 'info-box-emerald':
            return `<div${shouldIndexInfoBoxes ? ` id="${sectionId}" data-reading-section` : ''} class="info-box info-box-emerald">${block.html}</div>`;
        case 'info-box-amber':
            return `<div${shouldIndexInfoBoxes ? ` id="${sectionId}" data-reading-section` : ''} class="info-box info-box-amber">${block.html}</div>`;
        case 'info-box-rose':
            return `<div${shouldIndexInfoBoxes ? ` id="${sectionId}" data-reading-section` : ''} class="info-box info-box-rose">${block.html}</div>`;
        case 'info-box-purple':
            return `<div${shouldIndexInfoBoxes ? ` id="${sectionId}" data-reading-section` : ''} class="info-box info-box-purple">${block.html}</div>`;
        case 'section':
            return `<section id="${sectionId}" data-reading-section class="content-section">
                <h3 class="section-heading">${block.title}</h3>
                ${block.html}
            </section>`;
        case 'qa':
            return `<section id="${sectionId}" data-reading-section class="qa-section">
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
    // Keep the main reading layer expanded; QA and protocol summaries handle progressive disclosure separately.
    return renderContentBlock(block, index, { indexInfoBoxes: false });
}

function buildReaderGuideHTML(key, data) {
    const guide = getReaderGuideData(key);
    const heroCards = getHeroInsightCards(guide);
    if (!guide || data?.disableReaderGuide) return '';
    if (data?.readerGuideMode === 'article') {
        return `
            <section class="reader-guide reader-guide-article">
                <div class="reader-guide-header">
                    <h2>本頁摘要</h2>
                </div>
                <div class="prose">
                    ${(data.readerGuideArticle || []).map((p) => `<p>${p}</p>`).join('')}
                </div>
            </section>
        `;
    }

    return `
        <section class="reader-guide">
            <div class="reader-guide-header">
                <h2>本頁摘要</h2>
                ${guide.lead ? `<p>${guide.lead}</p>` : ''}
            </div>
            ${renderInsightCards(heroCards, 'reader-guide-grid', 'reader-guide-card')}
            ${guide.tellUs ? `
                <div class="reader-guide-alert">
                    <strong>需要先確認的事項</strong>
                    <span>${guide.tellUs}</span>
                </div>
            ` : ''}
        </section>
    `;
}

const EXAM_FLOW_CATEGORIES = new Set(['pet', 'endocrine', 'cardiac', 'gi', 'bone-renal', 'neuro']);

const EXAM_INLINE_GUIDE_IMAGES = {
    NMBasics: {
        src: 'assets/guide/nm-basics-guide.webp',
        alt: '核醫原理、儀器與技術導覽圖解，說明功能影像、gamma camera、SPECT、PET、QC 與後續小學堂學習順序。'
    },
    DocumentControl: {
        src: 'assets/guide/document-control-guide.webp',
        alt: '文件管理圖解，說明品質手冊、程序書、作業規範、表單與紀錄的角色，並提醒外來文件與品質目標也要受控與可追溯。'
    },
    PatientQA: {
        src: 'assets/guide/patient-qa-guide.webp',
        alt: '病人衛教圖解，說明核醫溝通順序應先辨識風險，再解釋檢查目的、交代配合事項，最後確認病人真的理解。'
    },
    Radiopharmacy: {
        src: 'assets/guide/radiopharmacy-guide.webp',
        alt: '熱核室實務圖解，說明到貨與放行、抽藥與貼標、運送與交接，以及污染偵測與廢棄紀錄等核心流程。'
    },
    RadiationSafety: {
        src: 'assets/guide/radiation-safety-guide.webp',
        alt: '輻射防護圖解，說明核醫科日常的開工條件、劑量監測、事故處理、特殊族群保護與紀錄追溯等重點。'
    },
    WomenRadiationPractice: {
        src: 'assets/guide/women-radiation-practice.webp',
        alt: '女性、懷孕與醫療輻射實務圖解，說明問診、驗孕、醫師覆核、輻射防護與文件化流程。'
    },
    PETCTRadiation: {
        src: 'assets/guide/petct-radiation-sr-review.webp',
        alt: 'PET/CT 輻射探討圖解，說明三次掃描、劑量報告、CT 事件拆解與品質改善判讀。'
    },
    I131Ward: {
        src: 'assets/guide/i131-ward-guide.webp',
        alt: 'I-131 病房圖解，說明住院前準備、給藥、補水與排尿、污染管理，以及出院量測與返家限制的完整流程。'
    },
    EmergencyCart: {
        src: 'assets/guide/emergency-cart-guide.webp',
        alt: '急救車管理圖解，說明每日檢查、3 月與 9 月單位自行盤點、6 月與 12 月聯合藥劑科盤點，以及異常通報與重整。'
    },
    Bone: {
        src: 'assets/guide/bone-scan-indications.webp',
        alt: 'Bone scan 適應症圖解，說明骨轉移搜尋、不明骨痛或壓力性骨折、骨髓炎或感染評估，以及全身多發骨病灶篩查。'
    },
    Brain: {
        src: 'assets/guide/brain-perfusion-indications.webp',
        alt: '腦灌流掃描適應症圖解，說明失智症輔助評估、癲癇病灶定位、腦血管功能或局部腦灌流異常，以及腦死判定或特殊神經個案。'
    },
    BrainPET: {
        src: 'assets/guide/brain-fdg-pet-indications.webp',
        alt: 'Brain FDG PET 適應症圖解，說明失智症鑑別、癲癇術前定位、腦腫瘤治療後評估，以及腦炎或特殊神經代謝疾病評估。'
    },
    POSLUMA: {
        src: 'assets/guide/psma-pet-indications.webp',
        alt: 'PSMA PET 適應症圖解，說明初始高風險分期、生化復發、治療規劃，以及標靶治療前的 PSMA 表現評估。'
    },
    Ga68DOTATOC: {
        src: 'assets/guide/ga68-dotatoc-indications.webp',
        alt: 'Ga-68 DOTATOC PET 適應症圖解，說明神經內分泌腫瘤定位、初始分期、PRRT 前受體評估，以及復發或追蹤。'
    },
    AmyloidPET: {
        src: 'assets/guide/amyloid-pet-indications.webp',
        alt: 'Amyloid PET 適應症圖解，說明不典型或年輕型認知障礙、失智症鑑別困難、特定 MCI 個案，以及抗 amyloid 治療評估脈絡。'
    },
    NaFPET: {
        src: 'assets/guide/naf-pet-indications.webp',
        alt: 'F-18 NaF PET/CT 適應症圖解，說明骨轉移更敏感搜尋、傳統骨掃描不夠清楚、高風險癌症骨病灶評估，以及複雜骨病變定位。'
    },
    CardiacPET: {
        src: 'assets/guide/cardiac-pet-indications.webp',
        alt: 'Cardiac PET 適應症圖解，說明冠心病灌流評估、心肌存活性、複雜或高 BMI 個案的更精準定量，以及特定心臟發炎或浸潤問題。'
    },
    Thyroid: {
        src: 'assets/guide/thyroid-scan-indications.webp',
        alt: '甲狀腺掃描適應症圖解，說明甲狀腺亢進原因判斷、甲狀腺結節功能判斷、異位或殘餘功能組織定位，以及放射碘治療前攝碘評估。'
    },
    DMSA: {
        src: 'assets/guide/dmsa-indications.webp',
        alt: 'DMSA 腎皮質掃描適應症圖解，說明急性腎盂腎炎、腎疤痕追蹤、單側腎功能比例，以及先天或結構異常腎臟評估。'
    },
    DTPA: {
        src: 'assets/guide/dtpa-indications.webp',
        alt: 'DTPA 腎圖適應症圖解，說明水腎或阻塞懷疑、分腎功能評估、術前術後追蹤，以及腎灌流與 GFR 相關評估。'
    },
    MAG3: {
        src: 'assets/guide/mag3-indications.webp',
        alt: 'MAG3 腎動態掃描適應症圖解，說明水腎或阻塞疑問、術前術後追蹤、分腎功能評估，以及移植腎或複雜尿路評估。'
    },
    Cystography: {
        src: 'assets/guide/cystography-indications.webp',
        alt: '膀胱尿路逆流檢查適應症圖解，說明反覆泌尿道感染兒童、已知 VUR 追蹤、先天泌尿道異常，以及神經性膀胱或高風險個案。'
    },
    Scrotal: {
        src: 'assets/guide/scrotal-scan-indications.webp',
        alt: '睪丸掃描適應症圖解，說明睪丸扭轉懷疑、副睪炎或睪丸炎、超音波不明確的急症，以及兒童或年輕男性急診鑑別。'
    },
    LungVQ: {
        src: 'assets/guide/lung-vq-indications.webp',
        alt: 'Lung V/Q 掃描適應症圖解，說明肺栓塞評估、不能做顯影 CT 的病人、慢性血栓或肺高壓篩查，以及術前肺功能分區評估。'
    },
    Lung: {
        src: 'assets/guide/lung-perfusion-indications.webp',
        alt: '肺灌注掃描適應症圖解，說明肺栓塞懷疑、術前肺功能分區、肺血流分布不均，以及無法做其他顯影檢查時的肺灌流評估。'
    },
    CardiacAmyloid: {
        src: 'assets/guide/cardiac-amyloid-indications.webp',
        alt: '心臟類澱粉沉積影像適應症圖解，說明厚心室與心衰竭病人、可疑浸潤性心肌病、周邊神經症狀合併心臟問題，以及疑似 ATTR 的非侵入性診斷路徑。'
    },
    Parathyroid: {
        src: 'assets/guide/parathyroid-indications.webp',
        alt: '副甲狀腺掃描適應症圖解，說明原發性副甲狀腺機能亢進術前定位、疑似副甲狀腺腺瘤、再手術或解剖複雜個案，以及異位副甲狀腺搜尋。'
    },
    MIBG: {
        src: 'assets/guide/mibg-indications.webp',
        alt: 'MIBG 掃描適應症圖解，說明嗜鉻細胞瘤或副神經節瘤、神經母細胞瘤分期、多發或轉移病灶搜尋，以及治療前攝取能力評估。'
    },
    TRODAT: {
        src: 'assets/guide/trodat-indications.webp',
        alt: 'TRODAT 適應症圖解，說明巴金森症候群鑑別、原發性巴金森病與本態性顫抖區分、不典型動作症狀，以及臨床診斷輔助。'
    },
    NP59: {
        src: 'assets/guide/np59-indications.webp',
        alt: 'NP-59 腎上腺皮質掃描適應症圖解，說明原發性醛固酮增多症、Cushing syndrome 皮質功能評估、單側與雙側功能性病灶分流，以及特殊腎上腺皮質個案定位。'
    },
    I131WBS: {
        src: 'assets/guide/i131-wbs-indications.webp',
        alt: 'I-131 全身掃描適應症圖解，說明術後殘餘組織搜尋、復發偵測、轉移病灶搜尋，以及治療後評估。'
    },
    Salivary: {
        src: 'assets/guide/salivary-scan-indications.webp',
        alt: '唾液腺掃描適應症圖解，說明 Sjogren syndrome 評估、口乾症狀功能檢查、治療後功能追蹤，以及雙側大唾液腺整體功能比較。'
    },
    Salivary2: {
        src: 'assets/guide/salivary-scan-indications.webp',
        alt: '唾液腺掃描適應症圖解，說明 Sjogren syndrome 評估、口乾症狀功能檢查、治療後功能追蹤，以及雙側大唾液腺整體功能比較。'
    },
    Cisternography: {
        src: 'assets/guide/cisternography-indications.webp',
        alt: '腦脊髓液池掃描適應症圖解，說明腦脊髓液漏、正常壓力水腦症輔助評估、分流術前後問題，以及特殊腦脊髓液循環障礙。'
    },
    MPI: {
        src: 'assets/guide/mpi-indications.webp',
        alt: '心肌灌流（Tl-201 / Tc-99m）適應症圖解，說明疑似冠心病缺血評估、風險分層、心肌存活性問題與血管重建前後決策。'
    },
    MPI_Tc99m: {
        src: 'assets/guide/mpi-indications.webp',
        alt: 'MPI 適應症圖解，說明胸痛或疑似冠心病、活動後症狀、已知冠心病風險分層，以及治療後追蹤。'
    },
    MPI_Tl201: {
        src: 'assets/guide/mpi-tl201-indications.webp',
        alt: 'Tl-201 MPI 適應症圖解，說明冠心病缺血評估、心肌存活性評估、血管重建前決策，以及既有冠心病追蹤。'
    },
    MUGA: {
        src: 'assets/guide/muga-indications.webp',
        alt: 'MUGA 適應症圖解，說明化療前基準評估、化療中追蹤、需要高重現性射出分率量測，以及特定心室功能監測。'
    },
    Venography: {
        src: 'assets/guide/venography-indications.webp',
        alt: '靜脈造影掃描適應症圖解，說明深層靜脈栓塞懷疑、超音波結果不清楚、骨盆或近端靜脈阻塞評估，以及側枝循環或靜脈通暢性追蹤。'
    },
    Lymphedema: {
        src: 'assets/guide/lymphedema-indications.webp',
        alt: '淋巴水腫掃描適應症圖解，說明原發性淋巴水腫、術後或放療後腫脹、單側肢體慢性腫脹鑑別，以及治療與復健規劃。'
    },
    SLN: {
        src: 'assets/guide/sentinel-node-indications.webp',
        alt: '前哨淋巴結掃描適應症圖解，說明乳癌、黑色素瘤、部分婦癌或特殊腫瘤定位，以及微創分期與手術規劃。'
    },
    PET: {
        src: 'assets/guide/fdg-pet-indications.webp',
        alt: 'FDG PET/CT 適應症圖解，說明初始分期、治療反應評估、復發或再分期，以及不明原發灶或全身活躍病灶搜尋。'
    },
    Gastric: {
        src: 'assets/guide/gastric-emptying-indications.webp',
        alt: '胃排空掃描適應症圖解，說明疑似胃輕癱、糖尿病相關胃動力問題、手術後或功能性上腹不適，以及治療前後追蹤。'
    },
    GIBleed: {
        src: 'assets/guide/gi-bleed-indications.webp',
        alt: '腸胃道出血掃描適應症圖解，說明間歇性下消化道出血、內視鏡找不到出血點、反覆血便或黑便，以及介入或手術前定位輔助。'
    },
    Meckel: {
        src: 'assets/guide/meckel-indications.webp',
        alt: 'Meckel 掃描適應症圖解，說明兒童無痛性下消化道出血、不明原因反覆血便、年輕病人出血來源追查，以及手術前診斷線索。'
    },
    Liver: {
        src: 'assets/guide/liver-scan-indications.webp',
        alt: '肝脾掃描適應症圖解，說明肝脾分布異常、肝臟網狀內皮功能評估、脾組織定位，以及特殊網狀內皮系統病變輔助評估。'
    },
    LiverHemangioma: {
        src: 'assets/guide/liver-hemangioma-indications.webp',
        alt: '肝血管瘤核醫檢查適應症圖解，說明可疑肝腫塊鑑別、CT 或 MRI 不典型、良性病灶確認輔助，以及多發肝病灶中鎖定特定病灶。'
    },
    Biliary: {
        src: 'assets/guide/biliary-indications.webp',
        alt: '膽道掃描適應症圖解，說明急性膽囊炎懷疑、膽道阻塞或膽漏、膽囊功能評估，以及術後或移植後膽道問題。'
    },
    Ga67: {
        src: 'assets/guide/ga67-indications.webp',
        alt: 'Ga-67 掃描適應症圖解，說明慢性感染或發炎、脊椎骨髓炎或深部感染、肺部或縱膈腔慢性發炎問題，以及特定腫瘤或發炎性疾病追蹤。'
    },
    WBCScan: {
        src: 'assets/guide/wbc-scan-indications.webp',
        alt: '白血球掃描適應症圖解，說明骨髓炎、發燒找不到原因、術後或植入物相關感染，以及腹部或軟組織深部感染。'
    },
    I131MIBG: {
        src: 'assets/guide/i131-mibg-indications.webp',
        alt: 'I-131 MIBG 治療適應症圖解，說明高風險或復發神經母細胞瘤、轉移性嗜鉻細胞瘤或副神經節瘤，以及治療前需確認 MIBG 攝取與骨髓腎功能條件。'
    },
    Sm153: {
        src: 'assets/guide/sm153-indications.webp',
        alt: 'Sm-153 骨痛緩解治療適應症圖解，說明多發成骨性骨轉移、疼痛已影響生活品質，以及治療前需確認骨掃描攝取與骨髓儲備。'
    },
    I131: {
        src: 'assets/guide/i131-indications.webp',
        alt: 'I-131 治療適應症圖解，說明 Graves disease、toxic nodule 或 multinodular goiter、甲狀腺癌術後殘餘組織消融，以及仍會攝碘的復發或轉移性分化型甲狀腺癌。'
    },
    Ra223: {
        src: 'assets/guide/ra223-indications.webp',
        alt: 'Ra-223 治療適應症圖解，說明 mCRPC 合併症狀性骨轉移、無已知內臟轉移，以及治療前需評估骨髓儲備。'
    },
    Lu177PSMA: {
        src: 'assets/guide/lu177-psma-indications.webp',
        alt: 'Lu-177 PSMA 治療適應症圖解，說明 mCRPC、PSMA 影像陽性、標準治療後仍進展，以及整體病灶仍屬 PSMA 可標靶疾病。'
    },
    Lu177DOTATATE: {
        src: 'assets/guide/lu177-dotatate-indications.webp',
        alt: 'Lu-177 PRRT 適應症圖解，說明無法切除或轉移性神經內分泌腫瘤、Somatostatin analog 後仍進展、Ga-68 DOTATOC 或 DOTATATE PET 陽性，以及治療前需確認腎功能與血球條件。'
    },
    Y90SIRT: {
        src: 'assets/guide/y90-sirt-indications.webp',
        alt: 'Y-90 肝動脈放射栓塞適應症圖解，說明原發性肝癌、肝轉移、肝臟主導病程，以及適合肝動脈局部治療的解剖與肝功能條件。'
    }
};


const CARDIAC_VIEW_OVERRIDES = {

CardiacAmyloid: {
    title: "心臟類澱粉 PYP",
    subtitle: "Tc-99m PYP — ATTR 型心臟類澱粉沉積症診斷",
    category: "cardiac",
    readerGuideMode: "article",
    readerGuideArticle: [
        "心臟類澱粉沉積症不是單一疾病，而是多種蛋白錯誤摺疊後沉積在心肌間質造成的浸潤性心肌病。臨床最重要的兩類是 ATTR（transthyretin）與 AL（免疫球蛋白輕鏈）。",
        "99mTc-PYP 在美國與部分國際實務中是非侵入診斷 ATTR-CM 的核心工具，但診斷前提是先排除單株漿細胞疾病；也就是說，PYP 陽性不代表可以跳過 AL 排除流程。",
        "判讀的關鍵不是只看 planar 一張影像，而是整合平面、SPECT（最好含 SPECT/CT）、視覺分級、必要時 H/CL 比值與臨床背景。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "靜脈注射", value: "Tc-99m PYP 20 mCi" },
            { label: "等待", value: "3 小時" },
            { label: "SPECT/CT", value: "20–30 分鐘" }
        ],
        article: [
            "標準流程通常為注射骨親和性示蹤劑後進行延遲影像。臨床上若僅在較早時間點收像，殘餘血池活性可能讓心肌攝取被高估。",
            "目前權威建議強調平面與 SPECT 需合併解讀，以區分真正心肌攝取和腔室內血池訊號；在血池干擾明顯個案，延後或補拍有助避免誤判。",
            "報告應明確註記掃描時間點、是否含 SPECT/CT、視覺分級、是否執行 H/CL 比值、以及 AL 排除狀態。"
        ],
        note: "重點不是追求單一數字，而是把影像型態、時間點與血液檢驗前提整合判讀。"
    },
    content: [
        {
            type: "section",
            title: "疾病背景：ATTR 與 AL 為何一定要分開",
            icon: "🧬",
            html: `<div class="prose">
                <p><strong>ATTR-CM</strong> 來自 transthyretin 蛋白沉積，分為野生型與遺傳型；臨床常見於 HFpEF、左室壁增厚、年長男性、雙側腕隧道或脊椎狹窄病史。<strong>AL amyloidosis</strong> 則是漿細胞疾病導致輕鏈沉積，進展更快、治療策略完全不同。</p>
                <p>因此，PYP 的真正角色是「在排除 AL 後，支持 ATTR 的非侵入診斷」。這個前提來自多個共識文件與實證研究，不可省略。</p>
            </div>`
        },
        {
            type: "section",
            title: "何時應懷疑心臟類澱粉沉積症",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li>心衰竭合併左室增厚，但無法以高血壓/瓣膜病完整解釋。</li>
                    <li>超音波或 CMR 出現浸潤性心肌病特徵（如特徵性晚期顯影或 ECV 增加）。</li>
                    <li>合併神經病變、腕隧道、不明原因低血壓或傳導異常等 ATTR 線索。</li>
                    <li>腫瘤或化療後個案若影像異常，需慎防其他原因造成的假陽性攝取。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "PYP 判讀技巧：視覺分級、SPECT 與 H/CL 的角色",
            icon: "💎",
            html: `<div class="prose">
                <p>判讀順序建議為：先看 SPECT 是否有真正心肌內攝取，再進行視覺分級（Grade 0–3），最後在適用時輔助 H/CL。若 SPECT 顯示只是血池殘留，不能直接以 planar 或 H/CL 判為陽性。</p>
            </div>
            <div class="data-table-wrapper">
                <table class="data-table">
                    <thead><tr><th>Perugini Grade</th><th>影像表現</th><th>判讀</th></tr></thead>
                    <tbody>
                        <tr><td>Grade 0</td><td>心臟無攝取</td><td>陰性</td></tr>
                        <tr><td>Grade 1</td><td>心臟攝取 < 肋骨</td><td>不確定，需整合臨床與 AL 排除</td></tr>
                        <tr><td>Grade 2</td><td>心臟攝取 = 肋骨</td><td>若 AL 排除，可支持 ATTR</td></tr>
                        <tr><td>Grade 3</td><td>心臟攝取 > 肋骨</td><td>若 AL 排除，可高度支持 ATTR</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="prose">
                <p>ASNC 2022 更新亦強調：診斷 ATTR 不能只靠 H/CL；若視覺分級與 SPECT 結果不一致，應回到原始影像與血池干擾評估，必要時補充延遲影像與跨模態整合。</p>
            </div>`
        },
        {
            type: "section",
            title: "文獻圖像示例（PYP）",
            icon: "🖼️",
            html: `<div class="prose">
                <p>以下圖像改為擷取自封面所示 <strong><em>Pocket Guide: 99mTc PYP Scan for Diagnosis of ATTR-CM, Bilingual Edition</em></strong> 第 9–14 頁，保留教學最常需要的六個面向：診斷流程、收像流程、視覺分級、Grade 0–3 範例、H/CL ROI 與 H/CL 臨界值。</p>
                <figure>
                    <img src="assets/paper-figures/CardiacAmyloid/PocketGuide_PYP_p09_Diagnostic_Algorithm.png" alt="PYP 心臟類澱粉診斷流程圖" loading="lazy" />
                    <figcaption>出處：YW Wu, BH Yang, SY Wang, MF Cheng, LH Hu, CL Ko, YF Wang. <em>Pocket Guide: 99mTc PYP Scan for Diagnosis of ATTR-CM, Bilingual Edition</em>. Pfizer. 第 9 頁。這張圖把 PYP、SPECT/CT、單株蛋白檢查與 Grade 0–3 的決策關係放在同一張流程圖裡，適合教學時先建立「PYP 陽性不等於可跳過 AL 排除」的基本框架。</figcaption>
                </figure>
                <figure>
                    <img src="assets/paper-figures/CardiacAmyloid/PocketGuide_PYP_p10_Acquisition_Workflow.png" alt="PYP 收像時點與影像流程圖" loading="lazy" />
                    <figcaption>出處：YW Wu, BH Yang, SY Wang, MF Cheng, LH Hu, CL Ko, YF Wang. <em>Pocket Guide: 99mTc PYP Scan for Diagnosis of ATTR-CM, Bilingual Edition</em>. Pfizer. 第 10 頁。適合搭配本單元的收像敘述閱讀，重點是先做 planar，再用 SPECT/CT 區分真正心肌攝取與血池殘留，並理解 1 小時與 3 小時延遲影像各自的角色。</figcaption>
                </figure>
                <figure>
                    <img src="assets/paper-figures/CardiacAmyloid/PocketGuide_PYP_p11_Visual_Grading_Table.png" alt="PYP 視覺分級表" loading="lazy" />
                    <figcaption>出處：YW Wu, BH Yang, SY Wang, MF Cheng, LH Hu, CL Ko, YF Wang. <em>Pocket Guide: 99mTc PYP Scan for Diagnosis of ATTR-CM, Bilingual Edition</em>. Pfizer. 第 11 頁。這張表把 Grade 0 到 3 的視覺分級與對應判讀整理得很清楚，適合放在正文中作為分級速查表。</figcaption>
                </figure>
                <figure>
                    <img src="assets/paper-figures/CardiacAmyloid/PocketGuide_PYP_p12_Grade0to3_Examples.png" alt="PYP Grade 0 到 3 的 planar 與 SPECT 範例" loading="lazy" />
                    <figcaption>出處：YW Wu, BH Yang, SY Wang, MF Cheng, LH Hu, CL Ko, YF Wang. <em>Pocket Guide: 99mTc PYP Scan for Diagnosis of ATTR-CM, Bilingual Edition</em>. Pfizer. 第 12 頁。上排是 planar 視覺分級，下排是 SPECT 分級，對照後可直接拿來教學「不能只看平面亮度，還要確認攝取是否真的在心肌」。</figcaption>
                </figure>
                <figure>
                    <img src="assets/paper-figures/CardiacAmyloid/PocketGuide_PYP_p13_HCL_ROI.png" alt="PYP HCL ratio ROI 畫法示例" loading="lazy" />
                    <figcaption>出處：YW Wu, BH Yang, SY Wang, MF Cheng, LH Hu, CL Ko, YF Wang. <em>Pocket Guide: 99mTc PYP Scan for Diagnosis of ATTR-CM, Bilingual Edition</em>. Pfizer. 第 13 頁。這張圖示範 H/CL ratio 的 ROI 畫法，特別適合取代原本舊文獻圖，因為它直接用中文把 target ROI 與 contralateral ROI 的實務避坑講清楚。</figcaption>
                </figure>
                <figure>
                    <img src="assets/paper-figures/CardiacAmyloid/PocketGuide_PYP_p14_HCL_Cutoffs.png" alt="PYP HCL ratio 臨界值與 1 小時 3 小時對照" loading="lazy" />
                    <figcaption>出處：YW Wu, BH Yang, SY Wang, MF Cheng, LH Hu, CL Ko, YF Wang. <em>Pocket Guide: 99mTc PYP Scan for Diagnosis of ATTR-CM, Bilingual Edition</em>. Pfizer. 第 14 頁。這張圖整合 1 小時與 3 小時影像的 H/CL ratio 臨界值，適合作為讀完 ROI 畫法後的下一張教學圖。</figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "Pitfalls：PYP 什麼時候會假陽性或誤判",
            icon: "⚠️",
            html: `<div class="prose">
                <p><strong>殘餘血池活性</strong>是最常見陷阱之一。平面影像上心腔內血池可能看起來像心肌攝取，因此必須用 SPECT 或 SPECT/CT 確認攝取位於心肌，而不是心腔。</p>
                <p><strong>AL amyloidosis 也可能有 PYP 攝取</strong>。ASNC practice points 指出任何程度的 PYP uptake 都可能見於 AL，因此需完成血清/尿液免疫固定電泳與游離輕鏈比值，不能只憑 Grade 2–3 就跳到 ATTR 結論。</p>
                <p><strong>局部心肌傷害</strong>可造成假陽性或非典型攝取，包括近期心肌梗塞、心包炎、藥物或化療相關心肌毒性；這些常呈局部或不均勻攝取，需與病史、CMR、echo 與心肌酵素整合。</p>
                <p><strong>骨骼或軟組織重疊</strong>也會干擾判讀，例如肋骨熱點、胸骨、肩部 amyloid deposition、鈣化或其他胸壁病灶。SPECT/CT 的 CT 定位能降低此類誤判。</p>
                <p><strong>時間點不一致</strong>會影響 H/CL 與視覺判讀。台灣 2025 共識指出 3 小時影像可降低血池保留影響；若 1 小時影像血池低且含 SPECT/CT，也可作為可接受替代，但報告必須註明 protocol。</p>
            </div>`
        },
        {
            type: "section",
            title: "必做安全閘門與報告重點",
            icon: "⚠️",
            html: `<div class="prose">
                <p><strong>必做安全閘門：</strong>血清與尿液免疫固定電泳 + 血清游離輕鏈比值。沒有完成 AL 排除，任何 Grade 2/3 都不能直接寫成 ATTR 確診。</p>
                <p><strong>標準報告最少應包含：</strong>注射劑量與收像時間（1h/3h）、planar 與 SPECT(SPECT/CT) 結果、visual grade、H/CL（若有）、血池干擾評估、是否完成 AL 排除、結論與後續建議。</p>
                <p><strong>核心參考：</strong><a href="https://www.asnc.org/wp-content/uploads/2024/05/19110-2021-ASNC-Amyloid-Practice-Points-PYP-MAY19-2022-1.pdf" target="_blank" rel="noopener">ASNC Practice Points 2022</a>；<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10194626/" target="_blank" rel="noopener">J Nucl Cardiol 2023（1h vs 3h, SPECT/CT）</a>；<a href="https://tech.snmjournals.org/content/51/2/102" target="_blank" rel="noopener">JNMT 2023 Part 3</a>。</p>
            </div>`
        }
    ]
},

    MUGA_PatientEduDisabled: {
        title: "MUGA：重點不是記住縮寫，而是知道這檢查看的是心室功能",
        cards: [
            { title: "為什麼要做", text: "用來量測心室功能與射出分率，常見於化療前後追蹤或心臟功能評估。" },
            { title: "檢查前", text: "通常不需要常規禁食，也沒有常規停咖啡因要求；重點是確認心律是否穩定、IV 是否通暢。" },
            { title: "檢查中", text: "會接上 ECG 電極、注射標記紅血球示蹤劑，再從不同角度拍攝。" },
            { title: "檢查後", text: "大多可立刻恢復日常活動，接下來 1 到 2 天多喝水即可。" }
        ],
        evidence: "更新依據：Cleveland Clinic MUGA scan patient education（2026）。"
    },
    CardiacAmyloid_PatientEduDisabled: {
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
        title: "唾液腺掃描",
        subtitle: "Tc-99m Pertechnetate Salivary Gland Scintigraphy — 大唾液腺攝取、排出與刺激後功能判讀",
        category: "endocrine",
        protocolSummaryDisplay: "expanded",
        readerGuideMode: "article",
        readerGuideArticle: [
            "唾液腺掃描的教學重點，不是只記得會給檸檬汁，而是要看懂動態曲線背後的三個階段：攝取、排出、再累積。",
            "這張檢查最常拿來回答的不是『有沒有一顆腫塊』，而是兩側大唾液腺的整體功能是否下降、是否對刺激有反應、以及左右是否對稱。",
            "在 Sjogren syndrome 的現代分類標準裡，唾液腺 scintigraphy 已不是主要分類條件，但它仍可作為口乾嚴重度、放療後功能受損與阻塞性病變的補充功能評估。"
        ],
        timeArchitecture: {
            mode: "article",
            steps: [
                { label: "檢前準備", value: "先確認禁食、補水、刺激物與會影響唾液分泌的因素" },
                { label: "動態收像", value: "Tc-99m pertechnetate 注射後連續 anterior 頭頸動態" },
                { label: "刺激排出", value: "固定時間給檸檬汁或其他酸刺激並追蹤排出與再累積" }
            ],
            article: [
                "第一階段要先把影像條件固定下來。常見作法是檢前至少禁食 2 小時，讓口腔與胃部狀態較一致，再確認病人能否配合 20 到 30 分鐘的頭頸固定動態收像。",
                "第二階段是注射 Tc-99m pertechnetate 後持續動態攝影。正常大唾液腺會逐步攝取示蹤劑，通常腮腺比頜下腺更早、更明顯地累積。",
                "第三階段在固定時間給刺激物，例如 20 分鐘時給檸檬汁，再觀察兩側是否能迅速排出，之後是否重新累積。這段變化才是功能判讀的核心。"
            ],
            note: "刺激物種類、給予時間、dynamic frame 長度與 ROI 畫法，應固定為科內一致 protocol，否則不同病人間很難比較。"
        },
        content: [
            {
                type: "info-box-blue",
                html: `<h4>臨床定位：看的是整體分泌功能，不是單一結節影像</h4>
                <p>唾液腺掃描使用 <strong>Tc-99m pertechnetate</strong> 觀察腮腺與頜下腺對示蹤劑的攝取與刺激後排出。它最適合回答的是<strong>口乾症狀與雙側大唾液腺功能是否下降、是否可被刺激、以及左右是否對稱</strong>，而不是用來取代超音波或 CT 做局部解剖搜尋。</p>`
            },
            {
                type: "section",
                title: "一、 目前臨床最常放在哪些情境？",
                icon: "🎯",
                html: `<div class="prose">
                    <ul>
                        <li><strong>口乾症狀功能評估：</strong>當病人主訴 xerostomia，需要了解雙側大唾液腺是否普遍功能下降時，唾液腺掃描能提供整體功能資訊。</li>
                        <li><strong>Sjogren syndrome 補充評估：</strong>雖然 2016 ACR/EULAR 分類準則已不把 salivary scintigraphy 納入主要分類條件，但在追蹤功能受損程度或與其他檢查互補時仍有角色。</li>
                        <li><strong>放療後與藥物相關唾液腺損傷：</strong>頭頸癌放療後、I-131 治療後或其他導致唾液功能下降的情境，可用來比較治療前後變化。</li>
                        <li><strong>阻塞性或慢性發炎性病變：</strong>若臨床想知道分泌刺激後是否排出不良，唾液腺動態影像比單張結構影像更能反映功能問題。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "二、 為什麼這張檢查看得見唾液腺功能？",
                icon: "🧬",
                html: `<div class="prose">
                    <p>Tc-99m pertechnetate 會被唾液腺上皮攝取並分泌到口腔中，因此動態曲線可分成三個教學階段：<strong>累積期、刺激後排出期、再累積期</strong>。讀圖時不能只截一張最亮的影像，而要把整段時間序列一起看。</p>
                    <p>正常情況下，兩側腮腺與頜下腺會逐步累積，約在刺激前達到高點；接受酸刺激後，活性應迅速下降，之後再慢慢回升。若缺少這個「下降再回升」的節奏，就要思考排出功能是否受損。</p>
                </div>`
            },
            {
                type: "section",
                title: "三、 檢前準備：刺激物一致，比臨時加拍更重要",
                icon: "🩺",
                html: `<div class="prose">
                    <ul>
                        <li><strong>禁食與補水：</strong>常見研究與實務 protocol 會要求檢前至少禁食 2 小時，並保持基本水分狀態，避免口腔條件差異太大。</li>
                        <li><strong>固定刺激方式：</strong>檸檬汁、檸檬糖或其他酸刺激物都可以，但同一科別應固定種類、容量與給予時間點。</li>
                        <li><strong>審視會影響分泌的因素：</strong>抗膽鹼藥物、鎮靜藥、脫水、急性感染與疼痛都可能影響唾液流量，排檢時應先記錄，而不是等曲線怪怪的才回頭猜。</li>
                        <li><strong>頭頸固定：</strong>這張檢查靠 ROI 與動態曲線判讀，頭頸 motion 會直接破壞左右比較與定量。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "四、 影像如何判讀：先看三階段節奏，再談左右差異",
                icon: "🧭",
                html: `<div class="prose">
                    <p><strong>正常型態</strong>是雙側大唾液腺逐步而對稱地攝取示蹤劑，腮腺通常比頜下腺更明顯；刺激後數分鐘內活性應明顯下降，之後再出現重新累積。這種「慢慢升、快速降、再回升」的節奏，是最重要的正常參考。</p>
                    <p><strong>廣泛功能下降型</strong>常見於 Sjogren syndrome 或嚴重放療後損傷。影像上可能表現為兩側腮腺與頜下腺整體攝取偏低、達峰緩慢，刺激後下降不明顯，甚至幾乎沒有可辨識排出。若四個大腺體都一起變差，通常比單側異常更支持全腺體功能問題。</p>
                    <p><strong>排出不良型</strong>的特徵是刺激前可正常或近正常累積，但刺激後曲線下降不足，代表腺體會抓住示蹤劑卻排不出去。這類型態在阻塞性病變或慢性炎症時很實用。</p>
                    <p><strong>單側或局部不對稱</strong>時，先確認不是頭位偏移、ROI 畫法不一致或口腔污染，再考慮單側手術後變化、局部炎症、阻塞或放療偏側效應。唾液腺掃描偏向整體功能檢查，若臨床要找結石或局部腫塊，仍要回到超音波、CT 或 MR sialography。</p>
                    <p><strong>定量與視覺判讀要互補</strong>。近年健康族群動態研究顯示，正常腮腺的最大攝取比例與排出分率通常高於頜下腺；因此同時看 time-activity curve 與腺體視覺節奏，比只寫一個數值更能幫臨床理解。</p>
                </div>`
            },
            {
                type: "section",
                title: "五、 常見陷阱與限制",
                icon: "⚠️",
                html: `<div class="prose">
                    <ul>
                        <li><strong>specificity 不高：</strong>唾液腺 scintigraphy 對功能下降敏感，但對病因鑑別不夠專一，因此不能單靠它區分 Sjogren、藥物影響、放療或其他唾液腺疾病。</li>
                        <li><strong>刺激物與時間點不一致：</strong>若每位病人的檸檬汁量、給予時點或收像長度不同，曲線就失去可比性。</li>
                        <li><strong>只看單張影像：</strong>若忽略 time-activity curve，就很容易把暫時攝取不足或短暫口腔污染誤判成功能異常。</li>
                        <li><strong>現代 Sjogren 分類已不主打這張檢查：</strong>因此報告語氣應聚焦在功能描述，不要把影像結果直接寫成 Sjogren 的確診句。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "六、 報告與溝通建議",
                icon: "📝",
                html: `<div class="prose">
                    <ul>
                        <li>記錄示蹤劑、活度、動態總時間、frame 長度、刺激物種類與刺激時點。</li>
                        <li>描述兩側腮腺與頜下腺的攝取是否對稱、刺激後是否有明顯排出、以及再累積是否保留。</li>
                        <li>若有定量，寫清楚 ROI 與指標定義，避免只放數值卻沒有視覺描述。</li>
                        <li>結論建議使用「雙側大唾液腺攝取與排出普遍下降」「右側排出功能較左側差」這類功能語言，而非單靠影像替臨床做病因定論。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "參考文獻",
                icon: "📚",
                html: `<div class="prose">
                    <ol>
                        <li>Shiboski CH, Shiboski SC, Seror R, et al. 2016 American College of Rheumatology/European League Against Rheumatism Classification Criteria for Primary Sjogren's Syndrome. <em>Arthritis Rheumatol</em>. 2017;69(1):35-45.</li>
                        <li>Giuseppe C, et al. The role of salivary gland scintigraphy in the evaluation of patients with xerostomia and Sjogren syndrome. Review literature summarized in <em>Front Med</em>. 2020.</li>
                        <li>Kim J, et al. Establishment of normal reference values for dynamic salivary gland scintigraphy and quantitative indices in healthy adults. <em>Diagnostics</em>. 2024.</li>
                        <li>Procedure recommendations and contemporary salivary imaging reviews comparing scintigraphy with ultrasound and MR sialography, updated through 2024.</li>
                    </ol>
                </div>`
            }
        ]
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
    I131WBS: {
        title: "I-131 全身掃描",
        subtitle: "I-131 Whole-Body Scan — 甲狀腺癌術後殘餘組織、復發與轉移病灶的高能量全身影像",
        category: "endocrine",
        protocolSummaryDisplay: "expanded",
        readerGuideMode: "article",
        readerGuideArticle: [
            "I-131 全身掃描的教學核心，是分清楚這張影像在問的是「還有哪些會攝碘的組織」，而不是所有亮點都等於腫瘤。",
            "診斷性 WBS 和治療後 WBS 雖然都叫全身掃描，但臨床問題、敏感度與判讀信心並不相同；教材應把兩者放在同一條工作流程裡理解。",
            "現代 ATA 指南也提醒，WBS 的價值常在與 thyroglobulin、超音波與 SPECT/CT 串聯使用，而不是孤立讀圖。"
        ],
        timeArchitecture: {
            mode: "article",
            steps: [
                { label: "前置刺激", value: "TSH stimulation、低碘飲食與近期含碘暴露評估" },
                { label: "給藥與延遲", value: "診斷性或治療性 I-131 後依 protocol 延遲收像" },
                { label: "全身加定位", value: "whole-body planar，必要時 spot view 或 SPECT/CT" }
            ],
            article: [
                "第一階段先決定病人是做診斷性 WBS 還是治療後 WBS，並把 TSH stimulation 的方式講清楚。臨床上可能是停用甲狀腺素後升高 TSH，也可能使用 rhTSH；兩者都會影響排程、症狀與病人配合度。",
                "第二階段是低碘飲食與含碘暴露管理。若近期做過含碘顯影或仍有高碘攝取，病灶就算存在，也可能因碘池已滿而顯影不足。",
                "第三階段才是高能量全身掃描本身。影像通常先以 whole-body planar 掌握全身分布，再針對可疑區域補 spot view 或 SPECT/CT，以區分殘餘甲狀腺床、淋巴結、肺轉移、骨轉移與污染。"
            ],
            note: "掃描時點需依院內 protocol、給藥目的與臨床問題固定。診斷性與治療後的時序不可混寫。"
        },
        content: [
            {
                type: "info-box-blue",
                html: `<h4>臨床定位：看的是「哪些組織還會攝碘」</h4>
                <p>I-131 全身掃描最常用在分化型甲狀腺癌術後，評估甲狀腺床殘餘組織、復發病灶與遠端轉移。影像語言是<strong>攝碘能力</strong>，因此判讀時一定要先分清生理性分布、污染與真正病灶，而不是看到亮點就直接寫成轉移。</p>`
            },
            {
                type: "section",
                title: "一、 診斷性 WBS 與治療後 WBS 有什麼不同？",
                icon: "🎯",
                html: `<div class="prose">
                    <p><strong>診斷性 WBS</strong>通常用在術後分期補充、風險重估或追蹤特定疑問；<strong>治療後 WBS</strong>則是在 I-131 治療後，用較高活度把原本不明顯的殘餘組織或轉移病灶顯示出來。ATA 2015 指南指出，治療後掃描常可發現前面未明顯顯示的病灶，並可藉 SPECT/CT 進一步改善定位。</p>
                    <p>實務上，診斷性 WBS 不是每位分化型甲狀腺癌病人都例行需要；低風險且已有 excellent response 的病人，常不需反覆常規 diagnostic WBS。這個觀念要寫進教材，避免把 WBS 誤教成「每次都要做」的固定流程。</p>
                </div>`
            },
            {
                type: "section",
                title: "二、 檢前準備：真正影響畫面的常在掃描前",
                icon: "🩺",
                html: `<div class="prose">
                    <ul>
                        <li><strong>TSH stimulation：</strong>若 TSH 沒有被拉高，病灶未必願意攝碘，影像就可能低估疾病。排檢時要清楚記錄是 hormone withdrawal 還是 rhTSH。</li>
                        <li><strong>低碘飲食：</strong>目標不是形式上「少吃海鮮」，而是降低體內碘池，讓放射性碘有機會被真正的目標組織攝取。</li>
                        <li><strong>近期含碘暴露：</strong>CT contrast、含碘消毒劑、某些保健食品與 amiodarone 都可能干擾，需在檢前主動追問。</li>
                        <li><strong>污染控制：</strong>掃描前排尿、更衣、取下口袋衛生紙與檢查皮膚污染，不是衛教細節，而是避免假陽性的第一步。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "三、 攝影流程：whole-body 只是起點，定位常靠補拍",
                icon: "🖥️",
                html: `<div class="prose">
                    <ul>
                        <li><strong>高能量準直儀不可省略：</strong>I-131 需使用 HE collimator 與相符能窗，否則畫質與散射控制都會出問題。</li>
                        <li><strong>先看全身分布：</strong>whole-body planar 讓我們知道亮點在哪些區域，再決定是否補頸部、胸部、骨盆或局部 spot view。</li>
                        <li><strong>SPECT/CT 的價值在定位：</strong>當平面影像無法分清甲狀腺床殘餘、頸部淋巴結、吞嚥後食道活性、腸道或骨病灶時，SPECT/CT 通常比再加更多平面投影更有幫助。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "四、 影像如何判讀：先分生理、污染，再談病灶",
                icon: "🧭",
                html: `<div class="prose">
                    <p><strong>生理性攝取</strong>常見於唾液腺、鼻咽黏膜、胃、腸道與泌尿系統，女性哺乳期乳房也可能顯影。讀片時應先建立一張「正常會亮哪裡」的地圖，避免把生理分布誤認為轉移。</p>
                    <p><strong>甲狀腺床殘餘組織</strong>通常位在頸部中央或偏中央的手術床區域，若與治療後掃描時間點相符，常見為術後 remnant。若焦點偏外側、形態不典型或與超音波結節對位，則要考慮頸部淋巴結轉移。</p>
                    <p><strong>淋巴結與遠端轉移</strong>的判讀要靠位置學。頸部外側、上縱膈、肺野散在點狀或瀰漫攝取、以及骨骼固定焦點，都可見於轉移；但真正下結論前，最好確認其位置是否固定、是否與解剖影像對應，並排除表面污染。</p>
                    <p><strong>污染</strong>是 I-131 WBS 最常見的假陽性之一。唾液、汗液、鼻涕、尿液污染常呈表面不規則亮點，有時會隨擦拭、換衣或重新排尿後消失。凡是亮點的位置不合理、邊界太表淺或左右對稱得不自然，都要先想污染。</p>
                    <p><strong>SPECT/CT 的角色</strong>是把「亮在哪裡」變成「亮的是什麼」。ATA 指南與後續研究都指出，SPECT/CT 能增加轉移淋巴結辨識、減少 equivocal findings，並在部分病例改變後續處置。</p>
                </div>`
            },
            {
                type: "section",
                title: "五、 常見陷阱與限制",
                icon: "⚠️",
                html: `<div class="prose">
                    <ul>
                        <li><strong>低風險病人不是都需要常規診斷性 WBS：</strong>要依風險分層與治療反應決定，不宜過度流程化。</li>
                        <li><strong>診斷劑量與 stunning 議題：</strong>前治療 diagnostic scan 的選擇需考慮後續治療規畫；部分中心在特定場景偏好 I-123 作為診斷性 WBS，以減少 I-131 低劑量先行造成的顧慮。</li>
                        <li><strong>平面定位有限：</strong>單靠 whole-body planar 很容易卡在「有亮，但不確定是什麼」，因此應及早考慮 spot view 或 SPECT/CT。</li>
                        <li><strong>攝碘陰性不等於沒有病灶：</strong>分化差、去分化或 Tg elevated / scan negative 的情況，仍可能需要超音波、CT、FDG PET/CT 等其他路徑。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "六、 報告與溝通建議",
                icon: "📝",
                html: `<div class="prose">
                    <ul>
                        <li>記錄給藥目的、活度、TSH stimulation 方式、低碘飲食與掃描時點。</li>
                        <li>描述生理分布是否如預期，再逐區說明可疑殘餘組織、淋巴結或遠端病灶。</li>
                        <li>若有可疑污染，應在報告中清楚註明已重拍、擦拭或重新排尿後是否消失。</li>
                        <li>結論建議寫成「支持甲狀腺床殘餘組織」「頸部外側攝碘灶，合併 SPECT/CT 較支持淋巴結轉移」等定位式語言，而不是只寫「陽性」。</li>
                    </ul>
                </div>`
            },
            {
                type: "section",
                title: "參考文獻",
                icon: "📚",
                html: `<div class="prose">
                    <ol>
                        <li>Haugen BR, Alexander EK, Bible KC, et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. <em>Thyroid</em>. 2016;26(1):1-133.</li>
                        <li>Avram AM, et al. Nuclear imaging in differentiated thyroid cancer: roles of diagnostic and posttherapy I-131 whole-body scanning with SPECT/CT. Contemporary reviews and practice updates through 2024.</li>
                        <li>ATA guideline evidence summaries on diagnostic WBS selectivity, SPECT/CT added value, and posttherapy scan timing.</li>
                    </ol>
                </div>`
            }
        ]
    },
    MUGA: {
    title: "心室功能檢查 MUGA / ERNA",
    subtitle: "Equilibrium Radionuclide Angiography 的臨床與技術實作",
    category: "cardiac",
    readerGuideMode: "article",
    readerGuideArticle: [
        "MUGA（ERNA）的價值在於可重現、可比較、可追蹤，不是只給一個 LVEF 數字。若同一病人要做治療前後序列監測，流程標準化比單次『看起來清楚』更重要。",
        "臨床判讀上，先確認檢查品質（R-wave gating、R-R histogram、ROI 合理性、統計數）再解讀功能參數。品質失控時，數值再漂亮也可能是誤差。",
        "近年重點已從『能不能量到 EF』轉向『不同軟體/流程能否互換』；2025 研究顯示跨軟體偏差可達臨床決策等級，故 serial 追蹤應避免任意切換平台。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "RBC 標記", value: "in vivo / modified / in vitro" },
            { label: "平衡後收像", value: "Planar LAO + multi-view 或 SPECT" },
            { label: "ECG R-wave gating", value: "16–32 frames / R-R" }
        ],
        article: [
            "第一階段是 RBC 標記：in vivo、modified in vivo/in vitro、in vitro 三法中，以 in vitro 標記效率最高，最利於高品質定量與 serial 追蹤。",
            "第二階段是擷取：平面 ERNA 的 LVEF 核心視角為 LAO best septal view，並以 16–32 frames/R-R 進行 ECG gating；必要時增加 anterior/lateral 觀察區域壁運動。",
            "第三階段是分析：平面採 count-based LVEF（ED/ES ROI + 背景校正），SPECT ERNA 則可用 3D 方式評估雙心室體積與 RVEF。"
        ],
        note: "同一病人序列追蹤時，應固定相機、收像參數、ROI 規則與分析軟體版本。"
    },
    content: [
        {
            type: "section",
            title: "名稱與定位：ERNA、MUGA、RNV 是同一技術族群",
            icon: "📘",
            html: `<div class="prose">
                <p>ERNA（equilibrium radionuclide angiography）與 MUGA（multigated acquisition）在實務上常互稱；核心都在以標記紅血球建立血池訊號，再透過 R-wave gating 取得心動週期平均影像以定量心室功能。</p>
                <p>SNMMI/EANM 2020 指引指出，此法在 serial LVEF 的 reproducibility 極高（文獻引用 inter/intraobserver variability &lt;5%），因此特別適合化療心毒性監測與長期療效追蹤。</p>
            </div>`
        },
        {
            type: "section",
            title: "臨床適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>最常見：</strong>癌症治療（特別是潛在心毒性藥物）前、中、後的 LVEF 追蹤。</li>
                    <li>心肌病變、瓣膜病、缺血後心室功能追蹤，或需要高重現性數值比較的情境。</li>
                    <li>當超音波窗不佳、CMR 不可行，ERNA 可作為穩定的功能定量工具。</li>
                    <li>限制：ERNA 提供的是血池功能資訊，對瓣膜結構、心肌組織特徵與缺血病灶定位不如 echo/CMR/MPI。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "標準技術流程（教學版）",
            icon: "🩺",
            html: `<div class="prose">
                <p><strong>病人準備：</strong>休息態通常不需禁食；若做運動或 dobutamine stress，建議禁食 3–4 小時並先檢核壓力檢查禁忌症。檢查前要主動確認心律不整、近期輸血、heparin/dextrose 靜脈路徑與可能干擾 RBC 標記之藥物/病史。</p>
                <p><strong>RBC 標記：</strong>SNMMI/EANM 2020 指引列出三法：in vivo（約 60–70%）、modified in vivo/in vitro（約 90%）、in vitro（&gt;97%）。若任務是精準 serial 定量，in vitro 通常最穩定，但需嚴格病人與血液樣本辨識流程。</p>
                <p><strong>劑量與擷取：</strong>成人常用活度約 555–1,110 MBq（15–30 mCi）。平面 ERNA 以 LAO best septal view 為 LVEF 核心角度，至少 16 frames/R-R（建議 24–32）；必要時補 anterior/lateral 以看區域壁運動。SPECT ERNA 在 RV 與雙心室體積分離常較有優勢。</p>
                <p><strong>計算原理：</strong>平面 LVEF 屬 count-based，需正確圈 ED 與 ES 的 LV ROI 並做背景校正；背景 ROI 位置錯誤（例如含脾臟或大血管）會直接造成系統性偏差。</p>
                <ul>
                    <li>公式：<strong>LVEF =（校正後 ED counts − 校正後 ES counts）/ 校正後 ED counts × 100%</strong></li>
                    <li>平面追蹤最怕「角度漂移 + ROI 漂移 + gating 失真」同時發生。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "軟體比較與序列追蹤規則",
            icon: "📊",
            html: `<div class="prose">
                <p>2025 年 J Nucl Med Technol 的研究（PMID:39814461）直接比較 <strong>Xeleris</strong> 與 <strong>Corridor4DM</strong>（以 CMR 為參考），發現同一批 ERNA 資料下，不同軟體可能出現顯著偏差；同軟體不同讀片者差異反而較小。研究結論明確指出：<strong>不同軟體不宜互換</strong>，切換時需高度警戒。</p>
                <p>實務上建議把以下條件「鎖定」：camera/collimator、R-R acceptance、frame 數、LAO 幾何、ROI 規則、背景 ROI 位置、重建與濾波參數、分析軟體與版本。若這些條件改變，報告必須註明可比性受限。</p>
            </div>`
        },
        {
            type: "section",
            title: "MUGA 結果判讀（臨床決策版）",
            icon: "🧭",
            html: `<div class="prose">
                <p><strong>先看可靠度，再看數值。</strong>判讀順序建議固定為：gating trigger 是否抓到 QRS、R-R histogram 是否集中、是否有 motion/frame drop-out、ROI 與背景 ROI 是否合理，最後才解讀 LVEF/RVEF。</p>
                <p><strong>序列追蹤最關鍵的不是單點高低，而是變化是否超過方法誤差。</strong>依 SNMMI/EANM 2020，ERNA serial 重現性可達 &lt;5%，因此前後約 5 個百分點以上的 LVEF 改變，才較可視為具臨床意義的真實變化。</p>
                <ul>
                    <li>收縮功能：LVEF、RVEF、global/regional wall motion（normal/hypokinetic/akinetic/dyskinetic）。</li>
                    <li>舒張功能：time-activity curve 形態、peak filling rate（PFR）與舒張充盈時間序列。</li>
                    <li>同步性：phase image / phase histogram 的平均相位與離散度（SD）。</li>
                    <li>壓力流程：同指引指出正常 stress LVEF 應較 rest 上升至少約 5 EF units。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "First-pass RNV（FPRNA）技術補充",
            icon: "🚀",
            html: `<div class="prose">
                <p><strong>定位：</strong>first-pass 不是取代 ERNA，而是以快速動態擷取第一循環通過心肺大血管時的訊號，特別有助於右心室功能（RVEF）與分流相關評估。</p>
                <p><strong>打藥與收像要點：</strong>重點是「緊實 bolus + 高時間解析」。靜脈路徑宜選通暢且靠近中心循環的路徑，避免外滲與過慢注射造成第一循環展寬。常見使用 RAO 投影取得右心分離較佳的時間活性曲線；數據處理仍須做背景校正並避免把心房/大血管訊號混入 RV ROI。</p>
                <p><strong>與 ERNA 的互補：</strong>ERNA 在 serial LVEF 重現性更有優勢；FPRNA 在特定右心與流入流出動力學問題可補足資訊。若做長期追蹤，同一病人應避免在 FPRNA 與 ERNA 間來回切換作為同一序列比較。</p>
                <ul>
                    <li>注射品質不佳（外滲、過慢、殘留）是 first-pass 誤差第一來源。</li>
                    <li>ROI 必須排除右心房與肺動脈重疊，否則 RVEF 會偏差。</li>
                    <li>first-pass 與 ERNA 量到的是不同時相與幾何模型，報告需註明方法學差異。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "文獻圖像示例（ROI 與指引頁）",
            icon: "🖼️",
            html: `<div class="prose">
                <p>此段改為聚焦最常被問的實作核心：「左心室 ROI 與背景 ROI 到底該畫在哪裡」。保留這張雙 ROI 示意即可支撐新手到臨床判讀的一線需求。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/muga-paper-figures/Taiwan_2022_MUGA_Fig1_ROI_tight.png" alt="Dual-ROI processing example for MUGA showing ventricular ROI and background ROI" loading="lazy" />
                    <figcaption>圖 1．MUGA 雙 ROI 處理示例。來源：陳麗華等，<em>核醫技學誌</em>. 2022;19:1-7, Figure 1。左圖是 ventricular ROI，右圖是背景 ROI；教學關鍵在於背景區應貼近左心室外側或 inferoapical 區，但要避開脾臟、主動脈與體外區域，否則背景校正會直接把 LVEF 算偏。</figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "Pitfalls 與報告最小必填",
            icon: "⚠️",
            html: `<div class="prose">
                <p><strong>六大常見陷阱：</strong>（1）RBC 標記效率差、（2）LAO 角度未達 best septal separation、（3）ECG gating 把 T wave/PVC 誤判、（4）counts 不足或 frame drop-out、（5）背景 ROI 放錯、（6）跨機器/跨軟體混用。</p>
                <p><strong>一份可用於治療決策的報告，不應只寫 LVEF。</strong>至少要有：indication、檢查型式（planar/SPECT）、藥物與活度、RBC 標記法、gating/影像品質、LV/RV size 與 wall motion、LVEF（必要時 RVEF/PFR/phase 分析）、與前次相比是否超出方法誤差。</p>
                <p><strong>主要參考文獻（權威與原始研究）：</strong></p>
                <ol>
                    <li><a href="https://sites.snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2020/jnmt_Gated%20ERNA.pdf" target="_blank" rel="noopener">SNMMI/EANM Procedure Standard for Gated ERNA, 2020</a>（J Nucl Med Technol 48:126-138）。</li>
                    <li><a href="https://pubmed.ncbi.nlm.nih.gov/39814461/" target="_blank" rel="noopener">Kappel RH, et al. J Nucl Med Technol. 2025;53(1):36-43</a>（software discrepancy；PMID:39814461）。</li>
                    <li><a href="https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2009/Cardiac_Scintigraphy_1382731812393_3.pdf" target="_blank" rel="noopener">ACR-SNM-SPR Practice Guideline for Cardiac Scintigraphy</a>（2009 修訂版，SNMMI 官方發布）。</li>
                    <li><a href="https://jnm.snmjournals.org/content/jnumed/38/10/1658.full.pdf" target="_blank" rel="noopener">SNM Procedure Guideline for Equilibrium Radionuclide Angiography, 1997</a>（J Nucl Med 38:1658-1661）。</li>
                    <li><a href="https://www.snm.org.tw/files/file_pool/1/0o138510474209225653/1%20%282%29.pdf" target="_blank" rel="noopener">陳麗華等。核醫技學誌 2022;19:1-7</a>（台灣平面/斷層 MUGA 與心超相關性）。</li>
                </ol>
            </div>`
        }
    ]
},


Venography: {
    title: "放射性核種靜脈攝影",
    subtitle: "Radionuclide Venography — 下肢靜脈回流、阻塞與側枝判讀",
    category: "cardiac",
    readerGuideMode: "article",
    readerGuideArticle: [
        "核醫靜脈攝影不是只看一張腿部照片，而是在看 tracer 是否能沿深靜脈主幹順利回流、是否被迫改走側枝，以及中斷點大致落在哪裡。",
        "這類檢查最容易被技術因素帶歪，因此判讀順序要固定：先看注射與止血帶流程是否可信，再看 flow phase，最後才下阻塞或 DVT 相關結論。",
        "現代臨床多由 venous ultrasound 擔任第一線，但在超音波受限、近端骨盆靜脈問題或需要功能性回流路徑概念時，radionuclide venography 仍有補充價值。"
    ],
    timeArchitecture: {
        mode: "article",
        steps: [
            { label: "建立血池", value: "依 protocol 做 flow 或 blood-pool 準備" },
            { label: "足背給藥", value: "雙側對照注射 + tourniquet" },
            { label: "動態與延遲相", value: "flow → blood pool / 必要時 SPECT-CT" }
        ],
        article: [
            "若採傳統 flow radionuclide venography，可用足背靜脈注射 Tc-99m MAA 或相近 protocol，重點在同步比較雙側深靜脈回流型態。",
            "若採 blood-pool 路徑，則需先建立穩定血池訊號，再做下肢 flow 與延遲血池判讀；這時注射路徑與示蹤劑標記品質就更重要。",
            "真正要看的不是『亮不亮』，而是 tracer 走哪條路、在哪裡變慢、是否出現異常側枝與近端中斷。"
        ],
        note: "同一單位應固定注射側、tourniquet 作法、flow 相時序與延遲相條件，否則前後病例的圖像語言很難比較。"
    },
    content: [
        {
            type: "section",
            title: "臨床定位",
            icon: "📌",
            html: `<div class="prose">
                <p>放射性核種靜脈攝影（radionuclide venography）曾是下肢深部靜脈栓塞（DVT）與靜脈回流阻塞評估的重要工具。今日臨床第一線多已改由 duplex ultrasonography 處理，但當超音波對骨盆或近端靜脈段不易完整回答、病人體型或傷口使壓迫超音波受限，或需要看整體側枝回流路徑時，核醫靜脈攝影仍可提供功能性補充資訊。</p>
                <p>它和超音波的視角不同。超音波偏重血管壓縮性、管腔回聲與多普勒血流；核醫靜脈攝影偏重 tracer 的動態回流模式，因此特別適合教學上建立「正常深靜脈主幹回流」與「阻塞後繞道側枝」的圖像語言。</p>
            </div>`
        },
        {
            type: "section",
            title: "適應症與限制",
            icon: "🎯",
            html: `<div class="prose">
                <ul>
                    <li><strong>可考慮情境：</strong>疑似 DVT 但超音波結果不明確、懷疑近端或骨盆段阻塞、需要補充功能性回流資訊、或追蹤側枝與通暢性變化。</li>
                    <li><strong>主要限制：</strong>空間解析度與解剖細節不如超音波、CT venography 或 MR venography；若注射品質或 tourniquet 條件失控，影像很容易被技術因素污染。</li>
                    <li><strong>目前角色：</strong>不是所有疑似 DVT 病人都要做，而是屬於特定問題導向的補充檢查。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "藥物、打藥與攝影流程",
            icon: "💉",
            html: `<div class="prose">
                <p>實務上常見兩類路徑：一類是直接做下肢 flow radionuclide venography；另一類是先建立 blood-pool 訊號後做 flow 與延遲血池觀察。不同院所可能使用 Tc-99m MAA、Tc-99m pertechnetate 結合 in-vivo RBC labeling，或其延伸 protocol；因此報告與技術紀錄必須明確寫出示蹤劑、注射方法與時序。</p>
                <p>下肢檢查通常採足背或足部遠端靜脈注射，雙側對照尤佳。tourniquet 的目的不是製造壓力感，而是協助表淺與深部靜脈分流控制，讓 tracer 優先呈現要觀察的回流路徑。若 tourniquet 綁法不一致、太鬆、太緊，或兩側條件不同，影像就會失去可比性。</p>
                <p>動態攝影重點是把 tracer 自遠端往近端的回流過程完整收進來；延遲 blood-pool phase 則用來看靜脈池分布、側枝與可疑阻塞段。若懷疑腹股溝以上病灶，可考慮加做腹骨盆範圍延伸影像或 SPECT/CT 做定位補強。</p>
            </div>`
        },
        {
            type: "section",
            title: "判讀框架",
            icon: "🧭",
            html: `<div class="prose">
                <p><strong>建議順序：</strong>先看技術品質，再看 flow 方向與連續性，最後才判讀阻塞程度。</p>
                <ul>
                    <li><strong>正常：</strong>雙側 tracer 沿深靜脈主幹平順、對稱向近端上行，沒有明顯中斷或異常表淺繞道。</li>
                    <li><strong>異常：</strong>單側回流延遲、主幹突然中斷、近端不顯影但可見明顯側枝擴張，支持深靜脈阻塞或 DVT 相關改變。</li>
                    <li><strong>只見表淺路徑：</strong>要先懷疑注射外滲、tourniquet 影響、既有靜脈通路異常或技術失敗，而不是立刻下深靜脈阻塞結論。</li>
                    <li><strong>近端問題：</strong>若小腿與膝上流向都不典型，卻無法明確定位，應主動建議與超音波或 CT/MR venography 對照。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "Pitfalls",
            icon: "⚠️",
            html: `<div class="prose">
                <p><strong>最常見誤差來源不是疾病本身，而是注射與流程。</strong></p>
                <ul>
                    <li><strong>注射外滲：</strong>會造成局部高活性與近端回流假性減弱，甚至只剩表淺路徑顯影。</li>
                    <li><strong>tourniquet 綁法不一致：</strong>兩側比較會失真，讓人誤以為一側回流異常。</li>
                    <li><strong>病人移動：</strong>動態相一旦移位，回流連續性與中斷點很容易被看錯。</li>
                    <li><strong>慢性既有側枝：</strong>不一定代表急性 DVT，需結合症狀時序與其他影像。</li>
                    <li><strong>只憑單一相位下結論：</strong>flow 與延遲血池相應一起看，才能分清急性中斷、慢性繞道與單純技術問題。</li>
                </ul>
            </div>`
        },
        {
            type: "section",
            title: "文獻圖像示例",
            icon: "🖼️",
            html: `<div class="prose">
                <p>這一段保留兩張最有教學價值的圖：第一張回答「blood-pool venography 前示蹤劑是怎麼建立血池的」，第二張回答「正常、阻塞與側枝顯影到底長什麼樣子」。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Venography/RBC_PYP_Tc99m_Fallback_Workflow.svg" alt="Workflow for in-vivo RBC labeling venography using PYP followed by Tc-99m" loading="lazy" />
                    <figcaption>圖 1．以 PYP 先行處理、再注入 Tc-99m pertechnetate 的 in-vivo RBC 血池流程示意。圖的重點不在背步驟，而是理解 blood-pool venography 必須先把穩定血池訊號建立起來；若周邊靜脈條件差、注射不順或標記品質不穩，後面看到的回流與延遲相就可能一起失真。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Venography/WJNM_2018_Fig1_RadionuclideVenographyPatterns.jpg" alt="Representative radionuclide venography patterns showing normal flow and obstruction with collateral formation" loading="lazy" />
                    <figcaption>圖 2．核醫靜脈攝影代表型態。來源：Theerakulpisut D, et al. <em>World J Nucl Med</em>. 2018;17:27-33, Figure 1。教學上可先看正常深靜脈主幹如何平順向上，再對照阻塞時的主幹中斷與側枝擴張；若只剩表淺路徑或局部異常積聚，則優先思考外滲與技術因素。</figcaption>
                </figure>
            </div>`
        },
        {
            type: "section",
            title: "報告建議與參考文獻",
            icon: "📚",
            html: `<div class="prose">
                <p>報告至少應註明：示蹤劑與注射法、注射側/雙側、tourniquet 條件、flow 與延遲相品質、回流是否連續、可疑中斷位置、側枝有無，以及是否建議追加超音波或其他靜脈影像。</p>
                <ul>
                    <li>Pavel DG, Zimmer AM, Patterson VN. <em>J Nucl Med</em>. 1977;18(3):305-308.</li>
                    <li>Snarski AM. <em>Eur J Nucl Med</em>. 1989;15(3):137-142.</li>
                    <li>Caner B, et al. <em>Angiology</em>. 1991;42(10):796-804.</li>
                    <li>Theerakulpisut D, et al. <em>World J Nucl Med</em>. 2018;17:27-33.</li>
                    <li>Liu C, et al. <em>J Nucl Med Radiat Ther</em>. 2016;7:295.</li>
                </ul>
            </div>`
        }
    ]
}
};

Object.assign(EXAM_DATA, CARDIAC_VIEW_OVERRIDES);

const LEARNING_PAGE_PLANS = {
    NMBasics: {
        label: '重點',
        title: '核醫影像以功能資訊為核心，設備與 QC 直接影響影像可信度。',
        desc: '宜先建立功能影像、常見設備與品質控制之基本觀念，再進入各項檢查內容。',
        steps: ['功能影像在看什麼', '常見設備與技術差異', 'QC 怎麼影響影像']
    },
    DocumentControl: {
        label: '重點',
        title: '文件管理應明確區分種類、版本、責任與紀錄。',
        desc: '宜先區分品質手冊、程序書、作業規範、表單與紀錄之用途，再進行文件管理。',
        steps: ['文件分階', '外來文件與修訂控制', '紀錄保存與追溯']
    },
    Radiopharmacy: {
        label: '重點',
        title: '熱核室作業應明確掌握到貨、分裝、放行與污染控制流程。',
        desc: '熱核室工作重點在於順序、核對與紀錄；流程清楚有助於降低作業遺漏。',
        steps: ['到貨與驗收', '分裝、貼標與放行', '污染偵測、料帳與廢棄處理']
    },
    PatientQA: {
        label: '重點',
        title: '病人溝通應明確說明風險、目的與配合事項。',
        desc: '病人溝通宜先說明風險、檢查目的與配合方式，再進一步交代流程細節。',
        steps: ['高風險與禁忌', '檢查目的', '當天流程與檢後提醒']
    },
    RadiationSafety: {
        label: '重點',
        title: '輻射防護原則應能轉化為日常工作規範。',
        desc: '將法規、劑量、污染處理與治療後限制置於實際工作情境中，較易落實。',
        steps: ['常見法規場景', '常用數字與門檻', 'ALARA 的日常做法']
    },
    I131Ward: {
        label: '重點',
        title: 'I-131 病房管理需整合準備、污染控制與出院安排。',
        desc: 'I-131 病房作業須整合住院前準備、住院期間污染控制與出院安排。',
        steps: ['入院條件', '住院污染與照護', '出院與返家限制']
    },
    DosageTable: {
        label: '重點',
        title: '劑量表應結合藥物、臨床情境與醫囑一併判讀。',
        desc: '宜先對照藥物、成人或兒科情境與 protocol，再以表格或計算器核對。',
        steps: ['檢查與藥物', '成人或兒科', '表格與計算器核對']
    },
    DosageCalc: {
        label: '重點',
        title: '計算器僅供核對使用，不應取代醫囑與科內規範。',
        desc: '計算器僅作為核對工具，結果仍須再對照公式、protocol 與醫囑。',
        steps: ['選檢查項目', '兒科輸入體重', '回頭核對公式與醫囑']
    },
    Calendar: {
        label: '使用方式',
        title: '宜先確認日期，再判讀門診狀態與排程影響。',
        desc: '排程頁應先確認日期、門診狀態與行政假期，再進行病人流程安排。',
        steps: ['先找日期與月份', '再看停診、補班或行政休假', '最後再回到病人通知與排藥安排']
    },
    default: {
        label: '重點',
        title: '宜先確認目的，再閱讀流程、限制與注意事項。',
        desc: '頁面先整理核心判斷，再延伸至流程細節與補充資料。',
        steps: ['目的', '流程與限制', '注意事項']
    }
};

const LEARNING_NEXT_STEP_VIEWS = {
    NMBasics: ['DocumentControl', 'Radiopharmacy', 'RadiationSafety'],
    DocumentControl: ['Radiopharmacy', 'PatientQA', 'RadiationSafety'],
    Radiopharmacy: ['DocumentControl', 'RadiationSafety', 'DosageTable'],
    PatientQA: ['NMBasics', 'RadiationSafety', 'DosageTable'],
    RadiationSafety: ['I131Ward', 'DocumentControl', 'PatientQA'],
    WomenRadiationPractice: ['RadiationSafety', 'PatientQA', 'I131Ward'],
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

const ACADEMIC_FIGURE_SUPPLEMENTS = {
    Thyroid: [
        {
            type: "section",
            title: "學術來源判讀圖例：甲狀腺 uptake / scan",
            icon: "🖼️",
            html: `<div class="prose">
                <p>以下使用期刊與 SNM procedure guideline 裁切圖，聚焦判讀時最容易需要圖像對照的型態：Graves、toxic multinodular goiter、hot nodule、cold nodule 與常見技術錯誤。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/ThyroidUptake/IJEM_2012_Fig4_Graves.jpg" alt="Diffuse high uptake pattern in Graves disease thyroid scintigraphy" loading="lazy" />
                    <figcaption>圖 1．Graves disease 典型瀰漫性高攝取。來源：Int J Endocrinol. 2012 open-access thyroid scintigraphy review, Figure 4。判讀重點是全腺相對均勻增強，而非單一結節主導。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/ThyroidUptake/IJEM_2012_Fig1_Multinodular.jpg" alt="Toxic multinodular goiter pattern on thyroid scintigraphy" loading="lazy" />
                    <figcaption>圖 2．Toxic multinodular goiter。來源：同篇 Figure 1。多個功能性結節造成不均勻攝取，判讀時要和 Graves 的 diffuse pattern 分開。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/ThyroidUptake/IJEM_2012_Fig3_HotNodule.jpg" alt="Autonomous hot thyroid nodule with suppression of background thyroid tissue" loading="lazy" />
                    <figcaption>圖 3．Autonomous hot nodule。來源：同篇 Figure 3。單一熱結節可壓抑周邊甲狀腺組織，和多結節型態的臨床意義不同。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/ThyroidUptake/IJEM_2012_Fig2_ColdNodule.jpg" alt="Cold thyroid nodule on thyroid scintigraphy" loading="lazy" />
                    <figcaption>圖 4．Cold nodule。來源：同篇 Figure 2。冷結節代表局部攝取缺損，不能由核醫影像單獨判定良惡性，需接續超音波與 FNA 風險分層。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/ThyroidUptake/SNM_2002_SourcesOfError_excerpt.png" alt="SNM thyroid uptake procedure guideline excerpt listing common sources of error" loading="lazy" />
                    <figcaption>圖 5．常見誤差來源。來源：SNM Procedure Guideline for Thyroid Uptake Measurement, 2002 excerpt。含碘暴露、藥物、幾何位置與校正流程都可能改變 uptake 數值，報告需註明限制。</figcaption>
                </figure>
            </div>`
        }
    ],
    I131WBS: [
        {
            type: "section",
            title: "學術來源判讀圖例：I-131 全身掃描前處理與誤差",
            icon: "🖼️",
            html: `<div class="prose">
                <p>I-131 全身掃描的判讀可靠度高度依賴前處理與碘池控制；目前先以 SNM thyroid uptake procedure guideline 的誤差來源裁切作為前處理檢核圖例，後續再補治療後 WBS 病灶型態圖。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/ThyroidUptake/SNM_2002_SourcesOfError_excerpt.png" alt="SNM thyroid uptake procedure guideline excerpt listing iodine and medication sources of error" loading="lazy" />
                    <figcaption>圖 1．I-131 / thyroid uptake 相關誤差來源。來源：SNM Procedure Guideline for Thyroid Uptake Measurement, 2002 excerpt。含碘顯影、甲狀腺藥物、校正與幾何條件會直接影響殘餘甲狀腺或病灶攝取判讀。</figcaption>
                </figure>
            </div>`
        }
    ],
    NaFPET: [
        {
            type: "section",
            title: "學術來源判讀圖例：骨骼攝取型態與 superscan 陷阱",
            icon: "🖼️",
            html: `<div class="prose">
                <p>F-18 NaF PET 與 Tc-99m MDP bone scan 皆反映骨重塑活性；在尚未補入 NaF PET 專屬 open-access PET/CT 圖前，先共用 EANM bone scintigraphy 與 superscan review 的判讀型態圖，協助建立骨骼分布、瀰漫病灶與 hot-kidney 陷阱。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/BoneScan/EANM_2016_Fig1_Normal_WholeBody.png" alt="Normal whole-body bone scintigraphy from EANM guideline used as skeletal uptake baseline" loading="lazy" />
                    <figcaption>圖 1．正常骨骼核醫分布基準。來源：EANM bone scintigraphy practice guideline 2016, Figure 1。NaF PET 雖解析度更高，仍需先建立對稱骨重塑與泌尿排泄背景的正常概念。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/BoneScan/Diagnostics_2024_Fig1_Superscan.jpg" alt="Metastatic superscan pattern relevant to skeletal nuclear imaging" loading="lazy" />
                    <figcaption>圖 2．metastatic superscan 型態。來源：Zacho HD, et al. <em>Diagnostics</em>. 2024;14, Figure 1。瀰漫性骨轉移可能讓正常背景與泌尿系統相對變淡，PET 或 planar 判讀都要避免低估。</figcaption>
                </figure>
            </div>`
        }
    ],
    PET: [
        {
            type: "section",
            title: "學術影像圖例：FDG PET/CT 正常變異與偽影",
            icon: "🖼️",
            html: `<div class="prose">
                <p>FDG PET/CT 的判讀不能只看 SUV 或亮點；腸胃道生理攝取、用藥造成的分布改變，以及 CT attenuation correction 相關偽影，都可能改變腫瘤判讀信心。本頁補入 open-access review 圖例，作為正常變異與 artifact related false findings 的教學基準。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PET/Frontiers_2022_FDG_Fig2_LargeBowelUptake.jpg" alt="FDG PET/CT large bowel physiologic uptake pattern" loading="lazy" />
                    <figcaption>圖 1．大腸 FDG 攝取常見正常變異。來源：<em>F-18 FDG PET/CT Imaging in Normal Variants, Pitfalls and Artifacts in the Abdomen and Pelvis</em>, <em>Frontiers in Nuclear Medicine</em>. 2022; Figure 2。腸道攝取可呈局部或長段分布，需與 CT 壁厚、腫塊與臨床症狀整合，避免把生理或發炎背景誤作腫瘤。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PET/Frontiers_2022_FDG_Fig3_MetforminBowelUptake.jpg" alt="Metformin-associated bowel uptake on FDG PET maximum intensity projection image" loading="lazy" />
                    <figcaption>圖 2．metformin 相關腸道攝取。來源：同上，Figure 3。糖尿病用藥會讓腸道背景升高，判讀時要回到病史與用藥時間，而不是只用 SUV 門檻裁決。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PET/Frontiers_2022_FDG_Fig5_AttenuationArtifact.jpg" alt="FDG PET/CT attenuation correction artifact from prosthesis" loading="lazy" />
                    <figcaption>圖 3．衰減校正造成的 prosthesis artifact。來源：同上，Figure 5。金屬植入物附近的 FDG 假性增強要比對 non-attenuation-corrected PET、CT 與融合影像，這是 artifact related false positive 的典型檢核點。</figcaption>
                </figure>
            </div>`
        }
    ],
    PETCTRadiation: [
        {
            type: "section",
            title: "學術影像圖例：PET/CT 的 CT 校正與偽影",
            icon: "🖼️",
            html: `<div class="prose">
                <p>PET/CT 劑量討論也必須理解 CT 在影像中的角色：CT 可作定位、衰減校正或診斷用途。若 CT-based attenuation correction 產生假性增強，可能導致追加掃描或錯誤判讀，因此劑量最適化與影像品質控制要一起看。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PET/Frontiers_2022_FDG_Fig5_AttenuationArtifact.jpg" alt="FDG PET/CT attenuation correction artifact illustrating CT-based correction pitfall" loading="lazy" />
                    <figcaption>圖 1．CT attenuation correction artifact。來源：<em>Frontiers in Nuclear Medicine</em> 2022 FDG PET/CT pitfalls review, Figure 5。遇到金屬植入物附近熱點，應補看 non-AC PET 與 CT；這能避免把校正偽影誤認為病灶，也能減少不必要追加 CT。</figcaption>
                </figure>
            </div>`
        }
    ],
    LungVQ: [
        {
            type: "section",
            title: "學術影像圖例：V/Q mismatch 與肺栓塞",
            icon: "🖼️",
            html: `<div class="prose">
                <p>V/Q scan 的核心判讀語言是通氣與灌流是否匹配。肺栓塞常見灌流缺損但通氣相對保留的 mismatch；若通氣與灌流同區下降，則要改思考肺實質病變、慢性阻塞、肺炎或其他非栓塞原因。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/LungVQ/CardiolJ_2021_Fig6_VQ_PE_Mismatch.jpg" alt="Ventilation perfusion scan showing mismatch pattern in pulmonary embolism" loading="lazy" />
                    <figcaption>圖 1．肺栓塞的 V/Q mismatch 圖例。來源：<em>Multimodality cardiovascular imaging in pulmonary embolism</em>, <em>Cardiology Journal</em>. 2021; Figure 6。灌流缺損與相對正常通氣形成不匹配，是 PE 機率分層的關鍵影像線索。</figcaption>
                </figure>
            </div>`
        }
    ],
    Ga68DOTATOC: [
        {
            type: "section",
            title: "學術影像圖例：SSTR PET 正常分布與陷阱",
            icon: "🖼️",
            html: `<div class="prose">
                <p>Ga-68 DOTATOC/DOTATATE PET 不只是找神經內分泌腫瘤，也是在評估 somatostatin receptor 表現與 PRRT 可行性。正常脾臟、腎上腺、腎臟、肝臟、腦下垂體與胰臟 uncinate process 攝取，以及呼吸位移造成的 misregistration，都可能造成假陽性或定位錯誤。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Ga68DOTATOC/Frontiers_2022_DOTATATE_Fig1_NormalBiodistribution.jpg" alt="Ga-68 DOTATATE PET maximum intensity projection normal biodistribution" loading="lazy" />
                    <figcaption>圖 1．Ga-68 DOTATATE 正常生理分布。來源：<em>Normal Variants, Pitfalls and Artifacts in Ga-68 DOTATATE PET/CT Imaging</em>, <em>Frontiers in Nuclear Medicine</em>. 2022; Figure 1。先熟悉正常高攝取器官，才能避免把生理攝取當成 NET 病灶。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Ga68DOTATOC/Frontiers_2022_DOTATATE_Fig3_RespMotionMisregistration.jpg" alt="Ga-68 DOTATATE PET CT respiratory motion misregistration pitfall" loading="lazy" />
                    <figcaption>圖 2．呼吸位移造成 PET/CT misregistration。來源：同上，Figure 3。肝膈附近小病灶或胸腹交界攝取需看多平面融合與非融合 PET，避免定位到錯誤解剖位置。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Ga68DOTATOC/Frontiers_2022_DOTATATE_Fig4_UncinatePitfall.jpg" alt="Ga-68 DOTATATE uptake in pancreatic uncinate process pitfall" loading="lazy" />
                    <figcaption>圖 3．胰臟 uncinate process 生理攝取陷阱。來源：同上，Figure 4。uncinate 攝取可模擬胰頭 NET；判讀需整合形態、強度、邊界與追蹤，而非單靠熱點存在。</figcaption>
                </figure>
            </div>`
        }
    ],
    Lu177DOTATATE: [
        {
            type: "section",
            title: "學術影像圖例：PRRT 治療前 SSTR 影像資格判讀",
            icon: "🖼️",
            html: `<div class="prose">
                <p>Lu-177 DOTATATE PRRT 的前提是病灶具有足夠 SSTR 表現，因此治療頁同步補入 DOTATATE PET 圖例。判讀時要分清真正腫瘤攝取、生理高攝取器官、uncinate process 假陽性與 PET/CT 位移偽影，避免把錯誤 target 帶進治療決策。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Ga68DOTATOC/Frontiers_2022_DOTATATE_Fig1_NormalBiodistribution.jpg" alt="Ga-68 DOTATATE normal biodistribution used before PRRT eligibility assessment" loading="lazy" />
                    <figcaption>圖 1．PRRT 治療前需先理解 SSTR PET 正常分布。來源：<em>Frontiers in Nuclear Medicine</em> 2022 Ga-68 DOTATATE pitfalls review, Figure 1。脾臟、腎臟、腎上腺與肝臟背景會影響 Krenning-like 視覺判讀與治療資格評估。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Ga68DOTATOC/Frontiers_2022_DOTATATE_Fig4_UncinatePitfall.jpg" alt="Uncinate process physiologic uptake relevant to PRRT target selection" loading="lazy" />
                    <figcaption>圖 2．uncinate process 假陽性陷阱。來源：同上，Figure 4。治療前若把生理攝取誤判為胰臟病灶，會直接影響 staging 與 PRRT 適應症討論。</figcaption>
                </figure>
            </div>`
        }
    ],
    MIBG: [
        {
            type: "section",
            title: "學術影像圖例：MIBG 攝取與病灶定位",
            icon: "🖼️",
            html: `<div class="prose">
                <p>I-123 MIBG 的判讀重點是病灶是否保留 norepinephrine transporter 相關攝取路徑。這不只影響嗜鉻細胞瘤/副神經節瘤分期，也會影響 I-131 MIBG 治療是否有合理 target。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/MIBG/JNM_2009_Fig1_MIBG_PheoParaganglioma.jpg" alt="I-123 MIBG whole-body images in pheochromocytoma and metastatic paraganglioma" loading="lazy" />
                    <figcaption>圖 1．I-123 MIBG 全身影像示範嗜鉻細胞瘤與轉移性副神經節瘤攝取。來源：<em>Journal of Nuclear Medicine</em>. 2009 prospective multicenter trial, Figure 1。全身分布能協助辨識原發、轉移與多發病灶。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/MIBG/JNM_2009_Fig2_MIBG_SPECTFocus.jpg" alt="I-123 MIBG planar and SPECT images localizing abdominal focus" loading="lazy" />
                    <figcaption>圖 2．planar 與 SPECT 的定位差異。來源：同上，Figure 2。局部焦點需用 SPECT/CT 或融合資訊釐清解剖位置，避免被腸道、腎上腺或重疊結構誤導。</figcaption>
                </figure>
            </div>`
        }
    ],
    POSLUMA: [
        {
            type: "section",
            title: "學術影像圖例：PSMA PET 正常分布與假陽性",
            icon: "🖼️",
            html: `<div class="prose">
                <p>PSMA PET 的高對比影像很容易讓人過度相信亮點；判讀時要先掌握正常唾液腺、腎臟、輸尿管、膀胱、小腸與肝膽背景，再分辨骨轉移、發炎感染、骨折與其他腫瘤造成的假陽性。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PSMA/Frontiers_2022_PSMA_Fig1_NormalBiodistribution.png" alt="Ga-68 PSMA PET normal biodistribution maximum intensity projection" loading="lazy" />
                    <figcaption>圖 1．Ga-68 PSMA 正常生理分布。來源：<em>Normal Variants, Pitfalls, and Artifacts in Ga-68 PSMA PET/CT Imaging</em>, <em>Frontiers in Nuclear Medicine</em>. 2022; Figure 1。泌尿排泄與唾液腺攝取是判讀 baseline，骨盆與腹部病灶需特別小心尿液背景。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PSMA/Frontiers_2022_PSMA_Fig3_OsteoblasticMetastases.webp" alt="Widespread osteoblastic metastases on PSMA PET" loading="lazy" />
                    <figcaption>圖 2．廣泛 osteoblastic metastases 的 PSMA PET 型態。來源：同上，Figure 3。骨轉移常呈多發骨性攝取，需與 CT 硬化灶、骨掃描與臨床 PSA 走勢整合。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PSMA/Frontiers_2022_PSMA_Fig4_TuberculosisFalsePositive.webp" alt="Tuberculosis inflammatory uptake as PSMA PET false positive pitfall" loading="lazy" />
                    <figcaption>圖 3．肺結核/發炎相關 PSMA 攝取假陽性。來源：同上，Figure 4。PSMA 並非攝護腺癌專屬訊號；感染、發炎或其他腫瘤也可能攝取，報告需回到病史與 CT 形態。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PSMA/Frontiers_2022_PSMA_Fig5_RibFractureFalsePositive.webp" alt="Rib fracture PSMA PET uptake false positive pitfall" loading="lazy" />
                    <figcaption>圖 4．肋骨骨折造成 PSMA uptake 假陽性。來源：同上，Figure 5。單一肋骨熱點若位於骨折或修復位置，不應直接等同骨轉移。</figcaption>
                </figure>
            </div>`
        }
    ],
    Lu177PSMA: [
        {
            type: "section",
            title: "學術影像圖例：Lu-177 PSMA 治療前 target 與陷阱",
            icon: "🖼️",
            html: `<div class="prose">
                <p>Lu-177 PSMA 治療前 PSMA PET 要回答兩件事：病灶是否有足夠 target，以及有沒有明顯假陽性或影像不一致。發炎、骨折與其他非攝護腺癌病灶都可能讓治療決策被錯誤亮點帶偏。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PSMA/Frontiers_2022_PSMA_Fig3_OsteoblasticMetastases.webp" alt="PSMA-positive osteoblastic metastases relevant to Lu-177 PSMA therapy selection" loading="lazy" />
                    <figcaption>圖 1．PSMA-positive 多發骨轉移示例。來源：<em>Frontiers in Nuclear Medicine</em> 2022 PSMA PET pitfalls review, Figure 3。治療前需確認病灶分布、攝取強度、骨髓儲備與臨床狀態，而不是只看單一熱點。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/PSMA/Frontiers_2022_PSMA_Fig4_TuberculosisFalsePositive.webp" alt="Inflammatory PSMA uptake pitfall relevant to treatment eligibility" loading="lazy" />
                    <figcaption>圖 2．發炎感染造成 PSMA 假陽性。來源：同上，Figure 4。治療資格評估若把非腫瘤攝取當作 target，會高估可治療腫瘤負荷。</figcaption>
                </figure>
            </div>`
        }
    ],
    BrainPET: [
        {
            type: "section",
            title: "學術影像圖例：腦部 FDG PET 失智型態",
            icon: "🖼️",
            html: `<div class="prose">
                <p>腦 FDG PET 判讀重點是代謝分布型態，而不是單一亮點。AD、FTD、DLB 與血管性病灶可有不同低代謝分布；若 CT 顯示既有梗塞或結構病灶，也可能造成假性代謝缺損解讀。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/BrainPET/BJR_2019_Fig4_FDG_AD_Patterns.jpg" alt="FDG PET hypometabolism patterns in Alzheimer's disease" loading="lazy" />
                    <figcaption>圖 1．AD 相關 FDG PET 低代謝型態。來源：<em>Clinical 18F-FDG and amyloid brain PET/CT in cognitive impairment</em>, <em>British Journal of Radiology</em>. 2019; Figure 4。頂葉、顳葉、precuneus/posterior cingulate 分布有助於與其他失智型態鑑別。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/BrainPET/BJR_2019_Fig7_FDG_FTD_Patterns.jpg" alt="FDG PET hypometabolism patterns in frontotemporal dementia subtypes" loading="lazy" />
                    <figcaption>圖 2．FTD subtype 的 FDG PET 低代謝分布。來源：同上，Figure 7。額顳葉與語言網絡相關低代謝型態，可支持臨床與神經心理評估。</figcaption>
                </figure>
            </div>`
        }
    ],
    AmyloidPET: [
        {
            type: "section",
            title: "學術影像圖例：Amyloid PET 陽性/陰性判讀",
            icon: "🖼️",
            html: `<div class="prose">
                <p>Amyloid PET 多以視覺判讀分成 amyloid positive 或 negative；重點是灰白質對比是否消失、皮質是否出現 amyloid tracer binding。陰性不等於完全沒有 amyloid，而是低於影像判讀門檻或不支持 amyloid 為主要病理。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/AmyloidPET/BJR_2019_Fig5_Amyloid_Positive_Negative.jpg" alt="Positive and negative amyloid PET visual read examples" loading="lazy" />
                    <figcaption>圖 1．Amyloid PET positive 與 negative 視覺判讀示例。來源：<em>British Journal of Radiology</em>. 2019; Figure 5。陽性掃描灰白質對比下降；陰性掃描保留較清楚灰白質差異。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/AmyloidPET/BJR_2019_Fig6_Amyloid_ReadVariants.jpg" alt="Amyloid PET positive and negative read variants" loading="lazy" />
                    <figcaption>圖 2．不同 amyloid PET 視覺讀片型態。來源：同上，Figure 6。報告需與臨床表現、MRI、FDG PET、CSF 或其他 biomarker 合併解讀。</figcaption>
                </figure>
            </div>`
        }
    ],
    Parathyroid: [
        {
            type: "section",
            title: "學術影像圖例：副甲狀腺 MIBI 與 SPECT/CT 定位",
            icon: "🖼️",
            html: `<div class="prose">
                <p>副甲狀腺 scintigraphy 判讀不只是早期/延遲 washout；SPECT/CT 對 ectopic adenoma 定位很重要，而 thyroid nodule、甲狀腺癌、發炎或其他頸部病灶也會造成 MIBI 假陽性。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Parathyroid/FrontEndocrinol_2022_Fig6_Sestamibi_SPECTCT_EctopicPA.jpg" alt="Sestamibi planar and SPECT CT localization of ectopic parathyroid adenoma" loading="lazy" />
                    <figcaption>圖 1．ectopic parathyroid adenoma 的 planar 與 SPECT/CT 定位。來源：<em>Parathyroid Imaging: Past, Present, and Future</em>, <em>Frontiers in Endocrinology</em>. 2022; Figure 6。掃描範圍應包含縱膈，SPECT/CT 可把 MIBI 攝取放回解剖位置。</figcaption>
                </figure>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/Parathyroid/FrontEndocrinol_2022_Fig5_ThyroidNodulePitfall.jpg" alt="Thyroid nodule pitfall in sestamibi parathyroid imaging" loading="lazy" />
                    <figcaption>圖 2．thyroid nodule 對副甲狀腺 MIBI 的干擾。來源：同上，Figure 5。甲狀腺結節可有變異 MIBI uptake，需配合 subtraction、超音波、SPECT/CT 與實驗室資料。</figcaption>
                </figure>
            </div>`
        }
    ],
    I131MIBG: [
        {
            type: "section",
            title: "學術影像圖例：I-131 MIBG 治療前 target 確認",
            icon: "🖼️",
            html: `<div class="prose">
                <p>I-131 MIBG 治療不是看到腫瘤就能做；需要先確認病灶真的會攝取 MIBG。治療前診斷性 I-123 MIBG 可用來評估 target expression、病灶範圍與後續隔離/污染管理的風險溝通。</p>
                <figure class="inline-guide-figure">
                    <img src="assets/paper-figures/MIBG/JNM_2009_Fig1_MIBG_PheoParaganglioma.jpg" alt="Diagnostic I-123 MIBG uptake used as prerequisite concept before I-131 MIBG therapy" loading="lazy" />
                    <figcaption>圖 1．治療前 MIBG uptake 確認。來源：<em>Journal of Nuclear Medicine</em>. 2009, Figure 1。若診斷性 MIBG 影像缺乏病灶攝取，I-131 MIBG 治療價值通常不足，需改評估其他影像或治療策略。</figcaption>
                </figure>
            </div>`
        }
    ]
};

function getCombinedContentBlocks(key, data, includeLatestPatientEdu = true) {
    return [
        ...(data.content || []),
        ...(ACADEMIC_FIGURE_SUPPLEMENTS[key] || []),
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
            <strong>${item.title}</strong>
            <span>${item.desc}</span>
        </button>
    `;
}

function getGuideNavItems(views, kicker = '') {
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
        'info-box-blue': '重點',
        'info-box-emerald': '處置',
        'info-box-amber': '注意事項',
        'info-box-rose': '風險',
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
        ...(ACADEMIC_FIGURE_SUPPLEMENTS[key] || []),
        ...(EXAM_TEACHING_SUPPLEMENTS[key] || [])
    ];
    const patientEduBlocks = LATEST_PATIENT_EDU_SUPPLEMENTS[key] || [];
    const callouts = baseBlocks.filter((block) => block.type && block.type.startsWith('info-box'));
    const sections = baseBlocks.filter((block) => block.type === 'section');
    const { prepSections, patientSections, clinicalSections } = classifyExamFlowSections(sections);
    const patientBlocks = [...patientSections, ...patientEduBlocks];
    const supportLinks = getExamFlowSupportLinks(data.category);
    const tocItems = [];

    const conceptSectionHTML = conceptDiagramHTML
        ? (() => {
            tocItems.push({ id: 'exam-flow-concept', label: getReadingSectionLabel(conceptDiagramHTML, '圖解') });
            return `<div id="exam-flow-concept" data-reading-section class="reading-anchor-block">${conceptDiagramHTML}</div>`;
        })()
        : '';

    const prepSectionHTML = (callouts.length > 0 || prepSections.length > 0)
        ? (() => {
            tocItems.push({ id: 'exam-flow-prep', label: '檢查前評估與前置條件' });
            return `
                <section id="exam-flow-prep" data-reading-section class="exam-flow-section">
                    <div class="exam-flow-section-heading">
                        <div>
                            <h2>檢查前評估與前置條件</h2>
                            <p>本節整理排檢條件、禁忌症、行政流程與檢查前需要先確認的事項。</p>
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
            `;
        })()
        : '';

    const clinicalSectionHTML = clinicalSections.length > 0
        ? (() => {
            tocItems.push({ id: 'exam-flow-clinical', label: '原理、適應症與判讀重點' });
            return `
                <section id="exam-flow-clinical" data-reading-section class="exam-flow-section">
                    <div class="exam-flow-section-heading">
                        <div>
                            <h2>原理、適應症與判讀重點</h2>
                            <p>本節整理檢查目的、臨床適應症與影像判讀時需要掌握的主要線索。</p>
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
            `;
        })()
        : '';

    const patientSectionHTML = (patientBlocks.length > 0 || guide.evidence)
        ? (() => {
            tocItems.push({ id: 'exam-flow-patient', label: '病人衛教與檢後說明' });
            return `
                <section id="exam-flow-patient" data-reading-section class="exam-flow-section">
                    <div class="exam-flow-section-heading">
                        <div>
                            <h2>病人衛教與檢後說明</h2>
                            <p>本節整理病人配合事項、返家說明與常用衛教重點。</p>
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
            `;
        })()
        : '';

    const readingTocHTML = getReadingTocHTML(tocItems, {
        title: data.title,
        note: '依序閱讀前置條件、判讀重點與衛教內容。',
        ariaLabel: `${data.title} 閱讀索引`
    });

    return `
        <article class="exam-article exam-flow-page is-immersive-reading">
            <section class="exam-flow-hero">
                <div class="exam-flow-hero-grid">
                    <div class="exam-flow-copy">
                        <span class="exam-flow-eyebrow">${guide.eyebrow || '檢查資訊'}</span>
                        <h1>${guide.title || data.title}</h1>
                        <p class="exam-flow-lead">${guide.lead || data.subtitle || ''}</p>
                        ${renderInsightCards(heroCards, 'exam-flow-insight-grid', 'exam-flow-insight-card')}
                    </div>
                    <aside class="exam-flow-panel">
                        ${data.timeArchitecture?.steps ? `
                            <div class="exam-flow-panel-block">
                                <span class="exam-flow-panel-kicker">檢查流程</span>
                                ${data.timeArchitecture.mode === 'article'
                                    ? `<div class="prose">${(data.timeArchitecture.article || []).map((p) => `<p>${p}</p>`).join('')}</div>`
                                    : `<div class="prose">
                                        ${data.timeArchitecture.steps.map((step) => `
                                            <p><strong>${step.label}</strong>：${step.value}</p>
                                        `).join('')}
                                    </div>`
                                }
                                ${data.timeArchitecture.note ? `<p class="exam-flow-note">${data.timeArchitecture.note}</p>` : ''}
                            </div>
                        ` : ''}
                        ${guide.tellUs ? `
                            <div class="exam-flow-panel-block">
                                <span class="exam-flow-panel-kicker">檢查前需主動告知</span>
                                <div class="exam-flow-alert">
                                    <strong>以下情況應於排檢或報到前說明</strong>
                                    <p>${guide.tellUs}</p>
                                </div>
                            </div>
                        ` : ''}
                        ${supportLinks.length > 0 ? `
                            <div class="exam-flow-panel-block">
                                <span class="exam-flow-panel-kicker">相關頁面</span>
                                <div class="guide-nav-grid is-compact">
                                    ${supportLinks.map((item) => renderGuideNavCard(item)).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </aside>
                </div>
            </section>

            <div class="immersive-reading-shell${readingTocHTML ? ' has-reading-toc' : ''}">
                ${readingTocHTML}
                <div class="immersive-reading-body">
                    ${conceptSectionHTML}
                    ${prepSectionHTML}
                    ${clinicalSectionHTML}
                    ${patientSectionHTML}
                </div>
            </div>
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
    const tocItems = [];

    const conceptSectionHTML = conceptDiagramHTML
        ? (() => {
            tocItems.push({ id: 'learning-concept', label: getReadingSectionLabel(conceptDiagramHTML, '圖解') });
            return `<div id="learning-concept" data-reading-section class="reading-anchor-block">${conceptDiagramHTML}</div>`;
        })()
        : '';

    const calloutSectionHTML = callouts.length > 0
        ? (() => {
            tocItems.push({ id: 'learning-callouts', label: '重要原則' });
            return `
                <section id="learning-callouts" data-reading-section class="learning-section">
                    <div class="learning-section-heading">
                        <div>
                            <h2>重要原則</h2>
                            <p>本節整理該主題最重要的概念、限制與注意事項。</p>
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
            `;
        })()
        : '';

    const specialSectionHTML = specialHTML
        ? (() => {
            tocItems.push({ id: 'learning-tools', label: '工具' });
            return `
                <section id="learning-tools" data-reading-section class="learning-section">
                    <div class="learning-section-heading">
                        <div>
                            <h2>工具</h2>
                            <p>需要計算、核對或查詢時，可先使用本節工具。</p>
                        </div>
                    </div>
                    <div class="learning-special-surface">
                        ${specialHTML}
                    </div>
                </section>
            `;
        })()
        : '';

    const detailSectionHTML = sections.length > 0
        ? (() => {
            tocItems.push({ id: 'learning-details', label: '詳細內容' });
            return `
                <section id="learning-details" data-reading-section class="learning-section">
                    <div class="learning-section-heading">
                        <div>
                            <h2>詳細內容</h2>
                            <p>本節依主題整理主要內容，作為後續查閱與複習的主體。</p>
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
            `;
        })()
        : '';

    const qaItems = qaBlocks.flatMap((block) => block.items || []);
    const qaSectionsHTML = qaItems.length > 0
        ? (() => {
            tocItems.push({ id: 'learning-qa', label: '常見問題' });
            return `
                <section id="learning-qa" data-reading-section class="learning-section">
                    <div class="learning-section-heading">
                        <div>
                            <h2>常見問題</h2>
                            <p>集中整理該主題常見疑問與標準說明方式。</p>
                        </div>
                    </div>
                    <div class="qa-section">
                        ${qaItems.map((item) => `
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
            `;
        })()
        : '';

    const galleryHTML = buildGalleryHTML(data);
    if (galleryHTML) {
        tocItems.push({ id: 'learning-gallery', label: '圖卡' });
    }

    const readingTocHTML = getReadingTocHTML(tocItems, {
        title: data.title,
        note: '依序閱讀重要原則、工具與詳細內容。',
        ariaLabel: `${data.title} 閱讀索引`
    });

    return `
        <article class="exam-article learning-guide-page is-immersive-reading" data-guide-key="${key}">
            <section class="learning-hero">
                <div class="learning-hero-grid">
                    <div class="learning-hero-copy">
                        <span class="learning-eyebrow">${guide.eyebrow || ''}</span>
                        <h1>${guide.title || data.title}</h1>
                        <p class="learning-hero-lead">${guide.lead || data.subtitle || ''}</p>
                        ${renderInsightCards(heroCards, 'learning-focus-grid', 'learning-focus-card')}
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
                                <span class="learning-panel-kicker">延伸閱讀</span>
                                <div class="guide-nav-grid">
                                    ${nextSteps.map((item) => renderGuideNavCard(item)).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </aside>
                </div>
            </section>

            <div class="immersive-reading-shell${readingTocHTML ? ' has-reading-toc' : ''}">
                ${readingTocHTML}
                <div class="immersive-reading-body">
                    ${conceptSectionHTML}
                    ${calloutSectionHTML}
                    ${specialSectionHTML}
                    ${detailSectionHTML}
                    ${qaSectionsHTML}
                    ${galleryHTML ? `<div id="learning-gallery" data-reading-section class="reading-anchor-block">${galleryHTML}</div>` : ''}
                </div>
            </div>
        </article>
    `;
}

function buildHomeHubHTML() {
    const resourceLinks = [
        ...HOME_HUB_CONFIG.resourceLinks,
        {
            href: 'https://gen-lang-client-0435635260.web.app/',
            kicker: '輔助工具',
            title: 'AI 文字辨識',
            desc: '提供圖片或文件文字擷取功能，適合於資料整理與初步轉錄時使用。',
            variant: 'info'
        },
        {
            href: 'https://nminfo-examp.web.app/',
            kicker: '流程展示',
            title: '核醫排檢 DEMO',
            desc: '用於展示核醫排檢流程與排程邏輯之範例頁面。',
            variant: 'success'
        }
    ];

    return `
        <article class="home-hub">
            <div class="immersive-reading-shell home-reading-shell">
                <div class="immersive-reading-body">
            <section id="home-hub-overview" data-reading-section class="home-hero">
                <div class="home-hero-grid">
                    <div class="home-hero-copy">
                        <span class="home-eyebrow">首頁總覽</span>
                        <p class="home-hero-kicker">整理範圍：核醫臨床工作、文件管理與支援工具</p>
                        <h1>本站彙整核醫科臨床工作中常用之檢查、治療、文件與支援工具。</h1>
                        <p class="home-hero-lead">頁面依工作情境與臨床主題編排，供查閱檢查原理、治療流程、作業規範、衛教內容與輔助工具之用。</p>
                        <div class="prose">
                            <p>主體內容依核醫科工作主題分區，例如 PET、心臟、內分泌、骨骼與腎泌尿、胃腸肝膽、神經、肺部感染及治療單元，以維持與臨床工作流程相近的閱讀順序。</p>
                            <p>各檢查頁面整理適應症、前置條件、時間安排、影像重點與常見作業問題，作為執行前查核與教學複習之參考。</p>
                            <p>除檢查與治療內容外，站內亦收錄病人溝通與衛教、藥物與劑量工具、輻射防護、文件管理與品質控制等支援頁面，供日常工作與教學查閱。</p>
                        </div>
                    </div>
                    <figure class="home-hero-art">
                        <img src="assets/home/home-hero-stand-guide.webp" alt="核醫科主題首頁主視覺，結合 PET/CT、gamma camera 與原子結構元素。" loading="eager" decoding="async">
                    </figure>
                </div>
            </section>

            <section id="home-hub-resources" data-reading-section class="home-section">
                <div class="home-section-heading">
                    <div>
                        <h2>常用工具與外部連結</h2>
                        <p>本區整合常用工具、子網站與外部資源，供直接連結至所需頁面。</p>
                    </div>
                </div>
                <div class="home-card-grid">
                    ${resourceLinks.map((item) => renderHomeResourceLink(item)).join('')}
                </div>
            </section>
                </div>
            </div>
        </article>
    `;
}

function buildI131TreatmentHTML(data) {
    const guide = getReaderGuideData('I131');
    const heroCards = getHeroInsightCards(guide);
    const conceptDiagramHTML = buildConceptDiagramHTML(getConceptDiagramData('I131'));
    const inlineGuideImageHTML = getInlineGuideImageHTML('I131');
    const tocItems = [];

    const conceptSectionHTML = conceptDiagramHTML
        ? (() => {
            tocItems.push({ id: 'i131-concept', label: getReadingSectionLabel(conceptDiagramHTML, '圖解') });
            return `<div id="i131-concept" data-reading-section class="reading-anchor-block">${conceptDiagramHTML}</div>`;
        })()
        : '';

    tocItems.push(
        { id: 'i131-goals', label: 'I-131 治療目的' },
        { id: 'i131-prepare', label: '治療前要確認的事' },
        { id: 'i131-journey', label: '病人會經過哪些步驟' },
        { id: 'i131-safety', label: '病安提醒與工作核對' }
    );

    const readingTocHTML = getReadingTocHTML(tocItems, {
        title: data.title,
        note: '依序閱讀治療目的、前置準備、流程與病安核對。',
        ariaLabel: `${data.title} 閱讀索引`
    });

    return `
        <article class="exam-article i131-therapy-page is-immersive-reading">
            <section class="i131-hero">
                <div class="i131-hero-copy">
                    <span class="i131-eyebrow">${guide?.eyebrow || 'I-131 治療資訊'}</span>
                    <h1>${guide?.title || data.title}</h1>
                    <p class="i131-hero-lead">${guide?.lead || data.subtitle}</p>
                    ${renderInsightCards(heroCards, 'i131-insight-grid', 'i131-insight-card')}
                    ${inlineGuideImageHTML}
                </div>
                <div class="i131-hero-grid is-panel-only">
                    <aside class="i131-hero-panel">
                        <div class="i131-panel-block">
                            <span class="i131-panel-kicker">重要提醒</span>
                            <div class="prose">
                                ${data.safetyAlerts.slice(0, 2).map((item) => `
                                    <p><strong>${getHomeLevelLabel(item.level)}｜${item.title}</strong>：${item.desc}</p>
                                `).join('')}
                            </div>
                        </div>
                        <div class="i131-panel-block">
                            <span class="i131-panel-kicker">住院與放行重點</span>
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

            <div class="immersive-reading-shell${readingTocHTML ? ' has-reading-toc' : ''}">
                ${readingTocHTML}
                <div class="immersive-reading-body">
            ${conceptSectionHTML}

            <section id="i131-goals" data-reading-section class="i131-section">
                <div class="i131-section-heading">
                    <div>
                        <h2>I-131 治療目的</h2>
                        <p>整理不同臨床情境下的 I-131 治療目的與治療策略。</p>
                    </div>
                </div>
                <div class="prose">
                    ${data.treatmentGoals.map((item) => `
                        <p><strong>${item.kicker}｜${item.title}</strong>：${item.desc}</p>
                    `).join('')}
                </div>
            </section>

            <section id="i131-prepare" data-reading-section class="i131-section">
                <div class="i131-section-heading">
                    <div>
                        <h2>治療前要確認的事</h2>
                        <p>治療前需確認適應症、停藥與低碘準備，以及住院與返家安排。</p>
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

            <section id="i131-journey" data-reading-section class="i131-section">
                <div class="i131-section-heading">
                    <div>
                        <h2>病人會經過哪些步驟</h2>
                        <p>依時間順序整理治療前、住院中與出院後的流程與注意事項。</p>
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

            <section id="i131-safety" data-reading-section class="i131-section">
                <div class="i131-section-heading">
                    <div>
                        <h2>病安提醒與工作核對</h2>
                        <p>集中整理排程、值班與照護過程中需要反覆核對的病安重點。</p>
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
                            <span class="i131-panel-kicker">工作核對清單</span>
                            <ul class="checklist">
                                ${data.staffChecklist.map((item) => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        ${getI131CalcHTML()}
                    </div>
                </div>
            </section>
                </div>
            </div>
        </article>
    `;
}

function getTherapyPageBlocks(key, data) {
    return [
        ...(data.content || []),
        ...(ACADEMIC_FIGURE_SUPPLEMENTS[key] || []),
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
    const tocItems = [];

    const conceptSectionHTML = conceptDiagramHTML
        ? (() => {
            tocItems.push({ id: `${key}-concept`, label: getReadingSectionLabel(conceptDiagramHTML, '圖解') });
            return `<div id="${key}-concept" data-reading-section class="reading-anchor-block">${conceptDiagramHTML}</div>`;
        })()
        : '';

    const evaluationSectionHTML = remainingCallouts.length > 0
        ? (() => {
            tocItems.push({ id: `${key}-evaluation`, label: '治療前評估' });
            return `
                <section id="${key}-evaluation" data-reading-section class="i131-section">
                    <div class="i131-section-heading">
                        <div>
                            <h2>治療前評估</h2>
                            <p>整理適應症、禁忌症、風險與治療前需要完成的評估項目。</p>
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
            `;
        })()
        : '';

    const careSectionHTML = sections.length > 0
        ? (() => {
            tocItems.push({ id: `${key}-care`, label: '治療流程、照護與衛教' });
            return `
                <section id="${key}-care" data-reading-section class="i131-section">
                    <div class="i131-section-heading">
                        <div>
                            <h2>治療流程、照護與衛教</h2>
                            <p>依序整理治療流程、照護重點、返家注意事項與跨團隊合作內容。</p>
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
            `;
        })()
        : '';

    const readingTocHTML = getReadingTocHTML(tocItems, {
        title: data.title,
        note: '依序閱讀圖解、治療前評估與照護安排。',
        ariaLabel: `${data.title} 閱讀索引`
    });

    return `
        <article class="exam-article i131-therapy-page therapy-page is-immersive-reading">
            <section class="i131-hero">
                <div class="i131-hero-copy">
                    <span class="i131-eyebrow">${guide?.eyebrow || data.title}</span>
                    <h1>${guide?.title || data.title}</h1>
                    <p class="i131-hero-lead">${guide?.lead || data.subtitle || ''}</p>
                    ${renderInsightCards(heroCards, 'i131-insight-grid', 'i131-insight-card')}
                    ${inlineGuideImageHTML}
                </div>
                <div class="i131-hero-grid is-panel-only">
                    <aside class="i131-hero-panel">
                        ${data.timeArchitecture?.steps ? `
                            <div class="i131-panel-block">
                                <span class="i131-panel-kicker">治療流程</span>
                                <div class="prose">
                                    ${data.timeArchitecture.steps.map((step) => `
                                        <p><strong>${step.label}</strong>：${step.value}</p>
                                    `).join('')}
                                </div>
                                ${data.timeArchitecture.note ? `<p class="therapy-note">${data.timeArchitecture.note}</p>` : ''}
                            </div>
                        ` : ''}
                        ${featuredCallouts.length > 0 ? `
                            <div class="i131-panel-block">
                                <span class="i131-panel-kicker">重要提醒</span>
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

            <div class="immersive-reading-shell${readingTocHTML ? ' has-reading-toc' : ''}">
                ${readingTocHTML}
                <div class="immersive-reading-body">
                    ${conceptSectionHTML}
                    ${evaluationSectionHTML}
                    ${careSectionHTML}
                </div>
            </div>
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
    const protocolData = window.NMINFO_PROTOCOL_DATA || {};
    if (key === 'MPI') {
        const toBulletList = (items) => {
            if (!Array.isArray(items)) return [];
            return items.map((item) => {
                if (Array.isArray(item)) {
                    const [label, value] = item;
                    return `${label}：${value}`;
                }
                return item;
            });
        };

        const tc99m = protocolData.MPI_Tc99m || null;
        const tl201 = protocolData.MPI_Tl201 || null;
        if (!tc99m && !tl201) return null;

        const mergeField = (field) => [
            ...(tc99m ? ['【Tc-99m SPECT】', ...toBulletList(tc99m[field])] : []),
            ...(tl201 ? ['【Tl-201】', ...toBulletList(tl201[field])] : [])
        ];

        return {
            title: 'MPI（Tl-201 / Tc-99m）',
            source: [tc99m?.source, tl201?.source].filter(Boolean).join('；'),
            acquisition: mergeField('acquisition'),
            processing: mergeField('processing'),
            qc: mergeField('qc'),
            pitfalls: mergeField('pitfalls'),
            localFixedFields: mergeField('localFixedFields'),
            note: '此摘要同頁整合 Tc-99m 與 Tl-201 protocol；實際執行仍以院內核准 SOP 與機型參數為準。'
        };
    }
    return protocolData[key] || null;
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

function toProtocolBulletList(items) {
    if (!Array.isArray(items) || !items.length) return '';
    const normalized = items.map((item) => {
        if (Array.isArray(item)) {
            const [label, value] = item;
            return `${label}：${value}`;
        }
        return item;
    }).filter(Boolean);
    if (!normalized.length) return '';
    return `<ul>${normalized.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function buildMpiProtocolNarrativeSummaryHTML() {
    const protocolData = window.NMINFO_PROTOCOL_DATA || {};
    const tc99m = protocolData.MPI_Tc99m || null;
    const tl201 = protocolData.MPI_Tl201 || null;
    if (!tc99m && !tl201) return '';

    const sourceText = [
        tc99m?.source,
        'ASNC SPECT Stress Protocols and Tracers update (2016)',
        'EANM procedural guideline for radionuclide myocardial perfusion imaging with SPECT/SPECT-CT (2015)',
        'ASNC SPECT MPI Quality Metrics (2023) 與 Reporting Quick Reference (2024)',
        'ESC Chronic Coronary Syndrome guideline (2019) 與 AHA/ACC Chest Pain guideline (2021)'
    ].filter(Boolean).join('；');

    return `
        <section class="protocol-summary-section" aria-labelledby="protocol-summary-title">
            <div class="protocol-summary-heading">
                <span class="protocol-summary-kicker">MPI 教科書式 Protocol</span>
                <div>
                    <h2 id="protocol-summary-title">MPI（Tl-201 / Tc-99m）教科書式 protocol 與 stress 方法</h2>
                    <p>國際指引的共同核心是：<strong>先確認 stress 有效，再判讀缺損</strong>。若 stress 條件失效（咖啡因、methylxanthine、未達負荷或藥物干擾），後面的 perfusion 分數與風險分層會被系統性低估。</p>
                    <p class="protocol-summary-note">此段改為敘事型教學，將 stress 路徑、tracer 時序、QC 與陷阱放在同一個臨床決策框架。</p>
                </div>
            </div>
            <div class="protocol-summary-stack">
                <section class="content-section">
                    <h3 class="section-heading">1. Stress method：先選對壓力路徑，再談影像判讀</h3>
                    <div class="prose">
                        <p>可運動且 ECG 可判讀者，優先使用運動壓力；不能運動、運動能力不足或 ECG 不可判讀者，再選藥物壓力。Vasodilator stress（regadenoson / adenosine / dipyridamole）前，應先完成咖啡因與 methylxanthine 核對；這是避免假陰性的第一道閘門。</p>
                        <div class="protocol-table-wrap">
                            <table class="protocol-table">
                                <thead>
                                    <tr>
                                        <th>Stress 方法</th>
                                        <th>國際常用做法（教學版）</th>
                                        <th>常見不適與現場處理</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>運動 stress</td>
                                        <td>Bruce / Modified Bruce 常見；目標常用預測最大心率 85% 或症狀限制終點；tracer 在峰值負荷附近注射。</td>
                                        <td>胸悶、喘、腿部疲勞；達終止條件立即停止，依 ACLS 與科內急救路徑處置。</td>
                                    </tr>
                                    <tr>
                                        <td>Regadenoson</td>
                                        <td>0.4 mg IV bolus（固定劑量）；常於 20–30 秒注入 tracer；可搭配低強度運動降低腸肝背景。</td>
                                        <td>潮紅、頭痛、胸悶、呼吸不適；症狀持續可用 aminophylline 逆轉（常見總量上限 250 mg）。</td>
                                    </tr>
                                    <tr>
                                        <td>Adenosine</td>
                                        <td>140 μg/kg/min 持續 6 分鐘；常於第 3 分鐘注入 tracer。</td>
                                        <td>胸悶、AV block、呼吸不適；症狀重或傳導異常時停藥並處置。</td>
                                    </tr>
                                    <tr>
                                        <td>Dipyridamole</td>
                                        <td>0.56 mg/kg 4 分鐘輸注（部分中心用 0.84 mg/kg 延長方案）；常於輸注後 3–5 分鐘注 tracer。</td>
                                        <td>頭痛、噁心、頭暈、胸悶；必要時 aminophylline 緩慢 IV 逆轉並持續監測。</td>
                                    </tr>
                                    <tr>
                                        <td>Dobutamine</td>
                                        <td>10→20→30→40 μg/kg/min，每 3 分鐘遞增；必要時加 atropine。</td>
                                        <td>心悸、血壓上升、心律不整；需全程 ECG/血壓監測並嚴格終止條件。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Vasodilator 路徑常見禁忌包含活動性支氣管痙攣、未置放節律器的高階 AV block、顯著低血壓；dobutamine 路徑則要特別注意不穩定心律、嚴重高血壓與活動性缺血。</p>
                    </div>
                </section>
                <section class="content-section">
                    <h3 class="section-heading">2. Tracer protocol：Tc-99m 與 Tl-201 的時序邏輯不同</h3>
                    <div class="prose">
                        <p><strong>Tc-99m（sestamibi / tetrofosmin）</strong>多用於常規 CAD 缺血與風險分層；<strong>Tl-201</strong>保留再分佈與存活性問題。重點不只在劑量大小，而是注射到收像的時間差、體位、是否需要延遲補拍與 AC/NAC 對照是否一致。</p>
                        <div class="protocol-table-wrap">
                            <table class="protocol-table">
                                <thead>
                                    <tr>
                                        <th>Protocol 類型</th>
                                        <th>常見流程重點</th>
                                        <th>臨床用途</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tc-99m 1-day rest/stress（或 stress/rest）</td>
                                        <td>常採低-高劑量比例（常見至少約 1:3），避免 shine-through；stress 與 rest 的注射與收像時間需固定記錄。</td>
                                        <td>常規 CAD 缺血評估與風險分層。</td>
                                    </tr>
                                    <tr>
                                        <td>Tc-99m 2-day protocol</td>
                                        <td>每次使用中高活度，降低同日殘留交互影響；適合高 BMI 或需要提升計數品質者。</td>
                                        <td>畫質要求高、同日流程不易完成或需減少交互干擾的個案。</td>
                                    </tr>
                                    <tr>
                                        <td>Tl-201 stress-redistribution</td>
                                        <td>stress 後早期相 + 3–4 小時延遲相，必要時 24 小時延遲或 reinjection；時間點紀錄必須嚴格。</td>
                                        <td>viability 與缺血/瘢痕鑑別。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>新一代實務會把 SPECT/CT AC、prone/upright 補拍、raw cine 檢查放入同一套流程控管，以降低軟組織衰減與 subdiaphragmatic activity 的判讀偏差。</p>
                    </div>
                </section>
                <section class="content-section">
                    <h3 class="section-heading">3. QC 與常見陷阱：影像漂亮不等於結論可靠</h3>
                    <div class="prose">
                        <p>MPI 報告品質主要取決於三層 QC：<strong>stress adequacy</strong>、<strong>gating/運動品質</strong>、<strong>AC 對位品質</strong>。實務判讀應固定先看 raw projection 與 cine，再看 perfusion map、gated function 與定量分數。</p>
                        ${tc99m ? `
                            <h4>Tc-99m MPI 技術核對清單</h4>
                            ${toProtocolBulletList(tc99m.qc)}
                        ` : ''}
                        ${tl201 ? `
                            <h4>Tl-201 MPI 技術核對清單</h4>
                            ${toProtocolBulletList(tl201.qc)}
                        ` : ''}
                        <h4>報告最小必填（建議）</h4>
                        <ul>
                            <li>stress type、壓力品質與終止條件（含 caffeine/methylxanthine 核對）。</li>
                            <li>tracer、活度、注射與收像時間差（rest/stress 各自獨立記錄）。</li>
                            <li>是否使用 CT AC、是否有 AC/NAC 不一致、是否加做 prone/upright/延遲補拍。</li>
                            <li>灌流缺損型態（可逆、固定、部分可逆）與高風險訊號（如 TID、stress EF 下降）。</li>
                            <li>影像限制與可能 artifact，避免過度二分法結論。</li>
                        </ul>
                    </div>
                </section>
            </div>
            <p class="protocol-summary-source">主要來源：${sourceText}</p>
        </section>
    `;
}

function buildProtocolSummaryHTML(key, data = null) {
    if (key === 'MPI') {
        return buildMpiProtocolNarrativeSummaryHTML();
    }

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

    const isExpanded = data?.protocolSummaryDisplay === 'expanded';
    const stackHTML = isExpanded
        ? sections.map((section) => `
            <section class="protocol-summary-card progressive-section">
                <h3>${section.title}</h3>
                <div class="protocol-summary-body">
                    ${section.body}
                </div>
            </section>
        `).join('')
        : sections.map((section, index) => `
            <details class="protocol-summary-details progressive-section"${index === 0 ? ' open' : ''}>
                <summary>
                    <span>${section.title}</span>
                </summary>
                <div class="protocol-summary-body">
                    ${section.body}
                </div>
            </details>
        `).join('');

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
                ${stackHTML}
            </div>
            ${protocol.source ? `<p class="protocol-summary-source">主要來源：${protocol.source}</p>` : ''}
        </section>
    `;
}

function buildContentHTML(key, data) {
    if (!data) return '<div class="empty-state"><h3>⚠️ 找不到資料</h3></div>';
    // Handle redirect
    if (data.redirect) {
        const redirectKey = data.redirect;
        const redirectData = EXAM_DATA[redirectKey];
        if (redirectData) {
            data = {
                ...redirectData,
                title: data.title || redirectData.title,
                subtitle: data.subtitle || redirectData.subtitle,
                category: data.category || redirectData.category,
                redirect: null
            };
            key = redirectKey;
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
    const shouldShowReaderGuide = !data.isDosageCalc && !data.isCalendar && !data.disableReaderGuide;
    const shouldShowConceptDiagram = !data.isDosageCalc && !data.isCalendar && !data.disableConceptDiagram;
    const readerGuideHTML = shouldShowReaderGuide ? buildReaderGuideHTML(key, data) : '';
    const conceptDiagramHTML = shouldShowConceptDiagram ? buildConceptDiagramHTML(getConceptDiagramData(key)) : '';

    // Header
    let headerHTML = `
        <header class="article-intro">
            <h1 class="content-title">${data.title}</h1>
            ${data.subtitle ? `<p class="content-subtitle">${data.subtitle}</p>` : ''}
            ${imgHTML}
        </header>
    `;

    // Time Architecture
    let timeHTML = '';
    if (data.timeArchitecture && data.timeArchitecture.steps) {
        if (data.timeArchitecture.mode === 'article') {
            timeHTML = `
                <div class="flow-timeline-wrapper">
                    <div class="flow-timeline-title">檢查流程</div>
                    <div class="prose">
                        ${(data.timeArchitecture.article || []).map((p) => `<p>${p}</p>`).join('')}
                    </div>
                    ${data.timeArchitecture.note ? `<div class="flow-note">${data.timeArchitecture.note}</div>` : ''}
                </div>
            `;
        } else {
            const stepsProse = data.timeArchitecture.steps.map((s) => `
                <p><strong>${s.label}</strong>：${s.value}</p>
            `).join('');

            timeHTML = `
                <div class="flow-timeline-wrapper">
                    <div class="flow-timeline-title">檢查流程</div>
                    <div class="prose">
                        ${stepsProse}
                    </div>
                    ${data.timeArchitecture.note ? `<div class="flow-note">${data.timeArchitecture.note}</div>` : ''}
                </div>
            `;
        }
    }

    const galleryHTML = buildGalleryHTML(data);
    const specialHTML = buildSpecialContentHTML(key, data);
    const protocolSummaryHTML = buildProtocolSummaryHTML(key, data);
    const useImmersiveReading = shouldUseImmersiveReading(key, data);

    // Content blocks
    const allContentBlocks = getCombinedContentBlocks(key, data);

    let blocksHTML = '';
    if (allContentBlocks.length > 0) {
        const contentTocItems = useImmersiveReading ? getReadingTocItems(allContentBlocks, 'section', { includeInfoBoxes: false }) : [];
        const renderedBlocks = allContentBlocks
            .map((block, index) => useImmersiveReading
                ? renderImmersiveContentBlock(block, index)
                : renderContentBlock(block, index))
            .join('');

        if (useImmersiveReading) {
            const tocItems = [];
            const immersiveSections = [];

            if (timeHTML) {
                tocItems.push({ id: 'time-architecture', label: '檢查流程' });
                immersiveSections.push(`<div id="time-architecture" data-reading-section class="reading-anchor-block">${timeHTML}</div>`);
            }

            if (conceptDiagramHTML) {
                tocItems.push({ id: 'concept-diagram', label: getReadingSectionLabel(conceptDiagramHTML, '圖解') });
                immersiveSections.push(`<div id="concept-diagram" data-reading-section class="reading-anchor-block">${conceptDiagramHTML}</div>`);
            }

            if (protocolSummaryHTML) {
                tocItems.push({ id: 'protocol-summary', label: getReadingSectionLabel(protocolSummaryHTML, '技術摘要') });
                immersiveSections.push(`<div id="protocol-summary" data-reading-section class="reading-anchor-block">${protocolSummaryHTML}</div>`);
            }

            if (specialHTML) {
                tocItems.push({ id: 'special-tools', label: getReadingSectionLabel(specialHTML, '工具') });
                immersiveSections.push(`<div id="special-tools" data-reading-section class="reading-anchor-block">${specialHTML}</div>`);
            }

            tocItems.push(...contentTocItems);
            immersiveSections.push(renderedBlocks);

            if (galleryHTML) {
                tocItems.push({ id: 'guide-gallery', label: '圖卡' });
                immersiveSections.push(`<div id="guide-gallery" data-reading-section class="reading-anchor-block">${galleryHTML}</div>`);
            }

            const readingTocHTML = getReadingTocHTML(tocItems, {
                title: data.title,
                note: '可直接跳到流程、技術摘要或正文段落。',
                ariaLabel: `${data.title} 閱讀索引`
            });

            blocksHTML = `<div class="immersive-reading-shell${readingTocHTML ? ' has-reading-toc' : ''}">
                ${readingTocHTML}
                <div class="immersive-reading-body">${immersiveSections.join('')}</div>
            </div>`;
        } else {
            blocksHTML = renderedBlocks;
        }
    }

    const emphasizeReadableText = true;

    return `
        <article class="exam-article${useImmersiveReading ? ' is-immersive-reading' : ''}${emphasizeReadableText ? ' module-text-lg' : ''}">
            ${headerHTML}
            ${readerGuideHTML}
            ${blocksHTML}
            ${useImmersiveReading ? '' : `${conceptDiagramHTML}${timeHTML}${protocolSummaryHTML}${specialHTML}${galleryHTML}`}
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
        decorateLightboxTargets(container);
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        window.setTimeout(() => {
            if (container.style.transform === 'translateY(0px)' || container.style.transform === 'translateY(0)') {
                container.style.transform = '';
            }
        }, 180);
        container.setAttribute('aria-busy', 'false');

        // Attach special listeners
        if (viewName === 'HomeHub') attachHomeHubListeners();
        attachGuideNavListeners();
        if (viewName === 'Calendar') initCalendar();
        if (container.querySelector('#dosage-calc-btn')) attachDosageCalcListeners();
        if (data && data.isI131Calc) attachI131Listeners();

        jumpContentToTop(container);
        initReadingToc(container);
        runMotherSiteMotion(viewName, container);

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
    animateSidebarSelection(viewName);
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
    toggle?.setAttribute('aria-expanded', String(isOpen));

    if (!items) return;

    if (!canUseGsapMotion()) {
        items.classList.toggle('open', isOpen);
        return;
    }

    window.gsap.killTweensOf(items);
    if (isOpen) {
        items.classList.add('open');
        window.gsap.fromTo(items, {
            height: 0,
            autoAlpha: 0,
            y: -6
        }, {
            height: items.scrollHeight,
            autoAlpha: 1,
            y: 0,
            duration: 0.28,
            ease: 'power2.out',
            onComplete: () => {
                items.style.height = 'auto';
            }
        });
        return;
    }

    window.gsap.fromTo(items, {
        height: items.offsetHeight,
        autoAlpha: 1,
        y: 0
    }, {
        height: 0,
        autoAlpha: 0,
        y: -6,
        duration: 0.22,
        ease: 'power2.inOut',
        onComplete: () => {
            items.classList.remove('open');
        }
    });
}

function setSidebarOpen(isOpen) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const toggle = document.getElementById('mobile-menu-toggle');
    const open = Boolean(isOpen);

    sidebar?.classList.toggle('open', open);
    sidebar?.classList.toggle('is-open', open);
    overlay?.classList.toggle('active', open);
    overlay?.classList.toggle('is-open', open);
    toggle?.classList.toggle('active', open);
    toggle?.classList.toggle('is-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('is-mobile-menu-open', open);

    if (sidebar) {
        sidebar.style.left = open ? '0px' : '';
        sidebar.style.transform = open ? 'translateX(0)' : '';
    }
    if (overlay) {
        overlay.style.display = open ? 'block' : '';
    }
}

function ensureImageLightbox() {
    if (document.getElementById('image-lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'image-lightbox';
    lightbox.className = 'image-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
        <div class="image-lightbox-shell">
            <button type="button" class="image-lightbox-close image-lightbox-dismiss" aria-label="關閉圖片">✕</button>
            <figure class="image-lightbox-figure">
                <img class="image-lightbox-media" src="" alt="">
                <figcaption class="image-lightbox-caption"></figcaption>
            </figure>
            <p class="image-lightbox-hint">點空白處關閉</p>
        </div>
    `;
    document.body.appendChild(lightbox);

    const media = lightbox.querySelector('.image-lightbox-media');
    const caption = lightbox.querySelector('.image-lightbox-caption');

    const closeLightbox = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('is-lightbox-open');
        media.setAttribute('src', '');
        media.setAttribute('alt', '');
        caption.textContent = '';
    };

    const openLightbox = (target) => {
        if (!target) return;
        media.setAttribute('src', target.dataset.lightboxSrc || '');
        media.setAttribute('alt', target.dataset.lightboxAlt || '');
        caption.textContent = target.dataset.lightboxCaption || target.dataset.lightboxAlt || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('is-lightbox-open');
    };

    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-lightboxable="true"]');
        if (trigger) {
            event.preventDefault();
            openLightbox(trigger);
            return;
        }

        if (
            lightbox.classList.contains('is-open') &&
            (
                event.target === lightbox ||
                event.target.closest('.image-lightbox-dismiss') ||
                !event.target.closest('.image-lightbox-figure')
            )
        ) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && event.target.closest('[data-lightboxable="true"]')) {
            event.preventDefault();
            openLightbox(event.target.closest('[data-lightboxable="true"]'));
            return;
        }

        if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });
}

function registerLightboxTarget(element, caption = '') {
    const image = element?.querySelector('img');
    if (!element || !image) return;

    const resolvedCaption = caption || image.getAttribute('alt') || '放大圖片';
    element.dataset.lightboxable = 'true';
    element.dataset.lightboxSrc = image.getAttribute('src') || '';
    element.dataset.lightboxAlt = image.getAttribute('alt') || '';
    element.dataset.lightboxCaption = resolvedCaption;
    element.classList.add('zoomable-frame');
    if (!element.hasAttribute('tabindex')) element.tabIndex = 0;
    element.setAttribute('role', 'button');
    element.setAttribute('aria-label', `放大檢視：${resolvedCaption}`);
    image.classList.add('zoomable-media');
    image.setAttribute('draggable', 'false');
}

function decorateLightboxTargets(root = document) {
    root.querySelectorAll('.home-hero-art, .inline-guide-figure, .therapy-figure-card, .guide-step-card').forEach((element) => {
        const captionText = element.querySelector('figcaption, .guide-step-desc, .therapy-figure-header h4')?.textContent?.trim() || '';
        registerLightboxTarget(element, captionText);
    });
}

(function initNavigation() {
    initSidebarMotion();
    ensureImageLightbox();

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
    document.getElementById('sidebar-nav')?.addEventListener('click', (event) => {
        const btn = event.target.closest('.nav-item');
        if (!btn) return;
        navigateToView(btn.dataset.category);
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
        toggle.setAttribute('aria-expanded', 'false');
        toggle.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            const isOpen = !(sidebar?.classList.contains('open') || sidebar?.classList.contains('is-open'));
            setSidebarOpen(isOpen);
        });
    }
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    });
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
