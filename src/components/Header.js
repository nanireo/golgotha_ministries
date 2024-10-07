import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing menu and close icons from react-icons
import {BrowserRouter, Routes, Route,Link } from 'react-router-dom'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Toggle between menu and close icons */}
                </div>
            </div>

            <header className={`nav-links ${isOpen ? 'open' : ''}`}>
                <nav>
                    <ul>
                    <Link to = "/Home"><p class='HeaderP'>Home</p></Link> 
                    <Link to = "#about"><p class='HeaderP'>About</p></Link> 
                    <Link to = "#services"><p class='HeaderP'>Gallery</p></Link> 
                    <Link to = "#contact"><p class='HeaderP'>Our Branches</p></Link> 
                    <Link to = "#departments"><p class='HeaderP'>Vision</p></Link> 
                    <Link to = "#academics"><p class='HeaderP'>Downloads</p></Link> 
                    <Link to = "/ContactUs"><p class='HeaderP'>Contact Us</p></Link> 

                        {/* <li><a href="/Home">Home</a></li> */}
                        {/* <li><a href="#about">About</a></li>
                        <li><a href="#services">Gallery</a></li>
                        <li><a href="#contact">Our Branches</a></li>
                        <li><a href="#departments">Vision</a></li>
                        <li><a href="#academics">Downloads</a></li> */}

                        {/* <li><a href="/ContactUs">Contact Us</a></li> */}
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
