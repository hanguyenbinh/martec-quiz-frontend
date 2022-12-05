import React, { useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import SimpleBar from "simplebar-react"

//Import Components
import VerticalLayout from "./VerticalLayouts"
import { Container } from "reactstrap"
import { withTranslation } from "react-i18next"

import logoImg from "src/assets/images/ESG_BUILD_FUN_logo_B2.png"
import hkcaLogoImg from "src/assets/images/hkca-logo-only.png"

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

	return (
		<React.Fragment>
			<div className="app-menu navbar-menu">
				<div className="navbar-brand-box">
					<Link to="/" className="app-title">
						<span className="app-title d-flex flex-column pt-0 justify-content-center align-items-center" style={{ marginTop: -32 }}>
							<img className=" w-50" src={logoImg} />
							<span>
								{props.t('Application Name')}
							</span>
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
					<SimpleBar id="scrollbar" className="position-relative flex-grow-1">
						<Container fluid>
							<ul className="navbar-nav" id="navbar-nav">
								<VerticalLayout layoutType={layoutType} />
							</ul>
						</Container>
						<div style={{ flexGrow: 1 }}></div>
						<div className="d-flex flex-column align-items-center">
							<img className="w-25 mb-2" src={hkcaLogoImg} />
							<p className="text-white text-center m-2">Provided by HKCA</p>
							<p className="text-white text-center">Powered by JSESG Group</p>
						</div>

					</SimpleBar>
					<div className="sidebar-background"></div>
				</React.Fragment>
			</div>
			<div className="vertical-overlay"></div>
		</React.Fragment>
	)
}

export default withRouter(withTranslation()(Sidebar))
