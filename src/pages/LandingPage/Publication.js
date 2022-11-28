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
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/Civil.pdf',
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
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/Foundation.pdf',
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
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/E_M.pdf',
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
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/Building.pdf',
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
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/A%26A+Demiolition-MllPY.pdf',
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
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/HKCA+%E5%B7%A5%E5%9C%B0%E5%AE%89%E5%85%A8%E5%BA%A7%E8%AB%87%E5%9F%B9%E8%A8%93%E5%A5%97%E4%BB%B6_Full+Version-30w0a.pdf',
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
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/20190813_v8-1-full-YppIK.pdf',
                },
                {
                    name: 'cn',
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/20190813_v8_full_chinese-6UUHU.pdf',
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
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/ConstructionInnovativeEnvironmentalPractices%28EN%29-7b4rQ-eRkfX.pdf',
                },
                {
                    name: 'cn',
                    url: 'https://s3.ap-southeast-1.amazonaws.com/hkca.com.hk/upload/doc/publication/ConstructionInnovativeEnvironmentalPractices%28CH%29-NA0Th.pdf',
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