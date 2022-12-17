import React from "react"
import cx from "classnames"
import lodash, { camelCase } from "lodash"
import PropTypes from "prop-types"

import { FormGroup, FormText, Input, Label, Tooltip } from "reactstrap"

import classes from "./AppFormInput.module.scss"
import EsgTooltip from "../EsgTooltip"
import { useFormikContext } from "formik"

const AppFormInput = React.forwardRef((props, ref) => {
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
		}
		return ''
	}
	const buildInput = (type, disabled = false) => {
		switch (type) {
			case 'select':
				return <><Input
					{...inputProps}
					value={value}
					name={name}
					className={cx(!!innerClasses?.input && innerClasses.input)}
					id={htmlId}
					ref={inputRef}
					type={type}
					multiple={multiple}
					onChange={onChange}
					onBlur={onBlur}
					valid={error === false}
					invalid={error === true}
					disabled={disabled}
				>
					{options.map((option, index) => (<option key={`${name}${index}`} value={option.value}>{option.label}</option>))}
				</Input>
					{
						!!multiple && (
							<FormText>"Ctrl + click" to select multiple</FormText>
						)
					}
				</>
			case 'checkboxes':




				return options.map((option, index) => <div className="d-flex flex-row" key={index}>
					<div className="col-md-12">
						<Input {...inputProps}
							name={name}
							type='checkbox'
							className={cx(!!innerClasses?.input && innerClasses.input) + ' me-3'}
							id={htmlId}
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
					</div>

					{option.comment ? (
						<div className="col-md-10">
							<Input
								name={option.comment}
								type='text'
								className={cx(!!innerClasses?.input && innerClasses.input)}
								id={'comment' + htmlId}
								value={extractValue(index)}
								valid={error === false}
								invalid={error === true}
								onChange={(e) => {
									console.log(values)
									onChange(e)
								}}
								onBlur={onBlur}
							>

							</Input></div>) : null}
				</div>)
			default:
				return <Input
					{...inputProps}
					value={value}
					name={name}
					className={cx(!!innerClasses?.input && innerClasses.input)}
					id={htmlId}
					ref={inputRef}
					type={type}
					multiple={multiple}
					onChange={onChange}
					onBlur={onBlur}
					valid={error === false}
					invalid={error === true}
					disabled={disabled}
				>
				</Input>
		}
	}


	return (
		<FormGroup
			ref={ref}
			className={cx(className, !!innerClasses?.root && innerClasses.root, {
				[classes.error]: !!error
			})}
			{...rest}
		>
			<Label
				htmlFor={htmlId}
				className={cx(
					classes.label,
					!!innerClasses?.label && innerClasses.label
				)}
			>
				<div className="align-items-center">{label} {tooltip ? <EsgTooltip tooltipText={tooltip} name={name}></EsgTooltip> : null}</div>

			</Label>
			{buildInput(type, disabled)}
			{!!helperText && (
				<FormText
					color="inherit"
					className={cx(
						classes.helperText,
						!!innerClasses?.helperText && innerClasses.helperText
					)}
				>
					{helperText}
				</FormText>
			)}
		</FormGroup>
	)
})

// AppFormInput.propTypes = {
// 	label: PropTypes.string,
// 	className: PropTypes.string,
// 	classes: PropTypes.shape({
// 		root: PropTypes.string,
// 		label: PropTypes.string,
// 		input: PropTypes.string,
// 		helperText: PropTypes.string
// 	}),
// 	name: PropTypes.string,
// 	value: PropTypes.any,
// 	placeholder: PropTypes.string,
// 	type: PropTypes.oneOf(["password", "text", "number", "email", "select"]),
// 	multiple: PropTypes.bool,
// 	error: PropTypes.bool,
// 	helperText: PropTypes.string,
// 	onChange: PropTypes.func,
// 	onBlur: PropTypes.func
// }

AppFormInput.displayName = "AppFormInput"

export default AppFormInput
