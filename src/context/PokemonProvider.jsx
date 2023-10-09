import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PokemonContext from './PokemonContext';

export default function PokemonProvider({ children }) {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemon = async (pokemonName) => {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (result.ok) {
        const data = await result.json();
        setPokemonData(data);
        setError(null);
      } else {
        setError(`Não foi possível encontrar o Pokémon ${pokemonName}`);
        setPokemonData(null);
      }
    } catch (err) {
      setError(`Ocorreu um erro ao buscar o Pokémon: ${err.message}`);
      setPokemonData(null);
    }
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemon(pokemonName);
    }
  }, [pokemonName]);

  const value = {
    pokemonData,
    error,
    setPokemonName,
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
