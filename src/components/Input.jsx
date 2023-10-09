import React, { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import './Input.css';

export default function PokemonInput() {
  const { setPokemonName } = useContext(PokemonContext);
  const { pokemonData } = useContext(PokemonContext);

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div className='input-container'>
      <input
        type="text"
        placeholder="Digite o nome do Pokémon"
        onChange={handleChange}
      />
      {pokemonData && (
        <div className='pokemonReturn'>
          <h2>{pokemonData.name}</h2>
          <img
            alt={`Imagem de ${pokemonData.name}`}
            src={pokemonData.sprites.front_default}
          />
        </div>
      )}
    </div>
  );
}

