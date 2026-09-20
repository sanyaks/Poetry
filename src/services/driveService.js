/**
 * ============================================================================
 * DRIVE SERVICE: DATA FETCHER & ADAPTER
 * ============================================================================
 * This service abstracts how poems are loaded into the application.
 * 
 * CURRENT STATUS:
 * - By default, it seamlessly delivers the poems from `src/data/poems.js`.
 * 
 * HOW TO CONNECT GOOGLE DRIVE LATER:
 * 1. Open Google Drive, create/open your poems folder.
 * 2. Click "Extensions" -> "Apps Script" in any Google Sheet or go to script.google.com
 * 3. Paste this quick snippet:
 * 
 *    function doGet() {
 *      const folderId = "1b5V-RaJyCztLeScIL4Xqx-hJYhPqSJrq";
 *      const folder = DriveApp.getFolderById(folderId);
 *      const files = folder.getFiles();
 *      const poems = [];
 *      while (files.hasNext()) {
 *        const file = files.next();
 *        if (file.getMimeType() === "text/plain" || file.getName().endsWith(".txt") || file.getName().endsWith(".md")) {
 *          poems.push({
 *            id: file.getId(),
 *            title: file.getName().replace(/\.(txt|md)$/, ""),
 *            date: Utilities.formatDate(file.getLastUpdated(), "GMT", "MMMM yyyy").toLowerCase(),
 *            excerpt: file.getBlob().getDataAsString().slice(0, 100) + "...",
 *            content: file.getBlob().getDataAsString(),
 *            coverImage: "/images/moonlight_water.jpg"
 *          });
 *        }
 *      }
 *      return ContentService.createTextOutput(JSON.stringify(poems))
 *        .setMimeType(ContentService.MimeType.JSON);
 *    }
 * 
 * 4. Click "Deploy" -> "New deployment" -> type: "Web app", Who has access: "Anyone".
 * 5. Copy the generated Web App URL and paste it into `DRIVE_API_ENDPOINT` in `src/config.js`!
 * 
 * ============================================================================
 */

import { POEMS_DRIVE_LINK, DRIVE_API_ENDPOINT } from '../config.js';
import { INITIAL_POEMS } from '../data/poems.js';

class DriveService {
  constructor() {
    this.driveLink = POEMS_DRIVE_LINK;
    this.apiEndpoint = DRIVE_API_ENDPOINT;
    this.cachedPoems = null;
  }

  /**
   * Loads all poems.
   * If DRIVE_API_ENDPOINT is set, it attempts to fetch live poems from the Google Drive Web App.
   * Otherwise, or if network fails, it immediately falls back to the curated local archive.
   */
  async getPoems() {
    if (this.cachedPoems) {
      return this.cachedPoems;
    }

    if (this.apiEndpoint && this.apiEndpoint.trim() !== '') {
      try {
        const response = await fetch(this.apiEndpoint);
        if (response.ok) {
          const driveData = await response.json();
          if (Array.isArray(driveData) && driveData.length > 0) {
            this.cachedPoems = driveData;
            return this.cachedPoems;
          }
        }
      } catch (err) {
        console.warn('Could not fetch from Google Drive endpoint; falling back to local archive.', err);
      }
    }

    // Default: use curated local poems
    this.cachedPoems = [...INITIAL_POEMS];
    return this.cachedPoems;
  }

  /**
   * Retrieves a single poem by its ID or slug.
   */
  async getPoemById(id) {
    const poems = await this.getPoems();
    return poems.find(p => p.id === id || String(p.id) === String(id)) || null;
  }

  /**
   * Returns the current Google Drive link for reference or external opening.
   */
  getDriveFolderLink() {
    return this.driveLink;
  }
}

export const driveService = new DriveService();
