import React from "react";
import ReactDOM from "react-dom";

import CharacterSelect from "./containers/CharacterSelect/CharacterSelect";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { reducer } from "./store/reducers/reducer";
import { watcherSaga } from "./store/sagas/sagas";

/*=======================================================================================
// Create Saga middleware and state storage.
=======================================================================================*/
const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware));

/*=======================================================================================
// Run Saga middleware.
=======================================================================================*/
sagaMiddleware.run(watcherSaga);

/*=======================================================================================
// This high order React render will wrap the App within the store provider.
=======================================================================================*/
ReactDOM.render(
  <Provider store={store}>
    <CharacterSelect />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
