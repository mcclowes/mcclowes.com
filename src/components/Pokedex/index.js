import React, { useState, useMemo } from 'react';
import styles from './styles.module.css';
import { pokemonData } from './pokemonData';
import Modal from '../Modal';
import PokemonDetail from '../PokemonDetail';

const Pokedex = ({ pokemon=pokemonData }) => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  
  const typeCounts = useMemo(() => {
    const counts = {};
    pokemon.forEach(p => {
      p.types.forEach(type => {
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
    return sorted.filter(p => p.types.includes(selectedType));
  }, [pokemon, selectedType]);

  return (
    <div className={styles.pokedexContainer}>
      <div className={styles.filterSection}>
        <select 
          value={selectedType} 
          onChange={(e) => setSelectedType(e.target.value)}
          className={styles.typeFilter}
        >
          <option value="all">All Types ({pokemon.length})</option>
          {allTypes.map(type => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)} ({typeCounts[type]})
            </option>
          ))}
        </select>
        <div className={styles.filterCount}>
          Showing {filteredPokemon.length} of {pokemon.length} Pokémon
        </div>
      </div>
      <div className={styles.pokedex}>
        {filteredPokemon.map((pokemon) => (
          <div 
            key={pokemon.id} 
            className={styles.pokemonCard}
            onClick={() => setSelectedPokemon(pokemon)}
          >
            <img 
              src={pokemon.image} 
              alt={pokemon.name} 
              className={styles.pokemonImage}
            />
            <div className={styles.pokemonId}>#{pokemon.id}</div>
            <h3 className={styles.pokemonName}>{pokemon.name}</h3>
            <div className={styles.pokemonTypes}>
              {pokemon.types.map((type) => (
                <span key={type} className={`${styles.typeBadge} ${styles[`type${type.charAt(0).toUpperCase() + type.slice(1)}`]}`}>
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
      >
        {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} />}
      </Modal>
    </div>
  );
};

export default Pokedex; 