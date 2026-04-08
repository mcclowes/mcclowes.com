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
          {latestPost.title}
        </Link>
        <div className={styles.seeMore}>
          <Link to="/blog">See all posts &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
