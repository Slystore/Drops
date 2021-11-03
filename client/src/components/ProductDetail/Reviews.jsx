
import { Link } from 'react-router-dom';

const ProductReview = (props) => {
   

    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <p>{props.comment}</p>
            <p>{props.rating}</p>
            <p>{props.status}</p>
            <Link to= {`/admin/product/${props.data.id}/update`}> <button > actualizar </button></Link> 
           
        </div>
    )
}

export default ProductReview