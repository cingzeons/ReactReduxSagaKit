import {delay, takeEvery, put, call, all, fork} from "redux-saga/effects";
import axios from "axios";

import { FETCH_USER_REQUEST, FETCH_TODOS_REQUEST, FETCH_USER_SUCCEEDED, FETCH_USER_FAILURE } from "../constants";

// 发起请求
function* fetchUser(){
    // const user = yield call(axios.get, `https://jsonplaceholder.typicode.com/users`);
    // yield put({type: FETCH_USER_REQUEST, user: user});
    // console.log('user', user);
    // 错误处理
    try{
        const user = yield call(axios.get, `https://jsonplaceholder.typicode.com/users`);
        yield put({type: FETCH_USER_SUCCEEDED, user: user});
    }catch(e){
        yield put({type: FETCH_USER_FAILURE, error: e.message});
        console.dir(e)
    }

}

function* fetchTodos(){
    const todos = yield call(axios.get, `https://jsonplaceholder.typicode.com/todos`);

    console.log("todos", todos);
}


// 监听数据
function* watchFetchUser(){
    yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}

function* watchFetchTodos(){
    yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos)
}

// 把多个sagas组织起来
export const userSagas = [
    watchFetchUser(),
    watchFetchTodos(),
]