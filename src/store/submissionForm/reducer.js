import { GET_SUBMISSION_FORM, GET_SUBMISSION_FORM_SUCCESS, SUBMIT_FORM_DATA, SUBMIT_FORM_DATA_ERROR, SUBMIT_FORM_DATA_SUCCESS } from "./actionTypes"

const initialState = {
	error: "",
	loading: false
}

const SubmissionForm = (state = initialState, action) => {
	switch (action.type) {
		case SUBMIT_FORM_DATA:
			console.log('reducer submissionForm')
			state = {
				...state,
				loading: true
			}
			break
		case SUBMIT_FORM_DATA_SUCCESS:
			state = {
				...state,
				loading: false
			}
			break;
		case SUBMIT_FORM_DATA_ERROR:
			state = {
				...state,
				error: action.payload.data,
				loading: false,
			}
			break;
		case GET_SUBMISSION_FORM:
			state = {
				...state,
				loading: true
			};
			break;
		case GET_SUBMISSION_FORM_SUCCESS:
			console.log('GET_SUBMISSION_FORM_SUCCESS', action)
			state = {
				...state,
				loading: false,
				submissionForms: action.payload
			};
			break;
		default:
			state = { ...state }
			break
	}
	return state
}

export default SubmissionForm
