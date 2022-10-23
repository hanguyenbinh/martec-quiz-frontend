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

const labelsData = ["2015.04-2016.03", "2016.04-2017.03", "2017.04-2018.03", "2018.04-2019.03", "2019.04-2020.03", "2020.04-2021.03", "2021.04-2022.03", "2022.04-2023.03"]
const labels = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
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
	{ label: 'Amount of inert waste disposed (tonne per 100M HKD)', isHeader: false },
	{ label: 'Amount of noninert waste placed disposed (tonne per 100M HKD)', isHeader: false },
	{ label: 'Amount of mixed waste placed disposed (tonne per 100M HKD)', isHeader: false },
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


	const camelize = function camelize(str) {
		const result = str.replace(/\W+(.)/g, function (match, chr) {
			return chr.toUpperCase();
		});
		return result.replace(/[^a-zA-Z0-9]/g, '');
	}
	const { submissions } = useSelector(state => ({
		submissions: state.Dashboard.submissions,
	}));
	//console.log(submissions);
	const { allSubmissions } = useSelector(state => ({
		allSubmissions: state.Dashboard.allSubmissions,
	}));

	const [submissionData, setSubmissionData] = useState([])
	const [averageData, setAverageData] = useState({})
	const [chartData, setChartData] = useState(data);
	const [statisticCards, setStatisticCards] = useState([])

	const handleChangeItem = (newItem) => {
		const key = camelize(newItem)
		//console.log('key', key)
		if (key === 'CommitmentToAdoptNovelQualityAndRiskManagementMeasuresSystems' || key === 'CommitmentToAdoptingNovelHealthAndSafetyManagementMeasures') {
			const statistics = labels.map(year => {
				const submission = submissionData.find(item => item.yearOfRecord === year);
				if (submission) {
					return {
						year,
						projectType: submission.projectType,
						value: submission[key],
						averageValue: null,
					}
				}
				else {
					return {
						year,
					}
				}
			});
			setStatisticCards(statistics.reverse());

			setChartData(preState => {
				return {
					labels: labelsData,
					datasets: [
						{
							type: "line",
							label: "US",
							borderColor: "#3577f1",
							borderWidth: 4,
							fill: false,
							data: []
						},
						{
							type: "line",
							label: "Peer's average",
							borderColor: "#f06548",
							borderWidth: 4,
							fill: true,
							data: []
						}
					]
				}
			});
			setSelectedItem(newItem)
			return;
		}
		const firstSubmission = submissionData[0];
		const type = firstSubmission ? firstSubmission.projectType : '';
		const size = firstSubmission ? firstSubmission.companySize : '';
		const indicatorsValue = submissionData.map(item => ({ year: item.yearOfRecord, value: item[key], projectType: item.projectType }))
		const _chartDataUs = [];
		const _chartDataAverage = [];
		const _statisticCards = [];
		labels.forEach(year => {
			const statistic = {};
			const exist = indicatorsValue.find(item => item.year === year);
			if (!exist) {
				statistic.value = 0;
				statistic.projectType = ''
				_chartDataUs.push(0);
			}
			else {
				_chartDataUs.push(exist.value);
				statistic.projectType = exist.projectType;
				statistic.value = exist.value
			}

			if (averageData[year]) {
				if (averageData[year][key]) {
					const _average = averageData[year][key](type, size);
					_chartDataAverage.push(_average);
					statistic.averageValue = _average;
				}
				else {
					statistic.averageValue = 0
					_chartDataAverage.push(0);
				}
			}
			else {
				statistic.averageValue = 0
				_chartDataAverage.push(0);
			}
			statistic.year = year;
			_statisticCards.push(statistic);
		})
		setStatisticCards(_statisticCards.reverse());

		setChartData(preState => {
			return {
				labels: labelsData,
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
		const indicators = [];
		const averages = {};

		submissions && submissions.forEach(submission => {
			const indicator = new Indicators(submission);
			indicators.push(indicator);
		})
		labels.forEach(year => {
			const allIndicators = [];
			allSubmissions && allSubmissions.forEach(submission => {
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
	}, [submissions])

	useEffect(() => {
		handleChangeItem(chartOptions[1].label)
	}, [submissionData, averageData])

	useEffect(() => {
		const email = sessionStorage.getItem("email");
		dispatch(getLatestData(email))
	}, [])
	const statistics = [
		{
			title: "Environment",
			score: '-',
			unit: "pt",
			ranking: {
				rank: '-',
				total: '-'
			},
			stats: {
				number: '-',
				unit: "rank",
				status: "increased",
				subText: "vs. last year"
			}
		},
		{
			title: "Social",
			score: '-',
			unit: "pt",
			ranking: {
				rank: '-',
				total: '-'
			},
			stats: {
				number: '-',
				unit: "rank",
				status: "reduced",
				subText: "vs. last year"
			}
		},
		{
			title: "Governance",
			score: '-',
			unit: "pt",
			ranking: {
				rank: '-',
				total: '-'
			},
			stats: {
				number: '-',
				unit: "rank",
				status: "balanced",
				subText: "vs. last year"
			}
		}
	]
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
