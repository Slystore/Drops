import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import NavBar from "../NavBar/NavBar";
// import {
//   filterBrand,
//   getAll,
//   filterCategory,
// } from "../../redux/movies/moviesAction";
// import { addToCart, storage } from "../../redux/carts/cartsActions";
import './Catalogue.css';

function Catalogue() {
  
  const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.productsReducer);
//   const { categories } = useSelector((state) => state.categoriesReducer);
//   const { brands } = useSelector((state) => state.brandReducer);
  const products= ["Adidas Honey", "Adidas SuperStars"]
  const categories = ["running", "basketball", "football"];
  const brands = ["adidas", "nike", "puma"];

//   useEffect(() => {
    // dispatch(getAll());
    // dispatch(getProducts())
    // dispatch(getAllUsers())
//   }, [dispatch]);
  

  function handleFilterBrand(e) {
    e.preventDefault();
    // dispatch(filterBrand(e.target.value));
  }

  function handleFilterCategory(e) {
    e.preventDefault();
    // dispatch(filterCategory(e.target.value));
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
              brands.map((brand, index) => {
                return (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="ContainerSelect">
          <select className="Select" onChange={(e) => handleFilterCategory(e)}>
            <option value="All">Categorías</option>
            {categories &&
              categories.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div className="ContainerHome">
        <div className="MoviesContainer">
          {products && products.map((product, index) => {
            return (
              <div className="Movie" key={index}>
                <Product
                //   id={product.id}
                //   image={product.image}
                //   name={product.name}
                //   price={product.price}
                //   status={product.status}
                //   description={product.description}
                  addToCart = {handleAddCart}  
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
