import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Product Leadership',
    icon: '🎯',
    link: '/blog/tags/product',
    description: (
      <>
        Thoughts on strategy, team dynamics, and building products that matter.
      </>
    ),
  },
  {
    title: 'Technology & AI',
    icon: '🤖',
    link: '/blog/tags/tech',
    description: (
      <>
        Exploring the intersection of human creativity and artificial intelligence.
      </>
    ),
  },
  {
    title: 'Creative Practice',
    icon: '🎨',
    link: '/blog/tags/art',
    description: (
      <>
        Essays, art, and music—exploring the emotional texture of making things.
      </>
    ),
  },
];

function Feature({ title, description, link, icon }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Link className={styles.featureLink} to={link}>
          <h3 className={styles.featureTitle}>{title}</h3>
        </Link>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Explore By Topic</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
