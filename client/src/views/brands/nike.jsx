import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/products/productsAction";
import Product from "../../components/Product/Product"
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import VanillaTilt from 'vanilla-tilt';

const Nike = () => {

    const element = document.querySelectorAll(".Shoes");
    VanillaTilt.init(element);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        
    }, [dispatch]);

    const { products } = useSelector((state) => state.productReducer);
    
    const data = products.filter(e => Object.values(e.Brand).includes('Nike'))

    return(
        <div className="BrandContainer">
            <NavBar />
            <div className="BrandImageNike">
                <h3>Nike</h3>
            </div>
            <div className="BrandProducts">
                {
                    data && data.map((e,index) => 
                        <Link to={`/catalogue/${e.id}`} key={index}>
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
                        </Link>
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Nike