import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postCategory } from '../../../redux/category/categoriesActions';

export default function FormCategory() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: ""
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

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(input)
    if (Object.values(errors).length > 0 || input.name === "") {
      alert("Faltan datos a completar")
    } else {
      const x = await postCategory(input)
      alert("Género creado correctamente");
      setInput({
        name: "",
      })
      history.push('/admin/categories')
      window.location.replace('')
    }
  }

  return (
    <div >

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
          <label >Descripción: </label>
          <input
            name="description"
            type="text"
            onChange={onInputChange}
            value={input.description} />
        </div>
        <button type='submit'   >
          Crear</button>
      </form >
      {/* <Link to="/admin" ><button >Volver</button></Link> */}
    </div >

  )

}