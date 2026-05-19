import React from 'react';
import styles from './styles.module.scss';
import dropCaps from './letters';

/**
 * Decorative drop cap for the opening of an article.
 *
 * Renders a floated initial that the following paragraph wraps around.
 *
 * Usage:
 *   <DropCap letter="E" />            — hand-drawn cap from the registry
 *   <DropCap letter="A" variant={2} />— pick a specific variant (1-based)
 *   <DropCap src="/img/foo.svg" />    — one-off image, untinted
 *
 * Registry letters are rendered as an alpha mask, so their fill follows
 * the light/dark theme (see styles.module.scss). When the cap replaces
 * the first letter of a word, `letter` doubles as the accessible label
 * so screen readers still read the full word — e.g. <DropCap letter="E" />
 * before "lif Shafak" reads as "Elif Shafak". If no artwork exists for
 * the letter, it falls back to a styled serif text initial.
 */
export default function DropCap({ src, alt, letter, variant = 1 }) {
  const key = typeof letter === 'string' ? letter.toUpperCase() : null;
  const label = alt ?? letter ?? '';

  // Resolve hand-drawn artwork from the registry, unless an explicit
  // `src` overrides it.
  const variants = !src && key ? dropCaps[key] : null;
  const art = variants
    ? variants[Math.min(Math.max(variant, 1), variants.length) - 1]
    : null;

  if (art) {
    return (
      <span
        className={`${styles.dropCap} ${styles.dropCapMask}`}
        role="img"
        aria-label={label}
        style={{
          aspectRatio: `${art.width} / ${art.height}`,
          maskImage: `url(${art.src})`,
          WebkitMaskImage: `url(${art.src})`,
        }}
      />
    );
  }

  if (src) {
    return <img className={styles.dropCap} src={src} alt={label} />;
  }

  return <span className={`${styles.dropCap} ${styles.dropCapText}`}>{letter}</span>;
}
