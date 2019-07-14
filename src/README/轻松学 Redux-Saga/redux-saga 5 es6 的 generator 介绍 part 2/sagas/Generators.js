const log = console.log;

// TODO 1.
/*function* gen(){
    log("xxxx111");
    log("xxxx22222");
    log("xxx333333x");
}
gen().next();*/


// TODO 2
/*
function* gen(){
    yield log("xxxx111");
    yield log("xxxx22222");
    yield log("xxx333333x");

    log("all done");
}

const myGen = gen();
myGen.next();
myGen.next();
myGen.next();
myGen.next();

输出结果
    xxxx111
    xxxx22222
    xxx333333x
    all done

*/

// TODO: 3. redux-saga 5 es6 的 generator 介绍 part 2
    /*function* gen(){
        yield log("xxxx111");
        yield log("xxxx22222");
        yield log("xxx333333x");
        return "done";
    }

    const myGen = gen();
    log(myGen.next());
    log(myGen.next());
    log(myGen.next());
    log(myGen.next());*/

    // 返回值
    /*
    function* gen(){
        const name = yield "jean";
        console.log(name);
        yield name + "--xxxxxxx1111";
        yield "xxxxxxx33333";
    }

    const myGen = gen();
    log(myGen.next());
    log(myGen.next("Jean"));

    { value: 'jean', done: false }
    Jean
    { value: 'Jean--xxxxxxx1111', done: false }
     */

    /*function* gen(){
        let x = yield "Jean1111";
        let y = yield "Jean2222";
        let z = yield "Jean3333";
        return x + y + z;
    }

    let myGen = gen();
    log(myGen.next());
    log(myGen.next(1));
    log(myGen.next(2));
    log(myGen.next(3));

    // 打印结果
    { value: 'Jean1111', done: false }
    { value: 'Jean2222', done: false }
    { value: 'Jean3333', done: false }
    { value: 6, done: true }*/

