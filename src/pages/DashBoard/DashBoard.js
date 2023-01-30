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
import { DashboardProvider } from "./DashBoard.context"

const chartOptions = IndicatorType

export const data = {
	labels: [],
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

	const { years, indicatorResults } = useSelector(state => ({
		indicatorResults: state.Dashboard.indicatorResults,
		years: state.Dashboard.years,
	}));

	const [chartData, setChartData] = useState(data);

	useEffect(() => {
		if (indicatorResults) {
			const indicatorName = camelize(selectedItem);
			setChartData(preState => {
				return {
					labels: years,
					datasets: [
						{
							type: "line",
							label: "My performance",
							borderColor: "#3577f1",
							borderWidth: 4,
							fill: false,
							data: indicatorResults.map(item => {
								if (!item.value) return null;
								let indicator = null;

								Object.keys(item.value.indicator).forEach(key => {
									if (key.toLocaleLowerCase() === indicatorName.toLocaleLowerCase()) {
										indicator = item.value.indicator[key]
										return
									}
								})
								return indicator;
							})
						},
						{
							type: "line",
							label: "Industry performance",
							borderColor: "#f06548",
							borderWidth: 4,
							fill: true,
							data: indicatorResults.map(item => {
								return item.value ? item.value.average[indicatorName] : null
							})
						}
					]
				}
			});
		}
	}, [indicatorResults, years, selectedItem])


	useEffect(() => {

	}, [chartData])

	useEffect(() => {
		const organisationType = getOrganisationType();
		if (organisationType !== 'company') props.history.push('/ca-dashboard')
		const email = localStorage.getItem("email");
		if (email) dispatch(getLatestData(email, ''));
	}, [])
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
		<DashboardProvider
			value={{
				selectedItem,
				setSelectedItem,
			}}
		>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Dashboards" carousel={keyMembers} />
					<Row>
						<AppChart
							title="Indicator Chart"
							data={chartData}
							indicatorResults={indicatorResults}
							years={years}
							options={chartOptions} />
					</Row>

				</Container>
			</div>
		</DashboardProvider>
	)
}

export default withRouter((withTranslation()(DashBoard)))