import React from 'react';
import { Container, Row } from 'reactstrap';



const SupportingOrganisation = () => {

    return (
        <React.Fragment>
            <section className="section bg-light" id="marketplace">
                <Container className='esg-container'>
                    <Row className="justify-content-center">
                        <div className="text-start mb-1">
                            <h4 className="mb-1 fw-semibold lh-base">Disclaimer</h4>
                        </div>
                    </Row>


                    <Row className='justify-content-center'>
                        <p className='text-justify'>Please carefully read the following terms and conditions. By using this website, you agree to abide by the terms and conditions set out below.</p>
                        <p className='text-justify'>The materials contained in the ESG Recognition Scheme website have been developed solely for the purpose of providing general information about the operations, services and activities of the ESG Recognition Scheme. Whilst every effort has been made to ensure the accuracy of the information provided in this website, The Hong Kong Construction Association, Limited (HKCA), under no circumstances, accepts no responsibility or liability for any loss or damage caused, whether occasioned by negligence, misstatement, omissions or inaccuracies in this website. The information presented is subject to change at any time and without notice.</p>
                        <p className='text-justify'>You agree and understand that the information, materials, services and software available in the ESG Recognition Scheme website are provided on an “as is", “as available" basis without warranties of any kind (express or implied). In particular, no warranty or representation regarding accuracy, timeliness, reliability, completeness, freedom from computer virus, security, non-infringement or fitness for a particular purpose is given in conjunction with such information, materials, services or software. To the extent permitted by law, HKCA disclaims all warranties (express or implied) of satisfactory quality, fitness for a particular purpose or non-infringement. All such implied terms and warranties are hereby excluded.</p>
                        <p className='text-justify'>This website may contain links to third party websites which are not under the control of HKCA. HKCA does not indicate expressly or impliedly any endorsement, approval, recommendation or preference of or for those third party websites or the products and services provided on them. Any use of or access to those third party websites or their products and services is solely at your own risk.</p>
                        <p className='text-justify'>In the event that there is any inconsistency between the English and Chinese version of this Privacy Policy Statement, the English version shall prevail.</p>

                    </Row>

                    <Row className="justify-content-center">
                        <div className="text-start mb-1">
                            <h4 className="mb-1 fw-semibold lh-base">Provision of Data</h4>
                        </div>
                    </Row>

                    <Row className="justify-content-center">
                        <p className='text-justify'>ESG Recognition Scheme website uses SSL/TLS protocol to encrypt data during network transmission to protect your data. All data you provide to the HKCA via this website are secured, and access to them is restricted to authorised personnel only. HKCA will not disclose your data to any third parties without your prior consent.</p>
                        <p className='text-justify'>Please note that submission of information over the internet may be subject to interruption, transmission blackout, delayed transmission due to internet traffic, or incorrect data transmission due to the public nature of the Internet. HKCA cannot assume responsibility for malfunctions in communications facilities not under our control that may affect the accuracy or timeliness of messages you send.</p>
                    </Row>

                </Container>
            </section>
        </React.Fragment>
    );
};

export default SupportingOrganisation;