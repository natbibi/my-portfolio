import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './style.css'

const Nav = styled.nav`
    @media (max-width: 800px) {        
        margin: 0;
        flex-flow: column nowrap;
        background: url(https://wallpapercave.com/wp/cAmaUYh.jpg);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 150px;
        transition: transform 0.3s ease-in-out;
    }
`;

const Header = ({ open }) => {
    return (
        <Nav role="navigation" open={open}>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </Nav>
    );
}

export default Header;
