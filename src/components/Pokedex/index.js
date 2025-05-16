import React from 'react';
import styles from './styles.module.css';

const pokemonData = [
  {
    id: 1,
    name: "Flatipi",
    image: "/img/posts/pokemon/1-flatipi.png",
    types: ["water"]
  },
  {
    id: 99,
    name: "Canuto",
    image: "/img/posts/pokemon/99-canuto.png",
    types: ["steel"]
  },
  {
    id: 109,
    name: "Totori Koffing",
    image: "/img/posts/pokemon/109-koffing.png",
    types: ["fire", "poison"]
  },
  {
    id: 110,
    name: "Totori Weezing",
    image: "/img/posts/pokemon/110-weezing.png",
    types: ["fire", "poison"]
  },
  {
    id: 120,
    name: "Pilbark",
    image: "/img/posts/pokemon/120-pilbark.png",
    types: ["grass", "dragon"]
  },
  {
    id: 121,
    name: "Pilnrin",
    image: "/img/posts/pokemon/121-pilnrin.png",
    types: ["grass", "dragon"]
  },
  {
    id: 147,
    name: "Bizzy",
    image: "/img/posts/pokemon/147-bizzy.png",
    types: ["bug"]
  },
  {
    id: 148,
    name: "Bluzzard",
    image: "/img/posts/pokemon/148-bluzzard.png",
    types: ["ice", "flying"]
  },
  {
    id: 149,
    name: "Glarius",
    image: "/img/posts/pokemon/149-glarius.png",
    types: ["ice", "flying"]
  },
  {
    id: 97,
    name: "Crobark",
    image: "/img/posts/pokemon/97-crobark.png",
    types: ["grass"]
  },
  {
    id: 98,
    name: "Crabuto",
    image: "/img/posts/pokemon/98-crabuto.png",
    types: ["steel"]
  },
  {
    id: 0,
    name: "Aniseed",
    image: "/img/posts/pokemon/Aniseed.png",
    types: ["grass", "fire"]
  },
  {
    id: 0,
    name: "Magrab",
    image: "/img/posts/pokemon/Magrab.png",
    types: ["rock"]
  },
  {
    id: 0,
    name: "Natterjack",
    image: "/img/posts/pokemon/natterjack1.png",
    types: ["water"]
  },
  {
    id: 0,
    name: "Natterjack",
    image: "/img/posts/pokemon/natterjack2.png",
    types: ["water"]
  },
  {
    id: 0,
    name: "Steevil",
    image: "/img/posts/pokemon/Steevil.png",
    types: ["steel"]
  },
  {
    id: 0,
    name: "Turpine",
    image: "/img/posts/pokemon/Turpine.png",
    types: ["grass"]
  },
  {
    id: 23,
    name: "Totori Ekans",
    image: "/img/posts/pokemon/23-ekans.png",
    types: ["fire", "poison"]
  },
  {
    id: 24,
    name: "Totori Arbok",
    image: "/img/posts/pokemon/24-arbok.png",
    types: ["fire", "poison"]
  },
  {
    id: 14,
    name: "Barata",
    image: "/img/posts/pokemon/Barata.png",
    types: ["fighting", "flying"]
  },
  {
    id: 27,
    name: "Icky",
    image: "/img/posts/pokemon/27-icky.png",
    types: ["poison", "normal"]
  },
  {
    id: 28,
    name: "Spicky",
    image: "/img/posts/pokemon/28-spicky.png",
    types: ["poison", "normal"]
  },
  {
    id: 43,
    name: "Hornark",
    image: "/img/posts/pokemon/43-hornark.png",
    types: ["water"]
  },
  {
    id: 44,
    name: "Fenshank",
    image: "/img/posts/pokemon/44-fenshank.png",
    types: ["water"]
  },
  {
    id: 45,
    name: "Khandark",
    image: "/img/posts/pokemon/45-khandark.png",
    types: ["water", "steel"]
  },
  {
    id: 123,
    name: "Bloggy",
    image: "/img/posts/pokemon/123-bloggy.png",
    types: ["grass", "water"]
  },
  {
    id: 122,
    name: "Fload",
    image: "/img/posts/pokemon/122-fload.png",
    types: ["fire", "poison"]
  },
  {
    id: 25,
    name: "Pinegolin",
    image: "/img/posts/pokemon/25-pinegolin.png",
    types: ["grass"]
  },
  {
    id: 26,
    name: "Pineedle",
    image: "/img/posts/pokemon/26-pineedle.png",
    types: ["grass"]
  },
  {
    id: 39,
    name: "Kintscoon",
    image: "/img/posts/pokemon/39-kintscoon.png",
    types: ["bug", "rock"]
  },
  {
    id: 40,
    name: "Kintscarab",
    image: "/img/posts/pokemon/40-kintscarab.png",
    types: ["bug", "rock"]
  },
  {
    id: 37,
    name: "Harvish",
    image: "/img/posts/pokemon/37-harvish.png",
    types: ["grass"]
  },
  {
    id: 38,
    name: "Harvine",
    image: "/img/posts/pokemon/38-harvine.png",
    types: ["grass", "steel"]
  },
  {
    id: 35,
    name: "Pickoss",
    image: "/img/posts/pokemon/35-pickoss.png",
    types: ["normal", "poison"]
  },
  {
    id: 36,
    name: "Pickadent",
    image: "/img/posts/pokemon/36-pickadent.png",
    types: ["normal", "poison"]
  },
  {
    id: 131,
    name: "Holoray",
    image: "/img/posts/pokemon/Holoray.png",
    types: ["psychic", "water"]
  }, 
  {
    id: 111,
    name: "Kelpless",
    image: "/img/posts/pokemon/111-kelpless.png",
    types: ["water", "ghost"]
  },
  {
    id: 112,
    name: "Kelpless",
    image: "/img/posts/pokemon/112-kelpish.png",
    types: ["water", "ghost"]
  },
  {
    id: 92,
    name: "Ceramshell",
    image: "/img/posts/pokemon/92-ceramshell.png",
    types: ["dragon", "rock"]
  },
  {
    id: 93,
    name: "Ceramor",
    image: "/img/posts/pokemon/93-ceramor.png",
    types: ["dragon", "rock"]
  },
  {
    id: 94,
    name: "Ceramix",
    image: "/img/posts/pokemon/94-ceramix.png",
    types: ["dragon", "rock"]
  },
  {
    id: 29,
    name: "Flufflet",
    image: "/img/posts/pokemon/29-flufflet.png",
    types: ["flying"]
  },
  {
    id: 30,
    name: "Oracowl",
    image: "/img/posts/pokemon/30-oracowl.png",
    types: ["flying", "psychic"]
  },
  {
    id: 31,
    name: "Ghowlish",
    image: "/img/posts/pokemon/31-ghowlish.png",
    types: ["flying", "ghost"]
  },
  {
    id: 113,
    name: "Glaciog",
    image: "/img/posts/pokemon/113-glaciog.png",
    types: ["ice", "ground"]
  },
  {
    id: 140,
    name: "Linyu",
    image: "/img/posts/pokemon/Linyu.png",
    types: ["rock", "normal"]
  },
];

const Pokedex = ({ pokemon=pokemonData }) => {
  const sortedPokemon = [...pokemon].sort((a, b) => a.id - b.id);
  
  return (
    <div className={styles.pokedex}>
      {sortedPokemon.map((pokemon) => (
        <div key={pokemon.id} className={styles.pokemonCard}>
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
  );
};

export default Pokedex; 