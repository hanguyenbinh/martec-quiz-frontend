import { isEmpty } from "lodash"
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
	FormGroup,
	Input,
	Label,
	Row,
	Table
} from "reactstrap"

import BreadCrumb from "src/Components/Common/BreadCrumb"
import CompanySize from "src/data/companySize"
import IndicatorType from "src/data/indicatorType"
import ProjectType from "src/data/projectType"
import { getOrganisationType } from "src/helpers/api_helper"
import { camelize } from "src/helpers/string_helper"
import { getEventSummaries, getOrganisations, getOrgEvents, getOrgSummaries, getSubmissionComparation } from "src/store/actions"
import LineChart from "./components/LineChart"


const data = {
	labels: [],
	datasets: [
		{
			type: "line",
			label: "",
			borderColor: "#3577f1",
			borderWidth: 4,
			fill: false,
			data: []
		},
		{
			type: "line",
			label: "",
			borderColor: "#f06548",
			borderWidth: 4,
			fill: true,
			data: []
		}
	]
}

function SpecialDashBoard(props) {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();

	const [orgSummaries, setOrgSummaries] = useState([]);
	const [selectedOrgId, setSelectedOrgId] = useState('');
	const [selectedEventId, setSelectedEventId] = useState('');

	const [selectedIndicator, setSelectedIndicator] = useState('');
	const [selectedProjectTypeA, setSelectedProjectTypeA] = useState('');
	const [selectedProjectTypeB, setSelectedProjectTypeB] = useState('');
	const [selectedCompanySizeA, setSelectedCompanySizeA] = useState('');
	const [selectedCompanySizeB, setSelectedCompanySizeB] = useState('');

	const [chartData, setChartData] = useState(data)

	const { organisationSummeries, organisationEvents, eventSummaries, organisations, years, basisA, basisB } = useSelector(state => ({
		organisationSummeries: state.CADashboard.organisationSummeries,
		organisationEvents: state.CADashboard.organisationEvents,
		eventSummaries: state.CADashboard.eventSummaries,
		organisations: state.Login.organisations,
		basisA: state.CADashboard.basisA,
		basisB: state.CADashboard.basisB,
		years: state.CADashboard.years
	}));

	console.log('organisationSummeries', organisationSummeries)


	useEffect(() => {
		const organisationType = getOrganisationType();
		if (organisationType !== 'association') props.history.push('/dashboard')
		dispatch(getOrgSummaries())
		dispatch(getOrganisations())
	}, [])

	useEffect(() => {
		if (organisationSummeries) {
			const data = [organisationSummeries.topParticipations, organisationSummeries.topParticipators, organisationSummeries.topFavoritePrizes];
			const topParticipations = {
				title: "Top 4 Participations",
				labels: ["Company", "No of Plays"],
				data: organisationSummeries.topParticipations.map(item => [item.org_name, item.count])
			};
			const topParticipators = {
				title: "Top 4 Participants",
				labels: ["Company", "Players"],
				data: organisationSummeries.topParticipators.map(item => [item.org_name, item.count])
			}
			const topFavoritePrizes = {
				title: "Top 4 Favorite Prize",
				labels: ["Prize Name", "No of redemption"],
				data: organisationSummeries.topFavoritePrizes.map(item => [item.prize_name, item.count])
			}
			setOrgSummaries([topParticipations, topParticipators, topFavoritePrizes])
		}


	}, [organisationSummeries, organisations])

	useEffect(() => {
		console.log('eventSummaries', eventSummaries);
		console.log('organisationEvents', organisationEvents)

	}, [eventSummaries, organisationEvents])

	useEffect(() => {
		if (!isEmpty(selectedOrgId))
			dispatch(getOrgEvents(selectedOrgId))
		setSelectedEventId('')

	}, [selectedOrgId])

	useEffect(() => {
		if (!isEmpty(selectedEventId)) {
			dispatch(getEventSummaries(selectedEventId));
		}
	}, [selectedEventId])

	useEffect(() => {
		const basisAData = basisA.map(item => Math.round(item.value))
		const basisBData = basisB.map(item => Math.round(item.value))
		const data = {
			labels: years.map(item => item.value),
			datasets: [
				{
					type: "line",
					label: selectedProjectTypeA + ' - ' + selectedCompanySizeA,
					borderColor: "#3577f1",
					borderWidth: 4,
					fill: false,
					data: basisAData
				},
				{
					type: "line",
					label: selectedProjectTypeB + ' - ' + selectedCompanySizeB,
					borderColor: "#f06548",
					borderWidth: 4,
					fill: false,
					data: basisBData
				}
			]
		}

		console.log('setChartData', data)
		setChartData(preState => { return data })
	}, [basisA, basisB, years])

	// useEffect(() => {
	// 	console.log('chart data changed', chartData)
	// }, [chartData])

	const handleComparation = () => {
		dispatch(getSubmissionComparation(camelize(selectedIndicator), selectedProjectTypeA, selectedProjectTypeB, selectedCompanySizeA, selectedCompanySizeB));
	}
	console.log('chartData', chartData)
	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Dashboards" />
				<Row className="mb-3">
					<Col sm={12} md={6}>
						<LineChart title={selectedIndicator} data={chartData} />
					</Col>
					<Col sm={12} md={6}>
						<Card>
							<CardBody>
								<FormGroup>
									<Label>Indicator</Label>
									<Input type="select" onChange={(e) => {

										setSelectedIndicator(e.target.value)

									}}>
										<option value=''>Please select...</option>
										{IndicatorType.map((option, key) =>
											!option.isHeader ? (<option key={key} value={option.label}>
												{option.label}
											</option>) : null)}
									</Input>
								</FormGroup>
								<Row>
									<Col sm={12} md={6}>
										<FormGroup>
											<Label>Basis 1</Label>
											<Input type="select" onChange={(e) => {
												setSelectedProjectTypeA(e.target.value)
											}}>
												<option value={''}>Please select...</option>
												{ProjectType.map((option, key) => (
													<option key={key} value={option.value}>
														{option.label}
													</option>
												))}
											</Input>
											<Input type="select" onChange={(e) => {
												setSelectedCompanySizeA(e.target.value)
											}}>
												<option value={''}>Please select...</option>
												{CompanySize.map((option, key) => (
													<option key={key} value={option.value}>
														{option.label}
													</option>
												))}
											</Input>
										</FormGroup>
									</Col>
									<Col sm={12} md={6}>
										<FormGroup>
											<Label>Basis 2</Label>
											<Input type="select" onChange={(e) => {
												setSelectedProjectTypeB(e.target.value)
											}}>
												<option>Please select...</option>
												{ProjectType.map((option, key) => (
													<option key={key} value={option.value}>
														{option.label}
													</option>
												))}
											</Input>
											<Input type="select" onChange={(e) => {
												setSelectedCompanySizeB(e.target.value)
											}}>
												<option value={''}>Please select...</option>
												{CompanySize.map((option, key) => (
													<option key={key} value={option.value}>
														{option.label}
													</option>
												))}
											</Input>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<button className="btn btn-primary" onClick={(e) => handleComparation()}>Refresh</button>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<h5 className="mb-3">Summary</h5>

				<Row className="mb-3">
					{orgSummaries && orgSummaries.map((item, key) => (
						<Col key={key} sm={12} md={3}>
							<Card>
								<CardHeader>
									<CardTitle className="mb-0">{item.title}</CardTitle>
								</CardHeader>
								<Table bordered className="mb-0">
									<thead>
										<tr>
											{item.labels.map((label, key) => (
												<th key={key}>{label}</th>
											))}
										</tr>
									</thead>
									<tbody>
										{item.data.map((dataItems, dataItemsIndex) => (
											<tr key={dataItemsIndex}>
												{dataItems.map((dataItem, key) => (
													<td key={key}>{dataItem}</td>
												))}
											</tr>
										))}
									</tbody>
								</Table>
							</Card>
						</Col>
					))}
				</Row>
				<Card>
					<CardBody>
						<div className="d-flex mb-2">
							<Input className="me-2" type="select" style={{ width: 360 }} onChange={(e => {
								setSelectedOrgId(e.target.value)
							})}>
								<option>Select company</option>
								{organisations.map((item, index) => (
									<option key={index} value={item.id}>{item.org_name}</option>
								))}
							</Input>
							<Input type="select" style={{ width: 240 }} onChange={(e => {
								setSelectedEventId(e.target.value)
							})}>
								<option>Select event</option>
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
			</Container>
		</div>
	)
}

export default SpecialDashBoard
