import { takeLatest, takeEvery, put, delay } from "redux-saga/effects";
import { INCREMENT_ASYNC } from "../constants";
// import { increment, incrementAsync } from "../actions/counter";

// 延时2秒
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync(){
    // 等待 2 秒
    yield delay(2000);

    // put 发送 action
    yield put({type: INCREMENT_ASYNC});
}

export function* watchIncrement(){
    console.log("hello saga!");
    // 测试
    // yield takeLatest(INCREMENT_ASYNC, incrementAsync)

    // 监听 action
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}