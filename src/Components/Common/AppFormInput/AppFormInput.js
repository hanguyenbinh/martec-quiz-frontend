import React from "react"
import cx from "classnames"
import lodash, { camelCase } from "lodash"
import PropTypes from "prop-types"

import { FormGroup, FormText, Input, Label, Tooltip } from "reactstrap"

import classes from "./AppFormInput.module.scss"
import EsgTooltip from "../EsgTooltip"

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
		...rest
	} = props
	const htmlId = inputProps?.id || lodash.uniqueId(`app${`-${name}`}-input`)

	const buildInput = (type) => {
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
				return options.map((option, index) => <div key={index}>
					<Input {...inputProps}
						name={name}
						type='checkbox'
						className={cx(!!innerClasses?.input && innerClasses.input)}
						id={htmlId}
						value={option.value}
						onChange={onChange}
						onBlur={onBlur}
						valid={error === false}
						invalid={error === true} F
					>

					</Input>
					<Label check>
						{option.value}
					</Label>
				</div>)
				break;
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
			{buildInput(type)}
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
