import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function ColorGrid({ size = 6 }) {
  const [opacities, setOpacities] = useState([]);

  // Initialize the grid with random opacity
  useEffect(() => {
    const initialOpacities = Array.from({ length: size * size }, () => Math.random() > 0.7 ? 1 : 0);
    setOpacities(initialOpacities);
  }, [size]);

  // Function to fade a random square in or out at random intervals
  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * size * size);
      const newOpacities = [...opacities];
      newOpacities[index] = newOpacities[index] === 1 ? 0 : 1; // Toggle opacity
      setOpacities(newOpacities);
    }, 800); // Slightly slower animation

    return () => clearInterval(interval);
  }, [opacities, size]);

  return (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${size}, 40px)` }}>
      {opacities.map((opacity, index) => (
        <div key={index} className={styles.square} style={{ opacity }} />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Max Clayton Clowes</h1>
            <p className={styles.heroSubtitle}>Product Director</p>
            <p className={styles.heroDescription}>
              Building tools that work with the grain of people and systems. 
              10+ years shaping software across SaaS and fintech, with expertise 
              spanning engineering, design, and strategy.
            </p>
            <div className={styles.heroActions}>
              <Link to="/blog" className={styles.primaryButton}>
                Read My Writing
              </Link>
              <Link to="/about-me" className={styles.secondaryButton}>
                About Me
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <ColorGrid size={6} />
          </div>
        </div>
      </div>
    </section>
  );
}