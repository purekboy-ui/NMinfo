# 心肌灌流 SPECT 臨床指引 (Tc-99m MPI SPECT)

更新日期：2026-05-31  
最新已核對的主要來源：
- ASNC, *Single Photon Emission Computed Tomography (SPECT) Myocardial Perfusion Imaging Guidelines: Instrumentation, Acquisition, Processing, and Interpretation* (2018)
- ASNC, *Quality Metrics for Single-Photon Emission Computed Tomography Myocardial Perfusion Imaging: An ASNC Information Statement* (2023)
- EANM, *EANM procedural guidelines for radionuclide myocardial perfusion imaging with SPECT and SPECT/CT* (2015)
- ASNC, *Standardized Reporting of Nuclear Cardiology Procedures* (2017)
- ASNC/AHA/ACC, *Reporting of Myocardial Perfusion Imaging Tests Quick Reference* (2024)

---

## 1. 臨床定位與必做安全閘門

心肌灌流影像（MPI）的核心價值在於**「回答臨床心肌缺血的可逆性與整體風險分層」**，而非單純指出血管狹窄。這是在冠脈解剖學影像（如 Coronary CTA）之外，最重要的功能性評估。

### 🚨 必做安全閘門與核對
1. **藥物壓力前咖啡因排除**：若使用 Vasodilator (Dipyridamole / Adenosine / Regadenoson)，**必須嚴格確認 12–24 小時內無任何咖啡因攝取（含茶、咖啡、可樂、巧克力及部分止痛藥）**。咖啡因會競爭性抑制 A2A 受體，鈍化血管擴張反應，導致嚴重的**「假陰性」**。
2. **絕對禁忌症核對**：
   - Vasodilator：**重度氣喘、活動性喘鳴 (Active bronchospasm)、重度低血壓、二/三度房室傳導阻滯且無心律調節器**。
   - Dobutamine：**近期不穩定心絞痛、主動脈剝離、重度主動脈瓣狹窄、未控制的高血壓 (>200/110 mmHg)**。
3. **運動壓力達標门檻**：運動負荷**必須達到預測最大心率的 85%**（公式：(220 - 年齡) × 0.85）以上，否則陰性結果無法排除心肌缺血，應被判定為「次極大心率未達標之無效 stress」。

---

## 2. Acquisition Parameter Table

| 欄位 | 主流 Baseline 規格 |
| --- | --- |
| **Detector / Modality** | Dual-head SPECT 或是高效能 CZT 心臟專用 SPECT / SPECT/CT |
| **Collimator** | LEHR (Low Energy High Resolution)；CZT 機型則使用專用 Multi-pinhole collimator |
| **Tracer** | 99mTc-Sestamibi (MIBI) 或是 99mTc-Tetrofosmin |
| **Administered Activity** | **1-Day Protocol**：Rest 8–12 mCi → Stress 24–36 mCi (活度比例需 ≥ 3:1)<br>**2-Day Protocol**：每次 18–30 mCi (適用肥胖或高畫質需求個案) |
| **Patient Prep** | 禁食至少 4h (減少腸胃放射性干擾)；Vasodilator 停用咖啡因 12-24h；停用 Beta-blockers 24-48h (若以診斷 CAD 為目的之運動壓力) |
| **Uptake Time** | 靜息相注射後 45–60 分鐘；壓力相注射後 15–45 分鐘 (給藥後吃高脂餐/喝溫水有助膽汁排空) |
| **Position** | Supine (仰臥) 為基本；**強烈建議常規搭配 Prone (俯臥) 或 Upright (坐/立位) 補拍**以釐清衰減假影 |
| **FOV / Scan Range** | 涵蓋整個心臟區域，避免切到心尖 |
| **Matrix & Zoom** | 64x64 或 128x128；Pixel size 控制在 6.0–7.0 mm (Supine) |
| **Orbit & Arc** | Cardiac 180° (右前斜 RAO 45° 到左後斜 LPO 45°)，Body contour 軌跡軌道 |
| **Gating** | 8-frame 或是 16-frame ECG Gating (心律不整時需檢查 Gating histogram) |

---

## 3. Image Processing Parameter Table

| 欄位 | 主流 Baseline 規格 |
| --- | --- |
| **Reconstruction** | OSEM (Iterative Reconstruction) 配合 Resolution Recovery / PSF (點擴散函數修正) |
| **Filter** | Butterworth Filter (例如 Cutoff 0.4–0.5, Order 5–10，依廠牌與計數微調) 或 Gaussian 濾波 |
| **Attenuation Correction** | SPECT/CT CT-AC 或是 Line source AC。**解讀時務必對照 NAC (未校正) 與 AC (已校正) 影像** |
| **Scatter Correction** | Yes (TEW 雙/三能窗散射校正或 Reconstruction 內建模擬) |
| **Reorientation** | 沿左心室長軸重切為 Short Axis (SA)、Vertical Long Axis (VLA)、Horizontal Long Axis (HLA) |
| **Quantification** | 採用 17-segment model 進行 Perfusion score 定量 (SRS, SSS, SDS)；計算 LVEF、Wall Motion / Thickening |

