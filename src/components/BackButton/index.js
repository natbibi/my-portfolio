import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    return <span id="back-button" onClick={history.goBack}><i className="fas fa-chevron-left"></i></span>
}

export default BackButton
