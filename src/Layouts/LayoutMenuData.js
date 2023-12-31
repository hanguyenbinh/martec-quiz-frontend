import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getOrganisationType } from "src/helpers/api_helper"
import dashboardIcon from 'src/assets/images/menu/dashboard-67.svg'

const Navdata = (props) => {
	const history = useHistory()
	const [organisationType, setOrganisationType] = useState('');

	useEffect(() => {
		const organisationType = getOrganisationType();
		setOrganisationType(organisationType);
	}, [])

	//state data
	const [isDashboard, setIsDashboard] = useState(false)
	const [isApps, setIsApps] = useState(false)
	const [isAuth, setIsAuth] = useState(false)
	const [isPages, setIsPages] = useState(false)
	const [isBaseUi, setIsBaseUi] = useState(false)
	const [isAdvanceUi, setIsAdvanceUi] = useState(false)
	const [isForms, setIsForms] = useState(false)
	const [isTables, setIsTables] = useState(false)
	const [isCharts, setIsCharts] = useState(false)
	const [isIcons, setIsIcons] = useState(false)
	const [isMaps, setIsMaps] = useState(false)
	const [isMultiLevel, setIsMultiLevel] = useState(false)

	const [iscurrentState, setIscurrentState] = useState("Dashboard")

	function updateIconSidebar(e) {
		if (e && e.target && e.target.getAttribute("subitems")) {
			const ul = document.getElementById("two-column-menu")
			const iconItems = ul.querySelectorAll(".nav-icon.active")
			let activeIconItems = [...iconItems]
			activeIconItems.forEach((item) => {
				item.classList.remove("active")
				var id = item.getAttribute("subitems")
				if (document.getElementById(id))
					document.getElementById(id).classList.remove("show")
			})
		}
	}

	useEffect(() => {
		console.log('current state', iscurrentState)
		document.body.classList.remove("twocolumn-panel")
		if (iscurrentState !== "Dashboard") {
			setIsDashboard(false)
		}
		if (iscurrentState !== "Apps") {
			setIsApps(false)
		}
		if (iscurrentState !== "Auth") {
			setIsAuth(false)
		}
		if (iscurrentState !== "Pages") {
			setIsPages(false)
		}
		if (iscurrentState !== "BaseUi") {
			setIsBaseUi(false)
		}
		if (iscurrentState !== "AdvanceUi") {
			setIsAdvanceUi(false)
		}
		if (iscurrentState !== "Forms") {
			setIsForms(false)
		}
		if (iscurrentState !== "Tables") {
			setIsTables(false)
		}
		if (iscurrentState !== "Charts") {
			setIsCharts(false)
		}
		if (iscurrentState !== "Icons") {
			setIsIcons(false)
		}
		if (iscurrentState !== "Maps") {
			setIsMaps(false)
		}
		if (iscurrentState !== "MuliLevel") {
			setIsMultiLevel(false)
		}
		if (iscurrentState === "Widgets") {
			history.push("/widgets")
			document.body.classList.add("twocolumn-panel")
		}
		// if (iscurrentState !== "Landing") {
		// 	setIsLanding(false)
		// }
	}, [
		history,
		iscurrentState,
		isDashboard,
		isApps,
		isAuth,
		isPages,
		isBaseUi,
		isAdvanceUi,
		isForms,
		isTables,
		isCharts,
		isIcons,
		isMaps,
		isMultiLevel
	])

	const menuItems = [
		{
			label: "Menu",
			isHeader: true,
			role: 'normal'
		},
		{
			id: "dashboard",
			label: "Dashboard",
			link: "/dashboard",
			parentId: "dashboard",
			icon: "dashboard",
			role: 'normal'
		}
	]
	return <React.Fragment>{menuItems}</React.Fragment>
}
export default (Navdata)