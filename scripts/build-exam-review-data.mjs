import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { NUCMED_EXPLANATION_PATCHES } from './exam-review-explanation-patches.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'nucmed-exam-review', 'data');
const LEGACY_SOURCE_DIR = path.join(ROOT, 'nucmed-exam-review', 'source');
const EXTERNAL_ROOT = ['D:/NMDEV/核醫考古題', '/mnt/d/NMDEV/核醫考古題']
  .find((candidate) => existsSync(candidate)) || 'D:/NMDEV/核醫考古題';
const NUCMED_JSON_DIR = path.join(EXTERNAL_ROOT, '核子醫學診療原理與技術學');
const NUCMED_MD_DIR = path.join(EXTERNAL_ROOT, '核子醫學診療原理與技術學_md');
const RPS_MD_DIR = path.join(EXTERNAL_ROOT, '輻防師考古_md');
const RPO_MD_DIR = path.join(EXTERNAL_ROOT, '輻射防護員_md');
const RADIATION_GUIDE_PATH = path.join(EXTERNAL_ROOT, '輻射防護師_員級_考試大補帖.md');
const FIGURE_ASSET_ROOT = './assets/exam-figures';
const RADIATION_ANSWER_SCAN_DIR = path.join(ROOT, 'nucmed-exam-review', 'assets', 'radiation-answer-scans');
const RADIATION_ANSWER_SCAN_MANIFEST_PATH = path.join(RADIATION_ANSWER_SCAN_DIR, 'manifest.json');

const TRACKS = {
  nucmed: {
    id: 'nucmed',
    title: '核子醫學診療原理與技術學',
    shortTitle: '核醫',
    description: '醫事放射師核醫歷屆試題，完整保留卷別、自測與交卷檢討。'
  },
  rps: {
    id: 'rps',
    title: '輻射防護師',
    shortTitle: '輻防師',
    description: '收錄法規與專業兩科，單選題可自測，計算問答題保留瀏覽與參考解答。'
  },
  rpo: {
    id: 'rpo',
    title: '輻射防護員',
    shortTitle: '輻防員',
    description: '收錄法規與專業兩科，適合考前複習、快速回查與單選題練習。'
  }
};

const SECTION_LABELS = {
  mcq: '單選題',
  essay: '計算問答題'
};

const createFigureOptions = () => ['A', 'B', 'C', 'D'].map((key) => ({
  key,
  text: `見題圖中的 ${key} 選項`
}));

const NUCMED_QUESTION_PATCHES = {
  'radiographer-107-1': {
    21: {
      options: createFigureOptions(),
      figureImage: `${FIGURE_ASSET_ROOT}/radiographer-107-1-q21.png`,
      figureAlt: '107-1 第21題心電圖門控示意圖'
    }
  },
  'radiographer-110-1': {
    44: {
      options: createFigureOptions(),
      figureImage: `${FIGURE_ASSET_ROOT}/radiographer-110-1-q44.png`,
      figureAlt: '110-1 第44題 DOTATOC 分子結構選項圖'
    }
  },
  'radiographer-110-2': {
    41: {
      stem: '核醫藥物 99mTc-DTPA 可用於測量腎絲球過濾率（glomerular filtration rate, GFR），DTPA 的分子結構為下列何者？',
      options: createFigureOptions(),
      figureImage: `${FIGURE_ASSET_ROOT}/radiographer-110-2-q41.png`,
      figureAlt: '110-2 第41題 DTPA 分子結構選項圖'
    }
  },
  'radiographer-111-1': {
    40: {
      options: createFigureOptions(),
      figureImage: `${FIGURE_ASSET_ROOT}/radiographer-111-1-q40.png`,
      figureAlt: '111-1 第40題 MAG3 分子結構選項圖'
    }
  },
  'radiographer-112-2': {
    57: {
      options: createFigureOptions(),
      figureImage: `${FIGURE_ASSET_ROOT}/radiographer-112-2-q57.png`,
      figureAlt: '112-2 第57題 PET 隨機偶合事件示意圖'
    }
  },
  'radiographer-114-2': {
    74: {
      options: [
        { key: 'A', text: '[223Ra → 219Rn]' },
        { key: 'B', text: '[62Cu → 62Ni]' },
        { key: 'C', text: '[99mTc → 99Tc]' },
        { key: 'D', text: '[177Lu → 177Hf]' }
      ]
    }
  }
};

