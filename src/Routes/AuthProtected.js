import React, { useEffect } from "react"
import { Redirect, Route } from "react-router-dom"
import { setAuthorization } from "../helpers/api_helper"
import { useDispatch } from "react-redux"

import { useProfile } from "../Components/Hooks/UserHooks"

import { logoutUser } from "../store/actions"

const AuthProtected = (props) => {
	const dispatch = useDispatch()
	const { loading, token, email } = useProfile()
	useEffect(() => {
		if (!loading && token && email) {
			setAuthorization(token)
		} else if (loading && !token) {
			dispatch(logoutUser())
		}
	}, [token, loading, dispatch])

	/*
		redirect is un-auth access protected routes via url
		*/

	if (loading && (!token || !email)) {
		return (
			<Redirect to={{ pathname: "/get-otp", state: { from: props.location } }} />
		);
	}

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
