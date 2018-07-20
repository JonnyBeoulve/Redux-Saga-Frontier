import React from "react";
import ReactDOM from "react-dom";

import ReduxSagaFrontier from "./containers/ReduxSagaFrontier/ReduxSagaFrontier";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { reducer } from "./store/reducers/reducer";
import { partyCreatorWatcherSaga } from "./store/sagas/partyCreatorSaga";
import { battleCreatorWatcherSaga } from "./store/sagas/battleCreatorSaga";

/*=======================================================================================
// Create Saga middleware and state storage.
=======================================================================================*/
const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware));

/*=======================================================================================
// Run Saga middleware.
=======================================================================================*/
sagaMiddleware.run(partyCreatorWatcherSaga);
sagaMiddleware.run(battleCreatorWatcherSaga);

/*=======================================================================================
// This high order React render will wrap the App within the store provider.
=======================================================================================*/
ReactDOM.render(
  <Provider store={store}>
    <ReduxSagaFrontier />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
