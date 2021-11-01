import { Link } from 'react-router-dom';

const ProductMap = ({id, name, image, price, status}) => {
    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <img src={image} alt={id} style={{height:'25px', width:'50px'}}/>
            <p>{name}</p>
            <p>{price}</p>
            <p>{status}</p>
            <Link to={`admin/product/${id}/update`}> <a>actualizar</a></Link>
           
        </div>
    )
}

export default ProductMap

// <ul>
// <li> {name} </li>
// <li> {price} </li>
// <li> {status} </li>
// </ul>