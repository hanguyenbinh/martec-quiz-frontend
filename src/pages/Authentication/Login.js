import React, { useEffect, useState } from "react"
import {
	Card,
	CardBody,
	Col,
	Container,
	Input,
	Label,
	Row,
	Button,
	Form,
	FormFeedback,
	Alert
} from "reactstrap"
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth"

//redux
import { useSelector, useDispatch } from "react-redux"

import { withRouter } from "react-router-dom"

// Formik validation
import * as Yup from "yup"
import { Formik, useFormik } from "formik"

// actions
import { loginInitiate, loginUser, resetLoginFlag } from "../../store/actions"
import { withTranslation } from "react-i18next"

const EMAIL_INPUT_FORM_TAB_INDEX = 0
const OTP_CODE_INPUT_FORM_TAB_INDEX = 1

const Login = (props) => {
	const [tabIndex, setTabIndex] = React.useState(EMAIL_INPUT_FORM_TAB_INDEX)

	const T = props.t
	const dispatch = useDispatch()
	const { user } = useSelector((state) => ({
		user: state.Account.user
	}))

	const [userLogin, setUserLogin] = useState([])
	const [userOtp, setUserOtp] = useState([])

	useEffect(() => {
		if (user && user) {
			setUserLogin({
				email: user.user.email
				// password: user.user.confirm_password
			})
		}
	}, [user])

	const { error } = useSelector((state) => ({
		error: state.Login.error
	}))

	const { challengeId } = useSelector((state) => ({
		challengeId: state.Login.challengeId
	}))

	const formikRef = React.useRef()

	const initialValues = React.useMemo(() => {
		return {
			email: "",
			code: ""
		}
	}, [])

	const validationSchema = React.useMemo(() => {
		const validationObj = {
			email: Yup.string().required("Email required").email("Email is invalid")
		}
		tabIndex === OTP_CODE_INPUT_FORM_TAB_INDEX &&
			Object.assign(validationObj, {
				code: Yup.string().required("Code required")
			})
		return Yup.object().shape(validationObj)
	}, [tabIndex])

	const handleSubmit = () => {
		if (tabIndex === EMAIL_INPUT_FORM_TAB_INDEX) {
			setTabIndex(OTP_CODE_INPUT_FORM_TAB_INDEX)
		} else {
			// api verify otp...
		}
	}

	useEffect(() => {
		setTimeout(() => {
			dispatch(resetLoginFlag())
		}, 3000)
	}, [dispatch, error])

	document.title = T("Application Name")

	return (
		<React.Fragment>
			<Formik
				ref={formikRef}
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit
				}) => (
					<ParticlesAuth>
						<div className="auth-page-content">
							<Container>
								<Row>
									<Col lg={12}>
										<div className="text-center mt-sm-5 mb-4 text-white-50">
											<p className="mt-3 fs-15 fw-medium">
												{T("Application Name")}
											</p>
										</div>
									</Col>
								</Row>

								<Row className="justify-content-center">
									<Col md={8} lg={6} xl={5}>
										<Card className="mt-4">
											<CardBody className="p-4">
												<div className="text-center mt-2">
													<h5 className="text-primary">
														{tabIndex === EMAIL_INPUT_FORM_TAB_INDEX
															? "Login"
															: "Verify OTP code"}
													</h5>
												</div>
												{error && error ? (
													<Alert color="danger"> {error} </Alert>
												) : null}
												<div className="p-2 mt-4">
													<Form onSubmit={handleSubmit} action="#">
														{tabIndex === EMAIL_INPUT_FORM_TAB_INDEX ? (
															<div className="mb-3">
																<Label htmlFor="email" className="form-label">
																	{T("Email")}
																</Label>
																<Input
																	name="email"
																	className="form-control"
																	placeholder="Enter email"
																	type="email"
																	onChange={handleChange}
																	onBlur={handleBlur}
																	value={values.email}
																	invalid={
																		touched.email && errors.email ? true : false
																	}
																/>
																{!!touched.email && !!errors.email ? (
																	<FormFeedback>{errors.email}</FormFeedback>
																) : null}
															</div>
														) : (
															<div className="mb-3">
																<Label htmlFor="email" className="form-label">
																	{T("OTP code")}
																</Label>
																<Input
																	name="code"
																	className="form-control"
																	placeholder="OTP code"
																	type="password"
																	onChange={handleChange}
																	onBlur={handleBlur}
																	value={values.code}
																	invalid={
																		touched.code && errors.code ? true : false
																	}
																/>
																{!!touched.code && !!errors.code ? (
																	<FormFeedback>{errors.code}</FormFeedback>
																) : null}
															</div>
														)}

														<div className="mt-4">
															<Button
																color="success"
																className="btn btn-success w-100"
																type="submit"
															>
																{tabIndex === EMAIL_INPUT_FORM_TAB_INDEX
																	? "Get OTP"
																	: "Sign in"}
															</Button>
														</div>
													</Form>
												</div>
											</CardBody>
										</Card>
										{/* {challengeId ? (
											<Card className="mt-4">
												<CardBody className="p-4">
													<div className="text-center mt-2">
														<h5 className="text-primary">
															{T("Welcome Back!")}
														</h5>
													</div>
													{error && error ? (
														<Alert color="danger"> {error} </Alert>
													) : null}
													<div className="p-2 mt-4">
														<Form
															onSubmit={(e) => {
																e.preventDefault()
																validation.handleSubmit()
																return false
															}}
															action="#"
														>
															<div className="mb-3">
																<Label htmlFor="email" className="form-label">
																	{T("Email")}
																</Label>
																<Input
																	name="email"
																	className="form-control"
																	placeholder="Enter email"
																	type="email"
																	onChange={validation.handleChange}
																	onBlur={validation.handleBlur}
																	value={validation.values.email || ""}
																	invalid={
																		validation.touched.email &&
																		validation.errors.email
																			? true
																			: false
																	}
																/>
																{validation.touched.email &&
																validation.errors.email ? (
																	<FormFeedback type="invalid">
																		{validation.errors.email}
																	</FormFeedback>
																) : null}
															</div>

															<div className="mt-4">
																<Button
																	color="success"
																	className="btn btn-success w-100"
																	type="submit"
																>
																	{T("Get OTP")}
																</Button>
															</div>
														</Form>
													</div>
												</CardBody>
											</Card>
										) : (
											<Card className="mt-4">
												<CardBody className="p-4">
													<div className="text-center mt-2">
														<h5 className="text-primary">
															{T("Welcome Back!")}
														</h5>
													</div>
													{error && error ? (
														<Alert color="danger"> {error} </Alert>
													) : null}
													<div className="p-2 mt-4">
														<Form
															onSubmit={(e) => {
																e.preventDefault()
																validation.handleSubmit()
																return false
															}}
															action="#"
														>
															<div className="mb-3">
																<Label htmlFor="email" className="form-label">
																	{T("Email")}
																</Label>
																<Input
																	name="email"
																	className="form-control"
																	placeholder="Enter email"
																	type="email"
																	onChange={validation.handleChange}
																	onBlur={validation.handleBlur}
																	value={validation.values.email || ""}
																	invalid={
																		validation.touched.email &&
																		validation.errors.email
																			? true
																			: false
																	}
																/>
																{validation.touched.email &&
																validation.errors.email ? (
																	<FormFeedback type="invalid">
																		{validation.errors.email}
																	</FormFeedback>
																) : null}
															</div>

															<div className="mt-4">
																<Button
																	color="success"
																	className="btn btn-success w-100"
																	type="submit"
																>
																	{T("Get OTP")}
																</Button>
															</div>
														</Form>
													</div>
												</CardBody>
											</Card>
										)} */}
									</Col>
								</Row>
							</Container>
						</div>
					</ParticlesAuth>
				)}
			</Formik>
		</React.Fragment>
	)
}

export default withRouter(withTranslation()(Login))