const RADIATION_QUESTION_PATCHES = {
  'rps-106-1-professional': {
    1: {
      options: [
        { key: 'A', text: '63Cu + γ → 62Cu + 1n' },
        { key: 'B', text: '14N + 4He → 17O + 1H' },
        { key: 'C', text: '2H + 3H → 4He + 1H + 1n' },
        { key: 'D', text: '235U + 1n → 141Ba + 92Kr + 3n' }
      ]
    },
    15: {
      stem: '60Co 點射源的比加馬常數 Γ 為多少？[在空氣中的質量吸收係數 (μa/ρ) = 0.0244 cm2/g]',
      options: [
        { key: 'A', text: '4.11 × 10^-9 C·m2/(kg·MBq·h)' },
        { key: 'B', text: '8.22 × 10^-9 C·m2/(kg·MBq·h)' },
        { key: 'C', text: '4.11 × 10^-8 C·m2/(kg·MBq·h)' },
        { key: 'D', text: '8.22 × 10^-8 C·m2/(kg·MBq·h)' }
      ],
      answerText: '(2)\n60Co 每次蛻變會射出 1.17 MeV 與 1.33 MeV 加馬射線各一條，代入比加馬常數公式可得 Γ = 8.22 × 10^-9 C·m2/(kg·MBq·h)。'
    }
  },
  'rps-108-1-professional': {
    4: {
      stem: '一隻 20 公克的小鼠含有 1.25×10^5 Bq 的 14C 分布在全身。14C 釋放出 β 粒子的平均能量為 0.0495 MeV，若能量全部被吸收，則小鼠全身的平均吸收劑量率為多少 Gy/s？',
      options: [
        { key: 'A', text: '4.95×10^-11' },
        { key: 'B', text: '4.95×10^-8' },
        { key: 'C', text: '3.09×10^8' },
        { key: 'D', text: '3.09×10^11' }
      ]
    },
    11: {
      options: [
        { key: 'A', text: '14N(n,n\')14N、1H(n,γ)2H' },
        { key: 'B', text: '14N(n,p)14C、1H(n,n\')1H' },
        { key: 'C', text: '14N(n,p)14C、1H(n,γ)2H' },
        { key: 'D', text: '14N(n,2n)13N、1H(n,n\')1H' }
      ]
    }
  },
  'rps-108-2-professional': {
    essay: {
      5: {
        stem: '一含有 2.7 Ci 活度的 137Cs，均勻散佈在半徑 30 公分的球體純水溶液中，已知 137Cs 的比加馬發射（specific gamma-ray emission）為 7.82 × 10^-8 Sv·m2·MBq^-1·h^-1，662 keV 的 γ-ray 對水的直線衰減係數為 3.27 m^-1，請問球心處的劑量率（Sv/h）？',
        answerText: 'Ḋ = CΓ · (4π/μ) · (1 - e^-μR)\n其中 C = (2.7 Ci × 3.7 × 10^4 MBq/Ci) / [(4/3)π(0.3 m)^3]\n代入 Γ = 7.82 × 10^-8 Sv·m2·MBq^-1·h^-1、μ = 3.27 m^-1、R = 0.3 m，可得球心處劑量率 Ḋ = 0.166 Sv/h。'
      }
    },
    8: {
      stem: '一台空氣壁袖珍式游離腔內部含 7.5 mg 空氣，其電容為 9.5 pF，將游離腔充電，試問多少的曝露量能使其電位下降 10 V？（1 R = 2.58×10^-4 C/kg）',
      options: [
        { key: 'A', text: '7.1×10^-15 R' },
        { key: 'B', text: '2.8×10^-12 R' },
        { key: 'C', text: '1.3×10^-6 R' },
        { key: 'D', text: '4.9×10^-2 R' }
      ]
    }
  },
  'rps-109-2-professional': {
    2: {
      stem: '曝露量為 25.8 μC/kg 的 300 keV 光子，造成肌肉的吸收劑量為多少 Gy？（肌肉和空氣的質量衰減係數分別為 0.0317 cm2/g 及 0.0288 cm2/g；在空氣中產生 1 離子對所需能量為 34 eV）',
      options: [
        { key: 'A', text: '6.9×10^-7' },
        { key: 'B', text: '8.4×10^-7' },
        { key: 'C', text: '8.0×10^-4' },
        { key: 'D', text: '9.7×10^-4' }
      ]
    },
    6: {
      stem: '核種對熱中子的捕獲截面與下列哪一個因子成正比關係？',
      options: [
        { key: 'A', text: '1/E^2' },
        { key: 'B', text: '1/V^2' },
        { key: 'C', text: '1/√E' },
        { key: 'D', text: '1/√V' }
      ]
    }
  },
  'rps-111-1-law': {
    12: {
      options: [
        { key: 'A', text: '含氚 1×10^10 貝克之鐘錶' },
        { key: 'B', text: '含鋂二四一 1×10^6 貝克之煙霧警報器' },
        { key: 'C', text: '含氚 3×10^12 貝克之逃生用指示燈' },
        { key: 'D', text: '含氪八五 1×10^9 貝克之燈泡' }
      ]
    }
  },
  'rps-112-2-professional': {
    14: {
      stem: '已知某物質之密度為 ρ g/cm3，在物質內平均產生一離子對需能量 W eV，若輻射在體積為 V cm3 的物質中，造成 E 焦耳能量的沉積（deposit），則請問該物質的吸收劑量（Gy）為：',
      options: [
        { key: 'A', text: 'W·E / (V·ρ)' },
        { key: 'B', text: '1000E / (V·ρ)' },
        { key: 'C', text: '6.25×10^15·E / (W·V·ρ)' },
        { key: 'D', text: '6.25×10^18·E / (W·V·ρ)' }
      ]
    },
    essay: {
      7: {
        answerText: `解：
(1) 1 μg 的 137Cs 所含原子數為
N = (10^-6 / 137) × 6.02 × 10^23 = 4.39 × 10^15。

137Cs 的半化期約為 30.05 年，
故一天內的蛻變數
= λN × 86400
= 2.78 × 10^11 次。

每次蛻變平均放出的 γ 能量為
0.85 × 0.662 ≈ 0.66 MeV，
所以一天釋放的總 γ 能量為
2.78 × 10^11 × 0.85 × 0.66
= 1.56 × 10^11 MeV。

(2) 依蛻變圖，平均可沉積在物質中的 β 與內轉換電子能量約為
0.054 × (1.176 / 3) + 0.946 × (0.514 / 3) + (0.946 - 0.85) × 0.662
= 0.2468 MeV / 蛻變。

故一天沉積在 1 kg 物質中的總能量為
2.78 × 10^11 × 0.2468 × 1.6 × 10^-13
= 1.10 × 10^-2 J/kg
= 1.10 × 10^-2 Gy。`
      }
    }
  },
  'rpo-110-1-professional': {
    2: {
      stem: '弗力克（Fricke）化學輻射劑量計，在產生相同分子數目下，使用的 G 值（每吸收 100 eV 輻射能產生變化的分子數目）與吸收劑量 D 的關係為何？',
      options: [
        { key: 'A', text: 'G 與 D 成正比' },
        { key: 'B', text: 'G 與 D 成反比' },
        { key: 'C', text: 'G 與 D^2 成正比' },
        { key: 'D', text: 'G 與 D^2 成反比' }
      ]
    }
  },
  'rpo-113-1-professional': {
    3: {
      answer: 'A',
      acceptedAnswers: ['A'],
      options: [
        { key: 'A', text: '2 ± 0.026' },
        { key: 'B', text: '2 ± 0.013' },
        { key: 'C', text: '2 ± 0.052' },
        { key: 'D', text: '2 ± 1.414' }
      ]
    },
    13: {
      answer: 'D',
      acceptedAnswers: ['D'],
      options: [
        { key: 'A', text: 'Kc = ψ(μtr/ρ)E,Z；X = (Kc)Air · (W/e)' },
        { key: 'B', text: 'Kc = ψ(μtr/ρ)E,Z；X = (Kc)Air · (e/W)' },
        { key: 'C', text: 'Kc = ψ(μen/ρ)E,Z；X = (Kc)Air · (W/e)' },
        { key: 'D', text: 'Kc = ψ(μen/ρ)E,Z；X = (Kc)Air · (e/W)' }
      ]
    }
  },
  'rps-113-1-professional': {
    mcq: {
      4: {
        stem: '若游離腔氣體之 W = 30 eV/ip，則當游離腔電流為 2.0 × 10^-16 A 時，表示游離腔的能量吸收率為多少 eV/s？',
        options: [
          { key: 'A', text: '6.67 × 10^-18' },
          { key: 'B', text: '6.0 × 10^-15' },
          { key: 'C', text: '3.75 × 10^4' },
          { key: 'D', text: '1.5 × 10^17' }
        ],
        answerText: '(3)\nN = I / e = (2.0 × 10^-16 C/s) / (1.6 × 10^-19 C) = 1.25 × 10^3 ion/s\nE = N × W = 1.25 × 10^3 × 30 = 3.75 × 10^4 eV/s'
      }
    },
    essay: {
      4: {
        stem: '一游離腔的腔壁材質為鋁（密度＝2.7 g/cm3），氣體空腔體積為 5 cm3（ρair = 0.001293 g/cm3），而其腔壁對空氣的質量阻擋本領比（mass stopping power ratio）為 1.3，空氣中每產生一個離子對需消耗 34 eV 的能量，若此游離腔之飽和電流為 8.13 × 10^-13 安培，根據 Bragg-Gray 空腔理論，求腔壁之吸收劑量率為多少 mGy/h？',
        answerText: '先求空腔內空氣質量 m = ρV = 0.001293 g/cm3 × 5 cm3 = 0.006465 g = 6.465 × 10^-6 kg。\nḊair = (W/e) × I / m = 34 × (8.13 × 10^-13 C/s) / (6.465 × 10^-6 kg) = 4.28 × 10^-6 Gy/s。\n再乘上質量阻擋本領比 1.3，得 Ḋwall = 1.3 × 4.28 × 10^-6 = 5.56 × 10^-6 Gy/s = 2.00 × 10^-2 Gy/h = 20.0 mGy/h。'
      }
    }
  },
  'rps-108-1-professional': {
    14: {
      stem: '若一同位素每 100 次衰變平均有 96 次會有加馬射線從原子核發射出來，其中與其 K、L 及 M 層電子發生內轉換作用的加馬射線分別有 10、5 及 1 次，其餘加馬射線均可發射出原子外，則發生 K 電子內轉換之相對機率（internal conversion yield, αk）為？',
      options: [
        { key: 'A', text: '10.0%' },
        { key: 'B', text: '10.5%' },
        { key: 'C', text: '12.5%' },
        { key: 'D', text: '16.7%' }
      ],
      answer: 'C',
      acceptedAnswers: ['C'],
      answerText: 'αk = 在 K 層發生的內轉換次數 / 觀測到自原子發射出去的加馬射線數 = 10 / (96 - 10 - 5 - 1) = 12.5%'
    }
  },
  'rps-114-2-professional': {
    mcq: {
      6: {
        stem: '假如放射性核種活度每小時衰減 1%，則該核種活度衰減至 1/4 所需時間約為多少小時？',
        options: [
          { key: 'A', text: '70' },
          { key: 'B', text: '100' },
          { key: 'C', text: '140' },
          { key: 'D', text: '180' }
        ],
        answer: 'C',
        acceptedAnswers: ['C'],
        answerText: `設半衰期為 T1/2，則
0.99 = e^[-(0.693/T1/2) × 1 h]

兩邊取 ln，可得
T1/2 = 0.693 / 0.01 = 69.3 h

活度衰減至 1/4 代表經過 2 個半衰期，
故所需時間約為 2 × 69.3 = 138.6 h

最接近的選項為 140 小時。`
      }
    },
    essay: {
      6: {
      stem: '請參考 137Cs 之衰變圖，估算 100 mCi 之 137Cs 點射源 1.7 m 處的空氣劑量率 (mGy/h) 與曝露率 (mR/h)。（已知 0.662 MeV 光子在空氣中之 (μ_en/ρ) = 0.0027 m2/kg）',
      answerText: `由
Ḋ = Ψ × (μ_en/ρ) = [A × E × (μ_en/ρ)] / (4πd2)

137Cs 平均每次蛻變中僅有 85% 機率放出 0.662 MeV 的 γ 射線，
故每次蛻變以 γ 輻射方式釋放的平均能量為
0.85 × 0.662 = 0.563 MeV。

代入 A = 100 mCi = 3.7 × 10^9 Bq、d = 1.7 m、
(μ_en/ρ) = 0.0027 m2/kg、1 MeV = 1.6 × 10^-13 J，

Ḋ = [3.7 × 10^9 × 0.563 × 1.6 × 10^-13 × 0.0027] / [4π × (1.7)^2]
   = 2.47 × 10^-8 Gy/s
   = 8.89 × 10^-5 Gy/h
   = 0.0889 mGy/h

若以 1 R ≈ 0.0088 Gy 換算，
Ẋ = 0.0889 / 0.0088 ≈ 10.1 mR/h`
      }
    }
  },
  'rpo-112-1-professional': {
    essay: {
      6: {
        stem: '有一活度為 4 Ci 的 60Co 點射源，每次蛻變射出 1.17 MeV 與 1.33 MeV 的加馬射線，在空氣中的質量吸收係數 (μa/ρ) = 0.0267 cm2/g，試求：(1) 60Co 的比加馬射線常數 Γ（R·m2/(Ci·h)）；(2) 離該射源 2 公尺處空氣的吸收劑量率 Ḋ（Gy/h）。',
        answerText: '(1) 比加馬射線常數 Γ = 1.29 R·m2/(Ci·h)。\n(2) 2 公尺處曝露率 Ẋ = ΓA/r2 = 1.29 × 4 / 2^2 = 1.29 R/h。\n再用 Ḋ = (W/e)Ẋ/3876，代入 W/e = 34 J/C，可得空氣吸收劑量率 Ḋ = 1.13 × 10^-2 Gy/h。'
      }
    }
  },
  'rpo-106-1-professional': {
    essay: {
      4: {
        answerText: `解：先由光子能量公式 E = 12400 / λ（eV）計算。
波長 2200 Å 的光子能量為 12400 / 2200 = 5.636 eV；
鎢的閾能為 12400 / 2700 = 4.593 eV。
故光電子最大動能 = 5.636 - 4.593 = 1.043 eV。`
      },
      5: {
        answerText: `解：
(a) 先求 90Sr 的比活度：
(1600 × 226) / (90 × 29.12) = 137.97 Ci/g。
樣品質量為 6.2 × 10^-3 g，
故 A(90Sr) = 6.2 × 10^-3 × 137.97 × 3.7 × 10^10 = 3.17 × 10^10 Bq。

(b) 90Sr 與 90Y 處於長期平衡，
故 A(90Y) = A(90Sr) = 3.17 × 10^10 Bq。

(c) 100 年後 90Sr 活度為
3.17 × 10^10 × e^[-(0.693 / 29.12) × 100] = 2.94 × 10^9 Bq。
長期平衡下 90Y 活度亦約為 2.94 × 10^9 Bq。`
      },
      6: {
        answerText: `解：有效淨除率常數為物理淨除率與生物淨除率之和。
λ_E = λ_R + λ_B = 0.693 / 87 + 0.693 / 623
= 7.97 × 10^-3 + 1.11 × 10^-3
= 9.1 × 10^-3 d^-1。`
      },
      7: {
        answerText: `解：先算 3 m 處未屏蔽的曝露率：
Ẋ0 = 0.34 × 20 / 3^2 = 0.756 R/h = 756 mR/h。

若加鉛厚度為 x，則
0.05 = 756 × e^(-μx)，
故 μx = ln(756 / 0.05) = 9.642。

137Cs（661.6 keV）在鉛中的線性衰減係數為
μ = (μ/ρ)ρ = 0.1084 × 11.35 = 1.23 cm^-1。

因此 x = 9.642 / 1.23 = 7.82 cm，
所需鉛屏蔽厚度約為 7.8 cm。`
      }
    }
  },
  'rpo-107-2-professional': {
    essay: {
      1: {
        answerText: `解：A = λN，且 λ = 0.693 / T1/2。
32P 的半化期為 14.3 天，
λ = 0.693 / (14.3 × 24 × 3600)。

活度 10 mCi = 10 × 10^-3 × 3.7 × 10^10 = 3.7 × 10^8 Bq，
故原子數 N = A / λ = 1.055 × 10^16。

質量 m = N × 32 / (6.02 × 10^23)
= 3.5 × 10^-8 g。`
      },
      2: {
        answerText: `解：年平均有效劑量限度取 20 mSv = 0.02 Sv。
已知劑量轉換因數為 6.7 × 10^-9 Sv/Bq，
故年平均攝入限度
ALI = 0.02 / (6.7 × 10^-9) = 3.0 × 10^6 Bq。

若參考人每小時吸入 1.2 m3、每年工作 2000 小時，
年呼吸量 = 1.2 × 2000 = 2400 m3。
因此
DAC = ALI / 2400 = 1.25 × 10^3 Bq/m3。`
      },
      4: {
        answerText: `解：1 Ci = 3.7 × 10^4 MBq。
距離 Co-60 點射源 1 m 處的未屏蔽劑量率為
Ḣ0 = ΓA / r^2 = 3.703 × 10^-4 × 3.7 × 10^4 / 1^2
= 13.7 mSv/h = 13700 μSv/h。

若鉛半值層為 1.2 cm，厚度為 x 時
Ḣ(x) = Ḣ0 × (1/2)^(x/1.2)。
代入 Ḣ(x) = 25 μSv/h，可得
(1/2)^(x/1.2) = 25 / 13700，
x / 1.2 = log2(13700 / 25) ≈ 9.1。

所以 x = 1.2 × 9.1 = 10.92 cm，
所需鉛屏蔽厚度約為 10.9 cm。`
      },
      5: {
        answerText: `解：用面密度守恆換算不同介質的射程：
ρ_air × ℓ_air = ρ_water × ℓ_water。

代入 ρ_air = 0.001293 g/cm3、ℓ_air = 3.93 cm、ρ_water = 1 g/cm3，
ℓ_water = 0.001293 × 3.93 = 0.0051 cm
= 0.051 mm。`
      },
      6: {
        answerText: `解：被活化核種的活度為
A(t) = A_sat (1 - e^(-λt))。
題目給照射時間 t = 10.6 年，而 60Co 的半化期為 5.26 年，
故 λt = (0.693 / 5.26) × 10.6 ≈ 1.40。

因此
A(t) / A_sat = 1 - e^-1.40 ≈ 1 - 0.25 = 0.75。

所以 60Co 活度約為飽和活度的 75%。`
      },
      7: {
        answerText: `解：平均吸收劑量率可由
Ḋ = A × E × 1.6 × 10^-13 / m
計算。

其中 A = 1.2 × 10^5 Bq，
β 粒子平均能量 E = 0.0495 MeV，
質量 m = 50 g = 0.05 kg。

故
Ḋ = (1.2 × 10^5) × 0.0495 × 1.6 × 10^-13 / 0.05
= 1.9 × 10^-8 Gy/s。`
      }
    }
  },
  'rps-110-1-professional': {
    essay: {
      1: {
        answerText: `解：30 秒內淨計數為 624 - 58 = 566 counts。

真實計測效率（intrinsic efficiency）只看進入偵測面的 γ：
εint = 566 / [3.7 × 10^4 × 10^-6 Ci × 0.85 × 30 s × 0.05]
= 566 / 47175
= 0.012。

絕對計測效率（absolute efficiency）以射源總發射 γ 計：
εabs = 566 / [3.7 × 10^4 × 10^-6 Ci × 0.85 × 30 s]
= 566 / 943500
= 6.0 × 10^-4。`
      },
      2: {
        answerText: `解：
(1) 先由電子質量射程公式求康普吞電子動能：
lnE = 6.63 - 3.2376(10.2146 - ln460)^(1/2) = 0.08767，
故 E = e^0.08767 = 1.09 MeV。

(2) 電子散射角 φ = 0° 時，散射光子角度 θ = 180°。
康普吞電子動能可寫成
E = 2(hν)^2 / (2hν + 0.511)。
代入 E = 1.09 MeV，可解得入射光子能量 hν ≈ 1.30 MeV。`
      },
      3: {
        answerText: `解：最大密度射程等於空氣、鋁片與 GM 窗面密度的總和。

GM 窗厚度 = 2.0 mg/cm2。
鋁擋片面密度 = 2.7 g/cm3 × 0.25 cm × 1000 = 675 mg/cm2。
空氣面密度（20℃）= 0.001293 × 273 / (273 + 20) × 4.8 × 1000
= 5.8 mg/cm2。

故最大密度射程
= 2.0 + 675 + 5.8
= 682.8 mg/cm2。`
      },
      4: {
        answerText: `解：Ra-226 的半化期遠大於 Rn-222，可視為母核活度近似不變，
故子核活度可用
A_Rn(t) ≈ A_Ra(0) [1 - e^(-λ_Rn t)]
計算，其中 λ_Rn = 0.693 / 3.8 d^-1。

10 天後：
A_Rn(10) = 100 [1 - e^(-(0.693/3.8) × 10)] = 83.9 Bq。

30 天後：
A_Rn(30) = 100 [1 - e^(-(0.693/3.8) × 30)] = 99.6 Bq。`
      },
      7: {
        answerText: `解：
(1) 樣品的總計數率
Rg = 1426 / 10 = 142.6 cpm。

背景計數率
Rb = 2561 / 90 = 28.46 cpm。

故淨計數率
Rnet = Rg - Rb = 142.6 - 28.46 = 114.1 cpm。

樣品計數率標準差
σg = √1426 / 10 = 3.78 cpm；
背景計數率標準差
σb = √2561 / 90 = 0.56 cpm。

因此淨計數率標準差
σnet = √(σg^2 + σb^2)
= √(3.78^2 + 0.56^2)
= 3.82 cpm。

(2) 95% 信賴區間要求
1.96σnet ≤ 0.05 × 114.1 = 5.71，
故 σnet 需不大於 5.71 / 1.96 = 2.91 cpm。

若不重複測量背景，則背景不確定度仍為 0.56 cpm；
設樣品需測量 t 分鐘，則樣品總計數率的不確定度為 √(142.6/t)。

因此
√(142.6/t + 0.56^2) = 2.91，
t = 17.5 分鐘。

故至少需測量約 18 分鐘。`
      }
    }
  },
  'rps-106-1-professional': {
    essay: {
      1: {
        answerText: `解：Cs-137 半化期為 30 年，衰變公式為
A(t) = A(0)e^(-λt)，其中 λ = 0.693 / 30。

當 A(t) / A(0) = 0.01 時，
e^[-(0.693/30)t] = 0.01。
兩邊取自然對數可得
t = 30 × ln(100) / 0.693 = 199.6 年。

故約需 200 年。`
      },
      3: {
        answerText: `解：用面密度守恆換算空氣與水中的射程：
ρ_air × λ_air = ρ_water × λ_water。

代入 ρ_air = 0.001293 g/cm3、λ_air = 3.93 cm、ρ_water = 1 g/cm3，
λ_water = 0.001293 × 3.93 = 0.0051 cm
= 0.051 mm。`
      },
      4: {
        answerText: `解：單一閃爍光子的能量為
E = hν = 6.63 × 10^-34 × 6.25 × 10^14 / (1.6 × 10^-19)
= 2.59 eV。

5000 個閃爍光子的總能量為
5000 × 2.59 eV = 1.30 × 10^4 eV = 13.0 keV。

故閃爍體效率
= 13.0 / 140 × 100%
= 9.29%。`
      },
      5: {
        answerText: `解：空氣吸收劑量可由
D = Q(W/e) / m
計算。

沉積能量
= 3.5 × 10^-10 C × 33.85 J/C
= 1.18 × 10^-8 J。

空氣質量
= 0.6 cm3 × 0.001293 g/cm3
= 7.758 × 10^-4 g
= 7.758 × 10^-7 kg。

故
D = 1.18 × 10^-8 / 7.758 × 10^-7
= 0.0153 Gy
= 15.3 mGy。`
      },
      6: {
        answerText: `解：主屏蔽前方每週無屏蔽空氣克馬為
K(0) = 1.2 × 250 / 3^2 = 33.3 mGy/wk。

牆外限值為 P = 0.02 mGy/wk，佔用因數 T = 1，
故所需穿透率
B = P / K(0) = 0.02 / 33.3 = 6 × 10^-4。

由 chest room 的屏蔽曲線查得，
穿透率 6 × 10^-4 對應之鉛當量厚度約為 2.2 mmPb。`
      },
      7: {
        answerText: `解：先算 10.0 cm 到 10.1 cm 之間被吸收的光子數：
ΔN = 10^6 [e^(-(0.0636×2.25×10.0)) - e^(-(0.0636×2.25×10.1))]
= 3397。

每個被吸收光子的平均沉積能量為
E_ab = 1 MeV × (μab/ρ) / (μ/ρ)
= 1 × 0.0280 / 0.0636
= 0.440 MeV。

故該 1 mm 碳層吸收的總能量為
3397 × 0.440 = 1495 MeV。`
      }
    }
  },
  'rpo-109-2-professional': {
    essay: {
      4: {
        answerText: `解：
(a) 鉛合金的質量衰減係數可用重量百分比加權：
μ/ρ = 3.50 × 0.87 + 1.17 × 0.12 + 0.325 × 0.01
= 3.19 cm2/g。

因此直線衰減係數為
μ = (μ/ρ)ρ = 3.19 × 10.4 = 33.2 cm^-1。

(b) 由衰減公式 I/I0 = e^(-μt) = 1/25，
t = ln(25) / 33.2 = 0.097 cm。

故所需鉛合金厚度約為 0.097 cm（約 0.97 mm）。`
      }
    }
  },
  'rpo-110-2-professional': {
    essay: {
      6: {
        answerText: `解：
(1) 質子的總能量
E = T + m0c^2 = 150 + 931 = 1081 MeV。

(2) 相對論質量與靜止質量之比為
m/m0 = E/(m0c^2) = 1081/931 = 1.16。

(3) 由 γ = m/m0 = 1.16，
v/c = √(1 - 1/γ^2)
= √(1 - 1/1.16^2)
= 0.51。

所以質子速度約為 0.51c。`
      }
    }
  },
  'rpo-111-1-professional': {
    essay: {
      1: {
        answerText: `解：
(1) 10 keV = 10 × 1.6 × 10^-16 J = 1.6 × 10^-15 J。

組織質量 0.1 g = 10^-4 kg，
故吸收劑量
D = E / m
= 1.6 × 10^-15 / 10^-4
= 1.6 × 10^-11 Gy。

(2) 阿伐粒子的輻射加權因數 wR = 20，
故等價劑量
H = D × wR
= 1.6 × 10^-11 × 20
= 3.2 × 10^-10 Sv。`
      },
      3: {
        answerText: `解：
(1) 光子通量 obey N = N0e^(-μx)。

已知在 3 cm 與 5 cm 厚度時，
3 × 10^10 / 6 × 10^9 = e^[μ(5 - 3)]，
即 5 = e^(2μ)。

所以
μ = ln5 / 2
= 0.805 cm^-1。

(2) 平均自由路徑
λ = 1 / μ
= 1 / 0.805
= 1.24 cm。`
      },
      4: {
        answerText: `解：當 v = 0.8c 時，
γ = 1 / √(1 - v^2/c^2) = 1 / √(1 - 0.8^2) = 1 / 0.6 = 1.67。

(1) 電子的相對論質量
m = γm0 = 1.67 × 0.00055 amu
= 9.2 × 10^-4 amu。

(2) 電子的動能
K = (γ - 1)m0c^2
= (1.67 - 1) × 0.511 MeV
= 0.342 MeV。`
      },
      6: {
        answerText: `解：
(1) 直線衰減係數
μ = (μ/ρ)ρ
= 0.09 × 3.67
= 0.330 cm^-1。

(2) 3 cm 厚 NaI 中至少作用一次的比例為
1 - e^(-μx)
= 1 - e^[-(0.330 × 3)]
= 1 - e^-0.991
= 0.629。

故約有 62.9% 的入射光子會在 3 cm 厚的 NaI 晶體中作用。`
      }
    }
  },
  'rpo-111-2-professional': {
    essay: {
      6: {
        answerText: `解：由衰變公式
A/A0 = e^(-λt)。

已知 5 天後剩下 40%，故
0.4 = e^(-5λ)。

兩邊取自然對數得
λ = -ln(0.4) / 5
= 0.183 day^-1。

半化期
T1/2 = 0.693 / λ
= 3.78 天。

平均壽命
τ = 1 / λ
= 5.46 天。`
      }
    }
  },
  'rpo-113-2-professional': {
    essay: {
      2: {
        answerText: `解：
(1) 樣品加背景的計數率
Rg = 40000 / 5 = 8000 cpm。

背景計數率
Rb = 900 / 20 = 45 cpm。

故樣品淨計數率
Rnet = 8000 - 45 = 7955 cpm。

樣品加背景計數率標準差
σg = √40000 / 5 = 40 cpm；
背景計數率標準差
σb = √900 / 20 = 1.5 cpm。

因此淨計數率標準差
σnet = √(40^2 + 1.5^2)
= 40.0 cpm。

(2) 7875 cpm 與平均值 7955 cpm 相差
7955 - 7875 = 80 cpm，
約等於 80 / 40.0 = 2 個標準差。

若視為高斯分佈，低於平均值 2σ 的機率約為 2.3%，可近似為 2.5%。`
      }
    }
  },
  'rpo-115-1-professional': {
    essay: {
      6: {
        answerText: `解：
(1) 水的質量衰減係數為 0.06 cm2/g，取水密度 ρ ≈ 1 g/cm3，
則直線衰減係數
μ = (μ/ρ)ρ = 0.06 cm^-1。

平均自由行程
λ = 1 / μ = 1 / 0.06 = 16.7 cm。

(2) 能量轉移比例可寫為
ftr = μtr / μ
= 0.032 / 0.06
= 0.533。

故能量轉移比例約為 53.3%。`
      }
    }
  },
  'rpo-114-1-professional': {
    essay: {
      4: {
        answerText: `解：計數比值
R = A/B = 3000/150 = 20。

若 A、B 互相獨立且符合 Poisson 統計，則
σR/R = √[(σA/A)^2 + (σB/B)^2]
= √[(√3000/3000)^2 + (√150/150)^2]
= √(1/3000 + 1/150)
= 0.084。

因此
σR = R × 0.084 = 20 × 0.084 = 1.68。

故 A/B 的標準差為 1.68。`
      }
    }
  },
  'rpo-114-2-professional': {
    essay: {
      3: {
        stem: '一游離腔式劑量筆，內部充填 1 cm3 體積之標準空氣（1 大氣壓），偵檢器內部電容大小為 10 pF，經一光子輻射曝露後其偵檢器電壓降了 1 V，請計算此游離腔式劑量筆接受了多少曝露（mR）？（1 R = 2.58 × 10^-4 C/kg）',
        answerText: `解：先算電壓下降所對應的電量變化：
Q = CΔV = 10 pF × 1 V = 10 × 10^-12 C = 1.0 × 10^-11 C。

1 cm3 標準空氣的質量為
m = 1 cm3 × 1.293 × 10^-3 g/cm3
= 1.293 × 10^-3 g
= 1.293 × 10^-6 kg。

因此曝露量
X = (Q/m) / (2.58 × 10^-4 C/kg per R)
= (1.0 × 10^-11 / 1.293 × 10^-6) / (2.58 × 10^-4)
= 2.998 × 10^-2 R
= 29.98 mR。

故此劑量筆接受的曝露約為 30.0 mR。`
      },
      6: {
        answerText: `解：
(1) 先求 210Pb 的比活度：
比活度 = (226 × 1600 年) / (210 × 1.94 年)
= 887.58 Ci/g。

現在 5 mg = 0.005 g，所以目前活度為
A0 = 887.58 Ci/g × 3.7 × 10^10 Bq/Ci × 0.005 g
= 1.64 × 10^11 Bq。

(2) 10 年後活度
A = A0e^(-0.693t/T1/2)
= 1.64 × 10^11 × e^[-(0.693 × 10 / 1.94)]
= 4.6 × 10^9 Bq。`
      }
    }
  },
  'rps-108-2-professional': {
    essay: {
      1: {
        stem: '假設光子能量為 1.25 MeV，光子通量率為 10^8 /cm2·s，光子與空氣作用的能量吸收係數為 μen = 3.1 × 10^-5 /cm。試求空氣的吸收劑量率等於多少 mGy/s？人體軟組織的吸收劑量率等於多少 mGy/s？（註：1 MeV = 1.6 × 10^-13 J，空氣密度 = 1.293 × 10^-6 kg/cm3，(μen/ρ)tissue = 0.0280 cm2/g）',
        answerText: `解：
(a) 空氣吸收劑量率
Ḋair = ΦEμen / ρair
= (10^8 /cm2·s) × (1.25 MeV) × (1.6 × 10^-13 J/MeV) × (3.1 × 10^-5 /cm) / (1.293 × 10^-6 kg/cm3)
= 4.80 × 10^-4 Gy/s
= 0.48 mGy/s。

(b) 人體軟組織吸收劑量率
Ḋtissue = ΦE(μen/ρ)tissue
= (10^8 /cm2·s) × (1.25 MeV) × (1.6 × 10^-13 J/MeV) × (0.0280 cm2/g) × (10^3 g/kg)
= 5.6 × 10^-4 Gy/s
= 0.56 mGy/s。`
      }
    }
  },
  'rps-110-2-professional': {
    essay: {
      2: {
        answerText: `解：先求混合氣體的平均莫耳重：
M = 44 × 0.3001 + 28 × 0.0174 + 16 × 0.6792 + 30 × 0.0033
= 24.7 g/mol。

球形游離腔半徑為 5 cm，體積
V = (4/3)πr^3 = (4/3)π(5 cm)^3 = 523.6 cm3。

在 STP 下，腔內氣體質量為
m = MV / 22400
= 24.7 × 523.6 / 22400
= 0.577 g
= 5.77 × 10^-4 kg。

電流 I = 6 × 10^-10 A，故每秒產生離子對數為
N = I/e = (6 × 10^-10) / (1.6 × 10^-19)
= 3.75 × 10^9 對/s。

每秒沉積能量
Ė = N × 30.5 eV × 1.6 × 10^-19 J/eV
= 1.83 × 10^-8 J/s。

因此吸收劑量率
Ḋ = Ė/m
= (1.83 × 10^-8) / (5.77 × 10^-4)
= 3.17 × 10^-5 Gy/s。`
      }
    }
  },
  'rps-112-1-professional': {
    essay: {
      6: {
        answerText: `解：
(a) 游離腔電流
I = 5 × 10^5 (衰變/s) × 4.75 × 10^6 (eV/衰變) × [1 / 33.97 (eV/離子對)] × 1.6 × 10^-19 (C/離子)
= 1.1 × 10^-8 C/s
= 1.1 × 10^-8 A。

(b) 若 0.6 cm3 空氣全部吸收阿伐粒子能量，則每小時吸收劑量率為
Ḋ = [5 × 10^5 × 4.75 × 1.6 × 10^-13 × 3600] / [0.6 × 1.293 × 10^-6]
= 1.76 × 10^3 J/(kg·h)
= 1.76 × 10^3 Gy/h。`
      }
    }
  },
  'rps-114-1-professional': {
    essay: {
      6: {
        answerText: `解：
(1) 靶體積內真正留下的能量為
= 康普吞電子初始動能 - 離開靶體積的制動輻射能量 - 電子離開時剩餘動能 + 外來光電子進入靶體積時帶入的動能
= 150 - 10 - 50 + 50
= 140 keV。

靶體積質量為 1 μg = 10^-9 kg，
所以吸收劑量
D = 140 keV / 10^-9 kg
= 2.24 × 10^-5 J/kg
= 22.4 μGy。

(2) 總克馬只計算靶體積內由不帶電光子直接轉移給帶電粒子的初始動能，
本題只有康普吞作用在靶體積內發生，因此
K = 150 keV / 10^-9 kg
= 2.4 × 10^-5 J/kg
= 24 μGy。`
      },
      7: {
        answerText: `解：
(1) 90Sr 以 β^- 衰變生成 90Y；之後 90Y 再以 β^- 衰變成穩定的 90Zr。

(2) 90Sr 與 90Y 都是 β 發射核種，因此屏蔽的重點是 β 粒子本身與其制動輻射。
實務上應以 90Y 較高能的 β 粒子作為較嚴苛的設計條件。

屏蔽考量可分為兩層：
先用低原子序材料（如壓克力、塑膠）且厚度大於 β 粒子的最大射程，以降低制動輻射並完全阻擋 β 粒子；
若需再降低制動輻射，則可在外層加上鉛等高原子序材料吸收這些 X 光。

也就是說，對 90Sr / 90Y 的屏蔽原則是「先低 Z 擋 β，再視需要於外層加高 Z 擋制動輻射」，而不是去屏蔽其他核種。`
      }
    }
  },
  'rpo-106-2-professional': {
    essay: {
      5: {
        answerText: `解：活化一年後 Co-60 的活度可用
A = σφN(1 - e^(-λt))
計算。

其中
σ = 37 barn = 37 × 10^-24 cm2，
φ = 10^10 cm^-2·s^-1，
N = (1/59) × 6.02 × 10^23 atoms，
λ = 0.693 / (5.26 × 365 × 24 × 3600) = 4.18 × 10^-9 s^-1，
t = 1 年。

代入得
A = 10^10 × 37 × 10^-24 × (1/59) × 6.02 × 10^23 × [1 - e^(-4.18 × 10^-9 × 1年)]
= 4.66 × 10^8 Bq。

故可產生的 Co-60 活度約為 4.66 × 10^8 Bq。`
      }
    }
  },
  'rps-106-2-professional': {
    essay: {
      7: {
        answerText: `解：在線段射源上取一小段 dx，其位置座標為 x，則該小段可視為點射源，
其活度為
dA = Cl dx。

此小段到 p 點的距離為
r = √(x^2 + h^2)，
所以它在 p 點造成的微分劑量率為
dḊp = ΓdA / r^2
= ΓCl dx / (x^2 + h^2)。

沿整段射源積分：
Ḋp = ∫dḊp
= ΓCl ∫[dx / (x^2 + h^2)]，積分範圍為 x = -l1 到 x = l2。

令 x = h tanβ，
則 dx = h sec^2β dβ，且 x^2 + h^2 = h^2 sec^2β。

代入後可得
Ḋp = ΓCl ∫[(h sec^2β dβ) / (h^2 sec^2β)]
= (ΓCl / h) ∫dβ
= (ΓCl / h)(β2 - β1)。

而 β2 - β1 就是圖中的夾角 θ，
因此
Ḋp = ΓClθ / h。`
      }
    }
  },
  'rps-107-2-professional': {
    essay: {
      5: {
        answerText: `解：
(a) 樣品測 5 分鐘得 1200 計數，所以
RS = 1200 / 5 = 240 cpm。

背景測 60 分鐘得 2400 計數，所以
RB = 2400 / 60 = 40 cpm。

由題意，計數時間的百分標準差均為 1%，
故樣品計數率標準差
σRS / RS = √[(√1200 / 1200)^2 + (1/100)^2]，
σRS = 7.33 cpm。

同理背景計數率標準差
σRB / RB = √[(√2400 / 2400)^2 + (1/100)^2]，
σRB = 0.91 cpm。

淨計數率
Rnet = RS - RB = 240 - 40 = 200 cpm。

其標準差
σRnet = √(σRS^2 + σRB^2)
= √(7.33^2 + 0.91^2)
= 7.39 cpm。

(b) 計數器效率 ε = 0.25，故樣品活度
A = Rnet / (ε × 60)
= 200 / (0.25 × 60)
= 13.3 Bq。

活度的相對標準差為
σA / A = √[(σRnet / Rnet)^2 + (σε / ε)^2]
= √[(7.39 / 200)^2 + (0.10)^2]
= 0.1066。

因此
σA = 13.3 × 0.1066 = 1.42 Bq。

故答案為：
淨計數率 = 200 ± 7.39 cpm；
活度 = 13.3 ± 1.42 Bq。`
      },
      6: {
        answerText: `解：未加鉛屏蔽前，工作人員每年有效劑量為
0.1 mSv/h × 2000 h/y = 200 mSv/y。

若要把年有效劑量降到 20 mSv/y，則需滿足
20 = 200e^(-0.77x)。

因此
e^(-0.77x) = 0.1，
x = ln(0.1) / (-0.77)
= 2.99 cm。

故鉛屏蔽厚度至少約為 2.99 cm（約 3.0 cm）。`
      }
    }
  },
  'rps-111-2-professional': {
    essay: {
      6: {
        answerText: `解：計數 N = 400，故計數標準差
σN = √N = 20。

計數時間 t = 10 ± 0.1 s，所以計數率
R = N/t = 400/10 = 40 cps。

計數率的相對不確定度為
σR/R = √[(σN/N)^2 + (σt/t)^2]
= √[(20/400)^2 + (0.1/10)^2]
= √(0.0026)
= 0.051。

因此
σR = 40 × 0.051 = 2.04 cps。

樣品活度
A = R/ε = 40/0.2 = 200 Bq。

活度的相對不確定度為
σA/A = √[(σR/R)^2 + (σε/ε)^2]
= √[(2.04/40)^2 + (0.02/0.2)^2]
= 0.1125。

故
σA = 200 × 0.1125 = 22.5 Bq。

活度應標示為 (200 ± 22.5) Bq。`
      },
      7: {
        answerText: `解：依題意可把體內滯留寫成二隔室模式：
q(t) = 0.1q0e^[-(0.693/2)t] + 0.9q0e^[-(0.693/110)t]，
其中 q0 = 1.0 MBq。

隔室 1 在前 30 天的累積活度為
Ã1 = 0.1 × 1.0 × [1 - e^(-(0.693/2) × 30)] / (0.693/2)
= 0.289 MBq·day。

因此
D1 = 0.289 × 3.8 × 10^-6
= 1.09 × 10^-6 Gy。

隔室 2 在前 30 天的累積活度為
Ã2 = 0.9 × 1.0 × [1 - e^(-(0.693/110) × 30)] / (0.693/110)
= 24.6 MBq·day。

因此
D2 = 24.6 × 3.8 × 10^-6
= 93.48 × 10^-6 Gy。

前 30 天總吸收劑量為
D = D1 + D2
= 94.57 × 10^-6 Gy
= 9.46 × 10^-5 Gy。`
      }
    }
  },
  'rps-113-2-professional': {
    essay: {
      3: {
        answerText: `解：吸入後有 50% 活度進入血液，其中再有 15% 分配到肝臟，
因此肝臟初始活度為
A0(liver) = 1 Bq × 0.5 × 0.15 = 0.075 Bq。

210Po 為 100% α 衰變，每次衰變釋放的總能量為
E = 5.3 + 0.1 = 5.4 MeV。

物理半化期為 138.4 天，生物半化期為 50 天，
所以有效半化期
1 / Teff = 1 / 50 + 1 / 138.4，
Teff = 36.7 天。

故有效衰變常數
λeff = 0.693 / 36.7 = 0.019 day^-1。

肝臟中的總衰變次數為
Us = A0 / λeff
= (0.075 dis/s × 86400 s/day) / 0.019
= 3.43 × 10^5 dis。

肝臟質量 m = 1400 g = 1.4 kg，吸收分率 AF = 1，
α 粒子與反沖核的輻射加權因數 wR = 20，
所以肝臟等價劑量
H = Us × E × 1.6 × 10^-13 × AF × wR / m
= 3.43 × 10^5 × 5.4 × 1.6 × 10^-13 × 20 / 1.4
= 4.24 × 10^-6 Sv
= 4.24 μSv。`
      },
      7: {
        answerText: `解：
(1) 以兩射源法求鑑別時間
τ = (1182 + 1223 - 2063) / (2 × 1182 × 1223)
= 1.18 × 10^-4 s。

(2) 射源 A 經校正後的計數率
NcA = 1182 / (1 - 1182 × 1.18 × 10^-4)
= 1374 s^-1。`
      }
    }
  },
  'rps-115-1-professional': {
    essay: {
      2: {
        answerText: `解：
(1) 比加馬常數可由
Γ = [fE(1.6 × 10^-13 J/MeV)(3600 s/h)(μen/ρ)] / [4π(100 cm/m)^2(34 J/C)(2.58 × 10^-4 C/kg per R)] × (3.7 × 10^10 Bq/Ci)
計算。

本題每次衰變只放出 1 個 0.6 MeV 光子，所以 f = 1，代入
E = 0.6 MeV，(μen/ρ) = 0.0295 cm2/g，
可得
Γ = 0.34 (R·m2)/(Ci·h)。

(2) 點射源活度 A = 5 Ci，距離 d = 2 m，照射時間 t = 4 h，
累積曝露為
X = ΓAt / d^2
= 0.34 × 5 × 4 / 2^2
= 1.7 R。`
      }
    }
  }
};

