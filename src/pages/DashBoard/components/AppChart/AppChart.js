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
	const { title, options, statisticsCards, data, selectedItem, setSelectedItem } =
		props

	////console.logdisabled('AppChart', statisticsCards[statisticsCards.length - 1]);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	const [dropdownYearOpen, setDropdownYearOpen] = useState(false);
	const toggleYear = () => setDropdownYearOpen((prevState) => !prevState);


	const [selectedYear, setSelectedYear] = useState(null);

	useEffect(() => {
		const statistic = statisticsCards[0];
		setSelectedYear(statistic);

	}, [statisticsCards])

	const handleOnclickItem = (item) => {
		setSelectedItem(item.label);
	}


	const handleOnclickYearItem = (item) => {
		////console.logdisabled('handleOnclickYearItem', item)
		setSelectedYear(item);
	}

	const isBoolean = (value) => {
		//console.log(typeof value)
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
					Array.isArray(statisticsCards) && statisticsCards.length > 0 ? 9 : 12
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
										{options.map((option) => {
											return option.isHeader ? (<DropdownItem header>{option.label}</DropdownItem>) : (<DropdownItem active={selectedItem === option.label} onClick={() => handleOnclickItem(option)}>{option.label}</DropdownItem>)
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
			{selectedYear && (
				<Col md={12} lg={3}>
					<Row className={classes.gutters}>
						<Col md={6} lg={12}>
							<Card className="m-0">
								<CardBody className="d-flex flex-column">
									<div className="text-center">
										<h4>{selectedItem}</h4>
										<Dropdown isOpen={dropdownYearOpen} toggle={toggleYear} direction={'down'}>
											<DropdownToggle caret size="lg">{selectedYear.year}</DropdownToggle>
											<DropdownMenu>
												{statisticsCards.map((option, key) => {
													return (<DropdownItem key={'option_' + key} onClick={() => handleOnclickYearItem(option)}>{option.year}</DropdownItem>)
												})}
											</DropdownMenu>

										</Dropdown>
									</div>
									<div className="flex-grow-1 p-4">
										<p><span>Your value:&nbsp;</span><span>{!isNull(selectedYear.value) ? isBoolean(selectedYear.value) ? selectedYear.value.toString() : selectedYear.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}</span></p>
										<p><span>Average value:&nbsp;</span><span>{!isNull(selectedYear.averageValue) ? selectedYear.averageValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 'N/A'}</span></p>
										<p><span>Basis:&nbsp;</span><span>{!isNull(selectedYear.projectType) ? selectedYear.projectType : ''}</span></p>
										{(isNull(selectedYear.value) || isNull(selectedYear.averageValue)) ? null : selectedYear.value < selectedYear.averageValue ?
											(<p>You are {(selectedYear.averageValue - selectedYear.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} below the average</p>)
											: <p>You are {(selectedYear.value - selectedYear.averageValue).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} higher the average</p>}
									</div>
								</CardBody>
							</Card>
						</Col>

					</Row>
				</Col>
			)}
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

export default React.memo(AppChart)
