import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'nucmed-exam-review', 'data');
const LEGACY_SOURCE_DIR = path.join(ROOT, 'nucmed-exam-review', 'source');
const EXTERNAL_ROOT = 'D:/NMDEV/核醫考古題';
const NUCMED_JSON_DIR = path.join(EXTERNAL_ROOT, '核子醫學診療原理與技術學');
const NUCMED_MD_DIR = path.join(EXTERNAL_ROOT, '核子醫學診療原理與技術學_md');
const RPS_MD_DIR = path.join(EXTERNAL_ROOT, '輻防師考古_md');
const RPO_MD_DIR = path.join(EXTERNAL_ROOT, '輻射防護員_md');
const RADIATION_GUIDE_PATH = path.join(EXTERNAL_ROOT, '輻射防護師_員級_考試大補帖.md');
const FIGURE_ASSET_ROOT = './assets/exam-figures';

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
  text: normalizeInline(option.text || '')
}));

const applyQuestionPatch = (question, patch = {}) => {
  if (!patch) return question;

  const next = {
    ...question
  };

  if (patch.stem) next.stem = normalizeInline(patch.stem);
  if (patch.options) next.options = normalizeOptionList(patch.options);
  if (Object.prototype.hasOwnProperty.call(patch, 'answer')) next.answer = patch.answer;
  if (patch.acceptedAnswers) next.acceptedAnswers = patch.acceptedAnswers;
  if (patch.figureImage) next.figureImage = patch.figureImage;
  if (patch.figureAlt) next.figureAlt = patch.figureAlt;

  return next;
};

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
    const patch = NUCMED_QUESTION_PATCHES[id]?.[question.number || index + 1];
    const mergedOptions = mdQuestion?.options?.length ? mdQuestion.options : question.options || [];
    const mergedAnswer = mdQuestion?.answer ? normalizeNucmedAnswer(mdQuestion.answer) : normalizeNucmedAnswer(question.answer);
    const baseQuestion = {
      ...question,
      kind: 'mcq',
      section: 'mcq',
      number: question.number || index + 1,
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

  const flush = () => {
    if (!currentNumber) return;
    blocks.push({
      number: currentNumber,
      raw: currentLines.join('\n').trim()
    });
  };

  for (const line of content.split('\n')) {
    const trimmed = line
      .replace(/^\|\s*/, '')
      .replace(/\s*\|$/g, '')
      .replace(/\|/g, ' ')
      .trim();
    const match = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (match) {
      flush();
      currentNumber = Number(match[1]);
      currentLines = [`${match[1]}. ${match[2]}`];
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
  const stem = normalizeInline(firstOptionIndex === -1 ? promptWithoutNumber : promptWithoutNumber.slice(0, firstOptionIndex));
  const optionSource = firstOptionIndex === -1 ? '' : promptWithoutNumber.slice(firstOptionIndex);
  const options = mergeOptionsByKey([
    ...extractNumberedOptions(optionSource),
    ...extractNumberedOptions(answerPart)
  ]);

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
    answerText: answerPart
  };

  const patchedQuestion = applyQuestionPatch(parsedQuestion, RADIATION_QUESTION_PATCHES[prefix]?.[block.number]);
  const normalizedAcceptedAnswers = (patchedQuestion.acceptedAnswers || [])
    .filter(Boolean)
    .filter((value, idx, values) => values.indexOf(value) === idx);
  const normalizedAnswer = patchedQuestion.answer || '';
  const completeOptions = patchedQuestion.options.length === 4
    && patchedQuestion.options.every((option) => option.text);

  return {
    ...patchedQuestion,
    answer: normalizedAnswer,
    acceptedAnswers: normalizedAcceptedAnswers.length ? normalizedAcceptedAnswers : (normalizedAnswer ? [normalizedAnswer] : []),
    isComplete: completeOptions && (Boolean(normalizedAnswer) || normalizedAcceptedAnswers.length > 0 || isBonus)
  };
};

const parseRadiationEssayBlock = (block, prefix) => {
  const [promptPartRaw, answerPartRaw = ''] = splitAnswerBlock(block.raw);
  const promptPart = cleanMarkdownNoise(promptPartRaw);
  const answerPart = cleanMarkdownNoise(answerPartRaw);

  return {
    id: `${prefix}-essay-${String(block.number).padStart(3, '0')}`,
    kind: 'essay',
    section: 'essay',
    number: block.number,
    stem: normalizeWhitespace(promptPart.replace(/^(\d+)\.\s*/, '')),
    answerText: normalizeWhitespace(answerPart),
    isComplete: Boolean(answerPart)
  };
};

const parseRadiationMarkdown = async ({ dirPath, filename, trackId, label, subjectCode }) => {
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
    questionCount: questions.length,
    testableQuestionCount: questions.filter((question) => question.kind === 'mcq' && question.isComplete).length,
    invalidQuestionCount: questions.filter((question) => question.kind === 'mcq' && !question.isComplete).length,
    source: {
      markdownFile: filename
    },
    questions
  };
};

const buildRadiationPapers = async ({ dirPath, trackId, label }) => {
  const filenames = (await readdir(dirPath))
    .filter((filename) => filename.endsWith('.md'))
    .sort((left, right) => left.localeCompare(right, 'zh-Hant'));

  const papers = [];
  for (const filename of filenames) {
    const subjectCode = filename.includes('法規') ? 'law' : 'professional';
    papers.push(await parseRadiationMarkdown({ dirPath, filename, trackId, label, subjectCode }));
  }

  return papers.sort((left, right) => {
    const yearDiff = left.year - right.year;
    if (yearDiff !== 0) return yearDiff;
    if (left.session !== right.session) return left.session - right.session;
    return left.subjectCode.localeCompare(right.subjectCode, 'zh-Hant');
  });
};

const renderPaperJs = (paper) => `window.NM_EXAM_BANK = window.NM_EXAM_BANK || {};\nwindow.NM_EXAM_BANK[${JSON.stringify(paper.id)}] = ${escapeForScript(paper)};\n`;

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
  const [legacyPapers, externalNucmedJsonMap, nucmedMarkdownMap, guideMarkdown] = await Promise.all([
    loadLegacyNucmedPapers(),
    loadExternalNucmedJsonMap(),
    extractNucmedMarkdownMap(),
    readFile(RADIATION_GUIDE_PATH, 'utf8')
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
    buildRadiationPapers({ dirPath: RPS_MD_DIR, trackId: TRACKS.rps.id, label: TRACKS.rps.title }),
    buildRadiationPapers({ dirPath: RPO_MD_DIR, trackId: TRACKS.rpo.id, label: TRACKS.rpo.title })
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
