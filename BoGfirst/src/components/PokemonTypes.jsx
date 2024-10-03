import React from 'react'
import '../App.css'

const TextColor = ({ text }) => {
    return (
        <span className={`type-name ${text}`}>{text}</span>
    );
};

const PokemonTypes = ({pokemonData}) =>{
    return (
        pokemonData && (
            <div className="pokemon-types">
                {pokemonData.types.map(typeInfo => (
                    <TextColor
                        key={typeInfo.type.name}
                        text={typeInfo.type.name}
                    />
                ))}
            </div>
        )
    );
};

export default PokemonTypes;
