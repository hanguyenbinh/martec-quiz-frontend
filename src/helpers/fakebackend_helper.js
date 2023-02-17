import { APIClient } from "./api_helper";
import accessToken from "./jwt-token-access/accessToken";
import * as url from "./url_helper";
import { api as _api } from "../config";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = data => api.create(url.POST_FAKE_REGISTER, data);

// Login Method
export const postFakeLogin = data => api.create(url.POST_FAKE_LOGIN, data);

// Get Otp Method
export const postInitiate = data => api.create(url.POST_INITIATE, data);

export const postInitiateRegister = data => api.create(url.POST_INITIATE_REGISTER, data);

export const postChallengeLogin = data => api.create(url.POST_CHALLENGE_LOGIN, data);

export const getOrganisationsApi = data => api.get(url.GET_ORGANISATIONS_URL, data);

export const postChallengeRegister = data => api.create(url.POST_CHALLENGE, data);

export const postSubmission = data => {

  return api.create(url.POST_ESG_DATA, data);
}

export const updateSubmissionApi = (id, data) => {

  return api.update(url.UPDATE_SUBMISSION_API.replace(':id', id), data);
}

export const deleteSubmissionApi = (id) => {
  return api.delete(url.DELETE_SUBMISSION_API.replace(':id', id));
}

export const postDraftSubmissionsApi = data => {

  return api.create(url.POST_DRAFT_SUBMISSIONS_API, data);
}

export const postDefaultSubmissionsApi = data => {

  return api.create(url.POST_DEFAULT_SUBMISSIONS_API, data);
}


export const getSubmissionHistoryApi = (sort, asc) => api.get(url.GET_ESG_DATA, { sort, asc });

export const getDefaultSubbmissionsApi = () => api.get(url.GET_DEFAULT_SUBMISSION_API, {});

export const getDraftSubmissionFormApi = (id) => api.get(url.GET_DRAFT_SUBMISSION_API.replace(':id', id), {});

export const getReportsApi = () => api.get(url.GET_SUBMISSION_REPORTS, {});

export const getAPILatestSubmissionForms = (email, indicatorType) => {
  return api.get(url.GET_LATEST_ESG_DATA, { email, indicatorType })
};

export const getRecordingPeriodApi = () => {
  return api.get(url.GET_RECORDING_PERIOD_API)
};

export const getOrganisationSummariesApi = () => {
  return api.get(url.GET_ORGANISATION_SUMMARIES_API, {})
};

export const getOrganisationEventsApi = (orgId) => {
  const payload = {};
  if (orgId) payload.orgId = orgId;
  return api.get(url.GET_ORGANISATION_EVENTS_API, payload)
};

export const getSubmissionComparationApi = (data) => {
  return api.get(url.GET_SUBMISSION_COMPARATION_API, data)
};


export const getEventSummariesApi = (eventId) => {
  return api.get(url.GET_EVENT_SUMMARIES_API.replace(':id', eventId))
};

export const getCoinsHistoryApi = (days) => {
  return api.get(url.GET_COINS_HISTORY, { days })
};

export const getCoinsSummaryApi = () => {
  return api.get(url.GET_COINS_SUMMARY)
};


