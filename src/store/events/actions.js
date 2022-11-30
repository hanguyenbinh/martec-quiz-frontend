import { GET_EVENTS, API_EVENT_ERROR, GET_EVENTS_SUCCESS, GET_EVENT_DETAILS, GET_EVENT_DETAILS_SUCCESS, GET_EVENT_NATURE, GET_EVENT_NATURE_SUCCESS, UPDATE_EVENT, UPDATE_EVENT_SUCCESS, CREATE_EVENT, CREATE_EVENT_SUCCESS, DELETE_EVENT_SUCCESS, DELETE_EVENT } from "./actionTypes";

export const getEvents = (page = 1, limit = 10) => {
  return {
    type: GET_EVENTS,
    payload: { page, limit }
  }
}

export const getEvent = (id, history) => {
  console.log('getEvent');
  return {
    type: GET_EVENT_DETAILS,
    payload: { id, history }
  }
}

export const geteventNatures = () => {
  return {
    type: GET_EVENT_NATURE,
    payload: {}
  }
}

export const geteventNaturesSuccess = response => {
  return {
    type: GET_EVENT_NATURE_SUCCESS,
    payload: response
  }
}

export const updateEvent = (id, data, history) => {
  return {
    type: UPDATE_EVENT,
    payload: { id, data, history }
  }
}

export const deleteEvent = (id, history) => {
  return {
    type: DELETE_EVENT,
    payload: { id, history }
  }
}



export const updateEventSuccess = response => {
  return {
    type: UPDATE_EVENT_SUCCESS,
    payload: response
  }
}

export const createEvent = (data, history) => {
  return {
    type: CREATE_EVENT,
    payload: { data, history }
  }
}

export const createEventSuccess = response => {
  return {
    type: CREATE_EVENT_SUCCESS,
    payload: response
  }
}

export const deleteEventSuccess = response => {
  return {
    type: DELETE_EVENT_SUCCESS,
    payload: response
  }
}

export const getEventsSuccess = response => {
  return {
    type: GET_EVENTS_SUCCESS,
    payload: response
  }
}

export const getEventDetailsSuccess = response => {
  return {
    type: GET_EVENT_DETAILS_SUCCESS,
    payload: response
  }
}


export const eventAPIError = response => {
  return {
    type: API_EVENT_ERROR,
    payload: response
  }
}
