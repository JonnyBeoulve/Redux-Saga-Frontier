import * as actionTypes from '../actions/actionTypes';

/*=======================================================================================
// Set initial state for Redux store.
=======================================================================================*/
const initialState = {
  fetching: false,
  character: null,
  error: null
};

/*=======================================================================================
// This houses the basic Reducer functionality of the app, which will attempt to fetch 
// data from the RandomUser.me API before handling the response, whether success or
// failure.
=======================================================================================*/
export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case actionTypes.API_CALL_SUCCESS:
      return { ...state, fetching: false, character: action.character };
    case actionTypes.API_CALL_FAILURE:
      return { ...state, fetching: false, character: null, error: action.error };
    default:
      return state;
  }
}
