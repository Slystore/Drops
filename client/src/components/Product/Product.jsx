import React from 'react';


export default function Product({ handdleAddCart }) {//{name, price, image}etc
    return (
        <div >
            
            <div > 
            {/* <img src={image} alt="imagen no encontrada" width="200px" height="250px" /></div>
            <div ><h3> {name}</h3> </div> 
            <div ><h5>  {types}</h5> </div>  */}
            <div ><h5>  {handdleAddCart}</h5> </div> 
                </div>
        </div>
    )
}