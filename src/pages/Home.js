import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className="homepage">
            <header className="header">
                <div className="logo">[Logo]</div>
                <div className="menu-icon">☰</div>
            </header>
            <main className="main-content">
                <div className="intro">
                    <h1>Hi There! I'm DigiKite</h1>
                    <h2>A Frontend Engineer. I Help Startups Launch And Grow Their Products.</h2>
                    <p>Over 5+ years of professional experience working with several programming tools to deliver
                        quality results to clients. I have extensive knowledge in frontend engineering, software
                        testing, and web development.</p>
                </div>
                <div className="illustration">
                    {/* Add your illustration here */}
                </div>
            </main>
        </div>
    );
}

export default Home;