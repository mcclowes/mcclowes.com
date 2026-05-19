/**
 * Hand-drawn drop-cap artwork.
 *
 * Each letter maps to one or more variants. `width`/`height` are the
 * artwork's intrinsic pixel dimensions — a masked element has no
 * intrinsic size, so these drive the rendered aspect ratio.
 *
 * To add a letter: drop the SVG in `static/img/drop-caps/` and add an
 * entry here with its `width`/`height` (from the SVG's root attributes).
 *
 * Exported via CommonJS so the build-time `latest-blog-plugin` can share
 * this registry; webpack's interop still resolves the default import.
 */
const dropCaps = {
  A: [
    { src: '/img/drop-caps/a-1.svg', width: 209, height: 200 },
    { src: '/img/drop-caps/a-2.svg', width: 82, height: 105 },
  ],
  E: [{ src: '/img/drop-caps/e-1.svg', width: 100, height: 165 }],
  I: [{ src: '/img/drop-caps/i-1.svg', width: 102, height: 218 }],
  R: [{ src: '/img/drop-caps/r-1.svg', width: 90, height: 116 }],
};

module.exports = dropCaps;
