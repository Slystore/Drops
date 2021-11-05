import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cleanDetail, getProductsById, getProductStockById } from '../../redux/products/productsAction';
import './Product.css';
import { Link } from 'react-router-dom';

export default function Product({ name, id, price, image, addToCart }) {

    const { ratings } = useSelector((state) => state.ratingReducer);
    const data = ratings.filter(e => e.id === id)
    console.log(data.name, data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsById(id))
        dispatch(getProductStockById(id))
        return () => dispatch(cleanDetail(id))
    }, [dispatch, id]);

    const {productId} = useSelector((state) => state.productReducer);
    const {stockById} = useSelector((state) => state.productReducer);

    
    // console.log("DATA PRODUCTSID",productId.name)

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
                <h5> Prom {data[0] ? data[0].rating : null}</h5>
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
                        <ShoppingCartIcon sx={{fontSize:20, marginTop:0.7}} onClick={() => addToCart(id)}/>
                    </div></Link>
                    <div className="IconShopping hvr-pulse-grow">
                    <FavoriteIcon sx={{fontSize:20, marginTop:0.7}}/>
                    </div>
            </div>
        </div>
    )
}