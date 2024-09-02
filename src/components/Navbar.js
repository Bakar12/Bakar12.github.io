import React, {useState} from 'react';
import '../styles/nav.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <a href="#home" className="navbar__logo">Abubakar Mukadams Portfolio</a>
            <button className="navbar__toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
                <a href="#about">About</a>
                <a href="#myprojects">Portfolio</a>
                <a href="#modules">Modules</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
