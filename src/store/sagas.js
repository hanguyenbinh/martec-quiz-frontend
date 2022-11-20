import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";
//Auth
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import DashboardSaga from "./dashboard/saga";
import submissionFormSaga from "./submissionForm/saga";
import EventsSaga from './events/saga'
import PrizessSaga from './prizes/saga'
import CADashboardSaga from "./ca-dashboard/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AccountSaga),
    fork(AuthSaga),
    // fork(ForgetSaga),
    // fork(ProfileSaga),
    // fork(chatSaga),
    // fork(projectSaga),
    // fork(taskSaga),
    // fork(cryptoSaga),
    // fork(ticketsSaga),
    // fork(calendarSaga),
    // fork(ecommerceSaga),
    // fork(crmSaga),
    // fork(invoiceSaga),
    // fork(mailboxSaga),
    // fork(dashboardAnalyticsSaga),
    // fork(dashboardCrmSaga),
    // fork(dashboardEcommerceSaga),
    // fork(dashboardCryptoSaga),
    // fork(dashboardProjectSaga),
    // fork(dashboardNFTSaga),
    // fork(teamSaga),
    fork(submissionFormSaga),
    fork(DashboardSaga),
    fork(EventsSaga),
    fork(PrizessSaga),
    fork(CADashboardSaga)
  ]);
}
