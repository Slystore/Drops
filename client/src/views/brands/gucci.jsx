import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../redux/products/productsAction";
import Product from "../../components/Product/Product"
// import Paginado from '../../components/Catalogue/Paginado'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import VanillaTilt from 'vanilla-tilt';

const Gucci = () => {

const element = document.querySelectorAll(".Shoes");
VanillaTilt.init(element);

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProducts());
    
}, [dispatch]);

const { products } = useSelector((state) => state.productReducer);

console.log("productos",products)

const data = products.filter(e => Object.values(e.Brand).includes('Gucci'))

console.log("filtro",data)
const [currPage, setCurrPage] = useState(1);
const [cardsxPage, setcardsxPage] = useState(10);

const lastProduct = currPage * cardsxPage
const firstProduct =  lastProduct - cardsxPage;

const currProducts = data.slice(firstProduct, lastProduct);

const paginado = (pagNumber) => {
    setCurrPage(pagNumber)
}

    return(
        <div className="BrandContainer">
            <NavBar />
            <div className="BrandImageGucci">
                <h3>Gucci</h3>
                <img />
            </div>
            <div className="BrandProducts">
                {
                    currProducts && currProducts.map(e => 
                        <div className="Shoes" data-tilt >
                            {
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
                                />
                            }
                        </div>
                    )
                }

            </div>
            <Footer />
        </div>
        // <div>
        //     <div > 
        //     <h2> Mapeo de Gucci </h2>

        //     <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', justifyContent: 'center', alignItems: 'center'}}>
        //     { currProducts && currProducts.map(e => 
        //         <Product 
        //         id={e.id}
        //         image={e.image}
        //         name={e.name}
        //         price={e.price}
        //         status={e.status}
        //         description={e.description}
        //         Sizes = {e.Sizes}  
        //         onSale={e.onSale}
        //         discounts={e.Discounts}
        //         />)}
            
        //     </div>

        //      <div className="Paginado">
        //         <Paginado 
        //         cardsxPage={cardsxPage} 
        //         products={data.length}
        //         paginado={paginado} 
        //         />
        //   </div>
        //     </div>
        // </div>
    )
}

export default Gucci