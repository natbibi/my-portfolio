import React from 'react';
import { NavLink } from 'react-router-dom';

import { BackButton } from '../../components';
import './style.css'

const Header = () => {
    return (
        <nav>
            <BackButton />
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/projects" activeClassName="current">Projects</NavLink>
            <NavLink to="/contact" activeClassName="current">Contact</NavLink>
        </nav>
    );
}

export default Header;