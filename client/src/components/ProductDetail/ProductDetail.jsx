import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
  cleanDetail,
  getProductsById,
  getProductStockById,
} from "../../redux/products/productsAction";
import jwt_decode from "jwt-decode";
import { getToken } from '../../redux/users/userActions';
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RateReviewIcon from '@mui/icons-material/RateReview';
import ProductReview from "./Reviews";
import { addToCartTomi, fusionCartTomi, loadCartTomi } from "../../redux/cartTomi/cartActionTomi";
import "./ProductDetail.css";


function ProductDetail(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [size, setSize] = useState({SizeId:0});
  const { id } = props.match.params;
  const { productId } = useSelector((state) => state.productReducer);
  const { stockById } = useSelector((state) => state.productReducer);
  const {items} = useSelector(store => store.cartReducersTomi);
  let x
  if(localStorage.getItem('token')){
    x = getToken();}
    const decoded = x?jwt_decode(x): null;
    
    let [bul, setBul] = useState(false);
    
    useEffect(() => {
      dispatch(getProductsById(id));
      dispatch(getProductStockById(id));
      return () => dispatch(cleanDetail(id));
    }, [dispatch, id]);
    

  console.log('este es mi productId',productId ? productId : "");
  const prueba = document.getElementById("reviews");

  const nada =
    productId.hasOwnProperty('Reviews') &&
    productId.Reviews.map((e) => (
      <div>
        {" "}
        <ProductReview comment={e.comment} rating={e.rating} />{" "}
      </div>
    ));

  const  addCart = async (e) => {
    e.preventDefault();
    let product = items?.find( e => e.id === id)
    
    let user = decoded?decoded.user.id: null
    if(user) {
          // console.log("entrouser",user)
       await  (fusionCartTomi(id))
        await  (loadCartTomi())
        await dispatch(addToCartTomi(id, 1,
          productId.price, productId.name,productId.image, productId.Sizes))
    }
    await dispatch(addToCartTomi(id,  1,
      productId.price, productId.name,productId.image,productId.Sizes))
  }

  function handleReviews(e) {
    e.preventDefault();
    setBul(!bul);
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
              <h1 style={{lineHeight:'40px'}}> {productId.name} </h1>
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
              <div style={{ width: "70%" }}>
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
                }}
                onClick={addCart}
                startIcon={<ShoppingCartIcon />}
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
                }}
                startIcon={<FavoriteIcon />}
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
                }}
                onClick={(e) => handleReviews(e)}
                startIcon={<RateReviewIcon />}
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
