import { INCREMENT, DECREMENT } from "../constants";

const initState = {
    user: ''
};

const user = (state=initState, action={}) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, user: 'Jean'};
        case DECREMENT:
            return {...state, user: 'WenDay'};
        default:
            return state;
    }
};

export default user;