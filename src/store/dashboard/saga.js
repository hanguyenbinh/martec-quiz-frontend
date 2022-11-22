import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { GET_LATEST_DATA_ERROR, GET_LATEST_DATA } from "./actionType";
import { getLatestDataSuccess, getLatestDataError } from "./actions";

//Include Both Helper File with needed methods
import {
  getAPILatestSubmissionForms,
}
  from "../../helpers/fakebackend_helper";

function* getsubmissions({ payload: { email, indicatorType } }) {
  try {
    console.log('saga getLat')
    const response = yield call(getAPILatestSubmissionForms, email, indicatorType);
    console.log(response)

    if (response.status === true) yield put(getLatestDataSuccess(response.data));
    else yield put(getLatestDataError(GET_LATEST_DATA_ERROR, response));
  } catch (error) {
    yield put(getLatestDataError(GET_LATEST_DATA_ERROR, error));
  }
}
function* DashboardSaga() {
  yield takeEvery(GET_LATEST_DATA, getsubmissions);
}

export default DashboardSaga;
