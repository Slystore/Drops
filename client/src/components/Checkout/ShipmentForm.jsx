import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function validate(input) {
  let errors = {};
  if (!input.shippingAddress)
    errors.shippingAddress = "Es obligatorio ingresar una direccion";
  else if (!input.shippingZip)
    errors.shippingZip = "Es obligatorio ingresar una codigo postal";
  else if (!input.shippingLocated)
    errors.shippingLocated = "Es obligatorio ingresar una ubicacion";
  else if (!input.shippingCity)
    errors.shippingCity = "Es obligatorio ingresar una ciudad de envio";
  return errors;
}

export default function ShipmentForm() {
  const history = useHistory();

  let orderId = JSON.parse(localStorage.getItem("orderId"));
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    shippingAddress: "",
    shippingZip: 0,
    shippingLocated: "",
    shippingCity: "",
  });

  let prueba = !!(
    input.shippingAddress &&
    input.shippingZip !== 0 &&
    input.shippingLocated &&
    input.shippingCity
  );

  const handleChangeForm = (e) => {
    if (e.target.name === "shippingZip") {
      setInput((state) => {
        return {
          ...state,
          shippingZip: Number(e.target.value),
        };
      });
      setErrors(
        validate({
          ...input,
          shippingZip: Number(e.target.value),
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      input.shippingAddress === undefined &&
      input.shippingZip === 0 &&
      input.shippingLocated === undefined &&
      input.shippingCity === undefined
    )
       alert("El formulario esta incompleto");
    else {
      // console.log(input, orderId, "shippingform");
      try {
        const { data } = await axios.put(
          `/orders/updateOrder/${orderId}`,
          input
        );
        console.log(data);
        history.push("/pay");
      } catch (error) {
        console.log(error);
      }
      setInput({
        shippingAddress: "",
        shippingZip: 0,
        shippingLocated: "",
        shippingCity: "",
      });
    }
  };

  return (
    <div>
      <h5> Datos de Envio</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>
              {" "}
              Calle y Numero{" "}
              <input
                type="text"
                name="shippingAddress"
                onChange={handleChangeForm}
              />{" "}
            </label>
            {errors.shippingAddress && <p>{errors.shippingAddress}</p>}

            <label>
              {" "}
              Codigo Postal{" "}
              <input
                type="number"
                name="shippingZip"
                onChange={handleChangeForm}
              />{" "}
            </label>
            {errors.shippingZip && <p>{errors.shippingZip}</p>}

            <label>
              {" "}
              Localidad{" "}
              <input
                type="text"
                name="shippingLocated"
                onChange={handleChangeForm}
              />{" "}
            </label>
            {errors.shippingLocated && <p>{errors.shippingLocated}</p>}

            <label>
              {" "}
              Ciudad{" "}
              <input
                type="text"
                name="shippingCity"
                onChange={handleChangeForm}
              />
            </label>
            {errors.shippingCity && <p>{errors.shippingCity}</p>}
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
