import React from 'react';
import { useState, useEffect } from 'react';
 import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getProductsById } from './../../redux/products/productsAction';
import { createReview } from './../../redux/reviews/reviewsActions';

function validate(input) {
    let errors = {};
    if(!input.comment) errors.comment = 'Es obligatorio ingresar un comentario';
    else if(!input.rating) errors.rating = 'Es obligatorio ingresar una puntuacion';
    return errors
  };

export default function ReviewForm() {

    const params = useParams()
    const dispatch = useDispatch();
    const history = useHistory();


    //saca el id de params
  const userId = parseInt(params.userId)
  const product = parseInt(params.productId)

  const [errors, setErrors] = useState({});

  useEffect(()=>{
    //aca ejecutamos action que trae la data de ese product en particular
    dispatch(getProductsById(product))
},[dispatch])

   //Me traigo el estado de redux
   
   const {productId} =  useSelector(state => state.productReducer)


   //estados locales para almacenar data del form
    const [category, setCategory] = useState('');
    const [talle, setTalle] = useState(0)
    const [talleString, setTalleString] = useState(0)
    const [talleUi, setTalleUi] = useState([])
    const [cantidad, setCantidad] = useState(0)

    //estado local para el formulario entero
    const [input, setInput] = useState({
        user: userId,
        comment: "",
        rating: 0,
        productId: product
  })

  //variable para validar si el formulario esta completo y en funcion de eso disahabilitar el boton o no
  let prueba = !!(input.comment && input.rating)

  
    //funcion que maneja los cambios en los inputs del formulario
    const handleChangeForm = (e) => {
        if(e.target.name === 'rating' ) {
            setInput( (state) => {
                return {
                    ...state,
                    rating: Number(e.target.value)
                }
            })
            setErrors(validate({
                ...input,
                price: Number(e.target.value)
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
                [e.target.name]: e.target.value
            }))
        }   
    }
 
    // funcion que maneja el submit del formulario y que nos manda a la pagina principal
    const handleSubmit = (e) => {
        e.preventDefault();

        if(input.comment === undefined || input.rating === undefined) console.log('El formulario esta incompleto')
        else {
            console.log(input)
            dispatch(createReview(input))

            setInput({
                user: 0,
                comment: '',
                rating: 0,
                productId: 0
            })
            history.push(`/user/${userId}`)
        }
    }

  return (
    <div >

        <h5> Deja tu comentario</h5>
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <div> <img src={productId.image} alt={productId.name}/></div>

            <form onSubmit={e => handleSubmit(e)}>
                <div>
                        <textarea name='comment'onChange={handleChangeForm} placeholder='Leave your comment'/>
                        {errors.comment && (<p>{errors.comment}</p>)}
                        
                        <label> Rating <input type={'number'} min='0' max='5' name='rating' onChange={handleChangeForm}/></label> 
                        {errors.price && (<p>{errors.price}</p>)}
                </div>
                
                <button type='submit' id='submit' disabled={ prueba ?  false :  true}> Crear</button>
            </form>

        </div>
    
    </div>
)}


