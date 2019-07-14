import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware  from "redux-saga";
import thunk from 'redux-thunk';
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { helloSaga } from "../sagas"

import rootReducers from "../reducers";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, promise, logger)),
);
sagaMiddleware.run(helloSaga);

export default store;
