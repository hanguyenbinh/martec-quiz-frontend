import { GET_EVENTS, API_EVENT_ERROR, GET_EVENTS_SUCCESS, GET_EVENT_DETAILS, GET_EVENT_DETAILS_SUCCESS, GET_EVENT_NATURE, GET_EVENT_NATURE_SUCCESS, UPDATE_EVENT_SUCCESS, UPDATE_EVENT, CREATE_EVENT, CREATE_EVENT_SUCCESS } from "./actionTypes"

const initialState = {
	error: "",
	loading: false,
	events: [],
	event: {},
	eventNatures: [],
	page: 1,
	limit: 10,
	count: 0,
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
				events: action.payload?.data?.rows,
				page: action.payload.data.page,
				count: action.payload.data.count,
				limit: action.payload.data.size,
			}
			break;
		case API_EVENT_ERROR:
			state = {
				...state,
				error: action.payload,
				loading: false,
			}
			break;
		case GET_EVENT_DETAILS:
			state = {
				...state,
				loading: true,
				error: false,
				eventId: action.payload?.id
			}
			break;
		case GET_EVENT_DETAILS_SUCCESS:
			console.log('GET_EVENT_DETAILS_SUCCESS', action)
			state = {
				...state,
				loading: false,
				error: false,
				event: action.payload?.data
			}
			break;
		case GET_EVENT_NATURE:
			state = {
				...state,
				loading: true,
				error: false,
				eventNatures: []
			}
			break;
		case GET_EVENT_NATURE_SUCCESS:
			console.log('GET_EVENT_NATURE_SUCCESS', action.payload.data)

			state = {
				...state,
				loading: false,
				error: false,
				eventNatures: action.payload?.data
			}
			break;

		case UPDATE_EVENT:
			state = {
				...state,
				loading: true,
				error: false,
			}
			break;
		case UPDATE_EVENT_SUCCESS:
			console.log('UPDATE_EVENT_SUCCESS', action.payload.data)

			state = {
				...state,
				loading: false,
				error: false,
				event: action.payload.data
			}
			break;

		case CREATE_EVENT:
			state = {
				...state,
				loading: true,
				error: false,
			}
			break;
		case CREATE_EVENT_SUCCESS:
			console.log('CREATE_EVENT_SUCCESS', action.payload.data)
			state = {
				...state,
				loading: false,
				error: false,
				event: action.payload.data,
				eventId: action.payload.data.event_id
			}
			break;
		default:
			state = { ...state }
			break
	}
	return state
}

export default Events
