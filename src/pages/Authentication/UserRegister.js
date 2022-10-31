import React, { useEffect } from "react";
import { Row, Col, CardBody, Card, Container, Input, Label, Form, FormFeedback, Button, Alert } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// action
import { registerUser, apiError, resetRegisterFlag } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useHistory } from "react-router-dom";

//import images 
import logoLight from "../../assets/images/logo-light.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

const organisations = [
  {
    "id": "16ddbc21-aa87-4cfe-b515-f79a300bca61",
    "org_name": "WB Company",
    "org_logo": "https://demo.org.com/logo.png",
    "org_image": "https://demo.org.com/logo.png",
    "org_type": "company",
    "email": "wbrayxu@gmail.com",
    "phone": "98668971",
    "status": "active",
    "login_id": "wbrayxu@gmail.com",
    "did": "did:weid:1:0x9b4904e485b50e9ddb896a17b9dcd751e8c001c6",
    "contract_address": "0x26df9a301a23e18d3e1cc8bf5eb05fafb82a1c7e"
  },
  {
    "id": "219b37fe-e659-40a6-aa61-efa1560fd7ba",
    "org_name": "Paul Y. Construction & Engineering Co. Limited",
    "org_logo": "https://www.pyengineering.com/images/logo_white_text.svg",
    "org_type": "company",
    "email": "admin@pyengineering.com",
    "status": "active",
    "login_id": "admin@pyengineering.com",
    "did": "did:weid:1:0xc4cc217c3a1b165d309e93e364943ab78cf847a5",
    "contract_address": "0xfba5d3a6e25d2f13deae399d134ad6c3ee7dc7df"
  },
  {
    "id": "2599aa74-055f-4c07-9766-0f1d6c4b41be",
    "org_name": "Alliance Construction Materials Ltd.",
    "org_logo": "https://www.concrete.hk/sites/all/themes/hc_base/images/logo/alliance_cn_en.svg",
    "org_type": "company",
    "email": "admin@concrete.hk",
    "status": "active",
    "login_id": "admin@concrete.hk",
    "did": "did:weid:1:0xd3128f1c5ec02bd3803020726c8f9723869cefd9",
    "contract_address": "0xe153371751c12e7d49668928ec4959a165f90a1a"
  },
  {
    "id": "386552c9-e723-4e07-9cf9-86e1b95c991c",
    "org_name": "Chun Wo Building Co. Ltd",
    "org_logo": "https://www.chunwo.com/hubfs/CW_logo.svg",
    "org_type": "company",
    "email": "admin@chunwo.com",
    "status": "active",
    "login_id": "admin@chunwo.com",
    "did": "did:weid:1:0x0056a4cf37cf2032bc2e92bcb5f2323d8da82d44",
    "contract_address": "0xabcfba4b7fc2a4d597a0cbe95954bb8255710925"
  },
  {
    "id": "3c0c59f3-bdc3-4934-b537-d6fab5eaaf90",
    "org_name": "ShunLee",
    "org_logo": "https://demo.org.com/logo.png",
    "org_image": "https://demo.org.com/logo.png",
    "org_type": "company",
    "email": "shundax@gmail.com",
    "phone": "98668972",
    "status": "active",
    "login_id": "shundax@gmail.com",
    "did": "did:weid:1:0x9219198afaa9cf8eb34fe5025f4befbdf2022be5",
    "contract_address": "0xff8b265ba2015b6d1b6bbe0efb7f146ec393e1ab"
  },
  {
    "id": "40fb8c5a-c084-41c7-81c0-de2a0fe4b31d",
    "org_name": "test organisation 01",
    "org_logo": "https://demo.org.com/logo.png",
    "org_image": "https://demo.org.com/logo.png",
    "org_type": "company",
    "email": "daigiacuibap82@gmail.com",
    "phone": "0934008160",
    "status": "active",
    "login_id": "daigiacuibap82@gmail.com",
    "did": "did:weid:1:0x05d159e5c9f1a8bdc0979ebf34ec935b99669a66",
    "contract_address": "0xc34e06aca146b1419939a50072557abe113ef131"
  },
  {
    "id": "4a37f55b-2ef0-4b91-a4fe-2b3fa6a3c794",
    "org_name": "xml org",
    "org_logo": "https://public-dev.hkca-esg.com/org/xml-logo.png",
    "org_type": "company",
    "email": "admin@xml.com",
    "status": "registering",
    "login_id": "admin@xml.com",
    "did": "did:weid:1:0x6ff6f538036a0830d0d1d139e0fcf4483edae551",
    "contract_address": ""
  },
  {
    "id": "53c5f340-1639-4701-b947-b64fb9424899",
    "org_name": "demo org4",
    "org_description": "demo org4 is for demo",
    "org_type": "company",
    "email": "org4@demo.com",
    "phone": "+48123456789",
    "status": "registering",
    "login_id": "org4@demo.com",
    "did": "did:weid:1:0x16d54689955814964a51da4f550b9d8778f4b82f",
    "contract_address": ""
  },
  {
    "id": "56921277-1d5d-4926-8b16-faa0843bf206",
    "org_name": "simon test",
    "org_description": "simon test",
    "org_type": "company",
    "email": "simontest@company.com",
    "phone": "+8863345678",
    "status": "registering",
    "login_id": "simontest@company.com",
    "did": "did:weid:1:0x7c55d0629b053bbca3f97b8b189787b9172a62b9",
    "contract_address": ""
  },
  {
    "id": "5e36c12f-cfb0-44ae-92d4-138ea757ff49",
    "org_name": "Kum Shing (K.F.) Construction Company Limited",
    "org_logo": "http://www.kumshing.com.hk/images/logo.jpg",
    "org_type": "company",
    "email": "admin@kumshing.com.hk",
    "status": "active",
    "login_id": "admin@kumshing.com.hk",
    "did": "did:weid:1:0x604a8862afe880e8953dfd9b797201cd01226e08",
    "contract_address": "0xeb0fe47776ac8e9f894ebb167f6baf66c0aba010"
  },
  {
    "id": "7bd4f3cb-e53a-4d42-a82a-f5c56972f30b",
    "org_name": "test organisation 123",
    "org_logo": "https://demo.org.com/logo.png",
    "org_image": "https://demo.org.com/logo.png",
    "org_type": "company",
    "email": "binh.ha@vtl-vtl.com",
    "phone": "09340081601",
    "status": "active",
    "login_id": "binh.ha@vtl-vtl.com",
    "did": "did:weid:1:0xf8341c7c9e990a0bf0e026cda2d6bfe945c7a54b",
    "contract_address": "0x45e1ac12358576c3d083483dab97aef489305011"
  },
  {
    "id": "801f6c4b-90d5-4e1c-b2c2-57916a9aace3",
    "org_name": "demo org3",
    "org_description": "demo org is for demo",
    "org_type": "company",
    "email": "org3@demo.com",
    "phone": "+48123456789",
    "status": "registering",
    "login_id": "org3@demo.com",
    "did": "",
    "contract_address": ""
  },
  {
    "id": "85474111-32bf-4c48-aa08-4c65b32c3626",
    "org_name": "Paul Y. General Contractor Limited",
    "org_logo": "https://www.pyengineering.com/images/logo_white_text.svg",
    "org_type": "company",
    "email": "admin@pyeneral.com",
    "status": "active",
    "login_id": "admin@pyeneral.com",
    "did": "did:weid:1:0xd9779bcb5ef957c7149df1cc85db66cb201e33dd",
    "contract_address": "0xc94e4d434eefed4d4f80416454d1eba5f63473e5"
  },
  {
    "id": "931bd596-1f70-4dee-94ab-baf592b835eb",
    "org_name": "Yau Lee Construction Company Limited",
    "org_logo": "https://public-dev.hkca-esg.com/org/yaulee-logo.png",
    "org_image": "https://media-exp1.licdn.com/dms/image/C560BAQEEegfXP3ZwxA/company-logo_200_200/0/1589593823601?e=1674086400&v=beta&t=-lvr8pMD4yqXuRJ0Jfj5ugdVp77ae84cMZrw3WiHPO0",
    "org_type": "company",
    "email": "admin@yaulee.com",
    "status": "active",
    "login_id": "admin@yaulee.com",
    "did": "did:weid:1:0xa61e6d54e15e38e4d84a54eec9cee22562edef00",
    "contract_address": "0x9ba3ba8dc572e375da77e2836d10749bbcbfe60c"
  },
  {
    "id": "9a5fa258-b7ab-48d4-ab25-332e49a7ea25",
    "org_name": "Gammon Construction Limited",
    "org_logo": "https://www.gammonconstruction.com/images//header-logo.png",
    "org_type": "company",
    "email": "admin@gammonconstruction.com",
    "status": "active",
    "login_id": "admin@gammonconstruction.com",
    "did": "did:weid:1:0xe78cc166c0c20dfb6156d7c769fdb6903ad7e0a7",
    "contract_address": "0xfab8a31d1631e4328a93ca8e41d35124f91fd663"
  },
  {
    "id": "ac9399e5-16ba-40c8-980f-cfeeed1d938b",
    "org_name": "branch a demo org",
    "org_description": "branch a of demo org is for demo",
    "org_type": "company",
    "email": "org-branch@demo.com",
    "phone": "+48123456789",
    "status": "registering",
    "login_id": "org-branch@demo.com",
    "did": "",
    "contract_address": ""
  },
  {
    "id": "af07f7d3-1406-41cb-836c-ece45a84ada7",
    "org_name": "Techoy Construction Company Limited",
    "org_logo": "https://public-dev.hkca-esg.com/org/techoy-logo.png",
    "org_image": "https://media-exp1.licdn.com/dms/image/C560BAQGxqj8jfHPx9g/company-logo_200_200/0/1651280558921?e=1674086400&v=beta&t=dNQr1Bm_88I9cE6IqQg4F5o7Ez8pQfDOE_tRul020ZE",
    "org_type": "company",
    "email": "admin@techoy.com.hk",
    "status": "active",
    "login_id": "admin@techoy.com.hk",
    "did": "did:weid:1:0xc5fd764e631c4cc34437f4183aa4533810c2b153",
    "contract_address": "0x9f943f5a5c93a30b4d63f28c537c40f07a7b4060"
  },
  {
    "id": "b040f096-2262-40df-847d-753060562bf1",
    "org_name": "China State Construction Engineering (Hong Kong) Limited",
    "org_logo": "https://www.cscechk.com/images/logo.png",
    "org_type": "company",
    "email": "admin@cohl.com",
    "status": "active",
    "login_id": "admin@cohl.com",
    "did": "did:weid:1:0xc4a8ca575c2f8497f9fbf08e6d000a05a9e0c3b8",
    "contract_address": "0x256664c6f6971c083882b6bc8eee88c1b072a0da"
  },
  {
    "id": "bc0dc61e-e69f-4c47-b7c6-35cac5cefac0",
    "org_name": "Build King Holdings Limited",
    "org_logo": "https://www.buildking.hk/assets/media/images/bklogo.png",
    "org_type": "company",
    "email": "admin@buildking.hk",
    "status": "active",
    "login_id": "admin@buildking.hk",
    "did": "did:weid:1:0xb1cc62a2289a2cff3726a04403cab73dac7db010",
    "contract_address": "0xf860da01b8593ff9c3e9338804e5fdac8de79af4"
  },
  {
    "id": "c67f28a8-e01c-4f6e-a2e9-e5b677399b85",
    "org_name": "Kwan Lee Holding Limited",
    "org_logo": "https://public-dev.hkca-esg.com/org/kwanlee-logo.png",
    "org_image": "https://media-exp1.licdn.com/dms/image/C4E0BAQGTYYiWjzz7ag/company-logo_200_200/0/1630913978530?e=2147483647&v=beta&t=qM-B6N-rUpvuHHnkZNUFC2KXJ52jhVV67C3RrBexVmM",
    "org_type": "company",
    "email": "admin@kwanlee.com.hk",
    "status": "active",
    "login_id": "admin@kwanlee.com.hk",
    "did": "did:weid:1:0x32c6e3c372e5df528d10ec1dc34e564f904178f6",
    "contract_address": "0xca304d8860002909b4fe501e3931bcac693e40ed"
  },
  {
    "id": "c935f8ea-1485-4fff-aad2-c8c7ececb31a",
    "org_name": "test organisation",
    "org_logo": "https://demo.org.com/logo.png",
    "org_image": "https://demo.org.com/logo.png",
    "org_type": "company",
    "email": "hanguyenbinh201282@gmail.com",
    "phone": "0934008160",
    "status": "active",
    "login_id": "hanguyenbinh201282@gmail.com",
    "did": "did:weid:1:0x05bd46ca85ec9eadf838a04fd539993b595d7469",
    "contract_address": "0x761b38175f8be006214c3725cbf5d22694423e1f"
  },
  {
    "id": "ccadbd0d-14e3-4982-ba90-4c94ac6797e9",
    "org_name": "Dragages Hong Kong Limited",
    "org_logo": "http://dragageshk.com/wp-content/themes/studiosans/images/layout/logo_black.png",
    "org_type": "company",
    "email": "admin@dragageshk.com",
    "status": "active",
    "login_id": "admin@dragageshk.com",
    "did": "did:weid:1:0x47de0187d984eb7404cb5e81ba1e6d36b1cf9e8f",
    "contract_address": "0xbe95083b9a011f5c307a7e5bc019321fc1b3435b"
  },
  {
    "id": "d697dc23-ea1d-46f7-810a-2d1adc34762f",
    "org_name": "demo org2",
    "org_description": "demo org is for demo",
    "org_type": "company",
    "email": "org2@demo.com",
    "phone": "+48123456789",
    "status": "registering",
    "login_id": "org2@demo.com",
    "did": "",
    "contract_address": ""
  },
  {
    "id": "db757e8b-3064-4c98-b6a3-238b64fa7317",
    "org_name": "Paul Y. Building Contractors Limited",
    "org_logo": "https://www.pyengineering.com/images/logo_white_text.svg",
    "org_type": "company",
    "email": "admin@pybuilding.com",
    "status": "active",
    "login_id": "admin@pybuilding.com",
    "did": "did:weid:1:0x7b3a179f3605828b765d210250d5656d907d69e8",
    "contract_address": "0x5aa8eb3569828cb4fc804b8bc67b3cfaf2b37bc0"
  },
  {
    "id": "e2fb4ca5-455b-476d-970d-5c7d79d0f6a9",
    "org_name": "demo org",
    "org_description": "demo org is for demo",
    "org_logo": "https://public-dev.hkca-esg.com/org/demo_logo.png",
    "org_image": "https://public-dev.hkca-esg.com/org/demo_image.png",
    "org_type": "company",
    "email": "org@demo.com",
    "phone": "+48123456789",
    "status": "active",
    "login_id": "org@demo.com",
    "did": "did:weid:1:0x1bf818509c49cd65b29b8118ff2f5997dcdae3a9",
    "contract_address": "0xbaac830f8b3b5bcf6421a6bf9d5bc15faef46a66"
  },
  {
    "id": "f6a56ad3-d4a3-4577-8227-66f58c940616",
    "org_name": "Hip Hing Construction Co. Ltd.",
    "org_logo": "https://www.hiphing.com.hk/images/logo.svg",
    "org_type": "company",
    "email": "admin@hiphing.com.hk",
    "status": "active",
    "login_id": "admin@hiphing.com.hk",
    "did": "did:weid:1:0x29c8f49258c950dc50bd8d4e147c20b7e26329bd",
    "contract_address": "0xb16af81de8845754f8e130e005e39edfb4f8617c"
  }
]

const UserRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { email, accessToken, registrationError } = useSelector(state => ({
    email: state.Login.email,
    accessToken: state.Login.accessToken,
    registrationError: state.Account.registrationError
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
