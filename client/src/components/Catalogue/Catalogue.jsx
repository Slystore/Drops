import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Paginado from "./Paginado";
import { getAll, getProducts, filterBrand, filterCategory } from "../../redux/products/productsAction";
import { getBrands } from "../../redux/brand/brandActions";
import { getCategories } from "../../redux/category/categoriesActions";
import { Link } from "react-router-dom";
import './Catalogue.css';
import {addToCart} from '../../redux/cart/cartActions';

function Catalogue() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBrands());
    dispatch(getCategories());  
 }, [dispatch]);
  const { products } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { brands } = useSelector((state) => state.brandReducer);

  const [currPage, setCurrPage] = useState(1);
  const [cardsxPage, setcardsxPage] = useState(10);
  
  const lastProduct = currPage * cardsxPage
  const firstProduct =  lastProduct - cardsxPage;

  const currProducts = products.slice(firstProduct, lastProduct);

  const paginado = (pagNumber) => {
      setCurrPage(pagNumber)
  }

  

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
    dispatch (addToCart(id))
    // dispatch(storage(id));
}

  return (
    <div className="CatologueContainer">
       
       <NavBar />
        
        <div className="Portada"></div>

        <div className="Filtros"> 

          <div><h2>Filtros</h2></div>
          <div className="TitleFilter">Categoría</div>
          <div>
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
          <div className="TitleFilter">Marca</div>
          <div>
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

        </div>

        <div className="Productos">
          {
          currProducts && currProducts.map((product, index) => {
              return (
                <Link to={`/catalogue/${product.id}`} key={index}>
                  <div className="Shoes" key={index}>
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

          <div className="Paginado">
            <Paginado 
              cardsxPage={cardsxPage} 
              products={products.length}
              paginado={paginado} 
            />
          </div>
        </div>


          {/* <Footer /> */}



      {/* 
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
      </div> */}
    </div>
  );
}

export default Catalogue;
