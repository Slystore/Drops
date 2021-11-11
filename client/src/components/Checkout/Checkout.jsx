import React, { useEffect } from "react";
import "./Checkout.css";

function Checkout({ products, data, total }) {
  useEffect(() => {
    const script = document.createElement("script");
    const attr_data_preference = document.createAttribute("data-preference-id");

    attr_data_preference.value = data.id;

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttributeNode(attr_data_preference);

    document.getElementById("form1").appendChild(script);
    return () => {
    };
  }, [data]);

  return (
    <div className="CheckoutContainer">
      <form id="form1">
        <h4>Listado de Compras</h4>
        <ul className="listShoppingCart">
          {products &&
            products.map((producto, i) => {
              return (
                <li key={i}>
                  {producto.name} - {producto.price} - {producto.quantity}-{" "}
                  {total}
                </li>
              );
            })}{" "}
        </ul>
      </form>
    </div>
  );
}

export default Checkout;
