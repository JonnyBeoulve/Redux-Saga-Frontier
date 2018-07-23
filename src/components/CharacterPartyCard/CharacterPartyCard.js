import React from 'react';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import './CharacterPartyCard.css';

/*======================================================== 
// Animated styles using Aphrodite and React Animations.
========================================================*/
const styles = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '1s'
    }
})

/*=======================================================================================
// This will render each card and their associated functionality for each of the
// player's party characters once they have entered the battle map screen.
=======================================================================================*/
const CharacterPartyCard = (props) => {
    return (
        <div className={["party-character", css(styles.fadeIn)].join(' ')}>
            <img src={props.charAvatars[`${props.charNum}`]} className="party-character-image" alt="Redux Saga Frontier character avatar" />
            <h3 className="party-character-data">{props.charData[`${props.charNum}`].name.first} {props.charData[`${props.charNum}`].name.last}</h3> 
            <h3 className="party-character-data">{props.charJobs[`${props.charNum}`]}</h3> 
      </div>
    )
}

export default CharacterPartyCard;