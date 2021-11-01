import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  cleanDetail, getProductsById, getProductStockById } from '../../redux/products/productsAction';

import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './ProductDetail.css';

 function ProductDetail(props) {

    const { id } = props.match.params
  
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsById(id))
        dispatch(getProductStockById(id))
        return () => dispatch(cleanDetail(id))
    }, [dispatch, id]);

    const {productId} = useSelector((state) => state.productReducer);
    const {stockById} = useSelector((state) => state.productReducer);

    function addCart(e) {
        e.preventDefault()
    }

    return (
        <div className="DetailContainer">
             {
                productId.name ? <div className="CardDetail">
                                    <div className="ShoesImg" >
                                        <img className="ImgDetail" src={productId.image} alt={ productId.name ? productId.name : 'Imagen no encontrada'}/>
                                    </div>
                                    <div className="ShoesDetail">

                                        <div className="Back"><a href="/catalogue">X</a></div>
                                        <div className="NameShoe">
                                            <h1> {productId.name} </h1>
                                        </div>
                                        <div className="Brand">
                                            <h3> {productId.Brand.name} / {productId.Category.name} / {productId.status}</h3>
                                        </div>
                                        <div className="PriceShoe">
                                            <h3> ${Number(productId.price)} </h3>
                                        </div>
                                        <div className="Talles">
                                            <h4>Talles</h4>
                                            <div className="TallesContainer"> 
                                                 {
                                                    productId.Sizes.map((size, index) => {
                                                        return (   
                                                                <div>
                                                                    <div className="Talle">#{size.number}</div>
                                                                    <div className="Stock"> Stock {stockById[index] ? stockById[index].stock : 0} pares</div>
                                                                </div>
                                                        )}
                                                )}
                                            </div>
                                        </div>
                                        <div className="Description">
                                            <div style={{width: '70%'}}>
                                                <div style={{height: '10px', fontWeight: 'bold', marginTop: '10px'}}>Descripción</div>
                                                <p>
                                                    Sigue evolucionando con un calzado hecho para ayudarte a alcanzar 
                                                    nuevos objetivos y récords. Inspirado en el modelo de vida actual, 
                                                    este diseño mejora la comodidad y mantiene la amortiguación 
                                                    eficaz y el soporte seguro para ayudarte en tu día a día.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="BtnCart"> 
                                            <Button
                                                size="small"
                                                className="hvr-grow-shadow" 
                                                sx={{
                                                    backgroundColor:'black', 
                                                    color: 'white',
                                                    marginRight:5,
                                                    transition: '0.5s all',
                                                    '&:hover': {
                                                        backgroundColor:'#00000099'
                                                    }
                                                }}
                                                onClick={addCart} 
                                                startIcon={<ShoppingCartIcon />}>Agregar a Carrito</Button>
                                            <Button
                                                size="small"
                                                className="hvr-grow-shadow" 
                                                sx={{
                                                    backgroundColor:'black', 
                                                    color: 'white',
                                                    transition: '0.5s all',
                                                    '&:hover': {
                                                        backgroundColor:'#00000099'
                                                    }
                                                }} 
                                                startIcon={<FavoriteIcon />}>Wish List</Button>
                                        </div>

                                    </div>
                                </div> 
                : <div>
                    <p >Loading...</p>
                  </div>
             }

{/* 

            <h1>Detail</h1>
            {productId.name ? <div>
                <img src={productId.image}  width="200px" height="250px" />
                <h1 > {productId.name.toUpperCase()} </h1>
                <h3> {Number(productId.price)} </h3>
                <h4>{productId.status}</h4>
                <h4>{productId.Brand.name}</h4>
                <h4>{productId.Category.name}</h4>
                <h5>Descripción: {`${productId.description}`}</h5>
              <h6>Talles: {productId.Sizes.map((size, index) => {
                return (   <div key={index}>Talle {size.number} Stock {stockById[index]?stockById[index].stock: 0} pares</div>
                  )}
              )}
                  </h6>
            </div> : <div> <p >Loading...</p></div>}
            <NavLink to="/catalogue">
                <button >Volver</button>
            </NavLink>
            <div> <button onClick={addCart} 
            >Agregar a Carrito</button></div>  */}


        </div>
    )
}
export default ProductDetail;