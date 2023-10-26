import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row, UncontrolledCarousel } from 'reactstrap';

import img from 'src/assets/images/modal-bg.png'

const BreadCrumb = ({ title, pageTitle, carousel = null }) => {
    const [currentItem, setCurrentItem] = useState(0);
    setTimeout(() => {
        if (carousel) {
            let next = currentItem + 1;
            if (next >= carousel.length) {
                next = 0;
            }
            setCurrentItem(next)
        }
    }, 500);
    useEffect(() => {

    }, [currentItem])
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">{title}</h4>


                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="#">{pageTitle}</Link></li>
                                <li className="breadcrumb-item active">{title}</li>
                            </ol>
                        </div>

                    </div>
                </Col>
            </Row>
        </React.Fragment >
    );
};

export default BreadCrumb;