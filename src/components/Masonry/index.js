import React from 'react';
import Masonry from 'react-masonry-css';
import styles from './styles.module.css';

const MasonryGallery = ({images, breakpointCols = {default: 3, 1100: 2, 700: 1}}) => {
  return (
    <div className={styles.wrapper}>
      <Masonry
        breakpointCols={breakpointCols}
        className={styles.masonryGrid}
        columnClassName={styles.masonryColumn}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <p className="markdown">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className={`${styles.image} markdown-img`}
                loading="lazy"
              />
            </p>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryGallery; 