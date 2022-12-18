import { GET_DEFAULT_SUBMISSION, GET_DEFAULT_SUBMISSION_SUCCESS, GET_DRAFT_SUBMISSION_FORM, GET_DRAFT_SUBMISSION_FORM_SUCCESS, GET_SUBMISSION_FORM, GET_SUBMISSION_FORM_SUCCESS, SUBMIT_DEFAULT_SUBMISSIONS, SUBMIT_DEFAULT_SUBMISSIONS_SUCCESS, SUBMIT_DRAFT_SUBMISSIONS, SUBMIT_DRAFT_SUBMISSIONS_SUCCESS, SUBMIT_FORM_DATA, SUBMIT_FORM_DATA_ERROR, SUBMIT_FORM_DATA_SUCCESS, UPDATE_SUBMISSION, UPDATE_SUBMISSION_SUCCESS } from "./actionTypes"

const initialState = {
	error: false,
	loading: false,
	defaultSubmissions: [],
	sectionRemarks: [],
	yearOfSubmissions: [],
	currentDraft: null
}

const SubmissionForm = (state = initialState, action) => {
	switch (action.type) {
		case SUBMIT_FORM_DATA:
		case SUBMIT_DRAFT_SUBMISSIONS:
		case SUBMIT_DEFAULT_SUBMISSIONS:
		case UPDATE_SUBMISSION:
			state = {
				...state,
				loading: true,
				error: false
			}
			break
		case SUBMIT_FORM_DATA_SUCCESS:
		case SUBMIT_DRAFT_SUBMISSIONS_SUCCESS:
		case SUBMIT_DEFAULT_SUBMISSIONS_SUCCESS:
		case UPDATE_SUBMISSION_SUCCESS:
			state = {
				...state,
				loading: false,
				error: false
			}
			break;
		case SUBMIT_FORM_DATA_ERROR:
			state = {
				...state,
				error: action.payload,
				loading: false,
			}
			break;
		case GET_SUBMISSION_FORM:

			state = {
				...state,
				loading: true,
				error: false
			};
			break;
		case GET_SUBMISSION_FORM_SUCCESS:

			state = {
				...state,
				loading: false,
				submissionForms: action.payload,
				error: false
			};
			break;
		case GET_DEFAULT_SUBMISSION:
		case GET_DRAFT_SUBMISSION_FORM:
			state = {
				...state,
				loading: true,
				error: false
			};
			break;
		case GET_DEFAULT_SUBMISSION_SUCCESS:
			state = {
				...state,
				loading: false,
				defaultSubmissions: action.payload.defaultSubmissions,
				sectionRemarks: action.payload.sectionRemarks,
				error: false
			};
			break;

		case GET_DRAFT_SUBMISSION_FORM_SUCCESS:
			state = {
				...state,
				loading: false,
				currentDraft: action.payload,
				error: false
			};
			break;
		default:
			state = { ...state }
			break
	}
	return state
}

export default SubmissionForm
