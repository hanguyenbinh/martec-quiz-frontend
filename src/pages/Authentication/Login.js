import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert } from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { useHistory, withRouter } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { loginChallenge, resetLoginFlag } from "../../store/actions";
import { withTranslation } from 'react-i18next';

import logodark from "../../assets/images/HKCA_Logo.png";


const Login = (props) => {
	const history = useHistory();


	const { challengeId, email, orgId } = useSelector(state => ({
		email: state.Login.email,
		challengeId: state.Login.challengeId,
		orgId: state.Login.orgId
	}))
	React.useEffect(() => {
		if (!email || !challengeId) {
			history.push('/get-otp', { from: props.location })
		}
	}, [email, challengeId, orgId])

	const T = props.t;
	const dispatch = useDispatch();
	const [otp, setOtp] = useState('')


	const validation = useFormik({
		// enableReinitialize : use this flag when initial values needs to be changed
		enableReinitialize: true,

		initialValues: {
			otpCode: otp,
			// password: userLogin.password || "123456" || '',
		},
		validationSchema: Yup.object({
			otpCode: Yup.string().length(6).required("Please Enter Your Code"),
		}),
		onSubmit: (values) => {
			dispatch(loginChallenge({
				orgId,
				email,
				challengeId,
				otp: values.otpCode
			}, props.history));
		}
	});

	const { error } = useSelector(state => ({
		error: state.Login.error,
	}));


	useEffect(() => {
		setTimeout(() => {
			dispatch(resetLoginFlag());
		}, 10 * 60 * 1000);
	}, [dispatch, error]);


	document.title = T('Application Name');
	return (
		<React.Fragment>
			<ParticlesAuth>
				<div className="auth-page-content">
					<Container>
						<img src={logodark} className="card-logo" alt="logo" height="80" />
						<Row>
							<Col lg={12}>
								<div className="text-center mt-sm-5 mb-4 text-white-50">
									<p className="mt-3 fs-15 fw-medium">{T('ESG Recognition Scheme Plaform')}</p>
								</div>
							</Col>
						</Row>

						<Row className="justify-content-center">
							<Col md={8} lg={6} xl={5}>
								<Card className="mt-4">
									<CardBody className="p-4">
										<div className="text-center mt-2">
											<h5 className="text-primary">{T('Login Page')}</h5>
										</div>
										{error && error ? (<Alert color="danger"> {T(error)} </Alert>) : null}
										<div className="p-2 mt-4">
											<Form
												onSubmit={(e) => {
													e.preventDefault();
													validation.handleSubmit();
													return false;
												}}
												action="#">

												<div className="mb-3">
													<Label htmlFor="otpCode" className="form-label">{T('Enter verification code')}</Label>
													<Input
														name="otpCode"
														className="form-control"
														placeholder="Enter verification code"
														onChange={validation.handleChange}
														onBlur={validation.handleBlur}
														value={validation.values.otpCode || ""}
														invalid={
															validation.touched.otpCode && validation.errors.otpCode ? true : false
														}
													/>
													{validation.touched.otpCode && validation.errors.otpCode ? (
														<FormFeedback type="invalid">{validation.errors.otpCode}</FormFeedback>
													) : null}
												</div>


												<div className="mt-4">
													<Button color="success" className="btn btn-success w-100" type="submit">{T('Login')}</Button>
												</div>
											</Form>
										</div>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</ParticlesAuth>
		</React.Fragment>
	);
};

export default withRouter(withTranslation()(Login));