// Data Store: 20+ Exams with Strict Clinical Logic
const EXAM_DATA = {
    // --- Admin & QC ---
    Calendar: {
        title: "核醫行事曆 (Calendar)",
        miniClass: { indications: "年度與國定假日。", principle: "員工專用版 | 行政與開診資訊。" },
        adminRules: [
            {
                title: "📅 月曆視圖 (Calendar View)",
                content: `
                <div id="calendar-app-container">
                    <!-- Controls -->
                    <div class="cal-controls">
                        <h3 id="cal-title" class="cal-month-title">2026 年 1 月</h3>
                        <div class="cal-nav">
                            <button onclick="changeMonth(-1)" class="cal-nav-btn">◀ 上個月</button>
                            <button onclick="changeMonth(0)" class="cal-nav-btn">今日</button>
                            <button onclick="changeMonth(1)" class="cal-nav-btn">下個月 ▶</button>
                        </div>
                    </div>
                    
                    <!-- Month Grid -->
                    <div id="cal-grid" class="cal-grid"></div>

                    <!-- Legend -->
                     <div class="cal-legend">
                        <div class="legend-item"><span class="dot status-closed"></span>停診</div>
                        <div class="legend-item"><span class="dot status-half"></span>半日診</div>
                        <div class="legend-item"><span class="status-badge" style="background:#74c0fc; color:#1e3799; padding:2px 6px; border-radius:4px;">正常</span> 正常開診</div>
                     </div>
                     
                     <!-- Stats Info -->
                     <div class="cal-info-box">
                        <ul>
                           <li><strong>年度總休假：</strong>120 天</li>
                           <li><strong>總開診日：</strong>278.5 天</li>
                        </ul>
                        <p class="note">點擊日期可查看詳細資訊 (包含補假/彈性放假說明)。</p>
                     </div>
                </div>

                <!-- Detail Modal (Hidden by default) -->
                <div id="cal-modal" class="cal-modal-overlay hidden" onclick="closeCalModal()">
                    <div class="cal-modal-content" onclick="event.stopPropagation()">
                        <div class="modal-header">
                            <h3 id="modal-date">2025-01-01</h3>
                            <button class="close-btn" onclick="closeCalModal()">✕</button>
                        </div>
                        <div id="modal-body" class="modal-body">
                            <!-- Helper Content Injected Here -->
                        </div>
                    </div>
                </div>
                `
            }
        ],
        patientEducation: []
    },

    // --- 📚 核醫小學堂 ---
    NMBasics: {
        title: "核醫原理：深入解析 (Professional Logic)",
        miniClass: {
            indications: "了解核醫功能性造影的獨特價值。",
            principle: "<strong>Tracer Principle (示蹤劑原理)</strong>：利用微量放射性同位素標記在特定生理路徑的藥物上，如同在人體內派入「間諜」，觀察其分佈與代謝。"
        },
        adminRules: [
            {
                title: "🧪 生理代謝 vs 解剖結構",
                content: `
                <div class="concept-card">
                    <p>核醫影像反映的是<strong>「活體生理功能的變化」</strong>，往往發生在解剖結構改變之前。</p>
                    <ul class="doc-list">
                        <li><strong>CT/MRI (Anatomy):</strong> 看到結構的破壞 (如骨折線、腫瘤的大小)。</li>
                        <li><strong>NM (Physiology):</strong> 看到細胞活性的改變 (如骨轉移早期的成骨作用增加、感染處的白血球聚集)。</li>
                    </ul>
                </div>`
            },
            {
                title: "📷 核醫設備家族",
                content: `
                <div class="explain-box">
                    <h4 style="color: var(--primary-dark); margin-bottom: 1rem;">🔹 Gamma Camera (平面造影)</h4>
                    <p>最基本的核醫相機，拍攝<strong>平面影像</strong>（像拍 X 光）。</p>
                    <ul class="doc-list">
                        <li><strong>Collimator (準直儀):</strong> 像濾光柵欄，只允許垂直進入的射線通過，決定影像解析度。</li>
                        <li><strong>Crystal (閃爍晶體):</strong> 通常為 NaI(Tl)，將 Gamma 射線轉換為可見光。</li>
                        <li><strong>PMT (光電倍增管):</strong> 將微弱光訊號放大成電子訊號，經電腦重組為影像。</li>
                    </ul>
                    
                    <h4 style="color: var(--primary-dark); margin: 1.5rem 0 1rem;">🔹 SPECT (單光子斷層掃描)</h4>
                    <p>Gamma Camera 繞著病人轉一圈，拍攝多角度影像後重組成<strong>3D 立體影像</strong>，可以看到深度。</p>
                    <p><em>比喻：平面照片 vs 3D 模型。</em></p>
                    
                    <h4 style="color: var(--primary-dark); margin: 1.5rem 0 1rem;">🔹 SPECT/CT (融合影像)</h4>
                    <p>一台機器結合 SPECT + CT，<strong>同時</strong>拍攝功能影像與解剖影像，可以精確定位病灶在哪個器官、哪個位置。</p>
                    <p><em>比喻：Google Maps 的衛星圖 + 街景的疊加。</em></p>
                    
                    <h4 style="color: var(--primary-dark); margin: 1.5rem 0 1rem;">🔹 PET/CT (正子斷層掃描)</h4>
                    <p>使用特殊的<strong>正子同位素</strong> (如 F-18)，當正子遇到電子會產生<strong>兩道反向的 511 keV 光子</strong>，同時偵測兩側光子來定位，解析度比 SPECT 更高。</p>
                    <p>主要用於<strong>癌症分期與追蹤</strong>，因為腫瘤細胞代謝旺盛會大量攝取 FDG（類葡萄糖）。</p>
                </div>`
            },
            {
                title: "☢️ 輻射劑量對照表 (有效劑量)",
                content: `
                <p style="margin-bottom: 1rem;">資料來源：<strong>ICRP Publication 128</strong> (國際放射防護委員會) 與 <strong>美國放射學會 (ACR)</strong></p>
                <table class='quick-dial-table'>
                    <thead>
                        <tr><th>檢查項目</th><th>有效劑量 (mSv)</th><th>相當於背景輻射</th></tr>
                    </thead>
                    <tbody>
                        <tr><td colspan="3" style="background: var(--primary-bg); font-weight: 800;">X-ray / CT</td></tr>
                        <tr><td>胸部 X 光</td><td>0.02</td><td>3 天</td></tr>
                        <tr><td>乳房攝影 (Mammography)</td><td>0.4</td><td>2 個月</td></tr>
                        <tr><td>胸部 CT</td><td>7</td><td>2.3 年</td></tr>
                        <tr><td>腹部 CT</td><td>10</td><td>3.3 年</td></tr>
                        <tr><td>全身 CT</td><td>15-20</td><td>5-6 年</td></tr>
                        
                        <tr><td colspan="3" style="background: var(--primary-bg); font-weight: 800; padding-top: 1rem;">核醫檢查</td></tr>
                        <tr><td>骨骼掃描 (Bone Scan)</td><td>4-6</td><td>1.5-2 年</td></tr>
                        <tr><td>心肌灌注 (MPI)</td><td>9-12</td><td>3-4 年</td></tr>
                        <tr><td>甲狀腺掃描 (Tc-99m)</td><td>1-2</td><td>4-8 個月</td></tr>
                        <tr><td>腎臟掃描 (DMSA/DTPA)</td><td>1-3</td><td>4-12 個月</td></tr>
                        <tr><td>FDG PET/CT (全身)</td><td>14-20</td><td>5-7 年</td></tr>
                        <tr><td>腦部灌流 (Brain SPECT)</td><td>5-7</td><td>2 年</td></tr>
                        
                        <tr><td colspan="3" style="background: #f0f9ff; padding-top: 1rem;"><strong>參考值：</strong>台灣天然背景輻射約 <strong>3 mSv/年</strong></td></tr>
                    </tbody>
                </table>
                <p class="note" style="margin-top: 1rem; font-size: 0.95rem; color: var(--text-muted);">
                    💡 <strong>重點：</strong>單次核醫檢查的輻射劑量通常與 1-2 次 CT 相當，遠低於會造成確定性效應的劑量 (>100 mSv)。
                </p>`
            }
        ],
        patientEducation: []
    },

    PatientQA: {
        title: "常見 Q&A 話術 (一目了然)",
        miniClass: {
            indications: "建立專業且溫暖的溝通。",
            principle: "直接閱讀，簡單明瞭。"
        },
        adminRules: [
            {
                title: "💬 完整話術參考",
                content: `
                <div class="qa-simple">
                    <div class="qa-row">
                        <div class="qa-num">Q1</div>
                        <div class="qa-content">
                            <div class="qa-question">打這個藥會有輻射嗎？對身體有沒有害？</div>
                            <div class="qa-answer">
                                <p><strong>背景：</strong>診斷用劑量極低 (約等於做幾次 CT)，半衰期短。</p>
                                <p><strong>話術：</strong>「阿姨/大哥放心，我們用的藥量非常微量，停留時間很短。您回家後<strong>多喝水、多上廁所</strong>，殘留的藥物很快就會排掉，對身體沒有傷害的。」</p>
                            </div>
                        </div>
                    </div>

                    <div class="qa-row">
                        <div class="qa-num">Q2</div>
                        <div class="qa-content">
                            <div class="qa-question">打顯影劑會不會過敏？我做 CT 有過敏過！</div>
                            <div class="qa-answer">
                                <p><strong>背景：</strong>核醫用的是「同位素」，不是 CT 的「含碘顯影劑」，兩者完全不同。</p>
                                <p><strong>話術：</strong>「我們用的藥跟電腦斷層的顯影劑<strong>完全不一樣</strong>喔！它幾乎不會引起過敏，非常溫和。不過為了安全，如果您覺得皮膚癢癢的，隨時跟我們說。」</p>
                            </div>
                        </div>
                    </div>

                    <div class="qa-row">
                        <div class="qa-num">Q3</div>
                        <div class="qa-content">
                            <div class="qa-question">為什麼別科照相 10 分鐘，你們要等 3-4 小時？</div>
                            <div class="qa-answer">
                                <p><strong>背景：</strong>藥物需要時間參與生理代謝（如骨頭吸收鈣、心肌吸收血流）。</p>
                                <p><strong>話術：</strong>「這就是我們檢查特別的地方！這個藥需要時間讓您的器官『吃進去』，就像種樹澆水要等土吸收一樣。現在馬上照是看不到東西的，<strong>等待是為了讓影像更清楚</strong>，這段時間您可以輕鬆休息一下。」</p>
                            </div>
                        </div>
                    </div>

                    <div class="qa-row">
                        <div class="qa-num">Q4</div>
                        <div class="qa-content">
                            <div class="qa-question">這是什麼檢查？</div>
                            <div class="qa-answer">
                                <p><strong>背景：</strong>病人常常搞不清楚自己要做什麼檢查，尤其核醫名稱複雜。</p>
                                <p><strong>話術：</strong>「您今天要做的是<strong>[檢查名稱]</strong>。簡單來說，這個檢查是用來看您的<strong>[器官/目的]</strong>運作正不正常。醫師會根據影像來判斷有沒有問題。如果您有拿到檢查單，上面也會寫檢查的名稱。」</p>
                                <p><small>💡 <em>小提示：依據實際檢查項目填入，例如「骨骼掃描，用來看骨頭有沒有發炎或轉移」。</em></small></p>
                            </div>
                        </div>
                    </div>

                    <div class="qa-row">
                        <div class="qa-num">Q5</div>
                        <div class="qa-content">
                            <div class="qa-question">我有糖尿病可以做嗎？</div>
                            <div class="qa-answer">
                                <p><strong>背景：</strong>一般檢查沒差。唯獨 <strong>FDG PET</strong> 會受高血糖競爭影響，需控制血糖 < 150-200 mg/dL。</p>
                                <p><strong>話術：</strong>「大部分檢查都沒有影響。如果您是做 <strong>正子掃描 (PET)</strong>，因為我們的藥水有葡萄糖成分，這就像是請您的細胞吃糖果，如果血糖太高，細胞就吃不下了，影像會看不清楚。所以才需要您配合空腹和控制血糖。」</p>
                            </div>
                        </div>
                    </div>
                </div>`
            }
        ],
        patientEducation: []
    },

    EmergencyCart: {
        title: "急救車管理 (Emergency Cart)",
        miniClass: { indications: "", principle: "" },
        adminRules: [
            { title: "每日任務", content: "<ul class='doc-list checklist'><li>核對號碼鎖 (Lock No.) 相符</li><li>填寫每日檢查紀錄表</li></ul>" },
            { title: "盤點排程", content: "<div class='inventory-grid'><div class='inventory-card' style='background:var(--bg-card); border-color:var(--primary-color); color:var(--text-main);'><div class='inventory-months'>3月 / 9月</div><div class='inventory-type'>單位自行盤點 (Self Check)</div></div><div class='inventory-card' style='background:var(--primary-bg); border-color:var(--primary-color);'><div class='inventory-months'>6月 / 12月</div><div class='inventory-type'>聯同藥劑科盤點 (Joint Check)</div></div></div>" },
            { title: "注意", content: "<span class='alert-text'>檢查效期：即期品需提早更換！</span>" }
        ],
        patientEducation: []
    },


    // --- PET Center ---
    PET: {
        title: "FDG PET/CT",
        miniClass: {
            indications: "癌症分期 (Staging)、療效評估 (Response)、復發偵測 (Restaging)。常見於乳癌、淋巴癌、大腸直腸癌、肺癌、食道癌、頭頸癌。",
            principle: "<strong>Warburg Effect</strong>：腫瘤細胞利用糖解作用 (Glycolysis) 的速率遠高於正常細胞。FDG 為葡萄糖類似物，會被細胞以此機制攝取並「卡」在細胞內 (Metabolic Trapping)，藉此成像。"
        },
        timeArchitecture: {
            steps: [
                { label: "靜脈注射", value: "FDG" },
                { label: "前置等待 (靜躺)", value: "60 分鐘" },
                { label: "上機攝影", value: "20-30 分鐘" }
            ],
            note: "⚠️ 若醫師評估需照「延遲影像 (Delayed Scan)」，需第一次照完後再等待 1~2 小時 才上機。"
        },
        adminRules: [
            { title: "每日截止", content: "<span class='alert-text'>15:30 前完成訂藥 & 電話通知隔日病人。</span>" },
            { title: "進房時間", content: "病人於 <strong>打藥前 15 分鐘</strong> 再進入注射室躺好 (不須太早進去)。" },
            {
                title: "顯影劑",
                content: `
                <ul class='doc-list'>
                    <li><strong>泡製：</strong> 1 劑泡 500cc 水。</li>
                    <li><strong>Cr 過高：</strong> <span class='alert-text'>顯影劑改為「喝水」</span> (並修改給藥紀錄單)</li>
                </ul>`
            },
            { title: "NG管病人", content: "請家屬自備 <strong>灌食空針</strong>。" },
            { title: "⚠️ 淋巴癌 (Lymphoma)", content: "<div class='lymphoma-alert'><strong>如為淋巴癌病人，請務必在排程表上註記！</strong></div>" },
            { title: "排檢必問", content: "<ul class='doc-list checklist'><li>近2週有無做過 <strong>鋇劑</strong> 檢查？</li><li>可否平躺 20-30 分鐘？</li></ul>" },
            { title: "藥物劑量 (FDG Rule)", content: "<ul class='doc-list'><li>標準上限：<strong>15 mCi</strong></li><li>體重 > 80kg：<span class='alert-text'>排程表用紅筆標示</span> (需調整劑量)</li><li>體重 &lt; 40kg：需請示主任 (通常 7 mCi)</li></ul>" }
        ],
        patientEducation: [
            { title: "檢查流程", content: "打藥後需閉眼、靜躺於微光房間，避免走動、說話。" },
            { title: "衣物準備", content: "檢查時必須卸除身上所有金屬物品。" }
        ]
    },

    POSLUMA: {
        title: "攝護腺癌 PSMA PET (POSLUMA)",
        miniClass: {
            indications: "攝護腺癌分期、生化復發 (Biochemical recurrence) 偵測。",
            principle: "<strong>PSMA Targeting</strong>：F-18 Flotufolastat (POSLUMA) 會專一性結合攝護腺癌細胞表面的 PSMA (Prostate-Specific Membrane Antigen)，即使是微小淋巴轉移也能清晰成像。"
        },
        timeArchitecture: {
            steps: [
                { label: "靜脈注射", value: "POSLUMA" },
                { label: "等待", value: "60 分鐘" },
                { label: "上機攝影", value: "約 20 分鐘" }
            ],
            note: "相較於傳統骨骼掃描，PSMA PET 對早期骨轉移與淋巴轉移的偵測率顯著更高。"
        },
        adminRules: [
            { title: "水分補充", content: "<span class='alert-text'>注射前與等待期間需補充 500cc 水分 (若無禁忌)。</span>" },
            { title: "排尿", content: "上機前務必排空膀胱，以減少膀胱內尿液放射性干擾。" }
        ],
        patientEducation: [
            { title: "無須禁食", content: "此檢查不需禁食，可正常用餐。" },
            { title: "喝水", content: "請配合多喝水，有助於影像清晰。" }
        ]
    },

    // --- Endocrine ---
    Thyroid: {
        title: "甲狀腺掃描 (Thyroid)",
        miniClass: { indications: "甲狀腺機能亢進 (Graves' disease)、甲狀腺結節功能評估、異位性甲狀腺。", principle: "<strong>主動運輸 (Active Transport)</strong>：利用甲狀腺濾泡細胞上的鈉碘幫浦 (Na+/I- Symporter, NIS)，將類似碘離子的 Tc-99m Pertechnetate 攝取入細胞內。" },
        timeArchitecture: {
            steps: [
                { label: "靜脈注射", value: "Tc-99m" },
                { label: "等待", value: "15-20 分鐘" },
                { label: "上機攝影", value: "約 15 分鐘" }
            ]
        },
        adminRules: [{ title: "排程", content: "通常隨到隨做。" }],
        patientEducation: [{ title: "無須禁食", content: "避免近期服用含碘食物/藥物。" }]
    },
    Parathyroid: {
        title: "副甲狀腺掃描 (Para)",
        miniClass: { indications: "原發性或次發性副甲狀腺機能亢進 (Hyperparathyroidism)，定位副甲狀腺腺瘤 (Adenoma)。", principle: "<strong>雙相清洗 (Dual Phase Washout)</strong>：Tc-99m MIBI 會同時被甲狀腺與副甲狀腺攝取，但甲狀腺清除速度較快。早期相 (Early) 兩者皆亮，延遲相 (Delayed) 僅保留在功能亢進的副甲狀腺組織中。" },
        timeArchitecture: {
            steps: [
                { label: "Phase 1", value: "10 分" },
                { label: "Phase 2", value: "2 小時" },
                { label: "Phase 3", value: "4 小時" }
            ],
            note: "全程約 4.5 小時。"
        },
        adminRules: [
            { title: "固定時段", content: "<strong>10:00</strong>" },

        ],
        patientEducation: [{ title: "預留時間", content: "需多次造影，請預留一整天。" }]
    },
    NP59: {
        title: "腎上腺皮質掃描 (NP-59)",
        miniClass: { indications: "庫興氏症候群 (Cushing's)、康氏症 (Conn's)、腎上腺偶發瘤 (Incidentaloma) 功能評估。", principle: "<strong>膽固醇合成前驅物</strong>：NP-59 為膽固醇類似物，會被腎上腺皮質攝取作為合成激素的原料。依攝取型態可區分功能性腫瘤或增生。" },
        timeArchitecture: {
            steps: [
                { label: "注射日", value: "Day 0" },
                { label: "掃描", value: "Day 3-5 (至 Day 7)" }
            ]
        },
        adminRules: [

            { title: "前置用藥", content: "服用 Lugol's Solution (SSKI) 保護甲狀腺。<ul class='doc-list'><li>檢查前 2 天開始吃</li><li>共服用 7-10 天</li></ul>" }
        ],
        patientEducation: [{ title: "時程", content: "需多次往返醫院，請依指示時間報到。" }]
    },
    I131: {
        title: "I-131 治療 (Smart Scheduler)",
        miniClass: { indications: "分化型甲狀腺癌 (DTC) 術後殘餘組織消融 (Remnant Ablation) 或轉移病灶治療。", principle: "<strong>Beta 射線破壞</strong>：I-131 同時釋放 Beta 射線 (治療，射程短破壞力強) 與 Gamma 射線 (診斷)。甲狀腺細胞與癌細胞會主動攝取碘，進而被 Beta 射線破壞。" },
        timeArchitecture: null,
        adminRules: [
            { title: "嚴格規範", content: "<div class='hard-rule-box'><div class='hard-rule-header'>⚠️ 排程核心規定 (Hard Rules)</div><ul><li><strong>入院日：</strong>僅限週二、週五</li><li><strong>床位：</strong>每週上限 4 人</li><li><strong>前置：</strong>需 3 週前預約</li></ul></div>" },
            { title: "禁忌", content: "<span class='alert-text'>懷孕絕對不可執行 (需驗孕)！</span>" }
        ],
        patientEducation: [
            { title: "低碘飲食級別", content: "共 4 週準備：<br>• 前 2 週：低碘飲食<br>• <strong>後 2 週：極低碘飲食</strong>" },
            { title: "隔離", content: "需住院隔離至輻射劑量符合出院標準。" }
        ]
    },
    Ra223: {
        title: "Ra-223 攝護腺癌治療 (Xofigo)",
        miniClass: {
            indications: "去勢抗性攝護腺癌 (CRPC) 合併骨轉移 (無內臟轉移者)。",
            principle: "<strong>Alpha 粒子導彈</strong>：Ra-223 化學性質擬態「鈣離子」，會被骨轉移病灶大量攝取。其釋放的 Alpha 粒子能量極高但射程極短 (<10個細胞)，能精準殺死癌細胞且不傷及周圍正常骨髓。"
        },
        timeArchitecture: {
            steps: [
                { label: "靜脈注射", value: "慢推 1 分鐘" },
                { label: "觀察", value: "無須隔離" }
            ],
            note: "療程為每 4 週注射一次，共 6 次。"
        },
        adminRules: [
            { title: "防護特性", content: "Alpha 射線這張紙就能擋住，體外輻射極低，<strong>無須隔離</strong>，做完即可回家。" },
            { title: "排泄物處理", content: "主要經由腸道 (糞便) 排泄。沖馬桶時請蓋上馬桶蓋沖兩次，手部清潔要徹底。" }
        ],
        patientEducation: [
            { title: "副作用", content: "常見輕微腹瀉、噁心，對骨髓抑制較輕微。" },
            { title: "居家防護", content: "如廁衛生需特別注意 (避免糞便沾染)。" }
        ]
    },
    I131WBS: {
        title: "I-131 全身掃描 (WBS)",
        miniClass: { indications: "分化型甲狀腺癌 (DTC) 術後追蹤，偵測是否有遠端轉移或局部復發。", principle: "<strong>全身偵測</strong>：利用 I-131 會被甲狀腺癌細胞攝取的特性，進行全身掃描以發現轉移病灶 (如肺、骨轉移)。" },
        timeArchitecture: {
            steps: [{ label: "服藥日", value: "口服" }, { label: "掃描日", value: "第 7 天" }]
        },
        adminRules: [{ title: "排程", content: "需安排兩次：服藥日 + 掃描日。" }],
        patientEducation: [{ title: "低碘飲食", content: "檢查前需配合低碘飲食 2-4 週。" }]
    },
    MIBG: {
        title: "腎上腺髓質掃描 (MIBG)",
        miniClass: { indications: "嗜鉻細胞瘤 (Pheochromocytoma)、神經母細胞瘤 (Neuroblastoma)。", principle: "<strong>類腎上腺素 (Norepinephrine Analog)</strong>：MIBG 結構類似腎上腺素，會被腎上腺髓質及交感神經末梢的儲存顆粒攝取並儲存。" },
        timeArchitecture: {
            steps: [{ label: "注射後", value: "等待 24-48hr" }, { label: "掃描", value: "30-40 分" }]
        },
        adminRules: [{ title: "前置", content: "確認病人已服用 Lugol's solution。" }],
        patientEducation: [{ title: "甲狀腺保護", content: "<span class='alert-text'>口服 Lugol's solution 共 7 天 (前2天開始吃)。</span>" }]
    },

    // --- Cardiac / Lymph / Circulation ---
    MPI_Tl201: {
        title: "心肌灌流掃描 - Thallium-201",
        miniClass: {
            indications: "冠狀動脈心臟病 (CAD) 診斷、<strong>存活心肌 (Viability) 評估</strong>、術前心臟風險評估。",
            principle: "<strong>Na+/K+-ATPase 主動運輸</strong>：Tl-201 結構類似鉀離子，會被具有正常細胞膜功能的心肌細胞主動攝取。缺血心肌在壓力下攝取減少，但經過數小時「再分佈 (Redistribution)」後可恢復，代表仍有存活心肌；梗塞心肌則持續缺損。<br><strong>參考：</strong>ASNC Guidelines (2018)。"
        },
        timeArchitecture: {
            steps: [
                { label: "💉 壓力相 (Stress)", value: "打 Persantin或跑步" },
                { label: "📷 壓力影像", value: "約15-20分" },
                { label: "⏳ 再分佈 (Redistribution)", value: "等待 3-4 小時" },
                { label: "📷 休息影像", value: "約20-25分" }
            ],
            note: "Tl-201 半衰期長 (73hr)，可利用再分佈現象評估存活心肌。"
        },
        adminRules: [

            { title: "優點", content: "可評估<strong>存活心肌 (Viability)</strong>，適合冠狀動脈繞道手術 (CABG) 前評估。" },
            { title: "缺點", content: "影像品質較 Tc-99m 差 (低能量)、輻射劑量較高。" },
            { title: "每日任務", content: "<span class='alert-text'>15:30 聯絡明日 MPI 病人，提醒準時報到。</span>" },
            { title: "詢問體重", content: "務必詢問病人體重 (計算藥量)。" },
            { title: "運動測試", content: "若開單為 Exercise (跑步機)，務必評估<strong>跌倒風險</strong>。" }
        ],
        patientEducation: [
            { title: "禁食咖啡因", content: "<span class='alert-text'>檢查前 24 小時禁止咖啡、茶、可樂、巧克力。</span>" },
            { title: "時間", content: "全程約需 <strong>4-5 小時</strong>，請預留時間。" },
            { title: "藥物反應", content: "血管擴張劑可能引起短暫胸悶、臉紅、頭暈，數分鐘內消退。" }
        ]
    },
    MPI_Tc99m: {
        title: "心肌灌流掃描 - Tc-99m Sestamibi",
        miniClass: {
            indications: "冠狀動脈心臟病 (CAD) 診斷、心肌梗塞後評估、術前風險評估。本院常規使用。",
            principle: "<strong>粒線體膜電位</strong>：Tc-99m Sestamibi 被正常心肌細胞的粒線體攝取並滯留。<strong>無明顯再分佈</strong>，需分別注射壓力相與休息相藥物來比較。<br><strong>參考：</strong>ASNC Guidelines (2018)。"
        },
        timeArchitecture: {
            steps: [
                { label: "💉 休息相 (Rest)", value: "低劑量 8-10 mCi" },
                { label: "🍳 高脂餐", value: "米漿/茶葉蛋" },
                { label: "📷 休息影像", value: "15-20 分" },
                { label: "💉 壓力相 (Stress)", value: "高劑量 24-30 mCi" },
                { label: "🍳 高脂餐", value: "再吃一次" },
                { label: "📷 壓力影像", value: "15-20 分" }
            ],
            note: "⚠️ 本院採用 <strong>1-Day Protocol (先 Rest 後 Stress)</strong>。全程約 4-5 小時。"
        },
        adminRules: [

            { title: "每日任務", content: "<span class='alert-text'>15:30 聯絡明日 MPI 病人，提醒準時報到。</span>" },
            { title: "詢問體重", content: "務必詢問病人體重 (計算藥量)。" },
            { title: "運動測試", content: "若開單為 Exercise (跑步機)，務必評估<strong>跌倒風險</strong>。" }
        ],
        patientEducation: [
            {
                title: "🍳 病人衛教：高脂餐的目的",
                content: `
                <div class="education-box">
                    <p><strong>為什麼要吃米漿/茶葉蛋？</strong></p>
                    <p>Tc-99m Sestamibi 會<strong>暫時停留在肝臟與膽囊</strong>。進食高脂肪食物可刺激膽囊收縮，將藥物排入腸道，<span class='alert-text'>減少肝臟放射性對心肌影像的干擾</span>，讓影像更清晰。</p>
                    <p><em>如果病人不吃，下壁心肌可能被肝臟遮蔽，造成假陽性。</em></p>
                </div>
                `
            },
            { title: "禁食咖啡因", content: "<span class='alert-text'>檢查前 24 小時禁止咖啡、茶、可樂、巧克力 (含咖啡因食物)。</span> 咖啡因會拮抗 Adenosine/Regadenoson 的血管擴張作用。" },
            { title: "藥物反應", content: "血管擴張劑 (Regadenoson/Adenosine) 可能引起短暫胸悶、臉紅、頭暈、噁心，通常數分鐘內消退。" }
        ]
    },
    MUGA: {
        title: "心室功能檢查 (MUGA)",
        miniClass: { indications: "評估左心室射出分率 (LVEF)，常見於化療藥物 (如 Doxorubicin) 使用前後的心臟毒性監測。", principle: "<strong>血池平衡 (Equilibrium Blood Pool)</strong>：先用 Pyrophosphate (PYP) 活化紅血球，再打 Tc-99m 進行體內標記。利用心電圖閘控 (ECG Gating) 技術，計算心臟收縮與舒張時的放射性計數變化來求得 LVEF。" },
        timeArchitecture: {
            steps: [
                { label: "標記紅血球", value: "PYP + Tc99m" },
                { label: "上機攝影", value: "約 20 分鐘" }
            ]
        },
        adminRules: [{ title: "排程", content: "常規排程。需確認病人導管位置 (Port-A, CVP) 是否暢通，最好打周邊血管。" }],
        patientEducation: [{ title: "無須禁食", content: "可正常飲食。" }]
    },
    Venography: {
        title: "放射性核種靜脈攝影 (Radionuclide Venography)",
        miniClass: { indications: "評估深部靜脈血栓 (DVT)、靜脈瓣膜功能不全。", principle: "<strong>靜脈回流路徑</strong>：將 Tc-99m MAA 打入足背靜脈，模擬靜脈血回流至心臟的過程。若有血栓阻塞，可見側枝循環 (Collateral circulation) 或流動中斷。" },
        timeArchitecture: { steps: [{ label: "注射並攝影", value: "動態流程" }] },
        adminRules: [{ title: "準備", content: "需準備兩條止血帶 (Tourniquet)。" }],
        patientEducation: [{ title: "過程", content: "會在腳上打針，由下往上照。" }]
    },
    Lymphedema: {
        title: "淋巴水腫攝影 (Lymphedema)",
        miniClass: { indications: "肢體淋巴水腫 (Lymphedema)、鑑別淋巴阻塞或靜脈水腫。", principle: "<strong>組織間隙引流</strong>：將極小顆粒的同位素打入皮下組織間隙，觀察其是否能順利進入微淋巴管並回流至淋巴結。阻塞時可見真皮逆流 (Dermal backflow) 現象。" },
        timeArchitecture: { steps: [{ label: "注射", value: "皮下" }, { label: "攝影", value: "動態 + 延遲 (1-2hr)" }] },
        adminRules: [{ title: "時間", content: "需較長造影時間。" }],
        patientEducation: [{ title: "疼痛", content: "指間注射較痛，請忍耐一下。" }]
    },
    SLN: {
        title: "前哨淋巴結造影 (Sentinel Lymph Node Mapping)",
        miniClass: { indications: "乳癌、黑色素瘤手術前，定位第一顆淋巴結 (前哨淋巴結)。", principle: "<strong>淋巴引流第一站</strong>：腫瘤細胞若發生淋巴轉移，會優先到達前哨淋巴結。術前定位並在術中取出化驗，若無轉移則可保留其餘淋巴結，減少術後水腫副作用。" },
        timeArchitecture: { steps: [{ label: "注射", value: "皮下" }, { label: "按摩/攝影", value: "約 30 分" }] },
        adminRules: [

            { title: "時機", content: "通常安排在手術前執行。" }
        ],
        patientEducation: [{ title: "標記", content: "皮膚上會畫記號，請勿洗掉。" }]
    },

    // --- GI System ---
    Gastric: {
        title: "胃排空掃描 (Gastric)",
        miniClass: { indications: "糖尿病胃輕癱 (Gastroparesis)、腸胃道蠕動異常、不明原因噁心嘔吐。", principle: "<strong>雙相排空 (Solid/Liquid Phase)</strong>：利用 Tc-99m SC 標記的固體食物 (如煎蛋土司)，定量測量胃部在一系列時間點將食物排入十二指腸的百分比 (T1/2)。" },
        timeArchitecture: { steps: [{ label: "吃試餐", value: "Tc-99m SC" }, { label: "攝影", value: "每小時照1次 (共4hr)" }] },
        adminRules: [

            { title: "準備", content: "土司 2 片 + 生雞蛋 1 顆 + 柳橙汁。" }
        ],
        patientEducation: [
            { title: "禁食", content: "<span class='alert-text'>禁食 8 小時以上。</span>" },
            { title: "停藥", content: "停用促進/抑制腸胃蠕動藥物。" }
        ]
    },
    GIBleed: {
        title: "腸胃道出血 (GI Bleed)",
        miniClass: { indications: "下消化道出血定位 (Lower GI Bleeding)、梅克爾憩室 (Meckel's Diverticulum)。", principle: "<strong>溢漏偵測</strong>：標記病人的紅血球 (Tc-99m RBC)，當血管有破洞出血時，標記的紅血球會隨血液流出血管外並聚集在腸道內，形成亮點。" },
        timeArchitecture: { steps: [{ label: "PYP", value: "30分" }, { label: "Tc99m", value: "動態攝影" }] },
        adminRules: [
            { title: "兩階段", content: "PYP -> 等30分 -> Tc-99m。" },
            { title: "醫師確認", content: "<ul class='doc-list checklist'><li>向醫師確認：病人是否需禁食？</li></ul>" }
        ],
        patientEducation: [{ title: "配合", content: "可能需長時間造影 (甚至 24hr)。" }]
    },
    Liver: {
        title: "肝脾臟掃描 (Liver/Spleen)",
        miniClass: { indications: "慢性肝炎、肝硬化、脾臟腫大、脾臟外傷、副脾 (Accessory spleen) 定位。", principle: "<strong>網狀內皮系統吞噬 (Phagocytosis)</strong>：Tc-99m Phytate/Sulfur Colloid 會被肝臟的 Kupffer cells 及脾臟的網狀內皮細胞吞噬。肝硬化時肝攝取減少，反而脾臟與骨髓攝取增加 (Colloid shift)。" },
        timeArchitecture: { steps: [{ label: "靜脈注射", value: "Tc-99m" }, { label: "等待", value: "15-20分" }, { label: "攝影", value: "20-30分" }] },
        adminRules: [{ title: "排程", content: "常規。" }],
        patientEducation: [{ title: "無須禁食", content: "可正常飲食。" }]
    },
    Biliary: {
        title: "肝膽道掃描 (Hepatobiliary Scintigraphy / HIDA)",
        miniClass: { indications: "急性膽囊炎 (Acute Cholecystitis)、膽道阻塞、嬰兒膽道閉鎖 (Biliary Atresia)。", principle: "<strong>肝細胞排泄</strong>：類似膽紅素代謝路徑，藥物被肝細胞攝取後排入膽管，最後進入膽囊與十二指腸。若膽囊一直未顯影，暗示膽囊管 (Cystic duct) 阻塞 (急性膽囊炎)。" },
        timeArchitecture: { steps: [{ label: "靜脈注射", value: "Tc-99m DISIDA" }, { label: "動態攝影", value: "60 分鐘" }, { label: "必要時", value: "延遲至 4hr" }] },
        adminRules: [{ title: "小兒", content: "膽道閉鎖嬰兒需服用 Phenobarbital。" }],
        patientEducation: [{ title: "禁食", content: "建議空腹 (至少 4hr) 以利膽囊擴張，由醫師決定。" }]
    },
    Salivary: {
        title: "唾液腺閃爍攝影 (Salivary Gland Scintigraphy)",
        miniClass: { indications: "乾燥症 (Sjogren's syndrome)、口乾症、唾液腺管阻塞。", principle: "<strong>分泌與排泄</strong>：Tc-99m Pertechnetate 會被唾液腺體攝取 (Concentration Phase)。給予酸刺激 (Lemon Juice) 後，正常腺體會快速將唾液排出 (Excretion Phase)，藉此評估功能。" },
        timeArchitecture: {
            steps: [
                { label: "動態攝影", value: "注射 TC-99m" },
                { label: "給予刺激", value: "含酸梅 (Lemon)" },
                { label: "繼續攝影", value: "15 分週" }
            ],
            note: "檢查前不可先吃酸梅！"
        },
        adminRules: [
            { title: "固定時段", content: "<strong>14:20</strong> (當日第1位) / <strong>15:00</strong> (當日第2位)" }
        ],
        patientEducation: [
            { title: "自備物品", content: "<span class='alert-text'>請自備「一包無籽酸梅」與一瓶水。</span>" },
            { title: "流程", content: "剛開始不要含酸梅，聽到指示後再含入。" }
        ]
    },

    // --- Bone / Renal / GU ---
    Bone: {
        title: "全身骨骼掃描 (Bone)",
        miniClass: { indications: "癌症骨轉移、骨髓炎 (Osteomyelitis)、壓力性骨折、人工關節鬆脫。", principle: "<strong>化學吸附 (Chemisorption)</strong>：Tc-99m MDP 會與骨骼的氫氧基磷灰石 (Hydroxyapatite) 晶體結合。成骨作用 (Osteoblastic activity) 越強或血流越豐富的地方，攝取越高 (Hot spot)。" },
        timeArchitecture: { steps: [{ label: "靜脈注射", value: "Tc-99m MDP" }, { label: "等待", value: "2-4 小時" }, { label: "攝影", value: "20-30 分" }] },
        adminRules: [{ title: "等待", content: "可外出用餐。" }],
        patientEducation: [{ title: "多喝水", content: "打藥後大量喝水排尿，減少膀胱輻射劑量並提高影像清晰度。" }]
    },
    DMSA: {
        title: "腎皮質掃描 (DMSA)",
        miniClass: { indications: "急性腎盂腎炎 (Acute Pyelonephritis)、腎結痂 (Scarring)、分腎功能 (Split Renal Function)。", principle: "<strong>腎皮質固定</strong>：Tc-99m DMSA 會結合在腎小管細胞 (Proximal Tubules)，長時間停留。發炎或結痂處因細胞受損無法攝取，呈現缺損 (Cold defect)。" },
        timeArchitecture: { steps: [{ label: "靜脈注射", value: "Tc-99m DMSA" }, { label: "等待", value: "2-3 小時" }, { label: "SPECT", value: "20-30 分" }] },
        adminRules: [{ title: "鎮靜", content: "幼兒可能需要。" }],
        patientEducation: [{ title: "無須禁食", content: "家長請安撫小孩。" }]
    },
    DTPA: {
        title: "腎利尿掃描 (DTPA)",
        miniClass: { indications: "評估腎絲球過濾率 (GFR)、鑑別水腎 (Hydronephrosis) 為阻塞性或功能性。", principle: "<strong>過濾與排泄</strong>：Tc-99m DTPA 經由腎絲球過濾 (Glomerular Filtration) 排出。配合利尿劑 (Lasix)，可區分積水是因為「塞住流不掉」還是單純「水庫太大但有在流」。" },
        timeArchitecture: {
            steps: [
                { label: "動態攝影", value: "注射 DTPA" },
                { label: "中途", value: "打利尿劑 (Lasix)" }
            ]
        },
        adminRules: [
            { title: "固定時段", content: "<strong>下午 14:30</strong>" }
        ],
        patientEducation: [{ title: "喝水", content: "檢查前 30 分鐘喝水 300-500cc。" }]
    },
    MAG3: {
        title: "腎功能掃描 (MAG3)",
        miniClass: {
            indications: "評估腎小管分泌功能、有效腎血漿流量 (ERPF)、腎臟阻塞性病變鑑別。",
            principle: "<strong>腎小管分泌</strong>：Tc-99m MAG3 主要經由近曲小管分泌 (Tubular Secretion) 排出，相較於 DTPA 更能反應腎臟 tubular function，特別適合腎功能較差的病人。"
        },
        timeArchitecture: {
            steps: [
                { label: "靜脈注射", value: "Tc-99m MAG3" },
                { label: "動態攝影", value: "30-40 分鐘" },
                { label: "中途", value: "打利尿劑 (Lasix)" }
            ],
            note: "比 DTPA 對低腎功能病人診斷效果更好。"
        },
        adminRules: [
            { title: "適應症差異", content: "MAG3 適合 <strong>腎功能較差</strong> 或 <strong>小兒</strong> 病人；DTPA 適合腎功能正常者評估 GFR。" }
        ],
        patientEducation: [{ title: "喝水", content: "檢查前 30 分鐘喝水 300-500cc。" }]
    },
    Scrotal: {
        title: "陰囊掃描 (Scrotal)",
        miniClass: { indications: "鑑別急性睪丸扭轉 (Torsion) 與急性附睪炎 (Epididymitis)。", principle: "<strong>血流灌注</strong>：動脈期觀察血流。扭轉時血流阻斷 (Cold)；發炎時血流增加 (Hot)。這是核醫少數需要「急做」的檢查。" },
        timeArchitecture: { steps: [{ label: "急診", value: "隨到隨做" }, { label: "攝影", value: "約 20 分" }] },
        adminRules: [{ title: "緊急", content: "需優先處理 (Torsion 黃金時間)。" }],
        patientEducation: [{ title: "配合", content: "躺平不動。" }]
    },

    // --- Other ---
    Ga67: {
        title: "鎵-67 發炎/腫瘤 (Ga67)",
        miniClass: { indications: "不明熱 (FUO)、慢性骨髓炎、軟組織感染。", principle: "<strong>鐵離子類似物</strong>：Ga-67 類似鐵離子，會與發炎處白血球釋放的乳鐵蛋白 (Lactoferrin) 結合，也會被細菌攝取，定位出身體哪裡在發炎。" },
        timeArchitecture: { steps: [{ label: "注射日", value: "Day 0" }, { label: "等待", value: "48 小時" }, { label: "掃描日", value: "Day 2" }] },
        adminRules: [{ title: "雙日", content: "預約兩次時間。" }],
        patientEducation: [
            { title: "哺乳", content: "需停止哺乳 4 週。" },
            { title: "腸道", content: "可能需服用輕瀉劑 (Laxative) 以減少腸道干擾。" }
        ]
    },
    TRODAT: {
        title: "多巴胺轉運體掃描 (Tc-TRODAT-1)",
        miniClass: { indications: "鑑別診斷巴金森氏症 (Parkinson's Disease) 與 原發性顫抖症 (Essential Tremor)。", principle: "<strong>多巴胺轉運體成像</strong>：Tc-99m TRODAT-1 會結合在腦部基底核 (Basal Ganglia) 的多巴胺轉運體 (DAT)。巴金森氏症患者的神經元退化，導致攝取顯著減少 (尤其在 Putamen)，影像呈現「逗號變句號」；原發性顫抖症則大致正常。" },
        timeArchitecture: {
            steps: [
                { label: "注射後等待", value: "3-4 小時" },
                { label: "上機掃描", value: "40-50 分鐘" },
            ],
            note: "總耗時約 5 小時 (需藥物結合時間)。"
        },
        adminRules: [
            {
                title: "⚠️ 排程生存鐵律",
                content: `
                <div class="hard-rule-box" style="border: 2px solid #e11d48; background: #fff1f2;">
                    <div class="hard-rule-header" style="color: #e11d48;">🛑 嚴格限制 (Strict Rules)</div>
                    <ul style="margin: 0; padding-left: 1.2rem; color: #9f1239; font-weight: 700;">

                        <li>⚠️ 必須湊人數 (Batching)：試劑昂貴，需累積 3-5 人才能開瓶。務必確認「開瓶日」！</li>
                    </ul>
                </div>`
            },
            { title: "防呆確認", content: "<ul class='doc-list checklist'><li><strong>懷孕：</strong>絕對禁忌。</li><li><strong>平躺：</strong>頭部需固定 40 分鐘，嚴重顫抖或無法平躺者不宜。</li></ul>" }
        ],
        patientEducation: [
            { title: "禁忌飲食", content: "<span class='alert-text'>檢查「前一日」起，禁止食用：咖啡、茶、可樂、巧克力 (含咖啡因食物)。</span>" },
            { title: "時間", content: "請預留半天時間 (約 5 小時)。" }
        ]
    },
    Brain: {
        title: "腦部血流灌流掃描 (Cerebral Perfusion Scan)",
        miniClass: { indications: "癲癇病灶定位、失智症 (Alzheimer's vs Vascular)、腦血管疾病。", principle: "<strong>腦血流灌注 (rCBF)</strong>：Tc-99m ECD/HMPAO 為脂溶性，可穿過血腦屏障 (BBB) 進入腦細胞，並在細胞內轉化為水溶性而被滯留。局部腦細胞功能或血流受損時，該區攝取會減少。" },
        timeArchitecture: { steps: [{ label: "注射後等待", value: "30-60 分" }, { label: "SPECT", value: "30-40 分" }] },
        adminRules: [

            { title: "環境", content: "注射時需在安靜、微光房間休息，不可說話。" }
        ],
        patientEducation: [{ title: "禁忌", content: "避免咖啡、茶、菸。" }]
    },
    // --- ☢️ Radiation Safety & Pharmacy ---
    RadiationSafety: {
        title: "輻射防護 (Radiation Safety)",
        miniClass: { indications: "保護自己與病人。", principle: "<strong>ALARA 原則</strong>：As Low As Reasonably Achievable (在合理抑低範圍內盡量降低輻射)。" },
        adminRules: [
            {
                title: "防護三大原則",
                content: `
                <div class="concept-card">
                    <ul class="doc-list">
                        <li><strong>時間 (Time)</strong>：操作時間越短越好。熟練動作，減少暴露。</li>
                        <li><strong>距離 (Distance)</strong>：距離越遠越好 (輻射強度與距離平方成反比)。善用長夾。</li>
                        <li><strong>屏蔽 (Shielding)</strong>：善用鉛屏、鉛圍裙、鉛磚。Tc-99m (140keV) 可用鉛，但 Beta 射線 (如 I-131 治療) 需先用壓克力屏蔽 Bremsstrahlung，再用鉛。</li>
                    </ul>
                </div>`
            },
            { title: "孕婦工作人員", content: "懷孕期間腹部表面劑量不超過 2 mSv (整個妊娠期)。" }
        ],
        patientEducation: [
            { title: "懷孕/哺乳", content: "<span class='alert-text'>懷孕者原則上禁止核醫檢查。</span> 哺乳者視藥物種類需暫停哺乳 (多數 Tc-99m 藥物約 12-24 小時)。" },
            { title: "親子接觸", content: "一般診斷檢查返家後與嬰幼兒保持 1-2 公尺距離一天即可。" }
        ]
    },
    Radiopharmacy: {
        title: "核醫藥物小學堂 (Radiopharmacy)",
        miniClass: { indications: "認識我們用的「子彈」。", principle: "放射性同位素 + 標記藥物 = 核醫藥物 (Radiopharmaceutical)。" },
        timeArchitecture: null,
        adminRules: [
            {
                title: "常用同位素",
                content: `
                <table class='quick-dial-table'>
                    <tr><th>同位素</th><th>半衰期 (T1/2)</th><th>能量 (keV)</th></tr>
                    <tr><td><strong>Tc-99m</strong></td><td>6 小時</td><td>140 (Gamma)</td></tr>
                    <tr><td><strong>I-131</strong></td><td>8 天</td><td>364 (Gamma) / 606 (Beta)</td></tr>
                    <tr><td><strong>F-18</strong></td><td>110 分鐘</td><td>511 (Positron)</td></tr>
                    <tr><td><strong>Ga-67</strong></td><td>78 小時</td><td>93, 185, 300</td></tr>
                    <tr><td><strong>Tl-201</strong></td><td>73 小時</td><td>69-83 (X-ray)</td></tr>
                </table>`
            },
            { title: "Generator (乳牛)", content: "Mo-99 (母牛, T1/2=66hr) 衰變產生 Tc-99m (小牛)。每天早上「擠牛奶 (Elution)」。" }
        ],
        patientEducation: []
    },
    Lung: {
        title: "肺灌注掃描 (Lung Perfusion Scan)",
        miniClass: { indications: "肺栓塞 (Pulmonary Embolism, PE) 診斷、肺切除術前功能評估。", principle: "<strong>微血管阻塞 (Capillary Blockade)</strong>：Tc-99m MAA 是大小約 10-90 微米的顆粒，注入靜脈後會暫時卡在肺部微血管。若肺血管有血栓堵塞，該區域就沒有藥物顆粒進入，形成 Cold defect。" },
        timeArchitecture: { steps: [{ label: "攝影", value: "多角度平面像" }, { label: "時間", value: "約 20 分" }] },
        adminRules: [{ title: "準備", content: "確認病人呼吸狀況。" }],
        patientEducation: [{ title: "配合", content: "吸氣憋氣配合 (若需要)。" }]
    },
    // --- Operation Guide ---
    OperationGuide: {
        title: "AI 辨識 - 操作說明 (Operation Guide)",
        gallery: [
            { src: "assets/guide/01.png", desc: "Step 1" },
            { src: "assets/guide/02.png", desc: "Step 2" },
            { src: "assets/guide/03.png", desc: "Step 3" },
            { src: "assets/guide/04.png", desc: "Step 4" },
            { src: "assets/guide/05.png", desc: "Step 5" },
            { src: "assets/guide/06.png", desc: "Step 6" }
        ]
    }
};

