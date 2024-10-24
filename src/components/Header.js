import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing menu and close icons from react-icons
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        // Toggle 'no-scroll' class on body when the menu is open/closed
        if (!isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        document.body.classList.remove('no-scroll'); // Ensure scrolling is enabled when a link is clicked
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
                        <Link to="/Home" onClick={handleLinkClick}><p className='HeaderP'>Home</p></Link> 
                        <Link to="/ImageGallery" onClick={handleLinkClick}><p className='HeaderP'>Gallery</p></Link> 
                        <Link to="/YoutubeVideos" onClick={handleLinkClick}><p className='HeaderP'>YouTube</p></Link> 
                        <Link to="/FAQs" onClick={handleLinkClick}><p className='HeaderP'>FAQs</p></Link> 
                        <Link to="/BibleQuiz" onClick={handleLinkClick}><p className='HeaderP'>Bible Quiz</p></Link> 
                        <Link to="/PdfMessages" onClick={handleLinkClick}><p className='HeaderP'>PDF Messages</p></Link>
                        <Link to="/ContactUs" onClick={handleLinkClick}><p className='HeaderP'>Contact Us</p></Link> 
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
