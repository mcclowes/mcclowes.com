import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}> */}
        {/*   <Link */}
        {/*     className="button button--secondary button--lg" */}
        {/*     to="/docs/intro"> */}
        {/*     Docusaurus Tutorial - 5min ⏱️ */}
        {/*   </Link> */}
        {/* </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="I am a Product Manager with a diverse software engineering and design background. I use my background to get the best out of my developement peers, and the best for my developer users. Intuition lead, data backed. I've been delivering websites and apps for 10+ years. DoY's Young Entrepreneur Award winner as a founder"
    >
      <HomepageHeader />
      
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
