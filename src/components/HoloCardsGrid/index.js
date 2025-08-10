import React, {useCallback, useMemo, useRef, useState} from 'react';
import styles from './styles.module.css';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function HoloCard({ src, alt, maskMode }) {
  const cardRef = useRef(null);
  const foilRef = useRef(null);

  const resetCard = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    if (foilRef.current) {
      foilRef.current.style.setProperty('--angle', '0deg');
    }
  }, []);

  const handleMove = useCallback((clientX, clientY) => {
    const card = cardRef.current;
    const foil = foilRef.current;
    if (!card || !foil) return;

    const rect = card.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const y = clamp(clientY - rect.top, 0, rect.height);
    const px = x / rect.width;
    const py = y / rect.height;

    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);

    const tilt = parseFloat(getComputedStyle(card).getPropertyValue('--tilt')) || 12;
    const ry = (0.5 - px) * (tilt * 2);
    const rx = (py - 0.5) * (tilt * 2);

    card.style.setProperty('--rx', `${rx}deg`);
    card.style.setProperty('--ry', `${ry}deg`);

    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const angle = Math.atan2(y - cy, x - cx) * 180 / Math.PI;
    foil.style.setProperty('--angle', `${angle + 180}deg`);
  }, []);

  const onPointerMove = useCallback((e) => {
    handleMove(e.clientX, e.clientY);
  }, [handleMove]);

  const foilClassName = useMemo(() => {
    const base = styles.foil;
    switch (maskMode) {
      case 'refined-alpha':
        return `${base} ${styles.refinedAlpha}`;
      case 'alpha':
        return `${base} ${styles.alphaMode}`;
      case 'none':
        return `${base} ${styles.noMask}`;
      case 'luminance':
      default:
        return `${base} ${styles.luminanceMode}`;
    }
  }, [maskMode]);

  return (
    <div className={styles.card} ref={cardRef}
      onPointerMove={onPointerMove}
      onPointerLeave={resetCard}
      role="img" aria-label={alt}
    >
      <div className={styles.art}>
        <img src={src} alt={alt} />
      </div>
      <div
        className={foilClassName}
        ref={foilRef}
        style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` }}
        aria-hidden="true"
      />
      <div className={styles.shine} aria-hidden="true" />
    </div>
  );
}

export default function HoloCardsGrid({ images, titles }) {
  const [maskMode, setMaskMode] = useState('alpha');

  const cycleMode = useCallback(() => {
    setMaskMode((prev) => {
      if (prev === 'luminance') return 'refined-alpha';
      if (prev === 'refined-alpha') return 'alpha';
      if (prev === 'alpha') return 'none';
      return 'luminance';
    });
  }, []);

  const modeLabel = useMemo(() => {
    switch (maskMode) {
      case 'refined-alpha': return 'Refined Alpha';
      case 'alpha': return 'Alpha';
      case 'none': return 'None';
      case 'luminance':
      default: return 'Luminance';
    }
  }, [maskMode]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {images.map((src, idx) => (
          <div key={src} className={styles.item}>
            <HoloCard src={src} alt={titles?.[idx] || 'Card art'} maskMode={maskMode} />
            {titles?.[idx] ? <div className={styles.caption}>{titles[idx]}</div> : null}
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.toggle} onClick={cycleMode} type="button">
          Toggle mask mode ({modeLabel})
        </button>
      </div>
    </div>
  );
} 