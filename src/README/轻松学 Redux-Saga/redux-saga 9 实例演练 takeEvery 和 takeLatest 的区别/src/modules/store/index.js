import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware  from "redux-saga";
import thunk from 'redux-thunk';
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { watchIncrementAsync } from "../sagas"

import rootReducers from "../reducers";
// 使用中间件
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, promise, logger)),
);
sagaMiddleware.run(watchIncrementAsync);

export default store;
