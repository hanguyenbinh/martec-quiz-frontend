import { getSumissionForms } from "../../store/actions"
import React, { useState } from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import * as moment from 'moment';
import { alertService } from "../../services"
import { getEvent, getEvents } from "src/store/events/actions"
import { ToastContainer } from "react-toastify"

const Events = (props) => {
	const T = props.t
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEvents(props.history))
	}, [])
	const { events } = useSelector(state => ({
		events: state.Events.events,
	}));
	const { error } = useSelector(state => ({
		error: state.Events.error,
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

	const handleEditEvent = (id) => {
		props.history.push('/edit-event/' + id)
	}

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title={T("Events")} />
				<Card>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">{T('Event Name')}</th>
								<th scope="col">{T('Description')}</th>
								<th scope="col">{T('Status')}</th>
								<th scope="col">{T('Start-End Date')}</th>
								<th scope="col">{T('Action')}</th>
							</tr>
						</thead>
						<tbody>
							{events && events.length > 0 && events.map((d, dIndex) => (
								<tr key={dIndex}>
									<th>{d.event_name}</th>
									<td>{d.event_desc}</td>
									<td>{d.status}</td>
									<td>{d.start_date} - {d.end_date}</td>
									<td>
										<button>{T('View')}</button>
										<button onClick={() => {
											handleEditEvent(d.event_id);
										}}>{T('Edit')}</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Card>
			</Container>
			<ToastContainer></ToastContainer>
		</div>
	)
}

export default withTranslation()(Events)
