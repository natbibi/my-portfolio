import React from 'react';
import { NavLink } from 'react-router-dom';

import { BackButton } from '../../components';
import './style.css'

const Header = () => {
    return (
        <nav role="navigation">
            {/* <BackButton /> */}
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/about" activeClassName="current">About</NavLink>
            <NavLink to="/projects" activeClassName="current">Projects</NavLink>
            <NavLink to="/contact" activeClassName="current">Contact</NavLink>
        </nav>
    );
}

export default Header;
