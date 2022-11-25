import { GET_PRIZES, PRIZE_API_ERROR, GET_PRIZES_SUCCESS, GET_PRIZE, GET_PRIZE_SUCCESS, UPDATE_PRIZE, UPDATE_PRIZE_SUCCESS, CREATE_PRIZE, CREATE_PRIZE_SUCCESS, DELETE_PRIZE_SUCCESS, DELETE_PRIZE } from "./actionTypes"

const initialState = {
	error: "",
	loading: false,
	prizes: [
	],
	prize: null,
	prizeId: '',
	page: 1,
	limit: 10,
	total: 0,
	deleteCount: 0,
}

const Prizes = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRIZES:
			state = {
				...state,
				loading: true
			}
			break
		case GET_PRIZES_SUCCESS:
			console.log('GET_PRIZES_SUCCESS', action.payload)
			state = {
				...state,
				loading: false,
				prizes: action.payload?.data?.rows,
				page: action.payload.data.page,
				total: action.payload.data.total,
				limit: action.payload.data.size,
			}
			break;

		case GET_PRIZE:
			state = {
				...state,
				loading: true,
				prizeId: action.payload.prizeId
			}
			break
		case GET_PRIZE_SUCCESS:
			state = {
				...state,
				loading: false,
				prize: action.payload?.data
			}
			break;

		case UPDATE_PRIZE:
			state = {
				...state,
				loading: true,
				prizeId: action.payload.prizeId
			}
			break
		case UPDATE_PRIZE_SUCCESS:
			state = {
				...state,
				loading: false,
				prize: action.payload?.data
			}
			break;
		case CREATE_PRIZE:
			state = {
				...state,
				loading: true,
				error: false
			}
			break
		case CREATE_PRIZE_SUCCESS:
			state = {
				...state,
				loading: false,
				error: false
			}
			break;
		case PRIZE_API_ERROR:
			console.log('PRIZE_API_ERROR', action)
			state = {
				...state,
				error: action.payload.data || action.payload.data.errmsg,
				loading: false,
			}
			break;

		case DELETE_PRIZE:
			state = {
				...state,
				loading: true,
				error: false
			}
			break
		case DELETE_PRIZE_SUCCESS:
			state = {
				...state,
				loading: false,
				error: false,
				deleteCount: state.deleteCount++
			}
			break;

		default:
			state = { ...state }
			break
	}
	return state
}

export default Prizes
