import React, { useState } from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import { alertService } from "../../services"
import { getPrizes } from "src/store/prizes/actions"

import classes from 'src/assets/scss/pages/_prizes.scss'

const Prizes = (props) => {
	const T = props.t
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPrizes(props.history))
	}, [])
	const { prizes } = useSelector(state => ({
		prizes: state.Prizes.prizes,
	}));
	const { error } = useSelector(state => ({
		error: state.Prizes.error,
	}));
	const [errorMessage, setErrorMessage] = useState('')
	useEffect(() => {
		let message = '';
		if (error.message) {
			message += error.message;
			if (error.data && error.data.sqlMessage) {
				message += ': ' + error.data.sqlMessage
			}
		}
		else {
			message = error.toString();
		}
		setErrorMessage(message);
	}, [error])

	const handleViewEvent = async (i) => {

		// const { isConfirmed } = await alertService.fireDialog({
		// 	showConfirmButton: false,
		// 	title: "Submission detail",
		// 	size: "xl",
		// 	content: (
		// 		<div className="text-center">
		// 			{submissionGroups && submissionGroups.map((submissionForm, index) => (
		// 				<Card key={`submision_forms_detail_${index}`}>
		// 					<CardHeader className="align-items-center d-flex">
		// 						<h4 className="card-title mb-0 flex-grow-1">{submissionForm.title}</h4>
		// 					</CardHeader>
		// 					<CardBody>
		// 						{
		// 							submissionForm.fields.map((field, _index) => (
		// 								<Row key={`submission_form_detail_${index}${_index}`} className={`mb-3 mt-3 line-${_index % 2}`}>
		// 									<Col>
		// 										<div className="view-submission-label">{field.label}</div>
		// 									</Col>
		// 									<Col className="view-submission-value">
		// 										{data[field.name] === true ? 'Yes' : data[field.name] === false ? 'No' : (field.name === 'yearOfRecord' ? (yearData[data[field.name]]) : (data[field.name]))}
		// 									</Col>
		// 								</Row>
		// 							))
		// 						}
		// 					</CardBody>
		// 				</Card>
		// 			))}
		// 		</div>
		// 	),

		// 	cancelButtonProps: {
		// 		show: true,
		// 		text: "Close"
		// 	},
		// 	confirmButtonProps: {
		// 		show: false
		// 	}
		// })
	}
	console.log(prizes)

	const style = { width: "150px" };


	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title={T("Prizes")} />
				<Card>

					{prizes && prizes.length > 0 && prizes.map((d, dIndex) => (
						<Row key={d.prize_uuid} className="align-items-center">
							<Col xs="4">
								<img src={d.image_path} className='prize-image' />
								<h5>{d.prize_name}</h5>
							</Col>
							<Col xs="4">
								<h5>{T("Item Left")}: {d.in_stock_qty}</h5>
								<h5>{T("Status")}: {d.status_text}</h5>
								<h5>{T("Valid until")}: {d.expired_date}</h5>

							</Col>
							<Col xs="4">
								<Row className="justify-content-center"><img src={d.qr_code_path} className='prize-image' /></Row>
								<Row className="justify-content-center">{T("Redemption Code")}</Row>
							</Col>
						</Row>
					))}

				</Card>
			</Container>
		</div>
	)
}

export default withTranslation()(Prizes)
