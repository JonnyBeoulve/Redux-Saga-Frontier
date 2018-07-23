import { takeLatest, put, select } from "redux-saga/effects";
import * as selectors from '../selectors/enemyLevel';

export const getProject = (state) => state.project

/*=======================================================================================
// Watch for battle Redux action and intercept it to handle side effects.
=======================================================================================*/
export function* battleWatcherSaga() {
  yield takeLatest("BATTLE_REQUEST", battleWorkerSaga);
}

/*=======================================================================================
// Once the Redux action is intercepted, perform battle calculations to determine if
// the user's party succeeded or failed. Note that Saga Select is used to reference
// the state of enemyLevel in the Redux store.
=======================================================================================*/
function* battleWorkerSaga() {
  const eLevel = yield select(selectors.enemyLevel);
  const battleOutcome = randomBattleOutcome(eLevel);
  if (battleOutcome) yield put({ type: "BATTLE_WIN" });
  else yield put({ type: "BATTLE_LOSS"});
}

/*=======================================================================================
// This Saga middleware function will determine if the battle was won or lost. To do so,
// a number between 1 and 100 is randomized then compared to the level of the enemy. If
// the random number is within the range of the enemy level, the battle has failed.
=======================================================================================*/
function randomBattleOutcome(eLevel) {
    const outcomeNum = Math.floor(Math.random() * 100) + 1 
    if (outcomeNum > eLevel) return true;
    else return false;
  }