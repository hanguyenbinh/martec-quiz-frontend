import {
	GET_COINS_HISTORY,
	GET_COINS_HISTORY_SUCCESS,
	GET_COINS_SUMMARY,
	GET_COINS_SUMMARY_SUCCESS,
	COINS_API_ERROR
} from "./actionTypes"

const initialState = {
	error: "",
	loading: false,
	coinsHistory: [],
	coinsSummary: {},
	days: 0
}

const CoinsHistory = (state = initialState, action) => {
	switch (action.type) {
		case GET_COINS_HISTORY:
			state = {
				...state,
				loading: true,
				days: action.payload.days || 0
			}
			break
		case GET_COINS_HISTORY_SUCCESS:
			console.log(action.payload)
			state = {
				...state,
				loading: false,
				coinsHistory: action.payload?.data?.history,
			}
			break;
		case COINS_API_ERROR:
			state = {
				...state,
				error: action.payload,
				loading: false,
			}
			break;
		case GET_COINS_SUMMARY:
			state = {
				...state,
				loading: true,
				error: false,
			}
			break;
		case GET_COINS_SUMMARY_SUCCESS:
			state = {
				...state,
				loading: false,
				error: false,
				coinsSummary: action.payload.data
			}
			break;
		default:
			state = { ...state }
			break
	}
	return state
}

export default CoinsHistory
