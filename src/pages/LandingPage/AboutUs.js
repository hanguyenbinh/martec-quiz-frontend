import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connectData } from "../../common/data"

const AboutUs = () => {

    return (
        <React.Fragment>
            <section className="section aboutus" id="wallet">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-1">
                                <h2 className="mb-1 fw-semibold lh-base">About</h2>
                                <h3 className="text-muted fw-semibold lh-base">ESG Recognition Scheme Platform</h3>
                                <p className="text-muted ">
                                    Sustainable development is becoming critical for all corporates across all industries. There has been a global trend of growing awareness about the Environmental, Social, and Governance (ESG) standards and has increasingly gone mainstream.
                                </p>
                                <p className="text-muted ">To support and encourage the construction industries take positive initiatives in the area of ESG, the Hong Kong Construction Association (HKCA) allocated HKD 10 million to establish the ESG Recognition Scheme Platform. The scheme including: </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {connectData.map((item, key) => (
                            <Col key={key} lg={3}>
                                <Card className="text-center border">
                                    <CardBody className="py-5 px-4 about-card">
                                        <h4 className='about-card-title'> {item.title}</h4>
                                        <img src={item.img} alt="" height="110" className="mb-3 pb-2" />
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default AboutUs;