// State
let currentState = {
    view: 'home',
    calendarDate: new Date() // Default to Today
};

// Search Logic with Keyword Associations
const SEARCH_KEYWORDS = {
    PET: ['cancer', 'tumor', '腫瘤', '癌', 'fdg', 'glucose', '葡萄糖', 'staging', '分期', 'oncology', '腫瘤科'],
    POSLUMA: ['prostate', '攝護腺', 'psma', 'psa', '前列腺'],
    MPI: ['heart', '心臟', 'cardiac', 'coronary', '冠狀動脈', 'cad', 'stress', '運動', 'thallium', 'sestamibi'],
    MUGA: ['heart', '心臟', 'cardiac', 'ef', 'ejection', '射出', 'chemo', '化療', 'doxorubicin'],
    Bone: ['skeleton', '骨頭', 'metastasis', '轉移', 'fracture', '骨折', 'mdp', 'osteomyelitis', '骨髓炎'],
    Thyroid: ['甲狀腺', 'graves', 'hyperthyroid', '亢進', 'goiter', 'nodule', '結節'],
    Parathyroid: ['副甲狀腺', 'pth', 'calcium', '鈣', 'adenoma', '腺瘤', 'mibi'],
    I131: ['thyroid', '甲狀腺', 'cancer', '癌', 'ablation', '消融', 'treatment', '治療', 'iodine', '碘'],
    Ra223: ['prostate', '攝護腺', 'bone', '骨', 'xofigo', 'alpha', 'crpc'],
    DMSA: ['kidney', '腎', 'renal', 'pyelonephritis', '腎盂腎炎', 'scar', '結痂', 'pediatric', '小兒'],
    DTPA: ['kidney', '腎', 'renal', 'gfr', 'obstruction', '阻塞', 'hydronephrosis', '水腎', 'lasix'],
    MAG3: ['kidney', '腎', 'renal', 'tubular', '小管', 'erpf', 'pediatric', '小兒', 'obstruction'],
    Gastric: ['stomach', '胃', 'emptying', '排空', 'gastroparesis', '胃輕癱', 'nausea', '噁心'],
    GIBleed: ['bleeding', '出血', 'gi', '腸胃', 'meckel', 'rbc'],
    Biliary: ['gallbladder', '膽囊', 'cholecystitis', '膽囊炎', 'hida', 'biliary', '膽道'],
    Liver: ['liver', '肝', 'spleen', '脾', 'cirrhosis', '肝硬化', 'colloid'],
    Salivary: ['salivary', '唾液', 'sjogren', '乾燥症', 'parotid', '腮腺'],
    Brain: ['brain', '腦', 'perfusion', '灌流', 'dementia', '失智', 'alzheimer', 'epilepsy', '癲癇'],
    TRODAT: ['parkinson', '巴金森', 'dopamine', '多巴胺', 'tremor', '顫抖', 'dat'],
    Lung: ['lung', '肺', 'pulmonary', 'pe', 'embolism', '栓塞', 'ventilation', 'perfusion'],
    SLN: ['sentinel', '前哨', 'lymph', '淋巴', 'breast', '乳', 'melanoma', '黑色素'],
    Venography: ['vein', '靜脈', 'dvt', 'thrombosis', '血栓'],
    Lymphedema: ['lymph', '淋巴', 'edema', '水腫', 'swelling'],
    MIBG: ['adrenal', '腎上腺', 'pheochromocytoma', '嗜鉻', 'neuroblastoma', '神經母'],
    Ga67: ['infection', '感染', 'inflammation', '發炎', 'fever', '發燒', 'fuo'],
    Scrotal: ['testis', '睪丸', 'torsion', '扭轉', 'epididymitis', '附睪炎', 'scrotum', '陰囊'],
    Calendar: ['calendar', '行事曆', 'holiday', '假日', 'schedule', '排班'],
    NMBasics: ['basic', '基礎', 'principle', '原理', 'what', '什麼', 'intro', '介紹'],
    PatientQA: ['qa', '問答', 'question', '問題', 'patient', '病人', 'faq'],
    RadiationSafety: ['radiation', '輻射', 'safety', '安全', 'protection', '防護', 'dose', '劑量'],
    Radiopharmacy: ['drug', '藥物', 'radiopharmaceutical', 'isotope', '同位素', 'tc99m', 'tracer']
};

