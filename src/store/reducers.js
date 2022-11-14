import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";
import Dashboard from "./dashboard/reducer";
import Events from './events/reducer';
import Prizes from './prizes/reducer'



import SubmissionForm from "./submissionForm/reducer";

const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Account,
    ForgetPassword,
    Profile,
    SubmissionForm,
    Dashboard,
    Events,
    Prizes
});

export default rootReducer;