import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  cleanDetail, getProductsById, getProductsStock } from '../../redux/products/productsAction';
import { NavLink } from 'react-router-dom';


 function ProductDetail(props) {
    const { id } = props.match.params
  
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsById(id))
        dispatch(getProductsStock(id))
        return () => dispatch(cleanDetail(id))
    }, [dispatch, id]);
    const {productId} = useSelector((state) => state.productReducer);
    const {stock} = useSelector((state) => state.productReducer);

    function addCart(e) {
        e.preventDefault()

    }
    return (
        <div >
            <h1>Detail</h1>
            {productId.name ? <div>
                <img src={productId.image} alt="not found" width="200px" height="250px" />
                <h1 > {productId.name.toUpperCase()} </h1>
                <h3> {Number(productId.price)} </h3>
                <h4>{productId.status}</h4>
                <h4>{productId.Brand.name}</h4>
                <h4>{productId.Category.name}</h4>
                <h5>Descripción: {`${productId.description}`}</h5>
              <h6>Talles: {productId.Sizes.map((size, index) => {
                return (   <div>Talle {size.number} Stock {stock[index]?stock[index].stock: 0} pares</div>
                  )}
              )}
                  </h6>
            </div> : <div> <p >Loading...</p></div>}
            <NavLink to="/catalogue">
                <button >Volver</button>
            </NavLink>
            <div> <button onClick={addCart} 
            >Agregar a Carrito</button></div>

        </div>
    )
}
export default ProductDetail;