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
  latestSubmissionData: [],
  allSubmissions: [],
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
      console.log('reducer', action)
      return {
        ...state,
        latestSubmissionData: action.payload.data.submissions,
        allSubmissions: action.payload.data.allSubmissions,
        isLoading: false
      }
    default:
      return state;
  }
};
export default Dashboard;