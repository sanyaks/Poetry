import { AUTHOR } from '../config.js';

/**
 * ContactSection Component
 * Minimalist contact section:
 * - Heading: "say hello"
 * - Text: "if you'd like to reach out, talk about writing, or simply share something you've read here, i'd love to hear from you."
 * - Clickable mailto: email link: sanyaaks16@gmail.com
 */
export function createContactSection() {
  const section = document.createElement('section');
  section.className = 'section contact-section';
  section.id = 'contact';

  section.innerHTML = `
    <div class="container">
      <div class="contact-content-card">
        <div class="contact-label-group">
          <span class="contact-hairline"></span>
          <span class="contact-label">get in touch</span>
        </div>
        <h2 class="contact-heading">say hello</h2>
        <p class="contact-text">
          if you'd like to reach out, talk about writing, or simply share something you've read here, i'd love to hear from you.
        </p>
        <div class="contact-action-wrap">
          <a href="mailto:${AUTHOR.email}" class="contact-email-link" aria-label="Send email to Sanya KS">
            <span class="email-text">${AUTHOR.email}</span>
            <span class="email-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  `;

  return section;
}
