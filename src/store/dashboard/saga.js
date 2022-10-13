import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { GET_LATEST_DATA_SUCCESS, GET_LATEST_DATA_ERROR, GET_LATEST_DATA } from "./actionType";
import { getLatestDataSuccess, getLatestDataError } from "./actions";

//Include Both Helper File with needed methods
import {
  getAllData,
}
  from "../../helpers/fakebackend_helper";

function* getLatesSubmissionData({ payload: { email } }) {
  try {
    const response = yield call(getAllData, email);

    if (response.status === true) yield put(getLatestDataSuccess(GET_LATEST_DATA_SUCCESS, response));
    else yield put(getLatestDataError(GET_LATEST_DATA_ERROR, response));
  } catch (error) {
    yield put(getLatestDataError(GET_LATEST_DATA_ERROR, error));
  }
}
function* DashboardSaga() {
  yield takeEvery(GET_LATEST_DATA, getLatesSubmissionData);
}

export default DashboardSaga;
