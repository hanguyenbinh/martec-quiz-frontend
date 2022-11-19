import React from "react"
import { Redirect } from "react-router-dom"
//login
import Login from "../pages/Authentication/Login"
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword"
import Logout from "../pages/Authentication/Logout"
import GetOtp from "../pages/Authentication/GetOtp"


import DashBoard from "src/pages/DashBoard"
import UploadESGData from "../pages/SubmissionForm"
import UploadList from "../pages/SubmissionHistory"
import LandingPage from "src/pages/LandingPage"
import GetOtpRegister from "../pages/Authentication/GetOtpRegister"
import GetTokenRegister from "src/pages/Authentication/GetTokenRegister"
import UserRegister from "src/pages/Authentication/UserRegister"
import Events from "src/pages/Events"
import SpecialDashBoard from "src/pages/SpecialDashBoard"
import Prizes from "src/pages/Prizes"
import UpdatePrize from "src/pages/Prizes/UpdatePrize"
import UpdateEvent from "src/pages/Events/UpdateEvent"
import CreateEvent from "src/pages/Events/CreateEvent"
import CreatePrize from "src/pages/Prizes/CreatePrize"




const authProtectedRoutes = [
	{ path: "/dashboard", component: DashBoard },
	{ path: "/submit-data", component: UploadESGData },
	{ path: "/submissions-history", component: UploadList },
	{ path: "/events", component: Events },
	{ path: "/edit-event/:id", component: UpdateEvent },
	{ path: "/create-event", component: CreateEvent },
	{ path: "/prizes", component: Prizes },
	{ path: "/edit-prize/:id", component: UpdatePrize },
	{ path: "/create-prize", component: CreatePrize },
	{ path: "/ca-dashboard", component: SpecialDashBoard },

	// this route should be at the end of all other routes
	// eslint-disable-next-line react/display-name	
	{
		path: "/",
		exact: true,
		component: () => <Redirect to="/dashboard" />,
	},
]

const publicRoutes = [
	// {
	// 	path: "/",
	// 	exact: true,
	// 	component: () => <Redirect to="/home" />
	// },
	{ path: '/home', component: LandingPage },
	// Authentication Page
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/get-otp", component: GetOtp },
	{ path: "/forgot-password", component: ForgetPasswordPage },
	{ path: "/register", component: GetOtpRegister },
	{ path: "/register-challenge", component: GetTokenRegister },
	{ path: "/user-register", component: UserRegister },

	// //AuthenticationInner pages
	// { path: "/auth-signin-basic", component: BasicSignIn },
	// { path: "/auth-signin-cover", component: CoverSignIn },
	// { path: "/auth-signup-basic", component: BasicSignUp },
	// { path: "/auth-signup-cover", component: CoverSignUp },
	// { path: "/auth-pass-reset-basic", component: BasicPasswReset },
	// { path: "/auth-pass-reset-cover", component: CoverPasswReset },
	// { path: "/auth-lockscreen-basic", component: BasicLockScreen },
	// { path: "/auth-lockscreen-cover", component: CoverLockScreen },
	// { path: "/auth-logout-basic", component: BasicLogout },
	// { path: "/auth-logout-cover", component: CoverLogout },
	// { path: "/auth-success-msg-basic", component: BasicSuccessMsg },
	// { path: "/auth-success-msg-cover", component: CoverSuccessMsg },
	// { path: "/auth-twostep-basic", component: BasicTwosVerify },
	// { path: "/auth-twostep-cover", component: CoverTwosVerify },
	// { path: "/auth-404-basic", component: Basic404 },
	// { path: "/auth-404-cover", component: Cover404 },
	// { path: "/auth-404-alt", component: Alt404 },
	// { path: "/auth-500", component: Error500 },
	// { path: "/pages-maintenance", component: Maintenance },
	// { path: "/pages-coming-soon", component: ComingSoon },

	// { path: "/landing", component: OnePage },
	// { path: "/nft-landing", component: NFTLanding },

	// { path: "/auth-pass-change-basic", component: BasicPasswCreate },
	// { path: "/auth-pass-change-cover", component: CoverPasswCreate },
	// { path: "/auth-offline", component: Offlinepage }
]

export { authProtectedRoutes, publicRoutes }
