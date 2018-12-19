import { takeLatest, put, select } from "redux-saga/effects";
import * as selectors from '../selectors/selectors';

/*=======================================================================================
// Watch for score Redux action and intercept it to handle side effects.
=======================================================================================*/
export function* highScoreWatcherSaga() {
  yield takeLatest(["RETREAT_REQUEST", "BATTLE_LOSS"], highScoreWorkerSaga);
}

/*=======================================================================================
// Once the Redux action is intercepted, check to see if the high score needs to be
// updated.
=======================================================================================*/
function* highScoreWorkerSaga() {
  const currentScore = yield select(selectors.score);
  const highScore = localStorage.getItem('RSF-High-Score');
  if (currentScore > highScore) {
    localStorage.setItem('RSF-High-Score', currentScore);
    yield put({ type: "HIGH_SCORE_READ"});
  }
}
