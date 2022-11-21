import { getLatestData } from "../../store/dashboard/actions"
import React, { useEffect, useState } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { Container, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import AppChart from "./components/AppChart"
import { Indicators } from "../../data/indicators"
import { Average } from "../../data/average"
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



	const { submissions } = useSelector(state => ({
		submissions: state.Dashboard.submissions,
	}));
	//console.log(submissions);
	const { allSubmissions } = useSelector(state => ({
		allSubmissions: state.Dashboard.allSubmissions,
	}));

	console.log(allSubmissions, submissions);

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
		const organisationType = getOrganisationType();
		if (organisationType !== 'company') props.history.push('/ca-dashboard')
		const email = sessionStorage.getItem("email");
		console.log('dashboard', email);
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
				{/* <Row>
					{statistics.map((statistic, statisticIndex) => (
						<Col key={statisticIndex} sm={12} md={6} lg={4}>
							<StatisticsCard {...statistic} />
						</Col>
					))}
				</Row> */}
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
