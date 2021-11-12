import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';
import Brand from '../components/Brand/Brand';
import Slider from '../components/Slider/Slider';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import Us from '../components/Us/Us';
import Newsletter from '../components/Newsletter/Newsletter';
import Location from '../components/Location/Location';
import MoreRating from '../components/MoreRating/MoreRating';


function HomeView() {
  
    return (
        
        <div style={{width: '99.1vw'}}>
          
            <NavBar />
            <Brand />
            <Slider />
            <MoreRating />
            <Home />
            <Us />
            <Newsletter />
            <Location />
            <Footer />
            
        </div>
    )
}

export default HomeView