const toHalfWidth = (value = '') => value
  .replace(/[Ａ-Ｚａ-ｚ０-９（）－]/g, (char) => {
    const code = char.charCodeAt(0);
    if (code === 0xff08) return '(';
    if (code === 0xff09) return ')';
    if (code === 0xff0d) return '-';
    return String.fromCharCode(code - 0xfee0);
  })
  .replaceAll('＃', '#')
  .replaceAll('　', ' ');

const normalizeWhitespace = (value = '') => toHalfWidth(String(value))
  .replace(/\r/g, '')
  .replace(/\u00a0/g, ' ')
  .replace(/\f/g, '\n')
  .replace(/[ \t]+/g, ' ')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

const normalizeInline = (value = '') => normalizeWhitespace(value)
  .replace(/\s*([,，。；：！？])\s*/g, '$1 ')
  .replace(/\s*([)）])\s*/g, '$1 ')
  .replace(/\s{2,}/g, ' ')
  .trim();

const MATH_GLYPH_MAP = new Map([
  ['', '='],
  ['', '×'],
  ['', '-'],
  ['', '+'],
  ['', '±'],
  ['', '≥'],
  ['', '≤'],
  ['', '≈'],
  ['', '÷'],
  ['', '∝'],
  ['', '′'],
  ['', '°'],
  ['', '·'],
  ['', 'Σ'],
  ['', '∫'],
  ['', '⇒'],
  ['', '→'],
  ['', '∈'],
  ['', '∴'],
  ['', '≈'],
  ['', 'Σ'],
  ['', 'λ'],
  ['', 'μ'],
  ['', 'Γ'],
  ['', 'Φ'],
  ['', 'Δ'],
  ['', 'α'],
  ['', 'β'],
  ['', 'γ'],
  ['', 'θ'],
  ['', 'ρ'],
  ['', 'π'],
  ['', 'ε'],
  ['', 'φ'],
  ['', 'φ'],
  ['', 'σ'],
  ['', 'κ'],
  ['', 'τ'],
  ['', 'ν'],
  ['', 'ν'],
  ['', 'ψ'],
  ['', 'T'],
  ['', 'N'],
  ['', 'I'],
  ['', '∵'],
  ['', 'Ψ'],
  ['', 'Ω'],
  ['', '̇'],
  ['', '→'],
  ['', '·'],
  ['', '*'],
  ['', '/'],
  ['', '>'],
  ['', '('],
  ['', ')'],
  ['', '['],
  ['', ']'],
  ['', '{'],
  ['', '}'],
  ['', '('],
  ['', '('],
  ['', '('],
  ['', ')'],
  ['', ')'],
  ['', ')'],
  ['', '{'],
  ['', '{'],
  ['', '{'],
  ['', '}'],
  ['', '}'],
  ['', '}'],
  ['', '|'],
  ['', '('],
  ['', '('],
  ['', '('],
  ['', ')'],
  ['', ')'],
  ['', ')'],
  ['', '['],
  ['', '['],
  ['', '['],
  ['', ']'],
  ['', ']'],
  ['', ']'],
  ['', '{'],
  ['', '{'],
  ['', '{'],
  ['', '}'],
  ['', '}'],
  ['', '}'],
  ['', '×'],
  ['', ' '],
  ['∘', '°']
]);

