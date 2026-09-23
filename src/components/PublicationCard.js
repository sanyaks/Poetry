/**
 * PublicationCard Component
 * Literary archive card for published writing:
 * - Highlighting title, date, publisher, and format
 * - Scanned image preview thumbnail
 * - Interactive click handler to open the publication modal reader
 */
export function createPublicationCard(pub, onSelect) {
  const card = document.createElement('article');
  card.className = 'publication-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View publication: ${pub.workTitle} (${pub.date || pub.year})`);

  card.innerHTML = `
    <div class="pub-card-layout">
      ${pub.coverImage ? `
        <div class="pub-card-thumbnail-wrap">
          <img src="${pub.coverImage}" alt="${pub.workTitle} scan preview" class="pub-card-thumbnail" loading="lazy" />
          <div class="pub-thumbnail-badge">${pub.badge || 'Original Print'}</div>
        </div>
      ` : ''}

      <div class="pub-card-content">
        <div class="pub-top-meta">
          <span class="pub-folio">${pub.date || pub.year}</span>
          ${pub.issue ? `<span class="pub-source-issue">${pub.issue}</span>` : ''}
        </div>

        <h3 class="pub-work-title">“${pub.workTitle}”</h3>

        <div class="pub-source">
          <span class="pub-journal">${pub.publicationName}</span>
          ${pub.publisher && pub.publisher !== pub.publicationName ? `<span class="pub-publisher">(${pub.publisher})</span>` : ''}
        </div>

        <p class="pub-description">${pub.description || ''}</p>

        <div class="pub-action">
          <span class="pub-link">
            <span>view original print scans &bull; read piece</span>
            <span class="pub-link-arrow">&rarr;</span>
          </span>
        </div>
      </div>
    </div>
  `;

  // Click & keyboard activation
  function handleSelect(e) {
    e.preventDefault();
    if (onSelect) {
      onSelect(pub);
    }
  }

  card.addEventListener('click', handleSelect);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleSelect(e);
    }
  });

  return card;
}
