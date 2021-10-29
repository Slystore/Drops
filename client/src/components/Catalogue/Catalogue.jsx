import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import NavBar from "../NavBar/NavBar";
import Paginado from "./Paginado";
// import {
//   filterBrand,
//   getAll,
//   filterCategory,
// } from "../../redux/movies/moviesAction";
// import { addToCart, storage } from "../../redux/carts/cartsActions";
import './Catalogue.css';
import { getAll, getProducts, filterBrand, filterCategory } from "../../redux/products/productsAction";
import { getBrands } from "../../redux/brand/brandActions";
import { getCategories } from "../../redux/category/categoriesActions";
import { Link } from "react-router-dom";


function Catalogue() {
  
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  const { categories } = useSelector((state) => state.categoryReducer);
  const { brands } = useSelector((state) => state.brandReducer);

  const [currPage, setCurrPage] = useState(1);
  const [cardsxPage, setcardsxPage] = useState(10);
  
  const lastProduct = currPage * cardsxPage
  const firstProduct =  lastProduct - cardsxPage;

  const currProducts = products.slice(firstProduct, lastProduct);

  const paginado = (pagNumber) => {
      setCurrPage(pagNumber)
  }
  useEffect(() => {
     dispatch(getProducts());
     dispatch(getBrands());
     dispatch(getCategories());  
  }, [dispatch]);
  

  function handleFilterBrand(e) {
    e.preventDefault();
     dispatch(filterBrand(e.target.value));
  }

  function handleFilterCategory(e) {
    e.preventDefault();
   dispatch(filterCategory(e.target.value));
  }
  
  const handleAddCart = (id) => {
    // totalItems++
    // console.log(totalItems)
    console.log("console home",id)
    // dispatch (addToCart(id))
    // dispatch(storage(id));
}

  return (
    <div>
      <NavBar />
      <div className="SelectGroup">
       
        <div className="ContainerSelect">
          <select className="Select" onChange={(e) => handleFilterBrand(e)}>
            <option value="All">Marcas</option>
            {brands &&
              brands.map((brand) => {
                return (
                  <option key={brand.id} value={brand.name}>
                    {brand.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="ContainerSelect">
          <select className="Select" onChange={(e) => handleFilterCategory(e)}>
            <option value="All">Categorías</option>
            {categories &&
              categories.map((category) => {
                return (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <Paginado cardsxPage={cardsxPage} products={products.length}
                    paginado={paginado} />
      <div className="ContainerHome">
        <div className="MoviesContainer">
          {currProducts && currProducts.map((product, index) => {
            return (
              <Link to={`/catalogue/${product.id}`} key={index}>
              <div className="Movie" key={index}>
                <Product
                  id={product.id}
                 image={product.image}
                name={product.name}
                 price={product.price}
                 status={product.status}
                  description={product.description}
                  addToCart = {handleAddCart}  
                />
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
