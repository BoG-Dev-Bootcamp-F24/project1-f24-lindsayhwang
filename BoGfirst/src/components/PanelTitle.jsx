import React from 'react';
import '../App.css';

const PanelTitle = ({showInfo }) => {
    return (
            showInfo ? (
                    <h3>Info</h3>
            ) : (
                    <h3>Moves</h3>
            )
    );
};

export default PanelTitle;
