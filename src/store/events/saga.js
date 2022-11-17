import { call, put, takeEvery } from "redux-saga/effects";
import { getEventApi, geteventNaturesApi, getEventsApi, updateEventApi } from "src/helpers/fakebackend_helper";
import { getEventDetailsSuccess, geteventNaturesSuccess, eventAPIError, getEventsSuccess, updateEventSuccess } from "./actions";
import { GET_EVENTS, GET_EVENT_DETAILS, GET_EVENT_NATURE, UPDATE_EVENT } from "./actionTypes";
import { toast } from 'react-toastify';
function* getEvents({ payload: { history } }) {
  try {
    const response = yield call(
      getEventsApi);
    if (response.status === true) {
      yield put(getEventsSuccess(response));
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* getEvent({ payload: { id, history } }) {
  console.log('saga getEvent')
  try {
    const response = yield call(
      getEventApi, id);
    if (response.status === true) {
      yield put(getEventDetailsSuccess(response));
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* geteventNatures({ payload: { } }) {
  try {
    const response = yield call(
      geteventNaturesApi);
    if (response.status === true) {
      yield put(geteventNaturesSuccess(response));
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* updateEvent({ payload: { id, data, history } }) {
  try {
    const response = yield call(
      updateEventApi, { data, id });
    if (response.status === true) {
      yield put(updateEventSuccess(response));
      history.push('/events')
      toast.success("Event is updated successfully", { autoClose: 3000 });
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* eventSaga() {
  yield takeEvery(GET_EVENTS, getEvents);
  yield takeEvery(GET_EVENT_DETAILS, getEvent);
  yield takeEvery(GET_EVENT_NATURE, geteventNatures);
  yield takeEvery(UPDATE_EVENT, updateEvent);
}

export default eventSaga;
