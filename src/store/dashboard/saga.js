import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { GET_LATEST_DATA_ERROR, GET_LATEST_DATA, GET_RECORDING_PERIOD } from "./actionType";
import { getLatestDataSuccess, getLatestDataError, getRecordingPeriodSuccess } from "./actions";

//Include Both Helper File with needed methods
import {
  getAPILatestSubmissionForms, getRecordingPeriodApi,
}
  from "../../helpers/fakebackend_helper";

function* getSubmissions({ payload: { email, indicatorType } }) {
  try {
    const response = yield call(getAPILatestSubmissionForms, email, indicatorType);
    if (response.status === true) yield put(getLatestDataSuccess(response.data));
    else yield put(getLatestDataError(GET_LATEST_DATA_ERROR, response));
  } catch (error) {
    yield put(getLatestDataError(GET_LATEST_DATA_ERROR, error));
  }
}


function* getRecordingPeriod() {
  try {
    const response = yield call(getRecordingPeriodApi);
    if (response.status === true) yield put(getRecordingPeriodSuccess(response.data));
    else yield put(getLatestDataError(GET_LATEST_DATA_ERROR, response));
  } catch (error) {
    yield put(getLatestDataError(GET_LATEST_DATA_ERROR, error));
  }
}
function* DashboardSaga() {
  yield takeEvery(GET_LATEST_DATA, getSubmissions);
  yield takeEvery(GET_RECORDING_PERIOD, getRecordingPeriod);

}

export default DashboardSaga;