// postForgetPwd
export const postFakeForgetPwd = data => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = data => api.create(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data) => api.update(url.POST_EDIT_PROFILE + '/' + data.idx, data);

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data)
    .catch(err => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
export const postLogin = data => api.create(url.POST_LOGIN, data, accessToken);
export const postJwtLogin = data => api.create(url.POST_FAKE_JWT_LOGIN, data);

export const postRegisterUser = data => api.create(url.POST_REGISTER_USER, data)


// postForgetPwd
export const postJwtForgetPwd = data => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = data => api.create(url.SOCIAL_LOGIN, data);

// Calendar
// get Events
export const getEventsApi = (page, limit) => api.get(url.GET_EVENTS_API, { page, limit });
export const getEventApi = (id) => api.get(url.GET_EVENT_API.replace(':id', id));
export const updateEventApi = event => api.create(url.UPDATE_EVENT_API.replace(':id', event.id), event.data);
export const createEventApi = event => api.create(url.CREATE_EVENT_API, event.data);
export const deleteEventApi = id => api.delete(url.DELETE_EVENT_API.replace(':id', id), {});

export const getTemplatesApi = (page, limit) => api.get(url.GET_TEMPLATES_API, { page, limit });
export const getCompactTemplatesApi = () => api.get(url.GET_COMPACT_TEMPLATES_API, {});

export const getTemplateApi = (id) => api.get(url.GET_TEMPLATE_API.replace(':id', id));
export const getUserTemplateApi = (id) => api.get(url.GET_USER_TEMPLATE_API.replace(':id', id));

export const updateTemplateApi = event => api.create(url.UPDATE_TEMPLATE_API.replace(':id', event.id), event.data);
export const createTemplateApi = event => api.create(url.CREATE_TEMPLATE_API, event.data);
export const deleteTemplateApi = id => api.delete(url.DELETE_TEMPLATE_API.replace(':id', id), {});


export const getEventNaturesApi = (id) => api.get(url.GET_EVENT_NATURE_API);


// get Prizes
export const getPrizesApi = (page, limit) => api.get(url.GET_PRIZES_API, { page, limit });

export const getPrizeApi = (id) => api.get(url.GET_PRIZE_API.replace(':id', id));
export const getRedemptionHistoryApi = () => api.get(url.GET_REDEMPTION_HISTORY_API);

export const deletePrizeApi = id => api.delete(url.DELETE_PRIZE_API.replace(':id', id));

export const updatePrizeApi = (prize) => api.create(url.GET_PRIZE_API.replace(':id', prize.id), prize.data);
export const createPrizeApi = (prize) => api.create(url.GET_PRIZES_API, prize.data);


// add Companies
export const addNewCompanies = company => api.create(url.ADD_NEW_COMPANIES, company);

// update Companies
export const updateCompanies = company => api.update(url.UPDATE_COMPANIES + '/' + company._id, company);

// delete Companies
export const deleteCompanies = company => api.delete(url.DELETE_COMPANIES + '/' + company);

// get Deals
export const getDeals = () => api.get(url.GET_DEALS);

// get Leads
export const getLeads = () => api.get(url.GET_LEADS);

// add Lead
export const addNewLead = lead => api.create(url.ADD_NEW_LEAD, lead);

// update Lead
export const updateLead = lead => api.update(url.UPDATE_LEAD + '/' + lead._id, lead);

// delete Lead
export const deleteLead = lead => api.delete(url.DELETE_LEAD + '/' + lead);

// Crypto
// Transation
export const getTransationList = () => api.get(url.GET_TRANSACTION_LIST);

// Order List
export const getOrderList = () => api.get(url.GET_ORDRER_LIST);

// Invoice
//get Invoice
export const getInvoices = () => api.get(url.GET_INVOICES);

// add Invoice
export const addNewInvoice = invoice => api.create(url.ADD_NEW_INVOICE, invoice);

// update Invoice
export const updateInvoice = invoice => api.update(url.UPDATE_INVOICE + '/' + invoice._id, invoice);

// delete Invoice
export const deleteInvoice = invoice => api.delete(url.DELETE_INVOICE + '/' + invoice);

// Support Tickets
// Tickets
export const getTicketsList = () => api.get(url.GET_TICKETS_LIST);

// add Tickets
export const addNewTicket = ticket => api.create(url.ADD_NEW_TICKET, ticket);

// update Tickets
export const updateTicket = ticket => api.update(url.UPDATE_TICKET + '/' + ticket._id, ticket);

// delete Tickets
export const deleteTicket = ticket => api.delete(url.DELETE_TICKET + '/' + ticket);

// Dashboard Analytics

// Sessions by Countries
export const getAllData = () => api.get(url.GET_ALL_DATA);
export const getHalfYearlyData = () => api.get(url.GET_HALFYEARLY_DATA);
export const getMonthlyData = () => api.get(url.GET_MONTHLY_DATA);

// Audiences Metrics
export const getAllAudiencesMetricsData = () => api.get(url.GET_ALLAUDIENCESMETRICS_DATA);
export const getMonthlyAudiencesMetricsData = () => api.get(url.GET_MONTHLYAUDIENCESMETRICS_DATA);
export const getHalfYearlyAudiencesMetricsData = () => api.get(url.GET_HALFYEARLYAUDIENCESMETRICS_DATA);
export const getYearlyAudiencesMetricsData = () => api.get(url.GET_YEARLYAUDIENCESMETRICS_DATA);

// Users by Device
export const getTodayDeviceData = () => api.get(url.GET_TODAYDEVICE_DATA);
export const getLastWeekDeviceData = () => api.get(url.GET_LASTWEEKDEVICE_DATA);
export const getLastMonthDeviceData = () => api.get(url.GET_LASTMONTHDEVICE_DATA);
export const getCurrentYearDeviceData = () => api.get(url.GET_CURRENTYEARDEVICE_DATA);

// Audiences Sessions by Country
export const getTodaySessionData = () => api.get(url.GET_TODAYSESSION_DATA);
export const getLastWeekSessionData = () => api.get(url.GET_LASTWEEKSESSION_DATA);
export const getLastMonthSessionData = () => api.get(url.GET_LASTMONTHSESSION_DATA);
export const getCurrentYearSessionData = () => api.get(url.GET_CURRENTYEARSESSION_DATA);

// Dashboard CRM

// Balance Overview
export const getTodayBalanceData = () => api.get(url.GET_TODAYBALANCE_DATA);
export const getLastWeekBalanceData = () => api.get(url.GET_LASTWEEKBALANCE_DATA);
export const getLastMonthBalanceData = () => api.get(url.GET_LASTMONTHBALANCE_DATA);
export const getCurrentYearBalanceData = () => api.get(url.GET_CURRENTYEARBALANCE_DATA);

// Dial Type
export const getTodayDealData = () => api.get(url.GET_TODAYDEAL_DATA);
export const getWeeklyDealData = () => api.get(url.GET_WEEKLYDEAL_DATA);
export const getMonthlyDealData = () => api.get(url.GET_MONTHLYDEAL_DATA);
export const getYearlyDealData = () => api.get(url.GET_YEARLYDEAL_DATA);

// Sales Forecast
export const getOctSalesData = () => api.get(url.GET_OCTSALES_DATA);
export const getNovSalesData = () => api.get(url.GET_NOVSALES_DATA);
export const getDecSalesData = () => api.get(url.GET_DECSALES_DATA);
export const getJanSalesData = () => api.get(url.GET_JANSALES_DATA);

// Dashboard Ecommerce
// Revenue
export const getAllRevenueData = () => api.get(url.GET_ALLREVENUE_DATA);
export const getMonthRevenueData = () => api.get(url.GET_MONTHREVENUE_DATA);
export const getHalfYearRevenueData = () => api.get(url.GET_HALFYEARREVENUE_DATA);
export const getYearRevenueData = () => api.get(url.GET_YEARREVENUE_DATA);


// Dashboard Crypto
// Portfolio
export const getBtcPortfolioData = () => api.get(url.GET_BTCPORTFOLIO_DATA);
export const getUsdPortfolioData = () => api.get(url.GET_USDPORTFOLIO_DATA);
export const getEuroPortfolioData = () => api.get(url.GET_EUROPORTFOLIO_DATA);

// Market Graph
export const getAllMarketData = () => api.get(url.GET_ALLMARKETDATA_DATA);
export const getYearMarketData = () => api.get(url.GET_YEARMARKET_DATA);
export const getMonthMarketData = () => api.get(url.GET_MONTHMARKET_DATA);
export const getWeekMarketData = () => api.get(url.GET_WEEKMARKET_DATA);
export const getHourMarketData = () => api.get(url.GET_HOURMARKET_DATA);

// Dashboard Project
// Project Overview
export const getAllProjectData = () => api.get(url.GET_ALLPROJECT_DATA);
export const getMonthProjectData = () => api.get(url.GET_MONTHPROJECT_DATA);
export const gethalfYearProjectData = () => api.get(url.GET_HALFYEARPROJECT_DATA);
export const getYearProjectData = () => api.get(url.GET_YEARPROJECT_DATA);

// Project Status
export const getAllProjectStatusData = () => api.get(url.GET_ALLPROJECTSTATUS_DATA);
export const getWeekProjectStatusData = () => api.get(url.GET_WEEKPROJECTSTATUS_DATA);
export const getMonthProjectStatusData = () => api.get(url.GET_MONTHPROJECTSTATUS_DATA);
export const getQuarterProjectStatusData = () => api.get(url.GET_QUARTERPROJECTSTATUS_DATA);

// Dashboard NFT
// Marketplace
export const getAllMarketplaceData = () => api.get(url.GET_ALLMARKETPLACE_DATA);
export const getMonthMarketplaceData = () => api.get(url.GET_MONTHMARKETPLACE_DATA);
export const gethalfYearMarketplaceData = () => api.get(url.GET_HALFYEARMARKETPLACE_DATA);
export const getYearMarketplaceData = () => api.get(url.GET_YEARMARKETPLACE_DATA);

// Project
export const addProjectList = (project) => api.create(url.ADD_NEW_PROJECT, project);
export const updateProjectList = (project) => api.update(url.UPDATE_PROJECT, project);
export const deleteProjectList = (project) => api.delete(url.DELETE_PROJECT, { headers: { project } });

// Pages > Team
export const getTeamData = (team) => api.get(url.GET_TEAMDATA, team);
export const deleteTeamData = (team) => api.delete(url.DELETE_TEAMDATA, { headers: { team } });
export const addTeamData = (team) => api.create(url.ADD_NEW_TEAMDATA, team);
export const updateTeamData = (team) => api.update(url.UPDATE_TEAMDATA, team);
