import React from "react";
import './PaginadoMobile.css';


export default function PaginadoMobile({ cardsxPage2, products, paginado2, currPage }) {
  const numberPage2 = [];
  for (let i = 1; i <= Math.ceil(products/cardsxPage2); i++) {
    numberPage2.push(i);
  }
  return (
    <div className="PaginadoContainerMobile" > 
      <div className="PaginadoNumbersMobile">
          {numberPage2 &&
            numberPage2.map((number, index) => {
              return (
                <div className="PageMobile" key ={index} >
                    {/* <a className="NumberMobile"  onClick={() => paginado2(number)}> */}
                    <a className={ number === currPage ? "PageCurrent" : "NumberMobile"}   onClick={() => paginado2(number)} >
                      {number}
                    </a>
                </div>
              );
            })}
      </div>
    </div>
  );
}