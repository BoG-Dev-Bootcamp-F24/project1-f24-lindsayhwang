import React from 'react';
import '../App.css';

const Panel = ({pokemonData, showInfo }) => {
    return (
        <div>
            {showInfo ? (
                    <>
                    <p>Height: {(pokemonData?.height/10.0).toFixed(1)}m</p>
                    <p>Weight: {(pokemonData?.weight/10.0).toFixed(1)}kg</p>
                    <p>HP: {pokemonData?.stats.find(stat => stat.stat.name === 'hp')?.base_stat}</p>
                    <p>Attack: {pokemonData?.stats.find(stat => stat.stat.name === 'attack')?.base_stat}</p>
                    <p>Defense: {pokemonData?.stats.find(stat => stat.stat.name === 'defense')?.base_stat}</p>
                    <p>Special Attack: {pokemonData?.stats.find(stat => stat.stat.name === 'special-attack')?.base_stat}</p>
                    <p>Special Defense: {pokemonData?.stats.find(stat => stat.stat.name === 'special-defense')?.base_stat}</p>
                    <p>Speed: {pokemonData?.stats.find(stat => stat.stat.name === 'speed')?.base_stat}</p>
                    </>
            ) : (
                <>
                    {pokemonData?.moves.map(move => (
                        <p key={move.move.name}>{move.move.name}</p>
                    ))}
                </>
            )}
        </div>
    );
};

export default Panel;
