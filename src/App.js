import React from 'react';
import './css/Header.css';
import './css/Banner.css';
import './css/Footer.css';
import './css/Home.css';
import './css/HomeDoctorProfile.css';



import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Home from './components/Home';


function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
