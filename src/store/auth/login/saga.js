import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";

// Login Redux States
import { LOGIN_MESSAGE, POST_FACEBOOK_IMAGE_MESSAGE } from "./actionTypes";
import { apiError, loginActionSuccess, postFacebookImageActionSuccess } from "./actions";

import {
  loginApi,
  postFacebookImageApi
} from "../../../helpers/fakebackend_helper";

function* loginUser({ payload: { data, history } }) {
  try {
    console.log('saga', data)
    const accessToken = localStorage.getItem('accessToken')
    const response = yield call(
      loginApi,
      data,
      accessToken);
    localStorage.setItem("authUser", JSON.stringify(response));
    localStorage.setItem("accessToken", response.data.accessToken);
    if (response.status === true) {
      yield put(loginActionSuccess(response));
      history.push("/dashboard");
    } else {
      yield put(apiError(response));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* postFacebookImage({ payload: { data, history } }) {
  try {
    const response = yield call(
      postFacebookImageApi,
      data);
    if (response.status === true) {
      yield put(postFacebookImageActionSuccess(response));
      toast(response.message)
    } else {
      yield put(apiError(response));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}



function* authSaga() {
  yield takeEvery(LOGIN_MESSAGE, loginUser);
  yield takeEvery(POST_FACEBOOK_IMAGE_MESSAGE, postFacebookImage);
}

export default authSaga;