import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getReviews } from '../../redux/reviews/reviewsActions';
import { getRatings } from "../../redux/rating/ratingActions";
import { getUsers } from '../../redux/users/userActions';
import BestProducts from './BestProducts.jsx';
import { Link } from 'react-router-dom';

import './MoreRating.css';

function MoreRating() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviews(1))
        dispatch(getUsers())
        dispatch(getRatings());    
       
    }, [dispatch])

    let rating = useSelector((state) => state.ratingReducer.ratings);
    rating = rating.sort((a,b) => b.rating - a.rating)
    rating.length = 4

    return (
        <div className="MoreRatingContainer">
            <h2> Zapas mas buscadas </h2>
            <div className="Zapas">
                { 
                    rating.map(e => 
                            <Link to={`/catalogue/${e.id}`} className="LinkZapas">
                                <BestProducts 
                                    key={e.id}
                                    image={e.image} 
                                    price={e.price} 
                                    name={e.name} 
                                    rating={e.rating}/>
                            </Link>
                    ) 
                }
             </div>
        </div>
    )
}

export default MoreRating
