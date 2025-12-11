import React, { useState, useMemo, useCallback } from 'react';
import styles from './styles.module.css';
import { pokemonData } from './pokemonData';
import Modal from '../Modal';
import PokemonDetail from '../PokemonDetail';

const Pokedex = ({ pokemon = pokemonData }) => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleCardKeyDown = useCallback((e, pokemon) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedPokemon(pokemon);
    }
  }, []);

  const typeCounts = useMemo(() => {
    const counts = {};
    pokemon.forEach((p) => {
      p.types.forEach((type) => {
        counts[type] = (counts[type] || 0) + 1;
      });
    });
    return counts;
  }, [pokemon]);

  const allTypes = useMemo(() => {
    return Object.keys(typeCounts).sort();
  }, [typeCounts]);

  const filteredPokemon = useMemo(() => {
    const sorted = [...pokemon].sort((a, b) => a.id - b.id);
    if (selectedType === 'all') return sorted;
    return sorted.filter((p) => p.types.includes(selectedType));
  }, [pokemon, selectedType]);

  return (
    <div className={styles.pokedexContainer} role="region" aria-label="Pokédex">
      <div className={styles.filterSection}>
        <label htmlFor="pokemon-type-filter" className="sr-only">
          Filter by type
        </label>
        <select
          id="pokemon-type-filter"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className={styles.typeFilter}
          aria-label="Filter Pokémon by type"
        >
          <option value="all">All Types ({pokemon.length})</option>
          {allTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)} ({typeCounts[type]})
            </option>
          ))}
        </select>
        <div className={styles.filterCount} aria-live="polite" aria-atomic="true">
          Showing {filteredPokemon.length} of {pokemon.length} Pokémon
        </div>
      </div>
      <div className={styles.pokedex} role="list" aria-label="Pokémon cards">
        {filteredPokemon.map((pokemon) => (
          <div
            key={pokemon.id}
            className={styles.pokemonCard}
            onClick={() => setSelectedPokemon(pokemon)}
            onKeyDown={(e) => handleCardKeyDown(e, pokemon)}
            role="listitem"
            tabIndex={0}
            aria-label={`${pokemon.name}, ${pokemon.types.join(' and ')} type Pokémon. Click to view details.`}
          >
            <img src={pokemon.image} alt="" className={styles.pokemonImage} aria-hidden="true" />
            <div className={styles.pokemonId}>#{pokemon.id}</div>
            <h3 className={styles.pokemonName}>{pokemon.name}</h3>
            <div className={styles.pokemonTypes} aria-label={`Types: ${pokemon.types.join(', ')}`}>
              {pokemon.types.map((type) => (
                <span
                  key={type}
                  className={`${styles.typeBadge} ${styles[`type${type.charAt(0).toUpperCase() + type.slice(1)}`]}`}
                  aria-hidden="true"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={selectedPokemon !== null}
        onClose={() => setSelectedPokemon(null)}
        ariaLabel={selectedPokemon ? `${selectedPokemon.name} details` : 'Pokémon details'}
      >
        {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} />}
      </Modal>
    </div>
  );
};

export default Pokedex;
