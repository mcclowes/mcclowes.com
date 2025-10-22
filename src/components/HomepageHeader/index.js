import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';

export const createOpacityGrid = (size) =>
  Array.from({ length: size * size }, () => 0);

export function ColorGrid({ size = 9 }) {
  const [opacities, setOpacities] = useState(() => createOpacityGrid(size));

  useEffect(() => {
    setOpacities(createOpacityGrid(size));
  }, [size]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacities((previousOpacities) => {
        const totalSquares = size * size;
        const index = Math.floor(Math.random() * totalSquares);

        return previousOpacities.map((opacity, currentIndex) =>
          currentIndex === index ? (opacity === 1 ? 0 : 1) : opacity,
        );
      });
    }, 650);

    return () => clearInterval(interval);
  }, [size]);

  return (
    <div
      className={styles.grid}
      data-testid="color-grid"
      style={{ gridTemplateColumns: `repeat(${size}, 50px)` }}
    >
      {opacities.map((opacity, index) => (
        <div
          key={index}
          className={styles.square}
          data-testid="color-grid-square"
          style={{ opacity }}
        />
      ))}
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <ColorGrid />
    </header>
  );
}

export default HomepageHeader;
