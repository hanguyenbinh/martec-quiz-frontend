import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import { createPrizeApi, deletePrizeApi, getPrizeApi, getPrizesApi, getRedemptionHistoryApi, updatePrizeApi } from "src/helpers/fakebackend_helper";
import { prizeAPIError, getPrizesSuccess, getPrizeSuccess, updatePrizeSuccess, createPrizeSuccess, deletePrizeSuccess, getRedemptionHistorySuccess } from "./actions";
import { CREATE_PRIZE, DELETE_PRIZE, GET_PRIZE, GET_PRIZES, GET_REDEMPTION_HISTORY, UPDATE_PRIZE } from "./actionTypes";

function* getPrizes({ payload: { page, limit } }) {
  try {
    const response = yield call(
      getPrizesApi, page, limit);
    if (response.status === true) {
      yield put(getPrizesSuccess(response));
    } else {
      yield put(prizeAPIError(response));
      const msg = typeof response.data.errmsg === 'string' ? response.data.errmsg : response.data.errmsg.join('\r\n')
      toast.error(msg);
    }
  } catch (error) {
    yield put(prizeAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* getRedemptionHistory() {
  try {
    const response = yield call(
      getRedemptionHistoryApi);
    if (response.status === true) {
      yield put(getRedemptionHistorySuccess(response));
    } else {
      yield put(prizeAPIError(response));
      const msg = typeof response.data.errmsg === 'string' ? response.data.errmsg : response.data.errmsg.join('\r\n')
      toast.error(msg);
    }
  } catch (error) {
    yield put(prizeAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}

function* getPrize({ payload: { id, history } }) {
  try {
    const response = yield call(
      getPrizeApi, id);
    if (response.status === true) {
      yield put(getPrizeSuccess(response));
    } else {
      yield put(prizeAPIError(response));
      const msg = typeof response.data.errmsg === 'string' ? response.data.errmsg : response.data.errmsg.join('\r\n')
      toast.error(msg);
    }
  } catch (error) {
    yield put(prizeAPIError(error));
    toast.error(error, { autoClose: 3000 });
  }
}
function* updatePrize({ payload: { id, data, history } }) {
  try {
    const response = yield call(
      updatePrizeApi, { id, data });
    if (response.status === true) {
      yield put(updatePrizeSuccess(response));
      history.push('/prizes')
      toast.success("Prize is updated successfully", { autoClose: 3000 });
    } else {
      yield put(prizeAPIError(response));
      const msg = typeof response.data.errmsg === 'string' ? response.data.errmsg : response.data.errmsg.join('\r\n')
      toast.error(msg);
    }
  } catch (error) {
    yield put(prizeAPIError(error));
    toast.error(error, { autoClose: 3000 });

  }
}

function* createPrize({ payload: { data, history } }) {
  try {
    const response = yield call(
      createPrizeApi, { data });
    if (response.status === true) {
      yield put(createPrizeSuccess(response));
      history.push('/prizes')
      toast.success("Prize is created successfully", { autoClose: 3000 });
    } else {
      yield put(prizeAPIError(response));
      const msg = typeof response.data.errmsg === 'string' ? response.data.errmsg : response.data.errmsg.join('\r\n')
      toast.error(msg);
    }
  } catch (error) {
    yield put(prizeAPIError(error));
    toast.error(error, { autoClose: 3000 });

  }
}

function* deletePrize({ payload: { id } }) {
  try {
    const response = yield call(
      deletePrizeApi, id);
    if (response.status === true) {
      yield put(deletePrizeSuccess(response));
      toast.success("Prize is deleted successfully", { autoClose: 3000 });
      window.location.reload(false);
    } else {
      yield put(prizeAPIError(response));

    }
  } catch (error) {
    yield put(prizeAPIError(error));
    toast.error(error, { autoClose: 3000 });

  }
}

function* eventSaga() {
  yield takeEvery(GET_PRIZES, getPrizes);
  yield takeEvery(GET_REDEMPTION_HISTORY, getRedemptionHistory);
  yield takeEvery(GET_PRIZE, getPrize);
  yield takeEvery(UPDATE_PRIZE, updatePrize);
  yield takeEvery(CREATE_PRIZE, createPrize);
  yield takeEvery(DELETE_PRIZE, deletePrize);
}

export default eventSaga;
