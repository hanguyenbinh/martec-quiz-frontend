import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import image1 from 'src/assets/images/landing/Joinus.png'
import image2 from 'src/assets/images/landing/step2.png'
import image3 from 'src/assets/images/landing/step3.png'
import image4 from 'src/assets/images/landing/step4.png'


const JoinUs = () => {

    return (
        <React.Fragment>
            <section className="section bg-light" id="marketplace">
                <Container>
                    <Row className="justify-content-center">
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-semibold lh-base">Join Us</h2>
                        </div>
                    </Row>

                    <Row className="justify-content-center">
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-semibold lh-base">Eligibility</h2>
                        </div>
                    </Row>


                    <Row className='justify-content-center'>
                        <p>The ESG Recognition Scheme is now open for application. All HKCA members are welcome to participate.</p>
                    </Row>

                    <Row className="justify-content-center">
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-semibold lh-base">Application Form & Guideline </h2>
                        </div>
                    </Row>

                    <Row className="justify-content-center">
                        <p>Guide to Application for ESG Recognition Scheme (Download PDF - TBC)</p>
                        <p>Application Form (Download PDF - TBC)</p>
                        <p></p>
                    </Row>

                </Container>
            </section>
        </React.Fragment>
    );
};

export default JoinUs;