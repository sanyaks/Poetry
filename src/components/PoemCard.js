/**
 * PoemCard Component
 * Renders an individual poem card styled like a page from a poetry collection.
 */
export function createPoemCard(poem, onSelect) {
  const card = document.createElement('article');
  card.className = 'poem-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Read poem: ${poem.title}`);

  const coverSrc = poem.coverImage || '/images/botanical_vase_01.jpg';
  const numBadge = poem.number ? `/${poem.number}` : '/01';
  const collectionLabel = poem.collection || 'unspoken collection';

  card.innerHTML = `
    <div class="poem-card-image-wrap">
      <img 
        src="${coverSrc}" 
        alt="${poem.title} cover atmosphere" 
        class="poem-card-image"
        loading="lazy"
      />
      <div class="poem-card-overlay"></div>
      <span class="poem-card-num">${numBadge}</span>
      <div class="poem-card-collection-tag">
        <span class="collection-name">${collectionLabel}</span>
        <span class="collection-line"></span>
      </div>
    </div>
    <div class="poem-card-body">
      <div class="poem-card-meta">
        <span class="poem-card-date">${poem.date || ''}</span>
        ${poem.tag ? `<span class="poem-card-tag-pill">${poem.tag}</span>` : ''}
      </div>
      <h3 class="poem-card-title">${poem.title}</h3>
      <p class="poem-card-excerpt">${poem.excerpt || ''}</p>
      <div class="poem-card-footer">
        <span class="read-prompt">
          <span>read poem</span>
          <span class="read-arrow">&rarr;</span>
        </span>
        ${poem.readingTime ? `<span class="poem-reading-time">${poem.readingTime}</span>` : ''}
      </div>
    </div>
  `;

  function handleTrigger() {
    if (onSelect) {
      onSelect(poem);
    }
  }

  card.addEventListener('click', handleTrigger);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTrigger();
    }
  });

  return card;
}
