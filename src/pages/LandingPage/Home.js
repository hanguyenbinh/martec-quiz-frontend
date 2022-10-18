import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import video from '../../assets/videos/banner.mp4'

const Home = () => {
    return (
        <React.Fragment>
            <section className="section nft-hero" id="hero">
                <video autoPlay loop muted
                >
                    <source src={video} type="video/mp4" />
                </video>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={10}>
                            <div className="text-center">
                                <h1 className="display-4 fw-medium mb-4 lh-base text-success">ESG Environment Social Governance</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Home;