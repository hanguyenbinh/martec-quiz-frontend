import React, { useState } from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody, CardImg, CardTitle, Col, Container, Pagination, PaginationItem, PaginationLink, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import { alertService } from "../../services"
import { getPrizes } from "src/store/prizes/actions"

import classes from 'src/assets/scss/pages/_prizes.scss'
import { ToastContainer } from "react-toastify"

const Prizes = (props) => {
	const T = props.t
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPrizes())
	}, [])
	const { prizes, error, page, limit, total } = useSelector(state => ({
		prizes: state.Prizes.prizes,
		error: state.Prizes.error,
		page: state.Prizes.page,
		limit: state.Prizes.limit,
		total: state.Prizes.total,
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


	const handleEditPrize = (id) => {
		props.history.push('/edit-prize/' + id)
	}

	const handleCreatePrize = (id) => {
		props.history.push('/create-prize')
	}



	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title={T("Prizes")} />
				<div className="d-flex justify-content-end mb-3"><Button onClick={() => {
					handleCreatePrize()
				}
				}>{T('Create')}</Button></div>
				<Card>

					{prizes && prizes.length > 0 && prizes.map((d, dIndex) => (
						<Row key={d.prize_id} className="align-items-center">
							<Col xs="4">
								<img src={d.image_path} className='prize-image' />
								<h5>{d.prize_name}</h5>
							</Col>
							<Col xs="2">
								<h5>{T("Item Left")}: {d.in_stock_qty}</h5>
								<h5>{T("Status")}: {d.status_text}</h5>
								<h5>{T("Valid until")}: {d.expired_date}</h5>

							</Col>
							<Col xs="4">
								<Row className="justify-content-center"><img src={d.qr_code_path} className='prize-image' /></Row>
								<Row className="justify-content-center">{T("Redemption Code")}</Row>
							</Col>
							<Col xs="2">
								{/* <button>{T('View')}</button> */}
								<button onClick={() => {
									handleEditPrize(d.prize_id);
								}}>{T('Edit')}</button>
							</Col>
						</Row>
					))}

				</Card>
				<Pagination size="sm">
					<PaginationItem disabled={page <= 1}>
						<PaginationLink onClick={() => {
							dispatch(getPrizes(page - 1, limit))
						}} previous href="#" />
					</PaginationItem>
					{/* The next PaginationItem after the previous PaginationItem button is the dynamic PaginationItem. This is the one that generates the page number buttons. */}
					{/* “Array(pagesCount)”: creates and initializes a new array object of length equal to pagesCount. */}
					{/* “[…Array(pagesCount)].map( fn)”: using the spread operator I expand the array. After expanding, the map() method then creates a new array of PaginationItems. */}

					{[...Array(parseInt(total / limit)) + 1].map((pageNo, i) => (
						<PaginationItem active={i + 1 === page} key={i}>
							<PaginationLink onClick={() => dispatch(getPrizes(i + 1, 10))} href="#">
								{i + 1}
							</PaginationLink>
						</PaginationItem>
					))}

					<PaginationItem disabled={page >= parseInt(total / limit)}>
						<PaginationLink onClick={() => { dispatch(getPrizes(page + 1, 10)) }} next href="#" />
					</PaginationItem>
				</Pagination>
				<ToastContainer></ToastContainer>
			</Container>
		</div>
	)
}

export default withTranslation()(Prizes)
