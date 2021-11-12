import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getProductsById } from "./../../redux/products/productsAction";
import { createReview } from "./../../redux/reviews/reviewsActions";

function validate(input) {
  let errors = {};
  if (!input.comment) errors.comment = "Es obligatorio ingresar un comentario";
  else if (!input.rating)
    errors.rating = "Es obligatorio ingresar una puntuacion";
  return errors;
}

export default function ReviewForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = parseInt(params.userId);
  const product = parseInt(params.productId);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getProductsById(product));
  }, [dispatch, product]);

  const { productId } = useSelector((state) => state.productReducer);

  const [input, setInput] = useState({
    user: userId,
    comment: "",
    rating: 0,
    productId: product,
  });

  let prueba = !!(input.comment && input.rating);

  const handleChangeForm = (e) => {
    if (e.target.name === "rating") {
      setInput((state) => {
        return {
          ...state,
          rating: Number(e.target.value),
        };
      });
      setErrors(
        validate({
          ...input,
          price: Number(e.target.value),
        })
      );
    } else {
      setInput((state) => {
        return {
          ...state,
          [e.target.name]: e.target.value,
        };
      });
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.comment === undefined || input.rating === undefined)
      console.log("El formulario esta incompleto");
    else {
      console.log(input);
      dispatch(createReview(input));

      setInput({
        user: 0,
        comment: "",
        rating: 0,
        productId: 0,
      });
      history.push(`/user/${userId}`);
    }
  };

  return (
    <div>
      <h5> Deja tu comentario</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          {" "}
          <img src={productId.image} alt={productId.name} />
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <textarea
              name="comment"
              onChange={handleChangeForm}
              placeholder="Leave your comment"
            />
            {errors.comment && <p>{errors.comment}</p>}

            <label>
              {" "}
              Rating{" "}
              <input
                type={"number"}
                min="0"
                max="5"
                name="rating"
                onChange={handleChangeForm}
              />
            </label>
            {errors.price && <p>{errors.price}</p>}
          </div>

          <button type="submit" id="submit" disabled={prueba ? false : true}>
            {" "}
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}
