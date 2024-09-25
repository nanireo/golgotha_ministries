import React from 'react';

function Header() {
    return (
        <>
            <div className="logo-container">
                <div className="left-section">
                    <div className="logo">
                        <img src="logo/GM_Logo.png" alt="Logo" />
                    </div>
                    <div className="college-info">
                        <h1>Golgotha Ministries</h1>
                    </div>
                </div>
            </div>

            <header className="nav-links">
                <nav>
                    <ul>
                        <li><a href="./Home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Gallery</a></li>
                        <li><a href="#contact">Our Branches</a></li>
                        <li><a href="#departments">Vision</a></li>
                        <li><a href="#academics">Downloads</a></li>
                        <li><a href="./ContactUs">Contact Us</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* Your main content goes here */}
            </main>
        </>
    );
}

export default Header;
