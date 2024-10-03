import React from 'react';
import '../App.css';

const InfoMovesButton = ({ handleInfo, handleMoves, showInfo }) => {
    return (
        <div>
            <button 
                onClick={handleInfo} 
                className={showInfo ? 'active' : ''}
            >
                Info
            </button>
            <button 
                onClick={handleMoves} 
                className={!showInfo ? 'active' : ''}
            >
                Moves
            </button>
        </div>
    );
};

export default InfoMovesButton;
