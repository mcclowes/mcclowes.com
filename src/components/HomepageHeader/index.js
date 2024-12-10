import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

function ColorGrid({ size = 9 }) {
  const [opacities, setOpacities] = useState([]);

  // Initialize the grid with full opacity
  useEffect(() => {
    const initialOpacities = Array.from({ length: size * size }, () => 0);
    setOpacities(initialOpacities);
  }, [size]);

  // Function to fade a random square in or out at random intervals
  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * size * size);
      const newOpacities = [...opacities];
      newOpacities[index] = newOpacities[index] === 1 ? 0 : 1; // Toggle opacity
      setOpacities(newOpacities);
    }, 1000); // Change interval as needed

    return () => clearInterval(interval);
  }, [opacities, size]);

  return (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${size}, 50px)` }}>
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
      <ColorGrid/>
    </header>
  );
}

export default HomepageHeader
