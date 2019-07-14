import { takeLatest, takeEvery, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import { INCREMENT_ASYNC, INCREMENT, FETCH_USER_REQUEST } from "../constants";
// import { increment, incrementAsync } from "../actions/counter";

// 延时2秒
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/*function* incrementAsync(){
    // 等待 2 秒
    yield delay(2000);

    // put 发送 action
    yield put({type: INCREMENT});
}

export function* watchIncrementAsync(){
    console.log("hello saga!");
    // takeLatest 它只运行一次，如果有其它一起运行的，那么它就只运行最后一个
    // yield takeLatest(INCREMENT_ASYNC, incrementAsync)

    // 监听 action
    yield takeLatest(INCREMENT_ASYNC, incrementAsync)
}*/

// redux-saga 10 call 方法
/**
 * 以前
 * delay(2000);
 *
 * 现在
 * call(delay, 1000)
 */
function* incrementAsync(){
    // yield call(delay, 1000);
    yield delay(2000);
    yield put({type: INCREMENT});
}

export function* watchIncrementAsync(){
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

// redux-saga 11 实例讲解发送 ajax 请求
/**
 * 使用 saga 发送请求
 */
function* fetchUser(){
    const url = `https://jsonplaceholder.typicode.com/users`;
    // const user = yield axios.get(url);
    const user = yield call(axios.get, url);
    console.log(user);
}

export function* watchFetchUser(){
    yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}
