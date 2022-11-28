import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert } from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, withRouter } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { getOrganisations, loginInitiate, loginUser, resetLoginFlag } from "../../store/actions";
import { withTranslation } from 'react-i18next';

import logodark from "../../assets/images/HKCA_Logo.png";

const GetOtp = (props) => {
	const T = props.t;
	const dispatch = useDispatch();
	const { user } = useSelector(state => ({
		user: state.Account.user,
	}));
	const { error, organisations } = useSelector(state => ({
		error: state.Login.error,
		organisations: state.Login.organisations
	}));

	const [userLogin, setUserLogin] = useState([]);
	const [userOtp, setUserOtp] = useState([])

	useEffect(() => {
		if (user && user) {
			setUserLogin({
				email: user.user.email,
			});
		}
	}, [user]);

	const validation = useFormik({
		// enableReinitialize : use this flag when initial values needs to be changed
		enableReinitialize: true,

		initialValues: {
			email: userLogin.email || '',
			orgId: organisations[0] ? organisations[0].id : '',
		},
		validationSchema: Yup.object({
			email: Yup.string().required("Please Enter Your Email"),
		}),
		onSubmit: (values) => {
			dispatch(loginInitiate(values.email, values.orgId, props.history));
		}
	});





	useEffect(() => {
	}, [error, organisations]);
	useEffect(() => {
		dispatch(getOrganisations())
	}, [])

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
													<Label htmlFor="email" className="form-label">{T('Email')}</Label>
													<Input
														name="email"
														className="form-control"
														placeholder="Enter email"
														type="email"
														onChange={validation.handleChange}
														onBlur={validation.handleBlur}
														value={validation.values.email || ""}
														invalid={
															validation.touched.email && validation.errors.email ? true : false
														}
													/>
													{validation.touched.email && validation.errors.email ? (
														<FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
													) : null}
												</div>

												<div className="mb-3">
													<Label htmlFor="orgId" className="form-label">{T('Organisation')}</Label>
													<Input
														name="orgId"
														className="form-control"
														type="select"
														onChange={validation.handleChange}
														onBlur={validation.handleBlur}
														value={validation.values.orgId || ""}
													>
														{
															organisations.map((item, key) => <option key={key} value={item.id}>{item.org_name}</option>)
														}
													</Input>
												</div>

												<div className="mt-4">
													<Button color="success" className="btn btn-success w-100" type="submit">{T('Get Verification Code')}</Button>
												</div>

											</Form>

										</div>
										<div className='mt-4'><Link to={'/home?view=howtostart'} >Registration for HKCA ESG Recognition Scheme</Link></div>

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

export default withRouter(withTranslation()(GetOtp));