import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const TWINKLE_URL = 'https://api.twinkleai.tw/mcp/';
const OUTPUT_DIR = path.join(process.cwd(), 'nucmed-exam-review', 'source');
const MANIFEST_PATH = path.join(OUTPUT_DIR, 'manifest.json');
const MAX_MCP_RETRIES = 3;

const REQUIRED_ENV = 'TWINKLE_HUB_API_KEY';

const EXPECTED_QUERY = {
  query: '核子醫學診療原理與技術學',
  exam_name_contains: '醫事放射師',
  subject_contains: '核子醫學診療原理與技術學',
  year_from: 2016,
  year_to: 2025,
  limit: 30
};

const toHalfWidth = (value = '') => value
  .replace(/[Ａ-Ｚ０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
  .replaceAll('＃', '#');

const normalizeWhitespace = (value = '') => value
  .replace(/\r/g, '')
  .replace(/\u00a0/g, ' ')
  .replace(/\u3000/g, ' ')
  .replace(/[ \t]+/g, ' ')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

const normalizeInline = (value = '') => normalizeWhitespace(value)
  .replace(/\s*([,，。；：！？])\s*/g, '$1 ')
  .replace(/\s{2,}/g, ' ')
  .trim();

const ensureEnv = () => {
  const apiKey = process.env[REQUIRED_ENV];
  if (!apiKey) {
    throw new Error(`Missing ${REQUIRED_ENV}. Export the key before running this script.`);
  }
  return apiKey;
};

const parseMcpEnvelope = (rawText) => {
  const dataLines = rawText
    .split('\n')
    .filter((line) => line.startsWith('data: '))
    .map((line) => line.slice(6));

  if (!dataLines.length) {
    throw new Error(`Unexpected MCP response: ${rawText.slice(0, 240)}`);
  }

  return JSON.parse(dataLines.at(-1));
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fileExists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

const postMcp = async ({ method, params }, attempt = 1) => {
  const apiKey = ensureEnv();
  const response = await fetch(TWINKLE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json, text/event-stream'
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: Date.now(),
      method,
      params
    })
  });

  if (!response.ok) {
    if (response.status >= 500 && attempt < MAX_MCP_RETRIES) {
      await sleep(1000 * attempt);
      return postMcp({ method, params }, attempt + 1);
    }
    throw new Error(`Twinkle MCP HTTP ${response.status}`);
  }

  const rawText = await response.text();
  const payload = parseMcpEnvelope(rawText);

  if (payload.error) {
    throw new Error(payload.error.message || JSON.stringify(payload.error));
  }

  return payload.result;
};

const callTool = async (name, args) => {
  const result = await postMcp({
    method: 'tools/call',
    params: {
      name,
      arguments: args
    }
  });

  if (result.isError) {
    const message = result.content?.find((item) => item.type === 'text')?.text || `Tool ${name} failed`;
    throw new Error(message);
  }

  const textPayload = result.content?.find((item) => item.type === 'text')?.text;
  if (!textPayload) {
    throw new Error(`Tool ${name} returned no text payload`);
  }

  return JSON.parse(textPayload);
};

const deriveSession = (examName = '') => {
  if (examName.includes('第一次')) return 1;
  if (examName.includes('第二次')) return 2;
  throw new Error(`Unable to derive session from exam name: ${examName}`);
};

const toYearLabel = (year, session) => `${year}-${session}`;
const toPaperKey = (year, session) => `radiographer-${toYearLabel(year, session)}`;
const toQuestionId = (year, session, number) => `rg-${year}-${session}-q${String(number).padStart(3, '0')}`;

const parseCorrectionMap = (pdfText = '') => {
  const normalized = toHalfWidth(pdfText);
  const correctionMap = new Map();
  const regex = /第\s*(\d+)\s*題答\s*([ABCD、,，及與或\s]+?)(?:者)?(?:均)?\s*給分/g;
  const universalRegex = /第\s*(\d+)\s*題一律給分/g;

  for (const match of normalized.matchAll(regex)) {
    const questionNumber = Number(match[1]);
    const acceptedAnswers = Array.from(new Set(match[2].match(/[ABCD]/g) || []));
    if (questionNumber && acceptedAnswers.length) {
      correctionMap.set(questionNumber, acceptedAnswers);
    }
  }

  for (const match of normalized.matchAll(universalRegex)) {
    const questionNumber = Number(match[1]);
    if (questionNumber) {
      correctionMap.set(questionNumber, ['A', 'B', 'C', 'D']);
    }
  }

  return correctionMap;
};

