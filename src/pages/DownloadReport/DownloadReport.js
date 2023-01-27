import React from "react"
import { withTranslation } from "react-i18next"
import { withRouter } from "react-router-dom"
import { Card, Col, Container, Row } from "reactstrap"
import BreadCrumb from "src/Components/Common/BreadCrumb"



const DownloadReport = (props) => {
	const T = props.t ? props.t : (v) => v;

	return (
		<div className="page-content">
			<BreadCrumb title="ESG Performance Report" />
			<Card>
				<table className="table">
					<thead>
						<tr>
							<th scope="col" >{T('Recording Period')}</th>
							<th scope="col" >{T('Action')}</th>
							<th scope="col">{T('Issue Date')}</th>
							<th scope="col">{T('Status')}</th>
							<th scope="col">{T('Remark')}</th>
						</tr>
					</thead>
				</table>
			</Card>

		</div>
	)
}

export default withRouter((withTranslation()(DownloadReport)))