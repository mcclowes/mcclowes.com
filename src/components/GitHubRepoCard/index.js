import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

function formatNumber(num) {
  if (num === null || num === undefined) return '0';
  if (num < 1000) return String(num);
  if (num < 1000000) return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}m`;
}

export default function GitHubRepoCard({ repo, className, style }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchRepo() {
      setLoading(true);
      setError(null);
      try {
        const resp = await fetch(`https://api.github.com/repos/${repo}`);
        if (!resp.ok) throw new Error(`Failed to load repo: ${resp.status}`);
        const json = await resp.json();
        if (mounted) setData(json);
      } catch (e) {
        if (mounted) setError(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    if (repo) fetchRepo();
    return () => { mounted = false; };
  }, [repo]);

  const repoUrl = data?.html_url ?? `https://github.com/${repo}`;

  return (
    <a
      className={[styles.card, className].filter(Boolean).join(' ')}
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      <div className={styles.header}>
        <div className={styles.repoName}>
          <span className={styles.githubIcon} aria-hidden></span>
          {repo}
        </div>
        {loading ? (
          <span className={styles.badge}>Loading…</span>
        ) : error ? (
          <span className={styles.badgeError}>Error</span>
        ) : (
          <span className={styles.badge}>{data?.visibility === 'private' ? 'Private' : 'Public'}</span>
        )}
      </div>

      <p className={styles.description}>
        {loading ? 'Fetching repository details…' : (data?.description || 'No description provided.')}
      </p>

      <div className={styles.metaRow}>
        <span className={styles.metaItem} title="Stars">⭐ {formatNumber(data?.stargazers_count || 0)}</span>
        <span className={styles.metaItem} title="Forks">🍴 {formatNumber(data?.forks_count || 0)}</span>
        {data?.language ? (
          <span className={styles.metaItem} title="Primary language">💻 {data.language}</span>
        ) : null}
        {data?.license?.spdx_id && data.license.spdx_id !== 'NOASSERTION' ? (
          <span className={styles.metaItem} title="License">📄 {data.license.spdx_id}</span>
        ) : null}
        {data?.updated_at ? (
          <span className={styles.metaItem} title="Last updated">
            ⏱️ {new Date(data.updated_at).toLocaleDateString()}
          </span>
        ) : null}
      </div>

      {Array.isArray(data?.topics) && data.topics.length > 0 ? (
        <div className={styles.topics}>
          {data.topics.slice(0, 6).map((t) => (
            <span key={t} className={styles.topic}>{t}</span>
          ))}
        </div>
      ) : null}
    </a>
  );
}


