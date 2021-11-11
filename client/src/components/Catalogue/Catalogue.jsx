import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Paginado from "./Paginado";

import { Link } from "react-router-dom";
import "./Catalogue.css";
import {
  loadCartTomi,
} from "../../redux/cartTomi/cartActionTomi";
import { getRatings} from "../../redux/rating/ratingActions";
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

function Catalogue() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(loadCartTomi());
    dispatch(getRatings());
  }, [dispatch]);

  const { products } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { brands } = useSelector((state) => state.brandReducer);
  const rating = useSelector((state) => state.ratingReducer.ratings);

  console.log(rating);
  console.log(rating.sort((a, b) => b.rating - a.rating));

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

  function handleFilterBrand(e) {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(saveFilteredDataBrand(e.target.value));
    dispatch(filterBrand(e.target.value));
    setFiltros([...filtros, e.target.value]);
  }

  function handleFilterCategory(e) {
    e.preventDefault();
    console.log(e.target.value);

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
    console.log(e.target.value);
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
          <div style={{ padding: "20px 0" }}>
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

          <div>
            <select onChange={handleOrder}>
              <option> Ordenamiento </option>
              <option value="name"> Name </option>
              <option value="price"> Price </option>
            </select>
          </div>

          <form onClick={handleOrderMethod}>
            <label>
              ASC
              <input type="radio" name="ordenacion" value="asc" />
            </label>
            <label>
              DESC
              <input type="radio" name="ordenacion" value="desc" />
            </label>
          </form>

          <button onClick={handleResetFilters}> borrar filtros </button>
          <div>
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
                      {el}{" "}
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
          {currProducts &&
            currProducts.map((product, index) => {
              console.log(product.Sizes, "sizeslogueado");
              return (
                product && (
                  <Link to={`/catalogue/${product.id}`} key={index}>
                    <div className="Shoes" key={index}>
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
            })}

          <div className="Paginado">
            <Paginado
              cardsxPage={cardsxPage}
              products={products.length}
              paginado={paginado}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Catalogue;
