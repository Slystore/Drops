import React from 'react';
import { useState } from 'react';
 import { useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {  postBrand } from '../../redux/brand/brandActions';

export default function FormBrand() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
  })
  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Nombre es requerido';
    } 
    return errors;
  };

  function onInputChange(e) {
    var objErrors = validate({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(objErrors);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })

  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0 || input.name === "") {
      alert("Faltan datos a completar")
    } else {
     dispatch(postBrand(input))
      alert("Género creado correctamente");
      setInput({
        name: "",
      })
      history.push('/admin')
      window.location.replace('')
    }
  }

  return (
    <div >

      <h5>Crear Marca</h5>
      <form onSubmit={e => handleSubmit(e)}>
        <div>

          <label >Nombre: </label>
          <input
            name="name"
            type="text"
            onChange={onInputChange}
            value={input.name} />

          {errors.name && (
            <p className="danger">{errors.name}</p>
          )}
        </div>
        <button type='submit'   >
          Crear</button>
      </form >
      {/* <Link to="/admin" ><button >Volver</button></Link> */}
    </div >

  )

}