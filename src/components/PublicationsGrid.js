import { createPublicationCard } from './PublicationCard.js';

/**
 * PublicationsGrid Component
 * Renders the "my publications" archive section.
 */
export function createPublicationsGrid(publications) {
  const section = document.createElement('section');
  section.className = 'section publications-section';
  section.id = 'publications';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-label-group">
          <span class="section-hairline"></span>
          <span class="section-label">published works</span>
        </div>
        <h2 class="section-title">my publications</h2>
        <p class="section-subtitle">pieces published in literary reviews, journals, and collections</p>
      </div>

      <div class="publications-grid" id="publicationsGridContainer"></div>
    </div>
  `;

  const gridContainer = section.querySelector('#publicationsGridContainer');

  publications.forEach(pub => {
    const card = createPublicationCard(pub);
    gridContainer.appendChild(card);
  });

  return section;
}
