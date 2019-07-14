import { INCREMENT, DECREMENT } from "../constants";

const initState = {
    user: ''
};

const user = (state=initState, action={}) => {
    switch (action.type) {
        case INCREMENT:
            console.log({...state, user: action.user});
            return {...state, user: action.user};
        case DECREMENT:
            console.log({...state, user: action.user});
            return {...state, user: action.user};
        default:
            return state;
    }
};

export default user;