import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { GET_DEFAULT_SUBMISSION, GET_SUBMISSION_FORM, SUBMIT_DRAFT_SUBMISSIONS, SUBMIT_FORM_DATA } from "./actionTypes";
import { getDefaultSubmissionsSuccess, getSubmissionFormsSuccess, portalApiError, postSubmissionFormSuccess, submitDraftSubmissionsSuccess, } from "./actions";

import { getDefaultSubbmissionsApi, getSubmissionHistoryApi, postDraftSubmissionsApi, postSubmission } from "../../helpers/fakebackend_helper";


function* postSubmissionForm({ payload: { data, history } }) {
  ////console.logdisabled('saga postSubmissionForm', data)
  try {
    const response = yield call(
      postSubmission,
      data);
    if (response.status === true) {
      yield put(postSubmissionFormSuccess(response));
      history.push("/submissions-history");
    } else {
      yield put(portalApiError(response));
    }
  } catch (error) {
    yield put(portalApiError(error));
  }
}

function* postDraftSubmission({ payload: { data, history } }) {
  try {
    const response = yield call(
      postDraftSubmissionsApi,
      data);
    if (response.status === true) {
      yield put(submitDraftSubmissionsSuccess(response));
      history.push("/submissions-history");
    } else {
      yield put(portalApiError(response));
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

function* getDefaultSubmissions({ payload: { history } }) {
  try {
    const response = yield call(
      getDefaultSubbmissionsApi);
    if (response.status === true) {
      yield put(getDefaultSubmissionsSuccess(response.data));
      // history.push("/dashboard");
    } else {
      yield put(portalApiError(response));
    }
  } catch (error) {
    yield put(portalApiError(error));
  }
}


function* submissionFormSaga() {
  yield takeEvery(SUBMIT_FORM_DATA, postSubmissionForm);
  yield takeEvery(GET_SUBMISSION_FORM, getSubmissionForms);
  yield takeEvery(GET_DEFAULT_SUBMISSION, getDefaultSubmissions);
  yield takeEvery(SUBMIT_DRAFT_SUBMISSIONS, postDraftSubmission);
}

export default submissionFormSaga;
