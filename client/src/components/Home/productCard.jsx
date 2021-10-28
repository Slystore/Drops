const ProductCard = ({img, name, price}) => {
 
    
    return(
        <div>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <p> {price} </p>
            
        </div>)
}

export default ProductCard