import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

/*=======================================================================================
// Watch for Redux actions and intercept them to handle side effects.
=======================================================================================*/
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

/*=======================================================================================
// Once a Redux action is intercepted, perform API call for random character data. If
// successful, dispatch a success action. If not, dispatch a failure action.
=======================================================================================*/
function* workerSaga() {
  try {
    const response = yield call(fetchCharacter);
    console.log(response);
    const character = response.data.results[0].picture.large;

    yield put({ type: "API_CALL_SUCCESS", character });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

/*=======================================================================================
// This Saga middleware function will handle the GET request for character data.
=======================================================================================*/
function fetchCharacter() {
  return axios({
    method: "get",
    url: "https://randomuser.me/api/"
  });
}
