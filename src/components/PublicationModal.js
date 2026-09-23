/**
 * PublicationModal Component
 * Interactive document & scans viewer for published works:
 * - Scanned newspaper clippings and book pages
 * - Multi-page navigation (e.g., pp. 343-345 for The Mystical Moon)
 * - Direct link/viewer for original PDF
 * - Toggleable typed transcript view with poetic typography
 * - Keyboard navigation (Esc to close, Arrow keys to navigate)
 */

export function createPublicationModal() {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'pub-modal-overlay';
  modalOverlay.id = 'pubModalOverlay';
  modalOverlay.setAttribute('role', 'dialog');
  modalOverlay.setAttribute('aria-modal', 'true');
  modalOverlay.setAttribute('aria-hidden', 'true');

  let currentPub = null;
  let allPubs = [];
  let currentPageIndex = 0;
  let currentView = 'scan'; // 'scan' | 'transcript'

  modalOverlay.innerHTML = `
    <div class="pub-modal-backdrop" id="pubModalBackdrop"></div>
    <div class="pub-modal-dialog">
      <header class="pub-modal-header">
        <div class="pub-modal-meta">
          <div class="pub-modal-badges">
            <span class="pub-badge date-badge" id="pubModalDate"></span>
            <span class="pub-badge source-badge" id="pubModalSource"></span>
          </div>
          <h2 class="pub-modal-title" id="pubModalTitle"></h2>
          <div class="pub-modal-byline" id="pubModalByline"></div>
        </div>

        <div class="pub-modal-actions">
          <a id="pubModalPdfLink" href="#" target="_blank" rel="noopener noreferrer" class="pub-modal-btn pub-btn-pdf" style="display: none;">
            <svg class="pub-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>Open Original PDF</span>
            <span class="btn-arrow">&nearr;</span>
          </a>

          <a id="pubModalRawImgLink" href="#" target="_blank" rel="noopener noreferrer" class="pub-modal-btn pub-btn-raw" title="View uncompressed image in new tab">
            <svg class="pub-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span>High-Res Scan</span>
            <span class="btn-arrow">&nearr;</span>
          </a>

          <button class="pub-modal-close-btn" id="pubModalCloseBtn" aria-label="Close publication viewer">
            &times;
          </button>
        </div>
      </header>

      <!-- View Switcher Bar -->
      <div class="pub-view-tabs-bar">
        <div class="pub-view-tabs">
          <button class="pub-view-tab active" id="tabViewScan" data-view="scan">
            <span>Original Print Scan</span>
          </button>
          <button class="pub-view-tab" id="tabViewTranscript" data-view="transcript">
            <span>Read Transcript</span>
          </button>
        </div>

        <!-- Multi-page controls (shown only when multiple images exist) -->
        <div class="pub-pages-nav" id="pubPagesNav" style="display: none;">
          <button class="pub-page-arrow" id="pubPrevPageBtn" aria-label="Previous Page">&larr;</button>
          <div class="pub-page-pills" id="pubPagePills"></div>
          <button class="pub-page-arrow" id="pubNextPageBtn" aria-label="Next Page">&rarr;</button>
          <span class="pub-page-counter" id="pubPageCounter">Page 1 of 3</span>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="pub-modal-body">
        <!-- Scan Viewer View -->
        <div class="pub-scan-view active" id="pubScanView">
          <div class="pub-image-frame">
            <div class="pub-image-container" id="pubImageContainer">
              <img id="pubScanImage" src="" alt="" class="pub-scan-img" />
            </div>
            <div class="pub-scan-caption" id="pubScanCaption"></div>
          </div>
        </div>

        <!-- Typography / Transcript View -->
        <div class="pub-transcript-view" id="pubTranscriptView" style="display: none;">
          <div class="pub-transcript-card">
            <div class="pub-transcript-header">
              <h3 class="pub-transcript-title" id="pubTranscriptTitle"></h3>
              <div class="pub-transcript-sub" id="pubTranscriptSub"></div>
            </div>
            <div class="pub-transcript-text" id="pubTranscriptText"></div>
            <div class="pub-transcript-signature">~sanya ks</div>
          </div>
        </div>
      </div>

      <!-- Footer with Prev / Next Publication Switcher -->
      <footer class="pub-modal-footer">
        <button class="pub-footer-nav-btn prev" id="pubPrevPubBtn">
          <span class="nav-direction">&larr; Previous</span>
          <span class="nav-title" id="pubPrevPubTitle"></span>
        </button>
        <div class="pub-footer-center">
          <span class="pub-footer-hint">Use &larr; &rarr; arrows to turn pages &bull; Esc to exit</span>
        </div>
        <button class="pub-footer-nav-btn next" id="pubNextPubBtn">
          <span class="nav-direction">Next &rarr;</span>
          <span class="nav-title" id="pubNextPubTitle"></span>
        </button>
      </footer>
    </div>
  `;

  // Element references
  const backdrop = modalOverlay.querySelector('#pubModalBackdrop');
  const closeBtn = modalOverlay.querySelector('#pubModalCloseBtn');
  const dateEl = modalOverlay.querySelector('#pubModalDate');
  const sourceEl = modalOverlay.querySelector('#pubModalSource');
  const titleEl = modalOverlay.querySelector('#pubModalTitle');
  const bylineEl = modalOverlay.querySelector('#pubModalByline');
  const pdfLink = modalOverlay.querySelector('#pubModalPdfLink');
  const rawImgLink = modalOverlay.querySelector('#pubModalRawImgLink');

  const tabViewScan = modalOverlay.querySelector('#tabViewScan');
  const tabViewTranscript = modalOverlay.querySelector('#tabViewTranscript');
  const pubScanView = modalOverlay.querySelector('#pubScanView');
  const pubTranscriptView = modalOverlay.querySelector('#pubTranscriptView');

  const pubPagesNav = modalOverlay.querySelector('#pubPagesNav');
  const pubPrevPageBtn = modalOverlay.querySelector('#pubPrevPageBtn');
  const pubNextPageBtn = modalOverlay.querySelector('#pubNextPageBtn');
  const pubPagePills = modalOverlay.querySelector('#pubPagePills');
  const pubPageCounter = modalOverlay.querySelector('#pubPageCounter');

  const pubScanImage = modalOverlay.querySelector('#pubScanImage');
  const pubScanCaption = modalOverlay.querySelector('#pubScanCaption');

  const pubTranscriptTitle = modalOverlay.querySelector('#pubTranscriptTitle');
  const pubTranscriptSub = modalOverlay.querySelector('#pubTranscriptSub');
  const pubTranscriptText = modalOverlay.querySelector('#pubTranscriptText');

  const pubPrevPubBtn = modalOverlay.querySelector('#pubPrevPubBtn');
  const pubPrevPubTitle = modalOverlay.querySelector('#pubPrevPubTitle');
  const pubNextPubBtn = modalOverlay.querySelector('#pubNextPubBtn');
  const pubNextPubTitle = modalOverlay.querySelector('#pubNextPubTitle');

  // View Switcher logic
  function setView(view) {
    currentView = view;
    if (view === 'scan') {
      tabViewScan.classList.add('active');
      tabViewTranscript.classList.remove('active');
      pubScanView.style.display = 'block';
      pubTranscriptView.style.display = 'none';
      if (currentPub && currentPub.images && currentPub.images.length > 1) {
        pubPagesNav.style.display = 'flex';
      }
    } else {
      tabViewScan.classList.remove('active');
      tabViewTranscript.classList.add('active');
      pubScanView.style.display = 'none';
      pubTranscriptView.style.display = 'block';
      pubPagesNav.style.display = 'none';
    }
  }

  tabViewScan.addEventListener('click', () => setView('scan'));
  tabViewTranscript.addEventListener('click', () => setView('transcript'));

  // Page switching for multi-page publications
  function setPage(index) {
    if (!currentPub || !currentPub.images || currentPub.images.length === 0) return;
    if (index < 0) index = 0;
    if (index >= currentPub.images.length) index = currentPub.images.length - 1;

    currentPageIndex = index;
    const currentImgUrl = currentPub.images[currentPageIndex];
    pubScanImage.src = currentImgUrl;
    pubScanImage.alt = `${currentPub.workTitle} - Page ${currentPageIndex + 1}`;
    rawImgLink.href = currentImgUrl;

    // Update caption and counter
    const pageLabel = (currentPub.pageLabels && currentPub.pageLabels[currentPageIndex]) 
      || `Page ${currentPageIndex + 1} of ${currentPub.images.length}`;
    pubPageCounter.textContent = `Page ${currentPageIndex + 1} of ${currentPub.images.length}`;
    pubScanCaption.textContent = `${currentPub.publicationName} — ${pageLabel}`;

    // Update pills
    const pills = pubPagePills.querySelectorAll('.pub-page-pill');
    pills.forEach((p, idx) => {
      if (idx === currentPageIndex) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    pubPrevPageBtn.disabled = currentPageIndex === 0;
    pubNextPageBtn.disabled = currentPageIndex === currentPub.images.length - 1;
  }

  pubPrevPageBtn.addEventListener('click', () => setPage(currentPageIndex - 1));
  pubNextPageBtn.addEventListener('click', () => setPage(currentPageIndex + 1));

  // Render Publication details
  function renderPublication(pub) {
    currentPub = pub;
    currentPageIndex = 0;

    titleEl.textContent = pub.workTitle;
    dateEl.textContent = pub.date || pub.year;
    sourceEl.textContent = pub.publisher || pub.publicationName;
    bylineEl.textContent = pub.authorByline ? `By ${pub.authorByline}` : '';

    // PDF link
    if (pub.pdfUrl) {
      pdfLink.href = pub.pdfUrl;
      pdfLink.style.display = 'inline-flex';
    } else {
      pdfLink.style.display = 'none';
    }

    // Multi-page setup
    pubPagePills.innerHTML = '';
    if (pub.images && pub.images.length > 1) {
      pubPagesNav.style.display = 'flex';
      pub.images.forEach((img, idx) => {
        const pill = document.createElement('button');
        pill.className = `pub-page-pill ${idx === 0 ? 'active' : ''}`;
        pill.textContent = (pub.pageLabels && pub.pageLabels[idx]) || `P. ${idx + 1}`;
        pill.addEventListener('click', () => setPage(idx));
        pubPagePills.appendChild(pill);
      });
    } else {
      pubPagesNav.style.display = 'none';
    }

    // Load initial page
    setPage(0);

    // Setup transcript
    pubTranscriptTitle.textContent = pub.workTitle;
    pubTranscriptSub.textContent = `${pub.publicationName} (${pub.date || pub.year}) • ${pub.authorByline || 'Sanya'}`;
    pubTranscriptText.textContent = pub.fullText || pub.description;

    // Reset view to scan
    setView('scan');

    // Setup Footer next/previous publication buttons
    if (allPubs && allPubs.length > 0) {
      const pubIndex = allPubs.findIndex(p => p.id === pub.id);
      
      if (pubIndex > 0) {
        const prevPub = allPubs[pubIndex - 1];
        pubPrevPubTitle.textContent = prevPub.workTitle;
        pubPrevPubBtn.style.visibility = 'visible';
        pubPrevPubBtn.onclick = () => renderPublication(prevPub);
      } else {
        pubPrevPubBtn.style.visibility = 'hidden';
      }

      if (pubIndex < allPubs.length - 1) {
        const nextPub = allPubs[pubIndex + 1];
        pubNextPubTitle.textContent = nextPub.workTitle;
        pubNextPubBtn.style.visibility = 'visible';
        pubNextPubBtn.onclick = () => renderPublication(nextPub);
      } else {
        pubNextPubBtn.style.visibility = 'hidden';
      }
    }
  }

  // Open & Close
  function open(pub, publicationsList = []) {
    allPubs = publicationsList;
    renderPublication(pub);
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Event handlers
  backdrop.addEventListener('click', close);
  closeBtn.addEventListener('click', close);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'ArrowLeft') {
      if (currentPub && currentPub.images && currentPub.images.length > 1 && currentPageIndex > 0) {
        setPage(currentPageIndex - 1);
      }
    } else if (e.key === 'ArrowRight') {
      if (currentPub && currentPub.images && currentPub.images.length > 1 && currentPageIndex < currentPub.images.length - 1) {
        setPage(currentPageIndex + 1);
      }
    }
  });

  return {
    element: modalOverlay,
    open,
    close
  };
}
