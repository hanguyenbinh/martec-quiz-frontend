import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");

    const toggle = () => setisOpenMenu(!isOpenMenu);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    function scrollNavigation() {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    }
    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing navbar-light fixed-top " + navClass} id="navbar">
                <Container className='esg-container'>
                    <div className="member-login-button me-0 justify-content-end">
                        <Link to="/login" className="btn btn-success">Member Login </Link>
                    </div>
                </Container>
            </nav>
            <div className="bg-overlay bg-overlay-pattern"></div>
        </React.Fragment>
    );
}

export default Navbar;