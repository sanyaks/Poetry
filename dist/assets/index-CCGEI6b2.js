(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const P="https://drive.google.com/drive/folders/1b5V-RaJyCztLeScIL4Xqx-hJYhPqSJrq",q="",k={name:"sanya ks",email:"sanyaaks16@gmail.com",tagline:"written in the spaces between everything else.",year:2026},A=[{id:"blue-hour-interlude",number:"01",collection:"night collection",title:"blue hour interlude",date:"november 2025",tag:"solitude",readingTime:"1 min read",excerpt:"the sky forgets its afternoon weight, turning the color of wet slate...",coverImage:"/images/botanical_vase_01.jpg",content:`the sky forgets its afternoon weight,
turning the color of wet slate
and unspoken things.

i watch the streetlight hum outside the window,
a lone filament vibrating
against the cold.

there is a strange mercy in the dark:
it asks nothing of you,
not your name,
nor the promises you could not keep.

only this:
that you breathe in
what the day left behind.`},{id:"rain-against-the-pane",number:"02",collection:"autumn collection",title:"rain against the pane",date:"january 2026",tag:"rain & silence",readingTime:"1 min read",excerpt:"some sounds don't ask to be deciphered, they only ask to be heard...",coverImage:"/images/botanical_twigs_02.jpg",content:`some sounds don't ask to be deciphered,
they only ask to be heard.

a drop hesitates on the glass,
trembling at the edge of gravity
before choosing
to fall into another.

i wonder how many conversations
are just two people
waiting for the other to gather courage.

the water pools along the sill.
the room stays dark.
the night continues without our permission.`},{id:"unspoken-margins",number:"03",collection:"margins folio",title:"unspoken margins",date:"august 2025",tag:"ink & memory",readingTime:"1 min read",excerpt:"we write in the margins because the center was never meant for honesty...",coverImage:"/images/botanical_peony_03.jpg",content:`we write in the margins
because the center was never meant for honesty.

the text marches on in straight, disciplined lines,
black ink on sterile white,
stating what is required,
what has been proved,
what can be graded.

and yet,
in the faint pencil scribbles along the side,
there is the real record:

the hour the rain began,
the name i could not say in daylight,
and the quiet certainty
that we are all softer
than the world allows us to be.`},{id:"3am-and-the-empty-avenue",number:"04",collection:"nocturne sequence",title:"3am and the empty avenue",date:"february 2026",tag:"late night",readingTime:"1 min read",excerpt:"traffic lights blink yellow into empty crosswalks, rhythmic and unwatched...",coverImage:"/images/botanical_rose_04.jpg",content:`traffic lights blink yellow into empty crosswalks,
rhythmic and unwatched.

the city is breathing in its sleep,
and all its sharp corners
have dissolved into mist.

at three in the morning,
no one is pretending.
no one is holding their shoulders back
or wearing their armor.

you can walk down the center of the asphalt
and believe, if only for ten steps,
that the universe is holding its breath
just to let you pass.`},{id:"tide-lines",number:"05",collection:"shoreline folio",title:"tide lines",date:"may 2025",tag:"the shore",readingTime:"1 min read",excerpt:"the shoreline remembers every wave, but holds onto none of them...",coverImage:"/images/dark_ocean.jpg",content:`the shoreline remembers every wave,
but holds onto none of them.

it accepts the cold salt,
the foam that sparkles and dies in seconds,
the driftwood pulled from a distant coast.

and then it lets it go.

i think of how hard i hold
every sentence ever spoken to me in the dark.
how i keep every glance like a stone
weighing down my pockets.

perhaps peace is not an arrival,
but the tide
learning how to withdraw
without feeling empty.`},{id:"dried-lavender-and-shadows",number:"06",collection:"quiet archives",title:"dried lavender & shadows",date:"december 2025",tag:"quiet archives",readingTime:"1 min read",excerpt:"fragile things outlast the hands that picked them...",coverImage:"/images/wildflowers_dusk.jpg",content:`fragile things outlast the hands
that picked them.

taped to the charcoal wall,
the stem hangs upside down,
retaining its scent
long after the summer forgot its name.

we are shaped by what we refuse to discard:
the ticket stub from the night it poured,
the book with the folded corner on page sixty-four,
the silence after goodnight.

time takes the color first,
then the moisture,
leaving behind only the silhouette
and the ache.`}];class ${constructor(){this.driveLink=P,this.apiEndpoint=q,this.cachedPoems=null}async getPoems(){if(this.cachedPoems)return this.cachedPoems;if(this.apiEndpoint&&this.apiEndpoint.trim()!=="")try{const a=await fetch(this.apiEndpoint);if(a.ok){const e=await a.json();if(Array.isArray(e)&&e.length>0)return this.cachedPoems=e,this.cachedPoems}}catch(a){console.warn("Could not fetch from Google Drive endpoint; falling back to local archive.",a)}return this.cachedPoems=[...A],this.cachedPoems}async getPoemById(a){return(await this.getPoems()).find(o=>o.id===a||String(o.id)===String(a))||null}getDriveFolderLink(){return this.driveLink}}const N=new $,B=[{id:"apothecary-journal-2025",workTitle:"the anatomy of quiet rooms",publicationName:"The Midnight Quill Review",issue:"Autumn Issue No. 14",year:"2025",coverImage:"/images/handwritten_desk.jpg",description:"A three-part sequence exploring domestic silence, forgotten letters, and the weight of evening shadows across an empty room.",link:"https://example.com/midnight-quill/autumn-2025",linkLabel:"read in the review"},{id:"nocturne-anthology-2025",workTitle:"geography of a hesitant breath",publicationName:"Nocturne Literary Journal",issue:"Winter Folio",year:"2025",coverImage:"/images/moonlight_water.jpg",description:"Selected for the annual emerging voices poetry chapbook anthology exploring distance, nocturnal transit, and quiet yearning.",link:"https://example.com/nocturne-winter-folio",linkLabel:"view publication"},{id:"driftwood-press-2024",workTitle:"salt & lingering smoke",publicationName:"Drift & Echo Quarterly",issue:"Issue 08",year:"2024",coverImage:"/images/dark_ocean.jpg",description:"Meditations composed during late train commutes along coastal lines, meditating on memory, erasure, and things left unsaid.",link:"https://example.com/drift-and-echo-08",linkLabel:"archive copy"}];function _(t){const a=document.createElement("header");a.className="site-nav",a.innerHTML=`
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
  `;const e=document.createElement("div");e.className="mobile-nav-overlay",e.id="mobileMenu",e.innerHTML=`
    <a href="#about" class="mobile-nav-link" data-nav="about">about</a>
    <a href="#poems" class="mobile-nav-link" data-nav="poems">my poems</a>
    <a href="#publications" class="mobile-nav-link" data-nav="publications">publications</a>
    <a href="#contact" class="mobile-nav-link" data-nav="contact">contact</a>
  `,document.body.appendChild(e);const o=a.querySelector(".nav-toggle"),n=[...a.querySelectorAll("[data-nav]"),...e.querySelectorAll("[data-nav]")];function s(r){const c=r!==void 0?r:!e.classList.contains("open");e.classList.toggle("open",c),o.classList.toggle("open",c),o.setAttribute("aria-expanded",String(c)),document.body.style.overflow=c?"hidden":""}return o.addEventListener("click",()=>s()),n.forEach(r=>{r.addEventListener("click",c=>{const u=r.getAttribute("data-nav");s(!1),t&&t(u,c)})}),{element:a,setActive(r){n.forEach(c=>{c.getAttribute("data-nav")===r?c.classList.add("active"):c.classList.remove("active")})}}}const M="/assets/hero_video-Besh8ykW.mp4";function D(t){const a=document.createElement("section");a.className="section hero-about-section",a.id="about",a.innerHTML=`
    <!-- Top Hero Banner with Background Video Atmosphere -->
    <div class="hero-backdrop-container">
      <div class="hero-video-wrap">
        <video 
          class="hero-video-bg" 
          src="${M}" 
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
                  poems are my escape. i write mostly to express the thoughts that stay unspoken, the feelings i don't always know how to say, the moments that linger, and the things that feel easier to put into words than to say aloud.
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
  `;const e=a.querySelector("#heroFeaturedCard01"),o=a.querySelector("#heroFeaturedCard02");function n(r,c){r&&(r.addEventListener("click",()=>{t&&t(c)}),r.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),t&&t(c))}))}n(e,"blue-hour-interlude"),n(o,"rain-against-the-pane");const s=a.querySelector(".hero-video-bg");if(s){s.muted=!0;const r=s.play();r!==void 0&&r.catch(()=>{s.addEventListener("loadeddata",()=>s.play().catch(()=>{}),{once:!0})})}return a}function T(t,a){const e=document.createElement("article");e.className="poem-card",e.setAttribute("tabindex","0"),e.setAttribute("role","button"),e.setAttribute("aria-label",`Read poem: ${t.title}`);const o=t.coverImage||"/images/botanical_vase_01.jpg",n=t.number?`/${t.number}`:"/01",s=t.collection||"unspoken collection";e.innerHTML=`
    <div class="poem-card-image-wrap">
      <img 
        src="${o}" 
        alt="${t.title} cover atmosphere" 
        class="poem-card-image"
        loading="lazy"
      />
      <div class="poem-card-overlay"></div>
      <span class="poem-card-num">${n}</span>
      <div class="poem-card-collection-tag">
        <span class="collection-name">${s}</span>
        <span class="collection-line"></span>
      </div>
    </div>
    <div class="poem-card-body">
      <div class="poem-card-meta">
        <span class="poem-card-date">${t.date||""}</span>
        ${t.tag?`<span class="poem-card-tag-pill">${t.tag}</span>`:""}
      </div>
      <h3 class="poem-card-title">${t.title}</h3>
      <p class="poem-card-excerpt">${t.excerpt||""}</p>
      <div class="poem-card-footer">
        <span class="read-prompt">
          <span>read poem</span>
          <span class="read-arrow">&rarr;</span>
        </span>
        ${t.readingTime?`<span class="poem-reading-time">${t.readingTime}</span>`:""}
      </div>
    </div>
  `;function r(){a&&a(t)}return e.addEventListener("click",r),e.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),r())}),e}function j(t,a){const e=document.createElement("section");e.className="section poems-section",e.id="poems",e.innerHTML=`
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
  `;const o=e.querySelector("#poemsGridContainer");return t.forEach(n=>{const s=T(n,a);o.appendChild(s)}),{element:e,updatePoems(n){o.innerHTML="",n.forEach(s=>{o.appendChild(T(s,a))})}}}function F(t,a){const e=document.createElement("div");e.className="poem-reading-view",e.id="poemReadingView";let o=1.4,n=null;e.innerHTML=`
    <div class="reader-container">
      <div class="reader-controls-bar">
        <button class="reader-back-btn" id="readerBackBtn" aria-label="Return to all poems">
          &larr; all poems
        </button>

        <div class="reader-tools">
          <button class="reader-tool-btn" id="decreaseFontBtn" title="Decrease font size">A-</button>
          <button class="reader-tool-btn" id="increaseFontBtn" title="Increase font size">A+</button>
          <button class="reader-tool-btn" id="copyPoemBtn" title="Copy poem text">copy poem</button>
        </div>
      </div>

      <article class="reader-card">
        <header class="reader-header">
          <div class="reader-header-top">
            <span class="reader-collection-label" id="readerCollectionLabel">archive —</span>
            <span class="reader-folio-num" id="readerFolioNum">/01</span>
          </div>
          <div class="reader-meta-group">
            <span class="reader-meta-date" id="readerDate"></span>
            <span class="reader-meta-tag" id="readerTag" style="display: none;"></span>
          </div>
          <h1 class="reader-title" id="readerTitle"></h1>
        </header>

        <div class="reader-cover-wrap" id="readerCoverWrap" style="display: none;">
          <img id="readerCoverImg" src="" alt="" class="reader-cover-img" />
        </div>

        <div class="reader-poem-body" id="readerPoemBody"></div>

        <div class="reader-signature">~sanya ks</div>

        <nav class="reader-pager" aria-label="Poem pagination">
          <button class="reader-pager-link prev" id="readerPrevPoem" style="display: none;">
            <span class="reader-pager-sub">&larr; previous</span>
            <span class="reader-pager-title" id="readerPrevTitle"></span>
          </button>
          <div style="flex-grow: 1;"></div>
          <button class="reader-pager-link next" id="readerNextPoem" style="display: none;">
            <span class="reader-pager-sub">next &rarr;</span>
            <span class="reader-pager-title" id="readerNextTitle"></span>
          </button>
        </nav>
      </article>
    </div>
  `;const s=e.querySelector("#readerBackBtn"),r=e.querySelector("#readerFolioNum"),c=e.querySelector("#readerCollectionLabel"),u=e.querySelector("#readerDate"),h=e.querySelector("#readerTag"),m=e.querySelector("#readerTitle"),g=e.querySelector("#readerPoemBody"),y=e.querySelector("#readerCoverWrap"),f=e.querySelector("#readerCoverImg"),C=e.querySelector("#decreaseFontBtn"),x=e.querySelector("#increaseFontBtn"),S=e.querySelector("#copyPoemBtn"),w=e.querySelector("#readerPrevPoem"),i=e.querySelector("#readerPrevTitle"),p=e.querySelector("#readerNextPoem"),v=e.querySelector("#readerNextTitle");C.addEventListener("click",()=>{o>1.1&&(o-=.15,g.style.fontSize=`${o}rem`)}),x.addEventListener("click",()=>{o<2&&(o+=.15,g.style.fontSize=`${o}rem`)}),S.addEventListener("click",()=>{if(!n)return;const l=`"${n.title}"

${n.content}

~sanya ks`;navigator.clipboard.writeText(l).then(()=>{L("poem copied to clipboard")}).catch(()=>{L("poem copied")})});function L(l){let d=document.querySelector(".toast-msg");d||(d=document.createElement("div"),d.className="toast-msg",document.body.appendChild(d)),d.textContent=l,d.classList.add("show"),setTimeout(()=>{d.classList.remove("show")},2400)}return s.addEventListener("click",l=>{l.preventDefault(),t&&t()}),{element:e,renderPoem(l,d=[]){if(n=l,m.textContent=l.title,u.textContent=l.date||"",r.textContent=l.number?`/${l.number}`:"/01",c.textContent=l.collection?`${l.collection} —`:"archive —",l.tag?(h.textContent=`✦ ${l.tag}`,h.style.display="inline-block"):h.style.display="none",l.coverImage?(f.src=l.coverImage,f.alt=l.title,y.style.display="block"):y.style.display="none",g.textContent=l.content,g.style.fontSize=`${o}rem`,d&&d.length>0){const E=d.findIndex(b=>b.id===l.id);if(E>0){const b=d[E-1];i.textContent=b.title,w.style.display="inline-flex",w.onclick=()=>a&&a(b.id)}else w.style.display="none";if(E<d.length-1){const b=d[E+1];v.textContent=b.title,p.style.display="inline-flex",p.onclick=()=>a&&a(b.id)}else p.style.display="none"}window.scrollTo({top:0,behavior:"smooth"})}}}function R(t){const a=document.createElement("article");return a.className="publication-card",a.innerHTML=`
    <div class="pub-top-meta">
      <span class="pub-folio">folio / ${t.year}</span>
      ${t.issue?`<span class="pub-source-issue">${t.issue}</span>`:""}
    </div>

    <h3 class="pub-work-title">“${t.workTitle}”</h3>

    <div class="pub-source">
      <span class="pub-journal">${t.publicationName}</span>
    </div>

    <p class="pub-description">${t.description||""}</p>

    <div class="pub-action">
      <a href="${t.link}" target="_blank" rel="noopener noreferrer" class="pub-link">
        <span>${t.linkLabel||"view publication"}</span>
        <span class="pub-link-arrow">&rarr;</span>
      </a>
    </div>
  `,a}function O(t){const a=document.createElement("section");a.className="section publications-section",a.id="publications",a.innerHTML=`
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
  `;const e=a.querySelector("#publicationsGridContainer");return t.forEach(o=>{const n=R(o);e.appendChild(n)}),a}function H(){const t=document.createElement("section");return t.className="section contact-section",t.id="contact",t.innerHTML=`
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
          <a href="mailto:${k.email}" class="contact-email-link" aria-label="Send email to Sanya KS">
            <span class="email-text">${k.email}</span>
            <span class="email-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  `,t}function z(){const t=document.createElement("footer");return t.className="site-footer",t.innerHTML=`
    <div class="container">
      <div class="footer-content">
        <p class="footer-copy">&copy; ${k.year} ${k.name}</p>
        <p class="footer-tagline">${k.tagline}</p>
      </div>
    </div>
  `,t}async function I(){const t=document.getElementById("app");if(!t)return;localStorage.removeItem("sanya_theme"),document.documentElement.setAttribute("data-theme","dark");const a=await N.getPoems(),e=document.createElement("main");e.id="mainSections";const o=D(i=>{y(i)}),n=j(a,i=>{y(i.id)}),s=O(B),r=H(),c=z();function u(){const i=document.createElement("div");return i.className="page-division-line",i.setAttribute("aria-hidden","true"),i}e.appendChild(o),e.appendChild(u()),e.appendChild(n.element),e.appendChild(u()),e.appendChild(s),e.appendChild(u()),e.appendChild(r);const h=F(()=>f(),i=>y(i)),m=_((i,p)=>{h.element.classList.contains("active")&&f(!1);const v=document.getElementById(i);v&&(p&&p.preventDefault(),history.pushState(null,"",`#${i}`),v.scrollIntoView({behavior:"smooth"}),m.setActive(i))});t.appendChild(m.element),t.appendChild(e),t.appendChild(h.element),t.appendChild(c);let g=0;function y(i,p=!0){const v=a.find(L=>L.id===i);v&&(g=window.scrollY,e.style.display="none",h.element.classList.add("active"),h.renderPoem(v,a),m.setActive("poems"),p&&(window.location.hash=`poem/${v.id}`))}function f(i=!0){h.element.classList.remove("active"),e.style.display="block",i&&window.scrollTo({top:g,behavior:"instant"}),window.location.hash="poems",m.setActive("poems")}window.addEventListener("keydown",i=>{i.key==="Escape"&&h.element.classList.contains("active")&&f()});function C(){const i=window.location.hash.replace(/^#/,"");if(i.startsWith("poem/")){const p=i.replace("poem/","");y(p,!1)}else h.element.classList.contains("active")&&f(!1),i&&document.getElementById(i)&&(document.getElementById(i).scrollIntoView({behavior:"smooth"}),m.setActive(i))}window.addEventListener("hashchange",C);const x=[o,n.element,s,r],S={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},w=new IntersectionObserver(i=>{h.element.classList.contains("active")||i.forEach(p=>{p.isIntersecting&&m.setActive(p.target.id)})},S);x.forEach(i=>w.observe(i)),window.location.hash&&C()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",I):I();
