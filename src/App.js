import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// No need for hash-based routing now

import './css/Header.css';
import './css/Banner.css';
import './css/Footer.css';
import './css/Home.css';
import './css/HomeDoctorProfile.css';
import './css/YoutubeVideos.css'; // Import the CSS
import './css/ContactUs.css'; // Optional CSS for styling
import './css/Contactform.css';
import './css/BibleQuiz.css';
import './css/ImageGallery.css';
import './css/AboutUs.css';
import './css/PdfMessages.css';



import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import BibleQuiz from './components/BibleQuiz';
import ImageGallery from './components/ImageGallery';
import AboutUs from './components/AboutUs';

 




function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/BibleQuiz" element={<BibleQuiz />} />
                    <Route path="/ImageGallery" element={<ImageGallery />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
 
                    
                </Routes>
                
                <Footer />
            </Router>
        </div>
    );
}

export default App;
