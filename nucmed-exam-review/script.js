const MANIFEST_URL = './data/manifest.json';

const state = {
  manifest: null,
  route: 'home',
  selectedTrackId: 'nucmed',
  selectedPaperId: null,
  selectedGuideId: null
};

const app = document.getElementById('app');
const pageKicker = document.getElementById('page-kicker');
const pageTitle = document.getElementById('page-title');

window.NM_EXAM_BANK = window.NM_EXAM_BANK || {};

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const renderInlineMarkdown = (value = '') => escapeHtml(value)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>')
  .replace(/`(.+?)`/g, '<code>$1</code>');

const renderFigure = (figureImage, figureAlt) => figureImage
  ? `
    <figure class="question-figure">
      <img src="${escapeHtml(figureImage)}" alt="${escapeHtml(figureAlt || '題目附圖')}" loading="lazy">
    </figure>
  `
  : '';

const createDataScript = (src) => new Promise((resolve, reject) => {
  const existing = document.querySelector(`script[data-paper-src="${src}"]`);
  if (existing) {
    resolve();
    return;
  }

  const script = document.createElement('script');
  script.src = src;
  script.dataset.paperSrc = src;
  script.onload = resolve;
  script.onerror = reject;
  document.body.appendChild(script);
});

const getTrack = (trackId) => state.manifest?.tracks.find((track) => track.id === trackId) || null;
const getGuide = (guideId) => state.manifest?.guides.find((guide) => guide.id === guideId) || null;
const getPaperMeta = (paperId) => state.manifest?.papers.find((paper) => paper.id === paperId) || null;
const getPaperSync = (paperId) => window.NM_EXAM_BANK?.[paperId] || null;
const getGuideIdForTrack = (trackId) => state.manifest?.guides.find((guide) => guide.trackIds.includes(trackId))?.id || null;

const ensurePaperLoaded = async (paperId) => {
  if (getPaperSync(paperId)) return getPaperSync(paperId);
  await createDataScript(`./data/${paperId}.js`);
  return getPaperSync(paperId);
};

const getSubjectLabel = (paper) => {
  if (paper.trackId === 'nucmed') return '整卷';
  if (paper.subjectCode === 'law') return '法規';
  if (paper.subjectCode === 'professional') return '專業';
  return paper.subjectName || '題目';
};

const getSortedTrackPapers = (trackId) => {
  const order = { nucmed: 0, law: 1, professional: 2 };
  return (state.manifest?.papers || [])
    .filter((paper) => paper.trackId === trackId)
    .sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      if (b.session !== a.session) return b.session - a.session;
      return (order[a.subjectCode] ?? 9) - (order[b.subjectCode] ?? 9);
    });
};

const groupPapersByYear = (papers) => papers.reduce((groups, paper) => {
  const key = String(paper.year);
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(paper);
  return groups;
}, new Map());

const setPageHead = (kicker, title) => {
  pageKicker.textContent = kicker;
  pageTitle.textContent = title;
};

const renderSidebar = () => {
  const guideButton = document.querySelector('[data-action="open-guide"]');
  const homeButton = document.querySelector('[data-action="open-home"]');
  const trackButtons = document.querySelectorAll('[data-action="open-track"]');

  homeButton.classList.toggle('is-active', state.route === 'home');
  guideButton.classList.toggle('is-active', state.route === 'guide');

  trackButtons.forEach((button) => {
    const isActiveTrack = button.dataset.trackId === state.selectedTrackId && ['track', 'paper'].includes(state.route);
    button.classList.toggle('is-active', isActiveTrack);
  });
};

const renderHome = () => {
  setPageHead('首頁', '考古題與考前整理');
  app.innerHTML = `
    <section class="home-hero">
      <div class="home-copy">
        <p class="section-kicker">Site Overview</p>
        <h3>本站彙整醫放師核子醫學、輻防師與輻防員歷屆考題，並補充考前整理資料。</h3>
        <p>
          內容依卷別與考科分流，方便回看各年度題型、法規題比例、圖題分布與常見核心觀念。
          醫放師卷別以整卷方式整理；輻防師與輻防員則區分法規與專業科目，另附輻防大補帖供考前集中翻閱。
        </p>
        <p>
          各卷頁面保留題幹、選項、附圖與已整理答案，適合用來做年份回顧、法規版本對照與高頻題型快速回查。
          若遇圖片題、答案疑義或法規版本差異，仍建議回到原始題本與法規原文再確認。
        </p>
      </div>
      <figure class="hero-figure">
        <img src="./assets/hero-study-stand.webp" alt="圖書館 K 書情境插圖，主角在桌前讀書，後方有守護者意象。" />
      </figure>
    </section>

    <section class="home-section">
      <h3>網站內容</h3>
      <div class="home-grid">
        <article class="home-card">
          <strong>醫放師考古題</strong>
          <p>收錄核子醫學診療原理與技術學歷屆試題，適合按年份回看題型與圖片題。</p>
        </article>
        <article class="home-card">
          <strong>輻防師考古題</strong>
          <p>法規與專業科目分開整理，保留單選與問答題原始閱讀脈絡。</p>
        </article>
        <article class="home-card">
          <strong>輻防員考古題</strong>
          <p>同樣依卷別與科目分流，方便快速回查常考法規數字與專業觀念。</p>
        </article>
        <article class="home-card">
          <strong>輻防大補帖</strong>
          <p>集中整理高頻數字、劑量限度、運送標誌與常見公式，供考前壓縮複習。</p>
        </article>
      </div>
    </section>
  `;
};

