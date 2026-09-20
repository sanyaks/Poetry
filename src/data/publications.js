/**
 * ============================================================================
 * SANYA'S PUBLICATIONS - ARCHIVE DATA
 * ============================================================================
 * This file contains entries for poems and prose that have been published in
 * literary magazines, anthologies, journals, or online presses.
 * 
 * You can easily edit these entries or add new ones by duplicating the structure:
 * {
 *   id: "unique-slug",
 *   workTitle: "Title of your poem or piece",
 *   publicationName: "Literary Journal or Magazine Name",
 *   issue: "Issue No. / Volume (optional)",
 *   year: "2025",
 *   coverImage: "/images/your_cover.jpg", // optional
 *   description: "A short reflective note on the piece or theme...",
 *   link: "https://..." // external link to read or view publication
 * }
 * ============================================================================
 */

export const PUBLICATIONS_DATA = [
  {
    id: "apothecary-journal-2025",
    workTitle: "the anatomy of quiet rooms",
    publicationName: "The Midnight Quill Review",
    issue: "Autumn Issue No. 14",
    year: "2025",
    coverImage: "/images/handwritten_desk.jpg",
    description: "A three-part sequence exploring domestic silence, forgotten letters, and the weight of evening shadows across an empty room.",
    link: "https://example.com/midnight-quill/autumn-2025",
    linkLabel: "read in the review"
  },
  {
    id: "nocturne-anthology-2025",
    workTitle: "geography of a hesitant breath",
    publicationName: "Nocturne Literary Journal",
    issue: "Winter Folio",
    year: "2025",
    coverImage: "/images/moonlight_water.jpg",
    description: "Selected for the annual emerging voices poetry chapbook anthology exploring distance, nocturnal transit, and quiet yearning.",
    link: "https://example.com/nocturne-winter-folio",
    linkLabel: "view publication"
  },
  {
    id: "driftwood-press-2024",
    workTitle: "salt & lingering smoke",
    publicationName: "Drift & Echo Quarterly",
    issue: "Issue 08",
    year: "2024",
    coverImage: "/images/dark_ocean.jpg",
    description: "Meditations composed during late train commutes along coastal lines, meditating on memory, erasure, and things left unsaid.",
    link: "https://example.com/drift-and-echo-08",
    linkLabel: "archive copy"
  }
];
