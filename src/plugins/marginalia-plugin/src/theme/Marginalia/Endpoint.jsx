import React from 'react';
import styles from './styles.module.scss';

export default function Endpoint({ method = 'GET', path, children }) {
  const upper = method.toUpperCase();
  return (
    <span className={styles.endpoint} data-method={upper}>
      <span className={styles.endpointMethod}>{upper}</span>
      <span className={styles.endpointPath}>{path ?? children}</span>
    </span>
  );
}
