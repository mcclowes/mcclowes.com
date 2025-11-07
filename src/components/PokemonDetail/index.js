import React from 'react';
import styles from './styles.module.css';

const PokemonDetail = ({ pokemon }) => {
  return (
    <div className={styles.pokemonDetail}>
      <div className={styles.imageContainer}>
        <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage} />
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.pokemonName}>{pokemon.name}</h2>
        <div className={styles.pokemonId}>#{pokemon.id}</div>
        <div className={styles.pokemonTypes}>
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`${styles.typeBadge} ${styles[`type${type.charAt(0).toUpperCase() + type.slice(1)}`]}`}
            >
              {type}
            </span>
          ))}
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Height</span>
            <span className={styles.statValue}>{(Math.random() * 2 + 0.5).toFixed(1)}m</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Weight</span>
            <span className={styles.statValue}>{(Math.random() * 50 + 10).toFixed(1)}kg</span>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            {pokemon.name} is a {pokemon.types.join(' and ')} type Pokémon. It is known for its
            unique abilities and characteristics that make it stand out among other Pokémon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
