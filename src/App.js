import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/Header.css';
import './css/Banner.css';
import './css/Footer.css';
import './css/Home.css';
import './css/HomeDoctorProfile.css';
import './css/YoutubeVideos.css'; // Import the CSS
import './css/ContactUs.css'; // Optional CSS for styling
import './css/messagepdf.css'

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/ContactUs" element={<ContactUs />} /> {/* This should work now */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
