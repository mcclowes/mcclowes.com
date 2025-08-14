import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const Carousel = ({images, variant}) => {
  const [scrollState, setScrollState] = useState({
    isAtStart: true,
    isAtEnd: false
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);
  const wrapperRef = useRef(null);

  const handleScroll = () => {
    if (!wrapperRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current;
    const isAtStart = scrollLeft <= 0;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1; // -1 for rounding errors
    
    // Calculate scroll progress percentage
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    
    setScrollState({ isAtStart, isAtEnd });
    setScrollProgress(Math.min(100, Math.max(0, progress)));
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
        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        setScrollState({ isAtStart, isAtEnd });
        setScrollProgress(Math.min(100, Math.max(0, progress)));
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

  const getImageContainerClassName = () => {
    let className = styles.imageContainer;
    if (variant === 'small') {
      className += ` ${styles.imageContainerSmall}`;
    }
    className += ` markdown`;
    return className;
  };

  const getWrapperClassName = () => {
    let className = styles.wrapper;
    
    if (variant === 'small') {
      className += ` ${styles.wrapperSmall}`;
    }
    
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
    <div>
      <div ref={wrapperRef} className={getWrapperClassName()}>
        <div className={styles.carouselTrack}>
          {
            images.map((image, index) => (
              <p key={index} className={getImageContainerClassName()}>
                <img
                  src={image}
                  alt={`Imagem ${index}`}
                  className={`${styles.image} markdown-img`}
                  onLoad={handleImageLoad}
                />
              </p>
            ))
          }
        </div>
      </div>
      {/* Scroll indicator - only show if there's content to scroll */}
      {!scrollState.isAtStart || !scrollState.isAtEnd ? (
        <div className={styles.scrollIndicatorContainer}>
          <div className={styles.scrollIndicatorTrack}>
            <div 
              className={styles.scrollIndicatorThumb}
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Carousel;