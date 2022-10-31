import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//Account Redux states
import { REGISTER_USER } from "./actionTypes";
import { registerUserSuccessful, registerUserFailed } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeRegister,
  postJwtRegister,
  postRegisterUser,
} from "../../../helpers/fakebackend_helper";
import { isArray } from "lodash";

// initialize relavant method of both Auth
const fireBaseBackend = getFirebaseBackend();

// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user, history } }) {
  try {
    console.log('registerUser', user)
    const response = yield call(
      postRegisterUser,
      {
        ...user,
        orgId: user.id,
        orgName: user.org_name,
        id: undefined,
        token: user.accessToken

      });
    if (response.status === true) {
      yield put(registerUserSuccessful(response));
      // history.push("/login");
    } else {
      yield put(registerUserFailed(response.message + ': ' + response.data.errmsg));
    }
  } catch (error) {
    console.log('error', error)
    yield put(registerUserFailed(error));
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

function* accountSaga() {
  yield all([fork(watchUserRegister)]);
}

export default accountSaga;
