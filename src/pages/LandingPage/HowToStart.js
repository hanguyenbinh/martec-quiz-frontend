import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import image1 from 'src/assets/images/landing/Joinus.png'
import image2 from 'src/assets/images/landing/step2.png'
import image3 from 'src/assets/images/landing/step3.png'
import image4 from 'src/assets/images/landing/step4.png'


const HowToStart = () => {

    return (
        <React.Fragment>
            <section className="section bg-light" id="marketplace">
                <Container>
                    <Row className="justify-content-center">
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-semibold lh-base">How To Start</h2>
                        </div>
                    </Row>


                    <Row className='justify-content-center'>
                        <h3 className="mb-3 fw-semibold lh-base step-name">Step 1</h3>
                        <h3 className="mb-3 fw-semibold lh-base">Join the Scheme</h3>
                    </Row>

                    <Row>
                        <Col className='how-to-start-step-1 big-text' lg={6}>
                            <p>Submit a completed the application form to HKCA secretariat</p>
                            <p>The user account of the ESG Recognition Scheme Platform will be given to the eligible applicants</p>
                            <Button className='button-big-text bottom-button' color='warning'>Join Now</Button>
                        </Col>
                        <Col lg={6}>
                            <img src={image1} alt="" className="card-img-top explore-img how-to-img" />
                        </Col>
                    </Row>


                    <Row className='justify-content-center'>
                        <h3 className="mb-3 fw-semibold lh-base step-name">Step 2</h3>
                        <h3 className="mb-3 fw-semibold lh-base">Provide ESG Data</h3>
                    </Row>
                    <Row>
                        <Col className='how-to-start-step-2 big-text' lg={6}>
                            <p>Provide ESG information via the ESG Recognition Scheme Platform to generate the dashboard</p>
                            <Button className='button-big-text bottom-button' color='success'>Submit Data</Button>
                        </Col>
                        <Col lg={6}>
                            <img src={image2} alt="" className="card-img-top explore-img how-to-img" />
                        </Col>
                    </Row>


                    <Row className='justify-content-center'>
                        <h3 className="mb-3 fw-semibold lh-base step-name">Step 3</h3>
                        <h3 className="mb-3 fw-semibold lh-base">Use Dashboard Tool to Review Performance</h3>
                    </Row>
                    <Row>
                        <Col className='how-to-start-step-3 big-text' lg={6}>
                            <p>Understand areas of improvement by evaluating your ESG result against the relevant benchmark</p>
                            <Button className='button-big-text bottom-button' color='primary'>See the DashBoard</Button>
                        </Col>
                        <Col lg={6}>
                            <img src={image3} alt="" className="card-img-top explore-img how-to-img" />
                        </Col>
                    </Row>



                    <Row className='justify-content-center'>
                        <h3 className="mb-3 fw-semibold lh-base step-name">Step 4</h3>
                        <h3 className="mb-3 fw-semibold lh-base">Download the ESG BUILD FUN App</h3>
                    </Row>
                    <Row>
                        <Col className='how-to-start-step-4 big-text' lg={6}>
                            <p>Create ESG promotion events for your staff and workers to join via the ESG BUILD FUN App</p>

                            <p>ESG Points and Coins will be granted to the participants </p>

                            <p>HKCA will offer gifts to the events creators to incentivize their employees</p>

                            <Button className='button-big-text bottom-button' color='danger'>Create an Event</Button>
                        </Col>
                        <Col lg={6}>
                            <img src={image4} alt="" className="card-img-top explore-img how-to-img" />
                        </Col>
                    </Row>

                </Container>
            </section>
        </React.Fragment>
    );
};

export default HowToStart;