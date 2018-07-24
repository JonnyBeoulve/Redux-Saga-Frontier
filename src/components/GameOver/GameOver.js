import React from 'react';

import './GameOver.css';

const GameOver = (props) => {
    return (
        <div className="game-over">
            <div className="game-over-text">
                <h1>GAME OVER</h1>
                <h1>Final Score: {props.score}</h1>
                <button className="secondary-button" onClick={props.onResetGame}>New Game</button>
            </div>
        </div>
    )
}

export default GameOver;