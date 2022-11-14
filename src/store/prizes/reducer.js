import { GET_PRIZES, GET_PRIZES_ERROR, GET_PRIZES_SUCCESS } from "./actionTypes"

const initialState = {
	error: "",
	loading: false,
	prizes: [
	]
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
				prizes: action.payload?.data?.rows
			}
			break;
		case GET_PRIZES_ERROR:
			console.log('GET_PRIZES_ERROR', action)
			state = {
				...state,
				error: action.payload,
				loading: false,
			}
			break;
		default:
			state = { ...state }
			break
	}
	return state
}

export default Prizes
