import { GET_EVENTS, API_EVENT_ERROR, GET_EVENTS_SUCCESS, GET_EVENT_DETAILS, GET_EVENT_DETAILS_SUCCESS, GET_EVENT_NATURE, GET_EVENT_NATURE_SUCCESS, UPDATE_EVENT_SUCCESS, UPDATE_EVENT, CREATE_EVENT, CREATE_EVENT_SUCCESS, DELETE_EVENT, DELETE_EVENT_SUCCESS, GET_TEMPLATES, UPDATE_TEMPLATE, CREATE_TEMPLATE, DELETE_TEMPLATE, DELETE_TEMPLATE_SUCCESS, CREATE_TEMPLATE_SUCCESS, UPDATE_TEMPLATE_SUCCESS, GET_TEMPLATES_SUCCESS, GET_TEMPLATE_DETAILS, GET_TEMPLATE_DETAILS_SUCCESS, GET_COMPACT_TEMPLATES, GET_COMPACT_TEMPLATES_SUCCESS, GET_TEMPLATE, GET_TEMPLATE_SUCCESS, REMOVE_CURRENT_TEMPLATE } from "./actionTypes"

const initialState = {
	error: false,
	loading: false,
	events: [],
	event: {},
	eventNatures: [],
	page: 1,
	limit: 10,
	total: 0,
	deleteCount: 0,
	templates: [],
	template: {},
	templatePage: 1,
	templateTotal: 0,
	templateLimit: 10,
	compactTemplates: [],
	currentTemplate: null
}

const Events = (state = initialState, action) => {
	switch (action.type) {
		case GET_EVENTS:
		case GET_TEMPLATES:
		case GET_TEMPLATE:
		case GET_COMPACT_TEMPLATES:
			state = {
				...state,
				loading: true,
				error: false
			}
			break
		case GET_EVENTS_SUCCESS:
			state = {
				...state,
				loading: false,
				error: false,
				events: action.payload?.data?.rows,
				page: action.payload.data.page,
				total: action.payload.data.total,
				limit: action.payload.data.size,
			}
			break;
		case GET_TEMPLATES_SUCCESS:
			state = {
				...state,
				loading: false,
				error: false,
				templates: action.payload?.data?.rows,
				templatePage: action.payload.data.page,
				templateTotal: action.payload.data.total,
				templateLimit: action.payload.data.size,
			}
			break;
		case GET_TEMPLATE_SUCCESS:
			console.log('GET_TEMPLATE_SUCCESS adfsaf', action.payload)
			state = {
				...state,
				loading: false,
				error: false,
				currentTemplate: action.payload?.data,
			}
			break;
		case GET_COMPACT_TEMPLATES_SUCCESS:
			console.log(action.payload.data)
			state = {
				...state,
				loading: false,
				error: false,
				compactTemplates: action.payload?.data,
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
		case GET_TEMPLATE_DETAILS:
			state = {
				...state,
				loading: true,
				error: false,
				templateId: action.payload?.id
			}
			break;
		case GET_TEMPLATE_DETAILS_SUCCESS:
			state = {
				...state,
				loading: false,
				error: false,
				template: action.payload?.data
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
		case CREATE_EVENT:
		case DELETE_EVENT:
		case UPDATE_TEMPLATE:
		case CREATE_TEMPLATE:
		case DELETE_TEMPLATE:
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

		case DELETE_EVENT_SUCCESS:
			console.log('DELETE_EVENT_SUCCESS', state.deleteCount)
			state = {
				...state,
				loading: false,
				error: false,
				deleteCount: state.deleteCount++
			}
			break;
		case UPDATE_TEMPLATE_SUCCESS:

			state = {
				...state,
				loading: false,
				error: false,
				template: action.payload.data
			}
			break;

		case CREATE_TEMPLATE_SUCCESS:
			state = {
				...state,
				loading: false,
				error: false,
				template: action.payload.data,
				templateId: action.payload.data.template_id
			}
			break;

		case DELETE_TEMPLATE_SUCCESS:
			state = {
				...state,
				loading: false,
				error: false,
				deleteCount: state.deleteCount++
			}
			break;
		case REMOVE_CURRENT_TEMPLATE:
			state = {
				...state,
				currentTemplate: null
			}
		default:
			state = { ...state }
			break
	}
	return state
}

export default Events