const renderTrackOverview = (trackId) => {
  const track = getTrack(trackId);
  const papers = getSortedTrackPapers(trackId);

  setPageHead(track?.shortTitle || '題庫', track?.title || '考古題');
  app.innerHTML = `
    <section class="track-section">
      <p class="section-kicker">Track</p>
      <h3>${track?.title || ''}</h3>
      <p class="track-copy">${track?.description || ''}</p>
    </section>

    <section class="track-section">
      <div class="section-head">
        <h3>最近卷別</h3>
        <span>${papers.length} 份</span>
      </div>
      <div class="paper-list">
        ${papers.map((paper) => `
          <button type="button" class="paper-row" data-action="open-paper" data-paper-id="${paper.id}">
            <strong>${paper.yearLabel}</strong>
            <span>${paper.title}</span>
            <em>${getSubjectLabel(paper)}</em>
          </button>
        `).join('')}
      </div>
    </section>
  `;
};

const renderQuestionBlock = (question) => {
  if (question.kind === 'essay') {
    return `
      <article class="question-card is-essay">
        <div class="question-meta">
          <span class="question-number">問答 ${question.number}</span>
        </div>
        <h4>${escapeHtml(question.stem)}</h4>
        ${renderFigure(question.figureImage, question.figureAlt)}
        <div class="essay-answer">
          ${question.answerText
            ? question.answerText.split('\n').map((line) => `<p>${escapeHtml(line)}</p>`).join('')
            : '<p>目前沒有整理好的參考解答。</p>'}
        </div>
      </article>
    `;
  }

  return `
    <article class="question-card">
      <div class="question-meta">
        <span class="question-number">第 ${question.number} 題</span>
        ${question.acceptedAnswers?.length
          ? `<span class="answer-chip">答案：${escapeHtml(question.acceptedAnswers.join(' / '))}</span>`
          : ''}
      </div>
      <h4>${escapeHtml(question.stem)}</h4>
      ${renderFigure(question.figureImage, question.figureAlt)}
      <div class="option-list">
        ${(question.options || []).map((option) => `
          <div class="option-row">
            <span class="option-key">${option.key}</span>
            <div>${option.text ? escapeHtml(option.text) : '<span class="muted-copy">此選項文字未整理完成</span>'}</div>
          </div>
        `).join('')}
      </div>
      ${question.explanationStatus === 'ready' && question.explanation
        ? `<p class="explanation">${escapeHtml(question.explanation)}</p>`
        : ''}
    </article>
  `;
};

const renderPaper = (paper) => {
  const track = getTrack(paper.trackId);
  const questions = paper.questions || [];

  setPageHead(track?.shortTitle || '考題', paper.title);
  app.innerHTML = `
    <section class="paper-header">
      <div>
        <p class="section-kicker">${track?.title || ''}</p>
        <h3>${paper.title}</h3>
      </div>
      <div class="paper-header-meta">
        <span>${paper.yearLabel}</span>
        <span>${getSubjectLabel(paper)}</span>
        <span>${questions.length} 題</span>
      </div>
    </section>

    <section class="question-stack">
      ${questions.map(renderQuestionBlock).join('')}
    </section>
  `;
};

