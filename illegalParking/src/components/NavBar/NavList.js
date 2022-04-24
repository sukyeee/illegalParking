import React from "react";
import Icons from "../../assets/images/Icons";
import { Link } from "react-router-dom";

import './NavList.scss'

const NavItem = ({ url, title }) => {
    return (
        <Link
            className="nav-link"
            to={`/${url}`}
            style={{  textDecoration: "none" }}
        >
            <Icons>{url}</Icons>
            <div className="nav-title">{title}</div>
        </Link>
    );
};

const NavList = () => {
    const navList = [
        {
            id: 1,
            url: "location",
            title: "불법주차구역",
        },
        {
            id: 2,
            url: "parking",
            title: "공용주차장",
            
        },
        {
            id: 3,
            url: "rule",
            title: "불법주차규정",
        },
    ];
    return (
            <ul className="nav-list">
                {navList.map(({ id, url, title }) => (
                    <li key={id} className="nav-item">
                        <NavItem url={url} title={title}></NavItem>
                    </li>
                ))}
            </ul>
    );
};

export default NavList;
