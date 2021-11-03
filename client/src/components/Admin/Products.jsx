
import React, { useEffect, useState } from "react" 
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../../redux/products/productsAction"
import ProductMap from "./ProductMap"
import ProductButtons from './ProductButtons';

const Products = () => {
    const dispatch = useDispatch()
    
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    
    const hola = useSelector( state => state.productReducer.products);

    return(
        <div>
            <ProductButtons/>
            <div > 
                <h2> Mapeo de productos </h2>
                <div>
                    {
                        hola && hola.map(prod => (
                        <div>
                            
                            <ProductMap key={prod.id} name={prod.name} image={prod.image} price={prod.price} status={prod.status} data={prod} match={prod.id}/>
                        </div>
                    ))}
                
                </div>
            </div>
        </div>
    )
}

export default Products

// style={{height: '200px', width: '400px', margin: '25% auto', border: '1px black solid'}}