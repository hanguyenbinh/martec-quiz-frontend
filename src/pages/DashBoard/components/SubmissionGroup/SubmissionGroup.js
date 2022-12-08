import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"

import classes from "./SubmissionGroup.module.scss"
import AppFormInput from "../../../../Components/Common/AppFormInput"
import { FastField } from "formik"
import { useSelector } from "react-redux"

const SubmissionGroup = (props) => {
	const { title, fields } = props
	const { sectionRemarks } = useSelector(state => ({
		sectionRemarks: state.SubmissionForm.sectionRemarks
	}));
	const [remarks, setRemarks] = useState([])

	useEffect(() => {
		sectionRemarks.forEach(item => {
			if (item.sectionName === title) {
				setRemarks(item.remark.split('/n'))
			}
		})
	}, [sectionRemarks])
	return (
		<Card>
			<CardHeader className="align-items-center d-flex">
				<h4 className="card-title mb-0 flex-grow-1">{title}</h4>
			</CardHeader>
			<CardBody>
				<Row className="mb-3">
					{
						fields.map((_field, index) => (
							<Col key={`SubmissionForm_group_${index}`} sm={12} md={_field.length ? _field.length : 3}>
								<FastField name={_field.name}>
									{({ field, meta }) => {
										return (
											<AppFormInput
												options={_field.options}
												type={_field.type}
												error={!!meta.error && meta.touched ? true : undefined}
												helperText={!!meta.error && meta.touched ? meta.error : ''}
												label={_field.label}
												name={_field.name}
												tooltip={_field.tooltip}
												multiple={_field.multiple}
												{...field} />
										)
									}}
								</FastField>

							</Col>
						))
					}
					{remarks && remarks.length ? remarks.map((remark, key) => (
						<div className="submission-remark" key={key}>{remark}</div>
					)) : null}
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
