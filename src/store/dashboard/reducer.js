import {
  GET_LATEST_DATA,
  GET_LATEST_DATA_ERROR,
  GET_LATEST_DATA_SUCCESS
} from "./actionType";

const INIT_STATE = {
  chartData: [],
  audiencesMetricsData: [],
  userDeviceData: [],
  audiencesSessionsData: [],
  error: {},
  years: [],
  indicators: [],
  averages: [],
  statistics: [],
  submissions: [],
  allSubmissions: [],
  yearItems: [],
  isLoading: false
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
    case GET_LATEST_DATA_SUCCESS:
      ////console.logdisabled('reducer', action)
      return {
        ...state,
        indicators: action.payload.data.indicators,
        averages: action.payload.data.averages,
        years: action.payload.data.years,
        submissions: action.payload.data.submissions,
        allSubmissions: action.payload.data.allSubmissions,
        statistics: action.payload.data.statistics,
        yearItems: action.payload.data.yearItems,
        isLoading: false,
        error: false
      }
    default:
      return state;
  }
};
export default Dashboard;