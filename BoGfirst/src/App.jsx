import React, { useState, useEffect } from 'react';
import PokemonImage from './components/PokemonImage';
import './App.css';

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(error => console.error('Could not fetch the Pokémon:', error));
  }, [pokemonId]);

  const handleNext = () => setPokemonId(pokemonId + 1);
  const handlePrevious = () => pokemonId > 1 && setPokemonId(pokemonId - 1);

  return (
    <div className="container">
      <PokemonImage
        pokemonData={pokemonData}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
}

export default App;
