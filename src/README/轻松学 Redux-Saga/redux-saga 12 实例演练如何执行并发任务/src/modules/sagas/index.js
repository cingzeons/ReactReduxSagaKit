import { takeLatest, takeEvery, call, put, delay, all } from "redux-saga/effects";
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

// TODO: redux-saga 10 call 方法
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

    /*function* incrementAsync(){
        const url = `https://jsonplaceholder.typicode.com/users`;
        yield [
            call(delay, 2000),
            call(axios.get, url)
        ];
        yield put({type: INCREMENT});
    }*/

    function* watchIncrementAsync(){
        yield takeEvery(INCREMENT_ASYNC, incrementAsync);
    }

// TODO: redux-saga 11 实例讲解发送 ajax 请求
    /**
     * 使用 saga 发送请求
     */
    function* fetchUser(){
        const url = `https://jsonplaceholder.typicode.com/users`;
        const user = yield call(axios.get, url);
        console.log(user);
    }

    function* watchFetchUser(){
        yield takeEvery(FETCH_USER_REQUEST, fetchUser);
    }

// TODO: redux-saga 12 实例演练如何执行并发任务
    /**
     * 根的 saga
     */
    // 此方法不友好
    /*
    export default function* rootSaga(){
        yield takeEvery(INCREMENT_ASYNC, incrementAsync);
        yield takeEvery(FETCH_USER_REQUEST, fetchUser);
        // watchIncrementAsync();
        // watchFetchUser();
    }*/

    // 以下方法，是过期的，不推荐使用以下方法
    /*export default function* rootSaga(){
        // 并发执行
        yield [
            watchIncrementAsync(),
            watchFetchUser(),
        ]
    }*/

    // 使用 all 方法
    export default function* rootSaga(){
        yield all([
           watchIncrementAsync(),
           watchFetchUser(),
        ]);
    }

// TODO: redux-saga 13 在不同的文件中组织 rootSaga
/**
 *
 */
