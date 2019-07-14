import { all, fork } from "redux-saga/effects";
import { counterSagas } from "./counter";
import { userSagas } from "./user";

/*
export default function* rootSage(){
    yield all([
        watchIncrementAsync(),
        watchFetchUser(),
        watchFetchTodos(),
    ])
}
*/
// console.log(Object.values(userSagas)); //  [ƒ, ƒ]
/**
 * fork 是并行执行
 * @returns {IterableIterator<AllEffect<SimpleEffect<"FORK", ForkEffectDescriptor>>>}
 */
export default function* rootSage(){
    // 1. 普通的写法
    /*yield all([
        fork(watchIncrementAsync()),
        fork(watchFetchUser()),
        fork(watchFetchTodos()),
    ]);*/

    // 2. 高级的写法
    /*yield all([
        ...Object.values(userSagas),
        ...Object.values(counterSagas),
    ].map(fork))*/

    // 3. 高级特别的写法
    yield all([
        ...counterSagas,
        ...userSagas
    ])
}
