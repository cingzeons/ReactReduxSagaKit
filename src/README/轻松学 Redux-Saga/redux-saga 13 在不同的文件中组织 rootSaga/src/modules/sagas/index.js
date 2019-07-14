import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "./counter";
// import { watchFetchUser, watchFetchTodos } from "./user";
import * as userSagas from "./user"; // 导入所有的 saga

/*
export default function* rootSage(){
    yield all([
        watchIncrementAsync(),
        watchFetchUser(),
        watchFetchTodos(),
    ])
}
*/
export default function* rootSage(){
    yield all([
        watchIncrementAsync(),
        watchFetchUser(),
        watchFetchTodos(),
    ])
}
