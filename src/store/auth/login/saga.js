import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// Login Redux States
import { GET_ORGANISATIONS, LOGIN_CHALLENGE, LOGIN_INITIATE, LOGOUT_USER, REGISTER_CHALLENGE, REGISTER_INITIATE } from "./actionTypes";
import { apiError, getOrganisationsSuccess, loginInitiateSuccess, loginSuccess, logoutUserSuccess, registerChallengeSuccess } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  getOrganisationsApi,
  postChallengeLogin,
  postChallengeRegister,
  postInitiate,
  postInitiateRegister,
  postLogin,
} from "../../../helpers/fakebackend_helper";

const fireBaseBackend = getFirebaseBackend();

function* loginUser({ payload: { email, history } }) {
  try {
    const accessToken = localStorage.getItem('accessToken')
    const response = yield call(
      postLogin,
      {
        email,
      },
      accessToken);
    localStorage.setItem("authUser", JSON.stringify(response));
    if (response.status === "success") {
      yield put(loginSuccess(response));
      history.push("/dashboard");
    } else {
      yield put(apiError(response));
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
      localStorage.setItem("challengeId", JSON.stringify(response.data.data.challenge_id));
      yield put(loginInitiateSuccess({ challengeId: response.data.data.challenge_id }));
      history.push("/login");
    } else {
      yield put(apiError(response));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* registerInitiate({ payload: { email, history } }) {
  try {
    const response = yield call(postInitiateRegister, {
      email,
    });

    if (response.status === true) {
      localStorage.setItem("challengeId", JSON.stringify(response.data.data.challenge_id));
      yield put(loginInitiateSuccess({ challengeId: response.data.data.challenge_id }));
      history.push("/register-challenge");
    } else {
      yield put(apiError(response));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* loginChallenge({ payload: { orgId, email, challengeId, otp, history } }) {
  try {
    const response = yield call(postChallengeLogin, {
      email,
      challengeId,
      challengeValue: otp,
      orgId
    });
    if (response.status === true) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem('email', email);
      localStorage.setItem('orglogo', response.data.org?.org_logo)
      localStorage.setItem('orgName', response.data.org?.org_name)
      localStorage.setItem('organisationType', response.data.org?.org_type)
      localStorage.setItem('lastLogin', JSON.stringify(response.data.lastLogin))
      yield put(loginSuccess(response));
      if (response.data.org.org_type === 'company') history.push("/dashboard");
      if (response.data.org.org_type === 'association') history.push("/ca-dashboard");
    } else {
      yield put(apiError(response));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* registerChallenge({ payload: { email, challengeId, otp, history } }) {
  try {
    const response = yield call(postChallengeRegister, {
      email,
      challengeId,
      challengeValue: otp,
    });
    if (response.status === true) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem('email', email);
      yield put(registerChallengeSuccess(response.data.accessToken));
      history.push("/user-register");
    } else {
      yield put(apiError(response.data.errmsg));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser() {
  try {
    localStorage.clear();
    yield put(logoutUserSuccess(LOGOUT_USER, true));
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}

function* getOrganisations() {
  try {
    const response = yield call(getOrganisationsApi, {});
    if (response.status === true) {
      yield put(getOrganisationsSuccess(response));
    } else {
      yield put(apiError(response));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGOUT_USER, logoutUser);
  yield takeEvery(LOGIN_INITIATE, loginInitiate);
  yield takeEvery(LOGIN_CHALLENGE, loginChallenge);
  yield takeEvery(REGISTER_INITIATE, registerInitiate);
  yield takeEvery(REGISTER_CHALLENGE, registerChallenge);
  yield takeEvery(GET_ORGANISATIONS, getOrganisations);
}

export default authSaga;