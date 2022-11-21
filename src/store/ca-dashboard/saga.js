import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { CA_DASHBOARD_API_ERROR, GET_EVENT_SUMMARIES, GET_ORGANISATION_EVENTS, GET_ORGANISATION_SUMMARIES, GET_SUBMISSION_COMPARATION } from "./actionType";
import { CADashboardAPIError, getOrgSummariesSuccess, getEventSummariesSuccess, getOrgEventsSuccess, getSubmissionComparationSuccess } from "./actions";

//Include Both Helper File with needed methods
import {
  getEventSummariesApi, getOrganisationEventsApi, getOrganisationSummariesApi, getSubmissionComparationApi,
}
  from "../../helpers/fakebackend_helper";

function* getOrganisationSummaries({ payload: { } }) {
  try {
    const response = yield call(getOrganisationSummariesApi);
    if (response.status === true) yield put(getOrgSummariesSuccess(response.data));
    else yield put(CADashboardAPIError(CA_DASHBOARD_API_ERROR, response));
  } catch (error) {
    yield put(CADashboardAPIError(CA_DASHBOARD_API_ERROR, error));
  }
}

function* getOrgEvents({ payload: { orgId } }) {
  try {
    const response = yield call(getOrganisationEventsApi, orgId);
    if (response.status === true) yield put(getOrgEventsSuccess(response.data));
    else yield put(CADashboardAPIError(CA_DASHBOARD_API_ERROR, response));
  } catch (error) {
    yield put(CADashboardAPIError(CA_DASHBOARD_API_ERROR, error));
  }
}

function* getEventSummaries({ payload: { eventId } }) {
  try {
    const response = yield call(getEventSummariesApi, eventId);
    if (response.status === true) yield put(getEventSummariesSuccess(response.data));
    else yield put(CADashboardAPIError(CA_DASHBOARD_API_ERROR, response));
  } catch (error) {
    yield put(CADashboardAPIError(CA_DASHBOARD_API_ERROR, error));
  }
}

function* getSubmissionComparation({ payload: { indicatorType, projectTypeA, projectTypeB, companySizeA, companySizeB } }) {
  console.log('GET_SUBMISSION_COMPARATION saga')
  try {
    const response = yield call(getSubmissionComparationApi, { indicatorType, projectTypeA, projectTypeB, companySizeA, companySizeB });
    if (response.status === true) yield put(getSubmissionComparationSuccess(response.data));
    else yield put(CADashboardAPIError(CA_DASHBOARD_API_ERROR, response));
  } catch (error) {
    yield put(CADashboardAPIError(CA_DASHBOARD_API_ERROR, error));
  }
}

function* CADashboardSaga() {
  yield takeEvery(GET_ORGANISATION_SUMMARIES, getOrganisationSummaries);
  yield takeEvery(GET_ORGANISATION_EVENTS, getOrgEvents);
  yield takeEvery(GET_EVENT_SUMMARIES, getEventSummaries);
  yield takeEvery(GET_SUBMISSION_COMPARATION, getSubmissionComparation);
}

export default CADashboardSaga;
