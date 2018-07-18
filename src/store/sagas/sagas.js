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
// success or failure result. Note that the character number is passed in by the
// Redux dispatch to specifically only update the corresponding character index.
=======================================================================================*/
function* workerSaga(request) {
  const characterNumber = request.character;
  try {
    const randomCharacterResponse = yield call(fetchCharacterData);
    const characterData = randomCharacterResponse.data.results[0];
    const characterGender = (characterData.gender === 'male') ? 'male' : 'female';
    const randomSeed = yield call(randomAvatarSeed);
    const characterAvatars = `https://avatars.dicebear.com/v2/${characterGender}/${randomSeed}.svg`;
    const characterJob = yield call(randomCharacterJob);
    yield put({ type: "API_CALL_SUCCESS", characterAvatars, characterData, characterJob, characterNumber });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error, characterNumber });
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

/*=======================================================================================
// This Saga middleware function will randomize a job using JavaScript's random method.
=======================================================================================*/
function randomCharacterJob() {
  const randomValue = Math.floor(Math.random() * 15) + 1;
  console.log(randomValue);
  if (randomValue === 1) {
    return 'Squire';
  } else if (randomValue === 2) {
    return 'Chemist';
  } else if (randomValue === 2) {
    return 'Knight';
  } else if (randomValue === 3) {
    return 'Archer';
  } else if (randomValue === 4) {
    return 'White Mage';
  } else if (randomValue === 5) {
    return 'Black Mage';
  } else if (randomValue === 6) {
    return 'Monk';
  } else if (randomValue === 7) {
    return 'Thief';
  } else if (randomValue === 8) {
    return 'Geomancer';
  } else if (randomValue === 9) {
    return 'Dragoon';
  } else if (randomValue === 10) {
    return 'Summoner';
  } else if (randomValue === 11) {
    return 'Samurai';
  } else if (randomValue === 12) {
    return 'Ninja';
  } else if (randomValue === 13) {
    return 'Arithmetician';
  } else if (randomValue === 14) {
    return 'Dancer';
  } else if (randomValue === 15) {
    return 'Bard';
  }
}