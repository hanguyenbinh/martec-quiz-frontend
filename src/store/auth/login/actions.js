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
  LOGIN_CHALLENGE,
  LOGIN_CHALLENGE_SUCCESS,
  REGISTER_CHALLENGE,
  REGISTER_CHALLENGE_SUCCESS,
  REGISTER_INITIATE,
  GET_ORGANISATIONS,
  GET_ORGANISATIONS_SUCCESS
} from "./actionTypes";

export const loginInitiate = (email, orgId, history) => {
  return {
    type: LOGIN_INITIATE,
    payload: { orgId, email, history },
  };
};

export const registerInitiate = (email, history) => {
  return {
    type: REGISTER_INITIATE,
    payload: { email, history },
  };
};

export const loginChallenge = (obj, history) => {
  return {
    type: LOGIN_CHALLENGE,
    payload: { ...obj, history },
  };
};

export const getOrganisations = () => {
  return {
    type: GET_ORGANISATIONS,
    payload: {},
  };
};

export const getOrganisationsSuccess = response => {
  return {
    type: GET_ORGANISATIONS_SUCCESS,
    payload: response,
  };
};

export const registerChallenge = (obj, history) => {
  return {
    type: REGISTER_CHALLENGE,
    payload: { ...obj, history },
  };
};

export const registerChallengeSuccess = accessToken => {
  console.log('registerChallengeSuccess', accessToken)
  return {
    type: REGISTER_CHALLENGE_SUCCESS,
    payload: { accessToken },
  };
};


export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginChallengeSuccess = accessToken => {
  return {
    type: LOGIN_CHALLENGE_SUCCESS,
    payload: accessToken,
  };
};

export const loginInitiateSuccess = response => {
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