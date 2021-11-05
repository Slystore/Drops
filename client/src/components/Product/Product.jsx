import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Product.css';
import { Link } from 'react-router-dom';
import { addToCartTomi, fusionCartTomi, loadCartTomi } from "../../redux/cartTomi/cartActionTomi";
import jwt_decode from "jwt-decode";
import { getToken } from '../../redux/users/userActions';

export default function Product({ name, id, price, image }) {
    const {items} = useSelector(store => store.cartReducersTomi);
const dispatch = useDispatch();
const x = getToken();
const decoded = x?jwt_decode(x): null;

// console.log("tomiUser",decoded)
    const handleAddToCart = async () => {
    
        let product = items?.find( e => e.id === id)
    
        let user = decoded?decoded.user.id: null
        
        // if(cart && product?.quantity >= stock) {
          
        //   Swal.fire(
        //     {
        //       text: 'Ups! Alcanzo el maximo del stock',
        //       icon: 'warning', 
        //       width:'20rem', 
        //       timer: '3000', 
        //       showConfirmButton: false 
        //     }
        //     )
        //     history.push("/cart")
        //   }
        //   else {
          await dispatch(addToCartTomi(id, product?.quantity ? product.quantity + 1 : 1, price, name, image));
        //   Swal.fire(
        //     {
        //       text:'Se agrego al carrito',
        //       icon: 'success', 
        //       width:'20rem', 
        //       timer: '3000', 
        //       showConfirmButton: false 
        //     }
        //   )
        // }
         if(user) {
            //  console.log("entrouser",user)
           await  (fusionCartTomi(id))
            await  (loadCartTomi())}
      };
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
              
            <div className="IconShoppingContainer">
            <Link to={`/catalogue`}>
                     <div className="IconShopping hvr-pulse-grow">
                        <ShoppingCartIcon sx={{fontSize:20, marginTop:0.7}} onClick={() => handleAddToCart()}/>
                    </div></Link>
                    <div className="IconShopping hvr-pulse-grow">
                    <FavoriteIcon sx={{fontSize:20, marginTop:0.7}}/>
                    </div>
            </div>
        </div>
    )
}