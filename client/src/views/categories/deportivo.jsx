import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../redux/products/productsAction";
import Product from "../../components/Product/Product"
import Paginado from '../../components/Catalogue/Paginado'

const Deportivo = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        
    }, [dispatch]);

  const { products } = useSelector((state) => state.productReducer);
  
  const data = products.filter(e => Object.values(e.Category).includes('Deportivo'))

  const [currPage, setCurrPage] = useState(1);
  const [cardsxPage, ] = useState(10);
  
  const lastProduct = currPage * cardsxPage
  const firstProduct =  lastProduct - cardsxPage;

  const currProducts = data.slice(firstProduct, lastProduct);
  
  const paginado = (pagNumber) => {
      setCurrPage(pagNumber)
  }

    return(
        <div>
            <div > 
            <h2> Mapeo de zapas Deportivas </h2>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', justifyContent: 'center', alignItems: 'center'}}>
            { currProducts && currProducts.map(e => 
                <Product 
                id={e.id}
                image={e.image}
                name={e.name}
                price={e.price}
                status={e.status}
                description={e.description}
                Sizes = {e.Sizes}  
                onSale={e.onSale}
                discounts={e.Discounts}
                />)}
            
            </div>

             <div className="Paginado">
                <Paginado 
                cardsxPage={cardsxPage} 
                products={data.length}
                paginado={paginado} 
                />
          </div>
            </div>
        </div>
    )
}

export default Deportivo