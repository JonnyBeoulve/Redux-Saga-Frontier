import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CharacterSelectCard from '../../components/CharacterSelectCard/CharacterSelectCard';
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
          <div className="character-list-background">
            {(!partyUp)
              ? <Fragment>
                  <div className="character-list">
                    { characterAvatars.map((avatar, index) => {
                      return ( 
                        <CharacterSelectCard 
                          key={index}
                          charNum={index}
                          charAvatars={characterAvatars} 
                          charData={characterData} 
                          charJobs={characterJobs} 
                          fetch={fetching} 
                          err={error} 
                          onRequestChar0={onRequestCharacter0}
                          onRequestChar1={onRequestCharacter1}
                          onRequestChar2={onRequestCharacter2} 
                          onRequestChar3={onRequestCharacter3}
                        /> 
                      )
                    })}
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
          </div>
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
