import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { usePageTracking } from '@site/src/hooks/usePostHog';

import styles from './index.module.css';

export default function Home() {
  // Track homepage visits
  usePageTracking('Homepage', {
    page_type: 'homepage',
    timestamp: new Date().toISOString(),
  });

  return (
    <Layout
      title="Home"
      description="I am a Product Manager with a diverse software engineering and design background. I use my background to get the best out of my developement peers, and the best for my developer users. Intuition lead, data backed. I've been delivering websites and apps for 10+ years."
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
