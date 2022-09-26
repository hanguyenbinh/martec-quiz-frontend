import React from "react"
import PropTypes from "prop-types"

import { Card, CardBody } from "reactstrap"

import classes from "./StatisticsCard.module.scss"

const StatisticsCard = (props) => {
	const { title, score, unit, icon, ranking, stats } = props

	const isNotEmpty = (val) => ![undefined, "", null].includes(val)

	const colorStatusMap = {
		increased: "success",
		reduced: "danger",
		balanced: "warning"
	}

	return (
		<Card>
			<CardBody>
				<h5 className="mb-2 text-muted text-center fw-medium">{title}</h5>
				<div className="mb-2 d-flex align-items-end justify-content-center">
					{/* <h4 className="m-0">Score:</h4> */}
					<h2 className="m-0 fw-medium ms-2">{score}</h2>
					{(isNotEmpty(unit) || isNotEmpty(icon)) && (
						<div className={classes.unit}>
							{isNotEmpty(unit) && (
								<h5 className="m-0 fw-medium ms-1">{unit}</h5>
							)}
							{isNotEmpty(icon) && <div className={classes.unitIcon}></div>}
						</div>
					)}
				</div>
				<div className="d-flex align-items-center justify-content-between">
					<p className="m-0">
						<span
							className={`badge bg-light text-${
								colorStatusMap[stats.status]
							} mb-0`}
						>
							{stats.status === "increased" && (
								<i className="ri-arrow-up-line align-middle"></i>
							)}{" "}
							{stats.status === "reduced" && (
								<i className="ri-arrow-down-line align-middle"></i>
							)}{" "}
							{stats.number} {stats.unit}
						</span>
						{stats.subText}
					</p>
					{isNotEmpty(ranking) && (
						<p className="m-0 fw-medium">
							Rank: <span>{ranking.rank}</span>/{ranking.total}
						</p>
					)}
				</div>
			</CardBody>
		</Card>
	)
}

StatisticsCard.propTypes = {
	title: PropTypes.string.isRequired,
	score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	unit: PropTypes.string,
	icon: PropTypes.any,
	ranking: PropTypes.shape({
		rank: PropTypes.number.isRequired,
		total: PropTypes.string.isRequired
	}),
	stats: PropTypes.shape({
		number: PropTypes.number.isRequired,
		unit: PropTypes.string,
		status: PropTypes.oneOfType(["increased", "reduced", "balanced"])
			.isRequired,
		subText: PropTypes.string
	}).isRequired
}

export default StatisticsCard
