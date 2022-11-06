import { GET_EVENTS, GET_EVENTS_ERROR, GET_EVENTS_SUCCESS } from "./actionTypes";

export const getEvents = () => {
  return {
    type: GET_EVENTS,
    payload: {}
  }
}

export const getEventsSuccess = response => {
  return {
    type: GET_EVENTS_SUCCESS,
    payload: response
  }
}


export const getEventsError = response => {
  return {
    type: GET_EVENTS_ERROR,
    payload: response
  }
}

