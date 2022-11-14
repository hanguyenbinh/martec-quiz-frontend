import { call, put, takeEvery } from "redux-saga/effects";
import { getPrizesApi } from "src/helpers/fakebackend_helper";
import { getPrizesError, getPrizesSuccess } from "./actions";
import { GET_PRIZES } from "./actionTypes";

function* getPrizes({ payload: { history } }) {
  try {
    const response = yield call(
      getPrizesApi);
    console.log('getPrizes', response)
    if (response.status === true) {
      yield put(getPrizesSuccess(response));
    } else {
      yield put(getPrizesError(response));
    }
  } catch (error) {
    yield put(getPrizesError(error));
  }
}

function* evetnsSaga() {
  yield takeEvery(GET_PRIZES, getPrizes);
}

export default evetnsSaga;
