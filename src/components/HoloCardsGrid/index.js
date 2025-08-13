import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import styles from './styles.module.css';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getOverlaySrc(originalSrc) {
  if (typeof originalSrc !== 'string') return null;
  const hasExt = /\.[a-zA-Z0-9]+$/.test(originalSrc);
  if (hasExt) {
    return originalSrc.replace(/(\.[a-zA-Z0-9]+)$/,'-overlay$1');
  }
  return `${originalSrc}-overlay`;
}

function HoloCard({ src, alt, maskMode, gradient = 'radial', palette = 'classic' }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const cardRef = useRef(null);

  const overlaySrc = useMemo(() => getOverlaySrc(src), [src]);

  const resetCard = useCallback((card) => {
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--angle', '37deg');
  }, []);

  const handlePointerLeave = useCallback((e) => {
    const card = e.currentTarget;
    resetCard(card);
  }, [resetCard]);

  const handlePointerDown = useCallback((e) => {
    const card = e.currentTarget;
    try {
      card.setPointerCapture?.(e.pointerId);
    } catch (_) {
      /* noop */
    }
  }, []);

  const handlePointerUp = useCallback((e) => {
    const card = e.currentTarget;
    try {
      card.releasePointerCapture?.(e.pointerId);
    } catch (_) {
      /* noop */
    }
    if (!motionEnabled) {
      resetCard(card);
    }
  }, [resetCard, motionEnabled]);

  const handlePointerCancel = useCallback((e) => {
    const card = e.currentTarget;
    resetCard(card);
  }, [resetCard]);

  const handlePointerMove = useCallback((e) => {
    const card = e.currentTarget;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = clamp(e.clientX - rect.left, 0, rect.width);
    const y = clamp(e.clientY - rect.top, 0, rect.height);
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
    card.style.setProperty('--angle', `${angle + 180}deg`);
  }, []);

  // Motion/gyro support
  useEffect(() => {
    if (!motionEnabled) return;
    const card = cardRef.current;
    if (!card) return;

    const handleOrientation = (event) => {
      const { beta, gamma } = event || {};
      if (beta == null || gamma == null) return;

      // Limit tilt range for stability
      const gammaClamped = clamp(gamma, -30, 30); // left/right
      const betaClamped = clamp(beta, -30, 30);   // front/back

      // Map to 0..1 within our clamped range
      const px = (gammaClamped + 30) / 60; // 0 left, 1 right
      const py = (betaClamped + 30) / 60;  // 0 top, 1 bottom

      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);

      const tilt = parseFloat(getComputedStyle(card).getPropertyValue('--tilt')) || 12;
      const ry = (0.5 - px) * (tilt * 2);
      const rx = (py - 0.5) * (tilt * 2);

      card.style.setProperty('--rx', `${rx}deg`);
      card.style.setProperty('--ry', `${ry}deg`);

      const angle = Math.atan2(py - 0.5, px - 0.5) * 180 / Math.PI;
      card.style.setProperty('--angle', `${angle + 180}deg`);
    };

    window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      resetCard(card);
    };
  }, [motionEnabled, resetCard]);

  const enableMotionIfAvailable = useCallback(async () => {
    if (typeof window === 'undefined') return;
    if (motionEnabled) return;

    try {
      const AnyDeviceOrientationEvent = window.DeviceOrientationEvent;
      if (!AnyDeviceOrientationEvent) return;

      // iOS 13+ requires permission
      if (typeof AnyDeviceOrientationEvent.requestPermission === 'function') {
        const state = await AnyDeviceOrientationEvent.requestPermission();
        if (state === 'granted') {
          setMotionEnabled(true);
        }
        return;
      }

      // Other platforms: enable directly
      setMotionEnabled(true);
    } catch (_) {
      // ignore
    }
  }, [motionEnabled]);

  const foilClassName = useMemo(() => {
    let base = styles.foil;
    // Apply palette variant
    switch (palette) {
      case 'cool':
        base = `${base} ${styles.paletteCool}`;
        break;
      case 'warm':
        base = `${base} ${styles.paletteWarm}`;
        break;
      case 'aurora':
        base = `${base} ${styles.paletteAurora}`;
        break;
      case 'electric':
        base = `${base} ${styles.paletteElectric}`;
        break;
      case 'classic':
      default:
        base = `${base} ${styles.paletteClassic}`;
        break;
    }
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
  }, [maskMode, palette]);

  const shineClassName = useMemo(() => {
    const base = styles.shine;
    if (gradient === 'linear') return `${base} ${styles.shineLinear}`;
    return `${base} ${styles.shineRadial}`; // default radial
  }, [gradient]);

  return (
    <div
      className={styles.card}
      ref={cardRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      role="img"
      aria-label={alt}
      onTouchStart={enableMotionIfAvailable}
      onMouseDown={enableMotionIfAvailable}
    >
      <div className={styles.art}>
        <img src={src} alt={alt} />
      </div>
      <div
        className={foilClassName}
        style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` }}
        aria-hidden="true"
      />
      <div className={shineClassName} aria-hidden="true" />
      {showOverlay && overlaySrc ? (
        <img
          className={styles.overlay}
          src={overlaySrc}
          alt=""
          aria-hidden="true"
          onError={() => setShowOverlay(false)}
          draggable={false}
        />
      ) : null}
    </div>
  );
}

export default function HoloCardsGrid({ items, images, titles }) {
  // Normalize inputs to a single array of { src, title }
  const normalizedItems = useMemo(() => {
    if (Array.isArray(items)) {
      return items.map((item) => {
        if (typeof item === 'string') {
          return { src: item, title: undefined, maskMode: undefined, gradient: undefined, palette: undefined };
        }
        // Expecting shape: { src, title, maskMode?, gradient?, palette? }
        return { src: item.src, title: item.title, maskMode: item.maskMode, gradient: item.gradient, palette: item.palette };
      });
    }
    if (Array.isArray(images)) {
      return images.map((src, idx) => ({ src, title: titles?.[idx], maskMode: undefined, gradient: undefined, palette: undefined }));
    }
    return [];
  }, [items, images, titles]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {normalizedItems.map(({ src, title, maskMode: itemMaskMode, gradient: itemGradient, palette: itemPalette }, idx) => (
          <div key={`${src}-${idx}`} className={styles.item}>
            <HoloCard src={src} alt={title || 'Card art'} maskMode={itemMaskMode || 'alpha'} gradient={itemGradient || 'radial'} palette={itemPalette || 'classic'} />
            {title ? <div className={styles.caption}>{title}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
} 