import styles from './styles.module.css';

const Carousel = ({images}) => {
  return (
    <div className={styles.wrapper}>
      {
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index}`}
            className={styles.image}
          />
        ))
      }
    </div>
  )
}

export default Carousel;