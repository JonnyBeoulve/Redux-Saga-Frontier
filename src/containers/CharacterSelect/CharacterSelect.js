import React, { Component } from "react";
import { connect } from "react-redux";

import Header from '../../components/Header/Header'
import placeholderLogo from "../../assets/img/saga-frontier-placeholder.jpg";
import "./CharacterSelect.css";

/*=======================================================================================
// This is the top level container.
=======================================================================================*/
class CharacterSelect extends Component {
  render() {
    const { 
      characterAvatars, 
      characterData, 
      fetching, 
      error, 
      onRequestCharacter0, 
      onRequestCharacter1, 
      onRequestCharacter2, 
      onRequestCharacter3, 
    } = this.props;

    return (
      <div className="app">
        <Header />
        <div className="character-list">
          <div className="character-item">
            <img src={characterAvatars[0] || placeholderLogo} className="character-image" alt="Saga Frontier logo" />   
            { (!characterAvatars[0]) 
              ? <p className="app-intro">
                  Pick a character!
                </p>
              : null }
            { (characterData[0]) 
              ? <p className="character-data">
                  {characterData[0].name.first} {characterData[0].name.last}
                </p>
              : null }
            { (characterData[0]) 
              ? <p className="character-data">
                  {characterData[0].gender}
                </p>
              : null }
            { (characterData[0]) 
              ? <p className="character-data">
                  {characterData[0].dob.age}
                </p>
              : null }
            { (fetching[0]) 
              ? <button disabled className="character-randomize-button">
                  Fetching...
                </button>
              : <button onClick={ onRequestCharacter0 } className="character-randomize-button">
                  Randomize Character
                </button>}
            { (error[0]) && <p style={{ color: "red" }}>
                Woops! An error has occurred.
              </p>}
          </div>
          <div className="character-item">
            <img src={characterAvatars[1] || placeholderLogo} className="character-image" alt="Saga Frontier logo" />   
            { (!characterAvatars[1]) 
              ? <p className="app-intro">
                  Pick a character!
                </p>
              : null }
            { (characterData[1]) 
              ? <p className="character-data">
                  {characterData[1].name.first} {characterData[1].name.last}
                </p>
              : null }
            { (characterData[1]) 
              ? <p className="character-data">
                  {characterData[1].gender}
                </p>
              : null }
            { (characterData[1]) 
              ? <p className="character-data">
                  {characterData[1].dob.age}
                </p>
              : null }
            { (fetching[1]) 
              ? <button disabled className="character-randomize-button">
                  Fetching...
                </button>
              : <button onClick={ onRequestCharacter1 } className="character-randomize-button">
                  Randomize Character
                </button>}
            { (error[1]) && <p style={{ color: "red" }}>
                Woops! An error has occurred.
              </p>}
          </div>
          <div className="character-item">
            <img src={characterAvatars[2] || placeholderLogo} className="character-image" alt="Saga Frontier logo" />   
            { (!characterAvatars[2]) 
              ? <p className="app-intro">
                  Pick a character!
                </p>
              : null }
            { (characterData[2]) 
              ? <p className="character-data">
                  {characterData[0].name.first} {characterData[2].name.last}
                </p>
              : null }
            { (characterData[2]) 
              ? <p className="character-data">
                  {characterData[2].gender}
                </p>
              : null }
            { (characterData[2]) 
              ? <p className="character-data">
                  {characterData[2].dob.age}
                </p>
              : null }
            { (fetching[2]) 
              ? <button disabled className="character-randomize-button">
                  Fetching...
                </button>
              : <button onClick={ onRequestCharacter2 } className="character-randomize-button">
                  Randomize Character
                </button>}
            { (error[2]) && <p style={{ color: "red" }}>
                Woops! An error has occurred.
              </p>}
          </div>
          <div className="character-item">
            <img src={characterAvatars[3] || placeholderLogo} className="character-image" alt="Saga Frontier logo" />   
            { (!characterAvatars[3]) 
              ? <p className="app-intro">
                  Pick a character!
                </p>
              : null }
            { (characterData[3]) 
              ? <p className="character-data">
                  {characterData[3].name.first} {characterData[3].name.last}
                </p>
              : null }
            { (characterData[3]) 
              ? <p className="character-data">
                  {characterData[3].gender}
                </p>
              : null }
            { (characterData[3]) 
              ? <p className="character-data">
                  {characterData[3].dob.age}
                </p>
              : null }
            { (fetching[3]) 
              ? <button disabled className="character-randomize-button">
                  Fetching...
                </button>
              : <button onClick={ onRequestCharacter3 } className="character-randomize-button">
                  Randomize Character
                </button>}
            { (error[3]) && <p style={{ color: "red" }}>
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
    characterAvatars: state.characterAvatars,
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
    onRequestCharacter0: () => dispatch({ type: "API_CALL_REQUEST", character: 0 }),
    onRequestCharacter1: () => dispatch({ type: "API_CALL_REQUEST", character: 1 }),
    onRequestCharacter2: () => dispatch({ type: "API_CALL_REQUEST", character: 2 }),
    onRequestCharacter3: () => dispatch({ type: "API_CALL_REQUEST", character: 3 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelect);
