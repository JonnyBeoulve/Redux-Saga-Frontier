import React, { Component } from "react";
import { connect } from "react-redux";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';
import FrontierBattle from '../../components/FrontierBattle/FrontierBattle';
import GameOver from '../../components/GameOver/GameOver';
import "./ReduxSagaFrontier.css";

/*=======================================================================================
// This is the top level container which directly interfaces with Redux and Saga.
=======================================================================================*/
class ReduxSagaFrontier extends Component {
  render() {
    const { 
      gameStage,
      score,
      characterAvatars, 
      characterData, 
      characterJobs,
      enemyAvatar,
      enemyData,
      enemyLevel,
      fetching, 
      error, 
      onRequestCharacter0, 
      onRequestCharacter1, 
      onRequestCharacter2, 
      onRequestCharacter3, 
      onResetParty,
      onConfirmParty,
      onCreateBattle,
      onBattle,
      onResetGame
    } = this.props;

    return (
      <div className="app">
        <Header />
          {gameStage === 1 && <CharacterSelect 
              characterAvatars={characterAvatars} 
              characterData={characterData} 
              characterJobs={characterJobs} 
              fetching={fetching} 
              error={error} 
              onRequestCharacter0={onRequestCharacter0}
              onRequestCharacter1={onRequestCharacter1}
              onRequestCharacter2={onRequestCharacter2} 
              onRequestCharacter3={onRequestCharacter3}
              onResetParty={onResetParty}
              onConfirmParty={onConfirmParty}
            />}
          {gameStage === 2 && <FrontierBattle 
              score={score}
              characterAvatars={characterAvatars} 
              characterData={characterData} 
              characterJobs={characterJobs} 
              enemyAvatar={enemyAvatar}
              enemyData={enemyData}
              enemyLevel={enemyLevel}
              onCreateBattle={onCreateBattle}
              onBattle={onBattle}
            />}
          {gameStage === 3 && <GameOver 
              score={score}
              onResetGame={onResetGame}
            />}
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
    gameStage: state.gameStage,
    score: state.score,
    characterAvatars: state.characterAvatars,
    characterData: state.characterData,
    characterJobs: state.characterJobs,
    enemyAvatar: state.enemyAvatar,
    enemyData: state.enemyData,
    enemyLevel: state.enemyLevel,
    fetching: state.fetching,
    error: state.error,
  };
};

/*=======================================================================================
// Map action dispatch to props. Type signals the corresponding reducer action. Note
// that character is passed as part of the object to perform actions specific to a
// party member.
=======================================================================================*/
const mapDispatchToProps = dispatch => {
  return {
    onRequestCharacter0: () => dispatch({ type: "CHARACTER_CREATOR_REQUEST", character: 0 }),
    onRequestCharacter1: () => dispatch({ type: "CHARACTER_CREATOR_REQUEST", character: 1 }),
    onRequestCharacter2: () => dispatch({ type: "CHARACTER_CREATOR_REQUEST", character: 2 }),
    onRequestCharacter3: () => dispatch({ type: "CHARACTER_CREATOR_REQUEST", character: 3 }),
    onResetParty: () => dispatch({ type: "RESET_PARTY_REQUEST" }),
    onConfirmParty: () => dispatch({ type: "CONFIRM_PARTY_REQUEST" }),
    onCreateBattle: () => dispatch({ type: "CREATE_BATTLE_REQUEST" }),
    onBattle: () => dispatch({ type: "BATTLE_REQUEST" }),
    onResetGame: () => dispatch({ type: "RESET_GAME" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSagaFrontier);
