import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

function ColorGrid({ size = 9 }) {
  const [opacities, setOpacities] = useState([]);

  // Initialize the grid with some squares visible
  useEffect(() => {
    const initialOpacities = Array.from({ length: size * size }, (_, i) => 
      Math.random() > 0.7 ? 1 : 0 // Start with about 30% of squares visible
    );
    setOpacities(initialOpacities);
  }, [size]);

  // Function to fade a random square in or out at random intervals
  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * size * size);
      const newOpacities = [...opacities];
      newOpacities[index] = newOpacities[index] === 1 ? 0 : 1; // Toggle opacity
      setOpacities(newOpacities);
    }, 650); // Change interval as needed

    return () => clearInterval(interval);
  }, [opacities, size]);

  return (
    <div className={styles.grid}>
      {opacities.map((opacity, index) => (
        <div key={index} className={styles.square} style={{ opacity }} />
      ))}
    </div>
  );
}

//export default ColorGrid;

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Max Clayton-Clowes</h1>
          <p className={styles.heroSubtitle}>
            Product director with 10+ years of experience building tools that work with the grain of people and systems.
          </p>
          <div className={styles.heroLinks}>
            <a href="/about-me" className={styles.heroButton}>About me</a>
            <a href="/blog" className={styles.heroButton}>Blog</a>
            <a href="https://cv.mcclowes.com/" className={styles.heroButton}>CV</a>
          </div>
        </div>
        <div className={styles.heroGrid}>
          <ColorGrid size={6}/>
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader
