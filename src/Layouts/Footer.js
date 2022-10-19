import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import footer from "src/assets/images/landing/footer.png";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer pb-5 pt-1 position-relative">
                <Container>
                    <Row className='mb-5 mt-1'>
                        <h5>Contact Us</h5>
                        <div className="text-muted">
                            <ul className="list-unstyled ff-secondary footer-list">
                                <li>(852) 2572 4414</li>
                                <li>(852) 2572 7104</li>
                                <li>admin@hkca.com.hk</li>
                                <li>3/F, 180-182 Hennessy Road, Wanchai, Hong Kong</li>
                            </ul>
                        </div>
                    </Row>

                    <div className="copyright">
                        {new Date().getFullYear()} © The Hong Kong Construction Association, Limited. All Rights Reserved.
                    </div>
                </Container>
            </footer>
        </React.Fragment >
    );
};

export default Footer;