import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

/*=======================================================================================
// Watch for party creator Redux API call action and intercept it to handle side effects.
=======================================================================================*/
export function* battleCreatorWatcherSaga() {
  yield takeLatest("CREATE_BATTLE_REQUEST", battleCreatorWorkerSaga);
}

/*=======================================================================================
// Once a Redux action is intercepted, perform API call for random character data. Then,
// randomize a seed to be used to obtain a random sprite avatar from the Dicebear avatars
// API, which will additionally match gender between APIs before either putting a 
// success or failure result. Note that the character number is passed in by the
// Redux dispatch to specifically only update the corresponding character index.
=======================================================================================*/
function* battleCreatorWorkerSaga(request) {
  console.log("WORKING!");
}