const MATH_TOKENS = [
  'mSv', 'μSv', 'Sv', 'mGy', 'μGy', 'Gy',
  'MeV', 'keV', 'eV',
  'GBq', 'MBq', 'kBq', 'Bq', 'mCi',
  'cm3', 'cm2', 'cm', 'm3', 'm2', 'kg', 'g', 'mL',
  'cpm', 'cps', 'dis', 'ion', 'exp',
  'HVL', 'TVL', 'LET', 'ROI', 'PET', 'SPECT',
  'NaI', 'Tc', 'Tl', 'Co', 'Cs', 'Ra', 'Rn'
];

const escapeRegExp = (value = '') => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const replaceMathGlyphs = (value = '') => value.replace(
  /[∘]/g,
  (char) => MATH_GLYPH_MAP.get(char) || char
);

const looksFormulaHeavy = (line = '') => /[=×±≥≤≈÷∝·Σ∫⇒→∈∴λμΓΦΔαβγθρπεφσκτνψΩ]|\d\s+\.\s+\d|\b(?:m S v|M e V|e V|c m|k g|B q)\b/.test(line);

const normalizeFormulaLine = (line = '') => {
  let next = replaceMathGlyphs(line);
  let previous = '';

  while (next !== previous) {
    previous = next;
    next = next
      .replace(/(\d)\s*\.\s*(\d)/g, '$1.$2')
      .replace(/(\d)\s+(?=\d)/g, '$1')
      .replace(/\s+([̇′°])/g, '$1')
      .replace(/([A-Za-zΑ-Ωα-ω])\s+([̇′])/g, '$1$2')
      .replace(/\b([A-Za-zμΣλΓΦΔαβγθρπεφ])(?:\s+([A-Za-zμΣλΓΦΔαβγθρπεφ])){1,6}\b/g, (match) => match.replace(/\s+/g, ''))
      .replace(/([([{])\s+/g, '$1')
      .replace(/\s+([)\]}])/g, '$1')
      .replace(/×\s*10\s*([+-])\s*(\d+)/g, '× 10^$1$2')
      .replace(/\s*([=×+\-±/()])\s*/g, ' $1 ')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  for (const token of MATH_TOKENS) {
    next = next.replace(new RegExp(token.split('').map(escapeRegExp).join('\\s*'), 'g'), token);
  }

  return next
    .replace(/× 10\^-/g, '× 10^-')
    .replace(/× 10\^\+/g, '× 10^+')
    .replace(/\(\s*(mSv|μSv|Sv|mGy|μGy|Gy|MeV|keV|eV)\s*\)\s+[A-Z]{2,4}\b/g, '( $1 )')
    .replace(/\s{2,}/g, ' ')
    .trim();
};

const isSentenceEnding = (line = '') => /[。！？；：:]$/.test(line.trim());

const isListMarkerLine = (line = '') => /^[•·▪◦●■□-]\s*$/.test(line.trim());

const isSubsectionMarkerLine = (line = '') => /^(?:[（(]?[0-9]+[)）]|[（(]?[A-Za-z一二三四五六七八九十][)）])\s*$/.test(line.trim());

const isStandaloneMathLine = (line = '') => {
  const trimmed = line.trim();
  return Boolean(trimmed)
    && trimmed.length <= 12
    && !isSubsectionMarkerLine(trimmed)
    && !isListMarkerLine(trimmed)
    && !/[一-龥]/.test(trimmed)
    && /^[A-Za-z0-9Α-Ωα-ω=×+\-/*().^_°·′μλΓΦΔαβγθρπεφσκτνψΩ±[\]{}]+(?:\s+[A-Za-z0-9Α-Ωα-ω=×+\-/*().^_°·′μλΓΦΔαβγθρπεφσκτνψΩ±[\]{}]+)*$/.test(trimmed);
};

const isShortChineseContinuationLine = (line = '') => {
  const trimmed = line.trim();
  return Boolean(trimmed)
    && trimmed.length <= 8
    && /[一-龥]/.test(trimmed)
    && !isSubsectionMarkerLine(trimmed)
    && !/^[•·▪◦●■□-]/.test(trimmed)
    && !/[。！？；：:]$/.test(trimmed);
};

const getPreviousMeaningfulIndex = (lines = []) => {
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    if (lines[index]) return index;
  }
  return -1;
};

const mergeShortFormulaFragments = (value = '') => {
  const lines = normalizeWhitespace(value).split('\n').map((line) => line.trim());
  const merged = [];
  let pendingPrefix = '';

  const findNextMeaningfulLine = (startIndex) => {
    for (let index = startIndex; index < lines.length; index += 1) {
      if (lines[index]) return lines[index];
    }
    return '';
  };

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    if (!rawLine) {
      if (merged.length && merged[merged.length - 1] !== '') {
        merged.push('');
      }
      continue;
    }

    const line = pendingPrefix ? `${pendingPrefix}${rawLine}` : rawLine;
    pendingPrefix = '';

    const previousIndex = getPreviousMeaningfulIndex(merged);
    const previous = previousIndex >= 0 ? merged[previousIndex] : '';
    const next = findNextMeaningfulLine(index + 1);

    if (isShortChineseContinuationLine(line)) {
      if (previous && !isSentenceEnding(previous)) {
        merged[previousIndex] = `${previous}${line}`.trim();
        continue;
      }

      if (next) {
        pendingPrefix = line;
        continue;
      }
    }

    if (isStandaloneMathLine(line)) {
      if (previous && !isSentenceEnding(previous)) {
        const joiner = line.length <= 2 ? '' : ' ';
        merged[previousIndex] = `${previous}${joiner}${line}`.replace(/\s{2,}/g, ' ').trim();
        continue;
      }

      if (next) {
        pendingPrefix = line.length <= 2 ? `${line}` : `${line} `;
        continue;
      }
    }

    const isShortFragment = line.length <= 18
      && !/[一-龥]{2,}/.test(line)
      && !isSubsectionMarkerLine(line)
      && !isListMarkerLine(line)
      && /[A-Za-z0-9Α-Ωα-ω=×+\-/*().]/.test(line);
    const shouldAttach = isShortFragment && (looksFormulaHeavy(previous) || looksFormulaHeavy(next));

    if (shouldAttach && previous) {
      merged[previousIndex] = `${previous} ${line}`.replace(/\s{2,}/g, ' ').trim();
      continue;
    }

    merged.push(line);
  }

  return merged.join('\n').replace(/\n{3,}/g, '\n\n');
};

const normalizeRadiationText = (value = '') => replaceMathGlyphs(value)
  .split('\n')
  .map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    return looksFormulaHeavy(trimmed) ? normalizeFormulaLine(trimmed) : trimmed;
  })
  .join('\n')
  .replace(/m2kg\s*-\s*1/g, 'm2/kg')
  .replace(/kg m\s*-\s*3/g, 'kg/m3')
  .replace(/mGy\s*\/\s*h/g, 'mGy/h')
  .replace(/mR\s*\/\s*h/g, 'mR/h')
  .replace(/(\d|\))\s*[xX]\s*(?=(\d|\())/g, '$1 × ')
  .replace(/e\s*[–−]\s*/g, 'e - ')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

const normalizeRadiationAnswerText = (value = '') => normalizeRadiationText(
  mergeShortFormulaFragments(value)
)
  .replace(/^解:\s*/gm, '解：')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

const cleanMarkdownNoise = (value = '') => normalizeWhitespace(value)
  .split('\n')
  .map((line) => line.replace(/^\|\s*/, '').replace(/\s*\|$/g, '').replace(/\|/g, ' '))
  .filter((line) => !/^[-: ]+$/.test(line.trim()))
  .filter((line) => !/^第 ?\d+ ?頁\/共 ?\d+ ?頁$/.test(line.trim()))
  .map((line) => line.replace(/[ \t]{2,}/g, ' ').trimEnd())
  .join('\n')
  .replace(/^#+\s*/gm, '')
  .replace(/[ \t]+\n/g, '\n')
  .trim();

const splitAnswerBlock = (raw = '') => {
  const match = raw.match(/(?:\[\s*)?解[:：](?:\s*\])?/);
  if (!match || match.index == null) {
    return [raw, ''];
  }

  return [
    raw.slice(0, match.index),
    raw.slice(match.index + match[0].length)
  ];
};

const extractNumberedOptions = (value = '') => Array.from(
  cleanMarkdownNoise(value).replace(/\n/g, ' ').matchAll(/\(([1-4])\)\s*([\s\S]*?)(?=(\([1-4]\))|$)/g)
).map((match) => ({
  key: ['A', 'B', 'C', 'D'][Number(match[1]) - 1],
  text: normalizeInline(match[2]).replace(/解[:：]?\s*$/g, '').trim()
}));

const mergeOptionsByKey = (options = []) => {
  const merged = new Map();

  for (const option of options) {
    if (!option?.key) continue;
    const text = normalizeInline(option.text || '').replace(/解[:：]?\s*$/g, '').trim();
    const current = merged.get(option.key);
    if (!current || (!current.text && text) || (text && text.length > current.text.length)) {
      merged.set(option.key, {
        key: option.key,
        text
      });
    }
  }

  return Array.from(merged.values()).sort((left, right) => left.key.localeCompare(right.key, 'en'));
};

const normalizeOptionList = (options = []) => options.map((option, index) => ({
  key: option.key || ['A', 'B', 'C', 'D'][index],
  text: normalizeRadiationText(option.text || '')
}));

const normalizeAnswerImages = (answerImages = []) => answerImages
  .filter((image) => image?.src)
  .map((image, index) => ({
    src: image.src,
    alt: normalizeRadiationText(image.alt || `原始解答截圖 ${index + 1}`)
  }));

const applyQuestionPatch = (question, patch = {}) => {
  if (!patch) return question;

  const next = {
    ...question
  };

  if (patch.stem) next.stem = normalizeRadiationText(patch.stem);
  if (patch.options) next.options = normalizeOptionList(patch.options);
  if (Object.prototype.hasOwnProperty.call(patch, 'answer')) next.answer = patch.answer;
  if (patch.acceptedAnswers) next.acceptedAnswers = patch.acceptedAnswers;
  if (Object.prototype.hasOwnProperty.call(patch, 'answerText')) {
    next.answerText = next.kind === 'essay'
      ? normalizeRadiationAnswerText(patch.answerText || '')
      : normalizeRadiationText(patch.answerText || '');
  }
  if (Object.prototype.hasOwnProperty.call(patch, 'explanation')) next.explanation = normalizeRadiationText(patch.explanation || '');
  if (Object.prototype.hasOwnProperty.call(patch, 'explanationStatus')) next.explanationStatus = patch.explanationStatus;
  if (patch.figureImage) next.figureImage = patch.figureImage;
  if (patch.figureAlt) next.figureAlt = patch.figureAlt;
  if (patch.answerImages) next.answerImages = normalizeAnswerImages(patch.answerImages);

  return next;
};

const finalizeRadiationQuestion = (question) => ({
  ...question,
  stem: question.stem ? normalizeRadiationText(question.stem) : question.stem,
  answerText: question.answerText
    ? (question.kind === 'essay'
      ? normalizeRadiationAnswerText(question.answerText)
      : normalizeRadiationText(question.answerText))
    : question.answerText,
  explanation: question.explanation ? normalizeRadiationText(question.explanation) : question.explanation,
  options: Array.isArray(question.options)
    ? question.options.map((option) => ({
      ...option,
      text: normalizeRadiationText(option.text || '')
    }))
    : question.options,
  answerImages: Array.isArray(question.answerImages)
    ? normalizeAnswerImages(question.answerImages)
    : question.answerImages
});

const escapeForScript = (value) => JSON.stringify(value, null, 2);

const rocYearToCe = (rocYear) => rocYear + 1911;
const toYearLabel = (year, session) => `${year}-${session}`;

const extractYearSession = (filename) => {
  const match = filename.match(/(\d{3})年[_第]?第?([12])次/);
  if (!match) {
    throw new Error(`無法從檔名辨識年度與場次：${filename}`);
  }
  return {
    year: Number(match[1]),
    session: Number(match[2])
  };
};

const extractNucmedMarkdownMap = async () => {
  const filenames = (await readdir(NUCMED_MD_DIR))
    .filter((filename) => filename.endsWith('.md'))
    .sort((left, right) => left.localeCompare(right, 'zh-Hant'));

  const result = new Map();

  for (const filename of filenames) {
    const { year, session } = extractYearSession(filename);
    const raw = await readFile(path.join(NUCMED_MD_DIR, filename), 'utf8');
    const content = normalizeWhitespace(raw);
    const blocks = content.split(/\n(?=##\s*\d+\.)/).filter((block) => block.startsWith('## '));
    const questions = blocks.map((block) => {
      const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
      const header = lines.shift() || '';
      const headerMatch = header.match(/^##\s*(\d+)\.\s*(.+)$/);
      if (!headerMatch) {
        throw new Error(`核醫 markdown 題目標頭格式異常：${filename}`);
      }

      const number = Number(headerMatch[1]);
      const stem = normalizeInline(headerMatch[2]);
      const options = [];
      let answer = '';

      for (const line of lines) {
        const optionMatch = line.match(/^- \*\*([A-D])\.\*\*\s*(.+)$/);
        if (optionMatch) {
          options.push({
            key: optionMatch[1],
            text: normalizeInline(optionMatch[2])
          });
          continue;
        }

        const answerMatch = line.match(/^> \*\*答案：\*\*\s*(.+)$/);
        if (answerMatch) {
          answer = normalizeInline(answerMatch[1]).replace(/[^A-D#]/g, '');
        }
      }

      return {
        number,
        stem,
        options,
        answer
      };
    });

    result.set(`${year}-${session}`, { year, session, filename, questions });
  }

  return result;
};

const loadLegacyNucmedPapers = async () => {
  const filenames = (await readdir(LEGACY_SOURCE_DIR))
    .filter((filename) => /^radiographer-\d{3}-[12]\.json$/.test(filename))
    .sort((left, right) => left.localeCompare(right, 'zh-Hant'));

  const papers = new Map();
  for (const filename of filenames) {
    const filePath = path.join(LEGACY_SOURCE_DIR, filename);
    const record = JSON.parse(await readFile(filePath, 'utf8'));
    papers.set(record.id, record);
  }
  return papers;
};

const loadExternalNucmedJsonMap = async () => {
  const filenames = (await readdir(NUCMED_JSON_DIR))
    .filter((filename) => filename.endsWith('.json'))
    .sort((left, right) => left.localeCompare(right, 'zh-Hant'));

  const records = new Map();

  for (const filename of filenames) {
    const record = JSON.parse(await readFile(path.join(NUCMED_JSON_DIR, filename), 'utf8'));
    const { year, session } = extractYearSession(filename);
    records.set(`${year}-${session}`, record);
  }

  return records;
};

const normalizeNucmedAnswer = (value = '') => normalizeInline(value)
  .replace(/[ＡＢＣＤ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
  .replace(/[^A-D#]/g, '');

const buildNucmedPaper = ({ legacyPaper, externalPaper, mdPaper }) => {
  const sourceRecord = legacyPaper || externalPaper;
  if (!sourceRecord) {
    throw new Error(`核醫卷別缺少基礎資料：${mdPaper?.year}-${mdPaper?.session}`);
  }

  const year = sourceRecord.year || Number(sourceRecord.exam_year);
  const session = sourceRecord.session || mdPaper?.session;
  const id = sourceRecord.id || `radiographer-${year}-${session}`;
  const title = sourceRecord.title || `${toYearLabel(year, session)} 核子醫學診療原理與技術學`;
  const sourceQuestions = legacyPaper?.questions
    || (externalPaper?.questions || []).map((question) => ({
      id: `rg-${year}-${session}-q${String(question.no).padStart(3, '0')}`,
      number: question.no,
      stem: question.stem,
      options: Object.entries(question.options || {}).map(([key, text]) => ({ key, text })),
      answer: normalizeNucmedAnswer(question.answer),
      acceptedAnswers: [normalizeNucmedAnswer(question.answer)],
      explanation: '',
      explanationStatus: 'pending'
    }));

  const mdQuestionMap = new Map((mdPaper?.questions || []).map((question) => [question.number, question]));
  const questions = sourceQuestions.map((question, index) => {
    const mdQuestion = mdQuestionMap.get(question.number || index + 1);
    const questionNumber = question.number || index + 1;
    const patch = {
      ...(NUCMED_QUESTION_PATCHES[id]?.[questionNumber] || {}),
      ...(NUCMED_EXPLANATION_PATCHES[id]?.[questionNumber] || {})
    };
    const mergedOptions = mdQuestion?.options?.length ? mdQuestion.options : question.options || [];
    const mergedAnswer = mdQuestion?.answer ? normalizeNucmedAnswer(mdQuestion.answer) : normalizeNucmedAnswer(question.answer);
    const baseQuestion = {
      ...question,
      kind: 'mcq',
      section: 'mcq',
      number: questionNumber,
      stem: mdQuestion?.stem || normalizeInline(question.stem),
      options: mergedOptions.map((option, optionIndex) => ({
        key: option.key || ['A', 'B', 'C', 'D'][optionIndex],
        text: normalizeInline(option.text)
      })),
      answer: mergedAnswer,
      acceptedAnswers: question.acceptedAnswers?.length ? question.acceptedAnswers.map(normalizeNucmedAnswer) : [mergedAnswer],
      explanation: question.explanation || '',
      explanationStatus: question.explanationStatus || 'pending'
    };

    const patchedQuestion = applyQuestionPatch(baseQuestion, patch);
    const normalizedAcceptedAnswers = (patchedQuestion.acceptedAnswers || [])
      .map(normalizeNucmedAnswer)
      .filter(Boolean)
      .filter((value, idx, values) => values.indexOf(value) === idx);
    const hasBonusAnswer = normalizeNucmedAnswer(patchedQuestion.answer) === '#';
    const acceptedAnswers = hasBonusAnswer
      ? (normalizedAcceptedAnswers.filter((value) => ['A', 'B', 'C', 'D'].includes(value)).length
        ? normalizedAcceptedAnswers.filter((value) => ['A', 'B', 'C', 'D'].includes(value))
        : (patchedQuestion.options || []).map((option) => option.key))
      : normalizedAcceptedAnswers;
    const hasCompleteOptions = patchedQuestion.options.length === 4
      && patchedQuestion.options.every((option) => normalizeInline(option.text));
    const isComplete = hasCompleteOptions && (
      hasBonusAnswer
        ? acceptedAnswers.length > 0
        : ['A', 'B', 'C', 'D'].includes(normalizeNucmedAnswer(patchedQuestion.answer))
    );

    return {
      ...patchedQuestion,
      answer: normalizeNucmedAnswer(patchedQuestion.answer),
      acceptedAnswers,
      explanationStatus: hasBonusAnswer ? 'bonus' : patchedQuestion.explanationStatus,
      isComplete
    };
  });

  const invalidQuestionCount = questions.filter((question) => !question.isComplete).length;

  return {
    id,
    trackId: TRACKS.nucmed.id,
    title,
    year,
    session,
    yearLabel: toYearLabel(year, session),
    examYearCe: sourceRecord.examYearCe || sourceRecord['exam_year_西元'] || rocYearToCe(year),
    examName: sourceRecord.examName || sourceRecord.exam_name || `${year}年醫事放射師考試`,
    subjectName: sourceRecord.subjectName || sourceRecord.subject_name || TRACKS.nucmed.title,
    paperType: 'paper',
    subjectCode: 'nucmed',
    questionCount: questions.length,
    testableQuestionCount: questions.filter((question) => question.isComplete).length,
    invalidQuestionCount,
    source: sourceRecord.source || {
      questionPdfUrl: sourceRecord.question_pdf_url,
      answerPdfUrl: sourceRecord.answer_pdf_url,
      mdSource: mdPaper?.filename || null
    },
    questions
  };
};

const blockifyByQuestion = (content) => {
  const blocks = [];
  let currentNumber = null;
  let currentLines = [];
  const rawLines = content.split('\n');

  const flush = () => {
    if (!currentNumber) return;
    blocks.push({
      number: currentNumber,
      raw: currentLines.join('\n').trim()
    });
  };

  for (let index = 0; index < rawLines.length; index += 1) {
    const trimmed = rawLines[index]
      .replace(/^\|\s*/, '')
      .replace(/\s*\|$/g, '')
      .replace(/\|/g, ' ')
      .trim();
    if (!trimmed) continue;

    const duplicateNumberMatch = trimmed.match(/^(\d{1,2})$/);
    if (duplicateNumberMatch) {
      const duplicateNumber = duplicateNumberMatch[1];
      let hasRepeatedMarker = false;
      for (let lookahead = index + 1; lookahead < rawLines.length; lookahead += 1) {
        const nextTrimmed = rawLines[lookahead]
          .replace(/^\|\s*/, '')
          .replace(/\s*\|$/g, '')
          .replace(/\|/g, ' ')
          .trim();
        if (!nextTrimmed) continue;
        hasRepeatedMarker = new RegExp(`^${duplicateNumber}\\.(?:\\s+.*)?$`).test(nextTrimmed);
        break;
      }
      if (hasRepeatedMarker) continue;
    }

    const match = trimmed.match(/^(\d{1,2})\.(?:\s+(.*))?$/);
    if (match) {
      const nextNumber = Number(match[1]);
      if (currentNumber && nextNumber !== currentNumber + 1) {
        if (currentNumber) currentLines.push(trimmed);
        continue;
      }
      flush();
      currentNumber = nextNumber;
      currentLines = [match[2] ? `${match[1]}. ${match[2]}` : `${match[1]}.`];
      continue;
    }

    if (currentNumber) {
      currentLines.push(trimmed);
    }
  }

  flush();
  return blocks;
};

const parseRadiationMcqBlock = (block, prefix) => {
  const [promptPartRaw, answerPartRaw = ''] = splitAnswerBlock(block.raw);
  const promptPart = cleanMarkdownNoise(promptPartRaw);
  const answerPart = cleanMarkdownNoise(answerPartRaw);
  const promptWithoutNumber = promptPart.replace(/^(\d+)\.\s*/, '');
  const firstOptionIndex = promptWithoutNumber.search(/\([1-4]\)/);
  const stem = normalizeRadiationText(
    normalizeInline(firstOptionIndex === -1 ? promptWithoutNumber : promptWithoutNumber.slice(0, firstOptionIndex))
  );
  const optionSource = firstOptionIndex === -1 ? '' : promptWithoutNumber.slice(firstOptionIndex);
  const options = mergeOptionsByKey([
    ...extractNumberedOptions(optionSource),
    ...extractNumberedOptions(answerPart)
  ]).map((option) => ({
    ...option,
    text: normalizeRadiationText(option.text)
  }));

  const answerMatch = answerPart.match(/\(([1-4])\)/);
  const answer = answerMatch ? ['A', 'B', 'C', 'D'][Number(answerMatch[1]) - 1] : '';
  const isBonus = /送分/.test(answerPart);
  const acceptedAnswers = isBonus
    ? options.map((option) => option.key)
    : (answer ? [answer] : []);
  const parsedQuestion = {
    id: `${prefix}-mcq-${String(block.number).padStart(3, '0')}`,
    kind: 'mcq',
    section: 'mcq',
    number: block.number,
    stem,
    options,
    answer,
    acceptedAnswers,
    explanation: '',
    explanationStatus: isBonus ? 'bonus' : 'none',
    answerText: normalizeRadiationText(answerPart)
  };

  const paperPatch = RADIATION_QUESTION_PATCHES[prefix];
  const patchedQuestion = applyQuestionPatch(parsedQuestion, paperPatch?.mcq?.[block.number] || paperPatch?.[block.number]);
  const normalizedAcceptedAnswers = (patchedQuestion.acceptedAnswers || [])
    .filter(Boolean)
    .filter((value, idx, values) => values.indexOf(value) === idx);
  const normalizedAnswer = patchedQuestion.answer || '';
  const completeOptions = patchedQuestion.options.length === 4
    && patchedQuestion.options.every((option) => option.text);

  return finalizeRadiationQuestion({
    ...patchedQuestion,
    answer: normalizedAnswer,
    acceptedAnswers: normalizedAcceptedAnswers.length ? normalizedAcceptedAnswers : (normalizedAnswer ? [normalizedAnswer] : []),
    isComplete: completeOptions && (Boolean(normalizedAnswer) || normalizedAcceptedAnswers.length > 0 || isBonus)
  });
};

const parseRadiationEssayBlock = (block, prefix) => {
  const [promptPartRaw, answerPartRaw = ''] = splitAnswerBlock(block.raw);
  const promptPart = cleanMarkdownNoise(promptPartRaw);
  const answerPart = cleanMarkdownNoise(answerPartRaw);

  const parsedQuestion = finalizeRadiationQuestion({
    id: `${prefix}-essay-${String(block.number).padStart(3, '0')}`,
    kind: 'essay',
    section: 'essay',
    number: block.number,
    stem: normalizeRadiationText(normalizeWhitespace(promptPart.replace(/^(\d+)\.\s*/, ''))),
    answerText: normalizeRadiationAnswerText(normalizeWhitespace(answerPart)),
    isComplete: Boolean(answerPart)
  });

  const paperPatch = RADIATION_QUESTION_PATCHES[prefix];
  return finalizeRadiationQuestion(applyQuestionPatch(parsedQuestion, paperPatch?.essay?.[block.number] || paperPatch?.[block.number]));
};

const attachRadiationAnswerScans = (paperId, questions, answerScanManifest = {}) => questions.map((question) => {
  if (question.kind !== 'essay') return question;
  const answerImages = answerScanManifest?.[paperId]?.[String(question.number)];
  if (!answerImages?.length) return question;
  return finalizeRadiationQuestion({
    ...question,
    answerImages
  });
});

const parseRadiationMarkdown = async ({ dirPath, filename, trackId, label, subjectCode, answerScanManifest }) => {
  const { year, session } = extractYearSession(filename);
  const raw = await readFile(path.join(dirPath, filename), 'utf8');
  const content = cleanMarkdownNoise(raw);
  const normalizedFilename = filename.replaceAll('_更新版', '').replaceAll('_審題版', '');
  const subjectLabel = normalizedFilename.includes('法規') ? '法規' : '專業';
  const paperId = `${trackId}-${year}-${session}-${subjectCode}`;

  const mcqMatch = content.match(/一、單選題[\s\S]*?(?=\n二、|\n二\.|$)/);
  const essayMatch = content.match(/二、計算問答題[\s\S]*$/);
  const mcqBlocks = mcqMatch ? blockifyByQuestion(mcqMatch[0]) : [];
  const essayBlocks = essayMatch ? blockifyByQuestion(essayMatch[0]) : [];
  const questions = [
    ...mcqBlocks.map((block) => parseRadiationMcqBlock(block, paperId)),
    ...essayBlocks.map((block) => parseRadiationEssayBlock(block, paperId))
  ];
  const questionsWithAnswerScans = attachRadiationAnswerScans(paperId, questions, answerScanManifest);

  return {
    id: paperId,
    trackId,
    title: `${toYearLabel(year, session)} ${label} ${subjectLabel}`,
    year,
    session,
    yearLabel: toYearLabel(year, session),
    examYearCe: rocYearToCe(year),
    examName: `${year}年${label}測驗`,
    subjectName: subjectLabel === '法規' ? '游離輻射防護法規' : '游離輻射防護專業',
    paperType: 'paper',
    subjectCode,
    questionCount: questionsWithAnswerScans.length,
    testableQuestionCount: questionsWithAnswerScans.filter((question) => question.kind === 'mcq' && question.isComplete).length,
    invalidQuestionCount: questionsWithAnswerScans.filter((question) => question.kind === 'mcq' && !question.isComplete).length,
    source: {
      markdownFile: filename
    },
    questions: questionsWithAnswerScans
  };
};

const buildRadiationPapers = async ({ dirPath, trackId, label, answerScanManifest }) => {
  const filenames = (await readdir(dirPath))
    .filter((filename) => filename.endsWith('.md'))
    .sort((left, right) => left.localeCompare(right, 'zh-Hant'));

  const papers = [];
  for (const filename of filenames) {
    const subjectCode = filename.includes('法規') ? 'law' : 'professional';
    papers.push(await parseRadiationMarkdown({ dirPath, filename, trackId, label, subjectCode, answerScanManifest }));
  }

  return papers.sort((left, right) => {
    const yearDiff = left.year - right.year;
    if (yearDiff !== 0) return yearDiff;
    if (left.session !== right.session) return left.session - right.session;
    return left.subjectCode.localeCompare(right.subjectCode, 'zh-Hant');
  });
};

const renderPaperJs = (paper) => `window.NM_EXAM_BANK = window.NM_EXAM_BANK || {};\nwindow.NM_EXAM_BANK[${JSON.stringify(paper.id)}] = ${escapeForScript(paper)};\n`;

const loadRadiationAnswerScanManifest = async () => {
  if (!existsSync(RADIATION_ANSWER_SCAN_MANIFEST_PATH)) return {};

  const manifest = JSON.parse(await readFile(RADIATION_ANSWER_SCAN_MANIFEST_PATH, 'utf8'));
  for (const [paperId, questionMap] of Object.entries(manifest)) {
    for (const [questionNumber, images] of Object.entries(questionMap || {})) {
      for (const image of images || []) {
        const relativePath = String(image?.src || '').replace(/^\.\//, '');
        const absolutePath = path.join(ROOT, 'nucmed-exam-review', relativePath);
        if (!relativePath || !existsSync(absolutePath)) {
          throw new Error(`找不到原始解答截圖：${paperId} 第 ${questionNumber} 題 -> ${image?.src || '(空路徑)'}`);
        }
      }
    }
  }

  return manifest;
};

const buildManifest = ({ papers, guideMarkdown }) => {
  const byTrack = new Map();
  for (const paper of papers) {
    if (!byTrack.has(paper.trackId)) byTrack.set(paper.trackId, []);
    byTrack.get(paper.trackId).push(paper);
  }

  const tracks = Object.values(TRACKS).map((track) => {
    const trackPapers = byTrack.get(track.id) || [];
    return {
      ...track,
      paperCount: trackPapers.length,
      latestYearLabel: trackPapers.at(-1)?.yearLabel || null
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    scope: 'medical-and-radiation-exam-review',
    tracks,
    guides: [
      {
        id: 'radiation-study-guide',
        title: '輻射防護師／員級 考試大補帖',
        trackIds: ['rps', 'rpo'],
        markdown: guideMarkdown
      }
    ],
    papers: papers.map((paper) => ({
      id: paper.id,
      trackId: paper.trackId,
      title: paper.title,
      year: paper.year,
      session: paper.session,
      yearLabel: paper.yearLabel,
      subjectCode: paper.subjectCode,
      subjectName: paper.subjectName,
      questionCount: paper.questionCount,
      testableQuestionCount: paper.testableQuestionCount,
      invalidQuestionCount: paper.invalidQuestionCount
    }))
  };
};

const main = async () => {
  const [legacyPapers, externalNucmedJsonMap, nucmedMarkdownMap, guideMarkdown, answerScanManifest] = await Promise.all([
    loadLegacyNucmedPapers(),
    loadExternalNucmedJsonMap(),
    extractNucmedMarkdownMap(),
    readFile(RADIATION_GUIDE_PATH, 'utf8'),
    loadRadiationAnswerScanManifest()
  ]);

  const nucmedPapers = [];
  const legacyIds = [...legacyPapers.keys()].sort((left, right) => left.localeCompare(right, 'zh-Hant'));
  for (const id of legacyIds) {
    const legacyPaper = legacyPapers.get(id);
    const key = `${legacyPaper.year}-${legacyPaper.session}`;
    nucmedPapers.push(buildNucmedPaper({
      legacyPaper,
      externalPaper: externalNucmedJsonMap.get(key),
      mdPaper: nucmedMarkdownMap.get(key)
    }));
  }

  for (const [key, externalPaper] of externalNucmedJsonMap.entries()) {
    const { year, session } = extractYearSession(`${key.replace('-', '年_第')}次`);
    const id = `radiographer-${year}-${session}`;
    if (legacyPapers.has(id)) continue;
    nucmedPapers.push(buildNucmedPaper({
      legacyPaper: null,
      externalPaper,
      mdPaper: nucmedMarkdownMap.get(key)
    }));
  }

  nucmedPapers.sort((left, right) => {
    const yearDiff = left.year - right.year;
    if (yearDiff !== 0) return yearDiff;
    return left.session - right.session;
  });

  const [rpsPapers, rpoPapers] = await Promise.all([
    buildRadiationPapers({ dirPath: RPS_MD_DIR, trackId: TRACKS.rps.id, label: TRACKS.rps.title, answerScanManifest }),
    buildRadiationPapers({ dirPath: RPO_MD_DIR, trackId: TRACKS.rpo.id, label: TRACKS.rpo.title, answerScanManifest })
  ]);

  const papers = [...nucmedPapers, ...rpsPapers, ...rpoPapers];
  const manifest = buildManifest({
    papers,
    guideMarkdown: normalizeWhitespace(guideMarkdown)
  });

  await rm(OUTPUT_DIR, { recursive: true, force: true });
  await mkdir(OUTPUT_DIR, { recursive: true });

  await Promise.all([
    ...papers.map((paper) => writeFile(path.join(OUTPUT_DIR, `${paper.id}.js`), renderPaperJs(paper), 'utf8')),
    writeFile(path.join(OUTPUT_DIR, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
  ]);
};

await main();
