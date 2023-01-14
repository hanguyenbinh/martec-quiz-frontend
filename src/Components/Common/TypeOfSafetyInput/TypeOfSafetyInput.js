import React from "react"
import cx from "classnames"
import lodash, { camelCase, isEmpty } from "lodash"
import PropTypes from "prop-types"

import { Col, FormGroup, FormText, Input, Label, Row, Tooltip } from "reactstrap"

import classes from "./TypeOfSafetyInput.module.scss"
import EsgTooltip from "../EsgTooltip"
import { useFormikContext } from "formik"

const TypeOfSafetyInput = React.forwardRef((props, ref) => {
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
	const extractValue = () => {
		return values.typeOfSafetyOrEsgRelatedTechnologiesUsedOther
	}
	console.log('typeofsafty input', options)

	return (
		< FormGroup
			ref={ref}
			className={cx(className, !!innerClasses?.root && innerClasses.root, {
				[classes.error]: !!error
			})}
			{...rest}
		>

			<div className="d-flex flex-column">
				<Row>
					<Label
						htmlFor={htmlId}
						className={cx(
							classes.label,
							!!innerClasses?.label && innerClasses.label
						)}
					>
						<div className="align-items-center">{label} {tooltip ? <EsgTooltip tooltipText={tooltip} name={name}></EsgTooltip> : null}</div>

					</Label>

				</Row>
				{options.map((option, key) => (
					<Row className="d-flex flex-row" key={key}>
						<Col>
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

							{option.comment &&
								<div style={{ paddingLeft: '2rem' }}>
									<Input
										name={option.comment}
										type='text'
										className={cx(!!innerClasses?.input && innerClasses.input)}
										id={'comment' + htmlId}
										value={values[option.comment]}
										valid={error === false}
										invalid={error === true}
										onChange={onChange}
										onBlur={onBlur}
									>
									</Input>
								</div>
							}
						</Col>
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
		</FormGroup >
	)
});

TypeOfSafetyInput.displayName = "TypeOfSafetyInput"

export default TypeOfSafetyInput
