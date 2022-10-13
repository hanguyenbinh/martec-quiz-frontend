import { getLatestData } from "../../store/dashboard/actions"
import React, { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { withRouter } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import AppChart from "./components/AppChart"
import StatisticsCard from "./components/StatisticsCard"

const labels = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]

export const data = {
	labels,
	datasets: [
		{
			type: "line",
			label: "Hip Sing",
			borderColor: "#3577f1",
			borderWidth: 4,
			fill: false,
			data: labels.map(() => Math.round(Math.random() * 100))
		},
		{
			type: "line",
			label: "Market Average",
			borderColor: "#f06548",
			borderWidth: 4,
			fill: true,
			data: labels.map(() => Math.round(Math.random() * 100))
		}
	]
}

const DashBoard = (props) => {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();

	useEffect(() => {
		const email = sessionStorage.getItem("email");
		console.log('Dashboard', email)
		dispatch(getLatestData(email))
	}, [])
	const statistics = [
		{
			title: "Environment",
			score: 39,
			unit: "pt",
			ranking: {
				rank: 3,
				total: 20
			},
			stats: {
				number: 3,
				unit: "rank",
				status: "increased",
				subText: "vs. last year"
			}
		},
		{
			title: "Social",
			score: 23,
			unit: "pt",
			ranking: {
				rank: 10,
				total: 20
			},
			stats: {
				number: 2,
				unit: "rank",
				status: "reduced",
				subText: "vs. last year"
			}
		},
		{
			title: "Governance",
			score: 18,
			unit: "pt",
			ranking: {
				rank: 7,
				total: 20
			},
			stats: {
				number: 2,
				unit: "rank",
				status: "balanced",
				subText: "vs. last year"
			}
		}
	]

	const chartOptions = [
		{
			label: "CO2 emissions of electricity (CLP) (m³)",
			value: "1"
		}
	]
	const statisticCards = [{
		title: 'CLP C02 emission',
		subtitle: '(Year 2022)',
		content: <>
			<p>56 m³/$100M</p>
			<p>Average 20m³/$100M</p>

			<p>12kWh higher than average</p>
		</>
	},
	{
		title: 'CLP C02 emission',
		subtitle: '(Year 2022)',
		content: <>
			<p>56 m³/$100M</p>
			<p>Average 20m³/$100M</p>

			<p>3pt</p>
		</>
	}
	]

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Dashboards" />
				<Row>
					{statistics.map((statistic, statisticIndex) => (
						<Col key={statisticIndex} sm={12} md={6} lg={4}>
							<StatisticsCard {...statistic} />
						</Col>
					))}
				</Row>
				<Row>
					<AppChart
						statisticsCards={statisticCards}
						title="Indicator Chart"
						data={data}
						options={chartOptions} />
				</Row>

			</Container>
		</div>
	)
}

export default withRouter((withTranslation()(DashBoard)))