const searchInput = document.getElementById('exam-search');
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const buttons = document.querySelectorAll('.nav-btn');
    const navContainer = document.querySelector('.sidebar-nav-scroll');
    const categories = document.querySelectorAll('.nav-category');

    let visibleCount = 0;

    buttons.forEach(btn => {
        const text = btn.textContent.toLowerCase();
        const cat = btn.dataset.category;
        const catLower = cat.toLowerCase();
        const keywords = SEARCH_KEYWORDS[cat] || [];

        const matchText = text.includes(term);
        const matchCat = catLower.includes(term);
        const matchKeyword = keywords.some(kw => kw.includes(term) || term.includes(kw));

        if (matchText || matchCat || matchKeyword) {
            btn.classList.remove('hidden');
            visibleCount++;
        } else {
            btn.classList.add('hidden');
        }
    });

    // Handle "No Results" Message
    let noResultMsg = document.getElementById('no-result-msg');

    if (visibleCount === 0) {
        if (!noResultMsg) {
            noResultMsg = document.createElement('div');
            noResultMsg.id = 'no-result-msg';
            noResultMsg.innerHTML = `
                <div style="text-align:center; padding: 2rem; color: var(--text-muted);">
                    <div style="font-size: 3rem; margin-bottom: 0.5rem;">🐰❓</div>
                    <p style="font-weight:700;">找不到這個檢查...</p>
                    <p style="font-size:0.9rem;">試試別的關鍵字？</p>
                </div>`;
            navContainer.appendChild(noResultMsg);
        }
        // Hide categories if no results
        categories.forEach(c => c.style.display = 'none');
    } else {
        if (noResultMsg) noResultMsg.remove();
        // Show categories again (or keep them logic-based if we wanted to be stricter, but simple is fine)
        categories.forEach(c => c.style.display = 'block');
    }
});

// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderView(btn.dataset.category);
    });
});

// Render logic
function renderView(viewName) {
    const container = document.getElementById('content-display');
    const data = EXAM_DATA[viewName];

    // Clear and Fade
    container.style.opacity = '0';
    setTimeout(() => {
        if (!data) {
            container.innerHTML = `<div class="info-card"><h3>⚠️ 找不到資料</h3></div>`;
        } else {
            container.innerHTML = buildCardHTML(viewName, data);
            // I131 listener            if (viewName === 'PET') attachPetListeners();
            if (viewName === 'I131') attachI131Listeners();
            if (viewName === 'Calendar') initCalendar();
        }
        container.style.opacity = '1';
        container.style.transition = 'opacity 0.2s';
    }, 100);
}

// Image Mapping (Specific > Category Fallback)
// 🐱 Random Cat Images (Assets)
const CAT_IMAGES = Array.from({ length: 40 }, (_, i) =>
    `assets/cutecat/${(i + 1).toString().padStart(2, '0')}.png`
);

// Session Cache for Consistent Randomness
const assignedCatImages = {};

function getCatImage(key) {
    if (!assignedCatImages[key]) {
        const randomIndex = Math.floor(Math.random() * CAT_IMAGES.length);
        assignedCatImages[key] = CAT_IMAGES[randomIndex];
    }
    return assignedCatImages[key];
}

