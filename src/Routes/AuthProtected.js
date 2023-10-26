import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { setAuthorization } from "../helpers/api_helper"
import { useDispatch } from "react-redux"

import { useProfile } from "../Components/Hooks/UserHooks"

import { logoutAction } from "../store/actions"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const AuthProtected = (props) => {
	const dispatch = useDispatch()
	const { accessToken } = useProfile()
	const history = useHistory();
	console.log('AuthProtected', accessToken)
	useEffect(() => {
		if (accessToken) {
			setAuthorization(accessToken)
		} else {
			console.log('afdasfssafsafasfsaff')
			dispatch(logoutAction(history))
		}
	}, [accessToken, dispatch])

	return <>{props.children}</>
}

const AccessRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return (
					<>
						{" "}
						<Component {...props} />{" "}
					</>
				)
			}}
		/>
	)
}

export { AuthProtected, AccessRoute }
