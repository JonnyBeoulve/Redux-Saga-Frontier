import React, { Component } from "react";
import { connect } from "react-redux";
import placeholderLogo from "../assets/img/saga-frontier-placeholder.jpg";
import "./App.css";

/*=======================================================================================
// This is the top level container.
=======================================================================================*/
class App extends Component {
  render() {
    const { 
      characterAvatar, 
      characterData, 
      fetching, 
      error, 
      onRequestCharacter, 
    } = this.props;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">
            Redux Saga Frontier
          </h1>
        </header>

        <div className="character-list">
          <div className="character-item">

            <img src={characterAvatar || placeholderLogo} className="character-image" alt="Saga Frontier logo" />
              
            { (!characterAvatar) 
              ? <p className="app-intro">
                  Pick a character!
                </p>
              : null }

            { (characterData) 
              ? <p className="character-data">
                  {characterData.name.first} {characterData.name.last}
                </p>
              : null }

            { (characterData) 
              ? <p className="character-data">
                  {characterData.gender}
                </p>
              : null }

            { (characterData) 
              ? <p className="character-data">
                  {characterData.dob.age}
                </p>
              : null }

            { (fetching) 
              ? <button disabled className="character-randomize-button">
                  Fetching...
                </button>
              : <button onClick={onRequestCharacter} className="character-randomize-button">
                  Randomize Character
                </button>}

            { (error) && <p style={{ color: "red" }}>
                Woops! An error has occurred.
              </p>}
          </div>
        </div>
      </div>
    );
  }
}

/*=======================================================================================
// Map Redux store's state to props.
=======================================================================================*/
const mapStateToProps = state => {
  return {
    characterAvatar: state.characterAvatar,
    characterData: state.characterData,
    fetching: state.fetching,
    error: state.error
  };
};

/*=======================================================================================
// Map action dispatch to props.
=======================================================================================*/
const mapDispatchToProps = dispatch => {
  return {
    onRequestCharacter: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
