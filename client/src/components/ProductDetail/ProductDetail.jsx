import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  cleanDetail, getProductsId } from '../../redux/products/productsAction';
import { NavLink } from 'react-router-dom';


 function ProductDetail(props) {
    const { id } = props.match.params
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsId(id))
        return () => dispatch(cleanDetail(id))
    }, [dispatch, id]);
    const {detail} = useSelector((state) => state.productsReducer);
   
    function addCart(e) {
        e.preventDefault()

    }
    return (
        <div >
            <h1>Detail</h1>
            {detail.length ? <div>
                <img src={detail[0].image} alt="not found" width="200px" height="250px" />
                <h1 > {detail[0].name.toUpperCase()} </h1>
                <h3> {Number(detail[0].price)} </h3>
                <h4>{detail[0].status}</h4>
                <h4>{detail[0].Brand.name}</h4>
                <h4>{detail[0].Category.name}</h4>
                <h5>Descripción: {`${detail[0].description}`}</h5>
              <h6>Talles: {detail[0].Sizes.map((size) => {
                return (   <div>{size.number}</div>
                  )}
              )}</h6>
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