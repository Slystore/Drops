import React from 'react';
import { useState, useEffect } from 'react';
 import { useDispatch, useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {  postBrand } from '../../redux/brand/brandActions';
import { productForm, getProductsById } from './../../redux/products/productsAction';
import { getBrands } from './../../redux/brand/brandActions';
import { getCategories } from '../../redux/category/categoriesActions';
import { getSizes } from '../../redux/sizes/sizeActions';


function validate(input) {
    let errors = {};
    if(!input.name) errors.name = 'Es obligatorio ingresar un nombre';
    else if(!input.description) errors.description = 'Es obligatorio describir el plato';
    else if(!input.puntuacion || input.puntuacion > 100 || input.puntuacion < 1) errors.puntuacion = 'Es obligatorio ingresar una puntuacion del 1 al 100';
    else if(!input.salud || input.salud > 100 || input.salud < 1) errors.salud = 'Es obligatorio ingresar una puntuacion del 1 al 100';
    return errors
  };

export default function FormProductUpdate(props) {
    //saca el id de params
  const id = props.match.params.id
console.log(props)
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState('');

   //Me traigo el estado de redux de dietas
   const {brands} =  useSelector(state => state.brandReducer)
   const {categories} =  useSelector(state => state.categoriesReducer)
   const {sizes} =  useSelector(state => state.sizeReducer)
   const {productId} =  useSelector(state => state)

   useEffect(()=>{
       //aca ejecutamos action que trae la data de ese product en particular
       dispatch(getProductsById(id))
       dispatch(getBrands())
       dispatch(getCategories())
       dispatch(getSizes())
   },[dispatch])

    const [talle, setTalle] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const [input, setInput] = useState({
        // name: productId.name,
        // image: productId.image,
        // description: productId.description,
        // price: productId.price,
        // status: productId.status,
        // brand:productId.brand,
        // categories: [...productId.categories],
        // stock:[...productId.stock]
        name: 'nike air',
        image: 'Esto es una imagen',
        description: "Esto es una mega descripcion",
        price: 100,
        status: 'disponible',
        brand: 'Nike',
        categories: ['categoriaUno', 'categoriaDos'],
        stock:[['hola', 'chau'],['hola1', 'chau1']]
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
    const handleChangeCategory = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            categories: [...input.categories, e.target.value]
        })
        setCategory(e.target.value)
    }

    // funcion que maneja el option seleccionado del select y lo agrega al array dietas del form
    const agregarBrand = (e) => {
          setInput({
            ...input,
            brand:  e.target.value      
        })
    }
    // funcion que maneja el option seleccionado del select y lo agrega al array dietas del form
    const agregarDieta = (e) => {
          setInput({
            ...input,
            status:  e.target.value      
        })
    }

    const handleTalle = (e) => {
        setTalle(e.target.value)
   }

   const handleCantidad = (e) => {
       let talle = parseInt(e.target.value)
        setCantidad(talle)
   }

   //Agrega un objeto con key=talle y value=cantidad al array de input (estado local)

   const agregarStock = (e) => {
       e.preventDefault()
       setInput( {
           ...input, 
           stock: [ 
               ...input.stock,
                [`${talle}`,`${cantidad}`]
            ] })
       setCantidad(0)
      
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
                categories: [],
            })
            history.push('/')
        }
    }

    const deleteCategory = (data) => {
        setInput({
            ...input,
            categories: input.categories.filter(
                category => data !== category
            )
        })
    }

  return (
    <div >

      <h5>Crear Producto</h5>
      <form onSubmit={e => handleSubmit(e)}>

        <div>
                <label> Nombre <input type={'text'} name='name' onChange={handleChangeForm} autoComplete='off'/></label>
                {errors.name && (<p>{errors.name}</p>)}

                <label> Imagen <input type={'text'} name='image' onChange={handleChangeForm} /></label>
                {errors.image && (<p>{errors.image}</p>)}

                <textarea name='description'onChange={handleChangeForm} placeholder='Describe the product'/>
                {errors.description && (<p>{errors.description}</p>)}
                
                <label> Price <input type={'number'} name='price' onChange={handleChangeForm}/></label> 
                {errors.price && (<p>{errors.price}</p>)}
                
                <select onChange={ (e) => agregarBrand(e)}>
                    <option> Brand </option>
                    { brands && brands.map(e => <option key={e.id} value={e.name}> {e.name} </option> ) }
                </select>
                
                <select onChange={ (e) => handleChangeCategory(e)}>
                    <option> Category </option>
                    { categories && categories.map(e => <option key={e.id} value={e.name}> {e.name} </option> ) }
                </select>

                <select onChange={ (e) => agregarDieta(e)}>
                    <option> Status </option>
                    <option> Disponible </option>
                    <option> Fuera de Stock </option>
                </select>
        </div>
        
        <div>
                 <select onChange={ (e) => handleTalle(e)}>
                    <option> Size </option>
                    <option value='41'> 41 </option>
                    <option value='42'> 42 </option>
                    <option value='43'> 43 </option>
                    <option value='44'> 44 </option>
                    <option value='45'> 45 </option>
                </select>

                <label> Stock <input type={'number'} name='stock' onChange={(e) => handleCantidad(e)}/></label> 
                <button onClick={e => agregarStock(e)}> Agregar paso </button>
        </div>

        <button type='submit'> Crear</button>
      
    </form>

    <div>
        <h2> Categorias </h2>
        {
            input.categories && input.categories.map(el => {
            return(
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <p> {el} </p>
                    <button onClick={ () => deleteCategory(el) }> X </button>
                </div>
            )})
        }
    </div>

    <div>
    <h2> Stock </h2>
    {
        input.stock && input.stock.map(el => {
        return(
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <p key={el[0]}> {el[0]} </p>
                <p key={el[1]}> {el[1]} </p>
                <button onClick={ () => deleteCategory(el) }> X </button>
            </div>
        )})
    }
</div>
    </div>
    
    
    )
    
}