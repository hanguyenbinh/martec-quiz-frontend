import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

//import images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ProfileDropdown = () => {
    const history = useHistory();

    //Dropdown Toggle
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };
    const logout = () => {
        const authResponse = JSON.parse(localStorage.getItem('authResponse'))
        window.FB.logout(function (response) {
            console.log('logout', response)
            localStorage.clear();
            history.push('/home')
        });
    }
    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="ms-sm-3 header-item topbar-user">
                <DropdownToggle tag="button" type="button" className="btn shadow-none">
                    <span className="d-flex align-items-center">
                        Logout
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem onClick={logout}><i
                        className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle" data-key="t-logout">Logout</span></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;