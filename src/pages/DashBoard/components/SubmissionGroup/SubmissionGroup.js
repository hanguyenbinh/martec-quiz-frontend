import React from "react"
import PropTypes from "prop-types"

import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"

import classes from "./SubmissionGroup.module.scss"
import AppFormInput from "../../../../Components/Common/AppFormInput"
import { FastField } from "formik"

const SubmissionGroup = (props) => {
	const { title, fields } = props
	return (
		<Card>
			<CardHeader className="align-items-center d-flex">
				<h4 className="card-title mb-0 flex-grow-1">{title}</h4>
			</CardHeader>
			<CardBody>
				<Row className="mb-3">
					{
						fields.map((_field, index) => (
							<Col key={`SubmissionForm_group_${index}`} sm={12} md={3}>
								<FastField name={_field.name}>
									{({ field, meta }) => {
										return (
											<AppFormInput options={_field.options} type={_field.type} error={!!meta.error ? true : undefined} helperText={meta.error} label={_field.label} name={_field.name} {...field} />
										)
									}}
								</FastField>
							</Col>
						))
					}
				</Row>
			</CardBody>
		</Card>
	)
}

SubmissionGroup.propTypes = {
	title: PropTypes.string.isRequired,
	fields: PropTypes.array.isRequired,
}

export default SubmissionGroup
