import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Blog',
    link: '/blog',
    description: (
      <>
        Essays on product management, technology, and creative practice. From technical deep-dives to philosophical reflections on building tools that work with people.
      </>
    ),
  },
  {
    title: 'About',
    link: '/about-me',
    description: (
      <>
        Learn more about my background spanning engineering, design, and product strategy. Philosophy of practice and approach to building meaningful tools.
      </>
    ),
  },
  {
    title: 'CV & Links',
    link: 'https://cv.mcclowes.com/',
    description: (
      <>
        Full professional experience and portfolio. Connect with me on LinkedIn or explore my code and projects on GitHub.
      </>
    ),
  },
];

function Feature({ title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <Link className={styles.featureLink} to={link}><h3>{title}</h3></Link>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            < Feature key = { idx } { ...props } />
          ))}
        </div>
      </div>
    </section>
  );
}
