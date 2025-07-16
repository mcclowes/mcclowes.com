import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const Carousel = ({images}) => {
  const [scrollState, setScrollState] = useState({
    isAtStart: true,
    isAtEnd: false
  });
  const [loadedImages, setLoadedImages] = useState(0);
  const wrapperRef = useRef(null);

  const handleScroll = () => {
    if (!wrapperRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current;
    const isAtStart = scrollLeft <= 0;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1; // -1 for rounding errors
    
    setScrollState({ isAtStart, isAtEnd });
  };

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('scroll', handleScroll);
      
      // Calculate initial state after a short delay to allow images to load
      const timer = setTimeout(() => {
        const { scrollLeft, scrollWidth, clientWidth } = wrapper;
        const isAtStart = scrollLeft <= 0;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
        setScrollState({ isAtStart, isAtEnd });
      }, 100);
      
      return () => {
        wrapper.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  // Recalculate scroll state when all images are loaded
  useEffect(() => {
    if (loadedImages === images.length && wrapperRef.current) {
      const timer = setTimeout(() => {
        handleScroll();
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [loadedImages, images.length]);

  const getWrapperClassName = () => {
    let className = styles.wrapper;
    
    if (scrollState.isAtStart && scrollState.isAtEnd) {
      // All content fits, no gradient needed
      return className;
    } else if (scrollState.isAtStart) {
      // At start, only show right gradient
      className += ` ${styles.fadeRight}`;
    } else if (scrollState.isAtEnd) {
      // At end, only show left gradient
      className += ` ${styles.fadeLeft}`;
    } else {
      // In middle, show both gradients
      className += ` ${styles.fadeBoth}`;
    }
    
    return className;
  };

  return (
    <div ref={wrapperRef} className={getWrapperClassName()}>
      {
        images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <p className="markdown">
              <img
                src={image}
                alt={`Imagem ${index}`}
                className={`${styles.image} markdown-img`}
                onLoad={handleImageLoad}
              />
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default Carousel;