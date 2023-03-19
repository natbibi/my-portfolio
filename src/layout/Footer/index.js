import React from 'react';
import './style.css';

const Footer = () => {

const today = new Date();

return (
<footer id="footer">&copy; NP {today.getFullYear()}</footer>
)

}

export default Footer;