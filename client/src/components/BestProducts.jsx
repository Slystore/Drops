import React, { useEffect, useState} from 'react'

function BestProducts(props) {
    
    return (
        
        <div >
          
            <img src={props.image} alt={props.name}/>
            <p> {props.name} </p>
            <p> {props.price} </p>
            <p> rating: {props.rating } </p>
                       
        </div>
    )
}

export default BestProducts