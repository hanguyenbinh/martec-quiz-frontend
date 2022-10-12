import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { GET_SUBMISSION_FORM, SUBMIT_FORM_DATA } from "./actionTypes";
import { getSubmissionFormsSuccess, portalApiError, submitESGDataSuccess, } from "./actions";

import { getAPISubmissionForms, postESGData } from "../../helpers/fakebackend_helper";


function* submitESGData({ payload: { data, history } }) {
  console.log('saga submitESGData', data)
  try {
    if (process.env.REACT_APP_API_URL) {
      const response = yield call(
        postESGData,
        data);
      if (response.status === true) {
        yield put(submitESGDataSuccess(response));
        // history.push("/dashboard");
      } else {
        yield put(portalApiError(response));
      }
    }
  } catch (error) {
    yield put(portalApiError(error));
  }
}

function* getSubmissionForms({ payload: { history } }) {
  try {
    if (process.env.REACT_APP_API_URL) {
      const response = yield call(
        getAPISubmissionForms,
        {});
      if (response.status === true) {
        yield put(getSubmissionFormsSuccess(response.data));
        // history.push("/dashboard");
      } else {
        yield put(portalApiError(response));
      }
    }
  } catch (error) {
    yield put(portalApiError(error));
  }
}


function* submissionFormSaga() {
  yield takeEvery(SUBMIT_FORM_DATA, submitESGData);
  yield takeEvery(GET_SUBMISSION_FORM, getSubmissionForms);
}

export default submissionFormSaga;
