import React from 'react'
import '../App.css'
  
const PokemonImage = ({pokemonData}) =>{
    return (
        pokemonData && (
            <div>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            </div>
        )
    );
};

export default PokemonImage;
