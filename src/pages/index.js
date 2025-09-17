import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';
import RecentPosts from '@site/src/components/RecentPosts';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { usePageTracking } from '@site/src/hooks/usePostHog';

import styles from './index.module.css';

export default function Home() {
  // Track homepage visits
  usePageTracking('Homepage', {
    page_type: 'homepage',
    timestamp: new Date().toISOString()
  });

  return (
    <Layout
      title="Home"
      description="Product Director with 10+ years building tools that work with the grain of people and systems. Expertise spanning engineering, design, and strategy across SaaS and fintech."
    >
      <HeroSection />
      
      <main>
        <RecentPosts />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
