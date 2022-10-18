import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from './AboutUs';
import Features from './Features';
import Trending from "./Trending ";
import DiscoverItems from "./DiscoverItems";
import TopCreator from "./TopCreator ";
import CTA from './CTA';
import MajorIndicators from './MajorIndicators';
import IncentivesReward from './IncentivesReward';
import HowToStart from './HowToStart';
import Footer from 'src/Layouts/Footer';
import SupportingOrganisation from './SupportingOrganisation';

const index = () => {
    document.title = " Landing | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="layout-wrapper landing">
                <Navbar />
                <Home />
                <AboutUs />
                <MajorIndicators />
                <IncentivesReward />
                <HowToStart />
                {/* <Features />
                <Trending />
                <DiscoverItems />
                <TopCreator />
                <CTA /> */}
                <SupportingOrganisation></SupportingOrganisation>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default index;