import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <a href="https://github.com/Bakar12" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/abubakar-mukadam-386641215/" target="_blank"
                   rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </div>
            <p className="footer__text">© 2024 Abubakar Mukadam. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
