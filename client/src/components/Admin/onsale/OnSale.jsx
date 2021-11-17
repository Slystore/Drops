import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBrands } from '../../../redux/brand/brandActions';
import { getCategories } from '../../../redux/category/categoriesActions';
import { getProductsWithDiscounts } from '../../../redux/products/productsAction';
import { getDiscountsByQuantity } from '../../../redux/discounts/discountsActions';
// import ToggleSwitch from 'toggle-switch-rn'

const OnSale = () => {

    const dispatch = useDispatch()

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
        if(e.target.name === 'discount') {
            setInput({
                ...input,
                [e.target.name]: parseInt(e.target.value)
            })
        } 
        else if(e.target.name === 'week'){
            setInput({
                ...input,
                [e.target.name]: true
            })
            setCheck(!check)
        }
        else if( e.target.name === 'target'){

            

            if(marca && marca.checked){
            
                let data = brands && brands.filter(el => el.name === e.target.value)

                setInput({
                    ...input,
                    target: ['marca', e.target.value, data[0].id]
                })
            }
            if(categoria && categoria.checked){
                console.log(e.target.value)
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
        // console.log(e.target.value)
        console.log(input)
        // console.log(document.getElementById('prueba'))
    }

    const handleInput2 = (e) => {
        e.preventDefault()
      
        if (e.target.name === 'quantity' || e.target.name === 'discountBQ'){
                setInput2({
                    ...input2,
                    [e.target.name]: parseInt(e.target.value)
                })
        }
        else if(e.target.name === 'byQuantity'){
            setInput2({
                ...input2,
                [e.target.name]: true
            })
        }
       
        console.log(input2)   
    }

    const handleRadioInput = (e) => setRadio(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.name === 'input1' ? dispatch(getProductsWithDiscounts(input)) :
        dispatch(getDiscountsByQuantity(input2))
    }

    let marca = document.getElementById('marca')
    let categoria = document.getElementById('categoria')

    return(
        <div>
            <div > 
            <h2> Ofertas </h2>
           
                <form name='input1' onSubmit={handleSubmit}>
                    <h2>Semanal</h2>
                    <label> activar <input type='radio' name='week' onClick={handleInput1}/> </label>
                    <select name='day' disabled={check} onChange={handleInput1}>
                         <option > Dia </option>
                         <option value='lunes'> lunes</option>
                         <option value='martes' >  martes</option>
                         <option value='miércoles' > miércoles </option>
                         <option value='jueves' > jueves </option>
                         <option value='viernes' > viernes </option>
                         <option value='sábado' > sábado </option>
                         <option value='domingo' >  domingo </option>
                    </select>
                   <label> Descuento <input type='number' name='discount' min={1} max={100} onChange={handleInput1} disabled={check}/> </label>
                   <label> Marca <input type='radio' name='descuento' id='marca'  onClick={handleRadioInput} disabled={check}/> </label>
                   <label> Categoria <input type='radio' name='descuento' id='categoria' onClick={handleRadioInput}  disabled={check}/> </label>
                {
                    marca && marca.checked ? 
                    <select name='target' onChange={handleInput1}>
                        <option> Seleccionar </option>
                         {brands && brands.map(e => <option value={e.name} id={e.id}> {e.name} </option>)}
                    </select>
                    : 
                    categoria && categoria.checked ?
                    <select name='target' onChange={handleInput1}>
                        <option> Seleccionar </option>
                         {categories && categories.map(e => <option value={e.name} > {e.name} </option>)}
                     </select>
                     :
                    null
                }
                <button disabled={check}> crear oferta </button>

                    
                </form>

                {/*<form name='input2' onSubmit={handleSubmit}>
                    <h2> Por Cantidad </h2>
                    <label> cantidad <input type='checkbox' name='byQuantity' onClick={handleInput2}/> </label>
                    <label> cuantos debo comprar <input type='number' name='quantity' min={1} max={10} onChange={handleInput2}/> </label>
                    <label> porcentaje sobre el prox item <input type='number' name='discountBQ' min={1} max={100} onChange={handleInput2}/> </label>
                    <button> crear oferta </button>


            </form>*/}
           
            </div>
        </div>
    )
}

export default OnSale