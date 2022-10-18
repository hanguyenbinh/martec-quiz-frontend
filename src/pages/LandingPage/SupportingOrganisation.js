import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import image1 from 'src/assets/images/landing/Joinus.png'
import image2 from 'src/assets/images/landing/step2.png'
import image3 from 'src/assets/images/landing/step3.png'
import image4 from 'src/assets/images/landing/step4.png'


const SupportingOrganisation = () => {

    return (
        <React.Fragment>
            <section className="section bg-light" id="marketplace">
                <Container>
                    <Row className="justify-content-center">
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-semibold lh-base">Supporting Organisation</h2>
                        </div>
                    </Row>

                    <Row className="justify-content-center">
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-semibold lh-base">Disclaimer</h2>
                        </div>
                    </Row>


                    <Row className='justify-content-center'>
                        <p>Please carefully read the following terms and conditions. By using this website, you agree to abide by the terms and conditions set out below.</p>
                        <p>The materials contained in the ESG Recognition Scheme website have been developed solely for the purpose of providing general information about the operations, services and activities of the ESG Recognition Scheme. Whilst every effort has been made to ensure the accuracy of the information provided in this website, The Hong Kong Construction Association, Limited (HKCA), under no circumstances, accepts no responsibility or liability for any loss or damage caused, whether occasioned by negligence, misstatement, omissions or inaccuracies in this website. The information presented is subject to change at any time and without notice.</p>
                        <p>You agree and understand that the information, materials, services and software available in the ESG Recognition Scheme website are provided on an “as is", “as available" basis without warranties of any kind (express or implied). In particular, no warranty or representation regarding accuracy, timeliness, reliability, completeness, freedom from computer virus, security, non-infringement or fitness for a particular purpose is given in conjunction with such information, materials, services or software. To the extent permitted by law, HKCA disclaims all warranties (express or implied) of satisfactory quality, fitness for a particular purpose or non-infringement. All such implied terms and warranties are hereby excluded.</p>
                        <p>This website may contain links to third party websites which are not under the control of HKCA. HKCA does not indicate expressly or impliedly any endorsement, approval, recommendation or preference of or for those third party websites or the products and services provided on them. Any use of or access to those third party websites or their products and services is solely at your own risk.</p>
                        <p>In the event that there is any inconsistency between the English and Chinese version of this Privacy Policy Statement, the English version shall prevail.</p>

                    </Row>

                    <Row className="justify-content-center">
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-semibold lh-base">Provision of Data</h2>
                        </div>
                    </Row>

                    <Row className="justify-content-center">
                        <p>ESG Recognition Scheme website uses SSL/TLS protocol to encrypt data during network transmission to protect your data. All data you provide to the HKCA via this website are secured, and access to them is restricted to authorised personnel only. HKCA will not disclose your data to any third parties without your prior consent.</p>
                        <p>Please note that submission of information over the internet may be subject to interruption, transmission blackout, delayed transmission due to internet traffic, or incorrect data transmission due to the public nature of the Internet. HKCA cannot assume responsibility for malfunctions in communications facilities not under our control that may affect the accuracy or timeliness of messages you send.</p>
                        <p></p>
                    </Row>

                </Container>
            </section>
        </React.Fragment>
    );
};

export default SupportingOrganisation;