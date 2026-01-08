import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const Carousel = ({ images, variant, ariaLabel = 'Image carousel', altTexts = [] }) => {
  const [scrollState, setScrollState] = useState({
    isAtStart: true,
    isAtEnd: false,
    scrollProgress: 0,
    thumbWidth: 100,
  });
  const [loadedImages, setLoadedImages] = useState(0);
  const wrapperRef = useRef(null);

  const handleScroll = () => {
    if (!wrapperRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current;
    const isAtStart = scrollLeft <= 0;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1; // -1 for rounding errors

    const maxScroll = scrollWidth - clientWidth;
    const scrollProgress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    const thumbWidth = scrollWidth > 0 ? (clientWidth / scrollWidth) * 100 : 100;

    setScrollState({ isAtStart, isAtEnd, scrollProgress, thumbWidth });
  };

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
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
        const scrollProgress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        const thumbWidth = scrollWidth > 0 ? (clientWidth / scrollWidth) * 100 : 100;
        setScrollState({ isAtStart, isAtEnd, scrollProgress, thumbWidth });
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

  const showScrollBar = scrollState.thumbWidth < 100;
  const thumbPosition = (scrollState.scrollProgress / 100) * (100 - scrollState.thumbWidth);

  return (
    <div className={styles.carouselContainer}>
      <div
        ref={wrapperRef}
        className={getWrapperClassName()}
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carousel"
        tabIndex={0}
      >
        <div className={styles.carouselTrack} role="group" aria-label="Carousel images">
          {images.map((image, index) => (
            <p key={index} className={getImageContainerClassName()}>
              <img
                src={image}
                alt={altTexts[index] || `Image ${index + 1} of ${images.length}`}
                className={`${styles.image} markdown-img`}
                onLoad={handleImageLoad}
              />
            </p>
          ))}
        </div>
      </div>
      {showScrollBar && (
        <div className={styles.scrollBarTrack} aria-hidden="true">
          <div
            className={styles.scrollBarThumb}
            style={{
              width: `${scrollState.thumbWidth}%`,
              left: `${thumbPosition}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
