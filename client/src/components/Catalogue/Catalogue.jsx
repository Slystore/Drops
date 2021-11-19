import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Paginado from "./Paginado";
import PaginadoMobile from "./PaginadoMobile";
import { Link } from "react-router-dom";
import "./Catalogue.css";
import { loadCart } from "../../redux/cart/cartAction";
import { getRatings } from "../../redux/rating/ratingActions";
import {
  getProducts,
  filterBrand,
  filterCategory,
  filtersReset,
  saveFilteredDataBrand,
  saveFilteredDataCategory,
  restoreData,
  orderProducts,
  orderMethod,
} from "../../redux/products/productsAction";
import { getBrands } from "../../redux/brand/brandActions";
import { getCategories } from "../../redux/category/categoriesActions";
import { getDiscounts } from "../../redux/discounts/discountsActions";
import VanillaTilt from "vanilla-tilt";

function Catalogue() {

  const element = document.querySelectorAll(".Shoes");
  VanillaTilt.init(element);

  const gId = localStorage.getItem('gId')
  
  var intFrameWidth = window.innerWidth;
  console.log("Tamaño de pantalla",intFrameWidth)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBrands());
    dispatch(getCategories());
    if(!gId){dispatch(loadCart())};
    dispatch(getRatings());
    dispatch(getDiscounts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { brands } = useSelector((state) => state.brandReducer);

  const [currPage, setCurrPage] = useState(1);
  const [cardsxPage] = useState(10);
  const [filtros, setFiltros] = useState([]);
  const [order, setOrder] = useState("name");

  const lastProduct = currPage * cardsxPage;
  const firstProduct = lastProduct - cardsxPage;

  const currProducts = products.slice(firstProduct, lastProduct);

  const menuCategorias = document.getElementById("categories");
  const menuMarcas = document.getElementById("brands");

  const paginado = (pagNumber) => {
    setCurrPage(pagNumber);
  };

  /************ PAGINADO PARA MOVILES ************/

  const [currPage2, setCurrPage2] = useState(1);
  const [cardsxPage2, setcardsxPage2] = useState(8);
  
  const lastProduct2 = currPage2 * cardsxPage2
  const firstProduct2 =  lastProduct2 - cardsxPage2;

  const currProducts2 = products.slice(firstProduct2, lastProduct2);
  
  const paginado2 = (pagNumber) => {
      setCurrPage2(pagNumber)
  }

   /************************************************/

  function handleFilterBrand(e) {
    e.preventDefault();
    dispatch(saveFilteredDataBrand(e.target.value));
    dispatch(filterBrand(e.target.value));
    setFiltros([...filtros, e.target.value]);
  }

  function handleFilterCategory(e) {
    e.preventDefault();

    dispatch(saveFilteredDataCategory(e.target.value));
    dispatch(filterCategory(e.target.value));
    setFiltros([...filtros, e.target.value]);
  }

  function handleResetFilters(e) {
    e.preventDefault();
    dispatch(filtersReset());
    setFiltros([]);
    menuCategorias.selectedIndex = 0;
    menuMarcas.selectedIndex = 0;
  }

  const handleOrder = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
    dispatch(orderProducts(e.target.value));
  };

  const handleOrderMethod = (e) => {
    e.preventDefault();
    dispatch(orderMethod(e.target.value, order));
  };

  const deleteFilter = (data) => {
    dispatch(restoreData(data));
    setFiltros([...filtros.filter((item) => data !== item)]);
  };

  return (
    <div className="CatologueContainer">
      <NavBar />

      <div className="Portada"></div>

      <div className="Info">
        <div className="Filtros">
          <div>
            <h1>Filtros</h1>
          </div>
          <div className="TitleFilter">Filtrar por Categoría</div>
          <div className="SelectFilter">
            <select
              className="Select"
              id="categories"
              onChange={(e) => handleFilterCategory(e)}
            >
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
          <div className="TitleFilter">Filtrar por Marca</div>
          <div className="SelectFilter">
            <select
              className="Select"
              id="brands"
              onChange={(e) => handleFilterBrand(e)}
            >
              <option value="All">Todas</option>
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

          <div className="TitleFilter">Ordenamiento</div>
          <div className="SelectFilter">
            <select className="Select" onChange={handleOrder}>
              <option> Tipos </option>
              <option value="name"> Nombre </option>
              <option value="price"> Precio </option>
            </select>
          </div>

          <form onClick={handleOrderMethod} className="FormRadioCatalogue">
            <label htmlFor="ordenacion" className="LabelCatalogueOrder">ASC</label>
            <input
              className="RadioFilter"
              type="radio"
              name="ordenacion"
              value="asc"
            />

            <label htmlFor="ordenacion" className="RadioFilterLabel">
              DESC
            </label>
            <input
              className="RadioFilter"
              type="radio"
              name="ordenacion"
              value="desc"
            />
          </form>

          <div>
            <button
              className="hvr-grow-shadow BtnCatalogueDelete"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 10,
                border: "none",
              }}
              onClick={handleResetFilters}
            >
              Borrar Filtros
            </button>
          </div>
         
          <div className="BtnListFilterDelete">
            {filtros &&
              filtros.map((el) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p key={el} style={{ fontSize: "10px" }}>
                      {" "}
                      {el}
                    </p>
                    <button
                      style={{
                        width: "20px",
                        height: "10px",
                        margin: "0 auto",
                        fontSize: "5px",
                      }}
                      onClick={() => deleteFilter(el)}
                    >
                      {" "}
                      X{" "}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="Productos">
          {
            intFrameWidth > 575 ?
            currProducts &&
              currProducts.map((product, index) => {
                return (
                  product && (
                    <Link to={`/catalogue/${product.id}`} key={index}>
                      <div className="Shoes" key={index} data-tilt>
                        <Product
                          id={product.id}
                          image={product.image}
                          name={product.name}
                          price={product.price}
                          status={product.status}
                          description={product.description}
                          Sizes={product.Sizes}
                          onSale={product.onSale}
                          discounts={product.Discounts}
                        />
                      </div>
                    </Link>
                  )
                );
            }) :
            currProducts2 && 
              currProducts2.map((product, index) => {
                return (
                  product && (
                    <Link to={`/catalogue/${product.id}`} key={index}>
                      <div className="Shoes" key={index} data-tilt>
                          <Product
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            status={product.status}
                            description={product.description}
                            Sizes={product.Sizes}
                            onSale={product.onSale}
                            discounts={product.Discounts} 
                          />
                      </div>
                    </Link>)
                );
            }) 
          }
        </div>
      </div>

      <div className="Paginado">
        {
          intFrameWidth > 575 ?
              <Paginado
                cardsxPage={cardsxPage}
                products={products.length}
                paginado={paginado}
                currPage={currPage}
              />
          :
              <PaginadoMobile 
              cardsxPage2={cardsxPage2} 
              products={products.length}
              paginado2={paginado2} 
              currPage={currPage2}
        />

        }
      </div>
      <Footer />
    </div>
  );
}

export default Catalogue;
