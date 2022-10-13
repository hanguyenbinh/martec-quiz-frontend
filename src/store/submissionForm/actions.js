import { GET_SUBMISSION_FORM, GET_SUBMISSION_FORM_SUCCESS, SUBMIT_FORM_DATA, SUBMIT_FORM_DATA_ERROR, SUBMIT_FORM_DATA_SUCCESS } from "./actionTypes";

export const submitESGData = (data, history) => {
  console.log('action submitESGData')
  return {
    type: SUBMIT_FORM_DATA,
    payload: { data, history },
  };
};

export const portalApiError = error => {
  return {
    type: SUBMIT_FORM_DATA_ERROR,
    payload: error,
  };
};

export const submitESGDataSuccess = response => {
  return {
    type: SUBMIT_FORM_DATA_SUCCESS,
    payload: response,
  };
};

export const getSumissionForms = (email) => {
  return {
    type: GET_SUBMISSION_FORM,
    payload: { email }
  }
}

export const getSubmissionFormsSuccess = response => {
  return {
    type: GET_SUBMISSION_FORM_SUCCESS,
    payload: response
  }
}

