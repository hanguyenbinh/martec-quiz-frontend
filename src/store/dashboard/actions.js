import {
  GET_LATEST_DATA, GET_LATEST_DATA_ERROR, GET_LATEST_DATA_SUCCESS
} from "./actionType";

// common success
export const getLatestData = (email) => {
  console.log('action getLatestData', email)
  return {
    type: GET_LATEST_DATA,
    payload: { email },
  }
};

export const getLatestDataSuccess = (data) => ({
  type: GET_LATEST_DATA_SUCCESS,
  payload: { data },
});

export const getLatestDataError = (data) => ({
  type: GET_LATEST_DATA_ERROR,
  payload: { data },
});