import React from 'react';
import {Link} from 'react-router-dom';

import NavList from './NavList';
import logo from '../../assets/images/logo.png';

import './NavBar.scss'

const NavBar = () => {
    return(
        <div className="navbar">
            <Link
                to='/'
                style={{  textDecoration: "none" }}
            >
            <img className="logo" src={logo} alt="logoimage"/>
            </Link>
            <NavList></NavList>
            <Link
                className="login"
                to='/auth'
                style={{  textDecoration: "none" }}
            >
                Login
            </Link>
        </div>
    )
}

export default NavBar;