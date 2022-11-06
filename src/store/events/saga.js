import { call, put, takeEvery } from "redux-saga/effects";
import { getEventsApi } from "src/helpers/fakebackend_helper";
import { getEventsError, getEventsSuccess } from "./actions";
import { GET_EVENTS } from "./actionTypes";

function* getEvents({ payload: { history } }) {
  try {
    const response = yield call(
      getEventsApi);
    if (response.status === true) {
      yield put(getEventsSuccess(response));
    } else {
      yield put(getEventsError(response));
    }
  } catch (error) {
    yield put(getEventsError(error));
  }
}

function* evetnsSaga() {
  yield takeEvery(GET_EVENTS, getEvents);
}

export default evetnsSaga;
