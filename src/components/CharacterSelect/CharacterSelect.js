import React from "react";

import CharacterSelectCard from '../CharacterSelectCard/CharacterSelectCard';

/*=======================================================================================
// This will display all UI elements for character select, including cards to select
// characters for the party, as well as buttons.
=======================================================================================*/
const CharacterSelect = (props) => {
    return (
        <div className="character-list-background">
            <div className="character-list">
                { props.characterAvatars.map((avatar, index) => {
                return ( 
                    <CharacterSelectCard 
                        key={index}
                        charNum={index}
                        charAvatars={props.characterAvatars} 
                        charData={props.characterData} 
                        charJobs={props.characterJobs} 
                        fetch={props.fetching} 
                        err={props.error} 
                        onRequestChar0={props.onRequestCharacter0}
                        onRequestChar1={props.onRequestCharacter1}
                        onRequestChar2={props.onRequestCharacter2} 
                        onRequestChar3={props.onRequestCharacter3}
                    /> 
                )
                })}
            </div>
            <div className="button-menu">
                <button className="secondary-button" onClick={props.onResetParty}>Reset Party</button>
                <button className="red-button" onClick={props.onConfirmParty}>Confirm Party</button>
            </div>
        </div>
    )
}

export default CharacterSelect;