import { createPoemCard } from './PoemCard.js';

/**
 * PoemGrid Component
 * Renders the "my poems" section and responsive grid of collection cards.
 */
export function createPoemGrid(poems, onSelectPoem) {
  const section = document.createElement('section');
  section.className = 'section poems-section';
  section.id = 'poems';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-label-group">
          <span class="section-hairline"></span>
          <span class="section-label">collection archive</span>
        </div>
        <h2 class="section-title">my poems</h2>
        <p class="section-subtitle">fragments, late nights, and the things that stay unspoken</p>
      </div>

      <div class="poems-grid" id="poemsGridContainer"></div>
    </div>
  `;

  const gridContainer = section.querySelector('#poemsGridContainer');

  poems.forEach(poem => {
    const card = createPoemCard(poem, onSelectPoem);
    gridContainer.appendChild(card);
  });

  return {
    element: section,
    updatePoems(newPoems) {
      gridContainer.innerHTML = '';
      newPoems.forEach(p => {
        gridContainer.appendChild(createPoemCard(p, onSelectPoem));
      });
    }
  };
}
