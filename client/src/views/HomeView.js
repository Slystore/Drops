import React from 'react'

import NavBar from '../components/NavBar/NavBar';
import Brand from '../components/Brand/Brand';
import Slider from '../components/Slider/Slider';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';

function HomeView() {
    return (
        <div className='Container'>
            <NavBar />
            <Brand />
            <Slider />
            <Home />
            <Footer />
        </div>
    )
}

export default HomeView
