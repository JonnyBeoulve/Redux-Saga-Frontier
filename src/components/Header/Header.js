import React from 'react';

import reduxSagaFrontierLogo from '../../assets/img/redux-saga-frontier-logo.png';
import linkedinLogo from '../../assets/img/linkedin-logo.png';
import githubLogo from '../../assets/img/github-logo.png';
import './Header.css';

const Header = () => {

    return (
        <header className="app-header">
            <div className="app-header-logo">
                <img src={reduxSagaFrontierLogo} className="app-header-link" alt="Redux Saga Frontier logo PNG" />
            </div>
            <div className="app-header-links">
                <a href="https://www.linkedin.com/in/jleack/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} className="app-header-link" alt="LinkedIn logo PNG" /></a>
                <a href="https://github.com/JonnyBeoulve/Redux-Saga-Frontier" target="_blank" rel="noopener noreferrer"><img src={githubLogo} className="app-header-link" alt="GitHub logo PNG" /></a>
            </div>
        </header>
    )
}

export default Header;