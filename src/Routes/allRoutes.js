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
import Coins from "src/pages/Coins"
import DefaultSubmissionUpload from "src/pages/DefaultSubmissionUpload"
import FAQ from "src/pages/FAQ"
import DownloadReport from "src/pages/DownloadReport"
import CreateTemplate from "src/pages/Events/CreateTemplate"
import UpdateTemplate from "src/pages/Events/UpdateTemplate"




const authProtectedRoutes = [
	{ path: "/dashboard", component: DashBoard },
	{ path: "/submit-data", component: UploadESGData },
	{ path: "/submit-data/:id", component: UploadESGData },
	{ path: "/submissions-history", component: UploadList },
	{ path: "/events", component: Events },
	{ path: "/edit-event/:id", component: UpdateEvent },
	{ path: "/create-event", component: CreateEvent },
	{ path: "/edit-template/:id", component: UpdateTemplate },
	{ path: "/create-template", component: CreateTemplate },
	{ path: "/prizes", component: Prizes },
	{ path: "/edit-prize/:id", component: UpdatePrize },
	{ path: "/create-prize", component: CreatePrize },
	{ path: "/ca-dashboard", component: SpecialDashBoard },
	{ path: "/coins", component: Coins },
	{ path: "/faq", component: FAQ },
	{ path: "/download-report", component: DownloadReport },

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
	// Authentication Page
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/get-otp", component: GetOtp },
	{ path: "/forgot-password", component: ForgetPasswordPage },
	{ path: "/register", component: GetOtpRegister },
	{ path: "/register-challenge", component: GetTokenRegister },
	{ path: "/user-register", component: UserRegister },
	{ path: "/upload-submission", component: DefaultSubmissionUpload },
	{
		path: "/",
		// exact: true,
		component: () => <Redirect to="/home" />
	},
]

export { authProtectedRoutes, publicRoutes }