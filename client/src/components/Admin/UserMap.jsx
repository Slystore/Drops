import React from 'react';
import { Link } from 'react-router-dom';

const ProductMap = (props) => {
    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <img src={props.profileImg} alt={props.id} style={{height:'25px', width:'50px'}}/>
            <p>{`${props.name} ${props.surname}`}</p>
            <p>{props.mail}</p>
            <p>{props.password}</p>
            <p>{props.phone}</p>
            <p>{props.status}</p>
            <p>{props.userType}</p>
            <Link to={`admin/product/${props.id}/update`}> <a> Reset Password </a></Link> 
           
        </div>
    )
}

export default ProductMap