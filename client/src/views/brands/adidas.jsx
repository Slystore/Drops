import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/products/productsAction";
import Product from "../../components/Product/Product";
import Paginado from "../../components/Catalogue/Paginado";

const Adidas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.productReducer);

  const data = products.filter((e) => Object.values(e.Brand).includes("Adidas"));

  const [currPage, setCurrPage] = useState(1);
  const [cardsxPage] = useState(10);

  const lastProduct = currPage * cardsxPage;
  const firstProduct = lastProduct - cardsxPage;

  const currProducts = data.slice(firstProduct, lastProduct);

  const paginado = (pagNumber) => {
    setCurrPage(pagNumber);
  };

  return (
    <div>
      <div>
        {" "}
        <h2> Mapeo de Adidas </h2>{" "}
      </div>
      <div>
        {" "}
        <Link to="/">
          <a>volver</a>
        </Link>{" "}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {currProducts &&
          currProducts.map((e) => (
              <div className='Shoes'>
            <Product
              id={e.id}
              image={e.image}
              name={e.name}
              price={e.price}
              status={e.status}
              description={e.description}
              Sizes={e.Sizes}
              onSale={e.onSale}
              discounts={e.Discounts}
            /></div>
          ))}
      </div>

      <div className="Paginado">
        <Paginado
          cardsxPage={cardsxPage}
          products={data.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
};

export default Adidas;
