

import React from 'react';
import { useState, useEffect } from 'react';
 import { useDispatch, useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {  postBrand } from '../../redux/brand/brandActions';
import { productForm } from './../../redux/products/productsAction';


function validate(input) {
    let errors = {};
    if(!input.name) errors.name = 'Es obligatorio ingresar un nombre';
    else if(!input.description) errors.description = 'Es obligatorio describir el plato';
    else if(!input.puntuacion || input.puntuacion > 100 || input.puntuacion < 1) errors.puntuacion = 'Es obligatorio ingresar una puntuacion del 1 al 100';
    else if(!input.salud || input.salud > 100 || input.salud < 1) errors.salud = 'Es obligatorio ingresar una puntuacion del 1 al 100';
    return errors
  };

export default function FormBrand() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState('');
  const [pasosReceta, setPasosReceta] = useState('')

   //Me traigo el estado de redux de dietas
   const form =  useSelector(state => state.productForm)
   const categorias =  useSelector(state => state)

   useEffect(()=>{
       //aca ejecutamos action que trae las brands
   },[dispatch])

  const [input, setInput] = useState({
    stock: {}
  })
  

    //funcion que maneja los cambios en los inputs del formulario
    const handleChangeForm = (e) => {
        if(e.target.name === 'price') {
            setInput( (state) => {
                return {
                    ...state,
                    [e.target.name]: Number(e.target.value)
                }
            })
            setErrors(validate({
                ...input,
                [e.target.name]: Number(e.target.value)
            }))
        } else {
            setInput( (state) => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
            })
            setErrors(validate({
                ...input,
                [e.target.name]: Number(e.target.value)
            }))
        }   
    }

    //Funcion que maneja el cambio en el estado de pasosReceta en funcion de lo escrito en el input
    const handleChangePasos = (e) => {
        e.preventDefault()
        setPasosReceta(e.target.value)
    }

    //Agrega el estado pasosReceta al array de pasos en el formulario
    const agregarPaso = (e) => {
        e.preventDefault()
        setInput({
            ...form,
            pasos: [...form.pasos, pasosReceta]      
        })
        setPasosReceta('')
        document.getElementById('pasos').value = '';
    }

    // funcion que maneja el option seleccionado del select y lo agrega al array dietas del form
    const agregarDieta = (e) => {
          setInput({
            ...input,
            dietas: [...input.categories, e.target.value]      
        })
    }

    //funcion que permite eliminar alguna de las dietas seleccionadas del array de dietas del form
    const deleteDieta = (el) => {
        setInput({
            ...form,
            dietas: form.dietas.filter(dieta => el !== dieta)
        })
    }
   
    // funcion que maneja el submit del formulario y que nos manda a la pagina principal
    const handleSubmit = (e) => {
        e.preventDefault();

        if(input.name === undefined || input.description === undefined || input.price <= 0 ){
            alert('El formulario esta incompleto')
        } else {

            dispatch(productForm(input))
            setInput({
                name: "",
                image: "",
                description: "",
                price: 0,
                status: "",
                stock: {},
                brand:"",
                categories: []
            })
            history.push('/admin/createProduct21')
        }
    }

  return (
    <div >

      <h5>Crear Producto - segunda parte</h5>
      <form onSubmit={e => handleSubmit(e)}>
            <div>
                <select >
                    <option> Size </option>
                   
                 </select>

                <label> Categories <input type={'text'} name='categories' id='category' onChange={handleChangePasos} autoComplete='off'/></label>

                <button onClick={e => agregarPaso(e)}> Agregar paso </button>
              
            </div>
        </form>

        </div>
        
        
        )
        
    }
    
    
    
    
    // <div>
    // {
    //     input.stock.map(el => {
    //     return(
    //         <div>
    //             <p> {el.name} </p>
    //             <button onClick={ () => deleteDieta(el) }> X </button>
    //         </div>
    //     )})
    // }
    // </div>

     // { categories && categories.map(e => <option key={e.id} value={e.name}> {e.name} </option> ) }

    //  onChange={ (e) => handleChangeCategory(e)}