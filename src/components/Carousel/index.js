import styles from './styles.module.css';

const Carousel = ({images}) => {
  return (
    <div className={styles.wrapper}>
      {
        images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <p className="markdown">
              <img
                src={image}
                alt={`Imagem ${index}`}
                className={`${styles.image} markdown-img`}
              />
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default Carousel;