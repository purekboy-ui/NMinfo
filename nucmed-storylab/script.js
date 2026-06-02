const STORY_PAGES = {
  overview: {
    title: "工作區總覽",
    subtitle: "四支片共用的工作重點是：病人在哪一刻會卡住、哪個資訊必須提早講、哪些句子一旦說過頭就會失真。",
    railTitle: "總覽索引",
    railNote: "用途 / 原則 / 四支片差異 / 共通失誤 / 審稿順序",
    railItems: [
      { id: "overview-purpose", label: "這個工作區的用途" },
      { id: "overview-principles", label: "寫片原則" },
      { id: "overview-differences", label: "四支片差在哪" },
      { id: "overview-failures", label: "共通失誤點" },
      { id: "overview-workflow", label: "實際使用順序" }
    ],
    body: `
      <section class="workspace-intro reveal-block">
        <h2>這個工作區整理的是四支片的情緒起點、鏡頭節奏與醫療核對點。</h2>
        <p>每一頁都以病人主視角出發，但重點不只在情緒，而是把情緒和流程對齊：哪一句該先講、哪一段要留白、哪個提醒一定要放在對的鏡頭旁邊。</p>
        <p>FDG PET/CT、PSMA PET、Ra-223 和 I-131 面對的是不同的焦慮來源。把四支片拆開寫，才看得出來每一支片真正承擔的是哪一段處境。</p>
        <div class="hero-line"></div>
      </section>

      <section class="essay-section reveal-block" id="overview-purpose" data-rail-title="這個工作區的用途">
        <h3>這個工作區在做什麼</h3>
        <p>用途是把四支核醫衛教影片先寫到能拍，讓導演、旁白、院內審稿與醫療團隊能看見同一份底稿：場景順序、旁白方向、病人語氣、以及每一場必須交代的醫療重點。</p>
        <p>FDG PET/CT 處理陌生與未知；PSMA PET 處理數值變化卻還沒有定位的懸著；Ra-223 處理疼痛、功能受限與治療邊界；I-131 處理住院隔離與返家後的生活安排。這四種情緒如果用同一套句型去寫，最後會失去真實感。</p>
      </section>

      <section class="essay-section reveal-block" id="overview-principles" data-rail-title="寫片原則">
        <h3>寫片原則</h3>
        <ul>
          <li>先讓病人知道自己正面對的是什麼，再講流程。沒被定位的病人，後面每一句話都容易聽成威脅。</li>
          <li>高風險提醒一定放在對的步驟旁邊。空腹、停藥、CBC、家屬接觸限制、返家清潔，不能放片尾小字。</li>
          <li>心理學只拿來降低失控感，不拿來推動決定。尤其治療片，不能拍成「如果你勇敢就去做」。</li>
          <li>人物反應要保留層次。有人會沉默、有人會一直問細節、有人只是在回家後才開始卡住。</li>
          <li>旁白的功能是補足理解，不是替人物下結論。真正能建立信任的是資訊位置正確、措辭克制、細節完整。</li>
        </ul>
      </section>

      <section class="essay-section reveal-block" id="overview-differences" data-rail-title="四支片差在哪">
        <h3>四支片子的差異，不只在主題，也在情緒深度</h3>
        <p><strong>FDG PET/CT</strong> 的核心是第一次被安排做全身分期時的未知感。這支片要把通知單、空腹、等待與掃描拆成可預測的段落。</p>
        <p><strong>PSMA PET</strong> 的病人常已經歷過抽血、追蹤、數值波動。他最難受的，不一定是痛，而是 PSA 有變化，卻還看不到位置。這支片不能激動，只能慢慢把定位這件事說清楚。</p>
        <p><strong>Ra-223</strong> 片子的關鍵是邊界與尊嚴。病人多半已經走到疼痛與功能受限這一段，適合與不適合都要講明白，不能把治療拍成鼓舞式敘事。</p>
        <p><strong>I-131</strong> 片子的重心在生活安排。低碘飲食、住院隔離、返家後的接觸限制與家庭互動，都是觀眾真正會帶回去反覆想的部分。</p>
      </section>

      <section class="essay-section reveal-block" id="overview-failures" data-rail-title="共通失誤點">
        <h3>四支片最常出現的共通失誤</h3>
        <ul>
          <li><strong>太早給情緒解答：</strong> 觀眾還沒知道流程，影片就先下「你會沒事」或「勇敢面對」這類結論，容易失真。</li>
          <li><strong>醫療提醒放錯位置：</strong> 空腹、糖尿病調整、CBC、返家限制等訊息若放在片尾，實用性會明顯下降。</li>
          <li><strong>旁白說得比人物還多：</strong> 人物只剩功能性台詞，整支片會變成說明書配畫面。</li>
          <li><strong>把鏡頭焦點放到設備而不是處境：</strong> 尤其 FDG、PSMA 容易拍成機器展示；Ra-223、I-131 則容易拍成情緒過飽和。</li>
        </ul>
      </section>

      <section class="essay-section reveal-block" id="overview-workflow" data-rail-title="實際使用順序">
        <h3>實際使用順序</h3>
        <p>通常會先看總覽，確認今天要處理的是哪一種情緒與哪一組風險資訊，再進單片頁逐 scene 比對：場景順序、旁白語氣、人物台詞、生活感與醫療提醒是否對齊。整支片的節奏穩下來之後，最後再回頭核對院內版本與法規用語。</p>
        <div class="info-strip">
          <p>內部審稿通常至少要再看三件事：是否出現保證式語句、是否有情緒過滿的鏡頭、以及所有高風險資訊是否真的放在對的場景。</p>
        </div>
      </section>
    `
  },
  fdg: {
    title: "FDG PET/CT",
    subtitle: "這支片的主線是第一次做全身分期的病人，如何從慌亂走到知道今天會發生什麼。",
    railTitle: "FDG 工作稿",
    railNote: "這支片的節奏要慢，讓病人先被接住，再慢慢知道空腹、等待、平躺各自為什麼重要。",
    intro: [
      "這支片要處理的是通知單一來，病人心裡那種一下子把最壞可能都演完的感覺。能讓人穩下來的，通常是很具體的流程資訊：今天會先空腹、到院會問哪些事、打藥後為什麼要安靜、掃描床上要躺多久。",
      "只要這幾件事講清楚，病人通常就不會一直把自己丟進災難化想像裡。"
    ],
    railItems: [
      { id: "fdg-opening", label: "先定主線" },
      { id: "fdg-scene-1", label: "通知單那一晚" },
      { id: "fdg-scene-2", label: "空腹的早上" },
      { id: "fdg-scene-3", label: "到院報到" },
      { id: "fdg-scene-4", label: "打藥後等待" },
      { id: "fdg-scene-5", label: "上掃描床" },
      { id: "fdg-scene-6", label: "做完以後" },
      { id: "fdg-check", label: "拍攝前核對" }
    ],
    scenes: [
      {
        id: "fdg-scene-1",
        number: "Scene 1",
        title: "通知單上的那幾個字",
        lead: "病人真正先怕的，通常不是機器，而是『全身』『分期』這幾個字在腦子裡的重量。",
        paragraphs: [
          "<strong>畫面：</strong> 晚上、床邊、手機通知跳出來。鏡頭先停在手和臉，不急著切任何儀器畫面。讓觀眾先進到那種看到通知後突然靜下來的空氣。",
          "<strong>旁白：</strong> 這一段不要裝作大家都很平靜。可以直接說：很多人看到 PET/CT、全身、分期，第一個反應不是理解流程，而是心裡先往最壞的地方跑。",
          "<strong>人物反應：</strong> 不用哭，也不用過度戲劇化。只要有一個停住的表情，或一句很輕的『是不是事情比我想的嚴重』，就夠了。",
          "<strong>這場一定要交代：</strong> PET/CT 在這裡是拿來看病灶分布、治療反應或復發情形，不是當場宣判。觀眾必須在第一場就知道，這是用來畫地圖。"
        ],
        checks: [
          "不要把 PET 影像當成懸疑片預告。",
          "不要在這裡直接講結果或療程選擇。"
        ]
      },
      {
        id: "fdg-scene-2",
        number: "Scene 2",
        title: "空腹的早晨，重點是把理由講清楚",
        lead: "空腹很容易拍成苦情，但病人真正需要知道的是：這樣做和影像準確度有直接關係。",
        paragraphs: [
          "<strong>畫面：</strong> 家裡餐桌有早餐味，病人只拿白開水。最好有家人默默幫忙把吃的收遠一點，那個動作比安慰更有用。",
          "<strong>旁白：</strong> 直接講白話：空腹至少 6 小時、通常可以喝水，目的是避免血糖和肌肉活動影響藥物分布。這不是細節，而是畫面能不能乾淨的重要前提。",
          "<strong>台詞方向：</strong> 家人可以說『今天先把這段走完，回來再好好吃』。這種話比較像真的日常，不像為了療癒而療癒。",
          "<strong>這場一定要交代：</strong> 糖尿病、胰島素、口服降血糖藥如果有特殊調整，一定要提早和院方確認。這句不能省。"
        ],
        checks: [
          "別用『忍一下就好』這種太輕的說法。",
          "空腹時間不要寫死成院內未必一致的版本時，旁白可留『依通知單與院方安排』。"
        ]
      },
      {
        id: "fdg-scene-3",
        number: "Scene 3",
        title: "到院後先把會卡住的事講出來",
        lead: "病人最需要的不是被叫去配合，而是知道自己可以先把困難說出來。",
        paragraphs: [
          "<strong>畫面：</strong> 報到櫃檯、護理師坐下來對著病人說話，不要站著問。鏡頭要讓人感覺這是在對答案，不是在走形式。",
          "<strong>旁白：</strong> 這裡可以把懷孕、哺乳、糖尿病、發燒、怕打針、怕密閉、躺不住、近幾天有沒有做其他檢查，一次講清楚。重點不是列 checklist，而是讓病人知道：這些本來就該先講。",
          "<strong>人物互動：</strong> 最好有一句工作人員問『你現在最擔心哪一段』。這種句子很短，但能讓整支片從說明片變成真的有人在接住病人。",
          "<strong>這場一定要交代：</strong> 問診不是繁瑣，是為了影像品質和病人安全。"
        ],
        checks: [
          "避免用『放心交給我們』這種太大包的安撫。",
          "工作人員語氣要平穩，不要像背稿。"
        ]
      },
      {
        id: "fdg-scene-4",
        number: "Scene 4",
        title: "打藥之後，真正重要的是安靜下來",
        lead: "很多人以為打完藥就是等。其實這一段是在幫影像不要被多餘的活動干擾。",
        paragraphs: [
          "<strong>畫面：</strong> 等待室微光、棉被、手機被蓋住，肩膀慢慢放鬆。這場最好留白，不要剪太快。",
          "<strong>旁白：</strong> 可以很直接地說：藥物會去代謝活躍的地方，所以說話太多、滑手機、肌肉一直出力，都可能讓本來不該亮的地方一起亮。",
          "<strong>病人心聲：</strong> 這裡比較適合內心旁白，例如『原來今天我不是什麼都不用做，而是要讓自己慢下來』。語氣不要太文學，平常話就好。",
          "<strong>這場一定要交代：</strong> 注射後通常要安靜等待約一小時，少講話、少活動、盡量放鬆。"
        ],
        checks: [
          "不要把等待室拍成神秘儀式。",
          "不要讓病人像在『修行』，重點是實際配合影像需求。"
        ]
      },
      {
        id: "fdg-scene-5",
        number: "Scene 5",
        title: "上掃描床前，先把感受講清楚",
        lead: "這一段不是要說『不要怕』，而是要讓觀眾先知道床會動、機器會靠近、整段大概多久。",
        paragraphs: [
          "<strong>畫面：</strong> 床面前進、機器靠近，但不要拍成巨大機械壓迫感。多給病人的手、呼吸、腳尖，少給炫技視角。",
          "<strong>旁白：</strong> 最有用的句子通常很普通：等一下床會慢慢移動，機器不會碰到你，最重要的是盡量不要動。這種預告比任何安慰都實際。",
          "<strong>人物互動：</strong> 放射師可以說『如果哪裡不舒服，先講，我們能先調整的就不要硬撐』。這句能把病人的尊嚴留住。",
          "<strong>這場一定要交代：</strong> 掃描約二十到三十分鐘，平躺不動很重要；若疼痛、咳嗽或無法久躺，要提早說。"
        ],
        checks: [
          "不要誇大成『很快一下就過』，對躺不住的人不公平。",
          "也不要強調機器多先進，這不是這一場的重點。"
        ]
      },
      {
        id: "fdg-scene-6",
        number: "Scene 6",
        title: "做完以後，還在等，但不再只是亂等",
        lead: "結尾不是豁然開朗，而是未知少了一塊，後面終於有東西可以接。",
        paragraphs: [
          "<strong>畫面：</strong> 走廊、喝水、去洗手間、和家屬會合。表情可以鬆一點，但不要像拿到好消息。",
          "<strong>旁白：</strong> PET/CT 做完，不代表事情立刻簡單。比較貼近現場的說法是：今天至少把這一段完成了，接下來可以等報告，也等主治醫師把這張地圖接回治療計畫。",
          "<strong>台詞方向：</strong> 如果要有一句對白，『還是會怕，但我現在知道剛剛那一段在做什麼』就夠了。這種句子比較真，也比較能讓病人點頭。",
          "<strong>這場一定要交代：</strong> 多喝水、多排尿；報告和後續判讀要回到原本醫療團隊。"
        ],
        checks: [
          "不要用『一切都會好』當收尾。",
          "不要在片尾偷講結果。"
        ]
      }
    ],
    wrapUp: [
      "開場是否已交代 PET/CT 在這裡的功能是定位與評估，而不是結果宣判。",
      "空腹、糖尿病與等待時的活動限制，是否都放在觀眾真正需要知道的場景裡。",
      "掃描床那一場是否把時間、姿勢與可先反映的不適講清楚。",
      "片尾是否回到報告與原本醫療團隊，而沒有提前給結果或過度安撫。"
    ],
    sources: [
      "RadiologyInfo.org：PET/CT Scan（病人頁面）",
      "Cleveland Clinic：PET Scan（流程與常見問題）",
      "院內 FDG PET/CT 通知單與空腹 / 糖尿病調整版本"
    ]
  },
  psma: {
    title: "PSMA PET",
    subtitle: "這支片的關鍵，是把「數字一直變，但位置還不知道」這種懸著的感覺拍出來。",
    railTitle: "PSMA 工作稿",
    railNote: "語氣要比 FDG 更沉著。觀眾常已經走過治療與追蹤，不適合再用太多鼓勵式文句。",
    intro: [
      "PSMA PET 的焦慮和 FDG 不一樣。很多病人不是第一次面對癌症，而是已經追蹤一段時間，抽血數字又上來了，卻還不知道問題到底在哪裡。這種不確定感很安靜，也很磨人。",
      "所以這支片不用炫技，只要慢慢把定位的意義說清楚。"
    ],
    railItems: [
      { id: "psma-opening", label: "先定主線" },
      { id: "psma-scene-1", label: "數字一直變" },
      { id: "psma-scene-2", label: "醫師怎麼解釋" },
      { id: "psma-scene-3", label: "到院前要先說" },
      { id: "psma-scene-4", label: "注射後等待" },
      { id: "psma-scene-5", label: "影像亮點的作用" },
      { id: "psma-scene-6", label: "回家路上" },
      { id: "psma-check", label: "拍攝前核對" }
    ],
    scenes: [
      {
        id: "psma-scene-1",
        number: "Scene 1",
        title: "只有 PSA 在變，人卻不知道位置在哪裡",
        lead: "這一場要把那種很悶的焦慮拍出來：不是劇烈的痛，而是每次抽血都像在等一個看不見的答案。",
        paragraphs: [
          "<strong>畫面：</strong> 幾張追蹤報告排在桌上，病人一張一張翻，沒有崩潰，只是看很久。這種安靜比大哭更像很多人的狀態。",
          "<strong>旁白：</strong> 可以直接說：有時候最折磨人的不是聽到壞消息，而是一直看到數字在變，卻還不知道它到底指向哪裡。",
          "<strong>人物語氣：</strong> 這場不需要把病人寫得多堅強，甚至一句『我不是不想面對，是根本不知道要先面對哪裡』就很夠。",
          "<strong>這場一定要交代：</strong> PSMA PET 常出現在初始高風險分期、生化復發或治療規劃這些情境。"
        ],
        checks: [
          "不要把 PSA 變化直接等同病情全面惡化。",
          "不要過早丟進專有名詞。"
        ]
      },
      {
        id: "psma-scene-2",
        number: "Scene 2",
        title: "醫師先把定位的功能講清楚",
        lead: "這場的功能是讓病人知道，PSMA PET 在這裡處理的是定位，而不是直接替病程下結論。",
        paragraphs: [
          "<strong>畫面：</strong> 診間裡，醫師拿紙畫很簡單的身體輪廓，說明如果有病灶，檢查是幫忙把位置找清楚。不要用過度精緻的 3D 模型，會讓畫面變太像科技宣傳。",
          "<strong>旁白：</strong> 比較自然的說法是：這個檢查不是要嚇你，而是讓接下來的討論不要只圍著一個數字打轉。",
          "<strong>台詞方向：</strong> 『先不要把檢查當成結果，它比較像把燈打亮』這種句子簡單，也有力量。",
          "<strong>這場一定要交代：</strong> PSMA PET 多半不需要像 FDG 那樣長時間禁食，但流程仍依院內通知為準。"
        ],
        checks: [
          "不要把『高階檢查』說成『一定更厲害』。",
          "醫師語氣要像在幫忙整理，不像在推銷選項。"
        ]
      },
      {
        id: "psma-scene-3",
        number: "Scene 3",
        title: "到院那天，先把會卡住的地方說在前面",
        lead: "病人有時候會以為自己要盡量配合、不麻煩別人。但實際上，怕打針、平躺會痛、排尿不順，這些越早講越好。",
        paragraphs: [
          "<strong>畫面：</strong> 病人坐下來對護理師說明自己怕打針、腰很酸、躺久會不舒服。鏡頭要讓人感覺『講出來是被允許的』。",
          "<strong>旁白：</strong> 這裡可以提醒幾件很實際的事：怕密閉空間、排尿困難、近期治療史、長時間平躺會痛，都應該先講。",
          "<strong>人物互動：</strong> 工作人員如果能說一句『你先講，我們後面才好安排』，整支片的信任感會差很多。",
          "<strong>這場一定要交代：</strong> PSMA PET 前先排尿常有幫助，影像判讀也仍然要回到病史與其他檢查一起看。"
        ],
        checks: [
          "不要把病人寫成永遠都很配合、沒有情緒。",
          "不要用『忍一下』處理平躺痛。"
        ]
      },
      {
        id: "psma-scene-4",
        number: "Scene 4",
        title: "等待的作用，是讓訊號慢慢站出來",
        lead: "這一段的氣氛要乾淨，不必像 FDG 那樣強調放鬆，但要讓觀眾知道等待本身是流程的一部分。",
        paragraphs: [
          "<strong>畫面：</strong> 靠椅、時鐘、病人坐著喝一點水。剪接不要過快，也不要故意煽情。",
          "<strong>旁白：</strong> 很簡單地說：注射後會等一段時間，讓藥物分布到該看的地方。這段時間沒有什麼表現要做，照著流程走就好。",
          "<strong>人物心聲：</strong> 如果要放內心旁白，可以偏向『原來今天不是要我做很多，而是照著走』，這種比較實際。",
          "<strong>這場一定要交代：</strong> 通常等待約一小時，再進入掃描。"
        ],
        checks: [
          "不要把等待拍成高科技冷感畫面。",
          "也不用把它拍得太療癒，這支片重點是理性。"
        ]
      },
      {
        id: "psma-scene-5",
        number: "Scene 5",
        title: "影像裡的亮點，只是把討論拉回具體",
        lead: "這一場最怕把亮點拍成『抓到了』。那樣太刺激，也太像已經下完結論。",
        paragraphs: [
          "<strong>畫面：</strong> 可以出現簡化影像，但不要做成雷達或追捕畫面。鏡頭重心還是病人和工作人員，影像只是一部分。",
          "<strong>旁白：</strong> 亮點不是一句話就能代表整個病程，它只是讓醫師比較有機會知道病灶可能在哪裡，後面該怎麼談。",
          "<strong>句子選擇：</strong> 『現在終於不是只看著數字猜』比『終於抓到病灶』更準，也更不會誤導。",
          "<strong>這場一定要交代：</strong> 影像判讀要結合病史、治療背景和其他檢查，不能單看一個亮點。"
        ],
        checks: [
          "不要把亮點做太亮、太戲劇化。",
          "不要讓旁白聽起來像宣布戰果。"
        ]
      },
      {
        id: "psma-scene-6",
        number: "Scene 6",
        title: "回家路上，至少接下來能談得更具體",
        lead: "這支片的收尾不適合熱血，反而適合一種很安靜的『終於比較知道在談什麼』。",
        paragraphs: [
          "<strong>畫面：</strong> 車窗、資料夾、配偶坐在旁邊。沒有人需要說太多，甚至一個點頭就夠。",
          "<strong>旁白：</strong> 做完 PSMA PET 不會馬上把未來說清楚，但常常能讓後面的討論不再只繞著 PSA 一個數字。",
          "<strong>人物對話：</strong> 如果要放一句，可以是『至少現在不是全黑』。這種說法比較克制，也比較真。",
          "<strong>這場一定要交代：</strong> 下一步還是要回到原本醫療團隊，由他們把報告和治療選擇接起來。"
        ],
        checks: [
          "不要用『終於放心了』當結尾。",
          "也不要暗示定位清楚就一定有比較好的結果。"
        ]
      }
    ],
    wrapUp: [
      "片頭是否把 PSA 變化與定位需求講清楚，而沒有直接把數值變化等同病情全面惡化。",
      "醫師說明那一場是否把 PSMA PET 放在治療討論前的定位工具位置，而不是高階科技展示。",
      "等待、排尿與掃描流程是否說到實際配合點，而不是只有情緒描述。",
      "結尾是否保留不確定性，並把下一步交回原本醫療團隊。"
    ],
    sources: [
      "EANM / SNMMI：PSMA PET imaging 相關程序與使用情境文件",
      "院內 PSMA PET 通知單與檢查前準備版本",
      "一般 PET/CT 病人教育資料（ACR / RSNA / RadiologyInfo）"
    ]
  },
  ra223: {
    title: "Ra-223",
    subtitle: "這支片最怕失真。它要陪病人面對疼痛與治療選擇，卻不能變成推動接受治療的情緒片。",
    railTitle: "Ra-223 工作稿",
    railNote: "重點是誠實、節制、尊嚴。這支片的溫度如果太滿，反而會變得不可信。",
    intro: [
      "Ra-223 不適合用熱血敘事。這一段病人常已經和骨轉移的疼痛共處一段時間，真正難的是日常動作被一點一點收走，還得一直做選擇。",
      "所以這支片要做的不是鼓舞，而是讓病人覺得自己被當成還有判斷力的大人。"
    ],
    railItems: [
      { id: "ra223-opening", label: "先定主線" },
      { id: "ra223-scene-1", label: "疼痛怎麼拍" },
      { id: "ra223-scene-2", label: "適應症邊界" },
      { id: "ra223-scene-3", label: "治療當天" },
      { id: "ra223-scene-4", label: "回家衛教" },
      { id: "ra223-scene-5", label: "療程中間" },
      { id: "ra223-scene-6", label: "怎麼收尾" },
      { id: "ra223-check", label: "拍攝前核對" }
    ],
    scenes: [
      {
        id: "ra223-scene-1",
        number: "Scene 1",
        title: "每一步都在痛",
        lead: "骨轉移的痛很少是戲劇性的爆發，更多時候是把一個人原本很普通的生活切得碎碎的。",
        paragraphs: [
          "<strong>畫面：</strong> 起身、坐下、轉身、端水杯，這些小動作就夠了。不要用喊痛或過度表演來替代真實感。",
          "<strong>旁白：</strong> 可以說：骨轉移帶來的，不只是痛，還有很多看起來很小、實際上每天都在消耗人的困難。",
          "<strong>人物狀態：</strong> 一個想撐住日常的人，語氣通常是忍著，不是大喊。這種克制感反而更像真的病人。",
          "<strong>這場一定要交代：</strong> 這支片的主題是症狀性骨轉移和生活功能，不是抽象地談存活曲線。"
        ],
        checks: [
          "不要把病人只拍成痛苦的符號。",
          "也不要避開痛，避太乾淨會像在假裝。"
        ]
      },
      {
        id: "ra223-scene-2",
        number: "Scene 2",
        title: "要不要做，先把邊界講清楚",
        lead: "這場是整支片的重心。真正的信任來自把適合與不適合講明白，而不是講很多希望。",
        paragraphs: [
          "<strong>畫面：</strong> 診間桌上放著影像與 CBC，醫師把條件一條條說清楚。鏡頭可以拍紙上的欄位，但不要做成炫目的資訊圖。",
          "<strong>旁白：</strong> 這裡一定要講明白：Ra-223 主要適用於症狀性骨轉移、沒有明確內臟轉移，而且血球條件還能支持療程往下走。",
          "<strong>醫師台詞：</strong> 可以很平常地說：如果主要問題已經不在骨頭，或骨髓撐不住，那就不能把希望壓在這裡。這句雖重，但一定要有。",
          "<strong>這場一定要交代：</strong> 每一輪前都要看 CBC，這不是附帶流程，而是療程能否繼續的前提。"
        ],
        checks: [
          "不能把適應症講模糊。",
          "不能用鼓勵式語氣把病人往治療裡推。"
        ]
      },
      {
        id: "ra223-scene-3",
        number: "Scene 3",
        title: "治療當天看起來短，但整條路不短",
        lead: "很多人看到注射流程會覺得好像很快，但這支片要提醒的是：真正重要的是前後反覆確認。",
        paragraphs: [
          "<strong>畫面：</strong> 注射區、核對身分、簡單但安靜的治療空間。畫面應該穩，不能做出輕鬆到像保養療程的感覺。",
          "<strong>旁白：</strong> 可以講：Ra-223 的給藥本身不一定久，但這種治療真正重要的，是前面條件有沒有評估對、後面每一輪有沒有繼續追蹤。",
          "<strong>工作人員台詞：</strong> 『今天順利，不代表以後每次都一樣，我們每一輪都會再看一次。』這句能把節奏拉回現實。",
          "<strong>這場一定要交代：</strong> 這通常是週期性療程，不是一針就結束。"
        ],
        checks: [
          "不要拍成快速方便、幾乎沒負擔的感覺。",
          "不要讓音樂或剪接把嚴肅度沖掉。"
        ]
      },
      {
        id: "ra223-scene-4",
        number: "Scene 4",
        title: "沒有住隔離病房，不代表什麼都不用管",
        lead: "這一場很容易被一句『不像 I-131 那麼麻煩』帶過，但真正有用的是把生活上的注意事項講實在。",
        paragraphs: [
          "<strong>畫面：</strong> 浴室、洗手、如廁後清潔、家人一起確認。生活感要夠，不要只剩文字條列。",
          "<strong>旁白：</strong> Ra-223 雖不像 I-131 常見住院隔離，但排泄清潔、手部衛生、家中共用空間的習慣，仍然要講清楚。",
          "<strong>家屬對話：</strong> 適合的方向是『原來不是要害怕彼此，而是把該做的細節做好』。這比較能讓家裡的人放鬆，但不會鬆過頭。",
          "<strong>這場一定要交代：</strong> 返家衛教和每 cycle 之間的不適回報，都是療程的一部分。"
        ],
        checks: [
          "不要說『回家照平常就好』。",
          "也不要因為怕嚇到人，就把清潔講得太含糊。"
        ]
      },
      {
        id: "ra223-scene-5",
        number: "Scene 5",
        title: "療程中間，最怕的是不知道哪些變化該回報",
        lead: "病人常會把疲倦、疼痛波動、排便變化先忍著。這場要把『回報』拍成合理，不是拍成麻煩。",
        paragraphs: [
          "<strong>畫面：</strong> 回診日曆、症狀筆記、藥盒，這些都很普通，但很能帶出療程其實是日子一格一格往前走。",
          "<strong>旁白：</strong> 可以提醒：骨髓抑制、疲倦、疼痛波動或其他不舒服，不是自己在家猜就好，該帶回來討論就帶回來。",
          "<strong>人物心聲：</strong> 『不是每個不舒服都代表惡化，但我也不需要自己一直猜。』這種句子比較接近現場。",
          "<strong>這場一定要交代：</strong> 追蹤和回報不是附屬，而是療程能否安全走下去的條件。"
        ],
        checks: [
          "不要把副作用做成嚇人的列表。",
          "也不要只留一句『有問題就回診』，那太空。"
        ]
      },
      {
        id: "ra223-scene-6",
        number: "Scene 6",
        title: "把日子拿回來一點",
        lead: "結尾適合收在這裡：某些原本很難做的事，稍微回來了一點。",
        paragraphs: [
          "<strong>畫面：</strong> 坐完一頓飯、走到陽台、和家人正常說話。這種小事比任何激昂 montage 都有力量。",
          "<strong>旁白：</strong> 有些治療的價值，不是把人生拍成翻轉，而是把疼痛往後推一些，讓人把原本快失去的日常再拿回一點。",
          "<strong>收尾句：</strong> 『今天沒有比較偉大，只是比較像我自己。』這種句子夠輕，也夠真。",
          "<strong>這場一定要交代：</strong> 療效與能否繼續療程，仍要回到症狀、影像、血球和整體病況一起評估。"
        ],
        checks: [
          "不要有勝利感。",
          "不要把疼痛改善拍成病程完全逆轉。"
        ]
      }
    ],
    wrapUp: [
      "適應症與不適合的邊界是否講明白，尤其骨轉移範圍、內臟轉移與 CBC 條件。",
      "治療當天是否保留嚴肅度，沒有被剪成輕鬆快速或療程推廣片。",
      "返家清潔與不適回報是否講到日常細節，而不只是抽象提醒。",
      "最後一場是否停留在症狀、功能與尊嚴，而沒有製造奇蹟感。"
    ],
    sources: [
      "Xofigo / Ra-223 患者與處方資訊",
      "mCRPC 與 Ra-223 相關臨床指引節錄",
      "院內 Ra-223 前 CBC、返家清潔與症狀追蹤版本"
    ]
  },
  i131: {
    title: "I-131 治療",
    subtitle: "這支片真正要拍的，不只是吞藥和住院，而是病人怎麼在一段暫時的距離裡，還把自己和家人照顧好。",
    railTitle: "I-131 工作稿",
    railNote: "不要把隔離拍成恐怖，也不要拍成沒什麼。這支片最重要的是分寸。",
    intro: [
      "I-131 很容易被拍成標準流程片：低碘、住院、吞膠囊、出院注意事項。流程當然重要，但真正讓病人難受的，往往是那種『明明回家了，還不能像平常那樣靠近家人』的距離感。",
      "所以這支片要把醫療流程和生活感放在同一條線上。"
    ],
    railItems: [
      { id: "i131-opening", label: "先定主線" },
      { id: "i131-scene-1", label: "第二波壓力" },
      { id: "i131-scene-2", label: "低碘與前置" },
      { id: "i131-scene-3", label: "住院那天" },
      { id: "i131-scene-4", label: "吞藥與病房" },
      { id: "i131-scene-5", label: "隔離房裡" },
      { id: "i131-scene-6", label: "出院衛教" },
      { id: "i131-scene-7", label: "回到家以後" },
      { id: "i131-check", label: "拍攝前核對" }
    ],
    scenes: [
      {
        id: "i131-scene-1",
        number: "Scene 1",
        title: "手術做完了，怎麼還有下一段",
        lead: "很多病人以為手術後最難的已經過了，所以 I-131 的通知常常像第二波壓力。",
        paragraphs: [
          "<strong>畫面：</strong> 鏡子前看到手術疤、手機通知、回診單。這些都很日常，但足夠把那種『原來還沒真的結束』的感覺拍出來。",
          "<strong>旁白：</strong> 可以說：對一些甲狀腺癌病人來說，手術之後還有一段要處理，目的是把可能殘留的甲狀腺細胞看清楚，也進一步處理。",
          "<strong>人物反應：</strong> 一句『原來不是結束，是換另一種方式收尾』就很夠，不用更多戲。",
          "<strong>這場一定要交代：</strong> 這支片主線是甲狀腺癌術後 I-131 消融，不混甲亢版本。"
        ],
        checks: [
          "不要把 I-131 說成所有甲狀腺病都一樣。",
          "不要讓病人像被突然宣判。"
        ]
      },
      {
        id: "i131-scene-2",
        number: "Scene 2",
        title: "低碘和前置準備，其實是在替後面那顆藥讓路",
        lead: "這一場不是教條列規則，而是讓病人知道為什麼這些準備值得做。",
        paragraphs: [
          "<strong>畫面：</strong> 廚房、食材標籤、便利貼、回診日期。家人一起處理，比病人自己默默看表單更有生活感。",
          "<strong>旁白：</strong> 低碘飲食、藥物調整、依安排接受 TSH 刺激，看起來麻煩，都是在幫真正需要抓碘的細胞把這次機會抓住。",
          "<strong>人物對話：</strong> 『這不是多做，是在替後面那一步鋪路。』這種說法比較穩，也不會太像口號。",
          "<strong>這場一定要交代：</strong> 低碘、藥物、懷孕哺乳、生育規劃，都必須依院內安排提前確認。"
        ],
        checks: [
          "不要把規則講成一張輕鬆 checklist。",
          "也不要用太多學術術語。"
        ]
      },
      {
        id: "i131-scene-3",
        number: "Scene 3",
        title: "住院那天，最難的是暫時一個人待著",
        lead: "這場的情緒點在分離，不在恐懼。重點是承認這段距離真的不好受。",
        paragraphs: [
          "<strong>畫面：</strong> 小行李、病房門口、回頭看家人一眼。不要追淚，不要煽情，只要停在那一秒。",
          "<strong>旁白：</strong> I-131 最難的時候，常常不是吞下膠囊，而是知道接下來一段時間，你得和家人保持距離。",
          "<strong>人物台詞：</strong> 可以讓病人說『先幫我把家裡顧好，我很快就回去』。這種話短，但很像真實病房門口會出現的句子。",
          "<strong>這場一定要交代：</strong> 住院隔離和限制接觸，是放射安全需求，不是病人被特別對待。"
        ],
        checks: [
          "不要把隔離房拍成恐怖片。",
          "也不要拍得像短暫旅館入住。"
        ]
      },
      {
        id: "i131-scene-4",
        number: "Scene 4",
        title: "吞下膠囊的那一刻，看起來短，意義卻很長",
        lead: "這場需要平靜。藥物本身不需要神祕感，反而要讓觀眾知道：真正開始的是後面那整段生活安排。",
        paragraphs: [
          "<strong>畫面：</strong> 水杯、藥物、核對身分和劑量。鏡頭簡潔，別故意神格化這顆藥。",
          "<strong>旁白：</strong> 可以講：動作可能只有幾秒，但前面的準備、後面的病房規則、返家後的限制，都已經從這一刻開始一起算進去了。",
          "<strong>工作人員台詞：</strong> 『接下來多喝水、多排尿，不舒服就先告訴我們。』這種句子普通，但就是該有。",
          "<strong>這場一定要交代：</strong> 補水、排尿、病房內的污染管理和不適回報。"
        ],
        checks: [
          "不要把吞藥拍成神聖儀式。",
          "不要把後面規則壓成一句『照衛教做就好』。"
        ]
      },
      {
        id: "i131-scene-5",
        number: "Scene 5",
        title: "隔離房裡，孤單是真的，也有清楚邊界",
        lead: "這一段要讓病人知道，孤單會來，但這段時間有理由，也有明確終點。",
        paragraphs: [
          "<strong>畫面：</strong> 房內喝水、視訊、窗邊、簡單口腔照護或依醫囑含東西刺激唾液。畫面要安靜，但不是空。",
          "<strong>旁白：</strong> 待在房裡很容易讓人覺得自己好像被整個世界暫停了。這種感覺可以承認，不需要硬裝堅強。",
          "<strong>人物互動：</strong> 家人透過視訊說『你回來再抱我』，這句很簡單，但能把整支片的情緒收回家庭。",
          "<strong>這場一定要交代：</strong> 口腔不適、排泄、污染管理、唾液腺保護等處置仍以院內衛教與醫囑為準。"
        ],
        checks: [
          "不要把這場拍得太空，否則只剩孤單。",
          "也不要用太多療癒語，會顯得不真。"
        ]
      },
      {
        id: "i131-scene-6",
        number: "Scene 6",
        title: "出院前，真正重要的是把不能模糊的地方講清楚",
        lead: "這一場資訊量大，但不能亂。觀眾最需要的是把返家後哪些要做、哪些不能照平常做，聽得清楚。",
        paragraphs: [
          "<strong>畫面：</strong> 衛教單、病人自己做筆記、工作人員逐項確認。節奏可以稍慢，不怕多幾秒。",
          "<strong>旁白：</strong> I-131 的返家衛教不是附錄。因為這段治療真正影響的，不只病人本人，還有回到家的那個空間。",
          "<strong>人物對話：</strong> 『先把不能模糊的地方講清楚，你回家才不會一直猜。』這句很適合放在這裡。",
          "<strong>這場一定要交代：</strong> 接觸距離、分床睡、如廁沖水、洗衣、幼兒與孕婦接觸限制，並強調天數依活度與院內安排而異。"
        ],
        checks: [
          "不能用固定天數代替院內規範。",
          "不能把關鍵限制藏在畫外音。"
        ]
      },
      {
        id: "i131-scene-7",
        number: "Scene 7",
        title: "回到家，暫時不能靠近，不代表感情被隔開",
        lead: "最後一場不用大收，只要讓人看到：這段距離雖然難，但它本身也是一種保護。",
        paragraphs: [
          "<strong>畫面：</strong> 回家、桌上的紙條、孩子遠遠揮手、病人停一下再坐到自己的位置。不要直接擁抱，停住的那一秒比較有力。",
          "<strong>旁白：</strong> 有些人最難受的，不是住院，而是回家後還不能像平常那樣靠近家人。但這段距離，不是把愛推出去，而是在替家裡的人擋風險。",
          "<strong>病人心聲：</strong> 『我不是離你們更遠，是先把該留在我這邊的風險留住。』這種句子很適合當收尾。",
          "<strong>這場一定要交代：</strong> 返家限制的細節和天數不能通用，影片必須保留『依院內通知與醫囑』。"
        ],
        checks: [
          "不要做成家庭感動廣告。",
          "也不要把限制講得像只是小事一樁。"
        ]
      }
    ],
    wrapUp: [
      "低碘、藥物調整、住院隔離與返家限制是否各自放在正確段落，而不是集中在片尾。",
      "病房與返家段落是否有生活感，讓觀眾知道哪些安排會真正影響日常。",
      "片中是否保留『依院內通知與醫囑』，沒有把接觸距離與天數寫成固定通則。",
      "結尾是否把距離感和保護家人的意義講清楚，同時避免拍成家庭感動廣告。"
    ],
    sources: [
      "American Thyroid Association：Radioactive Iodine 治療相關病人資料",
      "RadiologyInfo.org：Radioactive Iodine Therapy",
      "院內 I-131 住院隔離與返家衛教版本"
    ]
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
    <div class="reader-nav-shell" data-reader-nav>
      <div class="reader-fab-stack" aria-label="閱讀索引操作">
        <button type="button" class="reader-fab reader-fab--toc" data-reader-action="toggle-drawer">目錄</button>
        <button type="button" class="reader-fab reader-fab--top" data-reader-action="scroll-top" aria-label="回到頁首">↑</button>
      </div>
      <button type="button" class="reader-drawer-backdrop" data-reader-action="close-drawer" aria-hidden="true" tabindex="-1"></button>
      <aside class="reader-rail-drawer" aria-label="閱讀索引" aria-hidden="true">
        <div class="reader-toc-header">
          <div>
            <p class="rail-eyebrow">工作索引</p>
            <p class="rail-title">${title}</p>
            <p class="rail-note">${note}</p>
          </div>
          <button type="button" class="reader-drawer-close" data-reader-action="close-drawer" aria-label="關閉目錄">×</button>
        </div>
        <div class="reader-toc-list">
          ${items
            .map((item) => `<button type="button" class="reader-toc-link" data-scroll-target="${item.id}">${item.label}</button>`)
            .join("")}
        </div>
      </aside>
    </div>
  `;
}

function renderScene(scene) {
  return `
    <section class="scene-section reveal-block" id="${scene.id}" data-rail-title="${scene.title}">
      <span class="scene-number">${scene.number}</span>
      <h3>${scene.title}</h3>
      <p class="scene-lead">${scene.lead}</p>
      <div class="scene-meter"></div>
      <div class="scene-copy">
        ${scene.paragraphs.map((item) => `<p>${item}</p>`).join("")}
        <ul>
          ${scene.checks.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

function renderStoryPage(key, page) {
  return `
    <article class="workspace-page" data-page-key="${key}">
      <div class="page-progress"><span class="page-progress-bar"></span></div>
      <div class="page-header">
        <p class="page-kicker">${page.title}</p>
        <h1>${page.subtitle}</h1>
      </div>
      <div class="workspace-grid">
        ${renderRail(page.railItems, page.railTitle, page.railNote)}
        <div class="workspace-main">
          <section class="workspace-intro reveal-block" id="${key}-opening" data-rail-title="先定主線">
            <h2>${page.intro[0]}</h2>
            <p>${page.intro[1]}</p>
            <div class="hero-line"></div>
          </section>
          ${page.scenes.map(renderScene).join("")}
          <section class="essay-section reveal-block" id="${key}-check" data-rail-title="拍攝前核對">
            <h3>拍攝前最後再核對一次</h3>
            <ul>
              ${page.wrapUp.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <p class="work-note">審稿時優先檢查保證式語句、情緒過量段落，以及院內流程與法規版本是否已對齊。</p>
            <ul class="source-list">
              ${page.sources.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        </div>
      </div>
    </article>
  `;
}

function renderOverviewPage(page) {
  return `
    <article class="workspace-page" data-page-key="overview">
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
  const navShell = document.querySelector("[data-reader-nav]");
  const drawer = document.querySelector(".reader-rail-drawer");

  const setDrawerOpen = (isOpen) => {
    if (!navShell || !drawer) return;
    navShell.classList.toggle("is-drawer-open", isOpen);
    drawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
  };

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTarget);
      if (!target) return;
      const top = target.offsetTop - 22;
      reader.scrollTo({ top, behavior: "smooth" });
      setDrawerOpen(false);
    });
  });

  document.querySelectorAll("[data-reader-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.readerAction;
      if (action === "toggle-drawer") setDrawerOpen(!navShell?.classList.contains("is-drawer-open"));
      if (action === "close-drawer") setDrawerOpen(false);
      if (action === "scroll-top") {
        reader.scrollTo({ top: 0, behavior: "smooth" });
        setDrawerOpen(false);
      }
    });
  });

  const updateScrollTopButton = () => {
    navShell?.classList.toggle("can-scroll-top", reader.scrollTop > 180);
  };
  reader.addEventListener("scroll", updateScrollTopButton, { passive: true });
  updateScrollTopButton();
}

function setActiveRail(id) {
  document.querySelectorAll(".reader-toc-link").forEach((button) => {
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
      gsap.set(".page-header, .workspace-intro, .essay-section, .scene-section", { clearProps: "all" });
      return;
    }

    const article = document.querySelector(".workspace-page");
    const progressBar = document.querySelector(".page-progress-bar");
    const rail = document.querySelector(".page-rail");

    gsap.set(".page-header h1, .workspace-intro h2, .essay-section h3, .scene-section h3", { "--marker-scale": 0 });

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

    gsap.utils.toArray(".essay-section h3, .scene-section h3").forEach((heading) => {
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

    gsap.utils.toArray(".scene-section").forEach((section) => {
      const meter = section.querySelector(".scene-meter");
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

function renderPage(key) {
  const page = STORY_PAGES[key] || STORY_PAGES.overview;
  contentDisplay.innerHTML =
    key === "overview" ? renderOverviewPage(page) : renderStoryPage(key, page);

  navItems.forEach((item) => item.classList.toggle("active", item.dataset.page === key));
  attachDynamicHandlers();
  sidebar.classList.remove("is-open");
  sidebarOverlay.classList.remove("is-visible");
  window.location.hash = key;
  document.querySelector(".reader").scrollTop = 0;
  requestAnimationFrame(() => runPageAnimations());
}

navItems.forEach((item) => item.addEventListener("click", () => renderPage(item.dataset.page)));

mobileMenuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("is-open");
  sidebarOverlay.classList.toggle("is-visible");
});

sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.remove("is-open");
  sidebarOverlay.classList.remove("is-visible");
});

attachAmbientMotion();
renderPage(window.location.hash.replace("#", "") || "overview");
