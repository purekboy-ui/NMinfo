export const NUCMED_EXPLANATION_PATCHES = {
  'radiographer-110-1': {
    11: {
      explanationStatus: 'ready',
      explanation:
        '111In-pentetreotide 是體抑素類似物，可和 somatostatin receptor 結合，因此最適合評估腫瘤的受體表現。其餘選項不是 somatostatin 受體顯像藥物；本題雖官方送分，臨床上最接近的答案仍是 A。'
    }
  },
  'radiographer-111-2': {
    2: {
      explanationStatus: 'ready',
      explanation:
        'carrier-free 核種的比活度會受半衰期、原子量與是否真正無載體等條件影響，原題排序缺少足夠前提，選項也有格式與數值爭議，因此官方列為送分。實務上此類題目若未明確給出計算假設，不宜硬判單一排序。'
    }
  },
  'radiographer-112-2': {
    45: {
      explanationStatus: 'ready',
      explanation:
        '診斷性 131I-NaI 全身掃描常見作法是在口服後約 24 小時開始，也有部分流程會延後到 48 到 72 小時再補拍延遲影像。因臨床流程依適應症與機構慣例略有差異，所以本題官方接受 B、C。'
    }
  },
  'radiographer-115-1': {
    1: {
      explanationStatus: 'ready',
      explanation:
        '有效半衰期 Te 滿足 1/Te = 1/Tp + 1/Tb。題目已知 3 小時後體內活度減半，所以 Te = 3 小時；代入 Tp = 13 小時，可得 1/Tb = 1/3 - 1/13 = 10/39，因此 Tb = 3.9 小時，答案 A。'
    },
    2: {
      explanationStatus: 'ready',
      explanation:
        '核反應式必須同時滿足質量數與電荷數守恆。A 式左側質量數為 66 + 2 = 68，右側卻是 68 + 1 = 69，不守恆，因此錯誤；B、C、D 的質量數與原子序都可配平。'
    },
    3: {
      explanationStatus: 'ready',
      explanation:
        '99Tc 與 99mTc 具有相同原子序與相同質量數，只是核能階不同，其中 99mTc 是 metastable state。這種關係稱為核同質異構物 isomer，而不是 isotope、isobar 或 isotone。'
    },
    4: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-ECD brain SPECT 是腦灌流顯像，常用於失智症型態分辨、癲癇焦點評估與阿茲海默症或額顳葉失智症的功能影像。CSF leakage 常用放射性腦池攝影評估，不是 ECD 腦灌流 SPECT 的典型適應症，因此選 ②③④。'
    },
    5: {
      explanationStatus: 'ready',
      explanation:
        '67Ga-citrate 早期有一部分經腎臟排出，但 24 小時後主要改由肝膽系統排泄，所以腸道與肝膽活性會較明顯。故主要排出途徑是肝膽，答案 D。'
    },
    6: {
      explanationStatus: 'ready',
      explanation:
        'free thyroxine index 是用 total T4 配合 T3 uptake 校正血中甲狀腺素結合蛋白影響後得到的指標。它不是直接用 TSH 或 thyroglobulin 計算，因此答案是 B。'
    },
    7: {
      explanationStatus: 'ready',
      explanation:
        '131I 治療需要病灶能攝取碘。髓質性甲狀腺癌源自濾泡旁 C 細胞，不具分化型甲狀腺組織的攝碘能力，所以最不適合用 131I-NaI 治療；乳突癌、濾泡癌與甲亢則可能受益。'
    },
    8: {
      explanationStatus: 'ready',
      explanation:
        '依放射性物質與可發生游離輻射設備及其輻射作業管理辦法，使用非密封放射性物質的設施，每年應就排放廢水取樣至少二次並分析核種。故答案是 B。'
    },
    9: {
      explanationStatus: 'ready',
      explanation:
        '90Y 幾乎是純 beta 核種，治療後影像評估通常仰賴 bremsstrahlung SPECT/CT 或少量內對偶產生的 PET/CT。digital radiographic system 並不是 90Y 體內劑量評估的標準方法，因此最不建議的是 B。'
    },
    10: {
      explanationStatus: 'ready',
      explanation:
        '半導體偵檢器搭配多頻道脈高分析儀量測的是能譜，可用來確認是否只有預期核種與其特徵能峰，因此主要評估放射核種純度。放射化學純度與標幟效率通常靠色層分析，不靠能譜。'
    },
    11: {
      explanationStatus: 'ready',
      explanation:
        '平均壽命 mean life 為 tau = 1/lambda。經過一個平均壽命後，剩餘活性為 A0e^-1，約是 36.8%，表示已衰變掉約 63.2%，所以答案 B。'
    },
    12: {
      explanationStatus: 'ready',
      explanation:
        '99mTc 標幟紅血球的效率以 in vitro 最高，因為還原與標幟步驟都在試管中完成，標幟條件最可控。in vivo 與 modified in vivo 方便，但標幟效率通常較低。'
    },
    13: {
      explanationStatus: 'ready',
      explanation:
        '18F-PSMA-1007 是 PSMA 配體，依靠前列腺特定膜抗原結合；18F-fluciclovine 則是胺基酸類示蹤劑，機轉完全不同。故 C 把兩者造影原理說成類似是錯誤敘述。'
    },
    14: {
      explanationStatus: 'ready',
      explanation:
        'SUV = 組織活度濃度 / (注射活度 / 體重)。題目為 250 microCi/L ÷ (5000 microCi / 50 kg) = 250 ÷ 100 = 2.5，因此答案是 B。'
    },
    15: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-tetrofosmin 是較高親脂性的陽離子心肌灌流藥物，可藉脂溶性跨膜並聚集於粒線體。MAG3 與 FDG 都較親水，13N-ammonia 雖可擴散但題目所列中仍以 tetrofosmin 親脂性最突出。'
    },
    16: {
      explanationStatus: 'ready',
      explanation:
        '89Sr-SrCl2 的主要用途是治療骨轉移疼痛，不是骨轉移造影。A、B、D 都是常見的造影製劑與應用，因此錯誤對應是 C。'
    },
    17: {
      explanationStatus: 'ready',
      explanation:
        '177Lu 主要經 beta-minus 衰變並放出少量 gamma，兼具治療與成像特性。223Ra 以 alpha 衰變為主，89Zr 多為正子相關衰變，125I 主要為電子捕獲，所以答案 B。'
    },
    18: {
      explanationStatus: 'ready',
      explanation:
        'dose calibrator 本質上是井型氣體游離腔，日常品質保證中最基本的是每日 constancy 檢查。它不是閃爍偵檢器，對純 beta 核種量測也不理想；而 accuracy 校正通常需多種標準源，不是只靠 137Cs。'
    },
    19: {
      explanationStatus: 'ready',
      explanation:
        '123I-MIBG 主要評估交感神經或兒茶酚胺相關腫瘤，如嗜鉻細胞瘤與神經母細胞瘤，不是前列腺癌常規工具。PSMA、choline 與 fluciclovine 都可用於前列腺癌評估，因此最不適合的是 C。'
    },
    20: {
      explanationStatus: 'ready',
      explanation:
        '67Ga-citrate 可聚集於發炎與感染灶，是評估發炎病灶的經典藥物之一。99mTc-MAA 用於肺灌流，123I-MIBG 用於神經內分泌與交感神經顯像，111In-DTPA 常見於腦池攝影，因此答案 A。'
    },
    21: {
      explanationStatus: 'ready',
      explanation:
        '壓力後 lung uptake 增加與 transient ischemic dilation 都是嚴重廣泛 CAD 的警訊，但屬輔助徵象，並不比大範圍或多血管區的可逆性灌流缺損更具診斷專一性。故錯誤的是 C。'
    },
    22: {
      explanationStatus: 'ready',
      explanation:
        'one-day 或 two-day、stress/rest 順序可彈性調整，主要是 99mTc 心肌灌流藥物的常見流程。201Tl-TlCl 通常採壓力後早期影像加再分布或 reinjection 的同日策略，因此 C 的描述不正確。'
    },
    23: {
      explanationStatus: 'ready',
      explanation:
        'B 錯在把 201Tl 的半衰期寫成 12 小時；實際上 201Tl 的物理半衰期約 73 小時。其餘選項關於鉀類似分布、被動或主動進入心肌的描述方向大致正確。'
    },
    24: {
      explanationStatus: 'ready',
      explanation:
        '咖啡因會拮抗 adenosine 類藥物造成的冠狀動脈擴張，可能影響藥物壓力測試結果。臨床通常建議至少停用含咖啡因食物與飲品 12 到 24 小時，因此答案 B。'
    },
    25: {
      explanationStatus: 'ready',
      explanation:
        '新一代 CZT 心臟專用 SPECT 常藉固定式多偵檢器與特殊準直幾何提高效率，並非靠 detector 圍繞病人連續旋轉來提升收影。故 B 是錯誤敘述。'
    },
    26: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-ECD 是脂溶性藥物，主要靠被動擴散穿越 BBB，進入腦細胞後再被代謝滯留。它不是靠 active transport 進入腦細胞，所以 D 錯。'
    },
    27: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-TRODAT-1 結合的是 dopamine transporter，用來反映突觸前多巴胺神經末梢功能。這也是它常用於巴金森氏症相關顯像的原因，因此答案 C。'
    },
    28: {
      explanationStatus: 'ready',
      explanation:
        '灌流下降但代謝維持或升高代表 perfusion-metabolism mismatch，提示冬眠但仍存活的心肌。這類 viable myocardium 最可能從血運重建受益，所以答案 B。'
    },
    29: {
      explanationStatus: 'ready',
      explanation:
        '腦灌流與代謝多半在灰質較高、白質較低；白質訊號不會是灰質的 2 到 4 倍，反而通常明顯較低。故 C 是錯誤敘述。'
    },
    30: {
      explanationStatus: 'ready',
      explanation:
        '放療後腦腫瘤殘留或復發與放射壞死的 FDG 表現可能重疊，因此常用 99mTc-MIBI 進一步評估腫瘤活性。MIBI 較能反映活細胞粒線體功能與腫瘤存活，答案 C。'
    },
    31: {
      explanationStatus: 'ready',
      explanation:
        '本題官方送分，爭議點在於 C、D 皆可被視為錯誤。Thyrogen 標準給法是肌肉注射，不是靜脈注射；而它刺激的是內生性 TSH 作用與甲狀腺組織攝碘，不是刺激外生性甲狀腺素產生。'
    },
    32: {
      explanationStatus: 'ready',
      explanation:
        '前哨淋巴結檢查追蹤的是腫瘤周邊淋巴引流路徑，可定位節點、估計數量並做皮膚標記。它不是用來描繪血液供應路徑，所以錯誤的是 C。'
    },
    33: {
      explanationStatus: 'ready',
      explanation:
        '骨盆 H-sign 是骶骨 insufficiency fracture 的經典骨掃描表現，常見於骨質疏鬆或放療後病人。它不像轉移癌那樣呈不對稱多發病灶，因此答案 B。'
    },
    34: {
      explanationStatus: 'ready',
      explanation:
        'superscan 常見於瀰漫性骨轉移或高骨代謝疾病，如前列腺癌廣泛轉移、次發性副甲狀腺機能亢進或腎性骨病變。纖維異常增生通常不會造成典型全身 superscan，因此答案 D。'
    },
    35: {
      explanationStatus: 'ready',
      explanation:
        '肺癌病人若在長骨皮質出現對稱性線狀攝取，典型是 hypertrophic osteoarthropathy。它與胸腔腫瘤相關，常見於下肢遠端，因此答案 D。'
    },
    36: {
      explanationStatus: 'ready',
      explanation:
        '成年人正常情況下已無活躍的生長板，所以不應把對稱性 growth-plate 攝取增加當作成人骨掃描特徵。A 描述屬於兒童或青少年較常見的正常變異，因此最不適當。'
    },
    37: {
      explanationStatus: 'ready',
      explanation:
        '131I-MIBG 因光子能量高，通常需高能量準直儀；123I-MIBG 則多使用中能量準直儀。故說兩者都需要高能量平行孔準直儀是錯的，答案 C。'
    },
    38: {
      explanationStatus: 'ready',
      explanation:
        'Hodgkin lymphoma 對 FDG 通常高度 avid，偵測敏感度很高。類癌、支氣管肺泡型肺癌與 MALT lymphoma 的 FDG 攝取常較低或變異較大，因此答案 A。'
    },
    39: {
      explanationStatus: 'ready',
      explanation:
        '原發性攝護腺癌不是 FDG PET 的常規適應症，因其糖代謝常不高且尿路放射活性會影響判讀。食道癌、頭頸癌、高惡性度淋巴瘤與黑色素瘤則是常見適應症，所以錯的是 C。'
    },
    40: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-MDP 會吸附在骨鹽晶體表面，對新形成骨與 amorphous calcium phosphate 都可有攝取。故 B 說非晶態磷酸鈣通常不會吸收是錯誤的。'
    },
    41: {
      explanationStatus: 'ready',
      explanation:
        '附帶膠囊是甲狀腺攝取率檢查的參考標準，用來代表實際給藥計數，能提升標準化與準確度。A 說使用附帶膠囊會降低準確率，與其設計目的相反，因此錯誤。'
    },
    42: {
      explanationStatus: 'ready',
      explanation:
        'direct radionuclide cystography 是評估 vesicoureteral reflux 的低劑量核醫方法，特別適合兒科追蹤。DMSA 才常用於腎皮質疤痕，DTPA 不是評估 VUR 併發疤痕的首選，因此正確是 C。'
    },
    43: {
      explanationStatus: 'ready',
      explanation:
        '若病人尚未接受甲狀腺切除，殘存正常甲狀腺會大量攝碘，容易掩蓋轉移灶並降低全身掃描對轉移病灶的判讀價值。因此最不適合的情況是 C。'
    },
    44: {
      explanationStatus: 'ready',
      explanation:
        '腎外背景活度會影響 renal TAC 與分腎功能估算，因此背景 ROI 通常是必要的。A 說背景不影響 GFR 計算、非必要圈選，與實際分析原則不符。'
    },
    45: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-DMSA 腎皮質造影通常在注射後約 2 到 4 小時取得影像，讓藥物充分與腎皮質結合。5 分鐘過早，無法得到最佳皮質影像，因此 D 錯。'
    },
    46: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-DTPA 主要用於腎絲球過濾與動態腎功能評估，不是腎臟感染顯像藥物。DMSA、glucoheptonate 與部分情境下的 67Ga-citrate 都可用於感染或發炎評估，因此答案 D。'
    },
    47: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-MAG3 主要經腎小管分泌，適合估算 ERPF 與排泄動態，不是準確評估 GFR 的主力藥物。故把 MAG3 說成同時可評估 GFR 與 ERPF 的核心製劑是不正確的，答案 C。'
    },
    48: {
      explanationStatus: 'ready',
      explanation:
        '131I-NP-59 可能產生游離放射性碘，因此檢查前給 Lugol solution 的目的是封鎖甲狀腺對游離 131I 的攝取，降低不必要輻射。故答案 B。'
    },
    49: {
      explanationStatus: 'ready',
      explanation:
        '依題目所示影像，左腎呈現功能較差且在利尿後仍排空不佳，符合功能低下合併可能阻塞的表現；右腎則維持正常攝取與排泄。故最可能是 B。'
    },
    50: {
      explanationStatus: 'ready',
      explanation:
        '111In-pentetreotide 是 somatostatin analogue，主要用於表現 somatostatin receptor 的神經內分泌腫瘤顯像。故可偵測含體抑素受體的腫瘤，答案 B。'
    },
    51: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-HMPAO WBC 的優點是光子通量較高、空間解析度較佳，也適合較早期的急性發炎評估。長時程或慢性發炎追蹤反而常是 111In-WBC 的相對優勢，因此 C 不是 HMPAO WBC 的優點。'
    },
    52: {
      explanationStatus: 'ready',
      explanation:
        '本題官方送分，因為選項沒有列出最經典的 MIBG 檢查。若就選項內容判斷，111In-octreotide 可在部分表現 somatostatin receptor 的嗜鉻細胞瘤提供顯像資訊，但題目設計不夠完整，所以最終列為送分。'
    },
    53: {
      explanationStatus: 'ready',
      explanation:
        'Schilling test 是口服標記維生素 B12，再觀察是否能被吸收後由尿中排出，因此要量測的是尿液放射活性。若吸收正常，經肌肉注射未標記 B12 後，口服標記 B12 會較多出現在尿中。'
    },
    54: {
      explanationStatus: 'ready',
      explanation:
        '塑膠或壓克力常用來屏蔽 beta 粒子，因可減少高 Z 材料產生的 bremsstrahlung。89Sr 是 beta 發射核種，因此最適合以塑膠遮擋；133Xe、81mKr 與 68Ga 牽涉 gamma 或正子相關光子，不適合只靠塑膠。'
    },
    55: {
      explanationStatus: 'ready',
      explanation:
        '99mTc-pertechnetate 唾液腺檢查通常採靜脈注射後動態造影，分析時需分別圈選口腔與雙側腮腺、頷下腺，以觀察攝取與排出曲線。故正確敘述是 C。'
    },
    56: {
      explanationStatus: 'ready',
      explanation:
        '14C urea breath test 屬於核醫相關的體外功能檢查，藉呼氣樣本評估幽門螺旋桿菌，不產生影像。其餘選項都需要顯像，因此答案 C。'
    },
    57: {
      explanationStatus: 'ready',
      explanation:
        'octreotide 是 somatostatin 的人工類似物，所以 111In-octreotide 會結合 somatostatin receptor。故答案 B。'
    },
    58: {
      explanationStatus: 'ready',
      explanation:
        'SUV 常見定義為目標區域活性濃度除以注射活度與體重的比值，也可進一步分成 SUVmax、SUVmean 或 SUVpeak。B 把 SUV 限定成 ROI 平均值才算，說法過窄，因此是錯誤敘述。'
    },
    59: {
      explanationStatus: 'ready',
      explanation:
        '實驗室內部 QC 主要是持續監測方法的精密度與日常穩定性，及早抓出系統或操作偏差。準確度較常仰賴校正、標準品比對或外部品質評估，因此 D 錯。'
    },
    60: {
      explanationStatus: 'ready',
      explanation:
        '抗原與受免疫動物分子結構差異越大，通常抗原性越強，而不是越小。故 B 的因果關係寫反了，是錯誤敘述。'
    },
    61: {
      explanationStatus: 'ready',
      explanation:
        '血清抗體純化最常用的方法之一是 affinity chromatography，利用抗原或 protein A/G 對抗體的特異性結合進行分離。故答案 C。'
    },
    62: {
      explanationStatus: 'ready',
      explanation:
        '競爭性 RIA 的 B0% 是「不加未標幟抗原時，標幟抗原和抗體的最高結合率」，反映試劑系統狀態。D 把它說成「不加抗體時標幟抗原與非特異物質的結合率」，那是完全不同概念，因此最不適當。'
    },
    63: {
      explanationStatus: 'ready',
      explanation:
        '血中 T4 已偏高時，若影像呈現低攝取或非高功能性圖樣，通常較像甲狀腺炎、外源性荷爾蒙或非攝碘性病灶，並不適合直接做放射碘治療。故題目中最不建議治療的是丁，答案 D。'
    },
    64: {
      explanationStatus: 'ready',
      explanation:
        '有效劑量是各組織等價劑量 H_T 乘以組織加權因數 w_T 後再加總，單位為 sievert。A 少了總和概念，B 單位錯成 Gy，C 把輻射加權因數與等價劑量重複計算，因此正確是 D。'
    },
    65: {
      explanationStatus: 'ready',
      explanation:
        '223Ra 以 alpha 發射為主，但其衰變鏈中伴隨低比例 gamma photon，可供簡單成像或品質確認使用。90Y、32P、89Sr 都更接近純 beta 治療核種，因此答案 A。'
    },
    66: {
      explanationStatus: 'ready',
      explanation:
        '病灶劑量學的限制包括模型假設過度簡化、病灶內分布不均與吸收劑量不必然等同療效。小病灶常因部分體積效應而低估活度，但不能因此一律用「必須加成計算」解決，所以 D 是錯誤敘述。'
    },
    67: {
      explanationStatus: 'ready',
      explanation:
        '管理辦法規定，若經認定有輻射安全疑慮且限期改善逾半年仍未改善，主管機關得廢止其許可；並非逾一個月就直接構成該條件。A、B、D 都符合法規條文方向，因此錯誤的是 C。'
    },
    68: {
      explanationStatus: 'ready',
      explanation:
        'glioma 放射免疫治療最經典的標靶之一是 tenascin-C，因其在腫瘤基質表現明顯。CD20 用於 B 細胞淋巴瘤，SSTR2 多見於神經內分泌腫瘤，HER2 則常見於乳癌等，因此答案 A。'
    },
    69: {
      explanationStatus: 'ready',
      explanation:
        '增加 NaI(Tl) 晶體厚度可提高高能光子的吸收機率，因此靈敏度會上升。空間解析度則不會因此變好，故最正確的是 C。'
    },
    70: {
      explanationStatus: 'ready',
      explanation:
        '能窗範圍為 109.8 到 134.2 keV，中心在 122 keV，兩側各差 12.2 keV。12.2 / 122 = 10%，表示總能窗寬度為 ±10%，也就是 20% window，所以答案 C。'
    },
    71: {
      explanationStatus: 'ready',
      explanation:
        '依題目所示幾何結構，此準直儀的空間解析度優於發散式 collimator，但不具針孔那種放大與超高解析優勢。故正確敘述為 B。'
    },
    72: {
      explanationStatus: 'ready',
      explanation:
        'triple energy window 會在 photopeak 兩側各取一個窄窗，以估計並扣除散射成分。它主要用於 scatter correction，不是衰減、隨機或 dead-time 校正，因此答案 B。'
    },
    73: {
      explanationStatus: 'ready',
      explanation:
        '正電子減速後可先與電子形成短暫束縛態，這個雙粒子原子稱為 positronium。之後才會互毀產生兩個 511 keV 光子，所以答案 A。'
    },
    74: {
      explanationStatus: 'ready',
      explanation:
        '核分裂通常產生兩個主要裂變碎片，質量也多半不完全相等，並伴隨 2 到 3 個中子與約 200 MeV 能量。B 說會裂成 3 個幾乎相等的裂塊，不符合典型反應，因此錯誤。'
    },
    75: {
      explanationStatus: 'ready',
      explanation:
        '把 energy window 調窄可排除更多偏離 photopeak 的散射光子，因此 scatter 會減少；但同時被接受的總光子數也會下降，所以 count rate 也減少。故答案 D。'
    },
    76: {
      explanationStatus: 'ready',
      explanation:
        '依 10 CFR 35.2075 相關哺乳建議，99mTc-pertechnetate 甲狀腺或相關檢查常需暫停哺乳至少 12 小時。12 mCi 的劑量仍屬此常見建議範圍，所以答案 B。'
    },
    77: {
      explanationStatus: 'ready',
      explanation:
        'random coincidence 來自兩個不同互毀事件的光子誤被視為同時事件；在 3D 模式下因接受的線路更多，random 通常比 2D 更明顯。故 B 說 3D 的隨機事件計數率比較少，是最不適當的敘述。'
    },
    78: {
      explanationStatus: 'ready',
      explanation:
        '組織加權因數 w_T 反映的是不同器官對隨機性輻射傷害的相對敏感度，也就是生物效應風險權重。它不是依能量、質量或 LET 直接指定，因此答案 C。'
    },
    79: {
      explanationStatus: 'ready',
      explanation:
        '淨計數就是樣品總計數減去背景計數。14,400 - 2,500 = 11,900，所以答案 A。'
    },
    80: {
      explanationStatus: 'ready',
      explanation:
        '若總計數與背景計數相互獨立，淨計數的標準偏差為 sqrt(S + B)。代入 sqrt(14,400 + 2,500) = sqrt(16,900) = 130，因此答案 B。'
    }
  }
};
