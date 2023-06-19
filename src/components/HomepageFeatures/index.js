import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '/blog',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: '/blog',
    description: (
      <>
        Thoughts and musings.
      </>
    ),
  },
  {
    title: '/about-me',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: '/about-me',
    description: (
      <>
        Contact and social media links.
      </>
    ),
  },
  {
    title: '/linktree',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: 'https://linktr.ee/mcclowes',
    description: (
      <>
        Linktree with various links.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center"> */}
      {/*   <Svg className={styles.featureSvg} role="img" /> */}
      {/* </div> */}
      <div className="padding-horiz--md">
        <Link to={link}><h3>{title}</h3></Link>

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
