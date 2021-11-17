import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  cleanDetail,
  getProductsById,
  getProductStockById,
} from "../../redux/products/productsAction";
import jwt_decode from "jwt-decode";
import { getToken, userPostWish } from "../../redux/users/userActions";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ProductReview from "./Reviews";
import {
  addToCart,
  fusionCart,
  loadCart,
} from "../../redux/cart/cartAction";
import "./ProductDetail.css";


function ProductDetail(props) {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const { productId } = useSelector((state) => state.productReducer);
  const { stockById } = useSelector((state) => state.productReducer);
  let x;
  if (localStorage.getItem("token")) {
    x = getToken();
  }
  const decoded = x ? jwt_decode(x) : null;
  const gId = localStorage.getItem('gId')

  let [bul, setBul] = useState(false);

  useEffect(() => {
    dispatch(getProductsById(id));
    dispatch(getProductStockById(id));
    return () => dispatch(cleanDetail(id));
  }, [dispatch, id]);

  const nada =
    productId.hasOwnProperty("Reviews") &&
    productId.Reviews.map((e) => (
      <div>
        {" "}
        <ProductReview comment={e.comment} rating={e.rating} />{" "}
      </div>
    ));

  const addCart = async (e) => {
    e.preventDefault();
    let user = decoded ? decoded.user.id : null;
    if (user) {
      // console.log("entrouser",user)
      await fusionCart(id);
      await dispatch(
        addToCart(
          id,
          1,
          productId.price,
          productId.name,
          productId.image,
          productId.Sizes
        )
      );
      await loadCart();
    }
    await dispatch(
      addToCart(
        id,
        1,
        productId.price,
        productId.name,
        productId.image,
        productId.Sizes
      )
    );
  };

  function handleReviews(e) {
    e.preventDefault();
    setBul(!bul);
  }
  const handleAddWishList = async (userId,productId)=> {
    const x = await userPostWish(userId,productId)
  }
  return (
    <div className="DetailContainer">
      {productId.name ? (
        <div className="CardDetail">
          <div className="ShoesImg">
            <img
              className="ImgDetail"
              src={productId.image}
              alt={productId.name ? productId.name : "Imagen no encontrada"}
            />
          </div>
          <div className="ShoesDetail">
            <div className="Back">
              <a href="/catalogue">X</a>
            </div>
            <div className="NameShoe">
              <h1 style={{ lineHeight: "40px" }}> {productId.name} </h1>
            </div>
            <div className="Brand">
              <h4>
                {" "}
                {productId.Brand.name} / {productId.Category.name} /{" "}
                {productId.status}
              </h4>
            </div>
            <div className="PriceShoe">
              <h3> ${Number(productId.price)} </h3>
            </div>
            <div className="Talles">
              <h4>Talles</h4>
              <div className="TallesContainer">
                {productId.Sizes.map((size, index) => {
                  return (
                    <div>
                      <div className="Talle">#{size.number}</div>
                      <div className="Stock">
                        {" "}
                        Stock {stockById[index]
                          ? stockById[index].stock
                          : 0}{" "}
                        pares
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="Description">
              <div style={{ width: "75%" }}>
                <div
                  style={{
                    height: "20px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Descripción
                </div>
                <p>
                  Sigue evolucionando con un calzado hecho para ayudarte a
                  alcanzar nuevos objetivos y récords. Inspirado en el modelo de
                  vida actual, este diseño mejora la comodidad y mantiene la
                  amortiguación eficaz y el soporte seguro para ayudarte en tu
                  día a día.
                </p>
              </div>
            </div>
            <div className="BtnCart">
              <Button
                size="small"
                className="hvr-grow-shadow"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  transition: "0.5s all",
                  "&:hover": {
                    backgroundColor: "#00000099",
                  },
                  "@media (min-width: 1200px) and (max-width: 1399px)": {
                    width: 150,
                    height: 25,
                    fontSize: 10,
                  },
                }}
                onClick={addCart}
                startIcon={<ShoppingCartIcon 
                  sx={{
                    "@media (min-width: 1200px) and (max-width: 1399px)": {
                      height: 14,
                    },
                  }} 
                />}
              >
                Agregar a Carrito
              </Button>
              <Button
                size="small"
                className="hvr-grow-shadow"
                sx={{
                  width: 130,
                  backgroundColor: "black",
                  color: "white",
                  transition: "0.5s all",
                  "&:hover": {
                    backgroundColor: "#00000099",
                  },
                  "@media (min-width: 1200px) and (max-width: 1399px)": {
                    width: 90,
                    height: 25,
                    fontSize: 10,
                  },
                }}
                onClick={()=>handleAddWishList(decoded ? decoded.user.id : gId,id)}
                startIcon={<FavoriteIcon 
                  sx={{
                    "@media (min-width: 1200px) and (max-width: 1399px)": {
                      height: 14,
                    },
                  }} 
                  />}
              > 
                Wish List
              </Button>
              <Button
                size="small"
                className="hvr-grow-shadow"
                sx={{
                  width: 130,
                  backgroundColor: "black",
                  color: "white",
                  transition: "0.5s all",
                  "&:hover": {
                    backgroundColor: "#00000099",
                  },
                  "@media (min-width: 1200px) and (max-width: 1399px)": {
                    width: 90,
                    height: 25,
                    fontSize: 10,
                  },
                }}
                onClick={(e) => handleReviews(e)}
                startIcon={<RateReviewIcon 
                  sx={{
                    "@media (min-width: 1200px) and (max-width: 1399px)": {
                      height: 14,
                    },
                  }} 
                />}
              >
                Reviews
              </Button>
            </div>

            <div id="reviews">{bul && nada}</div>
          </div>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
export default ProductDetail;
