import React from "react";
import './Paginado.css';


export default function Paginado({ cardsxPage, products, paginado, currPage }) {
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
                <div className="Page" key ={index} >
                  <li >
                    <a className={ number === currPage ? "PageCurrent" : "Number"}   onClick={() => paginado(number)}>
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