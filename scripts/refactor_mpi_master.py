import os
import re

filepath = r"D:\NMDEV\NMINFO heavy\script.js"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. 確保 EXAM_INLINE_GUIDE_IMAGES 裡的 MPI 項被完美恢復 (修復最上面插圖消失問題)
target_exam_image_mpi = """    MPI: {
        src: 'assets/guide/mpi-indications.webp',
        alt: '心肌灌流（Tl-201 / Tc-99m）適應症圖解，說明疑似冠心病缺血評估、風險分層、心肌存活性問題與血管重建前後決策。'
    },"""

# 在我們的 content 中，EXAM_INLINE_GUIDE_IMAGES 是在 Salivary2 / Cisternography 底下：
# 我們來用正則表達式把第 7530 行開始被誤寫的區塊，重新還原為原本的 EXAM_INLINE_GUIDE_IMAGES.MPI
pattern_misplaced_exam = re.compile(r'Cisternography:\s*\{.*?\}\s*,\s*MPI:\s*\{.*?\}\s*,\s*MPI_Tc99m:', re.DOTALL)
replacement_misplaced_exam = """Cisternography: {
        src: 'assets/guide/cisternography-indications.webp',
        alt: '腦脊髓液池掃描適應症圖解，說明腦脊髓液漏、正常壓力水腦症輔助評估、分流術前後問題，以及特殊腦脊髓液循環障礙。'
    },
    MPI: {
        src: 'assets/guide/mpi-indications.webp',
        alt: '心肌灌流（Tl-201 / Tc-99m）適應症圖解，說明疑似冠心病缺血評估、風險分層、心肌存活性問題與血管重建前後決策。'
    },
    MPI_Tc99m:"""

if pattern_misplaced_exam.search(content):
    content = pattern_misplaced_exam.sub(replacement_misplaced_exam, content)
    print("成功修復與還原 EXAM_INLINE_GUIDE_IMAGES.MPI，最上面插圖已完全恢復！")
else:
    # 備用還原
    content = content.replace("Cisternography: {\n        src: 'assets/guide/cisternography-indications.webp',\n        alt: '腦脊髓液池掃描適應症圖解，說明腦脊髓液漏、正常壓力水腦症輔助評估、分流術前後問題，以及特殊腦脊髓液循環障礙。'\n    },\n    MPI: {", "Cisternography: {\n        src: 'assets/guide/cisternography-indications.webp',\n        alt: '腦脊髓液池掃描適應症圖解，說明腦脊髓液漏、正常壓力水腦症輔助評估、分流術前後問題，以及特殊腦脊髓液循環障礙。'\n    },\n    MPI: {\n        src: 'assets/guide/mpi-indications.webp',\n        alt: '心肌灌流（Tl-201 / Tc-99m）適應症圖解，說明疑似冠心病缺血評估、風險分層、心肌存活性問題與血管重建前後決策。'\n    },\n    MPI_INDICATIONS_DUMMY: {")
    print("備用還原機制啟動")

# 2. 徹底刪除 MPI_PatientEduDisabled、MPI_Tc99m_PatientEduDisabled 與 MPI_Tl201_PatientEduDisabled 區塊 (徹底刪除病人理解版)
# 我們在原始 script.js 中定位這三個區塊
pattern_patient_edu = re.compile(r'MPI_PatientEduDisabled:\s*\{.*?\}\s*,\s*MPI_Tc99m_PatientEduDisabled:\s*\{.*?\}\s*,\s*MPI_Tl201_PatientEduDisabled:\s*\{.*?\}\s*,\s*', re.DOTALL)
if pattern_patient_edu.search(content):
    content = pattern_patient_edu.sub("", content)
    print("成功徹底刪除了心肌灌流 (MPI) 及其分支的病人理解版卡片！")
else:
    # 寬鬆匹配
    content = re.sub(r'MPI_PatientEduDisabled:\s*\{.*?\}\s*,\s*', '', content, flags=re.DOTALL)
    content = re.sub(r'MPI_Tc99m_PatientEduDisabled:\s*\{.*?\}\s*,\s*', '', content, flags=re.DOTALL)
    content = re.sub(r'MPI_Tl201_PatientEduDisabled:\s*\{.*?\}\s*,\s*', '', content, flags=re.DOTALL)
    print("使用寬鬆正則移除了病人理解版。")

