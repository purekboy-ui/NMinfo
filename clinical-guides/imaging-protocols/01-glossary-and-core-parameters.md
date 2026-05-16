# 名詞解釋與共通技術參數

更新日期：2026-05-16

## 先抓住 4 個核心觀念

1. 核醫影像不是單看 tracer 名稱，還要看 acquisition 與 processing 是否匹配。
2. 同一個檢查常常沒有唯一數字，而是有一個合理範圍。
3. 真正應固定的是成像邏輯，不是每台機器都硬套同一組秒數。
4. 能被重現的 protocol，比看起來很專業但無法穩定複製的 protocol 更有價值。

## 常用名詞白話解釋

### Matrix

影像的像素格數，例如 `64 x 64`、`128 x 128`、`256 x 256`。  
Matrix 越大，單一 pixel 越小，細節可能更清楚，但每格 counts 也更少，雜訊可能更高。

### Zoom

視野放大倍率。常與 matrix 一起決定 pixel size。  
例如同樣 `128 x 128`，zoom 變大後，單一 pixel 對應的實際尺寸會變小。

### Pixel size

每個 pixel 對應到病人體內的實際長度。  
很多檢查比起單看 matrix，更該關心最後的 pixel size 是否落在合理範圍。

### Counts

偵測到的事件數。  
Planar 常用總 counts 當收像終止條件；SPECT / PET 常用 time/view 或 time/bed，但本質上仍是在追求足夠 counts。

### Time per view / time per stop

SPECT 每一個角度停留幾秒。  
秒數越長，counts 越多，但總掃描時間也越長，病人越容易動。

### Views / projections

SPECT 掃描時收幾個角度。  
常見為 60、64、120、128 views，取決於單頭或雙頭、180 度或 360 度採集方式。

### Orbit

探頭繞病人的路徑。  
可為 circular 或 body contour / noncircular。多數情況 body contour 可改善解析度。

### Collimator

決定光子進入探頭方式的前端結構。選錯 collimator，後面再怎麼重建都救不回來。

- `LEHR`：low-energy high-resolution，最常用於 Tc-99m
- `LEGP`：low-energy general-purpose，重 counts、解析度較寬
- `MEGP`：medium-energy general-purpose，常用於 I-123
- `HEGP`：high-energy general-purpose，常用於 I-131
- `Pinhole`：小器官或高解析局部成像

### OSEM

Ordered-subset expectation maximization。  
目前 SPECT / PET 最常見的 iterative reconstruction 家族。迭代數與 subsets 影響解析度、雜訊與收斂速度。

### FBP

Filtered back projection。  
老方法、快，但對低 counts 與衰減較敏感；現在多為備用或特殊場合。

### Attenuation correction, AC

利用 CT 或其他方法修正光子在體內被吸收造成的訊號損失。  
常見於 PET/CT、SPECT/CT、心臟 SPECT、brain SPECT。

### Scatter correction

修正散射光子，減少對比被污染。  
對 PET 與某些 SPECT 尤其重要。

### Resolution recovery / PSF

空間解析補償。可提升邊緣與小病灶顯示，但過強可能產生假性銳化或 Gibbs-like artifact。

### TOF

Time of flight，PET 專用。  
能改善定位與訊雜比，特別有利於大型體型病人。

### BSREM / Q.Clear

屬於 penalized likelihood 類的 PET 重建。  
臨床上常用廠牌既定 beta 值範圍，不建議自行大幅偏離。

### Gating

依心搏或呼吸分相重建。  
最常見於 cardiac SPECT/PET，也可用於呼吸影響明顯的 PET / SPECT/CT 配準修正。

### MIP

Maximum intensity projection。常見於 PET 全身概覽圖，不是最終診斷唯一依據。

### SUV

PET 半定量指標。  
SUV 要有可比性，前提是注射、等待時間、病人準備、重建與 ROI 方法都要穩定。

## 參數不是各自獨立，常見連動如下

- `matrix ↑` 常代表 `pixel size ↓`，若 counts 不變，雜訊可能上升
- `time/view ↑` 通常可補 counts，但 motion risk 也升高
- `zoom ↑` 能增加小器官顯示，但要確保整個 target 沒被裁掉
- `iterations ↑` 可提升細節，但過高可能放大雜訊
- `AC + scatter correction + resolution recovery` 要整套看，不建議只開其中一項後直接比較不同 protocol

## 各模態的共通 baseline

### Planar

- 常用在 thyroid、DMSA、bone whole-body、GI bleed、lung perfusion
- 關鍵是：
  - collimator 選對
  - counts 足夠
  - 病人位置穩
  - 視野完整

### SPECT

- 常用在 MPI、bone SPECT/CT、parathyroid、brain perfusion、DaT
- 關鍵是：
  - orbit 要盡量貼身
  - view 數不能太少
  - 每 view 的 counts / seconds 要與 matrix 匹配
  - reconstruction 與 filter 不能亂混

### PET/CT

- 常用在 FDG、PSMA、SSTR、amyloid、NaF
- 關鍵是：
  - 病人準備一致
  - uptake time 穩定
  - CT AC 不要出現呼吸或金屬造成嚴重配準錯誤
  - reconstruction preset 要固定

## 共通的 acquisition checklist

### 掃描前

- 臨床問題是否清楚
- 選的 tracer 是否真的回答該問題
- 病人準備是否完成
- 是否有近期造影劑、藥物、食物或手術影響判讀
- 是否需排尿、補水、停藥、 thyroid blockade、 premedication

### 掃描時

- 注射是否順利，是否疑似 extravasation
- detector / camera / CT 是否通過當日 QC
- 是否選對 collimator、energy window、matrix、zoom
- 病人是否能穩定維持姿勢
- 是否需要固定帶、枕頭、膝下墊、 head holder

### 掃描後

- 先看 raw data，不要只看重建結果
- 是否有 motion、截切、金屬、污染、注射滲漏
- 重建參數是否與科內 preset 一致
- report 中是否完整記錄 tracer、activity、注射時間、掃描時間與特殊事件

## 常見技術陷阱

### 只抄 matrix，不看 pixel size

不同 FOV 與 zoom 下，同樣 `128 x 128` 可能完全不是同一種解析度設定。

### 只抄別院的秒數

不同探頭靈敏度、體型、energy、reconstruction 不同，直接照抄常會失真。

### 沒先看 raw data

很多問題不是重建能補救，而是原始資料就已經出事，例如 motion、體位跑掉、尿液污染、注射滲漏。

### 把 vendor 後處理當黑盒子

臨床上可用原廠 preset，但至少要知道：

- 是否有 TOF
- 是否有 PSF
- 是否有 penalized likelihood
- CT AC 是否成功
- 是否有 metal artifact / respiratory misregistration

## 後續各檢查如何閱讀

每個 protocol 檔都會盡量用同一個骨架：

1. 臨床定位
2. tracer 與 activity
3. 病人準備
4. acquisition baseline
5. image processing
6. 常見 artifact / pitfall
7. 來源
