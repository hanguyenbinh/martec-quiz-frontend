import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connectData } from "../../common/data"



const AboutUs = () => {

    return (
        <React.Fragment>
            <section className="section aboutus" id="wallet">
                <Container className='esg-container'>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center mb-1">
                                <h1 className="fw-semibold lh-base">ESG Recognition Scheme</h1>
                            </div>
                            <div className="text-justify mb-1">
                                <h3 className="mb-3 fw-semibold lh-base">About</h3>
                                <p className="text-muted text-justify">
                                    Sustainable development is becoming critical for all corporates across all industries. There has been a global trend of growing awareness about the Environmental, Social, and Governance (ESG) standards and has increasingly gone mainstream.
                                </p>
                                <p className="text-muted text-justify">To support and encourage the construction industries take positive initiatives in the area of ESG, the Hong Kong Construction Association (HKCA) allocated HKD 10 million to establish the ESG Recognition Scheme Platform. The scheme including: </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {connectData.map((item, key) => (
                            <Col key={key} lg={3}>
                                <Card className="text-center border">
                                    <CardBody className="py-3 px-1 about-card">
                                        <h5 className=''> {item.title}</h5>
                                        <img src={item.img} alt="" height="200" className="mb-1" />
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