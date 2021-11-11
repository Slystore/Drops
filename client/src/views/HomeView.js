import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';
import Brand from '../components/Brand/Brand';
import Slider from '../components/Slider/Slider';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import BestProducts from '../components/BestProducts.jsx'

import { getReviews } from '../redux/reviews/reviewsActions';
import { getRatings } from "../redux/rating/ratingActions";
import { getUsers } from './../redux/users/userActions';


import Us from '../components/Us/Us';
import Newsletter from '../components/Newsletter/Newsletter';
import Location from '../components/Location/Location';


function HomeView() {
    const dispatch = useDispatch()
    // const [reviews, setReviews] = useState([])

    useEffect(() => {
        dispatch(getReviews(1))
        dispatch(getUsers())
        dispatch(getRatings());    
       
    }, [dispatch])

    let rating = useSelector((state) => state.ratingReducer.ratings);
    rating = rating.sort((a,b) => b.rating - a.rating)
    rating.length = 4

//   console.log(rating)
//   console.log(rating.sort((a,b) => b.rating - a.rating))
    return (

       //<div className='Container'>
        
        <div style={{width: '99.1vw'}}>
          
            <NavBar />
            <Brand />
            <Slider />
            
            <div>
                <h2> Zapas mas buscadas </h2>
                <div style={{display: 'flex'}}>
                { rating.map(e => <BestProducts key={e.id} image={e.image} price={e.price} name={e.name} rating={e.rating}/>) }
                
                </div>
            
            </div>
            
            <Home />
            <Us />
            <Newsletter />
            <Location />
            <Footer />
            
        </div>
    )
}

export default HomeView
