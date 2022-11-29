import React, { useEffect } from "react";
import { Row, Col, CardBody, Card, Container, Input, Label, Form, FormFeedback, Button, Alert } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// action
import { registerUser, apiError, resetRegisterFlag, getOrganisations } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useHistory } from "react-router-dom";

//import images
import logoLight from "../../assets/images/logo-light.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

const UserRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { email, accessToken, registrationError, organisations } = useSelector(state => ({
    email: state.Login.email,
    accessToken: state.Login.accessToken,
    registrationError: state.Account.registrationError,
    organisations: state.Login.organisations
  }))


  useEffect(() => {
    console.log(accessToken, email);
    if (!accessToken || !email) {
      history.push('/register')
    }
  }, [accessToken])

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: '',
      phone: '',
      organisation: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Username"),
      phone: Yup.string().required("Please Enter Your Phone"),
      organisation: Yup.string().required("Please Select Your Organisation"),
    }),
    onSubmit: (values) => {
      const orgId = values.organisation;
      const org = organisations.find(item => item.id === orgId);
      dispatch(registerUser({ ...org, orgEmail: org.email, email, accessToken, ...values }));
    }
  });

  document.title = "Basic SignUp | Velzon - React Admin & Dashboard Template";

  useEffect(() => {
  }, [organisations]);
  useEffect(() => {
    dispatch(getOrganisations())
  }, [])

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <img src={logoLight} alt="" height="20" />
                    </Link>
                  </div>
                  <p className="mt-3 fs-15 fw-medium">ESG Recognition Scheme Platform</p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">

                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Register new User</h5>
                    </div>
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                        className="needs-validation" action="#">


                        {registrationError && registrationError ? (
                          <Alert color="danger"><div>
                            {registrationError} </div></Alert>
                        ) : null}

                        <div className="mb-3">
                          <Label htmlFor="name" className="form-label">Username <span className="text-danger">*</span></Label>
                          <Input
                            name="name"
                            type="text"
                            placeholder="Enter name"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.name || ""}
                            invalid={
                              validation.touched.name && validation.errors.name ? true : false
                            }
                          />
                          {validation.touched.name && validation.errors.name ? (
                            <FormFeedback type="invalid"><div>{validation.errors.name}</div></FormFeedback>
                          ) : null}

                        </div>

                        <div className="mb-3">
                          <Label htmlFor="userpassword" className="form-label">Phone <span className="text-danger">*</span></Label>
                          <Input
                            name="phone"
                            type="text"
                            placeholder="Enter Phone"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.phone || ""}
                            invalid={
                              validation.touched.phone && validation.errors.phone ? true : false
                            }
                          />
                          {validation.touched.phone && validation.errors.phone ? (
                            <FormFeedback type="invalid"><div>{validation.errors.phone}</div></FormFeedback>
                          ) : null}

                        </div>

                        <div className="mb-2">
                          <Label htmlFor="organisation" className="form-label">Organisation <span className="text-danger">*</span></Label>
                          <Input
                            name="organisation"
                            type="select"
                            placeholder="Organisation"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.organisation || ""}
                            invalid={
                              validation.touched.organisation && validation.errors.organisation ? true : false
                            }
                          >
                            <option>-------</option>
                            {organisations.map((item, key) => (
                              <option key={key} value={item.id}>{item.org_name}</option>
                            ))}
                          </Input>
                          {validation.touched.organisation && validation.errors.organisation ? (
                            <FormFeedback type="invalid"><div>{validation.errors.organisation}</div></FormFeedback>
                          ) : null}

                        </div>

                        <div className="mb-4">
                          <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon
                            <Link to="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                        </div>

                        <div className="mt-4">
                          <button className="btn btn-success w-100" type="submit">Sign Up</button>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-4 text-center">
                  <p className="mb-0">Already have an account ? <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default UserRegister;