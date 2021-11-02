import { Link } from 'react-router-dom';
import {useLocation} from 'react-router'

const ProductMap = (props) => {
    const location = useLocation()

    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <img src={props.image} alt={props.id} style={{height:'25px', width:'50px'}}/>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.status}</p>
            <Link to={{
                pathname: `/admin/product/1/update`,
                nada: 'hola'
            }}> <a> actualizar </a></Link> 
           
        </div>
    )
}

export default ProductMap

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