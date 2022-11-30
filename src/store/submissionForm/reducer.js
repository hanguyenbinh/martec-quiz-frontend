import { GET_SUBMISSION_FORM, GET_SUBMISSION_FORM_SUCCESS, SUBMIT_FORM_DATA, SUBMIT_FORM_DATA_ERROR, SUBMIT_FORM_DATA_SUCCESS } from "./actionTypes"

const initialState = {
	error: false,
	loading: false
}

const SubmissionForm = (state = initialState, action) => {
	switch (action.type) {
		case SUBMIT_FORM_DATA:
			////console.logdisabled('reducer submissionForm')
			state = {
				...state,
				loading: true,
				error: false
			}
			break
		case SUBMIT_FORM_DATA_SUCCESS:
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
		default:
			state = { ...state }
			break
	}
	return state
}

export default SubmissionForm
