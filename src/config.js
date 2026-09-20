/**
 * ============================================================================
 * SANYA'S POETRY JOURNAL - CONFIGURATION
 * ============================================================================
 * 
 * 1. GOOGLE DRIVE INTEGRATION:
 *    When you are ready to load your poems directly from Google Drive:
 *    - Upload your poem files (markdown .md or text .txt files) to a Google Drive folder.
 *    - Right-click the folder in Google Drive -> Share -> change General Access to:
 *      "Anyone with the link" as "Viewer".
 *    - Paste the folder URL into POEMS_DRIVE_LINK below.
 * 
 * 2. CONNECTING TO FRONTEND:
 *    Because client-side browsers cannot directly query Google Drive folders without
 *    exposing private OAuth credentials, you have two simple zero-cost options:
 *    
 *    Option A (Recommended - Google Apps Script):
 *      Deploy a simple 10-line Google Apps Script on your Drive folder that outputs
 *      JSON with your poems list, and set DRIVE_API_ENDPOINT below.
 *      See `src/services/driveService.js` for the ready-to-use script template!
 * 
 *    Option B (Local Archive):
 *      Until you connect Drive, the site seamlessly reads from `src/data/poems.js`.
 *      You can edit, add, or remove poems directly in that file anytime.
 * ============================================================================
 */

// Paste your Google Drive folder link here:
export const POEMS_DRIVE_LINK = "https://drive.google.com/drive/folders/1b5V-RaJyCztLeScIL4Xqx-hJYhPqSJrq";

// (Optional) If you deploy a Google Apps Script or backend API endpoint to serve your Drive poems:
export const DRIVE_API_ENDPOINT = ""; // e.g. "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"

// Author & Site metadata
export const AUTHOR = {
  name: "sanya ks",
  email: "sanyaaks16@gmail.com",
  tagline: "written in the spaces between everything else.",
  year: 2026,
  signature: "~sanya ks"
};
