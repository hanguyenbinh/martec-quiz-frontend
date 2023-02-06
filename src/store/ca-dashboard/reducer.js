import {
  GET_EVENT_SUMMARIES,
  GET_EVENT_SUMMARIES_SUCCESS,
  CA_DASHBOARD_API_ERROR,
  GET_ORGANISATION_EVENTS,
  GET_ORGANISATION_EVENTS_SUCCESS,
  GET_ORGANISATION_SUMMARIES,
  GET_ORGANISATION_SUMMARIES_SUCCESS,
  GET_SUBMISSION_COMPARATION,
  GET_SUBMISSION_COMPARATION_SUCCESS
} from "./actionType";
const resetEventSummaries = () => {
  return {
    event: {
      end_date: '',
      start_date: "",
      status: "",
      playsLeft: 0
    },
  };
}

const INIT_STATE = {
  chartData: [],
  indicators: [],
  averages: [],
  organisationSummeries: null,
  organisationEvents: [],
  eventSummaries: resetEventSummaries(),
  error: {},
  isLoading: false,
  basisA: [],
  basisB: [],
  years: []

};



const CADashboard = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CA_DASHBOARD_API_ERROR:
      return {
        error: true,
        ...state,
        isLoading: false
      }
    case GET_ORGANISATION_SUMMARIES:
      return {
        ...state,
        isLoading: true,
        error: false,
        eventSummaries: resetEventSummaries(),
        organisationEvents: [],
      }
    case GET_ORGANISATION_EVENTS:
      return {
        ...state,
        isLoading: true,
        error: false,
        eventSummaries: resetEventSummaries(),
        organisationEvents: [],
      }
    case GET_EVENT_SUMMARIES:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case GET_ORGANISATION_SUMMARIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        organisationSummeries: action.payload,
        // eventSummaries: resetEventSummaries(),
        // organisationEvents: [],
      }
    case GET_ORGANISATION_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        organisationEvents: action.payload || []
      }
    case GET_EVENT_SUMMARIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        eventSummaries: action.payload || []
      }
    case GET_SUBMISSION_COMPARATION:

      return {
        ...state,
        isLoading: true,
        error: false,

      }

    case GET_SUBMISSION_COMPARATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        basisA: action.payload?.basisA || [],
        basisB: action.payload?.basisB || [],
        years: action.payload?.years || []
      }

    default:
      return state;
  }
};
export default CADashboard;