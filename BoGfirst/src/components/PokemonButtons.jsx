import React from 'react'
import '../App.css'

const PokemonButtons = ({handleNext, handlePrevious}) =>{
    return (
        <div className="button-container">
            <button onClick={handlePrevious}>&lt;</button>
            <button onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default PokemonButtons;
