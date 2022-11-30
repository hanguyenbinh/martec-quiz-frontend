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
import { toast } from "react-toastify";

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
      toast.success("Register user successfully", { autoClose: 3000 });
      // history.push("/login");
    } else {
      yield put(registerUserFailed(response.message + ': ' + response.data.errmsg));
      toast.error(response.data.errmsg, { autoClose: 3000 });
    }
  } catch (error) {
    console.log('error', error)
    yield put(registerUserFailed(error));
    toast.error(error, { autoClose: 3000 });
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

function* accountSaga() {
  yield all([fork(watchUserRegister)]);
}

export default accountSaga;