import React from 'react'

import Slider from '../components/Slider/Slider';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

function HomeView() {
    return (
        <div className='Container'>
            <NavBar />
            <Slider />
            <Home />
            <Footer />
        </div>
    )
}

export default HomeView
