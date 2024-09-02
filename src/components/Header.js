import React from 'react';
import Typical from 'react-typical';
import '../styles/Header.css';

const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h1>
                    <Typical
                        steps={['Abubakar Mukadam', 100]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </h1>
                <h5 className="text-light">
                    <Typical
                        steps={['Computer Science Graduate', 10]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </h5>
                <div className="me"></div>
                <a href="#contacts" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;