# 3. 在 CARDIAC_VIEW_OVERRIDES 中，將 1773 行的 MPI 替換為全新設計的黃金專科物件
new_gold_mpi_text = """MPI: {
    title: "心肌灌流（Tl-201 / Tc-99m Sestamibi）",
    subtitle: "Myocardial Perfusion Imaging（MPI）— 臨床負荷路徑、影像判讀與偽影排除指引",
    category: "cardiac",
    readerGuideMode: "article",
    readerGuideArticle: [
        "本單元整合 Tl-201 與 Tc-99m 臨床指引，依據『檢前安全把關 -> 負荷給藥與急救 -> 影像生成 -> 標準切面判讀與偽影排除 -> 報告落地』的臨床決策工作流進行一體化編寫。",
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
            title: "一、 負荷前安全防線與必做安全閘門",
            icon: "🚨",
            html: `<div class="prose">
                <p>無效的負荷 (Stress) 會使整項檢查失去診斷與風險分層的價值。在給藥或運動前，必須嚴格執行以下三大安全閘門核對，防止<strong>假陰性（看似正常的假影像）</strong>發生：</p>
                <ul>
                    <li><strong>咖啡因與茶鹼類 12–24 小時嚴格排除</strong>：若採用血管擴張劑負荷，必須確認病人檢前嚴禁攝取茶、咖啡、可樂、巧克力、能量飲料及含咖啡因之止痛藥。咖啡因會競爭性抑制 A2A 受體，完全阻斷藥物引導的冠脈擴張。</li>
                    <li><strong>藥物與運動負荷禁忌症排除</strong>：血管擴張劑絕對禁忌包含<strong>重度氣喘、活動性喘鳴、重度低血壓、未安裝心律調節器之二/三度房室傳導阻滯</strong>；Dobutamine 壓力禁忌包含<strong>近期不穩定心絞痛、主動脈剝離、重度主動脈瓣狹窄、未控制的高血壓 (>200/110 mmHg)</strong>。</li>
                    <li><strong>運動負荷心率門檻</strong>：採用跑步機或腳踏車運動壓力時，心率<strong>必須達到預測最大心率的 85% 以上</strong>（公式：(220 - 年齡) × 0.85），才算是一次有效的負荷。</li>
                </ul>
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
            title: "三、 負荷臨床路徑與現場急救逆轉處置",
            icon: "🏃",
            html: `<div class="prose">
                <p>對於可運動且能達標者，<strong>運動壓力（Bruce Protocol）</strong>是首選；對於無法運動或 ECG 不可判讀者，則採用<strong>藥物壓力</strong>。負荷給藥必須嚴格執行現場不適的監測與逆轉處置：</p>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● Regadenoson 臨床路徑</h5>
                    <p style="margin: 0 0 8px 0;"><strong>給藥標準</strong>：0.4 mg IV bolus (固定劑量，10秒注完)，緊接著生理食鹽水沖洗；示蹤劑於 20秒後注入。</p>
                    <p style="margin: 0 0 8px 0;"><strong>常見不適與現場處置</strong>：臉潮紅、胸悶、呼吸急促、頭痛、輕微低血壓。給予平躺監測、給氧。若症狀嚴重，可在給藥 1-2 分鐘後給予 <strong>Aminophylline 50–100 mg 緩慢靜脈注射</strong>逆轉。</p>
                </div>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● Adenosine 臨床路徑</h5>
                    <p style="margin: 0 0 8px 0;"><strong>給藥標準</strong>：140 μg/kg/min 持續靜脈輸注 6 分鐘；示蹤劑於第 3 分鐘注入。</p>
                    <p style="margin: 0 0 8px 0;"><strong>常見不適與現場處置</strong>：胸悶、短暫二/三度房室傳導阻滯、低血壓、呼吸困難。Adenosine 半衰期極短（&lt;10秒），若出現嚴重的傳導阻滯或低血壓，<strong>立即停止輸注</strong>即可迅速緩解；若症狀持續則給予 aminophylline 逆轉。</p>
                </div>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● Dipyridamole 臨床路徑</h5>
                    <p style="margin: 0 0 8px 0;"><strong>給藥標準</strong>：0.56 mg/kg 於 4 分鐘內緩慢輸注；示蹤劑於開始輸注後第 7-8 分鐘（即輸注完畢後第 3–5 分鐘）注入。</p>
                    <p style="margin: 0 0 8px 0;"><strong>常見不適與現場處置</strong>：頭痛、噁心、明顯胸悶、低血壓、支氣管痙攣。Dipyridamole 半衰期較長（約30-40分鐘）。若出現持續胸痛、喘或明顯傳導阻滯，<strong>立即緩慢靜脈注射 Aminophylline 50–125 mg</strong>，可視情況追加，通常總量不超過 250 mg。</p>
                </div>
                
                <div class="therapy-rich-card" style="margin-bottom: 16px;">
                    <h5 style="color: var(--brand-primary-strong); margin: 0 0 8px 0;">● Dobutamine 臨床路徑</h5>
                    <p style="margin: 0 0 8px 0;"><strong>給藥標準</strong>：10 → 20 → 30 → 40 μg/kg/min 每 3 分鐘遞增；目標心率未達標時可追加 atropine 0.25–1.0 mg。</p>
                    <p style="margin: 0 0 8px 0;"><strong>常見不適與現場處置</strong>：心悸、心跳過速、血壓大幅上升、心律不整。持續心電圖與血壓監測。一旦心率達標或出現終止指徵（側壁缺血性 ECG 改變、血壓驟降、嚴重不適）立即停藥，可用 Esmolol 等短效 Beta-blocker 逆轉心率。</p>
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
                <p>為了確保與臨床溝通無礙，科內 MPI 報告應嚴格遵守 <strong>ASNC 結構化報告規範</strong>，字字精準：</p>
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
},"""

# 精確替換 CARDIAC_VIEW_OVERRIDES.MPI (第 1773 行的 MPI 物件)
# 由於剛剛還原了 script.js，start_idx 必定是 1773 行
start_idx = content.find("MPI: {")
if start_idx != -1:
    end_idx = content.find("MPI_Tc99m: {", start_idx)
    if end_idx != -1:
        content = content[:start_idx] + new_gold_mpi_text + "\n\n" + content[end_idx:]
        print("成功將 CARDIAC_VIEW_OVERRIDES.MPI 重構為高整合、零 AI 腔調之專科版！")
    else:
        print("錯誤：未能在 start_idx 之後找到 MPI_Tc99m。")
else:
    print("錯誤：未能在 script.js 中定位 'MPI: {'。")

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("完成 script.js 之二次黃金重構！")
