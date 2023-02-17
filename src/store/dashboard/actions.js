import {
  GET_LATEST_DATA, GET_LATEST_DATA_ERROR, GET_LATEST_DATA_SUCCESS, GET_RECORDING_PERIOD, GET_RECORDING_PERIOD_SUCCESS
} from "./actionType";

// common success
export const getLatestData = (email, indicatorType) => {
  return {
    type: GET_LATEST_DATA,
    payload: { email, indicatorType },
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

export const getRecordingPeriod = () => {
  return {
    type: GET_RECORDING_PERIOD,
    payload: {},
  }
};

export const getRecordingPeriodSuccess = (data) => ({
  type: GET_RECORDING_PERIOD_SUCCESS,
  payload: { data },
});
