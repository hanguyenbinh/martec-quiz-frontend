import { GET_EVENTS, GET_EVENTS_ERROR, GET_EVENTS_SUCCESS } from "./actionTypes"

const initialState = {
	error: "",
	loading: false,
	events: []
}

const Events = (state = initialState, action) => {
	switch (action.type) {
		case GET_EVENTS:
			state = {
				...state,
				loading: true
			}
			break
		case GET_EVENTS_SUCCESS:
			console.log(action.payload)
			state = {
				...state,
				loading: false,
				events: action.payload?.data?.rows
			}
			break;
		case GET_EVENTS_ERROR:
			console.log('GET_EVENTS_ERROR', action)
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

export default Events
