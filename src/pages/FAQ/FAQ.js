import React from "react"
import { withTranslation } from "react-i18next"
import { withRouter } from "react-router-dom"
import { Container, Row } from "reactstrap"
import BreadCrumb from "src/Components/Common/BreadCrumb"



const FAQ = (props) => {
	const T = props.t ? props.t : (v) => v;

	return (
		<div className="page-content">
			<BreadCrumb title="FAQ" />
			<Container fluid>
				<Row className="fs-3">
					<p>Q1: I could not find the email for one-time verification code in my mailbox</p>
					<p>Ans: Usually the email with one-time verification code should come to your mailbox within 5 minutes. If you could not receive it, the email is probably being spammed by your company mail server, you could check your Spam folder or contact IT administrator to retrieve the email back</p>
				</Row>
			</Container>
		</div>
	)
}

export default withRouter((withTranslation()(FAQ)))