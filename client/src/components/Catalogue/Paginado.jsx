import React from "react";
import './Paginado.css';


export default function Paginado({ cardsxPage, products, paginado }) {
  const numberPage = [];
  for (let i = 1; i <= Math.ceil(products/cardsxPage); i++) {
    numberPage.push(i);
  }
  return (
    <div className="PaginadoContainer" > 
      <nav>
        <ul >
          {numberPage &&
            numberPage.map((number, index) => {
              return (
                <div className="Page" >
                  <li >
                    <a className="Number"  key ={index} onClick={() => paginado(number)}>
                      {number}
                    </a>
                  </li>
                </div>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}