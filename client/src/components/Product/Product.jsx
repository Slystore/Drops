import React from 'react';
import { useSelector } from "react-redux";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Product.css';
import { Link } from 'react-router-dom';

export default function Product({ name, id, price, image, addToCart }) {

    const { ratings } = useSelector((state) => state.ratingReducer);
    const data = ratings.filter(e => e.id === id)
    // console.log(data.name, data)
    return (
        <div className="ProductContainer" >
            <div className="Zapatilla">
                <img src={image} alt="imagen no encontrada"/>
            </div>
            <div className="Name">
                <h3>{name}</h3>
            </div> 
            <div className="Price">
                <h5>${price}</h5>
            </div>

            <div className="Price">
                <h5> Prom {data[0] ? data[0].rating : null}</h5>
            </div>
              
            <div className="IconShoppingContainer">
            <Link to={`/catalogue`}>
                     <div className="IconShopping hvr-pulse-grow">
                        <ShoppingCartIcon sx={{fontSize:20, marginTop:0.7}} onClick={() => addToCart(id)}/>
                    </div></Link>
                    <div className="IconShopping hvr-pulse-grow">
                    <FavoriteIcon sx={{fontSize:20, marginTop:0.7}}/>
                    </div>
            </div>
        </div>
    )
}