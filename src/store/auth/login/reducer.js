import {
	LOGIN_USER,
	LOGIN_SUCCESS,
	LOGOUT_USER,
	LOGOUT_USER_SUCCESS,
	API_ERROR,
	RESET_LOGIN_FLAG,
	LOGIN_INITIATE,
	LOGIN_INITIATE_SUCCESS,
	LOGIN_CHALLENGE_SUCCESS
} from "./actionTypes"

const initialState = {
	error: "",
	loading: false
}

const login = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			state = {
				...state,
				loading: true
			}
			break
		case LOGIN_INITIATE:
			////console.logdisabled('reducer LOGIN_INITIATE', action)
			state = {
				...state,
				email: action.payload.email,
				loading: true
			}
			break;
		case LOGIN_INITIATE_SUCCESS:
			state = {
				...state,
				challengeId: action.payload.challengeId,
				loading: false
			}
			break;
		case LOGIN_SUCCESS:
			state = {
				...state,
				loading: false
			}
			break
		case LOGIN_CHALLENGE_SUCCESS:
			state = {
				...state,
				loading: false
			}
			break;
		case LOGOUT_USER:
			state = { ...state, isUserLogout: false }
			break
		case LOGOUT_USER_SUCCESS:
			state = { ...state, isUserLogout: true }
			break
		case API_ERROR:
			////console.logdisabled('API error', action)
			state = {
				...state,
				error: action.payload,
				loading: false,
				isUserLogout: false
			}
			break
		case RESET_LOGIN_FLAG:
			state = {
				...state,
				error: null
			}
			break
		default:
			state = { ...state }
			break
	}
	return state
}

export default login
