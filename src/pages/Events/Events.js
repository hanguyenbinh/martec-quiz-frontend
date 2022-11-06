import { getSumissionForms } from "../../store/actions"
import React, { useState } from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import * as moment from 'moment';
import { alertService } from "../../services"
import { getEvents } from "src/store/events/actions"

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
							</tr>
						</thead>
						<tbody>
							{events && events.length > 0 && events.map((d, dIndex) => (
								<tr key={dIndex}>
									<th>{d.event_name}</th>
									<td>{d.event_desc}</td>
									<td>{d.status}</td>
									<td>{d.start_date} - {d.end_date}</td>
								</tr>
							))}
						</tbody>
					</table>
				</Card>
			</Container>
		</div>
	)
}

export default withTranslation()(Events)
