import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert } from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { loginInitiate, loginUser, resetLoginFlag } from "../../store/actions";
import { withTranslation } from 'react-i18next';

const Login = (props) => {
    const T = props.t;
    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.Account.user,
    }));

    const [userLogin, setUserLogin] = useState([]);
    const [userOtp, setUserOtp] = useState([])

    useEffect(() => {
        if (user && user) {
            setUserLogin({
                email: user.user.email,
                // password: user.user.confirm_password
            });
        }
    }, [user]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "hanguyenbinh201282@gmail.com" || '',
            // password: userLogin.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            // password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(loginInitiate(values.email, props.history));
        }
    });
    const otpValidation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            otp: '',
        },
        validationSchema: Yup.object({
            otp: Yup.string().length(6).required("Please Enter OTP"),
        }),
        onSubmit: (values) => {
            dispatch(loginInitiate(values.email, props.history));
        }
    });

    const { error } = useSelector(state => ({
        error: state.Login.error,
    }));

    const { challengeId } = useSelector(state => ({
        challengeId: state.Login.challengeId
    }))


    useEffect(() => {
        setTimeout(() => {
            dispatch(resetLoginFlag());
        }, 3000);
    }, [dispatch, error]);

    document.title = T('Application Name');
    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content">
                    <Container className='main-container'>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <p className="mt-3 fs-15 fw-medium"></p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                {challengeId ? (
                                    <Card className="mt-4">
                                        <CardBody className="p-4">
                                            <div className="text-center mt-2">
                                                <h5 className="text-primary">{T('Application Name')}</h5>
                                            </div>
                                            {error && error ? (<Alert color="danger"> {error} </Alert>) : null}
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

                                                    <div className="mt-4">
                                                        <Button color="success" className="btn btn-success w-100" type="submit">{T('Get OTP')}</Button>
                                                    </div>
                                                </Form>
                                            </div>
                                        </CardBody>
                                    </Card>
                                ) : (<Card className="mt-4">
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">{T('Application Name')}</h5>
                                        </div>
                                        {error && error ? (<Alert color="danger"> {error} </Alert>) : null}
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

                                                <div className="mt-4">
                                                    <Button color="success" className="btn btn-success w-100" type="submit">{T('Get OTP')}</Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>)}


                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default withRouter(withTranslation()(Login));