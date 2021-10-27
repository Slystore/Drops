import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';
import Brand from '../components/Brand/Brand';
import Slider from '../components/Slider/Slider';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import { getReviews } from '../redux/actions';


function HomeView() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])
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
