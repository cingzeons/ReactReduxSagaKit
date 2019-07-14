import {INCREMENT, DECREMENT, INCREMENT_ASYNC} from "../constants";

const initState = {
    counter: 0
};

const counterAsync = (state=0, action) => {
    switch (action.type) {
        case INCREMENT_ASYNC:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

export default counterAsync;