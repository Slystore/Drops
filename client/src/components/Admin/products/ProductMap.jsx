import React from 'react';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router';

const ProductMap = (props) => {
    const location = useLocation()
    const handleClick = (e) => {
        e.preventDefault()
        console.log(props.data.id)
        // console.log(typeof props.data.id)
    }

    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <img src={props.image} alt={props.id} style={{height:'25px', width:'50px'}}/>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.status}</p>
            <Link to= {`/admin/product/${props.data.id}/update`}> <button > actualizar </button></Link> 
           
        </div>
    )
}

export default ProductMap

// onClick={handleClick}
// <ul>
// <li> {name} </li>
// <li> {price} </li>
// <li> {status} </li>
// </ul>

// name: 'nike air',
// image: 'Esto es una imagen',
// description: "Esto es una mega descripcion",
// price: 100,
// status: 'disponible',
// brand: 'Nike',
// categories: ['categoriaUno', 'categoriaDos'],
// stock:[['hola', 'chau'],['hola1', 'chau1']]