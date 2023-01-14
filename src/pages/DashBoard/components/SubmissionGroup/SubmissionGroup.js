import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"

import classes from "./SubmissionGroup.module.scss"
import AppFormInput from "../../../../Components/Common/AppFormInput"
import { FastField } from "formik"
import { useSelector } from "react-redux"
import { isEmpty } from "lodash"
import AdaptoolsInput from "src/Components/Common/AdaptoolsInput"
import TypeOfSafetyInput from "src/Components/Common/TypeOfSafetyInput"

const SubmissionGroup = (props) => {
	const { title, fields, currentDraft } = props
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
							// !(_field.disabled && )
							<FastField key={`SubmissionForm_group_${index}`} name={_field.name}>
								{({ field, meta }) => {

									if (_field.name === 'typeOfSafetyOrEsgRelatedTechnologiesUsed') {
										console.log('field name', _field.name)
										return (
											<Col sm={12} md={6}>
												<TypeOfSafetyInput
													options={_field.options}
													type={_field.type}
													error={!!meta.error && meta.touched ? true : undefined}
													helperText={!!meta.error && meta.touched ? meta.error : ''}
													label={_field.label}
													name={_field.name}
													tooltip={_field.tooltip}
													multiple={_field.multiple}
													disabled={_field.disabled}
													{...field} />
											</Col>
										);
									}
									if (_field.name === 'adoptedTools') {
										return (
											<AdaptoolsInput
												options={_field.options}
												type={_field.type}
												error={!!meta.error && meta.touched ? true : undefined}
												helperText={!!meta.error && meta.touched ? meta.error : ''}
												label={_field.label}
												name={_field.name}
												tooltip={_field.tooltip}
												multiple={_field.multiple}
												disabled={_field.disabled}
												{...field} />
										);
									}
									return _field.disabled && isEmpty(field.value) ? null : (
										<Col sm={12} md={_field.length ? _field.length : 3}>
											<AppFormInput
												options={_field.options}
												type={_field.type}
												error={!!meta.error && meta.touched ? true : undefined}
												helperText={!!meta.error && meta.touched ? meta.error : ''}
												label={_field.label}
												name={_field.name}
												tooltip={_field.tooltip}
												multiple={_field.multiple}
												disabled={_field.disabled}
												{...field} />
										</Col>
									)
								}}



							</FastField>
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
