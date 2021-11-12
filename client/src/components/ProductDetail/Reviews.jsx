import React from 'react'
import { Link } from 'react-router-dom';

const ProductReview = (props) => {
   

    return(
        <div style={{ height: 10, marginTop: 15, display: 'flex', justifyContent: 'space-around'}}>
            <p style={{fontSize: '10px'}}>{props.comment}</p>
            <p style={{fontSize: '10px'}}> puntaje: {props.rating}</p>
            <Link><p>{props.userId}</p></Link>       
        </div>
    )
}

export default ProductReview