import React from 'react';
import Rating from '@mui/material/Rating';

function BestProducts(props) {

    var intFrameWidth = window.innerWidth;
    
    return (
        
        <div className="MoreRatingCard">
            <div className="MoreRatingCardImg">
                <img src={props.image} alt={props.name}/>   
            </div>
            <div className="MoreRatingCardName">
                 {props.name} 
            </div>
            <div className="MoreRatingCardPrice">
                 ${props.price} 
            </div>
            <div className="MoreRatingCardRate">
                <Rating 
                    name="read-only" 
                    value={props.rating } 
                    readOnly 
                    size={ intFrameWidth < 992? 'small':'medium' }/>
            </div>
                       
        </div>
    )
}

export default BestProducts