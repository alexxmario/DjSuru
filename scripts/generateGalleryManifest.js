'use strict';

const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery');
const OUTPUT_FILE = path.join(GALLERY_DIR, 'gallery-manifest.json');

const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']);
const EXCLUDED_FILES = new Set(['banner-gallery.jpeg']);

const buildManifest = () => {
  try {
    const entries = fs.readdirSync(GALLERY_DIR, { withFileTypes: true });

    const images = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => ALLOWED_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .filter((name) => !EXCLUDED_FILES.has(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(images, null, 2)}\n`, 'utf8');
    console.log(`Gallery manifest updated with ${images.length} entries.`);
  } catch (error) {
    console.error('Failed to generate gallery manifest:', error);
    process.exitCode = 1;
  }
};

buildManifest();
