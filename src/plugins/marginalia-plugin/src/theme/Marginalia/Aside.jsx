import React, { useCallback, useEffect, useId, useRef } from 'react';
import clsx from 'clsx';
import { useMarginalia } from './MarginaliaContext';
import styles from './styles.module.scss';

const KIND_LABELS = {
  note: 'Note',
  concept: 'Concept',
  warning: 'Heads up',
  info: 'Aside',
  link: 'Related',
  value: 'Value',
  code: 'Code',
  endpoint: 'Endpoint',
};

export default function Aside({
  anchor,
  title,
  kind = 'note',
  kindLabel,
  meta,
  cta,
  ctaHref,
  children,
}) {
  const id = useId();
  const ctx = useMarginalia();
  const anchorElRef = useRef(null);

  const inlineLabel = anchor ?? children;
  const body = anchor ? children : null;
  const resolvedKindLabel = kindLabel ?? KIND_LABELS[kind] ?? 'Note';

  const register = ctx?.register;
  const unregister = ctx?.unregister;
  const setAnchorRef = ctx?.setAnchorRef;

  useEffect(() => {
    if (!register) return;
    register(id, {
      kind,
      kindLabel: resolvedKindLabel,
      title,
      body,
      meta,
      cta,
      ctaHref,
    });
    return () => unregister?.(id);
  }, [register, unregister, id, kind, resolvedKindLabel, title, body, meta, cta, ctaHref]);

  const refCallback = useCallback(
    (el) => {
      anchorElRef.current = el;
      setAnchorRef?.(id, el);
    },
    [setAnchorRef, id]
  );

  if (!ctx) {
    return (
      <span className={styles.anchor} title={title}>
        {inlineLabel}
      </span>
    );
  }

  const hot = ctx.hotId === id;
  const { setHotId, scrollCardIntoView } = ctx;

  const activate = () => {
    scrollCardIntoView(id);
    if (anchorElRef.current) {
      anchorElRef.current.animate(
        [
          { backgroundColor: 'var(--ifm-color-primary)', color: '#fff' },
          { backgroundColor: 'transparent', color: 'inherit' },
        ],
        { duration: 600, easing: 'cubic-bezier(.2,.7,.2,1)' }
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activate();
    }
  };

  return (
    <span
      ref={refCallback}
      className={clsx(styles.anchor, hot && styles.hot)}
      title={title}
      role="button"
      tabIndex={0}
      aria-pressed={hot}
      onMouseEnter={() => setHotId(id)}
      onMouseLeave={() => setHotId(null)}
      onFocus={() => setHotId(id)}
      onBlur={() => setHotId(null)}
      onClick={(e) => {
        e.preventDefault();
        activate();
      }}
      onKeyDown={handleKeyDown}
    >
      {inlineLabel}
    </span>
  );
}
