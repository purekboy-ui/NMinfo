const RESEARCH_PAGES = {
  overview: {
    title: "研究工作區總覽",
    subtitle: "2023–2026 的核醫 AI 文獻大致可分成五條線：重建與去噪、分割與定量、theranostics 劑量學、預測模型，以及工作流程輔助。這五條線的成熟度與重複風險差異很大。",
    railTitle: "總覽",
    railNote: "範圍、主要訊號、證據邊界、頁面結構",
    railItems: [
      { id: "overview-scope", label: "整理範圍" },
      { id: "overview-signals", label: "主要訊號" },
      { id: "overview-boundary", label: "證據邊界" },
      { id: "overview-layout", label: "頁面結構" }
    ],
    body: `
      <section class="workspace-intro reveal-block">
        <h2>近三年的進展，主要集中在三件事：縮短掃描或標記時間、守住定量，以及把結果接回臨床決策。</h2>
        <p>這裡整理的材料主要來自 2023–2026 的公開綜述、學術群組頁、挑戰賽網站、開源工具文件與產品說明。重點放在 PET、SPECT、PET/CT、PET/MR、theranostics、劑量學、結構化報告與工作流程。</p>
        <p>同一個主題如果同時出現在挑戰賽、開源工具、學術綜述與商業工作站，通常代表它已經接近標準化；如果只停留在單中心 proof-of-concept，則比較適合當探索性題目看待。</p>
        <div class="hero-line"></div>
      </section>

      <section class="essay-section reveal-block" id="overview-scope" data-rail-title="整理範圍">
        <h3>整理範圍</h3>
        <p>這一頁聚焦的是核醫科最常碰到、也最容易和 AI 接起來的工作：影像重建、全身病灶分割、SUV 與病灶負荷量化、177Lu 後治療 SPECT/CT 劑量學、PSMA 與 FDG 的反應預測，以及報告草稿與 QA 輔助。</p>
        <p>沒有納入純基礎模型開發、沒有臨床場景的 benchmarking，或僅以「某模型在某資料集分數更高」為主要貢獻的文章。這類文章在研究方法上可能仍有價值，但對臨床單位的題目選擇幫助有限。</p>
      </section>

      <section class="essay-section reveal-block" id="overview-signals" data-rail-title="主要訊號">
        <h3>主要訊號</h3>
        <p><strong>重建與去噪</strong> 已從論文走到產品端，PET 與 MPI SPECT 都有實際部署案例；<strong>全身 PET/CT 分割</strong> 已有 autoPET 系列挑戰賽與公開基線；<strong>177Lu 劑量學</strong> 則仍在活躍擴張期，工具、資料與標準化程度都還沒有像 FDG 分割那樣成熟。</p>
        <p>另一條明顯上升的線是 <strong>workflow AI</strong>。目前最穩的落點仍是結構化輸入下的草稿生成、品質提醒與資料整理；直接以自由文字取代判讀的作法，公開證據仍不足。這點在 Bethesda Report 2024、Buvat 對 LLM 的批判性文章，以及多家產品頁的定位都很一致。</p>
      </section>

      <section class="essay-section reveal-block" id="overview-boundary" data-rail-title="證據邊界">
        <h3>證據邊界</h3>
        <p>這裡同時放了論文、挑戰賽、學術群組與產品資訊，但它們的證據層級不同。挑戰賽能提供公開基準與資料規模；學術群組頁能幫忙看方向與持續性；產品頁能看見市場已經把哪些環節做成工作站；真正能支持臨床推論的，仍然是經過外部驗證、reader study 或前瞻性部署的研究。</p>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>來源類型</th><th>最適合回答的問題</th><th>限制</th></tr>
            </thead>
            <tbody>
              <tr><td>挑戰賽 / 開源基線</td><td>目前哪些問題已有公開 benchmark</td><td>和真實流程仍有距離，標註規則也不一定等於臨床終點</td></tr>
              <tr><td>學術群組 / 綜述</td><td>哪些方向有人持續做、哪些問題被反覆提起</td><td>不同團隊對可用性的定義不完全一致</td></tr>
              <tr><td>產品頁 / 工作站</td><td>哪些環節已經接近商品化</td><td>公開性能細節通常不足，且受地區法規與版本影響</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="essay-section reveal-block" id="overview-layout" data-rail-title="頁面結構">
        <h3>頁面結構</h3>
        <p><strong>文獻地圖</strong> 負責拆開飽和區、活躍區與空白區；<strong>研究方向候選</strong> 把可能的題目寫到資料需求與重複風險；<strong>工具與競品</strong> 負責看挑戰賽、開源工具與商品化環節；<strong>學術現況</strong> 則整理目前持續輸出的研究群組與方法學節點。</p>
        <p class="work-note">判斷一個題目是否值得做，通常要同時看三件事：公開基準是否已成熟、院內資料能否支持、結果是否能回到讀片、治療或 QA 流程。</p>
      </section>
    `
  },
  map: {
    title: "文獻地圖",
    subtitle: "同樣都被稱為核醫 AI，不同主題的成熟度差很多。把已商品化、仍在競爭、以及尚未形成公開基準的區域拆開看，較容易判斷重複風險。",
    railTitle: "文獻地圖",
    railNote: "重建 / 分割 / 劑量學 / 預測 / workflow / 空白區",
    railItems: [
      { id: "map-recon", label: "重建與去噪" },
      { id: "map-seg", label: "分割與定量" },
      { id: "map-dose", label: "劑量學" },
      { id: "map-predict", label: "預測模型" },
      { id: "map-workflow", label: "workflow" },
      { id: "map-gap", label: "空白區" }
    ],
    body: `
      <section class="workspace-intro reveal-block">
        <h2>如果只看文章數量，很容易以為所有主題都一樣熱；實際上，真正需要分辨的是哪一類問題已經有公開基準，哪一類還停留在單中心探索。</h2>
        <p>這裡把主題分成六塊，重點在整理每一塊目前最常見的終點、主要競爭者，以及最容易重複前人的位置。</p>
        <div class="hero-line"></div>
      </section>

      <section class="essay-section reveal-block" id="map-recon" data-rail-title="重建與去噪">
        <h3>PET / SPECT 重建與去噪</h3>
        <p>這是目前最成熟的區塊之一。低劑量 PET 去噪、縮時重建、MPI SPECT 畫質提升，都已有大量論文與多家工作站級解決方案。對臨床端而言，吸引力在於掃描時間、吞吐量與病人舒適度；對研究端而言，真正的難點在於影像變好看之後，量化是否仍穩定。</p>
        <p>重複風險最高的寫法是只報 SSIM、PSNR 或 reader preference，卻沒有檢查 SUV、病灶對比、缺損偵測或後續量化是否偏移。這也是為什麼重建類題目若沒有定量驗證，現在很難再形成明顯差異。</p>
      </section>

      <section class="essay-section reveal-block" id="map-seg" data-rail-title="分割與定量">
        <h3>全身 PET/CT 分割與病灶定量</h3>
        <p>FDG 全身腫瘤分割已被 autoPET 系列推到相對成熟的位置，公開資料集、nnU-Net 基線與多中心泛化問題都已經攤在檯面上。PSMA 相關分割仍在快速上升期，特別是與 theranostics 連動的情境，但公開基準與跨中心資料量還沒有 FDG 那麼完整。</p>
        <p>這一塊真正的價值不只在 Dice。只要研究終點牽涉 Deauville、MTV、TLG、病灶總負荷或治療反應追蹤，錯誤案例到底會不會改變判讀，比整體分數更重要。</p>
      </section>

      <section class="essay-section reveal-block" id="map-dose" data-rail-title="劑量學">
        <h3>Theranostics 劑量學與後治療影像</h3>
        <p>177Lu-DOTATATE、177Lu-PSMA 與 90Y 相關工作是目前最有研究價值、也最不容易輕鬆複製的區塊之一。Zaidi 團隊在 2024–2026 已陸續發表 transformer-based dosimetry、CT-less segmentation 與 SPECT 校正相關工作，Rahmim 與合作者則把重點放在 radiotheranostics、lesion tracking 與 digital twin 的框架。</p>
        <p>這塊仍然缺少像 autoPET 那樣廣泛採用的公開 benchmark，因此題目空間比 FDG 分割大，但門檻也高：資料量小、多時間點配準、定量校正與臨床終點的銜接都會拉高成本。</p>
      </section>

      <section class="essay-section reveal-block" id="map-predict" data-rail-title="預測模型">
        <h3>Radiomics、深度特徵與反應預測</h3>
        <p>預測模型在表面上很吸引人，因為它直接碰到治療選擇與預後。但從方法學角度看，這也是過擬合最常見的區塊。FDG 的傳統 radiomics 預後模型已經累積到高度飽和；PSMA 對 177Lu-PSMA 反應預測、鼻咽癌這類區域性疾病、以及 total-body PET 的動力學參數學習，則仍有空間，但必須把重建穩定性與外部驗證一起做進去。</p>
        <p>IBSI、TRIPOD 與 feature robustness 不再只是寫在方法章節的關鍵字。如果缺少這些控制，即使得到漂亮的 AUC，也很難說明它在別的掃描器與協議下是否成立。</p>
      </section>

      <section class="essay-section reveal-block" id="map-workflow" data-rail-title="workflow">
        <h3>結構化報告、QA 與 workflow 輔助</h3>
        <p>這一塊的增長很快，但目前最可靠的形式仍然是「結構化資料進，草稿或提醒出」。只要輸入仍是自由文字、規則尚未定義，LLM 類工具很容易把核醫報告裡的比較結論、病灶位置或治療背景寫錯。Bethesda Report 2024 和 Buvat 的評論文章都對這點採取相對保守的態度。</p>
        <p>相較之下，影像品質自動檢查、漏填欄位提醒、定量異常提示這類 QA 題目研究量仍少，卻更接近實際部署。這也是 workflow 類題目裡目前較值得注意的空白區。</p>
      </section>

      <section class="essay-section reveal-block" id="map-gap" data-rail-title="空白區">
        <h3>目前仍相對空白的區域</h3>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>區域</th><th>原因</th><th>現階段機會</th></tr>
            </thead>
            <tbody>
              <tr><td>FAPI PET</td><td>示蹤劑快速臨床化，但正常攝取圖譜與 AI 工作仍少</td><td>正常值地圖、異常偵測、與炎症區分</td></tr>
              <tr><td>177Lu / 131I 真實世界部署研究</td><td>多為單中心回顧性研究，前瞻性部署稀少</td><td>時間節省、劑量重現性、reader confidence</td></tr>
              <tr><td>QA / protocol deviation detection</td><td>產品與論文都相對少</td><td>注射後等待時間、病人活動、重建參數異常檢查</td></tr>
              <tr><td>亞洲特定疾病譜</td><td>公開資料集多來自歐美常見癌種</td><td>鼻咽癌、肝癌、甲狀腺癌與區域性臨床問題</td></tr>
              <tr><td>Total-body PET 動力學</td><td>設備普及度仍有限，但資料密度高</td><td>多參數 kinetic modeling、低劑量動態掃描</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    `
  },
  topics: {
    title: "研究方向候選",
    subtitle: "以下方向按資料門檻、已有競爭者與可避免的重複點整理。各題分開評估，仍需回到本院示蹤劑量、標記人力與合作節奏判斷。",
    railTitle: "方向索引",
    railNote: "每一題列出已有工作、可切入處、資料門檻、重複風險",
    railItems: [
      { id: "topic-rpt", label: "177Lu 劑量學" },
      { id: "topic-fapi", label: "FAPI 異常偵測" },
      { id: "topic-lymphoma", label: "FDG 淋巴瘤" },
      { id: "topic-psma", label: "PSMA 反應預測" },
      { id: "topic-mpi", label: "MPI CT-less AC" },
      { id: "topic-i131", label: "I-131 量化" },
      { id: "topic-tbpet", label: "total-body PET" },
      { id: "topic-report", label: "報告與 QA" }
    ],
    body: `
      <section class="workspace-intro reveal-block">
        <h2>一個題目能不能成立，通常不取決於它聽起來新不新，而取決於四件事：資料是否連續、標註能否穩定、終點是否清楚，以及前人是否已經把同一件事做成公開基線。</h2>
        <p>下面列出的方向都附上「已有工作」「可切入處」「資料最低門檻」與「容易重複的位置」。這些欄位比模型名稱更能決定題目是否站得住。</p>
        <div class="hero-line"></div>
      </section>

      <section class="topic-section reveal-block" id="topic-rpt" data-rail-title="177Lu 劑量學">
        <h3>177Lu 後治療 SPECT/CT 自動分割與劑量學</h3>
        <div class="section-meter"></div>
        <p>這一題已有明確前人工作：Zaidi 團隊在 2024 提出 transformer-based personalized dosimetry，MIM SurePlan MRT 也已把多時間點 dosimetry 做成工作站功能。真正還有空間的地方，不再是單純「做出器官分割」，而是把分割、校正、時間點整合與臨床終點真正接起來。</p>
        <ul>
          <li><strong>可切入處：</strong> 第 1 週期劑量分布對後續反應或毒性的預測；單時間點與多時間點流程的誤差比較；亞洲人群真實世界部署。</li>
          <li><strong>資料門檻：</strong> 約 30–50 名接受 PRRT 或 177Lu-PSMA 的病人，每人至少 2 個時間點 SPECT/CT，並保留重建參數與生化追蹤。</li>
          <li><strong>容易重複的位置：</strong> 只報器官 Dice、沒有 phantom calibration、沒有 dose uncertainty 或臨床終點。</li>
        </ul>
      </section>

      <section class="topic-section reveal-block" id="topic-fapi" data-rail-title="FAPI 異常偵測">
        <h3>FAPI PET 正常攝取圖譜與異常偵測</h3>
        <div class="section-meter"></div>
        <p>FAPI 是目前相對新、又快速臨床轉化的示蹤劑。和 FDG 相比，正常背景較低，理論上適合做異常偵測與正常值地圖，但公開資料與 AI 研究仍少。這使它比「再做一題 FDG 全身分割」更不容易落入重複。</p>
        <ul>
          <li><strong>可切入處：</strong> 正常器官攝取分布、陰性檢查的 anomaly detection、炎症與腫瘤高攝取的區分策略。</li>
          <li><strong>資料門檻：</strong> 50–100 例 FAPI PET/CT，最好能控制注射後時間與重建條件。</li>
          <li><strong>容易重複的位置：</strong> 直接套用 FDG segmentation pipeline，卻沒有處理 FAPI 特有的背景、炎症與 protocol 差異。</li>
        </ul>
      </section>

      <section class="topic-section reveal-block" id="topic-lymphoma" data-rail-title="FDG 淋巴瘤">
        <h3>FDG PET/CT 淋巴瘤病灶分割與 Deauville 輔助</h3>
        <div class="section-meter"></div>
        <p>FDG 全身分割本身已經相對擁擠，但把題目收斂到淋巴瘤、Deauville、interim PET 與 reader study，仍然有臨床價值。較能形成差異的做法，是把肝臟參考區、分割錯誤與評分一致性放進同一個研究設計。</p>
        <ul>
          <li><strong>可切入處：</strong> reader agreement、判讀時間、錯誤案例如何改變 Deauville 分類。</li>
          <li><strong>資料門檻：</strong> 約 80–100 名淋巴瘤病人，最好含 staging、interim、EOT PET/CT。</li>
          <li><strong>容易重複的位置：</strong> 只有 Dice，沒有 kappa、沒有錯誤案例 review，也沒有把生理性攝取與骨髓刺激單獨分析。</li>
        </ul>
      </section>

      <section class="topic-section reveal-block" id="topic-psma" data-rail-title="PSMA 反應預測">
        <h3>PSMA PET 與 177Lu-PSMA 反應預測</h3>
        <div class="section-meter"></div>
        <p>這是典型「臨床問題很真、方法學風險也很高」的題目。近年的文獻已經大量嘗試用 radiomics 或深度特徵預測 177Lu-PSMA 反應，但樣本量小、代表病灶選擇與重建敏感度仍是主要弱點。</p>
        <ul>
          <li><strong>可切入處：</strong> 重建敏感度分析、病灶層級而非病人層級的穩定性、與 PSA kinetics 或 dose metrics 結合。</li>
          <li><strong>資料門檻：</strong> 至少 30–50 名 mCRPC，含基線 PSMA PET、後續療程與 PSA / 影像反應。</li>
          <li><strong>容易重複的位置：</strong> 小樣本高維特徵、沒有外部驗證、沒有處理不同 reconstruction 對特徵值的影響。</li>
        </ul>
      </section>

      <section class="topic-section reveal-block" id="topic-mpi" data-rail-title="MPI CT-less AC">
        <h3>心肌灌注 SPECT 的 CT-less attenuation correction 驗證</h3>
        <div class="section-meter"></div>
        <p>心臟 SPECT 的 AI 文獻不少，但真正前瞻性比較 DLAC 與既有 CTAC、並回到診斷終點的研究仍然不多。對流程穩定、MPI 量夠的中心而言，這題比單純再做半劑量去噪更容易形成臨床可用的研究。</p>
        <ul>
          <li><strong>可切入處：</strong> 前瞻性判讀一致性、體型極端個案的失敗模式、是否真的減少 CT 劑量或改善可判讀率。</li>
          <li><strong>資料門檻：</strong> 約 80–100 名同步具 DLAC 與 CTAC 的 MPI 個案，或具備與冠狀動脈檢查比對的 reference。</li>
          <li><strong>容易重複的位置：</strong> 只報畫質、沒有 segment-level perfusion 指標，也沒有分析假陽性分布。</li>
        </ul>
      </section>

      <section class="topic-section reveal-block" id="topic-i131" data-rail-title="I-131 量化">
        <h3>I-131 治療後 SPECT/CT 量化與反應評估標準化</h3>
        <div class="section-meter"></div>
        <p>I-131 題目在核醫 AI 中仍相對少，尤其是量化、殘餘甲狀腺分割與後續治療反應的標準化。對甲狀腺病人量足夠的中心，這是比 FDG generic radiomics 更不擁擠的方向。</p>
        <ul>
          <li><strong>可切入處：</strong> 殘餘甲狀腺體積或攝取量與 Tg 下降的關聯、多機器間校正、追加治療決策的一致性。</li>
          <li><strong>資料門檻：</strong> 約 100–150 名接受 I-131 消融且具治療後 SPECT/CT 與追蹤 Tg 的病人。</li>
          <li><strong>容易重複的位置：</strong> 只做影像分割，沒有量化校正、沒有與後續臨床追蹤連結。</li>
        </ul>
      </section>

      <section class="topic-section reveal-block" id="topic-tbpet" data-rail-title="total-body PET">
        <h3>Total-body PET 的動力學參數提取與低劑量動態掃描</h3>
        <div class="section-meter"></div>
        <p>這一題高度依賴設備，但也是明顯仍在打開中的區域。Beyer 與 total-body PET 相關綜述已指出 AI 在多參數分析和 multitracer alignment 的角色；真正的研究空白則在於動力學參數能否被更快、更穩定地估計，並保留臨床可解釋性。</p>
        <ul>
          <li><strong>可切入處：</strong> kinetic parameter estimation、低劑量動態掃描、multitracer sequence alignment。</li>
          <li><strong>資料門檻：</strong> 需要 total-body PET 平台與動態掃描資料，通常較適合多中心合作或已有設備的單位。</li>
          <li><strong>容易重複的位置：</strong> 只有技術展示、沒有定量終點，也沒有和現有 kinetic model 比較。</li>
        </ul>
      </section>

      <section class="topic-section reveal-block" id="topic-report" data-rail-title="報告與 QA">
        <h3>結構化報告草稿、品質提醒與 QA 輔助</h3>
        <div class="section-meter"></div>
        <p>這是最容易快速落地、也最容易被寫得過度樂觀的區塊。若輸入可結構化，LLM 可以幫忙整理病灶位置、定量欄位與比較模板；若輸入仍是自由文字，錯誤風險會快速上升。相對更穩的題目其實是 QA：影像品質異常、欄位缺漏、前次比較缺失、示蹤劑與病史不一致等提醒。</p>
        <ul>
          <li><strong>可切入處：</strong> JSON-to-report 草稿、structured QA checklist、DICOM / report consistency check。</li>
          <li><strong>資料門檻：</strong> 約 200 份以上去識別化報告與可萃取的結構化欄位，另需醫師審閱時間與錯誤類型作為終點。</li>
          <li><strong>容易重複的位置：</strong> 只測試通用聊天模型答題或改寫報告，沒有真實 workflow 指標。</li>
        </ul>
      </section>
    `
  },
  competitors: {
    title: "工具與競品",
    subtitle: "同一個題目若同時出現在公開挑戰賽、開源工具與商業工作站，通常表示它已經往標準化前進。這一頁把這三層放在一起看。",
    railTitle: "工具生態",
    railNote: "公開基準 / 開源工具 / 商業環節 / 重複風險",
    railItems: [
      { id: "tool-challenge", label: "公開挑戰賽" },
      { id: "tool-open", label: "開源工具" },
      { id: "tool-commercial", label: "商業工作站" },
      { id: "tool-maturity", label: "成熟度" }
    ],
    body: `
      <section class="workspace-intro reveal-block">
        <h2>研究題目是否容易重複前人，通常不只看論文量，也要看它有沒有公開 benchmark、是否已有穩定開源工具，以及市場端是否已經把它做成工作站功能。</h2>
        <p>這一頁只放目前可查證、且和核醫 AI 有直接關聯的節點；證據不足或命名不穩的產品不在這裡寫死。</p>
        <div class="hero-line"></div>
      </section>

      <section class="vendor-section reveal-block" id="tool-challenge" data-rail-title="公開挑戰賽">
        <h3>公開挑戰賽與 benchmark</h3>
        <div class="section-meter"></div>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>節點</th><th>目前覆蓋範圍</th><th>研究意義</th></tr>
            </thead>
            <tbody>
              <tr><td>autoPET I–III / 2024 多示蹤劑版本</td><td>FDG 與 PSMA PET/CT 全身病灶分割、多中心泛化</td><td>FDG generic segmentation 已有公開基線，單純重做分割的新意有限</td></tr>
              <tr><td>HECKTOR 2025</td><td>頭頸癌 PET/CT 分割、RFS 預測、HPV 狀態任務</td><td>顯示 PET 預後任務正往多中心與多終點前進</td></tr>
              <tr><td>PETRIC / STIR 生態</td><td>PET reconstruction challenge 與開源重建基礎設施</td><td>重建方法可公開比較，但臨床部署仍需額外量化驗證</td></tr>
            </tbody>
          </table>
        </div>
        <p class="work-note">目前沒有等同 autoPET 規模、被廣泛採用的公開 177Lu dosimetry benchmark。這也是 theranostics 題目仍保有空間的原因之一。</p>
      </section>

      <section class="vendor-section reveal-block" id="tool-open" data-rail-title="開源工具">
        <h3>開源工具與方法學節點</h3>
        <div class="section-meter"></div>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>工具 / 節點</th><th>用途</th><th>備註</th></tr>
            </thead>
            <tbody>
              <tr><td>STIR</td><td>PET / SPECT 重建基礎設施</td><td>UCL 維護，多年累積；是 PETRIC 等工作的底層之一</td></tr>
              <tr><td>PARALLELPROJ</td><td>快速 forward / back projection</td><td>適合 GPU 重建研究，已整合進 STIR 生態</td></tr>
              <tr><td>MONAI / nnU-Net</td><td>分割基線與原型開發</td><td>在 autoPET 類問題上已成事實上的標配基線</td></tr>
              <tr><td>PyRadiomics + IBSI</td><td>放射組學特徵與標準化</td><td>若做預測模型，IBSI 不是可有可無的附註</td></tr>
              <tr><td>OpenDose / OLINDA</td><td>劑量學基準工具</td><td>本身不是 AI，但可作為 AI dosimetry 的比較基線</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="vendor-section reveal-block" id="tool-commercial" data-rail-title="商業工作站">
        <h3>商業工作站已經涵蓋的環節</h3>
        <div class="section-meter"></div>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>環節</th><th>已可見的產品方向</th><th>研究上需要注意的地方</th></tr>
            </thead>
            <tbody>
              <tr><td>重建 / 去噪</td><td>多家掃描器與工作站已提供低劑量畫質改善</td><td>若只比畫質，通常會撞上已商品化區域；重點應回到量化與診斷終點</td></tr>
              <tr><td>病灶分割</td><td>全身 PET/CT lesion identification 已有產品化例子</td><td>公開性能細節有限，錯誤模式與適用範圍仍需本地驗證</td></tr>
              <tr><td>RPT dosimetry</td><td>MIM SurePlan MRT 已整合 177Lu / 90Y 等流程</td><td>若做研究，應聚焦臨床連結、時間效率與不確定度，而非複製工作站功能</td></tr>
              <tr><td>workflow / reporting</td><td>多為結構化輸出與半自動流程，真正全自動判讀仍少</td><td>適合從 QA、模板草稿與一致性檢查切入</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="essay-section reveal-block" id="tool-maturity" data-rail-title="成熟度">
        <h3>如何判讀成熟度與重複風險</h3>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>題目類型</th><th>成熟度</th><th>重複風險</th></tr>
            </thead>
            <tbody>
              <tr><td>FDG generic 全身分割</td><td>高</td><td>高</td></tr>
              <tr><td>PET / MPI 畫質提升</td><td>高</td><td>高，除非有量化或前瞻性終點</td></tr>
              <tr><td>177Lu 劑量學與後治療工作流</td><td>中</td><td>中，仍可差異化</td></tr>
              <tr><td>FAPI 與新示蹤劑 AI</td><td>低到中</td><td>低，但資料與標準化挑戰較大</td></tr>
              <tr><td>QA / structured reporting</td><td>中</td><td>中，需靠真實 workflow 指標形成差異</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    `
  },
  landscape: {
    title: "學術現況",
    subtitle: "以下整理的是目前可公開查到、在核醫 AI 或高度相鄰領域持續輸出的學術群組、挑戰賽與方法學節點。資料密度和證據層級各有不同，因此每一列都只寫到公開證據能支持的程度。",
    railTitle: "學術群組",
    railNote: "北美 / 歐洲 / 亞太 / 方法學節點 / 共同走向",
    railItems: [
      { id: "landscape-na", label: "北美" },
      { id: "landscape-eu", label: "歐洲" },
      { id: "landscape-apac", label: "亞太" },
      { id: "landscape-nodes", label: "方法學節點" },
      { id: "landscape-trend", label: "共同走向" }
    ],
    body: `
      <section class="workspace-intro reveal-block">
        <h2>如果目的是避免做白工，單看單篇 paper 不夠；更有用的是看哪些團隊在同一方向上持續累積、哪些問題已經形成社群基準、哪些地方還沒有共同標準。</h2>
        <p>這裡列出的團隊與節點，主要根據近年的綜述、群組頁、挑戰賽與方法學論文整理。重點放在「他們持續在做什麼」，而不是列完整人名錄。</p>
        <div class="hero-line"></div>
      </section>

      <section class="essay-section reveal-block" id="landscape-na" data-rail-title="北美">
        <h3>北美</h3>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>機構 / 團隊</th><th>目前可見焦點</th><th>備註</th></tr>
            </thead>
            <tbody>
              <tr><td>UBC / BC Cancer，Rahmim</td><td>radiotheranostics、劑量學、自動 lesion tracking、digital twin</td><td>近年在 Bethesda Report、radiotheranostics review 與 theranostics 框架中都很活躍</td></tr>
              <tr><td>MGH / Harvard，Li 與 El Fakhri</td><td>PET 重建、量化、動態 PET、多模態分析</td><td>偏方法與臨床採集能力兼具的重建 / quantification 生態</td></tr>
              <tr><td>Washington University，Jha</td><td>task-based AI evaluation、image quality assessment</td><td>對「只看分數」的研究方式有持續方法學批判</td></tr>
              <tr><td>UW–Madison，Bradshaw</td><td>核醫 AI 臨床價值與 workflow 評估</td><td>重點常落在 value proposition 與臨床落地，而非只看模型性能</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="essay-section reveal-block" id="landscape-eu" data-rail-title="歐洲">
        <h3>歐洲</h3>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>機構 / 團隊</th><th>目前可見焦點</th><th>備註</th></tr>
            </thead>
            <tbody>
              <tr><td>Geneva University Hospital，Zaidi</td><td>attenuation correction、multitracer segmentation、RPT dosimetry、SPECT quantification</td><td>近年論文輸出非常密集，尤其在 AC、劑量學與 transformer 類方法</td></tr>
              <tr><td>Medical University of Vienna，Beyer</td><td>total-body PET、multitracer alignment、臨床前瞻部署</td><td>TB-PET 與多示蹤劑序列分析是目前重要增長點</td></tr>
              <tr><td>UCL / STIR 生態，Thielemans</td><td>開源重建、投影運算、挑戰賽基礎設施</td><td>若研究題目碰到 PET reconstruction，幾乎繞不開 STIR / PARALLELPROJ</td></tr>
              <tr><td>Institut Curie，Buvat</td><td>LLM 批判、radiomics 方法學、可靠性評估</td><td>對過度宣稱的 AI 研究保持明確保留，是很重要的校正聲音</td></tr>
              <tr><td>CREATIS / IBSI，Hatt</td><td>放射組學標準化與特徵穩定性</td><td>若做 radiomics，不理解 IBSI 幾乎無法說明方法學品質</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="essay-section reveal-block" id="landscape-apac" data-rail-title="亞太">
        <h3>亞太</h3>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>機構 / 團隊</th><th>目前可見焦點</th><th>備註</th></tr>
            </thead>
            <tbody>
              <tr><td>Hokkaido University / TOP GUN，Hirata 等</td><td>LLM 在核醫的應用、低劑量 PET、專用 PET 場景</td><td>在生成式 AI 與核醫結合的亞洲文獻中能見度高</td></tr>
              <tr><td>台灣臨床中心（台大、北榮、長庚、成大等）</td><td>具備 PSMA、甲狀腺、心臟核醫與 PET/CT 的臨床資料基礎</td><td>國際高引用 AI 論文量仍少，反而代表區域性疾病題目仍有差異化空間</td></tr>
              <tr><td>亞太新示蹤劑場景</td><td>FAPI、甲狀腺與區域性癌種的臨床累積</td><td>在公開 benchmark 不足的情況下，臨床資料特色本身就是研究優勢</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="essay-section reveal-block" id="landscape-nodes" data-rail-title="方法學節點">
        <h3>方法學與社群節點</h3>
        <p>目前最需要追的節點並不只有單一實驗室。<strong>autoPET</strong> 代表全身 PET/CT 分割的公開基準；<strong>HECKTOR</strong> 代表 PET/CT 在分割與預後任務上的多中心推進；<strong>PETRIC / STIR</strong> 代表重建生態；<strong>IBSI</strong> 代表 radiomics 的最低方法學要求；<strong>Bethesda Report 2024</strong> 則反映核醫社群對 open science、LLM、value proposition 與 reimbursement 的共同焦慮。</p>
        <p>如果一個題目完全對不上這些節點，通常有兩種可能：要嘛它真的很新，要嘛它還沒有形成可驗證的共同語言。兩者都不一定是壞事，但研究設計的風險差很多。</p>
      </section>

      <section class="essay-section reveal-block" id="landscape-trend" data-rail-title="共同走向">
        <h3>近年的共同走向</h3>
        <ul>
          <li>從單純模型展示，轉向 <strong>reader study、workflow integration、time saving</strong> 與 <strong>clinical value proposition</strong>。</li>
          <li>從單模態問題，轉向 <strong>PET/CT + clinical data</strong>、多時間點影像、multitracer analysis 與 theranostic decision support。</li>
          <li>從封閉方法比較，轉向 <strong>公開資料、開源工具、挑戰賽</strong> 與方法學透明度。</li>
          <li>在生成式 AI 方面，主流態度仍偏保守：<strong>草稿、摘要、QA</strong> 可以做，<strong>自由文字直接判讀</strong> 仍缺乏足夠可靠性。</li>
        </ul>
        <p class="work-note">上述整理主要依據：Artificial Intelligence for PET and SPECT Image Enhancement（JNM 2024）、Bethesda Report 2024、autoPET III / HECKTOR 2025 官方頁、STIR / PARALLELPROJ 文件、MIM SurePlan MRT 產品頁，以及各學術群組公開頁面與近年方法學論文。</p>
      </section>
    `
  },
  clinical: {
    title: "AI 醫材臨床試驗與合規",
    subtitle: "整理 AI 醫療器材自預期用途界定、臨床試驗設計、IRB 審查、技術文件準備至上市後監測的主要架構。",
    railTitle: "合規工作流",
    railNote: "以課文版內容為主軸，整合另外三份整理稿中的法規、IRB、技術文件與案例資訊。",
    railItems: [
      { id: "clinical-scope", label: "起點與用途定義" },
      { id: "clinical-tier", label: "影響層級與研究問題" },
      { id: "clinical-trial", label: "試驗設計選擇" },
      { id: "clinical-irb", label: "IRB 與受試者保護" },
      { id: "clinical-validation", label: "技術文件與軟體確效" },
      { id: "clinical-cases", label: "Deep01 / aetherAI" },
      { id: "clinical-checklist", label: "執行查核表" }
    ],
    body: `
      <section class="workspace-intro reveal-block">
        <h2>本單元整理 AI 醫療器材由研究開發進入臨床應用時，臨床試驗與法規合規需要同步處理的核心工作。</h2>
        <p>內容主幹以「AI 醫療應用與產品臨床試驗執行」課文版為基礎，並整合另外三份整理稿中的 TFDA 指引、IRB 審查、受試者保護、軟體確效與產業案例，形成一份可供教學與專題規劃使用的摘要。</p>
        <div class="hero-line"></div>
      </section>

      <section class="essay-section reveal-block" id="clinical-scope" data-rail-title="起點與用途定義">
        <h3>預期用途界定是後續分類、試驗與送件的起點</h3>
        <p>四份文件均指出，AI 醫療器材的起點不在於模型分數本身，而在於 <strong>intended use</strong>，亦即預期用途的明確界定。預期用途應包含使用者、使用場域、輸入資料型態、輸出形式，以及該輸出是否會影響臨床診斷、治療或照護流程。</p>
        <p>若預期用途界定不清，後續的 TFDA 分類、IRB 風險判定、主要終點設定與樣本數估算都容易失準。因此，臨床團隊在規劃初期即需先確認該工具究竟屬於流程輔助、病人參與支持，或直接介入臨床決策的產品。</p>
      </section>

      <section class="essay-section reveal-block" id="clinical-tier" data-rail-title="影響層級與研究問題">
        <h3>Tier A / B / C 分類可作為研究設計與終點選擇的基礎</h3>
        <p>課文版將 AI 影響分為三層：<strong>Tier A workflow tool</strong>、<strong>Tier B engagement / health promotion</strong>、<strong>Tier C decision / clinical outcome</strong>。此一分類的價值，在於可協助研究者依風險與影響程度選擇合適的試驗設計與評估指標。</p>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>層級</th><th>常見 AI 類型</th><th>主要 endpoint</th></tr>
            </thead>
            <tbody>
              <tr><td>Tier A</td><td>病摘草稿、報告排序、排程、行政自動化</td><td>時間、錯誤率、漏做率、使用者負擔</td></tr>
              <tr><td>Tier B</td><td>風險提醒、衛教推播、回診提醒、慢病管理</td><td>參與率、遵從性、檢查完成率、回診率</td></tr>
              <tr><td>Tier C</td><td>CDSS、影像判讀 AI、分流與治療建議</td><td>決策品質、住院、併發症、成本效益</td></tr>
            </tbody>
          </table>
        </div>
        <p>若僅停留於模型層驗證，而未進一步評估工作流程改變、採納情形與臨床效益，則即使技術表現良好，也未必足以支持實際導入。</p>
      </section>

      <section class="essay-section reveal-block" id="clinical-trial" data-rail-title="試驗設計選擇">
        <h3>試驗設計應配合風險層級與產品定位</h3>
        <p>四份文件與課文版的共識均為：<strong>match the design to the AI tier</strong>。流程型工具未必一開始即需要隨機對照試驗，但若工具會影響病人行為、醫療資源配置或臨床決策，則不宜僅以簡單前後比較作為主要證據。</p>
        <ul>
          <li><strong>Before-after / controlled before-after</strong>：適用於報告草稿、清單排序、排程與行政流程輔助等工作流程工具。若能加入對照單位，可提升推論可信度。</li>
          <li><strong>Pragmatic RCT</strong>：適用於病人提醒、臨床決策支援、風險分層等可能影響行為與判斷的工具。評估重點除模型分數外，亦包括實際採納率與流程結果。</li>
          <li><strong>Stepped-wedge cluster RCT</strong>：適用於跨院導入、政策型導入與系統層產品，可在逐步全面上線的同時保留比較基礎。</li>
        </ul>
        <p>常見問題並非是否進行 RCT，而是主要終點設定是否與產品定位一致。例如自動病摘工具若僅以文字相似度衡量，而未評估時間節省、錯誤率或工作負荷，則難以支持臨床價值主張。</p>
      </section>

      <section class="essay-section reveal-block" id="clinical-irb" data-rail-title="IRB 與受試者保護">
        <h3>IRB 審查的核心在於風險、責任分工與資料治理</h3>
        <p>三份 Markdown 均強調臨床機構 SOP 與受試者保護要求，與課文版內容相互補充。IRB 審查關注的重點包括：資料是否可識別、是否需取得知情同意、AI 輸出是否進入臨床決策、人員是否保有覆核與修正權限，以及異常事件通報機制是否明確。</p>
        <ul>
          <li>若使用病歷、影像、檢驗或跨系統資料，必須交代去識別化、重連權限、保存期限與存取控管。</li>
          <li>若要申請免除知情同意，理由不能只寫「回溯性」；還要說明最小風險、無法實際逐一取得同意，以及免同意不會損及受試者權益。</li>
          <li>若涉及脆弱族群、未成年人或會影響治療選擇的高風險工具，IRB 與院內網路科技審查都會更嚴格。</li>
        </ul>
        <p>就治理觀點而言，AI 可作為輔助工具，但臨床責任並不因此移轉。故研究計畫中需明確記載人工覆核機制與責任歸屬。</p>
      </section>

      <section class="essay-section reveal-block" id="clinical-validation" data-rail-title="技術文件與軟體確效">
        <h3>技術文件、軟體確效與可用性驗證應與臨床試驗同步規劃</h3>
        <p>另外三份整理稿對技術文件要求有較具體的整理。若產品屬於 SaMD 或 AI/ML 醫材，通常需同步處理 <strong>Software Validation</strong>、<strong>Usability Validation</strong>、資安與版本管理、訓練與測試資料分離，以及資料外洩防範等事項。</p>
        <div class="mini-table">
          <table>
            <thead>
              <tr><th>合規支柱</th><th>臨床端要確認什麼</th><th>常見失誤</th></tr>
            </thead>
            <tbody>
              <tr><td>資料集治理</td><td>訓練集、測試集、外部驗證集是否真的分開</td><td>同一病人跨資料集、時間外洩、標註與臨床真值混亂</td></tr>
              <tr><td>軟體確效</td><td>版本、需求、測試紀錄與失效模式是否可追溯</td><td>只有模型效能表，沒有軟體生命週期文件</td></tr>
              <tr><td>可用性驗證</td><td>使用者是否看得懂、會不會誤用、警示是否造成疲乏</td><td>介面是工程角度可用，臨床角度不可用</td></tr>
              <tr><td>上市後監測</td><td>資料漂移、模型漂移、override 與不良事件是否可追蹤</td><td>把上線當結案，缺少後續監測</td></tr>
            </tbody>
          </table>
        </div>
        <p>因此，將法規、IRB 與技術文件要求自專案初期即納入規劃，通常比於開發後期再補件更能降低返工風險。</p>
      </section>

      <section class="essay-section reveal-block" id="clinical-cases" data-rail-title="Deep01 / aetherAI">
        <h3>Deep01 與 aetherAI 可作為台灣 AI 醫材導入流程的案例</h3>
        <p>三份整理稿皆以 <strong>Deep01 DeepCT</strong> 與 <strong>aetherAI Endo</strong> 作為台灣較具代表性的案例。其參考價值不僅在於效能數據，而在於可觀察其如何完成 CADe / CADx 定位、臨床場景聚焦、法規文件準備與院內系統整合。</p>
        <ul>
          <li><strong>Deep01</strong>：可代表影像分流與異常偵測類產品，觀察重點包括 AI 輸出如何接入 HIS、PACS 與臨床工作流程。</li>
          <li><strong>aetherAI Endo</strong>：可代表即時輔助與 CADe 類產品，觀察重點包括敏感度之外的誤報處理、提示方式、學習曲線與操作負荷。</li>
        </ul>
        <p>對核醫團隊而言，這些案例可用來理解 AI 工具若要從研究題目進一步發展為可部署產品，通常需同時滿足技術可行性、法規可追溯性與臨床整合性。</p>
      </section>

      <section class="essay-section reveal-block" id="clinical-checklist" data-rail-title="執行查核表">
        <h3>一頁式執行查核表</h3>
        <ul>
          <li>我能用一句話說清楚 intended use、使用者、輸入與輸出。</li>
          <li>我已判斷這是 Tier A、B 或 C，也知道對應的 trial design 為何。</li>
          <li>我知道它是不是 SaMD、CADe 或 CADx，是否落入 TFDA AI/ML 指引範圍。</li>
          <li>我有 internal validation，也規劃了 external validation、subgroup analysis 與 calibration。</li>
          <li>我有定義 primary endpoint，而且它是臨床或流程端點，不只是模型指標。</li>
          <li>我有記錄使用率、採納率、override 原因與使用者回饋。</li>
          <li>我有資料治理、知情同意、免同意條件、權限控管與資安規劃。</li>
          <li>我有模型漂移、異常事件、停用條件與版本管理機制。</li>
        </ul>
        <p class="work-note">若上述任一項目尚未明確，通常表示該方案仍停留在研究規劃階段，尚不足以直接進入正式臨床試驗或醫材送件流程。</p>
      </section>
    `
  }
};

