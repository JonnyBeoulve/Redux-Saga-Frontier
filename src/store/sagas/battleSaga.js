import { takeLatest, call, put } from "redux-saga/effects";

/*=======================================================================================
// Watch for battle Redux action and intercept it to handle side effects.
=======================================================================================*/
export function* battleWatcherSaga() {
  yield takeLatest("BATTLE_REQUEST", battleWorkerSaga);
}

/*=======================================================================================
// Once the Redux action is intercepted, perform battle calculations to determine if
// the user's party succeeded or failed.
=======================================================================================*/
function* battleWorkerSaga() {
  try {
    const battleOutcome = randomBattleOutcome();
    console.log(battleOutcome);
    yield put({ type: "BATTLE_WIN" });
  } catch (error) {
    yield put({ type: "BATTLE_LOSS"});
  }
}

/*=======================================================================================
// This Saga middleware function will determine if the battle was won or lost.
=======================================================================================*/
function randomBattleOutcome() {
    const outcomeNum = Math.floor(Math.random() * 3) + 1 
    if (outcomeNum >= 2) return true;
    else return false;
  }