import { call, put, takeEvery } from "redux-saga/effects";
import { createEventApi, createTemplateApi, deleteEventApi, deleteTemplateApi, getEventApi, getEventNaturesApi, getEventsApi, getTemplateApi, getTemplatesApi, updateEventApi, updateTemplateApi } from "src/helpers/fakebackend_helper";
import { getEventDetailsSuccess, getEventNaturesSuccess, eventAPIError, getEventsSuccess, updateEventSuccess, createEventSuccess, deleteEventSuccess, getTemplatesSuccess, getTemplateDetailsSuccess, updateTemplateSuccess, createTemplateSuccess, deleteTemplateSuccess } from "./actions";
import { CREATE_EVENT, CREATE_TEMPLATE, DELETE_EVENT, DELETE_TEMPLATE, GET_EVENTS, GET_EVENT_DETAILS, GET_EVENT_NATURE, GET_TEMPLATES, GET_TEMPLATE_DETAILS, UPDATE_EVENT, UPDATE_TEMPLATE } from "./actionTypes";
import { toast } from 'react-toastify';
function* getEvents({ payload: { page, limit, history } }) {
  try {
    const response = yield call(
      getEventsApi, page, limit);
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

function* getEventNatures({ payload: { } }) {
  try {
    const response = yield call(
      getEventNaturesApi);
    if (response.status === true) {
      yield put(getEventNaturesSuccess(response));
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

function* createEvent({ payload: { data, history } }) {
  try {
    const response = yield call(
      createEventApi, { data });
    if (response.status === true) {
      yield put(createEventSuccess(response));
      history.push('/events')
      toast.success("Event is created successfully", { autoClose: 3000 });
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* deleteEvent({ payload: { id } }) {
  console.log('saga deleteevent', id)
  try {
    const response = yield call(
      deleteEventApi, id);
    if (response.status === true) {
      yield put(deleteEventSuccess(response));
      toast.success("Event is deleted successfully", { autoClose: 3000 });
      window.location.reload(false);
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* getTemplates({ payload: { page, limit, history } }) {
  try {
    const response = yield call(
      getTemplatesApi, page, limit);
    if (response.status === true) {
      yield put(getTemplatesSuccess(response));
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* getTemplate({ payload: { id, history } }) {
  try {
    const response = yield call(
      getTemplateApi, id);
    if (response.status === true) {
      yield put(getTemplateDetailsSuccess(response));
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}


function* updateTemplate({ payload: { id, data, history } }) {
  try {
    const response = yield call(
      updateTemplateApi, { data, id });
    if (response.status === true) {
      yield put(updateTemplateSuccess(response));
      history.push('/events')
      toast.success("Template is updated successfully", { autoClose: 3000 });
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* createTemplate({ payload: { data, history } }) {
  try {
    const response = yield call(
      createTemplateApi, { data });
    if (response.status === true) {
      yield put(createTemplateSuccess(response));
      history.push('/events')
      toast.success("Template is created successfully", { autoClose: 3000 });
    } else {
      yield put(eventAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(eventAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* deleteTemplate({ payload: { id } }) {
  try {
    const response = yield call(
      deleteTemplateApi, id);
    if (response.status === true) {
      yield put(deleteTemplateSuccess(response));
      toast.success("Template is deleted successfully", { autoClose: 3000 });
      window.location.reload(false);
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
  yield takeEvery(GET_EVENT_NATURE, getEventNatures);
  yield takeEvery(UPDATE_EVENT, updateEvent);
  yield takeEvery(CREATE_EVENT, createEvent);
  yield takeEvery(DELETE_EVENT, deleteEvent);
  yield takeEvery(GET_TEMPLATES, getTemplates);
  yield takeEvery(GET_TEMPLATE_DETAILS, getTemplate);
  yield takeEvery(UPDATE_TEMPLATE, updateTemplate);
  yield takeEvery(CREATE_TEMPLATE, createTemplate);
  yield takeEvery(DELETE_TEMPLATE, deleteTemplate);
}

export default eventSaga;