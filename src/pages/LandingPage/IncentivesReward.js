import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';


const IncentivesReward = () => {
    return (
        <React.Fragment>
            <section className="section bg-light" id="marketplace">
                <Container className='esg-container'>
                    <Row className="justify-content-center">
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-semibold lh-base">Incentives & Reward</h2>
                        </div>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col className='text-center' lg={8}>
                            <h3 className="mb-3 fw-semibold lh-base">Financial Incentives</h3>
                        </Col>

                        <Col className='text-center' lg={4}>
                            <h3 className="mb-3 fw-semibold lh-base">Individual Reward</h3>
                        </Col>
                    </Row>

                    <Row className="g-4">

                        <Col lg={4} className='incentives-reward-card'>
                            <div className="card explore-box card-animate">

                                <div className="card-body">
                                    <h5 className='link-color'> Joining Incentive</h5>
                                    <p className='text-justify'>Financial Incentives will be given to encourage the corporates which participate in this scheme and utilizes the ESG Recognition Scheme Platform.</p>
                                    <p className='text-justify'>The amount of joining incentive for each member is <span className='fw-bold'>HKD10,000</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className='incentives-reward-card'>
                            <div className="card explore-box card-animate">

                                <div className="card-body">
                                    <h5 className='link-color'>Innovation & Technology Subsidy</h5>
                                    <p className='text-justify' >To accelerate technology adoption, subsidy can be offered as reimbursement of the cost of purchasing technologies for the collection of ESG data of construction site.</p>
                                    <p className='text-justify'>The maximum amount of innovation and technology subsidy for each member is <span className='fw-bold'>HKD50,000</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className='incentives-reward-card'>
                            <div className="card explore-box card-animate">

                                <div className="card-body">
                                    <h5 className='link-color'>Gift Redemption</h5>
                                    <p className='text-justify'>To encourage staff at different position to take part in ESG actions, over HKD 1,000,000 worth of gifts will be offered by HKCA for the members’ workers and employees to redeem via ESG BUILD FUN App.</p>
                                    <p className='text-justify'>The amount of gift redemption for each member is <span className='fw-bold'>HKD10,000 to HKD20,000</span></p>
                                </div>
                            </div>


                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default IncentivesReward;