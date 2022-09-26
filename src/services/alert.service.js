import eventBus from "../services/eventBus.service"
import { eventBusConstants } from "../utils/constants"

const alertService = {
	fireDialog: (message, options) => {
		if (typeof message === "string") {
			const { content, ...otherOptions } = options || {}
			return eventBus.dispatchAsync(eventBusConstants.ALERT_DIALOG, {
				content: message,
				...otherOptions
			})
		}
		return eventBus.dispatchAsync(eventBusConstants.ALERT_DIALOG, message)
	}
}

export default alertService
