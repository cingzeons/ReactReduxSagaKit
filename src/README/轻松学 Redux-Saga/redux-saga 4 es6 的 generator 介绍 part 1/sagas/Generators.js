const log = console.log;

/*function* gen(){
    log("xxxx111");
    log("xxxx22222");
    log("xxx333333x");
}
gen().next();*/

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

/*输出结果
    xxxx111
    xxxx22222
    xxx333333x
    all done*/



