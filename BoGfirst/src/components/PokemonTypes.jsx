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
            <>
                {pokemonData.types.map(typeInfo => (
                    <TextColor
                        key={typeInfo.type.name}
                        text={typeInfo.type.name}
                    />
                ))}
            </>
        )
    );
};

export default PokemonTypes;
