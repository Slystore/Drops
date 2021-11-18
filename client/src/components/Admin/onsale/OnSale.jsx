import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';

import { getBrands } from "../../../redux/brand/brandActions";
import { getCategories } from "../../../redux/category/categoriesActions";
import { getProductsWithDiscounts } from "../../../redux/products/productsAction";
import { getDiscountsByQuantity } from "../../../redux/discounts/discountsActions";

const OnSale = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, [dispatch]);

  const [, setRadio] = useState();
  const [input, setInput] = useState({
    week: false,
    day: "",
    discount: 0,
    target: [],
  });
  const [input2, setInput2] = useState({
    byQuantity: false,
    quantity: 0,
    discountBQ: 0,
  });

  const { brands } = useSelector((state) => state.brandReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);

  const handleInput1 = (e) => {
    e.preventDefault();
    if (e.target.name === "discount") {
      setInput({
        ...input,
        [e.target.name]: parseInt(e.target.value),
      });
    } else if (e.target.name === "week") {
      setInput({
        ...input,
        [e.target.name]: true,
      });
    } else if (e.target.name === "target") {
      if (marca && marca.checked) {
        let data = brands && brands.filter((el) => el.name === e.target.value);

        setInput({
          ...input,
          target: ["marca", e.target.value, data[0].id],
        });
      }
      if (categoria && categoria.checked) {
        console.log(e.target.value);
        let data =
          categories && categories.filter((el) => el.name === e.target.value);

        setInput({
          ...input,
          target: ["categoria", e.target.value, data[0].id],
        });
      }
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleRadioInput = (e) => setRadio(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.name === "input1"
      ? dispatch(getProductsWithDiscounts(input))
      : dispatch(getDiscountsByQuantity(input2));

      swal("Oferta creada correctamente", {
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      history.push('/catalogue')
  };

  let marca = document.getElementById("marca");
  let categoria = document.getElementById("categoria");

  return (
    <div>
      <div
        style={{
          height: "200px",
          width: "1000px",
          margin: "25% auto",
          border: "1px black solid",
        }}
      >
        <h2> Mapeo de ofertas </h2>
        <div>
          <form name="input1" onSubmit={handleSubmit}>
            <h2>Semanal</h2>
            <label>
              {" "}
              semanal{" "}
              <input type="checkbox" name="week" onClick={handleInput1} />{" "}
            </label>
            <select name="day" onChange={handleInput1}>
              <option> Dia </option>
              <option value="lunes"> lunes</option>
              <option value="martes"> martes</option>
              <option value="miércoles"> miércoles </option>
              <option value="jueves"> jueves </option>
              <option value="viernes"> viernes </option>
              <option value="sábado"> sábado </option>
              <option value="domingo"> domingo </option>
            </select>
            <label>
              {" "}
              Descuento{" "}
              <input
                type="number"
                name="discount"
                min={1}
                max={100}
                onChange={handleInput1}
              />{" "}
            </label>
            <label>
              {" "}
              Marca{" "}
              <input
                type="radio"
                name="descuento"
                id="marca"
                onClick={handleRadioInput}
              />{" "}
            </label>
            <label>
              {" "}
              Categoria{" "}
              <input
                type="radio"
                name="descuento"
                id="categoria"
                onClick={handleRadioInput}
              />{" "}
            </label>
            {marca && marca.checked ? (
              <select name="target" onChange={handleInput1}>
                <option> Seleccionar </option>
                {brands &&
                  brands.map((e) => (
                    <option value={e.name} id={e.id}>
                      {" "}
                      {e.name}{" "}
                    </option>
                  ))}
              </select>
            ) : categoria && categoria.checked ? (
              <select name="target" onChange={handleInput1}>
                <option> Seleccionar </option>
                {categories &&
                  categories.map((e) => (
                    <option value={e.name}> {e.name} </option>
                  ))}
              </select>
            ) : null}
            <button onSubmit={handleSubmit}> crear oferta </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnSale;