const contentDisplay = document.getElementById("content-display");
const navItems = document.querySelectorAll(".nav-link");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
let pageAnimationContext;

function renderRail(items, title, note) {
  return `
    <aside class="page-rail">
      <div class="rail-shell">
        <p class="rail-eyebrow">閱讀索引</p>
        <p class="rail-title">${title}</p>
        <p class="rail-note">${note}</p>
        <ul class="rail-list">
          ${items
            .map(
              (item) => `
                <li>
                  <button type="button" data-scroll-target="${item.id}">${item.label}</button>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    </aside>
  `;
}

function renderPage(pageKey, page) {
  return `
    <article class="workspace-page" data-page-key="${pageKey}">
      <div class="page-progress"><span class="page-progress-bar"></span></div>
      <div class="page-header">
        <p class="page-kicker">${page.title}</p>
        <h1>${page.subtitle}</h1>
      </div>
      <div class="workspace-grid">
        ${renderRail(page.railItems, page.railTitle, page.railNote)}
        <div class="workspace-main">${page.body}</div>
      </div>
    </article>
  `;
}

function attachDynamicHandlers() {
  const reader = document.querySelector(".reader");
  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTarget);
      if (!target) return;
      const top = target.offsetTop - 22;
      reader.scrollTo({ top, behavior: "smooth" });
    });
  });
}

function setActiveRail(id) {
  document.querySelectorAll(".rail-list button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.scrollTarget === id);
  });
}

function runPageAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  if (pageAnimationContext) pageAnimationContext.revert();

  const reader = document.querySelector(".reader");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({ scroller: reader });

  pageAnimationContext = gsap.context(() => {
    if (reduceMotion) {
      gsap.set(".page-header, .workspace-intro, .essay-section, .topic-section, .vendor-section", { clearProps: "all" });
      return;
    }

    const article = document.querySelector(".workspace-page");
    const progressBar = document.querySelector(".page-progress-bar");
    const rail = document.querySelector(".page-rail");

    gsap.set(".page-header h1, .workspace-intro h2, .essay-section h3, .topic-section h3, .vendor-section h3", {
      "--marker-scale": 0
    });

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".page-kicker", { y: 18, autoAlpha: 0, duration: 0.42 })
      .from(".page-header h1", { y: 34, autoAlpha: 0, duration: 0.72 }, "-=0.16")
      .to(".page-header h1", { "--marker-scale": 1, duration: 0.68, ease: "power2.out" }, "-=0.3")
      .from(".workspace-intro > *", { y: 22, autoAlpha: 0, stagger: 0.08, duration: 0.62 }, "-=0.25");

    gsap.to(".hero-line", {
      scaleX: 1,
      duration: 0.9,
      ease: "power2.out"
    });

    ScrollTrigger.create({
      trigger: article,
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

    ScrollTrigger.matchMedia({
      "(min-width: 1121px)": () => {
        if (!rail) return;
        ScrollTrigger.create({
          trigger: ".workspace-grid",
          start: "top top+=28",
          end: "bottom bottom-=28",
          pin: rail,
          pinSpacing: false,
          anticipatePin: 1
        });
      }
    });

    ScrollTrigger.batch(".reveal-block", {
      start: "top 82%",
      once: true,
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.72, ease: "power2.out", stagger: 0.08, clearProps: "transform" }
        )
    });

    gsap.utils.toArray(".essay-section h3, .topic-section h3, .vendor-section h3").forEach((heading) => {
      gsap.to(heading, {
        "--marker-scale": 1,
        duration: 0.52,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 82%",
          once: true
        }
      });
    });

    gsap.utils.toArray(".topic-section, .vendor-section, .essay-section").forEach((section) => {
      const meter = section.querySelector(".section-meter");
      ScrollTrigger.create({
        trigger: section,
        start: "top 48%",
        end: "bottom 52%",
        onToggle: (self) => {
          if (self.isActive) setActiveRail(section.id);
        }
      });

      if (meter) {
        gsap.to(meter, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            end: "top 36%",
            scrub: 0.7
          }
        });
      }
    });

    const firstTarget = document.querySelector("[data-scroll-target]");
    if (firstTarget) setActiveRail(firstTarget.dataset.scrollTarget);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, contentDisplay);
}

function attachAmbientMotion() {
  if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.to(".orbit-one", { x: 28, y: -22, rotate: 16, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".orbit-two", { x: -34, y: 24, rotate: -12, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".line-one", { x: 18, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".line-two", { x: -20, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });

  document.querySelectorAll(".nav-link").forEach((item) => {
    const moveX = gsap.quickTo(item, "x", { duration: 0.26, ease: "power3.out" });
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      moveX((event.clientX - rect.left - rect.width / 2) * 0.035);
    });
    item.addEventListener("pointerleave", () => moveX(0));
  });
}

function mountPage(key) {
  const page = RESEARCH_PAGES[key] || RESEARCH_PAGES.overview;
  contentDisplay.innerHTML = renderPage(key, page);
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.page === key));
  attachDynamicHandlers();
  sidebar.classList.remove("is-open");
  sidebarOverlay.classList.remove("is-visible");
  window.location.hash = key;
  document.querySelector(".reader").scrollTop = 0;
  requestAnimationFrame(() => runPageAnimations());
}

navItems.forEach((item) => item.addEventListener("click", () => mountPage(item.dataset.page)));

mobileMenuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("is-open");
  sidebarOverlay.classList.toggle("is-visible");
});

sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.remove("is-open");
  sidebarOverlay.classList.remove("is-visible");
});

attachAmbientMotion();
mountPage(window.location.hash.replace("#", "") || "overview");
