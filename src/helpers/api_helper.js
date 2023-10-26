import axios from "axios";
import { isArray } from "lodash";
import { api } from "../config";

// default
axios.defaults.baseURL = api.API_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";


// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    if (error.response.data.statusCode === 401) {
      localStorage.clear();
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let errorMsg = '';
    if (isArray(error.response.data.message)) {
      errorMsg = error.response.data.message.join(', ')
    }
    else errorMsg = error.response.data.message;
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error: " + errorMsg;
        break;
      case 401:
        message = "Invalid credentials: " + errorMsg;
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found: " + errorMsg;
        break;
      default:
        message = errorMsg;
    }
    return Promise.reject(message);
  }
);
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token) => {
  // axios.defaults.headers["Authorization"] = "Bearer " + token;
};

axios.interceptors.request.use(

  function (config) {

    const accessToken = getLoggedinUser();
    console.log('axios.interceptors.request', accessToken)
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;

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
    return axios.post(url, data, options);
  };
  /**
   * Updates data
   */
  update = (url, data) => {
    return axios.put(url, data);
  };
  /**
   * Delete
   */
  delete = (url, config) => {
    return axios.delete(url, { ...config });
  };
}
const getLoggedinUser = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
};
const getOrganisationType = () => {
  return localStorage.getItem("organisationType");
}

export { APIClient, setAuthorization, getLoggedinUser, getOrganisationType };