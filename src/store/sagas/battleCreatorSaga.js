import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

/*=======================================================================================
// Watch for party creator Redux API call action and intercept it to handle side effects.
=======================================================================================*/
export function* battleCreatorWatcherSaga() {
  yield takeLatest("CREATE_BATTLE_REQUEST", battleCreatorWorkerSaga);
}

/*=======================================================================================
// Once a Redux action is intercepted, perform API call for random enemy data. Then,
// randomize a seed to be used to obtain a random sprite avatar from the Adorable
// Avatars API. Lastly, generate a level for the enemy which corresponds to the chance
// that it will defeat the party during battle. Either a success or failure will be 
// directed back to the reducer.
=======================================================================================*/
function* battleCreatorWorkerSaga() {
  try {
    const randomEnemyResponse = yield call(fetchEnemyData);
    const enemyData = randomEnemyResponse.data.results[0];
    const randomEnemySeed = yield call(randomEnemyAvatarSeed);
    const enemyAvatar = `https://api.adorable.io/avatars/${randomEnemySeed}`;
    const enemyLevel = yield call(randomEnemyLevel);
    yield put({ type: "CREATE_BATTLE_SUCCESS", enemyAvatar, enemyData, enemyLevel });
  } catch (error) {
    yield put({ type: "CREATE_BATTLE_FAILURE", error });
  }
}

/*=======================================================================================
// This Saga middleware function will handle the GET request for enemy data.
=======================================================================================*/
function fetchEnemyData() {
  return axios({
    method: "get",
    url: "https://randomuser.me/api/"
  });
}

/*=======================================================================================
// This Saga middleware function will randomize a level for the enemy.
=======================================================================================*/
function randomEnemyLevel() {
  return Math.floor(Math.random() * 35) + 1;
}

/*=======================================================================================
// This Saga middleware function will randomize a seed num to be used to retrieve
// a random sprite avatar from the Adorable Avatars API.
=======================================================================================*/
function randomEnemyAvatarSeed() {
  return Math.random().toString(36).substring(4);
}