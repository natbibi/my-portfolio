import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return <button id="back-button" onClick={navigate.goBack}><i className="fas fa-chevron-left"></i></button>
}

export default BackButton
