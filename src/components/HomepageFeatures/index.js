import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '/blog',
    link: '/blog',
    description: <>Thoughts and musings.</>,
  },
  {
    title: '/about-me',
    link: '/about-me',
    description: <>Contact and social media links.</>,
  },
  {
    title: '/links',
    link: 'https://linktr.ee/mcclowes',
    description: <>Linktree with various links.</>,
  },
];

function Feature({ title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <Link className={styles.featureLink} to={link}>
          <h3>{title}</h3>
        </Link>

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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
