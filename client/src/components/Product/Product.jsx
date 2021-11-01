import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Product.css';


export default function Product({ name, id, price, image, handdleAddCart }) {
    return (
        <div className="ProductContainer" >
            <div className="Zapatilla"><img src={image} alt="imagen no encontrada" width="200px" height="250px" /></div>
            <div className="Name"><h3>{name}</h3> </div> 
            <div className="Price"><h5>${price}</h5> </div>  
            <div className="IconShoppingContainer">
                <div className="IconShopping hvr-pulse-grow"><ShoppingCartIcon sx={{fontSize:20, marginTop:0.7}}/></div>
                <div className="IconShopping hvr-pulse-grow"><FavoriteIcon sx={{fontSize:20, marginTop:0.7}}/></div>
            </div>
            {/* <div ><h5>{handdleAddCart}</h5> </div>  */}
        </div>
        
    )
}