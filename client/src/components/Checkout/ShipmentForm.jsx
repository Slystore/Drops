import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { VscTriangleLeft } from 'react-icons/vsc'
import './Checkout.css';

function validate(input) {
  let errors = {};
  if (!input.shippingAddress)
    errors.shippingAddress = "Es obligatorio ingresar una dirección";
  else if (!input.shippingZip)
    errors.shippingZip = "Es obligatorio ingresar un código postal";
  else if (!input.shippingLocated)
    errors.shippingLocated = "Es obligatorio ingresar una ubicación";
  else if (!input.shippingCity)
    errors.shippingCity = "Es obligatorio ingresar una ciudad de envío";
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
      console.log("El formulario esta incompleto");
    else {
      console.log(input, orderId, "shippingform");
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
    <div className="ShipmentContainer">
        <div className="ShipmentFormContainer">
            <div className="ShipmentTitle">
                <h5>Datos de Envío</h5>
            </div>
            <div className="ShipmentForm"> 
                  <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="Row">
                        <label className="LabelShipment">
                          Calle y Número
                        </label>
                        <input
                            className="InputShipment"
                            type="text"
                            name="shippingAddress"
                            onChange={handleChangeForm}
                        />
                        <div className={errors.shippingAddress ? "ErrorShipment" : ""}>
                          {errors.shippingAddress && 
                            <div>
                              <p>{errors.shippingAddress}</p>
                              <VscTriangleLeft className="ArrowLeft" />
                            </div>
                          }
                        </div>
                      </div>

                      <div className="Row">
                        <label className="LabelShipment">
                          Código Postal
                        </label>
                        <input
                            className="InputShipment"
                            type="number"
                            name="shippingZip"
                            onChange={handleChangeForm}
                        />
                        <div className={errors.shippingZip ? "ErrorShipment2" : ""}>
                          {errors.shippingZip &&
                            <div>
                              <p>{errors.shippingZip}</p>
                              <VscTriangleLeft className="ArrowLeft2" />
                            </div>
                          }
                        </div>
                      </div>

                      <div className="Row">
                        <label className="LabelShipment">
                          Localidad
                        </label>
                        <input
                          className="InputShipment"
                          type="text"
                          name="shippingLocated"
                          onChange={handleChangeForm}
                        />
                        <div className={errors.shippingLocated ? "ErrorShipment" : ""}>
                          {errors.shippingLocated &&
                            <div>
                              <p>{errors.shippingLocated}</p>
                              <VscTriangleLeft className="ArrowLeft" />
                            </div> 
                          }
                        </div>
                      </div>

                      <div className="Row">
                        <label className="LabelShipment">
                          Ciudad
                        </label>
                        <input
                            className="InputShipment"
                            type="text"
                            name="shippingCity"
                            onChange={handleChangeForm}
                        />
                        <div className={errors.shippingCity ? "ErrorShipment2" : ""}>
                          {errors.shippingCity && 
                            <div>
                              <p>{errors.shippingCity}</p>
                              <VscTriangleLeft className="ArrowLeft3" />
                            </div> 
                          }
                        </div>
                      </div>

                      <div className="Row2">
                        <button  
                          className={ prueba === true ? "ButtonFormShaipment hvr-grow-shadow" : "ButtonFormShaipmentDisabled"}
                          type="submit" id="submit" 
                          disabled={prueba ? false : true}>
                          Crear
                        </button>
                      </div>
                  </form>
            </div>

        </div>
      {/* 
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        
      </div> */}
    </div>
  );
}
