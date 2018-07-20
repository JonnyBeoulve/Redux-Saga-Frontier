import * as actionTypes from '../actions/actionTypes';

/*=======================================================================================
// Set initial state for Redux store.
=======================================================================================*/
const initialState = {
  characterAvatars: [null, null, null, null],
  characterData: [null, null, null, null],
  characterJobs: [null, null, null, null],
  error: [false, false, false, false],
  fetching: [false, false, false, false],
  partyUp: false,
};

/*=======================================================================================
// This houses the basic Reducer functionality of the app. API_CALL_REQUEST will
// execute prior to the API call being sent within sagas.js middleware, displaying 
// fetching text within the randomize character button. Once an API call has completed
// it will either return successful or failure. If successful, update only the state
// of the avatar and data index corresponding to the specific character. If failure,
// display an error in the associated character card. Confirm Party Request will ensure
// that four characters have been randomized before proceeding.
=======================================================================================*/
export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHARACTER_CREATOR_REQUEST:
      return { 
        ...state, 
        error: [
          false, 
          false, 
          false, 
          false
        ], 
        fetching: state.fetching.map(
          (fetch, i) => i === action.character ? true : fetch
        ),
      };
    case actionTypes.CHARACTER_CREATOR_SUCCESS:
      return {
        ...state,
        characterAvatars: state.characterAvatars.map(
          (avatar, i) => i === action.characterNumber ? action.characterAvatars : avatar,
        ),
        characterData: state.characterData.map(
          (data, i) => i === action.characterNumber ? action.characterData : data
        ),
        characterJobs: state.characterJobs.map(
          (job, i) => i === action.characterNumber ? action.characterJob : job
        ),
        fetching: [
          false, 
          false, 
          false, 
          false
        ]
      };
    case actionTypes.CHARACTER_CREATOR_FAILURE:
      return { 
        ...state, 
        characterAvatars: state.characterAvatars.map(
          (avatar, i) => i === action.characterNumber ? null : avatar,
        ),
        characterData: state.characterData.map(
          (data, i) => i === action.characterNumber ? null : data
        ),
        error: state.error.map(
          (err, i) => i === action.characterNumber ? true : err,
        ),
        fetching: [
          false, 
          false, 
          false, 
          false
        ], 
      };
    case actionTypes.RESET_PARTY_REQUEST:
      return { 
        ...state, 
        characterAvatars: state.characterAvatars.map(
          (avatar, i) => null
        ),
        characterData: state.characterData.map(
          (data, i) => null
        ),
      };
    case actionTypes.CONFIRM_PARTY_REQUEST:
      for (let i = 0; i < 4; i++) {
        if(state.characterAvatars[i] === null || state.characterData[i] === null || state.characterJobs[i] === null) return { ...state };
      }
      return { 
        ...state, 
        partyUp: true,
      };
    case actionTypes.CREATE_BATTLE_REQUEST:
      return { 
        ...state, 
      };
    default:
      return state;
  }
}
