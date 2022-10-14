import React, { useState } from "react"

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
	UncontrolledDropdown
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
	const { title, options, optionValue, statisticsCards, data, onOptionChange, selectedItem, setSelectedItem, submissionData } =
		props

	console.log('AppChart', submissionData);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	const handleOnclickItem = (item) => {
		setSelectedItem(item.label);
		if (item.onClick) {
			item.onClick();
		}
	}



	console.log('AppChart', selectedItem);
	return (
		<Row className={classes.gutters}>
			<Col
				md={12}
				lg={
					Array.isArray(statisticsCards) && statisticsCards.length > 0 ? 9 : 12
				}
			>
				<Card className={cx("m-0", classes.chart)}>
					<CardHeader className="align-items-center d-flex">
						<h4 className="card-title mb-0 flex-grow-1">{title}</h4>
						<div className="flex-shrink-0">
							{Array.isArray(options) && options.length > 0 && (
								<Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
									<DropdownToggle caret size="lg">{selectedItem}</DropdownToggle>
									<DropdownMenu>
										{options.map((option) => {
											return option.isHeader ? (<DropdownItem header>{option.label}</DropdownItem>) : (<DropdownItem onClick={() => handleOnclickItem(option)}>{option.label}</DropdownItem>)
										})}
									</DropdownMenu>

								</Dropdown>
							)}
						</div>
					</CardHeader>
					<CardBody className={cx(`p-0`, classes.chartContent)}>
						<Chart data={data} />
					</CardBody>
				</Card>
			</Col>
			{Array.isArray(statisticsCards) && statisticsCards.length > 0 && (
				<Col md={12} lg={3}>
					<Row className={classes.gutters}>
						{statisticsCards.map((statisticsCard, statisticsCardIndex) => (
							<Col key={statisticsCardIndex} md={6} lg={12}>
								<Card className="m-0">
									<CardBody className="d-flex flex-column">
										<div className="text-center">
											<h4>{statisticsCard.title}</h4>
											<p>{statisticsCard.subTitle}</p>
										</div>
										<div className="flex-grow-1">{statisticsCard.content}</div>
									</CardBody>
								</Card>
							</Col>
						))}
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
	statisticsCards: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			subTitle: PropTypes.string,
			content: PropTypes.any
		})
	),
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
	onOptionChange: PropTypes.func
}

export default React.memo(AppChart)
