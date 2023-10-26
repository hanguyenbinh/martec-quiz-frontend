import { APIClient } from "./api_helper";
import accessToken from "./jwt-token-access/accessToken";
import * as url from "./url_helper";
import { api as _api } from "../config";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Login Method
export const loginApi = data => api.create(url.POST_LOGIN_REQUEST, data, accessToken);

export const postFacebookImageApi = data => api.create(url.POST_FACEBOOK_IMAGE_REQUEST, data);