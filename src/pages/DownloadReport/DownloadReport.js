import React from "react"
import { withTranslation } from "react-i18next"
import { withRouter } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import BreadCrumb from "src/Components/Common/BreadCrumb"



const DownloadReport = (props) => {
	const T = props.t ? props.t : (v) => v;

	return (
		<div className="page-content">
			<BreadCrumb title="ESG Performance Report" />
			<Container fluid>
				<Row className="fw-bold" style={{ backgroundColor: '#6ba4c3', color: 'white' }}>
					<Col>Recording Period</Col>
					<Col>Action</Col>
					<Col>Issue Date</Col>
					<Col>Status</Col>
					<Col>Remark</Col>
				</Row>
				<Row style={{ backgroundColor: '#6ba4c34f' }}>
					<Col></Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
				</Row>
				<Row>
					<Col></Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	)
}

export default withRouter((withTranslation()(DownloadReport)))