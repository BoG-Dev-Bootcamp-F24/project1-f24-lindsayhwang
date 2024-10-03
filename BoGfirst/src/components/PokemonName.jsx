import React from 'react'
import '../App.css'
  
const PokemonName = ({pokemonData}) =>{
    return (
        pokemonData && (
            <div className="pokemon-name">
                <h2>{pokemonData.name}</h2>
            </div>
        )
    );
};

export default PokemonName;
