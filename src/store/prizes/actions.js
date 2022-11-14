import { GET_PRIZES, GET_PRIZES_ERROR, GET_PRIZES_SUCCESS } from "./actionTypes";

export const getPrizes = () => {
  return {
    type: GET_PRIZES,
    payload: {}
  }
}

export const getPrizesSuccess = response => {
  return {
    type: GET_PRIZES_SUCCESS,
    payload: response
  }
}


export const getPrizesError = response => {
  return {
    type: GET_PRIZES_ERROR,
    payload: response
  }
}

