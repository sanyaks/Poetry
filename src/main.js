import './style.css';
import { driveService } from './services/driveService.js';
import { PUBLICATIONS_DATA } from './data/publications.js';

import { createNavbar } from './components/Navbar.js';
import { createAboutSection } from './components/AboutSection.js';
import { createPoemGrid } from './components/PoemGrid.js';
import { createPoemPage } from './components/PoemPage.js';
import { createPublicationsGrid } from './components/PublicationsGrid.js';
import { createPublicationModal } from './components/PublicationModal.js';
import { createContactSection } from './components/ContactSection.js';
import { createFooter } from './components/Footer.js';

async function initApp() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // Permanent dark theme
  localStorage.removeItem('sanya_theme');
  document.documentElement.setAttribute('data-theme', 'dark');

  // Load poems from driveService (cached local or live Drive)
  const poems = await driveService.getPoems();

  // 1. Create Main Sections Container
  const mainSectionsWrapper = document.createElement('main');
  mainSectionsWrapper.id = 'mainSections';

  // 2. Instantiate Components
  const aboutSection = createAboutSection((targetPoemId) => {
    openPoemReader(targetPoemId);
  });
  
  const poemGridComp = createPoemGrid(poems, (poem) => {
    openPoemReader(poem.id);
  });

  // Dedicated Publication Viewer Modal
  const publicationModalComp = createPublicationModal();

  const publicationsSection = createPublicationsGrid(PUBLICATIONS_DATA, (pub) => {
    publicationModalComp.open(pub, PUBLICATIONS_DATA);
  });

  const contactSection = createContactSection();
  const footerComp = createFooter();

  function createDivider() {
    const line = document.createElement('div');
    line.className = 'page-division-line';
    line.setAttribute('aria-hidden', 'true');
    return line;
  }

  mainSectionsWrapper.appendChild(aboutSection);
  mainSectionsWrapper.appendChild(createDivider());
  mainSectionsWrapper.appendChild(poemGridComp.element);
  mainSectionsWrapper.appendChild(createDivider());
  mainSectionsWrapper.appendChild(publicationsSection);
  mainSectionsWrapper.appendChild(createDivider());
  mainSectionsWrapper.appendChild(contactSection);

  // 3. Instantiate Dedicated Poem Reader View with Next/Prev pager
  const poemPageComp = createPoemPage(
    () => closePoemReader(),
    (targetPoemId) => openPoemReader(targetPoemId)
  );

  // 4. Instantiate Navbar with navigation handler
  const navbarComp = createNavbar(
    (targetSection, event) => {
      if (poemPageComp.element.classList.contains('active')) {
        closePoemReader(false);
      }
      
      const targetEl = document.getElementById(targetSection);
      if (targetEl) {
        if (event) event.preventDefault();
        history.pushState(null, '', `#${targetSection}`);
        targetEl.scrollIntoView({ behavior: 'smooth' });
        navbarComp.setActive(targetSection);
      }
    }
  );

  // 5. Append everything to DOM
  appRoot.appendChild(navbarComp.element);
  appRoot.appendChild(mainSectionsWrapper);
  appRoot.appendChild(poemPageComp.element);
  appRoot.appendChild(publicationModalComp.element);
  appRoot.appendChild(footerComp);

  // Store last scroll position before opening reader
  let previousScrollY = 0;

  // Reader Open / Close Logic
  function openPoemReader(poemId, pushHistory = true) {
    const poem = poems.find(p => p.id === poemId);
    if (!poem) return;

    previousScrollY = window.scrollY;

    // Switch view visibility
    mainSectionsWrapper.style.display = 'none';
    poemPageComp.element.classList.add('active');
    poemPageComp.renderPoem(poem, poems);

    navbarComp.setActive('poems');

    if (pushHistory) {
      window.location.hash = `poem/${poem.id}`;
    }
  }

  function closePoemReader(restoreScroll = true) {
    poemPageComp.element.classList.remove('active');
    mainSectionsWrapper.style.display = 'block';

    if (restoreScroll) {
      window.scrollTo({ top: previousScrollY, behavior: 'instant' });
    }

    window.location.hash = 'poems';
    navbarComp.setActive('poems');
  }

  // Keyboard navigation: Escape key exits reader view
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && poemPageComp.element.classList.contains('active')) {
      closePoemReader();
    }
  });

  // Hash Routing handler
  function handleHashChange() {
    const hash = window.location.hash.replace(/^#/, '');

    if (hash.startsWith('poem/')) {
      const poemId = hash.replace('poem/', '');
      openPoemReader(poemId, false);
    } else if (hash.startsWith('publication/')) {
      const pubId = hash.replace('publication/', '');
      const pub = PUBLICATIONS_DATA.find(p => p.id === pubId);
      if (pub) {
        publicationModalComp.open(pub, PUBLICATIONS_DATA);
      }
    } else {
      if (poemPageComp.element.classList.contains('active')) {
        closePoemReader(false);
      }
      if (hash && document.getElementById(hash)) {
        document.getElementById(hash).scrollIntoView({ behavior: 'smooth' });
        navbarComp.setActive(hash);
      }
    }
  }

  window.addEventListener('hashchange', handleHashChange);

  // ScrollSpy for active nav link on main view
  const sections = [aboutSection, poemGridComp.element, publicationsSection, contactSection];
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    if (poemPageComp.element.classList.contains('active')) return;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbarComp.setActive(entry.target.id);
      }
    });
  }, observerOptions);

  sections.forEach(s => observer.observe(s));

  // Initial load check for hash
  if (window.location.hash) {
    handleHashChange();
  }
}

// Bootstrapping
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
