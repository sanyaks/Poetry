/**
 * PublicationCard Component
 * Literary archive card for published writing.
 */
export function createPublicationCard(pub) {
  const card = document.createElement('article');
  card.className = 'publication-card';

  card.innerHTML = `
    <div class="pub-top-meta">
      <span class="pub-folio">folio / ${pub.year}</span>
      ${pub.issue ? `<span class="pub-source-issue">${pub.issue}</span>` : ''}
    </div>

    <h3 class="pub-work-title">“${pub.workTitle}”</h3>

    <div class="pub-source">
      <span class="pub-journal">${pub.publicationName}</span>
    </div>

    <p class="pub-description">${pub.description || ''}</p>

    <div class="pub-action">
      <a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="pub-link">
        <span>${pub.linkLabel || 'view publication'}</span>
        <span class="pub-link-arrow">&rarr;</span>
      </a>
    </div>
  `;

  return card;
}
