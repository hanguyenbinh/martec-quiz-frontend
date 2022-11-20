import {
  GET_EVENT_SUMMARIES,
  CA_DASHBOARD_API_ERROR, GET_ORGANISATION_EVENTS, GET_ORGANISATION_SUMMARIES, GET_ORGANISATION_SUMMARIES_SUCCESS, GET_EVENT_SUMMARIES_SUCCESS, GET_ORGANISATION_EVENTS_SUCCESS
} from "./actionType";

// common success
export const getOrgSummaries = () => {
  return {
    type: GET_ORGANISATION_SUMMARIES,
    payload: {},
  }
};

export const getOrgEvents = (orgId) => {
  return {
    type: GET_ORGANISATION_EVENTS,
    payload: { orgId },
  }
};

export const getEventSummaries = (eventId) => {
  return {
    type: GET_EVENT_SUMMARIES,
    payload: { eventId },
  }
};


export const getOrgSummariesSuccess = response => {
  return {
    type: GET_ORGANISATION_SUMMARIES_SUCCESS,
    payload: response,
  }
};

export const getOrgEventsSuccess = (response) => {
  return {
    type: GET_ORGANISATION_EVENTS_SUCCESS,
    payload: response,
  }
};

export const getEventSummariesSuccess = (response) => {
  return {
    type: GET_EVENT_SUMMARIES_SUCCESS,
    payload: response,
  }
};

export const CADashboardAPIError = (response) => ({
  type: CA_DASHBOARD_API_ERROR,
  payload: response,
});