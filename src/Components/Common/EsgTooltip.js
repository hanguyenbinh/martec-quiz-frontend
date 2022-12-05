import React from "react"
import { Tooltip } from "reactstrap"

import { useState } from "react"
import classes from './EsgTooltip.module.scss'

const EsgTooltip = (props) => {

	const {
		name,
		tooltipText
	} = props
	const id = 'esgtooltip-' + name
	const [tooltipOpen, setTooltipOpen] = useState(false)
	const toggle = () => {
		setTooltipOpen(!tooltipOpen);
	}

	return (
		<span className="ms-2">
			<a className={classes.tooltipLink} id={id}>?</a>
			<Tooltip innerClassName={classes.tooltipInner} placement="right" isOpen={tooltipOpen} target={id} toggle={toggle}>
				<div className='text-start'>{tooltipText}</div>
			</Tooltip>
		</span >
	)
}

export default EsgTooltip
