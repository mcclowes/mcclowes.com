import React, { useEffect, useState } from 'react';
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
    return () => {
      mounted = false;
    };
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
          <span className={styles.githubIcon} aria-hidden>
            
          </span>
          {repo}
        </div>
        {loading ? (
          <span className={styles.badge}>Loading…</span>
        ) : error ? (
          <span className={styles.badgeError}>Error</span>
        ) : (
          <span className={styles.badge}>
            {data?.visibility === 'private' ? 'Private' : 'Public'}
          </span>
        )}
      </div>

      <p className={styles.description}>
        {loading ? 'Fetching repository details…' : data?.description || 'No description provided.'}
      </p>

      <div className={styles.metaRow}>
        <span className={styles.metaItem} title="Stars">
          ⭐ {formatNumber(data?.stargazers_count || 0)}
        </span>
        <span className={styles.metaItem} title="Forks">
          🍴 {formatNumber(data?.forks_count || 0)}
        </span>
        {data?.language ? (
          <span className={styles.metaItem} title="Primary language">
            💻 {data.language}
          </span>
        ) : null}
        {data?.license?.spdx_id && data.license.spdx_id !== 'NOASSERTION' ? (
          <span className={styles.metaItem} title="License">
            📄 {data.license.spdx_id}
          </span>
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
            <span key={t} className={styles.topic}>
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <svg
        className={styles.githubLogo}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
