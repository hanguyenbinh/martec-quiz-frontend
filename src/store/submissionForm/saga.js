import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { GET_DEFAULT_SUBMISSION, GET_DRAFT_SUBMISSION_FORM, GET_SUBMISSION_FORM, SUBMIT_DEFAULT_SUBMISSIONS, SUBMIT_DRAFT_SUBMISSIONS, SUBMIT_FORM_DATA, UPDATE_SUBMISSION } from "./actionTypes";
import { getDefaultSubmissionsSuccess, getDraftSubmissionFormSuccess, getSubmissionFormsSuccess, portalApiError, postSubmissionFormSuccess, submitDefaultSubmissionsSuccess, submitDraftSubmissionsSuccess, updateSubmissionSuccess, } from "./actions";

import { getDefaultSubbmissionsApi, getDraftSubmissionFormApi, getSubmissionHistoryApi, postDefaultSubmissionsApi, postDraftSubmissionsApi, postSubmission, updateSubmissionApi } from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";


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

function* postDefaultSubmission({ payload: { data, history } }) {
  try {
    const response = yield call(
      postDefaultSubmissionsApi,
      data);
    if (response.status === true) {
      yield put(submitDefaultSubmissionsSuccess(response));
      toast.success("upload successfully", { autoClose: 3000 });
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

function* getDraftSubmissionForm({ payload: { id } }) {
  try {
    const response = yield call(
      getDraftSubmissionFormApi, id);
    if (response.status === true) {
      yield put(getDraftSubmissionFormSuccess(response.data));
      toast.success('Get Draft submission success')
    } else {
      yield put(portalApiError(response));
    }
  } catch (error) {
    yield put(portalApiError(error));
  }
}

function* updateSubmissionSaga({ payload: { id, data, history } }) {
  try {
    const response = yield call(
      updateSubmissionApi, id,
      data);
    if (response.status === true) {
      yield put(updateSubmissionSuccess(response));
      history.push("/submissions-history");
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
  yield takeEvery(SUBMIT_DEFAULT_SUBMISSIONS, postDefaultSubmission);
  yield takeEvery(GET_DRAFT_SUBMISSION_FORM, getDraftSubmissionForm);
  yield takeEvery(UPDATE_SUBMISSION, updateSubmissionSaga);
}



export default submissionFormSaga;
