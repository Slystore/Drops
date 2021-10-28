import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';
import Brand from '../components/Brand/Brand';
import Slider from '../components/Slider/Slider';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';

// import { getReviews, getReviewById, getReviewsByProduct, getReviewsByUser, createReview, deleteReview, updateReview } from '../redux/actions';

import Us from '../components/Us/Us';
import Location from '../components/Location/Location';


function HomeView() {
    const dispatch = useDispatch()
    // const [reviews, setReviews] = useState([])

    useEffect(() => {
        // dispatch(getReviews())
        // dispatch(getReviewById(1))
        // dispatch(getReviewsByUser('Aimee_Hills@hotmail.com'))
        // dispatch(getReviewsByProduct())
        // dispatch(createReview({comment: 'Probando los comentarios', rating: 5, user: 5}))
        // dispatch(updateReview( { id: 21, comment: 'modificando el comentario', rating: 4 }) )
        // dispatch(deleteReview(1))
        // setReviews()
    }, [dispatch])

    
    return (

       //<div className='Container'>
        
        <div style={{width: '99.1vw'}}>
          
            <NavBar />
            <Brand />
            <Slider />
            <Home />
            <Us />
            <Location />
            <Footer />
        </div>
    )
}

export default HomeView
