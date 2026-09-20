# sanya — personal poetry journal & archive

A minimalist, intimate, and dark-themed digital poetry journal and personal archive for Sanya.

---

## ✦ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production deployment
npm run build
```

The application will run locally at `http://localhost:5173/`.

---

## ✦ Project Structure

```
sanya-poetry-journal/
├── index.html                   # HTML entry point, typography imports, grain texture
├── package.json                 # Project configuration
├── vite.config.js               # Dev server configuration
├── public/
│   └── images/                  # Atmospheric dark-toned cover photographs
└── src/
    ├── config.js                # Google Drive configuration & author metadata
    ├── style.css                # Bespoke CSS design system & typography
    ├── main.js                  # Application coordinator & routing
    ├── services/
    │   └── driveService.js      # Data fetcher & Google Drive API adapter
    ├── data/
    │   ├── poems.js             # Initial curated collection of poems
    │   └── publications.js      # Publications archive entries
    └── components/
        ├── Navbar.js            # Desktop & mobile drawer navigation
        ├── AboutSection.js      # "why i write" section
        ├── PoemCard.js          # Literary poetry card with atmospheric cover
        ├── PoemGrid.js          # Responsive collection grid
        ├── PoemPage.js          # Dedicated reader view (~sanya signature & stanzas)
        ├── PublicationCard.js   # Literary publication card
        ├── PublicationsGrid.js  # Publications archive list
        ├── ContactSection.js    # "say hello" & mailto link
        └── Footer.js            # Subtle copyright & tagline
```

---

## ✦ How to Add / Edit Poems

Open [`src/data/poems.js`](file:///C:/Users/Thaanya/.gemini/antigravity-ide/scratch/sanya-poetry-journal/src/data/poems.js). Each poem is an object with:

```javascript
{
  id: "your-poem-slug",
  title: "title of poem",
  date: "month 2026",
  excerpt: "first one or two lines as preview...",
  coverImage: "/images/your_image.jpg",
  content: `your
poem
lines
preserved exactly
with stanzas and spaces`
}
```

> **Note**: Stanza spacing, indentation, and line breaks are strictly preserved. The `~sanya` signature is automatically rendered at the end of every poem.

---

## ✦ Google Drive Integration

In [`src/config.js`](file:///C:/Users/Thaanya/.gemini/antigravity-ide/scratch/sanya-poetry-journal/src/config.js), your Google Drive folder link is configured:

```javascript
export const POEMS_DRIVE_LINK = "https://drive.google.com/drive/folders/1b5V-RaJyCztLeScIL4Xqx-hJYhPqSJrq";
```

### How to turn your Google Drive folder into a live backend:
1. Upload your poems as `.txt` or `.md` files to your Google Drive folder.
2. Share the folder: General Access -> "Anyone with the link can view".
3. Open [script.google.com](https://script.google.com) and create a new project with the 10-line Apps Script included in [`src/services/driveService.js`](file:///C:/Users/Thaanya/.gemini/antigravity-ide/scratch/sanya-poetry-journal/src/services/driveService.js).
4. Click Deploy -> New deployment -> Web app -> Who has access: "Anyone".
5. Copy the generated Web App URL into `DRIVE_API_ENDPOINT` in `src/config.js`.

The site will automatically pull poems from Google Drive, and gracefully fallback to your local `poems.js` whenever offline.

---

## ✦ How to Add Publications

Open [`src/data/publications.js`](file:///C:/Users/Thaanya/.gemini/antigravity-ide/scratch/sanya-poetry-journal/src/data/publications.js) and add entries to `PUBLICATIONS_DATA`:

```javascript
{
  id: "publication-slug",
  workTitle: "poem title",
  publicationName: "Literary Review Name",
  issue: "Spring Issue 2026",
  year: "2026",
  description: "A short reflection on the piece...",
  link: "https://example.com/piece",
  linkLabel: "read piece"
}
```

---

## ✦ Contact Configuration

In [`src/config.js`](file:///C:/Users/Thaanya/.gemini/antigravity-ide/scratch/sanya-poetry-journal/src/config.js), you can update your email or bio details:
```javascript
export const AUTHOR = {
  name: "sanya",
  email: "sanyaaks16@gmail.com",
  tagline: "written in the spaces between everything else.",
  year: 2026,
  signature: "~sanya"
};
```
