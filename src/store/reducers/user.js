import * as actionTypes from '../actions/actionTypes';

/*=======================================================================================
// Set initial state for Redux store.
=======================================================================================*/
const initialState = {
  fetching: false,
  characterAvatar: null,
  characterData: null,
  error: null
};

/*=======================================================================================
// This houses the basic Reducer functionality of the app.
=======================================================================================*/
export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case actionTypes.API_CALL_SUCCESS:
      return { ...state, fetching: false, characterAvatar: action.characterAvatar, characterData: action.characterData };
    case actionTypes.API_CALL_FAILURE:
      return { ...state, fetching: false, characterAvatar: null, characterData: null, error: action.error };
    default:
      return state;
  }
}
