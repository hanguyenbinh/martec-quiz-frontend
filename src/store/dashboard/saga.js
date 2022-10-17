import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { GET_LATEST_DATA_SUCCESS, GET_LATEST_DATA_ERROR, GET_LATEST_DATA } from "./actionType";
import { getLatestDataSuccess, getLatestDataError } from "./actions";

//Include Both Helper File with needed methods
import {
  getAllData, getAPILatestSubmissionForms,
}
  from "../../helpers/fakebackend_helper";

function* getLatestSubmissionData({ payload: { email } }) {
  try {
    console.log('saga getLat')
    const response = yield call(getAPILatestSubmissionForms, email);

    if (response.status === true) yield put(getLatestDataSuccess(response.data));
    else yield put(getLatestDataError(GET_LATEST_DATA_ERROR, response));
  } catch (error) {
    yield put(getLatestDataError(GET_LATEST_DATA_ERROR, error));
  }
}
function* DashboardSaga() {
  yield takeEvery(GET_LATEST_DATA, getLatestSubmissionData);
}

export default DashboardSaga;
