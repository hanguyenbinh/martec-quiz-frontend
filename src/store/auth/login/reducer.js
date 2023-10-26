import {
	LOGIN_MESSAGE,
	LOGIN_MESSAGE_SUCCESS,
	LOGOUT_MESSAGE,
	LOGOUT_MESSAGE_SUCCESS,
	API_ERROR,
	RESET_LOGIN_FLAG,
	POST_FACEBOOK_IMAGE_MESSAGE,
	POST_FACEBOOK_IMAGE_MESSAGE_SUCCESS
} from "./actionTypes"

const initialState = {
	error: "",
	loading: false,
	accessToken: '',
	org: null,
	organisations: [],
	lastLogin: '',
	orgId: ''
}

const Login = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_MESSAGE:
			state = {
				...state,
				loading: true
			}
			break
		case LOGIN_MESSAGE_SUCCESS:
			state = {
				...state,
				loading: false,
				...action.payload.data
			}
			break
		case POST_FACEBOOK_IMAGE_MESSAGE:
			state = {
				...state,
				loading: true
			}
			break
		case POST_FACEBOOK_IMAGE_MESSAGE_SUCCESS:
			state = {
				...state,
				loading: false,
				...action.payload.data
			}
			break
		case API_ERROR: {
			let error = '';
			switch (action.payload.message) {
				case 'CAN_NOT_LOGIN':
					error = 'You have entered a wrong verification code';
					break;
				default:
					error = action.payload.message;
					if (action.payload.data?.errmsg) {
						error += `: ${action.payload.data.errmsg}`;
					}
			}

			state = {
				...state,
				error,
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
		case LOGOUT_MESSAGE:
			action.payload.history.push('/home')
			window.FB?.logout((response) => console.log);
			break;
	}
	return state
}

export default Login