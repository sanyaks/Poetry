import heroVideoUrl from '../assets/hero_video.mp4';

/**
 * AboutSection & Editorial Hero Component
 * Perfectly replicates the reference layout:
 * - Moody blooming peonies backdrop
 * - Large multi-line editorial display title ("words / from the / quiet hours")
 * - Subtle tagline with hairline rule ("poetry & archive —")
 * - Left column: "why i write" manifesto + featured card /01 ("spring collection")
 * - Right column: Staggered featured card /08 ("autumn collection")
 */
export function createAboutSection(onSelectPoem) {
  const section = document.createElement('section');
  section.className = 'section hero-about-section';
  section.id = 'about';
  
  section.innerHTML = `
    <!-- Top Hero Banner with Background Video Atmosphere -->
    <div class="hero-backdrop-container">
      <div class="hero-video-wrap">
        <video 
          class="hero-video-bg" 
          src="${heroVideoUrl}" 
          autoplay 
          muted 
          loop 
          playsinline
          preload="auto"
        ></video>
        <div class="hero-video-vignette"></div>
      </div>

      <div class="container hero-content-wrap">
        <div class="hero-headline-block">
          <h1 class="hero-title">
            <span class="title-line">words</span>
            <span class="title-line">from the</span>
            <span class="title-line accent-serif">quiet hours</span>
          </h1>

          <div class="hero-tagline-group">
            <span class="hero-hairline"></span>
            <span class="hero-tagline-text">poetry & unspoken archive</span>
          </div>
        </div>

        <!-- Asymmetric Editorial Grid Replicating Reference UI -->
        <div class="editorial-mosaic-grid">
          <!-- Left Column: Manifesto + Card /01 -->
          <div class="mosaic-col mosaic-left">
            <div class="about-manifesto-card">
              <h2 class="manifesto-heading">why i write</h2>
              <div class="manifesto-body">
                <p>
                  poems are my escape. i write mostly to express the thoughts that stay unspoken — the feelings i don't always know how to say, the moments that linger, and the things that feel easier to put into words than to say aloud.
                </p>
                <p class="manifesto-closing">
                  writing gives those thoughts somewhere to exist.
                </p>
              </div>
            </div>

            <!-- Featured Editorial Card /01 (Spring Collection / Blue Hour Interlude) -->
            <div class="mosaic-card card-spring" id="heroFeaturedCard01" role="button" tabindex="0" aria-label="Read featured poem: blue hour interlude">
              <div class="mosaic-card-inner">
                <img 
                  src="/images/botanical_vase_01.jpg" 
                  alt="Spring collection - dark roses in ceramic vase" 
                  class="mosaic-card-image"
                  loading="lazy"
                />
                <div class="mosaic-card-num">/01</div>
                <div class="mosaic-card-caption">
                  <span class="caption-title">spring collection</span>
                  <span class="caption-line"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Staggered Card /08 (Autumn Collection / Rain Against The Pane) -->
          <div class="mosaic-col mosaic-right">
            <div class="mosaic-card card-autumn" id="heroFeaturedCard02" role="button" tabindex="0" aria-label="Read featured poem: rain against the pane">
              <div class="mosaic-card-inner">
                <img 
                  src="/images/botanical_twigs_02.jpg" 
                  alt="Autumn collection - magnolia branches in dark vase" 
                  class="mosaic-card-image"
                  loading="lazy"
                />
                <div class="mosaic-card-num">/08</div>
                <div class="mosaic-card-caption">
                  <span class="caption-title">autumn collection</span>
                  <span class="caption-line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach click listeners for featured cards to open reader
  const card01 = section.querySelector('#heroFeaturedCard01');
  const card02 = section.querySelector('#heroFeaturedCard02');

  function bindCardAction(el, poemId) {
    if (!el) return;
    el.addEventListener('click', () => {
      if (onSelectPoem) onSelectPoem(poemId);
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (onSelectPoem) onSelectPoem(poemId);
      }
    });
  }

  bindCardAction(card01, 'blue-hour-interlude');
  bindCardAction(card02, 'rain-against-the-pane');

  // Programmatically trigger autoplay for background video
  const videoEl = section.querySelector('.hero-video-bg');
  if (videoEl) {
    videoEl.muted = true;
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Retry when user interacts or when video data loads
        videoEl.addEventListener('loadeddata', () => videoEl.play().catch(() => {}), { once: true });
      });
    }
  }

  return section;
}
