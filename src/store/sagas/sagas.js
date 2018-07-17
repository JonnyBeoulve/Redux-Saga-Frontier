import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

/*=======================================================================================
// Watch for Redux actions and intercept them to handle side effects.
=======================================================================================*/
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

/*=======================================================================================
// Once a Redux action is intercepted, perform API call for random character data. Then,
// randomize a seed to be used to obtain a random sprite avatar from the Dicebear avatars
// API, which will additionally match gender between APIs before either putting a 
// success or failure result.
=======================================================================================*/
function* workerSaga() {
  try {
    const randomCharacterResponse = yield call(fetchCharacterData);
    const characterData = randomCharacterResponse.data.results[0];
    const characterGender = (characterData.gender === 'male') ? 'male' : 'female';
    const randomSeed = yield call(randomAvatarSeed);
    const characterAvatar = `https://avatars.dicebear.com/v2/${characterGender}/${randomSeed}.svg`;

    yield put({ type: "API_CALL_SUCCESS", characterAvatar, characterData });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

/*=======================================================================================
// This Saga middleware function will handle the GET request for character data.
=======================================================================================*/
function fetchCharacterData() {
  return axios({
    method: "get",
    url: "https://randomuser.me/api/"
  });
}

/*=======================================================================================
// This Saga middleware function will randomize a seed string to be used to retrieve
// a random sprite avatar from the Dicebear Avatars API.
=======================================================================================*/
function randomAvatarSeed() {
  const seed = Math.random().toString(36).substring(7);
  return seed;
}