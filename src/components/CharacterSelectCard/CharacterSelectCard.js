import React, { Fragment } from "react";
import { fadeIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";

import placeholderLogo from "../../assets/img/saga-frontier-placeholder.jpg";
import "./CharacterSelectCard.css";

/*======================================================== 
// Animated styles using Aphrodite and React Animations.
========================================================*/
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "1s"
  }
});

/*=======================================================================================
// This will render each card and their associated functionality for each of the four
// selectable chars.
=======================================================================================*/
const CharacterSelectCard = props => {
  return (
    <div className={["character-select-card", css(styles.fadeIn)].join(" ")}>
      <img
        src={props.charAvatars[`${props.charNum}`] || placeholderLogo}
        className="character-image"
        alt="Redux Saga Frontier"
      />
      {!props.charAvatars[`${props.charNum}`] ? (
        <p className="app-intro">Pick a character!</p>
      ) : null}
      {props.charData[`${props.charNum}`] ? (
        <p className="character-data">
          {props.charData[`${props.charNum}`].name.first}{" "}
          {props.charData[`${props.charNum}`].name.last}
        </p>
      ) : null}
      {props.charData[`${props.charNum}`] ? (
        <p className="character-data">
          {props.charData[`${props.charNum}`].gender}
        </p>
      ) : null}
      {props.charData[`${props.charNum}`] ? (
        <p className="character-data">
          {props.charData[`${props.charNum}`].dob.age} Years Old
        </p>
      ) : null}
      {props.charData[`${props.charNum}`] ? (
        <p className="character-data">{props.charJobs[`${props.charNum}`]}</p>
      ) : null}
      {props.charNum === 0 ? (
        <Fragment>
          {props.fetch[`${props.charNum}`] ? (
            <button disabled className="character-randomize-button">
              Fetching...
            </button>
          ) : (
            <button
              onClick={props.onRequestChar0}
              className="character-randomize-button"
            >
              Randomize character
            </button>
          )}
        </Fragment>
      ) : null}
      {props.charNum === 1 ? (
        <Fragment>
          {props.fetch[`${props.charNum}`] ? (
            <button disabled className="character-randomize-button">
              Fetching...
            </button>
          ) : (
            <button
              disabled={!props.charData[0]}
              onClick={props.onRequestChar1}
              className="character-randomize-button"
            >
              Randomize character
            </button>
          )}
        </Fragment>
      ) : null}
      {props.charNum === 2 ? (
        <Fragment>
          {props.fetch[`${props.charNum}`] ? (
            <button disabled className="character-randomize-button">
              Fetching...
            </button>
          ) : (
            <button
              disabled={!props.charData[1]}
              onClick={props.onRequestChar2}
              className="character-randomize-button"
            >
              Randomize character
            </button>
          )}
        </Fragment>
      ) : null}
      {props.charNum === 3 ? (
        <Fragment>
          {props.fetch[`${props.charNum}`] ? (
            <button disabled className="character-randomize-button">
              Fetching...
            </button>
          ) : (
            <button
              disabled={!props.charData[2]}
              onClick={props.onRequestChar3}
              className="character-randomize-button"
            >
              Randomize character
            </button>
          )}
        </Fragment>
      ) : null}
      {props.err[`${props.charNum}`] && (
        <p style={{ color: "red" }}>Woops! An error has occurred.</p>
      )}
    </div>
  );
};

export default CharacterSelectCard;
