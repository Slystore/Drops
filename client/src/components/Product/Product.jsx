import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cleanDetail, getProductsById, getProductStockById } from '../../redux/products/productsAction';
import Rating from '@mui/material/Rating';
import './Product.css';
import { Link } from 'react-router-dom';
import { addToCartTomi, fusionCartTomi, loadCartTomi } from "../../redux/cartTomi/cartActionTomi";
import jwt_decode from "jwt-decode";
import { getToken } from '../../redux/users/userActions';

export default function Product({ name, id, price, image }) {
    const {items} = useSelector(store => store.cartReducersTomi);
const dispatch = useDispatch();
let x
if(localStorage.getItem('token')){
     x = getToken();}
const decoded = x?jwt_decode(x): null;
const { ratings } = useSelector((state) => state.ratingReducer);
    const data = ratings.filter(e => e.id === id)
    // console.log(data.name, data)
   
    useEffect(() => {
        dispatch(getProductsById(id))
        dispatch(getProductStockById(id))
        return () => dispatch(cleanDetail(id))
    }, [dispatch, id]);

    const {productId} = useSelector((state) => state.productReducer);
    const {stockById} = useSelector((state) => state.productReducer);

// console.log("tomiUser",decoded)
    const handleAddToCart = async () => {
    
        let product = items?.find( e => e.id === id)
    
        let user = decoded?decoded.user.id: null
        if(user) {
               console.log("entrouser",user)
           await  (fusionCartTomi(id))
            await  (loadCartTomi())
            await dispatch(addToCartTomi(id, product?.quantity ? product.quantity + 1 : 1, price, name, image))
        }
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
      
      };
    return (
        <div className="ProductContainer" >
            <div className="Zapatilla">
                <img src={image} alt="imagen no encontrada"/>
            </div>
            <div className="Name">
                <h3>{name}</h3>
            </div> 
            <div className="PriceProduct">
                <h5>${price}</h5>
            </div>

            <div className="Price">
                <Rating name="read-only" value={data[0] ? data[0].rating : null} readOnly />
                {/* <h5> Prom {data[0] ? data[0].rating : null}</h5> */}
            </div>
            <div>
                {
                    name ? 
                        <div>
                            {/* {
                                productId.Sizes.map((size, index) => {
                                    return (   <div>
                                        <div className="Talle">#{size.number}</div>
                                        <div className="Stock"> Stock {stockById[index] ? stockById[index].stock : 0} pares</div></div>
                                    )}
                            )} */}
                        </div> 
                        : 
                        <div>No name</div>
                }
            </div>
              
            <div className="IconShoppingContainer">
            <Link to={`/catalogue`}>
                     <div className="IconShopping hvr-pulse-grow">
                        <ShoppingCartIcon 
                            sx={{
                                    width:30,
                                    fontSize:20, 
                                    marginTop:0.7, 
                                    color:' rgb(197, 197, 197)',
                                    '&:hover':{
                                        color:'#9E0000'
                                    }}}
                            onClick={() => handleAddToCart(id)}/>
                    </div></Link>
                    <div className="IconShopping hvr-pulse-grow">
                    <FavoriteIcon sx={{fontSize:20, marginTop:0.7}}/>
                    </div>
            </div>
        </div>
    )
}