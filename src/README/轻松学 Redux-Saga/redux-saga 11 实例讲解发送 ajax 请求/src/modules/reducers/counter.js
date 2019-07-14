import { INCREMENT, DECREMENT } from "../constants";

const initState = {
    counter: 0
};

const counter = (state=initState, action={}) => {
    switch (action.type) {
        case INCREMENT:
            console.log({...state, counter: action.counter});
            return {...state, counter: action.counter};
        case DECREMENT:
            console.log({...state, counter: action.counter});
            return {...state, counter: action.counter};
        default:
            return state;
    }
};

export default counter;