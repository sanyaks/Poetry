/**
 * PoemPage Component
 * Dedicated poem reading view:
 * - Prominent poem title
 * - Date/year & mood tag
 * - Generous margins & spacing inside a warm paper card
 * - Preserved stanza structure & line breaks (white-space: pre-wrap)
 * - Reading controls: font size adjuster (A- / A+), copy poem
 * - Next / Previous poem navigation
 * - Mandatory signature at the very end of every poem: ~sanya
 */
export function createPoemPage(onBack, onNavigatePoem) {
  const container = document.createElement('div');
  container.className = 'poem-reading-view';
  container.id = 'poemReadingView';

  let currentFontSizeRem = 1.4;
  let currentPoemData = null;

  container.innerHTML = `
    <div class="reader-container">
      <div class="reader-controls-bar">
        <button class="reader-back-btn" id="readerBackBtn" aria-label="Return to all poems">
          &larr; all poems
        </button>

        <div class="reader-tools">
          <button class="reader-tool-btn" id="decreaseFontBtn" title="Decrease font size">A-</button>
          <button class="reader-tool-btn" id="increaseFontBtn" title="Increase font size">A+</button>
          <button class="reader-tool-btn" id="copyPoemBtn" title="Copy poem text">copy poem</button>
        </div>
      </div>

      <article class="reader-card">
        <header class="reader-header">
          <div class="reader-header-top">
            <span class="reader-collection-label" id="readerCollectionLabel">archive —</span>
            <span class="reader-folio-num" id="readerFolioNum">/01</span>
          </div>
          <div class="reader-meta-group">
            <span class="reader-meta-date" id="readerDate"></span>
            <span class="reader-meta-tag" id="readerTag" style="display: none;"></span>
          </div>
          <h1 class="reader-title" id="readerTitle"></h1>
        </header>

        <div class="reader-cover-wrap" id="readerCoverWrap" style="display: none;">
          <img id="readerCoverImg" src="" alt="" class="reader-cover-img" />
        </div>

        <div class="reader-poem-body" id="readerPoemBody"></div>

        <div class="reader-signature">~sanya ks</div>

        <nav class="reader-pager" aria-label="Poem pagination">
          <button class="reader-pager-link prev" id="readerPrevPoem" style="display: none;">
            <span class="reader-pager-sub">&larr; previous</span>
            <span class="reader-pager-title" id="readerPrevTitle"></span>
          </button>
          <div style="flex-grow: 1;"></div>
          <button class="reader-pager-link next" id="readerNextPoem" style="display: none;">
            <span class="reader-pager-sub">next &rarr;</span>
            <span class="reader-pager-title" id="readerNextTitle"></span>
          </button>
        </nav>
      </article>
    </div>
  `;

  const backBtn = container.querySelector('#readerBackBtn');
  const readerFolioNum = container.querySelector('#readerFolioNum');
  const readerCollectionLabel = container.querySelector('#readerCollectionLabel');
  const readerDate = container.querySelector('#readerDate');
  const readerTag = container.querySelector('#readerTag');
  const readerTitle = container.querySelector('#readerTitle');
  const readerPoemBody = container.querySelector('#readerPoemBody');
  const readerCoverWrap = container.querySelector('#readerCoverWrap');
  const readerCoverImg = container.querySelector('#readerCoverImg');
  const decreaseFontBtn = container.querySelector('#decreaseFontBtn');
  const increaseFontBtn = container.querySelector('#increaseFontBtn');
  const copyPoemBtn = container.querySelector('#copyPoemBtn');

  const prevPoemBtn = container.querySelector('#readerPrevPoem');
  const prevTitle = container.querySelector('#readerPrevTitle');
  const nextPoemBtn = container.querySelector('#readerNextPoem');
  const nextTitle = container.querySelector('#readerNextTitle');

  // Font size adjustment
  decreaseFontBtn.addEventListener('click', () => {
    if (currentFontSizeRem > 1.1) {
      currentFontSizeRem -= 0.15;
      readerPoemBody.style.fontSize = `${currentFontSizeRem}rem`;
    }
  });

  increaseFontBtn.addEventListener('click', () => {
    if (currentFontSizeRem < 2.0) {
      currentFontSizeRem += 0.15;
      readerPoemBody.style.fontSize = `${currentFontSizeRem}rem`;
    }
  });

  // Copy poem functionality
  copyPoemBtn.addEventListener('click', () => {
    if (!currentPoemData) return;
    const textToCopy = `"${currentPoemData.title}"\n\n${currentPoemData.content}\n\n~sanya ks`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('poem copied to clipboard');
    }).catch(() => {
      showToast('poem copied');
    });
  });

  function showToast(msg) {
    let toast = document.querySelector('.toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (onBack) {
      onBack();
    }
  });

  return {
    element: container,
    renderPoem(poem, allPoems = []) {
      currentPoemData = poem;
      readerTitle.textContent = poem.title;
      readerDate.textContent = poem.date || '';
      readerFolioNum.textContent = poem.number ? `/${poem.number}` : '/01';
      readerCollectionLabel.textContent = poem.collection ? `${poem.collection} —` : 'archive —';

      if (poem.tag) {
        readerTag.textContent = `✦ ${poem.tag}`;
        readerTag.style.display = 'inline-block';
      } else {
        readerTag.style.display = 'none';
      }

      if (poem.coverImage) {
        readerCoverImg.src = poem.coverImage;
        readerCoverImg.alt = poem.title;
        readerCoverWrap.style.display = 'block';
      } else {
        readerCoverWrap.style.display = 'none';
      }

      // Preserve exact line breaks, stanzas and spacing
      readerPoemBody.textContent = poem.content;
      readerPoemBody.style.fontSize = `${currentFontSizeRem}rem`;

      // Next / Previous navigation setup
      if (allPoems && allPoems.length > 0) {
        const currentIndex = allPoems.findIndex(p => p.id === poem.id);

        if (currentIndex > 0) {
          const prev = allPoems[currentIndex - 1];
          prevTitle.textContent = prev.title;
          prevPoemBtn.style.display = 'inline-flex';
          prevPoemBtn.onclick = () => onNavigatePoem && onNavigatePoem(prev.id);
        } else {
          prevPoemBtn.style.display = 'none';
        }

        if (currentIndex < allPoems.length - 1) {
          const next = allPoems[currentIndex + 1];
          nextTitle.textContent = next.title;
          nextPoemBtn.style.display = 'inline-flex';
          nextPoemBtn.onclick = () => onNavigatePoem && onNavigatePoem(next.id);
        } else {
          nextPoemBtn.style.display = 'none';
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
}
