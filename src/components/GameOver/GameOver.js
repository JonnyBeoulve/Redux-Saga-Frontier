import React from "react";
import { fadeIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";

import "./GameOver.css";

/*======================================================== 
// Animated styles using Aphrodite and React Animations.
========================================================*/
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  }
});

const GameOver = props => {
  return (
    <div className={["game-over", css(styles.fadeIn)].join(" ")}>
      <div className="game-over-text">
        <h1>GAME OVER</h1>
        <h1>Final Score: {props.score}</h1>
        <button className="secondary-button" onClick={props.onResetGame}>
          New Game
        </button>
      </div>
    </div>
  );
};

export default GameOver;
