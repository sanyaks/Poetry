/**
 * Navbar Component
 * Desktop: sanya | about | my poems | publications | contact + theme toggle (☀ paper / ☾ night)
 * Mobile: clean minimalist hamburger overlay
 */
export function createNavbar(onNavigate) {
  const nav = document.createElement('header');
  nav.className = 'site-nav';

  nav.innerHTML = `
    <div class="container nav-inner">
      <div class="nav-brand-group">
        <a href="#about" class="nav-brand" data-nav="about">
          <span class="brand-text">sanya ks</span>
        </a>
        <span class="nav-brand-subtitle">poetry & archive</span>
      </div>
      
      <div class="nav-actions">
        <nav aria-label="Main Navigation">
          <ul class="nav-links">
            <li><a href="#about" class="nav-link active" data-nav="about">about</a></li>
            <li class="nav-separator">/</li>
            <li><a href="#poems" class="nav-link" data-nav="poems">my poems</a></li>
            <li class="nav-separator">/</li>
            <li><a href="#publications" class="nav-link" data-nav="publications">publications</a></li>
            <li class="nav-separator">/</li>
            <li><a href="#contact" class="nav-link" data-nav="contact">contact</a></li>
          </ul>
        </nav>

        <button class="nav-toggle" aria-label="Toggle Menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  // Mobile Drawer Overlay
  const mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'mobile-nav-overlay';
  mobileOverlay.id = 'mobileMenu';
  mobileOverlay.innerHTML = `
    <a href="#about" class="mobile-nav-link" data-nav="about">about</a>
    <a href="#poems" class="mobile-nav-link" data-nav="poems">my poems</a>
    <a href="#publications" class="mobile-nav-link" data-nav="publications">publications</a>
    <a href="#contact" class="mobile-nav-link" data-nav="contact">contact</a>
  `;
  document.body.appendChild(mobileOverlay);

  // Attach event handlers
  const toggleBtn = nav.querySelector('.nav-toggle');

  const allNavLinks = [
    ...nav.querySelectorAll('[data-nav]'),
    ...mobileOverlay.querySelectorAll('[data-nav]')
  ];

  function toggleMenu(open) {
    const shouldOpen = open !== undefined ? open : !mobileOverlay.classList.contains('open');
    mobileOverlay.classList.toggle('open', shouldOpen);
    toggleBtn.classList.toggle('open', shouldOpen);
    toggleBtn.setAttribute('aria-expanded', String(shouldOpen));
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('data-nav');
      toggleMenu(false);
      if (onNavigate) {
        onNavigate(target, e);
      }
    });
  });

  return {
    element: nav,
    setActive(sectionId) {
      allNavLinks.forEach(l => {
        if (l.getAttribute('data-nav') === sectionId) {
          l.classList.add('active');
        } else {
          l.classList.remove('active');
        }
      });
    }
  };
}
