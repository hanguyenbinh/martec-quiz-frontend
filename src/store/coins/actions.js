import { GET_COINS_HISTORY, COINS_API_ERROR, GET_COINS_HISTORY_SUCCESS, GET_COINS_SUMMARY, GET_COINS_SUMMARY_SUCCESS } from "./actionTypes";

export const getCoinsHistory = (days = 0) => {
  return {
    type: GET_COINS_HISTORY,
    payload: { days }
  }
}

export const getCoinsSummary = () => {
  return {
    type: GET_COINS_SUMMARY,
    payload: { }
  }
}

export const getCoinsHistorySuccess = response => {
  return {
    type: GET_COINS_HISTORY_SUCCESS,
    payload: response
  }
}

export const getCoinsSummarySuccess = response => {
  return {
    type: GET_COINS_SUMMARY_SUCCESS,
    payload: response
  }
}


export const coinsAPIError = response => {
  return {
    type: COINS_API_ERROR,
    payload: response
  }
}

