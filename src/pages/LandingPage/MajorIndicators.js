import React, { useState } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { majorIndicators } from "../../common/data"
import { landingPage } from 'src/config';

const MajorIndicators = () => {
    const [nav, setNav] = useState("All");


    return (
        <React.Fragment>
            <section className="section bg-light" id="marketplace">
                <Container className='esg-container'>
                    <iframe src={landingPage.video1}
                        title='video01'
                        style={{
                            // position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "800px"
                        }}
                        frameBorder="0"
                    />
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center mb-5">
                                <h2 className="mb-3 fw-semibold lh-base">ESG Recognition Scheme Platform</h2>
                                <p className="text-muted mb-4 text-justify">Accurate and timely data will substantially help enterprise review ESG performances, enabling efficient strategy for targeted improvements. To assist local construction contractors in fulfilling sustainability objectives, HKCA engaged various industry stakeholders and professional to select, prioritize and incorporate multiple ESG performance indicators of major local and international standards into the ESG Recognition Scheme Platform. </p>
                                <p className="text-muted mb-4 text-justify">The early phase of the implementation of the ESG Recognition Scheme Platform allows participants to get started easily and quickly with ESG. The selected indicators of the platform are not difficult to master or evaluate. Meanwhile, these indicators are closely related to their businesses and construction activities.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <div className="mb-3">
                            <h3 className="mb-3 fw-semibold lh-base">Major Indicators of the Platform</h3>
                        </div>
                    </Row>
                    <Row>
                        {(majorIndicators.filter(({ categories }) => nav === categories || nav === "All")).map((item, key) => (
                            <Col key={key} lg={4} className={"product-item " + item.isClass}>
                                <div className="card explore-box card-animate">
                                    <div className="explore-place-bid-img">
                                        <img src={item.img} alt="" className="card-img-top explore-img" />
                                        <div className="bg-overlay"></div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="mb-4 fw-bold"><Link to="/apps-nft-item-details">{item.title}</Link></h4>
                                        {item.textItems.map((textItem, key) => (
                                            <p key={'textItem' + key}>{textItem}</p>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default MajorIndicators;