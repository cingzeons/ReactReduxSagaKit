import { delay, takeEvery, put, call, all } from "redux-saga/effects";
import { INCREMENT_ASYNC, INCREMENT } from "../constants";

function* incrementAsync(){
    // yield call(delay, 2000);
    yield delay(2000);
    yield put({type: INCREMENT});
}

export function* watchIncrementAsync(){
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

