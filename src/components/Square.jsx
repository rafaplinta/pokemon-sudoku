import React, { useState, useContext } from 'react';
import './Square.css'; // Importe o arquivo CSS aqui
import PokemonContext from '../context/PokemonContext';

export default function Table() {
  const [savePokemon, setSavedPokemon] = useState(null);
  const [selectItem, setSelectedItem] = useState(false);
  const { pokemonData } = useContext(PokemonContext);

  const handleSquareClick = () => {
    setSelectedItem(true);
    setSavedPokemon(pokemonData);
  };

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td
              className="square"
              onClick={handleSquareClick} 
            >
              {savePokemon && (
                <div>
                  <h2>{savePokemon ? savePokemon.name : null}</h2>
                  <img
                    alt={savePokemon ? `Imagem de ${savePokemon.name}` : null}
                    src={savePokemon ? savePokemon.sprites.front_default : null}
                  />
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

