import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import placeholderLogo from "../../assets/img/saga-frontier-placeholder.jpg";
import frontierMap from "../../assets/img/redux-saga-frontier-map.jpg";
import "./CharacterSelect.css";

/*=======================================================================================
// This is the top level container.
=======================================================================================*/
class CharacterSelect extends Component {
  render() {
    const { 
      characterAvatars, 
      characterData, 
      characterJobs,
      fetching, 
      error, 
      partyUp,
      onRequestCharacter0, 
      onRequestCharacter1, 
      onRequestCharacter2, 
      onRequestCharacter3, 
      onResetParty,
      onConfirmParty,
    } = this.props;

    return (
      <div className="app">
        <Header />
        {(!partyUp)
          ? <Fragment>
              <div className="character-list">
                <div className={characterAvatars[0] ? "character-item" : "character-item-error"}>
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
                        {characterData[0].dob.age} Years Old
                      </p>
                    : null }
                  { (characterData[0]) 
                    ? <p className="character-data">
                        {characterJobs[0]}
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
                <div className={characterAvatars[1] ? "character-item" : "character-item-error"}>
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
                        {characterData[1].dob.age} Years Old
                      </p>
                    : null }
                  { (characterData[1]) 
                    ? <p className="character-data">
                        {characterJobs[1]}
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
                <div className={characterAvatars[2] ? "character-item" : "character-item-error"}>
                  <img src={characterAvatars[2] || placeholderLogo} className="character-image" alt="Saga Frontier logo" />   
                  { (!characterAvatars[2]) 
                    ? <p className="app-intro">
                        Pick a character!
                      </p>
                    : null }
                  { (characterData[2]) 
                    ? <p className="character-data">
                        {characterData[2].name.first} {characterData[2].name.last}
                      </p>
                    : null }
                  { (characterData[2]) 
                    ? <p className="character-data">
                        {characterData[2].gender}
                      </p>
                    : null }
                  { (characterData[2]) 
                    ? <p className="character-data">
                        {characterData[2].dob.age} Years Old
                      </p>
                    : null }
                  { (characterData[2]) 
                    ? <p className="character-data">
                        {characterJobs[2]}
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
                <div className={characterAvatars[3] ? "character-item" : "character-item-error"}>
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
                        {characterData[3].dob.age} Years Old
                      </p>
                    : null }
                  { (characterData[3]) 
                    ? <p className="character-data">
                        {characterJobs[3]}
                      </p>
                    : null }
                  { (fetching[3]) 
                    ? <button disabled className="character-randomize-button">
                        Fetching...
                      </button>
                    : <button className="character-randomize-button" onClick={ onRequestCharacter3 }>
                        Randomize Character
                      </button>}
                  { (error[3]) && <p style={{ color: "red" }}>
                      Woops! An error has occurred.
                    </p>}
                </div>
              </div>
              <div className="characters-confirm">
                <button className="characters-reset-button" onClick={ onResetParty }>Reset Party</button>
                <button className="characters-confirm-button" onClick={ onConfirmParty }>Confirm Party</button>
              </div>
          </Fragment>
          : <Fragment>
              <div className="party-frontier">
                <div className="party-frontier-menu">
                    <div className="party-character">
                      <img src={characterAvatars[0]} className="party-character-image" alt="Redux Saga Frontier character avatar" />
                      <h3 className="party-character-data">{characterData[0].name.first} {characterData[0].name.last}</h3> 
                      <h3 className="party-character-data">{characterJobs[0]}</h3> 
                    </div>
                    <div className="party-character">
                      <img src={characterAvatars[1]} className="party-character-image" alt="Redux Saga Frontier character avatar" />
                      <h3 className="party-character-data">{characterData[1].name.first} {characterData[1].name.last}</h3> 
                      <h3 className="party-character-data">{characterJobs[1]}</h3>                       
                    </div>
                    <div className="party-character">
                      <img src={characterAvatars[2]} className="party-character-image" alt="Redux Saga Frontier character avatar" />
                      <h3 className="party-character-data">{characterData[2].name.first} {characterData[2].name.last}</h3> 
                      <h3 className="party-character-data">{characterJobs[2]}</h3>                       
                    </div>
                    <div className="party-character">
                      <img src={characterAvatars[3]} className="party-character-image" alt="Redux Saga Frontier character avatar" />
                      <h3 className="party-character-data">{characterData[3].name.first} {characterData[3].name.last}</h3> 
                      <h3 className="party-character-data">{characterJobs[3]}</h3>                       
                    </div>
                </div>
                <img src={frontierMap} className="party-frontier-map" alt="RPG map" />  
              </div>
            </Fragment>}
        <Footer />
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
    characterJobs: state.characterJobs,
    fetching: state.fetching,
    error: state.error,
    partyUp: state.partyUp
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
    onRequestCharacter3: () => dispatch({ type: "API_CALL_REQUEST", character: 3 }),
    onResetParty: () => dispatch({ type: "RESET_PARTY_REQUEST" }),
    onConfirmParty: () => dispatch({ type: "CONFIRM_PARTY_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelect);
