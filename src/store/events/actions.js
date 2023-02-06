import { GET_EVENTS, API_EVENT_ERROR, GET_EVENTS_SUCCESS, GET_EVENT_DETAILS, GET_EVENT_DETAILS_SUCCESS, GET_EVENT_NATURE, GET_EVENT_NATURE_SUCCESS, UPDATE_EVENT, UPDATE_EVENT_SUCCESS, CREATE_EVENT, CREATE_EVENT_SUCCESS, DELETE_EVENT_SUCCESS, DELETE_EVENT, GET_TEMPLATES, GET_TEMPLATE_DETAILS, UPDATE_TEMPLATE, DELETE_TEMPLATE, UPDATE_TEMPLATE_SUCCESS, CREATE_TEMPLATE, CREATE_TEMPLATE_SUCCESS, DELETE_TEMPLATE_SUCCESS, GET_TEMPLATES_SUCCESS, GET_TEMPLATE_DETAILS_SUCCESS, GET_COMPACT_TEMPLATES, GET_COMPACT_TEMPLATES_SUCCESS, GET_TEMPLATE, GET_TEMPLATE_SUCCESS, REMOVE_CURRENT_TEMPLATE } from "./actionTypes";

export const getEvents = (page = 1, limit = 10) => {
  return {
    type: GET_EVENTS,
    payload: { page, limit }
  }
}

export const getEvent = (id, history) => {
  return {
    type: GET_EVENT_DETAILS,
    payload: { id, history }
  }
}

export const getEventNatures = () => {
  return {
    type: GET_EVENT_NATURE,
    payload: {}
  }
}

export const getEventNaturesSuccess = response => {
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


export const getTemplates = (page = 1, limit = 10) => {
  return {
    type: GET_TEMPLATES,
    payload: { page, limit }
  }
}

export const getTemplate = (id, history) => {
  return {
    type: GET_TEMPLATE_DETAILS,
    payload: { id, history }
  }
}

export const getCompactTemplates = () => {
  return {
    type: GET_COMPACT_TEMPLATES,
    payload: {}
  }
}

export const getCompactTemplatesSuccess = (response) => {
  return {
    type: GET_COMPACT_TEMPLATES_SUCCESS,
    payload: response
  }
}

export const updateTemplate = (id, data, history) => {
  return {
    type: UPDATE_TEMPLATE,
    payload: { id, data, history }
  }
}

export const deleteTemplate = (id, history) => {
  return {
    type: DELETE_TEMPLATE,
    payload: { id, history }
  }
}



export const updateTemplateSuccess = response => {
  return {
    type: UPDATE_TEMPLATE_SUCCESS,
    payload: response
  }
}

export const createTemplate = (data, history) => {
  return {
    type: CREATE_TEMPLATE,
    payload: { data, history }
  }
}

export const createTemplateSuccess = response => {
  return {
    type: CREATE_TEMPLATE_SUCCESS,
    payload: response
  }
}

export const getUserTemplate = (id) => {
  return {
    type: GET_TEMPLATE,
    payload: { id }
  }
}

export const getUserTemplateSuccess = (response) => {
  return {
    type: GET_TEMPLATE_SUCCESS,
    payload: response
  }
}

export const deleteTemplateSuccess = response => {
  return {
    type: DELETE_TEMPLATE_SUCCESS,
    payload: response
  }
}

export const getTemplatesSuccess = response => {
  return {
    type: GET_TEMPLATES_SUCCESS,
    payload: response
  }
}

export const getTemplateDetailsSuccess = response => {
  return {
    type: GET_TEMPLATE_DETAILS_SUCCESS,
    payload: response
  }
}

export const removeCurrentTemplate = () => {
  return {
    type: REMOVE_CURRENT_TEMPLATE,
    payload: {}
  }
}
