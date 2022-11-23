import { getSumissionForms } from "../../store/actions"
import React, { useState } from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Pagination, PaginationItem, PaginationLink, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import * as moment from 'moment';
import { alertService } from "../../services"
import { getEvent, getEvents } from "src/store/events/actions"
import { ToastContainer } from "react-toastify"

const Events = (props) => {
	const T = props.t
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEvents())
	}, [])
	const { events, error, page, limit, total } = useSelector(state => ({
		events: state.Events.events,
		error: state.Events.error,
		page: state.Events.page,
		limit: state.Events.limit,
		total: state.Events.total,
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
										{/* <button onClick={() => {
										}
										}>{T('View')}</button> */}
										<button onClick={() => {
											handleEditEvent(d.event_id);
										}}>{T('Edit')}</button>
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

					{[...Array(parseInt(total / limit)) + 1].map((pageNo, i) => (
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
				<ToastContainer></ToastContainer>
			</Container>

		</div>
	)
}

export default withTranslation()(Events)
