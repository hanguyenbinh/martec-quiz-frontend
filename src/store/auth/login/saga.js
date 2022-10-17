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
    console.log(email)
    if (process.env.REACT_APP_API_URL) {
      const response = yield call(postInitiate, {
        email,
      });
      sessionStorage.setItem("challengeId", JSON.stringify(response));
      if (response.status === 200) {
        yield put(loginInitiateSuccess({ challengeId: response.data.challengeId }));
        history.push("/login");
      } else {
        yield put(apiError(response));
      }
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* loginChallenge({ payload: { email, challengeId, otp, history } }) {
  try {
    console.log('saga loginChallenge', email, challengeId, otp)
    if (process.env.REACT_APP_API_URL) {
      const response = yield call(postChallenge, {
        email,
        challengeId,
        challengeValue: otp,
      });
      console.log('saga loginChallenge', response)
      if (response.status === 200) {
        sessionStorage.setItem("accessToken", JSON.stringify(response.data.accesstoken));
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
