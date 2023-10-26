import React from "react"
import { Redirect } from "react-router-dom"
import DashBoard from "src/pages/DashBoard"
import LandingPage from "src/pages/LandingPage"





const authProtectedRoutes = [
	{
		path: '/dashboard', component: DashBoard
	}

	// this route should be at the end of all other routes
	// eslint-disable-next-line react/display-name
	// {
	// 	path: "/",
	// 	exact: true,
	// 	component: () => <Redirect to="/home" />,
	// },
]

const publicRoutes = [

	{ path: '/home', component: LandingPage },
	{
		path: "/",
		// exact: true,
		component: () => <Redirect to="/home" />
	},
]

export { authProtectedRoutes, publicRoutes }