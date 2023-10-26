import React from 'react';
import { useEffect } from 'react';
import { Navbar } from 'reactstrap';
import FacebookLoginButton from 'src/Components/Common/FacebookLoginButton/FacebookLoginButton';
import Home from './Home';

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
                <FacebookLoginButton></FacebookLoginButton>
            </div>
        </React.Fragment>
    );
};

export default LandingPage;