import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

function formatNumber(num) {
  if (num === null || num === undefined) return '0';
  if (num < 1000) return String(num);
  if (num < 1000000) return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}m`;
}

export default function NpmPackageCard({ package: packageName, className, style }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchPackage() {
      setLoading(true);
      setError(null);
      try {
        const resp = await fetch(`https://registry.npmjs.org/${packageName}`);
        if (!resp.ok) throw new Error(`Failed to load package: ${resp.status}`);
        const json = await resp.json();
        if (mounted) setData(json);
      } catch (e) {
        if (mounted) setError(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    if (packageName) fetchPackage();
    return () => {
      mounted = false;
    };
  }, [packageName]);

  const packageUrl = `https://www.npmjs.com/package/${packageName}`;
  const latestVersion = data?.['dist-tags']?.latest;
  const latestVersionData = latestVersion && data?.versions?.[latestVersion];
  const keywords = latestVersionData?.keywords || data?.keywords || [];
  const license = latestVersionData?.license || data?.license;
  const publishedDate =
    latestVersion && data?.time?.[latestVersion] ? new Date(data.time[latestVersion]) : null;

  return (
    <a
      className={[styles.card, className].filter(Boolean).join(' ')}
      href={packageUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      <div className={styles.header}>
        <div className={styles.packageName}>
          <span className={styles.npmIcon} aria-hidden>
            📦
          </span>
          {packageName}
        </div>
        {loading ? (
          <span className={styles.badge}>Loading…</span>
        ) : error ? (
          <span className={styles.badgeError}>Error</span>
        ) : latestVersion ? (
          <span className={styles.badge}>v{latestVersion}</span>
        ) : null}
      </div>

      <p className={styles.description}>
        {loading ? 'Fetching package details…' : data?.description || 'No description provided.'}
      </p>

      <div className={styles.metaRow}>
        {license ? (
          <span className={styles.metaItem} title="License">
            📄 {Array.isArray(license) ? license.join(', ') : license}
          </span>
        ) : null}
        {publishedDate ? (
          <span className={styles.metaItem} title="Last updated">
            ⏱️ {publishedDate.toLocaleDateString()}
          </span>
        ) : null}
        {data?.time?.created ? (
          <span className={styles.metaItem} title="Created">
            🆕 {new Date(data.time.created).toLocaleDateString()}
          </span>
        ) : null}
      </div>

      {Array.isArray(keywords) && keywords.length > 0 ? (
        <div className={styles.topics}>
          {keywords.slice(0, 6).map((k) => (
            <span key={k} className={styles.topic}>
              {k}
            </span>
          ))}
        </div>
      ) : null}

      <svg
        className={styles.npmLogo}
        viewBox="0 0 27.23 27.23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="27.23" height="27.23" rx="2" fill="#CB3837" />
        <polygon
          fill="#fff"
          points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"
        />
      </svg>
    </a>
  );
}
