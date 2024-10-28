import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter alias
import './css/Header.css';
import './css/Banner.css';
import './css/Footer.css';
import './css/YoutubeVideos.css';
import './css/ContactUs.css';
import './css/Contactform.css';
import './css/BibleQuiz.css';
import './css/ImageGallery.css';
import './css/AboutUs.css';
import './css/PdfMessages.css';
import './css/FAQs.css';
import './css/WhatsappPopup.css';
import './css/InspirationalImage.css';
import './css/VerseSearch.css';
import './css/PastorsBio.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import BibleQuiz from './components/BibleQuiz';
import ImageGallery from './components/ImageGallery';
import PdfMessages from './components/PdfMessages';
import YoutubeVideos from './components/YoutubeVideos';
import FAQs from './components/FAQs';
import AboutUs from './components/AboutUs';
import WhatsappPopup from './components/WhatsappPopup';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Golgotha Ministries - Pastor B. N. Rathnam Testimony | Pastor Samuel Mories Bandela, Armoor Church</title>
                <meta name="description" content="Welcome to Golgotha Ministries. Discover the inspiring testimonies of Pastor B. N. Rathnam and Pastor Samuel Mories Bandela at Armoor Church. Join our Christian ministry and be part of our faith journey." />
                <meta name="keywords" content="Golgotha Ministries, Pastor B. N. Rathnam, Pastor Samuel Mories Bandela, Armoor Church, Christian Ministry, Church Website, Testimonies, Faith Journey" />
            </Helmet>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/BibleQuiz" element={<BibleQuiz />} />
                    <Route path="/ImageGallery" element={<ImageGallery />} />
                    <Route path="/PdfMessages" element={<PdfMessages />} />
                    <Route path="/YoutubeVideos" element={<YoutubeVideos />} />
                    <Route path="/FAQs" element={<FAQs />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                </Routes>
                <WhatsappPopup />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
