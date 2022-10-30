import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { LOGIN_CHALLENGE, LOGIN_INITIATE, LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, loginInitiateSuccess, loginSuccess, logoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postChallenge,
  postInitiate,
  postLogin,
} from "../../../helpers/fakebackend_helper";

const fireBaseBackend = getFirebaseBackend();

function* loginUser({ payload: { email, history } }) {
  try {
    if (process.env.REACT_APP_API_URL) {
      const accessToken = sessionStorage.getItem('accessToken')
      const response = yield call(
        postLogin,
        {
          email,
        },
        accessToken);
      sessionStorage.setItem("authUser", JSON.stringify(response));
      if (response.status === "success") {
        yield put(loginSuccess(response));
        history.push("/dashboard");
      } else {
        yield put(apiError(response));
      }
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* loginInitiate({ payload: { email, history } }) {
  try {
    const response = yield call(postInitiate, {
      email,
    });

    if (response.status === true) {
      sessionStorage.setItem("challengeId", JSON.stringify(response.data.data.challenge_id));
      yield put(loginInitiateSuccess({ challengeId: response.data.data.challenge_id }));
      history.push("/login");
    } else {
      yield put(apiError(response));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* loginChallenge({ payload: { email, challengeId, otp, history } }) {
  try {
    if (process.env.REACT_APP_API_URL) {
      const response = yield call(postChallenge, {
        email,
        challengeId,
        challengeValue: otp,
      });
      if (response.status === true) {
        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem('email', email);
        yield put(loginSuccess(response));
        history.push("/dashboard");
      } else {
        yield put(apiError(response));
      }
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser() {
  try {
    sessionStorage.removeItem("authUser");
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(LOGOUT_USER, response));
    } else {
      yield put(logoutUserSuccess(LOGOUT_USER, true));
    }
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
  yield takeEvery(LOGIN_INITIATE, loginInitiate);
  yield takeEvery(LOGIN_CHALLENGE, loginChallenge);
}

export default authSaga;