const renderInlineTable = (rows) => {
  const cells = rows.map((row) => row.split('|').slice(1, -1).map((cell) => renderInlineMarkdown(cell.trim())));
  return `
    <div class="markdown-table-wrap">
      <table class="markdown-table">
        <thead><tr>${cells[0].map((cell) => `<th>${cell}</th>`).join('')}</tr></thead>
        <tbody>
          ${cells.slice(1).map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
};

const renderMarkdown = (markdown = '') => {
  const lines = markdown.split('\n');
  const html = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (/^\|/.test(line) && index + 1 < lines.length && /^\|?[-: ]+\|[-|: ]*$/.test(lines[index + 1].trim())) {
      const rows = [line];
      index += 2;
      while (index < lines.length && /^\|/.test(lines[index].trim())) {
        rows.push(lines[index].trim());
        index += 1;
      }
      html.push(renderInlineTable(rows));
      continue;
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = Math.min(headingMatch[1].length + 1, 4);
      html.push(`<h${level} class="markdown-h${level}">${renderInlineMarkdown(headingMatch[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (line.startsWith('>')) {
      html.push(`<blockquote class="markdown-blockquote">${renderInlineMarkdown(line.slice(1).trim())}</blockquote>`);
      index += 1;
      continue;
    }

    if (/^- /.test(line)) {
      html.push('<ul class="markdown-list">');
      while (index < lines.length && /^- /.test(lines[index].trim())) {
        html.push(`<li>${renderInlineMarkdown(lines[index].trim().slice(2))}</li>`);
        index += 1;
      }
      html.push('</ul>');
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      html.push('<ol class="markdown-list ordered">');
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        html.push(`<li>${renderInlineMarkdown(lines[index].trim().replace(/^\d+\.\s*/, ''))}</li>`);
        index += 1;
      }
      html.push('</ol>');
      continue;
    }

    if (/^---+$/.test(line)) {
      html.push('<hr class="markdown-rule" />');
      index += 1;
      continue;
    }

    html.push(`<p>${renderInlineMarkdown(line)}</p>`);
    index += 1;
  }

  return html.join('');
};

const renderGuide = () => {
  const guide = getGuide(state.selectedGuideId);
  setPageHead('輻防大補帖', guide?.title || '考前整理');
  app.innerHTML = `
    <section class="guide-body">
      ${guide ? renderMarkdown(guide.markdown) : '<p class="muted-copy">目前沒有可顯示的整理內容。</p>'}
    </section>
  `;
};

const renderCurrentRoute = async () => {
  renderSidebar();

  if (state.route === 'home') {
    renderHome();
    return;
  }

  if (state.route === 'track') {
    renderTrackOverview(state.selectedTrackId);
    return;
  }

  if (state.route === 'guide') {
    renderGuide();
    return;
  }

  const paper = await ensurePaperLoaded(state.selectedPaperId);
  if (!paper) {
    setPageHead('錯誤', '找不到這份考題');
    app.innerHTML = '<section class="loading-state"><h3>找不到這份考題</h3><p>請從左側卷別重新選擇。</p></section>';
    return;
  }

  renderPaper(paper);
};

const syncUrl = () => {
  const params = new URLSearchParams();
  if (state.route === 'paper' && state.selectedPaperId) params.set('paper', state.selectedPaperId);
  if (state.route === 'track' && state.selectedTrackId) params.set('track', state.selectedTrackId);
  if (state.route === 'guide') params.set('view', 'guide');
  const query = params.toString();
  window.history.replaceState({}, '', query ? `?${query}` : './');
};

const openHome = async () => {
  state.route = 'home';
  state.selectedPaperId = null;
  syncUrl();
  await renderCurrentRoute();
};

const openTrack = async (trackId) => {
  state.route = 'track';
  state.selectedTrackId = trackId;
  state.selectedPaperId = null;
  if (!state.selectedGuideId) state.selectedGuideId = getGuideIdForTrack('rps');
  syncUrl();
  await renderCurrentRoute();
};

const openPaper = async (paperId) => {
  const meta = getPaperMeta(paperId);
  state.route = 'paper';
  state.selectedPaperId = paperId;
  state.selectedTrackId = meta?.trackId || state.selectedTrackId;
  syncUrl();
  await renderCurrentRoute();
};

const openGuide = async () => {
  state.route = 'guide';
  state.selectedPaperId = null;
  state.selectedGuideId = state.selectedGuideId || getGuideIdForTrack('rps');
  syncUrl();
  await renderCurrentRoute();
};

document.addEventListener('click', async (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;

  switch (target.dataset.action) {
    case 'open-home':
      await openHome();
      break;
    case 'open-track':
      await openTrack(target.dataset.trackId);
      break;
    case 'open-paper':
      await openPaper(target.dataset.paperId);
      break;
    case 'open-guide':
      await openGuide();
      break;
    default:
      break;
  }
});

const initFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const paperId = params.get('paper');
  const trackId = params.get('track');
  const view = params.get('view');

  state.selectedGuideId = getGuideIdForTrack('rps');

  if (paperId && getPaperMeta(paperId)) {
    state.route = 'paper';
    state.selectedPaperId = paperId;
    state.selectedTrackId = getPaperMeta(paperId)?.trackId || 'nucmed';
    return;
  }

  if (view === 'guide') {
    state.route = 'guide';
    state.selectedTrackId = 'rps';
    return;
  }

  if (trackId && getTrack(trackId)) {
    state.route = 'track';
    state.selectedTrackId = trackId;
  }
};

const init = async () => {
  const response = await fetch(MANIFEST_URL);
  state.manifest = await response.json();
  initFromUrl();
  await renderCurrentRoute();
};

init().catch((error) => {
  setPageHead('錯誤', '載入失敗');
  app.innerHTML = `
    <section class="loading-state">
      <h3>載入失敗</h3>
      <p>${escapeHtml(error.message || 'manifest 讀取失敗')}</p>
    </section>
  `;
});