## 4. 真實文獻影像圖解：標準切面與可逆性缺血

在臨床判讀心肌灌流 SPECT 時，最標準、最正規的方法是檢視**標準三切面（SA 短軸、VLA 垂直長軸、HLA 水平長軸）**的 Rest/Stress 對照圖。以下為 100% 來自真實核醫權威文獻的代表性影像對照解說：

![Normal myocardial perfusion SPECT](file:///D:/NMDEV/NMINFO%20heavy/assets/paper-figures/MPI/MPI_Figure14_NormalPerfusion_with_GastricActivity.jpg)
*圖 1：正常心肌灌流 SPECT 影像 (Normal Perfusion)。來源：Henzlova MJ, et al. J Saudi Heart Assoc. 2013;25:13-32, Figure 14。標準 short-axis slices 顯示左心室 17 節段的心肌放射性攝取呈均勻對稱分布，無灌流缺損。旁側可看見胃部與腸道的高放射性 extracardiac activity，需防範負面溢出效應干擾下壁。*

![Reversible ischemia on myocardial perfusion SPECT](file:///D:/NMDEV/NMINFO%20heavy/assets/paper-figures/MPI/MPI_Figure17A_Reversible_Ischemia.jpg)
*圖 2：可逆性缺血 SPECT 影像 (Reversible Ischemia)。來源：同文 Figure 17A。上排為 Stress 相，下排為 Rest 相。影像清楚呈現：在 Stress 下，左心室心尖部 (Apex)、前壁 (Anterior) 與前中膈 (Anteroseptal) 出現顯著的放射性缺損（呈黑色，灌流極低）；但在 Rest 靜息狀態下，該缺損區域完全恢復正常。這提示該區域的冠狀動脈 (LAD) 存在顯著狹窄，心肌缺血但依然存活 (Viable)，是血管重建手術的黃金適應症。*

### 🖼️ 心肌灌流極坐標 (Bull's Eye) 判讀心智框架

1. **Normal Perfusion (正常灌流)**
   - **影像特徵**：無論在 Stress (壓力相) 還是 Rest (靜息相) 中，左心室 17 個節段皆呈現均勻飽滿的放射性攝取（呈現明亮的橘紅色/金色高計數區）。
   - **臨床判讀**：排除有臨床意義的顯著冠狀動脈缺血，左心室收縮功能正常。
2. **Reversible Ischemia (可逆性缺血)**
   - **影像特徵**：在 **Stress 相** 的極坐標上，某個特定冠狀動脈分支血流灌注區域（如前壁/心尖部 Anterior/Apex）出現明顯的放射性缺損（顏色變暗或變黑）；然而在 **Rest 相** 影像中，該缺損區域完全或大部分恢復正常（放射性重新均勻分佈）。
   - **臨床判讀**：支持**「心肌缺血 (Inducible Ischemia)」**。這代表該區血管在運動/藥物壓力下無法提供足夠血流，但心肌仍是存活的 (Viable)。這類病人通常能從血管重建手術 (PCI/CABG) 中顯著受益。
3. **Infarction / Scar (心肌梗塞 / 疤痕)**
   - **影像特徵**：在 **Stress 相與 Rest 相** 的極坐標中，相同位置均出現「固定不變」的放射性嚴重缺損（呈現一致的黑洞區，即 **Fixed Defect**）。
   - **臨床判讀**：支持**「陳舊性心肌梗塞 (Infarction) 或纖維化疤痕 (Scar)」**。代表此處心肌已失去活性且無法挽回，血管重建手術對此區功能恢復幫助有限。
4. **定量分析金三角**：
   - **SSS (Summed Stress Score)**：Stress 下 17 節段缺損評分總和 (0=正常, 4=無攝取)；代表缺血 + 梗塞的總範圍。
   - **SRS (Summed Rest Score)**：Rest 下 17 節段缺損評分總和；代表不可逆梗塞 (Scar) 的範圍。
   - **SDS (Summed Difference Score)**：`SSS - SRS`。**這是評估「可逆性缺血範圍」最關鍵的指標**。SDS > 4 代表中度以上缺血，SDS > 7 提示高風險多支血管病變。

---

## 5. 深度 Pitfalls 避坑與排除對策

影像上的「缺損」不等於真正的冠心病缺血！臨床上高達 15–20% 的陽性報告屬於技術或生理性衰減所造成的「假陽性 (False Positive)」。核醫科醫師在下結論前，必須以這張經典真實文獻影像為標竿，排除衰減偽影：

![Shifting breast attenuation artifact](file:///D:/NMDEV/NMINFO%20heavy/assets/paper-figures/MPI/MPI_Figure5A_Shifting_Breast_Attenuation.jpg)
*圖 3：乳房組織衰減假影 (Breast Attenuation False Positive)。來源：同文 Figure 5A。上排為未經衰減校正 (Non-attenuation corrected, NAC) 的影像，心臟前壁 (Anterior wall) 呈現假缺損，極易被誤判為 LAD 缺血；下排為進行衰減校正 (Attenuation corrected, AC) 後的影像，前壁灌流完全恢復正常。*

### 🖼️ 圖 3：SPECT MPI 常見 Pitfalls 視覺特徵與對策

#### ⚠️ Pitfall 1：乳房衰減假影 (Breast Attenuation Artifact)
*   **視覺特徵**：女性前壁 (Anterior wall) 出現明顯的缺損。由於乳房組織的阻擋，穿透出來的伽馬射線減少，在未校正 (NAC) 影像上酷似左前降支 (LAD) 缺血。
*   **排除對策**：
    1. **NAC / AC 對照解讀**：如果 CT-AC 影像顯示前壁正常，而 NAC 顯示缺損，且 gated 顯示前壁運動 (wall motion) 與收縮增厚 (thickening) 完全正常，即可確診為乳房衰減。
    2. **Prone (俯臥) 補拍**：俯臥時乳房會自然下垂、移位，遠離心臟前壁，若補拍後缺損消失，則排除心肌缺血。

#### ⚠️ Pitfall 2：橫膈衰減假影 (Diaphragmatic Attenuation Artifact)
*   **視覺特徵**：男性下壁 (Inferior wall) 出現明顯缺損。主要因左側橫膈抬高、腹腔臟器或肥胖阻擋下壁射線，酷似右冠狀動脈 (RCA) 缺血。
*   **排除對策**：
    1. **Upright (坐/立位) 或 Prone (俯臥) 掃描**：改變體位可使橫膈下移，遠離心臟下壁。若補拍影像中下壁灌注恢復正常，則屬假陽性。
    2. **檢查下壁收縮增厚**：梗塞的下壁會失去收縮增厚功能，而單純衰減假影的 gated wall motion/thickening 依然完好。

#### ⚠️ Pitfall 3：腸肝外活性干擾 (Extracardiac / Gastrointestinal Uptake Interference)
*   **視覺特徵**：Tc-99m 經肝膽排泄，若腸道或膽囊中殘留高濃度的放射性藥物，且與心臟下壁極度接近。重建時，心臟外的「極熱熱點 (Hot Spot)」會在濾波反投影 (FBP) 或疊代重建中產生嚴重的「負面溢出 (Negative Spillover)」，在心臟下壁產生一個**人工假缺損**；或者相反，高活性與下壁重疊，掩蓋了真正的下壁缺血（假陰性）。
*   **排除對策**：
    1. **給藥後介入**：注射 tracer 後叮囑病人飲用溫水或食用高脂餐（如牛奶、蛋），刺激膽囊收縮排空，並延遲掃描時間。
    2. **SPECT/CT 解剖對照**：利用 CT 融合切面確認心臟下壁與相鄰腸道的解剖位置關係，判斷是否有重疊。

#### ⚠️ Pitfall 4：心律不整導致的 Gating 失敗 (Arrhythmia & Gating Failure)
*   **視覺特徵**：心房顫動 (Afib) 或頻繁早搏 (PVCs) 會使 R-R 間期極度不穩定。Gating 軟體會將超出窗口的訊號丟棄 (Frame drop-out)，造成心室容積曲線混亂，算出的 LVEF 異常低下或 wall motion 呈現偽裝性運動不良。
*   **排除對策**：
    1. **檢視 R-R Histogram**：檢查收像品質控制面板，若 R-R 分布呈雙峰或極度散亂，不應回報 Gated 數據。
    2. **改用非 gated (Un-gated) 數據解讀灌流本身**，並在報告中註明「因嚴重不整脈導致心室功能分析不可信」。

---

## 6. 結構化報告與科內落地指南

為了確保臨床溝通零誤差，科內 MPI 報告應嚴格遵守 **ASNC 結構化報告指引**：

1. **基本資訊與品質描述**：
   - 交代 Stress 方法（運動量/分階段、藥物種類與劑量、心率/血壓反應、是否有症狀或 ECG 改變）。
   - 交代 Gating 品質與是否有運動晃動 (Motion) 或衰減干擾。
2. **灌流評估 (Perfusion)**：
   - 明確指出有無缺損，若有，交代**位置 (17節段分佈)、範圍 (SSS/SRS/SDS) 與可逆性 (Ischemia vs. Scar)**。
3. **心室功能評估 (Gated Function)**：
   - 提供 Stress 與 Rest 下的 **LVEF**，以及局部 Wall motion & Thickening 表現。
   - 注意是否有 **TID (Transient Ischemic Dilation，暫時性心室擴張，正常值通常 < 1.12–1.20)**。TID 陽性高度提示廣泛性多支血管病變 (Balanced Ischemia)。
4. **結論與臨床下一步指引**：
   - **Low Risk (低風險)**：無顯著缺血，LVEF 正常。建議藥物保守治療。
   - **Intermediate/High Risk (中高風險)**：SDS > 4 或合併 TID 陽性、Stress 後 LVEF 下降。建議進行心導管 (Coronary Angiography) 或加做 Coronary CTA / FFR 評估。
   - **Non-diagnostic (無法判讀)**：因咖啡因干擾或嚴重晃動，建議重新安排檢查或更換檢查工具。
