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
                <Container>
                    <Link className="navbar-brand" to="/home">
                        <img src={logodark} className="card-logo" alt="logo" height="80" />
                    </Link>
                    <img src={logolight} className="card-logo" alt="logo" height="150" />

                    {/* <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </NavbarToggler> */}
                    <div className="member-login-button me-0">
                        <Link to="/login" className="btn btn-success">Member Login </Link>
                    </div>

                    <Collapse
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {/* <Scrollspy
                            offset={-18}
                            items={[
                                "hero",
                                "wallet",
                                "marketplace",
                                "categories",
                                "creators",
                            ]}
                            currentClassName="active"
                            className="navbar-nav mx-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className="nav-item">
                                <NavLink className="fs-15" href="#hero">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-15" href="#wallet">Wallet</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-15" href="#marketplace">Marketplace</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-15" href="#categories">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-15" href="#creators">Creators</NavLink>
                            </li>
                        </Scrollspy> */}


                    </Collapse>
                </Container>
            </nav>
            <div className="bg-overlay bg-overlay-pattern"></div>
        </React.Fragment>
    );
}

export default Navbar;