import { combineReducers } from "redux";
import counter from "./counter";
import user from "./user";
import counterAsync from "./counterAsync";


const rootReducers = combineReducers({
    counter,
    user,
    counterAsync,
});

export default rootReducers;