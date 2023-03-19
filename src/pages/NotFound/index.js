import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className="intro-container">
                <h1>🧐 Oops!</h1>
                <h5>...can't find {navigate.location.pathname}!</h5>
            </header>
        </>
    )
}

export default NotFound;