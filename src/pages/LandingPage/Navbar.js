import React, { useState, useEffect } from 'react';
import { Collapse, Container, NavbarToggler, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'; import Scrollspy from "react-scrollspy";


//import Images
import logodark from "../../assets/images/HKCA_Logo.png";
import logolight from "src/assets/images/ESG_BUILD_FUN_logo_B2.png"

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
                    <div>
                        <Link className="navbar-brand" to="/home">
                            <img src={logodark} className="card-logo" alt="logo" height="80" />
                        </Link>
                        <img src={logolight} className="card-logo" alt="logo" height="120" />

                    </div>

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