function buildCardHTML(key, data) {
    // Generate Image HTML
    let imgHTML = '';
    const imgPath = getCatImage(key);
    if (imgPath) {
        imgHTML = `<div style="text-align: center; margin-bottom: 2rem;">
            <img src="${imgPath}" alt="${key} Illustration" 
                 style="max-width: 250px; border-radius: 20px; background: transparent; filter: drop-shadow(0 8px 12px rgba(255,158,181,0.3)); transition: transform 0.3s;"
                 onmouseover="this.style.transform='scale(1.05) rotate(2deg)'"
                 onmouseout="this.style.transform='scale(1) rotate(0deg)'">
        </div>`;
    }

    // Generate Time Steps
    // Generate Time Steps (Standard or Dual Protocol)
    let timeHTML = '';
    if (data.timeArchitecture) {
        if (data.timeArchitecture.mode === 'dual-protocol' && data.timeArchitecture.protocols) {
            // New Dual Protocol Logic
            timeHTML = data.timeArchitecture.protocols.map(p => `
                <div class="protocol-row" style="margin-bottom: 2rem; background: rgba(255,255,255,0.4); padding: 1.5rem; border-radius: var(--radius-md); border-left: 5px solid var(--secondary-color);">
                    <div style="margin-bottom: 1rem; border-bottom: 1px dashed var(--border-subtle); padding-bottom: 0.5rem;">
                        <span style="font-weight: 800; color: var(--text-main); font-size: 1.1rem;">${p.title}</span>
                        <span style="margin-left: 0.5rem; color: var(--text-muted); font-size: 0.9rem;">${p.subtitle}</span>
                    </div>
                    <div class="timeline" style="margin-top: 0;">
                        ${p.steps.map((s, i) => `
                            <div class="time-block" style="min-width: 120px; padding: 1rem;">
                                <strong>${s.label}</strong>
                                <span>${s.value}</span>
                            </div>
                            ${i < p.steps.length - 1 ? '<div class="time-arrow">➜</div>' : ''}
                        `).join('')}
                    </div>
                    ${p.note ? `<div style="margin-top: 0.8rem; font-size: 0.9rem; color: var(--primary-active); font-weight: 700;">💡 ${p.note}</div>` : ''}
                </div>
            `).join('');
        } else if (data.timeArchitecture.steps) {
            // Original Logic
            timeHTML = data.timeArchitecture.steps.map((s, i) => `
                <div class="time-block">
                    <strong>${s.label}</strong>
                    <span>${s.value}</span>
                </div>
                ${i < data.timeArchitecture.steps.length - 1 ? '<div class="time-arrow">➜</div>' : ''}
            `).join('');
        }
    }

    // Specific Content (PET / I131)
    let extraHTML = '';
    if (key === 'PET') {
        extraHTML = getPetSpecificContent();
    } else if (key === 'I131') {
        extraHTML = getI131SpecificContent();
    }

    // Layout Logic: If no Patient Education, Admin Rules takes full width
    const hasPatientEd = data.patientEducation && data.patientEducation.length > 0;
    const hasMiniClass = data.miniClass && (data.miniClass.indications || data.miniClass.principle);
    const hasAdminRules = data.adminRules && data.adminRules.length > 0;

    // Dynamic Section Titles based on content type
    const educationalCategories = ['NMBasics', 'PatientQA', 'RadiationSafety', 'Radiopharmacy'];
    const isEducational = educationalCategories.includes(key);
    const adminSectionTitle = isEducational ? '📖 深入學習' : '🩺 護理師行政';
    const patientSectionTitle = isEducational ? '💬 常見問題' : '💊 病人衛教';

    // Grid Style
    const gridStyle = hasPatientEd
        ? 'display:grid; grid-template-columns: 1fr 1fr; gap:3rem; margin-top:3rem;'
        : 'margin-top:2rem;';

    return `
        <div class="info-card">
            ${imgHTML}
            <h2 class="card-title">${data.title}</h2>

            ${hasMiniClass ? `
            <div class="mini-class">
                <h3>臨床小教室</h3>
                ${data.miniClass.indications ? `<p><strong>適應症：</strong>${data.miniClass.indications}</p>` : ''}
                ${data.miniClass.principle ? `<p><strong>原理：</strong>${data.miniClass.principle}</p>` : ''}
            </div>` : ''}

            ${data.timeArchitecture ? `
                <div class="time-architecture">
                    <div style="color:var(--primary-dark); font-weight:800; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Time & Flow</div>
                    <div class="timeline">${timeHTML}</div>
                    ${data.timeArchitecture.note ? `<div style="margin-top:1.5rem; color:var(--accent-red); font-weight:bold;">${data.timeArchitecture.note}</div>` : ''}
                </div>
            ` : ''}

            ${data.gallery ? `
                <div class="guide-gallery">
                    ${data.gallery.map((img, i) => `
                        <div class="guide-step-card">
                            <img src="${img.src}" alt="${img.desc}" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            ${extraHTML}

            ${hasAdminRules ? `
            <div style="${gridStyle}">
                <div>
                    <h3 class="section-title">${adminSectionTitle}</h3>
                    ${data.adminRules.map(r => `<div class="list-item"><strong>${r.title}：</strong>${r.content}</div>`).join('')}
                </div>
                ${hasPatientEd ? `
                <div>
                    <h3 class="section-title">${patientSectionTitle}</h3>
                    ${data.patientEducation.map(e => `<div class="list-item"><strong>${e.title}：</strong>${e.content}</div>`).join('')}
                </div>` : ''}
            </div>
            ` : ''}
        </div>
    `;
}

// PET Logic Helpers (Refactored: Unified Display)
function getPetSpecificContent() {
    return `
        <div class="doctor-block-container" style="margin-top: 1rem; margin-bottom: 2rem;">
            <div class='doctor-card' style="width: 100%; max-width: 600px;">
                <div class='doctor-name'>📋 統一規範 (Standard Protocol)</div>
                <div class='dr-rule-row'><span class='dr-label'>禁食 (Fasting)</span><span class='dr-value'>至少 6 小時</span></div>
                <div class='dr-rule-row'><span class='dr-label'>血糖 > 200</span><span class='dr-value'>當下回報</span></div>
            </div>
        </div>
    `;
}

// I-131 Smart Logic
function getI131SpecificContent() {
    return `
        <div class="calculator-box">
            <div class="calc-input-group">
                <input type="date" id="i131-date" placeholder="選擇入院日...">
                <p style="font-size:0.9rem; color:var(--text-muted); margin-top:0.5rem; text-align:center;">↓ 點擊上方選擇入院日期 ↓</p>
            </div>
            
            <div id="i131-result" class="result-box">
                <span style="color:var(--text-muted); font-weight:500;">請選擇日期計算行程...</span>
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
        const day = dateObj.getDay(); // 0-6

        let output = '';
        let isValid = false;
        let outDateObj = new Date(dateObj);

        // Logic: Tue(2) -> Fri(5) [4 days], Fri(5) -> Tue(2) [5 days]
        if (day === 2) { // Tue
            isValid = true;
            outDateObj.setDate(dateObj.getDate() + 3); // Tue+3 = Fri
            output = `✅ <strong>OK:</strong> 週二入院，預計 < strong > 週五出院</strong > (住院 4 天)`;
        } else if (day === 5) { // Fri
            isValid = true;
            outDateObj.setDate(dateObj.getDate() + 4); // Fri+4 = Tue
            output = `✅ <strong>OK:</strong> 週五入院，預計 < strong > 下週二出院</strong > (住院 5 天)`;
        } else {
            isValid = false;
            output = `⛔ <strong>錯誤 (ERROR):</strong> 僅能排週二或週五入院！`;
        }

        // Render Result
        resultBox.innerHTML = output;
        resultBox.className = 'result-box ' + (isValid ? 'valid' : 'error');

        // Render WBS Reminder
        if (isValid) {
            const wbsDate = new Date(outDateObj);
            wbsDate.setDate(outDateObj.getDate() + 7);
            const m = wbsDate.getMonth() + 1;
            const d = wbsDate.getDate();
            const wbsStr = `${m}/${d}`;

            wbsBox.style.display = 'block';
            wbsBox.innerHTML = `
                <div class="wbs-reminder">
                    🔔 <strong>自動排程提醒：</strong><br>
                    請務必幫病人預約 <strong>${wbsStr} (出院後 1 週)</strong> 回來做 <strong>I-131 全身掃描 (WBS)</strong>
                </div>
            `;
        } else {
            wbsBox.style.display = 'none';
        }
    });
}

// Clock
function updateClock() {
    const now = new Date();
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const date = now.getDate().toString().padStart(2, '0');
    const day = days[now.getDay()];
    const hour = now.getHours().toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');

    document.getElementById('clock-display').textContent = `${month}/${date}(週${day}) ${hour}:${min}`;
}
setInterval(updateClock, 1000);
updateClock();

// 🌸 Random Heartwarming Greeting Logic
function initRandomGreeting() {
    const greetingEl = document.getElementById('smart-greeting');
    if (!greetingEl) return;

    const greetings = [
        { icon: "🌿", text: "忙碌中也要記得深呼吸，您辛苦了！" },
        { icon: "✨", text: "每一個細心的檢查，都是病人的安心。" },
        { icon: "💪", text: "今天也是充滿希望的一天，加油！" },
        { icon: "🩺", text: "您的專業與耐心，是病人最大的支持。" },
        { icon: "💧", text: "別忘了喝杯水，照顧好自己喔！" },
        { icon: "😊", text: "您溫暖的笑容，是醫院最美的風景。" },
        { icon: "🔋", text: "休息一下，充飽電再出發！" },
        { icon: "�", text: "遇事不慌，您是最棒的核醫夥伴！" },
        { icon: "💖", text: "把每件小事做好，就是最偉大的成就。" },
        { icon: "�", text: "保持微笑，好運自然來！" },
        { icon: "�", text: "即使再忙，也要記得抬頭看看窗外的天空。" },
        { icon: "🍊", text: "祝您今天工作順利，心情愉快！" }
    ];

    const randomIndex = Math.floor(Math.random() * greetings.length);
    const selected = greetings[randomIndex];

    greetingEl.innerHTML = `<span class="greeting-icon">${selected.icon}</span> ${selected.text}`;
}

// Initialize Greeting Once
initRandomGreeting();

// Q&A Toggle Function
window.toggleQA = function (element) {
    const answer = element.querySelector('.qa-answer');
    if (answer) {
        answer.classList.toggle('hidden');
        element.classList.toggle('expanded');
    }
};

// Theme & Utility Logic




// Dashboard Info (Weather & Traffic)
async function updateDashboardInfo() {
    const weatherEl = document.getElementById('weather-info');
    const trafficEl = document.getElementById('traffic-info');

    // 1. Mock Weather (Kaohsiung Yanchao)
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=22.79&longitude=120.36&current_weather=true');
        const data = await response.json();
        const temp = data.current_weather.temperature;
        const code = data.current_weather.weathercode;
        let condition = "晴";
        if (code > 3) condition = "多雲";
        if (code > 50) condition = "雨";

        weatherEl.innerHTML = `燕巢區 ${temp}°C ${condition}`;
    } catch (e) {
        weatherEl.innerHTML = `燕巢區 26°C 晴`; // Fallback
    }

    // 2. Mock Traffic - REMOVED per user request
    if (trafficEl) {
        trafficEl.style.display = 'none';
    }
}

// Init
updateDashboardInfo();
setInterval(updateDashboardInfo, 300000); // 5 mins
// --- Calendar Logic (Data & Functions) ---

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
    { date: '2026-12-25', title: '行憲紀念日', type: 'holiday', clinicStatus: 'full', note: '門診正常開診，行政休假' },
];

const SHIFT_CYCLES = [
    '2025-12-21', '2026-01-18', '2026-02-15', '2026-03-15', '2026-04-12',
    '2026-05-10', '2026-06-07', '2026-07-05', '2026-08-02', '2026-08-30',
    '2026-09-27', '2026-10-25', '2026-11-22', '2026-12-20'
];

function initCalendar() {
    const container = document.getElementById('calendar-app-container');
    if (!container) return;

    // Always reset to today when entering the view
    currentState.calendarDate = new Date();

    renderCalendarMonth();
}

window.changeMonth = function (delta) {
    if (delta === 0) {
        currentState.calendarDate = new Date(); // Go to today
    } else {
        const curr = currentState.calendarDate;
        // Correct date mutability issue
        currentState.calendarDate = new Date(curr.getFullYear(), curr.getMonth() + delta, 1);
    }
    renderCalendarMonth();
}

function renderCalendarMonth() {
    const grid = document.getElementById('cal-grid');
    const title = document.getElementById('cal-title');
    if (!grid || !title) return;

    const date = currentState.calendarDate;
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-11

    title.textContent = `${year} 年 ${month + 1} 月`;

    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay(); // 0(Sun) - 6(Sat)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = `
        <div class="cal-head weekend">日</div>
        <div class="cal-head">一</div>
        <div class="cal-head">二</div>
        <div class="cal-head">三</div>
        <div class="cal-head">四</div>
        <div class="cal-head">五</div>
        <div class="cal-head weekend">六</div>
    `;

    for (let i = 0; i < startDay; i++) {
        html += `<div class="cal-cell empty"></div>`;
    }

    const today = new Date();
    const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

    for (let d = 1; d <= daysInMonth; d++) {
        const currentStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
        const dayObj = new Date(year, month, d);
        const dayOfWeek = dayObj.getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
        const isToday = (currentStr === todayStr);

        const special = SPECIAL_DAYS.find(s => s.date === currentStr);

        // Base classes
        let classes = "cal-cell";
        let statusBadge = "";

        if (isWeekend) classes += " weekend";
        if (isToday) classes += " today";

        if (special) {
            classes += " has-event";
            // Map clinicStatus to CSS class
            if (special.clinicStatus === 'closed') {
                classes += " status-closed";
                statusBadge = '<div class="status-badge">停診</div>';
            } else if (special.clinicStatus === 'half') {
                classes += " status-half";
                statusBadge = '<div class="status-badge">半日</div>';
            } else if (special.clinicStatus === 'full') {
                classes += " status-full";
                statusBadge = '<div class="status-badge">開診</div>';
            }
        }

        let label = '';
        if (special) {
            label = `<div class="cal-label ${special.clinicStatus}">${special.title}</div>`;
        }

        // Safe JSON stringify for onclick
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

// Modal Logic
window.openCalModal = function (dateStr, specialData, isCycle) {
    const modal = document.getElementById('cal-modal');
    const title = document.getElementById('modal-date');
    const body = document.getElementById('modal-body');

    modal.classList.remove('hidden');
    title.textContent = dateStr;

    let content = '';

    if (specialData) {
        let statusText = '';
        let statusClass = '';
        if (specialData.clinicStatus === 'closed') { statusText = '停診 (Closed)'; statusClass = 'text-red-600 bg-red-50'; }
        else if (specialData.clinicStatus === 'half') { statusText = '半日診 (Half)'; statusClass = 'text-yellow-600 bg-yellow-50'; }
        else if (specialData.clinicStatus === 'full') { statusText = '正常開診 (Open)'; statusClass = 'text-green-600 bg-green-50'; }
        else { statusText = '正常 (Normal)'; statusClass = 'text-gray-600 bg-gray-50'; }

        content += `
            <div class="modal-card">
                <div class="modal-badge ${statusClass}">${statusText}</div>
                <h4 class="modal-title">${specialData.title}</h4>
                <p class="modal-note">${specialData.note}</p>
            </div>
        `;
    }

    if (isCycle) {
        content += `
            <div class="modal-card" style="background:#e0e7ff; border-left:4px solid #4338ca;">
                <h4 style="color:#4338ca; font-weight:bold; margin-bottom:0.2rem;">🔄 四週變形工時週期</h4>
                <p style="font-size:0.9rem; color:#3730a3;">此日為新一輪四週排班週期的開始日。</p>
            </div>
        `;
    }

    if (!specialData && !isCycle) {
        content = `<div style="text-align:center; color:#94a3b8; padding:2rem;">今日無特殊事項</div>`;
    }

    body.innerHTML = content;
};

window.closeCalModal = function () {
    document.getElementById('cal-modal').classList.add('hidden');
};

renderView('NMBasics');

// Event Listener for Guide Button
const guideBtn = document.getElementById('guide-btn');
if (guideBtn) {
    guideBtn.addEventListener('click', () => {
        // Highlight logic (optional, but good for UX)
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        guideBtn.classList.add('active'); // Add active class to guide btn if we want styling

        renderView('OperationGuide');
    });
}

// Event Listener for Toolbox Toggle (Collapsible Menu)
const toolboxToggle = document.getElementById('toolbox-toggle');
const toolboxContent = document.getElementById('toolbox-content');
if (toolboxToggle && toolboxContent) {
    toolboxToggle.addEventListener('click', () => {
        toolboxToggle.classList.toggle('open');
        toolboxContent.classList.toggle('open');
    });
}
