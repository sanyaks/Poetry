import { AUTHOR } from '../config.js';

/**
 * Footer Component
 * Minimal subtle footer:
 * © 2026 sanya
 * written in the spaces between everything else.
 */
export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <p class="footer-copy">&copy; ${AUTHOR.year} ${AUTHOR.name}</p>
        <p class="footer-tagline">${AUTHOR.tagline}</p>
      </div>
    </div>
  `;

  return footer;
}
