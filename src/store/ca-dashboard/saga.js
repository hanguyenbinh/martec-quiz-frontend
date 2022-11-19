import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { GET_LATEST_DATA_ERROR, GET_LATEST_DATA } from "./actionType";
import { getLatestDataSuccess, CADashboardAPIError, getOrgSummariesSuccess } from "./actions";

//Include Both Helper File with needed methods
import {
  getAPILatestSubmissionForms, getOrganisationSummariesApi,
}
  from "../../helpers/fakebackend_helper";

function* getsubmissions({ payload: { email } }) {
  try {
    console.log('saga getLat')
    const response = yield call(getAPILatestSubmissionForms, email);
    console.log(response)

    if (response.status === true) yield put(getLatestDataSuccess(response.data));
    else yield put(CADashboardAPIError(GET_LATEST_DATA_ERROR, response));
  } catch (error) {
    yield put(CADashboardAPIError(GET_LATEST_DATA_ERROR, error));
  }
}
function* getOrganisationSummaries({ payload: { } }) {
  try {
    const response = yield call(getOrganisationSummariesApi);
    if (response.status === true) yield put(getOrgSummariesSuccess(response.data));
    else yield put(CADashboardAPIError(GET_LATEST_DATA_ERROR, response));
  } catch (error) {
    yield put(CADashboardAPIError(GET_LATEST_DATA_ERROR, error));
  }
}
function* CADashboardSaga() {
  yield takeEvery(GET_LATEST_DATA, getsubmissions);
}

export default CADashboardSaga;
