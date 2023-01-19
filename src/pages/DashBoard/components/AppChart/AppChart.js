import React, { useEffect, useState } from "react"

import cx from "classnames"

import PropTypes from "prop-types"

import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController
} from "chart.js"
import { Chart } from "react-chartjs-2"

import classes from "./AppChart.module.scss"
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from "reactstrap"
import { camelize } from "src/helpers/string_helper"
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import DashBoardContext from "../../DashBoard.context"
import { useContext } from "react"


ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController
)



const AppChart = (props) => {
	const { title, options, data, indicatorResults, years } =
		props
	const T = props.t ? props.t : (v) => v;

	const dashBoardContext = useContext(DashBoardContext);
	console.log("dashBoardContext", dashBoardContext)
	const { selectedItem, setSelectedItem } = dashBoardContext;

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	const [dropdownYearOpen, setDropdownYearOpen] = useState(false);
	const toggleYear = () => setDropdownYearOpen((prevState) => !prevState);
	const [indicatorResult, setIndicatorResult] = useState(null);


	const [selectedYear, setSelectedYear] = useState('');
	// const indicatorName = camelize(selectedItem)
	const [indicatorName, setIndicatorName] = useState(selectedItem);
	const [yourValue, setYourValue] = useState();
	const [averageValue, setAverageValue] = useState();
	const [yearItems, setYearItems] = useState([])
	useEffect(() => {
		const _years = [...years].reverse();
		console.log('years', _years);
		setYearItems(_years);
		setSelectedYear(_years[0]);
	}, [years])

	useEffect(() => {
		setIndicatorName(camelize(selectedItem))

	}, [selectedItem])
	useEffect(() => {
	}, [yearItems])

	useEffect(() => {

		const year = selectedYear || years[0];
		const indicator = indicatorResults.find(item => item.year === year)
		if (indicator && indicator.value) setIndicatorResult(old => indicator.value);
	}, [indicatorResults])

	useEffect(() => {
		const indicator = indicatorResults.find(item => item.year === selectedYear)
		if (indicator) setIndicatorResult(old => indicator.value);
		else setIndicatorResult(null)

	}, [selectedYear])

	useEffect(() => {
		let yourValue = 'N/A'
		let averageValue = 'N/A';
		if (indicatorResult) {

			let result = '';
			Object.keys(indicatorResult.indicator).forEach(item => {
				if (item.toLowerCase() === indicatorName.toLowerCase()) {
					if (indicatorResult.indicator[item]) yourValue = indicatorResult.indicator[item].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

					return
				}
			})
			Object.keys(indicatorResult.average).forEach(item => {
				if (item.toLowerCase() === indicatorName.toLowerCase()) {
					averageValue = indicatorResult.average[item];
					return
				}
			})
			console.log('selectedYear changed', selectedYear, indicatorName, yourValue, averageValue)

		}
		setYourValue(yourValue);
		setAverageValue(averageValue);
	}, [indicatorResult, selectedItem, indicatorName])


	const handleOnclickItem = (item) => {
		setSelectedItem(item.label);
	}


	const handleOnclickYearItem = (item) => {
		console.log('handleOnclickYearItem', item);
		setSelectedYear(item);
	}

	const isBoolean = (value) => {
		return (typeof value) == 'boolean';
	}

	const isNull = (value) => {
		return value === null || value === undefined;
	}

	return (
		<Row className={classes.gutters}>
			<Col
				md={12}
				lg={
					9
				}
			>
				<Card className={cx("m-0", classes.chart)}>
					<CardHeader className="align-items-center d-flex justify-content-between">
						<h4 className="m-0">{title}</h4>
						<div>
							{Array.isArray(options) && options.length > 0 && (
								<Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
									<DropdownToggle caret size="lg">{selectedItem}</DropdownToggle>
									<DropdownMenu>
										{options.map((option, key) => {
											return option.isHeader ? (<DropdownItem key={'indication_dropdown_' + key} header>{option.label}</DropdownItem>) : (<DropdownItem key={'indication_dropdown_' + key} active={selectedItem === option.label} onClick={() => handleOnclickItem(option)}>{option.label}</DropdownItem>)
										})}
									</DropdownMenu>

								</Dropdown>
							)}
						</div>
						<span></span>
					</CardHeader>
					<CardBody className={cx(`p-0`, classes.chartContent)}>
						<Chart height={120} data={data} />
					</CardBody>
				</Card>
			</Col>
			<Col md={12} lg={3}>
				<Row className={classes.gutters}>
					<Col md={6} lg={12}>
						<Card className="m-0">
							<CardBody className="d-flex flex-column">
								<div className="text-center">
									<h4>{selectedItem}</h4>
									<Dropdown isOpen={dropdownYearOpen} toggle={toggleYear} direction={'down'}>
										<DropdownToggle caret size="lg">{selectedYear}</DropdownToggle>
										<DropdownMenu>
											{yearItems.map((option, index) => {
												return (<DropdownItem key={'option_indicators_' + index} onClick={() => handleOnclickYearItem(option)}>{option}</DropdownItem>)
											})}
										</DropdownMenu>

									</Dropdown>
								</div>
								<div className="flex-grow-1 p-4">
									<p>
										<span>My performance:&nbsp;</span>
										<span>{yourValue}</span>
										{/* <span>{!isNull(indicatorResult.indicator[selectedItem]) ? isBoolean(indicatorResult.indicator[selectedItem]) ? indicatorResult.indicator[selectedItem].toString() : indicatorResult.indicator[selectedItem].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}
											</span> */}
										{/* {indicatorResult.indicatorResult[selectedItem]} */}
									</p>
									<p><span>Industry performance:&nbsp;</span><span>{!isNull(averageValue) ? averageValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 'N/A'}</span></p>
									<p><span>Basis:&nbsp;</span><span>{indicatorResult?.submission?.projectType}</span></p>
									<p><span>Result:&nbsp;</span><span>{T(indicatorResult && indicatorResult.indicatorResult && indicatorResult.indicatorResult[indicatorName] ? indicatorResult.indicatorResult[indicatorName].result : '')}</span></p>


								</div>
							</CardBody>
						</Card>
					</Col>

				</Row>
			</Col>
		</Row>
	)
}

AppChart.propTypes = {
	title: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			value: PropTypes.any
		})
	),
	optionValue: PropTypes.any,
	// statisticsCards: PropTypes.arrayOf(
	// 	PropTypes.shape({
	// 		title: PropTypes.string,
	// 		subTitle: PropTypes.string,
	// 		content: PropTypes.any
	// 	})
	// ),
	data: PropTypes.shape({
		labels: PropTypes.array,
		datasets: PropTypes.arrayOf(
			PropTypes.shape({
				type: PropTypes.oneOf(["bar", "line"]),
				label: PropTypes.string,
				borderColor: PropTypes.string,
				borderWidth: PropTypes.number,
				fill: PropTypes.bool,
				data: PropTypes.array
			})
		)
	}),
}

export default withRouter((withTranslation()(AppChart)))
// export default React.memo(AppChart)