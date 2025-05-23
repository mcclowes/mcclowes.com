import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

function ColorGrid() {
  const [opacities, setOpacities] = useState([]);
  const [dimensions, setDimensions] = useState({ rows: 0, cols: 0 });
  const gridRef = useRef(null);
  
  // Calculate number of squares based on container size
  useEffect(() => {
    const calculateDimensions = () => {
      if (!gridRef.current) return;
      
      const containerWidth = gridRef.current.clientWidth;
      const containerHeight = gridRef.current.clientHeight;
      
      // Square width is 50px + 10px (5px margin on each side)
      const squareWidth = 60;
      const squareHeight = 60;
      
      const cols = Math.floor(containerWidth / squareWidth);
      const rows = Math.floor(containerHeight / squareHeight);
      
      // Ensure at least 1 row and column
      setDimensions({
        rows: Math.max(1, rows),
        cols: Math.max(1, cols)
      });
    };

    calculateDimensions();
    
    // Add resize listener
    window.addEventListener('resize', calculateDimensions);
    
    // Cleanup
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

  // Initialize the grid with initial opacity
  useEffect(() => {
    const totalSquares = dimensions.rows * dimensions.cols;
    const initialOpacities = Array.from({ length: totalSquares }, () => 0);
    setOpacities(initialOpacities);
  }, [dimensions]);

  // Function to fade a random square in or out at random intervals
  useEffect(() => {
    if (opacities.length === 0) return;
    
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * opacities.length);
      const newOpacities = [...opacities];
      newOpacities[index] = newOpacities[index] === 1 ? 0 : 1; // Toggle opacity
      setOpacities(newOpacities);
    }, 650); // Change interval as needed

    return () => clearInterval(interval);
  }, [opacities]);

  return (
    <div 
      ref={gridRef} 
      className={styles.grid}
    >
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
