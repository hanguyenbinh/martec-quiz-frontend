import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SOCIAL_LOGIN,
  RESET_LOGIN_FLAG,
  LOGIN_INITIATE,
  LOGIN_INITIATE_SUCCESS,
  LOGIN_CHALLENGE
} from "./actionTypes";

export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  };
};

export const loginInitiate = (email, history) => {
  return {
    type: LOGIN_INITIATE,
    payload: { email, history },
  };
};

export const loginChallenge = (otp, history) => {
  return {
    type: LOGIN_CHALLENGE,
    payload: { otp, history },
  };
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginInitiateSuccess = response => {
  console.log(response);
  return {
    type: LOGIN_INITIATE_SUCCESS,
    payload: response,
  };
};



export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const socialLogin = (data, history, type) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { data, history, type },
  };
};

export const resetLoginFlag = () => {
  return {
    type: RESET_LOGIN_FLAG,
  }
}
