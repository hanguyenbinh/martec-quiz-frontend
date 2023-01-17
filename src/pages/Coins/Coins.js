import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Container,

	Row,

} from "reactstrap"

import BreadCrumb from "src/Components/Common/BreadCrumb"
import { getCoinsHistory, getCoinsSummary } from "src/store/actions"
import DataTable from "./components/DataTable"

function Coins(props) {
	const T = props.t
	const dispatch = useDispatch();
	const [days, setDays] = useState(0)
	useEffect(() => {
		handleDaysChanged(days)
	}, [days])
	const handleDaysChanged = (value) => {
		dispatch(getCoinsHistory(value))
		dispatch(getCoinsSummary())
	}

	const { coinsHistory, coinsSummary } = useSelector(state => ({
		coinsHistory: state.Coins.coinsHistory,
		error: state.Coins.error,
		coinsSummary: state.Coins.coinsSummary,
	}));

	const columns = React.useMemo(
		() => [
			{
				id: "date",
				label: "Date",
				renderCell: ({ data }) => {
					return data.date
				}
			},
			{
				id: "amount",
				label: "Amount",
				renderCell: ({ data }) => {
					return data.amount
				}
			},
			{
				id: "remark",
				label: "Remark",
				renderCell: ({ data }) => {
					return data.remark
				}
			},
			{
				id: "counterparty",
				label: "Counterparty",
				renderCell: ({ data }) => {
					return data.counterparty
				}
			}
		],
		[]
	)
	useEffect(() => {
		console.log('coins api called', coinsHistory, coinsSummary)
	}, [coinsHistory, coinsSummary])

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Coin History" />
				<Card>
					<CardHeader>
						<CardTitle className="mb-0">Coins Summary</CardTitle>
					</CardHeader>
					<CardBody className="border-bottom ms-4">
						<Row className="mb-3">
							<Col className="col-md-2">No. of ESG Coin - E mined: </Col>
							<Col>{coinsSummary.totalGivenOut}</Col>
						</Row>
						<Row className="mb-3">
							<Col className="col-md-2">No. of ESG Coin - S mined: </Col>
							<Col>{coinsSummary.totalGivenOut}</Col>
						</Row>
						<Row className="mb-3">
							<Col className="col-md-2">No. of ESG Coin - G mined: </Col>
							<Col>{coinsSummary.totalGivenOut}</Col>
						</Row>
						<Row className="mb-3">
							<Col className="col-md-2">Total no. of ESG Coin mined: </Col>
							<Col>{coinsSummary.totalGivenOut}</Col>
						</Row>
						<Row className="mb-3">
							<Col className="col-md-2">Total no. of ESG Coin used for prize redemption: </Col>
							<Col>{coinsSummary.totalRedeemed}</Col>
						</Row>
						<Row className="mb-3">
							<Col className="col-md-2">Total no. of ESG Coin in circulation: </Col>
							<Col>{coinsSummary.totalInCirculation}</Col>
						</Row>
						<Row className="mb-3">
							<Col className="col-md-2">No. of ESG event - E created: </Col>
							<Col>{coinsSummary.totalGivenOut}</Col>
						</Row>
						<Row className="mb-3">
							<Col className="col-md-2">No. of ESG event - S created: </Col>
							<Col>{coinsSummary.totalGivenOut}</Col>
						</Row>
						<Row className="mb-3">
							<Col className="col-md-2">No. of ESG event - G created: </Col>
							<Col>{coinsSummary.totalGivenOut}</Col>
						</Row>
					</CardBody>
				</Card>
				<DataTable
					columns={columns}
					data={coinsHistory}
					days={days}
					handleFilterChanged={setDays}
				/>
			</Container>
		</div>
	)
}

export default Coins
