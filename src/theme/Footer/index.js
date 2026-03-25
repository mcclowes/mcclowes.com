import React from 'react';
import Footer from '@theme-original/Footer';
import NewsletterSignup from '@site/src/components/NewsletterSignup';
import styles from './styles.module.scss';

export default function FooterWrapper(props) {
  return (
    <>
      <div className={styles.newsletter}>
        <div className={styles.container}>
          <p className={styles.heading}>Get new posts in your inbox</p>
          <NewsletterSignup />
        </div>
      </div>
      <Footer {...props} />
    </>
  );
}
