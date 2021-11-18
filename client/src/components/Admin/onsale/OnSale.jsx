import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { getBrands } from "../../../redux/brand/brandActions";
import { getCategories } from "../../../redux/category/categoriesActions";
import { getProductsWithDiscounts } from "../../../redux/products/productsAction";
import { getDiscountsByQuantity } from "../../../redux/discounts/discountsActions";
import { MdTrendingUp } from "react-icons/md";

import "./onSale.css"

const OnSale = () => {

  const dispatch = useDispatch()
  const history = useHistory();


  useEffect(() => {
    //aca ejecutamos action que trae la data de ese product en particular
    dispatch(getBrands())
    dispatch(getCategories())
  }, [dispatch])

  const [radio, setRadio] = useState()
  const [check, setCheck] = useState(true)
  const [input, setInput] = useState({
    week: false,
    day: '',
    discount: 0,
    target: []
  })
  const [input2, setInput2] = useState({
    byQuantity: false,
    quantity: 0,
    discountBQ: 0
  })

  const { brands } = useSelector(state => state.brandReducer)
  const { categories } = useSelector(state => state.categoriesReducer)
  const { productId } = useSelector(state => state.productReducer)

  const handleInput1 = (e) => {
    e.preventDefault()
    if (e.target.name === 'discount') {
      setInput({
        ...input,
        [e.target.name]: parseInt(e.target.value)
      })
    }
    else if (e.target.name === 'week') {
      setInput({
        ...input,
        [e.target.name]: true
      })
      setCheck(!check)
    }
    else if (e.target.name === 'target') {

      if (marca && marca.checked) {

        let data = brands && brands.filter(el => el.name === e.target.value)

        setInput({
          ...input,
          target: ['marca', e.target.value, data[0].id]
        })
      }
      if (categoria && categoria.checked) {
        let data = categories && categories.filter(el => el.name === e.target.value)

        setInput({
          ...input,
          target: ['categoria', e.target.value, data[0].id]
        })

      }
    }
    else {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }

  }

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
    <div >
      <div className="navButton">
        <MdTrendingUp className='iconButtonNav ' />
        <h2 className="titleOfertasNav">Ofertas</h2>
      </div>
      <form className='formOfertas' name='input1' onSubmit={handleSubmit}>
        <div className='boxOfertas'>
          <h2 className="titleOfertas">Crear oferta</h2>
          <div>
            <label> activar <input type='radio' name='week' onClick={handleInput1} /> </label>
          </div>
          <div className='blockOfertas'>
            <p className='titleInputOfertas'>Elige un dia</p>
            <select className='selectOfertas' name='day' disabled={check} onChange={handleInput1}>
              <option > Dia </option>
              <option value='lunes'> lunes</option>
              <option value='martes' >  martes</option>
              <option value='miércoles' > miércoles </option>
              <option value='jueves' > jueves </option>
              <option value='viernes' > viernes </option>
              <option value='sábado' > sábado </option>
              <option value='domingo' >  domingo </option>
            </select>

          </div>
          <div className='blockOfertas'>
            <p className='titleInputOfertas'>Descuento</p>
            <input className='inputOfertas' type='number' name='discount' min={1} max={100} onChange={handleInput1} disabled={check} />

          </div>

          <div className='blockOfertasRadio'>

            <label> Marca <input type='radio' name='descuento' id='marca' onClick={handleRadioInput} disabled={check} /> </label>
            <label> Categoria <input type='radio' name='descuento' id='categoria' onClick={handleRadioInput} disabled={check} /> </label>
          </div>

          <div className='blockOfertasCheck'>
            {
              marca && marca.checked ?
                <select className='selectOfertasCheck' name='target' onChange={handleInput1}>
                  <option> Seleccionar </option>
                  {brands && brands.map(e => <option value={e.name} id={e.id}> {e.name} </option>)}
                </select>
                :
                categoria && categoria.checked ?
                  <select className='selectOfertasCheck' name='target' onChange={handleInput1}>
                    <option> Seleccionar </option>
                    {categories && categories.map(e => <option value={e.name} > {e.name} </option>)}
                  </select>
                  :
                  null
            }

          </div>
          <div className='blockBtnOfertas'>
            <button className="btnOfertas" disabled={check}> crear oferta </button>
          </div>
        </div>

      </form>

      {/*<form name='input2' onSubmit={handleSubmit}>
                        <h2> Por Cantidad </h2>
                        <label> cantidad <input type='checkbox' name='byQuantity' onClick={handleInput2}/> </label>
                        <label> cuantos debo comprar <input type='number' name='quantity' min={1} max={10} onChange={handleInput2}/> </label>
                        <label> porcentaje sobre el prox item <input type='number' name='discountBQ' min={1} max={100} onChange={handleInput2}/> </label>
                        <button> crear oferta </button>


                </form>*/}
    </div>
  );
};

export default OnSale
