import {
  GET_EVENT_SUMMARIES,
  GET_EVENT_SUMMARIES_SUCCESS,
  GET_LATEST_DATA,
  GET_LATEST_DATA_ERROR,
  CA_DASHBOARD_API_ERROR,
  GET_ORGANISATION_EVENTS,
  GET_ORGANISATION_EVENTS_SUCCESS,
  GET_ORGANISATION_SUMMARIES,
  GET_ORGANISATION_SUMMARIES_SUCCESS
} from "./actionType";

const INIT_STATE = {
  chartData: [],
  indicators: [],
  averages: [],
  organisationSummeries: [],
  organisationEvents: [],
  eventSummaries: [],
  error: {},
  submissions: [],
  allSubmissions: [],
  isLoading: false,

};

const Dashboard = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_LATEST_DATA:
      console.log('reducer GET_LATEST_DATA')
      return {
        ...state,
        isLoading: true
      }
    case GET_LATEST_DATA_ERROR:
      return {
        ...state,
        error: action.payload.data,
        isLoading: false
      }
    case CA_DASHBOARD_API_ERROR:
      return {
        ...state,
        submissions: action.payload.data.submissions,
        allSubmissions: action.payload.data.allSubmissions,
        isLoading: false
      }
    case GET_ORGANISATION_SUMMARIES:
    case GET_ORGANISATION_EVENTS:
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
        organisationSummeries: action.payload.data
      }
    case GET_ORGANISATION_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        organisationEvents: action.payload.data
      }
    case GET_EVENT_SUMMARIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        eventSummaries: action.payload.data
      }
    default:
      return state;
  }
};
export default Dashboard;