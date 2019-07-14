import { INCREMENT, DECREMENT } from "../constants";

export const increment = (state) => dispatch => {
    dispatch({
        type: INCREMENT,
        counter: state + 1,
        user: "Jean"
    });
    /*return {
        type: INCREMENT,
        counter: state + 1,
        user: "Jean"
    }*/

};

// 第一种方法
/*export const decrement = (state) => dispatch => {
    dispatch({
        type: DECREMENT,
        counter: state - 1,
        user: "CC"
    });
};*/

// 第二种
export const decrement = (state) => {
    return (dispatch, getState) => {
        console.log("getState===",getState());
        dispatch({
            type: DECREMENT,
            counter: state - 1,
            user: "CC"
        });
    }
};