const ProductMap = ({id, name, image, price, status}) => {
    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <img src={image} alt={id}/>
            <p>{name}</p>
            <p>{price}</p>
            <p>{status}</p>
            <button>actualizar</button>
           
        </div>
    )
}

export default ProductMap

// <ul>
// <li> {name} </li>
// <li> {price} </li>
// <li> {status} </li>
// </ul>