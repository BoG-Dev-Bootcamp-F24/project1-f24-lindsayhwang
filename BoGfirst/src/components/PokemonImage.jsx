import React from 'react'
import '../App.css'

const TextColor = ({ text }) => {
    return (
        <span className={`type-name ${text}`}>{text}</span>
    );
};


  
const PokemonImage = ({pokemonData, handleNext, handlePrevious}) =>{
    return (
        <div className="container">
            <div className="pokemon-display">
                {pokemonData && (
                <>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                <div className = "pokemon-name">
                    <h2>{pokemonData.name}</h2>
                </div>
                <div className="pokemon-types">
                    {pokemonData.types.map(typeInfo => (
                        <TextColor
                        key={typeInfo.type.name}
                        text={typeInfo.type.name}
                    />
                    ))}
                </div>
            </>
            )}
            <div className="button-container">
                <button onClick={handlePrevious}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
                </div>
            </div>
        </div>
    );
};


export default PokemonImage;



