import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import { createPrizeApi, getPrizeApi, getPrizesApi, updatePrizeApi } from "src/helpers/fakebackend_helper";
import { prizeAPIError, getPrizesSuccess, getPrizeSuccess, updatePrizeSuccess, createPrizeSuccess } from "./actions";
import { CREATE_PRIZE, GET_PRIZE, GET_PRIZES, UPDATE_PRIZE } from "./actionTypes";

function* getPrizes({ payload: { page, limit } }) {
  try {
    const response = yield call(
      getPrizesApi, page, limit);
    console.log('getPrizes', response)
    if (response.status === true) {
      yield put(getPrizesSuccess(response));
    } else {
      yield put(prizeAPIError(response));
      toast.error(response.data.errmsg, { autoClose: 3000 });
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
      toast.error(response.data.errmsg, { autoClose: 3000 });
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
      // history.push('/prizes')
      toast.success("Prize is updated successfully", { autoClose: 3000 });
    } else {
      yield put(prizeAPIError(response));
      console.log('prizeAPIError', response)
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    console.log('prizeAPIError error', error)
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
      console.log('prizeAPIError', response)
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    console.log('prizeAPIError error', error)
    yield put(prizeAPIError(error));
    toast.error(error, { autoClose: 3000 });

  }
}

function* eventSaga() {
  yield takeEvery(GET_PRIZES, getPrizes);
  yield takeEvery(GET_PRIZE, getPrize);
  yield takeEvery(UPDATE_PRIZE, updatePrize);
  yield takeEvery(CREATE_PRIZE, createPrize);
}

export default eventSaga;