const parseOfficialQuestionCount = (pdfText = '') => {
  const normalized = toHalfWidth(pdfText);
  const match = normalized.match(/題\s*數：\s*(\d+)\s*題/);
  return match ? Number(match[1]) : null;
};

const parseAnswerSequence = (pdfText, expectedCount, paperKey) => {
  const normalized = toHalfWidth(pdfText);
  const correctionMap = parseCorrectionMap(normalized);
  const segment = (normalized
    .split('標準答案：')
    .at(-1)
    ?.split(/備\s*註[:：]/)[0] || normalized)
    .split(/題[號序]/)
    .slice(1)
    .join('');
  const rawTokens = Array.from(segment.matchAll(/[ABCD#]/g), (match) => match[0]);

  if (rawTokens.length !== expectedCount) {
    throw new Error(
      `${paperKey} answer count mismatch: expected ${expectedCount}, got ${rawTokens.length}`
    );
  }

  const acceptedAnswers = rawTokens.map((token, index) => {
    const questionNumber = index + 1;
    if (token === '#') {
      const corrected = correctionMap.get(questionNumber);
      if (!corrected?.length) {
        throw new Error(`${paperKey} missing correction note for question ${questionNumber}`);
      }
      return corrected;
    }
    const corrected = correctionMap.get(questionNumber);
    return corrected?.length ? corrected : [token];
  });

  return acceptedAnswers;
};

const buildPdfQuestionMap = (pdfText = '') => {
  const normalized = toHalfWidth(pdfText)
    .replace(/\r/g, '')
    .replace(/---/g, '\n')
    .replace(/([^\n])\s([ABCD]\.)/g, '$1\n$2')
    .replace(/([。；：？）])([ABCD]\.)/g, '$1\n$2');

  const firstQuestionIndex = normalized.search(/\n?1\./);
  if (firstQuestionIndex === -1) {
    return new Map();
  }

  const lines = normalized
    .slice(firstQuestionIndex)
    .split('\n')
    .map((line) => normalizeWhitespace(line))
    .filter(Boolean);
  const questionMap = new Map();
  let expectedNumber = 1;
  let currentQuestion = null;

  const pushCurrentQuestion = () => {
    if (!currentQuestion) return;
    questionMap.set(currentQuestion.number, {
      stem: normalizeInline(currentQuestion.stemParts.join(' ')),
      options: currentQuestion.options
    });
    currentQuestion = null;
  };

  const consumeLine = (targetQuestion, rawLine) => {
    const line = normalizeWhitespace(rawLine);
    if (!line || !targetQuestion) return;

    const optionMatch = line.match(/^([ABCD])\.(.*)$/);
    if (optionMatch) {
      targetQuestion.currentOption = optionMatch[1];
      targetQuestion.options.set(targetQuestion.currentOption, normalizeInline(optionMatch[2]));
      return;
    }

    if (targetQuestion.currentOption) {
      targetQuestion.options.set(
        targetQuestion.currentOption,
        normalizeInline(`${targetQuestion.options.get(targetQuestion.currentOption)} ${line}`)
      );
    } else {
      targetQuestion.stemParts.push(line);
    }
  };

  for (const line of lines) {
    const questionMatch = line.match(/^(\d+)\.(.*)$/);
    const number = Number(questionMatch?.[1]);

    if (questionMatch && number === expectedNumber) {
      pushCurrentQuestion();
      currentQuestion = {
        number,
        stemParts: [],
        options: new Map(),
        currentOption: null
      };
      expectedNumber += 1;
      consumeLine(currentQuestion, questionMatch[2]);
      continue;
    }

    consumeLine(currentQuestion, line);
  }

  pushCurrentQuestion();

  return questionMap;
};

const normalizeQuestions = (paper, acceptedAnswers, fallbackQuestionMap, year, session, paperKey) => {
  if (!Array.isArray(paper.questions) || !paper.questions.length) {
    throw new Error(`${paper.paper_id} returned no questions`);
  }

  const structuredQuestions = new Map();
  for (const question of paper.questions) {
    const number = Number(question.no);
    if (!number || number < 1 || number > acceptedAnswers.length) continue;
    structuredQuestions.set(number, question);
  }

  return acceptedAnswers.map((questionAcceptedAnswers, index) => {
    const number = index + 1;
    const answer = questionAcceptedAnswers?.[0];
    const structured = structuredQuestions.get(number);
    const fallback = fallbackQuestionMap.get(number);
    const candidate = (() => {
      if (!structured) return fallback;
      const structuredOptions = Object.entries(structured.options || {});
      if (structuredOptions.length >= 4) return structured;
      if (fallback && fallback.options.size >= 4) return fallback;
      return structured;
    })();

    if (!candidate) {
      throw new Error(`${paperKey} missing question ${number}`);
    }

    const stem = normalizeInline(candidate.stem || '');
    const optionEntries = candidate.options instanceof Map
      ? Array.from(candidate.options.entries()).map(([key, text]) => ({ key, text: normalizeInline(text) }))
      : Object.entries(candidate.options || {}).map(([key, text]) => ({
      key,
      text: normalizeInline(text)
    }));

    if (!answer || !['A', 'B', 'C', 'D'].includes(answer)) {
      throw new Error(`${paper.paper_id} invalid answer at question ${number}: ${answer}`);
    }

    if (optionEntries.length < 4) {
      throw new Error(`${paperKey} missing options at question ${number}`);
    }

    return {
      id: toQuestionId(year, session, number),
      number,
      stem,
      options: optionEntries,
      answer,
      acceptedAnswers: questionAcceptedAnswers,
      explanation: '',
      explanationStatus: 'pending'
    };
  });
};

const buildPaperRecord = async (hit) => {
  const year = Number(hit.exam_year);
  const session = deriveSession(hit.exam_name);
  const paperKey = toPaperKey(year, session);
  const paper = await callTool('opendata-get_exam_paper', {
    paper_id: hit.paper_id,
    include_options: true
  });

  const answerPdf = await callTool('twtools-extract_pdf_text', {
    source: hit.answer_pdf_url
  });

  const questionPdf = await callTool('twtools-extract_pdf_text', {
    source: hit.question_pdf_url
  });

  const officialQuestionCount = parseOfficialQuestionCount(answerPdf.text || '') || Number(hit.question_count);
  const answers = parseAnswerSequence(answerPdf.text || '', officialQuestionCount, paperKey);
  const fallbackQuestionMap = buildPdfQuestionMap(questionPdf.text || '');
  const questions = normalizeQuestions(paper, answers, fallbackQuestionMap, year, session, paperKey);

  return {
    id: paperKey,
    paperId: hit.paper_id,
    year,
    session,
    yearLabel: toYearLabel(year, session),
    title: `${toYearLabel(year, session)} 核子醫學診療原理與技術學`,
    examYearCe: hit['exam_year_西元'],
    examName: hit.exam_name,
    subjectName: hit.subject_name,
    questionType: hit.question_type,
    questionCount: questions.length,
    source: {
      twinklePaperId: hit.paper_id,
      questionPdfUrl: hit.question_pdf_url,
      answerPdfUrl: hit.answer_pdf_url,
      questionSource: 'official:question_pdf',
      answerSource: 'official:answer_pdf'
    },
    questions
  };
};

const main = async () => {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const searchResult = await callTool('opendata-search_exam', EXPECTED_QUERY);
  const hits = (searchResult.hits || [])
    .filter((hit) => hit.subject_name === '核子醫學診療原理與技術學')
    .filter((hit) => hit.exam_name.includes('醫事放射師'))
    .sort((left, right) => {
      const yearDiff = Number(left.exam_year) - Number(right.exam_year);
      if (yearDiff !== 0) return yearDiff;
      return deriveSession(left.exam_name) - deriveSession(right.exam_name);
    });

  if (hits.length !== 20) {
    throw new Error(`Expected 20 target papers for ROC 105-114, got ${hits.length}`);
  }

  const records = [];
  for (const hit of hits) {
    const year = Number(hit.exam_year);
    const session = deriveSession(hit.exam_name);
    const paperKey = toPaperKey(year, session);
    const paperPath = path.join(OUTPUT_DIR, `${paperKey}.json`);

    if (await fileExists(paperPath)) {
      const existing = JSON.parse(await readFile(paperPath, 'utf8'));
      records.push(existing);
      continue;
    }

    const record = await buildPaperRecord(hit);
    records.push(record);
    await writeFile(paperPath, `${JSON.stringify(record, null, 2)}\n`, 'utf8');
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    scope: 'radiographer-nuclear-medicine-roc-105-114-all-sessions',
    query: EXPECTED_QUERY,
    papers: records.map((record) => ({
      id: record.id,
      paperId: record.paperId,
      year: record.year,
      session: record.session,
      yearLabel: record.yearLabel,
      title: record.title,
      questionCount: record.questionCount,
      source: record.source
    }))
  };

  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
};

await main();
