import React from 'react';
import { Container, Row } from 'reactstrap';
import PublicationItem from './components/PublicationItem';
import classes from "./components/PublicationItem.module.scss"


const Publication = () => {
    const publicationData = [
        {
            src: '',
            month: 'Nov',
            year: '2022',
            title: 'Construction Site Environment Manual for Public Works - Civil',
            actions: [
                {
                    name: 'en',
                    url: '',
                },
                {
                    name: 'cn',
                    url: '',
                }
            ]
        },
        {
            src: '',
            month: 'Nov', year: '2022',
            title: 'Construction Site Environment Manual for Public Works - Foundation',
            actions: [
                {
                    name: 'en',
                    url: '',
                },
                {
                    name: 'cn',
                    url: '',
                }
            ]
        },
        {
            src: '',
            month: 'Nov', year: '2022',
            title: 'Construction Site Environment Manual for Public Works - Electrical & Mechanical',
            actions: [
                {
                    name: 'en',
                    url: '',
                },
                {
                    name: 'cn',
                    url: '',
                }
            ]
        },
        {
            src: '',
            month: 'Nov', year: '2022',
            title: 'Construction Site Environment Manual for Public Works - Building',
            actions: [
                {
                    name: 'en',
                    url: '',
                },
                {
                    name: 'cn',
                    url: '',
                }
            ]
        },
        {
            src: '',
            month: 'Nov', year: '2022',
            title: 'Construction Site Environment Manual for Public Works - Alteration & Additions/Demolition',
            actions: [
                {
                    name: 'en',
                    url: '',
                },
                {
                    name: 'cn',
                    url: '',
                }
            ]
        },
        {
            src: '',
            month: 'Nov', year: '2022',
            title: 'Safety Tool Box Training Kit (Chinese Version Only)',
            actions: [
                {
                    name: 'en',
                    url: '',
                },
                {
                    name: 'cn',
                    url: '',
                }
            ]
        },
        {
            src: '',
            month: 'Nov', year: '2022',
            title: 'Environmental Toolbox Training Kit',
            actions: [
                {
                    name: 'en',
                    url: '',
                },
                {
                    name: 'cn',
                    url: '',
                }
            ]
        },
        {
            src: '',
            month: 'Nov', year: '2022',
            title: 'Construction Innovative Environmental Pratices',
            actions: [
                {
                    name: 'en',
                    url: '',
                },
                {
                    name: 'cn',
                    url: '',
                }
            ]
        },
    ]

    return (
        <React.Fragment>
            <section className="section bg-light" id="marketplace">
                <Container>
                    <Row className="justify-content-center">
                        <div className="text-center mb-1">
                            <h2 className="mb-1 fw-semibold lh-base">Publications</h2>
                        </div>
                    </Row>
                    <div className={classes.publicationItems}>
                        {publicationData.map((item, index) => {
                            return <PublicationItem key={index}
                                src={item.src}
                                title={item.title}
                                month={item.month}
                                year={item.year}
                                actions={item.actions}
                                bgColor={index % 2 === 1 ? 'whitesmoke' : 'white'}
                            ></PublicationItem>
                        })}

                    </div>


                </Container>
            </section>
        </React.Fragment>
    );
};

export default Publication;