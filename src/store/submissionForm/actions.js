import { GET_DEFAULT_SUBMISSION, GET_DEFAULT_SUBMISSION_SUCCESS, GET_SUBMISSION_FORM, GET_SUBMISSION_FORM_SUCCESS, SUBMIT_DRAFT_SUBMISSIONS, SUBMIT_DRAFT_SUBMISSIONS_SUCCESS, SUBMIT_FORM_DATA, SUBMIT_FORM_DATA_ERROR, SUBMIT_FORM_DATA_SUCCESS } from "./actionTypes";

export const postSubmissionForm = (data, history) => {
  if (data.projectType === 'Other') {
    data.projectType = data.projectTypeOther
  }
  console.log('postSubmissionForm', data);

  return {
    type: SUBMIT_FORM_DATA,
    payload: { data, history },
  };
};

export const portalApiError = error => {
  ////console.logdisabled('portalApiError', error)
  return {
    type: SUBMIT_FORM_DATA_ERROR,
    payload: error,
  };
};

export const postSubmissionFormSuccess = response => {
  return {
    type: SUBMIT_FORM_DATA_SUCCESS,
    payload: response,
  };
};

export const getSubmissionForms = (email) => {
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


export const getDefaultSubmissions = () => {
  return {
    type: GET_DEFAULT_SUBMISSION,
    payload: {}
  }
}

export const getDefaultSubmissionsSuccess = response => {
  return {
    type: GET_DEFAULT_SUBMISSION_SUCCESS,
    payload: response
  }
}

export const submitDraftSubmissions = (data, history) => {
  if (data.projectType === 'Other') {
    data.projectType = data.projectTypeOther
  }
  return {
    type: SUBMIT_DRAFT_SUBMISSIONS,
    payload: { data, history }
  }
}

export const submitDraftSubmissionsSuccess = response => {
  return {
    type: SUBMIT_DRAFT_SUBMISSIONS_SUCCESS,
    payload: response
  }
}
