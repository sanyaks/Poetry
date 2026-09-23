import { createPoemCard } from './PoemCard.js';

/**
 * PoemGrid Component
 * Renders the "my poems" section, category filter bar, and responsive grid of collection cards.
 */
export function createPoemGrid(poems, onSelectPoem) {
  const section = document.createElement('section');
  section.className = 'section poems-section';
  section.id = 'poems';

  // Calculate counts per collection
  const counts = {
    'all': poems.length,
    'love & longing': 0,
    'heartbreak & memory': 0,
    'reflections & shadows': 0,
    'celestial & night': 0
  };

  poems.forEach(p => {
    if (counts[p.collection] !== undefined) {
      counts[p.collection]++;
    }
  });

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-label-group">
          <span class="section-hairline"></span>
          <span class="section-label">collection archive</span>
        </div>
        <h2 class="section-title">my poems</h2>
        <p class="section-subtitle">a collection of some of my favs (${poems.length} poems)</p>
      </div>

      <!-- Thematic Category Filter Bar -->
      <div class="poem-filter-bar" role="tablist" aria-label="Poem category filters">
        <button class="filter-pill active" data-filter="all" role="tab" aria-selected="true">
          all <span class="filter-count">${counts['all']}</span>
        </button>
        <button class="filter-pill" data-filter="love & longing" role="tab" aria-selected="false">
          love & longing <span class="filter-count">${counts['love & longing']}</span>
        </button>
        <button class="filter-pill" data-filter="heartbreak & memory" role="tab" aria-selected="false">
          heartbreak & memory <span class="filter-count">${counts['heartbreak & memory']}</span>
        </button>
        <button class="filter-pill" data-filter="reflections & shadows" role="tab" aria-selected="false">
          reflections & shadows <span class="filter-count">${counts['reflections & shadows']}</span>
        </button>
        <button class="filter-pill" data-filter="celestial & night" role="tab" aria-selected="false">
          celestial & night <span class="filter-count">${counts['celestial & night']}</span>
        </button>
      </div>

      <div class="poems-grid" id="poemsGridContainer"></div>
    </div>
  `;

  const gridContainer = section.querySelector('#poemsGridContainer');
  const filterPills = section.querySelectorAll('.filter-pill');

  let activeFilter = 'all';

  function renderGrid(filterCategory) {
    activeFilter = filterCategory;
    gridContainer.innerHTML = '';
    
    const filtered = filterCategory === 'all'
      ? poems
      : poems.filter(p => p.collection === filterCategory);

    filtered.forEach(poem => {
      const card = createPoemCard(poem, onSelectPoem);
      gridContainer.appendChild(card);
    });
  }

  // Initial render with all poems
  renderGrid('all');

  // Filter click handlers
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      
      const category = pill.getAttribute('data-filter');
      renderGrid(category);
    });
  });

  return {
    element: section,
    updatePoems(newPoems) {
      poems = newPoems;
      renderGrid(activeFilter);
    }
  };
}
