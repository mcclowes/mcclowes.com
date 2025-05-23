import React, { useEffect, useState, useRef, useCallback } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

function ColorGrid() {
  const [opacities, setOpacities] = useState([]);
  const [dimensions, setDimensions] = useState({ rows: 0, cols: 0 });
  const gridRef = useRef(null);
  
  // Calculate number of squares based on container size
  const calculateDimensions = useCallback(() => {
    if (!gridRef.current) return;
    
    const containerWidth = gridRef.current.clientWidth;
    const containerHeight = gridRef.current.clientHeight;
    
    // Get the computed style to determine square size based on current media query
    const computedStyle = window.getComputedStyle(document.documentElement);
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
    
    // Adjust square size based on media query
    let squareSize, margin;
    if (isMobile) {
      squareSize = 30;
      margin = 3;
    } else if (isTablet) {
      squareSize = 40;
      margin = 4;
    } else {
      squareSize = 50;
      margin = 5;
    }
    
    // Calculate effective square dimension including margin
    const squareWidth = squareSize + (margin * 2);
    const squareHeight = squareSize + (margin * 2);
    
    const cols = Math.floor(containerWidth / squareWidth);
    const rows = Math.floor(containerHeight / squareHeight);
    
    // Ensure at least 1 row and column
    setDimensions({
      rows: Math.max(1, rows),
      cols: Math.max(1, cols)
    });
  }, []);

  // Setup resize observer and event listener
  useEffect(() => {
    // Initial calculation after component mounts
    calculateDimensions();
    
    // Use ResizeObserver for more accurate container size tracking
    let resizeObserver;
    if (gridRef.current && typeof ResizeObserver === 'function') {
      resizeObserver = new ResizeObserver(() => {
        calculateDimensions();
      });
      resizeObserver.observe(gridRef.current);
    }
    
    // Also listen for window resize events
    window.addEventListener('resize', calculateDimensions);
    
    // Recalculate after a short delay to ensure container has fully rendered
    const timeout = setTimeout(calculateDimensions, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', calculateDimensions);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(timeout);
    };
  }, [calculateDimensions]);

  // Initialize the grid with initial opacity
  useEffect(() => {
    const totalSquares = dimensions.rows * dimensions.cols;
    if (totalSquares > 0) {
      const initialOpacities = Array.from({ length: totalSquares }, () => 0);
      setOpacities(initialOpacities);
    }
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
