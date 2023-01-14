import React from "react"
import cx from "classnames"
import lodash, { camelCase, isEmpty } from "lodash"
import PropTypes from "prop-types"

import { Col, FormGroup, FormText, Input, Label, Row, Tooltip } from "reactstrap"

import classes from "./AdaptoolsInput.module.scss"
import EsgTooltip from "../EsgTooltip"
import { useFormikContext } from "formik"

const AdaptoolsInput = React.forwardRef((props, ref) => {
	const {
		label,
		name,
		className,
		classes: innerClasses,
		options,
		inputProps,
		inputRef,
		type,
		multiple,
		onChange,
		onBlur,
		error,
		helperText,
		value,
		tooltip,
		disabled,
		...rest
	} = props

	const { isSubmitting, values, errors, setFieldValue, handleChange, handleBlur, touched, submitForm } = useFormikContext()

	const htmlId = inputProps?.id || lodash.uniqueId(`app${`-${name}`}-input`)
	const extractValue = (i) => {
		switch (i) {
			case 0:
				{
					return values.commentA
				}
			case 1:
				{
					return values.commentB
				}
			case 2:
				{
					return values.commentC
				}
			case 3:
				{
					return values.commentD
				}
			case 4:
				return values.commentE
		}
		return ''
	}

	return (
		< FormGroup
			ref={ref}
			className={cx(className, !!innerClasses?.root && innerClasses.root, {
				[classes.error]: !!error
			})}
			{...rest}
		>

			<div className="d-flex flex-row">
				<div className="col col-md-12">
					<Row>
						<div className="col-md-8">
							<Label
								htmlFor={htmlId}
								className={cx(
									classes.label,
									!!innerClasses?.label && innerClasses.label
								)}
							>
								<div className="align-items-center">{label} {tooltip ? <EsgTooltip tooltipText={tooltip} name={name}></EsgTooltip> : null}</div>

							</Label>
						</div>
						<div className="col-md-4">
							<Label
								htmlFor={htmlId}
								className={cx(
									classes.label,
									!!innerClasses?.label && innerClasses.label
								)}
							>
								Remarks
							</Label>
						</div>

					</Row>
					{options.map((option, key) => (
						<Row className="d-flex flex-row" key={key}>
							<Col md={8}>
								<Input {...inputProps}
									name={name}
									type='checkbox'
									className={cx(!!innerClasses?.input && innerClasses.input) + ' me-3'}
									id={htmlId}
									checked={value?.indexOf(option.value) >= 0}
									value={option.value}
									onChange={onChange}
									onBlur={onBlur}
									valid={error === false}
									invalid={error === true}
									disabled={disabled}
								>
								</Input>
								<Label check>
									{option.value}
								</Label>
							</Col>

							<Col md={4}>
								<Input
									name={option.comment}
									type='text'
									className={cx(!!innerClasses?.input && innerClasses.input)}
									id={'comment' + htmlId}
									value={values[option.comment]}
									valid={error === false}
									invalid={error === true}
									onChange={(e) => {
										console.log('adaptools input changed', values)
										onChange(e)
									}}
									onBlur={onBlur}
								>

								</Input></Col>
						</Row>
					))}
					{
						!!helperText && (
							<Row><FormText
								color="inherit"
								className={cx(
									classes.helperText,
									!!innerClasses?.helperText && innerClasses.helperText
								)}
							>
								{helperText}
							</FormText></Row>

						)
					}
				</div>

			</div>
		</FormGroup >
	)
});

AdaptoolsInput.displayName = "AdaptoolsInput"

export default AdaptoolsInput
