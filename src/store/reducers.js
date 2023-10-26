import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";


const rootReducer = combineReducers({
    // public
    Layout,
    Login
});

export default rootReducer;