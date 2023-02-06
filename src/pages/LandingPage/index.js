import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from './AboutUs';
import MajorIndicators from './MajorIndicators';
import IncentivesReward from './IncentivesReward';
import HowToStart from './HowToStart';
import Footer from 'src/Layouts/Footer';
import SupportingOrganisation from './SupportingOrganisation';
import Publication from './Publication';
import { useEffect } from 'react';

const LandingPage = (props) => {
    document.title = "ESG Recognition Scheme Platform Platform | HKCA";

    useEffect(() => {

        const query = new URLSearchParams(props.location.search);
        const view = query.get('view')

        if (view) {
            window.location.href = '#'
            window.location.href = '#' + view;
        }
    }, [])

    return (
        <React.Fragment>
            <div className="layout-wrapper landing">
                <Navbar />
                <Home />
                <AboutUs />
                <MajorIndicators />
                <IncentivesReward />
                <HowToStart />
                <Publication></Publication>
                <SupportingOrganisation></SupportingOrganisation>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default LandingPage;