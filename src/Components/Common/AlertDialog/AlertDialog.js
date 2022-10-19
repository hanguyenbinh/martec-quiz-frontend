import React from "react"

import { eventBusService } from "../../../services"
import { eventBusConstants } from "../../../utils/constants"

import { Button, Modal, ModalBody } from "reactstrap"

const confirmButtonPropsConstants = {
	show: true,
	text: "Ok",
	color: "primary",
	variant: undefined
}
const cancelButtonPropsConstants = {
	show: false,
	text: "Cancel",
	color: "default",
	variant: undefined
}
let resolve = null
let reject = null

const AlertDialog = (props) => {
	const [open, setOpen] = React.useState(false)
	const [options, setOptions] = React.useState({
		title: "",
		size: "lg",
		content: "",
		actions: null,
		confirmButtonProps: { ...confirmButtonPropsConstants },
		cancelButtonProps: { ...cancelButtonPropsConstants }
	})
	const {
		title,
		size,
		content,
		actions,
		confirmButtonProps: {
			text: confirmButtonPropsText,
			show: confirmButtonPropsShow,
			...otherConfirmButtonProps
		},
		cancelButtonProps: {
			text: cancelButtonPropsText,
			show: cancelButtonPropsShow,
			...otherCancelButtonProps
		},
	} = options

	const handleClose = (params) => {
		setOpen(false)
		resolve && resolve(params)
		removePromiseMethod()
	}
	const removePromiseMethod = () => {
		resolve = null
		reject = null
	}

	React.useEffect(() => {
		eventBusService.on(
			eventBusConstants.ALERT_DIALOG,
			(data, resolveFromPromise, rejectFromPromise) => {
				resolve = resolveFromPromise
				reject = rejectFromPromise
				setOptions((options) => ({
					...options,
					...data,
					confirmButtonProps: {
						...confirmButtonPropsConstants,
						...data?.confirmButtonProps
					},
					cancelButtonProps: {
						...cancelButtonPropsConstants,
						...data?.cancelButtonProps
					}
				}))
				setOpen(true)
			}
		)
		return () => {
			eventBusService.remove(eventBusConstants.ALERT_DIALOG)
			removePromiseMethod()
		}
	}, [])

	return (
		<Modal
			size={size}
			isOpen={open}
			toggle={() => handleClose({ isConfirmed: false })}
			centered
		>
			{![null, undefined, ""].includes(content) && (
				<ModalBody>
					<div className="mt-4">
						{![null, undefined, ""].includes(title) && (
							<h4 className="text-center mb-3">{title}</h4>
						)}

						{![null, undefined, ""].includes(content) && (
							<p className="text-center text-muted mb-4">{content}</p>
						)}

						<div className="hstack gap-2 justify-content-center">
							{Array.isArray(actions) ? (
								actions.map((action, actionIndex) => (
									<Button
										key={actionIndex}
										onClick={() => handleClose({ isConfirmed: false })}
										color="primary"
									>
										{action.text}
									</Button>
								))
							) : actions ? (
								actions
							) : (
								<>
									{cancelButtonPropsShow && (
										<Button
											{...otherCancelButtonProps}
											onClick={() => handleClose({ isConfirmed: false })}
										>
											{cancelButtonPropsText}
										</Button>
									)}
									{confirmButtonPropsShow && (
										<Button
											{...otherConfirmButtonProps}
											onClick={() => handleClose({ isConfirmed: true })}
										>
											{confirmButtonPropsText}
										</Button>
									)}
								</>
							)}
						</div>
					</div>
				</ModalBody>
			)}
		</Modal>
	)
}

export default AlertDialog
