import React, { useState, useEffect } from 'react';
import PokemonImage from './components/PokemonImage';
import PokemonButtons from './components/PokemonButtons';
import PokemonTypes from './components/PokemonTypes';
import PokemonName from './components/PokemonName';
import InfoMovesButton from './components/InfoMovesButton';
import Panel from './components/Panel';
import PanelTitle from './components/PanelTitle';

import './App.css';

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(error => console.error('Could not fetch the Pokémon:', error));
  }, [pokemonId]);

  const handleNext = () => setPokemonId(pokemonId + 1);
  const handlePrevious = () => pokemonId > 1 && setPokemonId(pokemonId - 1);
  const handleInfo = () => setShowInfo(true);
  const handleMoves = () => setShowInfo(false);

  return (
    <div>
      <h1 className = "title">Bits of Good Mid-Semester Project</h1>
      <div className="container">
        <div className="pokemon-display">
          <PokemonImage pokemonData={pokemonData}/>
          <PokemonName pokemonData={pokemonData}/>
          <div className= "pokemon-type-title">
            Types: 
          </div>
          <div className = "type-container">
            <PokemonTypes pokemonData={pokemonData}/>
          </div>
          <PokemonButtons
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        </div>
        <div className="panel-side">
          <div className = "panel-title">
            <PanelTitle
              showInfo = {showInfo}
            />
          </div>
          <div className="panel-data">
            <Panel
              pokemonData={pokemonData}
              showInfo={showInfo}
            />
          </div>
          <div className = "infomoves-button">
            <InfoMovesButton
              handleInfo={handleInfo} 
              handleMoves={handleMoves} 
              showInfo = {showInfo}
            />
          </div>
        </div>
      </div>
      </div>
    );
}

export default App;
