import { Link } from 'react-router-dom';

const ProductMap = (props) => {
    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <img src={props.image} alt={props.id} style={{height:'25px', width:'50px'}}/>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.status}</p>
            <Link to={`admin/product/${props.id}/update`}> <a> actualizar </a></Link> 
           
        </div>
    )
}

export default ProductMap

// <ul>
// <li> {name} </li>
// <li> {price} </li>
// <li> {status} </li>
// </ul>