import React from "react";


export default function Paginado({ cardsxPage, products, paginado }) {
  const numberPage = [];
  for (let i = 1; i <= Math.ceil(products/cardsxPage); i++) {
    numberPage.push(i);
  }
  return (
    <div > 
      <nav>
        <ul >
          {numberPage &&
            numberPage.map((number, index) => {
              return (
                <div >
                  <li >
                    <a  key ={index} onClick={() => paginado(number)}>
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