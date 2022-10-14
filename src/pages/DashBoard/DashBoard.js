import { getLatestData } from "../../store/dashboard/actions"
import React, { useEffect, useState } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import AppChart from "./components/AppChart"
import StatisticsCard from "./components/StatisticsCard"
import { Indicators } from "../../data/indicators"
import { Average } from "../../data/average"

const labels = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]
const chartOptions = [
	{ label: 'Energy Consumption', isHeader: true },
	{ label: 'Usage of combustible fuel - Petrol (kWh per 100M HKD)', isHeader: false },
	{ label: 'Usage of combustible fuel - Diesel (kWh per 100M HKD)', isHeader: false },
	{ label: 'Usage of electricity - HKE (kWh per 100M HKD)', isHeader: false },
	{ label: 'Usage of electricity - CLP (kWh per 100M HKD)', isHeader: false },
	{ label: 'Carbon Footprint', isHeader: true },
	{ label: 'CO2 emissions of combustible fuel - Petrol (m3 per 100M HKD)', isHeader: false },
	{ label: 'CO2 emissions of combustible fuel - Diesel (m3 per 100M HKD)', isHeader: false },
	{ label: 'CO2 emissions of electricity - HKE (m3 per 100M HKD)', isHeader: false },
	{ label: 'CO2 emissions of electricity - CLP (m3 per 100M HKD)', isHeader: false },
	{ label: 'Water Consumption', isHeader: true },
	{ label: 'Usage of fresh water (m3 per 100M HKD)', isHeader: false },
	{ label: 'Non-hazardous Waste Produced', isHeader: true },
	{ label: '"Amount of inert waste disposed (tonne per 100M HKD)"', isHeader: false },
	{ label: '"Amount of noninert waste placed disposed (tonne per 100M HKD)"', isHeader: false },
	{ label: '"Amount of mixed waste placed disposed (tonne per 100M HKD)"', isHeader: false },
	{ label: 'Health and Safety', isHeader: true },
	{ label: 'Accident rate (No per 1,000 workers)', isHeader: false },
	{ label: 'Incident rate (No per 1,000 workers)', isHeader: false },
	{ label: 'Use of advance health and safety technologies', isHeader: false },
	{ label: 'Development and Training', isHeader: true },
	{ label: 'Average hours of training per annum (per Management and Project Mgt Staff)', isHeader: false },
	{ label: 'Average hours of training per annum (per Technical Staff)', isHeader: false },
	{ label: 'Average hours of training per annum (per Direct Labour)', isHeader: false },
	{ label: 'Proportion of young staff being nurtured', isHeader: false },
	{ label: 'Community Investment', isHeader: true },
	{ label: 'Amount of time devoted to community service (hours per staff)', isHeader: false },
	{ label: 'Amount of money devoted to community service (HKD per staff)', isHeader: false },
	{ label: 'Employment', isHeader: true },
	{ label: 'Turnover rate - management staff', isHeader: false },
	{ label: 'Turnover rate - technical staff', isHeader: false },
	{ label: 'Turnover rate - direct labor', isHeader: false },
	{ label: 'Turnover rate - supporting staff', isHeader: false },
	{ label: 'In-house Codes and Guidelines Governing - Supply Chain Management', isHeader: true },
	{ label: 'Commitment to adopt novel quality and risk management measures/systems', isHeader: false },
	{ label: 'In-house Codes and Guidelines Governing - Anticorruption', isHeader: true },
	{ label: 'Activeness in promoting anticorruption', isHeader: false },
	{ label: 'Commitment to anticorruption awareness education (Hours per new staff)', isHeader: false },
	{ label: 'Commitment to anticorruption awareness education (Hours per existing staff)', isHeader: false },
	{ label: 'In-house Codes and Guidelines Governing - Environment', isHeader: true },
	{ label: 'Number of environmental convictions', isHeader: false },
	{ label: 'Commitment to investing in environmental expertise - environmental professionals (staff per $100M HKD)', isHeader: false },
	{ label: 'Commitment to investing in environmental expertise - environmental personnel (staff per $100M HKD)', isHeader: false },
	{ label: 'In-house Codes and Guidelines Governing-  Health and Safety', isHeader: true },
	{ label: 'Commitment to adopting novel health and safety management measures', isHeader: false },
	{ label: 'Number of safety convictions', isHeader: false },
	{ label: 'Number of suspension notices', isHeader: false },
	{ label: 'Activeness in participating in site safety promotion campaigns and awards', isHeader: false },
	{ label: 'Commitment to safety training (hours per management staff)', isHeader: false },
	{ label: 'Commitment to safety training (hours per operational staff)', isHeader: false },
	{ label: 'Commitment to safety training  (hours per direct labour)', isHeader: false },

]

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
	const [selectedItem, setSelectedItem] = useState(chartOptions[0].label);


	const camelize = function camelize(str) {
		const result = str.replace(/\W+(.)/g, function (match, chr) {
			return chr.toUpperCase();
		});
		return result.replace(/[^a-zA-Z0-9]/g, '');
	}
	const { latestSubmissionData } = useSelector(state => ({
		latestSubmissionData: state.Dashboard.latestSubmissionData,
	}));

	const { allSubmissions } = useSelector(state => ({
		allSubmissions: state.Dashboard.allSubmissions,
	}));

	const [submissionData, setSubmissionData] = useState([])
	const [averageData, setAverageData] = useState({})

	const [chartData, setChartData] = useState(data);

	const handleChangeItem = (newItem) => {
		const key = camelize(newItem)
		const firstSubmission = submissionData[0];
		const type = firstSubmission ? firstSubmission.projectType : '';
		const size = firstSubmission ? firstSubmission.companySize : '';
		console.log('handleChangeItem', type, size)
		const indicatorsValue = submissionData.map(item => ({ year: item.yearOfRecord, value: item[key] }))
		const _chartDataUs = [];
		const _chartDataAverage = [];
		labels.forEach(year => {
			const exist = indicatorsValue.find(item => item.year === year);
			if (!exist) _chartDataUs.push(0);
			else _chartDataUs.push(exist.value);

			if (averageData[year]) {
				console.log('function', averageData[year][key])
				if (averageData[year][key]) _chartDataAverage.push(averageData[year][key](type, size));
				else _chartDataAverage.push(0);
			}
			else {
				_chartDataAverage.push(0);
			}
		})

		setChartData(preState => {
			return {
				labels,
				datasets: [
					{
						type: "line",
						label: "US",
						borderColor: "#3577f1",
						borderWidth: 4,
						fill: false,
						data: _chartDataUs
					},
					{
						type: "line",
						label: "Peer's average",
						borderColor: "#f06548",
						borderWidth: 4,
						fill: true,
						data: _chartDataAverage
					}
				]
			}
		});
		setSelectedItem(newItem)
	}


	useEffect(() => {
		console.log('latestSubmissionData changed', latestSubmissionData)
		const indicators = [];
		const averages = {};

		latestSubmissionData && latestSubmissionData.forEach(submission => {
			const indicator = new Indicators(submission);
			indicators.push(indicator);
		})
		labels.forEach(year => {
			const allIndicators = [];
			allSubmissions.forEach(submission => {
				if (submission.yearOfRecord === year) {
					allIndicators.push(new Indicators(submission))
				}
			})
			if (allIndicators.length > 0) {
				averages[year] = new Average(allIndicators);
			}
		})
		setSubmissionData(indicators);
		setAverageData(averages);
		console.log('averages', averages)
	}, [latestSubmissionData])

	useEffect(() => {
		const email = sessionStorage.getItem("email");
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


	const statisticCards = [{
		title: 'CLP C02 emission',
		subtitle: '(Year 2022)',
		content: <>
			<p>56 m³/$100M</p>
			<p>Average 20m³/$100M</p>

			<p>12kWh higher than average</p>
		</>
	},

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
						submissionData={submissionData}
						data={chartData}
						setSelectedItem={handleChangeItem}
						selectedItem={selectedItem}
						options={chartOptions} />
				</Row>

			</Container>
		</div>
	)
}

export default withRouter((withTranslation()(DashBoard)))
