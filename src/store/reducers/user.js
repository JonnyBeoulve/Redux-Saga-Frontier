import * as actionTypes from '../actions/actionTypes';

/*=======================================================================================
// Set initial state for Redux store.
=======================================================================================*/
const initialState = {
  characterAvatars: [null, null, null, null],
  characterData: [null, null, null, null],
  error: [false, false, false, false],
  fetching: [false, false, false, false],
};

/*=======================================================================================
// This houses the basic Reducer functionality of the app. API_CALL_REQUEST will
// execute prior to the API call being sent within sagas.js middleware, displaying 
// fetching text within the randomize character button. Once an API call has completed
// it will either return successful or failure. If successful, update only the state
// of the avatar and data index corresponding to the specific character. If failure,
// display an error in the associated character card.
=======================================================================================*/
export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST:
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
    case actionTypes.API_CALL_SUCCESS:
      return {
        ...state,
        characterAvatars: state.characterAvatars.map(
          (avatar, i) => i === action.characterNumber ? action.characterAvatars : avatar,
        ),
        characterData: state.characterData.map(
          (data, i) => i === action.characterNumber ? action.characterData : data
        ),
        fetching: [false, false, false, false]
      };
    case actionTypes.API_CALL_FAILURE:
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
    default:
      return state;
  }
}
