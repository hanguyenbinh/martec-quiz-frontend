import React, { useState } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { majorIndicators } from "../../common/data"

const MajorIndicators = () => {
    const [nav, setNav] = useState("All");


    return (
        <React.Fragment>
            <section className="section bg-light" id="marketplace">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h2 className="mb-3 fw-semibold lh-base">ESG Recognition Scheme</h2>
                                <p className="text-muted mb-4">Accurate and timely data will substantially help enterprise review ESG performances, enabling efficient strategy for targeted improvements. To assist local construction contractors in fulfilling sustainability objectives, HKCA engaged various industry stakeholders and the City University of Hong Kong to select, prioritize and incorporate multiple ESG performance indicators of major local and international standards into the ESG Recognition Scheme. </p>
                                <p className="text-muted mb-4">The early phase of the implementation of the ESG Recognition Scheme allows participants to get started easily and quickly with ESG. The selected indicators of the platform are not difficult to master or evaluate. Meanwhile, these indicators are closely related to their businesses and construction activities.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <div className="mb-5">
                            <h2 className="mb-3 fw-semibold lh-base">ESG Recognition Scheme</h2>
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
                                        <h5 className="mb-1"><Link to="/apps-nft-item-details">{item.title}</Link></h5>
                                        {item.textItems.map((textItem, key) => (
                                            <p key={'textItem' + key}>{textItem}</p>
                                        ))}
                                    </div>
                                    {/* <div className="card-footer border-top border-top-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 fs-14">
                                                <i className="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span className="fw-medium">{item.highest}</span>
                                            </div>
                                            <h5 className="flex-shrink-0 fs-14 text-primary mb-0">{item.price}</h5>
                                        </div>
                                    </div> */}
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