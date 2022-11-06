import {
	LOGIN_USER,
	LOGIN_SUCCESS,
	LOGOUT_USER,
	LOGOUT_USER_SUCCESS,
	API_ERROR,
	RESET_LOGIN_FLAG,
	LOGIN_INITIATE,
	LOGIN_INITIATE_SUCCESS,
	LOGIN_CHALLENGE_SUCCESS,
	REGISTER_CHALLENGE_SUCCESS,
	REGISTER_INITIATE
} from "./actionTypes"

const initialState = {
	error: "",
	loading: false,
	accessToken: '',
	org: null,
}

const Login = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			state = {
				...state,
				loading: true
			}
			break
		case REGISTER_INITIATE:
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
				error: null,
				loading: false
			}
			break;
		case LOGIN_SUCCESS:
			state = {
				...state,
				loading: false,
				...action.payload.data
			}
			break
		case REGISTER_CHALLENGE_SUCCESS:
		case LOGIN_CHALLENGE_SUCCESS:
			console.log('REGISTER_CHALLENGE_SUCCESS', action)
			state = {
				...state,
				accessToken: action.payload.accessToken,
				loading: false
			}
			break;
		case LOGOUT_USER:
			state = { ...state, isUserLogout: false }
			break
		case LOGOUT_USER_SUCCESS:
			state = { ...state, isUserLogout: true }
			break
		case API_ERROR: {
			let _error = action.payload.message;
			if (action.payload.data?.errmsg) {
				_error += `: ${action.payload.data.errmsg}`;
			}
			state = {
				...state,
				error: _error,
				loading: false,
				isUserLogout: false
			}
			break
		}
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

export default Login
