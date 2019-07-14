import {INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCEEDED,  FETCH_USER_FAILURE} from "../constants";

const initialState = {
    isFetching: false,
    error: null,
    user: null,
};

const user = (state=initialState, action={}) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:    // 正在加载中的状态
            return {
                isFetching: true,
                error: null,
                user: null
            };
        case FETCH_USER_SUCCEEDED: // 它已不是正在加载中的状态了
            return {
                isFetching: false,
                error: null,
                user: action.user
            };
        case FETCH_USER_FAILURE: // 错误状态
            console.log("错误状态", action.error);
            return {
                isFetching: false,
                error: action.error,
                user: null
            };
        default:
            return state;
    }
};

export default user;