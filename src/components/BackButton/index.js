import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    return <button id="back-button" onClick={history.goBack}><i className="fas fa-chevron-left"></i></button>
}

export default BackButton
