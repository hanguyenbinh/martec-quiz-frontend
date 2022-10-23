import React, { useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import SimpleBar from "simplebar-react"
//import logo
import logoSm from "../assets/images/logo-sm.png"
import logoDark from "../assets/images/logo-dark.png"
import logoLight from "../assets/images/logo-light.png"
import logo from "../assets/images/logo.png";

//Import Components
import VerticalLayout from "./VerticalLayouts"
import { Container } from "reactstrap"
import { withTranslation } from "react-i18next"

const Sidebar = (props) => {
	const layoutType = props
	useEffect(() => {
		var verticalOverlay = document.getElementsByClassName("vertical-overlay")
		if (verticalOverlay) {
			verticalOverlay[0].addEventListener("click", function () {
				document.body.classList.remove("vertical-sidebar-enable")
			})
		}
	})

	const addEventListenerOnSmHoverMenu = () => {
		// add listener Sidebar Hover icon on change layout from setting
		if (
			document.documentElement.getAttribute("data-sidebar-size") === "sm-hover"
		) {
			document.documentElement.setAttribute(
				"data-sidebar-size",
				"sm-hover-active"
			)
		} else if (
			document.documentElement.getAttribute("data-sidebar-size") ===
			"sm-hover-active"
		) {
			document.documentElement.setAttribute("data-sidebar-size", "sm-hover")
		} else {
			document.documentElement.setAttribute("data-sidebar-size", "sm-hover")
		}
	}
	////console.logdisabled(layoutType);
	return (
		<React.Fragment>
			<div className="app-menu navbar-menu">
				<div className="navbar-brand-box">

					<Link to="/" className="logo logo-light">
						{/* <span className="logo-lg">
							<img src={logo} alt="" height="17" />
						</span> */}
						<span className="app-title">
							{props.t('Application Name')}
						</span>
					</Link>




					<button
						onClick={addEventListenerOnSmHoverMenu}
						type="button"
						className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
						id="vertical-hover"
					>
						<i className="ri-record-circle-line"></i>
					</button>
				</div>
				<React.Fragment>
					<SimpleBar id="scrollbar" className="h-100">
						<Container fluid>
							<ul className="navbar-nav" id="navbar-nav">
								<VerticalLayout layoutType={layoutType} />
							</ul>
						</Container>
					</SimpleBar>
					<div className="sidebar-background"></div>
				</React.Fragment>
			</div>
			<div className="vertical-overlay"></div>
		</React.Fragment>
	)
}

export default withRouter(withTranslation()(Sidebar))
