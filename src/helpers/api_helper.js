import axios from "axios";
import { api } from "../config";

// default
axios.defaults.baseURL = api.API_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const token = JSON.parse(sessionStorage.getItem("authUser")) ? JSON.parse(sessionStorage.getItem("authUser")).token : null;
if (token)
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  }
);
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token) => {
  ////console.logdisabled('setAuthorization', token)
  axios.defaults.headers["accesstoken"] = token;
};

axios.interceptors.request.use(
  function (config) {
    const accessToken = getLoggedinUser();
    if (accessToken) {
      config.headers["accesstoken"] = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };
  get = (url, params) => {
    let response;

    let paramKeys = [];

    if (params) {
      Object.keys(params).map(key => {
        paramKeys.push(key + '=' + params[key]);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url, data) => {
    const options = {}
    const email = getLoggedinUserEmail();
    if (email) {
      options.params = {
        email
      }
    }
    return axios.post(url, data, options);
  };
  /**
   * Updates data
   */
  update = (url, data) => {
    return axios.patch(url, data);
  };
  /**
   * Delete
   */
  delete = (url, config) => {
    return axios.delete(url, { ...config });
  };
}
const getLoggedinUser = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  ////console.logdisabled('accesstoken', accessToken)
  return accessToken;
};
const getLoggedinUserEmail = () => {
  const email = sessionStorage.getItem("email");
  ////console.logdisabled('email', email)
  return email;
};

export { APIClient, setAuthorization, getLoggedinUser, getLoggedinUserEmail };