import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducers from "../reducers";

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware, promise, logger)),
);

export default store;
