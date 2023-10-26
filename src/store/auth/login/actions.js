import {
  LOGIN_MESSAGE,
  LOGIN_MESSAGE_SUCCESS,
  LOGOUT_MESSAGE,
  LOGOUT_MESSAGE_SUCCESS,
  API_ERROR,
  RESET_LOGIN_FLAG,
  POST_FACEBOOK_IMAGE_MESSAGE,
  POST_FACEBOOK_IMAGE_MESSAGE_SUCCESS,
} from "./actionTypes";

export const loginAction = (data, history) => {
  return {
    type: LOGIN_MESSAGE,
    payload: { data, history },
  };
};



export const loginActionSuccess = user => {
  return {
    type: LOGIN_MESSAGE_SUCCESS,
    payload: user,
  };
};

export const postFacebookImageAction = (data, history) => {
  return {
    type: POST_FACEBOOK_IMAGE_MESSAGE,
    payload: { data, history },
  };
};

export const postFacebookImageActionSuccess = data => {
  return {
    type: POST_FACEBOOK_IMAGE_MESSAGE_SUCCESS,
    payload: data,
  };
};



export const logoutAction = history => {
  return {
    type: LOGOUT_MESSAGE,
    payload: { history },
  };
};

export const logoutActionSuccess = () => {
  return {
    type: LOGOUT_MESSAGE_SUCCESS,
    payload: {},
  };
};

export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  };
};


export const resetLoginFlag = () => {
  return {
    type: RESET_LOGIN_FLAG,
  }
}