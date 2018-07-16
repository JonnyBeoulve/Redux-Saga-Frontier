import React, { Component } from "react";
import { connect } from "react-redux";
import placeholderLogo from "../assets/img/saga-frontier-placeholder.jpg";
import "./App.css";

/*=======================================================================================
// This is the top level container.
=======================================================================================*/
class App extends Component {
  render() {
    const { character, fetching, error, onRequestCharacter, } = this.props;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Redux Saga Frontier</h1>
        </header>

        <div className="character-div">
          { (character) 
            ? <p className="app-intro">Switch character (optional)</p>
            : <p className="app-intro">Pick a character!</p>}

          <img src={character || placeholderLogo} className="character-image" alt="Saga Frontier logo" />

          { (fetching) 
            ? <button disabled>Fetching...</button>
            : <button onClick={onRequestCharacter} className="character-randomize-button">Randomize a Character</button>}

          { (error) && <p style={{ color: "red" }}>
            Uh oh - something went wrong!
            </p>}
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
    character: state.character,
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
