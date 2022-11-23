import { call, put, takeEvery } from "redux-saga/effects";
import { createEventApi, getEventApi, getcoinsNaturesApi, getCoinsHistoryApi, updateEventApi, getCoinsSummaryApi } from "src/helpers/fakebackend_helper";
import { getCoinsSummarySuccess, getcoinsNaturesSuccess, coinsAPIError, getCoinsHistorySuccess, updateEventSuccess, createEventSuccess } from "./actions";
import { CREATE_EVENT, GET_COINS_HISTORY, GET_COINS_SUMMARY, GET_EVENT_NATURE, UPDATE_EVENT } from "./actionTypes";
import { toast } from 'react-toastify';
function* getCoinsHistory({ payload: { days } }) {
  try {
    const response = yield call(
      getCoinsHistoryApi, days);
    if (response.status === true) {
      yield put(getCoinsHistorySuccess(response));
    } else {
      yield put(coinsAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(coinsAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* getCoinsSummary({ payload: { } }) {
  try {
    const response = yield call(
      getCoinsSummaryApi);
    if (response.status === true) {
      yield put(getCoinsSummarySuccess(response));
    } else {
      yield put(coinsAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(coinsAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* coinsSaga() {
  yield takeEvery(GET_COINS_HISTORY, getCoinsHistory);
  yield takeEvery(GET_COINS_SUMMARY, getCoinsSummary);
}

export default coinsSaga;
