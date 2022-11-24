import React, { useState } from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody, Col, Container, Input, Pagination, PaginationItem, PaginationLink, Row, Table } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import { deleteEvent, getEvents } from "src/store/events/actions"
import { ToastContainer } from "react-toastify"
import { getEventSummaries, getOrgEvents } from "src/store/actions"
import { isEmpty } from "lodash"

const Events = (props) => {
	const T = props.t
	const dispatch = useDispatch();
	const [selectedEventId, setSelectedEventId] = useState('');

	useEffect(() => {
		dispatch(getEvents())
		dispatch(getOrgEvents())
	}, [])
	useEffect(() => {
		if (!isEmpty(selectedEventId)) {
			dispatch(getEventSummaries(selectedEventId));
		}
	}, [selectedEventId])
	const { events, error, page, limit, total, deleteCount, eventSummaries, organisationEvents } = useSelector(state => ({
		events: state.Events.events,
		error: state.Events.error,
		page: state.Events.page,
		limit: state.Events.limit,
		total: state.Events.total,
		deleteCount: state.Events.deleteCount,
		organisationEvents: state.CADashboard.organisationEvents,
		eventSummaries: state.CADashboard.eventSummaries,
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

	const handleEditEvent = (id) => {
		props.history.push('/edit-event/' + id)
	}
	const handleCreateEvent = () => {
		props.history.push('/create-event');

	}

	const handleDeleteEvent = (id) => {
		if (window.confirm(`Do you want to delete this Event with Id: ${id}?`)) {
			dispatch(deleteEvent(id))
		}

	}


	useEffect(() => {
	}, [page, limit, total, events, deleteCount])

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title={T("Events")} />
				<div className="d-flex justify-content-end mb-3"><Button onClick={() => {
					handleCreateEvent()
				}
				}>{T('Create')}</Button></div>

				<Card>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">{T('Event Name')}</th>
								<th scope="col">{T('Description')}</th>
								<th scope="col">{T('Status')}</th>
								<th scope="col">{T('Start-End Date')}</th>
								<th scope="col">{T('Visible to Users')}</th>
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
									<td>{d.visible}</td>
									<td>
										{/* <button onClick={() => {
										}
										}>{T('View')}</button> */}
										<button onClick={() => {
											handleEditEvent(d.event_id);
										}}>{T('Edit')}</button>

										<button className="btn-danger" onClick={() => {
											handleDeleteEvent(d.event_id);
										}}>{T('Delete')}</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Card>
				<Pagination size="sm">
					<PaginationItem disabled={page <= 1}>
						<PaginationLink onClick={() => {
							dispatch(getEvents(page - 1, limit))
						}} previous href="#" />
					</PaginationItem>
					{/* The next PaginationItem after the previous PaginationItem button is the dynamic PaginationItem. This is the one that generates the page number buttons. */}
					{/* “Array(pagesCount)”: creates and initializes a new array object of length equal to pagesCount. */}
					{/* “[…Array(pagesCount)].map( fn)”: using the spread operator I expand the array. After expanding, the map() method then creates a new array of PaginationItems. */}

					{[...Array(parseInt(total / limit) + (total % limit > 0 ? 1 : 0))].map((pageNo, i) => (
						<PaginationItem active={i + 1 === page} key={i}>
							<PaginationLink onClick={() => dispatch(getEvents(i + 1, 10))} href="#">
								{i + 1}
							</PaginationLink>
						</PaginationItem>
					))}

					<PaginationItem disabled={page >= parseInt(total / limit)}>
						<PaginationLink onClick={() => { dispatch(getEvents(page + 1, 10)) }} next href="#" />
					</PaginationItem>
				</Pagination>
				<h5 className="mb-3">Summary</h5>
				<Card>
					<CardBody>
						<div className="d-flex mb-2">
							<Input type="select" style={{ width: 240 }} onChange={(e => {
								setSelectedEventId(e.target.value)
							})}>
								<option value=''>Select event</option>
								{organisationEvents.map((item, index) => (
									<option key={index} value={item.event_id}>{item.event_name}</option>
								))}
							</Input>
						</div>
						<Row className="mb-2">
							<Col sm={12} md={6}>
								Start-End Date: {eventSummaries.event.start_date} {eventSummaries.event.end_date} {eventSummaries.event.status}
							</Col>
							<Col sm={12} md={6}>
								No of Plays left: {eventSummaries.event.playsLeft} times
							</Col>
						</Row>

						<Row>

							<Col sm={12} md={3}>
								<h5 className="mx-2 mb-3">Participations</h5>
								<Table bordered className="mb-0">
									<thead>
										<tr>
											<td>Days</td>
											<td>No of Plays</td>
										</tr>
									</thead>
									{eventSummaries.participations && (
										<tbody>
											<tr>
												<td>Today</td>
												<td>{eventSummaries.participations.today}</td>
											</tr>
											<tr>
												<td>Last 7 days</td>
												<td>{eventSummaries.participations.last7}</td>
											</tr>
											<tr>
												<td>Last 30 days</td>
												<td>{eventSummaries.participations.last30}</td>
											</tr>
											<tr>
												<td>Since Day 1</td>
												<td>{eventSummaries.participations.sinceDay1}</td>
											</tr>

										</tbody>


									)}
								</Table>
							</Col>
							<Col sm={12} md={3}>
								<h5 className="mx-2 mb-3">New Joiners</h5>
								<Table bordered className="mb-0">
									<thead>
										<tr>
											<td>Days</td>
											<td>New Players</td>
										</tr>
									</thead>
									{eventSummaries.newJoiners && (

										<tbody>
											<tr>
												<td>Today</td>
												<td>{eventSummaries.newJoiners.today}</td>
											</tr>
											<tr>
												<td>Last 7 days</td>
												<td>{eventSummaries.newJoiners.last7}</td>
											</tr>
											<tr>
												<td>Last 30 days</td>
												<td>{eventSummaries.newJoiners.last30}</td>
											</tr>
											<tr>
												<td>Since Day 1</td>
												<td>{eventSummaries.newJoiners.sinceDay1}</td>
											</tr>

										</tbody>

									)}
								</Table>
							</Col>
						</Row>
					</CardBody>
				</Card>
				<ToastContainer></ToastContainer>
			</Container>

		</div>
	)
}

export default withTranslation()(Events)
