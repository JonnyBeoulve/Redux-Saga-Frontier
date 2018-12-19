import React, { Fragment } from "react";
import { bounceIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import ReactTooltip from 'react-tooltip'

import CharacterPartyCard from '../CharacterPartyCard/CharacterPartyCard';

import './FrontierBattle.css';

/*======================================================== 
// Animated styles using Aphrodite and React Animations.
========================================================*/
const styles = StyleSheet.create({
    bounceIn: {
        animationName: bounceIn,
        animationDuration: '1s'
    }
})

const FrontierBattle = (props) => {
    const {
        characterAvatars,
        characterData,
        characterJobs,
        enemyAvatar,
        enemyData,
        enemyLevel,
        onRetreat,
        onBattle,
        score,
        onCreateBattle
    } = props;

    return (
        <div className="frontier-background">
            <div className="frontier-party-menu">
            { characterAvatars.map((avatar, index) => {
                return ( 
                <CharacterPartyCard 
                    key={index}
                    charNum={index}
                    charAvatars={characterAvatars} 
                    charData={characterData} 
                    charJobs={characterJobs} 
                /> 
                )
            })}
            </div>
            {(enemyAvatar && enemyData)
            ? <Fragment>
                <div className="frontier-enemy-menu">
                    <div className={["enemy-character", css(styles.bounceIn)].join(' ')}>
                        <img src={enemyAvatar} className="enemy-character-image" alt="Redux Saga Frontier enemy avatar" />
                        <h3 className="enemy-character-data">{enemyData.name.last}</h3> 
                        <h3 className="enemy-character-data">Level {enemyLevel}</h3>   
                    </div>
                </div>
                    <div className="button-menu">
                    <ReactTooltip />    
                    <button className="secondary-button" onClick={onRetreat}>
                        <div className="help-circle" data-tip="Losing a battle will remove points from your score equal to the level of the enemy that defeated you. By retreating, you can
                        secure your current score."></div>
                        Retreat
                    </button>
                    <button className="primary-button" onClick={onBattle}>
                        <div className="help-circle" data-tip="The level of the enemy is the percent change you will lose. If you win, you will earn points equal to the level of the enemy."></div>
                        Battle Enemy
                    </button>
                </div>
            </Fragment>
                : <div className="score-menu">
                {score > 0 && <h2>You defeated {enemyData.name.last}!</h2>}
                <h2>Current Score: {score}</h2>
                <div className="button-menu">
                <button className="primary-button" onClick={onCreateBattle}>Find Battle</button>
                </div>
            </div> }
            
        </div>
    )
}

export default FrontierBattle;