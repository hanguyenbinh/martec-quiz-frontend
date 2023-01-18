import React, { useState } from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody, Col, Container, Pagination, PaginationItem, PaginationLink, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import { deletePrize, getPrizes } from "src/store/prizes/actions"

import classes from "./prize.module.scss"

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
	console.log('prize list', prizes)

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

	const handleDeletePrize = (id) => {
		if (window.confirm(`Do you want to delete this Prize with Id: ${id}?`)) {
			dispatch(deletePrize(id))
		}

	}

	const handleCreatePrize = (id) => {
		props.history.push('/create-prize')
	}

	useEffect(() => {
	}, [page, limit, total, prizes])


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
								<Card className="mb-0">
									<CardBody>
										<div className={`${classes.banner} mb-3`}>
											<img src={d.image_path} className={classes.bannerImg} alt="" />
										</div>
										<div className="d-flex justify-content-center">
											<h5>{d.prize_name}</h5>
										</div>
									</CardBody>
								</Card>
							</Col>
							<Col xs="2">

								<h5>{T("Coins Required")}: {d.redeem_points}</h5>
								<h5>{T("No. of items available")}: {d.in_stock_qty}</h5>
								<h5>{T("Status")}: {d.status_text}</h5>
								<h5>{T("No. of redemptions")}: { }</h5>
								<h5>{T("Valid until")}: {d.expired_date}</h5>

							</Col>
							<Col xs="4">
								<Card className="mb-0">
									<CardBody>
										<div className={`${classes.banner} mb-3`}>
											<img src={d.qr_code_path} className={classes.bannerImg} alt="" />
										</div>
										<div className="d-flex justify-content-center">
											<h5>{T("Redemption Code")}</h5>
										</div>
									</CardBody>
								</Card>
							</Col>
							<Col xs="2">
								<button onClick={() => {
									handleEditPrize(d.prize_id);
								}}>{T('Edit')}</button>
								{/* <button className="btn-danger" onClick={() => {
									handleDeletePrize(d.prize_id);
								}}>{T('Delete')}</button> */}
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

					{[...Array(parseInt(total / limit) + (total % limit > 0 ? 1 : 0))].map((pageNo, i) => (
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
			</Container>
		</div>
	)
}

export default withTranslation()(Prizes)
