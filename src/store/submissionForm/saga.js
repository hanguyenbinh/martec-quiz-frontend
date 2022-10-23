import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { GET_SUBMISSION_FORM, SUBMIT_FORM_DATA } from "./actionTypes";
import { getSubmissionFormsSuccess, portalApiError, postSubmissionFormSuccess, } from "./actions";

import { getSubmissionHistoryApi, postSubmission } from "../../helpers/fakebackend_helper";


function* postSubmissionForm({ payload: { data, history } }) {
  console.log('saga postSubmissionForm', data)
  try {
    if (process.env.REACT_APP_API_URL) {
      const response = yield call(
        postSubmission,
        data);
      if (response.status === true) {
        yield put(postSubmissionFormSuccess(response));
        history.push("/submissions-history");
      } else {
        yield put(portalApiError(response));
      }
    }
  } catch (error) {
    yield put(portalApiError(error));
  }
}

function* getSubmissionForms({ payload: { email, history } }) {
  try {
    if (process.env.REACT_APP_API_URL) {
      const response = yield call(
        getSubmissionHistoryApi, email);
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
  yield takeEvery(SUBMIT_FORM_DATA, postSubmissionForm);
  yield takeEvery(GET_SUBMISSION_FORM, getSubmissionForms);
}

export default submissionFormSaga;
