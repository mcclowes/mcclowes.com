import React from 'react';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';

import styles from './styles.module.scss';

export default function LatestPost() {
  const { latestPost } = usePluginData('docusaurus-plugin-latest-blog');

  if (!latestPost) {
    return null;
  }

  return (
    <section className={styles.latestPost}>
      <div className="container">
        <p className={styles.label}>Latest post</p>
        <Link className={styles.postLink} to={latestPost.permalink}>
          <h2 className={styles.postTitle}>{latestPost.title}</h2>
        </Link>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: latestPost.excerptHtml }}
        />
        <div className={styles.seeMore}>
          <Link to={latestPost.permalink}>Read more &rarr;</Link>
          {' | '}
          <Link to="/blog">See all posts &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
