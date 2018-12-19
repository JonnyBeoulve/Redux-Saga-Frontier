import React, { Fragment } from "react";
import { bounceIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import CharacterPartyCard from '../CharacterPartyCard/CharacterPartyCard';

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
    return (
        <div className="frontier-background">
            <div className="frontier-party-menu">
            { props.characterAvatars.map((avatar, index) => {
                return ( 
                <CharacterPartyCard 
                    key={index}
                    charNum={index}
                    charAvatars={props.characterAvatars} 
                    charData={props.characterData} 
                    charJobs={props.characterJobs} 
                /> 
                )
            })}
            </div>
            {(props.enemyAvatar && props.enemyData)
            ? <Fragment>
                <div className="frontier-enemy-menu">
                    <div className={["enemy-character", css(styles.bounceIn)].join(' ')}>
                        <img src={props.enemyAvatar} className="enemy-character-image" alt="Redux Saga Frontier enemy avatar" />
                        <h3 className="enemy-character-data">{props.enemyData.name.last}</h3> 
                        <h3 className="enemy-character-data">Level {props.enemyLevel}</h3>   
                    </div>
                </div>
                <div className="button-menu">
                    <button className="secondary-button" onClick={props.onRetreat}>Retreat</button>
                    <button className="primary-button" onClick={props.onBattle}>Battle Enemy</button>
                </div>
            </Fragment>
            : <div className="score-menu">
                <h2>Current Score: {props.score}</h2>
                <div className="button-menu">
                <button className="primary-button" onClick={props.onCreateBattle}>Find Battle</button>
                </div>
            </div> }
            
        </div>
    )
}

export default FrontierBattle;