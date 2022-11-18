import { GET_PRIZES, PRIZE_API_ERROR, GET_PRIZES_SUCCESS, GET_PRIZE, GET_PRIZE_SUCCESS, UPDATE_PRIZE, UPDATE_PRIZE_SUCCESS, CREATE_PRIZE, CREATE_PRIZE_SUCCESS } from "./actionTypes";

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

export const getPrize = (id, history) => {
  return {
    type: GET_PRIZE,
    payload: { id, history }
  }
}

export const getPrizeSuccess = response => {
  return {
    type: GET_PRIZE_SUCCESS,
    payload: response
  }
}

export const updatePrize = (id, data, history) => {
  return {
    type: UPDATE_PRIZE,
    payload: { id, data, history }
  }
}

export const updatePrizeSuccess = response => {
  return {
    type: UPDATE_PRIZE_SUCCESS,
    payload: response
  }
}

export const createPrize = (data, history) => {
  return {
    type: CREATE_PRIZE,
    payload: { data, history }
  }
}

export const createPrizeSuccess = response => {
  return {
    type: CREATE_PRIZE_SUCCESS,
    payload: response
  }
}


export const prizeAPIError = response => {
  return {
    type: PRIZE_API_ERROR,
    payload: response
  }
}

