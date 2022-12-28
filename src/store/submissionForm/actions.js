import { DELETE_SUBMISSION, DELETE_SUBMISSION_SUCCESS, GET_DEFAULT_SUBMISSION, GET_DEFAULT_SUBMISSION_SUCCESS, GET_DRAFT_SUBMISSION_FORM, GET_DRAFT_SUBMISSION_FORM_SUCCESS, GET_SUBMISSION_FORM, GET_SUBMISSION_FORM_SUCCESS, SUBMIT_DEFAULT_SUBMISSIONS, SUBMIT_DEFAULT_SUBMISSIONS_SUCCESS, SUBMIT_DRAFT_SUBMISSIONS, SUBMIT_DRAFT_SUBMISSIONS_SUCCESS, SUBMIT_FORM_DATA, SUBMIT_FORM_DATA_ERROR, SUBMIT_FORM_DATA_SUCCESS, UPDATE_SUBMISSION, UPDATE_SUBMISSION_SUCCESS } from "./actionTypes";



export const portalApiError = error => {
  ////console.logdisabled('portalApiError', error)
  return {
    type: SUBMIT_FORM_DATA_ERROR,
    payload: error,
  };
};
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

export const postSubmissionFormSuccess = response => {
  return {
    type: SUBMIT_FORM_DATA_SUCCESS,
    payload: response,
  };
};

export const getSubmissionForms = (sort = '', asc = true,) => {
  return {
    type: GET_SUBMISSION_FORM,
    payload: { asc, sort }
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


export const submitDefaultSubmissions = (data, history) => {
  return {
    type: SUBMIT_DEFAULT_SUBMISSIONS,
    payload: { data, history }
  }
}

export const submitDefaultSubmissionsSuccess = response => {
  return {
    type: SUBMIT_DEFAULT_SUBMISSIONS_SUCCESS,
    payload: response
  }
}


export const getDraftSubmissionForm = (id) => {
  return {
    type: GET_DRAFT_SUBMISSION_FORM,
    payload: { id }
  }
}

export const getDraftSubmissionFormSuccess = response => {
  return {
    type: GET_DRAFT_SUBMISSION_FORM_SUCCESS,
    payload: response
  }
}

export const updateSubmission = (id, data, history) => {
  if (data.projectType === 'Other') {
    data.projectType = data.projectTypeOther
  }
  return {
    type: UPDATE_SUBMISSION,
    payload: { id, data, history },
  };
};

export const updateSubmissionSuccess = response => {
  return {
    type: UPDATE_SUBMISSION_SUCCESS,
    payload: response,
  };
};


export const deleteSubmission = (id, history) => {
  return {
    type: DELETE_SUBMISSION,
    payload: { id, history },
  };
};

export const deleteSubmissionSuccess = response => {
  console.log('action deleteSubmissionSuccess')
  return {
    type: DELETE_SUBMISSION_SUCCESS,
    payload: response,
  };
};
