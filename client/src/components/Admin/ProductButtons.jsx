
import { useEffect, useState } from "react" 
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../../redux/products/productsAction"
import ProductMap from "./ProductMap"
import { Link } from 'react-router-dom';

const ProductButtons = () => {
    

    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}> 
               <Link to='/admin/createProduct2'><button> Crear </button></Link>
               <Link><button> crear Marca</button></Link>
               <Link><button> crear Categoria</button></Link>
            </div>
        </div>
    )
}

export default ProductButtons