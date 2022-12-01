import { getLatestData } from "../../store/dashboard/actions"
import React, { useEffect, useState } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { Container, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import AppChart from "./components/AppChart"
import { getOrganisationType } from "src/helpers/api_helper"
import IndicatorType from "src/data/indicatorType"
import { camelize } from "src/helpers/string_helper"

const labelsData = ["2015.04-2016.03", "2016.04-2017.03", "2017.04-2018.03", "2018.04-2019.03", "2019.04-2020.03", "2020.04-2021.03", "2021.04-2022.03", "2022.04-2023.03"]
const labels = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
const chartOptions = IndicatorType

export const data = {
	labels: labelsData,
	datasets: [
		{
			type: "line",
			label: "Hip Sing",
			borderColor: "#3577f1",
			borderWidth: 4,
			fill: false,
			data: []
		},
		{
			type: "line",
			label: "Market Average",
			borderColor: "#f06548",
			borderWidth: 4,
			fill: true,
			data: []
		}
	]
}

const DashBoard = (props) => {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const [selectedItem, setSelectedItem] = useState(chartOptions[1].label);



	const { indicators, years, averages, statistics } = useSelector(state => ({
		indicators: state.Dashboard.indicators,
		years: state.Dashboard.years,
		averages: state.Dashboard.averages,
		statistics: state.Dashboard.statistics
	}));

	const [chartData, setChartData] = useState(data);
	const [statisticCards, setStatisticCards] = useState([])

	useEffect(() => {
		setChartData(preState => {
			return {
				labels: years,
				datasets: [
					{
						type: "line",
						label: "US",
						borderColor: "#3577f1",
						borderWidth: 4,
						fill: false,
						data: indicators.map(item => item.value)
					},
					{
						type: "line",
						label: "Peer's average",
						borderColor: "#f06548",
						borderWidth: 4,
						fill: true,
						data: averages.map(item => item.value)
					}
				]
			}
		});
		if (statistics && statistics.length > 0) setStatisticCards(statistics.reverse().filter(item => item.year != ''))
	}, [indicators, averages, years, statistics])


	useEffect(() => {

	}, [chartData])

	useEffect(() => {
		const organisationType = getOrganisationType();
		if (organisationType !== 'company') props.history.push('/ca-dashboard')
		const email = localStorage.getItem("email");
		if (selectedItem && email) dispatch(getLatestData(email, camelize(selectedItem)));
	}, [selectedItem])
	const keyMembers = [
		'Kum Shing',
		'Gammon',
		'Techoy',
		'Yau Lee',
		'Hip Hing',
		'Kwan Lee',
		'Chu Wo',
		'Paul Y.',
		'China State',
		'Dragages',
		'Alliance',
		'Kim Hung']

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Dashboards" carousel={keyMembers} />
				<Row>
					<AppChart
						statisticsCards={statisticCards}
						title="Indicator Chart"
						submissionData={indicators.map(item => item.indicator)}
						data={chartData}
						setSelectedItem={setSelectedItem}
						selectedItem={selectedItem}
						options={chartOptions} />
				</Row>

			</Container>
		</div>
	)
}

export default withRouter((withTranslation()(DashBoard)))