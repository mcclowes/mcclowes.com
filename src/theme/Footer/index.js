import React from 'react';
import Footer from '@theme-original/Footer';
import NewsletterSignup from '@site/src/components/NewsletterSignup';
import styles from './styles.module.scss';

export default function FooterWrapper(props) {
  return (
    <>
      <div className={styles.newsletter}>
        <div className={styles.container}>
          <p className={styles.heading}>Maybe I'll send an email once in a while</p>
          <NewsletterSignup />
          <p className={styles.subtext}>Monthly digest. No spam.</p>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
}
